import { motion } from "framer-motion";
import { ArrowRight, Mountain, MapPin, Compass } from "lucide-react";

export default function LandSection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-24 bg-charcoal relative overflow-hidden">
      {/* Subtle topographic pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A96E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold text-sm font-semibold tracking-widest uppercase mb-3 block"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Land & Investment
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Colorado Land, Move-Up Purchases &{" "}
            <span className="text-gold">Strategic Next Steps</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-cream/70 text-lg leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            Whether you're looking for acreage, a move-up property, or a strategic
            real estate investment in Colorado, Rob provides the same data-driven
            guidance and negotiation strength to help you make a confident decision.
          </motion.p>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: Mountain,
                title: "Land Purchases",
                text: "Find the right parcel with guidance on zoning, access, utilities, and long-term value.",
              },
              {
                icon: MapPin,
                title: "Move-Up Buyers",
                text: "Outgrowing your current home? Navigate the buy-sell timing with a clear plan.",
              },
              {
                icon: Compass,
                title: "Strategic Decisions",
                text: "Investment properties, second homes, and long-term real estate planning in Colorado.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="p-6 rounded border border-white/10 bg-white/5 backdrop-blur-sm text-left hover:border-gold/30 transition-colors"
              >
                <card.icon size={24} className="text-gold mb-3" />
                <h4
                  className="text-white font-semibold mb-2"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {card.title}
                </h4>
                <p className="text-cream/60 text-sm leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={() => scrollTo("#contact")}
              className="group inline-flex items-center gap-2 px-6 py-3.5 border border-gold/50 text-gold font-semibold rounded transition-all hover:bg-gold hover:text-charcoal"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Explore Your Options
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
