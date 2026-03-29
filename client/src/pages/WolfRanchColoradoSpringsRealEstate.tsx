/**
 * Living in Wolf Ranch, Colorado Springs — My Rock Realty
 * Neighborhood SEO page — Briargate benchmark match
 * Slug: /wolf-ranch-colorado-springs-real-estate/
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
    question: "Why does Wolf Ranch stay in the search once buyers start touring homes?",
    answer:
      "A lot of buyers keep Wolf Ranch in the search once they start driving it because it usually feels easier to understand in person than it does online. Once you are in Wolf Ranch Colorado Springs, the trail network, parks, recreation lake, and the way the neighborhood sits off the Powers and Research side of town help people picture how everyday life would work. For a lot of buyers, that starts to matter more than they expected.",
  },
  {
    question: "What makes living in Wolf Ranch different from living in Briargate?",
    answer:
      "Living in Wolf Ranch usually feels newer and more planned from the start. Living in Briargate usually feels more established and more settled in. A lot of buyers looking at both are really deciding whether they want a newer master planned community feel or a more established north-side pattern.",
    link: { text: "Briargate", href: "/briargate-colorado-springs-real-estate/" },
  },
  {
    question: "How is Wolf Ranch different from Banning Lewis Ranch?",
    answer:
      "Both can appeal to buyers who want newer homes and an easier search, but they usually do not feel the same once you start driving them. Wolf Ranch is more tied to the Powers and Research side of town. Banning Lewis Ranch usually feels more like an east or northeast edge-of-growth search. That changes the routine, the map, and the way the move feels in real life.",
    link: { text: "Banning Lewis Ranch", href: "/banning-lewis-ranch-colorado-springs-real-estate/" },
  },
  {
    question: "When does Wolf Ranch make more sense than Cordera?",
    answer:
      "Wolf Ranch usually starts making more sense than Cordera when a buyer wants something bigger, newer, and more built around the larger master planned community feel. Cordera usually feels a little more contained. Wolf Ranch often fits better when someone wants the newer neighborhood pattern to be a big part of the appeal.",
    link: { text: "Cordera", href: "/cordera-colorado-springs-real-estate/" },
  },
  {
    question: "What kind of buyer usually ends up choosing Wolf Ranch?",
    answer:
      "Usually it is a buyer who wants newer construction, neighborhood amenities, trails, parks, and an area that is not hard to figure out once they start driving it. A lot of the time they want the search to feel clearer and more organized. They are usually not looking for the oldest or most varied part of Colorado Springs. They usually want the area to make sense fast.",
  },
  {
    question: "What kind of buyer usually moves on from Wolf Ranch?",
    answer:
      "Usually it is someone who wants older homes, more variation from one pocket to the next, more west-side character, or a neighborhood that feels less planned from the start. Some buyers also move on if they realize they want a more established north-side area like Briargate instead of a newer community feel.",
  },
  {
    question: "Is Wolf Ranch more about newer homes or about location?",
    answer:
      "Usually it is both, but newer homes are a big part of why it stays in the search. The location matters too because the Powers and Research Parkway side of town shapes how the area functions in real life. For a lot of buyers, the newer-home appeal gets them there, and the way the map works either keeps them in or pushes them out.",
  },
  {
    question: "What starts to matter about Wolf Ranch once the search gets real?",
    answer:
      "Once the search gets real, a lot of buyers realize Wolf Ranch is less about one dramatic feature and more about how easy it is to understand. The trails, parks, recreation lake, road layout, and newer-home pattern all start mattering more once people picture everyday life instead of just looking at listings. That is one reason homes for sale in Wolf Ranch keep getting attention from serious buyers.",
  },
  {
    question: "Why do homes for sale in Wolf Ranch keep coming up for newer-home buyers?",
    answer:
      "Homes for sale in Wolf Ranch keep coming up because the area usually checks a lot of boxes at once. It is newer, more planned, easier to understand than some other parts of the map, and has the kind of amenities a lot of newer-home buyers want built into the community.",
  },
  {
    question: "Is Wolf Ranch a good fit if I want a neighborhood with parks and trails?",
    answer:
      "Usually yes, if that is part of what you want. Wolf Ranch is known for trails, parks, open space, and the lake, and those are real reasons people keep it in the search. The better question is whether you want those things in a newer, more planned community or whether you want them in a more established part of town.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Wolf Ranch, Colorado Springs Real Estate", url: "/wolf-ranch-colorado-springs-real-estate/" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function FAQItem({ question, answer, link }: { question: string; answer: string; link?: { text: string; href: string } }) {
  const [open, setOpen] = useState(false);

  // Render answer with optional inline link on first mention of link.text
  function renderAnswer() {
    if (!link) return <p className="pb-4 text-stone-600 leading-relaxed">{answer}</p>;
    const idx = answer.indexOf(link.text);
    if (idx === -1) return <p className="pb-4 text-stone-600 leading-relaxed">{answer}</p>;
    return (
      <p className="pb-4 text-stone-600 leading-relaxed">
        {answer.slice(0, idx)}
        <a href={link.href} className="text-amber-700 hover:underline">{link.text}</a>
        {answer.slice(idx + link.text.length)}
      </p>
    );
  }

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
      {open && renderAnswer()}
    </div>
  );
}

export default function WolfRanchColoradoSpringsRealEstate() {
  return (
    <>
      <SeoHead
        metadata={{
          title: "Living in Wolf Ranch, Colorado Springs: Real Estate, Tradeoffs, and What It's Like",
          description:
            "Thinking about living in Wolf Ranch, Colorado Springs? Learn what Wolf Ranch is actually like, who it fits, the real tradeoffs, and how it compares with Briargate, Banning Lewis Ranch, and Cordera.",
          canonicalUrl: "https://myrockhomes.com/wolf-ranch-colorado-springs-real-estate/",
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
              Living in Wolf Ranch, Colorado Springs: Real Estate, Tradeoffs, and What It's Like
            </h1>
            <p className="text-[#C9A96E] text-lg">
              A practical guide to whether Wolf Ranch fits the way you want everyday life to work.
            </p>
          </motion.div>
        </section>

        {/* ─── Intro ─── */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <p>Wolf Ranch usually stays in the search for buyers who want a newer area that feels easier to understand once they start driving it.</p>
            <p>That is usually the first thing people notice.</p>
            <p>
              It is a master planned community on the north/east side of{" "}
              <a href="/colorado-springs-co-homes-for-sale" className="text-amber-700 hover:underline">
                Colorado Springs
              </a>
              , and a lot of the appeal is pretty straightforward. The roads make sense, the neighborhood pattern is easier to read than some other parts of town, and the area usually feels like it was built for buyers who want newer homes, neighborhood amenities, and a search that feels easier to compare from one option to the next. The Powers and Research Parkway side of the map matters here too, because that is part of how people orient themselves once the move gets real.
            </p>
            <p>That is really what Wolf Ranch does well.</p>
            <p>It makes a newer north/east side search feel easier to sort out.</p>
          </div>
        </section>

        {/* ─── Who Wolf Ranch Usually Fits ─── */}
        <section className="py-10 px-6 bg-white">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <h2 className="text-2xl font-bold text-[#292524]">Who Wolf Ranch usually fits</h2>
            <p>
              Wolf Ranch usually fits buyers who want newer construction, a more planned neighborhood pattern, and a part of town that feels easier to understand once they start touring homes.
            </p>
            <p>
              A lot of people like it because they can get a feel for it pretty quickly. You can usually tell where the main roads are, where the amenities are, where the open space is, and how the area is meant to function. For buyers who want a search that feels organized instead of scattered, that matters.
            </p>
            <p>It can be a strong fit if you want:</p>
            <ul>
              <li>a newer area on the north/east side of Colorado Springs</li>
              <li>a master planned community that feels easier to read</li>
              <li>parks, trails, and neighborhood amenities built into the area</li>
              <li>a search where newer homes are a big part of the appeal</li>
              <li>a location that works better if Powers or Research Parkway matter to your routine</li>
              <li>a place where the neighborhood pattern feels consistent from one area to the next</li>
            </ul>
            <p>
              For a lot of buyers, Wolf Ranch stays in the search because it feels easier to compare than parts of the city that are older, more mixed, or less uniform.
            </p>
          </div>
        </section>

        {/* ─── What Living in Wolf Ranch Feels Like ─── */}
        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <h2 className="text-2xl font-bold text-[#292524]">What living in Wolf Ranch feels like once you start looking around</h2>
            <p>
              Once you start driving Wolf Ranch, one thing a lot of buyers notice pretty quickly is that it usually feels newer and more planned from the start.
            </p>
            <p>Not just the homes.</p>
            <p>The whole area.</p>
            <p>
              That shows up in the street layout, the parks and trails, the recreation lake, and the way the neighborhood is set up to feel like a complete community instead of a random group of subdivisions. A lot of buyers like that because it helps them picture everyday life faster. Others realize pretty quickly that they want something with more variation, more age, or more of a different feel from one pocket to the next.
            </p>
            <p>
              Wolf Ranch is also one of those areas where the map starts making sense fast. Once you understand where Powers is, where Research is, and how the neighborhood sits on that side of town, it usually gets easier to tell whether it fits you or not.
            </p>
            <p>That helps.</p>
          </div>
        </section>

        {/* ─── What Buyers Usually Notice After a Few Tours ─── */}
        <section className="py-10 px-6 bg-white">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <h2 className="text-2xl font-bold text-[#292524]">What buyers usually notice after a few tours</h2>
            <p>After a few tours, Wolf Ranch usually starts standing out for a pretty simple reason.</p>
            <p>It feels newer, more organized, and easier to compare.</p>
            <p>That matters more than people think at the start.</p>
            <p>
              <a href="/briargate-colorado-springs-real-estate/" className="text-amber-700 hover:underline">Briargate</a> usually feels more established and more settled.{" "}
              <a href="/banning-lewis-ranch-colorado-springs-real-estate/" className="text-amber-700 hover:underline">Banning Lewis Ranch</a> usually feels more like an east or northeast edge of growth search.{" "}
              <a href="/cordera-colorado-springs-real-estate/" className="text-amber-700 hover:underline">Cordera</a> often feels a little smaller and a little more polished. Pine Creek and other north-side areas usually pull the search a little differently depending on how much the buyer wants newer homes versus a more settled neighborhood feel.
            </p>
            <p>Wolf Ranch usually sits in the middle of a very specific kind of decision.</p>
            <p>
              The buyer often wants newer construction, wants the area to make sense quickly, and does not mind that the neighborhood feels more planned from the start.
            </p>
            <p>That is a big reason it stays strong.</p>
          </div>
        </section>

        {/* ─── Newer Area Breakdown CTA ─── */}
        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#292524] rounded-lg p-8">
              <h2 className="text-xl font-bold text-[#F5F0EB] mb-3">Still trying to sort out Wolf Ranch, Briargate, Banning Lewis Ranch, and Cordera?</h2>
              <p className="text-stone-300 mb-4">That is normal.</p>
              <p className="text-stone-300 mb-6">
                A lot of buyers start out thinking these areas are all just newer north-side or newer east-side options. Once they start driving them, that usually changes pretty fast.
              </p>
              <p className="text-stone-300 mb-6">
                If you want, I can send you a simple breakdown of those areas so you can see what usually matters, what tends to surprise people, and which one may fit you better.
              </p>
              <a
                href="/#contact"
                className="inline-block bg-[#C9A96E] text-[#292524] font-semibold px-8 py-3 rounded hover:bg-[#b8945a] transition-colors"
              >
                Send me the newer-area breakdown
              </a>
            </div>
          </div>
        </section>

        {/* ─── What Wolf Ranch Is Not ─── */}
        <section className="py-10 px-6 bg-white">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <h2 className="text-2xl font-bold text-[#292524]">What Wolf Ranch is not</h2>
            <p>
              Wolf Ranch is usually not the area people pick because they want older architecture, more variation from one block to the next, or more of an older Colorado Springs feel.
            </p>
            <p>
              It is also usually not where buyers end up if they want to be closer to the mountains, closer to the west side, or closer to places like{" "}
              <a href="/old-colorado-city-colorado-springs-real-estate/" className="text-amber-700 hover:underline">Old Colorado City</a>, or{" "}
              <a href="/manitou-springs-co-real-estate/" className="text-amber-700 hover:underline">Manitou Springs</a>.
            </p>
            <p>
              And it is not usually the best fit for buyers who know they do not want a neighborhood that feels planned from the start.
            </p>
            <p>
              Wolf Ranch usually makes the most sense for buyers who want newer homes, a cleaner neighborhood pattern, and a part of town that feels easier to understand once they start driving it.
            </p>
          </div>
        </section>

        {/* ─── Tradeoffs ─── */}
        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <h2 className="text-2xl font-bold text-[#292524]">Tradeoffs that come with Wolf Ranch</h2>
            <p>Like anywhere, Wolf Ranch has tradeoffs.</p>
            <p>
              One is that it can feel more planned and more uniform than some other parts of Colorado Springs. Some buyers really like that. It makes the search clearer. Other buyers decide they want more variation, more age, or a little more unpredictability in the neighborhood feel.
            </p>
            <p>
              Another tradeoff is that while Wolf Ranch does a good job with amenities, trails, parks, and newer homes, it is not going to give you the same older, more established feel you get in places like{" "}
              <a href="/briargate-colorado-springs-real-estate/" className="text-amber-700 hover:underline">Briargate</a>, or the same west-side feel you get in places closer to the mountains.
            </p>
            <p>
              It also tends to be one of those areas where the newer-home appeal does a lot of the work. If that is not one of your main priorities, other parts of town may start making more sense faster.
            </p>
            <p>So the real question is not whether Wolf Ranch is a good area.</p>
            <p>It is whether this newer, more planned version of Colorado Springs fits the way you want to live.</p>
          </div>
        </section>

        {/* ─── Comparisons ─── */}
        <section className="py-10 px-6 bg-white">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <h2 className="text-2xl font-bold text-[#292524]">Wolf Ranch vs nearby alternatives</h2>

            <h3 className="text-xl font-semibold text-[#292524] mt-6">Wolf Ranch vs Briargate</h3>
            <p>This is one of the more useful comparisons.</p>
            <p>
              <a href="/briargate-colorado-springs-real-estate/" className="text-amber-700 hover:underline">Briargate</a> usually feels more established and more settled in. Wolf Ranch usually feels newer and more planned from the start.
            </p>
            <p>
              A lot of buyers notice that quickly once they drive both. Briargate often fits better if someone wants the north side to feel established and practical. Wolf Ranch often fits better if someone wants newer homes, a neighborhood pattern that feels easier to read, and a search that feels more centered around newer construction and built-in amenities.
            </p>
            <p>So if newer construction matters more, Wolf Ranch often gets stronger.</p>
            <p>If a more settled north-side feel matters more, Briargate often stays stronger.</p>

            <h3 className="text-xl font-semibold text-[#292524] mt-6">Wolf Ranch vs Banning Lewis Ranch</h3>
            <p>This is another good comparison.</p>
            <p>
              Wolf Ranch usually feels more like a north/east side newer planned community.{" "}
              <a href="/banning-lewis-ranch-colorado-springs-real-estate/" className="text-amber-700 hover:underline">Banning Lewis Ranch</a> usually feels more like an east or northeast growth-area search.
            </p>
            <p>That may sound small, but it is not.</p>
            <p>
              The routine is different. The map feels different. The way the neighborhoods sit in relation to the rest of town feels different.
            </p>
            <p>
              If someone wants to stay more tied to the Powers and Research side of things, Wolf Ranch may make more sense. If they are more open to the farther-east or edge-of-growth side of the search, Banning Lewis Ranch may stay stronger.
            </p>

            <h3 className="text-xl font-semibold text-[#292524] mt-6">Wolf Ranch vs Cordera</h3>
            <p><a href="/cordera-colorado-springs-real-estate/" className="text-amber-700 hover:underline">Cordera</a> usually feels a little smaller and a little more polished.</p>
            <p>Wolf Ranch usually feels bigger, newer, and more built around the larger master planned community idea.</p>
            <p>
              A lot of buyers who look at both are really deciding how much they want the neighborhood to feel newer and more expansive versus a little more contained.
            </p>
            <p>Neither one is wrong.</p>
            <p>It usually just comes down to which kind of newer planned area feels better once you start driving it.</p>
          </div>
        </section>

        {/* ─── What Wolf Ranch Does Well ─── */}
        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <h2 className="text-2xl font-bold text-[#292524]">What Wolf Ranch does well</h2>
            <p>Wolf Ranch does well for buyers who want the search to feel clearer.</p>
            <p>
              It does well for people who want newer homes, neighborhood amenities, trails, parks, and an area that is not hard to understand once they start spending time there.
            </p>
            <p>
              It also does well for buyers who are trying to narrow down the newer part of the Colorado Springs search and need to know whether they want a more established area like{" "}
              <a href="/briargate-colorado-springs-real-estate/" className="text-amber-700 hover:underline">Briargate</a> or a newer area like Wolf Ranch. If you are looking at homes for sale in Wolf Ranch, that is usually one of the main reasons it keeps coming up.
            </p>
          </div>
        </section>

        {/* ─── Needs Wants Dreams CTA ─── */}
        <section className="py-10 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#292524] rounded-lg p-8">
              <h2 className="text-xl font-bold text-[#F5F0EB] mb-3">Not sure what fits your Needs, Wants, and Dreams?</h2>
              <p className="text-stone-300 mb-4">That is usually where the search gets more useful.</p>
              <p className="text-stone-300 mb-6">
                A lot of buyers start with the house first. Most of the time, what helps more is getting clear on what area fits your needs, what would be nice to have, and what would make the move really feel right if everything lined up.
              </p>
              <p className="text-stone-300 mb-6">
                If you want, send me your Needs, Wants, and Dreams list and I can help you figure out whether Wolf Ranch fits, or whether another part of town makes more sense.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/#contact"
                  className="inline-block bg-[#C9A96E] text-[#292524] font-semibold px-8 py-3 rounded hover:bg-[#b8945a] transition-colors"
                >
                  Send Rob my Needs, Wants, and Dreams
                </a>
                <a
                  href="/colorado-home-buying-workshop"
                  className="inline-block border border-[#C9A96E] text-[#C9A96E] font-semibold px-8 py-3 rounded hover:bg-[#C9A96E] hover:text-[#292524] transition-colors"
                >
                  Colorado Home Buying Workshop →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#292524] mb-6">FAQ about living in Wolf Ranch</h2>
            <div className="divide-y divide-stone-200">
              {faqContent.map((item) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} link={item.link} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── Final Thoughts ─── */}
        <section className="py-12 px-6 bg-white">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <h2 className="text-2xl font-bold text-[#292524]">Final thoughts on Wolf Ranch Colorado Springs</h2>
            <p>Wolf Ranch stays in the search for a reason.</p>
            <p>
              It gives buyers a newer, more planned, easier-to-read version of Colorado Springs, and for the right buyer that is exactly the appeal.
            </p>
            <p>That does not mean it fits everybody.</p>
            <p>
              But if you want a newer area with parks, trails, amenities, and a neighborhood pattern that makes sense pretty quickly once you start driving it, Wolf Ranch usually deserves a serious look.
            </p>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="py-12 px-6 bg-[#292524]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[#F5F0EB] mb-4">
              Talk to Rob about Wolf Ranch
            </h2>
            <p className="text-[#C9A96E] mb-8">
              If you are trying to figure out whether Wolf Ranch really fits the way you live, it is usually better to sort that out early than after you have already spent a lot of time looking at{" "}
              <a href="/colorado-springs-co-homes-for-sale" className="text-[#F5F0EB] hover:text-[#C9A96E] transition-colors underline">
                Colorado Springs homes for sale
              </a>{" "}
              in areas that may not fit as well as you thought.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="inline-block bg-[#C9A96E] text-[#292524] font-semibold px-8 py-3 rounded hover:bg-[#b8945a] transition-colors"
              >
                Talk to Rob About Wolf Ranch
              </a>
              <a
                href="/colorado-springs-co-homes-for-sale"
                className="inline-block border border-[#C9A96E] text-[#C9A96E] font-semibold px-8 py-3 rounded hover:bg-[#C9A96E] hover:text-[#292524] transition-colors"
              >
                Browse Colorado Springs Homes →
              </a>
            </div>
            <div className="mt-8">
              <p className="text-[#C9A96E] text-sm font-semibold uppercase tracking-wide mb-3">Compare nearby areas</p>
              <div className="flex flex-wrap justify-center gap-x-1 gap-y-2 items-center mb-6">
                <a href="/briargate-colorado-springs-real-estate/" className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors">Briargate →</a>
                <span className="text-[#C9A96E]/40 text-sm mx-1">·</span>
                <a href="/banning-lewis-ranch-colorado-springs-real-estate/" className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors">Banning Lewis Ranch →</a>
                <span className="text-[#C9A96E]/40 text-sm mx-1">·</span>
                <a href="/cordera-colorado-springs-real-estate/" className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors">Cordera →</a>
              </div>
              <p className="text-[#C9A96E] text-sm font-semibold uppercase tracking-wide mb-3">Keep exploring Colorado Springs</p>
              <div className="flex flex-wrap justify-center gap-x-1 gap-y-2 items-center">
                <a href="/colorado-springs-co-homes-for-sale" className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors">Colorado Springs homes for sale →</a>
                <span className="text-[#C9A96E]/40 text-sm mx-1">·</span>
                <a href="/moving-to-colorado-springs/" className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors">Moving to Colorado Springs →</a>
                <span className="text-[#C9A96E]/40 text-sm mx-1">·</span>
                <a href="/colorado-home-buying-workshop" className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors">Colorado Home Buying Workshop →</a>
              </div>
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
