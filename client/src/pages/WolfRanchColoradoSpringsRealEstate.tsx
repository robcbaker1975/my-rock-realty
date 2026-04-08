/*
 * Living in Wolf Ranch, Colorado Springs — My Rock Realty
 * Premium neighborhood SEO page
 * Slug: /wolf-ranch-colorado-springs-real-estate/
 * Design: Front Range Modern — matches existing site design system
 * Content: Approved benchmark version
 */
import SeoHead from "@/components/seo/SeoHead";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "What do buyers usually notice once they actually start driving Wolf Ranch?",
    answer:
      "Most buyers start seeing pretty quickly that Wolf Ranch feels newer, more active, and more built around the neighborhood itself than a lot of nearby north-side options. It usually gets easier to understand in person than it does online.",
  },
  {
    question: "What makes Wolf Ranch different from Briargate?",
    answer:
      "Briargate is usually the broader all-around north-side choice. Wolf Ranch usually feels more like a newer neighborhood choice where the neighborhood itself is doing more of the work.",
  },
  {
    question: "What kind of buyer usually ends up choosing Wolf Ranch?",
    answer:
      "Usually it is someone who wants the north side to feel newer, more active, and more neighborhood-driven, and likes the idea of trails, parks, and open space being part of everyday life.",
  },
  {
    question: "Who usually moves on from Wolf Ranch?",
    answer:
      "Usually it is a buyer who wants the most established north-side feel, less of a planned-community setup, or a broader default answer.",
  },
  {
    question: "Does Wolf Ranch feel newer than Briargate and Cordera?",
    answer:
      "Usually yes, especially compared with Briargate. Compared with Cordera, it often feels a little newer and a little more active in how it comes across.",
  },
  {
    question: "Is Wolf Ranch mostly about the amenities?",
    answer:
      "Not only that, but the neighborhood itself is a real part of why people choose it. The trails, parks, lake, and open-space feel shape how it lives.",
  },
  {
    question: "How does Wolf Ranch compare with Cordera?",
    answer:
      "Cordera usually feels a little more polished and settled. Wolf Ranch usually feels a little newer and more active. Both can work for similar buyers, but they usually do not land the same way in person.",
  },
  {
    question: "Is Wolf Ranch a good relocation area?",
    answer:
      "Usually yes. It is one of the easier north-side areas to understand because the value is pretty clear once you see it: newer, active, planned, and easy to use.",
  },
  {
    question: "What are the biggest tradeoffs that come with Wolf Ranch?",
    answer:
      "The biggest tradeoff is that it can feel more planned and less settled than some buyers want. If the newer, more active, planned feel is not a plus for you, it usually starts getting weaker.",
  },
  {
    question: "Why does Wolf Ranch keep coming up for north-side buyers?",
    answer:
      "Because it solves a specific problem well. It gives buyers a newer north-side neighborhood where the neighborhood itself feels like part of the value.",
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

export default function WolfRanchColoradoSpringsRealEstate() {
  return (
    <>
      <Navbar compact />
      <SeoHead
        metadata={{
          title: "Living in Wolf Ranch, Colorado Springs: Real Estate, Tradeoffs, and What It's Like",
          description:
            "Thinking about living in Wolf Ranch, Colorado Springs? Learn what Wolf Ranch is actually like, who it fits, the real tradeoffs, and how it compares with Briargate, Cordera, and Banning Lewis Ranch.",
          canonicalUrl: "https://myrockhomes.com/wolf-ranch-colorado-springs-real-estate/",
          breadcrumbs: breadcrumbItems,
        }}
        schema={faqSchema ? [faqSchema] : []}
      />

      {/* ─── Main Content ─── */}
      <main className="bg-[#F5F0EB] min-h-screen">

        {/* ─── Hero ─── */}
        <section className="bg-[#292524] pt-[72px] pb-14 px-6 border-b-4 border-[#C9A96E]">
          <motion.div
            className="max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <span className={sectionLabel}>Colorado Springs · North Side</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F0EB] leading-tight mb-5">
              Living in Wolf Ranch, Colorado Springs: Real Estate, Tradeoffs, and What It's Like
            </h1>
            <p className="text-[#C9A96E] text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
              A practical guide to whether Wolf Ranch fits the way you want everyday life to work.
            </p>
          </motion.div>
        </section>

        {/* ─── Intro ─── */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
            <p>Wolf Ranch usually starts making more sense when a buyer wants the north side to feel newer, more active, and more put together than a lot of the older nearby options.</p>
            <p>That is usually where the conversation starts getting clearer.</p>
            <p>
              A lot of buyers end up looking at Wolf Ranch around the same time they look at <a href="/briargate-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Briargate</a>, <a href="/cordera-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Cordera</a>, or <a href="/banning-lewis-ranch-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Banning Lewis Ranch</a>. Once you actually drive Wolf Ranch, it usually does not feel like just another newer neighborhood. It feels like a place where the neighborhood itself is supposed to matter. The trails matter. The parks matter. The lake matters. The whole area usually feels like it was built for buyers who want the neighborhood to do more than just hold the house.
            </p>
            <p className="font-medium text-[#292524]">That is a big part of why some buyers like it right away.</p>
          </div>
        </section>

        {/* ─── Who Wolf Ranch Usually Fits ─── */}
        <section className="py-12 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Fit</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">Who Wolf Ranch usually fits</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>
                Wolf Ranch usually fits buyers who want the north side to feel newer, more active, and easier to use.
              </p>
              <p>
                It tends to work well for buyers who want neighborhood amenities to actually be part of daily life, and who do not mind that the area has a more intentional master-planned feel.
              </p>
              <p className="font-medium text-[#292524]">It can be a good fit if you want:</p>
              <ul className="space-y-2 pl-0">
                {[
                  "a newer neighborhood feel",
                  "parks, trails, and open space to actually matter",
                  "a place that feels active",
                  "a north-side location with newer homes in the conversation",
                  "a neighborhood that feels easy to understand once you drive it",
                  "something that feels more current than older nearby options",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C9A96E] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>Wolf Ranch is usually not where buyers go when they want the most established north-side feel.</p>
              <p>It is usually where they go when they want the neighborhood itself to feel current and alive.</p>
            </div>
          </div>
        </section>

        {/* ─── What Living in Wolf Ranch Feels Like ─── */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Character</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">What living in Wolf Ranch feels like once you start looking around</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>Wolf Ranch usually feels like a newer neighborhood that knows exactly what it is.</p>
              <p>That matters.</p>
              <p>
                Some neighborhoods feel broader and looser. Wolf Ranch usually does not. It usually feels like the kind of place where the trails, parks, lake, and community spaces were meant to be part of everyday life from the beginning.
              </p>
              <p>For the right buyer, that works.</p>
              <p>For the wrong buyer, it can feel a little too planned and a little less settled than they want.</p>
              <p>That is usually the split.</p>
              <p>It is not really about whether the neighborhood is nice.</p>
              <p>It is more about whether this kind of neighborhood feels right to you.</p>
            </div>
          </div>
        </section>

        {/* ─── What Buyers Usually Notice After a Few Tours ─── */}
        <section className="py-12 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>On the Ground</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">What buyers usually notice after a few tours</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>After a few tours, buyers usually stop treating Wolf Ranch like just another newer north-side neighborhood.</p>
              <p>They start seeing what it is actually offering.</p>
              <p>Usually it goes something like this:</p>
              <p><a href="/briargate-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Briargate</a> feels broader.</p>
              <p><a href="/cordera-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Cordera</a> feels a little tighter and a little more polished.</p>
              <p><a href="/banning-lewis-ranch-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Banning Lewis Ranch</a> feels bigger and farther out.</p>
              <p>Wolf Ranch usually feels newer, more active, and more built around the neighborhood itself.</p>
              <p>
                That is useful, because buyers often start out thinking the newer neighborhoods are all solving basically the same problem. Once they actually drive them, that usually falls apart.
              </p>
              <p>And that helps.</p>
              <p>
                Wolf Ranch usually gets stronger when a buyer wants the north side to feel newer and more active, and wants the neighborhood itself to carry more of the decision.
              </p>
            </div>
          </div>
        </section>

        {/* ─── North Side Breakdown CTA ─── */}
        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#292524] rounded-xl p-7 md:p-10 border-l-4 border-[#C9A96E]">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A96E]/70 mb-3 block">North Side Comparison</span>
              <h2 className="text-xl md:text-2xl font-bold text-[#F5F0EB] mb-4 leading-snug">
                Still trying to sort out Wolf Ranch, <a href="/briargate-colorado-springs-real-estate/" className="text-[#C9A96E] hover:text-[#F5F0EB] underline">Briargate</a>, <a href="/cordera-colorado-springs-real-estate/" className="text-[#C9A96E] hover:text-[#F5F0EB] underline">Cordera</a>, and the rest of the north side?
              </h2>
              <p className="text-stone-300 mb-3 text-base leading-relaxed">
                A lot of buyers start out thinking those areas are all going to feel close enough. Once they actually drive them, that usually changes pretty quickly.
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

        {/* ─── What Wolf Ranch Is Not ─── */}
        <section className="py-12 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Honest Assessment</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">What Wolf Ranch is not</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>Wolf Ranch is not usually the best fit for a buyer who wants the most established north-side feel.</p>
              <p>It is not usually the strongest choice for a buyer who wants the loosest, least planned neighborhood feel.</p>
              <p>
                And it is not usually where buyers end up if they want the broadest default answer and do not care much about the neighborhood itself.
              </p>
              <p>
                Wolf Ranch usually works best when the newer, more active, more planned feel sounds like a plus.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Tradeoffs ─── */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Tradeoffs</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">Tradeoffs that come with Wolf Ranch</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>The upside is pretty obvious.</p>
              <p>Wolf Ranch usually feels newer, active, and built to be used.</p>
              <p>The tradeoff is that it can feel a little more planned and a little less settled than some buyers want.</p>
              <p>
                If someone wants the broadest all-around north-side default, <a href="/briargate-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Briargate</a> may stay stronger.
              </p>
              <p>
                If someone wants something a little more polished and established, <a href="/cordera-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Cordera</a> may make more sense.
              </p>
              <p>
                If someone wants a bigger east-side planned-community play, <a href="/banning-lewis-ranch-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Banning Lewis Ranch</a> may get stronger.
              </p>
              <p className="font-medium text-[#292524]">So the real question is not whether Wolf Ranch is good.</p>
              <p>It is whether Wolf Ranch is your kind of good.</p>
            </div>
          </div>
        </section>

        {/* ─── Comparison Cluster Header ─── */}
        <div className="bg-[#292524]/5 border-t-2 border-[#C9A96E]/30 px-6 py-5">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Area Comparisons</span>
            <p className="text-stone-500 text-sm">How Wolf Ranch stacks up against the other north-side options buyers usually consider.</p>
          </div>
        </div>

        {/* ─── Wolf Ranch vs Briargate ─── */}
        <section className="py-12 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">Wolf Ranch vs <a href="/briargate-colorado-springs-real-estate/" className="text-amber-700 hover:underline">Briargate</a></h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>This is one of the more useful comparisons.</p>
              <p>
                <a href="/briargate-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Briargate</a> is usually the broader all-around north-side choice.
              </p>
              <p>Wolf Ranch is usually the newer, more neighborhood-driven choice.</p>
              <p>
                If someone wants the wider, easier, more established north-side setup, Briargate often stays stronger.
              </p>
              <p>
                If someone wants something newer, more active, and more built around the neighborhood itself, Wolf Ranch may make more sense.
              </p>
              <p>That is usually the real split.</p>
            </div>
          </div>
        </section>

        {/* ─── Wolf Ranch vs Cordera ─── */}
        <section className="py-12 px-6 border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">Wolf Ranch vs <a href="/cordera-colorado-springs-real-estate/" className="text-amber-700 hover:underline">Cordera</a></h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>These two can overlap for the same buyer, but they usually do not feel exactly the same once you drive them.</p>
              <p>
                <a href="/cordera-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Cordera</a> usually feels a little more polished and a little more settled.
              </p>
              <p>Wolf Ranch usually feels a little newer and a little more active.</p>
              <p>If someone wants the more polished planned-community feel, Cordera may win.</p>
              <p>If someone wants the newer, more active setup, Wolf Ranch may fit better.</p>
            </div>
          </div>
        </section>

        {/* ─── Wolf Ranch vs Banning Lewis Ranch ─── */}
        <section className="py-12 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">Wolf Ranch vs <a href="/banning-lewis-ranch-colorado-springs-real-estate/" className="text-amber-700 hover:underline">Banning Lewis Ranch</a></h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>Both are planned-community conversations, but they usually attract buyers for different reasons.</p>
              <p>Wolf Ranch usually makes more sense when the buyer wants to stay in the north-side conversation.</p>
              <p>
                <a href="/banning-lewis-ranch-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Banning Lewis Ranch</a> usually gets stronger when the buyer is okay being farther east and wants a bigger community footprint.
              </p>
              <p>If north-side location matters more, Wolf Ranch usually wins.</p>
              <p>If scale and the east-side tradeoff matter more, Banning Lewis Ranch may make more sense.</p>
            </div>
          </div>
        </section>

        {/* ─── What Wolf Ranch Does Well ─── */}
        <section className="py-12 px-6 border-t-2 border-[#C9A96E]/30">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Strengths</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">What Wolf Ranch does well</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>Wolf Ranch does well for buyers who want the north side to feel newer and more active.</p>
              <p>It does well for buyers who want the neighborhood itself to matter more.</p>
              <p>
                It does well for people who like trails, parks, and open space to be part of daily life instead of something they have to go find.
              </p>
              <p>
                It also does well for buyers who want a newer neighborhood that feels easy to understand once they drive it.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Needs Wants Dreams CTA ─── */}
        <section className="py-10 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#292524] rounded-xl p-7 md:p-10 border-l-4 border-[#C9A96E]">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A96E]/70 mb-3 block">Next Step</span>
              <h2 className="text-xl md:text-2xl font-bold text-[#F5F0EB] mb-4 leading-snug">Not sure what fits your Needs, Wants, and Dreams?</h2>
              <p className="text-stone-300 mb-3 text-base leading-relaxed">
                That is usually where the search gets more useful.
              </p>
              <p className="text-stone-300 mb-4 text-base leading-relaxed">
                Some buyers like Wolf Ranch right away because it feels newer and active. Others like the idea of it, but once they compare it with <a href="/briargate-colorado-springs-real-estate/" className="text-[#C9A96E] hover:text-[#F5F0EB] underline">Briargate</a> or <a href="/cordera-colorado-springs-real-estate/" className="text-[#C9A96E] hover:text-[#F5F0EB] underline">Cordera</a> they realize they want a different tradeoff.
              </p>
              <p className="text-stone-300 mb-7 text-base leading-relaxed">
                If you want, send me your Needs, Wants, and Dreams list and I can help you sort out whether Wolf Ranch really fits or whether another part of the north side makes more sense. You can also learn more about the buying process at the <a href="/colorado-home-buying-workshop" className="text-[#C9A96E] hover:text-[#F5F0EB] underline">Colorado Home Buying Workshop</a>.
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
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-8">FAQ about living in Wolf Ranch</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-6">Final thoughts on Wolf Ranch Colorado Springs</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>Wolf Ranch is not trying to be the broadest north-side choice.</p>
              <p>It is trying to be a newer and more active one.</p>
              <p>
                If you want the north side to feel a little more current, a little more planned, and a little more built around the neighborhood itself, Wolf Ranch can make a lot of sense.
              </p>
              <p>If you want broader and easier, <a href="/briargate-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Briargate</a> may stay stronger.</p>
              <p>If you want a little more settled and polished, <a href="/cordera-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Cordera</a> may fit better.</p>
              <p>
                If you are trying to figure out whether Wolf Ranch really fits the way you live, it is usually better to sort that out early than after you have already spent a lot of time looking at <a href="/colorado-springs-co-homes-for-sale" className="text-amber-700 hover:underline font-medium">homes in Colorado Springs</a> that may not fit as well as you thought.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Final CTA ─── */}
        <section className="py-14 px-6 bg-[#292524]">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A96E]/70 mb-3 block">Ready to Talk</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#F5F0EB] mb-4">
              Talk to Rob About Wolf Ranch
            </h2>
            <p className="text-[#C9A96E] mb-8 text-base md:text-lg">
              Get clear on the map before you get too far into the house search.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href="/#contact"
                className="inline-block bg-[#C9A96E] text-[#292524] font-semibold px-8 py-3.5 rounded-lg hover:bg-[#b8945a] transition-colors text-base"
              >
                Talk to Rob About Wolf Ranch
              </a>
              <a
                href="/colorado-springs-co-homes-for-sale"
                className="inline-block border border-[#C9A96E] text-[#C9A96E] font-semibold px-8 py-3.5 rounded-lg hover:bg-[#C9A96E] hover:text-[#292524] transition-colors text-base"
              >
                Browse Colorado Springs Homes →
              </a>
            </div>

            {/* Compare Nearby */}
            <div className="border-t border-stone-700 pt-8">
              <p className="text-stone-500 text-xs font-semibold tracking-widest uppercase mb-4">Compare Nearby</p>
              <div className="flex flex-wrap justify-center gap-x-2 gap-y-3 mb-8">
                <a href="/briargate-colorado-springs-real-estate/" className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors">Briargate →</a>
                <span className="text-[#C9A96E]/30 text-sm">·</span>
                <a href="/cordera-colorado-springs-real-estate/" className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors">Cordera →</a>
                <span className="text-[#C9A96E]/30 text-sm">·</span>
                <a href="/banning-lewis-ranch-colorado-springs-real-estate/" className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors">Banning Lewis Ranch →</a>
              </div>
              <p className="text-stone-500 text-xs font-semibold tracking-widest uppercase mb-4">Keep Exploring</p>
              <div className="flex flex-wrap justify-center gap-x-2 gap-y-3">
                <a href="/briargate-colorado-springs-real-estate/" className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors">Briargate →</a>
                <span className="text-[#C9A96E]/30 text-sm">·</span>
                <a href="/cordera-colorado-springs-real-estate/" className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors">Cordera →</a>
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
