/**
 * Temporary Housing — Colorado Springs — My Rock Realty
 * /military-relocation/temporary-housing-colorado-springs/
 * Design: Front Range Modern — matches existing site design system
 */
import { useState } from "react";
import SeoHead from "@/components/seo/SeoHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { motion } from "framer-motion";
import { ArrowRight, Home, ChevronDown, Phone, Mail, MapPin, Calendar } from "lucide-react";

const HERO_BG = "/images/denver-rowhouses-hero.jpg";

const faqContent = [
  {
    question: "What temporary housing options are available near Colorado Springs military installations?",
    answer:
      "Colorado Springs has a range of short-term housing options including extended-stay hotels, furnished apartment rentals, and short-term lease arrangements. On-post lodging through the installation is also an option for eligible service members. Availability and pricing vary by season and demand, so planning ahead is advisable.",
  },
  {
    question: "How long should I plan for temporary housing before buying?",
    answer:
      "The right temporary housing duration depends on your homebuying timeline, current market conditions, and how quickly you can get under contract. Some buyers close within 30–60 days of arriving; others need 90 days or more. Having a realistic timeline conversation with your agent before you arrive helps set expectations.",
  },
  {
    question: "Should I rent temporarily or try to buy before arriving in Colorado Springs?",
    answer:
      "Both approaches have merit depending on your situation. Buying before arrival requires strong remote decision-making support and confidence in your target neighborhood. Renting temporarily gives you time to get oriented before committing. Rob can help you think through which approach makes more sense given your timeline and priorities.",
  },
  {
    question: "Can temporary housing costs affect my homebuying budget?",
    answer:
      "Yes. Extended temporary housing costs — especially in furnished rentals — can add up quickly and affect your overall relocation budget. Understanding the likely duration of your temporary stay and factoring it into your financial planning is an important part of PCS preparation.",
  },
  {
    question: "Does Rob help with finding temporary housing?",
    answer:
      "Rob's focus is on the homebuying process, not temporary housing placement. However, he can help you think through the timing of your temporary stay relative to your home search, and provide context on how long buyers typically take to get under contract in the current Colorado Springs market.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Military & PCS Relocation", url: "/military-relocation/" },
  { label: "Temporary Housing — Colorado Springs", url: "/military-relocation/temporary-housing-colorado-springs/" },
];

const planningPoints = [
  {
    icon: Calendar,
    title: "Timing Your Temporary Stay",
    text: "The duration of your temporary housing stay should be tied to a realistic homebuying timeline. Understanding how long it typically takes to find, offer on, and close a home in Colorado Springs helps you plan your temporary housing duration without over- or under-estimating.",
  },
  {
    icon: MapPin,
    title: "Location Relative to Your Installation",
    text: "Choosing temporary housing near your installation or target neighborhoods lets you get oriented to the area before committing to a purchase. Familiarity with commute routes, school districts, and neighborhood character is valuable before making a long-term decision.",
  },
  {
    icon: Home,
    title: "Rent-vs-Buy Timing Context",
    text: "Some buyers arrive in Colorado Springs ready to buy immediately; others benefit from a short rental period to get oriented. The right approach depends on your tour length, financial readiness, and how much you already know about the market and your target neighborhoods.",
  },
  {
    icon: Calendar,
    title: "Budgeting for the Transition Period",
    text: "Temporary housing costs — especially in furnished rentals — can be significant over 60–90 days. Factoring these costs into your overall relocation budget, alongside moving expenses and closing costs, helps you arrive with a realistic financial picture.",
  },
];

export default function TemporaryHousingColoradoSprings() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-cream" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
      <SeoHead
        metadata={{
          title: "Temporary Housing During PCS — Colorado Springs | My Rock Realty",
          description: "Practical guidance on temporary housing timing, rent-vs-buy decisions, and relocation planning for military buyers arriving in Colorado Springs. Buyer-focused support for PCS moves.",
          canonicalUrl: "https://myrockhomes.com/military-relocation/temporary-housing-colorado-springs/",
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
            PCS Relocation Support
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5 max-w-3xl"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Temporary Housing{" "}
            <span className="text-gold">During a PCS to Colorado Springs</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-cream/80 text-[15px] sm:text-lg leading-relaxed max-w-2xl mb-8"
          >
            For many military buyers, temporary housing is a bridge between arriving in
            Colorado Springs and closing on a permanent home. This guide covers the
            planning considerations that matter most — timing, budgeting, and the
            rent-vs-buy decision — without overpromising on inventory or services.
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

      {/* ─── Planning Points ─── */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-3"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Planning Your Temporary Stay
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-charcoal-light/70 text-[15px] sm:text-base leading-relaxed max-w-2xl mb-10"
          >
            Temporary housing is a relocation tool, not a destination. These are the
            planning considerations that most affect how smoothly the transition from
            temporary to permanent housing goes.
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

          {/* Scope note */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 p-5 rounded bg-cream border border-cream-dark/50"
          >
            <p className="text-charcoal-light/70 text-[15px] leading-relaxed">
              <strong className="text-charcoal font-semibold">A note on scope:</strong> Rob's
              focus is on the homebuying process. This guide covers temporary housing as a
              relocation planning topic — not as a rental placement or property-management
              service. For specific short-term rental listings, extended-stay options, or
              on-post lodging availability, contact your installation's housing office or
              search directly through short-term rental platforms.
            </p>
          </motion.div>
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
              { label: "PCS Timeline Checklist", href: "/military-relocation/pcs-timeline-checklist/" },
              { label: "Fort Carson Relocation Guide", href: "/military-relocation/fort-carson/" },
              { label: "US Air Force Academy Relocation Guide", href: "/military-relocation/us-air-force-academy/" },
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
            Common Questions — Temporary Housing During PCS
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
            Ready to Plan Your Colorado Springs Move?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-cream/70 text-[15px] sm:text-base leading-relaxed mb-8"
          >
            Whether you're arriving soon or planning months ahead, Rob can help you
            understand the Colorado Springs market and make confident decisions about
            your next home.
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
