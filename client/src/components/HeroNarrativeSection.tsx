import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroNarrativeSection() {
  const navigate = (path: string) => { window.location.href = path; };
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-charcoal/95 via-charcoal to-charcoal/98">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_1px)] bg-[length:40px_40px]" />
      </div>

      <div className="relative container mx-auto w-full max-w-3xl px-6 sm:px-8 py-20 sm:py-24 md:py-32">
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
          className="prose prose-invert max-w-none mb-10 sm:mb-12 text-white/85 leading-relaxed"
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

        {/* Why People Work With Me section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12 sm:mb-14 p-8 sm:p-8 rounded-lg border border-gold/30 bg-gold/[0.03]"
        >
          <h2 className="text-2xl sm:text-xl font-bold text-white mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Why People Work With Me
          </h2>
          <p className="text-base sm:text-[15px] text-white/80 leading-relaxed mb-4">
            A lot of people want something pretty simple. They want direct advice from someone who knows what they are doing. They want someone who will tell them the truth. And they want a process that feels steady instead of sloppy.
          </p>
          <p className="text-base sm:text-[15px] text-white/80 leading-relaxed">
            You get practical advice, honest answers, and help thinking through the decision instead of just being pushed toward one. You also get the benefit of solid people involved where they matter, so the process has support without feeling impersonal.
          </p>
        </motion.div>

        {/* Primary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          <button
            onClick={() => scrollTo("#contact")}
            className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 sm:px-8 bg-gold text-charcoal font-bold rounded-lg transition-all hover:bg-gold-light hover:shadow-xl hover:shadow-gold/20 active:scale-[0.98] text-base sm:text-[16px]"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Talk With Rob
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => navigate("/listing-results")}
            className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 sm:px-8 bg-transparent border-2 border-gold/70 text-gold font-semibold rounded-lg transition-all hover:border-gold hover:bg-gold/10 active:scale-[0.98] text-base sm:text-[16px]"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Start Your Search
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* Workshop CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-8"
        >
          <button
            onClick={() => navigate("/colorado-home-buying-workshop")}
            className="group inline-flex items-center gap-2.5 px-6 py-3 text-gold font-semibold text-sm sm:text-base transition-colors hover:text-gold-light"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Reserve My Spot at the Colorado Home Buying Workshop
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-[13px] sm:text-[14px] text-white/45 tracking-wide"
          style={{ fontFamily: "'Libre Franklin', sans-serif" }}
        >
          Proudly serving Colorado buyers, sellers, land clients, and relocating families.
        </motion.p>
      </div>

      {/* Scroll indicator */}
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
