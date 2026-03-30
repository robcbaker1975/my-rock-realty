/**
 * IL-98: Workshop Resources Page — /colorado-home-buying-workshop/resources
 * Scope: Workshop-support structure only. Links to 3 approved worksheet pages.
 * Do not embed full worksheets here. Do not expand into sitewide resource hub.
 */
import SeoHead from "@/components/seo/SeoHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { useEffect } from "react";
import { ArrowRight, Phone, Mail } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/logo_c4d99dfc.png";

const worksheets = [
  {
    number: "Worksheet 1",
    title: "Needs, Wants & Dreams",
    role: "Search clarity before the search gets messy.",
    description:
      "A lot of buyers start looking at homes before they get fully clear on what actually matters. This worksheet helps you sort out true needs, flexible wants, and bigger-picture dreams so your search stays cleaner, more focused, and a lot less frustrating.",
    href: "/needs-wants-dreams-worksheet.html",
    cta: "Open Worksheet 1",
  },
  {
    number: "Worksheet 2",
    title: "Monthly Payment Comfort",
    role: "Separate lender approval from real monthly comfort.",
    description:
      "Lender approval tells you what you qualify for. This worksheet helps you figure out what you are actually comfortable paying each month — before you start making offers on homes.",
    href: "/monthly-payment-comfort-worksheet.html",
    cta: "Open Worksheet 2",
  },
  {
    number: "Worksheet 3",
    title: "Buyer Offer Strategy",
    role: "Think through price, concessions, protections, and structure before writing.",
    description:
      "Writing an offer without thinking through your strategy first usually leads to regret. This worksheet walks you through price, concessions, loan and property risk, contingencies, and offer structure so you go in with a clear plan.",
    href: "/buyer-offer-strategy-worksheet.html",
    cta: "Open Worksheet 3",
  },
];

export default function WorkshopResources() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-warm-white">
      <SeoHead
        metadata={{
          title: "Colorado Home Buying Workshop — Worksheets & Resources | My Rock Realty",
          description:
            "Three practical worksheets to support the Colorado Home Buying Workshop: Needs, Wants & Dreams; Monthly Payment Comfort; and Buyer Offer Strategy. Use these before and after the workshop.",
          canonicalUrl: "https://myrockhomes.com/colorado-home-buying-workshop/resources",
          breadcrumbs: [
            { label: "Home", href: "/" },
            { label: "Colorado Home Buying Workshop", href: "/colorado-home-buying-workshop" },
            { label: "Workshop Resources", href: "/colorado-home-buying-workshop/resources" },
          ],
          image:
            "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/og3-adjusted_cc925a31.png",
        }}
      />

      {/* ─── Header ─── */}
      <header className="bg-charcoal">
        <div className="container py-5 sm:py-6 flex items-center justify-between gap-4">
          <a href="/" aria-label="My Rock Realty home">
            <img
              src={LOGO_URL}
              alt="My Rock Realty"
              className="h-16 sm:h-20 w-auto drop-shadow-lg"
              width="80"
              height="80"
              loading="eager"
            />
          </a>
          <a
            href="/colorado-home-buying-workshop"
            className="text-cream/70 hover:text-gold text-xs sm:text-sm font-medium transition-colors"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            ← Back to Workshop
          </a>
        </div>
      </header>

      {/* ─── Breadcrumbs ─── */}
      <div className="bg-charcoal/95 border-b border-white/10">
        <div className="container py-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Colorado Home Buying Workshop", href: "/colorado-home-buying-workshop" },
              { label: "Workshop Resources", href: "/colorado-home-buying-workshop/resources" },
            ]}
            listClassName="text-xs sm:text-sm text-cream/60"
            itemClassName="text-cream/60"
          />
        </div>
      </div>

      {/* ─── Page Intro ─── */}
      <section className="py-12 sm:py-16 border-b border-charcoal/10">
        <div className="container max-w-3xl">
          <p
            className="text-gold text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Colorado Home Buying Workshop
          </p>
          <h1
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal leading-tight mb-5"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Workshop Worksheets
          </h1>
          <p className="text-charcoal/70 text-[15px] sm:text-base leading-relaxed max-w-2xl">
            These three worksheets are designed to support the workshop and give you a practical tool for each major decision point in the buying process. You can use them before the workshop to get clearer on where you stand, or after to apply what you learned to your specific situation.
          </p>
          <p className="text-charcoal/60 text-sm leading-relaxed mt-3 max-w-2xl">
            Each worksheet is standalone. Open the one that is most relevant to where you are right now.
          </p>
        </div>
      </section>

      {/* ─── Worksheet Cards ─── */}
      <section className="py-12 sm:py-16">
        <div className="container max-w-3xl">
          <div className="flex flex-col gap-8">
            {worksheets.map((ws) => (
              <div
                key={ws.number}
                className="border border-charcoal/10 rounded-lg bg-white p-6 sm:p-8"
              >
                <p
                  className="text-gold text-xs font-semibold tracking-widest uppercase mb-2"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {ws.number}
                </p>
                <h2
                  className="text-lg sm:text-xl font-bold text-charcoal mb-1"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {ws.title}
                </h2>
                <p className="text-charcoal/60 text-sm font-medium mb-3 italic">{ws.role}</p>
                <p className="text-charcoal/70 text-[14px] sm:text-[15px] leading-relaxed mb-5">
                  {ws.description}
                </p>
                <a
                  href={ws.href}
                  className="inline-flex items-center gap-2 bg-charcoal text-cream text-sm font-semibold px-5 py-3 rounded transition-all duration-200 hover:bg-charcoal/80"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {ws.cta}
                  <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Back to Workshop CTA ─── */}
      <section className="py-10 sm:py-12 bg-charcoal/5 border-t border-charcoal/10">
        <div className="container max-w-3xl text-center">
          <p className="text-charcoal/70 text-[14px] sm:text-[15px] leading-relaxed mb-4">
            Not registered for the workshop yet? The worksheets are most useful when you have the full context from the session.
          </p>
          <a
            href="/colorado-home-buying-workshop"
            className="inline-flex items-center gap-2 border-2 border-charcoal text-charcoal text-sm font-semibold px-6 py-3 rounded transition-all duration-200 hover:bg-charcoal hover:text-cream"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            ← Back to Workshop Page
          </a>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="bg-charcoal border-t border-white/5">
        <div className="container py-8 sm:py-10">
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
            <div className="text-center sm:text-left">
              <img
                src={LOGO_URL}
                alt="My Rock Realty"
                className="h-16 sm:h-20 w-auto mx-auto sm:mx-0 mb-3"
                width="80"
                height="80"
                loading="lazy"
                decoding="async"
              />
              <p className="text-cream/50 text-xs leading-relaxed">
                My Rock Realty, LLC
                <br />
                Lic. ER100078487
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-4 mt-2">
                <a
                  href="tel:7203636544"
                  className="text-cream/50 hover:text-gold text-xs flex items-center gap-1 transition-colors"
                >
                  <Phone size={12} /> (720) 363-6544
                </a>
                <a
                  href="mailto:workshop@myrockhomes.com"
                  className="text-cream/50 hover:text-gold text-xs flex items-center gap-1 transition-colors"
                >
                  <Mail size={12} /> workshop@myrockhomes.com
                </a>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs text-cream/40">
              <a href="/" className="hover:text-gold transition-colors">Main Site</a>
              <a href="/colorado-home-buying-workshop" className="hover:text-gold transition-colors">Workshop</a>
              <a href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-gold transition-colors">Terms</a>
              <a href="/fair-housing" className="hover:text-gold transition-colors">Fair Housing</a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-white/5">
            <p className="text-cream/30 text-[11px] leading-relaxed text-center max-w-3xl mx-auto">
              Information provided is for educational purposes only and is not a commitment to lend. Rob Baker is not a lender, accountant, CPA, or attorney. Please consult with licensed lending, tax, or legal professionals regarding your specific situation. My Rock Realty, LLC is a Colorado-licensed real estate brokerage. All real estate services are provided in compliance with applicable federal, state, and local laws, including the Fair Housing Act.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
