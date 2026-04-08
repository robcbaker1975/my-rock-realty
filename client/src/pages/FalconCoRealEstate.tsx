/*
 * Living in Falcon, Colorado — My Rock Realty
 * Premium area SEO page
 * Slug: /falcon-co-real-estate/
 * Design: Front Range Modern — matches existing site design system
 * Content: Approved benchmark version
 */
import SeoHead from "@/components/seo/SeoHead";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { motion } from "framer-motion";
import BuyingBuddyWidget from "@/components/BuyingBuddyWidget";
import Navbar from "@/components/Navbar";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "What do buyers usually notice once they actually start driving Falcon?",
    answer:
      "Most buyers start seeing pretty quickly that Falcon feels more spread out and more varied than they expected. It usually gets easier to understand in person than it does online.",
  },
  {
    question: "What makes Falcon different from Banning Lewis Ranch?",
    answer:
      "Banning Lewis Ranch usually feels more like a neighborhood decision. Falcon usually feels more like a broader area decision with more range in how it lives.",
  },
  {
    question: "What kind of buyer usually ends up choosing Falcon?",
    answer:
      "Usually it is someone who wants more room, is okay being farther out, and wants the east-side trade to stay in play.",
  },
  {
    question: "Who usually moves on from Falcon?",
    answer:
      "Usually it is a buyer who wants the city to feel closer, wants the easiest all-around setup, or already knows the extra driving sounds like a downside.",
  },
  {
    question: "Is Falcon rural or suburban?",
    answer:
      "Both, depending on where you are looking. That is part of why the area works for some buyers and not for others.",
  },
  {
    question: "Is Falcon mostly Meridian Ranch?",
    answer:
      "No. Meridian Ranch is one important part of the Falcon conversation, but Falcon is broader than Meridian Ranch.",
  },
  {
    question: "How does Falcon compare with Briargate?",
    answer:
      "Briargate usually makes more sense when someone wants broad north-side convenience. Falcon usually makes more sense when someone wants more room and is willing to be farther out for it.",
  },
  {
    question: "Is Falcon a good relocation area?",
    answer:
      "Usually yes, if the buyer already knows they are open to the east side and wants more room than they are likely to find in a lot of the city.",
  },
  {
    question: "What are the biggest tradeoffs that come with Falcon?",
    answer:
      "Usually more driving, less central convenience, and the need to get more specific about which part of Falcon actually fits you.",
  },
  {
    question: "Why does Falcon keep coming up for buyers who want more space?",
    answer:
      "Because it solves that problem well. It gives buyers more room and a broader east-side range than they usually get in the city itself.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Falcon, CO Real Estate", url: "/falcon-co-real-estate/" },
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

export default function FalconCoRealEstate() {
  return (
    <>
      <Navbar compact />
      <SeoHead
        metadata={{
          title: "Living in Falcon, Colorado: Real Estate, Tradeoffs, and What It's Like",
          description:
            "Thinking about living in Falcon, Colorado? Learn what Falcon is actually like, who it fits, the real tradeoffs, and how it compares with Banning Lewis Ranch, Meridian Ranch, and Briargate.",
          canonicalUrl: "https://myrockhomes.com/falcon-co-real-estate/",
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
            <span className={sectionLabel}>Colorado Springs Area · East Side</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F0EB] leading-tight mb-5">
              Living in Falcon, Colorado: Real Estate, Tradeoffs, and What It's Like
            </h1>
            <p className="text-[#C9A96E] text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
              A practical guide to whether Falcon fits the way you want everyday life to work.
            </p>
          </motion.div>
        </section>

        {/* ─── Intro ─── */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
            <p>Falcon usually starts making more sense when a buyer knows they want more room and is okay not being right in the middle of Colorado Springs.</p>
            <p>That is usually where the conversation gets more honest.</p>
            <p>
              A lot of buyers first talk about Falcon like it is just farther out. Once they actually drive it, it usually gets more specific than that. Falcon is not one thing. Some of it feels more open. Some of it feels more suburban. Some of it feels more tied to neighborhoods like Meridian Ranch or Woodmen Hills. That is a big part of why it works for some buyers and falls off for others.
            </p>
            <p className="font-medium text-[#292524]">That is why some buyers end up liking it a lot more once they actually spend time there.</p>
          </div>
        </section>

        {/* ─── Who Falcon Usually Fits ─── */}
        <section className="py-12 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Fit</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">Who Falcon usually fits</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>
                Falcon usually fits buyers who want more room and are okay with being farther out.
              </p>
              <p>
                That can mean buyers who want a little more lot size. It can mean buyers who want east-side neighborhoods to stay in play. It can mean buyers who want Meridian Ranch, Woodmen Hills, or the more open Falcon/Peyton side of the conversation to stay on the table.
              </p>
              <p className="font-medium text-[#292524]">It can be a good fit if you want:</p>
              <ul className="space-y-2 pl-0">
                {[
                  "more space",
                  "an east-side or Falcon/Peyton location to stay in play",
                  "suburban Falcon neighborhoods like Meridian Ranch or Woodmen Hills",
                  "the possibility of larger lots in some parts of the area",
                  "more of a spread-out feel than most of the city",
                  "a location where newer growth is part of the story",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C9A96E] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>Falcon is usually not the area people pick when they want to feel close in.</p>
              <p>It is usually the area they pick when more room matters enough to justify the trade.</p>
            </div>
          </div>
        </section>

        {/* ─── What Living in Falcon Feels Like ─── */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Character</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">What living in Falcon feels like once you start looking around</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>Falcon usually feels bigger and more spread out than people expect.</p>
              <p>That matters.</p>
              <p>
                Some buyers need that to be true. They want more elbow room. They do not want everything packed together. They like that some parts of Falcon still feel more open, while other parts give them neighborhoods and everyday convenience.
              </p>
              <p>For some buyers, that is exactly why it works.</p>
              <p>For others, it starts to feel like too much driving, too much tradeoff, or not enough city convenience.</p>
              <p>That is usually the split.</p>
              <p>Falcon usually gets clearer once a buyer stops asking whether it is "good" and starts asking whether they actually want the extra room badly enough.</p>
            </div>
          </div>
        </section>

        {/* ─── What Buyers Usually Notice After a Few Tours ─── */}
        <section className="py-12 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>On the Ground</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">What buyers usually notice after a few tours</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>After a few tours, buyers usually stop talking about Falcon like it is one simple answer.</p>
              <p>They start seeing the real trade.</p>
              <p>Usually it goes something like this:</p>
              <p><a href="/briargate-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Briargate</a> feels easier.</p>
              <p><a href="/banning-lewis-ranch-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Banning Lewis Ranch</a> feels more neighborhood-driven.</p>
              <p>Falcon usually feels more spread out and more east-side.</p>
              <p>And inside Falcon itself, some parts feel more suburban while others feel a lot more open.</p>
              <p>
                That is useful, because buyers who are only thinking in broad labels usually get more clarity once they actually drive it.
              </p>
              <p>
                A lot of the time, Falcon gets stronger when a buyer wants more room and does not need the city to feel close all the time.
              </p>
            </div>
          </div>
        </section>

        {/* ─── East Side Breakdown CTA ─── */}
        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#292524] rounded-xl p-7 md:p-10 border-l-4 border-[#C9A96E]">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A96E]/70 mb-3 block">East Side Comparison</span>
              <h2 className="text-xl md:text-2xl font-bold text-[#F5F0EB] mb-4 leading-snug">
                Still trying to sort out Falcon, <a href="/banning-lewis-ranch-colorado-springs-real-estate/" className="text-[#C9A96E] hover:text-[#F5F0EB] underline">Banning Lewis Ranch</a>, Meridian Ranch, and the rest of the east side?
              </h2>
              <p className="text-stone-300 mb-3 text-base leading-relaxed">
                A lot of buyers start out thinking east-side options are all going to feel close enough. Once they actually drive them, that usually changes pretty fast.
              </p>
              <p className="text-stone-300 mb-7 text-base leading-relaxed">
                If you want, I can help you sort out which east-side area fits the way you actually want to live before you spend too much time chasing the wrong listings.
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

        {/* ─── What Falcon Is Not ─── */}
        <section className="py-12 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Honest Assessment</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">What Falcon is not</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>Falcon is not usually the best fit for a buyer who wants the easiest all-around Colorado Springs setup.</p>
              <p>It is not usually the strongest fit for a buyer who wants to stay tighter to the city.</p>
              <p>
                And it is not usually where buyers end up if the extra drive and extra spread already sound like a downside.
              </p>
              <p>
                Falcon usually works best when more room matters enough to justify the trade.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Tradeoffs ─── */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Tradeoffs</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">Tradeoffs that come with Falcon</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>The upside is pretty obvious.</p>
              <p>Falcon can give buyers more room, more spread, and more east-side options than they are going to get in a lot of the city.</p>
              <p>The tradeoff is that it is not as easy or as central.</p>
              <p>That can mean more driving.</p>
              <p>That can mean a more spread-out daily rhythm.</p>
              <p>
                That can mean needing to get more specific about whether you want suburban Falcon, more open Falcon, or one of the bigger communities in the area.
              </p>
              <p className="font-medium text-[#292524]">So the real question is not whether Falcon is good.</p>
              <p>It is whether Falcon is worth it for the way you want to live.</p>
            </div>
          </div>
        </section>

        {/* ─── Comparison Cluster Header ─── */}
        <div className="bg-[#292524]/5 border-t-2 border-[#C9A96E]/30 px-6 py-5">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Area Comparisons</span>
            <p className="text-stone-500 text-sm">How Falcon stacks up against the other east-side and north-side options buyers usually consider.</p>
          </div>
        </div>

        {/* ─── Falcon vs Banning Lewis Ranch ─── */}
        <section className="py-12 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">Falcon vs <a href="/banning-lewis-ranch-colorado-springs-real-estate/" className="text-amber-700 hover:underline">Banning Lewis Ranch</a></h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>This is one of the more useful comparisons.</p>
              <p>
                <a href="/banning-lewis-ranch-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Banning Lewis Ranch</a> usually feels more like a neighborhood decision.
              </p>
              <p>Falcon usually feels more like an area decision.</p>
              <p>
                If someone wants the neighborhood itself to do more of the work, Banning Lewis Ranch often gets stronger.
              </p>
              <p>
                If someone wants more room, more spread, and more east-side range, Falcon may make more sense.
              </p>
              <p>That is usually the real split.</p>
            </div>
          </div>
        </section>

        {/* ─── Falcon vs Meridian Ranch ─── */}
        <section className="py-12 px-6 border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">Falcon vs Meridian Ranch</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>This one matters because a lot of buyers use Falcon and Meridian Ranch almost interchangeably at first.</p>
              <p>They are not the same thing.</p>
              <p>Meridian Ranch is one of the bigger planned-community answers inside the Falcon conversation. Falcon is broader than that.</p>
              <p>If someone wants the more built-in neighborhood setup, Meridian Ranch may fit better.</p>
              <p>If someone wants the larger Falcon-area tradeoff and more range in how the area feels, Falcon may make more sense.</p>
            </div>
          </div>
        </section>

        {/* ─── Falcon vs Briargate ─── */}
        <section className="py-12 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">Falcon vs <a href="/briargate-colorado-springs-real-estate/" className="text-amber-700 hover:underline">Briargate</a></h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>These are not usually the same decision.</p>
              <p>
                <a href="/briargate-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Briargate</a> usually makes more sense when someone wants broad north-side convenience and an easier all-around setup.
              </p>
              <p>Falcon usually makes more sense when someone wants more room and is willing to be farther out for it.</p>
              <p>If city convenience matters more, Briargate usually wins.</p>
              <p>If space matters more, Falcon can get stronger fast.</p>
            </div>
          </div>
        </section>

        {/* ─── What Falcon Does Well ─── */}
        <section className="py-12 px-6 border-t-2 border-[#C9A96E]/30">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Strengths</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">What Falcon does well</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>Falcon does well for buyers who want more room.</p>
              <p>It does well for buyers who are okay with the east-side trade.</p>
              <p>
                It does well for people who want options, because Falcon can include more open areas, suburban neighborhoods, and bigger planned communities in the same broader conversation.
              </p>
              <p>It also does well for buyers who want the area itself to open up a little.</p>
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
                Some buyers like Falcon right away because it feels bigger and more open. Others like the idea of it, but once they compare it with <a href="/banning-lewis-ranch-colorado-springs-real-estate/" className="text-[#C9A96E] hover:text-[#F5F0EB] underline">Banning Lewis Ranch</a> or <a href="/briargate-colorado-springs-real-estate/" className="text-[#C9A96E] hover:text-[#F5F0EB] underline">Briargate</a> they realize they want something easier or more neighborhood-driven.
              </p>
              <p className="text-stone-300 mb-7 text-base leading-relaxed">
                If you want, send me your Needs, Wants, and Dreams list and I can help you sort out whether Falcon really fits or whether another east-side or north-side option makes more sense. You can also learn more about the buying process at the <a href="/colorado-home-buying-workshop" className="text-[#C9A96E] hover:text-[#F5F0EB] underline">Colorado Home Buying Workshop</a>.
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

        {/* ─── Search CTA ─── */}
        <section className="py-12 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-3">Search Falcon homes</h2>
            <p className="text-stone-700 text-base md:text-lg leading-relaxed mb-6">See active listings in Falcon and narrow the search from there.</p>
            <a
              href="/listing-results?searchParams%5Bcity%5D=Falcon"
              className="inline-block bg-[#C9A96E] text-[#292524] font-semibold px-8 py-3.5 rounded-lg hover:bg-[#b8945a] transition-colors text-base"
            >
              Open Falcon home search
            </a>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="py-14 px-6">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Common Questions</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-8">FAQ about living in Falcon</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-8">Featured Falcon Listings</h2>
            <BuyingBuddyWidget
              type="FeaturedGallery"
              filter="carousel:true+shapesearch:38.9750 -104.6200,38.9750 -104.5050,38.8800 -104.5050,38.8800 -104.6200,38.9750 -104.6200+mls_id:ppar+listing_status:active,coming-soon+order:create_dt desc"
            />
          </div>
        </section>

        {/* ─── Final Thoughts ─── */}
        <section className="py-14 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Wrap-Up</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-6">Final thoughts on Falcon</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>Falcon is not trying to be the easiest answer.</p>
              <p>It is trying to be a different one.</p>
              <p>
                If you want more room, more spread, and more east-side flexibility, Falcon can make a lot of sense.
              </p>
              <p>If you want easier city convenience, it may not.</p>
              <p>
                That is what makes Falcon useful to sort out early instead of late.
              </p>
              <p>
                If you are trying to figure out whether Falcon really fits the way you live, it is usually better to sort that out early than after you have already spent a lot of time looking at <a href="/colorado-springs-co-homes-for-sale" className="text-amber-700 hover:underline font-medium">homes in Colorado Springs</a> that may not fit as well as you thought.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Final CTA ─── */}
        <section className="py-14 px-6 bg-[#292524]">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A96E]/70 mb-3 block">Ready to Talk</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#F5F0EB] mb-4">
              Talk to Rob About Falcon
            </h2>
            <p className="text-[#C9A96E] mb-8 text-base md:text-lg">
              Get clear on the map before you get too far into the house search.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href="/#contact"
                className="inline-block bg-[#C9A96E] text-[#292524] font-semibold px-8 py-3.5 rounded-lg hover:bg-[#b8945a] transition-colors text-base"
              >
                Talk to Rob About Falcon
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
                <a href="/banning-lewis-ranch-colorado-springs-real-estate/" className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors">Banning Lewis Ranch →</a>
                <span className="text-[#C9A96E]/30 text-sm">·</span>
                <a href="/briargate-colorado-springs-real-estate/" className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors">Briargate →</a>
              </div>
              <p className="text-stone-500 text-xs font-semibold tracking-widest uppercase mb-4">Keep Exploring</p>
              <div className="flex flex-wrap justify-center gap-x-2 gap-y-3">
                <a href="/banning-lewis-ranch-colorado-springs-real-estate/" className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors">Banning Lewis Ranch →</a>
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
