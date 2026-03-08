import { ArrowRight, Phone } from "lucide-react";
import { useLocation } from "wouter";

export default function FinalCTASection() {
  const [, setLocation] = useLocation();

  return (
    <section className="bg-charcoal border-t border-gold/15 py-16 sm:py-20" id="final-cta">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Ready to Start Your Colorado Home Search?
          </h2>
          <p
            className="text-[15px] sm:text-base text-cream/60 leading-relaxed mb-8 sm:mb-10"
            style={{ fontFamily: "'Libre Franklin', sans-serif" }}
          >
            Join the next Colorado Home Buying Workshop or schedule a strategy conversation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary: Workshop */}
            <button
              onClick={() => setLocation("/colorado-home-buying-workshop")}
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-gold text-charcoal font-bold rounded-lg transition-all hover:bg-gold-light hover:shadow-xl hover:shadow-gold/20 active:scale-[0.98] text-base"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Attend the Free Workshop
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </button>

            {/* Secondary: Phone */}
            <a
              href="tel:7203636544"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 border border-white/25 text-white/80 font-medium rounded-lg transition-all hover:border-gold/50 hover:text-gold text-base no-underline"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <Phone size={16} />
              Contact Rob
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
