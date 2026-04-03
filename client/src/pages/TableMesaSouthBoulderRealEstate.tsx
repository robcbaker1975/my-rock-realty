/**
 * Table Mesa / South Boulder Real Estate — My Rock Realty
 * Route: /table-mesa-south-boulder-real-estate
 * Content: boulder_wave2_true_source_of_truth / approved_table-mesa-south-boulder_full.txt
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

/* ─── FAQ Content — approved_table-mesa-south-boulder_full.txt §11 ─── */
const faqContent = [
  {
    question: "Why does Table Mesa / South Boulder stay in the conversation for Boulder buyers?",
    answer:
      "Because it often gives buyers a more settled version of Boulder without taking Boulder itself off the table.",
  },
  {
    question: "Is this basically just a quieter part of Boulder?",
    answer:
      "Not exactly. It is better understood as a more specific Boulder choice that tends to feel less immediate and less campus-adjacent than some other paths.",
  },
  {
    question: "Who usually likes this area most?",
    answer:
      "Usually buyers who want Boulder specifically, but want it to feel calmer, more settled, and easier to picture long term.",
  },
  {
    question: "Who usually moves away from this area?",
    answer:
      "Usually buyers who realize they either want a more central version of Boulder or a broader regional alternative altogether.",
  },
  {
    question: "When does this area make more sense than Boulder generally?",
    answer:
      "When the buyer already knows Boulder is still the answer, but needs a more specific submarket choice inside Boulder.",
  },
  {
    question: "When does Boulder generally make more sense than this page?",
    answer:
      "When the buyer is still at the broader city-level decision and is not ready to narrow into a specific Boulder path yet.",
  },
  {
    question: "When does University Hill / CU Boulder make more sense than this page?",
    answer:
      "When the buyer wants a more central, more immediate, more campus-adjacent version of Boulder.",
  },
  {
    question: "When does Gunbarrel make more sense than this page?",
    answer:
      "Usually when the buyer wants Boulder-area relevance without needing Boulder itself at the center of the decision.",
  },
  {
    question: "When does Lafayette make more sense than this page?",
    answer:
      "Usually when the buyer wants a steadier regional answer and no longer needs Boulder itself to stay at the center of the move.",
  },
  {
    question: "What is this page really supposed to help me figure out?",
    answer:
      "Whether you want Boulder itself to stay the answer, just in a more settled and less immediate form.",
  },
];

/* ─── Build FAQ Schema ─── */
const faqSchema = buildFAQPageSchema(faqContent);

/* ─── Breadcrumb Items ─── */
const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Boulder", url: "/boulder-homes-for-sale" },
  { label: "Table Mesa / South Boulder", url: "/table-mesa-south-boulder-real-estate" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TableMesaSouthBoulderRealEstate() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <SeoHead
        metadata={{
          title:
            "Living in Table Mesa and South Boulder: Real Estate, Tradeoffs, and What It's Actually Like | My Rock Realty",
          description:
            "Thinking about living in Table Mesa or South Boulder? Learn what this part of Boulder actually feels like, who it fits, what the tradeoffs are, and when Boulder, University Hill, Gunbarrel, or Lafayette may make more sense.",
          canonicalUrl: "https://myrockhomes.com/table-mesa-south-boulder-real-estate/",
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
          alt="Table Mesa South Boulder real estate"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/90" />
        <div className="container relative z-10 py-16 sm:py-20 md:py-24">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-cream mb-6 leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Living in Table Mesa and South Boulder: Real Estate, Tradeoffs, and What It's Actually Like
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
              A lot of buyers get to Table Mesa or South Boulder once they know Boulder is still in the conversation, but they are getting clearer on what version of Boulder actually fits.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              That is usually a good sign.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              It means the search is narrowing the right way.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              This page is not here to act like South Boulder is the answer for everyone who wants something quieter. And it is not here to turn this part of town into a generic neighborhood page.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              It is here to help with a more useful question.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              If you still want Boulder itself, but you do not want the move to feel as central, as immediate, or as campus-shaped as some other Boulder paths, does Table Mesa / South Boulder fit the way you actually want to live?
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
              Table Mesa / South Boulder usually feels more settled than the Boulder areas buyers tend to compare first.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              That is a big part of the draw.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              For a lot of buyers, this part of Boulder feels easier to picture long term. It still feels like Boulder. It still feels tied to the city. But it usually does not feel like the whole move has to revolve around the most immediate or most central version of Boulder life.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              That matters.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Some buyers get to Boulder and realize they like the city, but they do not necessarily want the version of it that feels closest to the center of things.
            </p>
            <p className="text-lg text-cream/80 leading-relaxed">
              That is where South Boulder tends to start making more sense.
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
              This area stays in the conversation because it often solves a very specific Boulder problem.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              A buyer still wants Boulder itself. They have not moved off that.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              What changes is that they start realizing they do not want the Boulder decision to feel quite so tight.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              They may not want the more central feel. They may not want the university-adjacent energy. They may not want the version of the move where everything depends on being in the most immediate part of town.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              That is where Table Mesa / South Boulder gets stronger.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              It is still Boulder. It just tends to feel like a version of Boulder that more buyers can actually picture themselves living in day to day.
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
              Table Mesa / South Boulder usually fits buyers who want:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Boulder itself, not just the broader region",
                "a calmer or more settled version of Boulder",
                "less campus-adjacent energy",
                "a move that still feels tied to Boulder's identity without feeling overly immediate",
                "a part of town that is easier to picture long term",
                "a more specific Boulder answer that is not built around centrality",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-cream/80">
                  <ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-cream/80 leading-relaxed">
              It is often a strong fit for buyers who already know Boulder still matters, but want the way it feels to be a little more grounded.
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
              This area may not be the best fit if you want:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "the broad Boulder decision without narrowing down yet",
                "a more central or more immediate Boulder feel",
                "a more campus-adjacent version of town",
                "Boulder-area relevance without Boulder itself, like Gunbarrel",
                "the steadier regional answer Lafayette offers",
                "the broader practical reset Longmont can provide",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-charcoal/80">
                  <ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              Some buyers move off South Boulder not because they stop wanting Boulder, but because they realize they want a different version of Boulder than this one.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              That is useful to learn early.
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
              A Table Mesa / South Boulder search usually turns into a question of what kind of Boulder the buyer really wants.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              That is usually the real fork in the road.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Do you want{" "}
              <a href="/boulder-homes-for-sale" className="text-gold hover:text-gold/80 underline">
                Boulder
              </a>{" "}
              generally and still need to sort out which part fits?
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Do you want the more immediate, more central, more campus-adjacent feel of{" "}
              <a href="/university-hill-cu-boulder-real-estate" className="text-gold hover:text-gold/80 underline">
                University Hill / CU Boulder
              </a>?
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Do you want Boulder-area relevance without Boulder itself, like{" "}
              <a href="/gunbarrel-co-real-estate" className="text-gold hover:text-gold/80 underline">
                Gunbarrel
              </a>?
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Or do you want Boulder to stay the answer, just in a way that feels more settled and less immediate?
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              That is where this page becomes useful.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              For some buyers, this is the right Boulder answer.
            </p>
            <p className="text-lg text-cream/80 leading-relaxed">
              For others, it confirms they either want a sharper version of Boulder or a broader alternative altogether.
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
              Table Mesa / South Boulder usually gives buyers a more settled version of Boulder, but it is still Boulder.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              That is both the strength and the decision.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              For the right buyer, it keeps the identity and pull of Boulder without making the move feel as central, as immediate, or as campus-shaped as some other paths.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              But if someone wants the broadest possible answer, or wants Boulder only if it feels more active and more immediate, this area probably is not going to be the right fit.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              That is fine.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              This page is here to help sort out whether "Boulder, but more settled" is actually the version that fits best.
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
                Table Mesa / South Boulder vs Boulder
              </h3>
              <p className="text-lg text-cream/80 mb-4 leading-relaxed">
                <a href="/boulder-homes-for-sale" className="text-gold hover:text-gold/80 underline">
                  Boulder
                </a>{" "}
                is the broader decision.
              </p>
              <p className="text-lg text-cream/80 leading-relaxed">
                Table Mesa / South Boulder usually gets stronger when the buyer already knows Boulder is still the answer, but needs a more specific version of that answer. If Boulder is the macro choice, this page is the next step inside it.
              </p>
            </div>
            {/* vs University Hill */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-gold mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Table Mesa / South Boulder vs University Hill / CU Boulder
              </h3>
              <p className="text-lg text-cream/80 mb-4 leading-relaxed">
                <a href="/university-hill-cu-boulder-real-estate" className="text-gold hover:text-gold/80 underline">
                  University Hill / CU Boulder
                </a>{" "}
                is the more immediate, more central, more campus-adjacent version of Boulder.
              </p>
              <p className="text-lg text-cream/80 leading-relaxed">
                This page is almost the opposite kind of Boulder decision. It usually fits buyers who still want Boulder, but want it to feel less tied to that central rhythm.
              </p>
            </div>
            {/* vs Gunbarrel */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-gold mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Table Mesa / South Boulder vs Gunbarrel
              </h3>
              <p className="text-lg text-cream/80 mb-4 leading-relaxed">
                <a href="/gunbarrel-co-real-estate" className="text-gold hover:text-gold/80 underline">
                  Gunbarrel
                </a>{" "}
                usually makes sense when the buyer wants Boulder-area relevance without needing Boulder itself.
              </p>
              <p className="text-lg text-cream/80 leading-relaxed">
                This page usually gets stronger when the buyer knows Boulder still matters, but wants a more settled version of it.
              </p>
            </div>
            {/* vs Lafayette */}
            <div>
              <h3 className="text-xl font-bold text-gold mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Table Mesa / South Boulder vs Lafayette
              </h3>
              <p className="text-lg text-cream/80 mb-4 leading-relaxed">
                <a href="/lafayette-co-homes-for-sale" className="text-gold hover:text-gold/80 underline">
                  Lafayette
                </a>{" "}
                is often the steadier regional comparison.
              </p>
              <p className="text-lg text-cream/80 leading-relaxed">
                That page tends to fit buyers who want the Boulder-area orbit, but no longer need Boulder itself. This page usually makes more sense when the buyer still wants Boulder to stay clearly at the center of the decision.
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
              A lot of buyers underestimate how helpful it is to stop asking whether they want Boulder and start asking which version of Boulder they actually want.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              That is where this page starts helping.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              Table Mesa / South Boulder usually is not the first page buyers begin with.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              It is the page that starts making sense once Boulder is already alive in the search, but the more central or more immediate versions of it stop feeling right.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              That is a valuable shift.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              Because sometimes the answer is not "Boulder or not Boulder."
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              Sometimes it is just a different kind of Boulder.
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
              They want Boulder. They want it to feel more settled. And they do not need the move to feel more immediate than that.
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
                "whether you want a more immediate Boulder decision like University Hill",
                "whether Gunbarrel fits better as a less Boulder-specific nearby option",
                "whether Lafayette or Longmont fit better as broader alternatives",
                "whether Table Mesa / South Boulder feels right long term or just like the clearest next comparison",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-cream/80">
                  <ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-cream/80 leading-relaxed">
              Renting first can make sense if the search is still narrowing and the exact Boulder fit is not fully clear yet.
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
              Table Mesa / South Boulder FAQs
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
              Table Mesa / South Boulder stays relevant for a reason.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              It usually starts getting stronger when buyers stop asking whether Boulder is still in the conversation and start asking what kind of Boulder actually fits.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              For the right buyer, that can be a very useful shift.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Because sometimes the better answer is not broader and it is not more central.
            </p>
            <p className="text-lg text-cream/80 leading-relaxed">
              Sometimes it is just Boulder in a form that feels easier to live with long term. That is where this page tends to stay strong.
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
