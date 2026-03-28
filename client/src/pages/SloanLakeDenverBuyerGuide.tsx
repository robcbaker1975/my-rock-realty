/**
 * Sloan's Lake Denver Buyer Guide — My Rock Realty
 * Neighborhood buyer guide for Sloan's Lake buyers
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
    question: "How do buyers usually narrow a search in Sloan's Lake?",
    answer:
      "Most start by deciding how close they want to be to Sloan's Lake Park, then compare homes based on how directly they connect to the lake and surrounding neighborhood streets.",
  },
  {
    question: "Does block choice really matter around Sloan's Lake?",
    answer:
      "Yes. A home near the lake and park can feel very different from one set a little farther back, even within the same neighborhood.",
  },
  {
    question: "What types of homes do buyers usually see in Sloan's Lake?",
    answer:
      "Buyers often compare condos, townhomes, newer attached homes, and detached houses around the neighborhood.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Denver Homes for Sale", url: "/denver-homes-for-sale" },
  { label: "Sloan's Lake Denver Homes for Sale", url: "/sloan-lake-denver-homes-for-sale" },
  { label: "Sloan's Lake Denver Buyer Guide", url: "/sloan-lake-denver-buyer-guide" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function CTAButton({
  label = "Schedule a Sloan's Lake Buyer Consultation",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a
      href="mailto:rob@myrockhomes.com?subject=Sloan's Lake Buyer Consultation"
      className={`inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 bg-gold text-charcoal hover:bg-gold-light hover:shadow-lg px-7 py-4 text-[15px] sm:text-base no-underline ${className}`}
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {label}
      <ArrowRight size={18} />
    </a>
  );
}

export default function SloanLakeDenverBuyerGuide() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <SeoHead
        metadata={{
          title: "Sloan's Lake Denver Buyer Guide | Sloan Lake Home Search",
          description:
            "A practical buyer guide for Sloan's Lake in Denver. Learn how proximity to Sloan's Lake Park, block choice, and the surrounding neighborhood streets shape the Sloan's Lake home search.",
          canonicalUrl: "https://myrockhomes.com/sloan-lake-denver-buyer-guide",
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
          alt="Residential street near Sloan's Lake Denver"
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
              Sloan&apos;s Lake Denver Buyer Guide
            </h1>
            <p className="text-lg text-cream/80 mb-8 leading-relaxed">
              A practical orientation for buyers considering Sloan&apos;s Lake — how proximity
              to the lake and park shapes the search, how block choice carries weight, and how
              to move from broad interest to a more focused home comparison.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton />
              <a
                href="/sloan-lake-denver-homes-for-sale"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-gold text-gold hover:bg-gold hover:text-charcoal px-7 py-4 text-[15px] sm:text-base no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Sloan&apos;s Lake Homes for Sale
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. What Buyers Notice First About Sloan's Lake */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            What Buyers Notice First About Sloan&apos;s Lake
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: "The Lake as the Anchor",
                desc: "In Sloan's Lake, the lake is the anchor. Buyers usually start by deciding how close they want to be to Sloan's Lake Park, then work outward from there.",
              },
              {
                icon: Compass,
                title: "The Park Edge and Residential Streets",
                desc: "The neighborhood can feel different depending on how tied a home is to the lake, the park edge, and the surrounding residential streets.",
              },
              {
                icon: Home,
                title: "That First Decision Matters",
                desc: "The first decision about proximity to the lake matters because it shapes how the rest of the search unfolds and which homes get compared.",
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

      {/* 3. Why Block Choice Matters Around Sloan's Lake */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-8 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Why Block Choice Matters Around Sloan&apos;s Lake
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="bg-cream/10 rounded-lg p-8 border border-cream/20"
          >
            <p className="text-cream/90 leading-relaxed mb-6">
              Sloan&apos;s Lake is not a large neighborhood, but block choice still carries a
              lot of weight. A home closer to the lake and park can feel different from one set
              a little farther back on residential streets, even when both share the same
              neighborhood name.
            </p>
            <p className="text-cream/90 leading-relaxed">
              Buyers usually get the clearest read on Sloan&apos;s Lake when they pay close
              attention to how the block relates to the park, nearby streets, and the lake itself.
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
              Buyers in Sloan&apos;s Lake often compare condos, townhomes, newer attached homes,
              and detached houses around the neighborhood. Because Sloan&apos;s Lake Park is
              such a strong point of reference, the home and its exact position around the lake
              usually get weighed together.
            </p>
            <p className="text-charcoal/80 leading-relaxed">
              Two homes may look similar on paper and still feel quite different once you factor
              in where they sit in relation to the park.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5. How to Narrow the Search in Sloan's Lake */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            How to Narrow the Search in Sloan&apos;s Lake
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Start With Proximity to the Lake and Park",
                desc: "The most useful way to narrow a Sloan's Lake search is to start with how close you want to be to the lake and park, then compare homes from there.",
              },
              {
                step: "2",
                title: "As Close to the Park as Possible",
                desc: "Some buyers want to stay as close to the park as they can. That priority usually narrows the map quickly and makes block-level comparison more focused.",
              },
              {
                step: "3",
                title: "A Little Farther Back on Neighborhood Streets",
                desc: "Others prefer to be a little farther back on neighborhood streets while still staying tied to the area.",
              },
              {
                step: "4",
                title: "Compare Homes Within That Range",
                desc: "Once that is clear, the search usually gets easier to manage and the comparison between homes becomes more meaningful.",
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
            through the broader picture before narrowing to Sloan&apos;s Lake specifically.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Sloan's Lake Denver Homes for Sale", href: "/sloan-lake-denver-homes-for-sale" },
              { label: "Denver Homes for Sale", href: "/denver-homes-for-sale" },
              { label: "Buying a Home in Denver", href: "/buying-a-home-in-denver" },
              { label: "First-Time Home Buyer Denver", href: "/first-time-home-buyer-denver" },
              { label: "Denver Home Buying Process", href: "/denver-home-buying-process" },
              { label: "LoHi Denver Buyer Guide", href: "/lohi-denver-buyer-guide" },
              { label: "RiNo Denver Buyer Guide", href: "/rino-denver-buyer-guide" },
              { label: "Central Park Denver Buyer Guide", href: "/central-park-denver-buyer-guide" },
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
            Sloan&apos;s Lake Buyer Guide FAQ
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
            Ready to Explore Sloan&apos;s Lake?
          </h2>
          <p className="text-charcoal/70 mb-10 leading-relaxed">
            If you are narrowing your Denver search to Sloan&apos;s Lake, a local buyer
            consultation can help you understand how proximity to the lake and park shapes
            the search and which blocks may fit your priorities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton label="Schedule a Sloan's Lake Buyer Consultation" />
            <a
              href="/sloan-lake-denver-homes-for-sale"
              className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-cream px-7 py-4 text-[15px] sm:text-base no-underline"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              View Sloan&apos;s Lake Listings
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
