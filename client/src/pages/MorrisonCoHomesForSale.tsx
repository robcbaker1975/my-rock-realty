/**
 * Morrison CO Homes for Sale — My Rock Realty
 * Jefferson County cluster suburb spoke page — focused suburb page for Morrison search intent
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

/* Hero Background Image — Approved asset */
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/denver-rowhouses-hero_2f59d4ac.jpg";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "What is Morrison known for in Jefferson County?",
    answer:
      "Morrison is a small town in Jefferson County located in the foothills west of Denver. It is a distinct municipality with its own community character and a limited housing inventory. Buyers interested in Morrison should research the specific housing options available, as inventory can be limited compared to larger Jefferson County communities.",
  },
  {
    question: "What types of homes can buyers find in Morrison?",
    answer:
      "Morrison has a relatively small housing stock compared to larger Jefferson County communities. Buyers may find single-family homes, some older properties, and a range of lot sizes and configurations. Inventory in Morrison can be limited, and buyers should research what is currently available and how it compares to their priorities.",
  },
  {
    question: "Why do buyers consider Morrison when searching in Jefferson County?",
    answer:
      "Buyers often consider Morrison for its foothills location, proximity to Red Rocks Amphitheatre, and distinct small-town character within Jefferson County. Buyers should research specific properties and neighborhoods to understand what is available and whether Morrison fits their priorities.",
  },
  {
    question: "How does Morrison compare to Golden and Lakewood?",
    answer:
      "Morrison is a smaller, more rural community compared to Golden or Lakewood. It has a different community character, limited housing inventory, and a foothills setting. Buyers should research individual communities to understand the differences that matter most to them.",
  },
  {
    question: "What should buyers pay attention to when considering homes in Morrison?",
    answer:
      "Buyers should pay attention to property condition, lot characteristics, access to utilities and services, proximity to Denver and other destinations, and how individual properties compare within the area. Buyers should independently research schools and other community factors important to them.",
  },
];

/* ─── Build FAQ Schema ─── */
const faqSchema = buildFAQPageSchema(faqContent);

/* ─── Breadcrumb Items ─── */
const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Jefferson County, CO Homes for Sale", url: "/jefferson-co-homes-for-sale" },
  { label: "Morrison CO Homes for Sale", url: "/morrison-co-homes-for-sale" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function CTAButton({
  label = "Schedule a Morrison Home Buying Consultation",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a
      href="mailto:rob@myrockhomes.com?subject=Morrison Home Buying Consultation"
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

export default function MorrisonCoHomesForSale() {
  return (
    <div className="min-h-screen bg-warm-white">
      <SeoHead
        metadata={{
          title: "Morrison CO Homes for Sale | Morrison Colorado Real Estate | My Rock Realty",
          description:
            "Explore homes for sale in Morrison, Colorado. Browse Morrison neighborhoods, buyer resources, and connect with a local agent familiar with Jefferson County.",
          canonicalUrl: "https://myrockhomes.com/morrison-co-homes-for-sale",
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
          src={HERO_BG}
          alt="Residential neighborhood in Morrison, Colorado"
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
                MORRISON · JEFFERSON COUNTY · COLORADO
              </span>
            </div>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream leading-tight mb-5"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Morrison CO Homes for Sale
            </h1>
            <p className="text-cream/80 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Explore homes for sale in Morrison, Colorado — a small foothills town in Jefferson County located west of Denver. Browse neighborhoods, buyer resources, and connect with a local agent.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <CTAButton label="Schedule a Morrison Home Buying Consultation" />
              <a
                href="mailto:rob@myrockhomes.com?subject=Morrison CO Listings — Alert Request"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 bg-transparent border border-cream/40 text-cream hover:border-gold hover:text-gold px-6 py-3 text-sm no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Get Listing Alerts
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── About Morrison ─── */}
      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-2"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            About Morrison, Colorado
          </h2>
          <p className="text-charcoal/60 text-sm mb-6">Understanding Morrison before you buy.</p>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <p className="text-charcoal/80 text-[15px] leading-relaxed mb-4">
                Morrison is a small town in Jefferson County located in the foothills west of Denver. It has a distinct community character and a limited housing inventory compared to larger Jefferson County communities. Red Rocks Amphitheatre is located nearby and is a well-known landmark in the area.
              </p>
              <p className="text-charcoal/80 text-[15px] leading-relaxed">
                Buyers interested in Morrison should research the specific housing options available, as inventory can be limited. Morrison has its own town government and community character while remaining connected to the broader Jefferson County area.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: MapPin, label: "County", value: "Jefferson County" },
                { icon: Home, label: "Housing Types", value: "Single-Family" },
                { icon: CheckCircle2, label: "School District", value: "Jeffco Schools" },
                { icon: MapPin, label: "Location", value: "Foothills, West of Denver" },
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
            Buying a Home in Morrison
          </h2>
          <p className="text-charcoal/60 text-sm mb-8">Practical guidance for buyers exploring Morrison.</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Understand Limited Inventory",
                body: "Morrison has a relatively small housing stock compared to larger Jefferson County communities. Buyers should research what is currently available and be prepared for limited inventory. Working with an agent familiar with the area can help you stay informed when properties become available.",
              },
              {
                title: "Research Property Characteristics",
                body: "Properties in Morrison may have different characteristics than those in more urban Jefferson County communities, including lot size, access to utilities, and terrain. Buyers should research specific properties and neighborhoods to understand what is available and whether it fits their priorities.",
              },
              {
                title: "Consider Proximity and Access",
                body: "Morrison is located in the foothills west of Denver. Commute times and conditions vary depending on destination and time of day. Buyers should independently research commute routes and conditions relevant to their situation.",
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

      {/* ─── Internal Links ─── */}
      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-2"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Jefferson County Communities
          </h2>
          <p className="text-charcoal/60 text-sm mb-6">Morrison is one of several communities in Jefferson County. Buyers often compare multiple areas before deciding on a location.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { href: "/jefferson-co-homes-for-sale", label: "Jefferson County Hub" },
              { href: "/golden-homes-for-sale", label: "Golden Homes for Sale" },
              { href: "/lakewood-co-homes-for-sale", label: "Lakewood Homes for Sale" },
              { href: "/westminster-co-homes-for-sale", label: "Westminster Homes for Sale" },
              { href: "/denver-homes-for-sale", label: "Denver Metro" },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="block bg-white border border-charcoal/10 rounded-lg px-4 py-3 text-sm font-medium text-charcoal hover:border-gold hover:text-gold transition-colors duration-150"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {label}
                <ArrowRight size={13} className="inline ml-1.5 opacity-60" />
              </a>
            ))}
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
            Morrison Home Buying FAQ
          </h2>
          <p className="text-charcoal/60 text-sm mb-8">Common questions from buyers exploring Morrison.</p>
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
            Ready to Explore Morrison Homes?
          </h2>
          <p className="text-cream/70 text-[15px] mb-8 max-w-xl mx-auto">
            Connect with Rob Baker to discuss your Morrison home search, get listing alerts, or ask questions about the Jefferson County market.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:rob@myrockhomes.com?subject=Morrison Home Buying Consultation"
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
