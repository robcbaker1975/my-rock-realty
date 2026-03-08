import { motion } from "framer-motion";
import { Home, Handshake, MapPin, BarChart2 } from "lucide-react";

const items = [
  {
    icon: Home,
    title: "Colorado Buyer Assistance Programs",
    description:
      "Guidance on down payment assistance, first-time buyer programs, and financing options available in Colorado.",
  },
  {
    icon: Handshake,
    title: "Competitive Offer Strategy and Negotiation",
    description:
      "Data-driven offer structuring and experienced negotiation to help you compete and win in any market condition.",
  },
  {
    icon: MapPin,
    title: "Relocation Guidance for Out-of-State Buyers",
    description:
      "Trusted support for buyers moving to Colorado — from neighborhood selection to closing, fully remote-friendly.",
  },
  {
    icon: BarChart2,
    title: "Strategic Home Selling and Pricing Approach",
    description:
      "Market analysis, pricing strategy, and positioning to help sellers achieve the best possible outcome.",
  },
];

export default function HomeColoradoExpertiseSection() {
  return (
    <section className="py-14 sm:py-20 md:py-24 bg-warm-white">
      <div className="container">
        {/* Header */}
        <div className="max-w-xl mb-10 sm:mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-dark text-xs font-semibold tracking-widest uppercase mb-3 block"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Local Knowledge
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal leading-tight mb-3"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Colorado Market Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            className="text-charcoal-light/75 text-base leading-relaxed"
            style={{ fontFamily: "'Libre Franklin', sans-serif" }}
          >
            Strategic guidance for buyers, sellers, and relocating clients
            navigating Colorado's market with more clarity and confidence.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.09 }}
              className="flex gap-4 p-5 sm:p-6 rounded bg-white border border-cream-dark/50 hover:border-gold/35 transition-colors hover:shadow-sm"
            >
              <div className="shrink-0 w-10 h-10 rounded flex items-center justify-center bg-gold/10 text-gold-dark mt-0.5">
                <item.icon size={20} strokeWidth={1.7} />
              </div>
              <div>
                <h3
                  className="text-[15px] sm:text-base font-semibold text-charcoal mb-1.5 leading-snug"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-charcoal-light/65 text-sm leading-relaxed"
                  style={{ fontFamily: "'Libre Franklin', sans-serif" }}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
