/**
 * Boulder, CO Homes for Sale — My Rock Realty
 * Primary Boulder County authority hub page for the Boulder SEO cluster
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
const BOULDER_HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/denver-rowhouses-hero_2f59d4ac.jpg";



/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "What are the most popular neighborhoods for buying a home in Boulder?",
    answer:
      "Popular Boulder neighborhoods for buyers include Downtown Boulder, Pearl Street, Mapleton Hill, Chautauqua, Flagstaff, Baseline, and the surrounding foothills areas.",
  },
  {
    question: "Are there good suburbs near Boulder for home buyers?",
    answer:
      "Yes. Many buyers looking in the Boulder County area also explore suburbs like Lafayette, Longmont, Niwot, and other surrounding communities that offer different price points and lifestyles.",
  },
  {
    question: "What types of homes can buyers find in Boulder?",
    answer:
      "Buyers can find a wide range of housing options in Boulder, including historic homes, modern condos, townhomes, luxury properties, and homes with mountain views or acreage in surrounding areas.",
  },
  {
    question: "Is Boulder a competitive real estate market?",
    answer:
      "Boulder can be very competitive depending on price range, neighborhood, and season. Inventory is often limited, demand is strong, and well-priced homes can move quickly.",
  },
  {
    question: "Where should I start if I want to buy a home in Boulder?",
    answer:
      "A good place to start is understanding your budget, getting pre-approved, learning about Boulder neighborhoods, and narrowing down areas that fit your lifestyle and financial goals.",
  },
  {
    question: "What makes Boulder different from Denver for home buyers?",
    answer:
      "Boulder offers a smaller, more walkable community with strong outdoor recreation access, a college-town atmosphere, and generally higher home prices than Denver. The market is more selective and competitive.",
  },
  {
    question: "How does the Boulder real estate market compare to surrounding areas?",
    answer:
      "Boulder tends to have higher prices and lower inventory than nearby suburbs like Lafayette and Longmont. Buyers often compare Boulder to these areas to find the best fit for their budget and lifestyle.",
  },
  {
    question: "What should I know about Boulder's school districts?",
    answer:
      "Boulder Valley School District serves the area and is generally well-regarded. Buyers should independently research specific schools and districts to understand what matters most for their family.",
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

export default function BoulderCoHomesForSale() {
  const faqSchema = buildFAQPageSchema(faqContent);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-warm-white">
      <SeoHead
        metadata={{
          title: "Boulder, CO Homes for Sale | Boulder Real Estate & Boulder County Homes",
          description:
            "Explore Boulder homes for sale, popular Boulder neighborhoods, nearby suburbs, property types, and local home buying resources for the Boulder County area.",
          canonicalUrl: "https://myrockhomes.com/boulder-co-homes-for-sale",
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
          1. HERO — Boulder Homes for Sale
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-charcoal overflow-hidden">
        {/* Hero Background Image */}
        <img
          src={BOULDER_HERO_BG}
          alt="Row houses along a residential street in Boulder"
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
                BOULDER COUNTY · COLORADO
              </span>
            </div>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream leading-tight mb-5"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Boulder, CO Homes for Sale
            </h1>
            <p className="text-cream/80 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Explore Boulder neighborhoods, surrounding communities, and property types. Whether you're buying your first home, relocating, or investing in Boulder County, this is your starting point.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:rob@myrockhomes.com?subject=Boulder Home Buying Consultation"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 bg-gold text-charcoal hover:bg-gold-light hover:shadow-lg px-7 py-4 text-[15px] sm:text-base no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                <Calendar size={16} />
                Schedule a Home Buying Consultation
              </a>
              <a
                href="mailto:rob@myrockhomes.com?subject=New Boulder Listings — Alert Request"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-gold text-gold hover:bg-gold hover:text-charcoal px-6 py-3 text-sm no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                <Bell size={15} />
                Get Alerts for New Boulder Homes
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          2. LIVING IN BOULDER: LIFESTYLE & AMENITIES
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Living in Boulder: Lifestyle &amp; Amenities
          </h2>
          <p className="text-charcoal/70 leading-relaxed mb-6">
            Boulder offers a unique blend of outdoor recreation, walkable neighborhoods, a vibrant community, and strong connection to nature. The city sits at the base of the Flatirons and Rocky Mountains, giving residents unparalleled access to hiking, climbing, and outdoor activities.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: Trees, label: "Mountain Access" },
              { icon: Building2, label: "Walkable Downtown" },
              { icon: Compass, label: "Outdoor Recreation" },
              { icon: Star, label: "College Town Vibe" },
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
          3. WHY PEOPLE CHOOSE TO LIVE IN BOULDER
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-charcoal/3">
        <div className="container max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Why People Choose to Live in Boulder
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { title: "Outdoor Lifestyle", body: "Boulder is a gateway to world-class hiking, climbing, skiing, and outdoor recreation. The Flatirons and Rocky Mountains provide year-round outdoor opportunities." },
              { title: "Community & Culture", body: "Boulder has a strong sense of community, vibrant arts scene, farmers markets, festivals, and a college-town atmosphere that attracts creative and active residents." },
              { title: "Walkability & Access", body: "Downtown Boulder and many neighborhoods are highly walkable with easy access to restaurants, shops, and services. The Pearl Street Mall is a hub for community life." },
              { title: "Environmental Values", body: "Boulder is known for its commitment to sustainability, open space preservation, and environmental stewardship, attracting like-minded residents." },
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
          4. RELOCATING TO BOULDER
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Relocating to Boulder
          </h2>
          <p className="text-charcoal/70 leading-relaxed mb-5">
            Relocating to Boulder from another state involves more than finding the right home. Understanding the market, neighborhoods, outdoor access, and buying process from a distance requires a clear strategy.
          </p>
          <p className="text-charcoal/70 leading-relaxed mb-6">
            Buyers should independently research schools, crime data, neighborhood characteristics, demographics, and other community factors that are important to them.
          </p>
          <a
            href="/relocation/relocating-to-denver-colorado"
            className="inline-flex items-center gap-2 text-gold font-semibold text-sm hover:underline"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Relocating to Boulder, Colorado
            <ArrowRight size={14} />
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          5. BOULDER REAL ESTATE MARKET OVERVIEW
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-charcoal/3">
        <div className="container max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Boulder Real Estate Market Overview
          </h2>
          <p className="text-charcoal/70 leading-relaxed mb-5">
            The Boulder real estate market is known for being competitive and selective. Inventory is often limited, demand is strong, and homes in desirable locations can move quickly.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: TrendingUp, label: "Market Conditions", body: "Boulder is typically a seller's market with strong demand. Preparation and quick action are essential." },
              { icon: HomeIcon, label: "Price Ranges", body: "Boulder offers options from entry-level townhomes to luxury mountain homes across a wide price spectrum." },
              { icon: Users, label: "Buyer Competition", body: "Well-priced homes in desirable areas move very quickly. Strategy, preparation, and timing are critical." },
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
          6. BOULDER NEIGHBORHOODS & COMMUNITIES
      ═══════════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════════
          7. BOULDER PROPERTY TYPES
      ═══════════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════════
          8. BOULDER VS OTHER COLORADO CITIES
      ═══════════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════════
          9. BOULDER HOME BUYING RESOURCES
      ═══════════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════════
          10. BROWSE BOULDER HOMES BY PRICE
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-2"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Browse Boulder Homes by Price
          </h2>
          <p className="text-charcoal/60 text-sm mb-6">
            Price range browsing will be available here. Contact Rob to discuss what fits your budget.
          </p>
          <div className="bg-white border border-charcoal/10 rounded-lg p-6 text-center">
            <p className="text-sm text-charcoal/60 mb-4">
              Looking for homes in a specific price range? Rob can help you understand what's available and what to expect at each price point in the Boulder market.
            </p>
            <a
              href="mailto:rob@myrockhomes.com?subject=Boulder Homes — Price Range Question"
              className="inline-flex items-center gap-2 text-gold font-semibold text-sm hover:underline"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <Mail size={14} />
              Ask About Boulder Home Prices
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          11. FEATURED BOULDER LISTINGS
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-charcoal/3">
        <div className="container max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-2"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Featured Boulder Listings
          </h2>
          {/* ── LIVE IDX LISTING FEED ── */}
          <BuyingBuddyWidget type="SearchResults" filter="city:Boulder mappos:40.01499,-105.27055 mapzoom:12" />
          {/* ── END IDX LISTING FEED ── */}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          12. BOULDER REAL ESTATE FAQs
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Boulder Real Estate FAQs
          </h2>
          <div className="bg-white border border-charcoal/8 rounded-xl px-6 py-2">
            {faqContent.map((item) => (
              <FAQItem key={item.question} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          13. FINAL CTA
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl mx-auto text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold text-cream mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Ready to Explore Boulder Homes?
          </h2>
          <p className="text-cream/70 text-base leading-relaxed mb-8">
            Rob Baker works with Boulder buyers, sellers, and relocating families. Schedule a consultation to discuss your goals and get a clear plan for the Boulder market.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:rob@myrockhomes.com?subject=Boulder Home Buying Consultation"
              className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 bg-gold text-charcoal hover:bg-gold-light hover:shadow-lg px-7 py-4 text-[15px] sm:text-base no-underline"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <Calendar size={16} />
              Schedule a Home Buying Consultation
            </a>
            <a
              href="mailto:rob@myrockhomes.com?subject=New Boulder Listings — Browse Request"
              className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-gold text-gold hover:bg-gold hover:text-charcoal px-6 py-3 text-sm no-underline"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Browse New Boulder Listings
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
