import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { useLocation } from "wouter";

export default function HomeFinalCTASection() {
  const [, setLocation] = useLocation();

  return (
    <section className="py-14 sm:py-20 md:py-24 bg-cream border-t border-charcoal/10">
      <div className="container">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal leading-tight mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Ready to Start Your Colorado Home Search?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-charcoal/60 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10"
            style={{ fontFamily: "'Libre Franklin', sans-serif" }}
          >
            Join the next Colorado Home Buying Workshop or schedule a strategy
            conversation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <button
              onClick={() => setLocation("/colorado-home-buying-workshop")}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-gold text-charcoal font-bold rounded-lg transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 active:scale-[0.98] text-[15px] sm:text-base"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Attend the Free Workshop
              <ArrowRight size={17} />
            </button>
            <a
              href="tel:7203636544"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 border border-charcoal/25 text-charcoal font-semibold rounded-lg transition-all hover:border-charcoal/50 hover:bg-charcoal/5 text-[15px] sm:text-base no-underline"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <Phone size={16} strokeWidth={1.8} />
              Contact Rob
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
