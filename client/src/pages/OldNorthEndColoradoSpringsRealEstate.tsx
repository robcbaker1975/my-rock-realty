/**
 * Living in Old North End, Colorado Springs — My Rock Realty
 * Premium neighborhood SEO page
 * Slug: /old-north-end-colorado-springs-real-estate/
 * Design: Front Range Modern — matches existing site design system
 */
import { useState } from "react";
import SeoHead from "@/components/seo/SeoHead";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question:
      "Is Old North End more like a neighborhood or more like a historic district?",
    answer:
      "It is a neighborhood decision, but it also carries a strong historic-district identity. That is part of what makes it feel more distinct than many other central Colorado Springs areas.",
  },
  {
    question: "Is Old North End walkable?",
    answer:
      "Compared with a lot of Colorado Springs, yes, though it is usually more residential in feel than Old Colorado City.",
  },
  {
    question: "What makes Old North End distinct?",
    answer:
      "The clearest difference is that it offers one of the more historic, residential, and architecturally distinctive neighborhood searches in Colorado Springs.",
  },
  {
    question: "Is Old North End a good fit for buyers who want older homes?",
    answer: "Often, yes. That is one of the main reasons it comes up.",
  },
];

/* ─── Breadcrumb Items ─── */
const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Colorado Springs", url: "/moving-to-colorado-springs/" },
  {
    label: "Old North End",
    url: "/old-north-end-colorado-springs-real-estate/",
  },
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
export default function OldNorthEndColoradoSpringsRealEstate() {
  const faqSchema = buildFAQPageSchema(faqContent);

  return (
    <>
      <Navbar compact />
      <SeoHead
        metadata={{
          title:
            "Old North End, Colorado Springs Real Estate | My Rock Realty",
          description:
            "Old North End offers one of the more historic, residential, and architecturally distinctive neighborhood searches in Colorado Springs. Here is what the search usually looks like.",
          canonicalUrl:
            "https://myrockhomes.com/old-north-end-colorado-springs-real-estate/",
        }}
        schema={[faqSchema]}
      />

      <div className="min-h-screen bg-charcoal text-cream font-body">
        {/* ─── Hero ─── */}
        <section className="relative bg-gradient-to-b from-stone-900 to-charcoal pt-24 pb-16 px-6">
          <div className="max-w-3xl mx-auto">
            <motion.h1
              className="font-display text-4xl md:text-5xl text-cream mt-6 mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Living in Old North End, Colorado Springs: Real Estate, Tradeoffs,
              and What It's Like
            </motion.h1>
            <motion.p
              className="text-stone-300 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Old North End usually comes up when buyers want the neighborhood
              itself to do a lot of the work.
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
                newest part of town or the easiest search. They want a place
                that feels established, residential, and clearly tied to an
                older version of Colorado Springs.
              </p>
              <p>
                That is usually where Old North End starts to make sense.
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
                  does Old North End fit the way you want Colorado Springs to
                  feel day to day?
                </strong>
              </p>
            </div>

            {/* What Old North End feels like */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-cream">
                What Old North End feels like
              </h2>
              <div className="space-y-4 text-stone-300 leading-relaxed">
                <p>
                  Old North End usually feels more residential than commercial.
                </p>
                <p>That matters.</p>
                <p>
                  It is not really the place most buyers choose for newer homes,
                  a highly uniform search, or a neighborhood pattern that feels
                  easy to compare from one block to the next. It makes more
                  sense as a central Colorado Springs search where buyers are
                  usually choosing older homes, tree-lined streets, and historic
                  neighborhood feel before they are choosing simplicity.
                </p>
                <p>That is a big part of the draw.</p>
                <p>
                  It is also what separates Old North End from Old Colorado
                  City. Old Colorado City usually feels more mixed and more
                  connected to a visible main-street area. Old North End usually
                  feels more residential first.
                </p>
              </div>
            </div>

            {/* Why Old North End stays in the conversation */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-cream">
                Why Old North End stays in the conversation
              </h2>
              <div className="space-y-4 text-stone-300 leading-relaxed">
                <p>
                  Old North End usually stays in the conversation because it
                  gives buyers a version of Colorado Springs that feels older,
                  more rooted, and more traditionally neighborhood-driven.
                </p>
                <p>For the right buyer, that is exactly the point.</p>
                <p>
                  Some people want the neighborhood itself to feel established
                  from the start. They want older homes, mature streets, and a
                  part of town that feels established in a way newer areas
                  simply do not.
                </p>
                <p>That is where Old North End works well.</p>
              </div>
            </div>

            {/* Who Old North End tends to fit */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-cream">
                Who Old North End tends to fit
              </h2>
              <div className="space-y-4 text-stone-300 leading-relaxed">
                <p>
                  Old North End usually makes the most sense for buyers who
                  want:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>a more historic residential feel</li>
                  <li>older homes and more architectural character</li>
                  <li>
                    mature streets and a stronger established-neighborhood
                    pattern
                  </li>
                  <li>
                    a search where the neighborhood matters as much as the house
                  </li>
                  <li>
                    a central location that feels less planned and less generic
                  </li>
                </ul>
                <p>
                  This is often where people land when they want the move to
                  feel more rooted.
                </p>
                <p>That matters more than people expect.</p>
                <p>
                  A lot of buyers who end up here are not chasing the easiest
                  version of Colorado Springs. They are trying to find one of
                  the clearest historic neighborhood choices in the city.
                </p>
              </div>
            </div>

            {/* Who may not love Old North End */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-cream">
                Who may not love Old North End
              </h2>
              <div className="space-y-4 text-stone-300 leading-relaxed">
                <p>Old North End is not the best fit for everyone.</p>
                <p>
                  If you want newer homes, a simpler apples-to-apples search,
                  or a neighborhood pattern that feels more predictable from one
                  block to the next, Old North End can start to feel a little
                  too mixed.
                </p>
                <p>
                  If you want westside character with a more visible commercial
                  strip, Old Colorado City may fit better. If you want newer
                  east-side homes and a more planned community structure,
                  Banning Lewis Ranch may fit better. If you want a more
                  straightforward north-side pattern, Briargate may fit better.
                </p>
                <p>That does not make Old North End weak.</p>
                <p>
                  It just means the upside and the tradeoff are tied together.
                </p>
                <p>
                  The same character that makes it appealing can also make the
                  search more property-specific and less tidy than newer areas.
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
                  An Old North End search usually gets specific pretty quickly.
                </p>
                <p>
                  Usually, that is because the buyer is trying to solve one main
                  question:{" "}
                  <strong className="text-cream">
                    do they want more historic character, more residential
                    neighborhood feel, and more centrality — or do they want the
                    move to feel easier, newer, or more predictable?
                  </strong>
                </p>
                <p>That is where the real comparisons come in:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>
                    <strong className="text-cream">Old North End</strong> for a
                    more historic, residential, central search
                  </li>
                  <li>
                    <strong className="text-cream">Old Colorado City</strong>{" "}
                    when the buyer wants older character with more westside
                    commercial energy
                  </li>
                  <li>
                    <strong className="text-cream">
                      Downtown-adjacent or other central neighborhoods
                    </strong>{" "}
                    when the buyer wants older homes without the same Old North
                    End identity
                  </li>
                  <li>
                    <strong className="text-cream">
                      Briargate / Northgate / Banning Lewis Ranch
                    </strong>{" "}
                    when the buyer realizes they still want more predictability
                    and easier comparison than they first thought
                  </li>
                </ul>
                <p>That is why Old North End matters in the cluster.</p>
                <p>
                  It gives buyers one of the clearest versions of historic
                  residential living in Colorado Springs.
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
                  Old North End usually works best when the buyer values
                  historic character, neighborhood feel, and a more established
                  residential setting more than simplicity and uniformity.
                </p>
                <p>That is the upside.</p>
                <p>
                  The tradeoff is that the search can feel less tidy. The homes,
                  updates, lots, and block-by-block feel can vary more than they
                  do in newer or more planned parts of town.
                </p>
                <p>That is what separates it from Banning Lewis Ranch.</p>
                <p>
                  Banning Lewis Ranch usually feels newer and easier to compare.
                  Old North End usually feels older, more established, and more
                  tied to the house and street themselves.
                </p>
                <p>That is also what separates it from Old Colorado City.</p>
                <p>
                  Old Colorado City often feels more mixed and more connected to
                  the commercial strip. Old North End usually feels more
                  residential and more contained.
                </p>
                <p>That may not sound exciting. But it is real.</p>
              </div>
            </div>

            {/* Old North End vs nearby alternatives */}
            <div className="space-y-6">
              <h2 className="font-display text-2xl text-cream">
                Old North End vs nearby alternatives
              </h2>

              <div className="space-y-4">
                <h3 className="font-display text-xl text-gold">
                  Old North End vs Old Colorado City
                </h3>
                <div className="space-y-3 text-stone-300 leading-relaxed">
                  <p>
                    Old Colorado City usually makes more sense when someone
                    wants westside character with a stronger main-street feel
                    and more visible restaurants, shops, and mixed-use energy.
                  </p>
                  <p>
                    Old North End usually makes more sense when someone wants
                    older homes and neighborhood character in a more residential
                    setting.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-display text-xl text-gold">
                  Old North End vs Briargate
                </h3>
                <div className="space-y-3 text-stone-300 leading-relaxed">
                  <p>
                    Briargate usually makes more sense when someone wants an
                    established but easier-to-read suburban pattern.
                  </p>
                  <p>
                    Old North End usually makes more sense when someone wants
                    more architectural character, more mature streets, and a
                    stronger historic neighborhood feel.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-display text-xl text-gold">
                  Old North End vs Banning Lewis Ranch
                </h3>
                <div className="space-y-3 text-stone-300 leading-relaxed">
                  <p>
                    Banning Lewis Ranch usually makes more sense when someone
                    wants newer homes and a more planned community pattern.
                  </p>
                  <p>
                    Old North End usually makes more sense when someone wants
                    older homes, more variation, and a more established
                    neighborhood identity.
                  </p>
                </div>
              </div>
            </div>

            {/* What people tend to underestimate */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-cream">
                What people tend to underestimate about Old North End
              </h2>
              <div className="space-y-4 text-stone-300 leading-relaxed">
                <p>
                  A lot of buyers underestimate how much the residential feel
                  matters here.
                </p>
                <p>
                  On paper, Old North End can look like one more older part of
                  Colorado Springs.
                </p>
                <p>
                  In practice, it tends to stay in the conversation because it
                  feels more rooted. The wide streets, older homes, and mature
                  neighborhood pattern do a lot of the work here.
                </p>
                <p>The flip side is just as real.</p>
                <p>
                  If what you really want is a cleaner, easier-to-compare
                  search, Old North End can start to feel like more variation
                  than you wanted.
                </p>
              </div>
            </div>

            {/* Is Old North End better for buying now or renting first? */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-cream">
                Is Old North End better for buying now or renting first?
              </h2>
              <div className="space-y-4 text-stone-300 leading-relaxed">
                <p>Sometimes renting first makes a lot of sense here.</p>
                <p>
                  Old North End is one of those places where the neighborhood
                  can feel right before a specific house does.
                </p>
                <p>
                  If you already know you want a more historic residential
                  setting, feel good about older housing stock, and like the
                  tradeoffs that come with a more mixed property-by-property
                  search, buying here can still make a lot of sense.
                </p>
                <p>
                  But compared with some more uniform parts of Colorado Springs,
                  this is one of the places where seeing the area in person and
                  understanding the street-by-street feel can help.
                </p>
              </div>
            </div>

            {/* FAQ */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-cream">
                FAQ about living in Old North End
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
                  Old North End is usually not the page for someone trying to
                  find the easiest or newest version of Colorado Springs.
                </p>
                <p>
                  It is the page for someone trying to decide whether a more
                  historic, residential, central version of the move is the
                  better fit.
                </p>
                <p>For the right buyer, that is exactly why it works.</p>
                <p>
                  Old North End can make the Colorado Springs search feel more
                  rooted, more established, and more personal.
                </p>
                <p>
                  For the wrong buyer, it can feel a little too mixed, a little
                  too property-specific, or a little less predictable than they
                  wanted.
                </p>
                <p>
                  That is why the real question is not whether Old North End is
                  good.
                </p>
                <p>
                  It is whether Old North End fits the way you actually want to
                  live.
                </p>
                <p>
                  If you are trying to sort out Old North End versus Old
                  Colorado City, Briargate, Banning Lewis Ranch, or the broader
                  Colorado Springs map, My Rock Realty can help you narrow that
                  down before you get too attached to a specific house.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-stone-800 rounded-lg p-8 text-center space-y-4">
              <h2 className="font-display text-2xl text-cream">
                Ready to explore Old North End?
              </h2>
              <p className="text-stone-300">
                My Rock Realty can help you figure out whether Old North End fits
                your search — or whether another part of Colorado Springs makes
                more sense.
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

              <div className="mt-4 text-center">
                <a
                  href="/colorado-home-buying-workshop"
                  className="text-stone-400 hover:text-amber-400 text-sm underline transition-colors"
                >
                  Colorado Home Buying Workshop →
                </a>
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
