/**
 * First-Time Home Buyer Denver — My Rock Realty
 * Guide page in the Denver SEO cluster
 * Design: Front Range Modern — matches existing site design system
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
    question: "What should first-time buyers focus on before searching for a home in Denver?",
    answer:
      "First-time buyers usually benefit from understanding budget, financing options, monthly payment comfort, and which Denver neighborhoods or suburbs best fit their goals.",
  },
  {
    question: "Is Denver challenging for first-time buyers?",
    answer:
      "Denver can be challenging depending on price point, location, and inventory conditions, so first-time buyers often need a clear plan and realistic expectations.",
  },
  {
    question: "Should first-time buyers look in Denver neighborhoods or surrounding suburbs?",
    answer:
      "That depends on budget, commute needs, home type preferences, and lifestyle priorities. Some first-time buyers focus on central neighborhoods, while others look to suburbs for different options.",
  },
  {
    question: "What should first-time buyers evaluate besides price?",
    answer:
      "First-time buyers should also evaluate property condition, HOA structure when applicable, neighborhood fit, monthly ownership costs, commute patterns, and resale flexibility.",
  },
  {
    question: "Why is local guidance helpful for first-time buyers in Denver?",
    answer:
      "Local guidance can help first-time buyers compare locations, understand tradeoffs, avoid common mistakes, and make more confident choices in a competitive market.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "First-Time Home Buyer Denver", url: "/first-time-home-buyer-denver" },
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

export default function FirstTimeHomeBuyerDenver() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <SeoHead
        metadata={{
          title: "First-Time Home Buyer Denver | Denver First-Time Buyer Guide",
          description:
            "Explore first-time home buyer guidance in Denver, including financing preparation, neighborhood strategy, market considerations, and practical steps for entering the Denver market.",
          canonicalUrl: "https://www.myrockhomes.com/first-time-home-buyer-denver",
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
              First-Time Home Buyer Denver
            </h1>
            <p className="text-lg text-cream/80 mb-8 leading-relaxed">
              A practical guide for first-time buyers navigating the Denver metro area — from
              clarifying budget and financing options to understanding neighborhoods, suburbs, and
              market conditions.
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
            Why First-Time Buyers Need a Clear Plan in Denver
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Compass,
                title: "Market Variability",
                desc: "Competition and inventory shift across Denver neighborhoods and suburbs, making a focused strategy essential for first-time buyers.",
              },
              {
                icon: MapPin,
                title: "Geographic Range",
                desc: "The Denver metro spans a wide range of neighborhoods and suburbs, each with distinct character, pricing, and lifestyle tradeoffs.",
              },
              {
                icon: Home,
                title: "Housing Variety",
                desc: "From urban condos to suburban detached homes, first-time buyers benefit from narrowing down housing type early in the process.",
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
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-8 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Neighborhoods vs. Suburbs for First-Time Buyers
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="bg-cream/10 rounded-lg p-8 border border-cream/20 mb-8"
          >
            <p className="text-cream/90 leading-relaxed mb-6">
              Some first-time buyers prioritize walkability and urban character in central Denver
              neighborhoods. Others focus on suburban settings with different housing layouts and
              pricing considerations.
            </p>
            <p className="text-cream/90 leading-relaxed">
              The right choice depends on budget, commute needs, home type preferences, and lifestyle
              priorities. Exploring both options before committing helps buyers make more informed
              decisions.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Wash Park", link: "/wash-park-denver-homes-for-sale" },
              { label: "Cherry Creek", link: "/cherry-creek-denver-homes-for-sale" },
              { label: "Parker", link: "/parker-co-homes-for-sale" },
              { label: "Highlands Ranch", link: "/highlands-ranch-co-homes-for-sale" },
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
            Financing and Preparation for First-Time Buyers
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                icon: DollarSign,
                title: "Clarify Your Budget",
                desc: "Understanding price range and monthly payment comfort before searching helps focus efforts and avoids time spent on homes outside financing capacity.",
              },
              {
                icon: BookOpen,
                title: "Get Pre-Approved",
                desc: "Pre-approval strengthens your position and gives sellers confidence that you are a serious, qualified buyer.",
              },
              {
                icon: CheckCircle2,
                title: "Review Loan Options",
                desc: "Different loan types have different requirements, rates, and down payment structures. First-time buyer programs may offer additional options.",
              },
              {
                icon: Compass,
                title: "Understand Total Costs",
                desc: "Beyond purchase price, first-time buyers should account for closing costs, inspections, HOA fees when applicable, and ongoing ownership costs.",
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
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Denver Market Considerations for First-Time Buyers
          </h2>
          <div className="space-y-4">
            {[
              "Competition varies by price range, neighborhood, and season",
              "Inventory levels shift throughout the year across different areas",
              "Financing strength affects how quickly buyers can move",
              "First-time buyer programs may offer down payment or rate advantages",
              "Suburban markets can behave differently from central Denver",
              "Property condition and HOA structure matter for monthly costs",
              "Local guidance helps buyers avoid common first-time mistakes",
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
              { title: "Denver Condos for Sale", link: "/denver-condos-for-sale" },
              { title: "Denver Townhomes for Sale", link: "/denver-townhomes-for-sale" },
              { title: "Denver Homes Hub", link: "/denver-homes-for-sale" },
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
              Understanding the Denver home buying process and cost of living factors helps
              first-time buyers approach their search with greater confidence.
            </p>
            <div className="space-y-3 mb-8">
              {[
                { title: "Buying a Home in Denver", link: "/buying-a-home-in-denver" },
                { title: "Denver Home Buying Process", link: "/denver-home-buying-process" },
                { title: "Cost of Living in Denver, Colorado", link: "/cost-of-living-in-denver-colorado" },
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
            First-Time Home Buyer Denver FAQs
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
              Ready to Buy Your First Home in Denver?
            </h2>
            <p className="text-lg text-cream/80 mb-8">
              Schedule a consultation to discuss your Denver home buying goals and explore available
              options across the metro area.
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
