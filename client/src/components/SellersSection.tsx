import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function SellersSection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="sellers" className="relative bg-[#292524] py-20 sm:py-28 md:py-32">
      <div className="container mx-auto w-full max-w-4xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          {/* Section label */}
          <p
            className="text-xs font-semibold tracking-[0.18em] uppercase text-gold mb-5"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Selling a Home
          </p>

          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-8 leading-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Some of the most expensive seller mistakes start with advice that sounds good at first.
          </h2>

          <div className="space-y-5 max-w-2xl mb-9">
            <p className="text-lg sm:text-xl text-white/75 leading-relaxed">
              Fix a few things. Pick a price. Get photos. List it. See what happens.
            </p>
            <p className="text-lg sm:text-xl text-white/75 leading-relaxed">
              The problem is that this leaves out the part that usually matters most. What should be fixed first. What should be left alone. Whether a concession makes more sense than a price drop. How the home is positioned online. How buyer hesitation is handled. How the first week on market is managed. How to protect your leverage instead of giving it away too early.
            </p>
            <p className="text-lg sm:text-xl text-white/75 leading-relaxed">
              That can make a real difference in what you actually walk away with.
            </p>
            <p className="text-lg sm:text-xl text-white/75 leading-relaxed">
              I help sellers look at the full picture before they make a move. Where to spend. Where not to. Where to stay disciplined. Where to be flexible. What is likely to help. What is probably just noise.
            </p>
            <p className="text-lg sm:text-xl text-white/75 leading-relaxed">
              A surprising amount of money is made or lost before the listing ever goes live.
            </p>
          </div>

          <button
            onClick={() => scrollTo("#contact")}
            className="group inline-flex items-center gap-2.5 px-0 py-1 text-gold font-semibold text-base border-b border-gold/40 transition-colors hover:border-gold"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Help Me Sell Strategically
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
