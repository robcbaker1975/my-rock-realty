/**
 * Colorado Springs, CO Homes for Sale — My Rock Realty
 * Primary El Paso County authority hub page for the Colorado Springs SEO cluster
 * Design: Front Range Modern — matches existing site design system
 * Palette: Warm charcoal, cream, antique gold
 * Typography: Outfit (display) + Libre Franklin (body)
 */

import { useState, useEffect } from "react";
import BuyingBuddyWidget from "@/components/BuyingBuddyWidget";
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
const CS_HERO_BG = "/images/denver-rowhouses-hero.jpg";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "What are the most popular neighborhoods for buying a home in Colorado Springs?",
    answer:
      "Popular Colorado Springs neighborhoods for buyers include Downtown Colorado Springs, Old Colorado City, Broadmoor, Briargate, Northgate, Powers Corridor, and the surrounding foothills areas. Each neighborhood has its own character and price range.",
  },
  {
    question: "Are there good suburbs near Colorado Springs for home buyers?",
    answer:
      "Yes. Many buyers looking in the Colorado Springs area also explore nearby communities like Manitou Springs, Widefield, Palmer Lake, and other surrounding areas that offer different price points and community characteristics.",
  },
  {
    question: "What types of homes can buyers find in Colorado Springs?",
    answer:
      "Buyers can find a wide range of housing options in Colorado Springs, including historic homes, modern residences, newer construction, condos, townhomes, and properties with mountain views across a variety of neighborhoods and price ranges.",
  },
  {
    question: "Is Colorado Springs a competitive real estate market?",
    answer:
      "Colorado Springs market conditions vary by neighborhood, price range, and season. Inventory levels and demand shift over time, so buyers should research current conditions and work with an agent familiar with the local market.",
  },
  {
    question: "Where should I start if I want to buy a home in Colorado Springs?",
    answer:
      "A good place to start is understanding your budget, getting pre-approved, learning about Colorado Springs neighborhoods, and narrowing down areas that fit your lifestyle and financial goals.",
  },
  {
    question: "What makes Colorado Springs different from Denver for home buyers?",
    answer:
      "Colorado Springs offers a different community character, mountain setting, and generally different price points compared to Denver. The two cities attract different buyer profiles and offer distinct lifestyle options. Buyers should research both to find the best fit.",
  },
  {
    question: "How does the Colorado Springs real estate market compare to surrounding areas?",
    answer:
      "Colorado Springs tends to have different price points and inventory levels than nearby communities. Buyers often compare Colorado Springs to surrounding areas to find the best fit for their budget and lifestyle preferences.",
  },
  {
    question: "What should I know about Colorado Springs' school districts?",
    answer:
      "Colorado Springs is served by multiple school districts including Colorado Springs School District 11, Academy School District 20, and others. Buyers should independently research specific schools and districts to understand what matters most for their family.",
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

export default function ColoradoSpringsCoHomesForSale() {
  const faqSchema = buildFAQPageSchema(faqContent);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-warm-white">
      <SeoHead
        metadata={{
          title: "Colorado Springs, CO Homes for Sale | Colorado Springs Real Estate & El Paso County Homes",
          description:
            "Explore Colorado Springs homes for sale, popular neighborhoods, nearby communities, property types, and local home buying resources for the Colorado Springs and El Paso County area.",
          canonicalUrl: "https://www.myrockhomes.com/colorado-springs-co-homes-for-sale",
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
          1. HERO — Colorado Springs Homes for Sale
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-charcoal overflow-hidden">
        {/* Hero Background Image */}
        <img
          src={CS_HERO_BG}
          alt="Row houses along a residential street in Colorado Springs"
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
                EL PASO COUNTY · COLORADO
              </span>
            </div>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream leading-tight mb-5"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Colorado Springs, CO Homes for Sale
            </h1>
            <p className="text-cream/80 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Explore Colorado Springs neighborhoods, surrounding communities, and property types. Whether you're buying your first home, relocating, or investing in El Paso County, this is your starting point.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:rob@myrockhomes.com?subject=Colorado Springs Home Buying Consultation"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 bg-gold text-charcoal hover:bg-gold-light hover:shadow-lg px-7 py-4 text-[15px] sm:text-base no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                <Calendar size={16} />
                Schedule a Home Buying Consultation
              </a>
              <a
                href="mailto:rob@myrockhomes.com?subject=New Colorado Springs Listings — Alert Request"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-gold text-gold hover:bg-gold hover:text-charcoal px-6 py-3 text-sm no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                <Bell size={15} />
                Get Alerts for New Colorado Springs Homes
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          2. LIVING IN COLORADO SPRINGS: LIFESTYLE & AMENITIES
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Living in Colorado Springs: Lifestyle &amp; Amenities
          </h2>
          <p className="text-charcoal/70 leading-relaxed mb-6">
            Colorado Springs offers a combination of mountain access, outdoor recreation, diverse neighborhoods, and a strong community character. The city sits at the base of Pikes Peak and provides residents with access to hiking, outdoor activities, and natural attractions throughout the year.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: Trees, label: "Mountain Access" },
              { icon: Building2, label: "Diverse Neighborhoods" },
              { icon: Compass, label: "Outdoor Recreation" },
              { icon: Star, label: "Community Character" },
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
          3. WHY PEOPLE CHOOSE TO LIVE IN COLORADO SPRINGS
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-charcoal/3">
        <div className="container max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Why People Choose to Live in Colorado Springs
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { title: "Outdoor Lifestyle", body: "Colorado Springs provides access to hiking, climbing, and outdoor recreation near Pikes Peak, Garden of the Gods, and the Rocky Mountains. The area offers year-round outdoor opportunities." },
              { title: "Community & Culture", body: "Colorado Springs has a growing arts scene, community events, diverse neighborhoods, and a strong sense of local identity that attracts residents from a variety of backgrounds." },
              { title: "Neighborhood Variety", body: "From historic districts to newer developments, Colorado Springs offers a range of neighborhood characters and housing styles to suit different buyer preferences and budgets." },
              { title: "Mountain Setting", body: "Colorado Springs is known for its scenic mountain backdrop, views of Pikes Peak, and proximity to natural attractions that appeal to buyers who value outdoor access and natural scenery." },
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
          4. RELOCATING TO COLORADO SPRINGS
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Relocating to Colorado Springs
          </h2>
          <p className="text-charcoal/70 leading-relaxed mb-5">
            Relocating to Colorado Springs from another state involves more than finding the right home. Understanding the market, neighborhoods, outdoor access, and buying process from a distance requires a clear strategy.
          </p>
          <p className="text-charcoal/70 leading-relaxed mb-6">
            Buyers should independently research schools, crime data, neighborhood characteristics, demographics, and other community factors that are important to them.
          </p>
          <a
            href="/relocation/relocating-to-denver-colorado"
            className="inline-flex items-center gap-2 text-gold font-semibold text-sm hover:underline"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Relocating to Colorado — Home Buying Guide
            <ArrowRight size={14} />
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          5. COLORADO SPRINGS REAL ESTATE MARKET OVERVIEW
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-charcoal/3">
        <div className="container max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Colorado Springs Real Estate Market Overview
          </h2>
          <p className="text-charcoal/70 leading-relaxed mb-5">
            The Colorado Springs real estate market varies by neighborhood, price range, and season. Buyers should research current conditions and work with an agent familiar with local market dynamics to understand what to expect.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: TrendingUp, label: "Market Conditions", body: "Colorado Springs market conditions shift over time. Preparation, research, and working with a knowledgeable agent can help buyers navigate the process." },
              { icon: HomeIcon, label: "Price Ranges", body: "Colorado Springs offers options from entry-level condos and townhomes to larger single-family homes and properties with mountain views across a range of price points." },
              { icon: Users, label: "Buyer Considerations", body: "Well-priced homes in desirable areas can move quickly. Strategy, preparation, and understanding neighborhood-specific dynamics are important for buyers." },
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
          6. COLORADO SPRINGS NEIGHBORHOODS & COMMUNITIES
      ═══════════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════════
          7. COLORADO SPRINGS PROPERTY TYPES
      ═══════════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════════
          8. COLORADO SPRINGS VS OTHER COLORADO CITIES
      ═══════════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════════
          9. COLORADO SPRINGS HOME BUYING RESOURCES
      ═══════════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════════
          10. BROWSE COLORADO SPRINGS HOMES BY PRICE
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-2"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Browse Colorado Springs Homes by Price
          </h2>
          <p className="text-charcoal/60 text-sm mb-6">
            Price range browsing will be available here. Contact Rob to discuss what fits your budget.
          </p>
          <div className="bg-white border border-charcoal/10 rounded-lg p-6 text-center">
            <p className="text-sm text-charcoal/60 mb-4">
              Looking for homes in a specific price range? Rob can help you understand what's available and what to expect at each price point in the Colorado Springs market.
            </p>
            <a
              href="mailto:rob@myrockhomes.com?subject=Colorado Springs Homes — Price Range Question"
              className="inline-flex items-center gap-2 text-gold font-semibold text-sm hover:underline"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <Mail size={14} />
              Ask About Colorado Springs Home Prices
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          11. FEATURED COLORADO SPRINGS LISTINGS
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-charcoal/3">
        <div className="container max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-2"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Featured Colorado Springs Listings
          </h2>
          {/* ── LIVE IDX LISTING FEED ── */}
          <BuyingBuddyWidget type="SearchResults" filter="city:Colorado Springs" />
          {/* ── END IDX LISTING FEED ── */}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          12. COLORADO SPRINGS REAL ESTATE FAQs
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Colorado Springs Real Estate FAQs
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
            Ready to Explore Colorado Springs Homes?
          </h2>
          <p className="text-cream/70 text-base leading-relaxed mb-8">
            Rob Baker works with Colorado Springs buyers, sellers, and relocating families. Schedule a consultation to discuss your goals and get a clear plan for the Colorado Springs market.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:rob@myrockhomes.com?subject=Colorado Springs Home Buying Consultation"
              className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 bg-gold text-charcoal hover:bg-gold-light hover:shadow-lg px-7 py-4 text-[15px] sm:text-base no-underline"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <Calendar size={16} />
              Schedule a Home Buying Consultation
            </a>
            <a
              href="mailto:rob@myrockhomes.com?subject=New Colorado Springs Listings — Browse Request"
              className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-gold text-gold hover:bg-gold hover:text-charcoal px-6 py-3 text-sm no-underline"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Browse New Colorado Springs Listings
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
