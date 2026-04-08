import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function WorkshopSection() {
  const navigate = (path: string) => { window.location.href = path; };

  return (
    <section className="relative bg-[#F5F0EB] py-20 sm:py-28 md:py-32">
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
            Colorado Home Buying Workshop
          </p>

          <h2
            className="text-3xl sm:text-4xl font-bold text-[#292524] mb-8 leading-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Many buyers are not ready to jump into private showings or serious one-on-one conversations yet.
          </h2>

          <div className="space-y-5 max-w-2xl mb-9">
            <p className="text-lg sm:text-xl text-[#292524]/75 leading-relaxed">
              That's natural.
            </p>
            <p className="text-lg sm:text-xl text-[#292524]/75 leading-relaxed">
              Sometimes the better first step is just getting clear on how the process works, what programs may help, how much cash you may actually need, and what mistakes to avoid before things get serious.
            </p>
            <p className="text-lg sm:text-xl text-[#292524]/75 leading-relaxed">
              That is why I host a Colorado home buying workshop. It is practical, low pressure, and built to help people feel more informed before they make a big move.
            </p>
          </div>

          <button
            onClick={() => navigate("/colorado-home-buying-workshop")}
            className="group inline-flex items-center gap-2.5 px-0 py-1 text-[#292524] font-semibold text-base border-b-2 border-gold transition-colors hover:text-gold-dark"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Reserve My Spot
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
