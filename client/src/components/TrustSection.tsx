import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function TrustSection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-[#1a1714] py-20 sm:py-28 md:py-32">
      {/* Gold left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold/60" />

      <div className="container mx-auto w-full max-w-4xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          {/* Section label */}
          <p
            className="text-xs font-semibold tracking-[0.18em] uppercase text-gold mb-5"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Why People Work With Me
          </p>

          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-8 leading-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            A lot of people want something pretty simple.
          </h2>

          <div className="space-y-5 max-w-2xl mb-9">
            <p className="text-lg sm:text-xl text-white/75 leading-relaxed">
              They want direct advice from someone who knows what they are doing. They want someone who will tell them the truth. And they want a process that feels steady instead of sloppy.
            </p>
            <p className="text-lg sm:text-xl text-white/75 leading-relaxed">
              That is what I try to deliver. You get practical advice, honest answers, and help thinking through the decision instead of just being pushed toward one. You also get the benefit of solid people involved where they matter, so the process has support without feeling impersonal.
            </p>
            <p className="text-lg sm:text-xl text-white/75 leading-relaxed">
              I do not think people need more hype. I think people need someone useful.
            </p>
          </div>

          <button
            onClick={() => scrollTo("#contact")}
            className="group inline-flex items-center gap-2.5 px-0 py-1 text-gold font-semibold text-base border-b border-gold/40 transition-colors hover:border-gold"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            See How I Can Help
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
