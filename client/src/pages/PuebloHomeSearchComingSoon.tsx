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
} from "lucide-react";

/* Hero Background Image — Approved asset */
const DENVER_HERO_BG = "/images/denver-rowhouses-hero.jpg";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "Is Pueblo home search available on this site yet?",
    answer:
      "Pueblo home search coverage is not yet live on this site. We are preparing local buyer resources and search tools for the Pueblo area. Buyers currently interested in Pueblo can reach out directly and we can assist with current options while coverage is being prepared.",
  },
  {
    question: "What is the city of Pueblo like for buyers?",
    answer:
      "Pueblo is the largest city in southern Colorado and serves as a regional hub for the area. The city has a mix of neighborhoods ranging from established older areas to newer suburban developments. Buyers may find housing options and price points that differ from Denver metro and northern Colorado markets. Buyers should research current conditions and specific neighborhoods independently.",
  },
  {
    question: "What neighborhoods exist in Pueblo?",
    answer:
      "Pueblo includes a variety of neighborhoods with different characters, ages, and housing types. Some areas are closer to downtown, while others are in suburban or outlying settings. Buyers should research specific neighborhoods that align with their priorities, including proximity to employment, schools, and amenities.",
  },
  {
    question: "How does Pueblo compare to other Colorado markets?",
    answer:
      "Pueblo is a distinct market from Denver, Colorado Springs, Boulder, and northern Colorado. Market conditions, price points, and community character can differ significantly. Buyers should research Pueblo independently rather than assuming conditions mirror other Colorado markets they may be familiar with.",
  },
  {
    question: "What should buyers research before considering Pueblo real estate?",
    answer:
      "Buyers should independently research neighborhoods, schools, crime data, commute distances, local employment, community amenities, and current market conditions before making decisions about Pueblo real estate. Working with an agent who understands the local Pueblo market can help buyers navigate the area effectively.",
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
        title="Pueblo Home Search — Coming Soon | My Rock Realty"
        description="Pueblo home search coverage is being prepared. Learn about the city of Pueblo, connect with a local buyer resource, and reach out directly for current assistance."
        canonical="https://www.myrockhomes.com/pueblo-home-search-coming-soon"
        schema={faqSchema ? [faqSchema] : []}
        breadcrumbs={breadcrumbItems}
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
            <p className="text-[#F5F0EB]/80 text-lg md:text-xl max-w-2xl mb-8 font-['Libre_Franklin']">
              We are preparing home search coverage for Pueblo. In the meantime, buyers interested in the Pueblo area can reach out directly for current assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton label="Contact Us About Pueblo" />
              <a
                href="tel:+17203456789"
                className="inline-flex items-center gap-2 border border-[#F5F0EB]/40 hover:border-[#C9A96E] text-[#F5F0EB] hover:text-[#C9A96E] font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                Call Rob Baker
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ─── Coming Soon Notice ─── */}
      <section className="bg-[#F5F0EB] py-12">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-white border border-[#C9A96E]/30 rounded-xl p-8 shadow-sm"
          >
            <div className="flex items-start gap-4">
              <Clock className="w-8 h-8 text-[#C9A96E] flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-['Outfit'] text-2xl font-bold text-[#292524] mb-3">
                  Pueblo Search Coverage Is Being Prepared
                </h2>
                <p className="text-[#292524]/70 font-['Libre_Franklin'] leading-relaxed mb-4">
                  Full home search coverage for Pueblo is not yet live on this site. We are working to prepare local buyer resources and search tools for the Pueblo area. Buyers currently interested in Pueblo real estate can contact us directly for assistance while coverage is pending.
                </p>
                <CTAButton label="Reach Out for Pueblo Help" />
              </div>
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
              Pueblo is the largest city in southern Colorado and the county seat of Pueblo County. Located along the Arkansas River approximately 100 miles south of Denver, Pueblo has a distinct character and history as a regional hub for southern Colorado.
            </p>
            <p className="text-[#292524]/70 font-['Libre_Franklin'] leading-relaxed mb-6">
              The city includes a variety of neighborhoods with different housing types, ages, and community settings. Buyers considering Pueblo should research specific neighborhoods and current market conditions independently, as the Pueblo market may differ significantly from Denver metro and northern Colorado markets.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                {
                  icon: <MapPin className="w-6 h-6 text-[#C9A96E]" />,
                  title: "Southern Colorado City",
                  desc: "Located approximately 100 miles south of Denver along the Arkansas River.",
                },
                {
                  icon: <CheckCircle2 className="w-6 h-6 text-[#C9A96E]" />,
                  title: "Varied Neighborhoods",
                  desc: "Pueblo includes established older areas, suburban developments, and a range of housing types.",
                },
                {
                  icon: <MapPin className="w-6 h-6 text-[#C9A96E]" />,
                  title: "Regional Hub",
                  desc: "Pueblo serves as a regional hub for southern Colorado with local employment and services.",
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
                "Research current market conditions in Pueblo independently, as they may differ significantly from Denver metro and northern Colorado markets.",
                "Independently research schools, crime data, neighborhood characteristics, and community factors important to you.",
                "Consider commute distances to employment centers, services, and amenities relevant to your priorities.",
                "Review individual property conditions, neighborhood context, and lot characteristics carefully.",
                "Work with a knowledgeable agent who understands the local Pueblo market dynamics.",
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
              Pueblo County
            </h2>
            <p className="text-[#292524]/70 font-['Libre_Franklin'] leading-relaxed mb-6">
              For broader Pueblo County context, including rural and unincorporated areas, see our county-level coming-soon page:
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
            <h2 className="font-['Outfit'] text-2xl md:text-3xl font-bold mb-4">
              Interested in Pueblo?
            </h2>
            <p className="text-[#F5F0EB]/75 font-['Libre_Franklin'] max-w-xl mx-auto mb-8">
              Full search coverage for Pueblo is coming soon. In the meantime, reach out directly and we can discuss current options for your Pueblo home search.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:rob@myrockhomes.com?subject=Pueblo Home Search Inquiry"
                className="inline-flex items-center gap-2 bg-[#C9A96E] hover:bg-[#b8944f] text-[#292524] font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                Email Rob Baker
              </a>
              <a
                href="tel:+17203456789"
                className="inline-flex items-center gap-2 border border-[#F5F0EB]/40 hover:border-[#C9A96E] text-[#F5F0EB] hover:text-[#C9A96E] font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                Call Rob Baker
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
