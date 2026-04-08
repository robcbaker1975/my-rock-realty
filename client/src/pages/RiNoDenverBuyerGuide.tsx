/**
 * RiNo Denver Buyer Guide — My Rock Realty
 * Neighborhood buyer guide for RiNo buyers
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
  CheckCircle2,
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
    question: "How do buyers usually narrow a search in RiNo?",
    answer:
      "Most start by deciding whether they prefer the Brighton side of the neighborhood or the Larimer, Walnut, and Blake side, then narrow further by street and building.",
  },
  {
    question: "Why does exact location matter so much in RiNo?",
    answer:
      "Because RiNo is compact, and even a short move can change how tied a home feels to busier streets, art-focused blocks, and the center of the district.",
  },
  {
    question: "What types of homes do buyers usually compare in RiNo?",
    answer:
      "Buyers often compare condos, loft-style homes, attached options, and newer residential buildings, with the immediate block carrying a lot of weight in the decision.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Denver Homes for Sale", url: "/denver-homes-for-sale" },
  { label: "RiNo Denver Homes for Sale", url: "/rino-denver-homes-for-sale" },
  { label: "RiNo Denver Buyer Guide", url: "/rino-denver-buyer-guide" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function CTAButton({
  label = "Schedule a RiNo Buyer Consultation",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a
      href="mailto:rob@myrockhomes.com?subject=RiNo Buyer Consultation"
      className={`inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 bg-gold text-charcoal hover:bg-gold-light hover:shadow-lg px-7 py-4 text-[15px] sm:text-base no-underline ${className}`}
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {label}
      <ArrowRight size={18} />
    </a>
  );
}

export default function RiNoDenverBuyerGuide() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="hub-page min-h-screen flex flex-col bg-cream">
      <Navbar compact />
      <SeoHead
        metadata={{
          title: "RiNo Denver Buyer Guide | River North Art District Home Search",
          description:
            "A practical buyer guide for RiNo (River North Art District) in Denver. Learn how block choice, Brighton Boulevard, and the Larimer and Walnut side of the neighborhood shape the RiNo home search.",
          canonicalUrl: "https://myrockhomes.com/rino-denver-buyer-guide",
          breadcrumbs: breadcrumbItems,
        }}
        schema={faqSchema ? [faqSchema] : []}
      />

      {/* 1. HERO */}
      <section className="relative bg-charcoal overflow-hidden pt-[72px]">
        <img
          src={HERO_BG}
          alt="Residential street in RiNo Denver"
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
              RiNo Denver Buyer Guide
            </h1>
            <p className="text-lg text-cream/80 mb-8 leading-relaxed">
              A practical orientation for buyers considering RiNo — how the district is
              organized, how exact location shapes the search, and how to move from broad
              interest to a more focused home comparison.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton />
              <a
                href="/rino-denver-homes-for-sale"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-gold text-gold hover:bg-gold hover:text-charcoal px-7 py-4 text-[15px] sm:text-base no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                RiNo Homes for Sale
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. What Buyers Notice First About RiNo */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            What Buyers Notice First About RiNo
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: "Brighton Boulevard Sets One Tone",
                desc: "Brighton Boulevard is one of the defining streets in RiNo. Buyers usually pick up on its character quickly and use it as a reference point for the rest of the district.",
              },
              {
                icon: Compass,
                title: "Larimer, Walnut, and Blake Feel Different",
                desc: "The Larimer, Walnut, and Blake side of the neighborhood can feel different from Brighton once you are in the neighborhood — buyers usually notice that contrast early.",
              },
              {
                icon: Home,
                title: "Exact Location Matters Here",
                desc: "RiNo is compact, but even a short move can change how tied a home feels to busier streets, art-focused blocks, and the center of the district.",
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

      {/* 3. Why Exact Location Matters in RiNo */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-4xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-8 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Why Exact Location Matters in RiNo
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="bg-cream/10 rounded-lg p-8 border border-cream/20"
          >
            <p className="text-cream/90 leading-relaxed mb-6">
              In RiNo, the search usually gets more specific than just choosing the neighborhood
              name. A place closer to Brighton can feel different from one along Larimer or
              Walnut, and even a short move can change how tied a home feels to busier streets,
              art-focused blocks, and the center of the district.
            </p>
            <p className="text-cream/90 leading-relaxed">
              Buyers usually do best here when they pay close attention to the exact street and
              immediate surroundings, not just the listing details.
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
              RiNo buyers are often comparing condos, loft-style homes, attached options, and
              newer residential buildings, with the block playing a big role in how a property
              feels once you are there.
            </p>
            <p className="text-charcoal/80 leading-relaxed">
              Because the neighborhood is compact, the home and the exact stretch of street
              usually get judged together more than they would in a broader Denver search.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5. How to Narrow the Search in RiNo */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-4xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            How to Narrow the Search in RiNo
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Decide Which Part of the District Fits You",
                desc: "The most useful way to narrow a RiNo search is to decide which part of the district fits you best and how close you want to be to the busiest parts of it.",
              },
              {
                step: "2",
                title: "Brighton Side or Larimer, Walnut, and Blake Side",
                desc: "Some buyers want to be closer to Brighton Boulevard. Others prefer the Larimer, Walnut, or Blake side of the neighborhood.",
              },
              {
                step: "3",
                title: "Narrow by Street and Building",
                desc: "Once the preferred side of the district is clear, narrowing by exact street and building type makes the comparison much more manageable.",
              },
              {
                step: "4",
                title: "Compare Homes Within That Area",
                desc: "Once that is clear, it gets much easier to compare homes in a way that matches how RiNo actually feels from block to block.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                className="flex gap-4 bg-cream/10 rounded-lg p-6 border border-cream/20"
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-gold text-charcoal flex items-center justify-center font-bold text-lg"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {item.step}
                </div>
                <div>
                  <h3
                    className="text-lg font-bold text-cream mb-1"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-cream/80 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Related Denver Buyer Resources */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-3xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-8 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Related Denver Buyer Resources
          </h2>
          <p className="text-charcoal/70 text-center mb-10 leading-relaxed">
            If you are still orienting your Denver search, these guides may help you think
            through the broader picture before narrowing to RiNo specifically.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "RiNo Denver Homes for Sale", href: "/rino-denver-homes-for-sale" },
              { label: "Denver Homes for Sale", href: "/denver-homes-for-sale" },
              { label: "Buying a Home in Denver", href: "/buying-a-home-in-denver" },
              { label: "First-Time Home Buyer Denver", href: "/first-time-home-buyer-denver" },
              { label: "Denver Home Buying Process", href: "/denver-home-buying-process" },
              { label: "LoHi Denver Buyer Guide", href: "/lohi-denver-buyer-guide" },
              { label: "Cherry Creek Denver Buyer Guide", href: "/cherry-creek-denver-buyer-guide" },
              { label: "Wash Park Denver Buyer Guide", href: "/wash-park-denver-buyer-guide" },
            ].map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="flex items-center gap-3 p-4 bg-white rounded-lg border border-charcoal/10 shadow-sm hover:border-gold hover:shadow-md transition-all duration-200 no-underline"
              >
                <CheckCircle2 size={18} className="text-gold flex-shrink-0" />
                <span
                  className="text-charcoal font-medium"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-4xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            RiNo Buyer Guide FAQ
          </h2>
          <div className="space-y-4">
            {faqContent.map((faq, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                className="bg-cream/10 rounded-lg border border-cream/20 overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  aria-expanded={expandedFaq === idx}
                >
                  <span
                    className="text-lg font-semibold text-cream"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-gold flex-shrink-0 transition-transform duration-200 ${
                      expandedFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 pb-6">
                    <p className="text-cream/80 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Ready to Explore RiNo?
          </h2>
          <p className="text-charcoal/70 mb-10 leading-relaxed">
            If you are narrowing your Denver search to RiNo, a local buyer consultation can
            help you understand how the district is organized and which part of the neighborhood
            may fit your priorities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton label="Schedule a RiNo Buyer Consultation" />
            <a
              href="/rino-denver-homes-for-sale"
              className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-cream px-7 py-4 text-[15px] sm:text-base no-underline"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              View RiNo Listings
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
