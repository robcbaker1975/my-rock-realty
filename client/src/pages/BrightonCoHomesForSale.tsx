/**
 * Brighton CO Homes for Sale — My Rock Realty
 * Adams County cluster suburb spoke page — focused suburb page for Brighton search intent
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
/* Hero Background Image — Approved Denver metro aerial view */
const DENVER_HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/denver-rowhouses-hero_2f59d4ac.jpg";
/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "What is Brighton known for in the Adams County area?",
    answer:
      "Brighton is the county seat of Adams County, located northeast of Denver along the South Platte River. It is a distinct municipality with its own city government, community character, and housing stock. Brighton has a mix of established neighborhoods and newer residential development.",
  },
  {
    question: "What types of homes can buyers find in Brighton?",
    answer:
      "Buyers may find a range of housing options in Brighton, including single-family homes in established neighborhoods, newer construction communities, townhomes, and options across a variety of price ranges. The city has a mix of older and newer residential areas.",
  },
  {
    question: "Why do buyers consider Brighton when searching in Adams County?",
    answer:
      "Buyers often consider Brighton for its position as the Adams County seat, its location along the South Platte River, and housing options that may differ in price point and character from other Adams County communities. Brighton is a separate city with its own community identity while remaining connected to the broader Denver metro.",
  },
  {
    question: "How far is Brighton from Denver?",
    answer:
      "Brighton is located approximately 30 miles northeast of downtown Denver. Commute times can vary depending on traffic, route, and time of day. Buyers should research specific commute considerations based on their employment location and preferred travel routes.",
  },
  {
    question: "What should buyers pay attention to when considering homes in Brighton?",
    answer:
      "Buyers should pay attention to neighborhood location, home condition, proximity to Denver and other Front Range communities, lot characteristics, and how individual properties compare within the area. Buyers should independently research schools, commute options, and other community factors important to them.",
  },
];
/* ─── Build FAQ Schema ─── */
const faqSchema = buildFAQPageSchema(faqContent);
/* ─── Breadcrumb Items ─── */
const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Adams County, CO Homes for Sale", url: "/adams-co-homes-for-sale" },
  { label: "Brighton CO Homes for Sale", url: "/brighton-co-homes-for-sale" },
];
/* ─── Reusable LinkCard ─── */
function LinkCard({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="flex items-center justify-between px-4 py-3 bg-cream border border-gold/30 rounded hover:bg-gold/10 transition-colors group"
    >
      <span className="text-charcoal font-medium text-sm">{label}</span>
      <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
    </a>
  );
}
/* ─── FAQ Accordion Item ─── */
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gold/20 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-[15px] sm:text-base font-semibold text-charcoal leading-snug">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gold flex-shrink-0 mt-0.5 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="pb-5 px-1 text-charcoal/70 text-sm leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}
/* ═══════════════════════════════════════════════════
   PAGE COMPONENT
═══════════════════════════════════════════════════ */
export default function BrightonCoHomesForSale() {
  return (
    <div className="min-h-screen bg-cream font-body">
      {/* ── SEO Head ── */}
      <SeoHead
        metadata={{
          title: "Brighton CO Homes for Sale | My Rock Realty",
          description: "Explore homes for sale in Brighton, CO — the Adams County seat. Browse housing options, buyer guidance, and local context for Brighton real estate.",
          canonicalUrl: "https://myrockhomes.com/brighton-co-homes-for-sale",
        }}
        schema={faqSchema ? [faqSchema] : []}
      />

      {/* ── Breadcrumbs ── */}
      <div className="bg-charcoal/5 border-b border-gold/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-2">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* ── Hero ── */}
      <section
        className="relative min-h-[340px] sm:min-h-[420px] flex items-end"
        style={{
          backgroundImage: `url(${DENVER_HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pb-10 pt-20 w-full">
          <div className="flex items-center gap-2 text-gold text-sm font-medium mb-3">
            <MapPin className="w-4 h-4" />
            <span>Adams County, Colorado</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-cream mt-4 leading-tight font-display">
            Brighton CO Homes for Sale
          </h1>
          <p className="text-cream/80 mt-4 text-lg max-w-2xl">
            Brighton is the county seat of Adams County, located northeast of Denver along the South Platte River. Explore housing options and buyer guidance for Brighton real estate.
          </p>
        </div>
      </section>

      {/* ── Intro Section ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal font-display mb-4">
            About Brighton, Colorado
          </h2>
          <p className="text-charcoal/70 leading-relaxed mb-4">
            Brighton is the county seat of Adams County, situated northeast of Denver along the South Platte River. As a distinct municipality, Brighton has its own city government, community character, and housing stock. The city has experienced residential growth over the years and offers a mix of established neighborhoods and newer development areas.
          </p>
          <p className="text-charcoal/70 leading-relaxed mb-4">
            Buyers considering Brighton may find housing options that differ in price point and character from closer-in Denver suburbs. Brighton is connected to the broader Denver metro area via major transportation corridors, though buyers should research specific commute considerations based on their employment location.
          </p>
          <p className="text-charcoal/70 leading-relaxed">
            As with any community, buyers are encouraged to research neighborhoods, home conditions, and local factors independently before making purchasing decisions. Information on this page is provided for general orientation only and is not guaranteed to be current or complete.
          </p>
        </motion.div>
      </section>

      {/* ── Buyer Guidance ── */}
      <section className="bg-charcoal/5 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal font-display mb-8">
            Buyer Guidance for Brighton
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: <Home className="w-5 h-5 text-gold" />,
                title: "Housing Mix",
                body: "Brighton offers a range of housing types, including single-family homes in established neighborhoods, newer construction communities, and townhomes across various price ranges.",
              },
              {
                icon: <MapPin className="w-5 h-5 text-gold" />,
                title: "Location Context",
                body: "Brighton is located approximately 30 miles northeast of downtown Denver, along the South Platte River. Buyers should research commute options and proximity to employment centers.",
              },
              {
                icon: <CheckCircle2 className="w-5 h-5 text-gold" />,
                title: "County Seat",
                body: "As the Adams County seat, Brighton is home to county government offices and civic services. Buyers may find this relevant when considering proximity to county-level resources.",
              },
              {
                icon: <ArrowRight className="w-5 h-5 text-gold" />,
                title: "Research Independently",
                body: "Buyers should independently research schools, neighborhood conditions, commute times, and other factors that matter to them. Market conditions can change and are not guaranteed.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-cream p-5 border border-gold/20"
              >
                <div className="flex items-center gap-3 mb-2">
                  {item.icon}
                  <h3 className="font-semibold text-charcoal">{item.title}</h3>
                </div>
                <p className="text-charcoal/65 text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Adams County Communities ── */}
      {/* ── FAQ ── */}
      <section className="bg-charcoal/5 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal font-display mb-8">
            Frequently Asked Questions — Brighton CO
          </h2>
          <div className="bg-cream border border-gold/20 rounded px-4 sm:px-6">
            {faqContent.map((item, i) => (
              <FAQItem key={i} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-charcoal text-cream p-8 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold font-display mb-3">
            Interested in Brighton Homes?
          </h2>
          <p className="text-cream/75 mb-6 max-w-xl">
            Rob Baker and the My Rock Realty team can help you navigate the Brighton and Adams County market. Reach out to start a conversation about your home search.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+17203577604"
              className="inline-flex items-center gap-2 bg-gold text-charcoal font-semibold px-6 py-3 hover:bg-gold/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              (720) 357-7604
            </a>
            <a
              href="mailto:rob@myrockhomes.com"
              className="inline-flex items-center gap-2 border border-cream/30 text-cream px-6 py-3 hover:bg-cream/10 transition-colors"
            >
              <Mail className="w-4 h-4" />
              rob@myrockhomes.com
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer Disclaimer ── */}
      <footer className="border-t border-gold/20 bg-charcoal/5 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center text-xs text-charcoal/50 leading-relaxed">
          <p>
            My Rock Realty | Rob Baker, Colorado Real Estate Broker |{" "}
            <a href="tel:+17203577604" className="underline hover:text-charcoal/70">
              (720) 357-7604
            </a>{" "}
            |{" "}
            <a href="mailto:rob@myrockhomes.com" className="underline hover:text-charcoal/70">
              rob@myrockhomes.com
            </a>
          </p>
          <p className="mt-2">
            Information provided on this page is for general informational purposes only and is not guaranteed to be accurate, current, or complete. Market conditions, availability, and community characteristics change over time. Buyers should independently verify all information relevant to their home search and consult with a licensed real estate professional before making any purchasing decisions.
          </p>
          <p className="mt-2">
            <a href="/fair-housing" className="underline hover:text-charcoal/70">
              Fair Housing Notice
            </a>{" "}
            |{" "}
            <a href="/privacy" className="underline hover:text-charcoal/70">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="/accessibility" className="underline hover:text-charcoal/70">
              Accessibility
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
