/**
 * Westminster CO Homes for Sale — My Rock Realty
 * Jefferson County cluster suburb spoke page — focused suburb page for Westminster search intent
 * Note: Westminster spans Jefferson and Adams counties — county overlap handled conservatively
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
const HERO_BG = "/images/denver-rowhouses-hero.jpg";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "What county is Westminster in?",
    answer:
      "Westminster spans both Jefferson and Adams counties. Parts of the city fall within Jefferson County and parts fall within Adams County. Buyers should verify which county a specific property is located in, as county can affect property taxes, services, and other factors. This page focuses on Westminster as a community within the broader Jefferson County area.",
  },
  {
    question: "What types of homes can buyers find in Westminster?",
    answer:
      "Buyers may find a range of housing options in Westminster including single-family homes in established neighborhoods, newer construction, condos, and townhomes. Price ranges and housing styles vary significantly by neighborhood and location within the city. Buyers should research specific areas to understand what is available at their budget.",
  },
  {
    question: "Why do buyers consider Westminster when searching near Jefferson County?",
    answer:
      "Buyers often consider Westminster for its northern Denver metro location, range of housing options, and access to major transportation corridors. Westminster is a large city with a variety of neighborhoods. Buyers should research specific neighborhoods to find the best fit for their priorities.",
  },
  {
    question: "How does Westminster compare to Golden and Lakewood?",
    answer:
      "Westminster is a larger, more northern community compared to Golden or Lakewood. It has a different community character and spans two counties. Buyers should research individual communities to understand the differences that matter most to them.",
  },
  {
    question: "What should buyers pay attention to when considering homes in Westminster?",
    answer:
      "Buyers should pay attention to which county a specific property is located in, neighborhood location, home condition, proximity to Denver and other destinations, and how individual properties compare within the area. Buyers should independently research schools and other community factors important to them.",
  },
];

/* ─── Build FAQ Schema ─── */
const faqSchema = buildFAQPageSchema(faqContent);

/* ─── Breadcrumb Items ─── */
const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Jefferson County, CO Homes for Sale", url: "/jefferson-co-homes-for-sale" },
  { label: "Westminster CO Homes for Sale", url: "/westminster-co-homes-for-sale" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function CTAButton({
  label = "Schedule a Westminster Home Buying Consultation",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a
      href="mailto:rob@myrockhomes.com?subject=Westminster Home Buying Consultation"
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

export default function WestminsterCoHomesForSale() {
  return (
    <div className="min-h-screen bg-warm-white">
      <SeoHead
        metadata={{
          title: "Westminster CO Homes for Sale | Westminster Colorado Real Estate | My Rock Realty",
          description:
            "Explore homes for sale in Westminster, Colorado. Browse Westminster neighborhoods, buyer resources, and connect with a local agent familiar with the Jefferson County area.",
          canonicalUrl: "https://myrockhomes.com/westminster-co-homes-for-sale",
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
          alt="Residential neighborhood in Westminster, Colorado"
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
                WESTMINSTER · JEFFERSON / ADAMS COUNTY · COLORADO
              </span>
            </div>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream leading-tight mb-5"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Westminster CO Homes for Sale
            </h1>
            <p className="text-cream/80 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Explore homes for sale in Westminster, Colorado — a northern Denver metro community spanning Jefferson and Adams counties. Browse neighborhoods, buyer resources, and connect with a local agent.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <CTAButton label="Schedule a Westminster Home Buying Consultation" />
              <a
                href="mailto:rob@myrockhomes.com?subject=Westminster CO Listings — Alert Request"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 bg-transparent border border-cream/40 text-cream hover:border-gold hover:text-gold px-6 py-3 text-sm no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Get Listing Alerts
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── County Note ─── */}
      <section className="py-6 bg-gold/10 border-b border-gold/20">
        <div className="container max-w-4xl mx-auto">
          <p className="text-charcoal/80 text-[13px] sm:text-sm leading-relaxed">
            <strong>County Note:</strong> Westminster spans both Jefferson and Adams counties. Buyers should verify which county a specific property is located in, as county can affect property taxes, services, and other factors. Buyers should independently research and confirm county boundaries for any property they are considering.
          </p>
        </div>
      </section>

      {/* ─── About Westminster ─── */}
      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-2"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            About Westminster, Colorado
          </h2>
          <p className="text-charcoal/60 text-sm mb-6">Understanding Westminster before you buy.</p>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <p className="text-charcoal/80 text-[15px] leading-relaxed mb-4">
                Westminster is a large city in the northern Denver metro area that spans both Jefferson and Adams counties. It has a range of established neighborhoods and newer developments, offering buyers a variety of housing options at different price points.
              </p>
              <p className="text-charcoal/80 text-[15px] leading-relaxed">
                Westminster has its own city government and community character distinct from Denver, while remaining closely connected to the broader Denver metro area. Buyers should research specific neighborhoods and verify county location for any property they are considering.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: MapPin, label: "Counties", value: "Jefferson & Adams" },
                { icon: Home, label: "Housing Types", value: "Varied" },
                { icon: CheckCircle2, label: "School Districts", value: "Multiple — verify" },
                { icon: MapPin, label: "Location", value: "North Denver Metro" },
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
            Buying a Home in Westminster
          </h2>
          <p className="text-charcoal/60 text-sm mb-8">Practical guidance for buyers exploring Westminster.</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Verify County Location",
                body: "Westminster spans Jefferson and Adams counties. Buyers should verify which county a specific property is located in before making decisions. County can affect property taxes, services, and other factors relevant to your purchase.",
              },
              {
                title: "Research Neighborhoods Individually",
                body: "Westminster has a range of neighborhoods with different characteristics, price points, and proximity to Denver and other destinations. Buyers should research specific neighborhoods to understand what matters most for their priorities.",
              },
              {
                title: "Understand the Market",
                body: "Market conditions in Westminster vary by neighborhood, price range, and season. Buyers should research current inventory levels, recent sales, and days on market to understand what to expect in the specific area they are considering.",
              },
              {
                title: "Get Pre-Approved Before You Search",
                body: "Getting pre-approved before beginning your home search helps clarify your budget and strengthens your position when making an offer. A local lender familiar with the Denver metro market can help you understand your options.",
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
          <p className="text-charcoal/60 text-sm mb-6">Westminster is one of several communities in the Jefferson County area. Buyers often compare multiple areas before deciding on a location.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { href: "/jefferson-co-homes-for-sale", label: "Jefferson County Hub" },
              { href: "/golden-homes-for-sale", label: "Golden Homes for Sale" },
              { href: "/lakewood-co-homes-for-sale", label: "Lakewood Homes for Sale" },
              { href: "/morrison-co-homes-for-sale", label: "Morrison Homes for Sale" },
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
            Westminster Home Buying FAQ
          </h2>
          <p className="text-charcoal/60 text-sm mb-8">Common questions from buyers exploring Westminster.</p>
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
            Ready to Explore Westminster Homes?
          </h2>
          <p className="text-cream/70 text-[15px] mb-8 max-w-xl mx-auto">
            Connect with Rob Baker to discuss your Westminster home search, get listing alerts, or ask questions about the Jefferson County area market.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:rob@myrockhomes.com?subject=Westminster Home Buying Consultation"
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
            All information provided is for general informational purposes only and is not guaranteed to be accurate, complete, or current. Market conditions, pricing, availability, and other factors change frequently. Buyers should independently research and verify all information relevant to their home purchase decision, including county boundaries, property taxes, and school district assignments. Results are not guaranteed. Rob Baker is a licensed Colorado real estate broker.
          </p>
        </div>
      </footer>
    </div>
  );
}
