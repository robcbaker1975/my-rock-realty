/**
 * Pueblo Home Search — Coming Soon | My Rock Realty
 * Informational city-level page — Pueblo home search coverage is being prepared
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
    question: "Is Pueblo home search available on this site yet?",
    answer:
      "Not yet. My Rock Realty's current coverage is focused on the Denver metro and Front Range. We are preparing buyer resources for the Pueblo area, but full search tools are not live. Buyers interested in Pueblo right now can reach out directly — Rob can discuss current options and connect you with appropriate resources.",
  },
  {
    question: "Can I still get help buying in Pueblo before coverage is live?",
    answer:
      "Yes. Reaching out directly is the best path. Rob can discuss your situation, explain what's available, and help connect you with resources suited to the Pueblo market. You don't need to wait for the search tools to go live to start a conversation.",
  },
  {
    question: "What is the city of Pueblo like for buyers?",
    answer:
      "Pueblo is the largest city in southern Colorado and the county seat of Pueblo County. Located along the Arkansas River approximately 100 miles south of Denver, Pueblo has a distinct character as a regional hub for southern Colorado. The city includes a mix of established neighborhoods, suburban developments, and a range of housing types and price points. Buyers should research specific neighborhoods and current market conditions independently, as Pueblo differs meaningfully from Denver metro and northern Colorado markets.",
  },
  {
    question: "What neighborhoods exist in Pueblo?",
    answer:
      "Pueblo includes a variety of neighborhoods with different characters, ages, and housing types — from areas close to downtown to suburban and outlying settings. Buyers should research specific neighborhoods that align with their priorities, including proximity to employment, schools, and amenities. A local Pueblo agent can provide the most current neighborhood-level guidance.",
  },
  {
    question: "How does Pueblo compare to other Colorado markets?",
    answer:
      "Pueblo is a distinct market from Denver, Colorado Springs, Boulder, and northern Colorado. Price points, market pace, and community character can differ significantly. Buyers should research Pueblo independently rather than assuming conditions mirror other Colorado markets they may be familiar with.",
  },
];

/* ─── Build FAQ Schema ─── */
const faqSchema = buildFAQPageSchema(faqContent);

/* ─── Breadcrumb Items ─── */
const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Pueblo County Home Search — Coming Soon", url: "/pueblo-county-home-search-coming-soon" },
  { label: "Pueblo Home Search — Coming Soon", url: "/pueblo-home-search-coming-soon" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function CTAButton({
  label = "Contact Us About Pueblo",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a
      href="mailto:rob@myrockhomes.com?subject=Pueblo Home Search Inquiry"
      className={`inline-flex items-center gap-2 bg-[#C9A96E] hover:bg-[#b8944f] text-[#292524] font-semibold px-6 py-3 rounded-lg transition-colors duration-200 ${className}`}
    >
      {label}
      <ArrowRight className="w-4 h-4" />
    </a>
  );
}

export default function PuebloHomeSearchComingSoon() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SeoHead
        metadata={{
          title: "Pueblo Home Search — Coming Soon | My Rock Realty",
          description: "Pueblo home search coverage is being prepared. Learn about the city of Pueblo, connect with a local buyer resource, and reach out directly for current assistance.",
          canonicalUrl: "https://myrockhomes.com/pueblo-home-search-coming-soon",
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
              Pueblo Home Search
            </h1>
            <p className="text-[#F5F0EB]/80 text-lg md:text-xl max-w-2xl mb-3 font-['Libre_Franklin']">
              My Rock Realty's current coverage is focused on the Denver metro and Front Range. Pueblo buyer resources are being prepared — but if you're looking now, reaching out directly is the fastest path to help.
            </p>
            <p className="text-[#F5F0EB]/60 text-base max-w-xl mb-8 font-['Libre_Franklin']">
              Rob can discuss your situation, explain what's available, and connect you with the right resources for the Pueblo market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton label="Reach Out About Pueblo" />
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
              Full Pueblo search tools aren't live yet, but you don't have to wait. Here are the most useful next steps for buyers interested in the Pueblo area:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <MessageSquare className="w-6 h-6 text-[#C9A96E]" />,
                  title: "Reach Out Directly",
                  desc: "Contact Rob to discuss your situation. He can explain what's currently available and help connect you with the right resources for the Pueblo market.",
                  cta: { label: "Email Rob", href: "mailto:rob@myrockhomes.com?subject=Pueblo Home Search Inquiry" },
                },
                {
                  icon: <Phone className="w-6 h-6 text-[#C9A96E]" />,
                  title: "Call to Talk Through Options",
                  desc: "A quick call is often the fastest way to understand what's available and whether Rob can help directly or connect you with a Pueblo-area specialist.",
                  cta: { label: "(720) 363-6544", href: "tel:7203636544" },
                },
                {
                  icon: <MapPin className="w-6 h-6 text-[#C9A96E]" />,
                  title: "Explore Pueblo County Context",
                  desc: "If you're also considering rural or unincorporated areas outside the city, the Pueblo County page has additional context.",
                  cta: { label: "Pueblo County Page", href: "/pueblo-county-home-search-coming-soon" },
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

      {/* ─── About Pueblo ─── */}
      <section className="bg-white py-14">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-['Outfit'] text-2xl md:text-3xl font-bold text-[#292524] mb-6">
              About Pueblo
            </h2>
            <p className="text-[#292524]/70 font-['Libre_Franklin'] leading-relaxed mb-6">
              Pueblo is the largest city in southern Colorado and the county seat of Pueblo County. Located along the Arkansas River approximately 100 miles south of Denver, Pueblo has a distinct character and history as a regional hub for southern Colorado. The city is known for its steel industry heritage, arts community, and the Pueblo Reservoir area.
            </p>
            <p className="text-[#292524]/70 font-['Libre_Franklin'] leading-relaxed mb-6">
              The city includes a variety of neighborhoods with different housing types, ages, and community settings. Buyers considering Pueblo should research specific neighborhoods and current market conditions independently — the Pueblo market differs meaningfully from Denver metro and northern Colorado in price points, pace, and character.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                {
                  icon: <MapPin className="w-6 h-6 text-[#C9A96E]" />,
                  title: "Southern Colorado City",
                  desc: "Located approximately 100 miles south of Denver along the Arkansas River. County seat of Pueblo County.",
                },
                {
                  icon: <CheckCircle2 className="w-6 h-6 text-[#C9A96E]" />,
                  title: "Varied Neighborhoods",
                  desc: "Pueblo includes established older areas, suburban developments, and a range of housing types and price points.",
                },
                {
                  icon: <MapPin className="w-6 h-6 text-[#C9A96E]" />,
                  title: "Regional Hub",
                  desc: "Pueblo serves as a regional hub for southern Colorado with local employment, services, and the Pueblo Reservoir recreation area.",
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
              Buyers researching Pueblo real estate should consider the following before making decisions:
            </p>
            <ul className="space-y-4">
              {[
                "Pueblo is a distinct market from Denver and Colorado Springs — research current conditions independently rather than assuming they mirror other Colorado markets.",
                "Research specific neighborhoods, schools, crime data, and community factors that matter to your situation before narrowing your search.",
                "Consider commute distances to employment centers, services, and amenities relevant to your priorities.",
                "Review individual property conditions, neighborhood context, and lot characteristics carefully.",
                "Work with an agent who has direct knowledge of the Pueblo market — local expertise matters in a market this distinct from the Front Range.",
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

      {/* ─── County Link ─── */}
      <section className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-['Outfit'] text-2xl font-bold text-[#292524] mb-4">
              Also Considering Pueblo County?
            </h2>
            <p className="text-[#292524]/70 font-['Libre_Franklin'] leading-relaxed mb-6">
              If you're also interested in rural or unincorporated areas outside the city of Pueblo, the county-level page has additional context:
            </p>
            <a
              href="/pueblo-county-home-search-coming-soon"
              className="inline-flex items-center gap-2 text-[#C9A96E] hover:text-[#b8944f] font-semibold font-['Libre_Franklin'] transition-colors"
            >
              Pueblo County Home Search — Coming Soon
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-[#F5F0EB] py-14">
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
                  className="bg-white rounded-xl border border-[#C9A96E]/20 overflow-hidden"
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
              Interested in Pueblo? Let's Talk.
            </h2>
            <p className="text-[#F5F0EB]/70 font-['Libre_Franklin'] leading-relaxed mb-8 max-w-xl mx-auto">
              Full search coverage is coming. In the meantime, reaching out directly is the fastest way to understand your options and get pointed in the right direction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton label="Email Rob About Pueblo" />
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
