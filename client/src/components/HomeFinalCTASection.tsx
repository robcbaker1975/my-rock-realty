import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HomeFinalCTASection() {
  const navigate = (path: string) => { window.location.href = path; };
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-charcoal py-20 sm:py-28 md:py-32">
      <div className="container mx-auto w-full max-w-4xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Start Where You Are
          </h2>
          
          <div className="space-y-6 max-w-2xl mb-10">
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
              You do not need to be fully ready. You do not need to know every answer. You do not need to wait until things feel urgent.
            </p>
            
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
              If you are thinking about buying, selling, relocating, or just trying to figure out what makes the most sense, reach out. We will look at where you are, talk through the real options, and figure out the next step from there.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-5">
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
              Browse Colorado Homes
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
