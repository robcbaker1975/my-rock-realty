import { motion } from "framer-motion";
import { Shield, TrendingUp, GraduationCap, MapPin } from "lucide-react";

const credentials = [
  {
    icon: Shield,
    label: "Licensed Colorado Real Estate Broker",
  },
  {
    icon: TrendingUp,
    label: "25+ Years Negotiation Experience",
  },
  {
    icon: GraduationCap,
    label: "Former Zillow® Agent Coach",
  },
  {
    icon: MapPin,
    label: "Serving Colorado Buyers & Sellers Since 2018",
  },
];

export default function TrustSection() {
  return (
    <section className="py-5 sm:py-6 bg-charcoal border-b border-white/8">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {credentials.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex items-center gap-2.5 sm:gap-3"
            >
              <div className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded flex items-center justify-center bg-gold/12 text-gold">
                <item.icon size={16} strokeWidth={1.8} />
              </div>
              <p
                className="text-[11px] sm:text-[12px] text-cream/70 leading-snug"
                style={{ fontFamily: "'Libre Franklin', sans-serif" }}
              >
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
