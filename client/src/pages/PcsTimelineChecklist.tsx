/**
 * PCS Timeline Checklist — My Rock Realty
 * /military-relocation/pcs-timeline-checklist/
 * Design: Front Range Modern — matches existing site design system
 */
import { useState } from "react";
import SeoHead from "@/components/seo/SeoHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Phone, Mail, CheckSquare } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/denver-rowhouses-hero_2f59d4ac.jpg";

const faqContent = [
  {
    question: "How far in advance should I start planning a PCS home purchase?",
    answer:
      "Starting 3–6 months before your report date gives you the most flexibility. This allows time to get pre-approved, understand the local market, identify neighborhoods, and make a confident offer without being rushed. In competitive markets like Colorado Springs and Denver, earlier preparation consistently leads to better outcomes.",
  },
  {
    question: "What should I do first when I receive PCS orders to Colorado?",
    answer:
      "The most useful first steps are getting pre-approved for financing, starting your market research for the area near your installation, and connecting with a local agent who understands military timelines. These three steps give you a clear picture of what's realistic before you start actively searching.",
  },
  {
    question: "Can I start the homebuying process before my orders are finalized?",
    answer:
      "Yes. Many military buyers begin their market research and pre-approval process before orders are officially finalized. This puts you in a much stronger position to move quickly once orders come through. Rob can help you get oriented to the Colorado market even before you have a firm report date.",
  },
  {
    question: "What happens if my timeline compresses and I have less time than expected?",
    answer:
      "Compressed timelines are common in military homebuying. Having your financing in order, knowing your target neighborhoods, and working with an agent who understands military urgency significantly reduces the stress of a compressed search. Rob is experienced working with buyers on tight timelines.",
  },
  {
    question: "Should I rent first or try to buy on arrival?",
    answer:
      "The rent-vs-buy decision depends on your tour length, financial situation, current market conditions, and how much time you have before your report date. Some buyers prefer to rent temporarily while they get oriented; others are ready to buy immediately. Rob can help you think through the relevant factors for your specific situation.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Military & PCS Relocation", url: "/military-relocation/" },
  { label: "PCS Timeline Checklist", url: "/military-relocation/pcs-timeline-checklist/" },
];

type ChecklistPhase = {
  phase: string;
  timeframe: string;
  items: string[];
};

const checklistPhases: ChecklistPhase[] = [
  {
    phase: "Early Planning",
    timeframe: "6+ months before report date",
    items: [
      "Research Colorado installations and surrounding communities",
      "Understand the rent-vs-buy decision for your situation",
      "Review your credit and financial readiness",
      "Begin conversations with a VA-approved lender if using VA financing",
      "Connect with a local Colorado agent familiar with military timelines",
    ],
  },
  {
    phase: "Active Preparation",
    timeframe: "3–6 months before report date",
    items: [
      "Get pre-approved for financing",
      "Identify target neighborhoods based on commute, schools, and budget",
      "Understand current market conditions in your target area",
      "Clarify your must-haves vs. nice-to-haves",
      "Discuss timeline flexibility with your agent",
    ],
  },
  {
    phase: "Active Search",
    timeframe: "1–3 months before report date",
    items: [
      "Begin active home search with your agent",
      "Attend showings in person or via video walkthrough",
      "Make offers when the right home appears — don't wait for perfect",
      "Understand Colorado contract timelines and inspection processes",
      "Coordinate closing date with your report date where possible",
    ],
  },
  {
    phase: "Under Contract",
    timeframe: "After offer acceptance",
    items: [
      "Complete inspection and review findings with your agent",
      "Finalize financing and respond to lender requests promptly",
      "Coordinate movers and household goods shipment timing",
      "Arrange temporary housing if closing doesn't align with arrival",
      "Complete final walkthrough before closing",
    ],
  },
  {
    phase: "Arrival & Settlement",
    timeframe: "Report date and after",
    items: [
      "Close on the home and receive keys",
      "Update address with USPS, financial institutions, and military records",
      "Register vehicles in Colorado within 90 days of establishing residency",
      "Enroll children in school if applicable",
      "Get oriented to your new community",
    ],
  },
];

export default function PcsTimelineChecklist() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="hub-page min-h-screen bg-cream" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
      <SeoHead
        metadata={{
          title: "PCS Timeline Checklist for Colorado | My Rock Realty",
          description: "A practical PCS homebuying checklist for military buyers relocating to Colorado. Phase-by-phase planning guidance from early preparation through closing and settlement.",
          canonicalUrl: "https://myrockhomes.com/military-relocation/pcs-timeline-checklist/",
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
            PCS Planning Resource
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5 max-w-3xl"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            PCS Timeline{" "}
            <span className="text-gold">Checklist for Colorado</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-cream/80 text-[15px] sm:text-lg leading-relaxed max-w-2xl mb-8"
          >
            PCS moves compress the homebuying process in ways that civilian buyers rarely
            experience. This checklist breaks the process into manageable phases so you
            know what to prioritize at each stage of your relocation.
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
              href="/military-relocation/pcs-colorado/"
              className="group inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-cream/80 font-medium rounded-lg transition-all hover:border-gold/40 hover:text-gold text-[15px] sm:text-base"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              PCS Colorado Guide
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── Checklist Phases ─── */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-3"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Phase-by-Phase PCS Homebuying Checklist
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-charcoal-light/70 text-[15px] sm:text-base leading-relaxed mb-10"
          >
            Use this as a planning framework. Every PCS move is different — timelines,
            financing situations, and family priorities vary. This checklist covers the
            most common planning steps for military buyers relocating to Colorado.
          </motion.p>
          <div className="space-y-8">
            {checklistPhases.map((phase, i) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i }}
                className="border border-cream-dark/60 rounded overflow-hidden"
              >
                <div className="bg-charcoal/95 px-6 py-4 flex items-center justify-between gap-4">
                  <div>
                    <h3
                      className="text-base font-semibold text-white"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {phase.phase}
                    </h3>
                    <span className="text-gold text-xs font-medium tracking-wide mt-0.5 block">
                      {phase.timeframe}
                    </span>
                  </div>
                  <CheckSquare size={20} className="text-gold shrink-0" strokeWidth={1.8} />
                </div>
                <ul className="bg-white divide-y divide-cream-dark/40">
                  {phase.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 px-6 py-3.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-dark mt-2 shrink-0" />
                      <span className="text-charcoal-light/80 text-[15px] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
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
              { label: "Military Spouses Buying in Colorado", href: "/military-relocation/military-spouses-buying-colorado/" },
              { label: "Temporary Housing — Colorado Springs", href: "/military-relocation/temporary-housing-colorado-springs/" },
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
            Common Questions — PCS Timeline Planning
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
        <div className="container max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Ready to Start Planning Your PCS Move?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-cream/70 text-[15px] sm:text-base leading-relaxed mb-8"
          >
            Whether you're months out from your report date or working on a compressed
            timeline, Rob can help you understand the Colorado market and plan your
            move with confidence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <a
              href="/#contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-charcoal font-semibold rounded-lg transition-all hover:bg-gold-light hover:shadow-xl hover:shadow-gold/20 active:scale-[0.98] text-[15px] sm:text-base"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Schedule a Consultation
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-cream/50 text-sm">
            <a href="tel:7203636544" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone size={15} />
              (720) 363-6544
            </a>
            <span className="hidden sm:block">·</span>
            <a href="mailto:rob@myrockhomes.com" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail size={15} />
              rob@myrockhomes.com
            </a>
          </div>
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
