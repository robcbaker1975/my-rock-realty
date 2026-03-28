/**
 * Military Spouses Buying in Colorado — My Rock Realty
 * /military-relocation/military-spouses-buying-colorado/
 * Design: Front Range Modern — matches existing site design system
 */
import { useState } from "react";
import SeoHead from "@/components/seo/SeoHead";
import LeadForm from "@/components/LeadForm";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { motion } from "framer-motion";
import { ArrowRight, Home, ChevronDown, Users, Calendar, Compass } from "lucide-react";

const HERO_BG = "/images/denver-rowhouses-hero.jpg";

const faqContent = [
  {
    question: "Can a military spouse buy a home without the service member present?",
    answer:
      "Yes. Military spouses often manage the homebuying process independently, especially when a service member is deployed or on orders. Rob works with buyers navigating this situation and can provide remote support, video walkthroughs, and guidance for buyers who need to move efficiently on their own timeline.",
  },
  {
    question: "How does deployment timing affect the homebuying process?",
    answer:
      "Deployment timing adds a layer of complexity to homebuying decisions. Some families choose to buy before a deployment to establish stability; others prefer to wait until the service member returns. Rob can help you think through the relevant timing factors for your specific situation without pressure.",
  },
  {
    question: "What should military spouses know about the Colorado market before starting a search?",
    answer:
      "Colorado's major military markets — Colorado Springs, Denver metro, and the Front Range — each have distinct price points, neighborhood dynamics, and inventory patterns. Getting oriented to the market early, even before orders are finalized, helps military spouses make faster, more confident decisions when the time comes.",
  },
  {
    question: "Does Rob work with VA financing for military spouse buyers?",
    answer:
      "Rob provides educational guidance on VA homebuying and works with buyers using VA financing. For specific VA loan questions, buyers should work directly with a VA-approved lender. Eligible surviving spouses may also qualify for VA loan benefits.",
  },
  {
    question: "What if we're not sure how long we'll be stationed in Colorado?",
    answer:
      "Tour length uncertainty is one of the most common concerns for military families considering a purchase. Rob can help you think through the rent-vs-buy decision based on your expected timeline, Colorado market conditions, and personal financial goals — without pushing you toward a decision that doesn't fit your situation.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Military & PCS Relocation", url: "/military-relocation/" },
  { label: "Military Spouses Buying in Colorado", url: "/military-relocation/military-spouses-buying-colorado/" },
];

const planningPoints = [
  {
    icon: Calendar,
    title: "Planning Around Military Timelines",
    text: "PCS orders, deployment schedules, and report dates create real constraints on homebuying timelines. Understanding how to plan your search around these factors — and when to start — is one of the most practical things Rob can help with.",
  },
  {
    icon: Home,
    title: "Buying Independently When Needed",
    text: "Many military spouses manage the homebuying process on their own, with the service member participating remotely. Rob is experienced working with buyers in this situation and can support remote decision-making through video, documentation, and clear communication.",
  },
  {
    icon: Compass,
    title: "Colorado Market Orientation",
    text: "Colorado's military communities span Colorado Springs, the Denver metro, and the northern Front Range. Each area has different price points, school districts, and commute dynamics. Getting oriented early helps you search with clarity when the time comes.",
  },
  {
    icon: Users,
    title: "Family Priorities in the Search",
    text: "School districts, neighborhood stability, proximity to base, and community feel are all factors that matter differently for each family. Rob helps buyers identify what matters most and focus the search accordingly.",
  },
];

export default function MilitarySpousesBuyingColorado() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-cream" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
      <SeoHead
        metadata={{
          title: "Military Spouses Buying a Home in Colorado | My Rock Realty",
          description: "Practical homebuying guidance for military spouses navigating PCS moves, deployment timelines, and Colorado real estate. Buyer-focused support for military families across Colorado Springs and the Denver metro.",
          canonicalUrl: "https://myrockhomes.com/military-relocation/military-spouses-buying-colorado/",
          image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/relocations-bg-KPyJJGfxXDepzsW2dzzYt2.webp",
        }}
        schema={[faqSchema]}
        />

      {/* ─── Breadcrumbs ─── */}
      <div className="bg-charcoal/95 border-b border-white/5">
        <div className="container py-3">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* ─── Hero ─── */}
      <section
        className="relative py-16 sm:py-24 md:py-32 bg-charcoal overflow-hidden"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-charcoal/82" />
        <div className="container relative">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Military Relocation Support
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5 max-w-3xl"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Military Spouses{" "}
            <span className="text-gold">Buying in Colorado</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-cream/80 text-[15px] sm:text-lg leading-relaxed max-w-2xl mb-8"
          >
            Homebuying for military families involves real complexity — PCS timing, deployment
            schedules, remote decision-making, and the pressure of moving on short notice. This
            guide is designed to help military spouses navigate the Colorado market with
            practical, buyer-focused support.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#contact-rob"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-charcoal font-semibold rounded-lg transition-all hover:bg-gold-light hover:shadow-xl hover:shadow-gold/20 active:scale-[0.98] text-[15px] sm:text-base"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Talk to Rob About Your Move
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/military-relocation/"
              className="group inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-cream/80 font-medium rounded-lg transition-all hover:border-gold/40 hover:text-gold text-[15px] sm:text-base"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Military Relocation Hub
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── Planning Considerations ─── */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-3"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            What Military Spouses Are Navigating
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-charcoal-light/70 text-[15px] sm:text-base leading-relaxed max-w-2xl mb-10"
          >
            Military homebuying is rarely straightforward. These are the planning considerations
            Rob most commonly helps military spouses work through.
          </motion.p>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {planningPoints.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i }}
                className="flex gap-5"
              >
                <div className="w-11 h-11 rounded flex items-center justify-center bg-gold/10 text-gold-dark shrink-0 mt-0.5">
                  <point.icon size={20} strokeWidth={1.8} />
                </div>
                <div>
                  <h3
                    className="text-base font-semibold text-charcoal mb-2"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {point.title}
                  </h3>
                  <p className="text-charcoal-light/70 text-[15px] leading-relaxed">{point.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Related Resources ─── */}
      <section className="py-10 sm:py-16 bg-cream border-t border-cream-dark/40">
        <div className="container">
          <h3
            className="text-lg font-semibold text-charcoal mb-5"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Related Military Relocation Resources
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "Military & PCS Relocation Hub", href: "/military-relocation/" },
              { label: "PCS Moves to Colorado", href: "/military-relocation/pcs-colorado/" },
              { label: "VA Home Loans in Colorado", href: "/military-relocation/va-home-loans-colorado/" },
              { label: "PCS Timeline Checklist", href: "/military-relocation/pcs-timeline-checklist/" },
              { label: "Veterans Buying in Colorado", href: "/military-relocation/veterans-buying-colorado/" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between p-4 rounded bg-white border border-cream-dark/60 hover:border-gold/40 transition-all hover:shadow-md hover:shadow-gold/5"
              >
                <span
                  className="font-medium text-charcoal text-[15px] group-hover:text-gold-dark transition-colors"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {link.label}
                </span>
                <ArrowRight size={16} className="text-gold-dark opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Common Questions — Military Spouses Buying in Colorado
          </motion.h2>
          <div className="space-y-3">
            {faqContent.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
                className="border border-cream-dark/60 rounded overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left bg-white hover:bg-cream/60 transition-colors"
                  aria-expanded={openFaq === i}
                >
                  <span
                    className="font-medium text-charcoal text-[15px] leading-snug"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {item.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-gold-dark shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 pt-2 bg-cream/30">
                    <p className="text-charcoal-light/80 text-[15px] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Contact CTA ─── */}
      <section id="contact-rob" className="py-12 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <LeadForm
            variant="pcs"
            source="Military Spouses Buying Colorado"
            dark
          />
        </div>
      </section>

      {/* ─── Back Link ─── */}
      <div className="bg-cream border-t border-cream-dark/40 py-5">
        <div className="container">
          <a
            href="/military-relocation/"
            className="inline-flex items-center gap-2 text-charcoal-light/60 hover:text-gold-dark text-sm transition-colors"
          >
            ← Back to Military & PCS Relocation
          </a>
          <span className="text-charcoal-light/30 mx-2">·</span>
          <a
            href="/colorado-springs-co-homes-for-sale"
            className="inline-flex items-center gap-2 text-charcoal-light/60 hover:text-gold-dark text-sm transition-colors"
          >
            Colorado Springs Homes for Sale
          </a>
          <span className="text-charcoal-light/30 mx-2">·</span>
          <a
            href="/moving-to-colorado-springs/"
            className="inline-flex items-center gap-2 text-charcoal-light/60 hover:text-gold-dark text-sm transition-colors"
          >
            Moving to Colorado Springs
          </a>
        </div>
      </div>
    </div>
  );
}
