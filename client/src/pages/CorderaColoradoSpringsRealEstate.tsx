/*
 * Living in Cordera, Colorado Springs — My Rock Realty
 * Slug: /cordera-colorado-springs-real-estate/
 * Content: Approved benchmark version
 * Presentation: Briargate benchmark layout
 */
import SeoHead from "@/components/seo/SeoHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { motion } from "framer-motion";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "What do buyers usually notice once they actually start driving Cordera?",
    answer:
      "Most buyers start seeing pretty quickly that Cordera feels more organized, more cohesive, and more intentional than a lot of nearby north-side options. It usually gets easier to understand in person than it does online. That is why some buyers keep it in the search once they tour it, and others realize pretty quickly it is not the right fit.",
  },
  {
    question: "What makes Cordera different from Briargate?",
    answer:
      "Briargate is usually the broader all-around north-side choice. Cordera usually feels more like a specific planned-community decision. If you want more neighborhood structure and a newer organized feel, Cordera often gets stronger.",
  },
  {
    question: "What kind of buyer usually ends up choosing Cordera?",
    answer:
      "Usually it is someone who wants the north side to feel easy, newer, and well organized. They often care about amenities, trails, parks, and a neighborhood that feels pretty straightforward once they drive it.",
  },
  {
    question: "Who usually moves on from Cordera?",
    answer:
      "Usually it is a buyer who wants a more established neighborhood feel, less structure, more variation, or just does not want the planned-community part to matter that much.",
  },
  {
    question: "Does Cordera feel newer than Briargate?",
    answer:
      "Usually yes. That is part of the appeal. It tends to feel more planned and newer, while Briargate usually feels broader and more established.",
  },
  {
    question: "Is Cordera too planned for some buyers?",
    answer:
      "Yes. For some buyers, that is exactly why it works. For others, it feels a little too controlled or a little too polished. That usually becomes clear pretty quickly once they drive it.",
  },
  {
    question: "How does Cordera compare with Pine Creek?",
    answer:
      "Cordera usually leans more into neighborhood structure, amenities, and a cleaner planned-community feel. Pine Creek can fit better for buyers who want a different north-side feel.",
  },
  {
    question: "How does Cordera compare with Flying Horse?",
    answer:
      "Cordera usually feels more like an organized amenity-driven neighborhood choice. Flying Horse usually feels more like a stronger name-neighborhood choice where identity matters more.",
  },
  {
    question: "Is Cordera good for relocation buyers?",
    answer:
      "Usually yes. It is one of the easier north-side areas to understand because the value is pretty clear once you see it: newer, organized, and easy to use.",
  },
  {
    question: "Why does Cordera keep coming up for north-side buyers?",
    answer:
      "Because it solves a specific problem well. It gives buyers a north-side neighborhood that feels newer, planned, and easy to understand.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Cordera, Colorado Springs Real Estate", url: "/cordera-colorado-springs-real-estate/" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  return (
    <div className={`py-6 ${index % 2 === 0 ? "bg-white" : "bg-stone-50"} px-5 rounded-lg mb-2`}>
      <p className="text-[#292524] font-semibold text-base md:text-lg leading-snug mb-3">
        {question}
      </p>
      <p className="text-stone-600 leading-relaxed text-sm md:text-base">{answer}</p>
    </div>
  );
}

/* ─── Shared section label style ─── */
const sectionLabel = "text-xs font-semibold tracking-widest uppercase text-[#C9A96E] mb-2 block";

export default function CorderaColoradoSpringsRealEstate() {
  return (
    <>
      <SeoHead
        metadata={{
          title: "Living in Cordera, Colorado Springs: Real Estate, Tradeoffs, and What It's Like",
          description:
            "Thinking about living in Cordera, Colorado Springs? Learn what Cordera is actually like, who it fits, the real tradeoffs, and how it compares with Briargate, Flying Horse, and Pine Creek.",
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
        <section className="bg-[#292524] pt-12 pb-14 px-6 border-b-4 border-[#C9A96E]">
          <motion.div
            className="max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <span className={sectionLabel}>Colorado Springs · North Side</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F0EB] leading-tight mb-5">
              Living in Cordera, Colorado Springs: Real Estate, Tradeoffs, and What It's Like
            </h1>
            <p className="text-[#C9A96E] text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
              A practical guide to whether Cordera fits the way you want everyday life to work.
            </p>
          </motion.div>
        </section>

        {/* ─── Intro ─── */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
            <p>Cordera usually makes the most sense for buyers who want the north side to feel newer, easier, and more put together.</p>
            <p>That is usually the first thing to get clear.</p>
            <p>
              A lot of buyers end up looking at Cordera around the same time they look at <a href="/briargate-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Briargate</a>, Pine Creek, or <a href="/flying-horse-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Flying Horse</a> because they all live in the same broader north-side conversation. Once you actually drive Cordera, it usually feels more planned and more organized than a lot of nearby options. That is not a side detail. That is the reason it works for the people it works for.
            </p>
            <p className="font-medium text-[#292524]">That is why some buyers like it right away.</p>
          </div>
        </section>

        {/* ─── Who Cordera Usually Fits ─── */}
        <section className="py-12 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Fit</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">Who Cordera usually fits</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>
                Cordera usually fits buyers who want the neighborhood itself to feel easy.
              </p>
              <p>
                It tends to work well for buyers who want newer homes, north-side convenience, and a neighborhood that feels more organized than random.
              </p>
              <p className="font-medium text-[#292524]">It can be a good fit if you want:</p>
              <ul className="space-y-2 pl-0">
                {[
                  "a more planned neighborhood feel",
                  "newer homes",
                  "north-side convenience",
                  "parks and trails nearby",
                  "neighborhood amenities that actually matter",
                  "a place that feels easy to understand once you drive it",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C9A96E] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                Cordera is usually not where buyers go when they want something older, looser, or less structured.
              </p>
              <p>It is usually where they go when they want the neighborhood to feel put together.</p>
            </div>
          </div>
        </section>

        {/* ─── What Living in Cordera Feels Like ─── */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Character</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">What living in Cordera feels like once you start looking around</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>Cordera usually feels neat, planned, and steady.</p>
              <p>That matters more than people think.</p>
              <p>
                Some neighborhoods feel like they grew however they grew. Cordera usually does not. It usually feels like a place that was built to work a certain way from the start. For buyers who like that, it works. For buyers who want something more mixed, more established, or less controlled, it usually does not.
              </p>
              <p>That is the split.</p>
              <p>
                The parks, trails, and community spaces reinforce that feeling, but the bigger point is that the neighborhood identity is easy to understand once you are in it.
              </p>
            </div>
          </div>
        </section>

        {/* ─── What Buyers Usually Notice After a Few Tours ─── */}
        <section className="py-12 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>On the Ground</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">What buyers usually notice after a few tours</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>After a few tours, buyers usually stop treating Cordera like just another north-side option.</p>
              <p>They start seeing that it is a more specific choice.</p>
              <p>First, it tends to feel more cohesive than a lot of nearby areas.</p>
              <p>Second, the amenities do not feel tacked on. They feel like part of how the neighborhood works.</p>
              <p>
                Third, the fit usually gets clearer pretty fast. If you want newer, planned, and easy, Cordera usually gets stronger. If you want something more established or less structured, it usually starts to fall off.
              </p>
              <p>That is useful.</p>
              <p>It helps the right buyers move closer and the wrong buyers move on.</p>
            </div>
          </div>
        </section>

        {/* ─── North Side Breakdown CTA ─── */}
        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#292524] rounded-xl p-7 md:p-10 border-l-4 border-[#C9A96E]">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A96E]/70 mb-3 block">North Side Comparison</span>
              <h2 className="text-xl md:text-2xl font-bold text-[#F5F0EB] mb-4 leading-snug">
                Still trying to sort out Cordera, <a href="/briargate-colorado-springs-real-estate/" className="text-[#C9A96E] hover:text-[#F5F0EB] underline">Briargate</a>, Pine Creek, and the rest of the north side?
              </h2>
              <p className="text-stone-300 mb-3 text-base leading-relaxed">
                That is normal. A lot of buyers start out thinking these areas are going to feel close enough. Once they actually drive them, that usually changes pretty quickly.
              </p>
              <p className="text-stone-300 mb-7 text-base leading-relaxed">
                If you want, I can help you sort out which north-side area fits the way you actually want to live before you spend too much time on the wrong listings.
              </p>
              <a
                href="/#contact"
                className="inline-block bg-[#C9A96E] text-[#292524] font-semibold px-8 py-3.5 rounded-lg hover:bg-[#b8945a] transition-colors text-base"
              >
                Send me the north side breakdown
              </a>
            </div>
          </div>
        </section>

        {/* ─── What Cordera Is Not ─── */}
        <section className="py-12 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Honest Assessment</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">What Cordera is not</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>Cordera is not usually the best fit for buyers who want a more established neighborhood feel.</p>
              <p>It is not usually the strongest choice for buyers who want the loosest, least structured part of the north side.</p>
              <p>
                And it is not usually the area people pick when the planned-community part already sounds like a downside.
              </p>
              <p>Cordera works best when that part feels like a plus.</p>
            </div>
          </div>
        </section>

        {/* ─── Tradeoffs ─── */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Tradeoffs</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">Tradeoffs that come with Cordera</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>The upside is pretty obvious.</p>
              <p>Cordera feels newer, organized, and easy to use.</p>
              <p>
                The tradeoff is that it can feel a little more structured and a little less organic than some buyers want.
              </p>
              <p>That is not automatically bad.</p>
              <p>It just means the fit question matters more here than people expect.</p>
              <p>
                If you want a neighborhood that feels neat, planned, and pretty predictable in a good way, Cordera usually gets stronger.
              </p>
              <p>If you want more variation, more age, or a less planned feel, it usually gets weaker.</p>
            </div>
          </div>
        </section>

        {/* ─── Comparison Cluster Header ─── */}
        <div className="bg-[#292524]/5 border-t-2 border-[#C9A96E]/30 px-6 py-5">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Area Comparisons</span>
            <p className="text-stone-500 text-sm">How Cordera stacks up against the other north-side options buyers usually consider.</p>
          </div>
        </div>

        {/* ─── Cordera vs Briargate ─── */}
        <section className="py-12 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">Cordera vs <a href="/briargate-colorado-springs-real-estate/" className="text-amber-700 hover:underline">Briargate</a></h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>This is one of the more useful north-side comparisons.</p>
              <p><a href="/briargate-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Briargate</a> is usually the broader all-around north-side default.</p>
              <p>Cordera is usually the more specific planned-community choice.</p>
              <p>
                If someone wants a more established, wider, more general north-side setup, Briargate often stays stronger.
              </p>
              <p>
                If someone wants a tighter neighborhood identity built around newer homes, amenities, and a more organized feel, Cordera often makes more sense.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Cordera vs Pine Creek ─── */}
        <section className="py-12 px-6 border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">Cordera vs Pine Creek</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>These two can overlap for the same buyer, but they do not usually feel the same once you drive them.</p>
              <p>
                Cordera usually feels more centered around neighborhood structure, amenities, and the planned-community setup.
              </p>
              <p>Pine Creek usually feels like a different kind of north-side choice.</p>
              <p>
                If someone wants the cleaner amenity-and-neighborhood framework to carry more of the decision, Cordera often wins.
              </p>
              <p>
                If they want a different north-side feel that is less tied to that structure, Pine Creek may fit better.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Cordera vs Flying Horse ─── */}
        <section className="py-12 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">Cordera vs <a href="/flying-horse-colorado-springs-real-estate/" className="text-amber-700 hover:underline">Flying Horse</a></h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>
                Cordera and <a href="/flying-horse-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Flying Horse</a> can both appeal to buyers looking for a more intentional neighborhood choice, but they usually solve different problems.
              </p>
              <p>Cordera usually feels more like a clean, amenity-driven planned community.</p>
              <p>Flying Horse usually feels more like a stronger-name community choice where identity carries more weight.</p>
              <p>If someone wants the stronger neighborhood identity, Flying Horse may get stronger.</p>
              <p>
                If someone wants a newer planned-community feel without leaning as hard into that identity piece, Cordera may fit better.
              </p>
            </div>
          </div>
        </section>

        {/* ─── What Cordera Does Well ─── */}
        <section className="py-12 px-6 border-t-2 border-[#C9A96E]/30">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Strengths</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">What Cordera does well</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>Cordera does well for buyers who want the neighborhood itself to feel easy.</p>
              <p>It does well for buyers who want newer homes.</p>
              <p>It does well for people who care about parks, trails, and community amenities.</p>
              <p>It does well for buyers who want a stronger neighborhood framework without needing a heavier identity layer.</p>
              <p>And it does well for buyers who want the north side to feel organized instead of scattered.</p>
            </div>
          </div>
        </section>

        {/* ─── NWD CTA ─── */}
        <section className="py-10 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#292524] rounded-xl p-7 md:p-10 border-l-4 border-[#C9A96E]">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A96E]/70 mb-3 block">Needs, Wants, and Dreams</span>
              <h2 className="text-xl md:text-2xl font-bold text-[#F5F0EB] mb-4 leading-snug">
                Not sure what fits your Needs, Wants, and Dreams?
              </h2>
              <p className="text-stone-300 mb-3 text-base leading-relaxed">
                That is usually where the search gets more useful. Some buyers like Cordera right away because it feels clean and easy. Others like the idea of it, but once they tour it they realize they want something more established or less planned.
              </p>
              <p className="text-stone-300 mb-7 text-base leading-relaxed">
                If you want, send me your Needs, Wants, and Dreams list and I can help you sort out whether Cordera really fits or whether another part of the north side makes more sense. You can also learn more about the buying process at the <a href="/colorado-home-buying-workshop" className="text-[#C9A96E] hover:text-[#F5F0EB] underline">Colorado Home Buying Workshop</a>.
              </p>
              <a
                href="/#contact"
                className="inline-block bg-[#C9A96E] text-[#292524] font-semibold px-8 py-3.5 rounded-lg hover:bg-[#b8945a] transition-colors text-base"
              >
                Send Rob my Needs, Wants, and Dreams
              </a>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="py-14 px-6">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Common Questions</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-8">FAQ about living in Cordera</h2>
            <div>
              {faqContent.map((item, i) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── Final Thoughts ─── */}
        <section className="py-14 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Wrap-Up</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-6">Final thoughts on Cordera</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>Cordera is not trying to be the broadest north-side choice.</p>
              <p>It is trying to be one of the clearest.</p>
              <p>
                If you want a neighborhood that feels planned, newer, and easy to use, Cordera can make a lot of sense.
              </p>
              <p>If you want something more established or less structured, it may not.</p>
              <p>That is really the decision.</p>
              <p>
                If you are trying to figure out whether Cordera really fits the way you live, it is usually better to sort that out early than after you have already spent a lot of time looking at <a href="/colorado-springs-co-homes-for-sale" className="text-amber-700 hover:underline font-medium">homes in Colorado Springs</a> that may not fit as well as you thought.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Final CTA ─── */}
        <section className="py-14 px-6 bg-[#292524]">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A96E]/70 mb-3 block">Ready to Talk</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#F5F0EB] mb-4">
              Talk to Rob About Cordera
            </h2>
            <p className="text-[#C9A96E] mb-8 text-base md:text-lg">
              Get clear on the map before you get too far into the house search.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href="/#contact"
                className="inline-block bg-[#C9A96E] text-[#292524] font-semibold px-8 py-3.5 rounded-lg hover:bg-[#b8945a] transition-colors text-base"
              >
                Talk to Rob About Cordera
              </a>
              <a
                href="/colorado-springs-co-homes-for-sale"
                className="inline-block border border-[#C9A96E] text-[#C9A96E] font-semibold px-8 py-3.5 rounded-lg hover:bg-[#C9A96E] hover:text-[#292524] transition-colors text-base"
              >
                Browse Colorado Springs Homes →
              </a>
            </div>

            {/* Compare nearby */}
            <div className="border-t border-stone-700 pt-8">
              <p className="text-stone-500 text-xs font-semibold tracking-widest uppercase mb-4">Compare Nearby</p>
              <div className="flex flex-wrap justify-center gap-x-2 gap-y-3 mb-8">
                <a href="/briargate-colorado-springs-real-estate/" className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors">Briargate →</a>
                <span className="text-[#C9A96E]/30 text-sm">·</span>
                <a href="/flying-horse-colorado-springs-real-estate/" className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors">Flying Horse →</a>
                <span className="text-[#C9A96E]/30 text-sm">·</span>
                <a href="/colorado-springs-co-homes-for-sale" className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors">Other north-side options →</a>
              </div>
              <p className="text-stone-500 text-xs font-semibold tracking-widest uppercase mb-4">Keep Exploring</p>
              <div className="flex flex-wrap justify-center gap-x-2 gap-y-3">
                <a href="/briargate-colorado-springs-real-estate/" className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors">Briargate →</a>
                <span className="text-[#C9A96E]/30 text-sm">·</span>
                <a href="/flying-horse-colorado-springs-real-estate/" className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors">Flying Horse →</a>
                <span className="text-[#C9A96E]/30 text-sm">·</span>
                <a href="/moving-to-colorado-springs/" className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors">Moving to Colorado Springs →</a>
                <span className="text-[#C9A96E]/30 text-sm">·</span>
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
