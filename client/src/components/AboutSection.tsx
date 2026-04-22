import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-[#292524] py-20 sm:py-28 md:py-32">
      <div className="container mx-auto w-full max-w-4xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p
            className="text-xs font-semibold tracking-[0.18em] uppercase text-gold mb-5"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            About Rob
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
            About Rob
          </h2>
          
          <div className="space-y-5 max-w-2xl">
            <p className="text-lg sm:text-xl text-white/75 leading-relaxed">
              I've been in the real estate industry for over a decade, and I spent four and a half years coaching agents through Zillow. That gave me a front-row seat to where people get real help, where they get weak advice, and where deals start to go sideways.
            </p>
            
            <p className="text-lg sm:text-xl text-white/75 leading-relaxed">
              What that showed me is pretty simple. Too many people are making major decisions without enough real help.
            </p>
            
            <p className="text-lg sm:text-xl text-white/75 leading-relaxed">
              So I built this site around the way I actually work with clients: clear thinking, honest answers, and practical help before the pressure starts doing the thinking for them.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
