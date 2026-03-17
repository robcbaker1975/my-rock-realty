/**
 * ghl.ts
 * Narrow GHL (GoHighLevel) API handoff for My Rock Realty.
 *
 * Sends lead submissions to GHL as a third backend channel alongside
 * in-app notification and SMTP email. GHL failure does not break the
 * main submission flow.
 *
 * Required env vars:
 *   GHL_API_BASE_URL   — GHL API base URL (e.g. https://services.leadconnectorhq.com)
 *   GHL_API_KEY        — Private Integration Token / API key
 *   GHL_LOCATION_ID    — GHL location/sub-account ID (required for contact creation)
 *
 * Optional env vars:
 *   GHL_PIPELINE_MAP   — JSON string mapping form_type to pipeline ID
 *                        e.g. '{"Buyer Intake":"pipeline_abc","Seller Intake":"pipeline_def"}'
 *   GHL_STAGE_MAP      — JSON string mapping form_type to pipeline stage ID
 *                        e.g. '{"Buyer Intake":"stage_abc","Seller Intake":"stage_def"}'
 */

import type { ContactFormData } from "../contact";

/** GHL API version header — v1 Private Integration Token path */
const GHL_API_VERSION = "2021-07-28";

/**
 * Build the GHL contact payload from the LeadForm submission.
 * Maps core contact fields and packs variant-specific data into tags and notes.
 */
function buildContactPayload(data: ContactFormData, locationId: string): Record<string, unknown> {
  const formType = data.form_type || data.type || "General Inquiry";

  // Build a clean notes string from variant-specific interests + message
  const noteLines: string[] = [`Form Type: ${formType}`];
  if (data.source) noteLines.push(`Source: ${data.source}`);
  if (data.interests && data.interests.length > 0) {
    noteLines.push("", "--- Form Details ---");
    for (const item of data.interests) {
      noteLines.push(item);
    }
  }
  if (data.message) {
    noteLines.push("", "--- Message ---", data.message);
  }
  if (data.page_url) noteLines.push("", `Page URL: ${data.page_url}`);
  if (data.utm_source) noteLines.push(`UTM Source: ${data.utm_source}`);
  if (data.utm_medium) noteLines.push(`UTM Medium: ${data.utm_medium}`);
  if (data.utm_campaign) noteLines.push(`UTM Campaign: ${data.utm_campaign}`);
  if (data.referrer) noteLines.push(`Referrer: ${data.referrer}`);
  if (data.timestamp) noteLines.push(`Submitted: ${data.timestamp}`);

  // Split name into first/last for GHL contact fields
  const nameParts = (data.name || "").trim().split(/\s+/);
  const firstName = nameParts[0] || data.name || "";
  const lastName = nameParts.slice(1).join(" ") || "";

  const payload: Record<string, unknown> = {
    locationId,
    firstName,
    lastName,
    email: data.email,
    source: data.source || "My Rock Realty Website",
    tags: [formType, "website-lead"],
  };

  if (data.phone) {
    payload.phone = data.phone;
  }

  // Include notes as a single string — GHL accepts this on contact creation
  payload.customField = {
    notes: noteLines.join("\n"),
  };

  return payload;
}

/**
 * Attempt to create or update a contact in GHL.
 * Uses the upsert endpoint (POST /contacts/upsert) which creates or updates
 * based on email match, avoiding duplicates.
 */
async function upsertGHLContact(
  data: ContactFormData,
  apiBaseUrl: string,
  apiKey: string,
  locationId: string
): Promise<{ contactId: string | null; error?: string }> {
  const payload = buildContactPayload(data, locationId);

  const res = await fetch(`${apiBaseUrl}/contacts/upsert`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
      Version: GHL_API_VERSION,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "(unreadable)");
    return {
      contactId: null,
      error: `GHL contact upsert failed: HTTP ${res.status} — ${body}`,
    };
  }

  const json = (await res.json()) as { contact?: { id?: string } };
  const contactId = json?.contact?.id ?? null;
  return { contactId };
}

/**
 * Attempt to create an opportunity in GHL for the given contact.
 * Only called if pipeline and stage IDs are available via env config.
 * Skipped cleanly if config is missing — no error thrown.
 */
async function createGHLOpportunity(
  data: ContactFormData,
  contactId: string,
  apiBaseUrl: string,
  apiKey: string,
  locationId: string,
  pipelineMap: Record<string, string>,
  stageMap: Record<string, string>
): Promise<{ success: boolean; error?: string }> {
  const formType = data.form_type || data.type || "General Inquiry";
  const pipelineId = pipelineMap[formType];
  const stageId = stageMap[formType];

  if (!pipelineId || !stageId) {
    // Not a blocker — opportunity creation skipped for this form_type
    return { success: false, error: `No pipeline/stage mapping for form_type: "${formType}"` };
  }

  const opportunityPayload = {
    locationId,
    pipelineId,
    pipelineStageId: stageId,
    contactId,
    name: `${data.name} — ${formType}`,
    source: data.source || "My Rock Realty Website",
    status: "open",
  };

  const res = await fetch(`${apiBaseUrl}/opportunities/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
      Version: GHL_API_VERSION,
    },
    body: JSON.stringify(opportunityPayload),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "(unreadable)");
    return { success: false, error: `GHL opportunity creation failed: HTTP ${res.status} — ${body}` };
  }

  return { success: true };
}

/**
 * Main GHL handoff function.
 * Sends the lead to GHL as a third submission channel.
 * Returns true on success, false on any failure.
 * All errors are logged but never thrown — GHL failure does not break the main flow.
 */
export async function sendToGHL(data: ContactFormData): Promise<boolean> {
  const apiBaseUrl = (process.env.GHL_API_BASE_URL || "").replace(/\/$/, "");
  const apiKey = process.env.GHL_API_KEY || "";
  const locationId = process.env.GHL_LOCATION_ID || "";

  if (!apiBaseUrl || !apiKey || !locationId) {
    console.warn("[GHL] Skipped — GHL_API_BASE_URL, GHL_API_KEY, or GHL_LOCATION_ID not configured.");
    return false;
  }

  // Parse optional pipeline/stage maps from env
  let pipelineMap: Record<string, string> = {};
  let stageMap: Record<string, string> = {};

  try {
    if (process.env.GHL_PIPELINE_MAP) {
      pipelineMap = JSON.parse(process.env.GHL_PIPELINE_MAP);
    }
    if (process.env.GHL_STAGE_MAP) {
      stageMap = JSON.parse(process.env.GHL_STAGE_MAP);
    }
  } catch (err) {
    console.warn("[GHL] Failed to parse GHL_PIPELINE_MAP or GHL_STAGE_MAP — opportunity creation skipped.", err);
  }

  // Step 1: Upsert contact
  const { contactId, error: contactError } = await upsertGHLContact(data, apiBaseUrl, apiKey, locationId);

  if (contactError || !contactId) {
    console.error(`[GHL] Contact upsert failed: ${contactError ?? "No contact ID returned"}`);
    return false;
  }

  console.log(`[GHL] Contact upserted: ${contactId} for ${data.email} (${data.form_type || data.type})`);

  // Step 2: Create opportunity if pipeline/stage config is available
  if (Object.keys(pipelineMap).length > 0 && Object.keys(stageMap).length > 0) {
    const { success: oppSuccess, error: oppError } = await createGHLOpportunity(
      data,
      contactId,
      apiBaseUrl,
      apiKey,
      locationId,
      pipelineMap,
      stageMap
    );

    if (!oppSuccess) {
      // Log but do not fail — opportunity creation is best-effort in v1
      console.warn(`[GHL] Opportunity creation skipped or failed: ${oppError}`);
    } else {
      console.log(`[GHL] Opportunity created for contact: ${contactId}`);
    }
  } else {
    console.log("[GHL] No pipeline/stage map configured — opportunity creation skipped.");
  }

  return true;
}
