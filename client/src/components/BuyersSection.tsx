import { motion } from "framer-motion";
import { ArrowRight, DollarSign, TrendingDown, Lightbulb } from "lucide-react";

const BUYERS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/buyers-section-2eFQTo7zcHuJbWGubrh3KM.webp";

const benefits = [
  {
    icon: DollarSign,
    title: "Reduce Out-of-Pocket Costs",
    text: "Uncover national, state, and local programs that can lower your down payment and closing costs.",
  },
  {
    icon: TrendingDown,
    title: "Improve Your Buying Power",
    text: "Strategic financing guidance to help you explore more options — or save more on what you buy.",
  },
  {
    icon: Lightbulb,
    title: "Make Smarter Decisions",
    text: "Education-first approach so you understand every step, every option, and every opportunity.",
  },
];

export default function BuyersSection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="buyers" className="py-12 sm:py-20 md:py-28 bg-charcoal overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded overflow-hidden shadow-2xl">
              <img
                src={BUYERS_IMG}
                alt="Beautiful Colorado mountain home at dusk"
                className="w-full h-auto object-cover aspect-[4/3]"
                width="800"
                height="600"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
            </div>
            {/* Accent border */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-gold/20 rounded -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <span
              className="text-gold text-sm font-semibold tracking-widest uppercase mb-3 block"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              For Buyers
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4 sm:mb-5"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Navigate Home Buying Programs &{" "}
              <span className="text-gold">Smart Financing</span>
            </h2>
            <p className="text-cream/70 text-[15px] sm:text-lg leading-relaxed mb-5 sm:mb-8">
              Rob helps buyers uncover programs and financing strategies most agents overlook — reducing costs, improving terms, and building a stronger path to homeownership.
            </p>

            <div className="space-y-4 mb-6 sm:mb-8">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded flex items-center justify-center bg-gold/10 text-gold shrink-0 mt-0.5">
                    <b.icon size={20} />
                  </div>
                  <div>
                    <h3
                      className="text-white font-semibold mb-1 text-base"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {b.title}
                    </h3>
                    <p className="text-cream/60 text-sm leading-relaxed">{b.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => scrollTo("#contact")}
              className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 bg-gold text-charcoal font-semibold rounded-lg sm:rounded transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 active:scale-[0.98] text-[15px] sm:text-base"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Ask About Buyer Programs
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
            <p className="mt-4 text-sm text-cream/50" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              Ready to start searching?{" "}
              <a href="/denver-homes-for-sale" className="text-gold hover:underline">Browse Denver homes for sale</a>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
