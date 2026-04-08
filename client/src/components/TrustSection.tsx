import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function TrustSection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-charcoal py-20 sm:py-28 md:py-32">
      <div className="container mx-auto w-full max-w-4xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Why People Work With Me
          </h2>
          
          <div className="space-y-6 max-w-2xl mb-8">
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
              A lot of people want something pretty simple. They want direct advice from someone who knows what they are doing. They want someone who will tell them the truth. And they want a process that feels steady instead of sloppy.
            </p>
            
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
              That is what I try to deliver. You get practical advice, honest answers, and help thinking through the decision instead of just being pushed toward one. You also get the benefit of solid people involved where they matter, so the process has support without feeling impersonal.
            </p>
            
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
              I do not think people need more hype. I think people need someone useful.
            </p>
          </div>

          <button
            onClick={() => scrollTo("#contact")}
            className="group inline-flex items-center gap-2.5 px-6 py-3 text-gold font-semibold text-base transition-colors hover:text-gold-light"
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
