/**
 * Pueblo County Home Search — Coming Soon | My Rock Realty
 * Informational county-level page — Pueblo County home search coverage is being prepared
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
  MapPin,
  CheckCircle2,
  Phone,
  Mail,
  ChevronDown,
  Clock,
  MessageSquare,
} from "lucide-react";

/* Hero Background Image — Approved asset */
const DENVER_HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/denver-rowhouses-hero_2f59d4ac.jpg";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "Is Pueblo County home search available on this site yet?",
    answer:
      "Not yet. My Rock Realty's current coverage is focused on the Denver metro and Front Range. Pueblo County buyer resources are being prepared, but full search tools are not live. Buyers interested in Pueblo County right now can reach out directly — Rob can discuss current options and connect you with appropriate resources for the area.",
  },
  {
    question: "Can I still get help with a Pueblo County home search before coverage is live?",
    answer:
      "Yes. Reaching out directly is the best path. Rob can discuss your situation, explain what's currently available, and help connect you with resources suited to the Pueblo County market. You don't need to wait for the search tools to go live to start a conversation.",
  },
  {
    question: "What is Pueblo County like for buyers considering southern Colorado?",
    answer:
      "Pueblo County is located in southern Colorado along the Arkansas River, approximately 100 miles south of Denver. The county includes the city of Pueblo as well as surrounding rural and semi-rural areas, agricultural land, and properties along the Arkansas River corridor. Buyers may find a range of housing types and price points that differ significantly from the Denver metro and northern Front Range. Buyers should research current market conditions independently.",
  },
  {
    question: "What types of areas does Pueblo County include?",
    answer:
      "Pueblo County includes the city of Pueblo, unincorporated rural communities, agricultural land areas, and properties along the Arkansas River corridor. The county offers a mix of urban, suburban, and rural settings. Buyers should research specific areas within the county that align with their priorities — the county is geographically large and varies considerably from one area to the next.",
  },
  {
    question: "What should buyers know before researching Pueblo County real estate?",
    answer:
      "Buyers should independently research neighborhoods, schools, commute distances, local amenities, and current market conditions before making decisions about Pueblo County. Market conditions here may differ significantly from Denver metro and northern Colorado. For rural or agricultural properties, additional due diligence around water rights, zoning, and access is often warranted. Working with a knowledgeable local agent is particularly important in this market.",
  },
];

/* ─── Build FAQ Schema ─── */
const faqSchema = buildFAQPageSchema(faqContent);

/* ─── Breadcrumb Items ─── */
const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Pueblo County Home Search — Coming Soon", url: "/pueblo-county-home-search-coming-soon" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function CTAButton({
  label = "Contact Us About Pueblo County",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a
      href="mailto:rob@myrockhomes.com?subject=Pueblo County Home Search Inquiry"
      className={`inline-flex items-center gap-2 bg-[#C9A96E] hover:bg-[#b8944f] text-[#292524] font-semibold px-6 py-3 rounded-lg transition-colors duration-200 ${className}`}
    >
      {label}
      <ArrowRight className="w-4 h-4" />
    </a>
  );
}

export default function PuebloCountyHomeSearchComingSoon() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SeoHead
        metadata={{
          title: "Pueblo County Home Search — Coming Soon | My Rock Realty",
          description: "Pueblo County home search coverage is being prepared. Learn about the Pueblo County area, connect with a local buyer resource, and reach out directly for current assistance.",
          canonicalUrl: "https://myrockhomes.com/pueblo-county-home-search-coming-soon",
          breadcrumbs: breadcrumbItems,
          robots: { index: false, follow: false },
        }}
        schema={[faqSchema]}
        />

      {/* ─── Hero ─── */}
      <div
        className="relative bg-[#292524] text-[#F5F0EB] overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(41,37,36,0.78), rgba(41,37,36,0.82)), url(${DENVER_HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">
          <Breadcrumbs items={breadcrumbItems} />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6"
          >
            <div className="inline-flex items-center gap-2 bg-[#C9A96E]/20 border border-[#C9A96E]/40 text-[#C9A96E] text-sm font-medium px-4 py-1.5 rounded-full mb-4">
              <Clock className="w-4 h-4" />
              Search Coverage Coming Soon
            </div>
            <h1 className="font-['Outfit'] text-3xl md:text-5xl font-bold text-[#F5F0EB] leading-tight mb-4">
              Pueblo County Home Search
            </h1>
            <p className="text-[#F5F0EB]/80 text-lg md:text-xl max-w-2xl mb-3 font-['Libre_Franklin']">
              My Rock Realty's current coverage is focused on the Denver metro and Front Range. Pueblo County buyer resources are being prepared — but if you're looking now, reaching out directly is the fastest path to help.
            </p>
            <p className="text-[#F5F0EB]/60 text-base max-w-xl mb-8 font-['Libre_Franklin']">
              Rob can discuss your situation, explain what's available, and connect you with the right resources for the Pueblo County market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton label="Reach Out About Pueblo County" />
              <a
                href="tel:7203636544"
                className="inline-flex items-center gap-2 border border-[#F5F0EB]/40 hover:border-[#C9A96E] text-[#F5F0EB] hover:text-[#C9A96E] font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                Call Rob Baker
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ─── What You Can Do Right Now ─── */}
      <section className="bg-[#F5F0EB] py-12">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-['Outfit'] text-2xl md:text-3xl font-bold text-[#292524] mb-6">
              What You Can Do Right Now
            </h2>
            <p className="text-[#292524]/70 font-['Libre_Franklin'] leading-relaxed mb-8">
              Full Pueblo County search tools aren't live yet, but you don't have to wait. Here are the most useful next steps for buyers interested in the area:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <MessageSquare className="w-6 h-6 text-[#C9A96E]" />,
                  title: "Reach Out Directly",
                  desc: "Contact Rob to discuss your situation. He can explain what's currently available and help connect you with the right resources for the Pueblo County market.",
                  cta: { label: "Email Rob", href: "mailto:rob@myrockhomes.com?subject=Pueblo County Home Search Inquiry" },
                },
                {
                  icon: <Phone className="w-6 h-6 text-[#C9A96E]" />,
                  title: "Call to Talk Through Options",
                  desc: "A quick call is often the fastest way to understand what's available and whether Rob can help directly or connect you with a Pueblo-area specialist.",
                  cta: { label: "(720) 363-6544", href: "tel:7203636544" },
                },
                {
                  icon: <MapPin className="w-6 h-6 text-[#C9A96E]" />,
                  title: "Also Looking in Pueblo City?",
                  desc: "If you're focused on the city of Pueblo specifically, the city-level coming-soon page has additional context.",
                  cta: { label: "Pueblo City Page", href: "/pueblo-home-search-coming-soon" },
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-[#C9A96E]/15 shadow-sm">
                  <div className="mb-3">{item.icon}</div>
                  <h3 className="font-['Outfit'] font-semibold text-[#292524] mb-2">{item.title}</h3>
                  <p className="text-[#292524]/65 text-sm font-['Libre_Franklin'] leading-relaxed mb-4">{item.desc}</p>
                  <a
                    href={item.cta.href}
                    className="inline-flex items-center gap-1.5 text-[#C9A96E] hover:text-[#b8944f] text-sm font-semibold font-['Libre_Franklin'] transition-colors"
                  >
                    {item.cta.label}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── About Pueblo County ─── */}
      <section className="bg-white py-14">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-['Outfit'] text-2xl md:text-3xl font-bold text-[#292524] mb-6">
              About Pueblo County
            </h2>
            <p className="text-[#292524]/70 font-['Libre_Franklin'] leading-relaxed mb-6">
              Pueblo County is located in southern Colorado along the Arkansas River, approximately 100 miles south of Denver. The county seat is the city of Pueblo, which is the largest city in the county and serves as a regional hub for southern Colorado. Beyond the city, the county includes a wide range of rural, semi-rural, and agricultural areas.
            </p>
            <p className="text-[#292524]/70 font-['Libre_Franklin'] leading-relaxed mb-6">
              Buyers considering Pueblo County may find housing options and price points that differ significantly from the Denver metro and northern Front Range. The local real estate market has its own dynamics — buyers should research current conditions independently and work with agents who have direct knowledge of the area.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                {
                  icon: <MapPin className="w-6 h-6 text-[#C9A96E]" />,
                  title: "Southern Colorado Location",
                  desc: "Located approximately 100 miles south of Denver along the Arkansas River corridor. County seat: the city of Pueblo.",
                },
                {
                  icon: <CheckCircle2 className="w-6 h-6 text-[#C9A96E]" />,
                  title: "Urban, Suburban, and Rural",
                  desc: "The county includes city neighborhoods, suburban areas, rural communities, and agricultural land — a wide range of property types.",
                },
                {
                  icon: <MapPin className="w-6 h-6 text-[#C9A96E]" />,
                  title: "Distinct Market",
                  desc: "Pueblo County is a meaningfully different market from Denver and Colorado Springs — price points, pace, and character vary considerably.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-[#F5F0EB] rounded-xl p-6">
                  <div className="mb-3">{item.icon}</div>
                  <h3 className="font-['Outfit'] font-semibold text-[#292524] mb-2">{item.title}</h3>
                  <p className="text-[#292524]/65 text-sm font-['Libre_Franklin'] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Buyer Guidance ─── */}
      <section className="bg-[#F5F0EB] py-14">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-['Outfit'] text-2xl md:text-3xl font-bold text-[#292524] mb-6">
              What Buyers Should Know
            </h2>
            <p className="text-[#292524]/70 font-['Libre_Franklin'] leading-relaxed mb-6">
              Buyers researching Pueblo County real estate should consider the following before making decisions:
            </p>
            <ul className="space-y-4">
              {[
                "Pueblo County is a distinct market from Denver and Colorado Springs — research current conditions independently rather than assuming they mirror other Colorado markets.",
                "Research specific neighborhoods, schools, commute distances, and community factors that matter to your situation before narrowing your search.",
                "For rural or agricultural properties, additional due diligence around water rights, zoning, and road access is often warranted.",
                "Review individual property conditions, lot characteristics, and neighborhood context carefully.",
                "Work with an agent who has direct knowledge of the Pueblo County market — local expertise is particularly important in a market this distinct from the Front Range.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C9A96E] flex-shrink-0 mt-0.5" />
                  <span className="text-[#292524]/70 font-['Libre_Franklin'] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-white py-14">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-['Outfit'] text-2xl md:text-3xl font-bold text-[#292524] mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqContent.map((faq, i) => (
                <div
                  key={i}
                  className="bg-[#F5F0EB] rounded-xl border border-[#C9A96E]/20 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left"
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-['Outfit'] font-semibold text-[#292524] pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#C9A96E] flex-shrink-0 transition-transform duration-200 ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5">
                      <p className="text-[#292524]/70 font-['Libre_Franklin'] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="bg-[#292524] text-[#F5F0EB] py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-['Outfit'] text-2xl md:text-3xl font-bold text-[#F5F0EB] mb-4">
              Interested in Pueblo County? Let's Talk.
            </h2>
            <p className="text-[#F5F0EB]/70 font-['Libre_Franklin'] leading-relaxed mb-8 max-w-xl mx-auto">
              Full search coverage is coming. In the meantime, reaching out directly is the fastest way to understand your options and get pointed in the right direction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton label="Email Rob About Pueblo County" />
              <a
                href="tel:7203636544"
                className="inline-flex items-center justify-center gap-2 border border-[#F5F0EB]/30 hover:border-[#C9A96E] text-[#F5F0EB] hover:text-[#C9A96E] font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                (720) 363-6544
              </a>
            </div>
            <p className="text-[#F5F0EB]/40 text-sm font-['Libre_Franklin'] mt-6">
              My Rock Realty, LLC · Colorado Real Estate License ER100078487
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
