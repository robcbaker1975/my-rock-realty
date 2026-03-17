/**
 * LeadForm.tsx
 * Reusable on-site lead capture form for myrockhomes.com.
 *
 * Supports 7 form variants via the `variant` prop:
 *   buyer | seller | pcs | workshop | referral | coaching | agent
 *
 * All variants share:
 * - One shared submission path (trpc.contact.submit)
 * - Hidden source-aware fields (form_type, source, page_url, page_title, utm_*, referrer, timestamp)
 * - Consistent styling matching the site's design system
 *
 * Usage:
 *   <LeadForm variant="buyer" source="Denver Homes for Sale" />
 *   <LeadForm variant="pcs" source="Military Relocation" />
 *   <LeadForm variant="agent" source="For Colorado Agents" />
 *
 * Do not add new variants here without updating formVariants.ts and the server schema.
 */

import { useState, useEffect } from "react";
import { trpc } from "@/lib/trpc";
import { FORM_VARIANTS, type FormVariant } from "@/lib/formVariants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, Loader2 } from "lucide-react";

interface LeadFormProps {
  /** Which form variant to render */
  variant: FormVariant;
  /**
   * Human-readable source label for attribution.
   * Should match the page name, e.g. "Denver Homes for Sale", "Coaching", "Military Relocation"
   */
  source: string;
  /** Optional override for the form title */
  titleOverride?: string;
  /** Optional override for the form subtitle */
  subtitleOverride?: string;
  /** Optional CSS class for the outer container */
  className?: string;
  /**
   * Set to true when the form is placed on a dark background (bg-charcoal).
   * Switches title, subtitle, and label text to cream-toned colors for readability.
   */
  dark?: boolean;
}

/** Collect UTM params and referrer from the current browser context */
function collectMetadata() {
  if (typeof window === "undefined") {
    return { page_url: "", page_title: "", utm_source: "", utm_medium: "", utm_campaign: "", referrer: "" };
  }
  const params = new URLSearchParams(window.location.search);
  return {
    page_url: window.location.href,
    page_title: document.title,
    utm_source: params.get("utm_source") || "",
    utm_medium: params.get("utm_medium") || "",
    utm_campaign: params.get("utm_campaign") || "",
    referrer: document.referrer || "",
  };
}

export default function LeadForm({
  variant,
  source,
  titleOverride,
  subtitleOverride,
  className = "",
  dark = false,
}: LeadFormProps) {
  const config = FORM_VARIANTS[variant];

  // Visible field state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  // Buyer
  const [propertyType, setPropertyType] = useState("");
  // Seller
  const [propertyAddress, setPropertyAddress] = useState("");
  const [sellingTimeline, setSellingTimeline] = useState("");
  // PCS
  const [branch, setBranch] = useState("");
  const [baseDutyStation, setBaseDutyStation] = useState("");
  const [pcsTimeline, setPcsTimeline] = useState("");
  // Workshop
  const [workshopInterest, setWorkshopInterest] = useState("");
  // Referral
  const [referralNeed, setReferralNeed] = useState("");
  const [referralMarket, setReferralMarket] = useState("");
  // Coaching / Agent
  const [experienceLevel, setExperienceLevel] = useState("");
  const [coachingInterest, setCoachingInterest] = useState("");
  const [marketsOfInterest, setMarketsOfInterest] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const contactMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      setError(null);
    },
    onError: (err) => {
      setError(err.message || "Something went wrong. Please try again.");
    },
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const meta = collectMetadata();

    // Build interests array from variant-specific fields
    const interests: string[] = [];
    if (propertyType) interests.push(`Property Type: ${propertyType}`);
    if (propertyAddress) interests.push(`Property Address/Area: ${propertyAddress}`);
    if (sellingTimeline) interests.push(`Selling Timeline: ${sellingTimeline}`);
    if (branch) interests.push(`Branch: ${branch}`);
    if (baseDutyStation) interests.push(`Base/Duty Station: ${baseDutyStation}`);
    if (pcsTimeline) interests.push(`PCS Timeline: ${pcsTimeline}`);
    if (workshopInterest) interests.push(`Workshop Interest: ${workshopInterest}`);
    if (referralNeed) interests.push(`Referral Need: ${referralNeed}`);
    if (referralMarket) interests.push(`Referral Market: ${referralMarket}`);
    if (experienceLevel) interests.push(`Experience Level: ${experienceLevel}`);
    if (coachingInterest) interests.push(`Coaching Interest: ${coachingInterest}`);
    if (marketsOfInterest) interests.push(`Markets of Interest: ${marketsOfInterest}`);

    // Build the full payload including hidden source-aware fields
    const payload = {
      name,
      email,
      phone: phone || undefined,
      type: config.form_type,
      interests,
      message: message || undefined,
      source,
      // Hidden attribution fields — packed into the message for v1 email delivery
      // In a future GHL direct integration pass, these will map to GHL contact fields
      form_type: config.form_type,
      page_url: meta.page_url,
      page_title: meta.page_title,
      utm_source: meta.utm_source,
      utm_medium: meta.utm_medium,
      utm_campaign: meta.utm_campaign,
      referrer: meta.referrer,
      timestamp: new Date().toISOString(),
    };

    contactMutation.mutate(payload);
  }

  if (submitted) {
    return (
      <div className={`flex flex-col items-center justify-center py-10 text-center ${className}`}>
        <CheckCircle className="w-12 h-12 text-[#C9A96E] mb-4" />
        <p className={`text-lg font-semibold ${dark ? "text-[#F5F0EB]" : "text-[#292524]"}`}>{config.successMessage}</p>
      </div>
    );
  }

  const title = titleOverride ?? config.title;
  const subtitle = subtitleOverride ?? config.subtitle;
  const f = config.fields;

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col gap-4 ${dark ? "text-[#F5F0EB]" : ""} ${className}`}>
      {title && (
        <div className="mb-2">
          <h3 className={`text-xl font-semibold ${dark ? "text-[#F5F0EB]" : "text-[#292524]"}`}>{title}</h3>
          {subtitle && <p className={`text-sm mt-1 ${dark ? "text-[#F5F0EB]/70" : "text-[#6b6560]"}`}>{subtitle}</p>}
        </div>
      )}

      {/* Name */}
      <div className="flex flex-col gap-1">
        <Label htmlFor="lf-name">Name <span className="text-red-500">*</span></Label>
        <Input
          id="lf-name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          placeholder="Your full name"
          autoComplete="name"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1">
        <Label htmlFor="lf-email">Email <span className="text-red-500">*</span></Label>
        <Input
          id="lf-email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          placeholder="your@email.com"
          autoComplete="email"
        />
      </div>

      {/* Phone */}
      {f.phone && (
        <div className="flex flex-col gap-1">
          <Label htmlFor="lf-phone">Phone</Label>
          <Input
            id="lf-phone"
            type="tel"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder="(720) 000-0000"
            autoComplete="tel"
          />
        </div>
      )}

      {/* Buyer: Property Type */}
      {f.propertyType && (
        <div className="flex flex-col gap-1">
          <Label htmlFor="lf-property-type">Property Type</Label>
          <Select value={propertyType} onValueChange={setPropertyType}>
            <SelectTrigger id="lf-property-type">
              <SelectValue placeholder="Select property type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Residential">Residential</SelectItem>
              <SelectItem value="Land">Land</SelectItem>
              <SelectItem value="Investment">Investment</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      {/* Seller: Property Address or Area */}
      {f.propertyAddress && (
        <div className="flex flex-col gap-1">
          <Label htmlFor="lf-property-address">Property Address or Area</Label>
          <Input
            id="lf-property-address"
            type="text"
            value={propertyAddress}
            onChange={e => setPropertyAddress(e.target.value)}
            placeholder="e.g. 123 Main St, Denver or South Denver area"
          />
        </div>
      )}

      {/* Seller: Selling Timeline */}
      {f.sellingTimeline && (
        <div className="flex flex-col gap-1">
          <Label htmlFor="lf-selling-timeline">Selling Timeline</Label>
          <Select value={sellingTimeline} onValueChange={setSellingTimeline}>
            <SelectTrigger id="lf-selling-timeline">
              <SelectValue placeholder="When are you looking to sell?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ASAP">As soon as possible</SelectItem>
              <SelectItem value="1-3 months">1–3 months</SelectItem>
              <SelectItem value="3-6 months">3–6 months</SelectItem>
              <SelectItem value="6-12 months">6–12 months</SelectItem>
              <SelectItem value="Just exploring">Just exploring</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      {/* PCS: Branch */}
      {f.branch && (
        <div className="flex flex-col gap-1">
          <Label htmlFor="lf-branch">Branch <span className="text-red-500">*</span></Label>
          <Select value={branch} onValueChange={setBranch} required>
            <SelectTrigger id="lf-branch">
              <SelectValue placeholder="Select your branch" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Army">Army</SelectItem>
              <SelectItem value="Navy">Navy</SelectItem>
              <SelectItem value="Air Force">Air Force</SelectItem>
              <SelectItem value="Marines">Marines</SelectItem>
              <SelectItem value="Space Force">Space Force</SelectItem>
              <SelectItem value="Coast Guard">Coast Guard</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      {/* PCS: Base / Duty Station */}
      {f.baseDutyStation && (
        <div className="flex flex-col gap-1">
          <Label htmlFor="lf-base">Base / Duty Station <span className="text-red-500">*</span></Label>
          <Input
            id="lf-base"
            type="text"
            value={baseDutyStation}
            onChange={e => setBaseDutyStation(e.target.value)}
            placeholder="e.g. Fort Carson, Peterson SFB"
            required
          />
        </div>
      )}

      {/* PCS: Timeline */}
      {f.pcsTimeline && (
        <div className="flex flex-col gap-1">
          <Label htmlFor="lf-pcs-timeline">Relocation Timeline <span className="text-red-500">*</span></Label>
          <Select value={pcsTimeline} onValueChange={setPcsTimeline} required>
            <SelectTrigger id="lf-pcs-timeline">
              <SelectValue placeholder="When do you need to relocate?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Within 30 days">Within 30 days</SelectItem>
              <SelectItem value="1-3 months">1–3 months</SelectItem>
              <SelectItem value="3-6 months">3–6 months</SelectItem>
              <SelectItem value="6+ months">6+ months</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      {/* Workshop: Interest / Topic */}
      {f.workshopInterest && (
        <div className="flex flex-col gap-1">
          <Label htmlFor="lf-workshop-interest">Workshop Interest / Topic</Label>
          <Input
            id="lf-workshop-interest"
            type="text"
            value={workshopInterest}
            onChange={e => setWorkshopInterest(e.target.value)}
            placeholder="e.g. First-time homebuying, Investment properties"
          />
        </div>
      )}

      {/* Referral: Need / Context */}
      {f.referralNeed && (
        <div className="flex flex-col gap-1">
          <Label htmlFor="lf-referral-need">Referral Need / Context</Label>
          <Input
            id="lf-referral-need"
            type="text"
            value={referralNeed}
            onChange={e => setReferralNeed(e.target.value)}
            placeholder="e.g. Buyer looking in Denver, Seller in Boulder"
          />
        </div>
      )}

      {/* Referral: Market / Location */}
      {f.referralMarket && (
        <div className="flex flex-col gap-1">
          <Label htmlFor="lf-referral-market">Market / Location</Label>
          <Input
            id="lf-referral-market"
            type="text"
            value={referralMarket}
            onChange={e => setReferralMarket(e.target.value)}
            placeholder="e.g. Denver, Colorado Springs, Fort Collins"
          />
        </div>
      )}

      {/* Coaching / Agent: Experience Level */}
      {f.experienceLevel && (
        <div className="flex flex-col gap-1">
          <Label htmlFor="lf-experience-level">Experience Level</Label>
          <Select value={experienceLevel} onValueChange={setExperienceLevel}>
            <SelectTrigger id="lf-experience-level">
              <SelectValue placeholder="Select your experience level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="New Agent">New Agent</SelectItem>
              <SelectItem value="1-3 years">1–3 years</SelectItem>
              <SelectItem value="3-5 years">3–5 years</SelectItem>
              <SelectItem value="5+ years">5+ years</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      {/* Coaching: Coaching Interest */}
      {f.coachingInterest && (
        <div className="flex flex-col gap-1">
          <Label htmlFor="lf-coaching-interest">Coaching Interest</Label>
          <Input
            id="lf-coaching-interest"
            type="text"
            value={coachingInterest}
            onChange={e => setCoachingInterest(e.target.value)}
            placeholder="e.g. Lead generation, Buyer consultations, Business planning"
          />
        </div>
      )}

      {/* Agent: Markets of Interest */}
      {f.marketsOfInterest && (
        <div className="flex flex-col gap-1">
          <Label htmlFor="lf-markets">Markets of Interest</Label>
          <Input
            id="lf-markets"
            type="text"
            value={marketsOfInterest}
            onChange={e => setMarketsOfInterest(e.target.value)}
            placeholder="e.g. Denver, Boulder, Colorado Springs"
          />
        </div>
      )}

      {/* Message */}
      {f.message && (
        <div className="flex flex-col gap-1">
          <Label htmlFor="lf-message">Message / Questions</Label>
          <Textarea
            id="lf-message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Anything else you'd like us to know?"
            rows={4}
          />
        </div>
      )}

      {/* Error */}
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}

      {/* Submit */}
      <Button
        type="submit"
        disabled={contactMutation.isPending}
        className="w-full bg-[#C9A96E] hover:bg-[#b8954f] text-white font-semibold py-3"
      >
        {contactMutation.isPending ? (
          <span className="flex items-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </span>
        ) : (
          config.submitLabel
        )}
      </Button>
    </form>
  );
}
