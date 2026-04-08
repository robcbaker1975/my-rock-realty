/**
 * LoHi Denver Buyer Guide — My Rock Realty
 * Neighborhood buyer guide for LoHi buyers
 * Design: Front Range Modern — matches existing site design system
 * Palette: Warm charcoal (#292524), cream (#F5F0EB), antique gold (#C9A96E)
 * Typography: Outfit (display) + Libre Franklin (body)
 */

import { useState } from "react";
import SeoHead from "@/components/seo/SeoHead";
import Navbar from "@/components/Navbar";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Home,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
  Compass,
  Scale,
} from "lucide-react";

/* Hero Background Image — Approved Denver metro aerial view (shared pattern) */
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/denver-rowhouses-hero_2f59d4ac.jpg";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "Why does block choice matter so much in LoHi?",
    answer:
      "LoHi is compact, so even a short shift in location can change how close a home feels to busy streets, restaurant corridors, the bridges, and the downtown side of the neighborhood.",
  },
  {
    question: "What kinds of homes do buyers usually see in LoHi?",
    answer:
      "Buyers often compare newer attached homes, condos, and older houses, usually within a fairly small area.",
  },
  {
    question: "How do buyers usually narrow a LoHi search?",
    answer:
      "Most buyers start by deciding how close they want to be to busier streets, the bridges, and the downtown side of LoHi, then focus on the blocks that match that preference.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Denver Homes for Sale", url: "/denver-homes-for-sale" },
  { label: "LoHi Denver Homes for Sale", url: "/lohi-denver-homes-for-sale" },
  { label: "LoHi Denver Buyer Guide", url: "/lohi-denver-buyer-guide" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function CTAButton({
  label = "Schedule a LoHi Buyer Consultation",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a
      href="mailto:rob@myrockhomes.com?subject=LoHi Buyer Consultation"
      className={`inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 bg-gold text-charcoal hover:bg-gold-light hover:shadow-lg px-7 py-4 text-[15px] sm:text-base no-underline ${className}`}
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {label}
      <ArrowRight size={18} />
    </a>
  );
}

export default function LohiDenverBuyerGuide() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="hub-page min-h-screen flex flex-col bg-cream">
      <Navbar compact />
      <SeoHead
        metadata={{
          title: "LoHi Denver Buyer Guide | Lower Highlands Home Search",
          description:
            "A practical buyer guide for LoHi in Denver. Learn how proximity to the bridges, busy corridors, and the downtown side of the neighborhood shapes the LoHi home search.",
          canonicalUrl: "https://myrockhomes.com/lohi-denver-buyer-guide",
          breadcrumbs: breadcrumbItems,
        }}
        schema={faqSchema ? [faqSchema] : []}
      />

      {/* 1. HERO */}
      <section className="relative bg-charcoal overflow-hidden pt-[72px]">
        <img
          src={HERO_BG}
          alt="Residential street in LoHi Denver"
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
              LoHi Denver Buyer Guide
            </h1>
            <p className="text-lg text-cream/80 mb-8 leading-relaxed">
              A practical orientation for buyers considering LoHi — how the neighborhood is
              organized, how proximity to the bridges and busier corridors shapes the search,
              and how to narrow from broad interest to a focused home comparison.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton />
              <a
                href="/lohi-denver-homes-for-sale"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-gold text-gold hover:bg-gold hover:text-charcoal px-7 py-4 text-[15px] sm:text-base no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                LoHi Homes for Sale
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. What Stands Out About LoHi Right Away */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            What Stands Out About LoHi Right Away
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: "Close to Downtown",
                desc: "LoHi feels close to downtown as soon as you are in it. The bridges and the South Platte corridor shape how this small area feels from block to block.",
              },
              {
                icon: Compass,
                title: "Compact and Variable",
                desc: "It is a compact part of Denver, and buyers usually sort it by how close they want to be to the busiest corridors versus the blocks that sit a little farther off them.",
              },
              {
                icon: Home,
                title: "Block-Level Differences",
                desc: "Some homes sit closer to busier corridors and the streets that carry you toward the bridges and downtown. Others are set on smaller residential blocks that feel more tucked in.",
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

      {/* 3. How Different Parts of LoHi Can Feel */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-4xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-8 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            How Different Parts of LoHi Can Feel
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="bg-cream/10 rounded-lg p-8 border border-cream/20"
          >
            <p className="text-cream/90 leading-relaxed mb-6">
              In LoHi, the distance from one block to the next may be short, but the feel can
              change fast. Some homes sit closer to busier corridors, restaurant streets, and
              the streets that carry you toward the bridges and downtown.
            </p>
            <p className="text-cream/90 leading-relaxed">
              Others are set on smaller residential blocks that feel a little more tucked in
              once you step off those busier streets. Buyers usually get the clearest read on
              LoHi when they pay close attention to the exact block, not just the neighborhood
              name on the listing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. What Kinds of Homes Buyers Will See */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-4xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-8 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            What Kinds of Homes Buyers Will See
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="bg-white rounded-lg p-8 border border-charcoal/10 shadow-sm"
          >
            <p className="text-charcoal/80 leading-relaxed mb-6">
              LoHi often gives buyers a mix of newer attached homes, condos, and older houses
              within a fairly tight area. Because the neighborhood is so compact, the home and
              the immediate surroundings usually get judged together.
            </p>
            <p className="text-charcoal/80 leading-relaxed">
              A buyer may like the home itself, but still need to decide whether the block,
              nearby activity, and overall setting feel right once they are standing there.
              Buyers should research current availability and compare options across different
              parts of the neighborhood.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5. How to Narrow the Search in LoHi */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-4xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            How to Narrow the Search in LoHi
          </h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Decide on Proximity to Busier Streets", desc: "The most useful way to narrow a LoHi search is to decide how close you want to be to the busier streets, the bridges, and the downtown side of LoHi." },
              { step: "2", title: "Close-In Feel", desc: "Some buyers want to be right in the middle of that close-in feel. That preference usually narrows the map quickly and makes block comparison more focused." },
              { step: "3", title: "A Little Farther Off the Main Streets", desc: "Others want a block that sits a little farther off the main streets while still staying in the neighborhood. Those buyers may find the smaller residential blocks offer a different kind of setting." },
              { step: "4", title: "Compare Blocks Carefully", desc: "Once that is clear, it becomes much easier to compare homes in a way that matches how LoHi actually feels from block to block." },
              { step: "5", title: "Use Local Guidance", desc: "Local expertise can help buyers understand how LoHi reads from block to block before committing to a direction, especially in a compact neighborhood where small differences matter." },
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

      {/* 6. Related Denver Buyer Resources */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-4xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-8 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Related Denver Buyer Resources
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="bg-white rounded-lg p-8 border border-charcoal/10 shadow-sm"
          >
            <p className="text-charcoal/80 leading-relaxed mb-6">
              Buyers considering LoHi may also want to review broader Denver buyer guides
              and explore other Denver neighborhoods before narrowing their search.
            </p>
            <div className="space-y-3 mb-8">
              {[
                { title: "LoHi Denver Homes for Sale", link: "/lohi-denver-homes-for-sale" },
                { title: "Denver Homes for Sale", link: "/denver-homes-for-sale" },
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
          </motion.div>
        </div>
      </section>

      {/* 7. FAQs */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-4xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            LoHi Buyer FAQs
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
                  className="w-full flex items-center justify-between p-6 hover:bg-cream/20 transition-colors text-left"
                >
                  <h3 className="font-bold text-cream pr-4">{item.question}</h3>
                  <ChevronDown
                    size={20}
                    className={`text-gold flex-shrink-0 transition-transform ${expandedFaq === idx ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 pb-6 border-t border-cream/20 text-cream/80">{item.answer}</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl text-center">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2
              className="text-3xl sm:text-4xl font-bold text-charcoal mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Ready to Explore LoHi?
            </h2>
            <p className="text-lg text-charcoal/70 mb-8">
              Schedule a consultation to discuss your LoHi search priorities and build
              a focused home search plan for the right part of the neighborhood.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <CTAButton />
              <a
                href="/lohi-denver-homes-for-sale"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-cream px-7 py-4 text-[15px] sm:text-base no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                View LoHi Listings
                <ArrowRight size={18} />
              </a>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-charcoal/50 text-xs">
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
