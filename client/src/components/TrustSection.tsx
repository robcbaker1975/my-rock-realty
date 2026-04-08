import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function TrustSection() {
  const navigate = (path: string) => { window.location.href = path; };
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-charcoal py-16 sm:py-20 md:py-24">
      <div className="container mx-auto w-full max-w-3xl px-6 sm:px-8">
        {/* Why People Work With Me section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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
          transition={{ duration: 0.6, delay: 0.1 }}
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
          transition={{ duration: 0.6, delay: 0.2 }}
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
      </div>
    </section>
  );
}
