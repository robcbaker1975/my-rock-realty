/**
 * MilitaryRelocationSection — My Rock Realty
 * Homepage teaser section for Military & PCS Relocation specialty cluster
 * Placed after RelocationsSection in the homepage section order
 * Design: Front Range Modern — matches existing site design system
 * Palette: Warm charcoal (#292524), cream (#F5F0EB), antique gold (#C9A96E)
 */
import { motion } from "framer-motion";
import { ArrowRight, Shield, MapPin, Home } from "lucide-react";

const highlights = [
  {
    icon: Shield,
    title: "VA Homebuying Guidance",
    text: "Educational, compliance-safe guidance on VA loan benefits and the Colorado homebuying process for eligible veterans and active-duty buyers.",
  },
  {
    icon: MapPin,
    title: "PCS Planning Support",
    text: "Practical help navigating PCS timing, rent-vs-buy decisions, and Colorado market orientation — whether you're months out or moving soon.",
  },
  {
    icon: Home,
    title: "Colorado Market Orientation",
    text: "Local expertise across the Denver metro, Colorado Springs, Fort Collins, and surrounding communities near Colorado's major installations.",
  },
];

export default function MilitaryRelocationSection() {
  return (
    <section
      id="military-relocation"
      className="py-12 sm:py-20 md:py-28 bg-charcoal relative overflow-hidden"
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #C9A96E 0, #C9A96E 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="container relative">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold text-sm font-semibold tracking-widest uppercase mb-3 block"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Military &amp; PCS Relocation
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4 sm:mb-5"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Colorado Real Estate Support for{" "}
            <span className="text-gold">Military Families &amp; PCS Buyers</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-cream/70 text-[15px] sm:text-lg leading-relaxed"
          >
            Whether you're PCS-ing to Colorado, navigating VA homebuying for the first time, or
            planning a move around military timelines, Rob provides practical, local guidance
            designed for the unique needs of military families and veterans.
          </motion.p>
        </div>

        {/* Highlight Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 mb-10 sm:mb-14">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="p-5 sm:p-7 rounded bg-white/5 border border-white/10 hover:border-gold/30 transition-all hover:bg-white/8"
            >
              <div className="w-11 h-11 rounded flex items-center justify-center bg-gold/15 text-gold mb-4">
                <item.icon size={22} strokeWidth={1.8} />
              </div>
              <h3
                className="text-lg font-semibold text-white mb-2"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {item.title}
              </h3>
              <p className="text-cream/60 text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <a
            href="/military-relocation/"
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-charcoal font-semibold rounded-lg transition-all hover:bg-gold-light hover:shadow-xl hover:shadow-gold/20 active:scale-[0.98] text-[15px] sm:text-base"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Explore Military Relocation Resources
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
