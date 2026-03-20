/**
 * Adams County vs Jefferson County — My Rock Realty
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
    question: "Is Adams County or Jefferson County better for buying a home?",
    answer:
      "Neither is better across the board. Adams County lines up with a home search centered on the northern and northeastern metro, while Jefferson County aligns more naturally with a search west of Denver.",
  },
  {
    question: "What is the biggest difference between Adams County and Jefferson County?",
    answer:
      "The clearest difference is where each county places you on the metro map. Adams County opens up the north and northeast side of the region. Jefferson County centers the western side and includes areas closer to the foothills.",
  },
  {
    question: "Should I compare these counties first or go straight to city pages?",
    answer:
      "If you are still getting oriented, starting with the county comparison makes sense. Once you know you are serious about places like Thornton, Brighton, Lakewood, Arvada, or Golden, city pages usually tell you more.",
  },
  {
    question: "Are the homes very different in Adams County and Jefferson County?",
    answer:
      "There is overlap in both counties, including condos, townhomes, and single-family homes. The bigger distinction comes from the setting, the layout, and how much the character shifts from one city to another.",
  },
  {
    question: "Does Jefferson County always mean foothills living?",
    answer:
      "No. Much of Jefferson County is still firmly metro. The foothills are more noticeable in places like Golden and Morrison, but that is only one part of the county.",
  },
  {
    question: "Is Adams County basically one type of suburban area?",
    answer:
      "No. Thornton, Brighton, Commerce City, Northglenn, and Federal Heights do not all feel the same. That is why it helps to compare the individual places inside Adams County instead of treating it like one single area.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Adams County vs Jefferson County", url: "/adams-county-vs-jefferson-county" },
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

export default function AdamsCountyVsJeffersonCounty() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <SeoHead
        metadata={{
          title: "Adams County vs Jefferson County | Colorado County Comparison for Home Buyers",
          description:
            "Adams County vs Jefferson County comparison for home buyers. Compare location, housing types, communities, and buyer tradeoffs across both Denver metro counties.",
          canonicalUrl: "https://myrockhomes.com/adams-county-vs-jefferson-county",
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
              Adams County vs Jefferson County
            </h1>
            <p className="text-lg text-cream/80 mb-8 leading-relaxed">
              If you are comparing Adams County vs Jefferson County homes for sale, you are probably
              trying to make the Denver-area map easier to sort through. Adams County opens up the
              metro to the north and northeast. Jefferson County pulls things west, toward Lakewood,
              Arvada, Golden, and Morrison, where the terrain starts to shift closer to the foothills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton />
              <a
                href="mailto:rob@myrockhomes.com?subject=Adams County Listings — Alert Request"
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
            How the Areas Differ
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Scale,
                title: "Different Sides of the Metro",
                desc: "Adams County opens up the north and northeast side of the Denver metro, with Thornton, Brighton, Commerce City, Northglenn, and Federal Heights showing up early for many buyers. Jefferson County pulls things west, toward Lakewood, Arvada, Wheat Ridge, Golden, and Morrison.",
              },
              {
                icon: MapPin,
                title: "Community Character Varies",
                desc: "Someone circling homes in Golden or Morrison is sorting through a different part of the metro than someone comparing Thornton and Brighton. Both are part of the broader Denver area, but they do not read the same on the ground.",
              },
              {
                icon: Compass,
                title: "Terrain and Setting",
                desc: "Adams County covers a broad spread of suburban options. Jefferson County shifts the picture as you move toward the foothills — Red Rocks and the foothills context become more noticeable in Golden and Morrison, while Lakewood and Wheat Ridge feel closer in and more established.",
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

      {/* 3. Adams County Communities */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-8 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Adams County Communities
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="bg-cream/10 rounded-lg p-8 border border-cream/20 mb-8"
          >
            <p className="text-cream/90 leading-relaxed mb-4">
              Adams County covers a lot of territory, which creates a broad spread of suburban
              options inside one county. Some sections sit closer to Denver, while others reach
              farther out and feel more spread out in their layout. <strong>Commerce City</strong> does
              not look or feel exactly like <strong>Brighton</strong>, and <strong>Northglenn</strong> adds
              another layer to the comparison.
            </p>
            <p className="text-cream/90 leading-relaxed">
              Landmarks like Dick's Sporting Goods Park and the Rocky Mountain Arsenal help place
              that side of the metro, even though the county itself includes several distinct pockets.
              That range is a big reason Adams County stays in play when someone is sorting through
              several suburban choices.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Adams County Hub", link: "/adams-co-homes-for-sale" },
              { label: "Commerce City CO Homes", link: "/commerce-city-homes-for-sale" },
              { label: "Brighton CO Homes", link: "/brighton-co-homes-for-sale" },
              { label: "Thornton CO Homes", link: "/thornton-co-homes-for-sale" },
              { label: "Northglenn CO Homes", link: "/northglenn-co-homes-for-sale" },
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

      {/* 4. Jefferson County Communities */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-8 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Jefferson County Communities
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="bg-charcoal/5 rounded-lg p-8 border border-charcoal/10 mb-8"
          >
            <p className="text-charcoal/80 leading-relaxed mb-4">
              Jefferson County reads differently both on the map and in person. <strong>Lakewood</strong> and
              <strong> Wheat Ridge</strong> feel closer in and more established. <strong>Arvada</strong> offers
              a wide range of possibilities along the western edge of the metro.
            </p>
            <p className="text-charcoal/80 leading-relaxed">
              <strong>Golden</strong> and <strong>Morrison</strong> shift the picture again, with the foothills
              becoming more noticeable and Red Rocks helping anchor that part of the region. What
              stands out in Jefferson County is how quickly the setting can change as you move from
              one city to the next.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Jefferson County Hub", link: "/jefferson-co-homes-for-sale" },
              { label: "Golden Homes", link: "/golden-homes-for-sale" },
              { label: "Lakewood CO Homes", link: "/lakewood-co-homes-for-sale" },
              { label: "Morrison CO Homes", link: "/morrison-co-homes-for-sale" },
              { label: "Westminster CO Homes", link: "/westminster-co-homes-for-sale" },
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
            What Buyers May Want to Think About
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                icon: MapPin,
                title: "Where Your Saved Homes Are Clustering",
                desc: "A simple way to sort this out is to look at where your saved homes are already pointing. If Thornton, Brighton, Commerce City, Northglenn, or Federal Heights keep surfacing, Adams County is probably the right county to study next.",
              },
              {
                icon: Compass,
                title: "How Wide an Area You Want to Keep in Play",
                desc: "Some buyers want to compare several northern and northeastern metro locations before getting more specific. Others already know they want to stay west of Denver and would rather work through those cities one by one.",
              },
              {
                icon: Home,
                title: "Types of Homes and Communities",
                desc: "Adams County offers a mix of townhomes, condos, established single-family neighborhoods, and newer subdivisions. Jefferson County also offers a broad mix, but it shows up city by city — from established neighborhoods in Lakewood and Wheat Ridge to the foothills context of Golden and Morrison.",
              },
              {
                icon: DollarSign,
                title: "When to Move Past County Labels",
                desc: "Early on, a county-level comparison can be useful. Before long, the decision usually gets easier when you move past county labels and start looking more closely at the cities and neighborhoods that deserve real attention.",
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
            Which Search May Fit Different Priorities
          </h2>
          <div className="space-y-4">
            {[
              "Adams County makes sense when you want to compare several suburban areas across the northern and northeastern part of the metro without bouncing between counties",
              "That is especially true if you are still sorting through Thornton, Brighton, Northglenn, Commerce City, and nearby spots",
              "Jefferson County makes more sense when your attention is already centered on Lakewood, Arvada, Wheat Ridge, Golden, and Morrison",
              "When those places keep surfacing, it is often easier to stay in that lane and compare them directly rather than jump across the region",
              "If the map keeps pulling you toward the northern half of the metro, Adams County is the county to dig into next",
              "If you are drawn to cities near the foothills and along the western edge of Denver, Jefferson County gives you a cleaner path",
              "For many serious buyers, following the places that already make the most sense on the map is the most practical next step",
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
            How to Narrow the Right Fit
          </h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Follow the Map", desc: "If you are trying to decide where to look next, follow the places that already make the most sense on the map. That is where this comparison helps most." },
              { step: "2", title: "Adams County Direction", desc: "Adams County is a logical direction if Thornton, Brighton, Commerce City, Northglenn, or Federal Heights are leading your list." },
              { step: "3", title: "Jefferson County Direction", desc: "Jefferson County deserves a closer look if you are repeatedly coming back to Lakewood, Arvada, Wheat Ridge, Golden, or Morrison." },
              { step: "4", title: "Move Past County Labels", desc: "It turns a broad Denver-area home search into a more workable set of places, so you can spend less time comparing county names and more time studying the cities and neighborhoods that deserve real attention." },
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
              Buyers comparing Adams County and Jefferson County often find it useful to understand
              the broader Denver metro buying process before narrowing their search. Once you know
              which county fits your map, city pages usually tell you more than county-level
              comparisons can.
            </p>
            <div className="space-y-3 mb-8">
              {[
                { title: "Buying a Home in Denver", link: "/buying-a-home-in-denver" },
                { title: "First-Time Home Buyer Denver", link: "/first-time-home-buyer-denver" },
                { title: "Denver Home Buying Process", link: "/denver-home-buying-process" },
                { title: "Cost of Living in Denver Colorado", link: "/cost-of-living-in-denver-colorado" },
                { title: "Relocating to Denver Colorado", link: "/relocation/relocating-to-denver-colorado" },
                { title: "Douglas County vs Weld County", link: "/douglas-county-vs-weld-county" },
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
            Adams County vs Jefferson County FAQs
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
              Schedule a consultation to discuss your goals, compare Adams County and Jefferson
              County communities, and build a realistic home search plan for the right area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <CTAButton />
              <a
                href="/adams-co-homes-for-sale"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-cream px-7 py-4 text-[15px] sm:text-base no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Explore Adams County Homes
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
