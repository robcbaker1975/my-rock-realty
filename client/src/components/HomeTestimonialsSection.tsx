import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Rob provided incredible guidance during our home search and negotiation process.",
    attribution: "Home Buyer",
  },
  {
    quote: "Working with Rob made the buying process far less stressful.",
    attribution: "Seller Client",
  },
  {
    quote:
      "Professional, strategic, and extremely knowledgeable about the Colorado market.",
    attribution: "Colorado Relocation Client",
  },
];

export default function HomeTestimonialsSection() {
  return (
    <section className="py-14 sm:py-20 md:py-24 bg-charcoal">
      <div className="container">
        {/* Header */}
        <div className="max-w-xl mb-10 sm:mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold text-xs font-semibold tracking-widest uppercase mb-3 block"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Client Experiences
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-cream leading-tight mb-3"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            What Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            className="text-cream/60 text-base leading-relaxed"
            style={{ fontFamily: "'Libre Franklin', sans-serif" }}
          >
            Trusted guidance, clear strategy, and a more confident buying or
            selling experience.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-10 sm:mb-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="flex flex-col gap-4 p-6 sm:p-7 rounded bg-white/4 border border-white/8 hover:border-gold/25 transition-colors"
            >
              <p
                className="text-cream/80 text-[15px] leading-relaxed flex-1"
                style={{ fontFamily: "'Libre Franklin', sans-serif" }}
              >
                "{t.quote}"
              </p>
              <p
                className="text-gold/70 text-xs font-semibold tracking-wide uppercase"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {t.attribution}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <button
            onClick={() => {}}
            className="inline-flex items-center gap-2 px-6 py-3 rounded border border-gold/40 text-gold text-sm font-semibold tracking-wide hover:bg-gold/8 transition-colors"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            View More Reviews
          </button>
        </motion.div>
      </div>
    </section>
  );
}
