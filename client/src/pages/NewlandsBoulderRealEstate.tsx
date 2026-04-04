/**
 * Newlands Boulder Real Estate — My Rock Realty
 * Route: /newlands-boulder-real-estate
 * Content: boulder_wave2_true_source_of_truth / approved_newlands_full.txt
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

/* ─── FAQ Content — approved_newlands_full.txt §11 ─── */
const faqContent = [
  {
    question: "Why does Newlands stay in the conversation for Boulder buyers?",
    answer:
      "Because it often gives buyers a more exact, more established, and more intentionally chosen version of Boulder once the broad city decision is no longer enough.",
  },
  {
    question: "Is Newlands basically just a higher-end Boulder neighborhood page?",
    answer:
      "No. It is better understood as a more specific Boulder decision for buyers who want the neighborhood choice itself to feel more exact and more meaningful.",
  },
  {
    question: "Who usually likes Newlands most?",
    answer:
      "Usually buyers who want Boulder specifically and want the answer to feel more established, more selective, and more intentionally chosen than the broader city search.",
  },
  {
    question: "Who usually moves away from Newlands?",
    answer:
      "Usually buyers who realize they want a broader Boulder answer, a more central one, or a more practical nearby alternative.",
  },
  {
    question: "When does Newlands make more sense than Boulder generally?",
    answer:
      "When the buyer already knows Boulder is still the answer, but needs a more exact neighborhood decision inside the city.",
  },
  {
    question: "When does Boulder generally make more sense than Newlands?",
    answer:
      "When the buyer is still at the broader city-level decision and is not ready to narrow into a more selective neighborhood path yet.",
  },
  {
    question: "When does North Boulder / NoBo make more sense than Newlands?",
    answer:
      "Usually when the buyer still wants Boulder, but wants the answer to feel a little less exact and a little less tightly defined.",
  },
  {
    question: "When does University Hill / CU Boulder make more sense than Newlands?",
    answer:
      "When the buyer wants a more immediate, more central, more campus-adjacent version of Boulder.",
  },
  {
    question: "When does Gunbarrel or Lafayette make more sense than Newlands?",
    answer:
      "Usually when the buyer wants either Boulder-area relevance without Boulder itself or a steadier nearby-city answer rather than a more exact Boulder neighborhood choice.",
  },
  {
    question: "What is this page really supposed to help me figure out?",
    answer:
      "Whether you want Boulder itself to stay the answer, but in a more established, more selective, and more intentionally chosen form.",
  },
];

/* ─── Build FAQ Schema ─── */
const faqSchema = buildFAQPageSchema(faqContent);

/* ─── Breadcrumb Items ─── */
const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Boulder", url: "/boulder-homes-for-sale" },
  { label: "Newlands", url: "/newlands-boulder-real-estate" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function NewlandsBoulderRealEstate() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  return (
    <div className="hub-page min-h-screen flex flex-col bg-cream">
      <SeoHead
        metadata={{
          title:
            "Living in Newlands, Boulder: Real Estate, Tradeoffs, and What It's Actually Like | My Rock Realty",
          description:
            "Thinking about living in Newlands, Boulder? Learn what Newlands actually feels like, who it fits, what the tradeoffs are, and when North Boulder, Mapleton Hill, or Boulder generally may make more sense.",
          canonicalUrl: "https://myrockhomes.com/newlands-boulder-real-estate/",
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
          alt="Newlands Boulder real estate"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/90" />
        <div className="container relative z-10 py-16 sm:py-20 md:py-24">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-cream mb-6 leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Living in Newlands, Boulder: Real Estate, Tradeoffs, and What It's Actually Like
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
              A lot of buyers get to Newlands once the Boulder search stops being broad and starts getting very specific.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              That is usually when the search gets more serious.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              This page is not here to turn Newlands into a prestige postcard. And it is not here to act like this is just another Boulder neighborhood with a stronger reputation.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              It is here to help with a more useful question.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              If you still want Boulder itself, and you want the decision to feel more established, more exact, and more intentionally chosen than the broader city search, does Newlands fit the way you actually want to live?
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
              Newlands usually feels more exact than the first Boulder comparisons buyers make.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              That is part of the draw.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              It tends to feel established, residential, and very specifically chosen. Not broad like the Boulder hub. Not central in the same way as University Hill. Not as in-between as North Boulder. Not as practical and open-ended as some of the nearby-city comparisons.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              It usually feels like a buyer already knows they want Boulder, and now they are sorting out what version of Boulder feels the most right.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              That matters.
            </p>
            <p className="text-lg text-cream/80 leading-relaxed">
              This is not usually a page buyers land on by accident. It is usually the page they get to once the search becomes more selective and more personal.
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
              Newlands stays in the conversation because it often becomes relevant once buyers stop asking whether Boulder is still the answer and start asking how exact they want that answer to be.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              That is where it gets stronger.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              This is the kind of page that tends to matter once broad fit is already settled. A buyer is no longer just looking for Boulder. They are trying to figure out whether they want a more established, more specific, more premium-feeling part of Boulder than the city-level search can explain.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              That is what keeps Newlands alive in the conversation.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              It is not a broad answer.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              It is a narrower one.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              For the right buyer, that is exactly why it works.
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
              Newlands usually fits buyers who want:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Boulder itself, not just the broader region",
                "a more established and more exact neighborhood choice",
                "a part of Boulder that feels intentionally chosen",
                "a more residential feel than the most central Boulder paths",
                "a move where neighborhood character matters a lot",
                "a Boulder decision that feels more specific and more selective than the broad hub",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-cream/80">
                  <ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-cream/80 leading-relaxed">
              It is often a strong fit for buyers who are past the general Boulder question and are now sorting out which part of Boulder feels most like them.
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
              Newlands may not be the best fit if you want:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "the broad Boulder decision without narrowing down yet",
                "a more central or more campus-adjacent Boulder path",
                "a less exact neighborhood decision",
                "the more middle-ground feel of North Boulder",
                "Boulder-area relevance without Boulder itself, like Gunbarrel",
                "a steadier or broader nearby-city alternative like Lafayette or Longmont",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-charcoal/80">
                  <ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              Some buyers move off Newlands not because they stop wanting Boulder, but because they realize they do not want the answer to be this exact.
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
              A Newlands search usually turns into a question of how specific the buyer wants the Boulder answer to be.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              That is usually the real fork in the road.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Do you want{" "}
              <a href="/boulder-homes-for-sale" className="text-gold hover:text-gold/80 underline">
                Boulder
              </a>{" "}
              generally and still need to narrow down?
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Do you want a more central Boulder path like{" "}
              <a href="/university-hill-cu-boulder-real-estate" className="text-gold hover:text-gold/80 underline">
                University Hill / CU Boulder
              </a>?
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Do you want a more balanced middle-ground Boulder choice like{" "}
              <a href="/north-boulder-nobo-real-estate" className="text-gold hover:text-gold/80 underline">
                North Boulder / NoBo
              </a>?
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Do you want the broader Boulder-area path of{" "}
              <a href="/gunbarrel-co-real-estate" className="text-gold hover:text-gold/80 underline">
                Gunbarrel
              </a>{" "}
              or{" "}
              <a href="/lafayette-co-homes-for-sale" className="text-gold hover:text-gold/80 underline">
                Lafayette
              </a>?
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Or do you want a part of Boulder that feels more established, more selective, and more intentionally chosen than those other paths?
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              That is where this page becomes useful.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              For some buyers, this is the right Boulder answer.
            </p>
            <p className="text-lg text-cream/80 leading-relaxed">
              For others, it helps confirm they want a broader, calmer, or more practical version of the move.
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
              The tradeoff here is pretty clear.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              Newlands usually gives buyers a more exact and more established version of Boulder, but it also asks them to be more certain about that choice.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              That is the whole point.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              For the right buyer, the appeal is that the neighborhood feels more specific. More decided. More like the move is not just about Boulder generally, but about this part of Boulder in particular.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              But if someone wants the broadest possible Boulder answer, or wants more flexibility around what the neighborhood decision looks like, Newlands is probably not the right fit.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              That is fine.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              This page is here to help sort out whether "Boulder, but more exact" is actually the answer they want.
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
                Newlands vs Boulder
              </h3>
              <p className="text-lg text-cream/80 mb-4 leading-relaxed">
                <a href="/boulder-homes-for-sale" className="text-gold hover:text-gold/80 underline">
                  Boulder
                </a>{" "}
                is the broader decision.
              </p>
              <p className="text-lg text-cream/80 leading-relaxed">
                Newlands usually gets stronger when the buyer already knows Boulder is still the answer, but needs a more specific neighborhood choice inside the city. If Boulder is the macro choice, Newlands is a much narrower neighborhood decision inside it.
              </p>
            </div>
            {/* vs North Boulder */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-gold mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Newlands vs North Boulder / NoBo
              </h3>
              <p className="text-lg text-cream/80 mb-4 leading-relaxed">
                <a href="/north-boulder-nobo-real-estate" className="text-gold hover:text-gold/80 underline">
                  North Boulder / NoBo
                </a>{" "}
                usually sits in more of a middle position.
              </p>
              <p className="text-lg text-cream/80 leading-relaxed">
                It often fits buyers who still want Boulder, but want a little more room around the decision. Newlands usually gets stronger when the buyer wants the neighborhood choice to feel more exact and more intentionally chosen than that.
              </p>
            </div>
            {/* vs University Hill */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-gold mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Newlands vs University Hill / CU Boulder
              </h3>
              <p className="text-lg text-cream/80 mb-4 leading-relaxed">
                <a href="/university-hill-cu-boulder-real-estate" className="text-gold hover:text-gold/80 underline">
                  University Hill / CU Boulder
                </a>{" "}
                is the more immediate, more central, more campus-adjacent version of Boulder.
              </p>
              <p className="text-lg text-cream/80 leading-relaxed">
                Newlands is a very different kind of decision. It usually fits buyers who still want Boulder to feel specific, but not in that more central or more campus-shaped way.
              </p>
            </div>
            {/* vs Gunbarrel */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-gold mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Newlands vs Gunbarrel
              </h3>
              <p className="text-lg text-cream/80 mb-4 leading-relaxed">
                <a href="/gunbarrel-co-real-estate" className="text-gold hover:text-gold/80 underline">
                  Gunbarrel
                </a>{" "}
                usually makes sense when the buyer wants Boulder-area relevance without needing Boulder itself to carry the whole decision.
              </p>
              <p className="text-lg text-cream/80 leading-relaxed">
                Newlands usually gets stronger when Boulder itself still matters a great deal and the buyer wants the answer to feel more exact than that.
              </p>
            </div>
            {/* vs Lafayette */}
            <div>
              <h3 className="text-xl font-bold text-gold mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Newlands vs Lafayette
              </h3>
              <p className="text-lg text-cream/80 mb-4 leading-relaxed">
                <a href="/lafayette-co-homes-for-sale" className="text-gold hover:text-gold/80 underline">
                  Lafayette
                </a>{" "}
                is often the steadier regional comparison.
              </p>
              <p className="text-lg text-cream/80 leading-relaxed">
                That page tends to fit buyers who want the Boulder-area orbit, but no longer need Boulder itself. Newlands usually makes more sense when Boulder still matters enough that the decision is now about which exact part of Boulder fits best.
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
              A lot of buyers underestimate how useful it is to stop asking whether Boulder is still the answer and start asking how exact they want that answer to be.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              That is where this page starts helping.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              Newlands usually is not the first page buyers begin with.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              It is the page that starts making sense once Boulder is already clearly alive in the search, but the broader city page is no longer enough and the buyer wants the neighborhood decision itself to carry more meaning.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              That is a very different kind of search.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              Because sometimes the answer is not broader and it is not more central.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              Sometimes it is just more exact.
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
              They want Boulder. They want the neighborhood choice to feel more established and more specific. And they do not need the move to stay broad any longer than that.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              For others, renting first may still make sense.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              That is especially true if you are still sorting out:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "whether Boulder still needs to be the answer",
                "whether you want a more central Boulder path like University Hill",
                "whether North Boulder fits better as a more balanced option",
                "whether Gunbarrel, Lafayette, or Longmont fit better as broader alternatives",
                "whether Newlands feels right long term or just like the clearest next comparison",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-cream/80">
                  <ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-cream/80 leading-relaxed">
              Renting first can make sense if the Boulder decision is clear but the exact neighborhood decision is not.
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
              Newlands FAQs
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
              Newlands stays relevant for a reason.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              It usually starts getting stronger when buyers stop asking whether Boulder is still the answer and start asking how exact they want that answer to be.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              For the right buyer, that can be a very useful shift.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Because sometimes the better answer is not broader, and it is not more central.
            </p>
            <p className="text-lg text-cream/80 leading-relaxed">
              Sometimes it is just Boulder in a form that feels more established, more specific, and more clearly chosen. That is where Newlands tends to stay strong.
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
                { label: "North Boulder / NoBo →", href: "/north-boulder-nobo-real-estate" },
                { label: "University Hill / CU Boulder →", href: "/university-hill-cu-boulder-real-estate" },
                { label: "Gunbarrel →", href: "/gunbarrel-co-real-estate" },
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
