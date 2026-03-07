import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/hero-bg-dyEKuHhWXn8eKxpjETtCvy.webp";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center overflow-hidden"
    >
      {/* Background Image — mobile: center on mountain mass, avoid awkward crop */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="Colorado Front Range mountains at golden hour"
          className="w-full h-full object-cover object-[55%_40%] sm:object-[50%_45%] md:object-center"
        />
        {/* Layer 1: Strong left-to-right darkness for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/[0.97] via-charcoal/85 to-charcoal/40 sm:from-charcoal/[0.93] sm:via-charcoal/70 sm:to-charcoal/25" />
        {/* Layer 2: Bottom-up fade for mobile content grounding */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
        {/* Layer 3: Top-down subtle vignette for header area */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-transparent to-transparent" />
      </div>

      {/* Content — vertically centered with generous spacing from header */}
      <div className="relative container pt-40 pb-16 sm:pt-44 sm:pb-20 md:pt-48 md:pb-28">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 mb-5 sm:mb-7 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-[11px] sm:text-xs font-medium tracking-[0.15em] uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Serving Colorado — Referrals Nationwide
            </span>
          </motion.div>

          {/* Headline — generous line height on mobile for clean wrapping */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[1.75rem] leading-[1.2] sm:text-[2.5rem] md:text-5xl lg:text-[3.5rem] font-bold text-white sm:leading-[1.12] tracking-tight mb-4 sm:mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Strategic Real Estate{" "}
            <br className="hidden sm:block" />
            Guidance for{" "}
            <span className="text-gold">Colorado</span>{" "}
            <br className="hidden sm:block" />
            Buyers & Sellers
          </motion.h1>

          {/* Subheadline — concise, scannable */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[15px] leading-[1.7] sm:text-lg md:text-xl text-white/80 sm:leading-relaxed mb-7 sm:mb-9 max-w-lg"
            style={{ fontFamily: "'Libre Franklin', sans-serif" }}
          >
            25+ years of negotiation expertise. A coaching mindset shaped at Zillow.
            Data-driven strategies to help you buy smarter, sell stronger, and move with confidence.
          </motion.p>

          {/* CTAs — clear primary/secondary hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-3.5 sm:gap-4"
          >
            {/* PRIMARY CTA — dominant */}
            <button
              onClick={() => scrollTo("#contact")}
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 sm:px-8 sm:py-4 bg-gold text-charcoal font-bold rounded-lg transition-all hover:bg-gold-light hover:shadow-xl hover:shadow-gold/20 active:scale-[0.98] text-base sm:text-[17px]"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Schedule a Consultation
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            {/* SECONDARY CTA — present but clearly subordinate */}
            <button
              onClick={() => scrollTo("#buyers")}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-7 sm:py-3.5 border border-white/25 text-white/80 font-medium rounded-lg transition-all hover:border-gold/50 hover:text-gold backdrop-blur-sm active:bg-white/5 text-[15px] sm:text-base"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Ask About Buyer Programs
            </button>
          </motion.div>

          {/* Supporting trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 sm:mt-9 text-[11px] sm:text-sm text-white/40 tracking-wide"
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
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
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
