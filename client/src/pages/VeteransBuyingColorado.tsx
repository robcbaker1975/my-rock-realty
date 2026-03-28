/**
 * Veterans Buying in Colorado — My Rock Realty
 * /military-relocation/veterans-buying-colorado/
 * Design: Front Range Modern — matches existing site design system
 */
import { useState } from "react";
import SeoHead from "@/components/seo/SeoHead";
import LeadForm from "@/components/LeadForm";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { motion } from "framer-motion";
import { ArrowRight, Home, ChevronDown, Shield, MapPin, Compass } from "lucide-react";

const HERO_BG = "/images/denver-rowhouses-hero.jpg";

const faqContent = [
  {
    question: "Can veterans use VA loan benefits to buy in Colorado?",
    answer:
      "Yes. Eligible veterans can use VA loan benefits to purchase a primary residence in Colorado. VA financing offers meaningful advantages including no down payment requirement and no private mortgage insurance. For specific eligibility and loan questions, veterans should work directly with a VA-approved lender.",
  },
  {
    question: "What Colorado markets do veterans most commonly consider?",
    answer:
      "Colorado's major veteran communities are concentrated around Colorado Springs, the Denver metro, and the northern Front Range. Each area has distinct price points, neighborhoods, and community dynamics. Getting oriented to the market before starting your search helps you focus your efforts efficiently.",
  },
  {
    question: "Is the Colorado market competitive for buyers using VA financing?",
    answer:
      "Colorado's major markets are active and competitive. VA financing is a legitimate and strong offer when structured well. Rob works with buyers using VA financing and can help you understand how to position your offer effectively in the current market.",
  },
  {
    question: "What should veterans know about the Colorado homebuying process?",
    answer:
      "The Colorado homebuying process follows standard real estate practices, with some nuances around VA appraisals and property condition requirements. Getting pre-approved, understanding current market conditions, and working with an agent familiar with VA transactions helps the process run smoothly.",
  },
  {
    question: "Does Rob work specifically with veteran buyers?",
    answer:
      "Rob works with all buyer types, including veterans using VA financing. He provides educational guidance on the VA homebuying process and can connect buyers with VA-approved lenders. His focus is on helping buyers make informed, confident decisions — not on pushing a transaction.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Military & PCS Relocation", url: "/military-relocation/" },
  { label: "Veterans Buying in Colorado", url: "/military-relocation/veterans-buying-colorado/" },
];

const considerationPoints = [
  {
    icon: Shield,
    title: "VA Loan Benefits in Colorado",
    text: "Eligible veterans can use VA loan benefits to purchase a primary residence with no down payment and no private mortgage insurance requirement. For specific eligibility and loan questions, veterans should work directly with a VA-approved lender.",
  },
  {
    icon: MapPin,
    title: "Choosing the Right Colorado Market",
    text: "Colorado's veteran communities span Colorado Springs, the Denver metro, and the Front Range. Each area has different price points, neighborhood character, and proximity to VA services. Understanding these differences helps you focus your search on the right area.",
  },
  {
    icon: Home,
    title: "Market Orientation Before You Search",
    text: "Colorado's major markets are competitive. Getting oriented to current inventory, pricing trends, and neighborhood dynamics before you start searching helps you move confidently when the right home appears.",
  },
  {
    icon: Compass,
    title: "Long-Term Fit for Colorado Living",
    text: "Many veterans choose Colorado for its outdoor access, quality of life, and strong veteran community. Understanding what matters most to you — commute, school districts, neighborhood character — helps narrow the search to homes that will serve you well over time.",
  },
];

export default function VeteransBuyingColorado() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-cream" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
      <SeoHead
        metadata={{
          title: "Veterans Buying a Home in Colorado | My Rock Realty",
          description: "Educational homebuying guidance for veterans considering a Colorado purchase. VA loan context, market orientation, and buyer-focused support across Colorado Springs and the Denver metro.",
          canonicalUrl: "https://myrockhomes.com/military-relocation/veterans-buying-colorado/",
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
            Veterans{" "}
            <span className="text-gold">Buying in Colorado</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-cream/80 text-[15px] sm:text-lg leading-relaxed max-w-2xl mb-8"
          >
            Colorado is home to a large and growing veteran community. Whether you're
            relocating after service, returning to a familiar area, or buying for the
            first time, this guide covers the practical considerations for veteran buyers
            in Colorado's current market.
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

      {/* ─── Considerations ─── */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-3"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            What Veteran Buyers Are Thinking Through
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-charcoal-light/70 text-[15px] sm:text-base leading-relaxed max-w-2xl mb-10"
          >
            These are the planning considerations Rob most commonly helps veteran buyers
            work through when considering a Colorado purchase.
          </motion.p>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {considerationPoints.map((point, i) => (
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
              { label: "VA Home Loans in Colorado", href: "/military-relocation/va-home-loans-colorado/" },
              { label: "PCS Moves to Colorado", href: "/military-relocation/pcs-colorado/" },
              { label: "Military Spouses Buying in Colorado", href: "/military-relocation/military-spouses-buying-colorado/" },
              { label: "PCS Timeline Checklist", href: "/military-relocation/pcs-timeline-checklist/" },
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
            Common Questions — Veterans Buying in Colorado
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
        <div className="container max-w-2xl">
          <LeadForm
            variant="pcs"
            source="Veterans Buying Colorado"
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
