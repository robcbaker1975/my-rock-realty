/**
 * Denver vs Fort Collins — My Rock Realty
 * City comparison guide for home buyers
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
  Home,
  Map,
} from "lucide-react";

/* Hero Background Image — Approved Denver metro aerial view */
const DENVER_HERO_BG = "/images/denver-rowhouses-hero.jpg";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "Is Denver or Fort Collins better for buying a home?",
    answer:
      "Neither is better across the board. Denver works well for people who want a broad city search with many neighborhood options. Fort Collins is a strong option for those who want a city that still has range but feels easier to sort through.",
  },
  {
    question: "What is the biggest difference between Denver and Fort Collins homes for sale?",
    answer:
      "The biggest difference is scale. Denver is a much larger urban market, and neighborhood differences start to matter almost immediately. Fort Collins is smaller and usually feels more cohesive when you first compare the city as a whole.",
  },
  {
    question: "Should I compare Denver and Fort Collins at the city level or neighborhood level?",
    answer:
      "Start at the city level if you are still deciding between the two. If Denver stays in the mix, neighborhood comparison becomes important quickly. In Fort Collins, you can often stay broader at first before narrowing further.",
  },
  {
    question: "Are the homes in Denver very different from the homes in Fort Collins?",
    answer:
      "There is overlap in both cities, including condos, townhomes, and single-family homes. The bigger difference is how that mix is spread across the city and how quickly one area starts to feel distinct from another.",
  },
  {
    question: "Does Denver always mean a more urban home search?",
    answer:
      "Not always. Denver includes plenty of residential neighborhoods with very different housing patterns. Still, the city overall is larger, denser in many areas, and more neighborhood-driven than Fort Collins.",
  },
  {
    question: "Is Fort Collins basically one type of market or neighborhood?",
    answer:
      "No. Fort Collins includes established areas, newer sections, and different home types across the city. Even so, the overall map is usually simpler to sort through than Denver.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Denver vs Fort Collins", url: "/denver-vs-fort-collins" },
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

export default function DenverVsFortCollins() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <SeoHead
        metadata={{
          title: "Denver vs Fort Collins Homes for Sale | Colorado City Comparison for Buyers",
          description:
            "Denver vs Fort Collins comparison for home buyers. Compare scale, housing mix, neighborhoods, and buyer tradeoffs between these two Colorado Front Range cities.",
          canonicalUrl: "https://www.myrockhomes.com/denver-vs-fort-collins",
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
          alt="Row houses along a residential street in Denver"
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
              Denver vs Fort Collins
            </h1>
            <p className="text-lg text-cream/80 mb-8 leading-relaxed">
              If you are comparing Denver vs Fort Collins homes for sale, you are probably deciding
              whether your home search belongs in the core of the metro or farther north in a city
              with a different scale and layout. These are not interchangeable markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton />
              <a
                href="mailto:rob@myrockhomes.com?subject=Fort Collins Listings — Alert Request"
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

      {/* 2. How the Areas Differ */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            How the Areas Differ
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Scale,
                title: "Scale and Search Experience",
                desc: "Denver is the state's largest city, with a wide spread of neighborhoods and a home search that can change block by block. Fort Collins offers a city map with its own established areas, newer sections, and a different rhythm along the Front Range.",
              },
              {
                icon: MapPin,
                title: "Neighborhood Differences",
                desc: "Someone comparing homes near Wash Park, Park Hill, or Sloan's Lake is working through a very different map than someone looking around Old Town Fort Collins, Midtown, or the south side near Harmony Road.",
              },
              {
                icon: Compass,
                title: "Location on the Front Range",
                desc: "Denver anchors the metro core. Fort Collins sits farther north along the Front Range, with its own geographic orientation, foothills context, and proximity to Colorado State University. Both cities offer a mix of home styles and neighborhood types.",
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

      {/* 3. Denver Communities */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-8 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Denver Communities
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="bg-cream/10 rounded-lg p-8 border border-cream/20 mb-8"
          >
            <p className="text-cream/90 leading-relaxed mb-4">
              Denver gives you the state's largest city and a home search that quickly becomes
              neighborhood-by-neighborhood. <strong>Wash Park, Park Hill, Sloan's Lake, City Park,
              Cherry Creek,</strong> and downtown each read differently on the map and in person.
            </p>
            <p className="text-cream/90 leading-relaxed">
              That range is a big reason Denver stays in play for buyers who want many options in
              one city. It also means that narrowing a Denver search usually requires comparing
              specific neighborhoods rather than treating the city as a single market.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Denver Homes for Sale", link: "/denver-homes-for-sale" },
              { label: "Wash Park Denver Homes", link: "/wash-park-denver-homes-for-sale" },
              { label: "Cherry Creek Denver Homes", link: "/cherry-creek-denver-homes-for-sale" },
              { label: "Sloan Lake Denver Homes", link: "/sloan-lake-denver-homes-for-sale" },
              { label: "Central Park Denver Homes", link: "/central-park-denver-homes-for-sale" },
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

      {/* 4. Fort Collins Communities */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-8 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Fort Collins Communities
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="bg-charcoal/5 rounded-lg p-8 border border-charcoal/10 mb-8"
          >
            <p className="text-charcoal/80 leading-relaxed mb-4">
              Fort Collins offers a city map with its own established areas, newer sections, and
              different home types across the city. <strong>Old Town</strong> anchors the historic
              core. <strong>Midtown</strong> and the south side near <strong>Harmony Road</strong> add
              newer residential options.
            </p>
            <p className="text-charcoal/80 leading-relaxed">
              The overall map is usually simpler to sort through than Denver, though Fort Collins
              still includes meaningful variation from one part of the city to another. The foothills
              are visible to the west, and Colorado State University shapes the character of certain
              neighborhoods.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Fort Collins Homes for Sale", link: "/fort-collins-homes-for-sale" },
              { label: "Fort Collins CO Homes", link: "/fort-collins-co-homes-for-sale" },
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

      {/* 5. What Buyers May Want to Think About */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            What Buyers May Want to Think About
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                icon: Map,
                title: "How Much City You Want to Sort Through",
                desc: "Denver's size means neighborhood differences matter almost immediately. Fort Collins is smaller and usually feels more cohesive when you first compare the city as a whole. Buyers who want to stay broader longer may find Fort Collins easier to evaluate at the start.",
              },
              {
                icon: MapPin,
                title: "Where on the Front Range You Want to Be",
                desc: "Denver anchors the metro core. Fort Collins sits farther north along the Front Range. That geographic difference affects access patterns, proximity to other parts of Colorado, and how the surrounding area looks and feels.",
              },
              {
                icon: Home,
                title: "Types of Homes and Communities",
                desc: "Both cities offer condos, townhomes, and single-family homes. The bigger difference is how that mix is spread across each city and how quickly one area starts to feel distinct from another.",
              },
              {
                icon: Compass,
                title: "When to Move to Neighborhood-Level Comparison",
                desc: "If Denver stays in the mix, neighborhood comparison becomes important quickly. In Fort Collins, you can often stay broader at first before narrowing further. Knowing which city fits your map helps determine when to go deeper.",
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

      {/* 6. Which Search May Fit Different Priorities */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Which Search May Fit Different Priorities
          </h2>
          <div className="space-y-4">
            {[
              "Denver works well for buyers who want a broad city search with many neighborhood options and do not mind narrowing quickly",
              "Neighborhoods like Wash Park, Park Hill, Sloan's Lake, City Park, and Cherry Creek each read differently — Denver rewards buyers who research at the neighborhood level",
              "Fort Collins is a strong option for those who want a city that still has range but feels easier to sort through at the start",
              "Old Town, Midtown, and the south side near Harmony Road offer different options within a more contained city map",
              "If Denver keeps surfacing in your search, moving to neighborhood-level comparison usually makes sense quickly",
              "If Fort Collins keeps surfacing, you can often compare the city as a whole before narrowing to specific areas",
              "For many buyers, the clearest next step is to follow where the listings are already pulling the map",
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

      {/* 7. How to Narrow the Right Fit */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            How to Narrow the Right Fit
          </h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Follow the Map", desc: "If you are trying to decide where to look next, follow the places that already make the most sense on the map. That is where this comparison helps most." },
              { step: "2", title: "Denver Direction", desc: "Denver is a logical direction if Wash Park, Park Hill, Sloan's Lake, Cherry Creek, or other specific Denver neighborhoods keep surfacing in your search." },
              { step: "3", title: "Fort Collins Direction", desc: "Fort Collins deserves a closer look if Old Town, Midtown, or the south side near Harmony Road keep coming up and the city's scale feels like a better fit." },
              { step: "4", title: "Move to Neighborhood or City Pages", desc: "Once you know which city fits your map, city and neighborhood pages usually tell you more than a city-level comparison can." },
              { step: "5", title: "Use Local Guidance", desc: "Local expertise helps buyers understand practical tradeoffs and avoid oversimplified assumptions about either city." },
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
              Buyers comparing Denver and Fort Collins often find it useful to understand the
              broader Colorado buying process and relocation considerations before narrowing their
              search. Once you know which city fits your map, city and neighborhood pages usually
              tell you more.
            </p>
            <div className="space-y-3 mb-8">
              {[
                { title: "Buying a Home in Denver", link: "/buying-a-home-in-denver" },
                { title: "First-Time Home Buyer Denver", link: "/first-time-home-buyer-denver" },
                { title: "Denver Home Buying Process", link: "/denver-home-buying-process" },
                { title: "Cost of Living in Denver Colorado", link: "/cost-of-living-in-denver-colorado" },
                { title: "Relocating to Denver Colorado", link: "/relocation/relocating-to-denver-colorado" },
                { title: "Denver vs Boulder", link: "/denver-vs-boulder" },
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

      {/* 9. FAQs */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Denver vs Fort Collins FAQs
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
              Schedule a consultation to discuss your goals, compare Denver and Fort Collins
              communities, and build a realistic home search plan for the right area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <CTAButton />
              <a
                href="/fort-collins-homes-for-sale"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-cream px-7 py-4 text-[15px] sm:text-base no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Explore Fort Collins Homes
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
