/**
 * Living in Monument, CO — My Rock Realty
 * Premium community / town SEO page
 * Slug: /monument-co-real-estate/
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
    question: "Is Monument basically part of Colorado Springs?",
    answer:
      "Not really. It connects to the broader Colorado Springs market, but it usually feels more like its own town than just another north-side option.",
  },
  {
    question: "Does Monument feel different from north Colorado Springs?",
    answer:
      "Yes. In most cases, noticeably. North Colorado Springs often feels more suburban and more tied into the city. Monument usually feels more separate and more place-based.",
  },
  {
    question: "Is Monument a good fit for commuters?",
    answer:
      "It can be. But it usually works best when the location tradeoff is intentional rather than something you are hoping will not matter later.",
  },
  {
    question: "Should buyers compare Monument with Palmer Lake or Castle Rock?",
    answer:
      "Sometimes, yes. Palmer Lake can make sense if you want more character. Castle Rock can come up if you are comparing broader corridor options. But Monument still stands on its own as a distinct choice.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Monument, CO Real Estate", url: "/monument-co-real-estate/" },
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

export default function MonumentCoRealEstate() {
  return (
    <>
      <SeoHead
        metadata={{
          title: "Living in Monument, CO: Real Estate, Tradeoffs, and What It's Like",
          description:
            "Thinking about living in Monument, CO? Learn what Monument is actually like, who it fits, the real tradeoffs, and how it compares with north Colorado Springs.",
          canonicalUrl: "https://myrockhomes.com/monument-co-real-estate/",
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
              Living in Monument, CO: Real Estate, Tradeoffs, and What It's Like
            </h1>
            <p className="text-[#C9A96E] text-lg">
              A practical guide to whether Monument fits the way you want to live.
            </p>
          </motion.div>
        </section>

        {/* ─── Intro ─── */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <p>Monument can be a really good fit.</p>
            <p>But usually not for the same reasons people first think.</p>
            <p>
              A lot of buyers start out looking at Colorado Springs broadly, then realize they do not
              actually want the same day-to-day feel they had in mind at the beginning. They want a
              place that feels a little more separate, a little more rooted, and a little less tied
              to the city without feeling too far removed from it.
            </p>
            <p>That is usually where Monument starts to make more sense.</p>
            <p>
              This is not really the page for someone trying to decide whether Colorado Springs is a
              good move overall. The main{" "}
              <a href="/moving-to-colorado-springs/" className="text-amber-700 hover:underline">
                Colorado Springs page
              </a>{" "}
              already handles that. This page is narrower than that on purpose.
            </p>
            <p>
              The real question here is simpler:{" "}
              <strong>does Monument fit the way you actually want to live?</strong>
            </p>
          </div>
        </section>

        {/* ─── Why Monument Stays in the Conversation ─── */}
        <section className="py-10 px-6 bg-white">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <h2 className="text-2xl font-bold text-[#292524]">Why Monument Stays in the Conversation</h2>
            <p>
              Monument usually stays in the conversation because it feels more like choosing a town
              than choosing another part of the Springs.
            </p>
            <p>That is a big difference.</p>
            <p>
              Part of that is scale. Even with growth, Monument's 2024 population estimate was
              13,408, so it still reads more like a town than a broad extension of Colorado Springs.
            </p>
            <p>
              Some buyers want to feel more connected to the city day to day. Others want a place
              that feels a little more separate and a little more settled once they are home.
              Monument tends to appeal more to the second group.
            </p>
            <p>That does not make it better.</p>
            <p>It just means it solves a different problem.</p>
            <p>
              And that is usually the part people do not see clearly until they start comparing it
              with north Colorado Springs and nearby areas that look similar on a map but do not
              always feel the same once you are living there.
            </p>
          </div>
        </section>

        {/* ─── What Monument Tends to Fit ─── */}
        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <h2 className="text-2xl font-bold text-[#292524]">What Monument Tends to Fit</h2>
            <p>Monument usually makes the most sense for buyers who want:</p>
            <ul>
              <li>more of a town feel</li>
              <li>a little more breathing room</li>
              <li>a location north of Colorado Springs that still feels connected to the broader market</li>
              <li>a move that is shaped as much by routine and pace as by the house itself</li>
            </ul>
            <p>A lot of people who end up liking Monument are not just picking a property.</p>
            <p>
              They are picking a version of daily life that feels a little calmer and a little more
              intentional.
            </p>
            <p>That is usually the draw.</p>
          </div>
        </section>

        {/* ─── Who May Not Love Monument ─── */}
        <section className="py-10 px-6 bg-white">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <h2 className="text-2xl font-bold text-[#292524]">Who May Not Love Monument</h2>
            <p>Monument is not the best fit for everyone, and that is worth saying clearly.</p>
            <p>
              If you want to feel more plugged into Colorado Springs every day, want the easiest
              version of errands and commuting, or just want a more straightforward suburban setup,
              Monument can start to feel like more separation than you really wanted.
            </p>
            <p>That does not mean people dislike it.</p>
            <p>
              Usually it just means they like it better in theory than in the routine they are
              actually going to live.
            </p>
            <p>That is an important difference.</p>
          </div>
        </section>

        {/* ─── The Tradeoffs Are the Whole Point ─── */}
        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <h2 className="text-2xl font-bold text-[#292524]">The Tradeoffs Are the Whole Point</h2>
            <p>This is usually where the decision gets more real.</p>
            <p>
              Monument often works best for buyers who want a stronger sense of place and do not
              mind giving up some convenience to get it. It tends to work less well for buyers who
              mainly want life to feel easy, close in, and predictable.
            </p>
            <p>In broad terms, the upside is:</p>
            <ul>
              <li>more town identity</li>
              <li>more separation from the city</li>
              <li>a search that often feels a little calmer</li>
              <li>a stronger sense that you picked a place on purpose</li>
            </ul>
            <p>The tradeoff is:</p>
            <ul>
              <li>more sensitivity to drive patterns</li>
              <li>more importance placed on exact location</li>
              <li>less built-in convenience than some buyers want</li>
              <li>more overlap with nearby areas before the search really narrows down</li>
            </ul>
            <p>That is not a flaw in Monument.</p>
            <p>That is the decision.</p>
          </div>
        </section>

        {/* ─── Comparisons ─── */}
        <section className="py-10 px-6 bg-white">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <h2 className="text-2xl font-bold text-[#292524]">Monument vs North Colorado Springs</h2>
            <p>This is the comparison that matters most for the page.</p>
            <p>
              North Colorado Springs often makes more sense when someone wants a more straightforward
              suburban search, easier day-to-day convenience, and a routine that feels more tied into
              the city.
            </p>
            <p>Monument usually makes more sense when someone wants the place itself to feel more distinct.</p>
            <p>That difference can sound subtle online.</p>
            <p>It usually feels less subtle in real life.</p>
            <p>
              One often feels more like choosing a part of town. The other feels more like choosing a
              town north of it.
            </p>

            <h2 className="text-2xl font-bold text-[#292524] mt-10">Monument vs Palmer Lake</h2>
            <p>
              Palmer Lake often stays in the mix for buyers who want even more character or a
              slightly more tucked-away feel.
            </p>
            <p>
              Monument is usually the more practical choice when someone wants a smaller-town
              environment but still wants the search to feel a little more straightforward.
            </p>
            <p>That is not a ranking.</p>
            <p>It is usually just a question of what kind of tradeoff feels easier to live with.</p>

            <h2 className="text-2xl font-bold text-[#292524] mt-10">Monument vs Castle Rock</h2>
            <p>Castle Rock can come up too, especially for buyers thinking more broadly along the corridor.</p>
            <p>That comparison can be useful, but only up to a point.</p>
            <p>
              Castle Rock usually makes more sense for buyers who want a larger amenity base and a
              more built-out large-town feel. Monument usually makes more sense for buyers who want
              something smaller-feeling, more rooted, and more tied to the Tri-Lakes side of the
              market.
            </p>
            <p>That is worth mentioning.</p>
            <p>It just should not take over the page.</p>
          </div>
        </section>

        {/* ─── What the Search Usually Turns Into ─── */}
        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <h2 className="text-2xl font-bold text-[#292524]">What the Search Usually Turns Into</h2>
            <p>A Monument search often gets wider before it gets narrower.</p>
            <p>That is normal.</p>
            <p>
              Usually, buyers widen the search because they are sorting out what matters most: more
              town feel in Monument, more character in Palmer Lake, a little more ease in parts of
              Gleneagle, or a more city-connected routine in north Colorado Springs.
            </p>
            <p>
              So people who start with Monument often end up comparing it with Palmer Lake, Woodmoor,
              parts of Gleneagle, and sometimes north Colorado Springs depending on what matters most
              to them.
            </p>
            <p>
              Usually that comes down to commute, home type, land, upkeep, and how much convenience
              they want built into the week.
            </p>
            <p>That does not mean Monument is vague.</p>
            <p>
              It means the search here is often less about the town name by itself and more about the
              kind of routine the buyer is trying to build.
            </p>
            <p>That matters more than people expect.</p>
          </div>
        </section>

        {/* ─── What People Tend to Underestimate ─── */}
        <section className="py-10 px-6 bg-white">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <h2 className="text-2xl font-bold text-[#292524]">What People Tend to Underestimate</h2>
            <p>
              A lot of buyers underestimate how different Monument can feel from the broader Colorado
              Springs search.
            </p>
            <p>On paper, it can look like one more north-end option.</p>
            <p>In practice, it usually feels more separate than that.</p>
            <p>For the right buyer, that is exactly the appeal.</p>
            <p>
              For the wrong buyer, it can feel less convenient than expected once the move is real.
            </p>
            <p>
              That is why this page works better when it stays honest. Monument does not need to be
              sold as perfect. It just needs to be explained clearly enough that the right buyer can
              recognize it.
            </p>
          </div>
        </section>

        {/* ─── Should You Buy in Monument Right Away? ─── */}
        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <h2 className="text-2xl font-bold text-[#292524]">Should You Buy in Monument Right Away?</h2>
            <p>Sometimes yes.</p>
            <p>Sometimes renting first or taking a narrower look at the map makes more sense.</p>
            <p>
              If you already know you want Monument specifically, feel good about the north-end
              tradeoffs, and understand what kind of routine you want once you move, buying there can
              make a lot of sense.
            </p>
            <p>
              If you are still deciding between Monument, north Colorado Springs, and a couple nearby
              alternatives, it usually helps to get clearer on the map first before getting too
              attached to a specific house.
            </p>
            <p>Usually, that is what makes the move feel a lot more straightforward.</p>
            <p>
              If you want to see how the area feels before committing, a{" "}
              <a href="/rental-tour-support/" className="text-amber-700 hover:underline">
                rental tour
              </a>{" "}
              can help you get oriented before the search gets serious.
            </p>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="py-12 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#292524] mb-6">FAQ About Living in Monument, CO</h2>
            <div className="divide-y divide-stone-200 border border-stone-200 rounded-lg bg-white px-6">
              {faqContent.map((item) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── Final Thoughts + CTA ─── */}
        <section className="py-16 px-6 bg-[#292524]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#F5F0EB] mb-6">Final Thoughts</h2>
            <div className="prose prose-invert prose-stone prose-lg mb-10">
              <p>Monument can be a really good move.</p>
              <p>
                But it usually works best when people go in with a clear picture of what matters most
                to them. Not just the house, but the routine. Not just the location on paper, but how
                everyday life is actually going to work once they are there.
              </p>
              <p>
                For the right buyer, Monument feels more intentional than a broader Colorado Springs
                search.
              </p>
              <p>For the wrong buyer, it can feel like a little too much separation.</p>
              <p>That is why the real question is not whether Monument is good.</p>
              <p>It is whether Monument fits the way you actually want to live.</p>
              <p>
                If you are trying to sort out whether Monument, north Colorado Springs, or another
                nearby area makes the most sense, My Rock Realty can help you get clear on the map
                before you get too far into the house search.
              </p>
            </div>

            <a
              href="https://calendly.com/rob-myrockhomes/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C9A96E] hover:bg-[#b8935a] text-[#292524] font-semibold px-6 py-3 rounded transition-colors"
            >
              Talk to Rob About Monument
            </a>

            <div className="mt-8 flex flex-wrap gap-4 text-sm">
              <a href="/colorado-springs-co-homes-for-sale" className="text-[#C9A96E] hover:text-[#F5F0EB] transition-colors">
                Browse Colorado Springs Homes →
              </a>
              <a href="/moving-to-colorado-springs/" className="text-[#C9A96E] hover:text-[#F5F0EB] transition-colors">
                Colorado Springs Relocation Guide →
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* ─── Footer ─── */}
      <footer className="bg-[#1c1917] py-8 px-6 text-center text-stone-500 text-sm">
        <p>© {new Date().getFullYear()} My Rock Realty · MyRockHomes.com</p>
        <div className="mt-2 flex justify-center gap-4">
          <a href="/privacy-policy" className="hover:text-stone-300 transition-colors">Privacy Policy</a>
          <a href="/terms" className="hover:text-stone-300 transition-colors">Terms</a>
          <a href="/fair-housing" className="hover:text-stone-300 transition-colors">Fair Housing</a>
          <a href="/accessibility" className="hover:text-stone-300 transition-colors">Accessibility</a>
        </div>
      </footer>
    </>
  );
}
