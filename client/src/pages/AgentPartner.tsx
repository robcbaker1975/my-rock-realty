/**
 * Agent Partner — My Rock Realty
 * Direct-link, noindex secondary page for 30-day agent outreach test.
 * NOT part of the primary consumer-facing site direction.
 * Not linked in public nav, footer, homepage, or sitemap.
 * Design: Front Range Modern — matches existing site design system
 * Palette: Warm charcoal (#292524), cream (#F5F0EB), antique gold (#C9A96E)
 * Typography: Outfit (display) + Libre Franklin (body)
 */
import { useEffect } from "react";
import { motion } from "framer-motion";
import SeoHead from "@/components/seo/SeoHead";
import { Mail } from "lucide-react";

const LOGO_URL = "/assets/logo.png";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function AgentPartner() {
  useEffect(() => {
    document.title = "Colorado Agent Partnership | My Rock Realty";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-warm-white font-body">
      {/* ─── SEO: noindex, nofollow ─── */}
      <SeoHead
        metadata={{
          title: "Colorado Agent Partnership | My Rock Realty",
          description:
            "A direct-link page for Colorado real estate agents exploring a strategic positioning conversation with My Rock Realty.",
          robots: { index: false, follow: false },
        }}
        schema={[]}
      />

      {/* ─── MINIMAL HEADER ─── */}
      <header className="bg-charcoal">
        <div className="container flex items-center justify-center py-3 sm:py-4">
          <a href="/" aria-label="My Rock Realty — Home">
            <img src={LOGO_URL} alt="My Rock Realty" className="h-9 w-auto" />
          </a>
        </div>
      </header>

      {/* ─── MAIN CONTENT ─── */}
      <main className="flex-1">

        {/* ══════════════════════════════════════════════
            SECTION 1 — AUDIENCE-FIT OPENER
        ══════════════════════════════════════════════ */}
        <section className="bg-charcoal text-cream-dark py-16 sm:py-20">
          <div className="container max-w-2xl">
            <motion.p
              className="text-gold font-display text-sm font-semibold tracking-widest uppercase mb-4"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              For Colorado Real Estate Agents
            </motion.p>
            <motion.h1
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              We're testing whether this works for Colorado agents.
            </motion.h1>
            <motion.p
              className="text-cream-dark/80 text-lg leading-relaxed"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              This is a direct, selective offer — not a mass campaign. We're exploring whether the positioning model behind myrockhomes.com could work for solo agents and small teams in Colorado.
            </motion.p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 2 — OFFER FRAMING
        ══════════════════════════════════════════════ */}
        <section className="bg-cream py-14 sm:py-16">
          <div className="container max-w-2xl">
            <motion.h2
              className="font-display text-2xl sm:text-3xl font-bold text-charcoal mb-4"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              This is how myrockhomes.com works.
            </motion.h2>
            <motion.p
              className="text-charcoal/80 text-base sm:text-lg leading-relaxed"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              We're exploring whether it could work for you. The same positioning, structure, and lead-capture architecture we've built for Colorado real estate — we're testing whether it translates to agents who share our approach to the market.
            </motion.p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 3 — WHY THIS IS DIFFERENT
        ══════════════════════════════════════════════ */}
        <section className="bg-warm-white py-14 sm:py-16">
          <div className="container max-w-2xl">
            <motion.h2
              className="font-display text-2xl sm:text-3xl font-bold text-charcoal mb-8"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              Why this is different
            </motion.h2>
            <div className="flex flex-col gap-6">
              {[
                {
                  title: "Positioned for Colorado authority",
                  body: "Built specifically for Colorado real estate — not a generic template. The positioning is structured around local market clarity, niche depth, and trust-first content architecture.",
                },
                {
                  title: "Lead generation built in",
                  body: "The site is designed to capture buyer and seller inquiries through structure, not just forms. Lead-capture mechanisms are part of the site's architecture, not an afterthought.",
                },
                {
                  title: "Selective by design",
                  body: "This isn't a platform for everyone. The approach works best for agents who value strategic positioning over volume marketing — and who want a site that reflects that.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="flex gap-4 items-start"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i + 1}
                >
                  <span className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-gold" />
                  <div>
                    <p className="font-display font-semibold text-charcoal text-base mb-1">{item.title}</p>
                    <p className="text-charcoal/70 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 4 — PROOF
        ══════════════════════════════════════════════ */}
        <section className="bg-cream py-14 sm:py-16">
          <div className="container max-w-2xl">
            <motion.h2
              className="font-display text-2xl sm:text-3xl font-bold text-charcoal mb-4"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              This is a live, working example.
            </motion.h2>
            <motion.p
              className="text-charcoal/80 text-base sm:text-lg leading-relaxed"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              myrockhomes.com is not a mockup or concept. It's a fully built Colorado real estate site with structured positioning, local market depth, and lead-capture architecture you can see directly. The proof is in the execution — visit the site and see how it's built.
            </motion.p>

          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 5 — LIGHT FIT / NON-FIT
        ══════════════════════════════════════════════ */}
        <section className="bg-warm-white py-14 sm:py-16">
          <div className="container max-w-2xl">
            <motion.h2
              className="font-display text-2xl sm:text-3xl font-bold text-charcoal mb-4"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              Is this a fit?
            </motion.h2>
            <motion.p
              className="text-charcoal/80 text-base sm:text-lg leading-relaxed mb-3"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              Best for solo agents and small teams seeking Colorado positioning and lead generation.
            </motion.p>
            <motion.p
              className="text-charcoal/60 text-base leading-relaxed"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              Not designed for large brokerages or white-label solutions.
            </motion.p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 6 — SINGLE CTA
        ══════════════════════════════════════════════ */}
        <section className="bg-charcoal text-cream-dark py-16 sm:py-20">
          <div className="container max-w-2xl text-center">
            <motion.h2
              className="font-display text-2xl sm:text-3xl font-bold mb-4"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              Request a conversation
            </motion.h2>
            <motion.p
              className="text-cream-dark/70 text-base mb-8"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              Tell us about your market. We'll follow up within 24 hours.
            </motion.p>
            <motion.a
              href="mailto:rob@myrockhomes.com?subject=Agent%20Partnership%20Inquiry&body=Hi%20Rob%2C%0A%0ATell%20us%20about%20your%20market%20and%20what%20you%27re%20looking%20for.%0A%0A"
              className="inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-charcoal font-display font-semibold text-base px-8 py-4 transition-colors"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              <Mail className="w-5 h-5" />
              Request a conversation
            </motion.a>
          </div>
        </section>

      </main>

      {/* ─── MINIMAL FOOTER ─── */}
      <footer className="bg-charcoal border-t border-charcoal-light py-5">
        <div className="container text-center text-cream-dark/40 text-xs font-body">
          © {new Date().getFullYear()} My Rock Realty. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
