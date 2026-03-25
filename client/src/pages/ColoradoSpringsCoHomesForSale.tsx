/**
 * Colorado Springs, CO Homes for Sale — My Rock Realty
 * Lean transactional search page — approved package implementation
 * Palette: Warm charcoal, cream, antique gold
 * Typography: Outfit (display) + Libre Franklin (body)
 */

import { useState, useEffect } from "react";
import SeoHead from "@/components/seo/SeoHead";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { ArrowRight, ChevronDown } from "lucide-react";

/* ─── FAQ Content (approved lean version) ─── */
const faqContent = [
  {
    question: "What types of homes can buyers find in Colorado Springs?",
    answer:
      "Buyers can find condos, townhomes, newer single-family homes, older homes in more established areas, and properties with more land. What fits best usually depends on budget, area, and how much upkeep or updating you are comfortable with.",
  },
  {
    question: "Is Colorado Springs a good place to buy a home?",
    answer:
      "For a lot of buyers, yes. But it usually works best when the search is built around budget, area fit, commute, and home style instead of just whatever listings appear first.",
  },
  {
    question: "Should I rent before buying in Colorado Springs?",
    answer:
      "Sometimes. If you already know the map and feel clear on where you want to be, buying first can make sense. If you are still figuring out area fit or timing, rental tour support can be a better first step.",
    answerLink: { text: "rental tour support", href: "/rental-tour-support/" },
  },
  {
    question: "Is Colorado Springs a good market for military buyers?",
    answer:
      "Often, yes. Installation access, commute, and timing shape a lot of buying decisions here, especially for buyers connected to Fort Carson, Peterson, Schriever, or the Air Force Academy.",
  },
  {
    question: "What should I do before touring homes in Colorado Springs?",
    answer:
      "Get clear on your budget, financing, preferred part of town, and the type of home you actually want. If you are still learning the area, read the Moving to Colorado Springs page first.",
    answerLink: { text: "Moving to Colorado Springs", href: "/moving-to-colorado-springs/" },
  },
];

/* ─── FAQ Accordion ─── */
function FAQItem({
  question,
  answer,
  answerLink,
}: {
  question: string;
  answer: string;
  answerLink?: { text: string; href: string };
}) {
  const [open, setOpen] = useState(false);

  const renderAnswer = () => {
    if (!answerLink) return answer;
    const parts = answer.split(answerLink.text);
    return (
      <>
        {parts[0]}
        <a href={answerLink.href} className="text-gold underline underline-offset-2 hover:opacity-80 transition-opacity">
          {answerLink.text}
        </a>
        {parts[1]}
      </>
    );
  };

  return (
    <div className="border-b border-charcoal/10 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 px-1 text-left gap-4"
      >
        <span
          className="text-[15px] sm:text-base font-semibold text-charcoal leading-snug"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          {question}
        </span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-gold transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-60 pb-5" : "max-h-0"}`}
      >
        <p className="text-[14px] sm:text-[15px] text-charcoal/70 leading-relaxed px-1">
          {renderAnswer()}
        </p>
      </div>
    </div>
  );
}

export default function ColoradoSpringsCoHomesForSale() {
  const faqSchema = buildFAQPageSchema(faqContent);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-warm-white">
      <SeoHead
        metadata={{
          title: "Colorado Springs, CO Homes for Sale | My Rock Realty",
          description:
            "Searching for homes for sale in Colorado Springs? Start with a clearer search strategy — budget, part of town, home type, and commute. My Rock Realty helps Colorado Springs buyers find the right fit.",
          canonicalUrl: "https://www.myrockhomes.com/colorado-springs-co-homes-for-sale",
        }}
        schema={faqSchema ? [faqSchema] : []}
      />

      {/* ═══════════════════════════════════════════════════
          HEADER
      ═══════════════════════════════════════════════════ */}
      <header className="bg-charcoal">
        <div className="container flex items-center justify-center sm:justify-between py-3 sm:py-4">
          <a
            href="/"
            className="text-cream font-bold text-lg sm:text-xl tracking-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            My Rock Realty
          </a>
          <a
            href="/"
            className="absolute top-4 right-4 sm:static text-cream/70 hover:text-gold text-xs sm:text-sm font-medium transition-colors inline-flex items-center gap-1.5"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <ArrowRight size={13} className="rotate-180" />
            Back to Main Site
          </a>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════
          BREADCRUMB
      ═══════════════════════════════════════════════════ */}
      <div className="bg-charcoal/95 border-b border-white/5">
        <div className="container py-2.5">
          <nav className="text-xs text-cream/50" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
            <a href="/" className="hover:text-cream transition-colors">Home</a>
            <span className="mx-2">/</span>
            <span className="text-cream/80">Colorado Springs Homes for Sale</span>
          </nav>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════ */}
      <section className="bg-charcoal pt-12 pb-14 sm:pt-16 sm:pb-18">
        <div className="container max-w-3xl">
          <p
            className="text-gold/80 text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Colorado Springs Real Estate
          </p>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream leading-tight mb-5"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Colorado Springs, CO Homes for Sale
          </h1>
          <p
            className="text-cream/70 text-base sm:text-lg leading-relaxed max-w-2xl"
            style={{ fontFamily: "'Libre Franklin', sans-serif" }}
          >
            Searching for homes for sale in Colorado Springs gets easier once you stop trying to search the whole city at once.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          INTRO
      ═══════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16">
        <div className="container max-w-3xl">
          <div className="prose prose-charcoal max-w-none" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
            <p className="text-charcoal/80 text-base sm:text-[17px] leading-relaxed mb-4">
              Colorado Springs is a broad market, and the right search usually starts with a few practical things first: your budget, your commute, the kind of home you want, and what part of town fits the way you actually live.
            </p>
            <p className="text-charcoal/80 text-base sm:text-[17px] leading-relaxed mb-4">
              This page is here to help you start that search more clearly.
            </p>
            <p className="text-charcoal/80 text-base sm:text-[17px] leading-relaxed">
              If you're still figuring out what different parts of town feel like, what to know before moving, or whether it makes more sense to rent or buy first, start with our guide to{" "}
              <a href="/moving-to-colorado-springs/" className="text-gold underline underline-offset-2 hover:opacity-80 transition-opacity">
                moving to Colorado Springs
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          START HERE
      ═══════════════════════════════════════════════════ */}
      <section className="bg-charcoal/5 border-y border-charcoal/8 py-10 sm:py-12">
        <div className="container max-w-3xl">
          <h2
            className="text-xl sm:text-2xl font-bold text-charcoal mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Start Here
          </h2>
          <ul className="space-y-3" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
            {[
              { label: "New to the area? Read", linkText: "Moving to Colorado Springs", href: "/moving-to-colorado-springs/" },
              { label: "Comparing Front Range options? See", linkText: "Denver vs. Colorado Springs", href: "/denver-vs-colorado-springs" },
              { label: "Not ready to buy yet? Explore", linkText: "Rental Tour Support", href: "/rental-tour-support/" },
              { label: "Moving on military timing? Start with", linkText: "Military Relocation", href: "/military-relocation/", secondLinkText: "PCS Relocation Tour Support", secondHref: "/military-relocation/pcs-relocation-tour-support/" },
              { label: "Want a clearer buying plan first? Join the", linkText: "Colorado Home Buying Workshop", href: "/colorado-home-buying-workshop" },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-charcoal/80 text-[15px]">
                <ArrowRight size={15} className="text-gold shrink-0 mt-0.5" />
                <span>
                  {item.label}{" "}
                  <a href={item.href} className="text-gold underline underline-offset-2 hover:opacity-80 transition-opacity font-medium">
                    {item.linkText}
                  </a>
                  {item.secondLinkText && (
                    <>
                      {" "}or{" "}
                      <a href={item.secondHref} className="text-gold underline underline-offset-2 hover:opacity-80 transition-opacity font-medium">
                        {item.secondLinkText}
                      </a>
                    </>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          HOW TO SEARCH
      ═══════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16">
        <div className="container max-w-3xl">
          <h2
            className="text-xl sm:text-2xl font-bold text-charcoal mb-5"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            How to Search Colorado Springs Homes More Clearly
          </h2>
          <p className="text-charcoal/80 text-base leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
            Most buyers narrow this market best by getting clear on four things early:
          </p>
          <ul className="space-y-2 mb-6" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
            {["price range", "part of town", "home type", "commute"].map((item) => (
              <li key={item} className="flex items-center gap-2 text-charcoal/80 text-[15px]">
                <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-charcoal/80 text-base leading-relaxed mb-3" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
            That matters because Colorado Springs is not one simple search. A condo, a newer home in a more predictable area, an older home in a more established part of town, and a property with more land all create different searches.
          </p>
          <p className="text-charcoal/80 text-base leading-relaxed" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
            The fastest way to waste time here is to search too broadly for too long.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          WHAT CHANGES THE SEARCH FASTEST
      ═══════════════════════════════════════════════════ */}
      <section className="bg-charcoal py-12 sm:py-16">
        <div className="container max-w-3xl">
          <h2
            className="text-xl sm:text-2xl font-bold text-cream mb-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            What Usually Changes the Search Fastest
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                heading: "Part of town",
                body: "Where you live can change your routine more than people expect.",
              },
              {
                heading: "Home age and condition",
                body: "Some buyers want something easier to compare and more move-in ready. Others are open to older homes or more variation.",
              },
              {
                heading: "Property type",
                body: "Condos, townhomes, single-family homes, and properties with more land all create different tradeoffs.",
              },
              {
                heading: "Recurring drives",
                body: "Commute, school, errands, and installation access can make one part of the market fit much better than another.",
              },
            ].map((item) => (
              <div key={item.heading} className="border-l-2 border-gold/40 pl-4">
                <h3
                  className="text-cream font-semibold text-base mb-1.5"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {item.heading}
                </h3>
                <p
                  className="text-cream/65 text-sm leading-relaxed"
                  style={{ fontFamily: "'Libre Franklin', sans-serif" }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          NEARBY AREAS
      ═══════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16">
        <div className="container max-w-3xl">
          <h2
            className="text-xl sm:text-2xl font-bold text-charcoal mb-5"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Nearby Areas Buyers Also Consider
          </h2>
          <p className="text-charcoal/80 text-base leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
            Some buyers start in Colorado Springs and then widen the search.
          </p>
          <p className="text-charcoal/80 text-base leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
            That can bring places like Manitou Springs, Monument, Palmer Lake, Falcon, Peyton, Fountain, Woodland Park, Calhan, or Black Forest into the conversation, depending on commute, space, privacy, and day-to-day fit.
          </p>
          <p className="text-charcoal/80 text-base leading-relaxed" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
            If you're still deciding whether Colorado Springs itself is the right move, the full{" "}
            <a href="/moving-to-colorado-springs/" className="text-gold underline underline-offset-2 hover:opacity-80 transition-opacity">
              relocation guide
            </a>{" "}
            will help more than browsing listings alone.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════════ */}
      <section className="bg-charcoal/5 border-y border-charcoal/8 py-12 sm:py-16">
        <div className="container max-w-3xl">
          <h2
            className="text-xl sm:text-2xl font-bold text-charcoal mb-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Colorado Springs Homes FAQ
          </h2>
          <div className="bg-white rounded-xl border border-charcoal/10 px-4 sm:px-6">
            {faqContent.map((item) => (
              <FAQItem key={item.question} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-18">
        <div className="container max-w-3xl">
          <h2
            className="text-xl sm:text-2xl font-bold text-charcoal mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Ready to Start Your Search?
          </h2>
          <p className="text-charcoal/75 text-base leading-relaxed mb-6" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
            If you're ready to search Colorado Springs homes, the next step is usually getting clear on the right part of the market before you get too attached to a specific listing.
          </p>
          <p className="text-charcoal/75 text-base leading-relaxed mb-8" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
            My Rock Realty can help you narrow the search with clear strategy, real-world guidance, and a no-pressure conversation.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-gold text-charcoal font-semibold text-sm px-6 py-3 rounded-lg hover:bg-gold/90 transition-colors mb-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Talk to Rob About Colorado Springs
            <ArrowRight size={15} />
          </a>
          <div className="border-t border-charcoal/10 pt-6">
            <p className="text-charcoal/60 text-sm mb-3" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              You can also:
            </p>
            <ul className="space-y-2" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              {[
                { text: "browse Colorado Springs homes for sale", href: "/colorado-springs-co-homes-for-sale" },
                { text: "join the Colorado Home Buying Workshop", href: "/colorado-home-buying-workshop" },
                { text: "explore military relocation help", href: "/military-relocation/" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gold underline underline-offset-2 hover:opacity-80 transition-opacity text-sm"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════════ */}
      <footer className="bg-charcoal border-t border-white/10 py-8">
        <div className="container text-center">
          <p
            className="text-cream/40 text-xs"
            style={{ fontFamily: "'Libre Franklin', sans-serif" }}
          >
            © {new Date().getFullYear()} My Rock Realty · Colorado Springs, CO ·{" "}
            <a href="/" className="hover:text-cream/70 transition-colors">
              myrockhomes.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
