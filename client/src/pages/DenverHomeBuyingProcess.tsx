/**
 * Denver Home Buying Process — My Rock Realty
 * Guide page in the Denver SEO cluster
 * Design: Front Range Modern — matches existing site design system
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
  BookOpen,
  DollarSign,
  Compass,
} from "lucide-react";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "What are the main steps in the Denver home buying process?",
    answer:
      "The process usually includes financing preparation, identifying target areas, viewing homes, making an offer, completing inspections and due diligence, finalizing financing, and closing.",
  },
  {
    question: "Does the Denver home buying process move quickly?",
    answer:
      "It can. Timing depends on market conditions, competition, financing readiness, and how quickly a buyer can make decisions during the search process.",
  },
  {
    question: "Why does financing preparation matter early in the process?",
    answer:
      "Financing preparation helps buyers understand budget, move more confidently, and respond more effectively when the right property appears.",
  },
  {
    question: "What happens after a buyer goes under contract in Denver?",
    answer:
      "After going under contract, buyers typically move through inspection, lender and title milestones, negotiation if needed, and final preparation for closing.",
  },
  {
    question: "Why is it helpful to understand the process before searching?",
    answer:
      "Understanding the process helps buyers make better decisions, reduce surprises, and stay organized from the earliest search stage through closing.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Denver Home Buying Process", url: "/denver-home-buying-process" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function CTAButton({ label = "Schedule a Denver Home Buying Consultation", className = "" }: { label?: string; className?: string }) {
  return (
    <a
      href="mailto:rob@myrockhomes.com?subject=Denver Home Buying Consultation"
      className={`inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 bg-gold text-charcoal hover:bg-gold-light hover:shadow-lg px-7 py-4 text-[15px] sm:text-base no-underline ${className}`}
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {label}
      <ArrowRight size={18} />
    </a>
  );
}

export default function DenverHomeBuyingProcess() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <SeoHead
        metadata={{
          title: "Denver Home Buying Process | Steps to Buy a Home in Denver",
          description:
            "Learn the Denver home buying process, including financing preparation, home search strategy, offer considerations, inspections, and closing steps for Denver-area buyers.",
          canonicalUrl: "https://www.myrockhomes.com/denver-home-buying-process",
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
        <div className="container py-16 sm:py-20 md:py-24">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-cream mb-6 leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Denver Home Buying Process
            </h1>
            <p className="text-lg text-cream/80 mb-8 leading-relaxed">
              A structured overview of the steps involved in buying a home in the Denver metro area
              — from financing preparation through closing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton />
              <a
                href="mailto:rob@myrockhomes.com?subject=Denver Listings — Alert Request"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-gold text-gold hover:bg-gold hover:text-charcoal px-7 py-4 text-[15px] sm:text-base no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Get Alerts for New Denver Listings
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Why This Topic Matters */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Why Understanding the Process Matters
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Compass,
                title: "Fewer Surprises",
                desc: "Buyers who understand each stage of the process are better prepared to respond to timelines, requests, and decisions as they arise.",
              },
              {
                icon: MapPin,
                title: "Faster Decisions",
                desc: "When buyers know what to expect, they can move more quickly and confidently when the right property appears.",
              },
              {
                icon: Home,
                title: "Better Outcomes",
                desc: "Organized buyers who prepare financing early and understand offer mechanics tend to navigate competitive markets more effectively.",
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
                <h3 className="text-xl font-bold text-charcoal mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {item.title}
                </h3>
                <p className="text-charcoal/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Decision Factors — Process Steps */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Key Stages in the Denver Home Buying Process
          </h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Financing Preparation", desc: "Clarify budget, review loan options, and get pre-approved before beginning the home search." },
              { step: "2", title: "Identify Target Areas", desc: "Research Denver neighborhoods and suburbs to narrow focus based on budget, commute, and lifestyle." },
              { step: "3", title: "Home Search", desc: "View properties that match criteria and evaluate fit against priorities." },
              { step: "4", title: "Make an Offer", desc: "Submit a competitive offer with appropriate terms based on market conditions and property specifics." },
              { step: "5", title: "Inspections and Due Diligence", desc: "Complete inspections, review disclosures, and negotiate any needed adjustments." },
              { step: "6", title: "Finalize Financing", desc: "Complete lender and title milestones and prepare for closing." },
              { step: "7", title: "Closing", desc: "Sign final documents, transfer funds, and receive keys to the property." },
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

      {/* 4. What Buyers Should Understand */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            What Buyers Should Understand Before Starting
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                icon: DollarSign,
                title: "Financing Readiness",
                desc: "Pre-approval gives buyers a clear budget and signals to sellers that the buyer is serious and qualified.",
              },
              {
                icon: BookOpen,
                title: "Market Timing",
                desc: "Competition and inventory vary throughout the year. Understanding current conditions helps buyers set realistic expectations.",
              },
              {
                icon: CheckCircle2,
                title: "Offer Mechanics",
                desc: "Knowing how offers are structured — price, contingencies, timelines — helps buyers respond effectively in competitive situations.",
              },
              {
                icon: Compass,
                title: "Due Diligence Period",
                desc: "The inspection and due diligence period is a critical window for evaluating property condition and negotiating adjustments.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                className="bg-white rounded-lg p-6 border border-charcoal/10 shadow-sm flex gap-4"
              >
                <item.icon size={28} className="text-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <h3 className="text-lg font-bold text-charcoal mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Denver Market Considerations */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Denver Market Considerations
          </h2>
          <div className="space-y-4">
            {[
              "Competition varies by price range, neighborhood, and season",
              "Financing strength affects how quickly buyers can move through the process",
              "New construction timelines differ from resale purchase timelines",
              "Suburban markets may have different inventory and competition patterns",
              "Inspection outcomes can affect final terms and closing timelines",
              "Local guidance helps buyers navigate offer strategy and due diligence",
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                className="flex items-start gap-4 p-4 bg-cream/10 rounded-lg border border-cream/20"
              >
                <CheckCircle2 size={24} className="text-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <p className="text-cream/80">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Practical Next Steps — Explore Options */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Explore Denver Home Options
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Denver Condos for Sale", link: "/denver-condos-for-sale" },
              { title: "Denver Townhomes for Sale", link: "/denver-townhomes-for-sale" },
              { title: "Denver New Construction Homes", link: "/denver-new-construction-homes" },
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
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto">
            {[
              { title: "LoHi Denver Homes", link: "/lohi-denver-homes-for-sale" },
              { title: "RiNo Denver Homes", link: "/rino-denver-homes-for-sale" },
              { title: "Castle Rock Homes", link: "/castle-rock-co-homes-for-sale" },
              { title: "Littleton Homes", link: "/littleton-co-homes-for-sale" },
            ].map((item, idx) => (
              <motion.a
                key={idx}
                href={item.link}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                className="bg-white hover:shadow-lg rounded-lg p-4 border border-charcoal/10 transition-all group flex items-center justify-between"
              >
                <span className="font-semibold text-charcoal">{item.title}</span>
                <ArrowRight size={16} className="text-gold group-hover:translate-x-1 transition-transform" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Related Buyer Resources */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-cream mb-8 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Related Denver Buyer Resources
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="bg-cream/10 rounded-lg p-8 border border-cream/20"
          >
            <p className="text-cream/90 leading-relaxed mb-6">
              Understanding first-time buyer considerations and Denver cost of living factors helps
              buyers approach the process with greater clarity.
            </p>
            <div className="space-y-3 mb-8">
              {[
                { title: "Buying a Home in Denver", link: "/buying-a-home-in-denver" },
                { title: "First-Time Home Buyer Denver", link: "/first-time-home-buyer-denver" },
                { title: "Cost of Living in Denver, Colorado", link: "/cost-of-living-in-denver-colorado" },
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
            <a href="/denver-homes-for-sale" className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-semibold">
              Back to Denver Homes Hub
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 8. FAQs */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-12 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Denver Home Buying Process FAQs
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
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 hover:bg-cream/50 transition-colors text-left"
                >
                  <h3 className="font-bold text-charcoal pr-4">{item.question}</h3>
                  <ChevronDown
                    size={20}
                    className={`text-gold flex-shrink-0 transition-transform ${expandedFaq === idx ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 pb-6 border-t border-charcoal/10 text-charcoal/80">{item.answer}</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl text-center">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2
              className="text-3xl sm:text-4xl font-bold text-cream mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Ready to Start the Denver Home Buying Process?
            </h2>
            <p className="text-lg text-cream/80 mb-8">
              Schedule a consultation to discuss your goals and understand what to expect at each
              stage of the Denver home buying process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <CTAButton />
              <a
                href="/denver-homes-for-sale"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-gold text-gold hover:bg-gold hover:text-charcoal px-7 py-4 text-[15px] sm:text-base no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Explore Denver Homes for Sale
                <ArrowRight size={18} />
              </a>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-cream/50 text-xs">
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
