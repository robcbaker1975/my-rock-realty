/**
 * Sloan Lake Denver Homes for Sale — My Rock Realty
 * Denver neighborhood spoke page — focused neighborhood page for Sloan Lake search intent
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
  Waves,
  Home,
  MapPin,
  CheckCircle2,
  Phone,
  Mail,
  ChevronDown,
} from "lucide-react";

/* Hero Background Image — Approved Denver metro aerial view */
const DENVER_HERO_BG = "/images/denver-rowhouses-hero.jpg";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "What is Sloan Lake known for in Denver?",
    answer:
      "Sloan Lake is known for its lake-centered setting, outdoor lifestyle appeal, and mix of housing options in a neighborhood that connects recreation with residential living.",
  },
  {
    question: "What types of homes can buyers find in Sloan Lake?",
    answer:
      "Buyers may find a mix of detached homes, townhomes, attached housing, condos, and other residential options depending on the block and proximity to the lake area.",
  },
  {
    question: "Why do buyers consider Sloan Lake when searching in Denver?",
    answer:
      "Buyers often consider Sloan Lake for its outdoor access, neighborhood visibility, and combination of residential streets with nearby Denver amenities.",
  },
  {
    question: "Is Sloan Lake a good fit for buyers who want recreation and neighborhood lifestyle together?",
    answer:
      "Sloan Lake can be a strong fit for buyers who want a neighborhood with strong outdoor identity, residential character, and convenient access to nearby city destinations.",
  },
  {
    question: "What should buyers pay attention to when considering homes in Sloan Lake?",
    answer:
      "Buyers should pay attention to block location, lake proximity, traffic patterns, home condition, redevelopment activity, and how a property compares with nearby alternatives.",
  },
];

/* ─── Build FAQ Schema ─── */
const faqSchema = buildFAQPageSchema(faqContent);

/* ─── Breadcrumb Items ─── */
const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Sloan Lake Denver Homes for Sale", url: "/sloan-lake-denver-homes-for-sale" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function CTAButton({
  label = "Schedule a Sloan Lake Home Buying Consultation",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a
      href="mailto:rob@myrockhomes.com?subject=Sloan Lake Home Buying Consultation"
      className={`inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 bg-gold text-charcoal hover:bg-gold-light hover:shadow-lg px-7 py-4 text-[15px] sm:text-base no-underline ${className}`}
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {label}
      <ArrowRight size={18} />
    </a>
  );
}

export default function SloanLakeDenverHomesForSale() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <SeoHead
        metadata={{
          title: "Sloan Lake Denver Homes for Sale | Sloan Lake Real Estate",
          description:
            "Explore Sloan Lake Denver homes for sale, neighborhood character, housing styles, lifestyle appeal, and helpful resources for buying near Sloan Lake.",
          canonicalUrl: "https://myrockhomes.com/sloan-lake-denver-homes-for-sale",
          breadcrumbs: breadcrumbItems,
        }}
        schema={faqSchema ? [faqSchema] : []}
      />

      {/* ═══════════════════════════════════════════════════
          BREADCRUMBS
      ═══════════════════════════════════════════════════ */}
      <div className="bg-charcoal">
        <div className="container py-3">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          1. HERO — Sloan Lake Denver Homes for Sale
      ═══════════════════════════════════════════════════ */}
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
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-2xl"
          >
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-cream mb-6 leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Sloan Lake Denver Homes for Sale
            </h1>
            <p className="text-lg text-cream/80 mb-8 leading-relaxed">
              Explore homes near Sloan Lake — one of Denver's lake-centered
              neighborhoods. Outdoor lifestyle appeal, residential character,
              and access to nearby city destinations make Sloan Lake a
              distinctive draw for buyers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton />
              <a
                href="mailto:rob@myrockhomes.com?subject=Sloan Lake Listings — Alert Request"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-gold text-gold hover:bg-gold hover:text-charcoal px-7 py-4 text-[15px] sm:text-base no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Get Alerts for New Sloan Lake Homes
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          2. Why Buyers Consider Sloan Lake
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Why Buyers Consider Sloan Lake
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Waves,
                title: "Lake-Centered Lifestyle",
                desc: "Sloan Lake offers a lake-centered setting with strong outdoor identity and recreational access that connects residential living with Denver's natural amenities.",
              },
              {
                icon: Home,
                title: "Diverse Housing Options",
                desc: "Buyers may find detached homes, townhomes, attached housing, condos, and other residential options depending on the block and proximity to the lake area.",
              },
              {
                icon: MapPin,
                title: "Neighborhood Visibility",
                desc: "Sloan Lake's location provides convenient access to nearby Denver amenities and city destinations while maintaining a distinct residential neighborhood character.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                className="bg-white rounded-lg p-6 border border-charcoal/10 shadow-sm"
              >
                <item.icon
                  size={32}
                  className="text-gold mb-4"
                  strokeWidth={1.5}
                />
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

      {/* ═══════════════════════════════════════════════════
          3. Neighborhood Character and Lifestyle
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-8 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Neighborhood Character and Lifestyle
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="bg-cream/10 rounded-lg p-8 border border-cream/20"
          >
            <p className="text-cream/90 leading-relaxed mb-6">
              Sloan Lake has a recognizable identity built around its
              lake-centered setting, outdoor lifestyle appeal, and mix of
              residential options. Buyers are drawn to the neighborhood's
              combination of recreation access, neighborhood character,
              and proximity to nearby Denver destinations.
            </p>
            <p className="text-cream/90 leading-relaxed">
              The neighborhood attracts a range of buyers — from those
              prioritizing outdoor access and lifestyle identity to buyers
              comparing Denver neighborhoods for residential character
              and long-term fit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          4. Homes and Housing Styles in Sloan Lake
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Homes and Housing Styles in Sloan Lake
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Wash Park",
                link: "/wash-park-denver-homes-for-sale",
              },
              {
                name: "LoHi",
                link: "/lohi-denver-homes-for-sale",
              },
              {
                name: "Central Park",
                link: "/central-park-denver-homes-for-sale",
              },
              {
                name: "Denver Homes Hub",
                link: "/denver-homes-for-sale",
              },
            ].map((neighborhood, idx) => (
              <motion.a
                key={idx}
                href={neighborhood.link}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                className="bg-white hover:shadow-lg rounded-lg p-6 border border-charcoal/10 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-charcoal group-hover:text-gold transition-colors">
                    {neighborhood.name}
                  </h3>
                  <ArrowRight
                    size={18}
                    className="text-gold group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          5. What to Know Before Buying in Sloan Lake
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            What to Know Before Buying in Sloan Lake
          </h2>
          <div className="space-y-4">
            {[
              "Pay attention to block location and lake proximity",
              "Evaluate home condition and building style carefully",
              "Understand traffic patterns near the lake and main corridors",
              "Review redevelopment activity in the area",
              "Compare the property with nearby alternatives",
              "Consider how outdoor access and lifestyle align with your goals",
              "Work with an agent familiar with Sloan Lake's specific market dynamics",
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                className="flex items-start gap-4 p-4 bg-cream/10 rounded-lg border border-cream/20"
              >
                <CheckCircle2
                  size={24}
                  className="text-gold flex-shrink-0 mt-0.5"
                  strokeWidth={1.5}
                />
                <p className="text-cream/80">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════
          7. Sloan Lake Buyer Resources
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-8 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Sloan Lake Buyer Resources
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="bg-cream/10 rounded-lg p-8 border border-cream/20"
          >
            <p className="text-cream/90 leading-relaxed mb-6">
              Buying in Sloan Lake involves understanding the neighborhood's
              specific market dynamics, housing mix, and how individual
              properties compare within the area. Knowing the Denver buying
              process helps buyers move forward with confidence.
            </p>
            <div className="space-y-3 mb-8">
              {[
                {
                  title: "Buying a Home in Denver",
                  link: "/buying-a-home-in-denver",
                },
                {
                  title: "Denver Home Buying Process",
                  link: "/denver-home-buying-process",
                },
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
            <a
              href="/denver-homes-for-sale"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-semibold"
            >
              Back to Denver Homes Hub
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          8. Sloan Lake FAQs
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Sloan Lake FAQs
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
                  onClick={() =>
                    setExpandedFaq(expandedFaq === idx ? null : idx)
                  }
                  className="w-full flex items-center justify-between p-6 hover:bg-cream/50 transition-colors text-left"
                >
                  <h3 className="font-bold text-charcoal pr-4">
                    {item.question}
                  </h3>
                  <ChevronDown
                    size={20}
                    className={`text-gold flex-shrink-0 transition-transform ${
                      expandedFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 pb-6 border-t border-charcoal/10 text-charcoal/80">
                    {item.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          9. Final CTA
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
          >
            <h2
              className="text-3xl sm:text-4xl font-bold text-cream mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Ready to Explore Sloan Lake Homes?
            </h2>
            <p className="text-lg text-cream/80 mb-8">
              Schedule a consultation to discuss your Sloan Lake home buying
              goals and explore available options in the neighborhood.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <CTAButton />
              <a
                href="/denver-homes-for-sale"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-gold text-gold hover:bg-gold hover:text-charcoal px-7 py-4 text-[15px] sm:text-base no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Browse Sloan Lake Listings
                <ArrowRight size={18} />
              </a>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-cream/50 text-xs">
              <a
                href="tel:+17203636544"
                className="inline-flex items-center gap-1.5 hover:text-gold transition-colors"
              >
                <Phone size={12} />
                720-363-6544
              </a>
              <a
                href="mailto:rob@myrockhomes.com"
                className="inline-flex items-center gap-1.5 hover:text-gold transition-colors"
              >
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
