/**
 * Adams County Homes for Sale — Hub Page
 * Adams County SEO cluster
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
  Compass,
  BookOpen,
  Bell,
  Calendar,
} from "lucide-react";

/* Hero Background Image — Approved asset */
const ADAMS_HERO_BG = "/images/denver-rowhouses-hero.jpg";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "What are the most popular areas for buying a home in Adams County?",
    answer:
      "Adams County includes a range of communities with different housing types, price points, and community characters. Commerce City is one of the county's primary cities, and buyers often explore communities across the county when evaluating options. Buyers should research individual communities and neighborhoods to find the best fit for their needs and priorities.",
  },
  {
    question: "What types of homes are available in Adams County?",
    answer:
      "Adams County offers a variety of housing options including single-family homes, townhomes, and newer construction communities. Price ranges and housing styles vary significantly by community and neighborhood. Buyers should research specific areas to understand what's available at their budget.",
  },
  {
    question: "How does Adams County compare to other Denver metro areas?",
    answer:
      "Adams County is located northeast of Denver and offers a different community character and market dynamic than the city itself. Buyers often compare Adams County communities to other Denver metro suburbs when evaluating options. Buyers should research current conditions in each area to make an informed comparison.",
  },
  {
    question: "Is Adams County a competitive real estate market?",
    answer:
      "Market conditions in Adams County vary by community, price range, and season. Inventory levels and demand shift over time, so buyers should research current conditions and work with an agent familiar with the local market to understand what to expect.",
  },
  {
    question: "What should I know about Adams County school districts?",
    answer:
      "Adams County is served by several school districts depending on the specific community. Buyers should independently research specific schools, boundaries, and district information to understand what matters most for their family.",
  },
  {
    question: "Where should I start if I want to buy a home in Adams County?",
    answer:
      "A good starting point is understanding your budget, getting pre-approved, and learning about the different communities within Adams County. Working with an agent familiar with the Adams County market can help you navigate the process and understand neighborhood-specific dynamics.",
  },
  {
    question: "What is the commute like from Adams County to Denver?",
    answer:
      "Adams County is located northeast of Denver. Commute times and conditions vary depending on the specific community, destination, and time of day. Buyers should independently research commute routes and conditions that are relevant to their situation.",
  },
  {
    question: "Are there new construction homes available in Adams County?",
    answer:
      "New construction activity in Adams County varies by community and market conditions. Buyers interested in new construction should research current builder activity and available communities. Working with an agent familiar with the local market can help identify new construction options.",
  },
  {
    question: "What are the main differences between Adams County communities?",
    answer:
      "Adams County communities vary in character, price point, and proximity to Denver. Commerce City is one of the county's primary cities, while other communities offer different characteristics. Buyers should research individual communities to find the best fit for their priorities.",
  },
  {
    question: "How do I get started buying a home in Adams County?",
    answer:
      "Getting pre-approved for a mortgage is often a practical first step. From there, working with an agent who knows Adams County can help you understand current inventory, pricing, and the buying process in the communities you're considering.",
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
export default function AdamsCoHomesForSale() {
  useEffect(() => {
    document.title = "Adams County Homes for Sale | My Rock Realty";
  }, []);

  const seoData = {
    title: "Adams County Homes for Sale | My Rock Realty",
    description:
      "Explore homes for sale in Adams County, Colorado. Practical buyer guidance for Commerce City and communities across the northeast Denver metro area.",
    canonicalUrl: "https://www.myrockhomes.com/adams-co-homes-for-sale",
    structuredData: buildFAQPageSchema(faqContent),
  };

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Adams County Homes for Sale", href: "/adams-co-homes-for-sale" },
  ];

  return (
    <>
      <SeoHead
        metadata={{
          title: "Adams County Homes for Sale | My Rock Realty",
          description: "Explore homes for sale in Adams County, Colorado. Practical buyer guidance for Commerce City and communities across the northeast Denver metro area.",
          canonicalUrl: "https://www.myrockhomes.com/adams-co-homes-for-sale",
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
            backgroundImage: `url('${ADAMS_HERO_BG}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "420px",
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
              Adams County Homes for Sale
            </h1>
            <p
              className="mt-4 text-cream/85 text-lg max-w-2xl leading-relaxed"
              style={{ fontFamily: "'Libre Franklin', sans-serif" }}
            >
              Practical buyer guidance for Adams County, Colorado — northeast Denver metro.
            </p>
          </div>
        </section>

        {/* ── County Overview ── */}
        <section className="max-w-4xl mx-auto px-6 py-14">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            About Adams County
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <p className="text-charcoal/75 leading-relaxed mb-4">
                Adams County is located northeast of Denver and is one of the original counties
                established in Colorado. The county encompasses a range of communities with
                different housing types, price points, and proximity to the Denver metro core.
              </p>
              <p className="text-charcoal/75 leading-relaxed">
                Buyers exploring Adams County often consider communities like Commerce City, Brighton,
                and Thornton as part of their search. Each community has its own character and
                market dynamics that buyers should research independently.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  icon: <MapPin size={18} className="text-gold" />,
                  label: "Location",
                  value: "Northeast of Denver along I-76 and I-270 corridors",
                },
                {
                  icon: <Building2 size={18} className="text-gold" />,
                  label: "County Seat",
                  value: "Brighton, Colorado",
                },
                {
                  icon: <Globe size={18} className="text-gold" />,
                  label: "Primary Cities",
                  value: "Commerce City, Brighton, Thornton, Westminster (partial)",
                },
                {
                  icon: <HomeIcon size={18} className="text-gold" />,
                  label: "Housing Types",
                  value: "Single-family, townhomes, new construction",
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

        {/* ── Communities ── */}
        {/* ── Buyer Guidance ── */}
        <section className="max-w-4xl mx-auto px-6 py-14">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Buying a Home in Adams County
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: <BookOpen size={22} className="text-gold" />,
                title: "Research Communities",
                body: "Adams County includes communities with different price points, housing types, and proximity to Denver. Buyers should research individual communities to understand what fits their priorities.",
              },
              {
                icon: <TrendingUp size={22} className="text-gold" />,
                title: "Understand Market Conditions",
                body: "Market conditions in Adams County vary by community and season. Buyers should work with an agent familiar with the local market to understand current inventory and pricing.",
              },
              {
                icon: <Users size={22} className="text-gold" />,
                title: "Work with a Local Agent",
                body: "An agent who knows Adams County can help you navigate the buying process, understand neighborhood-specific dynamics, and identify properties that match your needs.",
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
        </section>

        {/* ── Local Context ── */}
        <section className="bg-white py-14">
          <div className="max-w-4xl mx-auto px-6">
            <h2
              className="text-2xl sm:text-3xl font-bold text-charcoal mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Adams County at a Glance
            </h2>
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <p className="text-charcoal/75 leading-relaxed mb-4">
                  Adams County is served by several school districts depending on the specific
                  community. Buyers should independently research school boundaries and district
                  information relevant to their family's needs.
                </p>
                <p className="text-charcoal/75 leading-relaxed">
                  The county has seen development activity in recent years, with new construction
                  available in some communities. Buyers interested in new construction should
                  research current builder activity and available communities.
                </p>
              </div>
              <div>
                <p className="text-charcoal/75 leading-relaxed mb-4">
                  Adams County is connected to Denver via I-76, I-270, and other major corridors.
                  Commute times and conditions vary by community and destination. Buyers should
                  independently research commute routes relevant to their situation.
                </p>
                <p className="text-charcoal/75 leading-relaxed">
                  The Rocky Mountain Arsenal National Wildlife Refuge is located within Adams County
                  and serves as a notable civic and natural landmark in the area.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Buyer Steps ── */}
        <section className="max-w-4xl mx-auto px-6 py-14">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Steps to Buying in Adams County
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "01",
                title: "Define Your Priorities",
                body: "Consider your budget, commute needs, housing type preferences, and which Adams County communities align with your priorities.",
              },
              {
                step: "02",
                title: "Get Pre-Approved",
                body: "A mortgage pre-approval helps you understand your buying power and signals to sellers that you're a serious buyer.",
              },
              {
                step: "03",
                title: "Research Communities",
                body: "Adams County includes communities with different characters and price points. Research individual areas to find the right fit.",
              },
              {
                step: "04",
                title: "Work with a Local Agent",
                body: "An agent familiar with Adams County can help you navigate the market, understand current conditions, and guide you through the offer and closing process.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-5 items-start">
                <span
                  className="text-2xl font-bold text-gold/40 shrink-0 w-10 text-right"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {item.step}
                </span>
                <div>
                  <h3
                    className="font-semibold text-charcoal mb-1"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-charcoal/65 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Related Resources ── */}
        {/* ── FAQ ── */}
        <section className="max-w-4xl mx-auto px-6 py-14">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Adams County Home Buying FAQ
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
              Ready to Explore Adams County?
            </h2>
            <p
              className="text-cream/70 mb-8 max-w-xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Libre Franklin', sans-serif" }}
            >
              Connect with a local agent who knows Adams County and the northeast Denver metro area.
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
                href="/commerce-city-homes-for-sale"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold border border-cream/30 text-cream hover:bg-cream/10 transition-colors"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Commerce City Homes
                <ArrowRight size={16} />
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
