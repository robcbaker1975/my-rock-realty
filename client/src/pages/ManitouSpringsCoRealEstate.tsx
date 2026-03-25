/**
 * Living in Manitou Springs, CO — My Rock Realty
 * Town / community SEO spoke page
 * Slug: /manitou-springs-co-real-estate/
 * Design: Front Range Modern — matches existing site design system
 */
import { useState } from "react";
import SeoHead from "@/components/seo/SeoHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question:
      "Is Manitou Springs more like a neighborhood or more like its own town?",
    answer:
      "More like its own town. That is one of the clearest reasons it stays in the conversation.",
  },
  {
    question: "Is Manitou Springs walkable?",
    answer:
      "Compared with much of the broader Colorado Springs area, yes. Walkability and a compact town pattern are part of the appeal, even though that also comes with tradeoffs like tighter streets and a busier visitor rhythm.",
  },
  {
    question: "What makes Manitou Springs distinct?",
    answer:
      "The clearest difference is that it offers one of the most town-like, character-driven, mountain-edge living options near Colorado Springs.",
  },
  {
    question: "Is Manitou Springs a good fit for buyers who want older homes?",
    answer: "Often, yes. That is one of the main reasons it comes up.",
  },
];

/* ─── Breadcrumb Items ─── */
const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Colorado Springs", url: "/moving-to-colorado-springs/" },
  { label: "Manitou Springs", url: "/manitou-springs-co-real-estate/" },
];

/* ─── FAQ Accordion Item ─── */
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-stone-700">
      <button
        className="w-full flex justify-between items-center py-4 text-left text-cream font-medium hover:text-gold transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 ml-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="pb-4 text-stone-300 text-sm leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

/* ─── Page Component ─── */
export default function ManitouSpringsCoRealEstate() {
  const faqSchema = buildFAQPageSchema(faqContent);

  return (
    <>
      <SeoHead
        metadata={{
          title:
            "Manitou Springs, CO Real Estate | Living in Manitou Springs | My Rock Realty",
          description:
            "Manitou Springs offers one of the most distinct, town-like, mountain-edge living options near Colorado Springs. Here is what the search usually looks like.",
          canonicalUrl:
            "https://myrockhomes.com/manitou-springs-co-real-estate/",
        }}
        schema={[faqSchema]}
      />

      <div className="min-h-screen bg-charcoal text-cream font-body">
        {/* ─── Hero ─── */}
        <section className="relative bg-gradient-to-b from-stone-900 to-charcoal pt-24 pb-16 px-6">
          <div className="max-w-3xl mx-auto">
            <Breadcrumbs items={breadcrumbItems} />
            <motion.h1
              className="font-display text-4xl md:text-5xl text-cream mt-6 mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Living in Manitou Springs, CO: Real Estate, Tradeoffs, and What
              It's Like
            </motion.h1>
            <motion.p
              className="text-stone-300 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Manitou Springs usually comes up when buyers want the move to feel
              more like choosing a town than choosing a neighborhood.
            </motion.p>
          </div>
        </section>

        {/* ─── Main Content ─── */}
        <section className="px-6 py-12">
          <div className="max-w-3xl mx-auto space-y-10">

            {/* Intro */}
            <div className="space-y-4 text-stone-300 leading-relaxed">
              <p>That is a big part of the appeal.</p>
              <p>
                A lot of people get here after they realize they do not just
                want westside Colorado Springs. They want a place that feels
                more distinct, a little more compact, and more tied to the
                mountains from the start.
              </p>
              <p>
                That is usually where Manitou Springs starts to make sense.
              </p>
              <p>
                This is not the page for someone trying to understand all of
                Colorado Springs. The main{" "}
                <a
                  href="/moving-to-colorado-springs/"
                  className="text-gold hover:underline"
                >
                  Colorado Springs relocation page
                </a>{" "}
                already handles that. This page is narrower on purpose.
              </p>
              <p>
                The real question here is simpler:{" "}
                <strong className="text-cream">
                  does Manitou Springs fit the way you want daily life to feel?
                </strong>
              </p>
            </div>

            {/* What Manitou Springs feels like */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-cream">
                What Manitou Springs feels like
              </h2>
              <div className="space-y-4 text-stone-300 leading-relaxed">
                <p>
                  Manitou Springs usually feels more like a place with its own
                  identity than a typical Colorado Springs neighborhood.
                </p>
                <p>That matters.</p>
                <p>
                  It is not really the place most buyers choose for newer homes,
                  a simple apples-to-apples search, or a neighborhood pattern
                  that feels easy to compare from one block to the next. It
                  makes more sense as a smaller-town westside search where
                  buyers are usually choosing character, setting, and distinct
                  feel before they are choosing simplicity.
                </p>
                <p>That is a big part of the draw.</p>
                <p>
                  It is also what separates Manitou Springs from Old Colorado
                  City. Old Colorado City still feels like a Colorado Springs
                  neighborhood. Manitou Springs usually feels more like choosing
                  a town with its own rhythm.
                </p>
              </div>
            </div>

            {/* Why Manitou Springs stays in the conversation */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-cream">
                Why Manitou Springs stays in the conversation
              </h2>
              <div className="space-y-4 text-stone-300 leading-relaxed">
                <p>
                  Manitou Springs usually stays in the conversation because it
                  gives buyers a version of life near Colorado Springs that
                  feels more distinct from the beginning.
                </p>
                <p>For the right buyer, that is exactly the point.</p>
                <p>
                  Some people want the town itself to feel like part of the
                  decision. They want a place where the streets, the setting,
                  and the overall pace feel recognizably different from the rest
                  of the city.
                </p>
                <p>That is where Manitou Springs works well.</p>
                <p>
                  The town's public-facing identity reinforces that. Official
                  area guides describe Manitou Springs as tucked between Garden
                  of the Gods and Pikes Peak, which helps explain why it feels
                  more distinct from the start than a standard residential
                  district. The Cog Railway and Cave of the Winds also reinforce
                  that mountain-edge identity in a way buyers tend to understand
                  pretty quickly.
                </p>
              </div>
            </div>

            {/* Who Manitou Springs tends to fit */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-cream">
                Who Manitou Springs tends to fit
              </h2>
              <div className="space-y-4 text-stone-300 leading-relaxed">
                <p>
                  Manitou Springs usually makes the most sense for buyers who
                  want:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>a stronger small-town feel</li>
                  <li>a more distinct westside identity</li>
                  <li>older homes and more property variation</li>
                  <li>a location where setting matters as much as the house</li>
                  <li>
                    a move that feels less like standard Colorado Springs living
                  </li>
                </ul>
                <p>
                  This is often where people land when they want the move to
                  feel more personal and a little less conventional.
                </p>
                <p>That matters more than people expect.</p>
                <p>
                  A lot of buyers who end up here are not chasing the easiest
                  version of the search. They are trying to find a place that
                  feels clearly different.
                </p>
              </div>
            </div>

            {/* Who may not love Manitou Springs */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-cream">
                Who may not love Manitou Springs
              </h2>
              <div className="space-y-4 text-stone-300 leading-relaxed">
                <p>Manitou Springs is not the best fit for everyone.</p>
                <p>
                  If you want a straightforward search, easier parking, simpler
                  access, newer homes, or a neighborhood pattern that feels more
                  predictable from one block to the next, Manitou Springs can
                  start to feel like a lot.
                </p>
                <p>
                  If you want westside character but still want to stay inside a
                  more standard Colorado Springs neighborhood conversation, Old
                  Colorado City may fit better. If you want a more historic
                  residential feel without the same small-town energy, Old North
                  End may fit better. If you want newer homes and easier
                  comparison, Banning Lewis Ranch may fit better.
                </p>
                <p>That does not make Manitou Springs weak.</p>
                <p>
                  It just means the upside and the tradeoff are tied together.
                </p>
                <p>
                  The same identity that makes it appealing can also make the
                  search more property-specific, less tidy, and a little less
                  predictable than buyers first expect.
                </p>
              </div>
            </div>

            {/* What the home search usually turns into */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-cream">
                What the home search usually turns into
              </h2>
              <div className="space-y-4 text-stone-300 leading-relaxed">
                <p>
                  A Manitou Springs search usually gets specific pretty quickly.
                </p>
                <p>
                  Usually, that is because the buyer is trying to solve one main
                  question:{" "}
                  <strong className="text-cream">
                    do they want more town identity, more mountain-edge feel,
                    and more distinction — or do they want the move to feel
                    easier, roomier, or more predictable?
                  </strong>
                </p>
                <p>That is where the real comparisons come in:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>
                    <strong className="text-cream">Manitou Springs</strong> for
                    a more distinct town feel and stronger mountain-town energy
                  </li>
                  <li>
                    <strong className="text-cream">Old Colorado City</strong>{" "}
                    when the buyer wants westside character but still wants to
                    stay more clearly inside Colorado Springs
                  </li>
                  <li>
                    <strong className="text-cream">Old North End</strong> when
                    the buyer wants older homes and character in a more
                    residential central setting
                  </li>
                  <li>
                    <strong className="text-cream">
                      Broadmoor / Cheyenne Mountain
                    </strong>{" "}
                    when the buyer wants more established residential polish
                    without the same small-town feel
                  </li>
                  <li>
                    <strong className="text-cream">
                      Briargate / Northgate / Banning Lewis Ranch
                    </strong>{" "}
                    when the buyer realizes they still want more predictability
                    and easier comparison than they first thought
                  </li>
                </ul>
                <p>
                  That is why Manitou Springs matters in the cluster.
                </p>
                <p>
                  It gives buyers one of the clearest versions of a town-first
                  move near Colorado Springs.
                </p>
              </div>
            </div>

            {/* The tradeoffs are the whole point */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-cream">
                The tradeoffs are the whole point
              </h2>
              <div className="space-y-4 text-stone-300 leading-relaxed">
                <p>
                  Manitou Springs usually works best when the buyer values
                  identity, setting, and town feel more than convenience and
                  predictability.
                </p>
                <p>That is the upside.</p>
                <p>
                  The tradeoff is that the search can feel less tidy. Homes
                  vary more. Streets vary more. The day-to-day rhythm is not as
                  straightforward as it is in more standard parts of Colorado
                  Springs.
                </p>
                <p>That is what separates it from Old Colorado City.</p>
                <p>
                  Old Colorado City usually feels more like a neighborhood with
                  a strong district. Manitou Springs usually feels more like a
                  town with its own pull.
                </p>
                <p>
                  That is also what separates it from newer planned areas.
                </p>
                <p>
                  Newer parts of the market usually feel easier to compare.
                  Manitou Springs usually feels more personal and more specific.
                </p>
                <p>That may not sound exciting. But it is real.</p>
              </div>
            </div>

            {/* Manitou Springs vs nearby alternatives */}
            <div className="space-y-6">
              <h2 className="font-display text-2xl text-cream">
                Manitou Springs vs nearby alternatives
              </h2>

              <div className="space-y-4">
                <h3 className="font-display text-xl text-gold">
                  Manitou Springs vs Old Colorado City
                </h3>
                <div className="space-y-3 text-stone-300 leading-relaxed">
                  <p>
                    Old Colorado City usually makes more sense when someone
                    wants westside character with more visible restaurants,
                    shops, and walkability but still wants to stay inside the
                    Colorado Springs neighborhood conversation.
                  </p>
                  <p>
                    Manitou Springs usually makes more sense when someone wants
                    a stronger small-town feel and a place that feels more
                    separate.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-display text-xl text-gold">
                  Manitou Springs vs Old North End
                </h3>
                <div className="space-y-3 text-stone-300 leading-relaxed">
                  <p>
                    Old North End usually makes more sense when someone wants a
                    more historic residential neighborhood in a central
                    location.
                  </p>
                  <p>
                    Manitou Springs usually makes more sense when someone wants
                    more town identity and a stronger mountain-edge feel.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-display text-xl text-gold">
                  Manitou Springs vs Broadmoor / Cheyenne Mountain
                </h3>
                <div className="space-y-3 text-stone-300 leading-relaxed">
                  <p>
                    Broadmoor / Cheyenne Mountain usually makes more sense when
                    someone wants a more established residential setting and a
                    more polished day-to-day feel.
                  </p>
                  <p>
                    Manitou Springs usually makes more sense when someone wants
                    more distinct identity and a less conventional search.
                  </p>
                </div>
              </div>
            </div>

            {/* What people tend to underestimate */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-cream">
                What people tend to underestimate about Manitou Springs
              </h2>
              <div className="space-y-4 text-stone-300 leading-relaxed">
                <p>
                  A lot of buyers underestimate how much the town itself does
                  the work here.
                </p>
                <p>
                  On paper, Manitou Springs can look like one more westside
                  option near Colorado Springs.
                </p>
                <p>
                  In practice, it tends to stay in the conversation because it
                  feels more distinct than that. The locally owned feel, the
                  mountain access, the historic identity, and the compact town
                  pattern all reinforce that difference.
                </p>
                <p>The flip side is just as real.</p>
                <p>
                  If what you really want is a cleaner, easier-to-compare
                  search, Manitou Springs can start to feel like more variation
                  than you wanted.
                </p>
              </div>
            </div>

            {/* Is Manitou Springs better for buying now or renting first? */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-cream">
                Is Manitou Springs better for buying now or renting first?
              </h2>
              <div className="space-y-4 text-stone-300 leading-relaxed">
                <p>Sometimes renting first makes a lot of sense here.</p>
                <p>
                  Manitou Springs is one of those places where the area can
                  feel right before a specific house does.
                </p>
                <p>
                  If you already know you want the town feel, feel good about
                  older housing stock, and like the tradeoffs that come with a
                  more mixed property-by-property search, buying here can still
                  make a lot of sense.
                </p>
                <p>
                  But compared with more standard parts of the market, this is
                  one of the places where spending real time in the town can
                  help before committing.
                </p>
              </div>
            </div>

            {/* FAQ */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-cream">
                FAQ about living in Manitou Springs
              </h2>
              <div className="divide-y divide-stone-700">
                {faqContent.map((item) => (
                  <FAQItem
                    key={item.question}
                    question={item.question}
                    answer={item.answer}
                  />
                ))}
              </div>
            </div>

            {/* Final thoughts */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-cream">
                Final thoughts
              </h2>
              <div className="space-y-4 text-stone-300 leading-relaxed">
                <p>
                  Manitou Springs is usually not the page for someone trying to
                  find the easiest or most predictable version of the move.
                </p>
                <p>
                  It is the page for someone trying to decide whether a more
                  distinct, small-town, mountain-edge version of living near
                  Colorado Springs is the better fit.
                </p>
                <p>For the right buyer, that is exactly why it works.</p>
                <p>
                  Manitou Springs can make the move feel more personal, more
                  memorable, and more connected to place from the start.
                </p>
                <p>
                  For the wrong buyer, it can feel a little too tight, a little
                  too mixed, or a little less straightforward than they wanted.
                </p>
                <p>
                  That is why the real question is not whether Manitou Springs
                  is good.
                </p>
                <p>
                  It is whether Manitou Springs fits the way you actually want
                  to live.
                </p>
                <p>
                  If you are trying to sort out Manitou Springs versus Old
                  Colorado City, Old North End, Broadmoor / Cheyenne Mountain,
                  or the broader Colorado Springs map, My Rock Realty can help
                  you narrow that down before you get too attached to a specific
                  house.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-stone-800 rounded-lg p-8 text-center space-y-4">
              <h2 className="font-display text-2xl text-cream">
                Ready to explore Manitou Springs?
              </h2>
              <p className="text-stone-300">
                My Rock Realty can help you figure out whether Manitou Springs
                fits your search — or whether another part of the Colorado
                Springs area makes more sense.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <a
                  href="/#contact"
                  className="inline-block bg-gold text-charcoal font-semibold px-6 py-3 rounded hover:bg-yellow-400 transition-colors"
                >
                  Talk to Rob Baker
                </a>
                <a
                  href="/colorado-springs-co-homes-for-sale"
                  className="inline-block border border-gold text-gold font-semibold px-6 py-3 rounded hover:bg-gold hover:text-charcoal transition-colors"
                >
                  Search Colorado Springs Homes
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Footer ─── */}
        <footer className="border-t border-stone-700 px-6 py-8 mt-8">
          <div className="max-w-3xl mx-auto text-center text-stone-500 text-sm space-y-2">
            <p>
              © {new Date().getFullYear()} My Rock Realty · Rob Baker,
              Broker/Owner
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="/privacy" className="hover:text-gold transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-gold transition-colors">
                Terms of Use
              </a>
              <a
                href="/fair-housing"
                className="hover:text-gold transition-colors"
              >
                Fair Housing
              </a>
              <a
                href="/accessibility"
                className="hover:text-gold transition-colors"
              >
                Accessibility
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
