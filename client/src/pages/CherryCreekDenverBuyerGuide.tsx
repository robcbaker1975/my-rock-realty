/**
 * Cherry Creek Denver Buyer Guide — My Rock Realty
 * Neighborhood buyer guide for Cherry Creek buyers
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
    question: "Why do buyers in Cherry Creek pay so much attention to the exact block or building?",
    answer:
      "Because the feel can change quickly in a compact area, especially around Cherry Creek North. In many cases, the block or building tells you almost as much as the Cherry Creek name on the listing.",
  },
  {
    question: "What types of homes do buyers usually compare in Cherry Creek?",
    answer:
      "Buyers often compare condos, townhomes, newer attached homes, and detached homes on nearby residential streets, depending on how close they want to be to the core.",
  },
  {
    question: "What is the best way to narrow a Cherry Creek search?",
    answer:
      "Start by deciding whether you want to be near the center of Cherry Creek North or on the surrounding residential streets, then narrow further by block and building.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Denver Homes for Sale", url: "/denver-homes-for-sale" },
  { label: "Cherry Creek Denver Homes for Sale", url: "/cherry-creek-denver-homes-for-sale" },
  { label: "Cherry Creek Denver Buyer Guide", url: "/cherry-creek-denver-buyer-guide" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function CTAButton({
  label = "Schedule a Cherry Creek Buyer Consultation",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a
      href="mailto:rob@myrockhomes.com?subject=Cherry Creek Buyer Consultation"
      className={`inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 bg-gold text-charcoal hover:bg-gold-light hover:shadow-lg px-7 py-4 text-[15px] sm:text-base no-underline ${className}`}
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {label}
      <ArrowRight size={18} />
    </a>
  );
}

export default function CherryCreekDenverBuyerGuide() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="hub-page min-h-screen flex flex-col bg-cream">
      <SeoHead
        metadata={{
          title: "Cherry Creek Denver Buyer Guide | Cherry Creek Home Search",
          description:
            "A practical buyer guide for Cherry Creek in Denver. Learn how Cherry Creek North shapes the search, why block and building choice matters, and how to narrow your home search in this compact neighborhood.",
          canonicalUrl: "https://myrockhomes.com/cherry-creek-denver-buyer-guide",
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
          alt="Residential street in Cherry Creek Denver"
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
              Cherry Creek Denver Buyer Guide
            </h1>
            <p className="text-lg text-cream/80 mb-8 leading-relaxed">
              A practical orientation for buyers considering Cherry Creek — how Cherry Creek
              North shapes the neighborhood, why block and building choice matters, and how
              to narrow from a broad interest to a focused home search.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton />
              <a
                href="/cherry-creek-denver-homes-for-sale"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-gold text-gold hover:bg-gold hover:text-charcoal px-7 py-4 text-[15px] sm:text-base no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Cherry Creek Homes for Sale
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. What Buyers Should Understand About Cherry Creek */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            What Buyers Should Understand About Cherry Creek
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: "Cherry Creek North as the Center",
                desc: "Cherry Creek North gives the neighborhood its center, and that core usually shapes how buyers narrow the area from the start.",
              },
              {
                icon: Compass,
                title: "Compact but Variable",
                desc: "Cherry Creek is a compact search, but it does not all feel the same. Some buyers want to be close to the busier streets near the middle, while others want the surrounding residential streets.",
              },
              {
                icon: Home,
                title: "Block and Building Specificity",
                desc: "A home near the center of Cherry Creek North can have a very different setting from one on a quieter residential street just outside the core, even within the same neighborhood name.",
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

      {/* 3. Why Cherry Creek Is So Block and Building Specific */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-4xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-8 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Why Cherry Creek Is So Block and Building Specific
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="bg-cream/10 rounded-lg p-8 border border-cream/20"
          >
            <p className="text-cream/90 leading-relaxed mb-6">
              In Cherry Creek, the search usually gets more specific than just picking the
              neighborhood. Buyers often end up comparing one block to another, and often one
              building to another, because the feel can shift quickly as you move through the area.
            </p>
            <p className="text-cream/90 leading-relaxed">
              A home near the center of Cherry Creek North can have a very different setting
              from one on a quieter residential street just outside the core. That difference
              matters in how a home feels day to day, not just how it looks on a listing.
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
              Cherry Creek can include condos, townhomes, newer attached homes, and detached
              homes on nearby residential streets. That gives buyers options, but it also makes
              it important to get clear on the kind of home they want and how closely they want
              to be tied to the center of the neighborhood.
            </p>
            <p className="text-charcoal/80 leading-relaxed">
              In Cherry Creek, that choice often matters as much as the home itself. Buyers
              should research current availability and compare options across different parts
              of the neighborhood before narrowing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5. How to Narrow the Search in Cherry Creek */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-4xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            How to Narrow the Search in Cherry Creek
          </h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Start with the Setting", desc: "The best way to narrow a Cherry Creek search is usually to start with the setting, then work down to the block or building." },
              { step: "2", title: "Near Cherry Creek North", desc: "Some buyers want to be right near Cherry Creek North. That preference usually shapes the search quickly and makes block comparison more focused." },
              { step: "3", title: "Surrounding Residential Streets", desc: "Others want a little more separation while still staying connected to the area. Those buyers may find the surrounding streets offer a different kind of setting within the same neighborhood." },
              { step: "4", title: "Block and Building Comparison", desc: "Once the setting preference is clear, it gets easier to sort through the homes that truly fit instead of comparing places that share a neighborhood name but live very differently." },
              { step: "5", title: "Use Local Guidance", desc: "Local expertise can help buyers understand how Cherry Creek actually reads from block to block before committing to a direction." },
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
              Buyers considering Cherry Creek may also want to review broader Denver buyer
              guides and explore other Denver neighborhoods before narrowing their search.
            </p>
            <div className="space-y-3 mb-8">
              {[
                { title: "Cherry Creek Denver Homes for Sale", link: "/cherry-creek-denver-homes-for-sale" },
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
            Cherry Creek Buyer FAQs
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
              Ready to Explore Cherry Creek?
            </h2>
            <p className="text-lg text-charcoal/70 mb-8">
              Schedule a consultation to discuss your Cherry Creek search priorities and build
              a focused home search plan for the right part of the neighborhood.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <CTAButton />
              <a
                href="/cherry-creek-denver-homes-for-sale"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-cream px-7 py-4 text-[15px] sm:text-base no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                View Cherry Creek Listings
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
