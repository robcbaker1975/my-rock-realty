/**
 * Living in Old Colorado City, Colorado Springs — My Rock Realty
 * Premium neighborhood SEO page
 * Slug: /old-colorado-city-colorado-springs-real-estate/
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
      "Is Old Colorado City more like a neighborhood or more like a separate town?",
    answer:
      "It is still a Colorado Springs neighborhood decision, but it tends to feel more distinct than a lot of other neighborhoods because the area has a visible center and a stronger westside identity.",
  },
  {
    question: "Is Old Colorado City walkable?",
    answer:
      "Compared with a lot of Colorado Springs, yes. That is one of the reasons it stays in the conversation. The area is well known for its walkable blocks, local shops, and restaurants.",
  },
  {
    question: "What makes Old Colorado City distinct?",
    answer:
      "The clearest difference is that it offers one of the more established, walkable, character-driven neighborhood searches in Colorado Springs.",
  },
  {
    question: "Is Old Colorado City a good fit for buyers who want older homes?",
    answer: "Often, yes. That is one of the main reasons it comes up.",
  },
];

/* ─── Breadcrumb Items ─── */
const breadcrumbItems = [
  { label: "Home", href: "/" },
  {
    label: "Colorado Springs",
    href: "/moving-to-colorado-springs/",
  },
  {
    label: "Old Colorado City",
    href: "/old-colorado-city-colorado-springs-real-estate/",
  },
];

/* ─── FAQ Accordion Item ─── */
function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
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
export default function OldColoradoCityColoradoSpringsRealEstate() {
  const pageTitle =
    "Old Colorado City, Colorado Springs Real Estate | My Rock Realty";
  const pageDescription =
    "Old Colorado City offers one of the more established, walkable, character-driven neighborhood searches in Colorado Springs. Here is what the search usually looks like.";
  const canonicalUrl =
    "https://myrockhomes.com/old-colorado-city-colorado-springs-real-estate/";

  const faqSchema = buildFAQPageSchema(faqContent);

  return (
    <>
      <SeoHead
        metadata={{
          title: pageTitle,
          description: pageDescription,
          canonicalUrl: canonicalUrl,
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
              Living in Old Colorado City, Colorado Springs: Real Estate,
              Tradeoffs, and What It's Like
            </motion.h1>
            <motion.p
              className="text-stone-300 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Old Colorado City usually comes up when buyers want the
              neighborhood itself to carry more of the experience.
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
                A lot of people get here after they realize they do not want the
                easiest search or the newest part of town. They want a place
                that feels more established, more walkable, and more rooted in
                the westside of Colorado Springs.
              </p>
              <p>That is usually where Old Colorado City starts to make sense.</p>
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
                  does Old Colorado City fit the way you want Colorado Springs
                  to feel day to day?
                </strong>
              </p>
            </div>

            {/* What Old Colorado City feels like */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-cream">
                What Old Colorado City feels like
              </h2>
              <div className="space-y-4 text-stone-300 leading-relaxed">
                <p>
                  Old Colorado City usually feels more like a real neighborhood
                  than a polished product.
                </p>
                <p>That matters.</p>
                <p>
                  It is not really the place most buyers choose for newer homes,
                  a highly uniform map, or a search that feels easy to compare
                  from one block to the next. It makes more sense as a westside
                  Colorado Springs search where buyers are usually choosing
                  walkability, older homes, and neighborhood character before
                  they are choosing simplicity.
                </p>
                <p>That is a big part of the draw.</p>
                <p>
                  It is also what separates Old Colorado City from newer
                  east-side and north-side pages. Old Colorado City tends to
                  feel more lived in, more varied, and a little less curated
                  from the beginning.
                </p>
              </div>
            </div>

            {/* Why Old Colorado City stays in the conversation */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-cream">
                Why Old Colorado City stays in the conversation
              </h2>
              <div className="space-y-4 text-stone-300 leading-relaxed">
                <p>
                  Old Colorado City usually stays in the conversation because it
                  gives buyers a version of Colorado Springs that feels older,
                  closer in, and easier to connect with emotionally.
                </p>
                <p>For the right buyer, that is exactly the point.</p>
                <p>
                  Some people want the neighborhood itself to feel like part of
                  the draw. They want the blocks to feel a little less
                  interchangeable. They want to be able to walk to something,
                  recognize the main streets, and feel like the area has a
                  center of gravity.
                </p>
                <p>That is where Old Colorado City works well.</p>
              </div>
            </div>

            {/* Who Old Colorado City tends to fit */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-cream">
                Who Old Colorado City tends to fit
              </h2>
              <div className="space-y-4 text-stone-300 leading-relaxed">
                <p>
                  Old Colorado City usually makes the most sense for buyers who
                  want:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>an established westside feel</li>
                  <li>older homes and more neighborhood variation</li>
                  <li>
                    some walkability and a more recognizable main-street pattern
                  </li>
                  <li>
                    a search where character matters as much as the house itself
                  </li>
                  <li>
                    a part of Colorado Springs that feels less planned and less
                    generic
                  </li>
                </ul>
                <p>
                  This is often where people land when they want the move to
                  feel more personal.
                </p>
                <p>That matters more than people expect.</p>
                <p>
                  A lot of buyers who end up here are not chasing the easiest
                  version of Colorado Springs. They are trying to find a part of
                  town that feels like it already has its own identity.
                </p>
              </div>
            </div>

            {/* Who may not love Old Colorado City */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-cream">
                Who may not love Old Colorado City
              </h2>
              <div className="space-y-4 text-stone-300 leading-relaxed">
                <p>Old Colorado City is not the best fit for everyone.</p>
                <p>
                  If you want newer homes, a cleaner apples-to-apples search,
                  more consistency from street to street, or a more predictable
                  neighborhood pattern, Old Colorado City can start to feel a
                  little too mixed.
                </p>
                <p>
                  If you want the north side to feel easier, Briargate or
                  Northgate may fit better. If you want newer east-side homes
                  and a more planned community structure, Banning Lewis Ranch
                  may fit better. If you want a separate town decision with even
                  more westside mountain-town pull, Manitou Springs may come up
                  too.
                </p>
                <p>That does not make Old Colorado City weak.</p>
                <p>It just means the upside and the tradeoff are tied together.</p>
                <p>
                  The same character that makes it appealing can also make the
                  search more property-specific and a little less
                  straightforward.
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
                  An Old Colorado City search usually gets specific pretty
                  quickly.
                </p>
                <p>
                  Usually, that is because the buyer is trying to solve one main
                  question:{" "}
                  <strong className="text-cream">
                    do they want more character, more walkability, and more
                    westside feel — or do they want the move to feel easier,
                    newer, or more predictable?
                  </strong>
                </p>
                <p>That is where the real comparisons come in:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>
                    <strong className="text-cream">Old Colorado City</strong>{" "}
                    for a more established, walkable, westside search
                  </li>
                  <li>
                    <strong className="text-cream">Manitou Springs</strong> when
                    the buyer wants an even stronger small-town / mountain-town
                    feel
                  </li>
                  <li>
                    <strong className="text-cream">
                      Downtown-adjacent or central neighborhoods
                    </strong>{" "}
                    when the buyer wants older character but not necessarily the
                    same westside identity
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
                  That is why Old Colorado City matters in the cluster.
                </p>
                <p>
                  It gives buyers one of the clearest versions of older,
                  walkable Colorado Springs living.
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
                  Old Colorado City usually works best when the buyer values
                  character, walkability, and neighborhood feel more than
                  simplicity and uniformity.
                </p>
                <p>That is the upside.</p>
                <p>
                  The tradeoff is that the search can feel less tidy. The
                  housing stock is more mixed. The lots, home styles, updates,
                  and day-to-day feel can vary more than they do in newer
                  planned areas.
                </p>
                <p>That is what separates it from Banning Lewis Ranch.</p>
                <p>
                  Banning Lewis Ranch usually feels newer and easier to compare.
                  Old Colorado City usually feels older, more varied, and more
                  tied to the block and the house itself.
                </p>
                <p>That is also what separates it from Briargate.</p>
                <p>
                  Briargate often feels more straightforward. Old Colorado City
                  usually feels more specific.
                </p>
                <p>
                  That may not sound exciting. But it is real.
                </p>
              </div>
            </div>

            {/* Old Colorado City vs nearby alternatives */}
            <div className="space-y-6">
              <h2 className="font-display text-2xl text-cream">
                Old Colorado City vs nearby alternatives
              </h2>

              <div className="space-y-4">
                <h3 className="font-display text-xl text-gold">
                  Old Colorado City vs Manitou Springs
                </h3>
                <div className="space-y-3 text-stone-300 leading-relaxed">
                  <p>
                    Manitou Springs usually makes more sense when someone wants
                    a stronger small-town feel, a more obvious mountain-town
                    personality, or a move that feels even more separate from
                    the rest of Colorado Springs.
                  </p>
                  <p>
                    Old Colorado City usually makes more sense when someone
                    wants westside character without fully leaving the city
                    neighborhood conversation.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-display text-xl text-gold">
                  Old Colorado City vs Briargate
                </h3>
                <div className="space-y-3 text-stone-300 leading-relaxed">
                  <p>
                    Briargate usually makes more sense when someone wants a more
                    established but still easier-to-read suburban pattern.
                  </p>
                  <p>
                    Old Colorado City usually makes more sense when someone
                    wants more walkability, more variation, and a stronger sense
                    of neighborhood character.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-display text-xl text-gold">
                  Old Colorado City vs Banning Lewis Ranch
                </h3>
                <div className="space-y-3 text-stone-300 leading-relaxed">
                  <p>
                    Banning Lewis Ranch usually makes more sense when someone
                    wants newer homes and a more planned community pattern.
                  </p>
                  <p>
                    Old Colorado City usually makes more sense when someone
                    wants older homes, more variation, and a more rooted
                    neighborhood feel.
                  </p>
                </div>
              </div>
            </div>

            {/* What people tend to underestimate */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-cream">
                What people tend to underestimate about Old Colorado City
              </h2>
              <div className="space-y-4 text-stone-300 leading-relaxed">
                <p>
                  A lot of buyers underestimate how much the neighborhood itself
                  drives the decision here.
                </p>
                <p>
                  On paper, Old Colorado City can look like one more older part
                  of Colorado Springs.
                </p>
                <p>
                  In practice, it tends to stay in the conversation because it
                  feels easier to picture living there. Walkable blocks,
                  restaurants, shops, and a visible main-street pattern all help
                  with that.
                </p>
                <p>The flip side is just as real.</p>
                <p>
                  If what you really want is a cleaner, easier-to-compare
                  search, Old Colorado City can start to feel like more
                  variation than you wanted.
                </p>
              </div>
            </div>

            {/* Is Old Colorado City better for buying now or renting first? */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-cream">
                Is Old Colorado City better for buying now or renting first?
              </h2>
              <div className="space-y-4 text-stone-300 leading-relaxed">
                <p>Sometimes renting first makes a lot of sense here.</p>
                <p>
                  Old Colorado City is one of those places where the area can
                  feel right before a specific house does.
                </p>
                <p>
                  If you already know you want westside character, feel good
                  about older housing stock, and like the tradeoffs that come
                  with a more mixed neighborhood pattern, buying here can still
                  make a lot of sense.
                </p>
                <p>
                  But compared with some more uniform parts of Colorado Springs,
                  this is one of the places where seeing the area in person and
                  understanding the block-by-block feel can help.
                </p>
              </div>
            </div>

            {/* FAQ */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-cream">
                FAQ about living in Old Colorado City
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
                  Old Colorado City is usually not the page for someone trying
                  to find the easiest or newest version of Colorado Springs.
                </p>
                <p>
                  It is the page for someone trying to decide whether a more
                  established, walkable, westside version of the move is the
                  better fit.
                </p>
                <p>For the right buyer, that is exactly why it works.</p>
                <p>
                  Old Colorado City can make the Colorado Springs search feel
                  more personal, more rooted, and easier to connect with.
                </p>
                <p>
                  For the wrong buyer, it can feel a little too mixed, a little
                  too property-specific, or a little less predictable than they
                  wanted.
                </p>
                <p>
                  That is why the real question is not whether Old Colorado City
                  is good.
                </p>
                <p>
                  It is whether Old Colorado City fits the way you actually want
                  to live.
                </p>
                <p>
                  If you are trying to sort out Old Colorado City versus Manitou
                  Springs, Briargate, Banning Lewis Ranch, or the broader
                  Colorado Springs map, My Rock Realty can help you narrow that
                  down before you get too attached to a specific house.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-stone-800 rounded-lg p-8 text-center space-y-4">
              <h2 className="font-display text-2xl text-cream">
                Ready to explore Old Colorado City?
              </h2>
              <p className="text-stone-300">
                My Rock Realty can help you figure out whether Old Colorado City
                fits your search — or whether another part of Colorado Springs
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
              © {new Date().getFullYear()} My Rock Realty · Rob Baker, Broker/Owner
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
