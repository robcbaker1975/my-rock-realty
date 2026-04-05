/*
 * Living in Black Forest, CO — My Rock Realty
 * Premium community SEO page
 * Slug: /black-forest-co-real-estate/
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
    question: "Is Black Forest more like Monument or more like a neighborhood search?",
    answer:
      "Usually more like a property-and-setting search. Monument feels more like a town choice. Black Forest feels more like a land-and-privacy choice.",
  },
  {
    question: "Is Black Forest part of Colorado Springs?",
    answer:
      "It is part of the broader Colorado Springs market conversation, but it does not usually feel like a standard Colorado Springs neighborhood decision.",
  },
  {
    question: "What makes Black Forest distinct?",
    answer:
      "The combination of trees, privacy, land, and a more spread-out lifestyle is the clearest difference.",
  },
  {
    question: "Is Black Forest good for buyers who want acreage?",
    answer:
      "Often, yes. Black Forest is one of the clearest local conversations for buyers who want wooded properties, more separation, and a more acreage-oriented search.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Black Forest, CO Real Estate", url: "/black-forest-co-real-estate/" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-stone-700">
      <button
        className="w-full flex items-center justify-between py-4 text-left text-stone-100 font-medium hover:text-amber-400 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 ml-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="pb-4 text-stone-300 text-sm leading-relaxed">{answer}</p>
      )}
    </div>
  );
}

export default function BlackForestCoRealEstate() {
  return (
    <>
      <SeoHead
        metadata={{
          title: "Black Forest CO Real Estate | Homes, Land & Lifestyle",
          description:
            "Explore Black Forest CO real estate and see how Black Forest compares with Monument and Colorado Springs for buyers prioritizing land, privacy, and trees.",
          canonicalUrl: "https://myrockhomes.com/black-forest-co-real-estate/",
        }}
        schema={[faqSchema]}
      />

      {/* ─── Breadcrumb bar ─── */}
      <div className="bg-stone-800/95 border-b border-stone-700 py-2 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* ─── Hero ─── */}
      <div className="bg-stone-900 py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-stone-100 leading-tight mb-4"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            Black Forest CO Real Estate
          </motion.h1>
          <motion.p
            className="text-amber-400 text-lg"
            initial="hidden"
            animate="visible"
            variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.5, delay: 0.1 } } }}
          >
            A practical guide to whether Black Forest fits the way you actually want space and daily life to work.
          </motion.p>
        </div>
      </div>

      {/* ─── Main content ─── */}
      <div className="bg-stone-50 py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-10 text-stone-800 leading-relaxed">

          {/* Intro */}
          <section>
            <p className="mb-4">Black Forest usually comes up when the search stops being about neighborhoods and starts being about property. Buyers who land here are often looking for more land, more privacy, more trees, and a setup that feels less tied to a standard neighborhood pattern. This page is here to help you decide whether Black Forest is actually that move, and how it compares with Monument or the broader Colorado Springs search.</p>
          </section>

          {/* What Black Forest feels like */}
          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">What Black Forest feels like</h2>
            <p className="mb-4">Black Forest usually feels more tied to the property and setting than to any real town feel.</p>
            <p className="mb-4">That matters.</p>
            <p className="mb-4">It is not known for a strong downtown identity or a highly structured neighborhood feel. It makes more sense as a wooded, more spread-out part of the broader Colorado Springs market where buyers are often choosing privacy, land, and setting before they are choosing convenience.</p>
            <p className="mb-4">That is also what makes it different from Monument.</p>
            <p>Monument still feels like choosing a town. Black Forest usually feels more like choosing a lifestyle built around land and separation.</p>
          </section>

          {/* Why Black Forest stays in the conversation */}
          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Why Black Forest stays in the conversation</h2>
            <p className="mb-4">Black Forest usually stays in the conversation because it solves for things most neighborhood pages do not.</p>
            <p className="mb-4">It gives buyers a version of the Colorado Springs-area search that feels more private, more wooded, and less shaped by a standard subdivision rhythm.</p>
            <p className="mb-4">For the right buyer, that is exactly the point.</p>
            <p className="mb-4">This is often where people land when they know they do not want a more typical north-side or east-side neighborhood pattern, but they also do not want to leave the broader Colorado Springs orbit completely.</p>
            <p>That is a useful part of the map for the site to cover.</p>
          </section>

          {/* Who Black Forest tends to fit */}
          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Who Black Forest tends to fit</h2>
            <p className="mb-4">Black Forest usually makes the most sense for buyers who want:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1 text-stone-700">
              <li>more land</li>
              <li>more privacy</li>
              <li>more trees and natural separation</li>
              <li>a search that feels more property-driven than neighborhood-driven</li>
              <li>room for a different kind of daily rhythm than a standard suburban setup</li>
            </ul>
            <p className="mb-4">This is often where people land when they want the Springs area, but do not want the Springs to feel too close.</p>
            <p className="mb-4">That matters more than people expect.</p>
            <p>A lot of Black Forest buyers are not trying to solve for the easiest map. They are trying to solve for the right amount of space.</p>
          </section>

          {/* Who may not love Black Forest */}
          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Who may not love Black Forest</h2>
            <p className="mb-4">Black Forest is not the best fit for everyone.</p>
            <p className="mb-4">If you want a neighborhood that feels easier to compare, quicker to navigate, or more built around everyday convenience, Black Forest can start to feel like more property than you actually wanted.</p>
            <p className="mb-4">If you want town identity, a stronger sense of center, or a more straightforward suburban search, Monument, Briargate, Northgate, or Falcon may fit better.</p>
            <p className="mb-4">That does not make Black Forest weak.</p>
            <p className="mb-4">It just means the upside and the tradeoff are tied together.</p>
            <p>The same land and privacy that make it attractive can also make it feel more spread out, more maintenance-sensitive, and more dependent on the exact property than buyers first expect.</p>
          </section>

          {/* What the home search usually turns into */}
          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">What the home search usually turns into</h2>
            <p className="mb-4">A Black Forest search usually gets specific pretty quickly.</p>
            <p className="mb-4">Usually, that is because the buyer is trying to solve one main question: <strong>do they want more land, more privacy, more trees, or just more room than a neighborhood gives them?</strong></p>
            <p className="mb-4">That is where the real comparisons come in:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-stone-700">
              <li><strong>Black Forest</strong> for trees, privacy, and a more property-first search</li>
              <li><strong>Monument</strong> for a town-based north-of-the-city choice</li>
              <li><strong>Falcon</strong> for a more open, easier, and often more straightforward east-side growth pattern</li>
              <li><strong>Flying Horse / Briargate / Northgate</strong> when the buyer realizes they still want neighborhood structure more than they thought</li>
              <li>sometimes <strong>Peyton</strong> when the buyer wants room but not necessarily the same wooded feel</li>
            </ul>
            <p className="mb-4">That is why Black Forest matters in the cluster.</p>
            <p>It is one of the clearest places in the Springs area for buyers who care more about land and setting than neighborhood structure.</p>
          </section>

          {/* The tradeoffs are the whole point */}
          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">The tradeoffs are the whole point</h2>
            <p className="mb-4">Black Forest usually works best when the buyer values privacy, setting, and space more than convenience and predictability.</p>
            <p className="mb-4">That is the upside.</p>
            <p className="mb-4">The tradeoff is that the search often becomes more property-specific. Exact acreage, tree coverage, upkeep, access, and how separate the property actually feels all matter more here than they do in a more standard neighborhood search.</p>
            <p className="mb-4">That is what separates it from Monument.</p>
            <p className="mb-4">Monument usually feels more like choosing a place to live. Black Forest often feels more like choosing a piece of land that happens to be where you live.</p>
            <p>That may not sound exciting. But it is real.</p>
          </section>

          {/* Black Forest vs nearby alternatives */}
          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Black Forest vs nearby alternatives</h2>

            <h3 className="text-xl font-semibold text-stone-800 mb-3">Black Forest vs Monument</h3>
            <p className="mb-4">Monument usually makes more sense when someone wants more town identity, more Tri-Lakes rhythm, and a more recognizable small-town pattern.</p>
            <p className="mb-6">Black Forest usually makes more sense when someone wants more privacy, more trees, and less of a town-centered feel.</p>

            <h3 className="text-xl font-semibold text-stone-800 mb-3">Black Forest vs Falcon</h3>
            <p className="mb-4">Falcon usually makes more sense when someone wants more room without necessarily needing the same wooded feel or the same level of separation.</p>
            <p className="mb-6">Black Forest usually makes more sense when the trees, setting, and privacy are part of the point.</p>

            <h3 className="text-xl font-semibold text-stone-800 mb-3">Black Forest vs north-side neighborhoods</h3>
            <p className="mb-4">This is one of the cleaner distinctions.</p>
            <p className="mb-4">Briargate, Northgate, and Flying Horse still feel like neighborhood decisions.</p>
            <p className="mb-4">Black Forest usually does not.</p>
            <p>If a buyer starts in those areas and keeps widening toward Black Forest, that usually means they are no longer just sorting by location. They are sorting by how much land and separation they really want.</p>
          </section>

          {/* What surprises buyers */}
          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">What surprises buyers about Black Forest</h2>
            <p className="mb-4">A lot of buyers underestimate how much the property itself does the work here.</p>
            <p className="mb-4">On paper, Black Forest can look like one more area on the edge of Colorado Springs.</p>
            <p className="mb-4">In practice, it usually feels much more property-specific than that.</p>
            <p className="mb-4">The setting matters. The trees matter. The lot matters. The upkeep matters.</p>
            <p className="mb-4">That is also one reason this area tends to feel less interchangeable than a neighborhood search.</p>
            <p className="mb-4">The flip side is just as real.</p>
            <p>If what you really want is simply more room, not a more property-intensive lifestyle, Black Forest can start to feel like more than you were actually trying to take on.</p>
          </section>

          {/* Buying now or renting first */}
          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Is Black Forest better for buying now or renting first?</h2>
            <p className="mb-4">Sometimes buying first makes a lot of sense here.</p>
            <p className="mb-4">If you already know you want privacy, land, and a more property-first setup, buying in Black Forest can be very straightforward conceptually.</p>
            <p className="mb-4">The harder part is usually not the area. It is the property match.</p>
            <p>If you are still deciding between Black Forest, Monument, Falcon, or a north-side neighborhood, renting first can still help. But if the reason you are looking here is clear, Black Forest is often one of those places where buyers know pretty quickly whether the lifestyle fits them or not.</p>
          </section>

          {/* Search CTA */}
          <section>
            <div className="bg-stone-100 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-stone-900 mb-3">Search Black Forest homes</h2>
              <p className="text-stone-700 mb-6">See active listings in Black Forest and narrow the search from there.</p>
              <a
                href="/listing-results?searchParams%5Bcity%5D=Black%20Forest"
                className="inline-block bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold px-6 py-3 rounded transition-colors"
              >
                Open Black Forest home search
              </a>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-6">FAQ about living in Black Forest</h2>
            <div className="bg-stone-800 rounded-lg px-6 py-2">
              {faqContent.map((item) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
          </section>

          {/* Featured Listings */}
          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-6">Featured Black Forest Listings</h2>
            <BuyingBuddyWidget
              type="FeaturedGallery"
              filter="carousel:true+shapesearch:39.0580 -104.7350,39.0580 -104.6200,38.9630 -104.6200,38.9630 -104.7350,39.0580 -104.7350+mls_id:ppar+listing_status:active,coming-soon+order:create_dt desc"
            />
          </section>

          {/* Final thoughts */}
          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Final thoughts</h2>
            <p className="mb-4">Black Forest is usually not the page for someone trying to find the easiest version of Colorado Springs.</p>
            <p className="mb-4">It is the page for someone trying to decide whether more land, more privacy, and a more wooded, property-first version of the move is the better fit.</p>
            <p className="mb-4">For the right buyer, that is exactly why it works.</p>
            <p className="mb-4">Black Forest can make the broader Colorado Springs search feel more personal, more private, and more connected to setting than a neighborhood-based move usually does.</p>
            <p className="mb-4">For the wrong buyer, it can feel like more upkeep, more spread, and more property than they really wanted.</p>
            <p className="mb-4">That is why the real question is not whether Black Forest is good.</p>
            <p className="mb-4">It is whether Black Forest fits the way you actually want to live.</p>
            <p>If you are trying to sort out Black Forest versus Monument, Falcon, or the broader Colorado Springs map, My Rock Realty can help you narrow that down before you get too attached to a specific property.</p>
          </section>

          {/* CTA */}
          <section className="bg-stone-800 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-stone-100 mb-3">Talk to Rob About Black Forest</h2>
            <p className="text-stone-300 mb-6">Get clear on the map before you get too far into the property search.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="inline-block bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold px-6 py-3 rounded transition-colors"
              >
                Talk to Rob About Black Forest
              </a>
              <a
                href="/colorado-springs-co-homes-for-sale"
                className="inline-block border border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-stone-900 font-semibold px-6 py-3 rounded transition-colors"
              >
                Browse Colorado Springs Homes →
              </a>
              <a
                href="/palmer-lake-co-real-estate"
                className="inline-block border border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-stone-900 font-semibold px-6 py-3 rounded transition-colors"
              >
                Palmer Lake →
              </a>
            </div>
            <div className="mt-4">
              <a
                href="/moving-to-colorado-springs/"
                className="text-stone-400 hover:text-amber-400 text-sm underline transition-colors"
              >
                Colorado Springs Relocation Guide →
              </a>
            </div>
          </section>

        </div>
      </div>

      {/* ─── Footer ─── */}
      <footer className="bg-stone-900 border-t border-stone-700 py-6 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-stone-500 text-sm">
          <span>© {new Date().getFullYear()} My Rock Realty · Rob Baker, Broker/Owner</span>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-stone-300 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-stone-300 transition-colors">Terms</a>
            <a href="/fair-housing" className="hover:text-stone-300 transition-colors">Fair Housing</a>
            <a href="/accessibility" className="hover:text-stone-300 transition-colors">Accessibility</a>
          </div>
        </div>
      </footer>
    </>
  );
}
