/**
 * LaSalle CO Homes for Sale — My Rock Realty
 * Greeley cluster suburb spoke page — focused suburb page for LaSalle search intent
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
    question: "What is LaSalle known for in the Greeley area?",
    answer:
      "LaSalle is a small unincorporated community in Weld County located southeast of Greeley along the South Platte River. It has a small community character with agricultural roots and is part of the broader Greeley area, while maintaining a distinct identity from the city of Greeley.",
  },
  {
    question: "What types of homes can buyers find in LaSalle?",
    answer:
      "Buyers may find a range of housing options in and around LaSalle, including single-family homes, properties with larger lots, and rural residential options. The community's smaller scale means a different housing mix than larger nearby communities like Greeley.",
  },
  {
    question: "Why do buyers consider LaSalle when searching near Greeley?",
    answer:
      "Buyers often consider LaSalle for its small community character, South Platte River proximity, and housing options that may differ in scale and character from Greeley. Buyers seeking a quieter community setting within Weld County sometimes explore LaSalle as part of their search.",
  },
  {
    question: "Is LaSalle a good fit for buyers who want a rural community setting?",
    answer:
      "LaSalle can be a strong fit for buyers who prioritize a smaller community setting, agricultural character, and proximity to the South Platte River. Buyers should research specific properties, commute considerations, available services, and community factors that matter to them before making a decision.",
  },
  {
    question: "What should buyers pay attention to when considering homes in LaSalle?",
    answer:
      "Buyers should pay attention to property characteristics, lot size, proximity to Greeley and other Front Range communities, available services, and how individual properties compare within the area. Buyers should independently research schools, commute times, and other community factors important to them.",
  },
];

/* ─── Build FAQ Schema ─── */
const faqSchema = buildFAQPageSchema(faqContent);

/* ─── Breadcrumb Items ─── */
const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Greeley, CO Homes for Sale", url: "/greeley-co-homes-for-sale" },
  { label: "LaSalle CO Homes for Sale", url: "/lasalle-co-homes-for-sale" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function CTAButton({
  label = "Schedule a LaSalle Home Buying Consultation",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a
      href="mailto:rob@myrockhomes.com?subject=LaSalle Home Buying Consultation"
      className={`inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 bg-gold text-charcoal hover:bg-gold-light hover:shadow-lg px-7 py-4 text-[15px] sm:text-base no-underline ${className}`}
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {label}
      <ArrowRight size={18} />
    </a>
  );
}

export default function LaSalleCoHomesForSale() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <SeoHead
        metadata={{
          title: "LaSalle CO Homes for Sale | LaSalle Colorado Real Estate",
          description:
            "Explore LaSalle CO homes for sale, small community character, housing styles, South Platte River proximity, and helpful resources for buying in LaSalle, Colorado.",
          canonicalUrl: "https://myrockhomes.com/lasalle-co-homes-for-sale",
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
          1. HERO — LaSalle CO Homes for Sale
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-charcoal overflow-hidden">
        {/* Hero Background Image */}
        <img
          src={DENVER_HERO_BG}
          alt="Row houses along a residential street in LaSalle"
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
              LaSalle CO Homes for Sale
            </h1>
            <p className="text-lg text-cream/80 mb-8 leading-relaxed">
              Explore homes in LaSalle — a small community in Weld County located southeast of Greeley along the South Platte River. A small community character, agricultural roots, and proximity to the broader Greeley area make LaSalle an option worth considering for buyers exploring Weld County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton />
              <a
                href="mailto:rob@myrockhomes.com?subject=LaSalle Listings — Alert Request"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-gold text-gold hover:bg-gold hover:text-charcoal px-7 py-4 text-[15px] sm:text-base no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Get Alerts for New LaSalle Homes
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          2. Why Buyers Consider LaSalle
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Why Buyers Consider LaSalle
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: "Small Community Setting",
                desc: "LaSalle offers a small community setting with agricultural roots and a distinct character from larger Front Range cities. Buyers seeking a quieter community environment within Weld County sometimes explore LaSalle as part of their search.",
              },
              {
                icon: MapPin,
                title: "South Platte River",
                desc: "LaSalle is situated along the South Platte River in Weld County, providing a natural landscape feature and river corridor setting that shapes the community's character.",
              },
              {
                icon: CheckCircle2,
                title: "Greeley Area Proximity",
                desc: "LaSalle's location southeast of Greeley places it within reach of Greeley's employment centers and services, giving buyers access to regional amenities while living in a smaller community setting.",
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
              LaSalle has a community character shaped by its agricultural heritage, South Platte River setting, and small community identity. Buyers are drawn to the community's quieter pace and distinct character compared to larger Weld County cities.
            </p>
            <p className="text-cream/90 leading-relaxed">
              The community attracts buyers seeking a smaller community setting within reach of Greeley and other Front Range areas. Buyers should research specific properties, commute considerations, available services, and community factors that matter to them before making a decision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          4. Explore LaSalle and Greeley Area Pages
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Explore LaSalle and Greeley Area Pages
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Greeley, CO Homes Hub",
                link: "/greeley-co-homes-for-sale",
              },
              {
                name: "Greeley Homes for Sale",
                link: "/greeley-homes-for-sale",
              },
              {
                name: "Evans CO Homes for Sale",
                link: "/evans-co-homes-for-sale",
              },
              {
                name: "Platteville CO Homes for Sale",
                link: "/platteville-co-homes-for-sale",
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
          5. What to Know Before Buying in LaSalle
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            What to Know Before Buying in LaSalle
          </h2>
          <div className="space-y-4">
            {[
              "Understand the small community market dynamics and available housing options",
              "Evaluate property characteristics, lot size, and condition carefully",
              "Consider commute times to Greeley, Fort Collins, and other employment centers",
              "Research available services, schools, and community amenities independently",
              "Research neighborhood character and community factors independently",
              "Independently research schools, crime data, and other community factors important to you",
              "Work with an agent familiar with LaSalle and Weld County market dynamics",
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
          6. Explore Weld County Real Estate Options
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Explore Weld County Real Estate Options
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Greeley, CO Homes Hub",
                link: "/greeley-co-homes-for-sale",
              },
              {
                title: "Greeley Homes for Sale",
                link: "/greeley-homes-for-sale",
              },
              {
                title: "Evans CO Homes for Sale",
                link: "/evans-co-homes-for-sale",
              },
              {
                title: "Platteville CO Homes for Sale",
                link: "/platteville-co-homes-for-sale",
              },
              {
                title: "Denver Homes for Sale",
                link: "/denver-homes-for-sale",
              },
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
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          7. LaSalle Buyer Resources
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-8 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            LaSalle Buyer Resources
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="bg-cream/10 rounded-lg p-8 border border-cream/20"
          >
            <p className="text-cream/90 leading-relaxed mb-6">
              Buying in LaSalle involves understanding the community's specific market dynamics, housing mix, property characteristics, and how individual properties compare within the area. Knowing the home buying process helps buyers move forward with confidence.
            </p>
            <div className="space-y-3 mb-8">
              {[
                {
                  title: "Buying a Home in Colorado",
                  link: "/buying-a-home-in-denver",
                },
                {
                  title: "Colorado Home Buying Process",
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
              href="/greeley-co-homes-for-sale"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-semibold"
            >
              Back to Greeley County Homes Hub
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          8. LaSalle FAQs
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            LaSalle FAQs
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
              Ready to Explore LaSalle Homes?
            </h2>
            <p className="text-lg text-cream/80 mb-8">
              Schedule a consultation to discuss your LaSalle home buying goals and explore available options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <CTAButton />
              <a
                href="/greeley-co-homes-for-sale"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-gold text-gold hover:bg-gold hover:text-charcoal px-7 py-4 text-[15px] sm:text-base no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Browse Greeley Area Listings
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
