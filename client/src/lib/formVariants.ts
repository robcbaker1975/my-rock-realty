/**
 * formVariants.ts
 * Defines the 7 supported form variants for myrockhomes.com.
 * Each variant specifies which visible fields to show, the form title/subtitle,
 * and the form_type value used for routing and attribution.
 *
 * Architecture: one reusable form component, multiple variants.
 * Do not add new variants without updating the server-side schema.
 */

export type FormVariant =
  | "buyer"
  | "seller"
  | "pcs"
  | "workshop"
  | "referral"
  | "coaching"
  | "agent";

export interface SmsConsentConfig {
  /** Whether to show the transactional SMS consent checkbox */
  transactional: boolean;
  /** Whether to show the marketing SMS consent checkbox */
  marketing: boolean;
}

export interface FormVariantConfig {
  /** Internal form type identifier — sent as form_type hidden field */
  form_type: string;
  /** Human-readable title shown above the form */
  title: string;
  /** Optional subtitle shown below the title */
  subtitle?: string;
  /** Submit button label */
  submitLabel: string;
  /** Success message shown after submission */
  successMessage: string;
  /** Which SMS consent checkboxes to show */
  smsConsent: SmsConsentConfig;
  /** Which optional visible fields to show */
  fields: {
    phone: boolean;
    propertyType: boolean;       // Buyer: Residential / Land / Investment
    propertyAddress: boolean;    // Seller: address or area
    sellingTimeline: boolean;    // Seller: timeline to sell
    branch: boolean;             // PCS: military branch
    baseDutyStation: boolean;    // PCS: base or duty station
    pcsTimeline: boolean;        // PCS: relocation timeline
    workshopInterest: boolean;   // Workshop: topic/interest
    referralNeed: boolean;       // Referral: need/context
    referralMarket: boolean;     // Referral: market/location
    experienceLevel: boolean;    // Coaching / Agent: experience level
    coachingInterest: boolean;   // Coaching: specific interest
    marketsOfInterest: boolean;  // Agent: markets of interest
    message: boolean;
  };
}

export const FORM_VARIANTS: Record<FormVariant, FormVariantConfig> = {
  buyer: {
    form_type: "Buyer Intake",
    title: "Let's Find Your Home",
    subtitle: "Tell us a little about what you're looking for.",
    submitLabel: "Send My Inquiry",
    successMessage: "Thank you! Rob will be in touch with you shortly.",
    smsConsent: { transactional: true, marketing: true },
    fields: {
      phone: true,
      propertyType: true,
      propertyAddress: false,
      sellingTimeline: false,
      branch: false,
      baseDutyStation: false,
      pcsTimeline: false,
      workshopInterest: false,
      referralNeed: false,
      referralMarket: false,
      experienceLevel: false,
      coachingInterest: false,
      marketsOfInterest: false,
      message: true,
    },
  },

  seller: {
    form_type: "Seller Intake",
    title: "Let's Talk About Selling",
    subtitle: "Share a few details and Rob will reach out to discuss your options.",
    submitLabel: "Send My Inquiry",
    successMessage: "Thank you! Rob will be in touch with you shortly.",
    smsConsent: { transactional: true, marketing: true },
    fields: {
      phone: true,
      propertyType: false,
      propertyAddress: true,
      sellingTimeline: true,
      branch: false,
      baseDutyStation: false,
      pcsTimeline: false,
      workshopInterest: false,
      referralNeed: false,
      referralMarket: false,
      experienceLevel: false,
      coachingInterest: false,
      marketsOfInterest: false,
      message: true,
    },
  },

  pcs: {
    form_type: "PCS Relocation",
    title: "PCS Relocation Inquiry",
    subtitle: "We specialize in military relocations. Let us help make your move easier.",
    submitLabel: "Send My Inquiry",
    successMessage: "Thank you! Rob will be in touch with you shortly.",
    smsConsent: { transactional: true, marketing: true },
    fields: {
      phone: true,
      propertyType: false,
      propertyAddress: false,
      sellingTimeline: false,
      branch: true,
      baseDutyStation: true,
      pcsTimeline: true,
      workshopInterest: false,
      referralNeed: false,
      referralMarket: false,
      experienceLevel: false,
      coachingInterest: false,
      marketsOfInterest: false,
      message: true,
    },
  },

  workshop: {
    form_type: "Workshop Intake",
    title: "Reserve Your Spot",
    subtitle: "Interested in attending a homebuying workshop? Let us know.",
    submitLabel: "Reserve My Spot",
    successMessage: "Thank you! We'll follow up with workshop details shortly.",
    smsConsent: { transactional: true, marketing: true },
    fields: {
      phone: true,
      propertyType: false,
      propertyAddress: false,
      sellingTimeline: false,
      branch: false,
      baseDutyStation: false,
      pcsTimeline: false,
      workshopInterest: true,
      referralNeed: false,
      referralMarket: false,
      experienceLevel: false,
      coachingInterest: false,
      marketsOfInterest: false,
      message: true,
    },
  },

  referral: {
    form_type: "Referral Intake",
    title: "Submit a Referral",
    subtitle: "Know someone who needs help buying or selling? We'd love to help.",
    submitLabel: "Submit Referral",
    successMessage: "Thank you for the referral! We'll follow up shortly.",
    smsConsent: { transactional: true, marketing: false },
    fields: {
      phone: true,
      propertyType: false,
      propertyAddress: false,
      sellingTimeline: false,
      branch: false,
      baseDutyStation: false,
      pcsTimeline: false,
      workshopInterest: false,
      referralNeed: true,
      referralMarket: true,
      experienceLevel: false,
      coachingInterest: false,
      marketsOfInterest: false,
      message: true,
    },
  },

  coaching: {
    form_type: "Coaching Intake",
    title: "Real Estate Coaching Inquiry",
    subtitle: "Ready to take your real estate career to the next level? Let's connect.",
    submitLabel: "Send My Inquiry",
    successMessage: "Thank you! Rob will be in touch with you shortly.",
    smsConsent: { transactional: true, marketing: true },
    fields: {
      phone: true,
      propertyType: false,
      propertyAddress: false,
      sellingTimeline: false,
      branch: false,
      baseDutyStation: false,
      pcsTimeline: false,
      workshopInterest: false,
      referralNeed: false,
      referralMarket: false,
      experienceLevel: true,
      coachingInterest: true,
      marketsOfInterest: false,
      message: true,
    },
  },

  agent: {
    form_type: "Agent Lead Generation",
    title: "Join Our Team",
    subtitle: "Interested in working with My Rock Realty? Tell us about yourself.",
    submitLabel: "Send My Inquiry",
    successMessage: "Thank you! We'll be in touch about opportunities with our team.",
    smsConsent: { transactional: true, marketing: false },
    fields: {
      phone: true,
      propertyType: false,
      propertyAddress: false,
      sellingTimeline: false,
      branch: false,
      baseDutyStation: false,
      pcsTimeline: false,
      workshopInterest: false,
      referralNeed: false,
      referralMarket: false,
      experienceLevel: true,
      coachingInterest: false,
      marketsOfInterest: true,
      message: true,
    },
  },
};
