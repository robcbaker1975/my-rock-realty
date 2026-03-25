/**
 * Best Communities Near Fort Carson — My Rock Realty
 * /military-relocation/best-communities-near-fort-carson/
 * Design: Front Range Modern — matches existing site design system
 */
import { useState } from "react";
import SeoHead from "@/components/seo/SeoHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Phone, Mail, MapPin } from "lucide-react";

const HERO_BG = "/images/denver-rowhouses-hero.jpg";

const faqContent = [
  {
    question: "What areas are closest to Fort Carson's main gate?",
    answer:
      "The south side of Colorado Springs — including areas like Security-Widefield, Fountain, and parts of Pueblo West — offers some of the shortest drive times to Fort Carson's main gate. Buyers who prioritize gate proximity often focus their search in these areas first.",
  },
  {
    question: "Is Fountain a reasonable option for Fort Carson buyers?",
    answer:
      "Fountain is one of the most commonly considered areas for Fort Carson buyers because of its proximity to the installation and its generally lower price points compared to central Colorado Springs. Tradeoffs include fewer walkable amenities and a more suburban character. It works well for buyers who prioritize access and budget over proximity to downtown Colorado Springs.",
  },
  {
    question: "What about buying in Colorado Springs proper near Fort Carson?",
    answer:
      "Parts of Colorado Springs — particularly the southwest and south-central areas — offer reasonable access to Fort Carson while providing more urban amenities, established neighborhoods, and a wider range of price points. Commute times from these areas vary depending on traffic and specific location.",
  },
  {
    question: "How does Pueblo West compare as an option?",
    answer:
      "Pueblo West offers lower price points and more land per dollar than Colorado Springs, but it involves a longer commute to Fort Carson. It tends to appeal to buyers who are prioritizing space, acreage, or budget over gate proximity. It's worth understanding the drive before committing to that area.",
  },
  {
    question: "Should I buy near Fort Carson or rent first?",
    answer:
      "That depends on your timeline, how well you know the area, and your personal situation. Many buyers who are unfamiliar with Colorado Springs benefit from renting briefly to understand which neighborhoods feel right before committing to a purchase. Rob can help you think through the tradeoffs based on your specific orders and timeline.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Military & PCS Relocation", url: "/military-relocation/" },
  { label: "Best Communities Near Fort Carson", url: "/military-relocation/best-communities-near-fort-carson/" },
];

const communities = [
  {
    name: "Security-Widefield",
    context: "South Colorado Springs / immediate gate area",
    description:
      "One of the most established residential areas near Fort Carson's main gate. A mix of older and newer homes, generally accessible price points, and a strong military-family presence. Buyers focused on gate proximity often start here.",
    tradeoffs: "More suburban character; limited walkable amenities; older housing stock in some pockets.",
  },
  {
    name: "Fountain",
    context: "South of Colorado Springs, near Gate 1",
    description:
      "A smaller city south of Colorado Springs with a significant military-connected population. Offers some of the shortest drive times to Fort Carson and generally lower price points than central Colorado Springs. New construction is present in some areas.",
    tradeoffs: "Fewer dining and retail options than Colorado Springs proper; more car-dependent lifestyle.",
  },
  {
    name: "Southwest Colorado Springs",
    context: "Colorado Springs, south-side neighborhoods",
    description:
      "Established neighborhoods on the south and southwest side of Colorado Springs offer a reasonable balance of gate access and urban amenities. More variety in housing styles and price points than the immediate Fountain/Widefield corridor.",
    tradeoffs: "Commute times vary; some areas have older housing stock; price points generally higher than Fountain.",
  },
  {
    name: "Pueblo West",
    context: "Farther south, longer commute",
    description:
      "Pueblo West offers more land per dollar and lower overall price points than Colorado Springs. It attracts buyers who prioritize space, acreage, or budget and are willing to accept a longer daily commute to Fort Carson.",
    tradeoffs: "Longer commute; fewer services and amenities than Colorado Springs; different lifestyle character.",
  },
];

export default function BestCommunitiesNearFortCarson() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-cream" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
      <SeoHead
        metadata={{
          title: "Best Communities Near Fort Carson | Military Relocation | My Rock Realty",
          description: "Community orientation for military and PCS buyers relocating near Fort Carson in Colorado Springs. Practical guidance on neighborhoods, tradeoffs, and planning considerations — not a ranking list.",
          canonicalUrl: "https://myrockhomes.com/military-relocation/best-communities-near-fort-carson/",
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
            Fort Carson · Colorado Springs
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5 max-w-3xl"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Communities to Consider{" "}
            <span className="text-gold">Near Fort Carson</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-cream/80 text-[15px] sm:text-lg leading-relaxed max-w-2xl mb-8"
          >
            Relocating to Fort Carson means choosing from a range of Colorado Springs–area
            communities, each with different tradeoffs around commute, price, amenities, and
            lifestyle. This guide is a practical orientation — not a ranking — to help you
            start thinking through the options before your move.
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

      {/* ─── Orientation Note ─── */}
      <section className="py-8 bg-white border-b border-cream-dark/40">
        <div className="container max-w-3xl">
          <p className="text-charcoal-light/70 text-[15px] leading-relaxed">
            <strong className="text-charcoal font-semibold">How to use this guide:</strong>{" "}
            The communities below represent plausible options for buyers relocating near Fort Carson.
            Commute times, prices, and neighborhood character change — this is a starting orientation,
            not a guarantee of fit. Rob can provide current market context once you're ready to
            narrow your search.
          </p>
        </div>
      </section>

      {/* ─── Communities ─── */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-3"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Community Overview
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-charcoal-light/70 text-[15px] sm:text-base leading-relaxed max-w-2xl mb-10"
          >
            Each area below has a different character and set of tradeoffs. Most Fort Carson
            buyers weigh gate proximity, price point, school considerations, and lifestyle
            preferences differently — there's no single right answer.
          </motion.p>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {communities.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="p-6 sm:p-8 rounded bg-cream border border-cream-dark/60"
              >
                <div className="flex items-start gap-3 mb-3">
                  <MapPin size={18} className="text-gold-dark mt-0.5 shrink-0" strokeWidth={1.8} />
                  <div>
                    <h3
                      className="text-lg font-semibold text-charcoal leading-snug"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {c.name}
                    </h3>
                    <span className="text-xs text-charcoal-light/50 uppercase tracking-wide">{c.context}</span>
                  </div>
                </div>
                <p className="text-charcoal-light/70 leading-relaxed mb-4 text-[15px]">
                  {c.description}
                </p>
                <p className="text-charcoal-light/50 text-xs leading-relaxed border-t border-cream-dark/50 pt-3">
                  <strong className="text-charcoal-light/60">Tradeoffs to consider:</strong> {c.tradeoffs}
                </p>
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
              { label: "Fort Carson Base Guide", href: "/military-relocation/fort-carson/" },
              { label: "PCS Moves to Colorado", href: "/military-relocation/pcs-colorado/" },
              { label: "PCS Timeline Checklist", href: "/military-relocation/pcs-timeline-checklist/" },
              { label: "Remote Home Tours", href: "/military-relocation/remote-home-tours/" },
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
            Common Questions — Fort Carson Area
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
            Ready to Talk Through Your Options?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-cream/70 text-[15px] sm:text-base leading-relaxed mb-8"
          >
            The best next step is a conversation about your timeline, priorities, and what
            matters most for your family's move. Rob can provide current market context and
            help you figure out which areas make the most sense to focus on.
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
