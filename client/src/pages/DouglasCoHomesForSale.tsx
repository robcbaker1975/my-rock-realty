/**
 * Douglas County, CO Homes for Sale — My Rock Realty
 * Primary Douglas County authority hub page for the Douglas County SEO cluster
 * Design: Front Range Modern — matches existing site design system
 * Palette: Warm charcoal (#292524), cream (#F5F0EB), antique gold (#C9A96E)
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
  Compass,
  BookOpen,
  Bell,
  Calendar,
} from "lucide-react";

/* Hero Background Image — Approved asset */
const DOUGLAS_HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/denver-rowhouses-hero_2f59d4ac.jpg";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "What are the most popular areas for buying a home in Douglas County?",
    answer:
      "Douglas County includes a range of communities with different housing types, price points, and community characters. Parker is the largest city in the county and is often a starting point for buyers. Buyers should research individual communities and neighborhoods to find the best fit for their needs and priorities.",
  },
  {
    question: "What types of homes are available in Douglas County?",
    answer:
      "Douglas County offers a variety of housing options including single-family homes, townhomes, and newer construction communities. Price ranges and housing styles vary significantly by community and neighborhood. Buyers should research specific areas to understand what's available at their budget.",
  },
  {
    question: "How does Douglas County compare to other Denver metro areas?",
    answer:
      "Douglas County is located south of Denver and offers a different community character and market dynamic than the city itself. Buyers often compare Douglas County communities to other Denver metro suburbs when evaluating options. Buyers should research current conditions in each area to make an informed comparison.",
  },
  {
    question: "Is Douglas County a competitive real estate market?",
    answer:
      "Market conditions in Douglas County vary by community, price range, and season. Inventory levels and demand shift over time, so buyers should research current conditions and work with an agent familiar with the local market to understand what to expect.",
  },
  {
    question: "What should I know about Douglas County school districts?",
    answer:
      "Douglas County is primarily served by Douglas County School District RE-1. Buyers should independently research specific schools, boundaries, and district information to understand what matters most for their family.",
  },
  {
    question: "Where should I start if I want to buy a home in Douglas County?",
    answer:
      "A good starting point is understanding your budget, getting pre-approved, and learning about the different communities within Douglas County. Working with an agent familiar with the Douglas County market can help you navigate the process and understand neighborhood-specific dynamics.",
  },
  {
    question: "What is the commute like from Douglas County to Denver?",
    answer:
      "Douglas County is located south of Denver along the I-25 corridor. Commute times and conditions vary depending on the specific community, destination, and time of day. Buyers should independently research commute routes and conditions that are relevant to their situation.",
  },
  {
    question: "Are there new construction homes available in Douglas County?",
    answer:
      "New construction activity in Douglas County varies by community and market conditions. Buyers interested in new construction should research current builder activity and available communities. Working with an agent familiar with the local market can help identify new construction options.",
  },
  {
    question: "What are the main differences between Parker and other Douglas County communities?",
    answer:
      "Parker is the largest incorporated city in Douglas County and offers a range of established neighborhoods and newer developments. Other communities in the county offer different characteristics and price points. Buyers should research individual communities to find the best fit for their priorities.",
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
  { label: "Douglas County, CO Homes for Sale", url: "/douglas-co-homes-for-sale" },
];

export default function DouglasCoHomesForSale() {
  const faqSchema = buildFAQPageSchema(faqContent);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-warm-white">
      <SeoHead
        metadata={{
          title: "Douglas County, CO Homes for Sale | Douglas County Real Estate",
          description:
            "Explore Douglas County homes for sale, communities, property types, and local home buying resources for Parker and the broader Douglas County area.",
          canonicalUrl: "https://myrockhomes.com/douglas-co-homes-for-sale",
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
          1. HERO — Douglas County Homes for Sale
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-charcoal overflow-hidden">
        {/* Hero Background Image */}
        <img
          src={DOUGLAS_HERO_BG}
          alt="Residential street in Douglas County, Colorado"
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
                DOUGLAS COUNTY · COLORADO
              </span>
            </div>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream leading-tight mb-5"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Douglas County, CO Homes for Sale
            </h1>
            <p className="text-cream/80 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Explore Douglas County communities, housing options, and buyer resources. Whether you're buying your first home, relocating, or exploring the Denver metro south corridor, this is your starting point.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:rob@myrockhomes.com?subject=Douglas County Home Buying Consultation"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 bg-gold text-charcoal hover:bg-gold-light hover:shadow-lg px-7 py-4 text-[15px] sm:text-base no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                <Calendar size={16} />
                Schedule a Home Buying Consultation
              </a>
              <a
                href="mailto:rob@myrockhomes.com?subject=New Douglas County Listings — Alert Request"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-gold text-gold hover:bg-gold hover:text-charcoal px-6 py-3 text-sm no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                <Bell size={15} />
                Get Alerts for New Douglas County Homes
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          2. LIVING IN DOUGLAS COUNTY
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Living in Douglas County
          </h2>
          <p className="text-charcoal/70 leading-relaxed mb-6">
            Douglas County is located south of Denver along the I-25 corridor and includes a range of communities with different housing types and community characters. Parker is the county's largest incorporated city. The county spans from the Denver metro edge into more rural terrain to the south and east. Buyers should research specific communities and neighborhoods to find what aligns with their priorities.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: BookOpen, label: "Established Communities" },
              { icon: Building2, label: "Denver Metro South" },
              { icon: Compass, label: "I-25 Corridor" },
              { icon: Trees, label: "Open Space Access" },
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
          3. WHY PEOPLE CHOOSE DOUGLAS COUNTY
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-charcoal/3">
        <div className="container max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Why People Choose Douglas County
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { title: "Parker and Surrounding Communities", body: "Parker is Douglas County's largest city and offers a range of established neighborhoods and newer developments. The broader county includes other communities with different characteristics and price points. Buyers should research individual areas to find the best fit." },
              { title: "Douglas County School District", body: "Douglas County is primarily served by Douglas County School District RE-1. Buyers should independently research specific schools, boundaries, and district information to understand what matters most for their family." },
              { title: "Housing Variety", body: "Douglas County offers a range of housing options from newer construction communities to established single-family neighborhoods. Price points and housing styles vary by community. Buyers should research specific areas to understand what's available at their budget." },
              { title: "Denver Metro Access", body: "Douglas County's location along the I-25 corridor provides access to the broader Denver metro area. Buyers should independently research commute routes and conditions relevant to their specific situation." },
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
          4. RELOCATING TO DOUGLAS COUNTY
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Relocating to Douglas County
          </h2>
          <p className="text-charcoal/70 leading-relaxed mb-5">
            Relocating to Douglas County from another state involves more than finding the right home. Understanding the market, communities, and buying process from a distance requires a clear strategy.
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
          5. DOUGLAS COUNTY REAL ESTATE MARKET OVERVIEW
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-charcoal/3">
        <div className="container max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Douglas County Real Estate Market Overview
          </h2>
          <p className="text-charcoal/70 leading-relaxed mb-5">
            The Douglas County real estate market varies by community, price range, and season. Buyers should research current conditions and work with an agent familiar with local market dynamics to understand what to expect.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: TrendingUp, label: "Market Conditions", body: "Douglas County market conditions shift over time. Preparation, research, and working with a knowledgeable agent can help buyers navigate the process." },
              { icon: HomeIcon, label: "Price Ranges", body: "Douglas County offers options from townhomes to larger single-family homes across a range of price points and community settings." },
              { icon: Users, label: "Buyer Considerations", body: "Well-priced homes in desirable areas can move quickly. Strategy, preparation, and understanding community-specific dynamics are important for buyers." },
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
          6. DOUGLAS COUNTY COMMUNITIES
      ═══════════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════════
          7. DOUGLAS COUNTY PROPERTY TYPES
      ═══════════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════════
          8. DOUGLAS COUNTY VS OTHER COLORADO AREAS
      ═══════════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════════
          9. DOUGLAS COUNTY HOME BUYING RESOURCES
      ═══════════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════════
          10. BROWSE DOUGLAS COUNTY HOMES BY PRICE
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-2"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Browse Douglas County Homes by Price
          </h2>
          <p className="text-charcoal/60 text-sm mb-6">
            Price range browsing will be available here. Contact Rob to discuss what fits your budget.
          </p>
          <div className="bg-white border border-charcoal/10 rounded-lg p-6 text-center">
            <p className="text-sm text-charcoal/60 mb-4">
              Looking for homes in a specific price range? Rob can help you understand what's available and what to expect at each price point in the Douglas County market.
            </p>
            <a
              href="mailto:rob@myrockhomes.com?subject=Douglas County Homes — Price Range Question"
              className="inline-flex items-center gap-2 text-gold font-semibold text-sm hover:underline"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <Mail size={14} />
              Ask About Douglas County Home Prices
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          11. DOUGLAS COUNTY REAL ESTATE FAQs
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Douglas County Real Estate FAQs
          </h2>
          <div className="bg-white border border-charcoal/8 rounded-xl px-6 py-2">
            {faqContent.map((item) => (
              <FAQItem key={item.question} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          12. FINAL CTA
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl mx-auto text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold text-cream mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Ready to Explore Douglas County Homes?
          </h2>
          <p className="text-cream/70 text-base leading-relaxed mb-8">
            Rob Baker works with Colorado buyers, sellers, and relocating families. Schedule a consultation to discuss your goals and get a clear plan for the Douglas County market.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:rob@myrockhomes.com?subject=Douglas County Home Buying Consultation"
              className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 bg-gold text-charcoal hover:bg-gold-light hover:shadow-lg px-7 py-4 text-[15px] sm:text-base no-underline"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <Calendar size={16} />
              Schedule a Home Buying Consultation
            </a>
            <a
              href="mailto:rob@myrockhomes.com?subject=New Douglas County Listings — Browse Request"
              className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-gold text-gold hover:bg-gold hover:text-charcoal px-6 py-3 text-sm no-underline"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Browse New Douglas County Listings
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
