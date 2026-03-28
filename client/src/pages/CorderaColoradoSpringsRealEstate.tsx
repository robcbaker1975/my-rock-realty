/**
 * Living in Cordera, Colorado Springs — My Rock Realty
 * Neighborhood SEO spoke page
 * Slug: /cordera-colorado-springs-real-estate/
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
    question: "Is Cordera more like Briargate or more like Flying Horse?",
    answer:
      "Usually it sits between them. It is newer and more polished than a lot of Briargate, but generally more practical and less brand-driven than Flying Horse.",
  },
  {
    question: "What makes Cordera distinct?",
    answer:
      "The clearest difference is that it offers one of the more connected, newer, neighborhood-first searches on the north side, with trails, schools, and the community pattern built into the area.",
  },
  {
    question: "Is Cordera a good fit for buyers who want newer homes?",
    answer:
      "Often, yes. That is one of the main reasons it comes up.",
  },
  {
    question: "Does Cordera feel easy to live in day to day?",
    answer:
      "For many buyers, yes. The neighborhood layout, trail pattern, and community setup are a big part of why it feels easy to understand once the move gets real.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Colorado Springs, CO Homes for Sale", url: "/colorado-springs-co-homes-for-sale" },
  { label: "Cordera, Colorado Springs Real Estate", url: "/cordera-colorado-springs-real-estate/" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-stone-200 last:border-0">
      <button
        className="w-full flex items-center justify-between py-4 text-left text-stone-800 font-medium hover:text-amber-700 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 ml-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="pb-4 text-stone-600 leading-relaxed">{answer}</p>
      )}
    </div>
  );
}

export default function CorderaColoradoSpringsRealEstate() {
  return (
    <>
      <SeoHead
        metadata={{
          title: "Living in Cordera, Colorado Springs: Real Estate, Tradeoffs, and What It's Like",
          description:
            "Thinking about living in Cordera, Colorado Springs? Learn what Cordera is actually like, who it fits, the real tradeoffs, and how it compares with Briargate, Flying Horse, and Banning Lewis Ranch.",
          canonicalUrl: "https://myrockhomes.com/cordera-colorado-springs-real-estate/",
          breadcrumbs: breadcrumbItems,
        }}
        schema={faqSchema ? [faqSchema] : []}
      />

      {/* ─── Header ─── */}
      <header className="bg-[#292524] py-4 px-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img
            src="/logo-light.png"
            alt="My Rock Realty"
            className="h-8 w-auto"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <span className="text-[#F5F0EB] font-semibold text-sm">My Rock Realty</span>
        </a>
        <a
          href="/"
          className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors"
        >
          ← Back to Main Site
        </a>
      </header>

      {/* ─── Breadcrumb Bar ─── */}
      <div className="bg-[#292524]/95 border-b border-stone-700 px-6 py-2">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* ─── Main Content ─── */}
      <main className="bg-[#F5F0EB] min-h-screen">

        {/* ─── Hero ─── */}
        <section className="bg-[#292524] py-16 px-6">
          <motion.div
            className="max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-[#F5F0EB] leading-tight mb-4">
              Living in Cordera, Colorado Springs: Real Estate, Tradeoffs, and What It's Like
            </h1>
            <p className="text-[#C9A96E] text-lg">
              A practical guide to whether Cordera fits the way you want north-side Colorado Springs to work day to day.
            </p>
          </motion.div>
        </section>

        {/* ─── Intro ─── */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <p>Cordera usually comes up when buyers want the move to feel newer, more polished, and easier to picture from the start.</p>
            <p>That is a big part of the appeal.</p>
            <p>
              A lot of people get here after they realize they do not want the most mixed or most
              property-specific search in Colorado Springs. They want a neighborhood that feels more
              planned, more connected, and easier to understand once the move gets real.
            </p>
            <p>That is usually where Cordera starts to make sense.</p>
            <p>
              This is not the page for someone trying to understand all of Colorado Springs. The main{" "}
              <a href="/moving-to-colorado-springs/" className="text-amber-700 hover:underline">
                Colorado Springs relocation page
              </a>{" "}
              already handles that. This page is narrower on purpose.
            </p>
            <p>
              The real question here is simpler:{" "}
              <strong>does Cordera fit the way you want north-side Colorado Springs to work day to day?</strong>
            </p>
          </div>
        </section>

        {/* ─── What Cordera Feels Like ─── */}
        <section className="py-10 px-6 bg-white">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <h2 className="text-2xl font-bold text-[#292524]">What Cordera feels like</h2>
            <p>Cordera usually feels more polished than patchwork.</p>
            <p>That matters.</p>
            <p>
              It is not really the place most buyers choose for older homes, big swings from block to
              block, or a search that feels less structured. It makes more sense as a newer
              north/east-side Colorado Springs search where buyers are usually choosing neighborhood
              consistency, community infrastructure, and a more predictable day-to-day pattern before
              they are choosing character.
            </p>
            <p>That is a big part of the draw.</p>
            <p>
              It is also what separates Cordera from some of the older north-side options. Cordera
              usually feels more intentionally built out from the beginning.
            </p>
          </div>
        </section>

        {/* ─── Why Cordera Stays in the Conversation ─── */}
        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <h2 className="text-2xl font-bold text-[#292524]">Why Cordera stays in the conversation</h2>
            <p>Cordera usually stays in the conversation because it makes the north-side move easier to picture.</p>
            <p>For the right buyer, that is exactly the point.</p>
            <p>
              Some people want a search where the neighborhood itself does more of the work. They want
              newer homes, a more established community system, and a place where parks, trails,
              schools, and neighborhood layout all feel connected instead of random.
            </p>
            <p>That is where Cordera works well.</p>
          </div>
        </section>

        {/* ─── Who Cordera Tends to Fit ─── */}
        <section className="py-10 px-6 bg-white">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <h2 className="text-2xl font-bold text-[#292524]">Who Cordera tends to fit</h2>
            <p>Cordera usually makes the most sense for buyers who want:</p>
            <ul>
              <li>a newer and more polished neighborhood feel</li>
              <li>a north/east-side location that feels planned and connected</li>
              <li>a search where parks, trails, and schools are part of the appeal</li>
              <li>a neighborhood pattern that feels easier to understand from the start</li>
              <li>a move that feels more residential and more structured than mixed or property-specific</li>
            </ul>
            <p>This is often where people land when they want Colorado Springs to feel straightforward without feeling generic.</p>
            <p>That matters more than people expect.</p>
            <p>
              A lot of buyers who end up here are not chasing the most distinctive or least predictable
              part of the market. They are trying to find one of the clearest newer north-side
              neighborhood options in the city.
            </p>
          </div>
        </section>

        {/* ─── Who May Not Love Cordera ─── */}
        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <h2 className="text-2xl font-bold text-[#292524]">Who may not love Cordera</h2>
            <p>Cordera is not the best fit for everyone.</p>
            <p>
              If you want older homes, more variation, a less planned feel, or a search where the area
              has more neighborhood-by-neighborhood irregularity, Cordera can start to feel a little
              too polished.
            </p>
            <p>
              If you want a more elevated or brand-driven north-side feel, Flying Horse may fit better.
              If you want a more established north-side pattern,{" "}
              <a href="/briargate-colorado-springs-real-estate/" className="text-amber-700 hover:underline">
                Briargate
              </a>{" "}
              may fit better. If you want a newer master-planned feel but farther east, Banning Lewis
              Ranch may fit better. If you want more room or land, Peyton, Falcon, or Black Forest may
              fit better.
            </p>
            <p>That does not make Cordera weak.</p>
            <p>It just means the upside and the tradeoff are tied together.</p>
            <p>
              The same neighborhood consistency that makes Cordera attractive can also make it feel a
              little too organized for buyers who want something less structured.
            </p>
          </div>
        </section>

        {/* ─── What the Home Search Usually Turns Into ─── */}
        <section className="py-10 px-6 bg-white">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <h2 className="text-2xl font-bold text-[#292524]">What the home search usually turns into</h2>
            <p>A Cordera search usually gets specific pretty quickly.</p>
            <p>
              Usually, that is because the buyer is trying to solve one main question:{" "}
              <strong>
                do they want newer, more polished, and more connected — or do they want more
                established, more elevated, or more land?
              </strong>
            </p>
            <p>That is where the real comparisons come in:</p>
            <ul>
              <li><strong>Cordera</strong> for a newer, polished, community-centered north-side move</li>
              <li>
                <strong>
                  <a href="/briargate-colorado-springs-real-estate/" className="text-amber-700 hover:underline">
                    Briargate
                  </a>
                </strong>{" "}
                for a more established north-side pattern
              </li>
              <li>
                <strong>
                  <a href="/flying-horse-colorado-springs-real-estate/" className="text-amber-700 hover:underline">
                    Flying Horse
                  </a>
                </strong>{" "}
                for a more elevated and more identity-driven version of the search
              </li>
              <li><strong>Banning Lewis Ranch</strong> for a newer planned neighborhood farther east</li>
              <li><strong>Pine Creek</strong> when the buyer wants north-side suburban practicality with a slightly different feel</li>
              <li><strong>Peyton / Falcon / Black Forest</strong> when the search starts shifting toward more room or more land</li>
            </ul>
            <p>That is why Cordera matters in the cluster.</p>
            <p>
              It gives buyers one of the clearest versions of a newer, neighborhood-first move on the
              north side of Colorado Springs.
            </p>
          </div>
        </section>

        {/* ─── The Tradeoffs Are the Whole Point ─── */}
        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <h2 className="text-2xl font-bold text-[#292524]">The tradeoffs are the whole point</h2>
            <p>
              Cordera usually works best when the buyer values neighborhood structure, newer homes, and
              day-to-day predictability more than variety and looseness.
            </p>
            <p>That is the upside.</p>
            <p>
              The tradeoff is that the search can feel a little more uniform. The neighborhood identity
              is strong, but it is also more controlled and more planned than some buyers want.
            </p>
            <p>That is what separates it from Briargate.</p>
            <p>
              Briargate usually feels more established and a little less curated. Cordera usually feels
              newer and more intentionally connected.
            </p>
            <p>That is also what separates it from Flying Horse.</p>
            <p>
              Flying Horse often feels more elevated and more brand-forward. Cordera usually feels more
              about neighborhood function, family practicality, and the overall system working well.
            </p>
            <p>That may not sound exciting. But it is real.</p>
          </div>
        </section>

        {/* ─── Cordera vs Nearby Alternatives ─── */}
        <section className="py-10 px-6 bg-white">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <h2 className="text-2xl font-bold text-[#292524]">Cordera vs nearby alternatives</h2>

            <h3 className="text-xl font-semibold text-[#292524] mt-6">Cordera vs Briargate</h3>
            <p>
              Briargate usually makes more sense when someone wants a more established north-side
              neighborhood pattern.
            </p>
            <p>
              Cordera usually makes more sense when someone wants a newer, more polished, and more
              connected neighborhood feel.
            </p>

            <h3 className="text-xl font-semibold text-[#292524] mt-6">Cordera vs Flying Horse</h3>
            <p>
              Flying Horse usually makes more sense when someone wants a more elevated and more
              identity-driven north-side choice.
            </p>
            <p>
              Cordera usually makes more sense when someone wants a more practical and
              community-centered version of newer north-side living.
            </p>

            <h3 className="text-xl font-semibold text-[#292524] mt-6">Cordera vs Banning Lewis Ranch</h3>
            <p>
              Banning Lewis Ranch usually makes more sense when someone wants newer homes and a
              master-planned feel farther east.
            </p>
            <p>
              Cordera usually makes more sense when someone wants a more established-feeling north-side
              location with strong neighborhood infrastructure already in place.
            </p>
          </div>
        </section>

        {/* ─── What People Tend to Underestimate ─── */}
        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <h2 className="text-2xl font-bold text-[#292524]">What people tend to underestimate about Cordera</h2>
            <p>A lot of buyers underestimate how much the neighborhood system does the work here.</p>
            <p>On paper, Cordera can look like one more newer north-side subdivision.</p>
            <p>
              In practice, it tends to stay in the conversation because the layout is easier to
              understand, and the trails, parks, and school/community pattern are already part of daily
              life.
            </p>
            <p>The flip side is just as real.</p>
            <p>
              If what you really want is a search with more age, more irregularity, or more personality
              from block to block, Cordera can start to feel a little too consistent.
            </p>
          </div>
        </section>

        {/* ─── Is Cordera Better for Buying Now or Renting First? ─── */}
        <section className="py-10 px-6 bg-white">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <h2 className="text-2xl font-bold text-[#292524]">Is Cordera better for buying now or renting first?</h2>
            <p>Sometimes buying first makes a lot of sense here.</p>
            <p>
              Cordera is one of those places where buyers often know pretty quickly whether the
              neighborhood logic fits them or not.
            </p>
            <p>
              If you already know you want newer north-side living, feel good about the
              planned-community tradeoffs, and want a neighborhood that feels connected from the start,
              buying here can be pretty straightforward.
            </p>
            <p>
              If you are still deciding between Cordera, Briargate, Flying Horse, or farther-east
              options, renting first can still help. But compared with some other parts of Colorado
              Springs, Cordera is often one of the easier neighborhoods to understand early in the
              search.
            </p>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#292524] mb-6">FAQ about living in Cordera</h2>
            <div className="divide-y divide-stone-200">
              {faqContent.map((item) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── Final Thoughts ─── */}
        <section className="py-12 px-6 bg-white">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <h2 className="text-2xl font-bold text-[#292524]">Final thoughts</h2>
            <p>
              Cordera is usually not the page for someone chasing the most irregular or most
              character-heavy part of Colorado Springs.
            </p>
            <p>
              It is the page for someone trying to decide whether a newer, more polished, more
              connected version of north-side living is the better fit.
            </p>
            <p>For the right buyer, that is exactly why it works.</p>
            <p>
              Cordera can make the move feel clearer, easier to picture, and more structured from the
              start.
            </p>
            <p>
              For the wrong buyer, it can feel a little too planned, a little too consistent, or a
              little less distinctive than they wanted.
            </p>
            <p>That is why the real question is not whether Cordera is good.</p>
            <p>
              It is whether Cordera fits the way you actually want Colorado Springs to work.
            </p>
            <p>
              If you are trying to sort out Cordera versus Briargate, Flying Horse, Banning Lewis
              Ranch, or the broader Colorado Springs map, My Rock Realty can help you narrow that down
              before you get too attached to a specific house.
            </p>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="py-12 px-6 bg-[#292524]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[#F5F0EB] mb-4">
              Talk to Rob About Cordera
            </h2>
            <p className="text-[#C9A96E] mb-8">
              Get clear on the map before you get too far into the house search.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="inline-block bg-[#C9A96E] text-[#292524] font-semibold px-8 py-3 rounded hover:bg-[#b8945a] transition-colors"
              >
                Talk to Rob About Cordera
              </a>
              <a
                href="/colorado-springs-co-homes-for-sale"
                className="inline-block border border-[#C9A96E] text-[#C9A96E] font-semibold px-8 py-3 rounded hover:bg-[#C9A96E] hover:text-[#292524] transition-colors"
              >
                Browse Colorado Springs Homes →
              </a>
            </div>
            <div className="mt-6">
              <a
                href="/moving-to-colorado-springs/"
                className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors"
              >
                Colorado Springs Relocation Guide →
              </a>
              <a
                href="/colorado-home-buying-workshop"
                className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors"
              >
                Colorado Home Buying Workshop →
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* ─── Footer ─── */}
      <footer className="bg-[#1a1614] py-8 px-6 text-center">
        <p className="text-stone-500 text-sm">
          © {new Date().getFullYear()} My Rock Realty · MyRockHomes.com
        </p>
        <div className="flex justify-center gap-6 mt-3 text-stone-500 text-sm">
          <a href="/privacy-policy" className="hover:text-[#C9A96E] transition-colors">Privacy Policy</a>
          <a href="/terms" className="hover:text-[#C9A96E] transition-colors">Terms</a>
          <a href="/fair-housing" className="hover:text-[#C9A96E] transition-colors">Fair Housing</a>
          <a href="/accessibility" className="hover:text-[#C9A96E] transition-colors">Accessibility</a>
        </div>
      </footer>
    </>
  );
}
