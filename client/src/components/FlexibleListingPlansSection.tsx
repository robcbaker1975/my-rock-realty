import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useLocation } from "wouter";

const tiers = [
  { label: "1% Essential", desc: "Core listing exposure and the essentials needed to get your home on the market." },
  { label: "2% Enhanced", desc: "Stronger marketing support, digital outreach, and seller reporting." },
  { label: "3% Premium", desc: "Expanded exposure, property website, hands-on strategy, and full marketing coordination." },
  { label: "4% Concierge", desc: "Highest-touch experience with cinematic production, branded property website, and featured placement on MyRockHomes.com." },
];

export default function FlexibleListingPlansSection() {
  const [, setLocation] = useLocation();

  return (
    <section
      id="flexible-listing-plans"
      className="py-12 sm:py-20 md:py-28 bg-charcoal overflow-hidden"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="text-gold text-sm font-semibold tracking-widest uppercase mb-3 block"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              For Sellers
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4 sm:mb-5"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Flexible Listing Plans for{" "}
              <span className="text-gold">Colorado Sellers</span>
            </h2>
            <p
              className="text-cream/70 text-[15px] sm:text-lg leading-relaxed mb-3 sm:mb-4"
              style={{ fontFamily: "'Libre Franklin', sans-serif" }}
            >
              Including a 1% option, with clear service levels and room to choose the marketing and support that fit your sale.
            </p>
            <p
              className="text-cream/60 text-[14px] sm:text-[15px] leading-relaxed mb-7 sm:mb-9"
              style={{ fontFamily: "'Libre Franklin', sans-serif" }}
            >
              Not every seller wants the same listing strategy. Some want a streamlined path to market with the essentials covered. Others want broader exposure, stronger marketing, and more hands-on guidance from start to finish. Either way, you choose the level that fits your goals — with full transparency on what's included.
            </p>

            {/* Trust line */}
            <p
              className="text-gold/70 text-[13px] sm:text-sm font-medium italic mb-7 sm:mb-9"
              style={{ fontFamily: "'Libre Franklin', sans-serif" }}
            >
              Clear options. Transparent expectations. No pressure to choose more than you need.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => setLocation("/flexible-listing-plans")}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold text-charcoal font-semibold rounded-lg transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 active:scale-[0.98] text-[15px] sm:text-base"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Compare Listing Plans
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => setLocation("/flexible-listing-plans#seller-consultation")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-cream/25 text-cream/80 font-medium rounded-lg transition-all hover:border-gold/50 hover:text-gold backdrop-blur-sm active:bg-white/5 text-[15px] sm:text-base"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Talk Through Your Selling Options
              </button>
            </div>
          </motion.div>

          {/* Right: Tier cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col gap-3 p-5 rounded-lg border border-white/10 bg-white/5 hover:border-gold/30 hover:bg-white/8 transition-colors duration-200"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-gold shrink-0" />
                  <span
                    className="text-white font-semibold text-[15px]"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {tier.label}
                  </span>
                </div>
                <p
                  className="text-cream/55 text-[13px] sm:text-sm leading-relaxed"
                  style={{ fontFamily: "'Libre Franklin', sans-serif" }}
                >
                  {tier.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
