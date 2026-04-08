import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function TrustSection() {
  const navigate = (path: string) => { window.location.href = path; };
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-charcoal py-20 sm:py-28 md:py-32">
      <div className="container mx-auto w-full max-w-4xl px-6 sm:px-8">
        {/* Why People Work With Me section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Why People Work With Me
          </h2>
          <div className="space-y-6 max-w-2xl">
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
              A lot of people want something pretty simple. They want direct advice from someone who knows what they are doing. They want someone who will tell them the truth. And they want a process that feels steady instead of sloppy.
            </p>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
              You get practical advice, honest answers, and help thinking through the decision instead of just being pushed toward one. You also get the benefit of solid people involved where they matter, so the process has support without feeling impersonal.
            </p>
          </div>
        </motion.div>

        {/* Primary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-5 mb-10"
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

        {/* Workshop CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button
            onClick={() => navigate("/colorado-home-buying-workshop")}
            className="group inline-flex items-center gap-2.5 px-6 py-3 text-gold font-semibold text-base transition-colors hover:text-gold-light"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Reserve My Spot at the Colorado Home Buying Workshop
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
