/**
 * Best Communities Near Peterson Space Force Base — My Rock Realty
 * /military-relocation/best-communities-near-peterson-space-force-base/
 * Design: Front Range Modern — matches existing site design system
 */
import { useState } from "react";
import SeoHead from "@/components/seo/SeoHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Phone, Mail, MapPin } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/denver-rowhouses-hero_2f59d4ac.jpg";

const faqContent = [
  {
    question: "What areas are closest to Peterson Space Force Base?",
    answer:
      "Peterson SFB sits on the east side of Colorado Springs near the Colorado Springs Airport. The areas with the shortest drive times include Falcon, Peyton, and parts of east Colorado Springs. Buyers focused on gate proximity typically start their search in these corridors.",
  },
  {
    question: "Is Falcon a good option for Peterson buyers?",
    answer:
      "Falcon is one of the most commonly considered areas for Peterson buyers. It offers newer construction, more land per dollar than central Colorado Springs, and reasonable access to the east side of the installation. The tradeoff is a more rural character with fewer walkable amenities and a longer drive to downtown Colorado Springs.",
  },
  {
    question: "What about buying in central or north Colorado Springs?",
    answer:
      "Central and north Colorado Springs offer more urban amenities, established neighborhoods, and a wider range of price points — but commute times to Peterson from these areas are longer than from the east side. Some buyers accept a longer commute in exchange for proximity to schools, shopping, and the broader Colorado Springs community.",
  },
  {
    question: "How does Peyton compare as an option?",
    answer:
      "Peyton is farther east than Falcon and offers more rural acreage-style properties at lower price points. It appeals to buyers who want land and space and are willing to accept a longer commute. It's worth understanding the drive before committing to that area.",
  },
  {
    question: "Should I buy near Peterson or rent first?",
    answer:
      "That depends on your timeline, how well you know the Colorado Springs area, and your personal situation. Buyers unfamiliar with the east-side communities often benefit from renting briefly to understand which areas feel right before purchasing. Rob can help you think through the tradeoffs based on your specific orders and timeline.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Military & PCS Relocation", url: "/military-relocation/" },
  { label: "Best Communities Near Peterson SFB", url: "/military-relocation/best-communities-near-peterson-space-force-base/" },
];

const communities = [
  {
    name: "Falcon",
    context: "East of Colorado Springs, near Peterson",
    description:
      "A fast-growing community east of Colorado Springs with newer construction, more land per dollar than central areas, and reasonable access to Peterson SFB. Popular with military families who want more space without going too far from the installation.",
    tradeoffs: "More rural character; fewer walkable amenities; longer drive to downtown Colorado Springs.",
  },
  {
    name: "East Colorado Springs",
    context: "Established east-side neighborhoods",
    description:
      "Established neighborhoods on the east side of Colorado Springs offer shorter commutes to Peterson than central or north-side areas, with more urban services and amenities than Falcon. Price points vary widely by neighborhood and housing age.",
    tradeoffs: "Older housing stock in some areas; neighborhood quality varies; less new construction than Falcon.",
  },
  {
    name: "Peyton",
    context: "Farther east, rural/acreage character",
    description:
      "Peyton sits farther east and offers acreage-style properties at lower price points than Colorado Springs proper. It attracts buyers who prioritize land and space and are willing to accept a longer daily commute to Peterson.",
    tradeoffs: "Longer commute; very rural character; limited services and amenities nearby.",
  },
  {
    name: "Central / North Colorado Springs",
    context: "Longer commute, more urban amenities",
    description:
      "Central and north Colorado Springs offer a wider range of established neighborhoods, schools, and amenities. Buyers in these areas trade a longer commute to Peterson for proximity to more of what Colorado Springs has to offer.",
    tradeoffs: "Longer commute to Peterson; higher price points in desirable neighborhoods.",
  },
];

export default function BestCommunitiesNearPetersonSpaceForceBase() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="hub-page min-h-screen bg-cream" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
      <SeoHead
        metadata={{
          title: "Best Communities Near Peterson Space Force Base | Military Relocation | My Rock Realty",
          description: "Community orientation for military and PCS buyers relocating near Peterson Space Force Base in Colorado Springs. Practical guidance on east-side neighborhoods, tradeoffs, and planning considerations.",
          canonicalUrl: "https://myrockhomes.com/military-relocation/best-communities-near-peterson-space-force-base/",
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
            Peterson Space Force Base · Colorado Springs
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5 max-w-3xl"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Communities to Consider{" "}
            <span className="text-gold">Near Peterson Space Force Base</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-cream/80 text-[15px] sm:text-lg leading-relaxed max-w-2xl mb-8"
          >
            Peterson SFB sits on the east side of Colorado Springs, which shapes the
            community options most relevant for buyers relocating here. This guide is a
            practical orientation — not a ranking — to help you understand the east-side
            tradeoffs before your move.
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
            The communities below represent plausible options for buyers relocating near Peterson SFB.
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
            Peterson's east-side location means buyers typically weigh proximity to the
            installation against access to Colorado Springs' broader amenities. There's no
            single right answer — it depends on your priorities.
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
              { label: "Peterson Space Force Base Guide", href: "/military-relocation/peterson-space-force-base/" },
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
            Common Questions — Peterson Area
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
