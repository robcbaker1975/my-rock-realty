/**
 * IL-98: Workshop Resources Page — /colorado-home-buying-workshop/resources
 * Scope: Workshop-support toolkit only. Links to 3 approved worksheet pages.
 * Do not embed full worksheets. Do not expand into sitewide resource hub.
 */
import SeoHead from "@/components/seo/SeoHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { useEffect } from "react";
import { ArrowRight, Phone, Mail, ClipboardList, DollarSign, FileText, ChevronRight } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/logo-256-q90_82c472ae.webp";
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/workshop-section-Yp8jnnKmpb9X4Au9XRWi4s.webp";

const worksheets = [
  {
    number: "Step 1",
    step: "01",
    icon: ClipboardList,
    title: "Needs, Wants & Dreams",
    when: "Before you start searching",
    role: "Get clear on what actually matters before the search gets noisy.",
    description:
      "Most buyers start looking at homes before they know what they really need. The result is a scattered search, emotional decisions, and a lot of wasted time. This worksheet helps you separate true needs from flexible wants and longer-term dreams — so your search stays focused, your conversations with your agent stay productive, and you don't end up settling for the wrong home.",
    href: "/colorado-home-buying-workshop/resources/needs-wants-dreams",
    cta: "Open Worksheet 1",
    external: false,
  },
  {
    number: "Step 2",
    step: "02",
    icon: DollarSign,
    title: "Monthly Payment Comfort",
    when: "Before you make any offers",
    role: "Separate what a lender approves from what you're actually comfortable paying.",
    description:
      "Lender approval tells you the ceiling. This worksheet helps you find your floor — the monthly payment you can genuinely live with, not just technically afford. Working through this before you write an offer means you go in with a number that's grounded in your real life, not just what the bank says is possible.",
    href: "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/monthly-payment-comfort-worksheet_e42740c1.html",
    cta: "Open Worksheet 2",
    external: true,
  },
  {
    number: "Step 3",
    step: "03",
    icon: FileText,
    title: "Buyer Offer Strategy",
    when: "When you're ready to write an offer",
    role: "Think through price, concessions, contingencies, and structure before you write.",
    description:
      "Writing an offer without a clear strategy usually leads to regret — either you overpay, leave protections on the table, or lose a home you could have won. This worksheet walks you through every major decision point: price, seller concessions, loan and property risk, contingencies, and offer structure. You go in with a plan instead of a guess.",
    href: "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/buyer-offer-strategy-worksheet_b9d78a0a.html",
    cta: "Open Worksheet 3",
    external: true,
  },
];

const faqs = [
  {
    q: "Do I need to attend the workshop before using these worksheets?",
    a: "No — the worksheets are standalone and useful on their own. That said, the workshop gives you the context to use them more effectively. If you haven't attended yet, the worksheets are a good preview of the kind of thinking the workshop covers.",
  },
  {
    q: "Can I use all three worksheets at once?",
    a: "They're designed to be used in sequence. Start with Needs, Wants & Dreams before you search. Move to Monthly Payment Comfort before you make offers. Use the Offer Strategy worksheet when you're ready to write. Using them out of order is fine, but the sequence builds on itself.",
  },
  {
    q: "Are these worksheets specific to Colorado?",
    a: "Yes. The context, examples, and framing are built around the Colorado market — including Colorado-specific programs, financing options, and the way offers typically work here.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="border-b border-charcoal/10 last:border-0 py-5">
      <p className="text-[15px] sm:text-base font-semibold text-charcoal leading-snug mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
        {q}
      </p>
      <p className="text-[14px] sm:text-[15px] text-charcoal/70 leading-relaxed">{a}</p>
    </div>
  );
}

export default function WorkshopResources() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="hub-page min-h-screen bg-warm-white">
      <SeoHead
        metadata={{
          title: "Colorado Home Buying Workshop — Worksheets & Toolkit | My Rock Realty",
          description:
            "Three practical worksheets for Colorado home buyers: Needs, Wants & Dreams; Monthly Payment Comfort; and Buyer Offer Strategy. Use them in sequence to support the Colorado Home Buying Workshop.",
          canonicalUrl: "https://myrockhomes.com/colorado-home-buying-workshop/resources",
          breadcrumbs: [
            { label: "Home", href: "/" },
            { label: "Colorado Home Buying Workshop", href: "/colorado-home-buying-workshop" },
            { label: "Workshop Toolkit", href: "/colorado-home-buying-workshop/resources" },
          ],
          image:
            "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/og3-adjusted_cc925a31.png",
        }}
      />

      {/* ═══════════════════════════════════════════════════
          HEADER
      ═══════════════════════════════════════════════════ */}
      <header className="bg-charcoal">
        <div className="container py-4 sm:py-5 flex items-center justify-between gap-4">
          <a href="/" aria-label="My Rock Realty home">
            <img
              src={LOGO_URL}
              alt="My Rock Realty"
              className="h-[5.5rem] sm:h-[6.5rem] w-auto drop-shadow-lg"
              width="104"
              height="104"
              loading="eager"
            />
          </a>
          <a
            href="/colorado-home-buying-workshop"
            className="inline-flex items-center gap-1.5 text-cream/70 hover:text-gold text-xs sm:text-sm font-medium transition-colors"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            ← Back to Workshop
          </a>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════
          BREADCRUMBS
      ═══════════════════════════════════════════════════ */}
      <div className="bg-charcoal/95 border-b border-white/10">
        <div className="container py-2 sm:py-3">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Colorado Home Buying Workshop", href: "/colorado-home-buying-workshop" },
              { label: "Workshop Toolkit", href: "/colorado-home-buying-workshop/resources" },
            ]}
            listClassName="text-xs sm:text-sm text-cream/60"
            itemClassName="text-cream/60"
          />
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-charcoal overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_BG})`, backgroundPosition: "center 40%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/88 to-charcoal/96" />
        <div className="container relative z-10 py-12 sm:py-16 lg:py-20 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
            <span className="text-gold text-xs sm:text-sm font-semibold tracking-wide" style={{ fontFamily: "'Outfit', sans-serif" }}>
              COLORADO HOME BUYING WORKSHOP
            </span>
          </div>
          <h1
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-cream leading-tight mb-5"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Workshop Toolkit
          </h1>
          <p className="text-cream/80 text-base sm:text-lg leading-relaxed max-w-2xl mb-0">
            Three worksheets built for the workshop — one for each major decision point in the Colorado home buying process. Use them in sequence to build clarity before you search, before you offer, and before you sign.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          HOW TO USE — 3-step sequence visual
      ═══════════════════════════════════════════════════ */}
      <section className="py-10 sm:py-14 border-b border-charcoal/10 bg-warm-white">
        <div className="container max-w-3xl">
          <p
            className="text-gold text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            How to Use This Toolkit
          </p>
          <h2
            className="text-xl sm:text-2xl font-bold text-charcoal mb-5 leading-snug"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Three worksheets. Three decision points. One clear sequence.
          </h2>
          <p className="text-charcoal/70 text-[15px] sm:text-base leading-relaxed mb-8 max-w-2xl">
            The workshop covers a lot of ground in 60 minutes. These worksheets give you a place to apply that thinking to your specific situation. Each one is standalone — start with the one that matches where you are right now.
          </p>
          {/* Sequence visual */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { step: "01", label: "Before you search", title: "Needs, Wants & Dreams" },
              { step: "02", label: "Before you offer", title: "Monthly Payment Comfort" },
              { step: "03", label: "Before you sign", title: "Buyer Offer Strategy" },
            ].map((item, i) => (
              <div key={item.step} className="flex sm:flex-col items-start sm:items-start gap-3 sm:gap-2 bg-charcoal/[0.04] border border-charcoal/10 rounded-lg px-4 py-4">
                <span className="text-gold text-2xl font-bold shrink-0" style={{ fontFamily: "'Outfit', sans-serif" }}>{item.step}</span>
                <div>
                  <p className="text-charcoal/50 text-[11px] font-semibold tracking-widest uppercase mb-0.5" style={{ fontFamily: "'Outfit', sans-serif" }}>{item.label}</p>
                  <p className="text-charcoal text-sm font-semibold leading-snug" style={{ fontFamily: "'Outfit', sans-serif" }}>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          WORKSHEET CARDS — 3 premium blocks
      ═══════════════════════════════════════════════════ */}
      <section className="py-10 sm:py-14 bg-warm-white">
        <div className="container max-w-3xl">
          <div className="flex flex-col gap-6">
            {worksheets.map((ws) => {
              const Icon = ws.icon;
              return (
                <div
                  key={ws.number}
                  className="bg-white border border-charcoal/10 rounded-xl shadow-sm overflow-hidden"
                >
                  {/* Card header bar */}
                  <div className="bg-charcoal px-6 py-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                        <Icon size={17} className="text-gold" />
                      </div>
                      <div>
                        <p className="text-gold text-[11px] font-semibold tracking-widest uppercase leading-none mb-0.5" style={{ fontFamily: "'Outfit', sans-serif" }}>
                          {ws.number}
                        </p>
                        <h3
                          className="text-cream text-base sm:text-lg font-bold leading-snug"
                          style={{ fontFamily: "'Outfit', sans-serif" }}
                        >
                          {ws.title}
                        </h3>
                      </div>
                    </div>
                    <span className="hidden sm:block text-gold/40 text-4xl font-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      {ws.step}
                    </span>
                  </div>

                  {/* Card body */}
                  <div className="px-6 py-6">
                    {/* When to use */}
                    <div className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/20 rounded-full px-3 py-1 mb-4">
                      <span className="text-gold/90 text-[11px] font-semibold tracking-wide uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>
                        Use this: {ws.when}
                      </span>
                    </div>

                    {/* Role / purpose */}
                    <p className="text-charcoal text-[15px] sm:text-base font-semibold leading-snug mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      {ws.role}
                    </p>

                    {/* Description */}
                    <p className="text-charcoal/65 text-[14px] sm:text-[15px] leading-relaxed mb-6">
                      {ws.description}
                    </p>

                    {/* CTA */}
                    <a
                      href={ws.href}
                      className="inline-flex items-center gap-2 bg-charcoal text-cream text-sm font-semibold px-5 py-3 rounded-lg transition-all duration-200 hover:bg-charcoal/80"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                      {...(ws.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {ws.cta}
                      <ArrowRight size={15} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════════ */}
      <section className="py-10 sm:py-14 bg-charcoal/[0.03] border-t border-charcoal/10">
        <div className="container max-w-3xl">
          <p
            className="text-gold text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Common Questions
          </p>
          <h2
            className="text-xl sm:text-2xl font-bold text-charcoal mb-6 leading-snug"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            About the worksheets
          </h2>
          <div className="bg-white border border-charcoal/10 rounded-xl px-5 sm:px-8">
            {faqs.map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
        {/* Inline FAQPage schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </section>

      {/* ═══════════════════════════════════════════════════
          CLOSING CTA — Workshop registration
      ═══════════════════════════════════════════════════ */}
      <section className="py-10 sm:py-14 border-t border-charcoal/10 bg-warm-white">
        <div className="container max-w-3xl">
          <div className="bg-charcoal rounded-xl px-7 sm:px-10 py-9 sm:py-11">
            <p
              className="text-gold text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Colorado Home Buying Workshop
            </p>
            <h2
              className="text-xl sm:text-2xl font-bold text-cream leading-snug mb-3"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              The worksheets make more sense after the session.
            </h2>
            <p className="text-cream/70 text-[14px] sm:text-[15px] leading-relaxed mb-7 max-w-xl">
              The workshop is free, runs every Tuesday at 6 PM MT online, and covers the full context behind each of these tools — programs, financing, offer strategy, and the step-by-step process for buying in Colorado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a
                href="https://coloradohomebuyingworkshop.com/registration-form-page"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold text-charcoal text-sm font-bold px-6 py-3.5 rounded-lg transition-all duration-200 hover:bg-gold/90"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Reserve Your Free Seat
                <ArrowRight size={16} />
              </a>
              <a
                href="/colorado-home-buying-workshop"
                className="inline-flex items-center gap-1 text-cream/60 hover:text-gold text-sm font-medium transition-colors"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Learn more about the workshop
                <ChevronRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════════ */}
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
