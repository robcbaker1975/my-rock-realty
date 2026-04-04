/**
 * Greeley, CO Homes for Sale — My Rock Realty
 * Primary Weld County authority hub page for the Greeley SEO cluster
 * Design: Front Range Modern — matches existing site design system
 * Palette: Warm charcoal, cream, antique gold
 * Typography: Outfit (display) + Libre Franklin (body)
 */

import { useState, useEffect } from "react";
import SeoHead from "@/components/seo/SeoHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
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

/* Hero Background Image — Approved asset */
const GREELEY_HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/denver-rowhouses-hero_2f59d4ac.jpg";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "What are the most popular neighborhoods for buying a home in Greeley?",
    answer:
      "Greeley includes a variety of neighborhoods with different characters, housing types, and price ranges. Areas near the University of Northern Colorado, established older neighborhoods, and newer suburban developments each offer different options. Buyers should research individual neighborhoods to find the best fit for their needs and priorities.",
  },
  {
    question: "Are there good communities near Greeley for home buyers?",
    answer:
      "Many buyers looking in the Greeley area also explore nearby communities in Weld County that offer different price points, community characteristics, and access to services. Windsor, Evans, and other Weld County communities are often considered alongside Greeley. Buyers should research the broader Weld County area to understand their options.",
  },
  {
    question: "What types of homes can buyers find in Greeley?",
    answer:
      "Buyers can find a range of housing options in Greeley, including older established homes, newer construction in suburban neighborhoods, condos, townhomes, and single-family homes across a variety of price ranges and community settings.",
  },
  {
    question: "Is Greeley a competitive real estate market?",
    answer:
      "Greeley market conditions vary by neighborhood, price range, and season. Inventory levels and demand shift over time, so buyers should research current conditions and work with an agent familiar with the local market to understand what to expect.",
  },
  {
    question: "Where should I start if I want to buy a home in Greeley?",
    answer:
      "A good starting point is understanding your budget, getting pre-approved, learning about Greeley neighborhoods, and narrowing down areas that fit your priorities. Working with an agent familiar with the Greeley and Weld County market can help you navigate the process.",
  },
  {
    question: "What makes Greeley different from Fort Collins for home buyers?",
    answer:
      "Greeley and Fort Collins are both northern Colorado cities but offer different community characters, market dynamics, and price points. Greeley is located in Weld County while Fort Collins is in Larimer County. Buyers should research both to find the best fit for their situation.",
  },
  {
    question: "How does the Greeley real estate market compare to surrounding areas?",
    answer:
      "Greeley tends to have different price points and inventory levels than nearby communities in Weld County and the broader northern Colorado area. Buyers often compare Greeley to surrounding areas to find the best fit for their budget and priorities.",
  },
  {
    question: "What should I know about Greeley school districts?",
    answer:
      "Greeley is primarily served by Greeley-Evans School District 6, along with other districts in the surrounding Weld County area. Buyers should independently research specific schools and districts to understand what matters most for their family.",
  },
  {
    question: "What is the University of Northern Colorado's impact on the Greeley housing market?",
    answer:
      "The University of Northern Colorado is located in Greeley and can influence certain neighborhoods and segments of the housing market. Buyers should research how proximity to the university aligns with their priorities, including neighborhood character, rental activity, and community dynamics.",
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

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Greeley, CO Homes for Sale", url: "/greeley-co-homes-for-sale" },
];

export default function GreeleyCoHomesForSale() {
  const faqSchema = buildFAQPageSchema(faqContent);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="hub-page min-h-screen bg-warm-white">
      <SeoHead
        metadata={{
          title: "Greeley, CO Homes for Sale | Greeley Real Estate & Weld County Homes",
          description:
            "Explore Greeley homes for sale, popular neighborhoods, nearby communities, property types, and local home buying resources for the Greeley and Weld County area.",
          canonicalUrl: "https://myrockhomes.com/greeley-co-homes-for-sale",
          breadcrumbs: breadcrumbItems,
        }}
        schema={faqSchema ? [faqSchema] : []}
      />

      {/* ═══════════════════════════════════════════════════
          BREADCRUMBS
      ═══════════════════════════════════════════════════ */}
      <div className="bg-charcoal">
        <div className="container py-3">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

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
          1. HERO — Greeley Homes for Sale
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-charcoal overflow-hidden">
        {/* Hero Background Image */}
        <img
          src={GREELEY_HERO_BG}
          alt="Row houses along a residential street in Greeley"
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
                WELD COUNTY · COLORADO
              </span>
            </div>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream leading-tight mb-5"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Greeley, CO Homes for Sale
            </h1>
            <p className="text-cream/80 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Explore Greeley neighborhoods, surrounding communities, and property types. Whether you're buying your first home, relocating, or exploring Weld County, this is your starting point.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:rob@myrockhomes.com?subject=Greeley Home Buying Consultation"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 bg-gold text-charcoal hover:bg-gold-light hover:shadow-lg px-7 py-4 text-[15px] sm:text-base no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                <Calendar size={16} />
                Schedule a Home Buying Consultation
              </a>
              <a
                href="mailto:rob@myrockhomes.com?subject=New Greeley Listings — Alert Request"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-gold text-gold hover:bg-gold hover:text-charcoal px-6 py-3 text-sm no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                <Bell size={15} />
                Get Alerts for New Greeley Homes
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          2. LIVING IN GREELEY: LIFESTYLE & AMENITIES
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Living in Greeley: Lifestyle &amp; Amenities
          </h2>
          <p className="text-charcoal/70 leading-relaxed mb-6">
            Greeley is the largest city in Weld County and serves as a regional hub for northern Colorado. The city is home to the University of Northern Colorado and offers a mix of established neighborhoods, newer suburban developments, and access to the surrounding plains and Front Range. Buyers should research specific areas to find what aligns with their priorities.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: BookOpen, label: "University Town" },
              { icon: Building2, label: "Downtown District" },
              { icon: Compass, label: "Northern Colorado" },
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
          3. WHY PEOPLE CHOOSE TO LIVE IN GREELEY
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-charcoal/3">
        <div className="container max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Why People Choose to Live in Greeley
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { title: "University of Northern Colorado", body: "The University of Northern Colorado is located in Greeley and influences certain neighborhoods and segments of the housing market. Buyers should research how proximity to the university aligns with their priorities." },
              { title: "Weld County Location", body: "Greeley is the county seat of Weld County and serves as a regional hub for northern Colorado. The city provides access to services, employment, and amenities for the surrounding area." },
              { title: "Neighborhood Variety", body: "From older established neighborhoods to newer suburban developments, Greeley offers a range of housing styles and community settings to suit different buyer preferences and budgets." },
              { title: "Northern Colorado Access", body: "Greeley's location in northern Colorado provides access to Fort Collins, Denver, and the broader Front Range corridor. Buyers should research specific commute distances and access to destinations that matter to them." },
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
          4. RELOCATING TO GREELEY
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Relocating to Greeley
          </h2>
          <p className="text-charcoal/70 leading-relaxed mb-5">
            Relocating to Greeley from another state involves more than finding the right home. Understanding the market, neighborhoods, and buying process from a distance requires a clear strategy.
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
          5. GREELEY REAL ESTATE MARKET OVERVIEW
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-charcoal/3">
        <div className="container max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Greeley Real Estate Market Overview
          </h2>
          <p className="text-charcoal/70 leading-relaxed mb-5">
            The Greeley real estate market varies by neighborhood, price range, and season. Buyers should research current conditions and work with an agent familiar with local market dynamics to understand what to expect.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: TrendingUp, label: "Market Conditions", body: "Greeley market conditions shift over time. Preparation, research, and working with a knowledgeable agent can help buyers navigate the process." },
              { icon: HomeIcon, label: "Price Ranges", body: "Greeley offers options from condos and townhomes to larger single-family homes across a range of price points and neighborhood settings." },
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
          6. GREELEY NEIGHBORHOODS & COMMUNITIES
      ═══════════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════════
          7. GREELEY PROPERTY TYPES
      ═══════════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════════
          8. GREELEY VS OTHER COLORADO CITIES
      ═══════════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════════
          9. GREELEY HOME BUYING RESOURCES
      ═══════════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════════
          10. BROWSE GREELEY HOMES BY PRICE
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-2"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Browse Greeley Homes by Price
          </h2>
          <p className="text-charcoal/60 text-sm mb-6">
            Price range browsing will be available here. Contact Rob to discuss what fits your budget.
          </p>
          <div className="bg-white border border-charcoal/10 rounded-lg p-6 text-center">
            <p className="text-sm text-charcoal/60 mb-4">
              Looking for homes in a specific price range? Rob can help you understand what's available and what to expect at each price point in the Greeley market.
            </p>
            <a
              href="mailto:rob@myrockhomes.com?subject=Greeley Homes — Price Range Question"
              className="inline-flex items-center gap-2 text-gold font-semibold text-sm hover:underline"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <Mail size={14} />
              Ask About Greeley Home Prices
            </a>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════
          12. GREELEY REAL ESTATE FAQs
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Greeley Real Estate FAQs
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
            Ready to Explore Greeley Homes?
          </h2>
          <p className="text-cream/70 text-base leading-relaxed mb-8">
            Rob Baker works with Colorado buyers, sellers, and relocating families. Schedule a consultation to discuss your goals and get a clear plan for the Greeley and Weld County market.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:rob@myrockhomes.com?subject=Greeley Home Buying Consultation"
              className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 bg-gold text-charcoal hover:bg-gold-light hover:shadow-lg px-7 py-4 text-[15px] sm:text-base no-underline"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <Calendar size={16} />
              Schedule a Home Buying Consultation
            </a>
            <a
              href="mailto:rob@myrockhomes.com?subject=New Greeley Listings — Browse Request"
              className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-gold text-gold hover:bg-gold hover:text-charcoal px-6 py-3 text-sm no-underline"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Browse New Greeley Listings
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

      {/* ═══════════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════════ */}
      <footer className="bg-charcoal/95 border-t border-white/5 py-8">
        <div className="container max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-cream/40 text-xs">
            <p style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              © {new Date().getFullYear()} My Rock Realty · Rob Baker · Licensed Colorado Real Estate Broker
            </p>
            <div className="flex gap-4">
              <a href="/privacy" className="hover:text-gold transition-colors">Privacy</a>
              <a href="/fair-housing" className="hover:text-gold transition-colors">Fair Housing</a>
              <a href="/accessibility" className="hover:text-gold transition-colors">Accessibility</a>
            </div>
          </div>
          <p className="text-cream/25 text-[11px] mt-4 text-center leading-relaxed" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
            All information is deemed reliable but not guaranteed. Buyers should independently research schools, crime data, neighborhood characteristics, and other community factors important to them. Real estate market conditions vary and change over time.
          </p>
        </div>
      </footer>
    </div>
  );
}
