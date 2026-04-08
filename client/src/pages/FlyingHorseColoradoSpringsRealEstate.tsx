/*
 * Living in Flying Horse, Colorado Springs — My Rock Realty
 * Slug: /flying-horse-colorado-springs-real-estate/
 * Content: Approved benchmark version
 * Presentation: Briargate benchmark layout
 */
import SeoHead from "@/components/seo/SeoHead";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "Why do buyers choose Flying Horse instead of just choosing the north side broadly?",
    answer:
      "Because Flying Horse is usually a more specific community choice. Buyers often want Flying Horse in particular, not just any north-side option.",
  },
  {
    question: "What makes Flying Horse different from Briargate?",
    answer:
      "Briargate is usually the easier all-around north-side choice. Flying Horse is usually the more specific name-neighborhood choice.",
  },
  {
    question: "What kind of buyer usually ends up choosing Flying Horse?",
    answer:
      "Usually it is a buyer who wants the neighborhood identity to matter and wants the community itself to carry more of the decision.",
  },
  {
    question: "Who usually moves on from Flying Horse?",
    answer:
      "Usually it is a buyer who realizes they care more about convenience, location, or a broader all-around setup than about the specific neighborhood identity.",
  },
  {
    question: "Is Flying Horse mostly about golf?",
    answer:
      "Not only that, but the golf-and-club side of the conversation is a real part of why people talk about it differently from nearby areas.",
  },
  {
    question: "Is Flying Horse better than Northgate?",
    answer:
      "Not across the board. Northgate usually makes more sense for buyers who care more about farther-north location and access. Flying Horse usually makes more sense for buyers who care more about community identity.",
  },
  {
    question: "Is Flying Horse better than Cordera?",
    answer:
      "It depends on what matters to you. Flying Horse usually wins on stronger identity. Cordera usually fits better when a buyer wants a cleaner planned-community feel without the same identity layer.",
  },
  {
    question: "Is Flying Horse a good relocation area?",
    answer:
      "It can be, but it works best when the relocation buyer already knows they want a more specific neighborhood choice rather than just a convenient north-side option.",
  },
  {
    question: "What are the main downsides of Flying Horse?",
    answer:
      "The biggest downside is that the strong community identity can feel unnecessary if that is not important to you. In that case, other nearby areas may make more sense.",
  },
  {
    question: "Why does Flying Horse keep coming up in north-side searches?",
    answer:
      "Because it gives buyers a very specific kind of north-side option, and for the right buyer that specificity matters.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Flying Horse, Colorado Springs Real Estate", url: "/flying-horse-colorado-springs-real-estate/" },
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

export default function FlyingHorseColoradoSpringsRealEstate() {
  return (
    <>
      <Navbar compact />
      <SeoHead
        metadata={{
          title: "Living in Flying Horse, Colorado Springs: Real Estate, Tradeoffs, and What It's Like",
          description:
            "Thinking about living in Flying Horse, Colorado Springs? Learn what Flying Horse is actually like, who it fits, the real tradeoffs, and how it compares with Briargate, Northgate, and Cordera.",
          canonicalUrl: "https://myrockhomes.com/flying-horse-colorado-springs-real-estate/",
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
              Living in Flying Horse, Colorado Springs: Real Estate, Tradeoffs, and What It's Like
            </h1>
            <p className="text-[#C9A96E] text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
              A practical guide to whether Flying Horse fits the way you want everyday life to work.
            </p>
          </motion.div>
        </section>

        {/* ─── Intro ─── */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
            <p>Flying Horse usually makes the most sense for buyers who want the neighborhood identity to matter.</p>
            <p>That is usually the first thing to get clear.</p>
            <p>
              A lot of north-side areas come up because they are convenient. Flying Horse usually comes up because people want Flying Horse specifically. That is a different kind of decision.
            </p>
            <p className="font-medium text-[#292524]">That is why this page needs to be honest.</p>
          </div>
        </section>

        {/* ─── Who Flying Horse Usually Fits ─── */}
        <section className="py-12 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Fit</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">Who Flying Horse usually fits</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>
                Flying Horse usually fits buyers who want a stronger name-neighborhood feel and know that matters to them.
              </p>
              <p>
                That can mean buyers who care about the club-and-golf side of the area. It can mean buyers who want a more defined neighborhood identity. It can also mean buyers who want the north side but do not want the area to feel generic.
              </p>
              <p className="font-medium text-[#292524]">It can be a good fit if you want:</p>
              <ul className="space-y-2 pl-0">
                {[
                  "a stronger neighborhood identity",
                  "a more specific north-side choice",
                  "golf or club access to matter",
                  "a polished planned-community feel",
                  "a neighborhood people choose on purpose",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C9A96E] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                Flying Horse usually works best when the name itself is part of the draw.
              </p>
              <p>If that does not matter much to you, that is worth catching early.</p>
            </div>
          </div>
        </section>

        {/* ─── What Living in Flying Horse Feels Like ─── */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Character</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">What living in Flying Horse feels like once you start looking around</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>Flying Horse usually feels more specific than nearby options.</p>
              <p>That is the point.</p>
              <p>
                It does not usually feel like buyers just landed there because it happened to be on the map. It feels like a place people chose because they wanted that community identity, that kind of presentation, and that side of town.
              </p>
              <p>For some buyers, that feels like a plus right away.</p>
              <p>For others, it feels like more neighborhood identity than they actually need.</p>
              <p>That is usually the real decision.</p>
            </div>
          </div>
        </section>

        {/* ─── What Buyers Usually Notice After a Few Tours ─── */}
        <section className="py-12 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>On the Ground</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">What buyers usually notice after a few tours</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>After a few tours, buyers usually stop comparing Flying Horse to every other north-side option in the same way.</p>
              <p>They start seeing that it is a more intentional choice.</p>
              <p>They notice the stronger identity.</p>
              <p>
                They notice that the club-and-golf side of the conversation matters more here than it does in most nearby areas.
              </p>
              <p>
                And they usually realize that if they do not care much about that part, the case for Flying Horse gets weaker pretty quickly.
              </p>
              <p>That is useful.</p>
              <p>It helps the right buyers get more confident and the wrong buyers move on faster.</p>
            </div>
          </div>
        </section>

        {/* ─── North Side Breakdown CTA ─── */}
        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#292524] rounded-xl p-7 md:p-10 border-l-4 border-[#C9A96E]">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A96E]/70 mb-3 block">North Side Comparison</span>
              <h2 className="text-xl md:text-2xl font-bold text-[#F5F0EB] mb-4 leading-snug">
                Still trying to sort out Flying Horse, <a href="/briargate-colorado-springs-real-estate/" className="text-[#C9A96E] hover:text-[#F5F0EB] underline">Briargate</a>, <a href="/northgate-colorado-springs-real-estate/" className="text-[#C9A96E] hover:text-[#F5F0EB] underline">Northgate</a>, and the rest of the north side?
              </h2>
              <p className="text-stone-300 mb-3 text-base leading-relaxed">
                That is normal. A lot of buyers start broad and then realize they are deciding between a few very different kinds of north-side living.
              </p>
              <p className="text-stone-300 mb-3 text-base leading-relaxed">
                Flying Horse usually matters because of identity. <a href="/briargate-colorado-springs-real-estate/" className="text-[#C9A96E] hover:text-[#F5F0EB] underline">Briargate</a> usually matters because it is easier and broader. <a href="/northgate-colorado-springs-real-estate/" className="text-[#C9A96E] hover:text-[#F5F0EB] underline">Northgate</a> usually matters because of location and access.
              </p>
              <p className="text-stone-300 mb-7 text-base leading-relaxed">
                That is usually the cleaner way to sort it.
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

        {/* ─── What Flying Horse Is Not ─── */}
        <section className="py-12 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Honest Assessment</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">What Flying Horse is not</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>Flying Horse is not usually the best fit for buyers who just want the easiest all-around north-side option.</p>
              <p>It is not usually where buyers end up if they do not care much about neighborhood identity.</p>
              <p>
                And it is not usually the strongest choice if you want a more ordinary suburban feel without that stronger community brand.
              </p>
              <p>Flying Horse works best when the specific community choice matters.</p>
            </div>
          </div>
        </section>

        {/* ─── Tradeoffs ─── */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Tradeoffs</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">Tradeoffs that come with Flying Horse</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>The upside is pretty obvious.</p>
              <p>You get a more defined neighborhood identity than you do in a lot of nearby areas.</p>
              <p>You get a more specific north-side choice.</p>
              <p>
                And if the club, golf, or athletic side of the area matters to you, that can be a real plus.
              </p>
              <p>
                The tradeoff is that Flying Horse can feel like more neighborhood identity than some buyers actually need.
              </p>
              <p>
                It can also make less sense if your main goal is just convenience, simplicity, or a broad all-around north-side default.
              </p>
              <p>So the real question is not whether Flying Horse is nice.</p>
              <p>It is whether it is the kind of nice that actually matters to you.</p>
            </div>
          </div>
        </section>

        {/* ─── Comparison Cluster Header ─── */}
        <div className="bg-[#292524]/5 border-t-2 border-[#C9A96E]/30 px-6 py-5">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Area Comparisons</span>
            <p className="text-stone-500 text-sm">How Flying Horse stacks up against the other north-side options buyers usually consider.</p>
          </div>
        </div>

        {/* ─── Flying Horse vs Briargate ─── */}
        <section className="py-12 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">Flying Horse vs <a href="/briargate-colorado-springs-real-estate/" className="text-amber-700 hover:underline">Briargate</a></h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p><a href="/briargate-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Briargate</a> is usually the broader and easier north-side choice.</p>
              <p>Flying Horse is usually the more specific one.</p>
              <p>
                If a buyer wants a more established all-around area with easier day-to-day convenience and less emphasis on one strong neighborhood identity, Briargate often makes more sense.
              </p>
              <p>
                If they want a more intentional neighborhood choice where the name and community feel carry more weight, Flying Horse usually gets stronger.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Flying Horse vs Northgate ─── */}
        <section className="py-12 px-6 border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">Flying Horse vs <a href="/northgate-colorado-springs-real-estate/" className="text-amber-700 hover:underline">Northgate</a></h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>
                <a href="/northgate-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Northgate</a> usually makes more sense when being farther north, closer to I-25, and closer to the Air Force Academy matters most.
              </p>
              <p>Flying Horse usually makes more sense when the neighborhood identity matters more.</p>
              <p>That is the real split.</p>
              <p>If the map is doing most of the work, Northgate may win.</p>
              <p>If the community choice is doing more of the work, Flying Horse may win.</p>
            </div>
          </div>
        </section>

        {/* ─── Flying Horse vs Cordera ─── */}
        <section className="py-12 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">Flying Horse vs <a href="/cordera-colorado-springs-real-estate/" className="text-amber-700 hover:underline">Cordera</a></h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>
                <a href="/cordera-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Cordera</a> and Flying Horse can attract some of the same buyers, but they do not usually solve the same problem.
              </p>
              <p>Cordera usually feels more like a clean, planned, amenity-driven neighborhood.</p>
              <p>Flying Horse usually feels more like a stronger-name community choice.</p>
              <p>If someone wants the stronger neighborhood identity, Flying Horse often wins.</p>
              <p>
                If someone wants a more general planned-community feel without that same identity layer, Cordera may fit better.
              </p>
            </div>
          </div>
        </section>

        {/* ─── What Flying Horse Does Well ─── */}
        <section className="py-12 px-6 border-t-2 border-[#C9A96E]/30">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Strengths</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">What Flying Horse does well</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>Flying Horse does well for buyers who want the neighborhood to feel like a real choice, not just a location.</p>
              <p>It does well for buyers who care about identity.</p>
              <p>It does well for buyers who want the club-and-golf side of the conversation to actually matter.</p>
              <p>
                And it does well for buyers who want a more polished north-side community without sliding into a generic north-side default.
              </p>
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
                That is where this usually gets easier. Some buyers want Flying Horse because it sounds impressive. Others want it because it actually fits the way they want to live.
              </p>
              <p className="text-stone-300 mb-3 text-base leading-relaxed">
                Those are not the same thing.
              </p>
              <p className="text-stone-300 mb-7 text-base leading-relaxed">
                If you want, send me your Needs, Wants, and Dreams list and I can help you figure out whether Flying Horse really belongs on your list. You can also learn more about the buying process at the <a href="/colorado-home-buying-workshop" className="text-[#C9A96E] hover:text-[#F5F0EB] underline">Colorado Home Buying Workshop</a>.
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
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-8">FAQ about living in Flying Horse</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-6">Final thoughts on Flying Horse</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>Flying Horse is not trying to be the easiest north-side choice.</p>
              <p>It is trying to be a stronger one for a certain kind of buyer.</p>
              <p>
                If you want a neighborhood that feels more intentional, more defined, and more like a real community choice, Flying Horse can make a lot of sense.
              </p>
              <p>If you just want the broad easiest north-side setup, it may not.</p>
              <p>That is what makes it useful to compare honestly.</p>
              <p>
                If you are trying to figure out whether Flying Horse really fits the way you live, it is usually better to sort that out early than after you have already spent a lot of time looking at <a href="/colorado-springs-co-homes-for-sale" className="text-amber-700 hover:underline font-medium">homes in Colorado Springs</a> that may not fit as well as you thought.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Final CTA ─── */}
        <section className="py-14 px-6 bg-[#292524]">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A96E]/70 mb-3 block">Ready to Talk</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#F5F0EB] mb-4">
              Talk to Rob About Flying Horse
            </h2>
            <p className="text-[#C9A96E] mb-8 text-base md:text-lg">
              Get clear on the map before you get too far into the house search.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href="/#contact"
                className="inline-block bg-[#C9A96E] text-[#292524] font-semibold px-8 py-3.5 rounded-lg hover:bg-[#b8945a] transition-colors text-base"
              >
                Talk to Rob About Flying Horse
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
                <a href="/northgate-colorado-springs-real-estate/" className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors">Northgate →</a>
                <span className="text-[#C9A96E]/30 text-sm">·</span>
                <a href="/cordera-colorado-springs-real-estate/" className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors">Cordera →</a>
              </div>
              <p className="text-stone-500 text-xs font-semibold tracking-widest uppercase mb-4">Keep Exploring</p>
              <div className="flex flex-wrap justify-center gap-x-2 gap-y-3">
                <a href="/briargate-colorado-springs-real-estate/" className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors">Briargate →</a>
                <span className="text-[#C9A96E]/30 text-sm">·</span>
                <a href="/northgate-colorado-springs-real-estate/" className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors">Northgate →</a>
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
