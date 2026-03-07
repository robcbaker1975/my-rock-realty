import { motion } from "framer-motion";
import { Shield, TrendingUp, Users, Target, GraduationCap, Globe } from "lucide-react";

const differentiators = [
  {
    icon: Shield,
    title: "Licensed Since 2018",
    description: "Deep market knowledge across Colorado's diverse communities.",
  },
  {
    icon: TrendingUp,
    title: "25+ Years in Sales & Negotiations",
    description: "Decades of deal-making and client advocacy that translate to stronger outcomes for you.",
  },
  {
    icon: GraduationCap,
    title: "4.5 Years at Zillow",
    description: "As an Agent Coach & Consultant, Rob helped agents sharpen strategy, client experience, and results.",
  },
  {
    icon: Target,
    title: "Coaching Mindset",
    description: "A strategic, education-first approach so you make confident, informed decisions.",
  },
  {
    icon: Users,
    title: "Buyer & Seller Guidance",
    description: "From home buying programs to data-driven pricing, every client gets a tailored strategy.",
  },
  {
    icon: Globe,
    title: "Nationwide Referral Network",
    description: "Trusted agent connections in all 50 states for relocations, referrals, and cross-state moves.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function TrustSection() {
  return (
    <section className="py-14 sm:py-20 md:py-28 bg-warm-white">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold text-sm font-semibold tracking-widest uppercase mb-3 block"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Why Clients Choose Rob
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal leading-tight mb-3 sm:mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Experience, Strategy & a{" "}
            <span className="text-gold-dark">Coaching Approach</span>{" "}
            That Sets You Up to Win
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-charcoal-light/80 text-base sm:text-lg leading-relaxed"
          >
            Here's what makes working with My Rock Realty different.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="group p-5 sm:p-6 rounded bg-white border border-cream-dark/60 hover:border-gold/40 transition-all hover:shadow-lg hover:shadow-gold/5"
            >
              <div className="w-11 h-11 rounded flex items-center justify-center bg-gold/10 text-gold-dark mb-4 group-hover:bg-gold/20 transition-colors">
                <item.icon size={22} strokeWidth={1.8} />
              </div>
              <h3
                className="text-lg font-semibold text-charcoal mb-2"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {item.title}
              </h3>
              <p className="text-charcoal-light/70 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
