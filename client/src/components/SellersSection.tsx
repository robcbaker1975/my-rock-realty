import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Megaphone, Handshake } from "lucide-react";

const SELLERS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/sellers-section-fnwPTJUizC3f5ESwH6gvsF.webp";

const strategies = [
  {
    icon: BarChart3,
    title: "Data-Driven Pricing",
    text: "Market analysis and strategic positioning to attract strong offers from day one.",
  },
  {
    icon: Megaphone,
    title: "Modern Marketing",
    text: "Advanced technology and targeted exposure that goes far beyond a sign in the yard.",
  },
  {
    icon: Handshake,
    title: "Negotiation Strength",
    text: "25+ years of sales experience working for you at the negotiating table.",
  },
];

export default function SellersSection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="sellers" className="py-12 sm:py-20 md:py-28 bg-cream overflow-hidden">
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
              className="text-gold-dark text-sm font-semibold tracking-widest uppercase mb-3 block"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              For Sellers
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal leading-tight mb-4 sm:mb-5"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Maximize Your Sale with{" "}
              <span className="text-gold-dark">Strategy, Not Luck</span>
            </h2>
            <p className="text-charcoal-light/80 text-[15px] sm:text-lg leading-relaxed mb-5 sm:mb-8">
              Rob builds a clear plan around pricing, marketing, and negotiation — designed to create demand and drive top-dollar results.
            </p>

            <div className="space-y-4 mb-6 sm:mb-8">
              {strategies.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded flex items-center justify-center bg-charcoal/5 text-gold-dark shrink-0 mt-0.5">
                    <s.icon size={20} />
                  </div>
                  <div>
                    <h3
                      className="text-charcoal font-semibold mb-1 text-base"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {s.title}
                    </h3>
                    <p className="text-charcoal-light/70 text-sm leading-relaxed">{s.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => scrollTo("#contact")}
              className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 bg-charcoal text-cream font-semibold rounded-lg sm:rounded transition-all hover:bg-charcoal-light hover:shadow-lg active:scale-[0.98] text-[15px] sm:text-base"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Get a Selling Strategy
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
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
                src={SELLERS_IMG}
                alt="Beautiful Colorado mountain home interior"
                className="w-full h-auto object-cover aspect-[4/3]"
                width="800"
                height="600"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute -top-3 -left-3 w-full h-full border border-gold/20 rounded -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
