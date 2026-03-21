import nodemailer from "nodemailer";
import { notifyOwner } from "./_core/notification";
import { sendToGHL, type GHLDiag } from "./_core/ghl";

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  type?: string;
  form_type?: string;
  interests: string[];
  message?: string;
  // Attribution fields
  source?: string;
  page_url?: string;
  page_title?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  referrer?: string;
  timestamp?: string;
  // SMS consent fields — maps to GHL custom contact checkbox fields
  smsTransactionalConsent?: boolean; // MRR Transactional SMS Consent
  smsMarketingConsent?: boolean;     // MRR Marketing SMS Consent
}

export interface ContactResult {
  success: boolean;
  /** Only present when STAGING_DIAG=true — never sent in production */
  _diag?: {
    ghl: GHLDiag;
    emailAttempted: boolean;
    emailSuccess: boolean;
  };
}

/**
 * Resolve the best form type label from the payload.
 * Prefers form_type, falls back to type, then "General Inquiry".
 */
function resolveFormType(data: ContactFormData): string {
  return data.form_type || data.type || "General Inquiry";
}

/**
 * Build a nicely formatted plain-text email body from the contact form submission.
 */
function buildEmailBody(data: ContactFormData): string {
  const formType = resolveFormType(data);
  const lines: string[] = [
    `New Lead Submission — My Rock Realty`,
    ``,
    `Form Type: ${formType}`,
    `Name: ${data.name}`,
    `Email: ${data.email}`,
  ];

  if (data.phone) {
    lines.push(`Phone: ${data.phone}`);
  }

  if (data.source) {
    lines.push(`Page: ${data.source}`);
  }

  // Variant-specific fields (packed into interests array by frontend)
  if (data.interests && data.interests.length > 0) {
    lines.push(``, `--- Form Details ---`);
    for (const item of data.interests) {
      lines.push(item);
    }
  }

  if (data.message) {
    lines.push(``, `--- Message ---`, data.message);
  }

  // Attribution section
  const hasAttribution =
    data.page_url || data.utm_source || data.utm_medium || data.utm_campaign || data.referrer;

  if (hasAttribution) {
    lines.push(``, `--- Attribution ---`);
    if (data.page_url) lines.push(`Page URL: ${data.page_url}`);
    if (data.utm_source) lines.push(`UTM Source: ${data.utm_source}`);
    if (data.utm_medium) lines.push(`UTM Medium: ${data.utm_medium}`);
    if (data.utm_campaign) lines.push(`UTM Campaign: ${data.utm_campaign}`);
    if (data.referrer) lines.push(`Referrer: ${data.referrer}`);
    if (data.timestamp) lines.push(`Submitted: ${data.timestamp}`);
  }

  lines.push(``, `---`, `Sent from MyRockRealty.com`);
  return lines.join("\n");
}

/**
 * Build a nicely formatted HTML email body from the contact form submission.
 */
function buildHtmlBody(data: ContactFormData): string {
  const formType = resolveFormType(data);

  const row = (label: string, value: string, bg = false) => `
        <tr${bg ? ' style="background: #f9f7f4;"' : ""}>
          <td style="padding: 8px 12px; font-weight: bold; color: #555; width: 160px; vertical-align: top;">${label}</td>
          <td style="padding: 8px 12px; color: #292524;">${value}</td>
        </tr>`;

  let html = `
    <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto;">
      <h2 style="color: #292524; border-bottom: 2px solid #C9A96E; padding-bottom: 10px;">
        New Lead: ${formType}
      </h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        ${row("Form Type", formType)}
        ${row("Name", data.name, true)}
        ${row("Email", `<a href="mailto:${data.email}">${data.email}</a>`)}`;

  if (data.phone) {
    html += row("Phone", `<a href="tel:${data.phone}">${data.phone}</a>`, true);
  }

  if (data.source) {
    html += row("Page / Source", data.source);
  }

  html += `
      </table>`;

  // Variant-specific fields
  if (data.interests && data.interests.length > 0) {
    html += `
      <h3 style="color: #292524; margin-top: 24px; margin-bottom: 8px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">Form Details</h3>
      <table style="width: 100%; border-collapse: collapse;">`;
    let altRow = false;
    for (const item of data.interests) {
      const [label, ...rest] = item.split(": ");
      html += row(label, rest.join(": "), altRow);
      altRow = !altRow;
    }
    html += `</table>`;
  }

  // Message
  if (data.message) {
    html += `
      <div style="margin-top: 20px; padding: 16px; background: #f9f7f4; border-left: 3px solid #C9A96E; border-radius: 4px;">
        <p style="margin: 0 0 8px 0; font-weight: bold; color: #555;">Message:</p>
        <p style="margin: 0; color: #292524; white-space: pre-wrap;">${data.message}</p>
      </div>`;
  }

  // Attribution
  const hasAttribution =
    data.page_url || data.utm_source || data.utm_medium || data.utm_campaign || data.referrer;

  if (hasAttribution) {
    html += `
      <h3 style="color: #292524; margin-top: 24px; margin-bottom: 8px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">Attribution</h3>
      <table style="width: 100%; border-collapse: collapse; font-size: 12px; color: #888;">`;
    if (data.page_url) html += row("Page URL", `<a href="${data.page_url}" style="color: #888;">${data.page_url}</a>`);
    if (data.utm_source) html += row("UTM Source", data.utm_source, true);
    if (data.utm_medium) html += row("UTM Medium", data.utm_medium);
    if (data.utm_campaign) html += row("UTM Campaign", data.utm_campaign, true);
    if (data.referrer) html += row("Referrer", data.referrer);
    if (data.timestamp) html += row("Submitted", data.timestamp, true);
    html += `</table>`;
  }

  html += `
      <p style="margin-top: 24px; font-size: 12px; color: #999;">
        Sent from MyRockRealty.com
      </p>
    </div>`;

  return html;
}

/**
 * Send the lead form submission via email and in-app notification.
 * Supports all 7 form variants via form_type routing.
 * When STAGING_DIAG=true, returns a _diag field with GHL and email result details.
 */
export async function sendContactEmail(data: ContactFormData): Promise<ContactResult> {
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const recipientEmails = process.env.CONTACT_EMAILS || "robbakerre@gmail.com,7203636544@vtext.com";
  const stagingDiag = process.env.STAGING_DIAG === "true";

  const formType = resolveFormType(data);
  const sourceLabel = data.source ? ` [${data.source}]` : "";
  const subjectLine = `New Lead: ${data.name} — ${formType}${sourceLabel}`;

  console.log(`[Contact] Submission received: formType="${formType}" name="${data.name}" email="${data.email}" source="${data.source || "(none)"}"`);

  // In-app notification to the project owner
  try {
    await notifyOwner({
      title: subjectLine,
      content: buildEmailBody(data),
    });
  } catch (err) {
    console.warn("[Contact] Owner notification failed:", err);
  }

  // GHL handoff — third channel, runs after notification, does not block submission
  console.log("[Contact] GHL handoff: starting");
  let ghlDiag: GHLDiag = { status: "skipped", reason: "not run" };
  try {
    ghlDiag = await sendToGHL(data);
    console.log(`[Contact] GHL handoff: completed status=${ghlDiag.status}`);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    ghlDiag = { status: "error", reason: msg };
    console.error("[Contact] GHL handoff threw unexpectedly:", err);
  }

  // Email delivery via SMTP if configured
  let emailAttempted = false;
  let emailSuccess = false;

  if (smtpUser && smtpPass) {
    emailAttempted = true;
    console.log(`[Contact] Email: attempting SMTP send to "${recipientEmails}"`);
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"My Rock Realty" <${smtpUser}>`,
        to: recipientEmails,
        replyTo: data.email,
        subject: subjectLine,
        text: buildEmailBody(data),
        html: buildHtmlBody(data),
      });

      emailSuccess = true;
      console.log(`[Contact] Email: sent OK — formType="${formType}" from "${data.name}" <${data.email}>`);
      console.log(`[Contact] Submission complete: result=true`);

      return {
        success: true,
        ...(stagingDiag ? { _diag: { ghl: ghlDiag, emailAttempted, emailSuccess } } : {}),
      };
    } catch (err) {
      console.error("[Contact] Email: send failed:", err);
      console.log(`[Contact] Submission complete: result=false`);
      return {
        success: false,
        ...(stagingDiag ? { _diag: { ghl: ghlDiag, emailAttempted, emailSuccess } } : {}),
      };
    }
  } else {
    console.warn("[Contact] Email: SMTP not configured (SMTP_USER/SMTP_PASS missing) — submission logged via notification only.");
    console.log(`[Contact] Submission complete: result=true (no SMTP)`);
    return {
      success: true,
      ...(stagingDiag ? { _diag: { ghl: ghlDiag, emailAttempted, emailSuccess } } : {}),
    };
  }
}
