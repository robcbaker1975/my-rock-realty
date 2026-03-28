/**
 * Boulder vs Fort Collins — My Rock Realty
 * Comparison page in the Northern Colorado corridor guide series
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
  Home,
} from "lucide-react";

/* Hero Background Image — Approved Denver metro aerial view (shared pattern) */
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/denver-rowhouses-hero_2f59d4ac.jpg";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "Is Boulder or Fort Collins better for buying a home?",
    answer:
      "Neither is better across the board. Boulder often appeals to people who want a city shaped more strongly by setting and foothills context. Fort Collins can be a better match for those who want a city that feels broader and a little more straightforward to compare section by section.",
  },
  {
    question: "What is the biggest difference between Boulder and Fort Collins homes for sale?",
    answer:
      "The biggest difference is how each city feels on the map. Boulder is more immediately shaped by the Flatirons and by location within a tighter city footprint. Fort Collins usually feels broader, flatter, and easier to sort through by larger sections of town.",
  },
  {
    question: "Should I compare Boulder and Fort Collins at the city level or neighborhood level?",
    answer:
      "Start at the city level if you are still deciding between the two. Once one city starts pulling ahead, neighborhood comparison becomes the next step in both markets.",
  },
  {
    question: "Are the homes in Boulder very different from the homes in Fort Collins?",
    answer:
      "There is overlap in both cities, including condos, townhomes, and single-family homes. The bigger difference is how those homes are spread across each city and how much the setting shapes the search.",
  },
  {
    question: "Does Boulder always mean a more foothills-oriented home search?",
    answer:
      "Not always, but the foothills and the Flatirons are part of how Boulder reads from the start. That setting tends to matter more in the way buyers orient themselves around Boulder than it does in Fort Collins.",
  },
  {
    question: "Is Fort Collins basically one type of market or neighborhood?",
    answer:
      "No. Fort Collins includes established areas, newer sections, and a wide mix of housing types. Even so, many buyers find it easier to compare across the city as a whole before narrowing further.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Boulder vs Fort Collins", url: "/boulder-vs-fort-collins" },
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

export default function BoulderVsFortCollins() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <SeoHead
        metadata={{
          title: "Boulder vs Fort Collins Homes for Sale | Colorado City Comparison",
          description:
            "Boulder vs Fort Collins comparison for home buyers. Compare neighborhoods, housing mix, setting, and find which Northern Colorado city fits your search.",
          canonicalUrl: "https://myrockhomes.com/boulder-vs-fort-collins",
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
          src={HERO_BG}
          alt="Row houses along a residential street in Colorado"
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
              Boulder vs Fort Collins
            </h1>
            <p className="text-lg text-cream/80 mb-8 leading-relaxed">
              If you are comparing Boulder vs Fort Collins homes for sale, you are probably deciding
              between two northern Colorado cities that can appeal to similar buyers on paper but
              feel quite different once you start narrowing the map. Both sit along the Front Range.
              Both offer established neighborhoods, newer sections, and a city search that is smaller
              in footprint than Denver. But the way each place reads on the ground is not the same.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton />
              <a
                href="mailto:rob@myrockhomes.com?subject=Northern Colorado Listings — Alert Request"
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
                title: "Position Along the Front Range",
                desc: "Boulder sits roughly 25 miles northwest of Denver, close to the foothills. Fort Collins is about 65 miles north of Denver, farther from the mountains and more oriented toward the plains. That difference in position shapes how each city feels and how buyers think about location.",
              },
              {
                icon: MapPin,
                title: "City Scale and Search Area",
                desc: "Both cities are smaller than Denver, but Fort Collins covers more ground. Boulder is more contained and easier to read at the city level for longer. Fort Collins has more spread between its older core areas and newer development on the edges of the city.",
              },
              {
                icon: Compass,
                title: "Setting and Terrain",
                desc: "Boulder's foothills setting is a constant visual reference and shapes the city's geography. Fort Collins is flatter and more open. Buyers with a strong preference for one setting or the other often find that it narrows the decision fairly quickly.",
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

      {/* 3. Types of Homes and Communities You May See */}
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
              That difference shows up quickly when you start looking at listings side by side.
              Someone comparing homes around Downtown Boulder, North Boulder, Table Mesa, or
              Gunbarrel is sorting through a different kind of map than someone looking at Old
              Town Fort Collins, Midtown, or areas near Harmony Road. Boulder is shaped more
              immediately by the Flatirons and the foothills. Fort Collins has its own clear
              center and identity, but the city usually feels flatter, more spread across a
              broader grid, and easier to read from one side of town to the other.
            </p>
            <p className="text-cream/90 leading-relaxed">
              Both cities include condos, townhomes, and single-family homes. The bigger
              difference is how those homes are spread across each city and how much the
              setting shapes the search from the start.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Boulder Homes for Sale", link: "/boulder-homes-for-sale" },
              { label: "Boulder CO Homes for Sale", link: "/boulder-co-homes-for-sale" },
              { label: "Fort Collins Homes for Sale", link: "/fort-collins-homes-for-sale" },
              { label: "Fort Collins CO Homes for Sale", link: "/fort-collins-co-homes-for-sale" },
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
              "Buyers who want a city more strongly shaped by its setting and foothills context may find Boulder fits that search",
              "Buyers who want a city that feels broader and more straightforward to compare section by section may find Fort Collins easier to work through",
              "Both cities are smaller in footprint than Denver, but the way each one reads on the ground is different",
              "Boulder's map is shaped more immediately by the Flatirons — that setting tends to matter in how buyers orient themselves from the start",
              "Fort Collins usually feels flatter and more spread across a broader grid, which can make it easier to compare larger sections of the city",
              "Buyers still deciding between the two may benefit from starting at the city level before narrowing to specific neighborhoods",
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
                desc: "If you are still deciding between Boulder and Fort Collins, it can help to look at both cities at the city level before narrowing to specific neighborhoods. The two maps are different in scale and setting.",
              },
              {
                icon: Compass,
                title: "Distance from Denver",
                desc: "Boulder is closer to Denver and may work better for buyers who need metro access. Fort Collins is farther north and may suit buyers who want more separation from the Denver metro area.",
              },
              {
                icon: Home,
                title: "Housing Types and Mix",
                desc: "Both cities have condos, townhomes, and single-family homes. The bigger difference is how the housing mix is spread across each city and how strongly location within the city shapes what you find.",
              },
              {
                icon: Scale,
                title: "City Scale and Search Width",
                desc: "Boulder is more contained and easier to read quickly. Fort Collins covers more ground and may require more time to understand the different parts of the city before committing to a direction.",
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

      {/* 6. How to Narrow the Right Fit */}
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
              { step: "1", title: "Follow the Map", desc: "Start by looking at both cities at the city level. Boulder is more contained and foothills-oriented. Fort Collins is farther north, more spread out, and has a different relationship to the mountains." },
              { step: "2", title: "Boulder Direction", desc: "If Boulder stays in the mix, many buyers can stay at the city level a little longer before narrowing. Downtown Boulder, North Boulder, South Boulder, Table Mesa, and Gunbarrel are the main areas to understand." },
              { step: "3", title: "Fort Collins Direction", desc: "If Fort Collins stays in the mix, the search may require more time to understand the different parts of the city. Old Town, Midtown, and newer development areas each have distinct housing patterns." },
              { step: "4", title: "Move Past City Labels", desc: "Buyers sometimes start with city names and then find the actual neighborhoods that fit. That process works differently in Boulder than in Fort Collins, and it is worth understanding both before committing to a direction." },
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
              Buyers comparing Boulder and Fort Collins may also find it useful to review how
              each city compares to Denver, and to explore the broader Northern Colorado buyer
              resources before narrowing their search.
            </p>
            <div className="space-y-3 mb-8">
              {[
                { title: "Denver vs Boulder", link: "/denver-vs-boulder" },
                { title: "Denver vs Fort Collins", link: "/denver-vs-fort-collins" },
                { title: "Buying a Home in Denver", link: "/buying-a-home-in-denver" },
                { title: "First-Time Home Buyer Denver", link: "/first-time-home-buyer-denver" },
                { title: "Cost of Living in Denver Colorado", link: "/cost-of-living-in-denver-colorado" },
                { title: "Relocating to Denver Colorado", link: "/relocation/relocating-to-denver-colorado" },
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
            <a href="/boulder-homes-for-sale" className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-semibold">
              Explore Boulder Homes for Sale
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
            Boulder vs Fort Collins FAQs
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
              Ready to Explore Your Northern Colorado Options?
            </h2>
            <p className="text-lg text-cream/80 mb-8">
              Schedule a consultation to discuss your goals, compare Boulder and Fort Collins,
              and build a realistic home search plan for the right Colorado market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <CTAButton />
              <a
                href="/boulder-homes-for-sale"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-gold text-gold hover:bg-gold hover:text-charcoal px-7 py-4 text-[15px] sm:text-base no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Explore Boulder Homes for Sale
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
