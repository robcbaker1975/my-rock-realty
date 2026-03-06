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
    text: "Strategic financing guidance to help you qualify for more — or save more on what you buy.",
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
    <section id="buyers" className="py-20 md:py-28 bg-charcoal overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
              className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Navigate Home Buying Programs &{" "}
              <span className="text-gold">Smart Financing</span>
            </h2>
            <p className="text-cream/70 text-lg leading-relaxed mb-8">
              Buying a home in Colorado doesn't have to mean draining your savings.
              Rob helps buyers uncover programs and financing strategies that most
              agents overlook — reducing costs, improving terms, and building a
              stronger path to homeownership.
            </p>

            <div className="space-y-5 mb-8">
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
                    <h4
                      className="text-white font-semibold mb-1"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {b.title}
                    </h4>
                    <p className="text-cream/60 text-sm leading-relaxed">{b.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => scrollTo("#contact")}
              className="group inline-flex items-center gap-2 px-6 py-3.5 bg-gold text-charcoal font-semibold rounded transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Ask About Buyer Programs
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
