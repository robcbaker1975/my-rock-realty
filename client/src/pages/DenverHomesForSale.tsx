/**
 * Denver Homes for Sale — My Rock Realty
 * Primary Denver authority hub page for the Denver SEO cluster
 * Design: Front Range Modern — matches existing site design system
 * Palette: Warm charcoal, cream, antique gold
 * Typography: Outfit (display) + Libre Franklin (body)
 */

import { useState, useEffect } from "react";
import BuyingBuddyWidget from "@/components/BuyingBuddyWidget";
import { Link } from "wouter";
import SeoHead from "@/components/seo/SeoHead";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import {
  ArrowRight,
  ArrowLeft,
  MapPin,
  Home as HomeIcon,
  TrendingUp,
  Users,
  Globe,
  ChevronDown,
  Phone,
  Mail,
  Building2,
  Trees,
  Star,
  Compass,
  BookOpen,
  Bell,
  Calendar,
} from "lucide-react";

/* Hero Background Image — Approved Denver metro aerial view */
const DENVER_HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/denver-rowhouses-hero_2f59d4ac.jpg";



/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "What are the most popular neighborhoods for buying a home in Denver?",
    answer:
      "Popular Denver neighborhoods for buyers include Wash Park, Cherry Creek, LoHi, RiNo, Capitol Hill, Central Park, Sloan Lake, Berkeley, Platt Park, and Congress Park.",
  },
  {
    question: "Are there good suburbs near Denver for home buyers?",
    answer:
      "Yes. Many buyers looking in the Denver metro area also explore suburbs like Parker, Highlands Ranch, Castle Rock, Aurora, Littleton, Lakewood, Arvada, and Golden.",
  },
  {
    question: "What types of homes can buyers find in Denver?",
    answer:
      "Buyers can find a wide range of housing options in Denver, including condos, townhomes, luxury homes, new construction, and homes with acreage in some surrounding areas.",
  },
  {
    question: "Is Denver a competitive real estate market?",
    answer:
      "Denver can be competitive depending on price range, neighborhood, and season. Inventory, demand, and financing strength all affect how quickly buyers need to move.",
  },
  {
    question: "Where should I start if I want to buy a home in Denver?",
    answer:
      "A good place to start is understanding your budget, getting pre-approved, learning the Denver home buying process, and narrowing down neighborhoods or suburbs that fit your goals.",
  },
];

/* ─── FAQ Accordion ─── */
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-charcoal/10 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 px-1 text-left gap-4 group"
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
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-60 pb-5" : "max-h-0"}`}
      >
        <p className="text-[14px] sm:text-[15px] text-charcoal/70 leading-relaxed px-1">
          {answer}
        </p>
      </div>
    </div>
  );
}

/* ─── Internal Link Card ─── */
function LinkCard({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="block bg-white border border-charcoal/10 rounded-lg px-4 py-3 text-sm font-medium text-charcoal hover:border-gold hover:text-gold transition-colors duration-150"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {label}
      <ArrowRight size={13} className="inline ml-1.5 opacity-60" />
    </a>
  );
}

export default function DenverHomesForSale() {
  const faqSchema = buildFAQPageSchema(faqContent);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-warm-white">
      <SeoHead
        metadata={{
          title: "Denver Homes for Sale | Denver Real Estate & Denver Metro Homes",
          description:
            "Explore Denver homes for sale, popular Denver neighborhoods, top nearby suburbs, property types, and local home buying resources for the Denver metro area.",
          canonicalUrl: "https://myrockhomes.com/denver-homes-for-sale",
        }}
        schema={faqSchema ? [faqSchema] : []}
      />

      {/* ═══════════════════════════════════════════════════
          HEADER
      ═══════════════════════════════════════════════════ */}
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
            href="/"
            className="absolute top-4 right-4 sm:static text-cream/70 hover:text-gold text-xs sm:text-sm font-medium transition-colors inline-flex items-center gap-1.5"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <ArrowLeft size={14} />
            Back to Main Site
          </a>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════
          1. HERO — Denver Homes for Sale
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
        <div className="container relative z-10 py-14 sm:py-20 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
              <MapPin size={13} className="text-gold" />
              <span
                className="text-gold text-xs sm:text-sm font-semibold tracking-wide"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                DENVER METRO · COLORADO
              </span>
            </div>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream leading-tight mb-5"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Denver Homes for Sale
            </h1>
            <p className="text-cream/80 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Explore Denver neighborhoods, suburbs, and property types. Whether you're buying your first home, relocating, or investing in the Denver metro area, this is your starting point.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:rob@myrockhomes.com?subject=Denver Home Buying Consultation"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 bg-gold text-charcoal hover:bg-gold-light hover:shadow-lg px-7 py-4 text-[15px] sm:text-base no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                <Calendar size={16} />
                Schedule a Home Buying Consultation
              </a>
              <a
                href="mailto:rob@myrockhomes.com?subject=New Denver Listings — Alert Request"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-gold text-gold hover:bg-gold hover:text-charcoal px-6 py-3 text-sm no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                <Bell size={15} />
                Get Alerts for New Denver Homes
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          2. LIVING IN DENVER: LIFESTYLE & AMENITIES
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Living in Denver: Lifestyle &amp; Amenities
          </h2>
          <p className="text-charcoal/70 leading-relaxed mb-6">
            Denver offers a mix of outdoor access, urban amenities, and a strong job market that continues to attract buyers from across the country. The city sits at the base of the Rocky Mountains, giving residents easy access to hiking, skiing, and outdoor recreation year-round.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: Trees, label: "300+ Days of Sunshine" },
              { icon: Building2, label: "Thriving Urban Core" },
              { icon: Compass, label: "Mountain Access" },
              { icon: Star, label: "Strong Job Market" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="bg-white border border-charcoal/8 rounded-lg p-4 text-center">
                <Icon size={22} className="text-gold mx-auto mb-2" />
                <p className="text-xs sm:text-sm font-medium text-charcoal" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          3. WHY PEOPLE CHOOSE TO LIVE IN DENVER
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-charcoal/3">
        <div className="container max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Why People Choose to Live in Denver
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { title: "Outdoor Lifestyle", body: "Denver is a gateway to Colorado's mountains, trails, and ski resorts. Many residents prioritize proximity to outdoor recreation when choosing a neighborhood or suburb." },
              { title: "Career Opportunities", body: "Denver's economy includes technology, aerospace, healthcare, energy, and financial services. The metro area has seen consistent job growth over the past decade." },
              { title: "Diverse Neighborhoods", body: "From walkable urban neighborhoods to quiet suburban streets, Denver offers a range of living environments to match different lifestyles and budgets." },
              { title: "Cultural Amenities", body: "Denver has a strong arts and culture scene, professional sports teams, a growing restaurant and food scene, and a variety of entertainment options." },
            ].map(({ title, body }) => (
              <div key={title} className="bg-white border border-charcoal/8 rounded-lg p-5">
                <h3 className="text-base font-semibold text-charcoal mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {title}
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          4. RELOCATING TO DENVER
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Relocating to Denver
          </h2>
          <p className="text-charcoal/70 leading-relaxed mb-5">
            Relocating to Denver from another state involves more than finding the right home. Understanding the market, neighborhoods, commute patterns, and buying process from a distance requires a clear strategy.
          </p>
          <p className="text-charcoal/70 leading-relaxed mb-6">
            Buyers should independently research schools, crime data, neighborhood characteristics, demographics, and other community factors that are important to them.
          </p>
          <a
            href="/relocation/relocating-to-denver-colorado"
            className="inline-flex items-center gap-2 text-gold font-semibold text-sm hover:underline"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Relocating to Denver, Colorado
            <ArrowRight size={14} />
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          5. DENVER REAL ESTATE MARKET OVERVIEW
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-charcoal/3">
        <div className="container max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Denver Real Estate Market Overview
          </h2>
          <p className="text-charcoal/70 leading-relaxed mb-5">
            The Denver metro real estate market varies significantly by neighborhood, price range, and property type. Conditions can shift based on inventory levels, interest rates, and seasonal demand.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: TrendingUp, label: "Market Conditions", body: "Inventory, demand, and pricing vary by area and season. Pre-approval and preparation are key." },
              { icon: HomeIcon, label: "Price Ranges", body: "Denver offers options from entry-level condos to luxury single-family homes across a wide price spectrum." },
              { icon: Users, label: "Buyer Competition", body: "Well-priced homes in desirable areas can move quickly. Strategy and timing matter." },
            ].map(({ icon: Icon, label, body }) => (
              <div key={label} className="bg-white border border-charcoal/8 rounded-lg p-5">
                <Icon size={20} className="text-gold mb-3" />
                <h3 className="text-sm font-semibold text-charcoal mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {label}
                </h3>
                <p className="text-xs text-charcoal/70 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          6. POPULAR DENVER NEIGHBORHOODS
      ═══════════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════════
          7. TOP DENVER SUBURBS FOR HOME BUYERS
      ═══════════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════════
          8. DENVER PROPERTY TYPES
      ═══════════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════════
          9. DENVER VS OTHER COLORADO CITIES
      ═══════════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════════
          10. DENVER HOME BUYING RESOURCES
      ═══════════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════════
          11. BROWSE DENVER HOMES BY PRICE
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-charcoal/3">
        <div className="container max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-2"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Browse Denver Homes by Price
          </h2>
          <p className="text-charcoal/60 text-sm mb-6">
            Price range browsing will be available here. Contact Rob to discuss what fits your budget.
          </p>
          <div className="bg-white border border-charcoal/10 rounded-lg p-6 text-center">
            <p className="text-sm text-charcoal/60 mb-4">
              Looking for homes in a specific price range? Rob can help you understand what's available and what to expect at each price point in the Denver market.
            </p>
            <a
              href="mailto:rob@myrockhomes.com?subject=Denver Homes — Price Range Question"
              className="inline-flex items-center gap-2 text-gold font-semibold text-sm hover:underline"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <Mail size={14} />
              Ask About Denver Home Prices
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          12. FEATURED DENVER LISTINGS
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-2"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Featured Denver Listings
          </h2>
          {/* ── LIVE IDX LISTING FEED ── */}
          <BuyingBuddyWidget type="SearchResults" filter="city:Denver mappos:39.7392,-104.9903 mapzoom:11" />
          {/* ── END IDX LISTING FEED ── */}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          13. DENVER REAL ESTATE FAQs
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-charcoal/3">
        <div className="container max-w-3xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Denver Real Estate FAQs
          </h2>
          <div className="bg-white border border-charcoal/8 rounded-xl px-6 py-2">
            {faqContent.map((item) => (
              <FAQItem key={item.question} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          14. FINAL CTA
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl mx-auto text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold text-cream mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Ready to Explore Denver Homes?
          </h2>
          <p className="text-cream/70 text-base leading-relaxed mb-8">
            Rob Baker works with Denver buyers, sellers, and relocating families. Schedule a consultation to discuss your goals and get a clear plan for the Denver market.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:rob@myrockhomes.com?subject=Denver Home Buying Consultation"
              className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 bg-gold text-charcoal hover:bg-gold-light hover:shadow-lg px-7 py-4 text-[15px] sm:text-base no-underline"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <Calendar size={16} />
              Schedule a Home Buying Consultation
            </a>
            <a
              href="mailto:rob@myrockhomes.com?subject=New Denver Listings — Browse Request"
              className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-gold text-gold hover:bg-gold hover:text-charcoal px-6 py-3 text-sm no-underline"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Browse New Denver Listings
              <ArrowRight size={14} />
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
            <a href="/" className="inline-flex items-center gap-1.5 hover:text-gold transition-colors">
              <Globe size={12} />
              myrockhomes.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
