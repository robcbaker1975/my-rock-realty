/**
 * Moving to Colorado Springs — My Rock Realty
 * Premium relocation / lifestyle SEO page
 * Slug: /moving-to-colorado-springs/
 * Design: Front Range Modern — matches existing site design system
 */
import { useState } from "react";
import SeoHead from "@/components/seo/SeoHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  MapPin,
  Home,
  DollarSign,
  Compass,
  BookOpen,
} from "lucide-react";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "Is Colorado Springs a good place to live?",
    answer:
      "For a lot of people, yes. Colorado Springs appeals to buyers who want mountain access, more breathing room, and a pace that usually feels easier than Denver. But whether it feels like a good fit really depends on your budget, commute, and which part of town makes the most sense for your day-to-day life.",
  },
  {
    question: "Is Colorado Springs cheaper than Denver?",
    answer:
      "In many cases, yes. But that only tells part of the story. Colorado Springs can feel more manageable than Denver, especially if you're coming from a higher-priced market. But once you start narrowing down neighborhoods, condition, home style, and commute, the budget question gets more real.",
  },
  {
    question: "Do you need a car in Colorado Springs?",
    answer:
      "In most cases, yes. Colorado Springs is a driving-oriented city, and daily routine matters a lot here. Where you live can make a big difference in how easy the city feels once work, errands, school, and normal life all start stacking together.",
  },
  {
    question: "Should I rent before buying in Colorado Springs?",
    answer:
      "Sometimes, yes. If you already know the city, understand the map, and feel clear on where you want to be, buying first can make a lot of sense. But if you're still figuring out commute, neighborhoods, or how you want everyday life to work, renting first can help you avoid buying in the wrong area.",
  },
  {
    question: "Do different neighborhoods in Colorado Springs really feel that different?",
    answer:
      "Yes, they usually do. That's one of the things people tend to underestimate. Some areas feel more established. Some feel newer. Some make day-to-day driving easier. Some offer more space or privacy. The right fit usually depends less on the best neighborhood and more on which part of town works best for your routine.",
  },
  {
    question: "Should I also look outside Colorado Springs?",
    answer:
      "Sometimes, yes. A lot of buyers start in Colorado Springs, then widen the search once they get clearer on what matters most. Communities like Manitou Springs, Monument, Palmer Lake, Falcon, Peyton, Fountain, Black Forest, Woodland Park, and Calhan can all make sense depending on commute, space, setting, and the kind of day-to-day feel you want.",
  },
  {
    question: "Is Colorado Springs too spread out?",
    answer:
      "That depends on what you're used to and how often you need to cross town. Some buyers find Colorado Springs easier to handle than Denver. Others are surprised by how much daily life depends on where they land. A home can look great online, but if it adds too much driving to your week, the city can feel bigger than expected pretty quickly.",
  },
  {
    question: "Is Colorado Springs a good market for military moves?",
    answer:
      "Often, yes. Colorado Springs has enough military influence that it shapes a lot of local search decisions, especially when commute, timeline, and access matter. For buyers connected to Fort Carson, Peterson, Schriever, or the Air Force Academy, practicality often ends up driving the search more than the original picture they had in mind.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Moving to Colorado Springs", url: "/moving-to-colorado-springs/" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function CTAButton({
  label = "Schedule a Colorado Springs Consultation",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a
      href="mailto:rob@myrockhomes.com?subject=Colorado Springs Relocation Consultation"
      className={`inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 bg-gold text-charcoal hover:bg-gold-light hover:shadow-lg px-7 py-4 text-[15px] sm:text-base no-underline ${className}`}
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {label}
      <ArrowRight size={18} />
    </a>
  );
}

export default function MovingToColoradoSprings() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <SeoHead
        metadata={{
          title: "Moving to Colorado Springs: Neighborhoods, Costs, and Tradeoffs",
          description:
            "Thinking about moving to Colorado Springs? Learn what to know about costs, different neighborhoods, commutes, and whether it makes sense to rent or buy first.",
          canonicalUrl: "https://myrockhomes.com/moving-to-colorado-springs/",
          breadcrumbs: breadcrumbItems,
        }}
        schema={faqSchema ? [faqSchema] : []}
      />

      {/* BREADCRUMBS */}
      <div className="bg-charcoal">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* HERO */}
      <section className="bg-charcoal text-cream pt-16 pb-16 sm:pt-20 sm:pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={16} className="text-gold" />
              <span
                className="text-gold text-sm font-semibold tracking-widest uppercase"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Colorado Springs Relocation Guide
              </span>
            </div>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-6 leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Moving to Colorado Springs: Neighborhoods, Costs, and Tradeoffs
            </h1>
            <p className="text-cream/80 text-lg leading-relaxed mb-8">
              Colorado Springs can be a really good move. This guide is meant to help you sort through what to know before you get too far into the search.
            </p>
            <CTAButton label="Talk to Rob About Colorado Springs" />
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-cream py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-5">
              A lot of people come here looking for the same thing: mountain access, a little more breathing room, and a pace that feels easier than Denver.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-5">
              Sometimes Colorado Springs is exactly that.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-5">
              But people also tend to oversimplify it. They think they're choosing a city, when really they're choosing a part of town, a home style, a commute, and the kind of routine they want once they're settled in.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-5">
              That matters more than people expect.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-5">
              Colorado Springs has a lot going for it. Pikes Peak is always in view, Garden of the Gods is part of normal life here for a lot of residents, downtown Colorado Springs gives the city more of a core than some outsiders expect, and the Colorado Springs Airport can be a real convenience depending on how often you travel. It is a city with a strong outdoor identity, but it is still a city where everyday logistics matter — and that usually becomes clear pretty quickly once the move is real.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-5">
              Different neighborhoods can feel very different once you actually live here. Where you buy matters. Where you rent matters. And the way your day works matters too.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-5">
              This guide is meant to help you sort through that.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed">
              Not a sales pitch. Not a generic list of pros and cons. Just clear, practical guidance on what to know before moving to Colorado Springs, especially if you're trying to decide where to live, whether to rent or buy first, and what tradeoffs make the most sense for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* QUICK TAKE */}
      <section className="bg-charcoal/5 border-y border-charcoal/10 py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3">
            <BookOpen size={20} className="text-gold mt-1 shrink-0" />
            <div>
              <p
                className="text-xs font-semibold tracking-widest uppercase text-charcoal/50 mb-2"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Quick Take
              </p>
              <p className="text-charcoal text-base leading-relaxed">
                Colorado Springs can be a great fit if you want outdoor access, a little more breathing room, and a pace that feels easier than Denver. But the move usually goes better when you get clear on the map before you get too attached to a specific house.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* START HERE IF */}
      <section className="bg-cream py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2
              className="text-2xl sm:text-3xl font-bold text-charcoal mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Start Here If…
            </h2>
            <ul className="space-y-3">
              {[
                { label: "You're wondering what the real tradeoffs are:", target: "Tradeoffs to Know Before Moving" },
                { label: "You're trying to figure out whether it's affordable:", target: "Is Colorado Springs Affordable?" },
                { label: "You want help narrowing down areas:", target: "How Different Neighborhoods in Colorado Springs Feel" },
                { label: "You're not sure whether to rent or buy first:", target: "Should You Rent First or Buy First?" },
                { label: "You're comparing Colorado Springs vs. Denver:", target: "Colorado Springs vs. Denver" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-charcoal/80 text-base leading-relaxed">
                  <ArrowRight size={16} className="text-gold mt-1 shrink-0" />
                  <span>
                    <strong>{item.label}</strong> {item.target}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* TRADEOFFS */}
      <section className="bg-charcoal text-cream py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-2 mb-3">
              <Compass size={16} className="text-gold" />
              <span className="text-gold text-xs font-semibold tracking-widest uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Before You Move
              </span>
            </div>
            <h2
              className="text-2xl sm:text-3xl font-bold text-cream mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Tradeoffs to Know Before Moving
            </h2>
            <div className="space-y-5 text-cream/80 text-base leading-relaxed">
              <p>Colorado Springs can be a great move, but it usually works best when people come in with realistic expectations.</p>
              <p>If you're moving to Colorado Springs, you're usually balancing the same basic things: budget, commute, location, home style, and how much work you want to take on after you move in.</p>
              <p>A lot of people assume Colorado Springs will feel simple because it looks more manageable than Denver. Sometimes it does. But that doesn't mean you get everything at once.</p>
              <p>You may get more space, but a longer commute. A better location, but an older house. A newer home, but not in the part of town you first had in mind. More privacy, but more upkeep.</p>
              <p>Another thing people run into is that "more affordable than Denver" can be true without making living in Colorado Springs feel easy. Once you start narrowing down what you actually want in a home and neighborhood, the tradeoffs become a lot more real.</p>
              <p>Colorado Springs can also feel more spread out once you're living your normal routine. A drive that doesn't seem like a big deal at first can feel very different when it becomes part of your week, especially if you end up crossing town more often than you expected.</p>
              <p>That's why this move usually goes better when people get clear on what matters most before they get too attached to a specific house.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AFFORDABILITY */}
      <section className="bg-cream py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-2 mb-3">
              <DollarSign size={16} className="text-gold" />
              <span className="text-gold text-xs font-semibold tracking-widest uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Cost of Living
              </span>
            </div>
            <h2
              className="text-2xl sm:text-3xl font-bold text-charcoal mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Is Colorado Springs Affordable?
            </h2>
            <div className="space-y-5 text-charcoal/80 text-base leading-relaxed">
              <p>For some buyers, yes. For others, not really.</p>
              <p>That may sound vague, but it's the honest answer.</p>
              <p>Colorado Springs often feels more manageable than Denver, especially for buyers coming from a higher-priced market or trying to get a little more room for their money. But once you start narrowing down neighborhoods, home style, condition, and commute, the budget question usually gets more real.</p>
              <p>That's where a lot of people stop asking, "Is Colorado Springs affordable?" and start asking a better question: "What am I actually willing to trade off?"</p>
              <p>You may be able to get more space, but farther out. A better location, but an older house. A newer home, but less flexibility on price. More privacy, but more upkeep.</p>
              <p>That doesn't mean buying here is out of reach. It just means affordability in Colorado Springs is tied pretty closely to expectations. What feels affordable here can change pretty quickly once buyers start choosing between location, home age, and commute.</p>
              <p>For most buyers, living in Colorado Springs feels affordable only when the home, neighborhood, and daily routine line up in a way that makes sense for their budget.</p>
              <p>
                If you're also weighing Front Range options more broadly, it helps to{" "}
                <a
                  href="/denver-vs-colorado-springs"
                  className="text-gold underline hover:text-gold-light"
                >
                  compare Colorado Springs vs. Denver
                </a>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEIGHBORHOODS */}
      <section className="bg-charcoal/5 border-y border-charcoal/10 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-2 mb-3">
              <MapPin size={16} className="text-gold" />
              <span className="text-gold text-xs font-semibold tracking-widest uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Neighborhoods
              </span>
            </div>
            <h2
              className="text-2xl sm:text-3xl font-bold text-charcoal mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              How Different Neighborhoods in Colorado Springs Feel
            </h2>
            <div className="space-y-5 text-charcoal/80 text-base leading-relaxed mb-10">
              <p>This is where a lot of people start to get more clarity.</p>
              <p>Colorado Springs is not one simple market. Different neighborhoods can feel very different once you actually live here, and that matters more than a lot of buyers expect.</p>
              <p>Some areas feel more established. Some feel newer. Some make day-to-day driving easier. Some give you more space or a little more privacy. Some feel closer to downtown Colorado Springs or the parts of town people use most. Others trade convenience for room or a different pace.</p>
              <p>None of that is good or bad on its own. It just depends on what matters most to you.</p>
              <p>That's why this part of the move usually goes better when people stop asking, "What's the best neighborhood?" and start asking, "Which part of town actually fits the way I want to live?"</p>
            </div>

            {/* Area breakdowns */}
            <div className="space-y-10">
              {[
                {
                  title: "Central and More Established Neighborhoods",
                  body: [
                    "This is often where buyers look when they want a neighborhood that feels a little more established and a little less uniform.",
                    "In these parts of Colorado Springs, you'll usually see older homes, more variation from block to block, and more of the city's earlier layout and character. Areas around Downtown Colorado Springs and the Old North End tend to fit that pattern. In many cases, you also feel a little closer to downtown, older commercial corridors, and the parts of the city that feel less built around newer growth.",
                    "That often comes with a stronger sense of place, but also more variation in condition, updating, layout, and lot setup.",
                    "For the right buyer, this part of the market can be a great fit. It just helps to know the search usually feels a little less predictable.",
                  ],
                  extra: (
                    <p className="text-charcoal/80 text-base leading-relaxed mt-3">
                      See:{" "}
                      <a href="/old-north-end-colorado-springs-real-estate/" className="text-gold underline hover:text-gold-light">Old North End</a>
                    </p>
                  ),
                },
                {
                  title: "West-Side and Foothill-Adjacent Neighborhoods",
                  body: [
                    "This is often where buyers start looking when they want more of the setting people usually picture when they think about Colorado Springs.",
                    "These neighborhoods often have more varied terrain, more visual character, and a stronger connection to the landscape. Places like Old Colorado City help explain why the west side has such a strong pull for some buyers. That can make these areas feel more distinctive right away.",
                    "It can also mean older homes, more property-level differences, and a search that takes a little more attention. For some buyers, this part of Colorado Springs feels like exactly what they had in mind. It just helps to look closely and understand the property, not just the backdrop.",
                  ],
                  extra: (
                    <p className="text-charcoal/80 text-base leading-relaxed mt-3">
                      See:{" "}
                      <a href="/old-colorado-city-colorado-springs-real-estate/" className="text-gold underline hover:text-gold-light">Old Colorado City</a>,{" "}
                      <a href="/broadmoor-cheyenne-mountain-colorado-springs-real-estate/" className="text-gold underline hover:text-gold-light">Broadmoor / Cheyenne Mountain</a>
                    </p>
                  ),
                },
                {
                  title: "North-Side Areas",
                  body: [
                    "A lot of relocation buyers start on the north side because the search can feel a little easier to understand.",
                    "In this part of Colorado Springs, you'll often see newer development patterns, more consistency from one neighborhood to the next, and good access to major roads, shopping, and day-to-day conveniences. Areas like Briargate, Northgate, and Flying Horse are often part of that conversation. For a lot of people, it feels straightforward in a good way.",
                    "That's a big part of the appeal.",
                    "The tradeoff is that these neighborhoods can feel more planned and more predictable. If you're looking for older character or a less uniform feel, you may find the north side feels a little too consistent.",
                  ],
                  extra: (
                    <p className="text-charcoal/80 text-base leading-relaxed mt-3">
                      See:{" "}
                      <a href="/briargate-colorado-springs-real-estate/" className="text-gold underline hover:text-gold-light">Briargate</a>,{" "}
                      <a href="/northgate-colorado-springs-real-estate/" className="text-gold underline hover:text-gold-light">Northgate</a>,{" "}
                      <a href="/flying-horse-colorado-springs-real-estate/" className="text-gold underline hover:text-gold-light">Flying Horse</a>
                    </p>
                  ),
                },
                {
                  title: "East and Northeast Growth Areas",
                  body: [
                    "This is often where buyers look when they want newer homes, less immediate maintenance, and a search that feels a little more straightforward.",
                    "In these parts of Colorado Springs, you'll usually see newer construction, more modern layouts, and neighborhoods that are easier to compare from one option to the next. Banning Lewis Ranch is one of the clearest examples of that pattern. That can make the search feel more efficient, especially if you're relocating and trying to narrow down choices quickly.",
                    "That's part of the appeal.",
                    "The tradeoff is usually about feel. Some buyers like the consistency and ease. Others decide they want more variation, more mature landscaping, or a little more of an established feel.",
                  ],
                  extra: (
                    <p className="text-charcoal/80 text-base leading-relaxed mt-3">
                      See:{" "}
                      <a href="/banning-lewis-ranch-colorado-springs-real-estate/" className="text-gold underline hover:text-gold-light">Banning Lewis Ranch</a>
                    </p>
                  ),
                },
                {
                  title: "South and Southeast Areas",
                  body: [
                    "This is often the part of the search where practicality starts to matter more than the picture people had in their head.",
                    "For buyers who need easier access south or southeast, these areas can make a lot of sense. That can include buyers who want a simpler commute, buyers relocating on a tighter timeline, or buyers whose search is shaped by Fort Carson, Peterson, Schriever, or the Air Force Academy.",
                    "That's a big reason this part of Colorado Springs stays important in a lot of relocation moves.",
                    "The tradeoff is that some buyers start out focused on a different area, then realize the better move is the one that works better for everyday life. In a lot of moves, this is where practicality wins.",
                  ],
                  extra: (
                    <p className="text-charcoal/80 text-base leading-relaxed mt-3">
                      If your move is tied to a military timeline or installation access, your search may also line up with{" "}
                      <a href="/military-relocation/" className="text-gold underline hover:text-gold-light">
                        military relocation help
                      </a>{" "}
                      or{" "}
                      <a href="/military-relocation/pcs-relocation-tour-support/" className="text-gold underline hover:text-gold-light">
                        PCS relocation tour support
                      </a>
                      .
                    </p>
                  ),
                },
                {
                  title: "Edge Areas and Acreage Properties",
                  body: [
                    "This is often where buyers look when they want more space, more privacy, or a little less of the typical neighborhood feel.",
                    "In these parts of the Colorado Springs area, the appeal is usually pretty clear: more land, fewer nearby homes, and a setup that can feel a little quieter and more spread out. Black Forest is one of the first places many buyers look when they want that kind of setup without leaving the broader Colorado Springs search entirely.",
                    "The tradeoff is just as clear. More land usually means more upkeep. More distance often means more driving. And the search itself can feel a little less predictable from one property to the next.",
                    "For some buyers, that's exactly the point. For others, it ends up being more than they really wanted to take on once the move becomes real.",
                  ],
                  extra: (
                    <p className="text-charcoal/80 text-base leading-relaxed mt-3">
                      See:{" "}
                      <a href="/black-forest-co-real-estate/" className="text-gold underline hover:text-gold-light">Black Forest</a>
                    </p>
                  ),
                },
                {
                  title: "Nearby Communities Some Buyers Also Consider",
                  body: [
                    "A lot of people start their search in Colorado Springs, then realize they may want to look a little wider.",
                    "That can mean places like Manitou Springs, Monument, Palmer Lake, Falcon, Peyton, Fountain, Black Forest, Woodland Park, or Calhan, depending on what matters most to them.",
                    "Sometimes the draw is a different setting. Sometimes it's more space, more privacy, a different commute, or a different kind of day-to-day feel. That doesn't make these communities better or worse than Colorado Springs. It just means some buyers end up finding the right fit a little outside the city itself.",
                  ],
                  extra: (
                    <p className="text-charcoal/80 text-base leading-relaxed mt-3">
                      See:{" "}
                      <a href="/manitou-springs-co-real-estate/" className="text-gold underline hover:text-gold-light">Manitou Springs</a>,{" "}
                      <a href="/monument-co-real-estate/" className="text-gold underline hover:text-gold-light">Monument</a>,{" "}
                      <a href="/palmer-lake-co-real-estate/" className="text-gold underline hover:text-gold-light">Palmer Lake</a>,{" "}
                      <a href="/falcon-co-real-estate/" className="text-gold underline hover:text-gold-light">Falcon</a>,{" "}
                      <a href="/peyton-co-real-estate/" className="text-gold underline hover:text-gold-light">Peyton</a>,{" "}
                      <a href="/fountain-co-real-estate/" className="text-gold underline hover:text-gold-light">Fountain</a>,{" "}
                      <a href="/woodland-park-co-real-estate/" className="text-gold underline hover:text-gold-light">Woodland Park</a>,{" "}
                      <a href="/calhan-co-real-estate/" className="text-gold underline hover:text-gold-light">Calhan</a>
                    </p>
                  ),
                },
              ].map((area, i) => (
                <div key={i}>
                  <h3
                    className="text-lg font-bold text-charcoal mb-3"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {area.title}
                  </h3>
                  <div className="space-y-3 text-charcoal/80 text-base leading-relaxed">
                    {area.body.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                    {"extra" in area && area.extra}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* QUICK AREA SUMMARY */}
      <section className="bg-charcoal text-cream py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2
              className="text-xl sm:text-2xl font-bold text-cream mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Quick Area Summary
            </h2>
            <div className="space-y-3 text-cream/80 text-base leading-relaxed">
              <p>If you want a search that feels more straightforward, north-side and newer east-side areas are usually where people start.</p>
              <p>If you want more character and a stronger sense of place, central neighborhoods and the west side usually make more sense.</p>
              <p>If commute and everyday logistics are driving the move, south and southeast areas often become more important.</p>
              <p>If you want more space, privacy, or land, edge areas and places like Black Forest usually stay in the conversation longer.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RENT OR BUY */}
      <section className="bg-cream py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-2 mb-3">
              <Home size={16} className="text-gold" />
              <span className="text-gold text-xs font-semibold tracking-widest uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Rent vs. Buy
              </span>
            </div>
            <h2
              className="text-2xl sm:text-3xl font-bold text-charcoal mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Should You Rent First or Buy First?
            </h2>
            <div className="space-y-5 text-charcoal/80 text-base leading-relaxed">
              <p>This is one of the best questions to ask before moving to Colorado Springs.</p>
              <p>A lot of people assume buying right away is the smart move if they already know they want to stay. Sometimes that's true. Sometimes renting first is what keeps them from making a location mistake.</p>
              <p>If you already know the city, understand the map, and feel clear on the kind of home and neighborhood you want, buying first can make perfect sense.</p>
              <p>But if you're still figuring out commute, part of town, or how you want everyday life to work once you're here, renting first can be the better move. In a city like Colorado Springs, that kind of clarity can save you from buying the right house in the wrong area.</p>
              <p>
                If that sounds like your situation,{" "}
                <a href="/rental-tour-support/" className="text-gold underline hover:text-gold-light">
                  starting with rental tour support
                </a>{" "}
                can make a lot of sense before you jump into a purchase.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT PEOPLE UNDERESTIMATE */}
      <section className="bg-charcoal/5 border-y border-charcoal/10 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2
              className="text-2xl sm:text-3xl font-bold text-charcoal mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              What People Underestimate Before Buying Here
            </h2>
            <div className="space-y-5 text-charcoal/80 text-base leading-relaxed">
              <p>This is usually where the move gets more real.</p>
              <p>A lot of buyers come in thinking the main decision is the house. Usually, it's bigger than that.</p>
              <p>They're also choosing a commute, a part of town, the amount of upkeep they want to take on, and how everyday life is going to work once they're settled in.</p>
              <p>That's where people get surprised.</p>
              <p>A house can look right on paper and still be the wrong move if the location adds stress, the neighborhood doesn't fit the routine, or the property comes with more maintenance than expected. That's especially true in a city where the right house on paper can still land you in the wrong routine.</p>
              <p>That's why buyers usually make better decisions here when they think a little more about daily life and a little less about just the house itself.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DENVER VS COLORADO SPRINGS */}
      <section className="bg-cream py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2
              className="text-2xl sm:text-3xl font-bold text-charcoal mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Colorado Springs vs. Denver
            </h2>
            <div className="space-y-5 text-charcoal/80 text-base leading-relaxed">
              <p>A lot of people looking at Colorado Springs are also comparing it to Denver, even if they are not doing it out loud at first.</p>
              <p>In broad terms, Denver usually makes more sense for people who want a bigger metro, more urban energy, and a wider mix of neighborhoods, jobs, and city amenities. Colorado Springs tends to make more sense for buyers who want a slower pace, easier access to the outdoors, and a market that can feel a little more manageable.</p>
              <p>That does not automatically make Colorado Springs cheap, and it does not make Denver the wrong choice. It just means the two cities solve different problems. Denver tends to win when you want more big-city energy. Colorado Springs tends to win when you want a more manageable day-to-day setup and easier outdoor access built into normal life.</p>
              <p>For a lot of buyers, this is less about which city ranks higher and more about whether they want a bigger metro or a more manageable day-to-day setup.</p>
              <p>
                If you're still deciding between the two, it helps to read a more direct{" "}
                <a href="/denver-vs-colorado-springs" className="text-gold underline hover:text-gold-light">
                  Denver vs. Colorado Springs comparison
                </a>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-charcoal text-cream py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2
              className="text-2xl sm:text-3xl font-bold text-cream mb-8"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              FAQ
            </h2>
            <div className="space-y-3">
              {faqContent.map((item, i) => (
                <div
                  key={i}
                  className="border border-cream/10 rounded overflow-hidden"
                >
                  <button
                    className="w-full flex items-center justify-between px-5 py-4 text-left text-cream font-semibold text-base hover:bg-cream/5 transition-colors"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                    aria-expanded={expandedFaq === i}
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 ml-3 transition-transform duration-200 ${expandedFaq === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  {expandedFaq === i && (
                    <div className="px-5 pb-5 text-cream/75 text-sm leading-relaxed">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL THOUGHTS */}
      <section className="bg-cream py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2
              className="text-2xl sm:text-3xl font-bold text-charcoal mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Final Thoughts
            </h2>
            <div className="space-y-5 text-charcoal/80 text-base leading-relaxed">
              <p>Colorado Springs can be a really good move.</p>
              <p>But it usually works best when people go in with a clear picture of what matters most to them. Not just price or square footage, but commute, neighborhood fit, upkeep, and how everyday life is actually going to work once they're here.</p>
              <p>Usually, that's what makes the move feel a lot more straightforward.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOFT CTA */}
      <section className="bg-charcoal text-cream py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2
              className="text-2xl sm:text-3xl font-bold text-cream mb-5"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Ready to Get Clear on the Map?
            </h2>
            <p className="text-cream/75 text-base leading-relaxed mb-4 max-w-xl mx-auto">
              If you're thinking about moving to Colorado Springs, the next step is usually getting clear on the map before you get too far into the house search.
            </p>
            <p className="text-cream/75 text-base leading-relaxed mb-4 max-w-xl mx-auto">
              That means narrowing down the parts of town that fit your budget, your commute, and the kind of home you actually want, then looking at homes inside the right search area.
            </p>
            <p className="text-cream/75 text-base leading-relaxed mb-8 max-w-xl mx-auto">
              If you want help sorting through that, My Rock Realty can help with clear strategy, real-world guidance, and a no-pressure conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton label="Talk to Rob About Colorado Springs" />
              <a
                href="/colorado-springs-co-homes-for-sale"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border border-cream/30 text-cream hover:bg-cream/10 px-7 py-4 text-[15px] sm:text-base no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Browse Colorado Springs Homes
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
