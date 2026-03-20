/**
 * Remote Home Tours — My Rock Realty
 * /military-relocation/remote-home-tours/
 * Design: Front Range Modern — matches existing site design system
 */
import { useState } from "react";
import SeoHead from "@/components/seo/SeoHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Phone, Mail, Video, Monitor, MapPin } from "lucide-react";

const HERO_BG = "/images/denver-rowhouses-hero.jpg";

const faqContent = [
  {
    question: "Who is remote home touring designed for?",
    answer:
      "Remote home touring is designed primarily for military and PCS buyers who are not yet local to Colorado Springs or the Denver metro. If you're relocating on orders, managing a compressed timeline, or need to make decisions before you can visit in person, remote touring options help you stay informed and move with confidence.",
  },
  {
    question: "How does a live virtual tour work?",
    answer:
      "A live virtual tour is a real-time video walkthrough of a property conducted by Rob while you participate remotely via video call. You can ask questions, request specific views, and get Rob's on-the-ground observations as the tour happens. Availability depends on property access and scheduling.",
  },
  {
    question: "What is a recorded video tour?",
    answer:
      "A recorded video tour is a detailed walkthrough of a property captured on video and delivered to you for review at your convenience. Rob narrates the tour with observations relevant to your priorities — condition, layout, neighborhood context, and anything that would be hard to assess from listing photos alone.",
  },
  {
    question: "What are in-person tour blocks?",
    answer:
      "An in-person tour block is a scheduled session where Rob tours multiple properties on your behalf in a single outing, documenting each with video and notes. This format is efficient for buyers who want to evaluate several options in a compressed timeframe without being present.",
  },
  {
    question: "Can I make an offer on a home I've only seen remotely?",
    answer:
      "Yes. Military buyers regularly make offers on homes they haven't seen in person, particularly when timelines are compressed. Rob can provide the context and documentation you need to make an informed decision remotely. Inspection contingencies and other standard buyer protections remain available and are discussed as part of the process.",
  },
  {
    question: "How do I get started with remote home touring?",
    answer:
      "The best starting point is a conversation with Rob about your timeline, target neighborhoods, and what you need to feel confident making a decision remotely. From there, he can explain which format makes the most sense for your situation and what to expect from the process.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Military & PCS Relocation", url: "/military-relocation/" },
  { label: "Remote Home Tours", url: "/military-relocation/remote-home-tours/" },
];

const tourFormats = [
  {
    icon: Video,
    title: "Recorded Video Tours",
    description:
      "Rob tours the property on your behalf and delivers a detailed narrated video walkthrough. Covers layout, condition, neighborhood context, and anything that matters to your search — reviewed on your schedule.",
    note: "Available for properties with confirmed access. Delivery timing depends on scheduling and property availability.",
  },
  {
    icon: Monitor,
    title: "Live Virtual Tours",
    description:
      "A real-time video walkthrough conducted by Rob while you participate remotely. Ask questions, request specific views, and get live observations as the tour happens — as close to being there as possible without being local.",
    note: "Requires scheduling coordination and confirmed property access. Best for buyers with some timeline flexibility.",
  },
  {
    icon: MapPin,
    title: "In-Person Tour Blocks",
    description:
      "Rob tours multiple properties in a single scheduled session, documenting each with video and notes. Efficient for buyers evaluating several options in a compressed timeframe who want thorough coverage without being present.",
    note: "Best suited for buyers with a defined shortlist. Scope and number of properties are discussed in advance.",
  },
];

export default function RemoteHomeTours() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-cream" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
      <SeoHead
        metadata={{
          title: "Remote Home Tours for Military & PCS Buyers | My Rock Realty",
          description: "Remote home touring support for military and PCS buyers relocating to Colorado Springs and the Denver metro. Recorded video tours, live virtual tours, and in-person tour blocks for buyers who aren't yet local.",
          canonicalUrl: "https://www.myrockhomes.com/military-relocation/remote-home-tours/",
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
            Remote Home Tours{" "}
            <span className="text-gold">for Military & PCS Buyers</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-cream/80 text-[15px] sm:text-lg leading-relaxed max-w-2xl mb-8"
          >
            When you're relocating to Colorado on military orders, being physically present
            for every home tour isn't always possible. Remote home touring gives you the
            information and perspective you need to make confident decisions — without
            requiring you to be local first.
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

      {/* ─── Tour Formats ─── */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-3"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Current Remote Tour Formats
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-charcoal-light/70 text-[15px] sm:text-base leading-relaxed max-w-2xl mb-10"
          >
            Three formats are currently available depending on your timeline, how many
            properties you're evaluating, and how much real-time interaction you need.
            Availability and scope depend on property access, scheduling, and your
            representation context — discussed at the start of the process.
          </motion.p>
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            {tourFormats.map((format, i) => (
              <motion.div
                key={format.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="p-6 sm:p-8 rounded bg-cream border border-cream-dark/60"
              >
                <div className="w-12 h-12 rounded flex items-center justify-center bg-gold/10 text-gold-dark mb-5">
                  <format.icon size={24} strokeWidth={1.8} />
                </div>
                <h3
                  className="text-lg font-semibold text-charcoal mb-3"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {format.title}
                </h3>
                <p className="text-charcoal-light/70 leading-relaxed mb-4 text-[15px]">
                  {format.description}
                </p>
                <p className="text-charcoal-light/50 text-xs leading-relaxed border-t border-cream-dark/50 pt-3 mt-3">
                  {format.note}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Expectation-setting note */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 p-5 rounded bg-cream border border-cream-dark/50"
          >
            <p className="text-charcoal-light/70 text-[15px] leading-relaxed">
              <strong className="text-charcoal font-semibold">A note on scope and availability:</strong>{" "}
              Remote touring formats, scheduling, and structure are discussed at the start of
              the working relationship. Availability depends on property access, market
              conditions, and representation context. Rob will be direct about what's
              realistic for your specific situation and timeline.
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
            Common Questions — Remote Home Tours
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
            Ready to Start Your Remote Search?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-cream/70 text-[15px] sm:text-base leading-relaxed mb-8"
          >
            The first step is a conversation about your timeline, target area, and what
            you need to feel confident making decisions remotely. Rob can explain what
            remote touring looks like for your specific situation and what to expect
            from the process.
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
