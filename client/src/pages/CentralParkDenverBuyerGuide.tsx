/**
 * Central Park Denver Buyer Guide — My Rock Realty
 * Neighborhood buyer guide for Central Park buyers
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
  ChevronDown,
  Compass,
  Scale,
} from "lucide-react";

/* Hero Background Image — Approved Denver metro aerial view (shared pattern) */
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/denver-rowhouses-hero_2f59d4ac.jpg";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "How do buyers usually narrow a search in Central Park?",
    answer:
      "Most buyers start by choosing a section of the neighborhood first, then compare homes within that area instead of treating Central Park as one single search.",
  },
  {
    question: "Why can two homes in Central Park feel different from each other?",
    answer:
      "Because Central Park covers a lot of ground, and one home may sit closer to parks, the recreation center, the town center, or a different section of the neighborhood grid.",
  },
  {
    question: "What types of homes do buyers usually see in Central Park?",
    answer:
      "Buyers usually see detached homes, attached options, and newer homes in different parts of the neighborhood.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Denver Homes for Sale", url: "/denver-homes-for-sale" },
  { label: "Central Park Denver Homes for Sale", url: "/central-park-denver-homes-for-sale" },
  { label: "Central Park Denver Buyer Guide", url: "/central-park-denver-buyer-guide" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function CTAButton({
  label = "Schedule a Central Park Buyer Consultation",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a
      href="mailto:rob@myrockhomes.com?subject=Central Park Denver Buyer Consultation"
      className={`inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 bg-gold text-charcoal hover:bg-gold-light hover:shadow-lg px-7 py-4 text-[15px] sm:text-base no-underline ${className}`}
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {label}
      <ArrowRight size={18} />
    </a>
  );
}

export default function CentralParkDenverBuyerGuide() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="hub-page min-h-screen flex flex-col bg-cream">
      <SeoHead
        metadata={{
          title: "Central Park Denver Buyer Guide | Central Park Home Search",
          description:
            "A practical buyer guide for Central Park in Denver. Learn how section choice, proximity to parks, the recreation center, and the town center shape the Central Park home search.",
          canonicalUrl: "https://myrockhomes.com/central-park-denver-buyer-guide",
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
          alt="Residential street in Central Park Denver"
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
              Central Park Denver Buyer Guide
            </h1>
            <p className="text-lg text-cream/80 mb-8 leading-relaxed">
              A practical orientation for buyers considering Central Park — how the neighborhood
              is organized by section, how section choice shapes the search, and how to move
              from broad interest to a more focused home comparison.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton />
              <a
                href="/central-park-denver-homes-for-sale"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-gold text-gold hover:bg-gold hover:text-charcoal px-7 py-4 text-[15px] sm:text-base no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Central Park Homes for Sale
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. What Buyers Notice First About Central Park */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            What Buyers Notice First About Central Park
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: "The Search Starts by Section",
                desc: "Buyers are not just sorting by one main street or one central pocket. They are usually comparing different parts of the neighborhood based on nearby parks, the recreation center, and the town center area.",
              },
              {
                icon: Compass,
                title: "The Town Center and Recreation Center",
                desc: "The town center and recreation center are two of the most common reference points buyers use when deciding which section of Central Park to focus on first.",
              },
              {
                icon: Home,
                title: "Where You Start Shapes the Whole Search",
                desc: "In Central Park, where you start looking tends to shape the whole search. Two homes with similar numbers can still feel quite different once you look at where they sit in the neighborhood.",
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

      {/* 3. Why One Part of Central Park Can Feel Different From Another */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-8 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Why One Part of Central Park Can Feel Different From Another
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="bg-cream/10 rounded-lg p-8 border border-cream/20"
          >
            <p className="text-cream/90 leading-relaxed mb-6">
              In Central Park, the section you choose can shape the search as much as the home
              itself. One area may feel more tied to a larger park or open space, while another
              may feel closer to the recreation center, the town center, or a different part of
              the neighborhood grid.
            </p>
            <p className="text-cream/90 leading-relaxed">
              Buyers usually get the clearest read on Central Park when they narrow by section
              early, because two homes with similar numbers can still feel quite different once
              you look at where they sit in the neighborhood.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. What Kinds of Homes Buyers Will See */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
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
              Central Park gives buyers a wider range of homes than many Denver neighborhood
              searches, including detached homes, attached options, and newer homes in different
              sections of the area.
            </p>
            <p className="text-charcoal/80 leading-relaxed">
              Because the neighborhood covers so much ground, the home itself is only part of
              the decision. Buyers usually need to look closely at the section, the nearby parks
              or amenities, and how that part of the neighborhood feels around the property.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5. How to Narrow the Search in Central Park */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            How to Narrow the Search in Central Park
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Choose a Section First",
                desc: "The most useful way to narrow a Central Park search is to choose the part of the neighborhood you want to focus on first, then compare homes within that section.",
              },
              {
                step: "2",
                title: "Recreation Center or Town Center Area",
                desc: "Some buyers start near the recreation center or town center. That reference point helps narrow the map before comparing individual listings.",
              },
              {
                step: "3",
                title: "Parks and Open Space Connections",
                desc: "Others begin with a section that feels better connected to the parks or the part of the neighborhood they already know.",
              },
              {
                step: "4",
                title: "Compare Homes Within That Section",
                desc: "Once the search is set up that way, Central Park becomes much easier to sort through.",
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
            through the broader picture before narrowing to Central Park specifically.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Central Park Denver Homes for Sale", href: "/central-park-denver-homes-for-sale" },
              { label: "Denver Homes for Sale", href: "/denver-homes-for-sale" },
              { label: "Buying a Home in Denver", href: "/buying-a-home-in-denver" },
              { label: "First-Time Home Buyer Denver", href: "/first-time-home-buyer-denver" },
              { label: "Denver Home Buying Process", href: "/denver-home-buying-process" },
              { label: "RiNo Denver Buyer Guide", href: "/rino-denver-buyer-guide" },
              { label: "Sloan's Lake Denver Buyer Guide", href: "/sloan-lake-denver-buyer-guide" },
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
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Central Park Buyer Guide FAQ
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
            Ready to Explore Central Park?
          </h2>
          <p className="text-charcoal/70 mb-10 leading-relaxed">
            If you are narrowing your Denver search to Central Park, a local buyer consultation
            can help you understand how the neighborhood is organized by section and which part
            may fit your priorities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton label="Schedule a Central Park Buyer Consultation" />
            <a
              href="/central-park-denver-homes-for-sale"
              className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-cream px-7 py-4 text-[15px] sm:text-base no-underline"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              View Central Park Listings
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
