/*
 * Living in Banning Lewis Ranch, Colorado Springs — My Rock Realty
 * Slug: /banning-lewis-ranch-colorado-springs-real-estate/
 * Content: Approved benchmark version
 * Presentation: Briargate benchmark layout
 */
import SeoHead from "@/components/seo/SeoHead";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { motion } from "framer-motion";
import BuyingBuddyWidget from "@/components/BuyingBuddyWidget";
import Navbar from "@/components/Navbar";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "Why do buyers keep Banning Lewis Ranch in the search once they tour it?",
    answer:
      "Because it usually feels more substantial in person. Buyers notice pretty quickly that it is a big planned community with real amenities, not just newer houses in a random east-side pocket.",
  },
  {
    question: "What makes Banning Lewis Ranch different from Cordera?",
    answer:
      "Cordera usually feels more north-side and tighter. Banning Lewis Ranch usually feels larger, farther east, and more built around scale.",
  },
  {
    question: "What kind of buyer usually ends up choosing Banning Lewis Ranch?",
    answer:
      "Usually it is a buyer who wants newer homes, a large planned-community setup, and enough amenities to make the east-side trade feel worth it.",
  },
  {
    question: "Who usually moves on from Banning Lewis Ranch?",
    answer:
      "Usually it is someone who wants a more established feel, wants to stay more squarely in the north-side conversation, or already knows the east-side location feels like too much of a compromise.",
  },
  {
    question: "Does Banning Lewis Ranch feel far out?",
    answer:
      "For some buyers, yes. That is one of the main tradeoffs. The question is whether the neighborhood itself gives you enough back to make that feel worth it.",
  },
  {
    question: "How does Banning Lewis Ranch compare with Briargate?",
    answer:
      "Briargate is usually the broader all-around north-side choice. Banning Lewis Ranch is usually the larger east-side planned-community choice.",
  },
  {
    question: "How does Banning Lewis Ranch compare with Falcon?",
    answer:
      "Falcon usually comes up as part of the broader east-side conversation. Banning Lewis Ranch usually gets stronger when the buyer wants the planned-community amenities and neighborhood structure to do more of the work.",
  },
  {
    question: "What are the main advantages of Banning Lewis Ranch?",
    answer:
      "Usually newer homes, more neighborhood amenities, and a larger planned-community environment that gives buyers a lot to work with.",
  },
  {
    question: "What are the main downsides of Banning Lewis Ranch?",
    answer:
      "Usually the east-side location and the fact that the neighborhood works best when the planned-community setup is a real plus for you.",
  },
  {
    question: "Why does Banning Lewis Ranch keep coming up in newer-home searches?",
    answer:
      "Because it solves that newer planned-community problem well. For the right buyer, it gives a lot of neighborhood in exchange for being farther east.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Banning Lewis Ranch, Colorado Springs Real Estate", url: "/banning-lewis-ranch-colorado-springs-real-estate/" },
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

export default function BanningLewisRanchColoradoSpringsRealEstate() {
  return (
    <>
      <Navbar compact />
      <SeoHead
        metadata={{
          title: "Living in Banning Lewis Ranch, Colorado Springs: Real Estate, Tradeoffs, and What It's Like",
          description:
            "Thinking about living in Banning Lewis Ranch, Colorado Springs? Learn what Banning Lewis Ranch is actually like, who it fits, the real tradeoffs, and how it compares with Briargate, Cordera, and Falcon.",
          canonicalUrl: "https://myrockhomes.com/banning-lewis-ranch-colorado-springs-real-estate/",
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
            <span className={sectionLabel}>Colorado Springs · East Side</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F0EB] leading-tight mb-5">
              Living in Banning Lewis Ranch, Colorado Springs: Real Estate, Tradeoffs, and What It's Like
            </h1>
            <p className="text-[#C9A96E] text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
              A practical guide to whether Banning Lewis Ranch fits the way you want everyday life to work.
            </p>
          </motion.div>
        </section>

        {/* ─── Intro ─── */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
            <p>Banning Lewis Ranch usually makes the most sense for buyers who want a large newer planned community and are comfortable being farther east.</p>
            <p>That is usually the real starting point.</p>
            <p>
              A lot of buyers first notice Banning Lewis Ranch because it is newer, big, and keeps coming up in east-side searches. Once you actually drive it, the question gets simpler: does the community itself give you enough back to make the east-side trade feel worth it?
            </p>
            <p className="font-medium text-[#292524]">That is the real decision.</p>
          </div>
        </section>

        {/* ─── Who Banning Lewis Ranch Usually Fits ─── */}
        <section className="py-12 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Fit</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">Who Banning Lewis Ranch usually fits</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>
                Banning Lewis Ranch usually fits buyers who want scale and newer planned-community living.
              </p>
              <p>
                It often works for buyers who want newer homes, a lot of neighborhood amenities, and a community that does more of the work for them once they are there.
              </p>
              <p className="font-medium text-[#292524]">It can be a good fit if you want:</p>
              <ul className="space-y-2 pl-0">
                {[
                  "newer homes",
                  "a larger planned-community environment",
                  "a lot of neighborhood amenities",
                  "east-side value to stay in the conversation",
                  "parks, trails, and recreation built into the neighborhood",
                  "a place where the community itself does a lot of the work",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C9A96E] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                Banning Lewis Ranch usually does not work as well for buyers who already know they do not want the east side.
              </p>
              <p>That part matters.</p>
            </div>
          </div>
        </section>

        {/* ─── What Living in Banning Lewis Ranch Feels Like ─── */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Character</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">What living in Banning Lewis Ranch feels like once you start looking around</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>Banning Lewis Ranch usually feels big.</p>
              <p>That matters more than people expect.</p>
              <p>
                It does not usually feel like a smaller neighborhood tucked into the city. It feels like a large planned area with its own momentum. For some buyers, that is a plus. There is enough going on inside the community that it starts to feel like a self-contained choice. For others, it feels farther out and a little more dependent on buying into the community itself.
              </p>
              <p>That is usually the real split.</p>
              <p>
                If the scale and amenity package feel like a plus, Banning Lewis Ranch usually gets stronger.
              </p>
              <p>If the east-side trade already feels like too much, it usually gets weaker.</p>
            </div>
          </div>
        </section>

        {/* ─── What Buyers Usually Notice After a Few Tours ─── */}
        <section className="py-12 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>On the Ground</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">What buyers usually notice after a few tours</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>After a few tours, buyers usually realize Banning Lewis Ranch is not just an east-side fallback.</p>
              <p>It is its own thing.</p>
              <p>They notice the scale.</p>
              <p>They notice that the neighborhood itself is doing a lot of the work.</p>
              <p>They notice that if they are okay being farther east, the community can start to make a lot of sense.</p>
              <p>They also notice the tradeoff pretty quickly.</p>
              <p>
                If they want easier north-side positioning, a more established feel, or a less all-in planned-community experience, Banning Lewis Ranch can start to fall off.
              </p>
              <p>That is useful.</p>
              <p>It helps people stop pretending every newer neighborhood solves the same problem.</p>
            </div>
          </div>
        </section>

        {/* ─── East Side Breakdown CTA ─── */}
        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#292524] rounded-xl p-7 md:p-10 border-l-4 border-[#C9A96E]">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A96E]/70 mb-3 block">East Side Comparison</span>
              <h2 className="text-xl md:text-2xl font-bold text-[#F5F0EB] mb-4 leading-snug">
                Still trying to sort out Banning Lewis Ranch, <a href="/cordera-colorado-springs-real-estate/" className="text-[#C9A96E] hover:text-[#F5F0EB] underline">Cordera</a>, <a href="/briargate-colorado-springs-real-estate/" className="text-[#C9A96E] hover:text-[#F5F0EB] underline">Briargate</a>, and Falcon?
              </h2>
              <p className="text-stone-300 mb-3 text-base leading-relaxed">
                That is normal. Those are not the same decision.
              </p>
              <p className="text-stone-300 mb-3 text-base leading-relaxed">
                Banning Lewis Ranch usually matters because of scale and amenities. <a href="/cordera-colorado-springs-real-estate/" className="text-[#C9A96E] hover:text-[#F5F0EB] underline">Cordera</a> usually matters because of north-side planned-community ease. <a href="/briargate-colorado-springs-real-estate/" className="text-[#C9A96E] hover:text-[#F5F0EB] underline">Briargate</a> usually matters because it is the broader all-around north-side default. Falcon usually matters when a buyer is pushing farther east and wants a different kind of tradeoff.
              </p>
              <p className="text-stone-300 mb-7 text-base leading-relaxed">
                That is the cleaner way to sort it.
              </p>
              <a
                href="/#contact"
                className="inline-block bg-[#C9A96E] text-[#292524] font-semibold px-8 py-3.5 rounded-lg hover:bg-[#b8945a] transition-colors text-base"
              >
                Send me the east side breakdown
              </a>
            </div>
          </div>
        </section>

        {/* ─── Search CTA ─── */}
        <section className="py-12 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-3">Search Banning Lewis Ranch homes</h2>
            <p className="text-stone-700 text-base md:text-lg leading-relaxed mb-6">See active listings in Banning Lewis Ranch and narrow the search from there.</p>
            <a
              href="/listing-results?searchParams%5Bcity%5D=Colorado%20Springs&searchParams%5Bsubdivision%5D=Banning%20Lewis%20Ranch"
              className="inline-block bg-[#C9A96E] text-[#292524] font-semibold px-8 py-3.5 rounded-lg hover:bg-[#b8945a] transition-colors text-base"
            >
              Open Banning Lewis Ranch home search
            </a>
          </div>
        </section>

        {/* ─── What Banning Lewis Ranch Is Not ─── */}
        <section className="py-12 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Honest Assessment</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">What Banning Lewis Ranch is not</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>Banning Lewis Ranch is not usually the best fit for buyers who want to stay in the heart of the north side.</p>
              <p>It is not usually the strongest choice for buyers who want a more established older neighborhood feel.</p>
              <p>
                And it is not usually where buyers end up if being farther east already feels like too much of a compromise.
              </p>
              <p>It works best when the community itself is strong enough to justify the location trade.</p>
            </div>
          </div>
        </section>

        {/* ─── Tradeoffs ─── */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Tradeoffs</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">Tradeoffs that come with Banning Lewis Ranch</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>The upside is pretty obvious.</p>
              <p>You get a large planned community, newer housing, and a lot of built-in amenities.</p>
              <p>The tradeoff is that you are farther east.</p>
              <p>For some buyers, that is completely fine.</p>
              <p>For others, that ends the conversation.</p>
              <p>
                The real question is whether the scale, amenities, and newer setup are enough to make that trade feel worth it.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Comparison Cluster Header ─── */}
        <div className="bg-[#292524]/5 border-t-2 border-[#C9A96E]/30 px-6 py-5">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Area Comparisons</span>
            <p className="text-stone-500 text-sm">How Banning Lewis Ranch stacks up against the other options buyers usually consider.</p>
          </div>
        </div>

        {/* ─── Banning Lewis Ranch vs Cordera ─── */}
        <section className="py-12 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">Banning Lewis Ranch vs <a href="/cordera-colorado-springs-real-estate/" className="text-amber-700 hover:underline">Cordera</a></h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>Both are planned-community conversations, but they usually attract buyers for different reasons.</p>
              <p><a href="/cordera-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Cordera</a> usually feels more north-side, tighter, and easier.</p>
              <p>Banning Lewis Ranch usually feels bigger, farther east, and more built around scale.</p>
              <p>
                If someone wants the north side and a cleaner, more compact planned-community feel, Cordera often wins.
              </p>
              <p>
                If someone wants more east-side scale and a larger community environment, Banning Lewis Ranch may make more sense.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Banning Lewis Ranch vs Briargate ─── */}
        <section className="py-12 px-6 border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">Banning Lewis Ranch vs <a href="/briargate-colorado-springs-real-estate/" className="text-amber-700 hover:underline">Briargate</a></h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p><a href="/briargate-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Briargate</a> is usually the broader all-around north-side default.</p>
              <p>Banning Lewis Ranch is usually the more specific east-side planned-community choice.</p>
              <p>
                If a buyer wants to stay more centered in the north-side conversation, Briargate often stays stronger.
              </p>
              <p>
                If they want a large newer planned community and are willing to be farther east, Banning Lewis Ranch can get stronger fast.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Banning Lewis Ranch vs Falcon ─── */}
        <section className="py-12 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">Banning Lewis Ranch vs Falcon</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>This comparison usually comes up for buyers who are already pushing east.</p>
              <p>
                Falcon can make sense when a buyer wants more of that broader east-side tradeoff.
              </p>
              <p>
                Banning Lewis Ranch usually gets stronger when the buyer wants the planned-community amenities and neighborhood structure to do more of the work.
              </p>
              <p>That is the split.</p>
            </div>
          </div>
        </section>

        {/* ─── What Banning Lewis Ranch Does Well ─── */}
        <section className="py-12 px-6 border-t-2 border-[#C9A96E]/30">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Strengths</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">What Banning Lewis Ranch does well</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>Banning Lewis Ranch does well for buyers who want the neighborhood itself to do a lot of work.</p>
              <p>It does well for buyers who want newer homes.</p>
              <p>It does well for buyers who want amenities and recreation built into the community.</p>
              <p>It does well for people who are okay being farther east if the community payoff is strong enough.</p>
              <p>And it does well for buyers who want a big, active, planned-community feel.</p>
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
                That is where this usually gets easier. Some buyers want Banning Lewis Ranch because it looks newer and active. Others want it because the whole east-side trade actually works for the way they live.
              </p>
              <p className="text-stone-300 mb-3 text-base leading-relaxed">
                Those are not the same thing.
              </p>
              <p className="text-stone-300 mb-7 text-base leading-relaxed">
                If you want, send me your Needs, Wants, and Dreams list and I can help you sort out whether Banning Lewis Ranch really fits. You can also learn more about the buying process at the <a href="/colorado-home-buying-workshop" className="text-[#C9A96E] hover:text-[#F5F0EB] underline">Colorado Home Buying Workshop</a>.
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
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-8">FAQ about living in Banning Lewis Ranch</h2>
            <div>
              {faqContent.map((item, i) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── Featured Listings ─── */}
        <section className="py-14 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Featured Listings</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-8">Featured Banning Lewis Ranch Listings</h2>
            <BuyingBuddyWidget
              type="FeaturedGallery"
              filter="carousel:true+shapesearch:38.9475 -104.6835,38.9475 -104.6320,38.8895 -104.6320,38.8895 -104.6835,38.9475 -104.6835+mls_id:ppar+listing_status:active,coming-soon+order:create_dt desc"
            />
          </div>
        </section>

        {/* ─── Final Thoughts ─── */}
        <section className="py-14 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Wrap-Up</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-6">Final thoughts on Banning Lewis Ranch</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>Banning Lewis Ranch is not trying to be a small neighborhood.</p>
              <p>It is trying to be a large planned-community choice that gives buyers a lot in return.</p>
              <p>
                If you want newer, active, amenity-heavy, and are comfortable with the east-side trade, it can make a lot of sense.
              </p>
              <p>If being farther east already feels like the wrong move, it probably will not.</p>
              <p>That is usually the decision.</p>
              <p>
                If you are trying to figure out whether Banning Lewis Ranch really fits the way you live, it is usually better to sort that out early than after you have already spent a lot of time looking at <a href="/colorado-springs-co-homes-for-sale" className="text-amber-700 hover:underline font-medium">homes in Colorado Springs</a> that may not fit as well as you thought.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Final CTA ─── */}
        <section className="py-14 px-6 bg-[#292524]">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A96E]/70 mb-3 block">Ready to Talk</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#F5F0EB] mb-4">
              Talk to Rob About Banning Lewis Ranch
            </h2>
            <p className="text-[#C9A96E] mb-8 text-base md:text-lg">
              Get clear on the map before you get too far into the house search.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href="/#contact"
                className="inline-block bg-[#C9A96E] text-[#292524] font-semibold px-8 py-3.5 rounded-lg hover:bg-[#b8945a] transition-colors text-base"
              >
                Talk to Rob About Banning Lewis Ranch
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
                <a href="/cordera-colorado-springs-real-estate/" className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors">Cordera →</a>
                <span className="text-[#C9A96E]/30 text-sm">·</span>
                <a href="/briargate-colorado-springs-real-estate/" className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors">Briargate →</a>
                <span className="text-[#C9A96E]/30 text-sm">·</span>
                <a href="/colorado-springs-co-homes-for-sale" className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors">Other east-side options →</a>
              </div>
              <p className="text-stone-500 text-xs font-semibold tracking-widest uppercase mb-4">Keep Exploring</p>
              <div className="flex flex-wrap justify-center gap-x-2 gap-y-3">
                <a href="/briargate-colorado-springs-real-estate/" className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors">Briargate →</a>
                <span className="text-[#C9A96E]/30 text-sm">·</span>
                <a href="/moving-to-colorado-springs/" className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors">Moving to Colorado Springs →</a>
                <span className="text-[#C9A96E]/30 text-sm">·</span>
                <a href="/colorado-home-buying-workshop" className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors">Colorado Home Buying Workshop →</a>
                <span className="text-[#C9A96E]/30 text-sm">·</span>
                <a href="/colorado-springs-co-homes-for-sale" className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors">Colorado Springs Homes →</a>
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
