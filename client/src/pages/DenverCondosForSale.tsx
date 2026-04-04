/**
 * Denver Condos for Sale — My Rock Realty
 * First Denver spoke page — focused property-type page for condo-search intent
 * Design: Front Range Modern — matches existing site design system
 * Palette: Warm charcoal (#292524), cream (#F5F0EB), antique gold (#C9A96E)
 * Typography: Outfit (display) + Libre Franklin (body)
 */

import { useState } from "react";
import { Link } from "wouter";
import SeoHead from "@/components/seo/SeoHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";
import {
  ArrowRight,
  ArrowLeft,
  Home,
  MapPin,
  DollarSign,
  Users,
  CheckCircle2,
  Phone,
  Mail,
  ChevronDown,
  Loader2,
} from "lucide-react";

/* Hero Background Image — Approved Denver metro aerial view */
const DENVER_HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/denver-rowhouses-hero_2f59d4ac.jpg";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "What types of condos can buyers find in Denver?",
    answer:
      "Buyers can find a wide range of condo options in Denver, including urban high-rise units, low-rise condos, loft-style residences, newer developments, and condos in established neighborhoods.",
  },
  {
    question: "Are condos in Denver good for first-time buyers?",
    answer:
      "Condos can be a strong option for first-time buyers in Denver because they often offer a lower entry price point than detached homes in the same area, depending on the neighborhood and building.",
  },
  {
    question: "What should buyers consider before purchasing a condo in Denver?",
    answer:
      "Buyers should review HOA fees, building rules, amenities, parking, reserve health, pet policies, and the overall condition of the building in addition to the condo unit itself.",
  },
  {
    question: "Are condos available in walkable Denver neighborhoods?",
    answer:
      "Yes. Many buyers explore condos in walkable Denver areas with access to restaurants, shops, parks, public spaces, and neighborhood business districts.",
  },
  {
    question: "How is buying a condo different from buying a house?",
    answer:
      "Condo purchases often involve added review of the homeowners association, shared building conditions, and community rules, while detached-home purchases focus more heavily on the individual lot and structure.",
  },
];

/* ─── Build FAQ Schema ─── */
const faqSchema = buildFAQPageSchema(faqContent);

/* ─── Breadcrumb Schema ─── */
const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Denver Condos for Sale", url: "/denver-condos-for-sale" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function CTAButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="mailto:rob@myrockhomes.com?subject=Denver Condo Buying Consultation"
      className={`inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 bg-gold text-charcoal hover:bg-gold-light hover:shadow-lg px-7 py-4 text-[15px] sm:text-base no-underline ${className}`}
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      Schedule a Consultation
      <ArrowRight size={18} />
    </a>
  );
}

export default function DenverCondosForSale() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="hub-page min-h-screen flex flex-col bg-cream">
      <SeoHead
        metadata={{
          title: "Denver Condos for Sale | Condominiums in Denver, Colorado",
          description:
            "Explore Denver condos for sale, condo living in Denver neighborhoods, common condo price ranges, amenities, lifestyle benefits, and helpful condo-buying resources.",
          canonicalUrl: "https://myrockhomes.com/denver-condos-for-sale",
          breadcrumbs: breadcrumbItems,
        }}
        schema={faqSchema ? [faqSchema] : []}
      />

      {/* ═══════════════════════════════════════════════════
          BREADCRUMBS
      ═══════════════════════════════════════════════════ */}
      <div className="bg-charcoal">
        <div className="container py-3">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          1. HERO — Denver Condos for Sale
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-charcoal overflow-hidden">
        {/* Hero Background Image */}
        <img
          src={DENVER_HERO_BG}
          alt="Row houses along a residential street in Denver"
          className="absolute inset-0 w-full h-full object-cover object-center"
          width="1600"
          height="900"
          fetchPriority="high"
          decoding="async"
        />
        {/* Gradient Overlay — ensures text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/90" />
        <div className="container relative z-10 py-16 sm:py-20 md:py-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-2xl"
          >
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-cream mb-6 leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Denver Condos for Sale
            </h1>
            <p className="text-lg text-cream/80 mb-8 leading-relaxed">
              Explore condo living in Denver. From urban high-rises to walkable
              neighborhoods, find your ideal condo with expert guidance and
              market insight.
            </p>
            <CTAButton />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          2. Why Buyers Consider Condos in Denver
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Why Buyers Consider Condos in Denver
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Lower Entry Price",
                desc: "Condos often offer a more accessible entry point than detached homes in the same area.",
              },
              {
                icon: Home,
                title: "Low-Maintenance Living",
                desc: "HOA typically handles exterior maintenance, landscaping, and common areas.",
              },
              {
                icon: MapPin,
                title: "Walkable Locations",
                desc: "Many Denver condos are located in vibrant, walkable neighborhoods with easy access to amenities.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                className="bg-white rounded-lg p-6 border border-charcoal/10 shadow-sm"
              >
                <item.icon
                  size={32}
                  className="text-gold mb-4"
                  strokeWidth={1.5}
                />
                <h3
                  className="text-xl font-bold text-charcoal mb-2"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-charcoal/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          3. Condo Living in Denver Neighborhoods
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Condo Living in Denver Neighborhoods
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Wash Park",
                link: "/wash-park-denver-homes-for-sale",
              },
              {
                name: "Cherry Creek",
                link: "/cherry-creek-denver-homes-for-sale",
              },
              {
                name: "LoHi",
                link: "/lohi-denver-homes-for-sale",
              },
              {
                name: "RiNo",
                link: "/rino-denver-homes-for-sale",
              },
              {
                name: "Central Park",
                link: "/central-park-denver-homes-for-sale",
              },
              {
                name: "Sloan Lake",
                link: "/sloan-lake-denver-homes-for-sale",
              },
            ].map((neighborhood, idx) => (
              <motion.a
                key={idx}
                href={neighborhood.link}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                className="bg-cream/10 hover:bg-cream/20 rounded-lg p-6 border border-cream/20 transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-cream group-hover:text-gold transition-colors">
                    {neighborhood.name}
                  </h3>
                  <ArrowRight
                    size={18}
                    className="text-gold group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          4. What to Know Before Buying a Condo
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            What to Know Before Buying a Condo
          </h2>
          <div className="space-y-4">
            {[
              "Review HOA fees and what they cover",
              "Understand building rules and restrictions",
              "Evaluate amenities and their condition",
              "Check parking availability and costs",
              "Assess the reserve fund health",
              "Review pet policies and restrictions",
              "Inspect the overall building condition",
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                className="flex items-start gap-4 p-4 bg-white rounded-lg border border-charcoal/10"
              >
                <CheckCircle2
                  size={24}
                  className="text-gold flex-shrink-0 mt-0.5"
                  strokeWidth={1.5}
                />
                <p className="text-charcoal/80">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          5. Denver Condo Market Considerations
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-8 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Denver Condo Market Considerations
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="bg-cream/10 rounded-lg p-8 border border-cream/20"
          >
            <p className="text-cream/90 leading-relaxed mb-6">
              Denver's condo market reflects strong demand for accessible urban
              living. Buyers explore condos across price ranges and
              neighborhoods, from downtown high-rises to suburban communities.
              Market conditions, HOA health, and building age all influence
              value and buyer experience.
            </p>
            <p className="text-cream/90 leading-relaxed">
              Working with an experienced agent helps buyers navigate condo
              specifics, understand market trends, and make confident decisions
              aligned with their goals.
            </p>
          </motion.div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════
          7. Denver Condo Buyer Resources
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-8 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Denver Condo Buyer Resources
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="bg-cream/10 rounded-lg p-8 border border-cream/20"
          >
            <p className="text-cream/90 leading-relaxed mb-6">
              Buying a condo involves unique considerations compared to
              detached-home purchases. Understanding HOA structures, building
              health, and community rules helps buyers make informed decisions.
            </p>
            <p className="text-cream/90 leading-relaxed mb-8">
              Rob Baker works with Denver condo buyers at every stage—from
              initial exploration through closing. Get clear guidance on market
              trends, neighborhood options, and the condo-buying process.
            </p>
            <a
              href="/denver-homes-for-sale"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-semibold"
            >
              Back to Denver Homes Hub
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          8. Denver Condo FAQs
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Denver Condo FAQs
          </h2>
          <div className="space-y-4">
            {faqContent.map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                className="bg-white rounded-lg border border-charcoal/10 overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === idx ? null : idx)
                  }
                  className="w-full flex items-center justify-between p-6 hover:bg-cream/50 transition-colors text-left"
                >
                  <h3 className="font-bold text-charcoal pr-4">
                    {item.question}
                  </h3>
                  <ChevronDown
                    size={20}
                    className={`text-gold flex-shrink-0 transition-transform ${
                      expandedFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 pb-6 border-t border-charcoal/10 text-charcoal/80">
                    {item.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          9. Final CTA
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
          >
            <h2
              className="text-3xl sm:text-4xl font-bold text-cream mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Ready to Explore Denver Condos?
            </h2>
            <p className="text-lg text-cream/80 mb-8">
              Schedule a consultation to discuss your condo-buying goals and
              explore options in Denver neighborhoods.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <CTAButton />
              <a
                href="/denver-homes-for-sale"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-gold text-gold hover:bg-gold hover:text-charcoal px-7 py-4 text-[15px] sm:text-base no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Browse Denver Listings
                <ArrowRight size={18} />
              </a>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-cream/50 text-xs">
              <a
                href="tel:+17203636544"
                className="inline-flex items-center gap-1.5 hover:text-gold transition-colors"
              >
                <Phone size={12} />
                720-363-6544
              </a>
              <a
                href="mailto:rob@myrockhomes.com"
                className="inline-flex items-center gap-1.5 hover:text-gold transition-colors"
              >
                <Mail size={12} />
                rob@myrockhomes.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
