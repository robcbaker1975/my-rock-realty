/**
 * Fort Carson Relocation Guide — My Rock Realty
 * /military-relocation/fort-carson/
 * Design: Front Range Modern — matches existing site design system
 * Palette: Warm charcoal (#292524), cream (#F5F0EB), antique gold (#C9A96E)
 * Typography: Outfit (display) + Libre Franklin (body)
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
    question: "What communities do buyers relocating to Fort Carson typically consider?",
    answer:
      "Buyers relocating to Fort Carson most commonly look at Colorado Springs neighborhoods and surrounding communities including Fountain, Security-Widefield, Pueblo West, and Peyton. The right fit depends on commute preferences, school priorities, and budget.",
  },
  {
    question: "How far in advance should I start my home search before a Fort Carson PCS?",
    answer:
      "Starting 3–6 months before your report date gives you the most flexibility. Colorado Springs is a competitive market, and having time to understand neighborhoods, get pre-approved, and make informed decisions reduces stress significantly.",
  },
  {
    question: "Can Rob help me buy a home near Fort Carson if I'm still out of state?",
    answer:
      "Yes. Rob works with buyers who are planning a PCS move from out of state. He can provide market orientation, neighborhood guidance, and support for buyers navigating the process remotely before they arrive.",
  },
  {
    question: "Is the Colorado Springs market competitive for buyers?",
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
  { label: "Fort Carson", url: "/military-relocation/fort-carson/" },
];

const orientationPoints = [
  {
    icon: MapPin,
    title: "Location & Commute Context",
    text: "Fort Carson is located on the south side of Colorado Springs. Buyers typically look at communities ranging from south Colorado Springs to Fountain, Security-Widefield, and Pueblo West, depending on commute tolerance and housing preferences.",
  },
  {
    icon: Home,
    title: "Housing Market Overview",
    text: "Colorado Springs offers a range of housing types and price points. Understanding current inventory and neighborhood dynamics before you start your search helps you make confident decisions on a military timeline.",
  },
  {
    icon: Compass,
    title: "Planning for PCS Timing",
    text: "PCS moves often compress the homebuying process. Starting your market orientation early — even before orders are finalized — gives you a significant advantage in a competitive market.",
  },
];

export default function FortCarson() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-cream" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
      <SeoHead
        metadata={{
          title: "Fort Carson Relocation Guide | Colorado Springs Real Estate | My Rock Realty",
          description: "Practical relocation guidance for buyers moving to Fort Carson and the Colorado Springs area. PCS planning, neighborhood orientation, and local market context for military families.",
          canonicalUrl: "https://www.myrockhomes.com/military-relocation/fort-carson/",
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
            Military Relocation Guide
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5 max-w-3xl"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Relocating to{" "}
            <span className="text-gold">Fort Carson</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-cream/80 text-[15px] sm:text-lg leading-relaxed max-w-2xl mb-8"
          >
            Practical real estate guidance for buyers relocating to Fort Carson and the Colorado
            Springs area. Whether you're PCS-ing on orders or planning ahead, local market
            orientation makes the difference.
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
              Talk to Rob About Fort Carson
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

      {/* ─── Orientation Points ─── */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-3"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            What Buyers Should Know Before Searching
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-charcoal-light/70 text-[15px] sm:text-base leading-relaxed max-w-2xl mb-10"
          >
            Fort Carson buyers face a unique combination of compressed timelines, competitive
            inventory, and unfamiliar geography. Understanding the basics before you start
            searching gives you a meaningful advantage.
          </motion.p>
          <div className="grid sm:grid-cols-3 gap-5 sm:gap-7">
            {orientationPoints.map((pt, i) => (
              <motion.div
                key={pt.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="p-6 sm:p-7 rounded bg-cream border border-cream-dark/50"
              >
                <div className="w-11 h-11 rounded flex items-center justify-center bg-gold/10 text-gold-dark mb-4">
                  <pt.icon size={22} strokeWidth={1.8} />
                </div>
                <h3
                  className="text-lg font-semibold text-charcoal mb-2"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {pt.title}
                </h3>
                <p className="text-charcoal-light/70 text-sm leading-relaxed">{pt.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Nearby Communities ─── */}
      <section className="py-12 sm:py-20 bg-cream">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-3"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Communities Near Fort Carson
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-charcoal-light/70 text-[15px] sm:text-base leading-relaxed max-w-2xl mb-8"
          >
            Buyers relocating to Fort Carson typically consider a range of communities in and
            around Colorado Springs. The right fit depends on your commute preferences, family
            priorities, and housing budget.
          </motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Colorado Springs", note: "Broad range of neighborhoods, price points, and school options within the city." },
              { name: "Fountain", note: "South of Fort Carson with more affordable price points and direct access to the installation." },
              { name: "Security-Widefield", note: "Established community between Fort Carson and Fountain with a range of housing options." },
              { name: "Pueblo West", note: "Further south with larger lots and lower price points; longer commute to post." },
              { name: "Peyton / Falcon", note: "East of Colorado Springs with newer construction and more space, longer commute." },
              { name: "Manitou Springs / Old Colorado City", note: "West side options with character and proximity to the mountains; varied price points." },
            ].map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.07 * i }}
                className="p-5 rounded bg-white border border-cream-dark/50"
              >
                <h3
                  className="text-base font-semibold text-charcoal mb-1.5"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {c.name}
                </h3>
                <p className="text-charcoal-light/65 text-sm leading-relaxed">{c.note}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-charcoal-light/50 text-xs mt-5 leading-relaxed">
            Community descriptions are general orientation only. Commute times, pricing, and inventory vary. Confirm current conditions with Rob before making decisions.
          </p>
        </div>
      </section>

      {/* ─── Related Resources ─── */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
                key={r.title}
                href={r.href}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="group block p-5 rounded bg-cream border border-cream-dark/50 hover:border-gold/40 transition-all hover:shadow-md"
              >
                <h3
                  className="text-base font-semibold text-charcoal mb-2 group-hover:text-gold-dark transition-colors"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {r.title}
                </h3>
                <p className="text-charcoal-light/65 text-sm leading-relaxed mb-3">{r.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-gold-dark text-sm font-medium group-hover:gap-2.5 transition-all">
                  View Guide <ArrowRight size={14} />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-12 sm:py-20 bg-cream">
        <div className="container max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Common Questions — Fort Carson Relocation
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
            Ready to Plan Your Fort Carson Move?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-cream/70 text-[15px] sm:text-base leading-relaxed mb-8"
          >
            Whether you're months out from your PCS or actively searching, Rob can help you
            understand the Colorado Springs market and plan your next move with confidence.
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
        </div>
      </div>
    </div>
  );
}
