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

/* Hero Background Image — Approved Denver metro aerial view */
const DENVER_HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/denver-rowhouses-hero_2f59d4ac.jpg";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "Is Denver or Boulder better for buying a home?",
    answer:
      "Neither is better across the board. Denver works well for people who want a broader city search with many neighborhood options. Boulder is a strong option for those who want a smaller city map with a very distinct setting.",
  },
  {
    question: "What is the biggest difference between Denver and Boulder homes for sale?",
    answer:
      "The biggest difference is scale and setting. Denver is a much larger city with more neighborhood-by-neighborhood variation. Boulder covers less ground and is more immediately shaped by its foothills location.",
  },
  {
    question: "Should I compare Denver and Boulder at the city level or neighborhood level?",
    answer:
      "Start at the city level if you are still deciding between the two. If Denver stays in the mix, neighborhood comparison becomes important quickly. In Boulder, many buyers can stay at the city level a little longer before narrowing to specific areas.",
  },
  {
    question: "Are the homes in Denver very different from the homes in Boulder?",
    answer:
      "There is overlap in both cities, including condos, townhomes, and single-family homes. The bigger difference is how the housing mix is spread across each city and how strongly location within the city shapes the search.",
  },
  {
    question: "Does Denver always mean a more urban home search?",
    answer:
      "Not always. Denver includes plenty of residential neighborhoods with very different housing patterns. Still, the city overall is larger and more neighborhood-driven than Boulder.",
  },
  {
    question: "Is Boulder basically one type of market or neighborhood?",
    answer:
      "No. Boulder includes distinct areas like Downtown Boulder, North Boulder, South Boulder, Table Mesa, and Gunbarrel. Even so, the city is easier to read as one map than Denver, which is why many people can narrow Boulder a little faster.",
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
    <div className="hub-page min-h-screen flex flex-col bg-cream">
      <SeoHead
        metadata={{
          title: "Denver vs Boulder | Colorado City Comparison for Home Buyers",
          description:
            "Denver vs Boulder comparison for home buyers. Compare neighborhoods, markets, lifestyle, costs, and find which city fits your needs.",
          canonicalUrl: "https://myrockhomes.com/denver-vs-boulder",
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
              Denver vs Boulder
            </h1>
            <p className="text-lg text-cream/80 mb-8 leading-relaxed">
              If you are comparing Denver vs Boulder homes for sale, you are probably deciding
              whether your search belongs in the middle of the metro or in a city at the base of
              the Flatirons. Denver gives you a much larger city, a long list of neighborhoods,
              and a home search that can change quickly from one part of town to the next.
              Boulder is smaller on the map, but the neighborhoods and housing choices still
              vary quite a bit across town.
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
            How the Areas Differ
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Scale,
                title: "Different Sides of the Metro",
                desc: "Denver sits in the middle of the Front Range metro. Boulder is positioned to the northwest, closer to the foothills. That difference in location shapes how buyers think about each city from the start.",
              },
              {
                icon: MapPin,
                title: "Community Character Varies",
                desc: "Denver is a large city with many distinct neighborhoods that can feel very different from each other. Boulder is smaller, but it still has distinct areas — Downtown Boulder, North Boulder, South Boulder, Table Mesa, and Gunbarrel each have their own character.",
              },
              {
                icon: Compass,
                title: "Terrain and Setting",
                desc: "Boulder sits closer to the foothills and the Flatirons are a constant visual reference. Denver is flatter and more spread out. Buyers who have a strong preference for one setting or the other often find that it narrows the decision fairly quickly.",
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

      {/* 3. Types of Homes and Communities */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-8 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Types of Homes and Communities You May See
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="bg-cream/10 rounded-lg p-8 border border-cream/20 mb-8"
          >
            <p className="text-cream/90 leading-relaxed mb-6">
              That difference shows up fast once you start looking at listings side by side.
              Someone comparing homes near Wash Park, Park Hill, or Sloan’s Lake is working
              through a very different map than someone looking around Downtown Boulder, North
              Boulder, Table Mesa, or Gunbarrel. Both cities offer a mix of home styles and
              neighborhood types, but the way you sort through the options is not the same.
            </p>
            <p className="text-cream/90 leading-relaxed">
              In Denver, the search can shift quickly from one neighborhood to the next —
              City Park, Cherry Creek, and downtown each have distinct housing patterns. In
              Boulder, the city is smaller and easier to read at the city level for longer
              before narrowing to a specific area.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Wash Park Denver Homes", link: "/wash-park-denver-homes-for-sale" },
              { label: "Cherry Creek Denver Homes", link: "/cherry-creek-denver-homes-for-sale" },
              { label: "Boulder Homes for Sale", link: "/boulder-homes-for-sale" },
              { label: "Boulder CO Homes for Sale", link: "/boulder-co-homes-for-sale" },
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

      {/* 4. Which Search May Fit Different Priorities */}
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
              "Denver may work well for buyers who want a broader city search with many neighborhood options at different price points",
              "Boulder may appeal to buyers who want a smaller city map with a very distinct setting and a more contained search area",
              "Buyers who want to stay closer to the foothills may find Boulder easier to orient to quickly",
              "Buyers who want more neighborhood variety or a wider range of housing types may find Denver gives them more to work with",
              "Both cities include condos, townhomes, and single-family homes — the mix and how it is distributed across the city is different",
              "Buyers who are still deciding between the two may benefit from starting at the city level before narrowing to specific neighborhoods",
              "Local guidance can help buyers understand how the map actually works in each city before committing to a search direction",
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
                icon: MapPin,
                title: "Where Your Search Starts",
                desc: "If you are still deciding between Denver and Boulder, it can help to look at both cities at the city level before narrowing to specific neighborhoods. The two maps are very different in scale.",
              },
              {
                icon: Compass,
                title: "How Wide You Want to Search",
                desc: "Denver gives buyers more ground to cover. Boulder is more contained. Buyers who want to narrow quickly may find Boulder easier to read early. Buyers who want more options may find Denver gives them more to work with.",
              },
              {
                icon: Home,
                title: "Housing Types and Mix",
                desc: "Both cities have condos, townhomes, and single-family homes. The bigger difference is how the housing mix is spread across each city and how strongly location within the city shapes what you find.",
              },
              {
                icon: Scale,
                title: "Moving Past County Labels",
                desc: "Buyers sometimes start with county or city names and then find the actual neighborhoods that fit. That process works differently in Denver than in Boulder, and local guidance can help.",
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

      {/* 6. Conclusion */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            How to Narrow the Right Fit
          </h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Follow the Map", desc: "Start by looking at both cities at the city level. Denver is a large metro-scale city. Boulder is smaller and more contained. That difference alone can help narrow the direction." },
              { step: "2", title: "Denver Direction", desc: "If Denver stays in the mix, neighborhood comparison becomes important quickly. Wash Park, Park Hill, Sloan’s Lake, City Park, Cherry Creek, and downtown each have distinct housing patterns and price ranges." },
              { step: "3", title: "Boulder Direction", desc: "If Boulder stays in the mix, many buyers can stay at the city level a little longer before narrowing. Downtown Boulder, North Boulder, South Boulder, Table Mesa, and Gunbarrel are the main areas to understand." },
              { step: "4", title: "Move Past City Labels", desc: "Buyers sometimes start with city names and then find the actual neighborhoods that fit. That process works differently in Denver than in Boulder, and it is worth understanding both before committing to a direction." },
              { step: "5", title: "Use Local Guidance", desc: "Local expertise can help buyers understand how the map actually works in each city, avoid oversimplified assumptions, and build a realistic search plan for whichever market fits their needs." },
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
              Buyers comparing Denver and Boulder may also find it useful to review the Denver
              home buying process, relocation considerations, and how Denver compares to other
              Front Range cities before narrowing their search.
            </p>
            <div className="space-y-3 mb-8">
              {[
                { title: "Buying a Home in Denver", link: "/buying-a-home-in-denver" },
                { title: "First-Time Home Buyer Denver", link: "/first-time-home-buyer-denver" },
                { title: "Denver Home Buying Process", link: "/denver-home-buying-process" },
                { title: "Cost of Living in Denver Colorado", link: "/cost-of-living-in-denver-colorado" },
                { title: "Relocating to Denver Colorado", link: "/relocation/relocating-to-denver-colorado" },
                { title: "Denver vs Colorado Springs", link: "/denver-vs-colorado-springs" },
                { title: "Denver vs Fort Collins", link: "/denver-vs-fort-collins" },
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
