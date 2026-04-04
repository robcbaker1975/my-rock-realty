/**
 * Gunbarrel CO Real Estate — My Rock Realty
 * Route: /gunbarrel-co-real-estate
 * Content: boulder_wave2_true_source_of_truth / approved_gunbarrel_full.txt
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

/* ─── FAQ Content — approved_gunbarrel_full.txt §11 ─── */
const faqContent = [
  {
    question: "Why does Gunbarrel stay in the conversation for Boulder-area buyers?",
    answer:
      "Because it often gives buyers a way to stay closely connected to Boulder without forcing the move through Boulder itself.",
  },
  {
    question: "Is Gunbarrel just what buyers choose when they do not get Boulder?",
    answer:
      "No. For the right buyer, Gunbarrel is not a fallback. It is a better-fit answer because it keeps Boulder relevant without making the decision more exact than it needs to be.",
  },
  {
    question: "Who usually likes Gunbarrel most?",
    answer:
      "Usually buyers who want Boulder-area access, a more relaxed day-to-day feel, and less pressure around choosing the most identity-driven version of the move.",
  },
  {
    question: "Who usually moves away from Gunbarrel?",
    answer:
      "Usually buyers who realize they still want Boulder specifically, or want a different comparison path like Lafayette or Longmont.",
  },
  {
    question: "When does Gunbarrel make more sense than Boulder?",
    answer:
      "Usually when the buyer wants Boulder in the picture, but no longer needs the move to depend on Boulder itself.",
  },
  {
    question: "When does Boulder still make more sense than Gunbarrel?",
    answer:
      "When the buyer cares enough about Boulder specifically that a more relaxed nearby answer will still feel like the wrong fit.",
  },
  {
    question: "When does University Hill / CU Boulder make more sense than Gunbarrel?",
    answer:
      "When the buyer wants a more immediate, more central, more campus-adjacent version of the Boulder decision.",
  },
  {
    question: "When does Lafayette make more sense than Gunbarrel?",
    answer:
      "Usually when the buyer wants a steadier regional answer and does not need Boulder staying as directly in the foreground.",
  },
  {
    question: "When does Longmont make more sense than Gunbarrel?",
    answer:
      "Usually when the buyer wants to open the search wider and give the move more room to come together differently.",
  },
  {
    question: "What is this page really supposed to help me figure out?",
    answer:
      "Whether you want Boulder close by and clearly in the picture, or whether you want either a sharper Boulder decision or a broader alternative altogether.",
  },
];

/* ─── Build FAQ Schema ─── */
const faqSchema = buildFAQPageSchema(faqContent);

/* ─── Breadcrumb Items ─── */
const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Boulder", url: "/boulder-homes-for-sale" },
  { label: "Gunbarrel", url: "/gunbarrel-co-real-estate" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function GunbarrelCoRealEstate() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  return (
    <div className="hub-page min-h-screen flex flex-col bg-cream">
      <SeoHead
        metadata={{
          title:
            "Living in Gunbarrel, Colorado: Real Estate, Tradeoffs, and What It's Actually Like | My Rock Realty",
          description:
            "Thinking about living in Gunbarrel, Colorado? Learn what Gunbarrel actually feels like, who it fits, what the tradeoffs are, and when Boulder, Lafayette, or Longmont may make more sense.",
          canonicalUrl: "https://myrockhomes.com/gunbarrel-co-real-estate/",
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
          alt="Gunbarrel Colorado real estate"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/90" />
        <div className="container relative z-10 py-16 sm:py-20 md:py-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-2xl"
          >
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-cream mb-6 leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Living in Gunbarrel, Colorado: Real Estate, Tradeoffs, and What It's Actually Like
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
              A lot of buyers get to Gunbarrel once they stop assuming the search has to end in Boulder itself.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              That is usually a useful point in the process.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              It means the buyer is getting more specific about what they actually want.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              This page is not here to sell Gunbarrel as a shortcut to Boulder. And it is not here to act like it fits everyone just because it sits in a useful part of the map.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              It is here to help answer a simpler question.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              If you want Boulder access and Boulder-area relevance, but you do not need the move to feel central or especially high-pressure, does Gunbarrel fit the way you actually want to live?
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
              Gunbarrel usually feels a little less intense than the main Boulder conversation.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              For a lot of buyers, that is exactly why it starts making sense.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              It tends to feel less tied to the pressure of picking the "right" version of Boulder. Less immediate than University Hill. Less like the whole search has to revolve around one exact place.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              That does not make it generic.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              It just means Gunbarrel usually feels like a place people choose because it works well once real life starts, not because it makes the biggest statement.
            </p>
            <p className="text-lg text-cream/80 leading-relaxed">
              For the right buyer, that is a real advantage.
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
              Gunbarrel stays in the conversation because it often helps buyers keep what they like about the Boulder area without making the whole move overly exact.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              That matters.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              A buyer may still want to stay closely tied to Boulder. They may still want the area to feel familiar and connected to that part of the map.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              What usually changes is how specific they need the answer to be.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              That is where Gunbarrel gets stronger.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              It often becomes relevant when the buyer wants the area to work well day to day, not just sound right in theory.
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
              Gunbarrel usually fits buyers who want:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Boulder-area access without needing Boulder itself",
                "a location that still feels connected to the broader Boulder conversation",
                "less pressure around choosing the \"right\" Boulder identity",
                "a day-to-day feel that is a little easier to settle into",
                "a move that still feels tied to the area without feeling too narrowed",
                "a practical answer that keeps Boulder relevant without making it the whole decision",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-cream/80">
                  <ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-cream/80 leading-relaxed">
              It is often a strong fit for buyers who want the region to stay connected, but want the move to feel a little less tight.
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
              Gunbarrel may not be the best fit if you want:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Boulder specifically",
                "a more central Boulder feel",
                "a more active or more immediate version of the area",
                "the steadier regional feel that Lafayette offers",
                "the broader reset that Longmont can provide",
                "a move where being in the exact place matters more than overall fit",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-charcoal/80">
                  <ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              Some buyers move off Gunbarrel because they realize they still want Boulder to feel more like Boulder.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              That is useful to learn.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              Gunbarrel usually works best when a buyer wants connection to the area, but not all the pressure that can come with making Boulder itself the center of the decision.
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
              A Gunbarrel search usually turns into a question of how close the buyer wants to stay to Boulder without making the move more exact than it needs to be.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              That is usually the fork in the road.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Do you still want{" "}
              <a href="/boulder-homes-for-sale" className="text-gold hover:text-gold/80 underline">
                Boulder
              </a>{" "}
              itself?
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Do you want a more specific Boulder decision like{" "}
              <a href="/university-hill-cu-boulder-real-estate" className="text-gold hover:text-gold/80 underline">
                University Hill / CU Boulder
              </a>?
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Do you want a steadier regional answer like{" "}
              <a href="/lafayette-co-homes-for-sale" className="text-gold hover:text-gold/80 underline">
                Lafayette
              </a>?
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Or do you want a Boulder-area option that keeps you close without making that the whole story?
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              That is where Gunbarrel becomes useful.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              For some buyers, it turns into the better-fit answer.
            </p>
            <p className="text-lg text-cream/80 leading-relaxed">
              For others, it helps clarify that they still want something sharper or broader.
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
              The tradeoff with Gunbarrel is pretty clear.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              It usually gives buyers Boulder-area relevance without requiring the move to feel as exact, as central, or as identity-driven as Boulder itself.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              For the right buyer, that is the appeal.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              But if someone wants Boulder specifically, or wants the move to feel more central to Boulder's core identity, Gunbarrel is probably not going to replace that.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              That is fine.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              This page is here to help sort out whether a little more separation and a little less pressure actually makes the move fit better.
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
                Gunbarrel vs Boulder
              </h3>
              <p className="text-lg text-cream/80 mb-4 leading-relaxed">
                <a href="/boulder-homes-for-sale" className="text-gold hover:text-gold/80 underline">
                  Boulder
                </a>{" "}
                is usually the more identity-first decision.
              </p>
              <p className="text-lg text-cream/80 leading-relaxed">
                Gunbarrel usually gets stronger when the buyer wants Boulder-area access, but no longer needs the whole move to run through Boulder itself. If Boulder is the sharper answer, Gunbarrel is often the more relaxed one.
              </p>
            </div>
            {/* vs University Hill */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-gold mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Gunbarrel vs University Hill / CU Boulder
              </h3>
              <p className="text-lg text-cream/80 mb-4 leading-relaxed">
                <a href="/university-hill-cu-boulder-real-estate" className="text-gold hover:text-gold/80 underline">
                  University Hill / CU Boulder
                </a>{" "}
                is a much more specific Boulder choice.
              </p>
              <p className="text-lg text-cream/80 leading-relaxed">
                That page is about a more immediate, more central, more campus-adjacent version of the area. Gunbarrel usually makes more sense when the buyer wants Boulder relevance without that same intensity.
              </p>
            </div>
            {/* vs Lafayette */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-gold mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Gunbarrel vs Lafayette
              </h3>
              <p className="text-lg text-cream/80 mb-4 leading-relaxed">
                <a href="/lafayette-co-homes-for-sale" className="text-gold hover:text-gold/80 underline">
                  Lafayette
                </a>{" "}
                is often the steadier regional comparison.
              </p>
              <p className="text-lg text-cream/80 leading-relaxed">
                That page tends to fit buyers who want the Boulder-area orbit but are no longer trying to stay especially close to Boulder's identity. Gunbarrel is usually the cleaner comparison when a buyer still wants Boulder staying more directly in the picture.
              </p>
            </div>
            {/* vs Longmont */}
            <div>
              <h3 className="text-xl font-bold text-gold mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Gunbarrel vs Longmont
              </h3>
              <p className="text-lg text-cream/80 mb-4 leading-relaxed">
                <a href="/longmont-co-homes-for-sale" className="text-gold hover:text-gold/80 underline">
                  Longmont
                </a>{" "}
                usually becomes the broader practical comparison.
              </p>
              <p className="text-lg text-cream/80 leading-relaxed">
                If Gunbarrel keeps the buyer closer to Boulder's orbit, Longmont usually opens the search wider and gives the move more room to come together differently.
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
              A lot of buyers underestimate how useful Gunbarrel can be once they stop treating every Boulder-area decision like it has to resolve into Boulder itself.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              That is where this page starts helping.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              Gunbarrel usually is not the page buyers begin with.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              It is the page that starts making sense once they realize they want Boulder nearby, just not necessarily at the center of everything.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              People also tend to underestimate how much easier the search can feel once that distinction becomes clear.
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
              For some buyers, buying in Gunbarrel right away makes sense because the appeal is already clear.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              They want Boulder-area access. They want the move to stay connected to this part of the map. And they do not need the decision to be more exact than that.
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
                "whether you want a more central or more specific Boulder answer",
                "whether Lafayette fits better as a steadier regional option",
                "whether Longmont fits better as a broader practical answer",
                "whether Gunbarrel feels right long term or just like the clearest next comparison",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-cream/80">
                  <ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-cream/80 leading-relaxed">
              Renting first can make sense if the search is still narrowing and you are not quite ready to choose the map on purpose.
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
              Gunbarrel FAQs
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
              Gunbarrel stays relevant for a reason.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              It usually starts making more sense when buyers stop assuming the whole move has to resolve into Boulder itself and start asking what actually fits.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              For the right buyer, that can be a very useful shift.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Because sometimes the better answer is not the most central answer.
            </p>
            <p className="text-lg text-cream/80 leading-relaxed">
              Sometimes it is the one that keeps you connected to what you want without making the decision tighter than it needs to be. That is where Gunbarrel tends to stay strong.
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
