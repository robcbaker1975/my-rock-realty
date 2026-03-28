/**
 * Greeley Homes for Sale — My Rock Realty
 * Lifestyle and buyer-fit page for Greeley — university community, practical northern Colorado living, who it's for
 * Distinct from /greeley-co-homes-for-sale (county authority hub)
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
  Trees,
  Home,
  MapPin,
  CheckCircle2,
  Phone,
  Mail,
  ChevronDown,
} from "lucide-react";

/* Hero Background Image — Approved asset */
const GREELEY_HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/denver-rowhouses-hero_2f59d4ac.jpg";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "Who tends to buy homes in Greeley?",
    answer:
      "Greeley attracts buyers who are connected to the University of Northern Colorado — faculty, staff, and families affiliated with UNC — as well as buyers seeking practical northern Colorado living at price points more accessible than Fort Collins or Boulder. The city's agricultural heritage and Weld County location also attract buyers who want more land or a different pace than the Front Range's larger metros.",
  },
  {
    question: "Is Greeley a good fit for buyers connected to UNC?",
    answer:
      "Yes. The University of Northern Colorado is a central part of Greeley's community identity. Buyers affiliated with UNC — faculty, staff, graduate students, and families — often find neighborhoods near the university a practical and convenient fit. Proximity to campus is a meaningful factor worth evaluating specifically.",
  },
  {
    question: "How does Greeley compare to Fort Collins for practical northern Colorado living?",
    answer:
      "Greeley generally offers more accessible price points than Fort Collins and a different community character. It lacks Fort Collins' Old Town walkability but has its own neighborhood variety and the UNC presence. Buyers who are price-sensitive or specifically connected to UNC often find Greeley a more practical fit than Fort Collins.",
  },
  {
    question: "What kind of buyer tends to find Greeley a strong fit?",
    answer:
      "Buyers who value practical northern Colorado living, UNC community connection, or more accessible price points relative to Fort Collins and Boulder tend to find Greeley a strong fit. It's not a lifestyle destination in the same way as Boulder or Fort Collins' Old Town, but it offers real value for buyers whose priorities align with what the city offers.",
  },
  {
    question: "What should buyers evaluate before choosing Greeley?",
    answer:
      "Buyers should evaluate proximity to UNC if that's relevant, neighborhood character (older established areas vs. newer suburban development), commute patterns to Fort Collins or other employment centers, and how Greeley's price points compare to nearby alternatives. Understanding what you're optimizing for helps identify whether Greeley is the right fit.",
  },
];

/* ─── Build FAQ Schema ─── */
const faqSchema = buildFAQPageSchema(faqContent);

/* ─── Breadcrumb Items ─── */
const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Greeley, CO Homes for Sale", url: "/greeley-co-homes-for-sale" },
  { label: "Greeley Homes for Sale", url: "/greeley-homes-for-sale" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function CTAButton({
  label = "Schedule a Greeley Home Buying Consultation",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a
      href="mailto:rob@myrockhomes.com?subject=Greeley Home Buying Consultation"
      className={`inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 bg-gold text-charcoal hover:bg-gold-light hover:shadow-lg px-7 py-4 text-[15px] sm:text-base no-underline ${className}`}
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {label}
      <ArrowRight size={18} />
    </a>
  );
}

export default function GreeleyHomesForSale() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <SeoHead
        metadata={{
          title: "Greeley Homes for Sale | University Community, Practical Northern Colorado Living & Buyer Fit",
          description:
            "Thinking about buying in Greeley? Explore who the city tends to attract, what the UNC community connection means for buyers, and whether Greeley's practical northern Colorado character fits your priorities.",
          canonicalUrl: "https://myrockhomes.com/greeley-homes-for-sale",
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
          1. HERO — Greeley Homes for Sale
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-charcoal overflow-hidden">
        {/* Hero Background Image */}
        <img
          src={GREELEY_HERO_BG}
          alt="Row houses along a residential street in Greeley"
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
              Greeley: University Community & Practical Northern Colorado Living
            </h1>
            <p className="text-lg text-cream/80 mb-8 leading-relaxed">
              Greeley has a distinct identity on the northern Front Range — shaped by the University of Northern Colorado, its agricultural heritage, and a practical community character that appeals to buyers who want northern Colorado living without the price premium of Fort Collins or Boulder. This page is about who Greeley tends to suit and what living there is actually like.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton />
              <a
                href="mailto:rob@myrockhomes.com?subject=Greeley Listings — Alert Request"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-gold text-gold hover:bg-gold hover:text-charcoal px-7 py-4 text-[15px] sm:text-base no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Get Alerts for New Greeley Homes
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          2. Why Buyers Consider Greeley
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Who Greeley Tends to Attract
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: "UNC-Connected Buyers",
                desc: "Faculty, staff, graduate students, and families affiliated with the University of Northern Colorado often find Greeley a practical and convenient fit. Proximity to campus is a meaningful factor for this buyer profile.",
              },
              {
                icon: MapPin,
                title: "Value-Focused Northern Colorado Buyers",
                desc: "Buyers who want northern Colorado living at more accessible price points than Fort Collins or Boulder often find Greeley a practical alternative. The city offers real value for buyers whose priorities align with what it offers.",
              },
              {
                icon: Trees,
                title: "Buyers Seeking a Different Pace",
                desc: "Greeley's agricultural heritage and Weld County character appeal to buyers who want a different pace than the Front Range's larger metros — more space, a quieter setting, and a community identity that reflects northern Colorado's roots.",
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
          >            The University Community Advantage
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="bg-cream/10 rounded-lg p-8 border border-cream/20"
          >
            <p className="text-cream/90 leading-relaxed mb-6">
              The University of Northern Colorado is Greeley's most distinctive community asset for buyers. Neighborhoods near UNC have a different character than the city's newer suburban edges — more walkable, more community-oriented, and shaped by the rhythms of university life. For buyers affiliated with UNC, proximity to campus is worth evaluating specifically.
            </p>
            <p className="text-cream/
90 leading-relaxed">
              Buyers are drawn to Greeley for different reasons — from those seeking a university town setting and community amenities to buyers looking for more affordable options in northern Colorado. Buyers should research specific neighborhoods to find the best fit for their lifestyle and priorities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          4. Homes and Housing Styles in Greeley
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Homes and Housing Styles in Greeley
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "University District Greeley",
                link: "/greeley-homes-for-sale",
              },
              {
                name: "Downtown Greeley",
                link: "/greeley-homes-for-sale",
              },
              {
                name: "Greeley Suburban Neighborhoods",
                link: "/greeley-homes-for-sale",
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
          5. What to Know Before Buying in Greeley
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            What to Know Before Buying in Greeley
          </h2>
          <div className="space-y-4">
            {[
              "Understand neighborhood-specific market dynamics and price ranges",
              "Evaluate home condition, renovation quality, and lot characteristics",
              "Consider proximity to the university, downtown, and community amenities",
              "Research commute considerations and access to northern Colorado communities",
              "Research neighborhood character and community factors independently",
              "Independently research schools, crime data, and other community factors important to you",
              "Work with an agent familiar with Greeley's specific market dynamics",
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
          7. Greeley Buyer Resources
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-8 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Greeley Buyer Resources
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="bg-cream/10 rounded-lg p-8 border border-cream/20"
          >
            <p className="text-cream/90 leading-relaxed mb-6">
              Buying in Greeley involves understanding the city's specific market dynamics, housing mix, neighborhood character, and how individual properties compare within the area. Knowing the home buying process helps buyers move forward with confidence.
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
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          8a. Greeley Area Communities
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-cream">
        <div className="container max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-2"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Greeley Area Communities
          </h2>
          <p className="text-charcoal/60 text-sm mb-6">
            Greeley is the hub of the Weld County cluster. Buyers often compare nearby communities
            before deciding on a location.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <a
              href="/greeley-co-homes-for-sale"
              className="block bg-white border border-charcoal/10 rounded-lg px-4 py-3 text-sm font-medium text-charcoal hover:border-gold hover:text-gold transition-colors duration-150"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Greeley Area Hub
              <ArrowRight size={13} className="inline ml-1.5 opacity-60" />
            </a>
            <a
              href="/evans-co-homes-for-sale"
              className="block bg-white border border-charcoal/10 rounded-lg px-4 py-3 text-sm font-medium text-charcoal hover:border-gold hover:text-gold transition-colors duration-150"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Evans CO Homes
              <ArrowRight size={13} className="inline ml-1.5 opacity-60" />
            </a>
            <a
              href="/platteville-co-homes-for-sale"
              className="block bg-white border border-charcoal/10 rounded-lg px-4 py-3 text-sm font-medium text-charcoal hover:border-gold hover:text-gold transition-colors duration-150"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Platteville CO Homes
              <ArrowRight size={13} className="inline ml-1.5 opacity-60" />
            </a>
            <a
              href="/lasalle-co-homes-for-sale"
              className="block bg-white border border-charcoal/10 rounded-lg px-4 py-3 text-sm font-medium text-charcoal hover:border-gold hover:text-gold transition-colors duration-150"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              LaSalle CO Homes
              <ArrowRight size={13} className="inline ml-1.5 opacity-60" />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          8. Greeley FAQs
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Greeley FAQs
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
              Ready to Explore Greeley Homes?
            </h2>
            <p className="text-lg text-cream/80 mb-8">
              Schedule a consultation to discuss your Greeley home buying goals and explore available options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <CTAButton />
              <a
                href="/greeley-co-homes-for-sale"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-gold text-gold hover:bg-gold hover:text-charcoal px-7 py-4 text-[15px] sm:text-base no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Browse Greeley Listings
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
