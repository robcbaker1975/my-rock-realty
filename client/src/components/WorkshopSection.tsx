import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, Calendar, CheckCircle } from "lucide-react";

const WORKSHOP_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/workshop-section-Yp8jnnKmpb9X4Au9XRWi4s.webp";

const takeaways = [
  "Understand national, state, and local home buying programs",
  "Learn how to reduce out-of-pocket costs and improve financing",
  "Get clarity on the buying process from start to close",
  "Ask questions directly to a licensed real estate professional",
];

export default function WorkshopSection() {
  return (
    <section id="workshop" className="py-14 sm:py-20 md:py-28 bg-charcoal overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Content */}
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
              Weekly Workshop
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4 sm:mb-5"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Colorado Home Buying{" "}
              <span className="text-gold">Workshop</span>
            </h2>
            <p className="text-cream/70 text-[15px] sm:text-lg leading-relaxed mb-5 sm:mb-6">
              Every week, Rob hosts a free workshop helping Colorado buyers understand their options, explore home buying programs, and build a clear path to homeownership. No pressure — just real information from a real professional.
            </p>

            {/* Takeaways */}
            <div className="space-y-3 mb-8">
              {takeaways.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle size={18} className="text-gold mt-0.5 shrink-0" />
                  <span className="text-cream/80 text-sm leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 sm:gap-8 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-white/10">
              <div className="flex items-center gap-2 text-cream/60">
                <Calendar size={16} className="text-gold" />
                <span className="text-sm">Weekly Sessions</span>
              </div>
              <div className="flex items-center gap-2 text-cream/60">
                <Users size={16} className="text-gold" />
                <span className="text-sm">Open to All Buyers</span>
              </div>
              <div className="flex items-center gap-2 text-cream/60">
                <BookOpen size={16} className="text-gold" />
                <span className="text-sm">Free to Attend</span>
              </div>
            </div>

            <a
              href="https://ColoradoHomeBuyingWorkshop.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-4 sm:py-3.5 bg-gold text-charcoal font-semibold rounded-lg sm:rounded transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 active:scale-[0.98]"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Learn More About the Workshop
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded overflow-hidden shadow-2xl">
              <img
                src={WORKSHOP_IMG}
                alt="Professional workshop setting with mountain views"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
            </div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -left-4 md:-left-8 bg-white rounded shadow-xl p-5 max-w-[260px]"
            >
              <p className="text-charcoal font-semibold text-sm mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
                ColoradoHomeBuyingWorkshop.com
              </p>
              <p className="text-charcoal-light/60 text-xs leading-relaxed">
                Free weekly sessions for Colorado home buyers
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
