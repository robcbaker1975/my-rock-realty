/**
 * US Air Force Academy Relocation Guide — My Rock Realty
 * /military-relocation/us-air-force-academy/
 * Design: Front Range Modern — matches existing site design system
 */
import { useState } from "react";
import SeoHead from "@/components/seo/SeoHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Home, ChevronDown, Phone, Mail, Compass } from "lucide-react";

const HERO_BG = "/images/denver-rowhouses-hero.jpg";

const faqContent = [
  {
    question: "What communities do buyers relocating to US Air Force Academy typically consider?",
    answer:
      "US Air Force Academy is located north of Colorado Springs near Monument and the Air Force Academy. Buyers commonly look at Monument, Black Forest, north Colorado Springs, and communities along the I-25 corridor. The right fit depends on commute preferences, school priorities, and budget.",
  },
  {
    question: "Is US Air Force Academy close to Colorado Springs?",
    answer:
      "US Air Force Academy is located on the northern edge of Colorado Springs, near Monument. Buyers assigned to the Academy often look at communities in north Colorado Springs and Monument for shorter commutes, as well as central Colorado Springs for more amenities.",
  },
  {
    question: "Can Rob help me buy near US Air Force Academy if I'm still out of state?",
    answer:
      "Yes. Rob works with buyers planning a PCS move from out of state. He can provide market orientation, neighborhood guidance, and support for buyers navigating the process remotely before they arrive.",
  },
  {
    question: "How competitive is the market in communities near US Air Force Academy?",
    answer:
      "The Monument and north Colorado Springs areas have been active markets with consistent demand. Understanding current inventory, pricing trends, and neighborhood dynamics before you start searching helps you move efficiently when the right home appears.",
  },
  {
    question: "Does Rob work with VA financing?",
    answer:
      "Rob provides educational guidance on VA homebuying and works with buyers using VA financing. For specific VA loan questions, buyers should work directly with a VA-approved lender.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Military & PCS Relocation", url: "/military-relocation/" },
  { label: "US Air Force Academy", url: "/military-relocation/us-air-force-academy/" },
];

const orientationPoints = [
  {
    icon: MapPin,
    title: "Location & Commute Context",
    text: "US Air Force Academy sits on the northern edge of Colorado Springs near Monument. Buyers typically look at Monument, Black Forest, and north Colorado Springs neighborhoods for shorter commutes, as well as central Colorado Springs for more urban amenities.",
  },
  {
    icon: Home,
    title: "Housing Market Overview",
    text: "The Monument and north Colorado Springs area offers a range of housing types and price points. Monument tends to offer more suburban and semi-rural options, while north Colorado Springs provides more established neighborhoods with easier access to city amenities.",
  },
  {
    icon: Compass,
    title: "Planning for PCS Timing",
    text: "PCS moves often compress the homebuying process. Starting your market orientation early — even before orders are finalized — gives you a significant advantage in a competitive market.",
  },
];

const relatedGuides = [
  {
    title: "Fort Carson Relocation Guide",
    desc: "Buyer guidance for Fort Carson and the Colorado Springs area.",
    href: "/military-relocation/fort-carson/",
  },
  {
    title: "Peterson Space Force Base Relocation Guide",
    desc: "Buyer guidance for Peterson Space Force Base and the Colorado Springs area.",
    href: "/military-relocation/peterson-space-force-base/",
  },
  {
    title: "Schriever Space Force Base Relocation Guide",
    desc: "Buyer guidance for Schriever Space Force Base east of Colorado Springs.",
    href: "/military-relocation/schriever-space-force-base/",
  },
  {
    title: "PCS Colorado Buyer Guide",
    desc: "General PCS relocation guidance for Colorado buyers.",
    href: "/military-relocation/pcs-colorado/",
  },
];

export default function UsAirForceAcademy() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-cream" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
      <SeoHead
        metadata={{
          title: "US Air Force Academy Relocation Guide | Colorado Springs Real Estate | My Rock Realty",
          description: "Practical relocation guidance for buyers moving to the US Air Force Academy and the Colorado Springs area. PCS planning, neighborhood orientation, and local market context for military families.",
          canonicalUrl: "https://myrockhomes.com/military-relocation/us-air-force-academy/",
          image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/relocations-bg-KPyJJGfxXDepzsW2dzzYt2.webp",
        }}
        schema={[faqSchema]}
        />
      <div className="bg-charcoal/95 border-b border-white/5">
        <div className="container py-3">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>
      <section
        className="relative py-16 sm:py-24 md:py-32 bg-charcoal overflow-hidden"
        style={{ backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-charcoal/82" />
        <div className="container relative">
          <motion.span
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Military Relocation Guide
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5 max-w-3xl"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Relocating to <span className="text-gold">US Air Force Academy</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-cream/75 text-[15px] sm:text-base leading-relaxed max-w-2xl mb-8"
          >
            Practical real estate guidance for buyers relocating to the US Air Force Academy and
            the Colorado Springs area. Market orientation, neighborhood context, and PCS planning support.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            href="#contact-rob"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-gold text-charcoal font-semibold rounded-lg transition-all hover:bg-gold-light hover:shadow-xl hover:shadow-gold/20 active:scale-[0.98] text-[15px]"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Talk to Rob About US Air Force Academy
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </motion.a>
        </div>
      </section>
      <section className="py-12 sm:py-20 bg-cream">
        <div className="container max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Orientation for US Air Force Academy Buyers
          </motion.h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {orientationPoints.map((pt, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i }}
                className="p-6 bg-white border border-cream-dark/50 rounded"
              >
                <pt.icon size={22} className="text-gold mb-3" />
                <h3 className="font-semibold text-charcoal mb-2 text-[15px]" style={{ fontFamily: "'Outfit', sans-serif" }}>{pt.title}</h3>
                <p className="text-charcoal-light/70 text-sm leading-relaxed">{pt.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-20 bg-charcoal/5 border-y border-cream-dark/30">
        <div className="container max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Neighborhood Orientation
          </motion.h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: "Monument", note: "North of US Air Force Academy along I-25. Suburban character with strong demand." },
              { name: "Black Forest", note: "Northeast of US Air Force Academy. More rural character with larger lots." },
              { name: "North Colorado Springs", note: "Established neighborhoods with easy access to US Air Force Academy and city amenities." },
              { name: "Central Colorado Springs", note: "More urban options with a longer commute to the Academy." },
            ].map((n, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 * i }}
                className="p-4 bg-white border border-cream-dark/50 rounded"
              >
                <p className="font-semibold text-charcoal text-[15px] mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>{n.name}</p>
                <p className="text-charcoal-light/65 text-sm">{n.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-20 bg-cream">
        <div className="container max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Related Military Relocation Guides
          </motion.h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {relatedGuides.map((r, i) => (
              <motion.a
                key={i}
                href={r.href}
                initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i }}
                className="group block p-5 rounded bg-cream border border-cream-dark/50 hover:border-gold/40 transition-all hover:shadow-md">
                <h3 className="text-base font-semibold text-charcoal mb-2 group-hover:text-gold-dark transition-colors" style={{ fontFamily: "'Outfit', sans-serif" }}>{r.title}</h3>
                <p className="text-charcoal-light/65 text-sm leading-relaxed mb-3">{r.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-gold-dark text-sm font-medium group-hover:gap-2.5 transition-all">View Guide <ArrowRight size={14} /></span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-20 bg-cream">
        <div className="container max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Common Questions — US Air Force Academy Relocation
          </motion.h2>
          <div className="space-y-3">
            {faqContent.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 * i }}
                className="border border-cream-dark/60 rounded overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left bg-white hover:bg-cream/60 transition-colors"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-medium text-charcoal text-[15px] leading-snug" style={{ fontFamily: "'Outfit', sans-serif" }}>{item.question}</span>
                  <ChevronDown size={18} className={`text-gold-dark shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 pt-2 bg-cream/30">
                    <p className="text-charcoal-light/80 text-[15px] leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section id="contact-rob" className="py-12 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Ready to Plan Your US Air Force Academy Move?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-cream/70 text-[15px] sm:text-base leading-relaxed mb-8"
          >
            Whether you're months out from your PCS or actively searching, Rob can help you
            understand the Colorado Springs market and plan your move with confidence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
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
            <a href="tel:7203636544" className="flex items-center gap-2 hover:text-gold transition-colors"><Phone size={15} />(720) 363-6544</a>
            <span className="hidden sm:block">·</span>
            <a href="mailto:rob@myrockhomes.com" className="flex items-center gap-2 hover:text-gold transition-colors"><Mail size={15} />rob@myrockhomes.com</a>
          </div>
        </div>
      </section>
      <div className="bg-cream border-t border-cream-dark/40 py-5">
        <div className="container">
          <a href="/military-relocation/" className="inline-flex items-center gap-2 text-charcoal-light/60 hover:text-gold-dark text-sm transition-colors">
            ← Back to Military &amp; PCS Relocation
          </a>
        </div>
      </div>
    </div>
  );
}
