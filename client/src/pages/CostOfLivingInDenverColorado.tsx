/**
 * Cost of Living in Denver Colorado — My Rock Realty
 * Guide page in the Denver SEO cluster
 * Design: Front Range Modern — matches existing site design system
 */

import { useState } from "react";
import SeoHead from "@/components/seo/SeoHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
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

/* Hero Background Image — Approved Denver metro aerial view */
const DENVER_HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/denver-rowhouses-hero_2f59d4ac.jpg";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "What does cost of living mean for Denver home buyers?",
    answer:
      "For Denver buyers, cost of living includes more than home price. It also includes monthly payment, taxes, insurance, utilities, HOA costs when applicable, transportation, and neighborhood-specific tradeoffs.",
  },
  {
    question: "Does cost of living vary across Denver neighborhoods and suburbs?",
    answer:
      "Yes. Different neighborhoods and suburbs can create different housing, commuting, and lifestyle cost patterns depending on location and home type.",
  },
  {
    question: "Why should buyers consider total ownership costs and not just purchase price?",
    answer:
      "A lower purchase price does not always mean lower total cost if maintenance, HOA fees, utilities, commuting, or renovation needs are materially different.",
  },
  {
    question: "Is Denver cost of living the same for all buyer types?",
    answer:
      "No. Cost tradeoffs vary depending on household size, commute needs, preferred location, home type, and how a buyer uses the property.",
  },
  {
    question: "Why is cost of living important when comparing Denver and surrounding areas?",
    answer:
      "It helps buyers evaluate tradeoffs between housing choice, monthly affordability, location, and lifestyle priorities before making a purchase decision.",
  },
  {
    question: "How much do property taxes cost in Denver compared to surrounding areas?",
    answer:
      "Property tax rates vary by location and county. Denver and surrounding areas have different assessment rates and mill levies. Comparing specific properties and neighborhoods helps buyers understand the tax impact on total ownership cost.",
  },
  {
    question: "What are typical homeowners insurance costs in Denver?",
    answer:
      "Homeowners insurance costs depend on home value, location, age, construction type, and coverage level. Denver insurance rates vary by neighborhood and risk factors. Getting quotes from multiple insurers helps buyers budget accurately.",
  },
  {
    question: "How should buyers budget for maintenance and repairs?",
    answer:
      "A common guideline is to budget 1-2% of home value annually for maintenance and repairs. Older homes, larger properties, and homes with specific features may require higher reserves. Understanding property condition helps estimate realistic maintenance costs.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Cost of Living in Denver Colorado", url: "/cost-of-living-in-denver-colorado" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function CTAButton({ label = "Schedule a Denver Home Buying Consultation", className = "" }: { label?: string; className?: string }) {
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

export default function CostOfLivingInDenverColorado() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="hub-page min-h-screen flex flex-col bg-cream">
      <Navbar compact />
      <SeoHead
        metadata={{
          title: "Cost of Living in Denver Colorado | Denver Buyer Cost Guide",
          description:
            "Cost of living in Denver, Colorado. Compare housing costs, expenses by neighborhood, and budget resources for relocating or buying in Denver.",
          canonicalUrl: "https://myrockhomes.com/cost-of-living-in-denver-colorado",
          breadcrumbs: breadcrumbItems,
        }}
        schema={faqSchema ? [faqSchema] : []}
      />

      {/* 1. HERO */}
      <section className="relative bg-charcoal overflow-hidden pt-[72px]">
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
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-cream mb-6 leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Cost of Living in Denver Colorado
            </h1>
            <p className="text-lg text-cream/80 mb-8 leading-relaxed">
              A practical overview of cost of living considerations for Denver-area buyers —
              including housing, ownership costs, location tradeoffs, and what varies across
              neighborhoods and suburbs.
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

      {/* 2. Why This Topic Matters */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Why Cost of Living Matters for Denver Buyers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Total Ownership Costs",
                desc: "Purchase price is one factor. Monthly payment, taxes, insurance, utilities, and HOA fees all contribute to total ownership cost.",
              },
              {
                icon: MapPin,
                title: "Location Tradeoffs",
                desc: "Different neighborhoods and suburbs create different cost patterns for housing, commuting, and lifestyle.",
              },
              {
                icon: Home,
                title: "Buyer Type Variation",
                desc: "Cost tradeoffs vary by household size, commute needs, preferred home type, and how the property will be used.",
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

      {/* 3. Core Decision Factors */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-4xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-8 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Denver Neighborhoods vs. Suburbs — Cost Tradeoffs
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="bg-cream/10 rounded-lg p-8 border border-cream/20 mb-8"
          >
            <p className="text-cream/90 leading-relaxed mb-6">
              Central Denver neighborhoods and surrounding suburbs can create meaningfully different
              cost profiles. Urban neighborhoods may offer walkability but different price points and
              HOA structures. Suburban areas may offer different home sizes and commuting patterns.
            </p>
            <p className="text-cream/90 leading-relaxed">
              Buyers comparing locations benefit from evaluating total monthly cost — not just
              purchase price — across the areas they are considering.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Central Park Denver", link: "/central-park-denver-homes-for-sale" },
              { label: "Sloan Lake Denver", link: "/sloan-lake-denver-homes-for-sale" },
              { label: "Arvada", link: "/arvada-co-homes-for-sale" },
              { label: "Parker", link: "/parker-co-homes-for-sale" },
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

      {/* 4. What Buyers Should Understand */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Total Ownership Cost Factors
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                icon: DollarSign,
                title: "Monthly Payment",
                desc: "Principal, interest, taxes, and insurance combine to form the base monthly payment. Rate and down payment affect this significantly.",
              },
              {
                icon: BookOpen,
                title: "HOA Fees",
                desc: "Condos, townhomes, and some communities include HOA fees that add to monthly cost. Structures vary widely.",
              },
              {
                icon: CheckCircle2,
                title: "Utilities and Maintenance",
                desc: "Larger homes and older properties may carry higher utility and maintenance costs than newer or smaller alternatives.",
              },
              {
                icon: Compass,
                title: "Commuting Costs",
                desc: "Location affects transportation costs. Suburban homes may offer lower purchase prices but higher commuting expenses.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                className="bg-white rounded-lg p-6 border border-charcoal/10 shadow-sm flex gap-4"
              >
                <item.icon size={28} className="text-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <h3 className="text-lg font-bold text-charcoal mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Denver Market Considerations */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-4xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Denver Cost of Living Considerations
          </h2>
          <div className="space-y-4">
            {[
              "Housing costs vary significantly across Denver neighborhoods and suburbs",
              "HOA structures differ between condos, townhomes, and single-family homes",
              "Property taxes vary by municipality and assessed value",
              "Commuting patterns affect transportation cost calculations",
              "Renovation and maintenance needs vary by property age and condition",
              "Lifestyle costs differ between urban and suburban settings",
              "Local guidance helps buyers compare total cost across locations",
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                className="flex items-start gap-4 p-4 bg-cream/10 rounded-lg border border-cream/20"
              >
                <CheckCircle2 size={24} className="text-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <p className="text-cream/80">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Practical Next Steps */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Explore Denver Home Options
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Cherry Creek Denver Homes", link: "/cherry-creek-denver-homes-for-sale" },
              { title: "Wash Park Denver Homes", link: "/wash-park-denver-homes-for-sale" },
              { title: "Denver Condos for Sale", link: "/denver-condos-for-sale" },
              { title: "Denver Luxury Homes for Sale", link: "/denver-luxury-homes-for-sale" },
              { title: "Denver Homes Hub", link: "/denver-homes-for-sale" },
              { title: "Denver vs Colorado Springs", link: "/denver-vs-colorado-springs" },
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
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Related Buyer Resources */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-4xl">
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
              Understanding the Denver home buying process and first-time buyer considerations helps
              buyers approach cost of living tradeoffs with greater clarity.
            </p>
            <div className="space-y-3 mb-8">
              {[
                { title: "Buying a Home in Denver", link: "/buying-a-home-in-denver" },
                { title: "First-Time Home Buyer Denver", link: "/first-time-home-buyer-denver" },
                { title: "Denver Home Buying Process", link: "/denver-home-buying-process" },
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
        <div className="container max-w-4xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Cost of Living in Denver Colorado FAQs
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
              Ready to Evaluate Denver Cost of Living?
            </h2>
            <p className="text-lg text-cream/80 mb-8">
              Schedule a consultation to discuss cost tradeoffs across Denver neighborhoods and
              suburbs and explore available options.
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
