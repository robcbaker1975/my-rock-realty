import { motion } from "framer-motion";
import { ArrowRight, Globe, Users, CheckCircle } from "lucide-react";

const scenarios = [
  {
    icon: Globe,
    title: "Moving to Colorado",
    text: "Relocating to Colorado? Rob helps you navigate the market, understand neighborhoods, and connect with trusted local expertise to make your move confident and informed.",
  },
  {
    icon: Globe,
    title: "Moving From Colorado",
    text: "Leaving Colorado? Rob's nationwide referral network connects you with vetted agents in your destination state who share his commitment to client success and strategic guidance.",
  },
  {
    icon: Users,
    title: "Referring Friends & Family",
    text: "Need to connect someone with a trusted agent elsewhere? Rob's 50-state network means you can confidently refer colleagues, clients, or loved ones to agents who deliver the same strategic approach.",
  },
];

export default function RelocationsSection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="relocations-referrals" className="py-12 sm:py-20 md:py-28 bg-cream relative overflow-hidden">
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
              Relocations · Referrals · Nationwide Network
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal leading-tight mb-4 sm:mb-5"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Trusted Agent Referrals in{" "}
              <span className="text-gold-dark">All 50 States</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-charcoal-light/80 text-[15px] sm:text-lg leading-relaxed mb-5"
            >
              Whether you're moving to Colorado, relocating elsewhere, or need to connect someone with a trusted agent, Rob's nationwide network of vetted professionals delivers the same strategic guidance and client-first approach you'd get working directly with him.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <button
                onClick={() => scrollTo("#contact")}
                className="group inline-flex items-center gap-2 text-gold-dark font-semibold text-[15px] hover:text-gold transition-colors"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Need a Trusted Agent Referral?
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Value Proposition Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-charcoal rounded-lg p-5 sm:p-8 md:p-10"
        >
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Smooth Handoffs",
                desc: "Direct connections with vetted agents who understand your situation and priorities from day one.",
              },
              {
                title: "Trusted Approach",
                desc: "Every referral partner shares Rob's commitment to strategic guidance, transparency, and client success.",
              },
              {
                title: "Nationwide Coverage",
                desc: "Whether you're moving to a major market or a smaller community, Rob has trusted connections ready to help.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="flex gap-3"
              >
                <CheckCircle size={24} className="text-gold shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <h3
                    className="text-white font-semibold mb-1"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-cream/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 sm:mt-12 text-center"
        >
          <p className="text-charcoal-light/80 text-[15px] sm:text-lg mb-5">
            Ready to make a move or connect someone with the right agent?
          </p>
          <button
            onClick={() => scrollTo("#contact")}
            className="group inline-flex items-center justify-center gap-2 px-7 py-3 bg-gold-dark text-white font-semibold rounded-lg hover:bg-gold transition-colors text-[15px] sm:text-base"
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
