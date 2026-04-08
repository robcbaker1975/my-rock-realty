/*
 * Living Near Interquest in Colorado Springs — My Rock Realty
 * Support page: north-side convenience anchor
 * Slug: /interquest-colorado-springs/
 * Design: Front Range Modern — matches Briargate benchmark
 * Content: Approved benchmark version
 */
import SeoHead from "@/components/seo/SeoHead";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "What do buyers usually mean when they say they want to be near Interquest?",
    answer:
      "Most of the time, they mean they want shopping, restaurants, entertainment, and everyday convenience on the north side. They usually do not mean Interquest is the only place they want to live. They mean they want that part of town to be easy to use.",
  },
  {
    question: "Is Interquest a neighborhood in Colorado Springs?",
    answer:
      "Not really in the same way Briargate or Flying Horse are. Interquest is more useful as a location and convenience reference point on the north side.",
  },
  {
    question: "Why does Interquest keep coming up when buyers look at Northgate and Flying Horse?",
    answer:
      "Because it helps explain the convenience side of that part of town. Buyers looking at Northgate or Flying Horse often want to know what is nearby for shopping, dining, entertainment, and normal day-to-day errands. Interquest is one of the main answers to that question.",
  },
  {
    question: "Is Interquest the same thing as Northgate?",
    answer:
      "No. They are related, but they are not the same thing. Interquest is usually about shopping, restaurants, and convenience on that side of town. Northgate is more about where you would actually live. People bring them up together all the time, but they are not talking about the same thing.",
  },
  {
    question: "Who should care most about being near Interquest?",
    answer:
      "Usually buyers who want the north side to feel easy and want shopping, restaurants, entertainment, and services nearby. It matters less to buyers who are choosing mainly for neighborhood identity and more to buyers who care about how daily errands and outings are going to work.",
  },
  {
    question: "Is being near Interquest good for relocation buyers?",
    answer:
      "Usually yes, at least as an orientation tool. It helps relocation buyers understand one of the main convenience hubs on the north side. It should still be paired with a real residential comparison before they decide where to live.",
  },
  {
    question: "Is Interquest close to the Air Force Academy?",
    answer:
      "Yes. It is part of the same general north-side conversation around the Academy, Northgate, and nearby areas, which is one reason it keeps coming up for buyers looking in that part of town.",
  },
  {
    question: "Does Interquest have more shopping and entertainment than Northgate?",
    answer:
      "As a reference point, yes. That is usually the whole reason buyers talk about it. Interquest is more tied to shopping, restaurants, and entertainment. Northgate is more tied to the residential side of the decision.",
  },
  {
    question: "Should buyers compare Interquest with Briargate?",
    answer:
      "Yes, but not as a one-to-one residential comparison. Briargate is the stronger residential-area conversation. Interquest is the stronger convenience conversation. The better comparison is usually Briargate versus Northgate or Briargate versus Flying Horse, with Interquest helping explain what is nearby.",
  },
  {
    question: "What is the biggest mistake buyers make with Interquest?",
    answer:
      "Treating it like it answers the whole residential question. Usually it does not. It helps explain convenience. It does not replace choosing the right nearby neighborhood.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

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

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Interquest, Colorado Springs", url: "/interquest-colorado-springs/" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/* ─── Shared section label style — matches Briargate benchmark ─── */
const sectionLabel = "text-xs font-semibold tracking-widest uppercase text-[#C9A96E] mb-2 block";

export default function InterquestColoradoSprings() {
  return (
    <>
      <Navbar compact />
      <SeoHead
        metadata={{
          title: "Living Near Interquest in Colorado Springs: What Buyers Should Know",
          description:
            "Interquest keeps coming up in north Colorado Springs searches. Here is what it actually means, who it matters to, and how it compares with Northgate, Briargate, and Flying Horse.",
          canonicalUrl: "https://myrockhomes.com/interquest-colorado-springs/",
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
              Living Near Interquest in Colorado Springs: What Buyers Should Know
            </h1>
            <p className="text-[#C9A96E] text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
              A practical guide to how much being near Interquest should actually matter in your search.
            </p>
          </motion.div>
        </section>

        {/* ─── Intro ─── */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
            <p>Interquest comes up a lot once buyers start looking at the north side.</p>
            <p>
              Not because most people are trying to "live in Interquest" the way they might want to live in{" "}
              <a href="/briargate-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Briargate</a>{" "}
              or{" "}
              <a href="/flying-horse-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Flying Horse</a>.
            </p>
            <p>Because they keep hearing the name and want to know what it actually means.</p>
            <p>That is usually the real conversation.</p>
            <p>
              A lot of buyers say they want to be near Interquest when what they usually mean is that they want shopping, restaurants, entertainment, and everyday convenience nearby on the north side. They may also want quick I-25 access, to stay closer to the Air Force Academy side of town, or to make{" "}
              <a href="/northgate-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Northgate</a>{" "}
              or{" "}
              <a href="/flying-horse-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Flying Horse</a>{" "}
              easier to use day to day.
            </p>
            <p>So this page is not here to pretend Interquest is one big neighborhood identity.</p>
            <p className="font-medium text-[#292524]">
              It is here to help buyers figure out how much being near Interquest should actually matter in their search.
            </p>
          </div>
        </section>

        {/* ─── Who Interquest Usually Matters To ─── */}
        <section className="py-12 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Fit</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">Who Interquest usually matters to</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>Interquest usually matters to buyers who care a lot about convenience.</p>
              <p>
                That can mean buyers who want shopping and restaurants close by. It can mean buyers who want entertainment nearby. It can mean relocation buyers who are still trying to understand the map and keep hearing Interquest,{" "}
                <a href="/northgate-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Northgate</a>, and{" "}
                <a href="/flying-horse-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Flying Horse</a>{" "}
                brought up together.
              </p>
              <p>
                It also matters to buyers who know they want the north side and want to understand what makes that part of town easier to use.
              </p>
              <p className="font-medium text-[#292524]">Interquest tends to matter most if you want:</p>
              <ul className="space-y-2 pl-0">
                {[
                  "nearby shopping and dining",
                  "north-side convenience",
                  "entertainment options close by",
                  "quick access to I-25",
                  "to stay near the Air Force Academy side of town",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C9A96E] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ─── What Living Near Interquest Feels Like ─── */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Character</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">What living near Interquest feels like once you start looking around</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>Interquest feels more like a convenience anchor than a neighborhood.</p>
              <p>That is the cleanest way to think about it.</p>
              <p>
                When buyers drive that part of town, they usually notice pretty quickly that Interquest helps explain how the north side works. It is one of the places that makes errands, casual dinners, entertainment, and everyday stops easier if you live nearby.
              </p>
              <p>That is why buyers talk about it so much.</p>
              <p>But it still does not answer the neighborhood question by itself.</p>
              <p>That is the part buyers need to get right.</p>
            </div>
          </div>
        </section>

        {/* ─── What Buyers Usually Notice After a Few Tours ─── */}
        <section className="py-12 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>On the Ground</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">What buyers usually notice after a few tours</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>After a few tours, buyers usually stop using Interquest like it is a neighborhood name.</p>
              <p>They start using it more like a location reference.</p>
              <p>That is usually more accurate.</p>
              <p>
                They notice that being near Interquest can make life easier if they want shopping, food, services, and entertainment nearby on the north side. They also notice that it helps explain why nearby areas like{" "}
                <a href="/northgate-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Northgate</a> and{" "}
                <a href="/flying-horse-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Flying Horse</a>{" "}
                keep coming up in the same conversation.
              </p>
              <p>Then the real decision shows up.</p>
              <p>
                They have to figure out whether they just like having Interquest nearby, or whether they actually need it nearby for the way they live.
              </p>
              <p>That is an important difference.</p>
              <p>Some buyers really use this part of town a lot.</p>
              <p>Others just like the idea of it.</p>
            </div>
          </div>
        </section>

        {/* ─── North Side Breakdown CTA ─── */}
        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#292524] rounded-xl p-7 md:p-10 border-l-4 border-[#C9A96E]">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A96E]/70 mb-3 block">North Side Comparison</span>
              <h2 className="text-xl md:text-2xl font-bold text-[#F5F0EB] mb-4 leading-snug">
                Still trying to sort out Interquest,{" "}
                <a href="/northgate-colorado-springs-real-estate/" className="text-[#C9A96E] hover:text-[#F5F0EB] underline">Northgate</a>,{" "}
                <a href="/briargate-colorado-springs-real-estate/" className="text-[#C9A96E] hover:text-[#F5F0EB] underline">Briargate</a>, and{" "}
                <a href="/flying-horse-colorado-springs-real-estate/" className="text-[#C9A96E] hover:text-[#F5F0EB] underline">Flying Horse</a>?
              </h2>
              <p className="text-stone-300 mb-3 text-base leading-relaxed">
                That is normal.
              </p>
              <p className="text-stone-300 mb-3 text-base leading-relaxed">
                A lot of buyers use those names a little loosely at first. Once they start driving homes, the differences usually get clearer fast.
              </p>
              <p className="text-stone-300 mb-3 text-base leading-relaxed">
                Interquest usually matters because of convenience.
              </p>
              <p className="text-stone-300 mb-3 text-base leading-relaxed">
                <a href="/northgate-colorado-springs-real-estate/" className="text-[#C9A96E] hover:text-[#F5F0EB] underline">Northgate</a> usually matters because of where it sits.
              </p>
              <p className="text-stone-300 mb-3 text-base leading-relaxed">
                <a href="/briargate-colorado-springs-real-estate/" className="text-[#C9A96E] hover:text-[#F5F0EB] underline">Briargate</a> usually matters because it is the easier all-around residential choice.
              </p>
              <p className="text-stone-300 mb-7 text-base leading-relaxed">
                <a href="/flying-horse-colorado-springs-real-estate/" className="text-[#C9A96E] hover:text-[#F5F0EB] underline">Flying Horse</a> usually matters because it has a stronger neighborhood identity.
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

        {/* ─── What Interquest Is Not ─── */}
        <section className="py-12 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Honest Assessment</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">What Interquest is not</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>Interquest is not really the page for a buyer who wants to choose one neighborhood and stop there.</p>
              <p>It is not the same thing as <a href="/northgate-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Northgate</a>.</p>
              <p>It is not the same thing as <a href="/flying-horse-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Flying Horse</a>.</p>
              <p>It is not the broad answer to where someone should live on the north side.</p>
              <p>And it is not a substitute for comparing actual residential areas.</p>
              <p>
                Interquest is more useful as the page that explains the nearby shopping, dining, entertainment, and convenience side of this part of town.
              </p>
              <p className="font-medium text-[#292524]">That is really the job here.</p>
            </div>
          </div>
        </section>

        {/* ─── Tradeoffs ─── */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Tradeoffs</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">Tradeoffs that come with being near Interquest</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>The upside is pretty obvious.</p>
              <p>You are near one of the main convenience anchors on the north side.</p>
              <p>That can make errands easier.</p>
              <p>That can make meals out easier.</p>
              <p>That can make weekends easier.</p>
              <p>That can make the whole north side feel simpler if your routine already points that direction.</p>
              <p>
                The tradeoff is that "near Interquest" does not tell you enough by itself about what daily life in the neighborhood will feel like.
              </p>
              <p>That is where buyers can make the wrong call.</p>
              <p>They find a home near Interquest and assume that means they have answered the area question.</p>
              <p>Usually they have not.</p>
              <p>So the better question is not just whether you want to be near Interquest.</p>
              <p className="font-medium text-[#292524]">
                It is whether you want the convenience of Interquest and which nearby residential area actually fits the way you live.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Comparison Cluster Header ─── */}
        <div className="bg-[#292524]/5 border-t-2 border-[#C9A96E]/30 px-6 py-5">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Area Comparisons</span>
            <p className="text-stone-500 text-sm">How Interquest relates to the residential areas buyers usually consider on the north side.</p>
          </div>
        </div>

        {/* ─── Interquest vs Northgate ─── */}
        <section className="py-12 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">Interquest vs <a href="/northgate-colorado-springs-real-estate/" className="text-amber-700 hover:underline">Northgate</a></h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>This is one of the most useful distinctions to keep clear.</p>
              <p>Interquest is usually the convenience reference point.</p>
              <p><a href="/northgate-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Northgate</a> is the residential decision.</p>
              <p>
                If someone says they want to be near Interquest, they may end up choosing Northgate because it gives them access to that part of town while still making sense as a place to live.
              </p>
              <p>People bring them up together all the time, but they are usually talking about two different things.</p>
              <p>Northgate answers the living question.</p>
              <p>Interquest helps explain what is nearby.</p>
            </div>
          </div>
        </section>

        {/* ─── Interquest vs Briargate ─── */}
        <section className="py-12 px-6 border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">Interquest vs <a href="/briargate-colorado-springs-real-estate/" className="text-amber-700 hover:underline">Briargate</a></h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p><a href="/briargate-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Briargate</a> is usually the stronger all-around residential conversation.</p>
              <p>Interquest is useful in a different way.</p>
              <p>
                If a buyer is trying to choose where to live, Briargate is usually the more complete residential comparison.
              </p>
              <p>
                If they are trying to understand what is nearby on the north side and why Interquest keeps coming up, this page helps more.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Interquest vs Flying Horse ─── */}
        <section className="py-12 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">Interquest vs <a href="/flying-horse-colorado-springs-real-estate/" className="text-amber-700 hover:underline">Flying Horse</a></h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p><a href="/flying-horse-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Flying Horse</a> is usually a neighborhood someone chooses because they want Flying Horse.</p>
              <p>Interquest is usually a nearby convenience reference that helps explain why that part of town works for some buyers.</p>
              <p>That is why these two come up together, but they are not the same kind of decision.</p>
              <p>If a buyer wants stronger neighborhood identity, Flying Horse usually carries more weight.</p>
              <p>
                If they are trying to understand the shopping, dining, and convenience side of that part of town, Interquest matters more.
              </p>
            </div>
          </div>
        </section>

        {/* ─── What Interquest Does Well ─── */}
        <section className="py-12 px-6 border-t-2 border-[#C9A96E]/30">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Strengths</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">What Interquest does well</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>Interquest does a good job helping buyers understand the north side.</p>
              <p>
                It gives them a useful reference point for shopping, dining, entertainment, and everyday convenience.
              </p>
              <p>It helps relocation buyers get their bearings.</p>
              <p>
                And it helps explain why nearby areas like{" "}
                <a href="/northgate-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Northgate</a> and{" "}
                <a href="/flying-horse-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Flying Horse</a>{" "}
                keep coming up in the same conversation.
              </p>
              <p>That is really where Interquest helps most.</p>
            </div>
          </div>
        </section>

        {/* ─── Needs Wants Dreams CTA ─── */}
        <section className="py-10 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#292524] rounded-xl p-7 md:p-10 border-l-4 border-[#C9A96E]">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A96E]/70 mb-3 block">Next Step</span>
              <h2 className="text-xl md:text-2xl font-bold text-[#F5F0EB] mb-4 leading-snug">
                Not sure whether Interquest is just nice to be near or something you actually need nearby?
              </h2>
              <p className="text-stone-300 mb-3 text-base leading-relaxed">
                That is a useful question.
              </p>
              <p className="text-stone-300 mb-3 text-base leading-relaxed">
                Some buyers really do use this part of town a lot.
              </p>
              <p className="text-stone-300 mb-3 text-base leading-relaxed">
                Others just like the idea of having it nearby.
              </p>
              <p className="text-stone-300 mb-3 text-base leading-relaxed">
                Those are not the same thing.
              </p>
              <p className="text-stone-300 mb-7 text-base leading-relaxed">
                If you want, send me your needs, wants, and daily routine and I can help you figure out whether being near Interquest should actually matter in your search. You can also learn more about the buying process at the{" "}
                <a href="/colorado-home-buying-workshop" className="text-[#C9A96E] hover:text-[#F5F0EB] underline">Colorado Home Buying Workshop</a>.
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
        <section className="py-12 px-6 border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Common Questions</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-8">FAQ about living near Interquest</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-6">Final thoughts on Interquest</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>Interquest is one of the more useful north-side reference points in Colorado Springs.</p>
              <p>That is why buyers keep bringing it up.</p>
              <p>
                It helps explain shopping, dining, entertainment, and convenience on that side of town. It also helps buyers make better sense of nearby residential areas like{" "}
                <a href="/northgate-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Northgate</a> and{" "}
                <a href="/flying-horse-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Flying Horse</a>.
              </p>
              <p>That is the right role for this page.</p>
              <p>
                It should make the map easier to understand without pretending Interquest is the whole neighborhood decision.
              </p>
              <p>
                If you are trying to sort out where to live on the north side, it usually helps to separate the convenience question from the neighborhood question before you get too far into the search.
              </p>
              <p>
                Browse{" "}
                <a href="/colorado-springs-co-homes-for-sale" className="text-amber-700 hover:underline font-medium">
                  homes for sale in Colorado Springs
                </a>{" "}
                when you are ready to start looking at what is actually available.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Final CTA ─── */}
        <section className="py-14 px-6 bg-[#292524]">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A96E]/70 mb-3 block">Ready to Talk</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#F5F0EB] mb-4">
              Talk to Rob About the North Side
            </h2>
            <p className="text-[#C9A96E] mb-8 text-base md:text-lg">
              If you are trying to sort out where to live on the north side, it usually helps to separate the convenience question from the neighborhood question before you get too far into the search.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href="/#contact"
                className="inline-block bg-[#C9A96E] text-[#292524] font-semibold px-8 py-3.5 rounded-lg hover:bg-[#b8945a] transition-colors text-base"
              >
                Talk to Rob About the North Side
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
                <a href="/northgate-colorado-springs-real-estate/" className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors">Northgate →</a>
                <span className="text-[#C9A96E]/30 text-sm">·</span>
                <a href="/briargate-colorado-springs-real-estate/" className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors">Briargate →</a>
                <span className="text-[#C9A96E]/30 text-sm">·</span>
                <a href="/flying-horse-colorado-springs-real-estate/" className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors">Flying Horse →</a>
              </div>
              <p className="text-stone-500 text-xs font-semibold tracking-widest uppercase mb-4">Keep Exploring</p>
              <div className="flex flex-wrap justify-center gap-x-2 gap-y-3">
                <a href="/colorado-springs-co-homes-for-sale" className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors">Colorado Springs homes for sale →</a>
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
      <footer className="bg-[#292524] py-8 px-6 text-center">
        <p className="text-stone-500 text-sm">
          © {new Date().getFullYear()} My Rock Realty · Colorado Springs Real Estate ·{" "}
          <a href="/" className="text-[#C9A96E] hover:text-[#F5F0EB] transition-colors">myrockhomes.com</a>
        </p>
      </footer>
    </>
  );
}
