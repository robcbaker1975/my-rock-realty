import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function RelocationsSection() {
  const navigate = (path: string) => { window.location.href = path; };

  return (
    <section className="relative bg-charcoal py-20 sm:py-28 md:py-32">
      <div className="container mx-auto w-full max-w-4xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Moving to Colorado
          </h2>
          
          <div className="space-y-6 max-w-2xl mb-8">
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
              If you are moving to Colorado, you probably do not need a polished pitch. You need clarity.
            </p>
            
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
              You need to know what areas may make sense, what your payment may realistically look like, what kind of pace you may be walking into, and what to do first so the move does not feel like ten moving parts all hitting at once.
            </p>
            
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
              That is usually where we start.
            </p>
            
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
              I help relocation clients sort through the questions that matter early, so the move feels more organized, more informed, and a lot less reactive.
            </p>
          </div>

          <button
            onClick={() => navigate("/relocation/relocating-to-denver-colorado")}
            className="group inline-flex items-center gap-2.5 px-6 py-3 text-gold font-semibold text-base transition-colors hover:text-gold-light"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Moving to Colorado
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
