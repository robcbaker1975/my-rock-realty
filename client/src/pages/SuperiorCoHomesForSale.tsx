/**
 * Superior CO Homes For Sale — My Rock Realty
 * Route: /superior-co-homes-for-sale
 * Content: boulder_wave2_true_source_of_truth / approved_superior_full.txt
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

/* ─── FAQ Content — approved_superior_full.txt §11 ─── */
const faqContent = [
  {
    question: "Why does Superior stay in the conversation for Boulder-area buyers?",
    answer:
      "Because it often gives buyers a nearby-city answer that feels more polished, more defined, and more self-contained than some of the other comparison paths.",
  },
  {
    question: "Is Superior basically just another Boulder-area fallback?",
    answer:
      "No. For the right buyer, Superior is not a fallback. It is a different kind of nearby-city answer that works because it feels more complete on its own.",
  },
  {
    question: "Who usually likes Superior most?",
    answer:
      "Usually buyers who want this part of the region, but want the final choice to feel more polished, more clearly shaped, and less dependent on Boulder itself.",
  },
  {
    question: "Who usually moves away from Superior?",
    answer:
      "Usually buyers who realize they either still want Boulder more directly or want a broader, less exact answer like Longmont or Lafayette.",
  },
  {
    question: "When does Superior make more sense than Boulder?",
    answer:
      "Usually when the buyer wants this part of the region strongly, but no longer needs the move to run through Boulder itself.",
  },
  {
    question: "When does Boulder still make more sense than Superior?",
    answer:
      "When the buyer cares enough about Boulder specifically that a nearby-city answer will still feel like the wrong fit.",
  },
  {
    question: "When does Louisville make more sense than Superior?",
    answer:
      "Usually when the buyer wants a nearby-city answer that feels a little more settled and a little less shaped by polish or structure.",
  },
  {
    question: "When does Lafayette make more sense than Superior?",
    answer:
      "Usually when the buyer wants a steadier middle-ground answer and does not need the move to feel quite as defined.",
  },
  {
    question: "When does Longmont make more sense than Superior?",
    answer:
      "Usually when the buyer wants a broader practical answer and more room around the decision.",
  },
  {
    question: "What is this page really supposed to help me figure out?",
    answer:
      "Whether you want this part of the region to feel more polished, more self-contained, and more clearly defined than some of the other Boulder-area paths.",
  },
];

/* ─── Build FAQ Schema ─── */
const faqSchema = buildFAQPageSchema(faqContent);

/* ─── Breadcrumb Items ─── */
const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Boulder Area", url: "/boulder-homes-for-sale" },
  { label: "Superior", url: "/superior-co-homes-for-sale" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function SuperiorCoHomesForSale() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  return (
    <div className="hub-page min-h-screen flex flex-col bg-cream">
      <SeoHead
        metadata={{
          title:
            "Living in Superior, Colorado: Real Estate, Tradeoffs, and What It's Actually Like | My Rock Realty",
          description:
            "Thinking about living in Superior, Colorado? Learn what Superior actually feels like, who it fits, what the tradeoffs are, and when Louisville, Lafayette, or Boulder may make more sense.",
          canonicalUrl: "https://myrockhomes.com/superior-co-homes-for-sale/",
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
          alt="Superior Colorado real estate"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/90" />
        <div className="container relative z-10 py-16 sm:py-20 md:py-24">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-cream mb-6 leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Living in Superior, Colorado: Real Estate, Tradeoffs, and What It's Actually Like
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
              A lot of buyers get to Superior once they know they still want this part of the map, but they are no longer assuming the answer needs to be Boulder itself.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              That is usually when the search gets more useful.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              This page is not here to turn Superior into a generic "great community" page. And it is not here to sell it as a simplified version of Boulder.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              It is here to help with a more useful question.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              If you want this part of the region to feel more polished, more self-contained, and a little more clearly planned than some of the other nearby-city paths, does Superior fit the way you actually want to live?
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
              Superior usually feels more polished than the first Boulder-area comparisons buyers make.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              That is a big part of why it stays relevant.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              It tends to feel more defined than Lafayette, a little tighter than Longmont, and less dependent on Boulder than buyers sometimes expect when they first start comparing nearby cities.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              That matters.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              A lot of buyers get to Superior after realizing they still want this part of the region, but they want the move to feel a little cleaner and a little more intentionally put together than some of the other options.
            </p>
            <p className="text-lg text-cream/80 leading-relaxed">
              That is usually where Superior starts making sense.
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
              Superior stays in the conversation because it often gives buyers a nearby-city answer that feels more finished.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              Not central like Boulder. Not as broad as Longmont. Not as middle-ground as Lafayette.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              A little more defined than that.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              That is useful.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              A lot of buyers do not just want to stay near Boulder. They want the answer to feel like its own place, with enough identity to stand on its own without turning into a much broader reset.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              That is where Superior gets stronger.
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
              Superior usually fits buyers who want:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "this part of the region, but not necessarily Boulder itself",
                "a nearby-city answer that feels more polished and more self-contained",
                "a move that feels a little more intentionally put together",
                "less pressure around making Boulder carry the whole decision",
                "a place that often feels easier to picture long term",
                "a location choice that feels defined without feeling overly narrow",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-cream/80">
                  <ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-cream/80 leading-relaxed">
              It is often a strong fit for buyers who want the answer to feel complete on its own, not just adjacent to something else.
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
              Superior may not be the best fit if you want:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Boulder specifically",
                "the steadier middle-ground feel of Lafayette",
                "the broader flexibility that Longmont provides",
                "a nearby-city answer that feels a little less defined and a little more open-ended",
                "a move where proximity to Boulder matters more than the place itself",
                "a location choice that needs to feel less planned and more loose around the edges",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-charcoal/80">
                  <ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              Some buyers move off Superior because they realize they either want Boulder more directly or want a broader answer than this.
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
              A Superior search usually turns into a question of how defined the buyer wants the answer to feel.
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
              Do you want the steadier nearby-city fit of{" "}
              <a href="/lafayette-co-homes-for-sale" className="text-gold hover:text-gold/80 underline">
                Lafayette
              </a>?
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Do you want the broader practical answer of{" "}
              <a href="/longmont-co-homes-for-sale" className="text-gold hover:text-gold/80 underline">
                Longmont
              </a>?
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Or do you want a nearby-city choice that feels a little more polished, a little more self-contained, and a little more clearly put together than those other paths?
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              That is where Superior becomes useful.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              For some buyers, it is the right nearby-city answer.
            </p>
            <p className="text-lg text-cream/80 leading-relaxed">
              For others, it helps confirm they either want Boulder more directly or want a less exact regional path.
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
              Superior usually gives buyers a nearby-city answer that feels more polished and more clearly defined than some of the other comparison paths.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              That is the appeal.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              For the right buyer, it means the move does not have to revolve around Boulder in order to still feel strong and well chosen.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              But if someone wants Boulder itself, or wants the broadest and most flexible answer possible, Superior is probably not the right fit.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              That is fine.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              This page is here to help sort out whether "this region, but in a more polished and more self-contained form" is actually the answer they want.
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
                Superior vs Boulder
              </h3>
              <p className="text-lg text-cream/80 mb-4 leading-relaxed">
                <a href="/boulder-homes-for-sale" className="text-gold hover:text-gold/80 underline">
                  Boulder
                </a>{" "}
                is usually the more identity-first and more exact decision.
              </p>
              <p className="text-lg text-cream/80 leading-relaxed">
                Superior usually gets stronger when the buyer wants this part of the region, but no longer needs the whole move to depend on Boulder itself. If Boulder is the sharper answer, Superior is often the more polished nearby-city one.
              </p>
            </div>
            {/* vs Louisville */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-gold mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Superior vs Louisville
              </h3>
              <p className="text-lg text-cream/80 mb-4 leading-relaxed">
                <a href="/louisville-co-homes-for-sale" className="text-gold hover:text-gold/80 underline">
                  Louisville
                </a>{" "}
                is often the most direct comparison.
              </p>
              <p className="text-lg text-cream/80 leading-relaxed">
                Both pages can make sense for buyers who want a nearby-city answer that still feels intentional. Superior usually gets stronger when the buyer wants the answer to feel a little more planned and a little more defined. Louisville usually gets stronger when the buyer wants it to feel a little more settled and a little more naturally complete. That is a fine-grained distinction, but it matters.
              </p>
            </div>
            {/* vs Lafayette */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-gold mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Superior vs Lafayette
              </h3>
              <p className="text-lg text-cream/80 mb-4 leading-relaxed">
                <a href="/lafayette-co-homes-for-sale" className="text-gold hover:text-gold/80 underline">
                  Lafayette
                </a>{" "}
                is often the steadier middle-ground comparison.
              </p>
              <p className="text-lg text-cream/80 leading-relaxed">
                That page usually fits buyers who want the region to work well in real life without needing the answer to feel too exact. Superior usually gets stronger when the buyer wants the nearby-city answer to feel more polished and more clearly shaped than that.
              </p>
            </div>
            {/* vs Longmont */}
            <div>
              <h3 className="text-xl font-bold text-gold mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Superior vs Longmont
              </h3>
              <p className="text-lg text-cream/80 mb-4 leading-relaxed">
                <a href="/longmont-co-homes-for-sale" className="text-gold hover:text-gold/80 underline">
                  Longmont
                </a>{" "}
                usually becomes the broader practical comparison.
              </p>
              <p className="text-lg text-cream/80 leading-relaxed">
                If Superior is the more polished and more tightly defined nearby-city answer, Longmont is usually the one that gives the move more room to come together differently.
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
              A lot of buyers underestimate how useful it is when the answer stops feeling like "near Boulder" and starts feeling like its own place.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              That is where Superior starts helping.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              Superior usually is not the first page buyers begin with.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              It is the page that starts making sense once the broad regional question is already settled, but the buyer wants the final choice to feel a little more defined and a little less dependent on Boulder staying at the center of everything. That is a different kind of search.
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
              They want this part of the region. They want the answer to feel more polished and more complete. And they do not need Boulder itself to stay at the center of the move.
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
                "whether Louisville fits better as a more settled nearby-city option",
                "whether Lafayette fits better as a steadier middle-ground answer",
                "whether Longmont fits better as a broader practical answer",
                "whether Superior feels right long term or just like the clearest next comparison",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-cream/80">
                  <ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-cream/80 leading-relaxed">
              Renting first can make sense if the regional decision is clear but the exact nearby-city fit is not.
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
              Superior FAQs
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
              Superior stays relevant for a reason.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              It usually starts getting stronger when buyers stop asking whether Boulder is still the answer and start asking whether the final choice needs to feel more complete on its own.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              For the right buyer, that can be a very useful shift.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Because sometimes the better answer is not broader, and it is not more central.
            </p>
            <p className="text-lg text-cream/80 leading-relaxed">
              Sometimes it is just this part of the region in a form that feels more polished, more defined, and more clearly chosen. That is where Superior tends to stay strong.
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
                { label: "Louisville →", href: "/louisville-co-homes-for-sale" },
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
