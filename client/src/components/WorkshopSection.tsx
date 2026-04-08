import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function WorkshopSection() {
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
            Colorado Home Buying Workshop
          </h2>
          
          <div className="space-y-6 max-w-2xl mb-8">
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
              A lot of buyers are not ready to jump into private showings or serious one-on-one conversations yet. That's natural.
            </p>
            
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
              Sometimes the better first step is just getting clear on how the process works, what programs may help, how much cash you may actually need, and what mistakes to avoid before things get serious.
            </p>
            
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
              That is why I host a Colorado home buying workshop. It is practical, low pressure, and built to help people feel more informed before they make a big move.
            </p>
          </div>

          <button
            onClick={() => navigate("/colorado-home-buying-workshop")}
            className="group inline-flex items-center gap-2.5 px-6 py-3 text-gold font-semibold text-base transition-colors hover:text-gold-light"
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
