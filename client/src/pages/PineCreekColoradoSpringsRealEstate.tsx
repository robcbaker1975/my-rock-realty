/**
 * Living in Pine Creek, Colorado Springs — My Rock Realty
 * Neighborhood SEO spoke page
 * Slug: /pine-creek-colorado-springs-real-estate/
 * Design: Front Range Modern — matches existing site design system
 * Content: Approved benchmark version
 */
import SeoHead from "@/components/seo/SeoHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { motion } from "framer-motion";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "What do buyers usually notice once they actually start driving Pine Creek?",
    answer:
      "Most buyers start seeing pretty quickly that Pine Creek feels more polished and more established than a lot of nearby north-side options. It usually gets easier to understand in person than it does online. That is why some buyers keep it in the search once they tour it, and others realize pretty quickly it is not the right fit.",
  },
  {
    question: "How is Pine Creek different from Briargate?",
    answer:
      "Briargate is usually the broader all-around north-side choice. Pine Creek usually feels more like a specific neighborhood choice inside that larger area. It tends to feel a little more polished and a little more settled.",
  },
  {
    question: "What kind of buyer usually ends up choosing Pine Creek?",
    answer:
      "Usually it is someone who wants the north side to feel established, polished, and residential, and likes the idea of the golf-course influence being part of the neighborhood feel.",
  },
  {
    question: "Who usually moves on from Pine Creek?",
    answer:
      "Usually it is a buyer who wants the newest planned-community setup, the broadest easiest north-side option, or the strongest neighborhood identity.",
  },
  {
    question: "Does Pine Creek feel more established than Cordera?",
    answer:
      "Usually yes. Cordera usually feels newer and more planned. Pine Creek usually feels more settled and a little less built around that newer planned-community setup.",
  },
  {
    question: "Is Pine Creek mostly about golf?",
    answer:
      "Not only that, but the golf-course setting is a real part of how buyers experience it. It is part of what gives the area its feel.",
  },
  {
    question: "How does Pine Creek compare with Flying Horse?",
    answer:
      "Flying Horse usually makes more sense when the neighborhood identity itself matters more. Pine Creek usually makes more sense when a buyer wants something polished and specific without leaning as hard into that identity piece.",
  },
  {
    question: "Is Pine Creek a good relocation area?",
    answer:
      "Usually yes, especially for buyers who already know they want the north side and want something that feels more established and more neighborhood-specific than some nearby options.",
  },
  {
    question: "What are the biggest tradeoffs that come with Pine Creek?",
    answer:
      "The biggest tradeoff is usually specificity. Pine Creek can be a great fit, but it is not the broadest answer. Buyers often choose it because they like the more polished, established feel. If that part does not matter, another area may make more sense.",
  },
  {
    question: "Why does Pine Creek keep coming up for north-side buyers?",
    answer:
      "Because it solves a specific problem well. It gives buyers a north-side neighborhood that feels polished, established, and more distinct than just picking the broadest default.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Colorado Springs, CO Homes for Sale", url: "/colorado-springs-co-homes-for-sale" },
  { label: "Pine Creek, Colorado Springs Real Estate", url: "/pine-creek-colorado-springs-real-estate/" },
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

export default function PineCreekColoradoSpringsRealEstate() {
  return (
    <>
      <SeoHead
        metadata={{
          title: "Living in Pine Creek, Colorado Springs: Real Estate, Tradeoffs, and What It's Like",
          description:
            "Thinking about living in Pine Creek, Colorado Springs? Learn what Pine Creek is actually like, who it fits, the real tradeoffs, and how it compares with Briargate, Cordera, and Flying Horse.",
          canonicalUrl: "https://myrockhomes.com/pine-creek-colorado-springs-real-estate/",
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
              Living in Pine Creek, Colorado Springs: Real Estate, Tradeoffs, and What It's Like
            </h1>
            <p className="text-[#C9A96E] text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
              A practical guide to whether Pine Creek fits the way you want everyday life to work.
            </p>
          </motion.div>
        </section>

        {/* ─── Intro ─── */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
            <p>Pine Creek usually starts making more sense when a buyer wants the north side to feel a little more settled and a little less like another newer neighborhood.</p>
            <p>That is usually where the conversation starts getting more useful.</p>
            <p>
              A lot of buyers end up looking at Pine Creek around the same time they look at <a href="/briargate-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Briargate</a>, <a href="/cordera-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Cordera</a>, or <a href="/flying-horse-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Flying Horse</a>, because those are some of the main north-side areas that keep coming up. But once you actually drive Pine Creek, it usually does not feel like you are just looking at one more version of the same thing. It has its own feel. The golf-course setting is part of that. The neighborhood itself is part of that. It usually feels a little more established and a little more polished than people expect going in.
            </p>
            <p className="font-medium text-[#292524]">That is why some buyers like it right away.</p>
          </div>
        </section>

        {/* ─── Who Pine Creek Usually Fits ─── */}
        <section className="py-12 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Fit</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">Who Pine Creek usually fits</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>
                Pine Creek usually fits buyers who want the north side to feel a little more established, a little more polished, and a little more residential.
              </p>
              <p>Not everybody wants that.</p>
              <p>
                Some buyers want the broadest, easiest option. Some want the newest planned-community feel. Some want the strongest identity on the north side.
              </p>
              <p>Pine Creek usually works better for the buyer who wants something a little more settled than that.</p>
              <p className="font-medium text-[#292524]">It can be a good fit if you want:</p>
              <ul className="space-y-2 pl-0">
                {[
                  "a more established neighborhood feel",
                  "a more polished look and feel",
                  "the golf-course setting to matter",
                  "District 20 to stay in the conversation",
                  "quick access to Briargate-area shopping and day-to-day convenience",
                  "a neighborhood that feels residential first",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C9A96E] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>Pine Creek is usually not the area people pick when they want the newest thing.</p>
              <p>It is usually the area they pick when they want the north side to feel a little more rooted.</p>
            </div>
          </div>
        </section>

        {/* ─── What Living in Pine Creek Feels Like ─── */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Character</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">What living in Pine Creek feels like once you start looking around</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>Pine Creek usually feels more settled than people expect.</p>
              <p>That matters.</p>
              <p>
                Some north-side neighborhoods feel newer and easier to read right away. Pine Creek usually feels like it has had time to become itself. The golf-course influence is part of that. The streets are part of that. The way the homes sit in the neighborhood is part of that.
              </p>
              <p>For some buyers, that is exactly why it works.</p>
              <p>For others, it feels a little too specific, or a little less fresh than what they had in mind.</p>
              <p>That is usually where the decision starts getting clearer.</p>
              <p>It is not that one person is right and the other is wrong. It is just a different kind of fit.</p>
            </div>
          </div>
        </section>

        {/* ─── What Buyers Usually Notice After a Few Tours ─── */}
        <section className="py-12 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>On the Ground</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">What buyers usually notice after a few tours</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>After a few tours, buyers usually stop treating Pine Creek like just another north-side name.</p>
              <p>They start seeing what makes it different.</p>
              <p>Usually it goes something like this:</p>
              <p><a href="/briargate-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Briargate</a> feels broader.</p>
              <p><a href="/cordera-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Cordera</a> feels newer.</p>
              <p><a href="/flying-horse-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Flying Horse</a> feels more identity-driven.</p>
              <p>Pine Creek usually feels more settled and more neighborhood-specific.</p>
              <p>
                That is useful, because a lot of buyers start out thinking they are choosing between areas that are all pretty close to the same thing. Once they actually drive them, that usually falls apart.
              </p>
              <p>And honestly, that is a good thing.</p>
              <p>It gets easier to figure out what you really want once the areas stop blending together.</p>
              <p>
                A lot of the time, Pine Creek gets stronger when a buyer wants the north side to feel polished and residential, but not too new and not too showy.
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
                Still trying to sort out Pine Creek, <a href="/briargate-colorado-springs-real-estate/" className="text-[#C9A96E] hover:text-[#F5F0EB] underline">Briargate</a>, <a href="/cordera-colorado-springs-real-estate/" className="text-[#C9A96E] hover:text-[#F5F0EB] underline">Cordera</a>, and <a href="/flying-horse-colorado-springs-real-estate/" className="text-[#C9A96E] hover:text-[#F5F0EB] underline">Flying Horse</a>?
              </h2>
              <p className="text-stone-300 mb-3 text-base leading-relaxed">
                That is normal.
              </p>
              <p className="text-stone-300 mb-7 text-base leading-relaxed">
                A lot of buyers start out thinking those areas are all going to feel close enough. Once they actually drive them, that usually changes pretty fast. If you want, I can help you sort out which north-side area fits the way you actually want to live before you spend too much time chasing the wrong listings.
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

        {/* ─── What Pine Creek Is Not ─── */}
        <section className="py-12 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Honest Assessment</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">What Pine Creek is not</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>Pine Creek is not usually the best fit for a buyer who wants the newest planned-community feel.</p>
              <p>It is not usually the strongest fit for a buyer who wants the broadest, easiest north-side default.</p>
              <p>And it is not usually where buyers end up if they want the strongest identity on the north side.</p>
              <p>
                Pine Creek usually works best when the more polished, more established, more residential feel sounds like a plus.
              </p>
              <p>If that part does not matter to you, it usually starts getting weaker.</p>
            </div>
          </div>
        </section>

        {/* ─── Tradeoffs ─── */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Tradeoffs</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">Tradeoffs that come with Pine Creek</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>The upside is pretty obvious.</p>
              <p>Pine Creek usually feels polished, established, and residential in a way a lot of buyers like.</p>
              <p>The tradeoff is that it can feel a little more specific than some buyers actually need.</p>
              <p>
                If someone just wants broad north-side usefulness, <a href="/briargate-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Briargate</a> may stay stronger.
              </p>
              <p>
                If someone wants the newest planned-community feel, <a href="/cordera-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Cordera</a> may make more sense.
              </p>
              <p>
                If someone wants the strongest identity play, <a href="/flying-horse-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Flying Horse</a> may get stronger.
              </p>
              <p>So the real question is not whether Pine Creek is good.</p>
              <p>It is whether Pine Creek is your kind of good.</p>
              <p>That is the part that matters.</p>
            </div>
          </div>
        </section>

        {/* ─── Comparison Cluster Header ─── */}
        <div className="bg-[#292524]/5 border-t-2 border-[#C9A96E]/30 px-6 py-5">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Area Comparisons</span>
            <p className="text-stone-500 text-sm">How Pine Creek stacks up against the other north side options buyers usually consider.</p>
          </div>
        </div>

        {/* ─── Pine Creek vs Briargate ─── */}
        <section className="py-12 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">Pine Creek vs <a href="/briargate-colorado-springs-real-estate/" className="text-amber-700 hover:underline">Briargate</a></h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>This is one of the more useful comparisons.</p>
              <p><a href="/briargate-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Briargate</a> is usually the broader all-around north-side choice.</p>
              <p>Pine Creek is usually the more neighborhood-specific choice.</p>
              <p>
                If someone wants the wider, easier, more general north-side setup, Briargate often stays stronger.
              </p>
              <p>
                If someone wants something that feels a little more polished, a little more settled, and a little less like the broad default, Pine Creek may make more sense.
              </p>
              <p>That is usually the real split.</p>
            </div>
          </div>
        </section>

        {/* ─── Pine Creek vs Cordera ─── */}
        <section className="py-12 px-6 border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">Pine Creek vs <a href="/cordera-colorado-springs-real-estate/" className="text-amber-700 hover:underline">Cordera</a></h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>These two can overlap for the same buyer, but they usually do not feel the same once you drive them.</p>
              <p><a href="/cordera-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Cordera</a> usually feels newer, more planned, and more organized from the start.</p>
              <p>Pine Creek usually feels more established and a little less master-planned.</p>
              <p>If someone wants the newer planned-community feel, Cordera often wins.</p>
              <p>If someone wants a more settled neighborhood feel with a little more polish, Pine Creek may fit better.</p>
              <p>That is usually where this comparison gets easier.</p>
            </div>
          </div>
        </section>

        {/* ─── Pine Creek vs Flying Horse ─── */}
        <section className="py-12 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">Pine Creek vs <a href="/flying-horse-colorado-springs-real-estate/" className="text-amber-700 hover:underline">Flying Horse</a></h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>These are not the same decision.</p>
              <p><a href="/flying-horse-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Flying Horse</a> usually makes more sense when the neighborhood identity itself is doing a lot of the work.</p>
              <p>Pine Creek usually makes more sense when a buyer wants something polished and specific, but not quite that identity-heavy.</p>
              <p>If someone wants the stronger-name neighborhood, Flying Horse often wins.</p>
              <p>If someone wants a strong north-side neighborhood without leaning as hard into that identity piece, Pine Creek may fit better.</p>
              <p>That is why these two can come up for the same buyer, but they usually do not close for the same reason.</p>
            </div>
          </div>
        </section>

        {/* ─── What Pine Creek Does Well ─── */}
        <section className="py-12 px-6 border-t-2 border-[#C9A96E]/30">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Strengths</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">What Pine Creek does well</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>Pine Creek does well for buyers who want the north side to feel more established and more polished.</p>
              <p>It does well for buyers who like the golf-course influence being part of the neighborhood feel.</p>
              <p>It does well for buyers who want District 20 to stay in the conversation.</p>
              <p>
                It does well for people who want a strong neighborhood feel without needing the broadest <a href="/briargate-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Briargate</a> setup or the strongest <a href="/flying-horse-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Flying Horse</a> identity.
              </p>
              <p>And it does well for buyers who want something that feels residential first.</p>
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
                Some buyers like Pine Creek right away because it feels polished and settled. Others like the idea of it, but once they compare it with <a href="/briargate-colorado-springs-real-estate/" className="text-[#C9A96E] hover:text-[#F5F0EB] underline">Briargate</a>, <a href="/cordera-colorado-springs-real-estate/" className="text-[#C9A96E] hover:text-[#F5F0EB] underline">Cordera</a>, or <a href="/flying-horse-colorado-springs-real-estate/" className="text-[#C9A96E] hover:text-[#F5F0EB] underline">Flying Horse</a> they realize they want a different tradeoff.
              </p>
              <p className="text-stone-300 mb-7 text-base leading-relaxed">
                That is normal too. If you want, send me your Needs, Wants, and Dreams list and I can help you sort out whether Pine Creek really fits or whether another part of the north side makes more sense. You can also learn more about the buying process at the <a href="/colorado-home-buying-workshop" className="text-[#C9A96E] hover:text-[#F5F0EB] underline">Colorado Home Buying Workshop</a>.
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
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-8">FAQ about living in Pine Creek</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-6">Final thoughts on Pine Creek</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>Pine Creek is not trying to be the broadest north-side choice.</p>
              <p>It is trying to be a more specific one.</p>
              <p>
                If you want the north side to feel a little more polished, a little more established, and a little less like another newer neighborhood, Pine Creek can make a lot of sense.
              </p>
              <p>
                If you want newer and more planned, <a href="/cordera-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Cordera</a> may fit better.
              </p>
              <p>
                If you want broader and easier, <a href="/briargate-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Briargate</a> may stay stronger.
              </p>
              <p>That is what makes Pine Creek useful to compare honestly.</p>
              <p>
                If you are trying to figure out whether Pine Creek really fits the way you live, it is usually better to sort that out early than after you have already spent a lot of time looking at <a href="/colorado-springs-co-homes-for-sale" className="text-amber-700 hover:underline font-medium">homes in Colorado Springs</a> that may not fit as well as you thought.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Final CTA ─── */}
        <section className="py-14 px-6 bg-[#292524]">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A96E]/70 mb-3 block">Ready to Talk</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#F5F0EB] mb-4">
              Talk to Rob About Pine Creek
            </h2>
            <p className="text-[#C9A96E] mb-8 text-base md:text-lg">
              Get clear on the map before you get too far into the house search.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href="/#contact"
                className="inline-block bg-[#C9A96E] text-[#292524] font-semibold px-8 py-3.5 rounded-lg hover:bg-[#b8945a] transition-colors text-base"
              >
                Talk to Rob About Pine Creek
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
                <a href="/cordera-colorado-springs-real-estate/" className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors">Cordera →</a>
                <span className="text-[#C9A96E]/30 text-sm">·</span>
                <a href="/flying-horse-colorado-springs-real-estate/" className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors">Flying Horse →</a>
                <span className="text-[#C9A96E]/30 text-sm">·</span>
                <a href="/colorado-springs-co-homes-for-sale" className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors">Other north-side Colorado Springs options →</a>
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
