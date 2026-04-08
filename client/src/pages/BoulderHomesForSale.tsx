/**
 * Boulder Homes for Sale — My Rock Realty
 * Hub page: /boulder-homes-for-sale
 * Content: Approved boulder_cluster_package_v2 / approved_boulder_hub.md
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

/* Hero Background Image */
const BOULDER_HERO_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/denver-rowhouses-hero_2f59d4ac.jpg";

/* ─── FAQ Content — approved_boulder_hub.md §11 ─── */
const faqContent = [
  {
    question: "Why does Boulder stay in the search even when it gets harder?",
    answer:
      "Because for the right buyer, Boulder feels distinct enough that it keeps earning a second look even when easier options exist.",
  },
  {
    question: "Is Boulder mostly a house search or a location search?",
    answer:
      "Usually a location search. In Boulder, the area decision often matters just as much as the house itself.",
  },
  {
    question: "Does Boulder fit every buyer in this part of the market?",
    answer:
      "No. Some buyers end up liking nearby options better once they compare daily life, flexibility, and how much they need Boulder specifically.",
  },
  {
    question:
      "When does University Hill / CU Boulder become its own conversation?",
    answer:
      "Usually when the buyer wants to understand campus-adjacent living, central Boulder energy, or how that part of the city feels compared with Boulder more broadly.",
  },
  {
    question: "When does Lafayette start to look better?",
    answer:
      "Usually when the buyer wants the region but starts questioning whether Boulder itself is worth the tighter tradeoffs.",
  },
  {
    question: "When does Longmont start to make more sense?",
    answer:
      "Usually when someone wants more room to work with and a different balance of pace, space, and flexibility.",
  },
  {
    question: "Is Boulder worth studying even if it may not be the final answer?",
    answer:
      "Yes. Boulder often helps buyers clarify what matters most, even if they end up choosing somewhere else nearby.",
  },
  {
    question: "Should I rent first in Boulder?",
    answer:
      "Sometimes. Renting first can be the cleaner move if you still need to learn the city before making a long-term purchase.",
  },
  {
    question: "What do buyers usually get wrong about Boulder at the start?",
    answer:
      "They often assume liking the idea of Boulder means they should buy there, when the better question is whether Boulder actually fits the way they want to live.",
  },
  {
    question: "What should I compare next if Boulder stays on the list?",
    answer:
      "Start with University Hill / CU Boulder, Lafayette, and Longmont. Those are the cleanest next comparisons once Boulder feels relevant but not automatic.",
  },
];

/* ─── Build FAQ Schema ─── */
const faqSchema = buildFAQPageSchema(faqContent);

/* ─── Breadcrumb Items — matrix spec ─── */
const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Boulder", url: "/boulder-homes-for-sale" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function BoulderHomesForSale() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="hub-page min-h-screen flex flex-col bg-cream">
      <SeoHead
        metadata={{
          title:
            "Boulder CO Homes for Sale | Real Estate & Living Guide",
          description:
            "Explore Boulder CO homes for sale and learn how Boulder compares with nearby options, neighborhoods, and everyday tradeoffs before you narrow your search.",
          canonicalUrl: "https://myrockhomes.com/boulder-homes-for-sale/",
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
          src={BOULDER_HERO_BG}
          alt="Residential street in Boulder, Colorado"
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
              Boulder CO Homes for Sale
            </h1>
          </motion.div>
        </div>
      </section>
      {/* ═══════════════════════════════════════════════════
          2. Intro
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              Boulder is one of the first places many buyers look, but the harder question is whether Boulder itself fits the way they actually want to live. This page is here to help you sort that out. You can use it to narrow Boulder as a real option, understand where the tradeoffs show up, and compare it with nearby choices like Longmont, Lafayette, or University Hill before you go too far down the wrong path.
            </p>
          </motion.div>
        </div>
      </section>
      {/* ═══════════════════════════════════════════════════
          3. What the area feels like
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2
              className="text-3xl sm:text-4xl font-bold text-cream mb-8"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              What the area feels like
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Boulder usually feels more deliberate than a lot of nearby
              markets.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Part of that is the way the city is set up. Part of it is the way
              people think about living there in the first place.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              It also helps explain why Boulder feels the way it does on the
              ground. The city has more than 45,000 acres of protected open
              space and mountain parks, so outdoor access is not just a nice
              extra here. It shapes how a lot of buyers think about daily life.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              That shows up fast once you start driving it.
            </p>
            <p className="text-lg text-cream/80 leading-relaxed">
              Some parts of Boulder feel more central and active. Some feel
              quieter and more neighborhood-driven. Some feel more influenced by
              the university. But Boulder usually feels like a place people
              choose on purpose, not just a place they end up near.
            </p>
          </motion.div>
        </div>
      </section>
      {/* ═══════════════════════════════════════════════════
          4. Why it stays in the conversation
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2
              className="text-3xl sm:text-4xl font-bold text-charcoal mb-8"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Why it stays in the conversation
            </h2>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              Boulder stays in the conversation because it gives some buyers
              something they do not feel anywhere else nearby.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              Not perfection.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              Not simplicity.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              Just a stronger sense that the area itself matters.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              That is usually what keeps Boulder alive in the search even when
              buyers start feeling the pressure of price, competition,
              compromise, or limited flexibility.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              If someone is only comparing square footage, Boulder often gets
              harder to justify.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              If they are comparing how a place feels to live in, Boulder
              usually gets stronger.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              That is the line.
            </p>
          </motion.div>
        </div>
      </section>
      {/* ═══════════════════════════════════════════════════
          5. Who it tends to fit
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2
              className="text-3xl sm:text-4xl font-bold text-cream mb-8"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Who it tends to fit
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Boulder usually fits buyers who want:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "a stronger sense of place",
                "a market that feels more identity-driven than generic",
                "outdoor access that feels built into normal life",
                "more walkable or bikeable pockets than they may find elsewhere nearby",
                "a home search where the location matters as much as the house",
                "a move that feels intentional, not just efficient",
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
              It also fits buyers who already know they are willing to make
              tradeoffs for the right location.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              That matters here.
            </p>
            <p className="text-lg text-cream/80 leading-relaxed">
              Boulder tends to work best when someone wants Boulder
              specifically, not just something near Boulder.
            </p>
          </motion.div>
        </div>
      </section>
      {/* ═══════════════════════════════════════════════════
          6. Who may not love it
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2
              className="text-3xl sm:text-4xl font-bold text-charcoal mb-8"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Who may not love it
            </h2>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              Boulder may not be the best fit if you want:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "the easiest value for the money",
                "the least stressful version of the move",
                "a more conventional suburban setup",
                "the most square footage for the budget",
                "a market where location is secondary to house features",
                "distance from university influence in more central parts of the city",
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
              Some buyers also move off Boulder because they realize they like
              the idea of Boulder more than the reality of choosing it.
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
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2
              className="text-3xl sm:text-4xl font-bold text-cream mb-8"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              What the home search usually turns into
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Boulder searches usually get more specific as soon as the search
              gets real.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              At first, buyers often say they want Boulder because they like the
              feel, the location, or the lifestyle attached to it.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Then the real questions show up.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Do you want Boulder itself, or do you want to stay in the orbit of
              Boulder? Do you want central energy, quieter residential pockets,
              or a cleaner separation from the university? Do you want the
              strongest Boulder identity, or do you want a nearby market that
              may work better day to day?
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              That is where the map starts sorting itself out.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              For some buyers, Boulder gets stronger.
            </p>
            <p className="text-lg text-cream/80 leading-relaxed">
              For others, the better next step is comparing Boulder with{" "}
              <a
                href="/lafayette-co-homes-for-sale"
                className="text-gold hover:text-gold/80 underline"
              >
                Lafayette
              </a>
              ,{" "}
              <a
                href="/longmont-co-homes-for-sale"
                className="text-gold hover:text-gold/80 underline"
              >
                Longmont
              </a>
              , or a more specific Boulder spoke like{" "}
              <a
                href="/university-hill-cu-boulder-real-estate"
                className="text-gold hover:text-gold/80 underline"
              >
                University Hill / CU Boulder
              </a>
              .
            </p>
          </motion.div>
        </div>
      </section>
      {/* ═══════════════════════════════════════════════════
          8. Boulder tradeoffs
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2
              className="text-3xl sm:text-4xl font-bold text-charcoal mb-8"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Boulder tradeoffs
            </h2>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              This is not a market where the tradeoffs sit quietly in the
              background.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              They are the decision.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              Boulder usually forces buyers to decide what matters more:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "being in Boulder itself",
                "getting more flexibility in the search",
                "staying close to the same region without choosing the same pressure",
                "accepting a more constrained search in exchange for a more specific location",
                "sorting out whether identity, lifestyle, and place matter enough to justify the harder parts",
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
              That is why vague Boulder interest is usually not enough.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed font-semibold">
              Boulder tends to work best when buyers can answer a simple
              question clearly: Do I want Boulder enough to choose it on
              purpose?
            </p>
          </motion.div>
        </div>
      </section>
      {/* ═══════════════════════════════════════════════════
          9. Compare nearby options
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2
              className="text-3xl sm:text-4xl font-bold text-cream mb-8"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Compare nearby options
            </h2>
            {/* Boulder vs University Hill */}
            <div className="mb-10">
              <h3
                className="text-xl font-bold text-gold mb-4"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Boulder vs University Hill / CU Boulder
              </h3>
              <p className="text-lg text-cream/80 mb-4 leading-relaxed">
                This is the most important child-page split inside the Boulder
                cluster.
              </p>
              <p className="text-lg text-cream/80 mb-4 leading-relaxed">
                Boulder is the broader city-level decision.
              </p>
              <p className="text-lg text-cream/80 leading-relaxed">
                <a
                  href="/university-hill-cu-boulder-real-estate"
                  className="text-gold hover:text-gold/80 underline"
                >
                  University Hill / CU Boulder
                </a>{" "}
                is for buyers trying to understand what happens when the search
                becomes more campus-adjacent, more central, and more tied to
                that part of town. If Boulder is the macro decision, University
                Hill / CU Boulder is the closer look at one of the city's most
                specific submarkets.
              </p>
            </div>
            {/* Boulder vs Lafayette */}
            <div className="mb-10">
              <h3
                className="text-xl font-bold text-gold mb-4"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Boulder vs Lafayette
              </h3>
              <p className="text-lg text-cream/80 mb-4 leading-relaxed">
                <a
                  href="/lafayette-co-homes-for-sale"
                  className="text-gold hover:text-gold/80 underline"
                >
                  Lafayette
                </a>{" "}
                usually gets serious when buyers want the general region, but
                start questioning whether Boulder itself is the right version of
                the move.
              </p>
              <p className="text-lg text-cream/80 mb-4 leading-relaxed">
                That does not make Lafayette a fallback.
              </p>
              <p className="text-lg text-cream/80 leading-relaxed">
                It makes it one of the cleaner comparison markets. If Boulder is
                the identity-first choice, Lafayette is often the "would this
                work better in real life?" choice.
              </p>
            </div>
            {/* Boulder vs Longmont */}
            <div>
              <h3
                className="text-xl font-bold text-gold mb-4"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Boulder vs Longmont
              </h3>
              <p className="text-lg text-cream/80 mb-4 leading-relaxed">
                <a
                  href="/longmont-co-homes-for-sale"
                  className="text-gold hover:text-gold/80 underline"
                >
                  Longmont
                </a>{" "}
                usually becomes the practical comparison when buyers want more
                room to work with or want the move to feel less compressed.
              </p>
              <p className="text-lg text-cream/80 mb-4 leading-relaxed">
                Again, that is not a downgrade.
              </p>
              <p className="text-lg text-cream/80 leading-relaxed">
                It is just a different answer. If Boulder is the more specific
                choice, Longmont is often the broader flexibility play.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* ═══════════════════════════════════════════════════
          10. What people tend to underestimate
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2
              className="text-3xl sm:text-4xl font-bold text-charcoal mb-8"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              What people tend to underestimate
            </h2>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              A lot of buyers underestimate how much Boulder narrows the search.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              Sometimes that is exactly why it helps.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              But it usually narrows the search faster than people expect. It
              forces clearer decisions about budget, area, pace, priorities, and
              whether the city itself matters more than the house.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              Buyers also tend to underestimate how useful the nearby
              comparisons become once they stop treating them as basically the
              same.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              They are not the same.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              That is why the spoke pages matter.
            </p>
          </motion.div>
        </div>
      </section>
      {/* ═══════════════════════════════════════════════════
          11. Buy now or rent first
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2
              className="text-3xl sm:text-4xl font-bold text-cream mb-8"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Buy now or rent first
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              For some buyers, buying in Boulder right away makes sense because
              they already know what they are choosing and why.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              For others, renting first is the better move.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              That is especially true if you are still figuring out:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "whether Boulder itself is the long-term fit",
                "which part of Boulder actually feels right to you",
                "how much university influence you want nearby",
                "whether Lafayette or Longmont may fit better once the move is real",
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
              Renting first is not hesitation.
            </p>
            <p className="text-lg text-cream/80 leading-relaxed">
              Sometimes it is the cleanest way to avoid forcing a decision
              before the map is clear.
            </p>
          </motion.div>
        </div>
      </section>
      {/* ═══════════════════════════════════════════════════
          12. Boulder FAQs
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2
              className="text-3xl sm:text-4xl font-bold text-charcoal mb-10"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Boulder FAQs
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
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2
              className="text-3xl sm:text-4xl font-bold text-cream mb-8"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Final thoughts
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Boulder stays in the conversation for a reason.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              It is not just recognizable. It is not just attractive. It is not
              just a place people like talking about.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              For the right buyer, Boulder can feel more specific than that.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              But that only helps if you are honest about what you are choosing.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              If Boulder fits, it usually fits because the city itself matters
              enough to shape the whole move.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              If it does not, that is also good to know early.
            </p>
            <p className="text-lg text-cream/80 leading-relaxed">
              Because the goal is not to end up near the right map. It is to
              end up in the part of the map that actually makes sense for you.
            </p>
          </motion.div>
        </div>
      </section>
      {/* ═══════════════════════════════════════════════════
          14. Endcap — Keep Exploring Boulder Area Options
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2
              className="text-2xl font-bold text-charcoal mb-8"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Keep Exploring Boulder Area Options
            </h2>
            <div className="space-y-3 mb-10">
              {[
                {
                  label: "University Hill / CU Boulder →",
                  href: "/university-hill-cu-boulder-real-estate",
                },
                {
                  label: "Lafayette →",
                  href: "/lafayette-co-homes-for-sale",
                },
                {
                  label: "Longmont →",
                  href: "/longmont-co-homes-for-sale",
                },
                {
                  label: "Gunbarrel →",
                  href: "/gunbarrel-co-real-estate",
                },
                {
                  label: "Niwot →",
                  href: "/niwot-co-real-estate",
                },
                {
                  label: "Table Mesa / South Boulder →",
                  href: "/table-mesa-south-boulder-real-estate",
                },
                {
                  label: "North Boulder (NoBo) →",
                  href: "/north-boulder-nobo-real-estate",
                },
                {
                  label: "Newlands →",
                  href: "/newlands-boulder-real-estate",
                },
                {
                  label: "Mapleton Hill →",
                  href: "/mapleton-hill-boulder-real-estate",
                },
                {
                  label: "Louisville →",
                  href: "/louisville-co-homes-for-sale",
                },
                {
                  label: "Superior →",
                  href: "/superior-co-homes-for-sale",
                },
                {
                  label: "Lyons →",
                  href: "/lyons-co-homes-for-sale",
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
            <h2
              className="text-2xl font-bold text-charcoal mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Next Step
            </h2>
            <div className="space-y-3">
              {[
                { label: "Talk to Rob About Boulder →", href: "/#contact" },
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
