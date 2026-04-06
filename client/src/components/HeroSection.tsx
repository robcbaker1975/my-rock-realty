import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/hero-bg-1440-q70_ba90119e.webp";
const HEADSHOT_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/rob-headshot_a6a8b976.jpg";

export default function HeroSection() {
  const navigate = (path: string) => { window.location.href = path; };
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="Colorado Front Range mountains at golden hour"
          className="w-full h-full object-cover object-[55%_40%] sm:object-[50%_45%] md:object-center"
          width="1440"
          height="611"
          fetchPriority="high"
          decoding="async"
        />
        {/* Layer 1: Strong left-to-right darkness for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/[0.97] via-charcoal/85 to-charcoal/40 sm:from-charcoal/[0.93] sm:via-charcoal/70 sm:to-charcoal/25" />
        {/* Layer 2: Bottom-up fade for mobile content grounding */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
        {/* Layer 3: Top-down subtle vignette for header area */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-transparent to-transparent" />
      </div>

      {/* Content — two-column on desktop: text left, headshot right */}
      <div className="relative container pt-48 pb-16 sm:pt-52 sm:pb-20 md:pt-56 md:pb-28">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left column: Text content */}
          <div className="lg:col-span-3">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 mb-5 sm:mb-7 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-gold text-[11px] sm:text-xs font-medium tracking-[0.15em] uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Built on Local Knowledge. Backed by Rock-Solid Guidance.
              </span>
            </motion.div>

            {/* Headline */}
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
              <span className="relative inline-block">
                <span className="text-white">Colorado</span>
                <span className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent"></span>
              </span>{" "}
              <br className="hidden sm:block" />
              Buyers & Sellers
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[15px] leading-[1.7] sm:text-lg md:text-xl text-white/80 sm:leading-relaxed mb-7 sm:mb-9 max-w-lg"
              style={{ fontFamily: "'Libre Franklin', sans-serif" }}
            >
              Helping Colorado buyers, sellers, and relocating families navigate the market with clear strategy, negotiation expertise, and real-world guidance.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-3.5 sm:gap-4"
            >
              {/* PRIMARY CTA: Search Homes */}
              <button
                onClick={() => navigate("/listing-results?searchParams%5Bmappos%5D=39.7392%2C-104.9903&searchParams%5Bmapzoom%5D=11")}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 sm:px-8 sm:py-4 bg-gold text-charcoal font-bold rounded-lg transition-all hover:bg-gold-light hover:shadow-xl hover:shadow-gold/20 active:scale-[0.98] text-base sm:text-[17px]"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Search Homes
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
              {/* SECONDARY CTA: Workshop — de-emphasized outline style */}
              <button
                onClick={() => navigate("/colorado-home-buying-workshop")}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 sm:px-8 sm:py-4 bg-transparent border-2 border-gold/70 text-gold font-semibold rounded-lg transition-all hover:border-gold hover:bg-gold/10 active:scale-[0.98] text-base sm:text-[17px]"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Attend the Free Workshop
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>

            {/* Supporting trust line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-4 sm:mt-5 text-[12px] sm:text-[13px] text-white/45 tracking-wide"
              style={{ fontFamily: "'Libre Franklin', sans-serif" }}
            >
              Proudly serving Colorado buyers, sellers, land clients, and relocating families.
            </motion.p>
          </div>

          {/* Right column: Headshot — hidden on mobile, shown on lg+ */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:flex lg:col-span-2 justify-center"
          >
            <div className="relative">
              {/* Subtle gold ring accent */}
              <div className="absolute -inset-3 rounded-full border border-gold/20" />
              <div className="absolute -inset-6 rounded-full border border-gold/10" />
              {/* Headshot image — circular crop with generous top padding to preserve hat */}
              <div className="w-[280px] h-[280px] xl:w-[320px] xl:h-[320px] rounded-full overflow-hidden border-2 border-gold/30 shadow-2xl shadow-black/40">
                <img
                  src={HEADSHOT_URL}
                  alt="Rob Baker, Broker/Owner of My Rock Realty"
                  className="w-full h-full object-cover object-[center_15%]"
                  width="320"
                  height="320"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              {/* Name badge below headshot */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-charcoal/90 backdrop-blur-sm border border-gold/30 rounded-full px-5 py-2 whitespace-nowrap">
                <p className="text-white text-sm font-semibold" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Rob Baker
                </p>
                <p className="text-gold text-xs text-center">Broker/Owner</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile headshot — small, tasteful, below CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex lg:hidden items-center gap-4 mt-8 pt-6 border-t border-white/10"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-gold/30 shadow-lg shrink-0">
            <img
              src={HEADSHOT_URL}
              alt="Rob Baker"
              className="w-full h-full object-cover object-[center_15%]"
              width="80"
              height="80"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <p className="text-white font-semibold text-sm sm:text-base" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Rob Baker
            </p>
            <p className="text-gold text-xs sm:text-sm">Broker/Owner, My Rock Realty</p>
            <p className="text-white/40 text-[11px] sm:text-xs mt-0.5">Lic. ER100078487</p>
          </div>
        </motion.div>
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
