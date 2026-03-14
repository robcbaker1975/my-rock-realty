/**
 * PCS Relocation Tour Support — My Rock Realty
 * /military-relocation/pcs-relocation-tour-support/
 * Design: Front Range Modern — matches existing site design system
 * Palette: Warm charcoal (#292524), cream (#F5F0EB), antique gold (#C9A96E)
 * Typography: Outfit (display) + Libre Franklin (body)
 */
import { useState } from "react";
import SeoHead from "@/components/seo/SeoHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  MapPin,
  Home,
  ChevronDown,
  Phone,
  Mail,
  Video,
  Calendar,
  CheckCircle,
  Clock,
  Compass,
  Users,
  Star,
} from "lucide-react";

const HERO_BG = "/images/denver-rowhouses-hero.jpg";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "What exactly happens during a tour session?",
    answer:
      "Each tour is a structured 30–45 minute video consultation with Rob. You'll review a specific property or neighborhood together — Rob walks through what he knows about the area, the property's context in the market, practical considerations for PCS families, and any questions you bring to the call. Tours are focused, professional, and designed to give you real information.",
  },
  {
    question: "Can I use tours for both rental properties and homes for purchase?",
    answer:
      "Yes. Tour support is available for PCS families evaluating rental options, homes for purchase, or both. The goal is to help you make a well-informed housing decision before you arrive — regardless of whether you plan to rent or buy.",
  },
  {
    question: "What areas does this service cover?",
    answer:
      "Tour support is available for the Colorado Springs area (Fort Carson, Peterson Space Force Base, Schriever Space Force Base, and the U.S. Air Force Academy) and the Denver / Aurora area (Buckley Space Force Base). If you're unsure whether your target area is covered, reach out before purchasing.",
  },
  {
    question: "How do I schedule tours after purchasing a package?",
    answer:
      "After purchasing, you'll coordinate directly with Rob to schedule your tour sessions. Rob makes reasonable efforts to accommodate requests within 5–7 business days. Tours are conducted via video call at a time that works for your schedule.",
  },
  {
    question: "What if I lease or purchase a home before using all my tours?",
    answer:
      "Packages are designed to support your housing search. If you find the right home before using all your tours, that's a good outcome — the service did its job. Any remaining tours at that point would not carry over. Full details are provided in the service terms at the time of purchase.",
  },
  {
    question: "Is this the same as having a buyer's agent or rental agent?",
    answer:
      "No. This is a consultation and tour-support service, not rental representation or buyer agency. Rob provides professional guidance and market context — he is not acting as your agent in a transaction, and this service does not include lease negotiation, application assistance, or approval guarantees.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Military & PCS Relocation", url: "/military-relocation/" },
  { label: "PCS Relocation Tour Support", url: "/military-relocation/pcs-relocation-tour-support/" },
];

/* ─── How It Works Steps ─── */
const steps = [
  {
    number: "01",
    title: "Request Tour Support",
    body: "Reach out to Rob to discuss your PCS situation, timeline, and housing priorities. Rob will confirm availability and service fit before you purchase.",
  },
  {
    number: "02",
    title: "Purchase Your Package",
    body: "Select the 5-Tour or 10-Tour package based on your timeline and the number of properties or neighborhoods you want to evaluate.",
  },
  {
    number: "03",
    title: "Schedule Your Tours",
    body: "Coordinate directly with Rob to schedule your tour sessions. Tours are conducted via video call at times that work for your schedule.",
  },
  {
    number: "04",
    title: "Evaluate and Decide",
    body: "Use your tours to gather real information about properties and neighborhoods before you arrive. Make your housing decision with confidence.",
  },
];

/* ─── What's Included ─── */
const included = [
  "30–45 minute structured video consultation per tour",
  "Property and neighborhood guidance based on your criteria",
  "Market context and practical relocation considerations",
  "Neighborhood character and lifestyle overview",
  "General real-estate guidance for the Colorado market",
  "Flexible scheduling within your package validity period",
];

/* ─── What's Not Included ─── */
const notIncluded = [
  "In-person property access or showings",
  "Rental brokerage or tenant representation",
  "Lease negotiation or application assistance",
  "Deposit, rent, or application-fee handling",
  "Lease or financing approval guarantees",
  "Property management or ongoing tenant support",
];

/* ─── Geographic Coverage ─── */
const geographyAreas = [
  {
    region: "Colorado Springs Area",
    bases: [
      "Fort Carson",
      "Peterson Space Force Base",
      "Schriever Space Force Base",
      "U.S. Air Force Academy",
    ],
  },
  {
    region: "Denver / Aurora Area",
    bases: ["Buckley Space Force Base"],
  },
];

/* ─── Packages ─── */
const packages = [
  {
    name: "5-Tour Package",
    price: "$499",
    tours: 5,
    validity: "Valid for 45 days from purchase",
    description:
      "Ideal for families with a focused search area and a clear timeline. Five structured tour sessions to evaluate your top properties and neighborhoods.",
    recommended: false,
  },
  {
    name: "10-Tour Package",
    price: "$899",
    tours: 10,
    validity: "Valid for 90 days from purchase",
    description:
      "Ideal for families with broader search criteria, longer decision timelines, or multiple areas to evaluate. Ten sessions to build a thorough picture before arrival.",
    recommended: true,
  },
];

/* ─── Trust Points ─── */
const trustPoints = [
  {
    icon: Compass,
    title: "Colorado Market Knowledge",
    body: "Rob has deep familiarity with the Colorado Springs and Denver metro markets — the neighborhoods, the commute corridors, and the practical considerations that matter for military families.",
  },
  {
    icon: Shield,
    title: "Military-Aware Guidance",
    body: "Rob regularly works with PCS families navigating compressed timelines, remote searches, and the unique pressures of military relocation. He understands the context.",
  },
  {
    icon: Users,
    title: "Structured, Professional Support",
    body: "This is not a casual conversation. Each tour session is structured, focused, and designed to give you actionable information — not generic advice.",
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

export default function PcsRelocationTourSupport() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-cream" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
      <SeoHead
        metadata={{
          title: "PCS Relocation Tour Support | Remote Housing Consultation | My Rock Realty",
          description:
            "PCS families relocating to Colorado Springs or Denver often need to evaluate housing before they arrive. Structured remote guidance on properties and neighborhoods — 5-Tour and 10-Tour packages available. My Rock Realty.",
          canonicalUrl:
            "https://www.myrockhomes.com/military-relocation/pcs-relocation-tour-support/",
          image:
            "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/relocations-bg-KPyJJGfxXDepzsW2dzzYt2.webp",
        }}
        schema={[faqSchema]}
      />

      {/* ─── Breadcrumbs ─── */}
      <div className="bg-charcoal/95 border-b border-white/5">
        <div className="container py-3">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* ─── Hero ─── */}
      <section
        className="relative py-16 sm:py-24 md:py-32 bg-charcoal overflow-hidden"
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

      {/* ─── What PCS Relocation Tour Support Is ─── */}
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
              PCS Relocation Tour Support is a structured remote consultation service designed to
              help military families evaluate housing options in Colorado before they arrive. Rob
              Baker provides professional guidance on properties and neighborhoods via video
              consultation — helping you understand market context, neighborhood character, and
              practical considerations before you make a decision.
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
                  <li key={i} className="flex items-start gap-3 text-[14px] text-charcoal/80 leading-snug">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Not Included */}
            <div className="bg-charcoal/5 rounded-lg p-8 border border-cream-dark/40">
              <h3
                className="text-lg font-bold text-charcoal mb-5"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                What's Not Included
              </h3>
              <ul className="space-y-3">
                {notIncluded.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] text-charcoal/70 leading-snug">
                    <span className="w-1.5 h-1.5 rounded-full bg-charcoal/30 mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Who It's For ─── */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold text-cream mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Who It's For
            </h2>
            <p className="text-cream/70 text-base sm:text-lg leading-relaxed">
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
              <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-7">
                <card.icon className="w-8 h-8 text-gold mb-4" />
                <h3
                  className="text-base font-bold text-cream mb-2"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {card.title}
                </h3>
                <p className="text-cream/65 text-[14px] leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="py-16 sm:py-20 bg-cream">
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

      {/* ─── Pricing & Packages ─── */}
      <section className="py-16 sm:py-20 bg-charcoal/5 border-y border-cream-dark/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold text-charcoal mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Pricing &amp; Packages
            </h2>
            <p className="text-charcoal/65 text-base leading-relaxed">
              Prepaid packages. No hidden fees. Full terms provided at the time of purchase.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`rounded-lg p-8 border ${
                  pkg.recommended
                    ? "bg-charcoal border-gold/40 shadow-lg shadow-gold/10"
                    : "bg-white border-cream-dark/40"
                }`}
              >
                {pkg.recommended && (
                  <div
                    className="inline-flex items-center gap-1.5 text-gold text-xs font-semibold tracking-widest uppercase mb-4"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    <Star className="w-3 h-3" />
                    Most Flexible
                  </div>
                )}
                <h3
                  className={`text-xl font-bold mb-1 ${pkg.recommended ? "text-cream" : "text-charcoal"}`}
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {pkg.name}
                </h3>
                <div
                  className={`text-4xl font-bold mb-1 ${pkg.recommended ? "text-gold" : "text-charcoal"}`}
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {pkg.price}
                </div>
                <div
                  className={`text-xs font-medium mb-4 flex items-center gap-1.5 ${pkg.recommended ? "text-cream/60" : "text-charcoal/50"}`}
                >
                  <Clock className="w-3.5 h-3.5" />
                  {pkg.validity}
                </div>
                <p
                  className={`text-[14px] leading-relaxed mb-6 ${pkg.recommended ? "text-cream/75" : "text-charcoal/70"}`}
                >
                  {pkg.description}
                </p>
                <a
                  href="mailto:rob@myrockhomes.com?subject=PCS%20Relocation%20Tour%20Support%20Inquiry"
                  className={`inline-flex items-center gap-2 font-semibold px-6 py-3 rounded transition-colors text-sm ${
                    pkg.recommended
                      ? "bg-gold hover:bg-gold-dark text-charcoal"
                      : "border border-charcoal/20 hover:border-gold text-charcoal hover:text-gold-dark"
                  }`}
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Request Tour Support
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Geographic Coverage ─── */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold text-charcoal mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Geographic Coverage
            </h2>
            <p className="text-charcoal/65 text-base leading-relaxed">
              Tour support is currently available for PCS families relocating to the Colorado
              Springs and Denver / Aurora areas.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {geographyAreas.map((area, i) => (
              <div key={i} className="bg-white rounded-lg p-8 border border-cream-dark/40">
                <div className="flex items-center gap-2 mb-5">
                  <MapPin className="w-5 h-5 text-gold" />
                  <h3
                    className="text-base font-bold text-charcoal"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {area.region}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {area.bases.map((base, j) => (
                    <li key={j} className="flex items-start gap-2 text-[14px] text-charcoal/75">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                      {base}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center text-charcoal/50 text-sm mt-8 max-w-xl mx-auto">
            Unsure whether your target area is covered? Reach out before purchasing and Rob will
            confirm service availability.
          </p>
        </div>
      </section>

      {/* ─── Why Work With Rob ─── */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold text-cream mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Why Work With Rob
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {trustPoints.map((point, i) => (
              <div key={i} className="text-center px-4">
                <point.icon className="w-8 h-8 text-gold mx-auto mb-4" />
                <h3
                  className="text-base font-bold text-cream mb-2"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {point.title}
                </h3>
                <p className="text-cream/60 text-[14px] leading-relaxed">{point.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-lg p-8 text-center">
            <p className="text-cream/80 text-[15px] leading-relaxed">
              Rob Baker is a Colorado-based real estate professional with experience supporting
              military families navigating PCS moves to the Colorado Springs and Denver metro
              markets. He works with buyers and renters evaluating options remotely — and
              understands the unique pressures of military relocation timelines.
            </p>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold text-charcoal mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-lg border border-cream-dark/40 divide-y divide-cream-dark/30 px-8">
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
      </section>

      {/* ─── Trust Disclaimer / Terms Reference ─── */}
      <section className="py-10 bg-charcoal/5 border-y border-cream-dark/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-charcoal/55 text-sm leading-relaxed">
              This is a consultation and guidance service. Rob does not act as a rental agent or
              buyer's agent through this service, and the service does not include deposits,
              applications, or lease negotiations. Full service terms are provided before purchase.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="py-16 sm:py-24 bg-charcoal">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2
              className="text-3xl sm:text-4xl font-bold text-cream mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Ready to Evaluate Colorado Housing Before You Arrive?
            </h2>
            <p className="text-cream/70 text-base sm:text-lg leading-relaxed mb-8">
              Reach out to Rob to discuss your PCS situation, timeline, and housing priorities.
              He'll confirm availability and service fit before you purchase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:rob@myrockhomes.com?subject=PCS%20Relocation%20Tour%20Support%20Inquiry"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-charcoal font-semibold px-8 py-4 rounded transition-colors"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                <Mail className="w-4 h-4" />
                Request Tour Support
              </a>
              <a
                href="tel:+17203456789"
                className="inline-flex items-center gap-2 border border-cream/30 hover:border-cream/60 text-cream px-8 py-4 rounded transition-colors"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                <Phone className="w-4 h-4" />
                Call Rob
              </a>
            </div>
            <p className="text-cream/40 text-xs mt-6">
              Not rental representation. Guidance and consultation only. Full terms provided at
              purchase.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
