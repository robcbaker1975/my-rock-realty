/**
 * Peterson Space Force Base Relocation Guide — My Rock Realty
 * /military-relocation/peterson-space-force-base/
 * Design: Front Range Modern — matches existing site design system
 */
import { useState } from "react";
import SeoHead from "@/components/seo/SeoHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Home, ChevronDown, Phone, Mail, Compass } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/denver-rowhouses-hero_2f59d4ac.jpg";

const faqContent = [
  {
    question: "What communities do buyers relocating to Peterson Space Force Base typically consider?",
    answer:
      "Peterson Space Force Base is located on the east side of Colorado Springs. Buyers commonly look at east Colorado Springs neighborhoods, Falcon, Peyton, and Schriever-adjacent communities. The right fit depends on commute preferences, school priorities, and budget.",
  },
  {
    question: "Is Peterson Space Force Base close to Schriever Space Force Base?",
    answer:
      "Peterson Space Force Base and Schriever Space Force Base are both in the Colorado Springs area. Some buyers assigned to one installation consider communities that provide reasonable access to both, depending on their situation.",
  },
  {
    question: "Can Rob help me buy near Peterson Space Force Base if I'm still out of state?",
    answer:
      "Yes. Rob works with buyers planning a PCS move from out of state. He can provide market orientation, neighborhood guidance, and support for buyers navigating the process remotely before they arrive.",
  },
  {
    question: "How competitive is the Colorado Springs market for buyers?",
    answer:
      "Colorado Springs has been an active market, particularly in price ranges common for military buyers. Understanding current inventory, pricing trends, and neighborhood dynamics before you start searching helps you move efficiently when the right home appears.",
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
  { label: "Peterson Space Force Base", url: "/military-relocation/peterson-space-force-base/" },
];

const orientationPoints = [
  {
    icon: MapPin,
    title: "Location & Commute Context",
    text: "Peterson Space Force Base sits on the east side of Colorado Springs near Colorado Springs Airport. Buyers typically look at east-side neighborhoods, Falcon, and Peyton for shorter commutes, as well as central Colorado Springs for more urban amenities.",
  },
  {
    icon: Home,
    title: "Housing Market Overview",
    text: "Colorado Springs offers a range of housing types and price points. East-side communities near Peterson tend to offer newer construction and more suburban options, while central Colorado Springs provides more established neighborhoods.",
  },
  {
    icon: Compass,
    title: "Planning for PCS Timing",
    text: "PCS moves often compress the homebuying process. Starting your market orientation early — even before orders are finalized — gives you a significant advantage in a competitive market.",
  },
];

export default function PetersonSpaceForceBase() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="hub-page min-h-screen bg-cream" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
      <SeoHead
        metadata={{
          title: "Peterson Space Force Base Relocation Guide | Colorado Springs Real Estate | My Rock Realty",
          description: "Practical relocation guidance for buyers moving to Peterson Space Force Base and the Colorado Springs area. PCS planning, neighborhood orientation, and local market context for military families.",
          canonicalUrl: "https://myrockhomes.com/military-relocation/peterson-space-force-base/",
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
            Relocating to <span className="text-gold">Peterson Space Force Base</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-cream/80 text-[15px] sm:text-lg leading-relaxed max-w-2xl mb-8"
          >
            Practical real estate guidance for buyers relocating to Peterson Space Force Base and
            the Colorado Springs area. Local market orientation built for military timelines.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#contact-rob"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-charcoal font-semibold rounded-lg transition-all hover:bg-gold-light hover:shadow-xl hover:shadow-gold/20 active:scale-[0.98] text-[15px] sm:text-base"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Talk to Rob About Peterson Space Force Base
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

      <section className="py-12 sm:py-20 bg-white">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-3"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            What Buyers Should Know Before Searching
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-charcoal-light/70 text-[15px] sm:text-base leading-relaxed max-w-2xl mb-10"
          >
            Peterson Space Force Base buyers face compressed timelines and an unfamiliar market. Understanding
            the basics before you start searching gives you a meaningful advantage.
          </motion.p>
          <div className="grid sm:grid-cols-3 gap-5 sm:gap-7">
            {orientationPoints.map((pt, i) => (
              <motion.div
                key={pt.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i }}
                className="p-6 sm:p-7 rounded bg-cream border border-cream-dark/50"
              >
                <div className="w-11 h-11 rounded flex items-center justify-center bg-gold/10 text-gold-dark mb-4">
                  <pt.icon size={22} strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>{pt.title}</h3>
                <p className="text-charcoal-light/70 text-sm leading-relaxed">{pt.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-cream">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-3"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Communities Near Peterson Space Force Base
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-charcoal-light/70 text-[15px] sm:text-base leading-relaxed max-w-2xl mb-8"
          >
            Buyers relocating to Peterson Space Force Base typically consider communities on the east side of
            Colorado Springs and surrounding areas.
          </motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "East Colorado Springs", note: "Closest to Peterson Space Force Base with a range of established neighborhoods and price points." },
              { name: "Falcon / Peyton", note: "East of Colorado Springs with newer construction, more space, and suburban character." },
              { name: "Central Colorado Springs", note: "More urban options with proximity to amenities; slightly longer commute to Peterson." },
              { name: "Security-Widefield", note: "South of Colorado Springs, convenient to both Peterson and Fort Carson." },
              { name: "Fountain", note: "Affordable options south of the city with reasonable access to east-side installations." },
              { name: "Schriever-Adjacent", note: "If dual-installation access matters, communities between Peterson and Schriever Space Force Base." },
            ].map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.07 * i }}
                className="p-5 rounded bg-white border border-cream-dark/50"
              >
                <h3 className="text-base font-semibold text-charcoal mb-1.5" style={{ fontFamily: "'Outfit', sans-serif" }}>{c.name}</h3>
                <p className="text-charcoal-light/65 text-sm leading-relaxed">{c.note}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-charcoal-light/50 text-xs mt-5 leading-relaxed">
            Community descriptions are general orientation only. Commute times, pricing, and inventory vary. Confirm current conditions with Rob before making decisions.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-white">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-xl sm:text-2xl font-bold text-charcoal mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Related Military Relocation Resources
          </motion.h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "Military & PCS Relocation Hub", href: "/military-relocation/", desc: "Overview of all military relocation resources and support areas." },
              { title: "PCS Colorado Guide", href: "/military-relocation/pcs-colorado/", desc: "Planning your PCS move to Colorado — timelines, rent vs. buy, and market orientation." },
              { title: "VA Home Loans in Colorado", href: "/military-relocation/va-home-loans-colorado/", desc: "Educational overview of VA homebuying benefits and how the process works in Colorado." },
            ].map((r, i) => (
              <motion.a
                key={r.title} href={r.href}
                initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i }}
                className="group block p-5 rounded bg-cream border border-cream-dark/50 hover:border-gold/40 transition-all hover:shadow-md"
              >
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
            Common Questions — Peterson Space Force Base Relocation
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
            Ready to Plan Your Peterson Space Force Base Move?
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
