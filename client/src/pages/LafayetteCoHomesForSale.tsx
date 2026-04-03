/**
 * Lafayette CO Homes for Sale — My Rock Realty
 * Boulder cluster spoke — approved content per boulder_cluster_package_v2
 * Design: Front Range Modern — matches existing site design system
 * Palette: Warm charcoal (#292524), cream (#F5F0EB), antique gold (#C9A96E)
 * Typography: Outfit (display) + Libre Franklin (body)
 */
import { useState } from "react";
import SeoHead from "@/components/seo/SeoHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { ArrowRight } from "lucide-react";

/* ─── FAQ Content — approved per package ─── */
const faqContent = [
  {
    question: "Why does Lafayette stay in the conversation for Boulder-area buyers?",
    answer:
      "Because it often gives buyers a way to stay in this part of the region without forcing the move through Boulder itself.",
  },
  {
    question: "Is Lafayette basically just the backup plan to Boulder?",
    answer:
      "No. For the right buyer, Lafayette is not the backup plan. It is the better-fit plan.",
  },
  {
    question: "Who usually likes Lafayette most?",
    answer:
      "Usually buyers who want a strong regional location, a steadier day-to-day feel, and less pressure around making the move overly specific.",
  },
  {
    question: "Who usually moves away from Lafayette?",
    answer:
      "Usually buyers who realize they still want Boulder specifically, or want a broader practical alternative that may point them toward Longmont.",
  },
  {
    question: "When does Lafayette make more sense than Boulder?",
    answer:
      "Usually when the buyer wants the region strongly but does not need the move to run through Boulder itself.",
  },
  {
    question: "When does Boulder still make more sense than Lafayette?",
    answer:
      "When the buyer cares enough about Boulder specifically that a steadier alternative will still feel like the wrong answer.",
  },
  {
    question: "When does University Hill / CU Boulder make more sense than Lafayette?",
    answer:
      "When the buyer wants a more central, more immediate, more campus-adjacent version of Boulder.",
  },
  {
    question: "When does Longmont make more sense than Lafayette?",
    answer:
      "Usually when the buyer wants more room to work with and a broader practical alternative.",
  },
  {
    question: "Should I rent first in Lafayette before buying?",
    answer:
      "Sometimes, yes. Renting first can make sense if you are still sorting out whether Lafayette is your answer or just your clearest comparison point.",
  },
  {
    question: "What is this page really supposed to help me figure out?",
    answer:
      "Whether you want Boulder specifically, or whether you want this part of the region to work well in real life.",
  },
];

/* ─── Build FAQ Schema ─── */
const faqSchema = buildFAQPageSchema(faqContent);

/* ─── Breadcrumb Items ─── */
const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Boulder", url: "/boulder-homes-for-sale" },
  { label: "Lafayette CO Homes for Sale", url: "/lafayette-co-homes-for-sale" },
];

function CTAButton({
  label = "Talk to Rob About Lafayette",
  href = "/#contact",
  className = "",
}: {
  label?: string;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 bg-gold text-charcoal hover:bg-gold-light hover:shadow-lg px-7 py-4 text-[15px] sm:text-base no-underline ${className}`}
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {label}
      <ArrowRight size={18} />
    </a>
  );
}

export default function LafayetteCoHomesForSale() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <SeoHead
        metadata={{
          title:
            "Lafayette CO Homes for Sale | Real Estate & Area Guide",
          description:
            "Explore Lafayette CO homes for sale and see how Lafayette compares with Boulder, Louisville, and nearby options for buyers narrowing their move.",
          canonicalUrl: "https://myrockhomes.com/lafayette-co-homes-for-sale/",
          breadcrumbs: breadcrumbItems,
        }}
        schema={faqSchema ? [faqSchema] : []}
      />

      {/* ─── BREADCRUMBS ─── */}
      <div className="bg-charcoal">
        <div className="container py-3">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* ─── HERO ─── */}
      <section className="bg-charcoal py-16 sm:py-20">
        <div className="container max-w-3xl">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream leading-tight mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Lafayette CO Homes for Sale
          </h1>
          <p className="text-cream/80 text-lg leading-relaxed mb-8" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
            Thinking about living in Lafayette, Colorado? Learn what Lafayette actually feels like, who it fits, what the tradeoffs are, and when Boulder or Longmont may make more sense.
          </p>
          <CTAButton label="Talk to Rob About Lafayette" href="/#contact" />
        </div>
      </section>

      {/* ─── ANCHOR NAV ─── */}
      <nav className="bg-cream border-b border-charcoal/10 sticky top-0 z-10">
        <div className="container py-3 overflow-x-auto">
          <ul className="flex gap-6 text-sm font-medium text-charcoal/70 whitespace-nowrap" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
            <li><a href="#what-it-feels-like" className="hover:text-gold transition-colors">What Lafayette feels like</a></li>
            <li><a href="#who-it-fits" className="hover:text-gold transition-colors">Who it fits</a></li>
            <li><a href="#who-may-not-love-it" className="hover:text-gold transition-colors">Who may not love it</a></li>
            <li><a href="#tradeoffs" className="hover:text-gold transition-colors">Tradeoffs</a></li>
            <li><a href="#compare" className="hover:text-gold transition-colors">Compare nearby options</a></li>
            <li><a href="#faq" className="hover:text-gold transition-colors">Lafayette FAQs</a></li>
          </ul>
        </div>
      </nav>

      {/* ─── BODY CONTENT ─── */}
      <main className="flex-1">

        {/* 1. Intro */}
        <section className="py-14 bg-cream">
          <div className="container max-w-3xl">
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              A lot of buyers get to Lafayette after Boulder stops feeling automatic.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              That is usually a good thing.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              It means the search is getting more specific.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              This page is not here to sell Lafayette as the backup plan. And it is not here to act like every buyer looking around Boulder is really looking for the same thing.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              It is here to help answer a simpler question.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              If you like this part of the map, does Lafayette fit the way you actually want to live better than Boulder does? That is usually the real decision.
            </p>
          </div>
        </section>

        {/* 2. What the area feels like */}
        <section id="what-it-feels-like" className="py-14 bg-charcoal/5">
          <div className="container max-w-3xl">
            <h2
              className="text-2xl sm:text-3xl font-bold text-charcoal mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              What the area feels like
            </h2>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              Lafayette usually feels easier to settle into than Boulder.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              Not more exciting. Not more prestigious. Just easier to picture in real life.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              That matters more than a lot of buyers expect.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              For some people, Boulder keeps the search alive because of what it represents. Lafayette starts getting stronger when buyers begin thinking more about how the move is actually going to feel once they are living it.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              That is where Lafayette tends to make sense.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              It usually feels steadier, less pressured, and a little easier to live with day to day.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              That does not make it generic.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              It just means the appeal usually feels more grounded.
            </p>
          </div>
        </section>

        {/* 3. Why it stays in the conversation */}
        <section className="py-14 bg-cream">
          <div className="container max-w-3xl">
            <h2
              className="text-2xl sm:text-3xl font-bold text-charcoal mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Why it stays in the conversation
            </h2>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              Lafayette stays in the conversation because it often solves a problem buyers do not know how to name at first.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              They like Boulder. They like the broader area. They may even start out assuming Boulder is where they are headed.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              Then the search gets more real.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              That is when some buyers start realizing they may not need Boulder itself as much as they thought they did.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              They may just need a place in this part of the map that works really well.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              That is usually where Lafayette gets stronger.
            </p>
          </div>
        </section>

        {/* 4. Who it tends to fit */}
        <section id="who-it-fits" className="py-14 bg-charcoal/5">
          <div className="container max-w-3xl">
            <h2
              className="text-2xl sm:text-3xl font-bold text-charcoal mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Who it tends to fit
            </h2>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              Lafayette usually fits buyers who want:
            </p>
            <ul className="list-disc list-inside space-y-2 text-charcoal/80 text-lg mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              <li>to stay in the Boulder-area orbit</li>
              <li>a place that feels easier to picture day to day</li>
              <li>less pressure around choosing the "right" Boulder identity</li>
              <li>a strong location without needing Boulder specifically</li>
              <li>a move that feels practical in a good way</li>
              <li>a place that feels lived in, not overly stylized</li>
            </ul>
            <p className="text-charcoal/80 text-lg leading-relaxed" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              It is often a strong fit for buyers who want the region to work well in real life, not just sound good on paper.
            </p>
          </div>
        </section>

        {/* 5. Who may not love it */}
        <section id="who-may-not-love-it" className="py-14 bg-cream">
          <div className="container max-w-3xl">
            <h2
              className="text-2xl sm:text-3xl font-bold text-charcoal mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Who may not love it
            </h2>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              Lafayette may not be the best fit if you want:
            </p>
            <ul className="list-disc list-inside space-y-2 text-charcoal/80 text-lg mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              <li>Boulder specifically</li>
              <li>a more central Boulder feel</li>
              <li>a stronger university-adjacent feel</li>
              <li>the version of the move where being in the exact place matters most</li>
              <li>a location choice driven more by Boulder itself than by overall fit</li>
            </ul>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              A lot of buyers do not move off Lafayette because something is wrong with it.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              They move off it because they realize they still want Boulder on purpose. That is useful to learn early.
            </p>
          </div>
        </section>

        {/* 6. What the home search usually turns into */}
        <section className="py-14 bg-charcoal/5">
          <div className="container max-w-3xl">
            <h2
              className="text-2xl sm:text-3xl font-bold text-charcoal mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              What the home search usually turns into
            </h2>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              A Lafayette search usually turns into a question of how specific the buyer really needs the move to be.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              That is usually the fork in the road.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              Do you want Boulder itself? Do you want a place in the same broader orbit that may feel easier once real life starts? Or do you want a different kind of practical answer altogether?
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              That is where Lafayette becomes useful.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              For some buyers, it becomes the right answer.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              For others, it helps confirm that they still belong on the broader{" "}
              <a href="/boulder-homes-for-sale" className="text-gold underline hover:text-gold-light">Boulder page</a>{" "}
              or that they need to compare{" "}
              <a href="/longmont-co-homes-for-sale" className="text-gold underline hover:text-gold-light">Longmont</a>{" "}
              more seriously.
            </p>
          </div>
        </section>

        {/* 7. The tradeoffs */}
        <section id="tradeoffs" className="py-14 bg-cream">
          <div className="container max-w-3xl">
            <h2
              className="text-2xl sm:text-3xl font-bold text-charcoal mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              The tradeoffs are the whole point
            </h2>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              The tradeoff with Lafayette is pretty straightforward.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              If you want Boulder specifically, Lafayette is probably not going to replace that.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              But if what you really want is a strong location in this part of the region that feels easier to live with day to day, Lafayette can start looking a lot better once the search gets honest.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              That is why this page matters.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              The question is not whether Lafayette is good.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              The question is whether Boulder still needs to be that exact for you.
            </p>
          </div>
        </section>

        {/* 8. Area vs nearby alternatives */}
        <section id="compare" className="py-14 bg-charcoal/5">
          <div className="container max-w-3xl">
            <h2
              className="text-2xl sm:text-3xl font-bold text-charcoal mb-8"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Area vs nearby alternatives
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Lafayette vs Boulder
                </h3>
                <p className="text-charcoal/80 text-lg leading-relaxed mb-2" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
                  <a href="/boulder-homes-for-sale" className="text-gold underline hover:text-gold-light">Boulder</a>{" "}
                  is usually the more identity-first decision.
                </p>
                <p className="text-charcoal/80 text-lg leading-relaxed" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
                  Lafayette usually gets stronger when the buyer wants the region, but starts questioning whether the whole move needs to run through Boulder itself. If Boulder is the more exact answer, Lafayette is often the more livable one.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Lafayette vs University Hill / CU Boulder
                </h3>
                <p className="text-charcoal/80 text-lg leading-relaxed mb-2" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
                  <a href="/university-hill-cu-boulder-real-estate" className="text-gold underline hover:text-gold-light">University Hill / CU Boulder</a>{" "}
                  is a much more specific Boulder choice.
                </p>
                <p className="text-charcoal/80 text-lg leading-relaxed" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
                  That page is really about a more central, more immediate, more campus-adjacent version of Boulder. Lafayette usually makes more sense when a buyer wants less of that intensity and more breathing room in the overall decision.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Lafayette vs Longmont
                </h3>
                <p className="text-charcoal/80 text-lg leading-relaxed mb-2" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
                  <a href="/longmont-co-homes-for-sale" className="text-gold underline hover:text-gold-light">Longmont</a>{" "}
                  usually becomes the better comparison when the buyer wants more room to work with or wants to reopen the search more broadly.
                </p>
                <p className="text-charcoal/80 text-lg leading-relaxed" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
                  Lafayette is usually the cleaner comparison when the buyer still wants to stay tied fairly closely to the Boulder-area orbit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. What people tend to underestimate */}
        <section className="py-14 bg-cream">
          <div className="container max-w-3xl">
            <h2
              className="text-2xl sm:text-3xl font-bold text-charcoal mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              What people tend to underestimate
            </h2>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              A lot of buyers underestimate how often Lafayette becomes the better answer once the search gets more honest.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              It usually is not because Boulder stopped being appealing.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              It is because buyers start seeing that a place can fit better without having to carry the same weight in their mind.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              People also underestimate how valuable it can be to choose a place that feels easier to settle into.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              That is not settling.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              That is just clearer fit.
            </p>
          </div>
        </section>

        {/* 10. Buy now or rent first */}
        <section className="py-14 bg-charcoal/5">
          <div className="container max-w-3xl">
            <h2
              className="text-2xl sm:text-3xl font-bold text-charcoal mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Buy now or rent first
            </h2>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              For some buyers, buying in Lafayette right away makes sense because the appeal is already clear.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              They want this part of the region. They want a strong day-to-day fit. And they do not need the move to be more exact than that.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              For others, renting first may still make sense.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              That is especially true if you are still sorting out:
            </p>
            <ul className="list-disc list-inside space-y-2 text-charcoal/80 text-lg mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              <li>whether Boulder still has too much pull</li>
              <li>whether you want something more central or more specific</li>
              <li>whether Lafayette is the right long-term fit or just the clearest next comparison</li>
              <li>whether <a href="/longmont-co-homes-for-sale" className="text-gold underline hover:text-gold-light">Longmont</a> may fit better once the search opens up more</li>
            </ul>
          </div>
        </section>

        {/* 11. FAQ */}
        <section id="faq" className="py-14 bg-cream">
          <div className="container max-w-3xl">
            <h2
              className="text-2xl sm:text-3xl font-bold text-charcoal mb-8"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Lafayette FAQs
            </h2>
            <div className="space-y-3">
              {faqContent.map((item, index) => (
                <div
                  key={index}
                  className="border border-charcoal/15 rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 bg-white hover:bg-cream/60 transition-colors"
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    aria-expanded={expandedFaq === index}
                  >
                    <span
                      className="font-semibold text-charcoal text-base"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {item.question}
                    </span>
                    <span className="text-gold text-xl flex-shrink-0">
                      {expandedFaq === index ? "−" : "+"}
                    </span>
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 py-4 bg-white border-t border-charcoal/10">
                      <p
                        className="text-charcoal/80 leading-relaxed"
                        style={{ fontFamily: "'Libre Franklin', sans-serif" }}
                      >
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 12. Final thoughts */}
        <section className="py-14 bg-charcoal/5">
          <div className="container max-w-3xl">
            <h2
              className="text-2xl sm:text-3xl font-bold text-charcoal mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Final thoughts
            </h2>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              Lafayette stays relevant for a reason.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              It usually starts getting stronger when buyers stop asking what sounds best and start asking what actually fits.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              For the right buyer, that can be a very productive shift.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              Because sometimes the better answer is not the place that carries the most weight.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              It is the place that makes more sense once real life starts.
            </p>
          </div>
        </section>

        {/* ─── ENDCAP ─── */}
        <section className="py-14 bg-charcoal">
          <div className="container max-w-3xl">
            <h2
              className="text-2xl font-bold text-cream mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Keep Exploring Boulder Area Options
            </h2>
            <ul className="space-y-2 mb-10">
              <li>
                <a href="/boulder-homes-for-sale" className="text-gold hover:text-gold-light underline text-lg" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
                  Boulder →
                </a>
              </li>
              <li>
                <a href="/university-hill-cu-boulder-real-estate" className="text-gold hover:text-gold-light underline text-lg" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
                  University Hill / CU Boulder →
                </a>
              </li>
              <li>
                <a href="/longmont-co-homes-for-sale" className="text-gold hover:text-gold-light underline text-lg" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
                  Longmont →
                </a>
              </li>
              <li>
                <a href="/louisville-co-homes-for-sale" className="text-gold hover:text-gold-light underline text-lg" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
                  Louisville →
                </a>
              </li>
            </ul>
            <h3
              className="text-xl font-bold text-cream mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Next Step
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
              <CTAButton label="Talk to Rob About Boulder Area Options" href="/#contact" />
              <a
                href="/boulder-co-homes-for-sale"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border border-cream/40 text-cream hover:bg-cream/10 px-7 py-4 text-[15px] sm:text-base no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Browse Boulder Homes →
              </a>
              <a
                href="/colorado-home-buying-workshop"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border border-cream/40 text-cream hover:bg-cream/10 px-7 py-4 text-[15px] sm:text-base no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Colorado Home Buying Workshop →
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
