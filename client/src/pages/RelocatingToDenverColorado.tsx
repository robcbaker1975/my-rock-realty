/**
 * Relocating to Denver Colorado — My Rock Realty
 * Relocation guide page in the Denver SEO cluster
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
  Truck,
} from "lucide-react";

/* Hero Background Image — Approved Denver metro aerial view */
const DENVER_HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/denver-rowhouses-hero_2f59d4ac.jpg";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "What should people consider first when relocating to Denver?",
    answer:
      "People relocating to Denver usually start by narrowing down budget, commute priorities, preferred housing type, and whether they want to focus on central neighborhoods or surrounding suburbs.",
  },
  {
    question: "Should relocation buyers focus on Denver neighborhoods or nearby suburbs?",
    answer:
      "That depends on lifestyle, commute needs, home style preferences, and budget. Some buyers prefer central Denver neighborhoods, while others prioritize suburbs for different community layouts or housing options.",
  },
  {
    question: "What makes relocating to Denver different from a local move?",
    answer:
      "Relocation often adds extra planning around timing, home search logistics, financing coordination, remote decision-making, and learning the tradeoffs between different areas in the metro.",
  },
  {
    question: "Why is it helpful to compare neighborhoods and suburbs before moving?",
    answer:
      "Comparing areas helps relocation buyers understand tradeoffs in commute patterns, housing stock, neighborhood feel, and everyday convenience before committing to one location.",
  },
  {
    question: "How can relocation buyers prepare for a smoother Denver home search?",
    answer:
      "Relocation buyers can prepare by defining priorities early, understanding financing options, narrowing target areas, and building a realistic search plan before touring homes.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Relocating to Denver Colorado", url: "/relocation/relocating-to-denver-colorado" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function CTAButton({ label = "Schedule a Denver Relocation Consultation", className = "" }: { label?: string; className?: string }) {
  return (
    <a
      href="mailto:rob@myrockhomes.com?subject=Denver Relocation Consultation"
      className={`inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 bg-gold text-charcoal hover:bg-gold-light hover:shadow-lg px-7 py-4 text-[15px] sm:text-base no-underline ${className}`}
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {label}
      <ArrowRight size={18} />
    </a>
  );
}

export default function RelocatingToDenverColorado() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="hub-page min-h-screen flex flex-col bg-cream">
      <Navbar compact />
      <SeoHead
        metadata={{
          title: "Relocating to Denver Colorado | Denver Relocation Guide",
          description:
            "Relocating to Denver, Colorado? Explore neighborhoods, market insights, buying process, costs, and resources for relocating families.",
          canonicalUrl: "https://myrockhomes.com/relocation/relocating-to-denver-colorado/",
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
              Relocating to Denver Colorado
            </h1>
            <p className="text-lg text-cream/80 mb-8 leading-relaxed">
              A practical overview of what relocation buyers need to know before moving to the
              Denver area — from choosing between neighborhoods and suburbs to planning a remote
              home search.
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

      {/* 2. Why Relocation Buyers Need a Denver-Specific Strategy */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Why Relocation Buyers Need a Denver-Specific Strategy
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Truck,
                title: "Remote Decision-Making",
                desc: "Relocation buyers often evaluate homes from a distance, which adds planning complexity around timing, travel, and remote offer decisions.",
              },
              {
                icon: MapPin,
                title: "Unfamiliar Market",
                desc: "Buyers new to Denver benefit from understanding neighborhood and suburb tradeoffs before narrowing their search to specific areas.",
              },
              {
                icon: Compass,
                title: "Timing Coordination",
                desc: "Relocation moves often involve coordinating a home purchase with job start dates, lease endings, or school enrollment windows.",
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

      {/* 3. Choosing Between Neighborhoods and Suburbs */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-4xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-8 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Choosing Between Denver Neighborhoods and Suburbs
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="bg-cream/10 rounded-lg p-8 border border-cream/20 mb-8"
          >
            <p className="text-cream/90 leading-relaxed mb-6">
              Central Denver neighborhoods and surrounding suburbs offer different tradeoffs in
              commute patterns, housing stock, community feel, and everyday convenience. Relocation
              buyers benefit from comparing both before committing to a search area.
            </p>
            <p className="text-cream/90 leading-relaxed">
              Some buyers prioritize walkability and urban amenities in neighborhoods like Wash Park,
              Cherry Creek, or LoHi. Others prefer the housing options and community layouts in
              suburbs like Parker, Highlands Ranch, or Castle Rock.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Wash Park Denver Homes", link: "/wash-park-denver-homes-for-sale" },
              { label: "Cherry Creek Denver Homes", link: "/cherry-creek-denver-homes-for-sale" },
              { label: "LoHi Denver Homes", link: "/lohi-denver-homes-for-sale" },
              { label: "Parker Homes", link: "/parker-co-homes-for-sale" },
              { label: "Highlands Ranch Homes", link: "/highlands-ranch-co-homes-for-sale" },
              { label: "Castle Rock Homes", link: "/castle-rock-co-homes-for-sale" },
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

      {/* 4. Housing and Budget Considerations Before the Move */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Housing and Budget Considerations Before the Move
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                icon: DollarSign,
                title: "Financing Preparation",
                desc: "Relocation buyers benefit from getting pre-approved before the move so they can act quickly when the right property appears.",
              },
              {
                icon: Home,
                title: "Housing Type Tradeoffs",
                desc: "Denver offers condos, townhomes, single-family homes, and new construction — each with different cost and lifestyle profiles.",
              },
              {
                icon: BookOpen,
                title: "Market Timing",
                desc: "Relocation timelines may not align with ideal market conditions. Understanding seasonal patterns helps buyers set realistic expectations.",
              },
              {
                icon: Compass,
                title: "Remote Offer Decisions",
                desc: "Relocation buyers often need to make offer decisions without visiting in person. Preparation and local guidance reduce this risk.",
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
          <div className="grid md:grid-cols-3 gap-6 mt-8 max-w-3xl mx-auto">
            {[
              { title: "Denver Condos for Sale", link: "/denver-condos-for-sale" },
              { title: "Denver Townhomes for Sale", link: "/denver-townhomes-for-sale" },
              { title: "Denver New Construction Homes", link: "/denver-new-construction-homes" },
            ].map((item, idx) => (
              <motion.a
                key={idx}
                href={item.link}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                className="bg-white hover:shadow-lg rounded-lg p-4 border border-charcoal/10 transition-all group flex items-center justify-between"
              >
                <span className="font-semibold text-charcoal text-sm">{item.title}</span>
                <ArrowRight size={16} className="text-gold group-hover:translate-x-1 transition-transform" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Denver Lifestyle and Location Tradeoffs */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-4xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Denver Lifestyle and Location Tradeoffs
          </h2>
          <div className="space-y-4">
            {[
              "Central neighborhoods offer walkability and urban amenities at different price points",
              "Suburban areas may offer different housing sizes, lot options, and community layouts",
              "Commute patterns vary significantly depending on where employment is located",
              "School district considerations affect neighborhood and suburb selection for families",
              "Outdoor access and recreation proximity vary across the metro",
              "Cost of living tradeoffs differ between central Denver and surrounding suburbs",
              "Local guidance helps relocation buyers evaluate tradeoffs without multiple in-person visits",
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

      {/* 6. Practical Steps for Planning a Denver Relocation */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-4xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Practical Steps for Planning a Denver Relocation
          </h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Define Priorities", desc: "Clarify budget, commute needs, housing type preferences, and whether neighborhoods or suburbs are the better fit." },
              { step: "2", title: "Get Pre-Approved", desc: "Financing preparation before the move allows relocation buyers to act quickly when the right property appears." },
              { step: "3", title: "Narrow Target Areas", desc: "Research Denver neighborhoods and suburbs to reduce the search area before touring homes." },
              { step: "4", title: "Build a Search Plan", desc: "Establish a realistic timeline that accounts for relocation logistics, travel windows, and market conditions." },
              { step: "5", title: "Work with Local Guidance", desc: "Local expertise helps relocation buyers evaluate tradeoffs and make informed decisions from a distance." },
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

      {/* 7. Related Denver Buyer Resources */}
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
              Understanding the Denver home buying process, first-time buyer considerations, and
              cost of living tradeoffs helps relocation buyers approach their search with greater
              clarity.
            </p>
            <div className="space-y-3 mb-8">
              {[
                { title: "Denver vs Colorado Springs", link: "/denver-vs-colorado-springs" },
                { title: "Buying a Home in Denver", link: "/buying-a-home-in-denver" },
                { title: "First-Time Home Buyer Denver", link: "/first-time-home-buyer-denver" },
                { title: "Denver Home Buying Process", link: "/denver-home-buying-process" },
                { title: "Cost of Living in Denver Colorado", link: "/cost-of-living-in-denver-colorado" },
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
            Relocating to Denver Colorado FAQs
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
              Ready to Start Your Denver Relocation?
            </h2>
            <p className="text-lg text-cream/80 mb-8">
              Schedule a consultation to discuss your relocation goals, compare Denver neighborhoods
              and suburbs, and build a realistic home search plan.
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
