/**
 * Castle Pines CO Homes for Sale — My Rock Realty
 * Douglas County cluster suburb spoke page — focused suburb page for Castle Pines search intent
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
const CASTLE_PINES_HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/denver-rowhouses-hero_2f59d4ac.jpg";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "Where is Castle Pines located in Colorado?",
    answer:
      "Castle Pines is a city in Douglas County, Colorado, located north of Castle Rock and south of Lone Tree along the I-25 corridor. It is a distinct municipality with its own city government, incorporated in 2008, and is separate from the unincorporated community of Castle Pines North.",
  },
  {
    question: "What types of homes can buyers find in Castle Pines?",
    answer:
      "Buyers may find a range of housing options in Castle Pines, including single-family homes in established neighborhoods, newer construction, and properties in planned communities. The city has a mix of housing styles and price ranges across its residential areas.",
  },
  {
    question: "Why do buyers consider Castle Pines when searching in Douglas County?",
    answer:
      "Buyers often consider Castle Pines for its position within Douglas County, its proximity to the I-25 corridor, and housing options that may differ in character from other Douglas County communities. Castle Pines is a separate city with its own community identity while remaining connected to the broader Douglas County area.",
  },
  {
    question: "How does Castle Pines relate to Castle Rock and other Douglas County communities?",
    answer:
      "Castle Pines is located north of Castle Rock and shares Douglas County with communities including Parker and Lone Tree. Each community has its own character, housing stock, and market dynamics. Buyers should research how individual communities compare and which best fits their priorities.",
  },
  {
    question: "What should buyers pay attention to when considering homes in Castle Pines?",
    answer:
      "Buyers should pay attention to neighborhood location, home condition, proximity to employment centers and services, lot characteristics, and how individual properties compare within the area. Buyers should independently research schools, commute considerations, and other community factors important to them.",
  },
];

/* ─── Build FAQ Schema ─── */
const faqSchema = buildFAQPageSchema(faqContent);

/* ─── Breadcrumb Items ─── */
const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Douglas County Homes for Sale", url: "/douglas-co-homes-for-sale" },
  { label: "Castle Pines CO Homes for Sale", url: "/castle-pines-co-homes-for-sale" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function CTAButton({
  label = "Schedule a Castle Pines Home Buying Consultation",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a
      href="mailto:rob@myrockhomes.com?subject=Castle Pines Home Buying Consultation"
      className={`inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 bg-gold text-charcoal hover:bg-gold-light hover:shadow-lg px-7 py-4 text-[15px] sm:text-base no-underline ${className}`}
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {label}
      <ArrowRight size={18} />
    </a>
  );
}

export default function CastlePinesCoHomesForSale() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="hub-page min-h-screen flex flex-col bg-cream">
      <SeoHead
        metadata={{
          title: "Castle Pines CO Homes for Sale | Castle Pines Colorado Real Estate",
          description:
            "Explore Castle Pines CO homes for sale, neighborhood character, housing styles, proximity to Douglas County communities, and helpful resources for buying in Castle Pines, Colorado.",
          canonicalUrl: "https://myrockhomes.com/castle-pines-co-homes-for-sale",
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
          1. HERO — Castle Pines CO Homes for Sale
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-charcoal overflow-hidden">
        {/* Hero Background Image */}
        <img
          src={CASTLE_PINES_HERO_BG}
          alt="Row houses along a residential street in Castle Pines"
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
              Castle Pines CO Homes for Sale
            </h1>
            <p className="text-lg text-cream/80 mb-8 leading-relaxed">
              Explore homes in Castle Pines — a city in Douglas County located along the I-25 corridor between Castle Rock and Lone Tree. A distinct community identity, proximity to Douglas County amenities, and a range of residential neighborhoods make Castle Pines an option worth considering for buyers exploring the south Denver metro area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton />
              <a
                href="mailto:rob@myrockhomes.com?subject=Castle Pines Listings — Alert Request"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-gold text-gold hover:bg-gold hover:text-charcoal px-7 py-4 text-[15px] sm:text-base no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Get Alerts for New Castle Pines Homes
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          2. Why Buyers Consider Castle Pines
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Why Buyers Consider Castle Pines
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: "Distinct Municipality",
                desc: "Castle Pines is an incorporated city with its own municipal government, incorporated in 2008. Buyers get a distinct community identity while remaining within Douglas County and connected to the broader south Denver metro area.",
              },
              {
                icon: MapPin,
                title: "I-25 Corridor Position",
                desc: "Castle Pines is situated along the I-25 corridor in Douglas County, providing access to both the south Denver metro and communities further south. Buyers should research specific commute considerations and proximity to employment centers.",
              },
              {
                icon: CheckCircle2,
                title: "Douglas County Access",
                desc: "Castle Pines's location within Douglas County gives buyers access to county services and amenities while living in a distinct community with its own neighborhood character and residential areas.",
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
          3. Neighborhood Character
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-4xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-8 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Neighborhood Character
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="bg-cream/10 rounded-lg p-8 border border-cream/20"
          >
            <p className="text-cream/90 leading-relaxed mb-6">
              Castle Pines has a community character shaped by its position along the I-25 corridor, its distinct municipal identity, and a range of neighborhoods from established planned communities to newer residential areas. Buyers are drawn to the community's proximity to Douglas County employment centers while appreciating its separate community character.
            </p>
            <p className="text-cream/90 leading-relaxed">
              The community attracts a range of buyers — from those seeking proximity to the south Denver metro to those looking for a distinct Douglas County community with its own residential character. Buyers should research specific neighborhoods and how they compare to other Douglas County communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          4. Explore Castle Pines and Douglas County Area Pages
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Explore Castle Pines and Douglas County Area Pages
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Douglas County Homes Hub",
                link: "/douglas-co-homes-for-sale",
              },
              {
                name: "Parker CO Homes for Sale",
                link: "/parker-co-homes-for-sale",
              },
              {
                name: "Centennial CO Homes for Sale",
                link: "/centennial-co-homes-for-sale",
              },
              {
                name: "Lone Tree CO Homes for Sale",
                link: "/lone-tree-co-homes-for-sale",
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
          5. What to Know Before Buying in Castle Pines
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-4xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            What to Know Before Buying in Castle Pines
          </h2>
          <div className="space-y-4">
            {[
              "Understand neighborhood-specific market dynamics and price ranges",
              "Evaluate home condition, renovation quality, and lot characteristics",
              "Consider proximity to Castle Rock, Parker, and other Douglas County communities",
              "Research commute considerations and access to employment centers",
              "Research neighborhood character and community factors independently",
              "Independently research schools, commute data, and other community factors important to you",
              "Work with an agent familiar with Castle Pines and Douglas County market dynamics",
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
          6. Explore Douglas County Real Estate Options
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Explore Douglas County Real Estate Options
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Douglas County Homes Hub",
                link: "/douglas-co-homes-for-sale",
              },
              {
                title: "Parker CO Homes for Sale",
                link: "/parker-co-homes-for-sale",
              },
              {
                title: "Centennial CO Homes for Sale",
                link: "/centennial-co-homes-for-sale",
              },
              {
                title: "Lone Tree CO Homes for Sale",
                link: "/lone-tree-co-homes-for-sale",
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
          7. Castle Pines Buyer Resources
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-4xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-8 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Castle Pines Buyer Resources
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="bg-cream/10 rounded-lg p-8 border border-cream/20"
          >
            <p className="text-cream/90 leading-relaxed mb-6">
              Buying in Castle Pines involves understanding the community's specific market dynamics, housing mix, neighborhood character, and how individual properties compare within the area. Knowing the home buying process helps buyers move forward with confidence.
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
              href="/douglas-co-homes-for-sale"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-semibold"
            >
              Back to Douglas County Homes Hub
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          8. Castle Pines FAQs
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-4xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Castle Pines FAQs
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
              Ready to Explore Castle Pines Homes?
            </h2>
            <p className="text-lg text-cream/80 mb-8">
              Schedule a consultation to discuss your Castle Pines home buying goals and explore available options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <CTAButton />
              <a
                href="/douglas-co-homes-for-sale"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-gold text-gold hover:bg-gold hover:text-charcoal px-7 py-4 text-[15px] sm:text-base no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Browse Douglas County Listings
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
            <p className="text-cream/30 text-xs mt-6">
              Information provided for general research purposes only. Buyers should independently verify all community, market, and property information. Rob Baker is an independent real estate professional. Results are not guaranteed.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
