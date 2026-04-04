/**
 * Niwot CO Real Estate — My Rock Realty
 * Route: /niwot-co-real-estate
 * Content: boulder_wave2_true_source_of_truth / approved_niwot_full.txt
 * Design: Front Range Modern — matches existing site design system
 * Palette: Warm charcoal (#292524), cream (#F5F0EB), antique gold (#C9A96E)
 * Typography: Outfit (display) + Libre Franklin (body)
 */
import { useState } from "react";
import SeoHead from "@/components/seo/SeoHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const HERO_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/denver-rowhouses-hero_2f59d4ac.jpg";

/* ─── FAQ Content — approved_niwot_full.txt §11 ─── */
const faqContent = [
  {
    question: "Why does Niwot stay in the conversation for Boulder-area buyers?",
    answer:
      "Because it often gives buyers a more distinct and more settled answer without forcing the move through Boulder itself.",
  },
  {
    question: "Is Niwot just what buyers choose when they do not get Boulder?",
    answer:
      "No. For the right buyer, Niwot is not a fallback. It is the better-fit answer because it gives the move a stronger sense of place without making it more central than they want.",
  },
  {
    question: "Who usually likes Niwot most?",
    answer:
      "Usually buyers who want Boulder-area relevance, a more distinct community feel, and a move that feels more intentionally chosen.",
  },
  {
    question: "Who usually moves away from Niwot?",
    answer:
      "Usually buyers who realize they still want Boulder specifically, or want a different comparison path like Gunbarrel, Lafayette, or Longmont.",
  },
  {
    question: "When does Niwot make more sense than Boulder?",
    answer:
      "Usually when the buyer wants this part of the region strongly, but does not need the move to depend on Boulder itself.",
  },
  {
    question: "When does Boulder still make more sense than Niwot?",
    answer:
      "When the buyer cares enough about Boulder specifically that a more settled nearby answer will still feel like the wrong fit.",
  },
  {
    question: "When does Gunbarrel make more sense than Niwot?",
    answer:
      "Usually when the buyer wants Boulder-area access without needing the decision to feel as distinct or as specifically chosen.",
  },
  {
    question: "When does Lafayette make more sense than Niwot?",
    answer:
      "Usually when the buyer wants a steadier regional answer and less emphasis on choosing one particular sense of place.",
  },
  {
    question: "When does Longmont make more sense than Niwot?",
    answer:
      "Usually when the buyer wants to open the search wider and give the move more room to come together differently.",
  },
  {
    question: "What is this page really supposed to help me figure out?",
    answer:
      "Whether you want the answer to feel more settled, more distinct, and more intentionally chosen than some of the other Boulder-area paths.",
  },
];

/* ─── Build FAQ Schema ─── */
const faqSchema = buildFAQPageSchema(faqContent);

/* ─── Breadcrumb Items ─── */
const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Boulder", url: "/boulder-homes-for-sale" },
  { label: "Niwot", url: "/niwot-co-real-estate" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function NiwotCoRealEstate() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  return (
    <div className="hub-page min-h-screen flex flex-col bg-cream">
      <SeoHead
        metadata={{
          title:
            "Living in Niwot, Colorado: Real Estate, Tradeoffs, and What It's Actually Like | My Rock Realty",
          description:
            "Thinking about living in Niwot, Colorado? Learn what Niwot actually feels like, who it fits, what the tradeoffs are, and when Boulder, Gunbarrel, Lafayette, or Longmont may make more sense.",
          canonicalUrl: "https://myrockhomes.com/niwot-co-real-estate/",
          breadcrumbs: breadcrumbItems,
        }}
        schema={faqSchema ? [faqSchema] : []}
      />
      {/* ═══════════════════════════════════════════════════
          BREADCRUMBS
      ═══════════════════════════════════════════════════ */}
      <div className="bg-charcoal">
        <div className="container py-3">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>
      {/* ═══════════════════════════════════════════════════
          1. HERO
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-charcoal overflow-hidden">
        <img
          src={HERO_BG}
          alt="Niwot Colorado real estate"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/90" />
        <div className="container relative z-10 py-16 sm:py-20 md:py-24">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-cream mb-6 leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Living in Niwot, Colorado: Real Estate, Tradeoffs, and What It's Actually Like
            </h1>
          </motion.div>
        </div>
      </section>
      {/* ═══════════════════════════════════════════════════
          2. Intro
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              A lot of buyers get to Niwot once they realize they still want this part of the map, but they do not want the answer to feel like central Boulder or a broader reset.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              That is usually when Niwot starts making sense.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              This page is not here to turn Niwot into a postcard. And it is not here to act like a smaller place automatically means an easier decision.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              It is here to help answer a more useful question.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              If you want the Boulder-area map to feel more settled, more distinct, and more intentionally chosen, does Niwot fit the way you actually want to live?
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              That is usually the real decision.
            </p>
          </motion.div>
        </div>
      </section>
      {/* ═══════════════════════════════════════════════════
          3. What the area feels like
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2
              className="text-3xl sm:text-4xl font-bold text-cream mb-8"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              What the area feels like
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Niwot usually feels more specific than a lot of nearby options.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Not more central. Not broader. More specific.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              For the right buyer, that is the draw.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              A lot of that identity runs through Old Town Niwot along Second Avenue, where Boulder County's Niwot Rural Community District overlaps part of the Old Town Niwot Historic District. That helps explain why Niwot tends to feel more like a place people choose on purpose than a place they just land near.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              That does not mean it fits everyone.
            </p>
            <p className="text-lg text-cream/80 leading-relaxed">
              It means Niwot usually works best when the buyer wants something more distinct and more settled than a broad regional answer, but less immediate than Boulder's more central choices.
            </p>
          </motion.div>
        </div>
      </section>
      {/* ═══════════════════════════════════════════════════
          4. Why it stays in the conversation
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2
              className="text-3xl sm:text-4xl font-bold text-charcoal mb-8"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Why it stays in the conversation
            </h2>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              Niwot stays in the conversation because it often solves a very specific problem.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              A buyer still wants this part of the region. They still want Boulder-area relevance. But they do not want the decision to feel as central, as pressured, or as broad as some of the other comparison paths.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              That is where Niwot gets stronger.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              It often becomes the page buyers need once they realize they want a place with more identity than Gunbarrel, more specificity than Lafayette, and less sprawl in the decision than Longmont.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              That is a narrower answer.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              But for the right buyer, it is the right one.
            </p>
          </motion.div>
        </div>
      </section>
      {/* ═══════════════════════════════════════════════════
          5. Who it tends to fit
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2
              className="text-3xl sm:text-4xl font-bold text-cream mb-8"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Who it tends to fit
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Niwot usually fits buyers who want:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "a more distinct small-community feel in this part of the region",
                "Boulder-area relevance without needing Boulder itself",
                "a place that feels more settled and more intentionally chosen",
                "less pressure than central Boulder",
                "more identity than a broader practical answer",
                "a move that feels specific without feeling overly immediate",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-cream/80">
                  <ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-cream/80 leading-relaxed">
              It is often a strong fit for buyers who want the area to feel grounded and recognizable, not just convenient.
            </p>
          </motion.div>
        </div>
      </section>
      {/* ═══════════════════════════════════════════════════
          6. Who may not love it
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2
              className="text-3xl sm:text-4xl font-bold text-charcoal mb-8"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Who may not love it
            </h2>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              Niwot may not be the best fit if you want:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Boulder specifically",
                "a more central or more active Boulder decision",
                "the broader flexibility that Longmont provides",
                "the steadier regional middle-ground that Lafayette offers",
                "a looser search where the exact place matters less",
                "a move that is more about access than identity",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-charcoal/80">
                  <ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              Some buyers move off Niwot because they realize they want either a sharper Boulder answer or a broader practical one.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              That is useful to learn.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              Niwot usually works best when the buyer wants the decision to feel smaller, more specific, and more chosen.
            </p>
          </motion.div>
        </div>
      </section>
      {/* ═══════════════════════════════════════════════════
          7. What the home search usually turns into
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2
              className="text-3xl sm:text-4xl font-bold text-cream mb-8"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              What the home search usually turns into
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              A Niwot search usually turns into a question of how specific the buyer wants the answer to be.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              That is usually the real fork in the road.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Do you still want{" "}
              <a href="/boulder-homes-for-sale" className="text-gold hover:text-gold/80 underline">
                Boulder
              </a>{" "}
              itself?
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Do you want Boulder-area relevance without as much pressure, like{" "}
              <a href="/gunbarrel-co-real-estate" className="text-gold hover:text-gold/80 underline">
                Gunbarrel
              </a>?
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Do you want the steadier regional fit of{" "}
              <a href="/lafayette-co-homes-for-sale" className="text-gold hover:text-gold/80 underline">
                Lafayette
              </a>?
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Or do you want a place that feels more distinct and more intentionally chosen than any of those?
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              That is where Niwot becomes useful.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              For some buyers, it turns into the better-fit answer.
            </p>
            <p className="text-lg text-cream/80 leading-relaxed">
              For others, it helps clarify that they want either something sharper, steadier, or broader.
            </p>
          </motion.div>
        </div>
      </section>
      {/* ═══════════════════════════════════════════════════
          8. The tradeoffs are the whole point
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2
              className="text-3xl sm:text-4xl font-bold text-charcoal mb-8"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              The tradeoffs are the whole point
            </h2>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              The tradeoff with Niwot is pretty clear.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              It usually gives buyers a stronger sense of place than some nearby options, but it is not trying to be central Boulder and it is not trying to be the broadest possible answer either.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              For the right buyer, that is the appeal.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              But if someone wants Boulder itself, wants more flexibility, or wants the move to feel less tied to one distinct place, Niwot is probably not going to replace that.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              That is fine.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              This page is here to help sort out whether a more specific and more settled answer is actually what fits best.
            </p>
          </motion.div>
        </div>
      </section>
      {/* ═══════════════════════════════════════════════════
          9. Compare nearby options
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2
              className="text-3xl sm:text-4xl font-bold text-cream mb-8"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Compare nearby options
            </h2>
            {/* vs Boulder */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-gold mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Niwot vs Boulder
              </h3>
              <p className="text-lg text-cream/80 mb-4 leading-relaxed">
                <a href="/boulder-homes-for-sale" className="text-gold hover:text-gold/80 underline">
                  Boulder
                </a>{" "}
                is usually the more identity-first and more exact decision.
              </p>
              <p className="text-lg text-cream/80 leading-relaxed">
                Niwot usually gets stronger when the buyer wants this part of the region, but no longer needs the whole move to run through Boulder itself. If Boulder is the sharper answer, Niwot is often the more settled one.
              </p>
            </div>
            {/* vs Gunbarrel */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-gold mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Niwot vs Gunbarrel
              </h3>
              <p className="text-lg text-cream/80 mb-4 leading-relaxed">
                <a href="/gunbarrel-co-real-estate" className="text-gold hover:text-gold/80 underline">
                  Gunbarrel
                </a>{" "}
                usually makes sense when the buyer still wants to stay closely tied to the Boulder conversation without making it too exact.
              </p>
              <p className="text-lg text-cream/80 leading-relaxed">
                Niwot usually gets stronger when the buyer wants the answer to feel more distinct and more intentionally chosen than that.
              </p>
            </div>
            {/* vs Lafayette */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-gold mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Niwot vs Lafayette
              </h3>
              <p className="text-lg text-cream/80 mb-4 leading-relaxed">
                <a href="/lafayette-co-homes-for-sale" className="text-gold hover:text-gold/80 underline">
                  Lafayette
                </a>{" "}
                is often the steadier regional comparison.
              </p>
              <p className="text-lg text-cream/80 leading-relaxed">
                That page tends to fit buyers who want the region to work well in real life without needing the move to feel overly specific. Niwot usually makes more sense when the buyer wants more identity and more sense of place in the actual choice.
              </p>
            </div>
            {/* vs Longmont */}
            <div>
              <h3 className="text-xl font-bold text-gold mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Niwot vs Longmont
              </h3>
              <p className="text-lg text-cream/80 mb-4 leading-relaxed">
                <a href="/longmont-co-homes-for-sale" className="text-gold hover:text-gold/80 underline">
                  Longmont
                </a>{" "}
                usually becomes the broader practical comparison.
              </p>
              <p className="text-lg text-cream/80 leading-relaxed">
                If Niwot is about choosing a more settled and more distinct answer on purpose, Longmont is usually about opening the search wider and giving the move more room to come together differently.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* ═══════════════════════════════════════════════════
          10. What people tend to underestimate
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2
              className="text-3xl sm:text-4xl font-bold text-charcoal mb-8"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              What people tend to underestimate
            </h2>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              A lot of buyers underestimate how much easier it can be to decide once they realize they do not need the answer to be central Boulder, but they also do not want it to feel broad or generic.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              That is where Niwot starts helping.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              It usually is not the first page buyers start with.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              It is the page that starts making sense once the search gets more honest about what kind of place actually feels right.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              People also tend to underestimate how much a more distinct sense of place can matter once daily life becomes more real than the search itself.
            </p>
          </motion.div>
        </div>
      </section>
      {/* ═══════════════════════════════════════════════════
          11. Buy now or rent first
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2
              className="text-3xl sm:text-4xl font-bold text-cream mb-8"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Buy now or rent first
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              For some buyers, buying in Niwot right away makes sense because the appeal is already clear.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              They want this part of the map. They want the decision to feel more settled and more specific. And they do not need the move to be more central or more open-ended than that.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              For others, renting first may still make sense.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              That is especially true if you are still sorting out:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "whether Boulder still has too much pull",
                "whether Gunbarrel fits better as a more relaxed nearby option",
                "whether Lafayette fits better as a steadier regional answer",
                "whether Longmont fits better as a broader practical answer",
                "whether Niwot feels right long term or just like the clearest next comparison",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-cream/80">
                  <ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-cream/80 leading-relaxed">
              Renting first can make sense if the search is still narrowing and you are not quite ready to choose a more specific map on purpose.
            </p>
          </motion.div>
        </div>
      </section>
      {/* ═══════════════════════════════════════════════════
          12. FAQ
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2
              className="text-3xl sm:text-4xl font-bold text-charcoal mb-10"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Niwot FAQs
            </h2>
          </motion.div>
          <div className="space-y-4">
            {faqContent.map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                className="bg-white rounded-lg border border-charcoal/10 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 hover:bg-cream/50 transition-colors text-left"
                >
                  <h3 className="font-bold text-charcoal pr-4">{item.question}</h3>
                  <ChevronDown
                    size={20}
                    className={`text-gold flex-shrink-0 transition-transform ${
                      expandedFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 pb-6 border-t border-charcoal/10 text-charcoal/80 leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ═══════════════════════════════════════════════════
          13. Final thoughts
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2
              className="text-3xl sm:text-4xl font-bold text-cream mb-8"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Final thoughts
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Niwot stays relevant for a reason.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              It usually starts making more sense when buyers stop assuming the answer has to be either Boulder itself or a broad nearby alternative and start asking what actually fits.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              For the right buyer, that can be a very useful shift.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Because sometimes the better answer is not the most central answer or the widest one.
            </p>
            <p className="text-lg text-cream/80 leading-relaxed">
              Sometimes it is the one that feels more settled, more distinct, and more clearly chosen. That is where Niwot tends to stay strong.
            </p>
          </motion.div>
        </div>
      </section>
      {/* ═══════════════════════════════════════════════════
          14. Endcap — Keep Exploring Boulder Area Options
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2
              className="text-2xl font-bold text-charcoal mb-8"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Keep Exploring Boulder Area Options
            </h2>
            <div className="space-y-3 mb-10">
              {[
                { label: "Boulder →", href: "/boulder-homes-for-sale" },
                { label: "Gunbarrel →", href: "/gunbarrel-co-real-estate" },
                { label: "Lafayette →", href: "/lafayette-co-homes-for-sale" },
                { label: "Longmont →", href: "/longmont-co-homes-for-sale" },
              ].map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="flex items-center gap-2 text-gold hover:text-gold/80 transition-colors font-semibold text-lg"
                >
                  <ArrowRight size={16} />
                  {link.label}
                </a>
              ))}
            </div>
            <h2
              className="text-2xl font-bold text-charcoal mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Next Step
            </h2>
            <div className="space-y-3">
              {[
                { label: "Talk to Rob About Boulder Area Options →", href: "/#contact" },
                { label: "Browse Boulder Homes →", href: "/boulder-co-homes-for-sale" },
                { label: "Colorado Home Buying Workshop →", href: "/colorado-home-buying-workshop" },
              ].map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="flex items-center gap-2 text-gold hover:text-gold/80 transition-colors font-semibold text-lg"
                >
                  <ArrowRight size={16} />
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
