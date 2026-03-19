/**
 * AdditionalServicesSection — My Rock Realty
 * Compact "Additional Ways We Help" callout section.
 * Cards: Land & Investment, Referrals, Flexible Listing Plans.
 * Military/PCS is now covered in RelocationsSection (Rental/Tour Support).
 */
import { motion } from "framer-motion";
import { ArrowRight, Mountain, Users, LayoutList } from "lucide-react";

const services = [
  {
    icon: Mountain,
    label: "Land & Investment",
    headline: "Colorado Land, Move-Up & Investment",
    desc: "Acreage, move-up properties, and strategic investment guidance with the same data-driven approach Rob brings to every transaction.",
    href: "#contact",
    cta: "Ask About Land & Investment",
    internal: false,
  },
  {
    icon: Users,
    label: "Referrals",
    headline: "Trusted Agent Connections in All 50 States",
    desc: "Know someone buying or selling anywhere in the U.S.? Rob connects your people with a vetted, reliable agent — no matter the state.",
    href: "#contact",
    cta: "Request a Referral",
    internal: false,
  },
  {
    icon: LayoutList,
    label: "Flexible Listing Plans",
    headline: "Listing Plans from 1% to 4%",
    desc: "Clear service tiers for sellers — from a streamlined path to market to full-service marketing and strategy. Full transparency at every level.",
    href: "/flexible-listing-plans",
    cta: "Compare Listing Plans",
    internal: true,
  },
];

export default function AdditionalServicesSection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="additional-services"
      className="py-12 sm:py-16 md:py-20 bg-warm-white"
    >
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-10"
        >
          <span
            className="text-gold-dark text-sm font-semibold tracking-widest uppercase mb-2 block"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Additional Ways We Help
          </span>
          <h2
            className="text-xl sm:text-2xl font-bold text-charcoal leading-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Specialized Support for Every Situation
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {services.map((svc, i) => (
            <motion.div
              key={svc.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col gap-3 p-5 sm:p-6 rounded border border-charcoal/10 bg-white hover:border-gold/40 transition-colors shadow-sm"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded flex items-center justify-center bg-gold/10 text-gold shrink-0">
                  <svc.icon size={18} strokeWidth={1.8} />
                </div>
                <span
                  className="text-gold-dark text-xs font-semibold tracking-widest uppercase"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {svc.label}
                </span>
              </div>
              <h3
                className="text-charcoal font-semibold text-base leading-snug"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {svc.headline}
              </h3>
              <p className="text-charcoal/60 text-sm leading-relaxed flex-1">
                {svc.desc}
              </p>
              {svc.internal ? (
                <a
                  href={svc.href}
                  className="group inline-flex items-center gap-1.5 text-sm font-medium text-charcoal/70 hover:text-gold transition-colors mt-auto pt-1"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {svc.cta}
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </a>
              ) : (
                <button
                  onClick={() => scrollTo(svc.href)}
                  className="group inline-flex items-center gap-1.5 text-sm font-medium text-charcoal/70 hover:text-gold transition-colors mt-auto pt-1"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {svc.cta}
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
