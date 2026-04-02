/**
 * Longmont CO Homes for Sale — My Rock Realty
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
    question: "Why does Longmont stay in the conversation for Boulder-area buyers?",
    answer:
      "Because it often gives buyers a broader, more flexible answer without pulling them out of this part of the region.",
  },
  {
    question: "Is Longmont just what buyers choose when Boulder does not work?",
    answer:
      "No. For the right buyer, Longmont is not a fallback. It is the better-fit answer because it gives the move more room to come together.",
  },
  {
    question: "Who usually likes Longmont most?",
    answer:
      "Usually buyers who want more flexibility, a broader practical answer, and less pressure around choosing one exact place.",
  },
  {
    question: "Who usually moves away from Longmont?",
    answer:
      "Usually buyers who realize they still want Boulder specifically, or want the steadier regional balance that Lafayette provides.",
  },
  {
    question: "When does Longmont make more sense than Boulder?",
    answer:
      "Usually when the buyer wants this part of the region, but does not want the whole move to depend on Boulder itself.",
  },
  {
    question: "When does Boulder still make more sense than Longmont?",
    answer:
      "When the buyer cares enough about Boulder specifically that a broader practical answer will still feel too open-ended.",
  },
  {
    question: "When does Lafayette make more sense than Longmont?",
    answer:
      "Usually when the buyer still wants to stay more tightly tied to the Boulder-area orbit, but wants a steadier answer than Boulder.",
  },
  {
    question: "When does University Hill / CU Boulder make more sense than Longmont?",
    answer:
      "When the buyer wants a more specific, central, campus-adjacent version of Boulder instead of a broader practical alternative.",
  },
  {
    question: "Should I rent first in Longmont before buying?",
    answer:
      "Sometimes, yes. Renting first can make sense if you are still figuring out whether Longmont is your long-term answer or just the page that helps the search open up.",
  },
  {
    question: "What is this page really supposed to help me figure out?",
    answer:
      "Whether you want the move to stay narrowly tied to Boulder, or whether a broader answer actually fits you better.",
  },
];

/* ─── Build FAQ Schema ─── */
const faqSchema = buildFAQPageSchema(faqContent);

/* ─── Breadcrumb Items ─── */
const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Boulder", url: "/boulder-homes-for-sale" },
  { label: "Longmont CO Homes for Sale", url: "/longmont-co-homes-for-sale" },
];

function CTAButton({
  label = "Talk to Rob About Longmont",
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

export default function LongmontCoHomesForSale() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <SeoHead
        metadata={{
          title:
            "Living in Longmont, Colorado: Real Estate, Tradeoffs, and What It's Actually Like | My Rock Realty",
          description:
            "Thinking about living in Longmont, Colorado? Learn what Longmont actually feels like, who it fits, what the tradeoffs are, and when Boulder or Lafayette may make more sense.",
          canonicalUrl: "https://myrockhomes.com/longmont-co-homes-for-sale/",
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
            Living in Longmont, Colorado: Real Estate, Tradeoffs, and What It's Actually Like
          </h1>
          <p className="text-cream/80 text-lg leading-relaxed mb-8" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
            Thinking about living in Longmont, Colorado? Learn what Longmont actually feels like, who it fits, what the tradeoffs are, and when Boulder or Lafayette may make more sense.
          </p>
          <CTAButton label="Talk to Rob About Longmont" href="/#contact" />
        </div>
      </section>

      {/* ─── ANCHOR NAV ─── */}
      <nav className="bg-cream border-b border-charcoal/10 sticky top-0 z-10">
        <div className="container py-3 overflow-x-auto">
          <ul className="flex gap-6 text-sm font-medium text-charcoal/70 whitespace-nowrap" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
            <li><a href="#what-it-feels-like" className="hover:text-gold transition-colors">What Longmont feels like</a></li>
            <li><a href="#who-it-fits" className="hover:text-gold transition-colors">Who Longmont fits</a></li>
            <li><a href="#who-may-not-love-it" className="hover:text-gold transition-colors">Who may not love it</a></li>
            <li><a href="#tradeoffs" className="hover:text-gold transition-colors">Longmont tradeoffs</a></li>
            <li><a href="#compare" className="hover:text-gold transition-colors">Compare nearby options</a></li>
            <li><a href="#faq" className="hover:text-gold transition-colors">Longmont FAQs</a></li>
          </ul>
        </div>
      </nav>

      {/* ─── BODY CONTENT ─── */}
      <main className="flex-1">

        {/* 1. Intro */}
        <section className="py-14 bg-cream">
          <div className="container max-w-3xl">
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              A lot of buyers land on Longmont after the search stops feeling like it has to revolve around Boulder.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              That is usually a useful shift.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              It does not mean the buyer is lowering the bar. It usually means they are starting to ask a better question.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              Not, "What sounds best?"
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              More like, "What actually fits?"
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              This page is here to help with that.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              It is not here to treat Longmont like a fallback. And it is not here to make it sound like the answer for anyone who wants more space and nothing else.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              It is here to help you sort out whether Longmont gives you a better version of the move once the search gets more real.
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
              Longmont usually feels less compressed than Boulder.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              That is one of the first things buyers tend to notice.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              The search often feels like it has more room in it. More room to think. More room to compare. More room to build around the way you actually want to live instead of forcing everything through one exact idea of place.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              That is the appeal for a lot of people.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              Longmont also has more than 1,500 acres of parks and open space, which helps explain why the city can feel less boxed in day to day.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              Longmont usually does not feel like it is trying to make a strong statement about itself. It tends to feel more grounded than that.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              For some buyers, that is exactly why it starts making sense.
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
              Longmont stays in the conversation because it often becomes the page buyers need once they stop trying to make Boulder work no matter what.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              That is not a knock on Boulder.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              It just means that at some point, some buyers realize they want this part of the region without needing the move to be tied to one exact place.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              That is where Longmont tends to get stronger.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              It gives buyers another way to stay in the broader orbit without making the whole decision feel boxed in.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              That can be a big deal.
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
              Longmont usually fits buyers who want:
            </p>
            <ul className="list-disc list-inside space-y-2 text-charcoal/80 text-lg mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              <li>more room to work with in the search</li>
              <li>a broader practical answer</li>
              <li>a place that still keeps them in this part of the region</li>
              <li>less pressure around choosing one exact version of the move</li>
              <li>a day-to-day feel that is easier to build around</li>
              <li>more flexibility in how the search comes together</li>
            </ul>
            <p className="text-charcoal/80 text-lg leading-relaxed" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              It is often a strong fit for buyers who want the move to make sense in real life, not just in theory.
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
              Longmont may not be the best fit if you want:
            </p>
            <ul className="list-disc list-inside space-y-2 text-charcoal/80 text-lg mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              <li>Boulder specifically</li>
              <li>a move that feels more tied to Boulder's identity</li>
              <li>a location choice that feels narrower and more exact</li>
              <li>the steadier middle-ground answer that Lafayette often provides</li>
              <li>a place where the location itself is doing most of the emotional work in the decision</li>
            </ul>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              Some buyers move away from Longmont because they realize they still want the move to feel more specific than this.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              That is useful to learn.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              Longmont usually works best when more flexibility feels like an advantage, not like a step away from what you really wanted.
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
              A Longmont search usually turns into a question of how open the buyer wants the move to be.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              That is usually the real issue.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              Do you still want Boulder anchoring the whole decision? Do you want a steadier answer like{" "}
              <a href="/lafayette-co-homes-for-sale" className="text-gold underline hover:text-gold-light">Lafayette</a>?
              Or do you want a place that gives you more room to work with and lets the search come together more naturally?
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              That is where Longmont becomes useful.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              For some buyers, it is the first page that makes the move feel less tight.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              For others, it helps confirm they still want the sharper fit of{" "}
              <a href="/boulder-homes-for-sale" className="text-gold underline hover:text-gold-light">Boulder</a>{" "}
              or the cleaner regional balance of Lafayette.
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
              The tradeoff with Longmont is pretty simple.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              It usually gives buyers more room in the decision.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              More room around the search. More room around priorities. More room to let the move come together without forcing it through one exact idea.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              For the right buyer, that is a real advantage.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              But if someone wants Boulder specifically, or wants the move to feel more tied to one exact place, Longmont probably will not replace that.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              That is fine.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              This page is here to help figure out whether more flexibility is what you actually want, or whether it just sounds good until the search gets serious.
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
                  Longmont vs Boulder
                </h3>
                <p className="text-charcoal/80 text-lg leading-relaxed mb-2" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
                  <a href="/boulder-homes-for-sale" className="text-gold underline hover:text-gold-light">Boulder</a>{" "}
                  is usually the more exact decision.
                </p>
                <p className="text-charcoal/80 text-lg leading-relaxed" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
                  Longmont usually gets stronger when the buyer wants this part of the region, but no longer wants the whole move to depend on Boulder itself. If Boulder is the more identity-first answer, Longmont is usually the more flexible one.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Longmont vs Lafayette
                </h3>
                <p className="text-charcoal/80 text-lg leading-relaxed mb-2" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
                  <a href="/lafayette-co-homes-for-sale" className="text-gold underline hover:text-gold-light">Lafayette</a>{" "}
                  is often the steadier comparison.
                </p>
                <p className="text-charcoal/80 text-lg leading-relaxed" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
                  That page tends to fit buyers who still want to stay pretty closely tied to the Boulder-area orbit, just without Boulder's full pressure. Longmont usually gets stronger when the buyer wants to open the search a little wider and have more room to work with.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Longmont vs University Hill / CU Boulder
                </h3>
                <p className="text-charcoal/80 text-lg leading-relaxed mb-2" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
                  <a href="/university-hill-cu-boulder-real-estate" className="text-gold underline hover:text-gold-light">University Hill / CU Boulder</a>{" "}
                  is a much more specific page.
                </p>
                <p className="text-charcoal/80 text-lg leading-relaxed" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
                  That page is about choosing a more immediate, more central, more campus-adjacent version of Boulder on purpose. Longmont usually makes sense when the buyer wants almost the opposite kind of decision — less narrowed, less tied to one exact version of place.
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
              A lot of buyers underestimate how helpful it can be when the search stops feeling boxed in.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              That is one of the main reasons Longmont stays relevant.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              It is not just about having more options. It is about what happens when the buyer no longer feels like the whole move has to fit one exact picture in order to be right.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              People also tend to underestimate how often Longmont starts looking stronger once they stop measuring every option against Boulder and start asking what actually works better for their life.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              That is usually when this page starts doing its job.
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
              For some buyers, buying in Longmont right away makes sense because the appeal is already clear.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              They want more flexibility. They want more room in the decision. And they do not need the move to be more exact than that.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              For others, renting first may still make sense.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              That is especially true if you are still sorting out:
            </p>
            <ul className="list-disc list-inside space-y-2 text-charcoal/80 text-lg mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              <li>whether Boulder still has too much pull</li>
              <li>whether <a href="/lafayette-co-homes-for-sale" className="text-gold underline hover:text-gold-light">Lafayette</a> is the cleaner middle-ground answer</li>
              <li>whether Longmont feels right long term or just less pressured in the short term</li>
              <li>how open you really want the move to be</li>
            </ul>
            <p className="text-charcoal/80 text-lg leading-relaxed" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              Renting first can make sense if the search is still widening instead of narrowing.
            </p>
          </div>
        </section>

        {/* 11. FAQ */}
        <section id="faq" className="py-14 bg-cream">
          <div className="container max-w-3xl">
            <h2
              className="text-2xl sm:text-3xl font-bold text-charcoal mb-8"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Longmont FAQs
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
              Longmont stays relevant for a reason.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              It usually starts getting stronger when buyers stop trying to force the whole move through one exact idea of place and start asking what actually works.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              For the right buyer, that can be a big shift.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              Sometimes the better answer is not the sharper answer.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-4" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              Sometimes it is the one that gives the move more room to come together in a way that actually makes sense.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
              That is where Longmont tends to stay strong.
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
                <a href="/lafayette-co-homes-for-sale" className="text-gold hover:text-gold-light underline text-lg" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
                  Lafayette →
                </a>
              </li>
              <li>
                <a href="/university-hill-cu-boulder-real-estate" className="text-gold hover:text-gold-light underline text-lg" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
                  University Hill / CU Boulder →
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
