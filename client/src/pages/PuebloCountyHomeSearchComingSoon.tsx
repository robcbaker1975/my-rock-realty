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
} from "lucide-react";

/* Hero Background Image — Approved asset */
const DENVER_HERO_BG = "/images/denver-rowhouses-hero.jpg";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "Is Pueblo County home search available on this site yet?",
    answer:
      "Pueblo County home search coverage is not yet live on this site. We are preparing local buyer resources and search tools for the Pueblo area. In the meantime, buyers interested in Pueblo County can reach out directly and we can assist with current options.",
  },
  {
    question: "What is Pueblo County like for buyers considering southern Colorado?",
    answer:
      "Pueblo County is located in southern Colorado along the Arkansas River. The county includes the city of Pueblo as well as surrounding rural and semi-rural areas. Buyers may find a range of housing types and price points that differ from the Denver metro and northern Front Range markets. Buyers should research current market conditions independently.",
  },
  {
    question: "What types of areas does Pueblo County include?",
    answer:
      "Pueblo County includes the city of Pueblo, unincorporated rural communities, agricultural land areas, and properties along the Arkansas River corridor. The county offers a mix of urban, suburban, and rural settings. Buyers should research specific areas within the county that align with their priorities.",
  },
  {
    question: "Can I get help with a Pueblo County home search before coverage is live?",
    answer:
      "Yes. Buyers interested in Pueblo County can contact us directly while we prepare full search coverage for the area. We can discuss current options, provide general guidance, and help connect buyers with appropriate resources for the Pueblo market.",
  },
  {
    question: "What should buyers know before researching Pueblo County real estate?",
    answer:
      "Buyers should independently research neighborhoods, schools, commute distances, local amenities, and current market conditions before making decisions about Pueblo County. Market conditions in Pueblo County may differ significantly from Denver metro and northern Colorado markets. Working with a knowledgeable agent can help buyers navigate the local context.",
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
        title="Pueblo County Home Search — Coming Soon | My Rock Realty"
        description="Pueblo County home search coverage is being prepared. Learn about the Pueblo County area, connect with a local buyer resource, and reach out directly for current assistance."
        canonical="https://www.myrockhomes.com/pueblo-county-home-search-coming-soon"
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
              Pueblo County Home Search
            </h1>
            <p className="text-[#F5F0EB]/80 text-lg md:text-xl max-w-2xl mb-8 font-['Libre_Franklin']">
              We are preparing home search coverage for Pueblo County. In the meantime, buyers interested in the Pueblo area can reach out directly for current assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton label="Contact Us About Pueblo County" />
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
                  Pueblo County Search Coverage Is Being Prepared
                </h2>
                <p className="text-[#292524]/70 font-['Libre_Franklin'] leading-relaxed mb-4">
                  Full home search coverage for Pueblo County is not yet live on this site. We are working to prepare local buyer resources and search tools for the Pueblo area. Buyers currently interested in Pueblo County real estate can contact us directly for assistance while coverage is pending.
                </p>
                <CTAButton label="Reach Out for Pueblo County Help" />
              </div>
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
              Pueblo County is located in southern Colorado along the Arkansas River, approximately 100 miles south of Denver. The county seat is the city of Pueblo, which is the largest city in the county and serves as a regional hub for southern Colorado. The county includes a mix of urban, suburban, and rural areas.
            </p>
            <p className="text-[#292524]/70 font-['Libre_Franklin'] leading-relaxed mb-6">
              Buyers considering Pueblo County may find housing options and price points that differ from the Denver metro and northern Front Range markets. The local real estate market has its own dynamics, and buyers should research current conditions independently before making decisions.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                {
                  icon: <MapPin className="w-6 h-6 text-[#C9A96E]" />,
                  title: "Southern Colorado Location",
                  desc: "Located approximately 100 miles south of Denver along the Arkansas River corridor.",
                },
                {
                  icon: <CheckCircle2 className="w-6 h-6 text-[#C9A96E]" />,
                  title: "Mixed Housing Types",
                  desc: "The county includes urban, suburban, and rural housing options across a range of price points.",
                },
                {
                  icon: <MapPin className="w-6 h-6 text-[#C9A96E]" />,
                  title: "Regional Hub",
                  desc: "Pueblo serves as a regional hub for southern Colorado with local amenities and services.",
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
                "Research current market conditions in Pueblo County independently, as they may differ significantly from Denver metro and northern Colorado markets.",
                "Independently research schools, crime data, neighborhood characteristics, and community factors important to you.",
                "Consider commute distances and access to employment, services, and amenities relevant to your priorities.",
                "Review individual property conditions, lot characteristics, and neighborhood context carefully.",
                "Work with a knowledgeable agent who understands the local Pueblo County market dynamics.",
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

      {/* ─── City Coming Soon Link ─── */}
      <section className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-['Outfit'] text-2xl font-bold text-[#292524] mb-4">
              Pueblo City Search
            </h2>
            <p className="text-[#292524]/70 font-['Libre_Franklin'] leading-relaxed mb-6">
              For information specifically about the city of Pueblo, see our city-level coming-soon page:
            </p>
            <a
              href="/pueblo-home-search-coming-soon"
              className="inline-flex items-center gap-2 text-[#C9A96E] hover:text-[#b8944f] font-semibold font-['Libre_Franklin'] transition-colors"
            >
              Pueblo Home Search — Coming Soon
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
              Interested in Pueblo County?
            </h2>
            <p className="text-[#F5F0EB]/75 font-['Libre_Franklin'] max-w-xl mx-auto mb-8">
              Full search coverage for Pueblo County is coming soon. In the meantime, reach out directly and we can discuss current options for your Pueblo County home search.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:rob@myrockhomes.com?subject=Pueblo County Home Search Inquiry"
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
