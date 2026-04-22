import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function RelocationsSection() {
  const navigate = (path: string) => { window.location.href = path; };

  return (
    <section id="relocations" className="relative bg-[#F5F0EB] py-20 sm:py-28 md:py-32">
      <div className="container mx-auto w-full max-w-4xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          {/* Section label */}
          <p
            className="text-xs font-semibold tracking-[0.18em] uppercase text-gold-dark mb-5"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Moving to Colorado
          </p>

          <h2
            className="text-3xl sm:text-4xl font-bold text-[#292524] mb-8 leading-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            If you are moving to Colorado, you probably do not need a polished pitch.
          </h2>

          <div className="space-y-5 max-w-2xl mb-9">
            <p className="text-lg sm:text-xl text-[#292524]/75 leading-relaxed">
              You need clarity.
            </p>
            <p className="text-lg sm:text-xl text-[#292524]/75 leading-relaxed">
              You need to know what areas may make sense, what your payment may realistically look like, what kind of pace you may be walking into, and what to do first so the move does not feel like ten moving parts all hitting at once.
            </p>
            <p className="text-lg sm:text-xl text-[#292524]/75 leading-relaxed">
              That is usually the first thing to sort out.
            </p>
            <p className="text-lg sm:text-xl text-[#292524]/75 leading-relaxed">
              I help relocation clients sort through the questions that matter early, so the move feels more organized, more informed, and much less reactive.
            </p>
          </div>

          <button
            onClick={() => navigate("/relocation/relocating-to-denver-colorado")}
            className="group inline-flex items-center gap-2.5 px-0 py-1 text-[#292524] font-semibold text-base border-b-2 border-gold transition-colors hover:text-gold-dark"
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
