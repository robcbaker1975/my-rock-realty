/**
 * Rental Tour Support — My Rock Realty
 * /rental-tour-support/
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
  CheckCircle,
  Clock,
  Compass,
  Star,
  Key,
} from "lucide-react";

const HERO_BG = "/images/denver-rowhouses-hero.jpg";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "What exactly happens during a tour session?",
    answer:
      "Each tour is a structured showing session — in-person property access and guided walkthrough where available, or a 15–30 minute virtual or recorded tour support session where in-person access is not available. Rob provides neighborhood context, market guidance, and practical observations to help you evaluate each property.",
  },
  {
    question: "What areas does this service cover?",
    answer:
      "Tour support is available within a 25-mile radius of downtown Denver and a 25-mile radius of downtown Colorado Springs. Properties outside these service areas may be available by custom quote — contact Rob before purchasing if you're unsure whether your target area is covered.",
  },
  {
    question: "Does this service include tenant representation or lease negotiation?",
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
    question: "What if I find a rental before using all my showing days?",
    answer:
      "If you find the right rental before using all your showing days, that's a good outcome — the service did its job. Unused showing days and credits expire at the end of your package validity period and do not carry over.",
  },
  {
    question: "Can I transfer my package to someone else?",
    answer:
      "No. Tour packages are non-transferable and not shareable. Attempted transfer or sharing will result in immediate forfeiture of remaining days and showing credits.",
  },
  {
    question: "What should I know about Colorado rental application fees?",
    answer:
      "Colorado law may allow portable tenant screening reports and may limit certain application-related fees. Verify current requirements directly with the property manager or landlord, as rules and policies can change. My Rock Realty can provide general guidance, but you should independently confirm all requirements.",
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
  { label: "Rental Tour Support", url: "/rental-tour-support/" },
];

/* ─── How It Works Steps ─── */
const steps = [
  {
    number: "01",
    title: "Contact Rob",
    body: "Reach out to discuss your rental search criteria, timeline, and target neighborhoods. Rob will confirm availability and service fit before you purchase.",
  },
  {
    number: "02",
    title: "Purchase Your Package",
    body: "Select the package that fits your search scope and timeline. Packages are prepaid with no hidden fees.",
  },
  {
    number: "03",
    title: "Schedule Your Showings",
    body: "Coordinate directly with Rob to schedule your showing days. Flexible scheduling within your package validity period.",
  },
  {
    number: "04",
    title: "Evaluate and Decide",
    body: "Use your showing days to gather real information about properties and neighborhoods. Make your rental decision with confidence.",
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
    price: "$499",
    homes: "Up to 3 homes",
    showingDays: "1 showing day",
    validity: "Valid for 30 days from purchase",
    description:
      "Ideal for renters with a focused search and a clear top choice.",
    recommended: false,
  },
  {
    name: "2 Showing Days",
    price: "$799",
    homes: "Up to 6 homes",
    showingDays: "Up to 2 showing days",
    validity: "Valid for 45 days from purchase",
    description:
      "Ideal for renters evaluating a broader set of properties or neighborhoods.",
    recommended: true,
  },
  {
    name: "3 Showing Days",
    price: "$999",
    homes: "Up to 10 homes",
    showingDays: "Up to 3 showing days",
    validity: "Valid for 90 days from purchase",
    description:
      "Ideal for renters with a wider search area or longer decision timeline.",
    recommended: false,
  },
];

/* ─── Trust Points ─── */
const trustPoints = [
  {
    icon: Compass,
    title: "Local Market Knowledge",
    body: "Rob has deep familiarity with the Denver and Colorado Springs metro markets — the neighborhoods, commute corridors, and practical considerations that matter for renters.",
  },
  {
    icon: Shield,
    title: "Clear, Structured Guidance",
    body: "Each showing day is structured and focused. You get professional observations and market context — not generic advice.",
  },
  {
    icon: Key,
    title: "No Representation Pressure",
    body: "This service is designed to help you evaluate properties on your own terms. No agency relationship is created. You remain in control of your rental decision.",
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

export default function RentalTourSupport() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-cream" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
      <SeoHead
        metadata={{
          title: "Rental Tour Support | Find the Right Rental in Colorado | My Rock Realty",
          description:
            "Evaluating rental properties in Denver or Colorado Springs? Rental Tour Support gives you structured, professional guidance — in-person showings and neighborhood context without representation pressure. My Rock Realty.",
          canonicalUrl: "https://myrockhomes.com/rental-tour-support/",
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
              <Home className="w-3.5 h-3.5" />
              RENTAL TOUR SUPPORT · COLORADO
            </div>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-cream leading-tight mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Find the Right Rental — With Professional Guidance
            </h1>
            <p className="text-cream/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
              Evaluating rental properties in Denver or Colorado Springs takes time, local knowledge, and the ability to see past the listing photos. Rental Tour Support gives you structured, in-person showings and professional neighborhood context — so you can make a confident decision without guessing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:rob@myrockhomes.com?subject=Rental%20Tour%20Support%20Inquiry"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-charcoal font-semibold px-8 py-4 rounded transition-colors"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Request Tour Support
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/"
                className="inline-flex items-center gap-2 border border-cream/30 hover:border-cream/60 text-cream px-8 py-4 rounded transition-colors"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Back to Home
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
              What Rental Tour Support Is
            </h2>
            <p className="text-charcoal/70 text-base sm:text-lg leading-relaxed">
              Rental Tour Support is a structured showing and guidance service. Rob Baker provides
              in-person property access and guided showings where available, plus neighborhood
              context and general Colorado market guidance — helping you evaluate your options
              before committing.
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
                className="text-lg font-bold text-charcoal mb-2"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                What This Service Is NOT
              </h3>
              <p className="text-[13px] text-charcoal/60 mb-4 leading-snug">
                This tour service does <strong>not</strong> create tenant representation, buyer representation, agency, or any brokerage relationship. You remain unrepresented unless you sign a separate written agreement with My Rock Realty.
              </p>
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

      {/* ─── Service Area ─── */}
      <section className="py-14 sm:py-18 bg-charcoal">
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
                region: "Denver Metro",
                detail: "25-mile radius from downtown Denver",
              },
              {
                icon: MapPin,
                region: "Colorado Springs",
                detail: "25-mile radius from downtown Colorado Springs",
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
            Outside the standard service area? <a href="mailto:rob@myrockhomes.com?subject=Rental%20Tour%20Support%20Custom%20Quote" className="text-gold hover:underline">Contact Rob for a custom quote.</a>
          </p>
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

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                    Most Popular
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
                <div className={`text-xs font-medium mb-1 ${pkg.recommended ? "text-cream/60" : "text-charcoal/50"}`}>
                  {pkg.homes} · {pkg.showingDays}
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
                  href="mailto:rob@myrockhomes.com?subject=Rental%20Tour%20Support%20Inquiry"
                  className={`inline-flex items-center gap-2 font-semibold px-6 py-3 rounded transition-colors text-sm ${
                    pkg.recommended
                      ? "bg-gold hover:bg-gold-dark text-charcoal"
                      : "border border-charcoal/20 hover:border-gold text-charcoal hover:text-gold-dark"
                  }`}
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Request This Package
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Future Home Purchase Credit ─── */}
      <section className="py-14 sm:py-18 bg-cream border-b border-cream-dark/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="bg-charcoal rounded-lg p-8 sm:p-10">
              <h2
                className="text-2xl sm:text-3xl font-bold text-cream mb-4"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Future Home Purchase Credit
              </h2>
              <p className="text-cream/75 text-[15px] leading-relaxed">
                If you later enter into a separate written buyer representation agreement with My Rock Realty and successfully close on a home purchase through us within <strong className="text-gold">60 months</strong> of your tour service purchase, your paid tour fee may be credited in full at closing — where permitted and as outlined in the separate written agreement, subject to brokerage policy, applicable law, lender approval, and successful closing.
              </p>
              <p className="text-cream/50 text-[13px] mt-4 leading-relaxed">
                This credit applies to a future home purchase only and requires a separate written buyer representation agreement at that time. It does not apply to rental transactions and does not guarantee closing or approval.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Why My Rock Realty ─── */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold text-charcoal mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Why My Rock Realty
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {trustPoints.map((point, i) => (
              <div key={i} className="text-center px-4">
                <point.icon className="w-8 h-8 text-gold mx-auto mb-4" />
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
      <section className="py-16 sm:py-20 bg-charcoal/5 border-t border-cream-dark/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold text-charcoal mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto bg-white rounded-lg border border-cream-dark/40 divide-y-0 px-6 sm:px-8">
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

      {/* ─── Fine Print / Operational Rules ─── */}
      <section className="py-12 sm:py-16 bg-cream border-t border-cream-dark/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-xl font-bold text-charcoal mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Package Terms &amp; Conditions Summary
            </h2>
            <ul className="space-y-3 text-[13px] text-charcoal/65 leading-relaxed">
              <li className="flex items-start gap-2.5">
                <span className="w-1 h-1 rounded-full bg-charcoal/30 mt-2 flex-shrink-0" />
                Packages are non-transferable and not shareable. Attempted transfer or sharing results in immediate forfeiture of remaining days and credits.
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1 h-1 rounded-full bg-charcoal/30 mt-2 flex-shrink-0" />
                Package validity begins on the purchase date. Unused showing days and credits expire at the end of the validity period and do not carry over.
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1 h-1 rounded-full bg-charcoal/30 mt-2 flex-shrink-0" />
                Same-day cancellations (less than 24 hours' notice) forfeit that day's showings and 3 showing credits.
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1 h-1 rounded-full bg-charcoal/30 mt-2 flex-shrink-0" />
                Arrival more than 15 minutes late without notice may result in forfeiture of that day's showings at My Rock Realty's discretion.
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1 h-1 rounded-full bg-charcoal/30 mt-2 flex-shrink-0" />
                Weather calls are made in good faith by My Rock Realty. Access delays or last-minute cancellations outside My Rock Realty's control restore the showing credit and may be rescheduled.
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1 h-1 rounded-full bg-charcoal/30 mt-2 flex-shrink-0" />
                Standard service area: 25-mile radius from downtown Denver or downtown Colorado Springs. Outside the standard area is available by custom quote only.
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1 h-1 rounded-full bg-charcoal/30 mt-2 flex-shrink-0" />
                Customer is responsible for independently verifying rental requirements, application standards, school boundaries, commute needs, pet rules, lease terms, HOA restrictions, and all other material facts before signing any lease or application.
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1 h-1 rounded-full bg-charcoal/30 mt-2 flex-shrink-0" />
                This service does not create tenant representation, buyer representation, agency, or any brokerage relationship. Full service terms are provided at the time of purchase and are governed by the My Rock Realty <a href="/terms" className="text-gold-dark hover:underline">Terms &amp; Conditions</a>.
              </li>
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
              My Rock Realty offers tour services in compliance with applicable federal, state, and local fair housing laws, including the Fair Housing Act and the Colorado Anti-Discrimination Act. We do not discriminate based on race, color, national origin, religion, sex, familial status, disability, or any other protected class. <a href="/fair-housing" className="text-gold-dark hover:underline">View our full Fair Housing Statement.</a>
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
              Ready to Start Your Rental Search?
            </h2>
            <p className="text-cream/70 text-base sm:text-lg leading-relaxed mb-8">
              Contact Rob to discuss your search criteria and confirm availability before purchasing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:rob@myrockhomes.com?subject=Rental%20Tour%20Support%20Inquiry"
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
    </div>
  );
}
