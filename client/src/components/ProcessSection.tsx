import { motion } from "framer-motion";
import { MessageCircle, ClipboardList, Rocket, Trophy } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Connect",
    description: "Reach out for a no-pressure conversation about your goals, timeline, and questions.",
  },
  {
    icon: ClipboardList,
    number: "02",
    title: "Build a Strategy",
    description: "Together, we create a clear plan tailored to your situation — whether buying, selling, or relocating.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Take Action",
    description: "With a strategy in place, we execute with precision — from financing to offers to negotiations.",
  },
  {
    icon: Trophy,
    number: "04",
    title: "Close with Confidence",
    description: "Cross the finish line knowing every detail was handled with care, strategy, and your interests first.",
  },
];

export default function ProcessSection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-14 sm:py-20 md:py-28 bg-cream">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-dark text-sm font-semibold tracking-widest uppercase mb-3 block"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal leading-tight mb-3 sm:mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            A Simple, Strategic Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-charcoal-light/80 text-[15px] sm:text-lg"
          >
            Working with Rob is straightforward. Here's what to expect.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-4 mb-8 sm:mb-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative text-center md:text-left"
            >
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[calc(100%-20%)] h-px bg-gold/20" />
              )}

              <div className="flex flex-col items-center md:items-start">
                {/* Number + Icon */}
                <div className="relative mb-4">
                  <span
                    className="text-5xl font-bold text-gold/15 absolute -top-3 -left-2"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {step.number}
                  </span>
                  <div className="relative w-14 h-14 rounded-full flex items-center justify-center bg-charcoal text-gold shadow-lg">
                    <step.icon size={22} />
                  </div>
                </div>

                <h3
                  className="text-xl font-semibold text-charcoal mb-2"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-charcoal-light/70 text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            onClick={() => scrollTo("#contact")}
            className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-4 bg-charcoal text-cream font-semibold rounded-lg sm:rounded transition-all hover:bg-charcoal-light hover:shadow-lg active:scale-[0.98]"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Let's Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
}
