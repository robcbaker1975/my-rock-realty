/**
 * Jefferson County, CO Homes for Sale — My Rock Realty
 * Primary Jefferson County authority hub page for the Jefferson County SEO cluster
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
const JEFFERSON_HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/denver-rowhouses-hero_2f59d4ac.jpg";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "What are the most popular areas for buying a home in Jefferson County?",
    answer:
      "Jefferson County includes a range of communities with different housing types, price points, and community characters. Golden is the county seat and a well-known starting point for buyers exploring the county. Lakewood, Arvada, and other communities offer additional options across a range of price points. Buyers should research individual communities and neighborhoods to find the best fit for their needs and priorities.",
  },
  {
    question: "What types of homes are available in Jefferson County?",
    answer:
      "Jefferson County offers a variety of housing options including single-family homes, townhomes, condos, and newer construction communities. Price ranges and housing styles vary significantly by community and neighborhood. Buyers should research specific areas to understand what is available at their budget.",
  },
  {
    question: "How does Jefferson County compare to other Denver metro areas?",
    answer:
      "Jefferson County is located west of Denver and offers a different community character and market dynamic than the city itself. The county includes communities at varying elevations and distances from Denver. Buyers often compare Jefferson County communities to other Denver metro options when evaluating location, price, and lifestyle fit. Buyers should research current conditions in each area to make an informed comparison.",
  },
  {
    question: "Is Jefferson County a competitive real estate market?",
    answer:
      "Market conditions in Jefferson County vary by community, price range, and season. Inventory levels and demand shift over time, so buyers should research current conditions and work with an agent familiar with the local market to understand what to expect.",
  },
  {
    question: "What should I know about Jefferson County school districts?",
    answer:
      "Jefferson County is primarily served by Jefferson County Public Schools (Jeffco). Buyers should independently research specific schools, boundaries, and district information to understand what matters most for their family.",
  },
  {
    question: "Where should I start if I want to buy a home in Jefferson County?",
    answer:
      "A good starting point is understanding your budget, getting pre-approved, and learning about the different communities within Jefferson County. Working with an agent familiar with the Jefferson County market can help you navigate the process and understand neighborhood-specific dynamics.",
  },
  {
    question: "What is the commute like from Jefferson County to Denver?",
    answer:
      "Jefferson County is located west of Denver and commute times vary significantly depending on the specific community, destination, and time of day. Communities closer to Denver's western edge may have different commute profiles than those further into the foothills. Buyers should independently research commute routes and conditions relevant to their situation.",
  },
  {
    question: "Are there new construction homes available in Jefferson County?",
    answer:
      "New construction activity in Jefferson County varies by community and market conditions. Buyers interested in new construction should research current builder activity and available communities. Working with an agent familiar with the local market can help identify new construction options.",
  },
  {
    question: "What are the main differences between Golden and other Jefferson County communities?",
    answer:
      "Golden is the county seat of Jefferson County and has a distinct historic downtown character. Other communities in the county such as Lakewood and Arvada offer different characteristics, price points, and proximity to Denver. Buyers should research individual communities to find the best fit for their priorities.",
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
  { label: "Jefferson County, CO Homes for Sale", url: "/jefferson-co-homes-for-sale" },
];

export default function JeffersonCoHomesForSale() {
  const faqSchema = buildFAQPageSchema(faqContent);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="hub-page min-h-screen bg-warm-white">
      <SeoHead
        metadata={{
          title: "Jefferson County, CO Homes for Sale | Jefferson County Real Estate",
          description:
            "Explore Jefferson County homes for sale, communities, property types, and local home buying resources for Golden and the broader Jefferson County area.",
          canonicalUrl: "https://myrockhomes.com/jefferson-co-homes-for-sale",
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
          1. HERO — Jefferson County Homes for Sale
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-charcoal overflow-hidden">
        <img
          src={JEFFERSON_HERO_BG}
          alt="Residential street in Jefferson County, Colorado"
          className="absolute inset-0 w-full h-full object-cover object-center"
        
          width="1600"
          height="900"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/90" />
        <div className="container relative z-10 py-14 sm:py-20 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
              <MapPin size={13} className="text-gold" />
              <span
                className="text-gold text-xs sm:text-sm font-semibold tracking-wide"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                JEFFERSON COUNTY · COLORADO
              </span>
            </div>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream leading-tight mb-5"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Jefferson County, CO Homes for Sale
            </h1>
            <p className="text-cream/80 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Explore Jefferson County communities, housing options, and buyer resources. Whether you're buying your first home, relocating, or exploring the Denver metro west corridor, this is your starting point.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:rob@myrockhomes.com?subject=Jefferson County Home Buying Consultation"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 bg-gold text-charcoal hover:bg-gold-light hover:shadow-lg px-7 py-4 text-[15px] sm:text-base no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                <Calendar size={16} />
                Schedule a Home Buying Consultation
              </a>
              <a
                href="mailto:rob@myrockhomes.com?subject=New Jefferson County Listings — Alert Request"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 bg-transparent border border-cream/40 text-cream hover:border-gold hover:text-gold px-7 py-4 text-[15px] sm:text-base no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                <Bell size={16} />
                Get Listing Alerts
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          2. COUNTY OVERVIEW
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-2"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            About Jefferson County
          </h2>
          <p className="text-charcoal/60 text-sm mb-6">
            Understanding the county before you buy.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <p className="text-charcoal/80 text-[15px] leading-relaxed mb-4">
                Jefferson County — often called "Jeffco" — is located west of Denver and is one of the most populated counties in Colorado. The county includes a range of communities from urban-adjacent neighborhoods to foothills towns, offering buyers a variety of options at different price points and distances from Denver.
              </p>
              <p className="text-charcoal/80 text-[15px] leading-relaxed">
                Golden serves as the county seat and is a well-known community with a historic downtown character. Other communities in the county include Lakewood, Arvada, and smaller foothills towns. Buyers should research individual communities to understand the differences in character, price, and location.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: MapPin, label: "County Seat", value: "Golden" },
                { icon: HomeIcon, label: "Housing Types", value: "Varied" },
                { icon: Globe, label: "Location", value: "West of Denver" },
                { icon: Users, label: "School District", value: "Jeffco Schools" },
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

      {/* ═══════════════════════════════════════════════════
          3. BUYER GUIDANCE
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-charcoal/3">
        <div className="container max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-2"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Buying a Home in Jefferson County
          </h2>
          <p className="text-charcoal/60 text-sm mb-8">
            Practical guidance for buyers exploring Jeffco.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                icon: Compass,
                title: "Understand the Geography",
                body: "Jefferson County spans a range of elevations and distances from Denver. Communities closer to the city have different characteristics than foothills towns. Buyers should research the specific areas they are considering to understand commute, elevation, and community character.",
              },
              {
                icon: BookOpen,
                title: "Research Communities Individually",
                body: "Golden, Lakewood, Arvada, and other Jeffco communities each have distinct neighborhood profiles, price ranges, and community characters. Buyers should research individual areas rather than treating the county as a single market.",
              },
              {
                icon: TrendingUp,
                title: "Understand Market Conditions",
                body: "Market conditions in Jefferson County vary by community, price range, and season. Buyers should research current inventory levels, days on market, and recent sales to understand what to expect in the specific area they are considering.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white border border-charcoal/8 rounded-lg p-5">
                <Icon size={20} className="text-gold mb-3" />
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

      {/* ═══════════════════════════════════════════════════
          4. MARKET CONTEXT
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-2"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Jefferson County Market Context
          </h2>
          <p className="text-charcoal/60 text-sm mb-8">
            What buyers should know about the Jeffco market.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Golden and the County Seat",
                body: "Golden is Jefferson County's county seat and has a distinct historic downtown character. The city is home to the Colorado School of Mines and has a range of housing options. Buyers interested in Golden should research specific neighborhoods and price points.",
              },
              {
                title: "Lakewood and Urban-Adjacent Options",
                body: "Lakewood is one of Jefferson County's largest cities and offers a range of housing options close to Denver. Buyers comparing Lakewood to other Denver metro options should research specific neighborhoods to understand price, character, and proximity differences.",
              },
              {
                title: "Foothills Communities",
                body: "Jefferson County includes several smaller foothills communities at varying elevations. These communities offer different characteristics than the more urban-adjacent parts of the county. Buyers should research specific foothills areas to understand what to expect.",
              },
              {
                title: "Jefferson County and Denver Metro Comparisons",
                body: "Jefferson County is located west of Denver and offers a different community character and market dynamic than the city itself. Buyers often compare Jefferson County communities to other Denver metro suburbs when evaluating options. Buyers should research current conditions in each area to make an informed comparison.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="border-l-2 border-gold/40 pl-5 py-1">
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

      {/* ═══════════════════════════════════════════════════
          5. BUYER FEATURES
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-charcoal/3">
        <div className="container max-w-4xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-2"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            What Buyers Often Consider in Jefferson County
          </h2>
          <p className="text-charcoal/60 text-sm mb-8">
            Common factors buyers research when exploring Jeffco.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: HomeIcon, label: "Housing Variety" },
              { icon: MapPin, label: "Proximity to Denver" },
              { icon: Trees, label: "Foothills Access" },
              { icon: Users, label: "Jeffco School District" },
              { icon: Building2, label: "Community Character" },
              { icon: Globe, label: "Elevation Considerations" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 bg-white border border-charcoal/8 rounded-lg px-4 py-3">
                <Icon size={16} className="text-gold shrink-0" />
                <span className="text-charcoal text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
          <p className="text-charcoal/50 text-xs mt-5">
            Buyers should independently research all factors relevant to their decision. Information above is for general orientation only.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          6. JEFFERSON COUNTY COMMUNITIES
      ═══════════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════════
          7. JEFFERSON COUNTY PROPERTY TYPES
      ═══════════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════════
          8. FAQ
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-2"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Jefferson County Home Buying FAQ
          </h2>
          <p className="text-charcoal/60 text-sm mb-8">
            Common questions from buyers exploring Jefferson County.
          </p>
          <div className="divide-y divide-charcoal/10 border-t border-charcoal/10">
            {faqContent.map((item) => (
              <FAQItem key={item.question} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          9. CTA
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-charcoal">
        <div className="container max-w-3xl mx-auto text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold text-cream mb-3"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Ready to Explore Jefferson County Homes?
          </h2>
          <p className="text-cream/70 text-[15px] mb-8 max-w-xl mx-auto">
            Connect with Rob Baker to discuss your Jefferson County home search, get listing alerts, or ask questions about the local market.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:rob@myrockhomes.com?subject=Jefferson County Home Buying Consultation"
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

      {/* ═══════════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════════ */}
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
