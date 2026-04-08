/**
 * Living in Mountain Shadows, Colorado Springs — My Rock Realty
 * Neighborhood SEO spoke page
 * Slug: /mountain-shadows-colorado-springs-real-estate/
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
    question: "Is Mountain Shadows more like Peregrine or more like a traditional suburban neighborhood?",
    answer:
      "Usually it sits between those two. It is more scenery-driven and less standard-suburban than many neighborhood searches, but generally less tucked away than Peregrine.",
  },
  {
    question: "What makes Mountain Shadows distinct?",
    answer:
      "The clearest difference is that it offers one of the more scenic, setting-first, west-side neighborhood searches in Colorado Springs, with views and west-side terrain doing a lot of the work.",
  },
  {
    question: "Is Mountain Shadows a good fit for buyers who want west-side views?",
    answer:
      "Often, yes. That is one of the main reasons it comes up.",
  },
  {
    question: "Does Mountain Shadows feel easy to live in day to day?",
    answer:
      "For the right buyer, yes. The appeal usually comes less from a tightly planned system and more from the fact that the neighborhood setting feels rewarding once you are there.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Colorado Springs, CO Homes for Sale", url: "/colorado-springs-co-homes-for-sale" },
  { label: "Mountain Shadows, Colorado Springs Real Estate", url: "/mountain-shadows-colorado-springs-real-estate/" },
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

export default function MountainShadowsColoradoSpringsRealEstate() {
  return (
    <>
      <Navbar compact />
      <SeoHead
        metadata={{
          title: "Living in Mountain Shadows, Colorado Springs: Real Estate, Tradeoffs, and What It's Like",
          description:
            "Thinking about living in Mountain Shadows, Colorado Springs? Learn what Mountain Shadows is actually like, who it fits, the real tradeoffs, and how it compares with Peregrine, Old Colorado City, and Cordera.",
          canonicalUrl: "https://myrockhomes.com/mountain-shadows-colorado-springs-real-estate/",
          breadcrumbs: breadcrumbItems,
        }}
        schema={faqSchema ? [faqSchema] : []}
      />

      {/* ─── Main Content ─── */}
      <main className="bg-[#F5F0EB] min-h-screen">

        {/* ─── Hero ─── */}
        <section className="bg-[#292524] pt-[72px] pb-16 px-6">
          <motion.div
            className="max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-[#F5F0EB] leading-tight mb-4">
              Living in Mountain Shadows, Colorado Springs: Real Estate, Tradeoffs, and What It's Like
            </h1>
            <p className="text-[#C9A96E] text-lg">
              A practical guide to whether Mountain Shadows fits the way you want west-side Colorado Springs to work day to day.
            </p>
          </motion.div>
        </section>

        {/* ─── Intro ─── */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <p>Mountain Shadows usually comes up when buyers want the move to feel more scenic, more established, and more tied to the west side of Colorado Springs.</p>
            <p>That is a big part of the appeal.</p>
            <p>
              A lot of people get here after they realize they do not want the most polished new-build
              search and they do not want the move to feel generic either. They want a neighborhood
              that feels more settled in, more view-driven, and more connected to the landscape around
              it.
            </p>
            <p>That is usually where Mountain Shadows starts to make sense.</p>
            <p>
              This is not the page for someone trying to understand all of Colorado Springs. The main{" "}
              <a href="/moving-to-colorado-springs/" className="text-amber-700 hover:underline">
                Colorado Springs relocation page
              </a>{" "}
              already handles that. This page is narrower on purpose.
            </p>
            <p>
              The real question here is simpler:{" "}
              <strong>does Mountain Shadows fit the way you want west-side Colorado Springs to work day to day?</strong>
            </p>
          </div>
        </section>

        {/* ─── What Mountain Shadows Feels Like ─── */}
        <section className="py-10 px-6 bg-white">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <h2 className="text-2xl font-bold text-[#292524]">What Mountain Shadows feels like</h2>
            <p>Mountain Shadows usually feels more setting-driven than system-driven.</p>
            <p>That matters.</p>
            <p>
              It is not really the place most buyers choose for the newest homes, the most uniform
              neighborhood pattern, or a search that feels easy to compare from one block to the next.
              It makes more sense as a west/northwest Colorado Springs search where buyers are usually
              choosing views, terrain, and neighborhood feel before they are choosing predictability.
            </p>
            <p>That is a big part of the draw.</p>
            <p>
              It is also what separates Mountain Shadows from Cordera or Pine Creek. Those
              neighborhoods usually feel more structured and more suburban. Mountain Shadows usually
              feels more tied to the land around it and a little less packaged from the start.
            </p>
          </div>
        </section>

        {/* ─── Why Mountain Shadows Stays in the Conversation ─── */}
        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <h2 className="text-2xl font-bold text-[#292524]">Why Mountain Shadows stays in the conversation</h2>
            <p>Mountain Shadows usually stays in the conversation because it gives buyers a version of Colorado Springs that feels more scenic and more established from the beginning.</p>
            <p>For the right buyer, that is exactly the point.</p>
            <p>
              Some people want the neighborhood itself to feel like part of the decision. They want to
              come home to views, trail access, and a part of town that feels a little more distinctive
              than a straightforward suburban search.
            </p>
            <p>That is where Mountain Shadows works well.</p>
          </div>
        </section>

        {/* ─── Who Mountain Shadows Tends to Fit ─── */}
        <section className="py-10 px-6 bg-white">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <h2 className="text-2xl font-bold text-[#292524]">Who Mountain Shadows tends to fit</h2>
            <p>Mountain Shadows usually makes the most sense for buyers who want:</p>
            <ul>
              <li>a more scenic west-side neighborhood feel</li>
              <li>a search where views and terrain matter</li>
              <li>a more established setting with less of a master-planned feel</li>
              <li>a move that feels more residential than flashy</li>
              <li>a part of Colorado Springs that feels less generic and less packaged</li>
            </ul>
            <p>This is often where people land when they want the move to feel more tied to place.</p>
            <p>That matters more than people expect.</p>
            <p>
              A lot of buyers who end up here are not chasing the newest neighborhood in the city.
              They are trying to find one of the clearest setting-first neighborhood choices in
              Colorado Springs.
            </p>
          </div>
        </section>

        {/* ─── Who May Not Love Mountain Shadows ─── */}
        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <h2 className="text-2xl font-bold text-[#292524]">Who may not love Mountain Shadows</h2>
            <p>Mountain Shadows is not the best fit for everyone.</p>
            <p>
              If you want the easiest apples-to-apples search, a more uniform neighborhood pattern, or
              a more intentionally planned community system, Mountain Shadows can start to feel a
              little too uneven.
            </p>
            <p>
              If you want a newer and more polished neighborhood system,{" "}
              <a href="/cordera-colorado-springs-real-estate/" className="text-amber-700 hover:underline">
                Cordera
              </a>{" "}
              may fit better. If you want a more established but easier-to-read north-side pattern,{" "}
              <a href="/pine-creek-colorado-springs-real-estate/" className="text-amber-700 hover:underline">
                Pine Creek
              </a>{" "}
              may fit better. If you want west-side character with more walkable district energy,{" "}
              <a href="/old-colorado-city-colorado-springs-real-estate/" className="text-amber-700 hover:underline">
                Old Colorado City
              </a>{" "}
              may fit better. If you want a more tucked-away foothills feel,{" "}
              <a href="/peregrine-colorado-springs-real-estate/" className="text-amber-700 hover:underline">
                Peregrine
              </a>{" "}
              may fit better.
            </p>
            <p>That does not make Mountain Shadows weak.</p>
            <p>It just means the upside and the tradeoff are tied together.</p>
            <p>
              The same scenery and neighborhood feel that make Mountain Shadows appealing can also make
              the search more property-specific and a little less predictable than some buyers expect.
            </p>
          </div>
        </section>

        {/* ─── What the Home Search Usually Turns Into ─── */}
        <section className="py-10 px-6 bg-white">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <h2 className="text-2xl font-bold text-[#292524]">What the home search usually turns into</h2>
            <p>A Mountain Shadows search usually gets specific pretty quickly.</p>
            <p>
              Usually, that is because the buyer is trying to solve one main question:{" "}
              <strong>
                do they want more views, more west-side setting, and more neighborhood character — or
                do they want the move to feel easier, newer, or more organized?
              </strong>
            </p>
            <p>That is where the real comparisons come in:</p>
            <ul>
              <li><strong>Mountain Shadows</strong> for a more scenic, established, west-side neighborhood move</li>
              <li>
                <strong>
                  <a href="/peregrine-colorado-springs-real-estate/" className="text-amber-700 hover:underline">
                    Peregrine
                  </a>
                </strong>{" "}
                for a more tucked-away and foothills-driven version of the search
              </li>
              <li>
                <strong>
                  <a href="/old-colorado-city-colorado-springs-real-estate/" className="text-amber-700 hover:underline">
                    Old Colorado City
                  </a>
                </strong>{" "}
                when the buyer wants west-side character with more district identity
              </li>
              <li>
                <strong>
                  <a href="/cordera-colorado-springs-real-estate/" className="text-amber-700 hover:underline">
                    Cordera
                  </a>{" "}
                  /{" "}
                  <a href="/pine-creek-colorado-springs-real-estate/" className="text-amber-700 hover:underline">
                    Pine Creek
                  </a>
                </strong>{" "}
                when the buyer realizes they still want a more suburban and easier-to-read pattern
              </li>
              <li>
                <strong>
                  <a href="/broadmoor-cheyenne-mountain-colorado-springs-real-estate/" className="text-amber-700 hover:underline">
                    Broadmoor / Cheyenne Mountain
                  </a>
                </strong>{" "}
                when the search shifts toward more south-side setting and a more polished residential identity
              </li>
            </ul>
            <p>That is why Mountain Shadows matters in the cluster.</p>
            <p>
              It gives buyers one of the clearest versions of a west-side, scenery-first neighborhood
              move in Colorado Springs.
            </p>
          </div>
        </section>

        {/* ─── The Tradeoffs Are the Whole Point ─── */}
        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <h2 className="text-2xl font-bold text-[#292524]">The tradeoffs are the whole point</h2>
            <p>
              Mountain Shadows usually works best when the buyer values setting, neighborhood feel, and
              daily visual payoff more than uniformity and predictability.
            </p>
            <p>That is the upside.</p>
            <p>
              The tradeoff is that the search can feel less tidy. Blocks can read differently. Homes
              can feel less interchangeable. The move can feel more about finding the right property in
              the right pocket than plugging into a smooth neighborhood system.
            </p>
            <p>That is what separates it from Cordera.</p>
            <p>
              Cordera usually feels newer and more intentionally connected from the start. Mountain
              Shadows usually feels more shaped by terrain and setting.
            </p>
            <p>That is also what separates it from Pine Creek.</p>
            <p>
              Pine Creek often feels more school-driven and more suburban-practical. Mountain Shadows
              usually feels more scenic and a little less programmed.
            </p>
            <p>That may not sound exciting. But it is real.</p>
          </div>
        </section>

        {/* ─── Mountain Shadows vs Nearby Alternatives ─── */}
        <section className="py-10 px-6 bg-white">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <h2 className="text-2xl font-bold text-[#292524]">Mountain Shadows vs nearby alternatives</h2>

            <h3 className="text-xl font-semibold text-[#292524] mt-6">Mountain Shadows vs Peregrine</h3>
            <p>
              Peregrine usually makes more sense when someone wants a more tucked-away foothills
              setting and a neighborhood that feels even more secluded.
            </p>
            <p>
              Mountain Shadows usually makes more sense when someone wants west-side scenery and
              neighborhood feel without quite as much of that tucked-in effect.
            </p>

            <h3 className="text-xl font-semibold text-[#292524] mt-6">Mountain Shadows vs Old Colorado City</h3>
            <p>
              Old Colorado City usually makes more sense when someone wants west-side character with a
              stronger main-street and district feel.
            </p>
            <p>
              Mountain Shadows usually makes more sense when someone wants the neighborhood itself to
              do more of the work.
            </p>

            <h3 className="text-xl font-semibold text-[#292524] mt-6">Mountain Shadows vs Cordera</h3>
            <p>
              Cordera usually makes more sense when someone wants a newer, more polished, more
              intentionally connected neighborhood system.
            </p>
            <p>
              Mountain Shadows usually makes more sense when someone wants more setting, more views,
              and less of a planned-community feel.
            </p>
          </div>
        </section>

        {/* ─── What People Tend to Underestimate ─── */}
        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <h2 className="text-2xl font-bold text-[#292524]">What people tend to underestimate about Mountain Shadows</h2>
            <p>A lot of buyers underestimate how much the setting does the work here.</p>
            <p>On paper, Mountain Shadows can look like one more strong west-side neighborhood.</p>
            <p>
              In practice, it tends to stay in the conversation because it feels easier to picture
              living there. Ute Valley Park, the neighborhood views, and the way the area sits against
              the west-side terrain all help with that.
            </p>
            <p>The flip side is just as real.</p>
            <p>
              If what you really want is a cleaner, easier-to-compare search, Mountain Shadows can
              start to feel like more variation than you wanted.
            </p>
          </div>
        </section>

        {/* ─── Is Mountain Shadows Better for Buying Now or Renting First? ─── */}
        <section className="py-10 px-6 bg-white">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <h2 className="text-2xl font-bold text-[#292524]">Is Mountain Shadows better for buying now or renting first?</h2>
            <p>Sometimes buying first makes a lot of sense here.</p>
            <p>
              Mountain Shadows is one of those places where buyers often know pretty quickly whether
              the neighborhood logic fits them or not.
            </p>
            <p>
              If you already know you want west-side scenery, feel good about a more property-specific
              search, and like the tradeoffs that come with a more setting-driven neighborhood, buying
              here can be pretty straightforward.
            </p>
            <p>
              If you are still deciding between Mountain Shadows, Peregrine, Old Colorado City, or a
              more suburban north-side option, renting first can still help. But compared with some
              other parts of Colorado Springs, Mountain Shadows is often one of the neighborhoods where
              seeing the area in person helps a lot.
            </p>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#292524] mb-6">FAQ about living in Mountain Shadows</h2>
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
              Mountain Shadows is usually not the page for someone chasing the newest or most uniform
              version of Colorado Springs.
            </p>
            <p>
              It is the page for someone trying to decide whether a more scenic, more established,
              more west-side version of neighborhood living is the better fit.
            </p>
            <p>For the right buyer, that is exactly why it works.</p>
            <p>
              Mountain Shadows can make the move feel more grounded, more visual, and more connected
              to the setting around it from the start.
            </p>
            <p>
              For the wrong buyer, it can feel a little too uneven, a little too property-specific, or
              a little less predictable than they wanted.
            </p>
            <p>That is why the real question is not whether Mountain Shadows is good.</p>
            <p>It is whether Mountain Shadows fits the way you actually want Colorado Springs to work.</p>
            <p>
              If you are trying to sort out Mountain Shadows versus Peregrine, Old Colorado City,
              Cordera, or the broader Colorado Springs map, My Rock Realty can help you narrow that
              down before you get too attached to a specific house.
            </p>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="py-12 px-6 bg-[#292524]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[#F5F0EB] mb-4">
              Talk to Rob About Mountain Shadows
            </h2>
            <p className="text-[#C9A96E] mb-8">
              Get clear on the map before you get too far into the house search.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="inline-block bg-[#C9A96E] text-[#292524] font-semibold px-8 py-3 rounded hover:bg-[#b8945a] transition-colors"
              >
                Talk to Rob About Mountain Shadows
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
