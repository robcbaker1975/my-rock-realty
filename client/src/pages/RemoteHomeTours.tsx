/**
 * Remote Home Tours — PCS Relocation Tour Support — My Rock Realty
 * /military-relocation/remote-home-tours/
 * Design: Front Range Modern — matches existing site design system
 * Palette: Warm charcoal (#292524), cream (#F5F0EB), antique gold (#C9A96E)
 * Typography: Outfit (display) + Libre Franklin (body)
 * Intent: PCS rental assistance / relocation tour support / pre-arrival housing evaluation
 */
import { useState } from "react";
import SeoHead from "@/components/seo/SeoHead";
import Navbar from "@/components/Navbar";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  MapPin,
  Home,
  ChevronDown,
  CheckCircle,
  Compass,
  Users,
} from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/denver-rowhouses-hero_2f59d4ac.jpg";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "What exactly happens during a tour session?",
    answer:
      "Each tour is a structured showing session — in-person property access and guided walkthrough where available, or a 15–30 minute virtual or recorded tour support session where in-person access is not available. Rob provides neighborhood context, market guidance, and practical relocation considerations to help you evaluate each property.",
  },
  {
    question: "Can I use tours for both rental properties and homes for purchase?",
    answer:
      "Yes. Tour support is available for PCS families evaluating rental options, homes for purchase, or both. The goal is to help you make a well-informed housing decision before you arrive — regardless of whether you plan to rent or buy.",
  },
  {
    question: "What areas does this service cover?",
    answer:
      "Tour support is available within a 25-mile radius of downtown Denver and a 25-mile radius of downtown Colorado Springs — covering Fort Carson, Peterson Space Force Base, Schriever Space Force Base, the U.S. Air Force Academy, and Buckley Space Force Base. Properties outside the standard service area may be available by custom quote.",
  },
  {
    question: "Does this service include representation or lease negotiation?",
    answer:
      "No. This is a tour support and guidance service only. It does not create a tenant representation relationship, buyer representation relationship, agency relationship, or any brokerage relationship. Lease negotiation, application assistance, and approval guarantees are not included. You remain unrepresented unless you sign a separate written agreement with My Rock Realty.",
  },
  {
    question: "How do I schedule tours after purchasing a package?",
    answer:
      "After purchasing, you'll coordinate directly with Rob to schedule your showing sessions. Rob makes reasonable efforts to accommodate requests within 5–7 business days. Scheduling is flexible within your package validity period.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "Same-day cancellations (less than 24 hours' notice) forfeit that day's showings and 3 showing credits. Arrival more than 15 minutes late without notice may result in forfeiture of that day's showings at My Rock Realty's discretion. Access delays or last-minute cancellations outside My Rock Realty's control restore the showing credit and may be rescheduled.",
  },
  {
    question: "What if I find a home before using all my showing days?",
    answer:
      "If you find the right home before using all your showing days, that's a good outcome — the service did its job. Unused showing days and credits expire at the end of your package validity period and do not carry over.",
  },
  {
    question: "What is the future home purchase credit?",
    answer:
      "If you later enter into a separate written buyer representation agreement with My Rock Realty and successfully close on a home purchase through us within 60 months of your tour service purchase, your paid tour fee may be credited in full at closing, where permitted and as outlined in the separate written agreement, subject to brokerage policy, applicable law, lender approval, and successful closing.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Military & PCS Relocation", url: "/military-relocation/" },
  { label: "Remote Home Tours", url: "/military-relocation/remote-home-tours/" },
];

/* ─── How It Works Steps ─── */
const steps = [
  {
    number: "01",
    title: "Contact Rob",
    body: "Reach out to discuss your PCS situation, timeline, and housing priorities. Rob will confirm availability and service fit before you purchase.",
  },
  {
    number: "02",
    title: "Purchase Your Package",
    body: "Select the package that fits your timeline and the number of properties or neighborhoods you want to evaluate. Military and veteran pricing applied automatically.",
  },
  {
    number: "03",
    title: "Schedule Your Showings",
    body: "Coordinate directly with Rob to schedule your showing days. Flexible scheduling within your package validity period.",
  },
  {
    number: "04",
    title: "Evaluate and Decide",
    body: "Use your showing days to gather real information about properties and neighborhoods before you arrive. Make your housing decision with confidence.",
  },
];

/* ─── What's Included ─── */
const included = [
  "Property shortlist review based on your criteria",
  "15–30 minute virtual or recorded tour support per showing day, where permitted and available",
  "In-person property access and guided showings, where available",
  "Neighborhood and lifestyle overview",
  "General Colorado market guidance",
  "Flexible scheduling within the package validity period",
];

/* ─── What's Not Included ─── */
const notIncluded = [
  "Tenant representation, buyer representation, agency, or any brokerage relationship",
  "Lease negotiation or application assistance",
  "Deposit, rent, or application-fee handling",
  "Lease, financing, or application approval guarantees",
  "Property management or ongoing tenant support",
  "Legal, tax, lending, or property-management advice",
];

/* ─── Packages ─── */
const packages = [
  {
    name: "1 Showing Day",
    price: "$349",
    standardPrice: "$499",
    homes: "Up to 3 homes",
    showingDays: "1 showing day",
    validity: "Valid for 45 days from purchase",
    description:
      "Ideal for PCS families with a focused search and a clear top choice.",
    recommended: false,
  },
  {
    name: "2 Showing Days",
    price: "$549",
    standardPrice: "$799",
    homes: "Up to 6 homes",
    showingDays: "Up to 2 showing days",
    validity: "Valid for 90 days from purchase",
    description:
      "Ideal for PCS families evaluating a broader set of properties or neighborhoods.",
    recommended: true,
  },
  {
    name: "3 Showing Days",
    price: "$849",
    standardPrice: "$999",
    homes: "Up to 10 homes",
    showingDays: "Up to 3 showing days",
    validity: "Valid for 120 days from purchase",
    description:
      "Ideal for PCS families with a wider search area or longer decision timeline.",
    recommended: false,
  },
];

/* ─── Trust Points ─── */
const trustPoints = [
  {
    icon: Compass,
    title: "Colorado Market Knowledge",
    body: "Rob has deep familiarity with the Colorado Springs and Denver metro markets — the neighborhoods, commute corridors, and practical considerations that matter for military families.",
  },
  {
    icon: Shield,
    title: "Military-Aware Guidance",
    body: "Rob regularly works with PCS families navigating compressed timelines, remote searches, and the unique pressures of military relocation. He understands the context.",
  },
  {
    icon: Users,
    title: "Structured, Professional Support",
    body: "Each showing day is structured and focused. You get professional observations and market context — not generic advice.",
  },
];

/* ─── FAQ Accordion ─── */
function FaqItem({ question, answer, isOpen, onToggle }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-cream-dark/40 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
      >
        <span
          className="font-medium text-charcoal text-[15px] leading-snug group-hover:text-gold-dark transition-colors"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="pb-5 pr-8">
          <p className="text-charcoal/75 text-[14px] leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function RemoteHomeTours() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="hub-page min-h-screen bg-cream" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
      <Navbar compact />
      <SeoHead
        metadata={{
          title: "PCS Relocation Tour Support | Remote Home Tours | My Rock Realty",
          description:
            "PCS families relocating to Colorado Springs or Denver can evaluate housing before they arrive. Structured in-person showings and neighborhood guidance — military pricing available. My Rock Realty.",
          canonicalUrl: "https://myrockhomes.com/military-relocation/remote-home-tours/",
          image:
            "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/relocations-bg-KPyJJGfxXDepzsW2dzzYt2.webp",
        }}
        schema={[faqSchema]}
      />

      {/* ─── Hero ─── */}
      <section
        className="relative py-16 sm:py-24 md:py-32 bg-charcoal overflow-hidden pt-[72px]"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-charcoal/80" />
        <div className="relative container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div
              className="inline-flex items-center gap-2 text-gold text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <Shield className="w-3.5 h-3.5" />
              PCS RELOCATION · COLORADO
            </div>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-cream leading-tight mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Evaluate Colorado Homes Before You Arrive
            </h1>
            <p className="text-cream/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
              PCS households often have to make housing decisions before they arrive — evaluating properties and neighborhoods remotely, under a compressed timeline, without local knowledge. This service gives you structured, professional guidance on Colorado Springs and Denver so you're not deciding blind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:rob@myrockhomes.com?subject=PCS%20Relocation%20Tour%20Support%20Inquiry"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-charcoal font-semibold px-8 py-4 rounded transition-colors"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Request Tour Support
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/military-relocation/"
                className="inline-flex items-center gap-2 border border-cream/30 hover:border-cream/60 text-cream px-8 py-4 rounded transition-colors"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                View PCS Resources
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── What This Service Is ─── */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold text-charcoal mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              What PCS Relocation Tour Support Is
            </h2>
            <p className="text-charcoal/70 text-base sm:text-lg leading-relaxed">
              PCS Relocation Tour Support is a structured showing and guidance service designed to
              help military families evaluate housing options in Colorado before they arrive. Rob
              Baker provides in-person property access and guided showings where available, plus
              neighborhood context and general Colorado market guidance — helping you understand
              your options before you commit.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Included */}
            <div className="bg-white rounded-lg p-8 border border-cream-dark/40">
              <h3
                className="text-lg font-bold text-charcoal mb-5 flex items-center gap-2"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                <CheckCircle className="w-5 h-5 text-gold" />
                What's Included
              </h3>
              <ul className="space-y-3">
                {included.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[14px] text-charcoal/75 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Not Included */}
            <div className="bg-charcoal/4 rounded-lg p-8 border border-cream-dark/40">
              <h3
                className="text-lg font-bold text-charcoal mb-5"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                What's Not Included
              </h3>
              <ul className="space-y-3">
                {notIncluded.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[14px] text-charcoal/65 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-charcoal/30 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Packages ─── */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold text-cream mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Tour Support Packages
            </h2>
            <p className="text-cream/65 text-base sm:text-lg leading-relaxed">
              Military and veteran pricing is applied automatically. Contact Rob before purchasing if you have questions about which package fits your situation.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`relative rounded-lg p-7 border flex flex-col ${
                  pkg.recommended
                    ? "bg-gold/10 border-gold/40"
                    : "bg-white/5 border-white/10"
                }`}
              >
                {pkg.recommended && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-charcoal text-[11px] font-bold px-3 py-1 rounded-full tracking-wide uppercase"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    Most Popular
                  </div>
                )}
                <div className="mb-4">
                  <p
                    className="text-cream/60 text-xs font-semibold tracking-widest uppercase mb-2"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {pkg.name}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span
                      className="text-4xl font-bold text-cream"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {pkg.price}
                    </span>
                    <span className="text-cream/40 text-sm line-through">{pkg.standardPrice}</span>
                  </div>
                  <p className="text-gold text-xs mt-1">Military / Veteran Pricing</p>
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  {[pkg.homes, pkg.showingDays, pkg.validity].map((detail, j) => (
                    <li key={j} className="flex items-center gap-2 text-cream/70 text-[13px]">
                      <CheckCircle className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <p className="text-cream/50 text-[12px] leading-relaxed mb-6">{pkg.description}</p>
                <a
                  href="mailto:rob@myrockhomes.com?subject=PCS%20Tour%20Support%20Package%20Inquiry"
                  className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-charcoal font-semibold px-5 py-3 rounded text-sm transition-colors"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Contact Rob
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Service Area ─── */}
      <section className="py-16 sm:py-20 bg-charcoal/90 border-t border-white/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2
              className="text-2xl sm:text-3xl font-bold text-cream mb-3"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Service Area
            </h2>
            <p className="text-cream/65 text-base leading-relaxed">
              Tour support is available within the following areas. Properties outside the standard service area may be available by custom quote.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {[
              {
                icon: MapPin,
                region: "Colorado Springs Area",
                detail: "25-mile radius from downtown Colorado Springs — Fort Carson, Peterson SFB, Schriever SFB, USAFA",
              },
              {
                icon: MapPin,
                region: "Denver / Aurora Area",
                detail: "25-mile radius from downtown Denver — Buckley Space Force Base",
              },
            ].map((area, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-6 flex items-start gap-4">
                <area.icon className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-cream text-[15px]" style={{ fontFamily: "'Outfit', sans-serif" }}>{area.region}</p>
                  <p className="text-cream/60 text-[13px] mt-1">{area.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-cream/50 text-[13px] mt-6">
            Outside the standard service area?{" "}
            <a href="mailto:rob@myrockhomes.com?subject=PCS%20Tour%20Support%20Custom%20Quote" className="text-gold hover:underline">
              Contact Rob for a custom quote.
            </a>
          </p>
        </div>
      </section>

      {/* ─── Who It's For ─── */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold text-charcoal mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Who It's For
            </h2>
            <p className="text-charcoal/70 text-base sm:text-lg leading-relaxed">
              This service is designed for PCS households who need to evaluate Colorado housing
              options before they're local — and want structured, professional guidance rather than
              searching blind.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Compass,
                title: "Active Duty PCS Families",
                body: "Relocating to Colorado Springs or Denver on military orders and need to evaluate housing options before your report date.",
              },
              {
                icon: Users,
                title: "Military Spouses Managing the Search",
                body: "Handling the housing search independently while your service member is unavailable — and need reliable, structured guidance.",
              },
              {
                icon: Home,
                title: "Buyers and Renters Evaluating Options",
                body: "Considering both rental and purchase options and want professional context on properties and neighborhoods before committing.",
              },
            ].map((card, i) => (
              <div key={i} className="bg-charcoal/5 border border-cream-dark/40 rounded-lg p-7">
                <card.icon className="w-8 h-8 text-gold mb-4" />
                <h3
                  className="text-base font-bold text-charcoal mb-2"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {card.title}
                </h3>
                <p className="text-charcoal/65 text-[14px] leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="py-16 sm:py-20 bg-charcoal/5 border-y border-cream-dark/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold text-charcoal mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              How It Works
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div
                  className="text-5xl font-bold text-gold/20 mb-3 leading-none"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {step.number}
                </div>
                <h3
                  className="text-base font-bold text-charcoal mb-2"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-charcoal/65 text-[14px] leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Trust Points ─── */}
      <section className="py-16 sm:py-20 bg-cream border-b border-cream-dark/40">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold text-charcoal mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Why Rob
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {trustPoints.map((point, i) => (
              <div key={i} className="text-center px-4">
                <point.icon className="w-10 h-10 text-gold mx-auto mb-4" />
                <h3
                  className="text-base font-bold text-charcoal mb-2"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {point.title}
                </h3>
                <p className="text-charcoal/65 text-[14px] leading-relaxed">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2
              className="text-3xl sm:text-4xl font-bold text-charcoal mb-10"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Frequently Asked Questions
            </h2>
            <div className="divide-y divide-cream-dark/40">
              {faqContent.map((item, i) => (
                <FaqItem
                  key={i}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Service Terms Note ─── */}
      <section className="py-10 bg-charcoal/5 border-t border-cream-dark/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h3
              className="text-base font-bold text-charcoal mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              A note on scope and availability
            </h3>
            <ul className="space-y-3">
              {[
                "This is a tour support and guidance service only. No agency, representation, or brokerage relationship is created.",
                "Rob makes reasonable efforts to accommodate scheduling requests within 5–7 business days. Scheduling is subject to availability.",
                "Same-day cancellations (less than 24 hours' notice) forfeit that day's showings and 3 showing credits.",
                "Access delays or last-minute cancellations outside My Rock Realty's control restore the showing credit and may be rescheduled.",
                "Standard service area: 25-mile radius from downtown Denver or downtown Colorado Springs. Outside the standard area is available by custom quote only.",
                "Customer is responsible for independently verifying rental requirements, application standards, school boundaries, commute needs, pet rules, lease terms, HOA restrictions, and all other material facts before signing any lease or application.",
              ].map((note, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[13px] text-charcoal/60 leading-relaxed">
                  <span className="w-1 h-1 rounded-full bg-charcoal/30 mt-2 flex-shrink-0" />
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── Fair Housing ─── */}
      <section className="py-8 bg-charcoal/5 border-t border-cream-dark/30">
        <div className="container">
          <div className="max-w-3xl mx-auto flex items-center gap-3">
            <Shield className="w-4 h-4 text-charcoal/40 flex-shrink-0" />
            <p className="text-[12px] text-charcoal/50 leading-relaxed">
              My Rock Realty offers tour services in compliance with applicable federal, state, and local fair housing laws, including the Fair Housing Act and the Colorado Anti-Discrimination Act. We do not discriminate based on race, color, national origin, religion, sex, familial status, disability, or any other protected class.{" "}
              <a href="/fair-housing" className="text-gold-dark hover:underline">View our full Fair Housing Statement.</a>
            </p>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2
              className="text-3xl sm:text-4xl font-bold text-cream mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Ready to Start Your Housing Search?
            </h2>
            <p className="text-cream/70 text-base sm:text-lg leading-relaxed mb-8">
              Contact Rob to discuss your PCS timeline and confirm availability before purchasing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:rob@myrockhomes.com?subject=PCS%20Relocation%20Tour%20Support%20Inquiry"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-charcoal font-semibold px-8 py-4 rounded transition-colors"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Contact Rob
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:7203636544"
                className="inline-flex items-center gap-2 border border-cream/30 hover:border-cream/60 text-cream px-8 py-4 rounded transition-colors"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                (720) 363-6544
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Back Link ─── */}
      <div className="bg-cream border-t border-cream-dark/40 py-5">
        <div className="container flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
          <a
            href="/military-relocation/"
            className="inline-flex items-center gap-2 text-charcoal-light/60 hover:text-gold-dark text-sm transition-colors"
          >
            ← Military &amp; PCS Relocation
          </a>
          <span className="hidden sm:block text-charcoal-light/30">·</span>
          <a
            href="/military-relocation/pcs-relocation-tour-support/"
            className="inline-flex items-center gap-2 text-charcoal-light/60 hover:text-gold-dark text-sm transition-colors"
          >
            PCS Relocation Tour Support
          </a>
          <span className="hidden sm:block text-charcoal-light/30">·</span>
          <a
            href="/military-relocation/buying-remotely/"
            className="inline-flex items-center gap-2 text-charcoal-light/60 hover:text-gold-dark text-sm transition-colors"
          >
            Buying a Home Remotely
          </a>
        </div>
      </div>
    </div>
  );
}
