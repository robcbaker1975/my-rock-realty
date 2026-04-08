import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const navigate = (path: string) => { window.location.href = path; };
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-gradient-to-b from-charcoal/95 via-charcoal to-charcoal/98 py-24 sm:py-32 md:py-40">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_1px)] bg-[length:40px_40px]" />
      </div>

      <div className="relative container mx-auto w-full max-w-4xl px-6 sm:px-8">
        {/* Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 mb-10 sm:mb-12 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-sm"
        >
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-gold animate-pulse" />
          <span className="text-gold text-xs sm:text-sm font-medium tracking-[0.15em] uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Built on Local Knowledge. Backed by Rock-Solid Guidance.
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 sm:mb-10 leading-tight"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          Colorado real estate help that is clear, practical, and worth acting on.
        </motion.h1>

        {/* Opening narrative */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-14 sm:mb-16 text-white/85 leading-relaxed max-w-2xl"
          style={{ fontFamily: "'Libre Franklin', sans-serif" }}
        >
          <p className="text-lg sm:text-xl mb-5">
            A lot of people do not need more real estate talk. They need someone who can help them slow things down, think clearly, and keep them from making expensive decisions under pressure.
          </p>
          <p className="text-lg sm:text-xl mb-5 font-semibold">
            That is what I do.
          </p>
          <p className="text-lg sm:text-xl">
            I'm Rob Baker. I help buyers, sellers, and relocation clients across Colorado make smarter moves with better planning, stronger negotiation, and a clearer understanding of what actually matters before things get rushed.
          </p>
        </motion.div>

        {/* Primary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-5"
        >
          <button
            onClick={() => scrollTo("#contact")}
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 bg-gold text-charcoal font-bold rounded-lg transition-all hover:bg-gold-light hover:shadow-xl hover:shadow-gold/30 active:scale-[0.98] text-base sm:text-lg"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Talk With Rob
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => navigate("/listing-results")}
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 bg-transparent border-2 border-gold/70 text-gold font-semibold rounded-lg transition-all hover:border-gold hover:bg-gold/10 active:scale-[0.98] text-base sm:text-lg"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Start Your Search
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
