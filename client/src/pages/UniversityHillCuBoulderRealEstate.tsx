/**
 * University Hill / CU Boulder Real Estate — My Rock Realty
 * Route: /university-hill-cu-boulder-real-estate
 * Content: Approved boulder_cluster_package_v2 / approved_university_hill_cu_boulder.md
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

/* Hero Background Image — reuse Boulder hero */
const HERO_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/denver-rowhouses-hero_2f59d4ac.jpg";

/* ─── FAQ Content — approved_university_hill_cu_boulder.md §11 ─── */
const faqContent = [
  {
    question: "Is University Hill the same thing as Boulder generally?",
    answer:
      "No. It is part of Boulder, but it usually feels more specific, more central, and more influenced by its proximity to CU Boulder.",
  },
  {
    question: "Who usually likes this area most?",
    answer:
      "Usually buyers who want a more immediate Boulder feel, stronger centrality, and more comfort with a university-adjacent environment.",
  },
  {
    question: "Who usually moves away from this area?",
    answer:
      "Usually buyers who still want Boulder, but want a quieter, more buffered, or less central version of it.",
  },
  {
    question:
      "Does living near CU Boulder automatically make this a student-only conversation?",
    answer:
      "No. The more useful question is whether this version of Boulder fits the way you want to live.",
  },
  {
    question:
      "When does this area make more sense than Boulder generally?",
    answer:
      "When a buyer already knows they want a more specific, central, and university-adjacent part of Boulder.",
  },
  {
    question:
      "When does Boulder generally make more sense than University Hill?",
    answer:
      "When someone still needs to answer the broader city-level fit question before narrowing into a more specific area.",
  },
  {
    question: "When does Lafayette start to look stronger?",
    answer:
      "Usually when a buyer wants the region but starts feeling like this part of Boulder may be more active or more specific than they want.",
  },
  {
    question: "When does Longmont start to look stronger?",
    answer:
      "Usually when flexibility, room to work with, and a less narrowed location start mattering more.",
  },
  {
    question: "Should I rent first before buying here?",
    answer:
      "Sometimes, yes. Renting first can make a lot of sense if you want to understand how this part of Boulder feels before committing long term.",
  },
  {
    question:
      "What is the most useful thing this page should help me figure out?",
    answer:
      "Whether you want Boulder generally, or whether you want this more specific version of Boulder on purpose.",
  },
];

/* ─── Build FAQ Schema ─── */
const faqSchema = buildFAQPageSchema(faqContent);

/* ─── Breadcrumb Items — matrix spec ─── */
const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Boulder", url: "/boulder-homes-for-sale" },
  {
    label: "University Hill / CU Boulder",
    url: "/university-hill-cu-boulder-real-estate",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function UniversityHillCuBoulderRealEstate() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="hub-page min-h-screen flex flex-col bg-cream">
      <SeoHead
        metadata={{
          title:
            "Living Near University Hill and CU Boulder: Real Estate, Tradeoffs, and What It's Actually Like",
          description:
            "Thinking about living near University Hill and CU Boulder? Learn what this part of Boulder actually feels like, who it fits, what the tradeoffs are, and when another part of Boulder may make more sense.",
          canonicalUrl:
            "https://myrockhomes.com/university-hill-cu-boulder-real-estate/",
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
          alt="University Hill neighborhood near CU Boulder, Colorado"
          className="absolute inset-0 w-full h-full object-cover object-center"
          width="1600"
          height="900"
          fetchPriority="high"
          decoding="async"
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
              Living Near University Hill and CU Boulder: Real Estate,
              Tradeoffs, and What It's Actually Like
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
              A lot of buyers start by saying they want Boulder.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              That is broad enough to be true, but usually not specific enough
              to be useful.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              At some point, the search narrows. That is when University Hill
              and the area around CU Boulder usually stop being background and
              become their own decision.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              That is what this page is for.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              This is not a school page. It is not a visitor page. And it is
              not here to smooth over the tradeoffs that come with living in a
              more central, campus-influenced part of Boulder.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              It is here to help you figure out whether this specific version
              of Boulder fits the way you actually want to live.
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
              University Hill usually feels more immediate than Boulder in the
              broader sense.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              More shaped by movement. More tied into the center of things.
              Less buffered.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              A big reason is that this part of town is closely tied to CU
              Boulder, which enrolled about 39,000 students in fall 2024. That
              is enough to shape the rhythm of an area in a real way, and
              buyers usually feel that pretty quickly once they spend time here.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              That does not mean every block feels the same. It does mean this
              part of Boulder usually feels less neutral than some other areas.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              For some people, that is exactly why it works.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              They want a part of Boulder that feels connected, walkable, and
              unmistakably part of the city's core.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              For other buyers, it can feel like too much of the picture is
              happening around them all at once.
            </p>
            <p className="text-lg text-cream/80 leading-relaxed">
              This area is not just close to Boulder activity. It is part of a
              more specific version of Boulder life.
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
              This area stays in the conversation because some buyers do not
              just want Boulder generally.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              They want Boulder to feel closer in, more connected, and more
              tied to the daily rhythm of the city.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              That is where University Hill tends to stay strong.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              It also stays strong because buyers who like it usually know they
              are not choosing a neutral part of town. They are choosing a
              place with more identity, more presence, and more built-in
              tradeoffs.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              That makes it easier to rule in for the right buyer.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              And easier to rule out for the wrong one.
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
              University Hill / CU Boulder usually fits buyers who want:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "a more central Boulder feel",
                "a location that feels tied into the city, not set apart from it",
                "more comfort with daily activity around them",
                "a stronger university-adjacent presence",
                "a search where walkability and location matter more than separation",
                "a more specific part of Boulder, not a neutral one",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-cream/80">
                  <ArrowRight
                    size={16}
                    className="text-gold mt-1 flex-shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-cream/80 leading-relaxed">
              It can also fit buyers who want Boulder to feel lived in and in
              motion, not tucked away.
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
                "a quieter version of Boulder",
                "more distance from university influence",
                "more visual and day-to-day separation from central activity",
                "a search built around calm, buffer, or privacy first",
                "a part of Boulder that fades into the background more easily",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-charcoal/80"
                >
                  <ArrowRight
                    size={16}
                    className="text-gold mt-1 flex-shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              A lot of buyers do not move off this area because it is wrong.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              They move off it because they realize they still want Boulder,
              just not this particular version of Boulder.
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
              A search here usually becomes less about Boulder in general and
              more about how specific your Boulder decision really is.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              At first, a buyer may think they just want Boulder.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Then the search starts dividing itself.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Do you want a more central and active part of town? Do you want a
              quieter residential pocket? Do you want Boulder broadly, or do
              you want a part of Boulder that feels more immediate and less
              removed from the center of things?
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              That is usually where this page becomes useful.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              For some buyers, University Hill gets stronger as the search gets
              more specific.
            </p>
            <p className="text-lg text-cream/80 leading-relaxed">
              For others, this page helps them realize they belong back on the
              broader{" "}
              <a
                href="/boulder-homes-for-sale"
                className="text-gold hover:text-gold/80 underline"
              >
                Boulder page
              </a>{" "}
              or in a different nearby comparison entirely.
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
              The tradeoffs here are not side issues.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              They are the actual choice.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              This area usually works best when a buyer actively wants:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "centrality",
                "walkability",
                "location-driven daily life",
                "a stronger university-adjacent feel",
                "a more immediate version of Boulder",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-charcoal/80"
                >
                  <ArrowRight
                    size={16}
                    className="text-gold mt-1 flex-shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              And if that is what they want, the tradeoffs may feel worth it.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              If it is not, those same traits can start feeling like friction
              instead of value.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              That is what buyers need to get clear on.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed font-semibold">
              Not whether this area is good. Whether it is good for them.
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
            {/* vs Boulder overall */}
            <div className="mb-10">
              <h3
                className="text-xl font-bold text-gold mb-4"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                University Hill / CU Boulder vs Boulder overall
              </h3>
              <p className="text-lg text-cream/80 mb-4 leading-relaxed">
                <a
                  href="/boulder-homes-for-sale"
                  className="text-gold hover:text-gold/80 underline"
                >
                  Boulder
                </a>{" "}
                is the broader city-level decision.
              </p>
              <p className="text-lg text-cream/80 leading-relaxed">
                University Hill / CU Boulder is narrower and more specific. If
                Boulder is the main question, this page is the follow-up
                question: what happens when the buyer wants a version of
                Boulder that feels closer in and less neutral?
              </p>
            </div>
            {/* vs quieter parts of Boulder */}
            <div className="mb-10">
              <h3
                className="text-xl font-bold text-gold mb-4"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                University Hill / CU Boulder vs quieter parts of Boulder
              </h3>
              <p className="text-lg text-cream/80 mb-4 leading-relaxed">
                This is usually the most important internal comparison.
              </p>
              <p className="text-lg text-cream/80 leading-relaxed">
                A lot of buyers do not need to leave Boulder. They just need to
                move away from the more central, university-influenced part of
                the map. That is an important distinction.
              </p>
            </div>
            {/* vs Lafayette */}
            <div className="mb-10">
              <h3
                className="text-xl font-bold text-gold mb-4"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                University Hill / CU Boulder vs Lafayette
              </h3>
              <p className="text-lg text-cream/80 leading-relaxed">
                <a
                  href="/lafayette-co-homes-for-sale"
                  className="text-gold hover:text-gold/80 underline"
                >
                  Lafayette
                </a>{" "}
                usually becomes relevant when a buyer wants the region, but
                starts feeling like this part of Boulder may be too specific,
                too central, or too active for the way they want to live. If
                this page is the more immediate choice, Lafayette is often the
                calmer alternative.
              </p>
            </div>
            {/* vs Longmont */}
            <div>
              <h3
                className="text-xl font-bold text-gold mb-4"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                University Hill / CU Boulder vs Longmont
              </h3>
              <p className="text-lg text-cream/80 leading-relaxed">
                <a
                  href="/longmont-co-homes-for-sale"
                  className="text-gold hover:text-gold/80 underline"
                >
                  Longmont
                </a>{" "}
                usually comes into play when a buyer wants more room to work
                with and a version of the move that feels less narrowed by
                place. If this page is about choosing specificity on purpose,
                Longmont is often about reopening the search.
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
              A lot of buyers underestimate how different this part of Boulder
              feels from Boulder in the broader sense.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              They also underestimate how helpful that difference can be.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              Sometimes this page confirms that University Hill is exactly the
              kind of area they want.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              Sometimes it makes clear that they were really looking for a
              different version of Boulder all along.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              Both outcomes help.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              The mistake is assuming this area is just a smaller version of
              the Boulder hub.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              It is not.
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
              For some buyers, buying here right away makes sense because they
              already know they want a more central, more immediate,
              campus-adjacent part of Boulder.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              For others, renting first is the cleaner move.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              That is especially true if you are still sorting out:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "how much day-to-day activity feels right",
                "how much university presence you want nearby",
                "whether you want Boulder broadly or this part of Boulder specifically",
                "whether a different Boulder pocket, Lafayette, or Longmont would fit better once the move becomes real",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-cream/80">
                  <ArrowRight
                    size={16}
                    className="text-gold mt-1 flex-shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Renting first is not a lack of commitment.
            </p>
            <p className="text-lg text-cream/80 leading-relaxed">
              Sometimes it is the most practical way to learn the area before
              making a long-term decision.
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
              University Hill / CU Boulder FAQs
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
                  onClick={() =>
                    setExpandedFaq(expandedFaq === idx ? null : idx)
                  }
                  className="w-full flex items-center justify-between p-6 hover:bg-cream/50 transition-colors text-left"
                >
                  <h3 className="font-bold text-charcoal pr-4">
                    {item.question}
                  </h3>
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
              University Hill / CU Boulder stays in the conversation for a
              reason.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              It is not just another part of Boulder.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              For the right buyer, it can feel more connected, more immediate,
              and more aligned with the kind of day-to-day life they actually
              want.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              For the wrong buyer, it can still do something valuable.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              It can make the map clearer.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              That matters.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Because the goal is not just to choose Boulder.
            </p>
            <p className="text-lg text-cream/80 leading-relaxed">
              It is to choose the version of Boulder that actually fits.
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
                {
                  label: "Talk to Rob About Boulder Area Options →",
                  href: "/#contact",
                },
                {
                  label: "Browse Boulder Homes →",
                  href: "/boulder-co-homes-for-sale",
                },
                {
                  label: "Colorado Home Buying Workshop →",
                  href: "/colorado-home-buying-workshop",
                },
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
