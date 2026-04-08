import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative bg-charcoal py-20 sm:py-28 md:py-32">
      <div className="container mx-auto w-full max-w-4xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
            About Rob
          </h2>
          
          <div className="space-y-6 max-w-2xl">
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
              I've been in the real estate industry for over a decade, and I spent four and a half years coaching agents through Zillow. That gave me a front-row seat to where people get real help, where they get weak advice, and where deals start to go sideways.
            </p>
            
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
              What I took from that is simple. A lot of people are making major decisions with far less real help than they should have.
            </p>
            
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
              So I built this site to be a clearer, more useful place to start. That means helping people understand what they are doing, what could trip them up, and what the smarter move looks like before they are deep into the process.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
