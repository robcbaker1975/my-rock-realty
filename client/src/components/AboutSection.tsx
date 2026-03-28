import { motion } from "framer-motion";

const HEADSHOT_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/rob-about_7d660579.jpg";

const stats = [
  { value: "25+", label: "Years in Sales & Negotiations" },
  { value: "4.5", label: "Years at Zillow" },
  { value: "50", label: "States in Referral Network" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-20 md:py-28 bg-warm-white overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Headshot — generous container to preserve cowboy hat */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 relative"
          >
            <div className="relative max-w-sm mx-auto lg:mx-0">
              {/* Gold accent background — offset for depth */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-gold/10 rounded-lg" />
              {/* Main image container — extra top padding to never crop the hat */}
              <div className="relative rounded-lg overflow-hidden shadow-xl bg-cream">
                <img
                  src={HEADSHOT_URL}
                  alt="Rob Baker, founder and owner of My Rock Realty, wearing a cowboy hat with Colorado flag motif"
                  className="w-full h-auto object-cover"
                  style={{ objectPosition: "center top" }}
                  width="512"
                  height="512"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              {/* Name card */}
              <div className="absolute -bottom-4 left-4 right-4 bg-charcoal rounded-lg p-4 shadow-lg">
                <p
                  className="text-white font-bold text-lg"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Rob Baker
                </p>
                <p className="text-gold text-sm">Broker/Owner, My Rock Realty, LLC</p>
                <p className="text-cream/40 text-xs mt-1">Lic. ER100078487</p>
              </div>
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <span
              className="text-gold-dark text-sm font-semibold tracking-widest uppercase mb-3 block"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              About Rob
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal leading-tight mb-5 sm:mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              A Coaching Mindset.{" "}
              <span className="text-gold-dark">A Strategic Approach.</span>
            </h2>

            <div className="space-y-3 text-charcoal-light/80 text-[15px] sm:text-lg leading-relaxed mb-5 sm:mb-8">
              <p>
                Hi, I'm Rob Baker, founder and owner of My Rock Realty. I've been in
                real estate since 2018 and bring more than 25 years of experience in
                sales and negotiations.
              </p>
              <p>
                Before launching my brokerage, I spent 4.5 years at Zillow® as an
                Agent Coach & Consultant, helping agents improve strategy, client
                experience, and results.
              </p>
              <p>
                Today, I bring that same coaching mindset to buyers and sellers across
                Colorado&mdash;helping buyers navigate home buying programs and smart
                financing opportunities, helping sellers pursue top-dollar outcomes
                through modern marketing and data-driven pricing, and helping clients
                connect with trusted agents through my referral network in all 50
                states.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 sm:gap-8 pt-5 sm:pt-6 border-t border-cream-dark/60">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <p
                    className="text-3xl font-bold text-gold-dark"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-charcoal-light/60 text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
