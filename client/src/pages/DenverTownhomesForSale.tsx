/**
 * Denver Townhomes for Sale — My Rock Realty
 * Second Denver spoke page — focused property-type page for townhome-search intent
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
  Layers,
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
    question: "What types of townhomes can buyers find in Denver?",
    answer:
      "Buyers can find a range of townhome options in Denver, including newer attached homes, modern multi-level townhomes, low-maintenance properties, and townhomes in both urban and residential neighborhood settings.",
  },
  {
    question: "Are townhomes in Denver a good option for buyers who want less maintenance?",
    answer:
      "Townhomes can appeal to buyers who want a lower-maintenance lifestyle than a detached home while still having more space or privacy than some condo options, depending on the property and community.",
  },
  {
    question: "What should buyers consider before purchasing a townhome in Denver?",
    answer:
      "Buyers should review HOA structure, shared maintenance responsibilities, parking, layout, outdoor space, and the location of the townhome in relation to neighborhood amenities and commuting needs.",
  },
  {
    question: "Are townhomes available in desirable Denver neighborhoods?",
    answer:
      "Yes. Buyers can often find townhome options in a variety of Denver neighborhoods, including areas with walkability, access to dining and shopping, and proximity to parks or major city corridors.",
  },
  {
    question: "How is buying a townhome different from buying a condo or detached house?",
    answer:
      "Townhome purchases often sit between condos and detached homes in terms of maintenance, ownership structure, and shared community features, so buyers should understand both the property itself and any governing association details.",
  },
];

/* ─── Build FAQ Schema ─── */
const faqSchema = buildFAQPageSchema(faqContent);

/* ─── Breadcrumb Items ─── */
const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Denver Townhomes for Sale", url: "/denver-townhomes-for-sale" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function CTAButton({ label = "Schedule a Townhome Buying Consultation", className = "" }: { label?: string; className?: string }) {
  return (
    <a
      href="mailto:rob@myrockhomes.com?subject=Denver Townhome Buying Consultation"
      className={`inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 bg-gold text-charcoal hover:bg-gold-light hover:shadow-lg px-7 py-4 text-[15px] sm:text-base no-underline ${className}`}
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {label}
      <ArrowRight size={18} />
    </a>
  );
}

export default function DenverTownhomesForSale() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <SeoHead
        metadata={{
          title: "Denver Townhomes for Sale | Townhouses in Denver, Colorado",
          description:
            "Denver townhomes for sale. Explore townhome living, lifestyle benefits, ownership considerations, and expert resources for townhome buyers.",
          canonicalUrl: "https://www.myrockhomes.com/denver-townhomes-for-sale",
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
          1. HERO — Denver Townhomes for Sale
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
            <p
              className="text-gold text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Denver Real Estate · My Rock Realty
            </p>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-cream mb-6 leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Denver Townhomes for Sale
            </h1>
            <p className="text-lg text-cream/80 mb-8 leading-relaxed">
              Explore townhome living in Denver. From urban multi-level homes to
              low-maintenance attached properties, find your ideal townhome with
              expert guidance and market insight.
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton />
              <a
                href="mailto:rob@myrockhomes.com?subject=Denver Townhome Listings"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border border-cream/40 text-cream hover:border-gold hover:text-gold px-7 py-4 text-[15px] sm:text-base no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Browse Denver Townhome Listings
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          2. Why Buyers Consider Townhomes in Denver
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Why Buyers Consider Townhomes in Denver
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Layers,
                title: "More Space Than a Condo",
                desc: "Townhomes typically offer multi-level living, more square footage, and often include a private outdoor area or garage.",
              },
              {
                icon: Home,
                title: "Lower Maintenance Than a House",
                desc: "Many townhome communities include HOA-managed exterior maintenance, reducing the upkeep burden for owners.",
              },
              {
                icon: MapPin,
                title: "Neighborhood Access",
                desc: "Townhomes are available in a range of Denver neighborhoods, from urban corridors to residential areas.",
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
          3. Townhome Living in Denver Neighborhoods
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-4 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Townhome Living in Denver Neighborhoods
          </h2>
          <p className="text-cream/70 text-center mb-12 max-w-xl mx-auto">
            Townhomes are available in a variety of Denver neighborhoods. Explore areas that match your lifestyle and commuting needs.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "Wash Park", link: "/wash-park-denver-homes-for-sale" },
              { name: "Cherry Creek", link: "/cherry-creek-denver-homes-for-sale" },
              { name: "LoHi", link: "/lohi-denver-homes-for-sale" },
              { name: "RiNo", link: "/rino-denver-homes-for-sale" },
            ].map((neighborhood, idx) => (
              <motion.a
                key={idx}
                href={neighborhood.link}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                className="bg-cream/10 hover:bg-cream/20 rounded-lg p-6 border border-cream/20 transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-cream group-hover:text-gold transition-colors">
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
          4. What to Know Before Buying a Townhome
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            What to Know Before Buying a Townhome
          </h2>
          <div className="space-y-4">
            {[
              "Review HOA structure and what fees cover",
              "Understand shared maintenance responsibilities",
              "Evaluate parking availability and garage access",
              "Assess layout, square footage, and outdoor space",
              "Check proximity to neighborhood amenities",
              "Understand governing association rules and restrictions",
              "Review any rental restrictions if applicable",
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                className="flex items-start gap-3 bg-white rounded-lg p-4 border border-charcoal/10"
              >
                <CheckCircle2
                  size={20}
                  className="text-gold mt-0.5 shrink-0"
                  strokeWidth={1.5}
                />
                <p className="text-charcoal/80 text-[15px]">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          5. Denver Townhome Market Considerations
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-3xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-8 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Denver Townhome Market Considerations
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Price Range Varies by Neighborhood",
                desc: "Townhome prices in Denver vary significantly based on location, size, age of the property, and HOA structure.",
              },
              {
                title: "HOA Fees Affect Monthly Costs",
                desc: "Monthly HOA fees are a key factor in townhome affordability and should be factored into overall budget planning.",
              },
              {
                title: "Attached vs. End-Unit",
                desc: "End-unit townhomes typically offer more privacy and natural light. Buyers often weigh this against price differences.",
              },
              {
                title: "Financing Considerations",
                desc: "Some lenders treat townhomes differently from condos. Buyers should confirm financing options early in the process.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                className="bg-cream/10 rounded-lg p-6 border border-cream/20"
              >
                <h3
                  className="text-base font-bold text-gold mb-2"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-cream/70 text-[14px] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          6. Explore Denver Townhome Options
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-4 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Explore Denver Townhome Options
          </h2>
          <p className="text-charcoal/60 text-center mb-12 max-w-xl mx-auto">
            Browse related Denver property types and compare your options.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "Denver Homes for Sale", href: "/denver-homes-for-sale" },
              { label: "Denver Condos for Sale", href: "/denver-condos-for-sale" },
              { label: "Denver Luxury Homes", href: "/denver-luxury-homes-for-sale" },
              { label: "Denver New Construction", href: "/denver-new-construction-homes" },
              { label: "Buying a Home in Denver", href: "/buying-a-home-in-denver" },
              { label: "First-Time Home Buyer Denver", href: "/first-time-home-buyer-denver" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="block bg-white border border-charcoal/10 rounded-lg px-4 py-3 text-sm font-medium text-charcoal hover:border-gold hover:text-gold transition-colors duration-150"
                style={{ fontFamily: "'Libre Franklin', sans-serif" }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          7. Denver Townhome Buyer Resources
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-4 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Denver Townhome Buyer Resources
          </h2>
          <p className="text-cream/70 text-center mb-12 max-w-xl mx-auto">
            Helpful guides for buyers exploring townhomes and the Denver market.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "Buying a Home in Denver", href: "/buying-a-home-in-denver" },
              { label: "First-Time Home Buyer Denver", href: "/first-time-home-buyer-denver" },
              { label: "Denver Home Buying Process", href: "/denver-home-buying-process" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="block bg-cream/10 border border-cream/20 rounded-lg px-4 py-3 text-sm font-medium text-cream hover:border-gold hover:text-gold transition-colors duration-150"
                style={{ fontFamily: "'Libre Franklin', sans-serif" }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          8. Denver Townhome FAQs
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Denver Townhome FAQs
          </h2>
          <div className="divide-y divide-charcoal/10 border border-charcoal/10 rounded-xl overflow-hidden bg-white">
            {faqContent.map((item, idx) => (
              <div key={idx}>
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === idx ? null : idx)
                  }
                  className="w-full flex items-center justify-between py-5 px-6 text-left gap-4 group"
                >
                  <span
                    className="text-[15px] sm:text-base font-semibold text-charcoal leading-snug"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-gold transition-transform duration-200 ${expandedFaq === idx ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${expandedFaq === idx ? "max-h-60 pb-5" : "max-h-0"}`}
                >
                  <p className="text-[14px] sm:text-[15px] text-charcoal/70 leading-relaxed px-6">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          9. FINAL CTA
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
          >
            <h2
              className="text-3xl sm:text-4xl font-bold text-cream mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Ready to Explore Denver Townhomes?
            </h2>
            <p className="text-cream/70 mb-8 leading-relaxed">
              Connect with My Rock Realty for guidance on Denver townhome options,
              market conditions, and the buying process.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-10">
              <CTAButton />
              <a
                href="mailto:rob@myrockhomes.com?subject=Denver Townhome Alerts"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border border-cream/40 text-cream hover:border-gold hover:text-gold px-7 py-4 text-[15px] sm:text-base no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Get Alerts for New Denver Townhomes
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-cream/60 text-sm">
              <a
                href="tel:+17203636544"
                className="flex items-center gap-2 hover:text-gold transition-colors"
              >
                <Phone size={16} />
                720-363-6544
              </a>
              <a
                href="mailto:rob@myrockhomes.com"
                className="flex items-center gap-2 hover:text-gold transition-colors"
              >
                <Mail size={16} />
                rob@myrockhomes.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Back to Hub ─── */}
      <div className="bg-cream border-t border-charcoal/10 py-6">
        <div className="container">
          <a
            href="/denver-homes-for-sale"
            className="inline-flex items-center gap-2 text-sm text-charcoal/60 hover:text-charcoal transition-colors"
          >
            <Home size={14} />
            Back to Denver Homes for Sale
          </a>
        </div>
      </div>
    </div>
  );
}
