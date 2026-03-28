/**
 * Commerce City Homes for Sale — City Spoke Page
 * Adams County SEO cluster — Commerce City city spoke
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
  ChevronDown,
  Phone,
  Mail,
  Building2,
  BookOpen,
  TrendingUp,
  Users,
} from "lucide-react";

/* Hero Background Image — Approved asset */
const COMMERCE_CITY_HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/denver-rowhouses-hero_2f59d4ac.jpg";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "What types of homes are available in Commerce City?",
    answer:
      "Commerce City offers a range of housing options including single-family homes, townhomes, and newer construction communities. Price ranges and housing styles vary by neighborhood. Buyers should research specific areas to understand what's available at their budget.",
  },
  {
    question: "What is the commute like from Commerce City to Denver?",
    answer:
      "Commerce City is located northeast of Denver and is connected via I-270 and other corridors. Commute times vary depending on destination and time of day. Buyers should independently research commute routes and conditions relevant to their situation.",
  },
  {
    question: "Is Commerce City a competitive real estate market?",
    answer:
      "Market conditions in Commerce City vary by neighborhood, price range, and season. Inventory levels and demand shift over time, so buyers should research current conditions and work with an agent familiar with the local market to understand what to expect.",
  },
  {
    question: "What should I know about schools in Commerce City?",
    answer:
      "Commerce City is served by school districts that buyers should independently research. School boundaries and district information can change, so buyers should verify current details relevant to their family's needs.",
  },
  {
    question: "How do I get started buying a home in Commerce City?",
    answer:
      "Getting pre-approved for a mortgage is often a practical first step. From there, working with an agent who knows Commerce City and Adams County can help you understand current inventory, pricing, and the buying process in the neighborhoods you're considering.",
  },
  {
    question: "What are the neighborhoods like in Commerce City?",
    answer:
      "Commerce City includes a range of neighborhoods with different housing types and price points. Buyers should research individual neighborhoods to understand the character and market dynamics of specific areas.",
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
      {open && (
        <p
          className="pb-5 px-1 text-charcoal/70 text-sm leading-relaxed"
          style={{ fontFamily: "'Libre Franklin', sans-serif" }}
        >
          {answer}
        </p>
      )}
    </div>
  );
}

/* ─── Link Card ─── */
function LinkCard({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="flex items-center justify-between px-5 py-4 bg-cream border border-charcoal/10 rounded-lg hover:border-gold/60 hover:bg-gold/5 transition-colors group"
    >
      <span
        className="text-charcoal font-medium text-sm"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        {label}
      </span>
      <ArrowRight size={16} className="text-gold group-hover:translate-x-1 transition-transform" />
    </a>
  );
}

/* ─── Main Component ─── */
export default function CommerceCityHomesForSale() {
  useEffect(() => {
    document.title = "Commerce City Homes for Sale | My Rock Realty";
  }, []);

  const faqSchema = buildFAQPageSchema(faqContent);

  const breadcrumbItems = [
    { label: "Home", url: "/" },
    { label: "Adams County", url: "/adams-co-homes-for-sale" },
    { label: "Commerce City Homes for Sale", url: "/commerce-city-homes-for-sale" },
  ];

  // Legacy breadcrumbs array used by the Breadcrumbs component (href-based)
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Adams County", href: "/adams-co-homes-for-sale" },
    { label: "Commerce City Homes for Sale", href: "/commerce-city-homes-for-sale" },
  ];

  return (
    <>
      <SeoHead
        metadata={{
          title: "Commerce City Homes for Sale | My Rock Realty",
          description:
            "Explore homes for sale in Commerce City, Colorado. Practical buyer guidance for one of Adams County's primary cities in the northeast Denver metro area.",
          canonicalUrl: "https://myrockhomes.com/commerce-city-homes-for-sale",
          breadcrumbs: breadcrumbItems,
        }}
        schema={faqSchema ? [faqSchema] : []}
      />
      <div
        className="min-h-screen"
        style={{
          backgroundColor: "#F5F0EB",
          fontFamily: "'Libre Franklin', sans-serif",
          color: "#292524",
        }}
      >
        {/* ── Hero ── */}
        <section
          className="relative flex flex-col justify-end"
          style={{
            backgroundImage: `url('${COMMERCE_CITY_HERO_BG}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "380px",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(41,37,36,0.18) 0%, rgba(41,37,36,0.72) 100%)",
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto px-6 pb-12 pt-24 w-full">
            <Breadcrumbs items={breadcrumbs} />
            <h1
              className="text-4xl sm:text-5xl font-bold text-cream mt-4 leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Commerce City Homes for Sale
            </h1>
            <p
              className="mt-4 text-cream/85 text-lg max-w-2xl leading-relaxed"
              style={{ fontFamily: "'Libre Franklin', sans-serif" }}
            >
              Practical buyer guidance for Commerce City, Colorado — part of Adams County in the northeast Denver metro.
            </p>
          </div>
        </section>

        {/* ── Back to County Hub ── */}
        <div className="max-w-4xl mx-auto px-6 pt-8">
          <a
            href="/adams-co-homes-for-sale"
            className="inline-flex items-center gap-2 text-sm text-charcoal/60 hover:text-gold transition-colors"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <ArrowLeft size={14} />
            Back to Adams County
          </a>
        </div>

        {/* ── City Overview ── */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            About Commerce City
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <p className="text-charcoal/75 leading-relaxed mb-4">
                Commerce City is one of the primary cities in Adams County, located northeast of
                Denver. The city has seen development activity in recent years, with a range of
                housing options available across different neighborhoods.
              </p>
              <p className="text-charcoal/75 leading-relaxed">
                Buyers exploring Commerce City often compare it to other northeast Denver metro
                communities when evaluating options. Buyers should research current conditions and
                specific neighborhoods to understand what fits their priorities.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  icon: <MapPin size={18} className="text-gold" />,
                  label: "Location",
                  value: "Northeast of Denver, Adams County",
                },
                {
                  icon: <Building2 size={18} className="text-gold" />,
                  label: "County",
                  value: "Adams County, Colorado",
                },
                {
                  icon: <HomeIcon size={18} className="text-gold" />,
                  label: "Housing Types",
                  value: "Single-family, townhomes, new construction",
                },
                {
                  icon: <TrendingUp size={18} className="text-gold" />,
                  label: "Market",
                  value: "Buyers should research current conditions",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="mt-0.5">{item.icon}</span>
                  <div>
                    <p
                      className="text-xs font-semibold text-charcoal/50 uppercase tracking-wide"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {item.label}
                    </p>
                    <p className="text-charcoal/80 text-sm mt-0.5">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Buyer Guidance ── */}
        <section className="bg-white py-14">
          <div className="max-w-4xl mx-auto px-6">
            <h2
              className="text-2xl sm:text-3xl font-bold text-charcoal mb-8"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Buying a Home in Commerce City
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  icon: <BookOpen size={22} className="text-gold" />,
                  title: "Research Neighborhoods",
                  body: "Commerce City includes neighborhoods with different housing types and price points. Buyers should research individual areas to understand the character and market dynamics of specific neighborhoods.",
                },
                {
                  icon: <TrendingUp size={22} className="text-gold" />,
                  title: "Understand Market Conditions",
                  body: "Market conditions in Commerce City vary by neighborhood and season. Buyers should work with an agent familiar with the local market to understand current inventory and pricing.",
                },
                {
                  icon: <Users size={22} className="text-gold" />,
                  title: "Work with a Local Agent",
                  body: "An agent who knows Commerce City and Adams County can help you navigate the buying process and identify properties that match your needs and budget.",
                },
              ].map((card, i) => (
                <div key={i} className="bg-cream rounded-xl p-6 border border-charcoal/8">
                  <div className="mb-3">{card.icon}</div>
                  <h3
                    className="font-semibold text-charcoal mb-2"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-charcoal/65 text-sm leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Local Context ── */}
        <section className="max-w-4xl mx-auto px-6 py-14">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Commerce City at a Glance
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <p className="text-charcoal/75 leading-relaxed mb-4">
                Commerce City is connected to Denver via I-270 and other major corridors. Commute
                times and conditions vary by destination and time of day. Buyers should
                independently research commute routes relevant to their situation.
              </p>
              <p className="text-charcoal/75 leading-relaxed">
                The Rocky Mountain Arsenal National Wildlife Refuge is located adjacent to Commerce
                City and serves as a notable civic and natural landmark in the area.
              </p>
            </div>
            <div>
              <p className="text-charcoal/75 leading-relaxed mb-4">
                Commerce City is served by school districts that buyers should independently
                research. School boundaries and district information can change, so buyers should
                verify current details relevant to their family's needs.
              </p>
              <p className="text-charcoal/75 leading-relaxed">
                New construction activity may be available in some Commerce City neighborhoods.
                Buyers interested in new construction should research current builder activity and
                available communities.
              </p>
            </div>
          </div>
        </section>

        {/* ── Adams County Communities ── */}
        {/* ── FAQ ── */}
        <section className="max-w-4xl mx-auto px-6 py-14">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Commerce City Home Buying FAQ
          </h2>
          <div className="divide-y divide-charcoal/10 border-t border-charcoal/10">
            {faqContent.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="py-16"
          style={{ backgroundColor: "#292524" }}
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2
              className="text-3xl font-bold text-cream mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Ready to Explore Commerce City?
            </h2>
            <p
              className="text-cream/70 mb-8 max-w-xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Libre Franklin', sans-serif" }}
            >
              Connect with a local agent who knows Commerce City and the Adams County market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-charcoal transition-colors"
                style={{
                  backgroundColor: "#C9A96E",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                <Phone size={16} />
                Contact Rob Baker
              </a>
              <a
                href="/adams-co-homes-for-sale"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold border border-cream/30 text-cream hover:bg-cream/10 transition-colors"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                <ArrowLeft size={16} />
                Adams County Hub
              </a>
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer
          className="py-10 border-t border-charcoal/10"
          style={{ backgroundColor: "#F5F0EB" }}
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p
                  className="font-bold text-charcoal text-lg"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  My Rock Realty
                </p>
                <p className="text-charcoal/55 text-sm mt-1">
                  Rob Baker · Colorado Real Estate
                </p>
              </div>
              <div className="flex flex-col gap-1 text-sm text-charcoal/55">
                <a href="tel:+19706585793" className="flex items-center gap-2 hover:text-gold transition-colors">
                  <Phone size={14} /> (970) 658-5793
                </a>
                <a href="mailto:rob@myrockhomes.com" className="flex items-center gap-2 hover:text-gold transition-colors">
                  <Mail size={14} /> rob@myrockhomes.com
                </a>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-charcoal/10">
              <p className="text-xs text-charcoal/45 leading-relaxed">
                Information provided on this page is for general informational purposes only and is
                not guaranteed to be accurate, complete, or current. Market conditions, pricing,
                and availability change frequently. Buyers should independently verify all
                information and consult with a licensed real estate professional before making any
                real estate decisions. Rob Baker is a licensed Colorado real estate agent.
              </p>
              <div className="flex gap-4 mt-4 text-xs text-charcoal/45">
                <a href="/privacy" className="hover:text-gold transition-colors">Privacy</a>
                <a href="/terms" className="hover:text-gold transition-colors">Terms</a>
                <a href="/fair-housing" className="hover:text-gold transition-colors">Fair Housing</a>
                <a href="/accessibility" className="hover:text-gold transition-colors">Accessibility</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
