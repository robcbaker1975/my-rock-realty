import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const navigate = (path: string) => { window.location.href = path; };
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-gradient-to-b from-charcoal/95 via-charcoal to-charcoal/98 py-20 sm:py-24 md:py-32">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_1px)] bg-[length:40px_40px]" />
      </div>

      <div className="relative container mx-auto w-full max-w-3xl px-6 sm:px-8">
        {/* Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 mb-8 sm:mb-10 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gold animate-pulse" />
          <span className="text-gold text-[11px] sm:text-xs font-medium tracking-[0.15em] uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Built on Local Knowledge. Backed by Rock-Solid Guidance.
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 sm:mb-10 leading-tight"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          Colorado real estate help that is clear, practical, and worth acting on.
        </motion.h1>

        {/* Opening narrative */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10 sm:mb-12 text-white/85 leading-relaxed"
          style={{ fontFamily: "'Libre Franklin', sans-serif" }}
        >
          <p className="text-base sm:text-lg mb-4">
            A lot of people do not need more real estate talk. They need someone who can help them slow things down, think clearly, and keep them from making expensive decisions under pressure.
          </p>
          <p className="text-base sm:text-lg mb-4">
            That is what I do.
          </p>
          <p className="text-base sm:text-lg mb-6">
            I'm Rob Baker. I help buyers, sellers, and relocation clients across Colorado make smarter moves with better planning, stronger negotiation, and a clearer understanding of what actually matters before things get rushed.
          </p>
        </motion.div>

        {/* Three primary paths */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-5 mb-12 sm:mb-14"
        >
          {/* Buying Path */}
          <div className="p-6 sm:p-5 rounded-lg border border-gold/20 bg-gold/5 hover:bg-gold/10 transition-colors">
            <h3 className="text-lg sm:text-base font-bold text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Buying a Home
            </h3>
            <p className="text-sm sm:text-[13px] text-white/70 mb-4 leading-relaxed">
              A lot of buyers think the biggest challenge is finding the right house. Usually it is everything around it—the payment, financing, programs, concessions, and offer strategy.
            </p>
            <button
              onClick={() => navigate("/buying-a-home-in-denver")}
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-semibold text-sm transition-colors"
            >
              Help Me Buy Smarter
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Selling Path */}
          <div className="p-6 sm:p-5 rounded-lg border border-gold/20 bg-gold/5 hover:bg-gold/10 transition-colors">
            <h3 className="text-lg sm:text-base font-bold text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Selling a Home
            </h3>
            <p className="text-sm sm:text-[13px] text-white/70 mb-4 leading-relaxed">
              A lot of sellers are given very surface-level advice. The problem is that this leaves out the part that usually matters most—what to fix, what to leave, and how to protect your leverage.
            </p>
            <button
              onClick={() => scrollTo("#contact")}
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-semibold text-sm transition-colors"
            >
              Help Me Sell Strategically
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Relocating Path */}
          <div className="p-6 sm:p-5 rounded-lg border border-gold/20 bg-gold/5 hover:bg-gold/10 transition-colors">
            <h3 className="text-lg sm:text-base font-bold text-white mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Moving to Colorado
            </h3>
            <p className="text-sm sm:text-[13px] text-white/70 mb-4 leading-relaxed">
              If you are moving to Colorado, you probably do not need a polished pitch. You need clarity on areas, payment, pace, and what to do first so the move feels organized and less reactive.
            </p>
            <button
              onClick={() => navigate("/relocation/relocating-to-denver-colorado")}
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-semibold text-sm transition-colors"
            >
              Moving to Colorado
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>

        {/* Supporting trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[13px] sm:text-[14px] text-white/45 tracking-wide"
          style={{ fontFamily: "'Libre Franklin', sans-serif" }}
        >
          Proudly serving Colorado buyers, sellers, land clients, and relocating families.
        </motion.p>
      </div>
    </section>
  );
}
