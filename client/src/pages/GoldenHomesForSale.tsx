/**
 * Golden Homes for Sale — My Rock Realty
 * Primary Golden city spoke page — focused city page for Golden search intent
 * Part of the Jefferson County SEO cluster
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
const GOLDEN_HERO_BG = "/images/denver-rowhouses-hero.jpg";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "What is Golden known for in Colorado?",
    answer:
      "Golden is the county seat of Jefferson County and is known for its historic downtown character and location along Clear Creek. The city is home to the Colorado School of Mines, which gives it a distinct community character. Golden has a mix of established neighborhoods and housing options across a range of price points.",
  },
  {
    question: "What types of homes can buyers find in Golden?",
    answer:
      "Buyers may find a mix of older established homes, newer construction, single-family homes, and condos depending on the neighborhood and price range they are exploring. Golden offers options across a range of price points. Buyers should research specific neighborhoods to understand what is available at their budget.",
  },
  {
    question: "Why do buyers consider Golden when searching in Colorado?",
    answer:
      "Buyers often consider Golden for its Jefferson County location, historic downtown character, proximity to Denver, and range of housing options. Buyers should research specific neighborhoods to find the best fit for their priorities.",
  },
  {
    question: "How does Golden compare to other Jefferson County communities?",
    answer:
      "Golden is the county seat and has a distinct historic downtown character compared to other Jefferson County communities like Lakewood or Arvada. Price points and housing types vary across the county. Buyers should research individual communities to understand the differences that matter most to them.",
  },
  {
    question: "What should buyers pay attention to when considering homes in Golden?",
    answer:
      "Buyers should pay attention to neighborhood location, home condition, proximity to downtown or the Colorado School of Mines campus, commute considerations, and how a property compares with nearby alternatives. Buyers should independently research schools, and other community factors important to them.",
  },
];

/* ─── Build FAQ Schema ─── */
const faqSchema = buildFAQPageSchema(faqContent);

/* ─── Breadcrumb Items ─── */
const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Jefferson County, CO Homes for Sale", url: "/jefferson-co-homes-for-sale" },
  { label: "Golden Homes for Sale", url: "/golden-homes-for-sale" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function CTAButton({
  label = "Schedule a Golden Home Buying Consultation",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={`mailto:rob@myrockhomes.com?subject=${encodeURIComponent(label)}`}
      className={`inline-flex items-center justify-center gap-2 bg-gold text-charcoal font-semibold rounded px-6 py-3 text-sm hover:bg-gold-light transition-colors no-underline ${className}`}
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {label}
    </a>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-charcoal/10 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 px-1 text-left gap-4"
      >
        <span
          className="text-[15px] sm:text-base font-semibold text-charcoal leading-snug"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          {question}
        </span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-gold transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-60 pb-5" : "max-h-0"}`}>
        <p className="text-[14px] sm:text-[15px] text-charcoal/70 leading-relaxed px-1">{answer}</p>
      </div>
    </div>
  );
}

export default function GoldenHomesForSale() {
  return (
    <div className="min-h-screen bg-warm-white">
      <SeoHead
        metadata={{
          title: "Golden Homes for Sale | Golden CO Real Estate | My Rock Realty",
          description:
            "Explore homes for sale in Golden, Colorado. Browse Golden neighborhoods, buyer resources, and connect with a local agent familiar with Jefferson County.",
          canonicalUrl: "https://myrockhomes.com/golden-homes-for-sale",
          breadcrumbs: breadcrumbItems,
        }}
        schema={faqSchema ? [faqSchema] : []}
      />

      {/* ─── Breadcrumbs ─── */}
      <div className="bg-charcoal">
        <div className="container py-3">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* ─── Header ─── */}
      <header className="bg-charcoal">
        <div className="container flex items-center justify-center sm:justify-between py-3 sm:py-4">
          <a
            href="/"
            className="text-cream font-bold text-lg sm:text-xl tracking-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            My Rock Realty
          </a>
          <a
            href="/jefferson-co-homes-for-sale"
            className="absolute top-4 right-4 sm:static text-cream/70 hover:text-gold text-xs sm:text-sm font-medium transition-colors inline-flex items-center gap-1.5"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            ← Jefferson County
          </a>
        </div>
      </header>

      {/* ─── Hero ─── */}
      <section className="relative bg-charcoal overflow-hidden">
        <img
          src={GOLDEN_HERO_BG}
          alt="Residential neighborhood in Golden, Colorado"
          className="absolute inset-0 w-full h-full object-cover object-center"
        
          width="1600"
          height="900"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/85" />
        <motion.div
          className="container relative z-10 py-14 sm:py-20 lg:py-24"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
              <MapPin size={13} className="text-gold" />
              <span
                className="text-gold text-xs sm:text-sm font-semibold tracking-wide"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                GOLDEN · JEFFERSON COUNTY · COLORADO
              </span>
            </div>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream leading-tight mb-5"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Golden Homes for Sale
            </h1>
            <p className="text-cream/80 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Explore homes for sale in Golden, Colorado — the county seat of Jefferson County. Browse neighborhoods, buyer resources, and connect with a local agent familiar with the Golden market.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <CTAButton label="Schedule a Golden Home Buying Consultation" />
              <a
                href="mailto:rob@myrockhomes.com?subject=Golden CO Listings — Alert Request"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 bg-transparent border border-cream/40 text-cream hover:border-gold hover:text-gold px-6 py-3 text-sm no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Get Listing Alerts
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── About Golden ─── */}
      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-2"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            About Golden, Colorado
          </h2>
          <p className="text-charcoal/60 text-sm mb-6">
            Understanding Golden before you buy.
          </p>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <p className="text-charcoal/80 text-[15px] leading-relaxed mb-4">
                Golden is the county seat of Jefferson County and is located along Clear Creek at the base of the Front Range foothills. The city has a historic downtown area and is home to the Colorado School of Mines, which contributes to its community character.
              </p>
              <p className="text-charcoal/80 text-[15px] leading-relaxed">
                Golden offers a range of housing options including established older homes, newer construction, and properties at varying price points. Buyers should research specific neighborhoods to understand what is available at their budget and priorities.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: MapPin, label: "County", value: "Jefferson County" },
                { icon: Home, label: "Housing Types", value: "Varied" },
                { icon: Trees, label: "Setting", value: "Foothills Edge" },
                { icon: CheckCircle2, label: "School District", value: "Jeffco Schools" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-white border border-charcoal/8 rounded-lg p-4">
                  <Icon size={18} className="text-gold mb-2" />
                  <p className="text-charcoal/50 text-xs mb-0.5">{label}</p>
                  <p className="text-charcoal font-semibold text-sm">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Buyer Guidance ─── */}
      <section className="py-14 sm:py-16 bg-charcoal/3">
        <div className="container max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-2"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Buying a Home in Golden
          </h2>
          <p className="text-charcoal/60 text-sm mb-8">
            Practical guidance for buyers exploring Golden.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Research Neighborhoods Individually",
                body: "Golden has a range of neighborhoods with different characteristics, price points, and proximity to downtown and the Colorado School of Mines campus. Buyers should research specific neighborhoods to understand what matters most for their priorities.",
              },
              {
                title: "Understand the Market",
                body: "Market conditions in Golden vary by neighborhood, price range, and season. Buyers should research current inventory levels, recent sales, and days on market to understand what to expect in the specific area they are considering.",
              },
              {
                title: "Consider Commute and Location",
                body: "Golden is located west of Denver along US-6 and I-70. Commute times and conditions vary depending on destination and time of day. Buyers should independently research commute routes and conditions relevant to their situation.",
              },
              {
                title: "Get Pre-Approved Before You Search",
                body: "Getting pre-approved before beginning your home search helps clarify your budget and strengthens your position when making an offer. A local lender familiar with the Jefferson County market can help you understand your options.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="bg-white border border-charcoal/8 rounded-lg p-5">
                <h3
                  className="font-semibold text-charcoal text-[15px] mb-2"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {title}
                </h3>
                <p className="text-charcoal/65 text-[13px] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Jefferson County Communities ─── */}
      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-2"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Jefferson County Communities
          </h2>
          <p className="text-charcoal/60 text-sm mb-6">
            Golden is one of several communities in Jefferson County. Buyers often compare
            multiple areas before deciding on a location.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <a
              href="/jefferson-co-homes-for-sale"
              className="block bg-white border border-charcoal/10 rounded-lg px-4 py-3 text-sm font-medium text-charcoal hover:border-gold hover:text-gold transition-colors duration-150"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Jefferson County Hub
              <ArrowRight size={13} className="inline ml-1.5 opacity-60" />
            </a>
            <a
              href="/lakewood-co-homes-for-sale"
              className="block bg-white border border-charcoal/10 rounded-lg px-4 py-3 text-sm font-medium text-charcoal hover:border-gold hover:text-gold transition-colors duration-150"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Lakewood CO Homes
              <ArrowRight size={13} className="inline ml-1.5 opacity-60" />
            </a>
            <a
              href="/morrison-co-homes-for-sale"
              className="block bg-white border border-charcoal/10 rounded-lg px-4 py-3 text-sm font-medium text-charcoal hover:border-gold hover:text-gold transition-colors duration-150"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Morrison CO Homes
              <ArrowRight size={13} className="inline ml-1.5 opacity-60" />
            </a>
            <a
              href="/westminster-co-homes-for-sale"
              className="block bg-white border border-charcoal/10 rounded-lg px-4 py-3 text-sm font-medium text-charcoal hover:border-gold hover:text-gold transition-colors duration-150"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Westminster CO Homes
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
            <a
              href="/buying-a-home-in-denver"
              className="block bg-white border border-charcoal/10 rounded-lg px-4 py-3 text-sm font-medium text-charcoal hover:border-gold hover:text-gold transition-colors duration-150"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Home Buying Guide
              <ArrowRight size={13} className="inline ml-1.5 opacity-60" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-14 sm:py-16 bg-charcoal/3">
        <div className="container max-w-3xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-2"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Golden Home Buying FAQ
          </h2>
          <p className="text-charcoal/60 text-sm mb-8">
            Common questions from buyers exploring Golden.
          </p>
          <div className="divide-y divide-charcoal/10 border-t border-charcoal/10">
            {faqContent.map((item) => (
              <FAQItem key={item.question} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-14 sm:py-16 bg-charcoal">
        <div className="container max-w-3xl mx-auto text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold text-cream mb-3"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Ready to Explore Golden Homes?
          </h2>
          <p className="text-cream/70 text-[15px] mb-8 max-w-xl mx-auto">
            Connect with Rob Baker to discuss your Golden home search, get listing alerts, or ask questions about the Jefferson County market.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:rob@myrockhomes.com?subject=Golden Home Buying Consultation"
              className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 bg-gold text-charcoal hover:bg-gold-light px-7 py-4 text-[15px] no-underline"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <Mail size={16} />
              Email Rob
            </a>
            <a
              href="tel:+17203636544"
              className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 bg-transparent border border-cream/40 text-cream hover:border-gold hover:text-gold px-7 py-4 text-[15px] no-underline"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <Phone size={16} />
              (720) 363-6544
            </a>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="bg-charcoal border-t border-cream/10 py-8">
        <div className="container max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-cream/50 text-xs text-center sm:text-left">
              © {new Date().getFullYear()} My Rock Realty · Rob Baker · Colorado Licensed Real Estate Broker
            </p>
            <div className="flex gap-4 text-xs text-cream/40">
              <a href="/fair-housing" className="hover:text-gold transition-colors">Fair Housing</a>
              <a href="/privacy" className="hover:text-gold transition-colors">Privacy</a>
              <a href="/accessibility" className="hover:text-gold transition-colors">Accessibility</a>
            </div>
          </div>
          <p className="text-cream/30 text-[11px] mt-4 text-center sm:text-left leading-relaxed">
            All information provided is for general informational purposes only and is not guaranteed to be accurate, complete, or current. Market conditions, pricing, availability, and other factors change frequently. Buyers should independently research and verify all information relevant to their home purchase decision. Results are not guaranteed. Rob Baker is a licensed Colorado real estate broker.
          </p>
        </div>
      </footer>
    </div>
  );
}
