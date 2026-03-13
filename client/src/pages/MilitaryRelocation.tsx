/**
 * Military & PCS Relocation Hub — My Rock Realty
 * /military-relocation/
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
  Shield,
  MapPin,
  Home,
  ChevronDown,
  Phone,
  Mail,
  Compass,
  Users,
  BookOpen,
} from "lucide-react";

const DENVER_HERO_BG = "/images/denver-rowhouses-hero.jpg";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "Can Rob help military buyers who are not yet in Colorado?",
    answer:
      "Yes. Rob regularly works with buyers who are planning a PCS move to Colorado from out of state. He can provide market orientation, neighborhood guidance, and support for buyers navigating the process remotely.",
  },
  {
    question: "Does Rob specialize in VA home loans?",
    answer:
      "Rob provides educational guidance on VA homebuying and works with buyers using VA financing. For specific VA loan questions, buyers should work directly with a VA-approved lender.",
  },
  {
    question: "What Colorado areas does Rob cover for military and PCS buyers?",
    answer:
      "Rob covers the Denver metro area, Colorado Springs, Fort Collins, and surrounding communities. Many military buyers are relocating near Colorado's major installations, and Rob has experience supporting buyers across these markets.",
  },
  {
    question: "How does PCS timing affect the homebuying process in Colorado?",
    answer:
      "PCS timelines can compress the homebuying process significantly. Rob helps military buyers understand how to plan their search, what to prioritize given their timeline, and how to navigate the Colorado market efficiently.",
  },
  {
    question: "Should military buyers rent or buy when PCS-ing to Colorado?",
    answer:
      "The rent-vs-buy decision depends on tour length, market conditions, personal financial goals, and how long the buyer expects to stay. Rob can help military buyers think through the relevant factors for their specific situation.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Military & PCS Relocation", url: "/military-relocation/" },
];

/* ─── Support Paths ─── */
const supportPaths = [
  {
    icon: MapPin,
    title: "PCS Moves to Colorado",
    description:
      "Practical guidance on PCS timing, rent-vs-buy decisions, and Colorado market orientation for buyers relocating on military orders.",
    href: "/military-relocation/pcs-colorado/",
    cta: "PCS Colorado Guide",
  },
  {
    icon: Shield,
    title: "VA Home Loans in Colorado",
    description:
      "Educational overview of VA homebuying benefits, how the process works in Colorado, and what buyers should know before starting their search.",
    href: "/military-relocation/va-home-loans-colorado/",
    cta: "VA Homebuying Guide",
  },
];

/* ─── Audience Callouts ─── */
const audiences = [
  {
    icon: Compass,
    label: "Active Duty",
    text: "Navigating a PCS move or planning ahead for a future Colorado assignment.",
  },
  {
    icon: Users,
    label: "Military Spouses",
    text: "Managing the homebuying process around deployment schedules and family needs.",
  },
  {
    icon: Shield,
    label: "Veterans",
    text: "Settling in Colorado and exploring VA homebuying benefits for the first time or again.",
  },
  {
    icon: Home,
    label: "PCS Buyers",
    text: "Moving to Colorado on orders and needing local market guidance quickly.",
  },
];

export default function MilitaryRelocation() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-cream" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
      <SeoHead
        metadata={{
          title: "Military & PCS Relocation in Colorado | My Rock Realty",
          description: "Colorado real estate support for active duty, veterans, military spouses, and PCS buyers. VA homebuying guidance, PCS planning, and local market expertise across Denver, Colorado Springs, and Fort Collins.",
          canonicalUrl: "https://www.myrockhomes.com/military-relocation/",
          image: { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/relocations-bg-KPyJJGfxXDepzsW2dzzYt2.webp" },
        }}
        schema={faqSchema ? [faqSchema] : []}
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
            Specialty Resource Center
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5 max-w-3xl"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Military &amp; PCS Relocation{" "}
            <span className="text-gold">in Colorado</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-cream/80 text-[15px] sm:text-lg leading-relaxed max-w-2xl mb-8"
          >
            Colorado real estate guidance designed for active duty, veterans, military spouses,
            and PCS buyers. Whether you're planning months ahead or moving on short notice,
            Rob provides practical, local support for the unique demands of military homebuying.
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
              href="#support-paths"
              className="group inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-cream/80 font-medium rounded-lg transition-all hover:border-gold/40 hover:text-gold text-[15px] sm:text-base"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Explore Resources
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── Who This Is For ─── */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-3"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Who This Resource Center Serves
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-charcoal-light/70 text-[15px] sm:text-base leading-relaxed max-w-2xl mb-10"
          >
            Military homebuying comes with unique timing pressures, financing options, and planning
            considerations. This resource center is designed to help military families navigate
            the Colorado market with clarity and confidence.
          </motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {audiences.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i }}
                className="p-5 sm:p-6 rounded bg-cream border border-cream-dark/50"
              >
                <div className="w-10 h-10 rounded flex items-center justify-center bg-gold/10 text-gold-dark mb-3">
                  <a.icon size={20} strokeWidth={1.8} />
                </div>
                <h3
                  className="text-base font-semibold text-charcoal mb-2"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {a.label}
                </h3>
                <p className="text-charcoal-light/70 text-sm leading-relaxed">{a.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Support Paths ─── */}
      <section id="support-paths" className="py-12 sm:py-20 bg-cream">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-3"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Current Support Areas
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-charcoal-light/70 text-[15px] sm:text-base leading-relaxed max-w-2xl mb-10"
          >
            These guides cover the most common questions and planning considerations for
            military buyers in Colorado. Additional resources — including base-specific
            community guides and remote tour support — are in development.
          </motion.p>
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-7 mb-10">
            {supportPaths.map((path, i) => (
              <motion.a
                key={path.title}
                href={path.href}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="group block p-6 sm:p-8 rounded bg-white border border-cream-dark/60 hover:border-gold/40 transition-all hover:shadow-lg hover:shadow-gold/5"
              >
                <div className="w-12 h-12 rounded flex items-center justify-center bg-gold/10 text-gold-dark mb-5">
                  <path.icon size={24} strokeWidth={1.8} />
                </div>
                <h3
                  className="text-xl font-semibold text-charcoal mb-3 group-hover:text-gold-dark transition-colors"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {path.title}
                </h3>
                <p className="text-charcoal-light/70 leading-relaxed mb-5 text-[15px]">
                  {path.description}
                </p>
                <span className="inline-flex items-center gap-2 text-gold-dark font-medium text-sm group-hover:gap-3 transition-all">
                  {path.cta}
                  <ArrowRight size={16} />
                </span>
              </motion.a>
            ))}
          </div>

          {/* Base-Specific Guides Grid */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4"
          >
            <h3
              className="text-lg font-semibold text-charcoal mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Base-Specific Community Guides
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: "Fort Carson", sub: "Colorado Springs area", href: "/military-relocation/fort-carson/" },
                { label: "Peterson Space Force Base", sub: "Colorado Springs area", href: "/military-relocation/peterson-space-force-base/" },
                { label: "Schriever Space Force Base", sub: "Colorado Springs area", href: "/military-relocation/schriever-space-force-base/" },
                { label: "Buckley Space Force Base", sub: "Denver metro / Aurora", href: "/military-relocation/buckley-space-force-base/" },
                { label: "USAFA", sub: "Colorado Springs / Monument area", href: "/military-relocation/usafa/" },
              ].map((base) => (
                <a
                  key={base.href}
                  href={base.href}
                  className="group flex items-center justify-between p-4 rounded bg-white border border-cream-dark/60 hover:border-gold/40 transition-all hover:shadow-md hover:shadow-gold/5"
                >
                  <div>
                    <span
                      className="block font-medium text-charcoal text-[15px] group-hover:text-gold-dark transition-colors"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {base.label}
                    </span>
                    <span className="text-charcoal-light/50 text-xs mt-0.5 block">{base.sub}</span>
                  </div>
                  <ArrowRight size={16} className="text-gold-dark opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              ))}
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
            Common Questions
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
            Ready to Talk Through Your Colorado Move?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-cream/70 text-[15px] sm:text-base leading-relaxed mb-8"
          >
            Whether you're months out from a PCS or actively searching, Rob can help you
            understand the Colorado market and plan your next move with confidence.
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
            href="/"
            className="inline-flex items-center gap-2 text-charcoal-light/60 hover:text-gold-dark text-sm transition-colors"
          >
            ← Back to My Rock Realty
          </a>
        </div>
      </div>
    </div>
  );
}
