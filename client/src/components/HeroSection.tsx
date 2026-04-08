import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const navigate = (path: string) => { window.location.href = path; };
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-[#1a1714] overflow-hidden">
      {/* Gold accent bar — top edge */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />

      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.4) 39px, rgba(255,255,255,0.4) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.4) 39px, rgba(255,255,255,0.4) 40px)",
        }}
      />

      {/* Content */}
      <div className="relative container mx-auto w-full max-w-4xl px-6 sm:px-8 pt-28 sm:pt-32 md:pt-40 pb-20 sm:pb-28 md:pb-36">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex items-center gap-3 mb-10 sm:mb-12"
        >
          <span className="block w-8 h-[2px] bg-gold" />
          <span
            className="text-gold text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Built on Local Knowledge. Backed by Rock-Solid Guidance.
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-[3.5rem] font-bold text-white mb-8 sm:mb-10 leading-[1.15]"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          <span className="block">Colorado</span>
          <span className="block">Real Estate Help</span>
          <span className="block">Clear, Practical, &amp; Honest</span>
        </motion.h1>

        {/* Opening narrative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-14 sm:mb-16 max-w-2xl"
          style={{ fontFamily: "'Libre Franklin', sans-serif" }}
        >
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-5">
            A lot of people do not need more real estate talk. They need someone who can help them slow things down, think clearly, and keep them from making expensive decisions under pressure.
          </p>
          <p className="text-lg sm:text-xl text-white font-semibold mb-5">
            That is what I do.
          </p>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
            I'm Rob Baker. I help buyers, sellers, and relocation clients across Colorado make smarter moves with better planning, stronger negotiation, and a clearer understanding of what actually matters before things get rushed.
          </p>
        </motion.div>

        {/* Primary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={() => scrollTo("#contact")}
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 bg-gold text-charcoal font-bold rounded transition-all hover:bg-gold-light hover:shadow-xl hover:shadow-gold/25 active:scale-[0.98] text-base sm:text-lg"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Talk With Rob
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => navigate("/listing-results")}
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 border border-gold/50 text-gold font-semibold rounded transition-all hover:border-gold hover:bg-gold/8 active:scale-[0.98] text-base sm:text-lg"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Start Your Search
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>

      {/* Bottom section divider — gold rule */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gold/20" />
    </section>
  );
}
