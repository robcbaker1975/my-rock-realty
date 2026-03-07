import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/hero-bg-dyEKuHhWXn8eKxpjETtCvy.webp";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-end sm:items-center overflow-hidden"
    >
      {/* Background Image — mobile: center on mountain mass */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="Colorado Front Range mountains at golden hour"
          className="w-full h-full object-cover object-[60%_center] sm:object-center"
        />
        {/* Primary overlay: strong left-side darkness for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/30 sm:from-charcoal/90 sm:via-charcoal/65 sm:to-charcoal/25" />
        {/* Bottom fade for mobile content area */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
        {/* Extra text-area backdrop: concentrated behind where content sits */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal/60" />
      </div>

      {/* Content — mobile: pushed lower for visual balance; desktop: centered */}
      <div className="relative container pb-14 pt-24 sm:pt-28 sm:pb-20 md:pt-32 md:pb-28">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 mb-4 sm:mb-6 rounded-full border border-gold/40 bg-gold/10 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-[11px] sm:text-xs font-medium tracking-widest uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Serving Colorado — Referrals Nationwide
            </span>
          </motion.div>

          {/* Headline — mobile: tighter, clean wrapping */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-[1.85rem] leading-[1.15] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white sm:leading-[1.1] tracking-tight mb-3 sm:mb-5"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Strategic Real Estate Guidance for{" "}
            <span className="text-gold">Colorado</span>{" "}
            Buyers & Sellers
          </motion.h1>

          {/* Subheadline — tightened for mobile scanning */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[15px] sm:text-lg md:text-xl text-white/85 leading-relaxed mb-5 sm:mb-8 max-w-xl"
            style={{ fontFamily: "'Libre Franklin', sans-serif" }}
          >
            25+ years of negotiation expertise. A coaching mindset shaped at Zillow.
            Data-driven strategies to buy smarter, sell stronger, and move with confidence.
          </motion.p>

          {/* CTAs — stacked on mobile, side by side on sm+ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <button
              onClick={() => scrollTo("#contact")}
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-7 sm:py-3.5 bg-gold text-charcoal font-semibold rounded-lg sm:rounded transition-all hover:bg-gold-light hover:shadow-xl hover:shadow-gold/20 active:scale-[0.98] text-[15px] sm:text-base"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Schedule a Consultation
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo("#buyers")}
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-7 border border-white/30 text-white font-medium rounded-lg sm:rounded transition-all hover:border-gold/60 hover:text-gold backdrop-blur-sm active:bg-white/5 text-[15px] sm:text-base"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <Phone size={16} />
              Ask About Buyer Programs
            </button>
          </motion.div>

          {/* Supporting line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-5 sm:mt-8 text-xs sm:text-sm text-white/50 tracking-wide"
            style={{ fontFamily: "'Libre Franklin', sans-serif" }}
          >
            Helping buyers, sellers, land clients, and relocations across Colorado
          </motion.p>
        </div>
      </div>

      {/* Scroll indicator — hidden on mobile for cleaner look */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}
