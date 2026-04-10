/**
 * Buying Remotely — My Rock Realty
 * /military-relocation/buying-remotely/
 * Design: Front Range Modern — matches existing site design system
 * Remote home buying support for PCS and out-of-state buyers
 */
import { useState } from "react";
import SeoHead from "@/components/seo/SeoHead";
import Navbar from "@/components/Navbar";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import LeadForm from "@/components/LeadForm";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Phone, Mail, Video, Monitor, MapPin } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/denver-rowhouses-hero_2f59d4ac.jpg";

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
      "The best starting point is a conversation about your timeline, target neighborhoods, and what you need to feel confident making a decision remotely. From there, Rob can explain which format makes the most sense for your situation and what to expect from the process.",
  },
  {
    question: "How will I know what Rob actually thinks about a home?",
    answer:
      "Rob gives you his honest read — not a sales pitch. If a home has a layout that doesn't work well for most buyers, a location that creates resale risk, or condition issues that will show up on inspection, he'll tell you. The goal is to help you make a clear decision, not to push you toward an offer.",
  },
  {
    question: "What happens if I make an offer and something comes up on inspection?",
    answer:
      "Inspection contingencies are a standard buyer protection and are part of every offer Rob structures for remote buyers. If the inspection turns up something significant, you'll have options — negotiate a repair credit, request a price adjustment, or walk away. Rob will walk you through what the findings actually mean before you decide.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Military & PCS Relocation", url: "/military-relocation/" },
  { label: "Buying Remotely", url: "/military-relocation/buying-remotely/" },
];

const tourFormats = [
  {
    icon: Video,
    title: "Recorded Video Tours",
    description:
      "Rob tours the property on your behalf and delivers a narrated video walkthrough. He covers layout, condition, neighborhood context, and anything that would be hard to assess from listing photos — including things worth flagging before you get too far into a decision.",
    note: "Available for properties with confirmed access. Delivery timing depends on scheduling and property availability.",
  },
  {
    icon: Monitor,
    title: "Live Virtual Tours",
    description:
      "A real-time video walkthrough conducted by Rob while you participate remotely. You can direct the tour, ask questions as they come up, and get live observations on the things that matter to your search — as close to being there as possible without being local.",
    note: "Requires scheduling coordination and confirmed property access. Best for buyers with some timeline flexibility.",
  },
  {
    icon: MapPin,
    title: "In-Person Tour Blocks",
    description:
      "Rob tours multiple properties in a single scheduled session, documenting each with video and notes. Efficient for buyers working through a shortlist who want thorough, honest coverage of several options without needing to be present for each one.",
    note: "Best suited for buyers with a defined shortlist. Scope and number of properties are discussed in advance.",
  },
];

export default function BuyingRemotely() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="hub-page min-h-screen bg-cream" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
      <Navbar compact />
      <SeoHead
        metadata={{
          title: "Buying a Home Remotely | Colorado Remote Home Buying Support | My Rock Realty",
          description: "Remote home buying support for military and PCS buyers relocating to Colorado Springs and the Denver metro. Recorded video tours, live virtual tours, and in-person tour blocks for buyers who aren't yet local.",
          canonicalUrl: "https://myrockhomes.com/military-relocation/buying-remotely/",
          image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/relocations-bg-KPyJJGfxXDepzsW2dzzYt2.webp",
        }}
        schema={[faqSchema]}
        />

      {/* ─── Hero ─── */}
      <section
        className="relative py-16 sm:py-24 md:py-32 bg-charcoal overflow-hidden pt-[72px]"
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
            Buying a Home Remotely{" "}
            <span className="text-gold">Without Guessing</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-cream/80 text-[15px] sm:text-lg leading-relaxed max-w-2xl mb-4"
          >
            Most remote buyers aren't worried about finding homes to look at. They're worried about making a major financial decision on a home they haven't walked through — and not knowing what they missed.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-cream/80 text-[15px] sm:text-lg leading-relaxed max-w-2xl mb-8"
          >
            Remote home touring is how Rob helps PCS and out-of-state buyers get honest, on-the-ground information — so you can evaluate homes clearly, narrow the right areas, and make decisions with confidence instead of pressure.
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

      {/* ─── What Rob Actually Does ─── */}
      <section className="py-12 sm:py-20 bg-cream border-b border-cream-dark/40">
        <div className="container max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-5"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            What Rob actually does for remote buyers
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4 text-[15px] sm:text-base leading-relaxed text-charcoal-light/80"
          >
            <p>
              Before you start touring homes remotely, the most useful thing is usually a conversation about areas. A lot of remote buyers waste time evaluating homes in neighborhoods that don't actually fit their priorities — commute, schools, resale, lifestyle. Rob helps you narrow that down first, so you're not chasing the wrong shortlist.
            </p>
            <p>
              Once you have a list worth looking at, Rob tours properties on your behalf and gives you an honest read — not a highlight reel. He covers layout, condition, what the neighborhood actually feels like, and anything that would be hard to assess from listing photos alone. If something looks off, he'll tell you.
            </p>
            <p>
              He also helps you understand what your standard buyer protections look like in a remote purchase — inspection contingencies, what the inspection process covers, and what your options are if something comes up. The goal is to make sure you're not flying blind on any part of the process.
            </p>
            <p>
              Communication is direct and consistent. You'll know what's happening, what the next step is, and what Rob actually thinks — not just what sounds reassuring.
            </p>
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
            Remote Tour Formats
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-charcoal-light/70 text-[15px] sm:text-base leading-relaxed max-w-2xl mb-10"
          >
            Three formats are available depending on your timeline, how many properties you're evaluating, and how much real-time interaction you need. Which format makes sense for your situation is part of the first conversation.
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
              Remote touring formats, scheduling, and structure are discussed at the start of the working relationship. Availability depends on property access, market conditions, and representation context. Rob will be direct about what's realistic for your specific situation and timeline.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── How It Reduces Risk ─── */}
      <section className="py-12 sm:py-20 bg-cream border-t border-b border-cream-dark/40">
        <div className="container max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-5"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            How remote touring reduces risk — not just distance
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4 text-[15px] sm:text-base leading-relaxed text-charcoal-light/80"
          >
            <p>
              The risk in buying remotely isn't just that you can't see the home. It's that listing photos are optimized to look good, and you can't ask the right questions of someone who's actually standing in the property.
            </p>
            <p>
              Remote touring with Rob gives you a second set of eyes that's working for you — not for the sale. He's looking at the things that matter for your decision: layout flow, condition signals, how the home sits on the lot, what the street and immediate neighborhood actually feel like, and whether anything looks like it'll show up on inspection.
            </p>
            <p>
              On top of that, standard buyer protections still apply. Inspection contingencies are part of every offer. If the inspection turns up something significant, you'll have options — negotiate a credit, request a price adjustment, or walk away. Rob will explain what the findings mean before you decide, not after.
            </p>
            <p>
              The combination of honest pre-offer information and intact buyer protections is what makes remote purchasing workable — not just possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── PCS Buying ─── */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <p
              className="text-gold text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              PCS Home Buying
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-cream mb-8"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              PCS Home Buying in Colorado Without Guessing Your Way Into the Wrong Move
            </h2>
            <div className="space-y-5 text-cream/80 text-base sm:text-lg leading-relaxed">
              <p>A lot of PCS buyers think the first step is finding homes to look at.</p>
              <p>Sometimes it is.</p>
              <p>
                A lot of times, though, the bigger issue is figuring out what actually makes sense
                before the search starts pulling you in five directions at once.
              </p>
              <p>
                Wrong area.<br />
                Wrong payment.<br />
                Wrong home type.<br />
                Wrong plan for how long you may even be here.
              </p>
              <p>That gets expensive.</p>
              <p>A house can be nice and still be the wrong move.</p>
              <p>
                If you are buying in Colorado on orders, I do not want to start with hype, tours, or
                whatever just popped up online.
              </p>
              <p>I want to start with the move.</p>
              <p>
                What base are you tied to?<br />
                What commute is actually realistic?<br />
                What payment feels fine when this is your real life and not just a lender number?<br />
                What kind of home works for this assignment?<br />
                And if plans change, how exposed are you?
              </p>
              <p>
                I would rather slow the search down for a week than help you clean up a bad decision
                for five years.
              </p>
              <p>
                I am not trying to get you under contract fast. I am trying to keep you from getting
                under contract wrong.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a
                href="mailto:rob@myrockhomes.com?subject=PCS%20Home%20Buying%20in%20Colorado"
                className="inline-block px-6 py-3 bg-gold text-charcoal text-sm font-semibold rounded text-center hover:bg-gold/90 transition-colors"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Talk Through Your PCS Move
              </a>
              <a
                href="mailto:rob@myrockhomes.com?subject=PCS%20Home%20Buying%20in%20Colorado"
                className="inline-block px-6 py-3 border border-cream/30 text-cream text-sm font-semibold rounded text-center hover:border-cream/60 transition-colors"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Figure Out Whether Buying Now Makes Sense
              </a>
              <a
                href="mailto:rob@myrockhomes.com?subject=PCS%20Home%20Buying%20in%20Colorado"
                className="inline-block px-6 py-3 border border-cream/30 text-cream text-sm font-semibold rounded text-center hover:border-cream/60 transition-colors"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Narrow the Right Fit First
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Related Resources ─── */}
      <section className="py-10 sm:py-16 bg-white border-t border-cream-dark/40">
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
                className="group flex items-center justify-between p-4 rounded bg-cream border border-cream-dark/60 hover:border-gold/40 transition-all hover:shadow-md hover:shadow-gold/5"
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
      <section className="py-12 sm:py-20 bg-cream border-t border-cream-dark/40">
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

      {/* ─── Contact Form ─── */}
      <section id="contact-rob" className="py-12 sm:py-20 bg-charcoal">
        <div className="container max-w-4xl">
          <LeadForm
            variant="pcs"
            source="Buying Remotely"
            dark
          />
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
