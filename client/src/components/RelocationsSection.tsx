import { motion } from "framer-motion";
import { ArrowRight, Home, MapPin, Shield } from "lucide-react";
import { Link } from "wouter";

const scenarios = [
  {
    icon: Home,
    title: "Rental Showings & Tour Support",
    text: "Need to see properties before you commit? Rob coordinates in-person and remote tours so you can evaluate options on your timeline — no pressure, no rush.",
  },
  {
    icon: MapPin,
    title: "Relocating to Colorado",
    text: "Rob helps relocation clients understand the Colorado market, neighborhoods, and buying process so they can move forward with a clearer plan — even from a distance.",
  },
  {
    icon: Shield,
    title: "Military & PCS Families",
    text: "VA homebuying, PCS timing, and Colorado market orientation — designed for the unique needs of military families navigating a move on a tight timeline.",
    href: "/military-relocation/",
    linkLabel: "Military & PCS Resources",
  },
];

export default function RelocationsSection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="rental-tour-support" className="py-12 sm:py-20 md:py-28 bg-cream relative overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 lg:gap-16 items-start mb-7 sm:mb-14">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold-dark text-sm font-semibold tracking-widest uppercase mb-3 block"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Rental · Tour Support · Relocation
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal leading-tight mb-4 sm:mb-5"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Rental Showings, Tours &{" "}
              <span className="text-gold-dark">Relocation Support</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-charcoal-light/80 text-[15px] sm:text-lg leading-relaxed mb-5"
            >
              Whether you're evaluating rentals, planning a move to Colorado, or navigating a PCS relocation, Rob provides practical, no-pressure support designed around your timeline and situation.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/rental-tour-support/"
                className="group inline-flex items-center gap-2 text-gold-dark font-semibold text-[15px] hover:text-gold transition-colors"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Rental & Tour Support Details
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Scenario Cards */}
          <div className="grid gap-3 sm:gap-4">
            {scenarios.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="flex gap-4 p-4 sm:p-5 rounded bg-white border border-cream-dark/60 hover:border-gold/40 transition-all hover:shadow-md hover:shadow-gold/5"
              >
                <div className="w-10 h-10 rounded flex items-center justify-center bg-gold/10 text-gold-dark shrink-0 mt-0.5">
                  <s.icon size={20} strokeWidth={1.8} />
                </div>
                <div>
                  <h3
                    className="text-base font-semibold text-charcoal mb-1"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-charcoal-light/70 text-sm leading-relaxed">{s.text}</p>
                  {'href' in s && s.href && (
                    <a
                      href={s.href}
                      className="inline-flex items-center gap-1 mt-2 text-gold-dark text-sm font-medium hover:text-gold transition-colors"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {s.linkLabel}
                      <ArrowRight size={13} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Callout Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-charcoal rounded-lg p-5 sm:p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6"
        >
          <div className="text-center md:text-left">
            <h3
              className="text-2xl font-bold text-white mb-2"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Planning a Move or Need a Showing?
            </h3>
            <p className="text-cream/70 max-w-lg">
              Get in touch to discuss your timeline, situation, and what kind of support would be most useful — no commitment required.
            </p>
          </div>
          <button
            onClick={() => scrollTo("#contact")}
            className="group shrink-0 inline-flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 border border-cream/25 text-cream/80 font-medium rounded-lg transition-all hover:border-gold/50 hover:text-gold active:bg-white/5 text-[15px] sm:text-base"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Get in Touch
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
