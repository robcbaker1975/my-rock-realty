/**
 * Centennial CO Homes for Sale — My Rock Realty
 * Douglas County cluster suburb spoke page — focused suburb page for Centennial search intent
 * Note: Centennial spans Arapahoe and Douglas counties — county overlap acknowledged conservatively
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
const CENTENNIAL_HERO_BG = "/images/denver-rowhouses-hero.jpg";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "Where is Centennial located in Colorado?",
    answer:
      "Centennial is a city in the south Denver metro area, incorporated in 2001. It spans portions of both Arapahoe and Douglas counties, with the majority of the city in Arapahoe County. Buyers should verify which county a specific property falls within, as county can affect tax rates, services, and other factors.",
  },
  {
    question: "What types of homes can buyers find in Centennial?",
    answer:
      "Buyers may find a range of housing options in Centennial, including single-family homes in established neighborhoods, newer construction, townhomes, and properties across a variety of price ranges. The city has a mix of residential areas with different neighborhood characters.",
  },
  {
    question: "Why do buyers consider Centennial when searching in the south Denver metro?",
    answer:
      "Buyers often consider Centennial for its position in the south Denver metro, its proximity to major employment corridors, and housing options that may differ in character from other south metro communities. Centennial is a large incorporated city with its own community identity while remaining connected to the broader Denver metro area.",
  },
  {
    question: "Does Centennial fall in Arapahoe County or Douglas County?",
    answer:
      "Centennial spans both Arapahoe and Douglas counties. The majority of the city is in Arapahoe County, with some portions in Douglas County. Buyers should verify which county a specific property falls within, as county boundaries can affect property taxes, school districts, and other factors. Buyers should independently research the specific property location.",
  },
  {
    question: "What should buyers pay attention to when considering homes in Centennial?",
    answer:
      "Buyers should pay attention to neighborhood location, home condition, county designation for the specific property, proximity to employment centers and services, lot characteristics, and how individual properties compare within the area. Buyers should independently research schools, commute considerations, and other community factors important to them.",
  },
];

/* ─── Build FAQ Schema ─── */
const faqSchema = buildFAQPageSchema(faqContent);

/* ─── Breadcrumb Items ─── */
const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Douglas County Homes for Sale", url: "/douglas-co-homes-for-sale" },
  { label: "Centennial CO Homes for Sale", url: "/centennial-co-homes-for-sale" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function CTAButton({
  label = "Schedule a Centennial Home Buying Consultation",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a
      href="mailto:rob@myrockhomes.com?subject=Centennial Home Buying Consultation"
      className={`inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 bg-gold text-charcoal hover:bg-gold-light hover:shadow-lg px-7 py-4 text-[15px] sm:text-base no-underline ${className}`}
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {label}
      <ArrowRight size={18} />
    </a>
  );
}

export default function CentennialCoHomesForSale() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <SeoHead
        metadata={{
          title: "Centennial CO Homes for Sale | Centennial Colorado Real Estate",
          description:
            "Explore Centennial CO homes for sale, neighborhood character, housing styles, south Denver metro proximity, and helpful resources for buying in Centennial, Colorado.",
          canonicalUrl: "https://www.myrockhomes.com/centennial-co-homes-for-sale",
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
          1. HERO — Centennial CO Homes for Sale
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-charcoal overflow-hidden">
        {/* Hero Background Image */}
        <img
          src={CENTENNIAL_HERO_BG}
          alt="Row houses along a residential street in Centennial"
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
              Centennial CO Homes for Sale
            </h1>
            <p className="text-lg text-cream/80 mb-8 leading-relaxed">
              Explore homes in Centennial — a city in the south Denver metro incorporated in 2001, spanning portions of Arapahoe and Douglas counties. A range of residential neighborhoods, proximity to south metro employment corridors, and a mix of housing options make Centennial an option worth considering for buyers exploring the south Denver area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton />
              <a
                href="mailto:rob@myrockhomes.com?subject=Centennial Listings — Alert Request"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-gold text-gold hover:bg-gold hover:text-charcoal px-7 py-4 text-[15px] sm:text-base no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Get Alerts for New Centennial Homes
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          2. Why Buyers Consider Centennial
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Why Buyers Consider Centennial
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: "Incorporated City",
                desc: "Centennial is a large incorporated city with its own municipal government, incorporated in 2001. Buyers get a distinct community identity while remaining within the south Denver metro area and connected to regional services and amenities.",
              },
              {
                icon: MapPin,
                title: "South Metro Position",
                desc: "Centennial is situated in the south Denver metro area, providing access to employment corridors and communities across the region. Buyers should research specific commute considerations and proximity to the services that matter to them.",
              },
              {
                icon: CheckCircle2,
                title: "Range of Housing Options",
                desc: "Centennial offers a mix of housing options across established and newer neighborhoods. Buyers may find single-family homes, townhomes, and properties across a range of price points. Buyers should research specific neighborhoods and how they compare.",
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
          3. Neighborhood Character and County Note
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
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
              Centennial has a community character shaped by its position in the south Denver metro, its large incorporated city identity, and a range of neighborhoods from established areas to newer developments. The city spans portions of Arapahoe and Douglas counties — buyers should verify which county a specific property falls within, as this can affect property taxes and other factors.
            </p>
            <p className="text-cream/90 leading-relaxed">
              The community attracts a range of buyers — from those seeking proximity to south metro employment centers to those looking for established neighborhoods with a range of housing options. Buyers should research specific neighborhoods and how individual properties compare within the broader Centennial area.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          4. Explore Centennial and Douglas County Area Pages
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Explore Centennial and Douglas County Area Pages
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
                name: "Castle Pines CO Homes for Sale",
                link: "/castle-pines-co-homes-for-sale",
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
          5. What to Know Before Buying in Centennial
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            What to Know Before Buying in Centennial
          </h2>
          <div className="space-y-4">
            {[
              "Verify which county (Arapahoe or Douglas) a specific property falls within",
              "Understand neighborhood-specific market dynamics and price ranges",
              "Evaluate home condition, renovation quality, and lot characteristics",
              "Consider proximity to Parker, Castle Pines, and other south metro communities",
              "Research commute considerations and access to employment centers",
              "Research neighborhood character and community factors independently",
              "Independently research schools, commute data, and other community factors important to you",
              "Work with an agent familiar with Centennial and south Denver metro market dynamics",
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
          6. Explore South Denver Metro Real Estate Options
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Explore South Denver Metro Real Estate Options
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
                title: "Castle Pines CO Homes for Sale",
                link: "/castle-pines-co-homes-for-sale",
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
          7. Centennial Buyer Resources
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-8 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Centennial Buyer Resources
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="bg-cream/10 rounded-lg p-8 border border-cream/20"
          >
            <p className="text-cream/90 leading-relaxed mb-6">
              Buying in Centennial involves understanding the community's specific market dynamics, housing mix, neighborhood character, and how individual properties compare within the area. Knowing the home buying process helps buyers move forward with confidence.
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
          7b. Douglas County Communities
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-cream">
        <div className="container max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-2"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Douglas County Communities
          </h2>
          <p className="text-charcoal/60 text-sm mb-6">
            Centennial is one of several communities in the Douglas County area. Buyers often compare multiple areas before deciding on a location.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <a
              href="/douglas-co-homes-for-sale"
              className="block bg-white border border-charcoal/10 rounded-lg px-4 py-3 text-sm font-medium text-charcoal hover:border-gold hover:text-gold transition-colors duration-150"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Douglas County Hub
              <ArrowRight size={13} className="inline ml-1.5 opacity-60" />
            </a>
            <a
              href="/parker-co-homes-for-sale"
              className="block bg-white border border-charcoal/10 rounded-lg px-4 py-3 text-sm font-medium text-charcoal hover:border-gold hover:text-gold transition-colors duration-150"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Parker CO Homes
              <ArrowRight size={13} className="inline ml-1.5 opacity-60" />
            </a>
            <a
              href="/castle-pines-co-homes-for-sale"
              className="block bg-white border border-charcoal/10 rounded-lg px-4 py-3 text-sm font-medium text-charcoal hover:border-gold hover:text-gold transition-colors duration-150"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Castle Pines CO Homes
              <ArrowRight size={13} className="inline ml-1.5 opacity-60" />
            </a>
            <a
              href="/lone-tree-co-homes-for-sale"
              className="block bg-white border border-charcoal/10 rounded-lg px-4 py-3 text-sm font-medium text-charcoal hover:border-gold hover:text-gold transition-colors duration-150"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Lone Tree CO Homes
              <ArrowRight size={13} className="inline ml-1.5 opacity-60" />
            </a>
            <a
              href="/denver-homes-for-sale"
              className="block bg-white border border-charcoal/10 rounded-lg px-4 py-3 text-sm font-medium text-charcoal hover:border-gold hover:text-gold transition-colors duration-150"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Denver Metro
              <ArrowRight size={13} className="inline ml-1.5 opacity-60" />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          8. Centennial FAQs
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Centennial FAQs
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
              Ready to Explore Centennial Homes?
            </h2>
            <p className="text-lg text-cream/80 mb-8">
              Schedule a consultation to discuss your Centennial home buying goals and explore available options.
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
