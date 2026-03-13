/**
 * PCS Colorado — My Rock Realty
 * /military-relocation/pcs-colorado/
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
  Clock,
  Home,
  ChevronDown,
  Phone,
  Mail,
  CheckCircle2,
  Compass,
} from "lucide-react";

const DENVER_HERO_BG = "/images/denver-rowhouses-hero.jpg";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "How far in advance should military buyers start planning a PCS move to Colorado?",
    answer:
      "Starting 3–6 months before your report date gives buyers more time to research neighborhoods, understand the market, and make a more deliberate decision. Buyers with shorter timelines can still navigate the process — it just requires more focused prioritization.",
  },
  {
    question: "Should I rent or buy when PCS-ing to Colorado?",
    answer:
      "There's no universal answer. Buyers with longer tour lengths, stable financial situations, and clear location preferences often benefit from buying. Those with shorter timelines or significant uncertainty may prefer renting first. Rob can help you think through the relevant factors for your specific situation.",
  },
  {
    question: "Can I buy a home in Colorado before I arrive?",
    answer:
      "It's possible, but it comes with real risk. Buying without seeing a home in person — or at minimum doing a thorough virtual tour — can lead to surprises. Rob works with buyers who are not yet local, but he'll be direct about what you can and can't assess remotely.",
  },
  {
    question: "What Colorado markets are most common for military PCS buyers?",
    answer:
      "Many PCS buyers focus on the Denver metro area, Colorado Springs (near Fort Carson and Schriever/Peterson), and Fort Collins (near Buckley and other Northern Colorado installations). The right market depends on your assignment location, commute tolerance, and lifestyle preferences.",
  },
  {
    question: "How does BAH affect homebuying decisions for military buyers in Colorado?",
    answer:
      "BAH rates vary by rank and duty station. Understanding your BAH rate helps frame a realistic budget. Rob can help you think through how your BAH fits within Colorado's market — but for specific BAH and financing questions, work directly with a VA-approved lender.",
  },
  {
    question: "What should PCS buyers prioritize when searching in an unfamiliar Colorado market?",
    answer:
      "Location relative to your duty station, commute patterns, neighborhood character, school districts (if relevant), and resale potential are all worth evaluating. Rob can help you narrow down which areas fit your priorities before you start touring.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Military & PCS Relocation", url: "/military-relocation/" },
  { label: "PCS Colorado", url: "/military-relocation/pcs-colorado/" },
];

/* ─── Planning Considerations ─── */
const planningItems = [
  {
    icon: Clock,
    title: "PCS Timing & the Homebuying Window",
    body: "Military buyers often have compressed timelines compared to civilian buyers. Understanding how your report date, leave, and travel window affect your search helps you plan a more realistic approach — whether that means starting early, prioritizing efficiency, or deciding to rent first.",
  },
  {
    icon: Home,
    title: "Rent vs. Buy at a PCS Assignment",
    body: "The rent-vs-buy decision at a PCS assignment depends on tour length, local market conditions, your financial situation, and how certain you are about your location. Buyers with 3+ year tours and clear location preferences often have more to gain from buying. Shorter tours or significant uncertainty may favor renting first.",
  },
  {
    icon: MapPin,
    title: "Colorado Market Orientation",
    body: "Colorado's real estate markets vary significantly by location. The Denver metro, Colorado Springs, and Fort Collins each have distinct inventory levels, price ranges, and neighborhood characteristics. Understanding which market fits your assignment and lifestyle is an important first step.",
  },
  {
    icon: Compass,
    title: "Why Local Guidance Matters",
    body: "Buying in an unfamiliar market — especially under time pressure — is where local expertise adds the most value. Rob can help you understand which neighborhoods fit your priorities, what to watch for in Colorado's market, and how to approach the process efficiently given your timeline.",
  },
];

export default function PcsColorado() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-cream" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
      <SeoHead
        metadata={{
          title: "PCS to Colorado: Military Homebuying Guide | My Rock Realty",
          description: "Practical guidance for military buyers PCS-ing to Colorado. Covers PCS timing, rent vs. buy decisions, Colorado market orientation, and why local guidance matters.",
          canonicalUrl: "https://www.myrockhomes.com/military-relocation/pcs-colorado/",
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
          backgroundImage: `url(${DENVER_HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-charcoal/80" />
        <div className="container relative">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Military &amp; PCS Relocation
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5 max-w-3xl"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            PCS to Colorado:{" "}
            <span className="text-gold">Military Homebuying Guide</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-cream/80 text-[15px] sm:text-lg leading-relaxed max-w-2xl mb-8"
          >
            Practical guidance for military buyers navigating a PCS move to Colorado.
            Covers timing, rent-vs-buy decisions, market orientation, and how to approach
            the homebuying process efficiently under military timelines.
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
              Talk to Rob About Your PCS
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/military-relocation/"
              className="group inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-cream/80 font-medium rounded-lg transition-all hover:border-gold/40 hover:text-gold text-[15px] sm:text-base"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              ← Military Relocation Hub
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
            PCS Planning Considerations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-charcoal-light/70 text-[15px] sm:text-base leading-relaxed max-w-2xl mb-10"
          >
            Military homebuying comes with unique pressures and tradeoffs. These are the
            planning areas that matter most for buyers PCS-ing to Colorado.
          </motion.p>
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-7">
            {planningItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i }}
                className="p-6 sm:p-7 rounded bg-cream border border-cream-dark/50"
              >
                <div className="w-11 h-11 rounded flex items-center justify-center bg-gold/10 text-gold-dark mb-4">
                  <item.icon size={22} strokeWidth={1.8} />
                </div>
                <h3
                  className="text-lg font-semibold text-charcoal mb-3"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-charcoal-light/70 text-[15px] leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Colorado Market Overview ─── */}
      <section className="py-12 sm:py-20 bg-cream">
        <div className="container max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-5"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Colorado Markets for PCS Buyers
          </motion.h2>
          <div className="space-y-5 text-charcoal-light/80 text-[15px] leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Colorado's major real estate markets each serve different military assignments.
              The Denver metro area covers a wide range of price points and neighborhoods,
              from urban neighborhoods like LoHi and RiNo to suburbs like Parker, Highlands Ranch,
              and Castle Rock. Colorado Springs is the primary market for buyers assigned near
              Fort Carson, Schriever Space Force Base, and Peterson Space Force Base.
              Fort Collins and the Northern Colorado corridor serve buyers near Buckley
              and other Northern Colorado installations.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Each market has distinct inventory levels, price ranges, and commute patterns.
              Understanding which market fits your assignment location and lifestyle priorities
              is one of the most important early decisions for PCS buyers.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Rob covers the Denver metro, Colorado Springs, Fort Collins, and surrounding
              communities. If your assignment is in a market outside his coverage area, he can
              connect you with a vetted agent in your destination through his referral network.
            </motion.p>
          </div>

          {/* Cross-link to VA page */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 p-5 sm:p-6 rounded bg-charcoal/5 border border-charcoal/10"
          >
            <div className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-gold-dark mt-0.5 shrink-0" />
              <div>
                <p className="text-charcoal font-medium text-[15px] mb-1">
                  Using VA financing for your Colorado purchase?
                </p>
                <p className="text-charcoal-light/70 text-sm leading-relaxed mb-3">
                  See the VA Home Loans Colorado guide for an educational overview of VA homebuying
                  benefits and how the process works in Colorado.
                </p>
                <a
                  href="/military-relocation/va-home-loans-colorado/"
                  className="inline-flex items-center gap-2 text-gold-dark font-medium text-sm hover:text-gold transition-colors"
                >
                  VA Home Loans Colorado Guide
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </motion.div>
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
            PCS Colorado: Common Questions
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
                  className="w-full flex items-center justify-between gap-4 p-5 text-left bg-cream hover:bg-cream-dark/30 transition-colors"
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
                  <div className="px-5 pb-5 pt-2 bg-white">
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
            Ready to Plan Your Colorado Move?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-cream/70 text-[15px] sm:text-base leading-relaxed mb-8"
          >
            Whether you're months out from your PCS or actively searching, Rob can help you
            understand the Colorado market and approach your move with a clearer plan.
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

      {/* ─── Back Links ─── */}
      <div className="bg-cream border-t border-cream-dark/40 py-5">
        <div className="container flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
          <a
            href="/military-relocation/"
            className="inline-flex items-center gap-2 text-charcoal-light/60 hover:text-gold-dark text-sm transition-colors"
          >
            ← Military &amp; PCS Relocation
          </a>
          <span className="hidden sm:block text-charcoal-light/30">·</span>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-charcoal-light/60 hover:text-gold-dark text-sm transition-colors"
          >
            My Rock Realty Home
          </a>
        </div>
      </div>
    </div>
  );
}
