/**
 * Denver vs Boulder — My Rock Realty
 * Comparison page in the Denver SEO cluster
 * Design: Front Range Modern — matches existing site design system
 */

import { useState } from "react";
import SeoHead from "@/components/seo/SeoHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  CheckCircle2,
  Phone,
  Mail,
  ChevronDown,
  Scale,
  Compass,
  DollarSign,
  Home,
} from "lucide-react";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "How do buyers decide between Denver and Boulder?",
    answer:
      "Buyers often compare Denver and Boulder based on lifestyle, commute needs, housing preferences, budget, and which type of Colorado market best fits their goals.",
  },
  {
    question: "Is the housing experience the same in Denver and Boulder?",
    answer:
      "No. The two markets differ in neighborhood patterns, housing types, commute structure, and how buyers evaluate tradeoffs between central areas, surrounding communities, and daily lifestyle needs.",
  },
  {
    question: "Why do some buyers compare Denver and Boulder before moving?",
    answer:
      "Buyers may compare the two cities to understand differences in pace, housing options, lifestyle priorities, and how each location fits work, family, or long-term planning needs.",
  },
  {
    question: "What should buyers evaluate besides home price when comparing Denver and Boulder?",
    answer:
      "Buyers should also evaluate commute patterns, neighborhood fit, total ownership costs, access to amenities, housing stock, and long-term lifestyle preferences.",
  },
  {
    question: "Why is local guidance helpful when comparing Denver and Boulder?",
    answer:
      "Local guidance can help buyers understand practical tradeoffs, avoid oversimplified assumptions, and make more informed decisions based on how each market actually fits their needs.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Denver vs Boulder", url: "/denver-vs-boulder" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function CTAButton({ label = "Schedule a Colorado Home Buying Consultation", className = "" }: { label?: string; className?: string }) {
  return (
    <a
      href="mailto:rob@myrockhomes.com?subject=Colorado Home Buying Consultation"
      className={`inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 bg-gold text-charcoal hover:bg-gold-light hover:shadow-lg px-7 py-4 text-[15px] sm:text-base no-underline ${className}`}
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {label}
      <ArrowRight size={18} />
    </a>
  );
}

export default function DenverVsBoulder() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <SeoHead
        metadata={{
          title: "Denver vs Boulder | Colorado City Comparison for Home Buyers",
          description:
            "Compare Denver vs Boulder for home buyers, including housing considerations, lifestyle tradeoffs, location factors, and practical guidance for choosing between the two markets.",
          canonicalUrl: "https://www.myrockhomes.com/denver-vs-boulder",
          breadcrumbs: breadcrumbItems,
        }}
        schema={faqSchema ? [faqSchema] : []}
      />

      {/* BREADCRUMBS */}
      <div className="bg-charcoal">
        <div className="container py-3">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* 1. HERO */}
      <section className="relative bg-charcoal overflow-hidden">
        <div className="container py-16 sm:py-20 md:py-24">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-cream mb-6 leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Denver vs Boulder
            </h1>
            <p className="text-lg text-cream/80 mb-8 leading-relaxed">
              A practical overview of the tradeoffs between Denver and Boulder for home buyers —
              covering housing, lifestyle, location, and decision factors for buyers evaluating
              both Front Range markets.
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

      {/* 2. Why Buyers Compare These Two Markets */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Why Buyers Compare These Two Markets
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Scale,
                title: "Different Market Scales",
                desc: "Denver and Boulder offer different metro scales, community densities, and neighborhood patterns that affect how buyers evaluate each location.",
              },
              {
                icon: MapPin,
                title: "Lifestyle Priorities",
                desc: "Buyers comparing the two cities often weigh differences in pace, access to amenities, outdoor recreation, and community character.",
              },
              {
                icon: Compass,
                title: "Long-Term Planning",
                desc: "Work location, family needs, and long-term lifestyle goals often drive buyers to evaluate both Front Range markets before committing to one area.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                className="bg-white rounded-lg p-6 border border-charcoal/10 shadow-sm"
              >
                <item.icon size={32} className="text-gold mb-4" strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-charcoal mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {item.title}
                </h3>
                <p className="text-charcoal/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Housing and Neighborhood Tradeoffs */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-8 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Housing and Neighborhood Tradeoffs
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="bg-cream/10 rounded-lg p-8 border border-cream/20 mb-8"
          >
            <p className="text-cream/90 leading-relaxed mb-6">
              The two markets differ in neighborhood patterns, housing types, and how buyers
              evaluate tradeoffs between central areas, surrounding communities, and daily
              lifestyle needs. Denver offers a wider range of urban neighborhoods and suburbs,
              while Boulder has a distinct community structure with different housing stock and
              pricing dynamics.
            </p>
            <p className="text-cream/90 leading-relaxed">
              Buyers focused on Denver can explore neighborhoods like Wash Park and Cherry Creek,
              or suburbs like Parker and Highlands Ranch, depending on lifestyle and commute
              priorities.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Wash Park Denver Homes", link: "/wash-park-denver-homes-for-sale" },
              { label: "Cherry Creek Denver Homes", link: "/cherry-creek-denver-homes-for-sale" },
              { label: "Parker Homes", link: "/parker-co-homes-for-sale" },
              { label: "Highlands Ranch Homes", link: "/highlands-ranch-co-homes-for-sale" },
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
                <ArrowRight size={16} className="text-gold group-hover:translate-x-1 transition-transform" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Lifestyle and Location Considerations */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Lifestyle and Location Considerations
          </h2>
          <div className="space-y-4">
            {[
              "Metro scale and community pace differ between Denver and Boulder",
              "Outdoor recreation access varies by location within each city",
              "Urban amenities and walkability differ between the two markets",
              "School district options and community structures vary across both cities",
              "Employment centers and commute patterns are distinct in each market",
              "Neighborhood feel and community character differ significantly",
              "Long-term lifestyle fit depends on individual priorities and goals",
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                className="flex items-start gap-4 p-4 bg-white rounded-lg border border-charcoal/10 shadow-sm"
              >
                <CheckCircle2 size={24} className="text-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <p className="text-charcoal/80">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Cost, Commute, and Practical Decision Factors */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Cost, Commute, and Practical Decision Factors
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                icon: DollarSign,
                title: "Total Ownership Costs",
                desc: "Beyond purchase price, buyers should evaluate property taxes, HOA fees, maintenance costs, and other ownership factors in each market.",
              },
              {
                icon: Compass,
                title: "Commute Structure",
                desc: "Commute patterns differ between the two markets. Buyers should evaluate where employment is located relative to target neighborhoods in each city.",
              },
              {
                icon: Home,
                title: "Housing Stock",
                desc: "The range of housing types, lot sizes, and property ages varies between Denver and Boulder, affecting buyer options at different price points.",
              },
              {
                icon: MapPin,
                title: "Access to Amenities",
                desc: "Proximity to dining, retail, healthcare, and recreation varies between the two cities and within different areas of each market.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                className="bg-cream/10 rounded-lg p-6 border border-cream/20 flex gap-4"
              >
                <item.icon size={28} className="text-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <h3 className="text-lg font-bold text-cream mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-cream/70 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-8 max-w-3xl mx-auto">
            {[
              { title: "Denver Condos for Sale", link: "/denver-condos-for-sale" },
              { title: "Denver Townhomes for Sale", link: "/denver-townhomes-for-sale" },
              { title: "Denver Luxury Homes for Sale", link: "/denver-luxury-homes-for-sale" },
            ].map((item, idx) => (
              <motion.a
                key={idx}
                href={item.link}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                className="bg-cream/10 hover:bg-cream/20 rounded-lg p-4 border border-cream/20 transition-all group flex items-center justify-between"
              >
                <span className="font-semibold text-cream text-sm">{item.title}</span>
                <ArrowRight size={16} className="text-gold group-hover:translate-x-1 transition-transform" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* 6. How Buyers Can Narrow the Right Fit */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            How Buyers Can Narrow the Right Fit
          </h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Define Priorities", desc: "Clarify lifestyle preferences, commute needs, housing type, and budget before comparing the two markets." },
              { step: "2", title: "Research Both Markets", desc: "Understand the neighborhood and community options in each city to narrow the comparison to specific areas." },
              { step: "3", title: "Evaluate Commute Patterns", desc: "Identify where employment is located and how commute structure differs between Denver and Boulder." },
              { step: "4", title: "Compare Total Costs", desc: "Look beyond purchase price to evaluate total ownership costs in each market and at different price points." },
              { step: "5", title: "Use Local Guidance", desc: "Local expertise helps buyers understand practical tradeoffs and avoid oversimplified assumptions about either market." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                className="flex items-start gap-4 p-4 bg-white rounded-lg border border-charcoal/10 shadow-sm"
              >
                <span className="text-gold font-bold text-lg flex-shrink-0 w-6 text-center">{item.step}</span>
                <div>
                  <h3 className="font-bold text-charcoal mb-1">{item.title}</h3>
                  <p className="text-charcoal/70 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Related Colorado Buyer Resources */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-8 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Related Colorado Buyer Resources
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="bg-cream/10 rounded-lg p-8 border border-cream/20"
          >
            <p className="text-cream/90 leading-relaxed mb-6">
              Buyers comparing Denver and Boulder benefit from understanding the Denver home
              buying process, relocation considerations, and cost of living tradeoffs before
              narrowing their search.
            </p>
            <div className="space-y-3 mb-8">
              {[
                { title: "Buying a Home in Denver", link: "/buying-a-home-in-denver" },
                { title: "First-Time Home Buyer Denver", link: "/first-time-home-buyer-denver" },
                { title: "Denver Home Buying Process", link: "/denver-home-buying-process" },
                { title: "Cost of Living in Denver Colorado", link: "/cost-of-living-in-denver-colorado" },
                { title: "Relocating to Denver Colorado", link: "/relocation/relocating-to-denver-colorado" },
                { title: "Denver vs Colorado Springs", link: "/denver-vs-colorado-springs" },
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
            <a href="/denver-homes-for-sale" className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-semibold">
              Back to Denver Homes Hub
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 8. FAQs */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Denver vs Boulder FAQs
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
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 hover:bg-cream/50 transition-colors text-left"
                >
                  <h3 className="font-bold text-charcoal pr-4">{item.question}</h3>
                  <ChevronDown
                    size={20}
                    className={`text-gold flex-shrink-0 transition-transform ${expandedFaq === idx ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 pb-6 border-t border-charcoal/10 text-charcoal/80">{item.answer}</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl text-center">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2
              className="text-3xl sm:text-4xl font-bold text-cream mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Ready to Explore Your Colorado Options?
            </h2>
            <p className="text-lg text-cream/80 mb-8">
              Schedule a consultation to discuss your goals, compare Denver and Boulder, and
              build a realistic home search plan for the right Colorado market.
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
              <a href="tel:+17203636544" className="inline-flex items-center gap-1.5 hover:text-gold transition-colors">
                <Phone size={12} />
                720-363-6544
              </a>
              <a href="mailto:rob@myrockhomes.com" className="inline-flex items-center gap-1.5 hover:text-gold transition-colors">
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
