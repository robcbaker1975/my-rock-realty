/**
 * Flexible Listing Plans — My Rock Realty
 * Seller-facing landing page for flexible listing tier options
 * Design: Front Range Modern — matches existing site design system
 * Palette: Warm charcoal (#292524), cream (#F5F0EB), antique gold (#C9A96E)
 * Typography: Outfit (display) + Libre Franklin (body)
 */

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SeoHead from "@/components/seo/SeoHead";
import LeadForm from "@/components/LeadForm";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

const LOGO_URL = "/assets/logo.png";

/* ─── Tier data ─── */
const tiers = [
  {
    percent: "1%",
    name: "Essential",
    tagline: "Core listing exposure and the essentials needed to get a home on the market.",
    best: "Best for sellers who want a streamlined path to market with the essentials covered.",
    features: [
      "MLS Listing Placement",
      "Professional Photography",
      "Yard Sign + Lockbox",
      "Showing Coordination",
    ],
    highlight: false,
  },
  {
    percent: "2%",
    name: "Enhanced",
    tagline: "Stronger marketing support, reporting, and digital outreach.",
    best: "Best for sellers who want more visibility and ongoing communication throughout the listing.",
    features: [
      "Everything in Essential",
      "Floor Plan",
      "Seller Reports",
      "Social Media Marketing",
      "Email Marketing Campaign",
    ],
    highlight: false,
  },
  {
    percent: "3%",
    name: "Premium",
    tagline: "Expanded exposure, stronger marketing, and more hands-on strategy during the listing.",
    best: "Best for sellers who want a more active approach and broader reach for their home.",
    features: [
      "Everything in Enhanced",
      "Drone + Video Marketing",
      "Twilight Marketing",
      "Property Website",
      "Weekly Strategy Calls",
      "Targeted Buyer Outreach",
      "Bi-Weekly Seller Reports",
      "Photo Prep / Staging Consultation",
      "Seller Prep & Safety Checklist",
    ],
    highlight: true,
  },
  {
    percent: "4%",
    name: "Concierge",
    tagline: "The highest-touch experience and the most complete marketing support available.",
    best: "Best for sellers who want full-service coordination and maximum marketing investment.",
    features: [
      "Everything in Premium",
      "Cinematic Video Production",
      "Branded Property Website",
      "Featured Listing Placement on MyRockHomes.com",
      "Paid Social Media Advertising Campaign",
      "Buyer Retargeting Ad Strategy",
      "Professional Copywriting",
      "Custom Paid Marketing Campaign",
      "Weekly Seller Reports",
      "Priority Strategy Communication",
      "Vendor Coordination & Project Oversight",
      "Virtual Staging for Vacant Homes",
    ],
    highlight: false,
  },
];

/* ─── FAQ ─── */
const faqItems = [
  {
    q: "What does the listing fee cover?",
    a: "The listing fee covers Rob's services as your listing agent — including the marketing, coordination, and support described in each plan. Buyer-agent compensation and other transaction costs are separate and will be reviewed with you before any agreement is signed.",
  },
  {
    q: "Can I change plans once I've started?",
    a: "Plan details and terms are established before the listing agreement is signed. If your needs change, that's a conversation worth having before you commit. Rob will walk through the options with you so you can choose with confidence.",
  },
  {
    q: "Is the 1% plan a limited-service listing?",
    a: "The 1% Essential plan includes MLS listing exposure, professional photography, a yard sign and lockbox, and showing coordination — the core elements needed to get your home on the market. It's designed for sellers who want the essentials without additional marketing layers.",
  },
  {
    q: "What if I'm not sure which plan fits my home?",
    a: "That's exactly what the seller consultation is for. Rob will review your home, your goals, and your timeline — and help you decide which plan makes the most sense before you commit to anything.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-charcoal/10 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 px-1 text-left gap-4 group"
        aria-expanded={open}
      >
        <span
          className="text-[15px] sm:text-base font-semibold text-charcoal leading-snug"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          {q}
        </span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-gold transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-72 pb-5" : "max-h-0"}`}
      >
        <p className="text-[14px] sm:text-[15px] text-charcoal/70 leading-relaxed px-1">
          {a}
        </p>
      </div>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FlexibleListingPlans() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-warm-white">
      <SeoHead
        metadata={{
          title: "Flexible Listing Plans for Colorado Sellers | My Rock Realty",
          description:
            "Choose from 1% Essential, 2% Enhanced, 3% Premium, or 4% Concierge listing plans. Clear service levels, transparent expectations, and no pressure to choose more than you need.",
          canonicalUrl: "https://myrockhomes.com/flexible-listing-plans",
        }}
        schema={[]}
      />

      {/* ═══════════════════════════════════════════════════
          HEADER
      ═══════════════════════════════════════════════════ */}
      <header className="bg-charcoal">
        <div className="container flex items-center justify-center sm:justify-between py-3 sm:py-4">
          <a
            href="/"
            className="flex items-center gap-2"
            aria-label="My Rock Realty — Home"
          >
            <img
              src={LOGO_URL}
              alt="My Rock Realty"
              width="40"
              height="40"
              className="h-9 w-auto object-contain"
              loading="eager"
              decoding="async"
            />
            <span
              className="text-cream font-bold text-lg sm:text-xl tracking-tight hidden sm:block"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              My Rock Realty
            </span>
          </a>
          <a
            href="/"
            className="absolute top-4 right-4 sm:static text-cream/70 hover:text-gold text-xs sm:text-sm font-medium transition-colors inline-flex items-center gap-1.5"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <ArrowLeft size={14} />
            Back to Main Site
          </a>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════ */}
      <section className="bg-charcoal pt-10 pb-14 sm:pt-14 sm:pb-20">
        <div className="container max-w-3xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <span
              className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              For Sellers · My Rock Realty
            </span>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Flexible Listing Plans for Colorado Sellers
            </h1>
            <p
              className="text-cream/70 text-[16px] sm:text-lg md:text-xl leading-relaxed mb-4"
              style={{ fontFamily: "'Libre Franklin', sans-serif" }}
            >
              Choose from 1% Essential, 2% Enhanced, 3% Premium, or 4% Concierge based on the marketing, exposure, and support you want for your home sale.
            </p>
            <p
              className="text-cream/55 text-[14px] sm:text-[15px] leading-relaxed mb-8"
              style={{ fontFamily: "'Libre Franklin', sans-serif" }}
            >
              Every home sale is different, and not every seller wants the same level of service. Some want a streamlined listing with the essentials covered. Others want more strategy, more marketing, and more hands-on coordination. The goal is to give you clear options and help you choose the right fit.
            </p>
            <p
              className="text-gold/70 text-[13px] sm:text-sm font-medium italic"
              style={{ fontFamily: "'Libre Franklin', sans-serif" }}
            >
              Transparent options. Clear expectations. No pressure to choose more than you need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          TIER GRID
      ═══════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-20 bg-warm-white">
        <div className="container">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10 sm:mb-14"
          >
            <h2
              className="text-2xl sm:text-3xl font-bold text-charcoal mb-3"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Compare Listing Plans
            </h2>
            <p
              className="text-charcoal/60 text-[15px] sm:text-base max-w-2xl"
              style={{ fontFamily: "'Libre Franklin', sans-serif" }}
            >
              Each plan builds on the previous one. Choose the level that fits your home, your timeline, and your goals.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`flex flex-col rounded-xl border ${
                  tier.highlight
                    ? "border-gold/50 bg-charcoal shadow-xl shadow-charcoal/10"
                    : "border-charcoal/12 bg-white shadow-sm"
                } overflow-hidden`}
              >
                {/* Tier header */}
                <div
                  className={`px-6 pt-6 pb-5 ${
                    tier.highlight ? "bg-charcoal" : "bg-white"
                  }`}
                >
                  {tier.highlight && (
                    <span
                      className="inline-block text-[11px] font-bold tracking-widest uppercase text-charcoal bg-gold px-3 py-1 rounded-full mb-3"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      Most Popular
                    </span>
                  )}
                  <div className="flex items-baseline gap-1.5 mb-1">
                    <span
                      className={`text-4xl font-bold ${
                        tier.highlight ? "text-gold" : "text-charcoal"
                      }`}
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {tier.percent}
                    </span>
                    <span
                      className={`text-base font-semibold ${
                        tier.highlight ? "text-cream/70" : "text-charcoal/60"
                      }`}
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      listing fee
                    </span>
                  </div>
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      tier.highlight ? "text-white" : "text-charcoal"
                    }`}
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className={`text-[13px] sm:text-sm leading-relaxed ${
                      tier.highlight ? "text-cream/55" : "text-charcoal/55"
                    }`}
                    style={{ fontFamily: "'Libre Franklin', sans-serif" }}
                  >
                    {tier.best}
                  </p>
                </div>

                {/* Divider */}
                <div
                  className={`h-px mx-6 ${
                    tier.highlight ? "bg-white/10" : "bg-charcoal/8"
                  }`}
                />

                {/* Features */}
                <div
                  className={`flex-1 px-6 py-5 ${
                    tier.highlight ? "bg-charcoal" : "bg-white"
                  }`}
                >
                  <ul className="space-y-2.5">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckCircle2
                          size={15}
                          className={`shrink-0 mt-0.5 ${
                            tier.highlight ? "text-gold" : "text-gold-dark"
                          }`}
                        />
                        <span
                          className={`text-[13px] sm:text-sm leading-snug ${
                            tier.highlight ? "text-cream/75" : "text-charcoal/75"
                          }`}
                          style={{ fontFamily: "'Libre Franklin', sans-serif" }}
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Clarity disclaimer */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 text-[12px] sm:text-[13px] text-charcoal/45 text-center max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Libre Franklin', sans-serif" }}
          >
            Plans vary by service scope, property needs, market conditions, and final agreement terms. Details are reviewed before any listing agreement is signed.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SELLER CONSULTATION FORM
      ═══════════════════════════════════════════════════ */}
      <section
        id="seller-consultation"
        className="py-12 sm:py-20 bg-charcoal"
      >
        <div className="container max-w-2xl">
          <LeadForm
            variant="seller"
            source="Flexible Listing Plans"
            dark
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-20 bg-warm-white">
        <div className="container max-w-2xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2
              className="text-2xl sm:text-3xl font-bold text-charcoal"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Common Questions
            </h2>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-xl border border-charcoal/8 px-5 sm:px-8 shadow-sm"
          >
            {faqItems.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════════ */}
      <footer className="bg-charcoal border-t border-white/8 py-8">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p
              className="text-cream/50 text-[13px]"
              style={{ fontFamily: "'Libre Franklin', sans-serif" }}
            >
              © {new Date().getFullYear()} My Rock Realty LLC · Lic. ER100078487 · Colorado
            </p>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="/privacy"
              className="text-cream/40 hover:text-gold text-[12px] transition-colors no-underline"
              style={{ fontFamily: "'Libre Franklin', sans-serif" }}
            >
              Privacy
            </a>
            <a
              href="/fair-housing"
              className="text-cream/40 hover:text-gold text-[12px] transition-colors no-underline"
              style={{ fontFamily: "'Libre Franklin', sans-serif" }}
            >
              Fair Housing
            </a>
            <a
              href="/"
              className="text-cream/40 hover:text-gold text-[12px] transition-colors no-underline"
              style={{ fontFamily: "'Libre Franklin', sans-serif" }}
            >
              Main Site
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
