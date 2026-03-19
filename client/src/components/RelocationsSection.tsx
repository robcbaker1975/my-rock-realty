import { motion } from "framer-motion";
import { ArrowRight, ArrowRightLeft, UserCheck, MapPinned } from "lucide-react";

const RELOCATIONS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/relocations-bg-KPyJJGfxXDepzsW2dzzYt2.webp";

const scenarios = [
  {
    icon: MapPinned,
    title: "Moving to Colorado",
    text: "Rob helps relocation clients navigate the Colorado market, timing, and property search process so they can move forward with a clearer plan and greater confidence.",
  },
  {
    icon: ArrowRightLeft,
    title: "Moving Out of Colorado",
    text: "Rob connects you with a vetted, trusted agent in your destination — personally screened for quality and professionalism.",
  },
  {
    icon: UserCheck,
    title: "Refer a Friend or Family Member",
    text: "Know someone buying or selling anywhere in the U.S.? Rob connects your people with a strong, reliable agent — no matter the state.",
  },
];

export default function RelocationsSection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="relocations" className="py-12 sm:py-20 md:py-28 bg-cream relative overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 lg:gap-16 items-start mb-7 sm:mb-14">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold-dark text-sm font-semibold tracking-widest uppercase mb-3 block"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Relocations & Referrals
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal leading-tight mb-4 sm:mb-5"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Trusted Agent Connections in{" "}
              <span className="text-gold-dark">All 50 States</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-charcoal-light/80 text-[15px] sm:text-lg leading-relaxed"
            >
              Real estate doesn't stop at state lines. Rob's nationwide referral network ensures smooth handoffs to trusted, vetted professionals — whether you're moving into Colorado, leaving the state, or connecting someone you care about with a strong agent elsewhere.
            </motion.p>
          </div>

          {/* Map Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src={RELOCATIONS_IMG}
              alt="Map of the United States with Colorado highlighted, showing referral network connections to all 50 states"
              className="w-full h-auto rounded shadow-xl"
              width="800"
              height="600"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </div>

        {/* Scenario Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 mb-7 sm:mb-10">
          {scenarios.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="p-4 sm:p-7 rounded bg-white border border-cream-dark/60 hover:border-gold/40 transition-all hover:shadow-lg hover:shadow-gold/5"
            >
              <div className="w-12 h-12 rounded flex items-center justify-center bg-gold/10 text-gold-dark mb-4">
                <s.icon size={24} strokeWidth={1.8} />
              </div>
              <h3
                className="text-xl font-semibold text-charcoal mb-3"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {s.title}
              </h3>
              <p className="text-charcoal-light/70 leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Callout Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-charcoal rounded-lg p-5 sm:p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6"
        >
          <div className="text-center md:text-left">
            <h3
              className="text-2xl font-bold text-white mb-2"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Need a Trusted Agent Referral?
            </h3>
            <p className="text-cream/70 max-w-lg">
              Rob connects you or someone you know with a vetted, reliable agent — anywhere in the U.S.
            </p>
          </div>
          <button
            onClick={() => scrollTo("#contact")}
            className="group shrink-0 inline-flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 border border-cream/25 text-cream/80 font-medium rounded-lg transition-all hover:border-gold/50 hover:text-gold active:bg-white/5 text-[15px] sm:text-base"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Request a Referral
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
