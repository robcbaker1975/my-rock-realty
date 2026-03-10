/**
 * Buying a Home in Denver — My Rock Realty
 * First guide page in the Denver SEO cluster
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
  Home,
  MapPin,
  CheckCircle2,
  Phone,
  Mail,
  ChevronDown,
  BookOpen,
  DollarSign,
  Compass,
} from "lucide-react";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "What should buyers do first when planning to buy a home in Denver?",
    answer:
      "Buyers usually start by clarifying budget, speaking with a lender or reviewing financing options, and narrowing down which Denver neighborhoods or suburbs best fit their goals.",
  },
  {
    question: "How competitive is the Denver home market for buyers?",
    answer:
      "Competition can vary by price point, location, inventory levels, and season, so buyers should be prepared for changing conditions across different parts of the Denver market.",
  },
  {
    question: "Should buyers focus on Denver neighborhoods or surrounding suburbs?",
    answer:
      "That depends on lifestyle, commute needs, budget, and housing preferences. Some buyers prefer central Denver neighborhoods, while others focus on suburbs for different layout, community, or price considerations.",
  },
  {
    question: "What should buyers pay attention to besides the home itself?",
    answer:
      "Buyers should also evaluate location, commute patterns, neighborhood fit, resale potential, property condition, and how the home compares with nearby alternatives.",
  },
  {
    question: "Why is local market guidance helpful when buying in Denver?",
    answer:
      "Local guidance can help buyers compare neighborhoods, understand market patterns, prepare stronger search strategies, and make more confident decisions in a competitive metro-area market.",
  },
];

/* ─── Build FAQ Schema ─── */
const faqSchema = buildFAQPageSchema(faqContent);

/* ─── Breadcrumb Items ─── */
const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Buying a Home in Denver", url: "/buying-a-home-in-denver" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function CTAButton({
  label = "Schedule a Denver Home Buying Consultation",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a
      href="mailto:rob@myrockhomes.com?subject=Denver Home Buying Consultation"
      className={`inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 bg-gold text-charcoal hover:bg-gold-light hover:shadow-lg px-7 py-4 text-[15px] sm:text-base no-underline ${className}`}
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {label}
      <ArrowRight size={18} />
    </a>
  );
}

export default function BuyingAHomeInDenver() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <SeoHead
        metadata={{
          title: "Buying a Home in Denver | Denver Home Buyer Guide",
          description:
            "Learn about buying a home in Denver, including neighborhood search strategy, financing preparation, market considerations, and practical steps for Denver-area buyers.",
          canonicalUrl: "https://www.myrockhomes.com/buying-a-home-in-denver",
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
          1. HERO — Buying a Home in Denver
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-charcoal overflow-hidden">
        <div className="container py-16 sm:py-20 md:py-24">
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
              Buying a Home in Denver
            </h1>
            <p className="text-lg text-cream/80 mb-8 leading-relaxed">
              A practical guide for buyers navigating the Denver metro area —
              from clarifying your search strategy and financing options to
              understanding neighborhoods, suburbs, and market conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton />
              <a
                href="mailto:rob@myrockhomes.com?subject=Denver Listings — Alert Request"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-gold text-gold hover:bg-gold hover:text-charcoal px-7 py-4 text-[15px] sm:text-base no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Get Alerts for New Denver Listings
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          2. Why Denver Buyers Need a Clear Search Strategy
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Why Denver Buyers Need a Clear Search Strategy
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Compass,
                title: "Market Variability",
                desc: "Competition, inventory, and pricing can shift significantly across Denver neighborhoods and suburbs, making a focused search strategy essential.",
              },
              {
                icon: MapPin,
                title: "Geographic Range",
                desc: "The Denver metro area spans a wide range of neighborhoods and suburbs, each with distinct character, pricing, and lifestyle considerations.",
              },
              {
                icon: Home,
                title: "Housing Variety",
                desc: "From urban condos and townhomes to detached homes in established suburbs, buyers benefit from narrowing down housing type early in the process.",
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
          3. Choosing Between Neighborhoods and Suburbs
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-8 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Choosing Between Neighborhoods and Suburbs
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="bg-cream/10 rounded-lg p-8 border border-cream/20 mb-8"
          >
            <p className="text-cream/90 leading-relaxed mb-6">
              Some buyers prioritize walkability, urban character, and proximity
              to Denver's core neighborhoods. Others focus on suburban settings
              with different housing layouts, community amenities, and pricing
              considerations.
            </p>
            <p className="text-cream/90 leading-relaxed">
              The right choice depends on lifestyle, commute needs, budget, and
              housing preferences. Exploring both options before committing to a
              search area helps buyers make more informed decisions.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Wash Park", link: "/wash-park-denver-homes-for-sale" },
              { label: "Cherry Creek", link: "/cherry-creek-denver-homes-for-sale" },
              { label: "LoHi", link: "/lohi-denver-homes-for-sale" },
              { label: "Parker", link: "/parker-co-homes-for-sale" },
              { label: "Highlands Ranch", link: "/highlands-ranch-co-homes-for-sale" },
              { label: "Castle Rock", link: "/castle-rock-co-homes-for-sale" },
            ].map((item, idx) => (
              <motion.a
                key={idx}
                href={item.link}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                className="bg-cream/10 hover:bg-cream/20 rounded-lg p-4 border border-cream/20 transition-all group flex items-center justify-between"
              >
                <span className="text-cream font-semibold">{item.label}</span>
                <ArrowRight
                  size={16}
                  className="text-gold group-hover:translate-x-1 transition-transform"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          4. Financing and Preparation Before You Buy
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Financing and Preparation Before You Buy
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                icon: DollarSign,
                title: "Clarify Your Budget",
                desc: "Understanding your price range before searching helps focus your efforts and avoids wasted time on homes outside your financing capacity.",
              },
              {
                icon: BookOpen,
                title: "Get Pre-Approved",
                desc: "Pre-approval strengthens your position in competitive situations and gives sellers confidence that you are a serious, qualified buyer.",
              },
              {
                icon: CheckCircle2,
                title: "Review Loan Options",
                desc: "Different loan types have different requirements, rates, and down payment structures. Reviewing options early helps buyers choose the right fit.",
              },
              {
                icon: Compass,
                title: "Understand Closing Costs",
                desc: "Beyond the purchase price, buyers should account for closing costs, inspections, and other transaction expenses when planning their budget.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                className="bg-white rounded-lg p-6 border border-charcoal/10 shadow-sm flex gap-4"
              >
                <item.icon
                  size={28}
                  className="text-gold flex-shrink-0 mt-0.5"
                  strokeWidth={1.5}
                />
                <div>
                  <h3
                    className="text-lg font-bold text-charcoal mb-1"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          5. Denver Market Considerations for Buyers
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Denver Market Considerations for Buyers
          </h2>
          <div className="space-y-4">
            {[
              "Competition varies by price range, neighborhood, and season",
              "Inventory levels shift throughout the year across different areas",
              "Financing strength affects how quickly buyers can move",
              "Some neighborhoods move faster than others depending on demand",
              "Suburban markets can behave differently from central Denver",
              "Resale potential and neighborhood trajectory matter long-term",
              "Working with a local agent helps buyers navigate changing conditions",
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                className="flex items-start gap-4 p-4 bg-cream/10 rounded-lg border border-cream/20"
              >
                <CheckCircle2
                  size={24}
                  className="text-gold flex-shrink-0 mt-0.5"
                  strokeWidth={1.5}
                />
                <p className="text-cream/80">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          6. Practical Steps in the Home Search Process
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Practical Steps in the Home Search Process
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Denver Condos for Sale",
                link: "/denver-condos-for-sale",
              },
              {
                title: "Denver Townhomes for Sale",
                link: "/denver-townhomes-for-sale",
              },
              {
                title: "Denver Luxury Homes",
                link: "/denver-luxury-homes-for-sale",
              },
              {
                title: "Denver New Construction",
                link: "/denver-new-construction-homes",
              },
              {
                title: "Denver Homes Hub",
                link: "/denver-homes-for-sale",
              },
            ].map((resource, idx) => (
              <motion.a
                key={idx}
                href={resource.link}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                className="bg-white hover:shadow-lg rounded-lg p-6 border border-charcoal/10 transition-all group"
              >
                <h3 className="text-lg font-bold text-charcoal mb-3 group-hover:text-gold transition-colors">
                  {resource.title}
                </h3>
                <div className="flex items-center gap-2 text-gold">
                  <span className="text-sm font-semibold">Explore</span>
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          7. Related Denver Buyer Resources
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-8 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Related Denver Buyer Resources
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="bg-cream/10 rounded-lg p-8 border border-cream/20"
          >
            <p className="text-cream/90 leading-relaxed mb-6">
              Understanding the Denver home buying process, first-time buyer
              considerations, and cost of living factors helps buyers approach
              their search with greater confidence.
            </p>
            <div className="space-y-3 mb-8">
              {[
                {
                  title: "Denver Home Buying Process",
                  link: "/denver-home-buying-process",
                },
                {
                  title: "First-Time Home Buyer Denver",
                  link: "/first-time-home-buyer-denver",
                },
                {
                  title: "Cost of Living in Denver, Colorado",
                  link: "/cost-of-living-in-denver-colorado",
                },
              ].map((guide, idx) => (
                <a
                  key={idx}
                  href={guide.link}
                  className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-semibold"
                >
                  <ArrowRight size={16} />
                  {guide.title}
                </a>
              ))}
            </div>
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
          8. Buying a Home in Denver FAQs
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Buying a Home in Denver FAQs
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
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2
              className="text-3xl sm:text-4xl font-bold text-cream mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Ready to Buy a Home in Denver?
            </h2>
            <p className="text-lg text-cream/80 mb-8">
              Schedule a consultation to discuss your Denver home buying goals
              and explore available options across the metro area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <CTAButton />
              <a
                href="/denver-homes-for-sale"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-gold text-gold hover:bg-gold hover:text-charcoal px-7 py-4 text-[15px] sm:text-base no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Explore Denver Homes for Sale
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
