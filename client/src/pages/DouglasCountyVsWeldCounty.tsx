/**
 * Douglas County vs Weld County — My Rock Realty
 * County comparison guide for home buyers
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

/* Hero Background Image — Approved Denver metro aerial view */
const DENVER_HERO_BG = "/images/denver-rowhouses-hero.jpg";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "How do buyers decide between Douglas County and Weld County?",
    answer:
      "Buyers often compare the two counties based on location relative to Denver, housing preferences, commute needs, budget, and which communities best fit their lifestyle and long-term goals.",
  },
  {
    question: "Are the housing markets in Douglas County and Weld County similar?",
    answer:
      "The two counties differ in community character, geographic orientation, housing types, and market structure. Douglas County is south of Denver along the I-25 corridor, while Weld County is north and northeast of Denver, offering different access patterns and community structures.",
  },
  {
    question: "Why do some buyers compare Douglas County and Weld County before deciding?",
    answer:
      "Buyers may compare the two counties to understand differences in location, housing mix, community feel, and how each area fits work, family, or long-term planning needs before committing to a specific area.",
  },
  {
    question: "What should buyers evaluate besides home price when comparing the two counties?",
    answer:
      "Buyers should also evaluate commute patterns relative to their workplace, neighborhood character, total ownership costs, access to services, housing stock variety, and long-term lifestyle preferences.",
  },
  {
    question: "Is local guidance helpful when comparing Douglas County and Weld County?",
    answer:
      "Local guidance can help buyers understand practical tradeoffs between the two counties, avoid oversimplified assumptions, and make more informed decisions based on how each area actually fits their needs.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Douglas County vs Weld County", url: "/douglas-county-vs-weld-county" },
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

export default function DouglasCountyVsWeldCounty() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <SeoHead
        metadata={{
          title: "Douglas County vs Weld County | Colorado County Comparison for Home Buyers",
          description:
            "Douglas County vs Weld County comparison for home buyers. Compare location, housing types, communities, and buyer tradeoffs across both Colorado counties.",
          canonicalUrl: "https://www.myrockhomes.com/douglas-county-vs-weld-county",
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
        <img
          src={DENVER_HERO_BG}
          alt="Row houses along a residential street in the Denver metro area"
          className="absolute inset-0 w-full h-full object-cover object-center"
        
          width="1600"
          height="900"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/90" />
        <div className="container relative z-10 py-16 sm:py-20 md:py-24">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-cream mb-6 leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Douglas County vs Weld County
            </h1>
            <p className="text-lg text-cream/80 mb-8 leading-relaxed">
              A practical overview of the tradeoffs between Douglas County and Weld County for
              home buyers — covering location, housing mix, community character, and decision
              factors for buyers evaluating both Colorado counties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton />
              <a
                href="mailto:rob@myrockhomes.com?subject=Douglas County Listings — Alert Request"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-gold text-gold hover:bg-gold hover:text-charcoal px-7 py-4 text-[15px] sm:text-base no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Get Alerts for New Listings
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Why Buyers Compare These Two Counties */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Why Buyers Compare These Two Counties
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Scale,
                title: "Different Geographic Orientation",
                desc: "Douglas County is located south of Denver along the I-25 corridor, while Weld County extends north and northeast of Denver. The two counties offer different access patterns and commute structures depending on where buyers work.",
              },
              {
                icon: MapPin,
                title: "Community Character Varies",
                desc: "Douglas County communities like Parker, Castle Pines, Centennial, and Lone Tree have distinct characters from Weld County communities like Greeley, Evans, Platteville, and LaSalle. Buyers often compare the feel and pace of each area.",
              },
              {
                icon: Compass,
                title: "Housing Mix and Price Points",
                desc: "Both counties offer a range of housing types and price points, but the specific mix of neighborhoods, lot sizes, and housing styles differs. Buyers should research both counties to understand which options best fit their preferences.",
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

      {/* 3. Douglas County Communities */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-8 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Douglas County Communities
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="bg-cream/10 rounded-lg p-8 border border-cream/20 mb-8"
          >
            <p className="text-cream/90 leading-relaxed mb-4">
              Douglas County is located south of Denver along the I-25 corridor and includes a
              range of communities with varying proximity to the Denver metro core. Castle Rock
              serves as the county seat. Buyers in Douglas County can explore a mix of
              established communities and planned developments across several distinct cities.
            </p>
            <p className="text-cream/90 leading-relaxed">
              Communities in Douglas County may appeal to buyers who prioritize access to the
              south Denver metro, specific community character, or particular housing types.
              Buyers should research individual cities to understand how each fits their needs.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Douglas County Hub", link: "/douglas-co-homes-for-sale" },
              { label: "Parker CO Homes", link: "/parker-co-homes-for-sale" },
              { label: "Castle Pines CO Homes", link: "/castle-pines-co-homes-for-sale" },
              { label: "Centennial CO Homes", link: "/centennial-co-homes-for-sale" },
              { label: "Lone Tree CO Homes", link: "/lone-tree-co-homes-for-sale" },
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

      {/* 4. Weld County Communities */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-8 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Weld County Communities
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="bg-charcoal/5 rounded-lg p-8 border border-charcoal/10 mb-8"
          >
            <p className="text-charcoal/80 leading-relaxed mb-4">
              Weld County is located north and northeast of Denver and includes a range of
              communities along the US-34, US-85, and I-25 corridors. Greeley serves as the
              county seat. Buyers in Weld County can explore a mix of city neighborhoods and
              smaller communities with varying proximity to the Denver metro and Fort Collins.
            </p>
            <p className="text-charcoal/80 leading-relaxed">
              Communities in Weld County may appeal to buyers who prioritize access to the
              northern Colorado corridor, specific community character, or particular housing
              types. Buyers should research individual cities to understand how each fits their needs.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Greeley CO Hub", link: "/greeley-co-homes-for-sale" },
              { label: "Greeley Homes", link: "/greeley-homes-for-sale" },
              { label: "Evans CO Homes", link: "/evans-co-homes-for-sale" },
              { label: "Platteville CO Homes", link: "/platteville-co-homes-for-sale" },
              { label: "LaSalle CO Homes", link: "/lasalle-co-homes-for-sale" },
            ].map((item, idx) => (
              <motion.a
                key={idx}
                href={item.link}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                className="bg-charcoal/5 hover:bg-charcoal/10 rounded-lg p-4 border border-charcoal/10 transition-all group flex items-center justify-between"
              >
                <span className="text-charcoal font-semibold">{item.label}</span>
                <ArrowRight size={16} className="text-gold group-hover:translate-x-1 transition-transform" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Practical Decision Factors */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Practical Decision Factors
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                icon: DollarSign,
                title: "Total Ownership Costs",
                desc: "Beyond purchase price, buyers should evaluate property taxes, HOA fees, maintenance costs, and other ownership factors in each county and specific community.",
              },
              {
                icon: Compass,
                title: "Commute Structure",
                desc: "Commute patterns differ significantly between the two counties based on geographic orientation. Buyers should evaluate where employment is located relative to target neighborhoods.",
              },
              {
                icon: Home,
                title: "Housing Stock",
                desc: "The range of housing types, lot sizes, and property ages varies between Douglas County and Weld County, affecting buyer options at different price points.",
              },
              {
                icon: MapPin,
                title: "Access to Services",
                desc: "Proximity to retail, healthcare, and other services varies between the two counties and within different communities in each area.",
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
        </div>
      </section>

      {/* 6. Lifestyle and Location Considerations */}
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
              "Geographic orientation differs — Douglas County is south of Denver, Weld County is north and northeast",
              "Community character and neighborhood pace vary across both counties",
              "Access to the Denver metro core differs based on which county and specific community buyers choose",
              "Housing types, lot sizes, and neighborhood density vary within and between both counties",
              "Employment centers and commute patterns are distinct based on location within each county",
              "Proximity to the northern Colorado corridor and Fort Collins area is more direct from Weld County communities",
              "Long-term lifestyle fit depends on individual priorities and should be researched directly",
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

      {/* 7. How Buyers Can Narrow the Right Fit */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            How Buyers Can Narrow the Right Fit
          </h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Define Priorities", desc: "Clarify lifestyle preferences, commute needs, housing type, and budget before comparing the two counties." },
              { step: "2", title: "Research Both Counties", desc: "Understand the community options in each county to narrow the comparison to specific cities and neighborhoods." },
              { step: "3", title: "Evaluate Commute Patterns", desc: "Identify where employment is located and how commute structure differs based on geographic orientation in each county." },
              { step: "4", title: "Compare Total Costs", desc: "Look beyond purchase price to evaluate total ownership costs in each county and at different price points." },
              { step: "5", title: "Use Local Guidance", desc: "Local expertise helps buyers understand practical tradeoffs and avoid oversimplified assumptions about either county." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                className="flex items-start gap-4 p-4 bg-cream/10 rounded-lg border border-cream/20"
              >
                <span className="text-gold font-bold text-lg flex-shrink-0 w-6 text-center">{item.step}</span>
                <div>
                  <h3 className="font-bold text-cream mb-1">{item.title}</h3>
                  <p className="text-cream/70 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Related Colorado Buyer Resources */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-8 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Related Colorado Buyer Resources
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="bg-charcoal/5 rounded-lg p-8 border border-charcoal/10"
          >
            <p className="text-charcoal/80 leading-relaxed mb-6">
              Buyers comparing Douglas County and Weld County benefit from understanding the
              broader Denver metro buying process, relocation considerations, and cost of living
              tradeoffs before narrowing their search to a specific county or community.
            </p>
            <div className="space-y-3 mb-8">
              {[
                { title: "Buying a Home in Denver", link: "/buying-a-home-in-denver" },
                { title: "First-Time Home Buyer Denver", link: "/first-time-home-buyer-denver" },
                { title: "Denver Home Buying Process", link: "/denver-home-buying-process" },
                { title: "Cost of Living in Denver Colorado", link: "/cost-of-living-in-denver-colorado" },
                { title: "Relocating to Denver Colorado", link: "/relocation/relocating-to-denver-colorado" },
                { title: "Adams County vs Jefferson County", link: "/adams-county-vs-jefferson-county" },
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

      {/* 9. FAQs */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Douglas County vs Weld County FAQs
          </h2>
          <div className="space-y-4">
            {faqContent.map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                className="bg-cream/10 rounded-lg border border-cream/20 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 hover:bg-cream/5 transition-colors text-left"
                >
                  <h3 className="font-bold text-cream pr-4">{item.question}</h3>
                  <ChevronDown
                    size={20}
                    className={`text-gold flex-shrink-0 transition-transform ${expandedFaq === idx ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 pb-6 border-t border-cream/10 text-cream/80">{item.answer}</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Final CTA */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl text-center">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2
              className="text-3xl sm:text-4xl font-bold text-charcoal mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Ready to Explore Your Colorado Options?
            </h2>
            <p className="text-lg text-charcoal/70 mb-8">
              Schedule a consultation to discuss your goals, compare Douglas County and Weld
              County communities, and build a realistic home search plan for the right area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <CTAButton />
              <a
                href="/douglas-co-homes-for-sale"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-cream px-7 py-4 text-[15px] sm:text-base no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Explore Douglas County Homes
                <ArrowRight size={18} />
              </a>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-charcoal/40 text-xs">
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
