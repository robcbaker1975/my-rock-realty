/**
 * Lyons CO Homes For Sale — My Rock Realty
 * Route: /lyons-co-homes-for-sale
 * Content: boulder_wave2_true_source_of_truth / approved_lyons_full.txt
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

/* ─── FAQ Content — approved_lyons_full.txt §11 ─── */
const faqContent = [
  {
    question: "Why does Lyons stay in the conversation for Boulder-area buyers?",
    answer:
      "Because it often gives buyers a more distinct and more self-defining answer once the usual Boulder-area paths stop feeling right.",
  },
  {
    question: "Is Lyons basically just what buyers choose when Boulder does not work?",
    answer:
      "No. For the right buyer, Lyons is not a fallback. It is a different kind of answer that works because it feels less tied to the usual Boulder-area comparison map.",
  },
  {
    question: "Who usually likes Lyons most?",
    answer:
      "Usually buyers who want this part of the region, but want the final choice to feel smaller, more distinct, and more clearly like its own place.",
  },
  {
    question: "Who usually moves away from Lyons?",
    answer:
      "Usually buyers who realize they either still want Boulder more directly or want a broader, steadier nearby-city answer like Longmont, Louisville, Lafayette, or Superior.",
  },
  {
    question: "When does Lyons make more sense than Boulder?",
    answer:
      "Usually when the buyer wants this part of the region strongly, but no longer needs the move to run through Boulder itself.",
  },
  {
    question: "When does Boulder still make more sense than Lyons?",
    answer:
      "When the buyer cares enough about Boulder specifically that a more separate answer will still feel like the wrong fit.",
  },
  {
    question: "When does Longmont make more sense than Lyons?",
    answer:
      "Usually when the buyer wants a broader practical answer and more room around the decision.",
  },
  {
    question: "When do Louisville or Lafayette make more sense than Lyons?",
    answer:
      "Usually when the buyer wants a steadier nearby-city answer that still feels more connected to the usual Boulder-area map.",
  },
  {
    question: "When does Superior make more sense than Lyons?",
    answer:
      "Usually when the buyer wants the answer to feel more polished, more clearly shaped, and less distinct in this way.",
  },
  {
    question: "What is this page really supposed to help me figure out?",
    answer:
      "Whether you want this part of the region to feel smaller, more distinct, and more self-defining than the usual Boulder-area paths.",
  },
];

/* ─── Build FAQ Schema ─── */
const faqSchema = buildFAQPageSchema(faqContent);

/* ─── Breadcrumb Items ─── */
const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Boulder Area", url: "/boulder-homes-for-sale" },
  { label: "Lyons", url: "/lyons-co-homes-for-sale" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function LyonsCoHomesForSale() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <SeoHead
        metadata={{
          title:
            "Living in Lyons, Colorado: Real Estate, Tradeoffs, and What It's Actually Like | My Rock Realty",
          description:
            "Thinking about living in Lyons, Colorado? Learn what Lyons actually feels like, who it fits, what the tradeoffs are, and when Boulder, Longmont, or Lyons-area living may make more sense.",
          canonicalUrl: "https://myrockhomes.com/lyons-co-homes-for-sale/",
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
          alt="Lyons Colorado real estate"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/90" />
        <div className="container relative z-10 py-16 sm:py-20 md:py-24">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-cream mb-6 leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Living in Lyons, Colorado: Real Estate, Tradeoffs, and What It's Actually Like
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
              A lot of buyers get to Lyons once the search stops being about staying as close as possible to Boulder and starts becoming more about how they actually want the place itself to feel.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              That is usually when the search gets more honest.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              This page is not here to turn Lyons into a postcard. And it is not here to sell it as a catch-all answer for anyone who wants mountains, views, or "small-town charm."
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              It is here to help with a more useful question.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              If you want this part of the region to feel smaller, more distinct, and less tied to the usual Boulder-orbit decision tree, does Lyons fit the way you actually want to live?
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
              Lyons usually feels more separate than most of the nearby comparisons buyers make first.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              That is part of the draw.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              It does not usually feel like Boulder with a little extra distance on it. It does not usually feel like Louisville, Superior, or Lafayette either. It tends to feel more like the buyer is making a more specific choice about how they want daily life to feel, not just where they want to stay near.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              That matters.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              For the right buyer, Lyons feels more distinct and more self-defining than a lot of nearby options. For the wrong buyer, it can feel like the move is getting too narrow too fast.
            </p>
            <p className="text-lg text-cream/80 leading-relaxed">
              That is exactly why the page matters.
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
              Lyons stays in the conversation because it often becomes relevant once buyers stop trying to fit themselves into the usual Boulder-area answers.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              That is where it gets stronger.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              A buyer may still want this general region, but they may no longer want the move to feel polished like Superior, settled like Louisville, broad like Longmont, or Boulder-centered at all.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              That is a real shift.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              Lyons often starts making sense when the buyer wants the place itself to feel more distinct and less like an extension of someone else's default comparison map.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              That is not going to fit everyone.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              But for the right buyer, it is exactly why Lyons stays alive in the search.
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
              Lyons usually fits buyers who want:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "a more distinct and smaller-feeling answer in this part of the region",
                "a move that feels less tied to the usual Boulder-area comparison path",
                "a place that feels more self-defining than adjacent",
                "less interest in polished nearby-city living",
                "more comfort with a location choice that feels more specific and less interchangeable",
                "a move where the place itself matters more than convenience to the usual defaults",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-cream/80">
                  <ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-cream/80 leading-relaxed">
              It is often a strong fit for buyers who are not just looking for "near Boulder," but for something that feels more clearly like its own answer.
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
              Lyons may not be the best fit if you want:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Boulder specifically",
                "a more polished nearby-city answer like Superior",
                "a steadier middle-ground option like Louisville or Lafayette",
                "the broader flexibility that Longmont can provide",
                "a move where staying on the standard Boulder-area path matters a lot",
                "a location choice that needs to feel less distinct and less specific than this",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-charcoal/80">
                  <ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              Some buyers move off Lyons because they realize they still want the answer to feel more connected to the usual Boulder-area comparison map.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              That is useful to learn.
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
              A Lyons search usually turns into a question of how distinct the buyer wants the answer to feel.
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
              Do you want the broader practical answer of{" "}
              <a href="/longmont-co-homes-for-sale" className="text-gold hover:text-gold/80 underline">
                Longmont
              </a>?
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Do you want a steadier nearby-city fit like Louisville or{" "}
              <a href="/lafayette-co-homes-for-sale" className="text-gold hover:text-gold/80 underline">
                Lafayette
              </a>?
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Or do you want a place that feels more separate, more self-defining, and less tied to the usual Boulder-area script than those other paths?
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              That is where Lyons becomes useful.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              For some buyers, it is the right answer for exactly that reason.
            </p>
            <p className="text-lg text-cream/80 leading-relaxed">
              For others, it helps confirm they still want something broader, steadier, or more connected to the Boulder orbit.
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
              The tradeoff here is pretty straightforward.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              Lyons usually gives buyers a more distinct and more self-defining answer, but it also asks them to be more certain that this is really the kind of place they want.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              That is the whole point.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              For the right buyer, the appeal is that the move stops feeling like a comparison against Boulder and starts feeling like a more independent choice.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              But if someone wants the broadest possible answer, or wants a nearby-city path that feels more polished, more settled, or more conventional in this region, Lyons is probably not the right fit.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              That is fine.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              This page is here to help sort out whether "this part of Colorado, but in a smaller and more distinct form" is actually the answer they want.
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
                Lyons vs Boulder
              </h3>
              <p className="text-lg text-cream/80 mb-4 leading-relaxed">
                <a href="/boulder-homes-for-sale" className="text-gold hover:text-gold/80 underline">
                  Boulder
                </a>{" "}
                is usually the more exact, more identity-first regional decision.
              </p>
              <p className="text-lg text-cream/80 leading-relaxed">
                Lyons usually gets stronger when the buyer still wants this part of Colorado, but no longer wants the whole move to depend on Boulder itself. If Boulder is the sharper regional answer, Lyons is often the more separate one.
              </p>
            </div>
            {/* vs Longmont */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-gold mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Lyons vs Longmont
              </h3>
              <p className="text-lg text-cream/80 mb-4 leading-relaxed">
                <a href="/longmont-co-homes-for-sale" className="text-gold hover:text-gold/80 underline">
                  Longmont
                </a>{" "}
                usually becomes the broader practical comparison.
              </p>
              <p className="text-lg text-cream/80 leading-relaxed">
                If Lyons is the more distinct and more self-defining answer, Longmont is usually the one that gives the move more room to come together in a broader way. That is a very real split.
              </p>
            </div>
            {/* vs Louisville or Lafayette */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-gold mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Lyons vs Louisville or Lafayette
              </h3>
              <p className="text-lg text-cream/80 mb-4 leading-relaxed">
                Louisville and{" "}
                <a href="/lafayette-co-homes-for-sale" className="text-gold hover:text-gold/80 underline">
                  Lafayette
                </a>{" "}
                usually fit buyers who still want this part of the region to feel settled, connected, and easier to picture inside the usual Boulder-area map.
              </p>
              <p className="text-lg text-cream/80 leading-relaxed">
                Lyons usually gets stronger when the buyer wants the answer to feel less tied to that map and more like its own place.
              </p>
            </div>
            {/* vs Superior */}
            <div>
              <h3 className="text-xl font-bold text-gold mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Lyons vs Superior
              </h3>
              <p className="text-lg text-cream/80 mb-4 leading-relaxed">
                <a href="/superior-co-homes-for-sale" className="text-gold hover:text-gold/80 underline">
                  Superior
                </a>{" "}
                usually becomes relevant when the buyer wants the nearby-city answer to feel more polished and more clearly defined.
              </p>
              <p className="text-lg text-cream/80 leading-relaxed">
                Lyons is a different kind of decision. It usually fits when the buyer wants the move to feel more distinct and less polished than that.
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
              A lot of buyers underestimate how useful it is when the answer stops feeling like "which Boulder-area option fits best?" and starts feeling like "what kind of place do I actually want to live in?"
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              That is where Lyons starts helping.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              Lyons usually is not the first page buyers begin with.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              It is the page that starts making sense once the broad regional question is already alive, but the usual nearby-city answers stop feeling right. That is a very different kind of search.
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
              For some buyers, buying here right away makes sense because the appeal is already clear.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              They want this part of Colorado. They want the answer to feel smaller, more distinct, and less tied to the usual Boulder-area comparison path. And they do not need the move to feel broader than that.
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
                "whether Longmont fits better as a broader practical answer",
                "whether Louisville, Lafayette, or Superior fit better as steadier nearby-city alternatives",
                "whether Lyons feels right long term or just like the clearest next comparison",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-cream/80">
                  <ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-cream/80 leading-relaxed">
              Renting first can make sense if the regional decision is clear but the exact kind of place is not.
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
              Lyons FAQs
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
              Lyons stays relevant for a reason.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              It usually starts getting stronger when buyers stop asking whether Boulder is still the answer and start asking what kind of place they actually want the final answer to be.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              For the right buyer, that can be a very useful shift.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Because sometimes the better answer is not broader, and it is not more polished.
            </p>
            <p className="text-lg text-cream/80 leading-relaxed">
              Sometimes it is just this part of Colorado in a form that feels more distinct, more separate, and more clearly chosen. That is where Lyons tends to stay strong.
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
                { label: "Longmont →", href: "/longmont-co-homes-for-sale" },
                { label: "Louisville →", href: "/louisville-co-homes-for-sale" },
                { label: "Superior →", href: "/superior-co-homes-for-sale" },
                { label: "Lafayette →", href: "/lafayette-co-homes-for-sale" },
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
