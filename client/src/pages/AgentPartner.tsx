/**
 * Agent Partner — My Rock Realty
 * Direct-link, noindex secondary page for Colorado agent outreach.
 * NOT part of the primary consumer-facing site direction.
 * Not linked in public nav, footer, homepage, or sitemap.
 * Design: Front Range Modern — matches existing site design system
 * Palette: Warm charcoal (#292524), cream (#F5F0EB), antique gold (#C9A96E)
 * Typography: Outfit (display) + Libre Franklin (body)
 */
import { useEffect } from "react";
import { motion } from "framer-motion";
import SeoHead from "@/components/seo/SeoHead";
import { Mail, ExternalLink } from "lucide-react";

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
    <div className="min-h-screen flex flex-col bg-cream font-body">
      {/* ─── SEO: noindex, nofollow ─── */}
      <SeoHead
        metadata={{
          title: "Colorado Agent Partnership | My Rock Realty",
          description:
            "A direct-link page for Colorado real estate agents exploring a strategic website and positioning conversation with My Rock Realty.",
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
            SECTION 1 — HERO / OPENER
        ══════════════════════════════════════════════ */}
        <section className="bg-charcoal text-cream py-20 sm:py-24">
          <div className="container max-w-2xl">
            <motion.p
              className="text-gold font-display text-xs font-semibold tracking-[0.2em] uppercase mb-5"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              Shared directly with a small number of Colorado agents
            </motion.p>
            <motion.h1
              className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold leading-tight mb-6"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              A stronger website presence for Colorado agents who want more than a template.
            </motion.h1>
            <motion.p
              className="text-cream/75 text-lg leading-relaxed"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              This page is shared directly with a small number of Colorado agents we think may be a fit. It's not part of the public site — it's a direct conversation about whether the positioning model behind myrockhomes.com could work for your market.
            </motion.p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 2 — OFFER FRAMING
        ══════════════════════════════════════════════ */}
        <section className="bg-cream py-16 sm:py-20">
          <div className="container max-w-2xl">
            <motion.h2
              className="font-display text-2xl sm:text-3xl font-bold text-charcoal mb-5"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              What this is
            </motion.h2>
            <motion.p
              className="text-charcoal/80 text-base sm:text-lg leading-relaxed mb-5"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              myrockhomes.com is a fully built Colorado real estate site — structured for local authority, designed to generate buyer and seller inquiries, and positioned for the specific markets we serve. It's not a generic template. It's built the way we believe a serious Colorado real estate presence should be built.
            </motion.p>
            <motion.p
              className="text-charcoal/80 text-base sm:text-lg leading-relaxed"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              For the right Colorado agents, custom website support — built on the same model — may be available. This conversation is about whether that's a fit for your market and your approach.
            </motion.p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 3 — WHY THIS IS DIFFERENT
        ══════════════════════════════════════════════ */}
        <section
          className="py-16 sm:py-20"
          style={{ backgroundColor: "#F0EBE3" }}
        >
          <div className="container max-w-2xl">
            <motion.h2
              className="font-display text-2xl sm:text-3xl font-bold text-charcoal mb-10"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              What makes it different
            </motion.h2>
            <div className="flex flex-col gap-8">
              {[
                {
                  title: "Built for Colorado, not adapted from a national template",
                  body: "The positioning, content structure, and market coverage are built specifically for Colorado real estate. Local niche depth, community-level pages, and market-specific trust signals — not generic copy dropped into a template.",
                },
                {
                  title: "Designed to generate inquiries, not just look good",
                  body: "The site is structured so that buyers and sellers who find it are guided toward a conversation. That's a deliberate design decision, not an afterthought.",
                },
                {
                  title: "Selective — not a platform for everyone",
                  body: "This model works best for agents who value credible, strategic positioning over volume marketing. If that's not your approach, this probably isn't the right fit.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="flex gap-5 items-start"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i + 1}
                >
                  <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold" />
                  <div>
                    <p className="font-display font-semibold text-charcoal text-base mb-1.5">{item.title}</p>
                    <p className="text-charcoal/65 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 4 — PROOF (live site link)
        ══════════════════════════════════════════════ */}
        <section className="bg-cream py-16 sm:py-20">
          <div className="container max-w-2xl">
            <motion.h2
              className="font-display text-2xl sm:text-3xl font-bold text-charcoal mb-5"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              See it for yourself
            </motion.h2>
            <motion.p
              className="text-charcoal/80 text-base sm:text-lg leading-relaxed mb-8"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              The site is live. You can see exactly how it's structured, how the market pages are built, and how the positioning works in practice. The execution speaks for itself.
            </motion.p>
            <motion.a
              href="https://www.myrockhomes.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-charcoal font-display font-semibold text-sm border-b-2 border-gold pb-0.5 hover:text-gold transition-colors"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              Explore the live site
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 5 — FIT / NON-FIT
        ══════════════════════════════════════════════ */}
        <section
          className="py-16 sm:py-20"
          style={{ backgroundColor: "#F0EBE3" }}
        >
          <div className="container max-w-2xl">
            <motion.h2
              className="font-display text-2xl sm:text-3xl font-bold text-charcoal mb-6"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              Who this is for
            </motion.h2>
            <motion.p
              className="text-charcoal/80 text-base sm:text-lg leading-relaxed mb-4"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              Solo agents and small teams in Colorado who want a stronger, more credible web presence — and who are willing to invest in positioning over volume.
            </motion.p>
            <motion.p
              className="text-charcoal/55 text-base leading-relaxed"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              Not the right fit for large brokerages, white-label solutions, or agents looking for a quick plug-and-play site.
            </motion.p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 6 — SINGLE CTA
        ══════════════════════════════════════════════ */}
        <section className="bg-charcoal text-cream py-20 sm:py-24">
          <div className="container max-w-xl text-center">
            <motion.p
              className="text-gold font-display text-xs font-semibold tracking-[0.2em] uppercase mb-5"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              Direct-link offer — not a public advertised service
            </motion.p>
            <motion.h2
              className="font-display text-3xl sm:text-4xl font-bold mb-5"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              If this feels relevant to your market, let's talk.
            </motion.h2>
            <motion.p
              className="text-cream/65 text-base mb-10 leading-relaxed"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              Tell us about your market and what you're looking for. We'll follow up directly.
            </motion.p>
            <motion.a
              href="mailto:rob@myrockhomes.com?subject=Agent%20Website%20Conversation&body=Hi%20Rob%2C%0A%0AHere%27s%20a%20bit%20about%20my%20market%20and%20what%20I%27m%20looking%20for%3A%0A%0A"
              className="inline-flex items-center gap-3 bg-gold hover:bg-[#b8903e] text-charcoal font-display font-semibold text-base px-9 py-4 transition-colors"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
            >
              <Mail className="w-5 h-5" />
              Request a conversation
            </motion.a>
          </div>
        </section>

      </main>

      {/* ─── MINIMAL FOOTER ─── */}
      <footer className="bg-charcoal border-t border-white/10 py-5">
        <div className="container text-center text-cream/30 text-xs font-body">
          © {new Date().getFullYear()} My Rock Realty. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
