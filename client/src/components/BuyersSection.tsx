import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function BuyersSection() {
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
            Buying a Home
          </h2>
          
          <div className="space-y-6 max-w-2xl mb-8">
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
              A lot of buyers think the biggest challenge is finding the right house. Usually that is not the biggest challenge. Usually it is everything around it.
            </p>
            
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
              How much you can comfortably afford. What the payment really looks like once everything is included. Whether a grant or assistance program actually helps. Whether seller concessions could make the deal easier. Whether the lender is helping the strategy or quietly limiting it. Whether the offer is strong enough for the moment without putting you in a bad spot later.
            </p>
            
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
              That is where people get stuck.
            </p>
            
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
              I help buyers think through that part before the pressure kicks in. That matters. A lot of agents can get you into the house. That is not the same thing as helping you make a smart move once you are there.
            </p>
            
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
              If you want help thinking through the numbers, the pressure points, and the parts most people do not explain very well, I can help with that.
            </p>
          </div>

          <button
            onClick={() => navigate("/buying-a-home-in-denver")}
            className="group inline-flex items-center gap-2.5 px-6 py-3 text-gold font-semibold text-base transition-colors hover:text-gold-light"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Help Me Buy Smarter
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
