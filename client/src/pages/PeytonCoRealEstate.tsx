/**
 * Living in Peyton, CO — My Rock Realty
 * Town / community SEO spoke page
 * Slug: /peyton-co-real-estate/
 * Design: Front Range Modern — matches existing site design system
 */
import { useState } from "react";
import SeoHead from "@/components/seo/SeoHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import BuyingBuddyWidget from "@/components/BuyingBuddyWidget";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "Is Peyton more like Falcon or more like Black Forest?",
    answer:
      "Usually it sits between them. Falcon often feels easier to read and more tied to subdivisions. Black Forest often feels more tied to trees, privacy, and setting. Peyton usually feels more open and more room-first than either one.",
  },
  {
    question: "Is Peyton part of Colorado Springs?",
    answer:
      "It is part of the broader Colorado Springs market conversation, but it does not usually feel like a standard Colorado Springs neighborhood decision.",
  },
  {
    question: "What makes Peyton distinct?",
    answer:
      "The clearest difference is that it gives buyers one of the roomier, more spread-out east-side searches near Colorado Springs without asking them to buy into a more wooded setting like Black Forest.",
  },
  {
    question: "Is Peyton a good fit for buyers who want more land?",
    answer: "Often, yes. That is one of the main reasons it comes up.",
  },
];

/* ─── Breadcrumb Items ─── */
const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Colorado Springs", url: "/moving-to-colorado-springs/" },
  { label: "Peyton", url: "/peyton-co-real-estate/" },
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
export default function PeytonCoRealEstate() {
  const faqSchema = buildFAQPageSchema(faqContent);

  return (
    <>
      <SeoHead
        metadata={{
          title:
            "Peyton, CO Real Estate | Living in Peyton | My Rock Realty",
          description:
            "Peyton gives buyers one of the roomier, more spread-out east-side searches near Colorado Springs. Here is what the search usually looks like.",
          canonicalUrl:
            "https://myrockhomes.com/peyton-co-real-estate/",
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
              Living in Peyton, CO: Real Estate, Tradeoffs, and What It's Like
            </motion.h1>
            <motion.p
              className="text-stone-300 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Peyton usually comes up when buyers want more room and are willing
              to give up some convenience to get it.
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
                A lot of people get here after they realize they do not need the
                move to feel close in, polished, or easy to compare from one
                block to the next. They want more space, more separation, and a
                search that feels a little less compressed than most of Colorado
                Springs.
              </p>
              <p>That is usually where Peyton starts to make sense.</p>
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
                  does Peyton fit the way you want daily life and space to work?
                </strong>
              </p>
            </div>

            {/* What Peyton feels like */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-cream">
                What Peyton feels like
              </h2>
              <div className="space-y-4 text-stone-300 leading-relaxed">
                <p>Peyton usually feels more spread out than polished.</p>
                <p>That matters.</p>
                <p>
                  It is not really the place most buyers choose for a strong
                  town center, a highly uniform search, or a neighborhood
                  pattern that feels easy to read from one street to the next.
                  It makes more sense as an east-of-Colorado-Springs search
                  where buyers are usually choosing more room, larger lots, and
                  a less crowded feel before they are choosing convenience.
                </p>
                <p>That is a big part of the draw.</p>
                <p>
                  It is also what separates Peyton from Falcon. Falcon usually
                  feels a little easier to sort through and a little more tied
                  to subdivisions, schools, and everyday practicality. Peyton
                  usually feels looser and more spread out.
                </p>
              </div>
            </div>

            {/* Why Peyton stays in the conversation */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-cream">
                Why Peyton stays in the conversation
              </h2>
              <div className="space-y-4 text-stone-300 leading-relaxed">
                <p>
                  Peyton usually stays in the conversation because it gives
                  buyers a version of the move that feels roomier from the
                  start.
                </p>
                <p>For the right buyer, that is exactly the point.</p>
                <p>
                  Some people want more breathing room without needing the tree
                  cover and property feel of Black Forest. Others want more
                  space than Falcon gives them without needing the move to feel
                  like a neighborhood-first search.
                </p>
                <p>That is where Peyton works well.</p>
              </div>
            </div>

            {/* Who Peyton tends to fit */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-cream">
                Who Peyton tends to fit
              </h2>
              <div className="space-y-4 text-stone-300 leading-relaxed">
                <p>
                  Peyton usually makes the most sense for buyers who want:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>
                    more room than a typical Colorado Springs neighborhood gives
                    them
                  </li>
                  <li>a more open east-side feel</li>
                  <li>larger lots or more separation between homes</li>
                  <li>a search where space matters more than polish</li>
                  <li>a move that feels less dense and less compressed</li>
                </ul>
                <p>
                  This is often where people land when they want the Colorado
                  Springs area to feel bigger.
                </p>
                <p>That matters more than people expect.</p>
                <p>
                  A lot of buyers who end up here are not chasing the most
                  character-filled part of the market. They are trying to find
                  one of the clearest "more room" options on the east side.
                </p>
              </div>
            </div>

            {/* Who may not love Peyton */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-cream">
                Who may not love Peyton
              </h2>
              <div className="space-y-4 text-stone-300 leading-relaxed">
                <p>Peyton is not the best fit for everyone.</p>
                <p>
                  If you want a cleaner, easier-to-compare search, quicker
                  access to more services, or a stronger neighborhood pattern,
                  Peyton can start to feel a little too spread out.
                </p>
                <p>
                  If you want something that feels more practical and easier to
                  sort through, Falcon may fit better. If you want more trees
                  and a stronger property-and-setting feel, Black Forest may fit
                  better. If you want a more standard Colorado Springs
                  neighborhood conversation, Briargate, Northgate, or Banning
                  Lewis Ranch may fit better.
                </p>
                <p>That does not make Peyton weak.</p>
                <p>
                  It just means the upside and the tradeoff are tied together.
                </p>
                <p>
                  The same space that makes Peyton attractive can also make the
                  day-to-day feel less convenient and less predictable than some
                  buyers expect.
                </p>
              </div>
            </div>

            {/* What the home search usually turns into */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-cream">
                What the home search usually turns into
              </h2>
              <div className="space-y-4 text-stone-300 leading-relaxed">
                <p>A Peyton search usually gets specific pretty quickly.</p>
                <p>
                  Usually, that is because the buyer is trying to solve one main
                  question:{" "}
                  <strong className="text-cream">
                    do they want more room, more land, and more separation — or
                    do they want the move to feel easier, closer in, or more
                    organized?
                  </strong>
                </p>
                <p>That is where the real comparisons come in:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>
                    <strong className="text-cream">Peyton</strong> for more
                    space and a looser east-side search
                  </li>
                  <li>
                    <strong className="text-cream">Falcon</strong> for a more
                    practical and easier-to-read east-side pattern
                  </li>
                  <li>
                    <strong className="text-cream">Black Forest</strong> for
                    more trees, more privacy, and a stronger property feel
                  </li>
                  <li>
                    <strong className="text-cream">Banning Lewis Ranch</strong>{" "}
                    when the buyer realizes they still want a neighborhood-based
                    move
                  </li>
                  <li>
                    <strong className="text-cream">
                      Monument or Manitou Springs
                    </strong>{" "}
                    only when the search shifts toward a more town-identity
                    question
                  </li>
                </ul>
                <p>That is why Peyton matters in the cluster.</p>
                <p>
                  It gives buyers one of the clearest versions of an east-side,
                  room-first move near Colorado Springs.
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
                  Peyton usually works best when the buyer values space and
                  flexibility more than convenience and polish.
                </p>
                <p>That is the upside.</p>
                <p>
                  The tradeoff is that the search can feel less tidy. Properties
                  vary more. The day-to-day rhythm is not as compact or as easy
                  as it is in tighter parts of the market.
                </p>
                <p>That is what separates it from Falcon.</p>
                <p>
                  Falcon usually feels a little more organized and a little
                  easier to compare. Peyton usually feels more spread out and
                  more tied to the land itself.
                </p>
                <p>That is also what separates it from Black Forest.</p>
                <p>
                  Black Forest often feels more about trees, privacy, and
                  setting. Peyton usually feels more open, with room being the
                  main point rather than scenery.
                </p>
                <p>That may not sound exciting. But it is real.</p>
              </div>
            </div>

            {/* Peyton vs nearby alternatives */}
            <div className="space-y-6">
              <h2 className="font-display text-2xl text-cream">
                Peyton vs nearby alternatives
              </h2>

              <div className="space-y-4">
                <h3 className="font-display text-xl text-gold">
                  Peyton vs Falcon
                </h3>
                <div className="space-y-3 text-stone-300 leading-relaxed">
                  <p>
                    Falcon usually makes more sense when someone wants east-side
                    living that still feels relatively easy to read and compare.
                  </p>
                  <p>
                    Peyton usually makes more sense when someone wants more room
                    and is comfortable with the move feeling a little more
                    spread out.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-display text-xl text-gold">
                  Peyton vs Black Forest
                </h3>
                <div className="space-y-3 text-stone-300 leading-relaxed">
                  <p>
                    Black Forest usually makes more sense when someone wants
                    more trees, more privacy, and a stronger
                    property-and-setting feel.
                  </p>
                  <p>
                    Peyton usually makes more sense when someone wants space
                    without needing the same wooded identity.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-display text-xl text-gold">
                  Peyton vs Banning Lewis Ranch
                </h3>
                <div className="space-y-3 text-stone-300 leading-relaxed">
                  <p>
                    Banning Lewis Ranch usually makes more sense when someone
                    wants newer homes and a more planned neighborhood pattern.
                  </p>
                  <p>
                    Peyton usually makes more sense when someone wants more room
                    and less of a neighborhood-first feel.
                  </p>
                </div>
              </div>
            </div>

            {/* What people tend to underestimate */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-cream">
                What people tend to underestimate about Peyton
              </h2>
              <div className="space-y-4 text-stone-300 leading-relaxed">
                <p>
                  A lot of buyers underestimate how much the openness does the
                  work here.
                </p>
                <p>
                  On paper, Peyton can look like one more east-side option.
                </p>
                <p>
                  In practice, it tends to stay in the conversation because it
                  feels roomier and less compressed. The spacing, the lot
                  patterns, and the sense that you are a little farther out all
                  shape the decision in a real way.
                </p>
                <p>The flip side is just as real.</p>
                <p>
                  If what you really want is a cleaner, easier-to-understand
                  search, Peyton can start to feel like more spread and more
                  variation than you wanted.
                </p>
              </div>
            </div>

            {/* Is Peyton better for buying now or renting first? */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-cream">
                Is Peyton better for buying now or renting first?
              </h2>
              <div className="space-y-4 text-stone-300 leading-relaxed">
                <p>Sometimes buying first makes a lot of sense here.</p>
                <p>
                  Peyton is one of those places where the core question is
                  usually pretty clear. If you know you want more room, feel
                  good about being farther east, and understand that the search
                  will be more spread out, buying can make a lot of sense.
                </p>
                <p>
                  If you are still deciding between Peyton, Falcon, Black
                  Forest, or a more neighborhood-based move, renting first can
                  still help. But compared with some other areas, Peyton is
                  often one of the places where buyers know fairly quickly
                  whether the amount of space is worth the tradeoffs.
                </p>
              </div>
            </div>

            {/* Search CTA */}
            <div className="space-y-4 bg-stone-800/50 rounded-lg p-6">
              <h2 className="font-display text-2xl text-cream">Search Peyton homes</h2>
              <p className="text-stone-300">See active listings in Peyton and narrow the search from there.</p>
              <a
                href="/listing-results?searchParams%5Bcity%5D=Peyton"
                className="inline-block bg-amber-600 hover:bg-amber-500 text-stone-900 font-semibold px-6 py-3 rounded transition-colors"
              >
                Open Peyton home search
              </a>
            </div>

            {/* FAQ */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-cream">
                FAQ about living in Peyton
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

            {/* Featured Listings */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-cream">Featured Peyton Listings</h2>
              <BuyingBuddyWidget
                type="FeaturedGallery"
                filter="carousel:true+shapesearch:39.0300 -104.5600,39.0300 -104.4100,38.8600 -104.4100,38.8600 -104.5600,39.0300 -104.5600+mls_id:ppar+listing_status:active,coming-soon+order:create_dt desc"
              />
            </div>

            {/* Final thoughts */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-cream">
                Final thoughts
              </h2>
              <div className="space-y-4 text-stone-300 leading-relaxed">
                <p>
                  Peyton is usually not the page for someone trying to find the
                  easiest or most polished version of the move.
                </p>
                <p>
                  It is the page for someone trying to decide whether a roomier,
                  more spread-out, east-side version of living near Colorado
                  Springs is the better fit.
                </p>
                <p>For the right buyer, that is exactly why it works.</p>
                <p>
                  Peyton can make the move feel less compressed, more flexible,
                  and more open from the start.
                </p>
                <p>
                  For the wrong buyer, it can feel a little too spread out, a
                  little too variable, or a little less convenient than they
                  wanted.
                </p>
                <p>
                  That is why the real question is not whether Peyton is good.
                </p>
                <p>
                  It is whether Peyton fits the way you actually want to live.
                </p>
                <p>
                  If you are trying to sort out Peyton versus Falcon, Black
                  Forest, Banning Lewis Ranch, or the broader Colorado Springs
                  map, My Rock Realty can help you narrow that down before you
                  get too attached to a specific property.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-stone-800 rounded-lg p-8 text-center space-y-4">
              <h2 className="font-display text-2xl text-cream">
                Ready to explore Peyton?
              </h2>
              <p className="text-stone-300">
                My Rock Realty can help you figure out whether Peyton fits your
                search — or whether another part of the Colorado Springs area
                makes more sense.
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
