/*
 * Living in Northgate, Colorado Springs — My Rock Realty
 * Premium neighborhood SEO page
 * Slug: /northgate-colorado-springs-real-estate/
 * Design: Front Range Modern — matches Briargate benchmark design system
 * Content: Approved benchmark version
 */
import SeoHead from "@/components/seo/SeoHead";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "What do buyers usually notice once they actually start driving Northgate?",
    answer:
      "Most buyers start seeing pretty quickly that Northgate is really about being farther north, being closer to I-25, and being closer to the Air Force Academy side of town. It usually gets easier to understand in person than it does online. That is why some buyers keep it in the search once they tour it, and others realize pretty quickly it is not the right fit.",
  },
  {
    question: "What makes Northgate different from Briargate?",
    answer:
      "Briargate is usually the easier all-around north-side choice. It tends to be better for shopping, errands, restaurants, parks, and the normal week-to-week things people use all the time. Northgate is usually more about where it sits. It makes more sense for buyers who want to be farther north, closer to I-25, and closer to the Air Force Academy. In a lot of spots, it can also feel quieter than Briargate.",
  },
  {
    question: "What kind of buyer usually ends up choosing Northgate?",
    answer:
      "Usually it is someone who already knows the north end matters and is not just saying that loosely. They may want easier I-25 access. They may want to stay closer to the Air Force Academy side of town. They may want a location that works better for certain drives. They may also be okay giving up some nearby shopping and convenience if the map works better for the way they live.",
  },
  {
    question: "Who usually decides Northgate is not the right fit?",
    answer:
      "Usually it is a buyer who wants the easiest all-around north-side option, more nearby shopping and restaurants, or a more established neighborhood feel. Some buyers also move on when they realize they do not really need to be that far north. Others start with Northgate because they like the idea of it, then realize Briargate or Flying Horse fits them better once they compare them side by side.",
  },
  {
    question: "Is Northgate a good fit for military or Air Force Academy-connected buyers?",
    answer:
      "A lot of the time, yes. One of the biggest reasons Northgate stays in the search is that it is close to the Air Force Academy side of town and close to I-25. That is a big part of why this area keeps coming up for buyers who want that side of town to be easier.",
  },
  {
    question: "Is Northgate a good area for relocation buyers?",
    answer:
      "Usually yes, especially if they already know they want the north side. Northgate is one of those areas that gets easier once you drive it. The value is usually pretty clear: farther north, easier I-25 access, closer to the Academy, and a location that works well for some routines. The main mistake relocation buyers make is assuming all north-side areas feel basically the same. They usually do not.",
  },
  {
    question: "How is Northgate different from Flying Horse?",
    answer:
      "Flying Horse usually feels more like a neighborhood people choose because they want Flying Horse specifically. It has a stronger neighborhood identity. Northgate usually feels more like buyers choose it because it is in the right part of town for them. If someone wants a more defined neighborhood identity, Flying Horse may make more sense. If someone cares more about being farther north, staying close to I-25, and being close to the Academy side, Northgate may fit better.",
  },
  {
    question: "Is Northgate the same thing as Interquest?",
    answer:
      "No. They are related, but they are not the same thing. Interquest is usually about shopping, restaurants, and convenience on that side of town. Northgate is more about where you would actually live. People bring them up together all the time, but they are not talking about the same thing.",
  },
  {
    question: "What are the biggest tradeoffs that come with buying in Northgate?",
    answer:
      "The biggest tradeoff is usually convenience versus location. Northgate often gives buyers a better north-end position, easier I-25 access, and better proximity to the Air Force Academy. What buyers often give up is some of the nearby shopping, restaurant, and everyday convenience that Briargate does better. Some parts of Northgate can also feel less established.",
  },
  {
    question: "Why do homes for sale in Northgate keep coming up for north-side buyers?",
    answer:
      "Because Northgate solves a pretty specific problem well. It gives buyers a farther-north option that is close to I-25 and close to the Air Force Academy side of town, and in a lot of places it can feel quieter than some other north-side areas. That is why it stays relevant.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Northgate, Colorado Springs Real Estate", url: "/northgate-colorado-springs-real-estate/" },
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

const sectionLabel = "text-xs font-semibold tracking-widest uppercase text-[#C9A96E] mb-2 block";

export default function NorthgateColoradoSpringsRealEstate() {
  return (
    <>
      <Navbar compact />
      <SeoHead
        metadata={{
          title: "Living in Northgate, Colorado Springs: Real Estate, Tradeoffs, and What It's Like",
          description:
            "Thinking about living in Northgate, Colorado Springs? Learn what Northgate is actually like, who it fits, the real tradeoffs, and how it compares with Briargate, Flying Horse, and Interquest.",
          canonicalUrl: "https://myrockhomes.com/northgate-colorado-springs-real-estate/",
          breadcrumbs: breadcrumbItems,
        }}
        schema={faqSchema ? [faqSchema] : []}
      />

      <main className="bg-[#F5F0EB] min-h-screen">

        {/* ─── Hero ─── */}
        <section className="bg-[#292524] pt-[72px] pb-14 px-6 border-b-4 border-[#C9A96E]">
          <motion.div className="max-w-3xl mx-auto" initial="hidden" animate="visible" variants={fadeUp}>
            <span className={sectionLabel}>Colorado Springs · North Side</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F0EB] leading-tight mb-5">
              Living in Northgate, Colorado Springs: Real Estate, Tradeoffs, and What It's Like
            </h1>
            <p className="text-[#C9A96E] text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
              A practical guide to whether Northgate fits the way you want the north side to work.
            </p>
          </motion.div>
        </section>

        {/* ─── Intro ─── */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
            <p>Northgate usually makes the most sense for buyers who want to be farther north, closer to I-25, and closer to the Air Force Academy.</p>
            <p>That is usually what separates it pretty quickly.</p>
            <p>
              A lot of buyers start out looking at <a href="/briargate-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Briargate</a> and Northgate at the same time because they are both on the north side. Once you actually drive them, they usually do not feel the same. Briargate is easier for shopping, restaurants, parks, and a lot of the normal day-to-day things people want nearby. Northgate is usually more about where it sits, being closer to I-25, and being closer to the Academy side of town. In a lot of spots, it can also feel quieter than Briargate.
            </p>
            <p className="font-medium text-[#292524]">That is why some buyers end up liking it a lot more once they actually see it.</p>
          </div>
        </section>

        {/* ─── Who Northgate Usually Fits ─── */}
        <section className="py-12 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Fit</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">Who Northgate usually fits</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>Northgate usually fits buyers who care a lot about being farther north.</p>
              <p>If being closer to I-25 matters, if being closer to the Air Force Academy matters, or if you just know you want to stay on that side of town, Northgate can make a lot of sense.</p>
              <p className="font-medium text-[#292524]">It can be a good fit if you want:</p>
              <ul className="space-y-2 pl-0">
                {[
                  "to be closer to I-25",
                  "to be closer to the Air Force Academy",
                  "a quieter feel in a lot of spots",
                  "to be farther north than Briargate",
                  "a location that works better for certain drives",
                  "a part of town that feels newer in a lot of places",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C9A96E] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>Northgate is usually not the area people pick because they want everything close by.</p>
              <p>It is usually the area they pick because where it sits works better for them.</p>
            </div>
          </div>
        </section>

        {/* ─── What Living in Northgate Feels Like ─── */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Character</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">What living in Northgate feels like once you start looking around</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>Northgate is really made up of several neighborhoods and pockets, and that is part of why it can take a little longer to understand than Briargate.</p>
              <p>It does not all feel exactly the same.</p>
              <p>
                Some parts feel quieter. Some feel more tucked away. Some feel more tied to I-25. Some feel more connected to the newer north-side growth. Overall, it usually feels less built around shopping and everyday convenience than <a href="/briargate-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Briargate</a>.
              </p>
              <p>That is not automatically bad.</p>
              <p>For some buyers, that is exactly why it works.</p>
              <p>A lot of the time, it just comes down to whether you want more convenience close by or whether you care more about being in that part of town.</p>
            </div>
          </div>
        </section>

        {/* ─── What Buyers Usually Notice After a Few Tours ─── */}
        <section className="py-12 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>On the Ground</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">What buyers usually notice after a few tours</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>After a few tours, most buyers stop saying <a href="/briargate-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Briargate</a> and Northgate feel basically the same.</p>
              <p>They usually do not.</p>
              <p>
                Northgate is often quieter in a lot of places. It usually does not have as much shopping and retail close by. It can feel a little less busy in that way. At the same time, it often makes more sense for buyers who know being close to I-25 or the Air Force Academy is going to matter in their regular routine.
              </p>
              <p>That is usually when the decision starts getting easier.</p>
              <p>A lot of people begin the search thinking mostly about the house. Then after a few tours they realize where they are on the map is probably going to affect their life more than they thought.</p>
              <p>That is where Northgate either gets stronger or starts to fall off.</p>
            </div>
          </div>
        </section>

        {/* ─── North Side Breakdown CTA ─── */}
        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#292524] rounded-xl p-7 md:p-10 border-l-4 border-[#C9A96E]">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A96E]/70 mb-3 block">North Side Comparison</span>
              <h2 className="text-xl md:text-2xl font-bold text-[#F5F0EB] mb-4 leading-snug">
                Still trying to sort out Northgate, <a href="/briargate-colorado-springs-real-estate/" className="text-[#C9A96E] hover:text-[#F5F0EB] underline">Briargate</a>, <a href="/flying-horse-colorado-springs-real-estate/" className="text-[#C9A96E] hover:text-[#F5F0EB] underline">Flying Horse</a>, and the rest of the north side?
              </h2>
              <p className="text-stone-300 mb-3 text-base leading-relaxed">That is normal.</p>
              <p className="text-stone-300 mb-7 text-base leading-relaxed">
                A lot of buyers start out thinking the north side is all going to feel pretty similar. Once they start driving homes, that usually changes fast. If you want, I can send you a simple breakdown of the north side so you can see what usually matters, what tends to surprise people, and which area may fit you better.
              </p>
              <a href="/#contact" className="inline-block bg-[#C9A96E] text-[#292524] font-semibold px-8 py-3.5 rounded-lg hover:bg-[#b8945a] transition-colors text-base">
                Send me the north side breakdown
              </a>
            </div>
          </div>
        </section>

        {/* ─── What Northgate Is Not ─── */}
        <section className="py-12 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Honest Assessment</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">What Northgate is not</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>Northgate is usually not the best fit for someone who wants a lot of shopping, restaurants, and everyday convenience right around them.</p>
              <p>It is also usually not the easiest north-side area for someone who wants one big established area that is simple to understand right away.</p>
              <p>And it is not usually where buyers end up if they want a more rooted, more established neighborhood feel.</p>
              <p>Northgate usually works best when being farther north is not just a preference but something that is actually going to matter in your day-to-day life.</p>
            </div>
          </div>
        </section>

        {/* ─── Tradeoffs ─── */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Tradeoffs</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">Tradeoffs that come with Northgate</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>Like anywhere, Northgate has tradeoffs.</p>
              <p>The biggest one is pretty simple.</p>
              <p>You are usually giving up some everyday convenience in exchange for being in a part of town that works better for certain buyers.</p>
              <p>That may mean fewer shopping options close by.</p>
              <p>That may mean the area feels a little more tied to access and location than to a broader neighborhood feel.</p>
              <p>
                That may mean it feels newer in some places but not as settled as <a href="/briargate-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Briargate</a>.
              </p>
              <p>For some buyers, that is completely fine.</p>
              <p>For others, it becomes a bigger deal once they picture normal life there and not just the home itself.</p>
              <p className="font-medium text-[#292524]">So the real question is not whether Northgate is a good area.</p>
              <p>It is whether that trade works for the way you live.</p>
            </div>
          </div>
        </section>

        {/* ─── Comparison Cluster Header ─── */}
        <div className="bg-[#292524]/5 border-t-2 border-[#C9A96E]/30 px-6 py-5">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Area Comparisons</span>
            <p className="text-stone-500 text-sm">How Northgate stacks up against the other north side options buyers usually consider.</p>
          </div>
        </div>

        {/* ─── Northgate vs Briargate ─── */}
        <section className="py-12 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">
              Northgate vs <a href="/briargate-colorado-springs-real-estate/" className="text-amber-700 hover:underline">Briargate</a>
            </h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>This is one of the more common north-side comparisons.</p>
              <p>
                <a href="/briargate-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Briargate</a> is usually easier for everyday shopping, restaurants, parks, trails, and the normal weekly things people use all the time.
              </p>
              <p>Northgate usually starts making more sense if being farther north, being closer to I-25, and being closer to the Air Force Academy matter more.</p>
              <p>So if day-to-day convenience matters more, Briargate often stays stronger.</p>
              <p>If being farther north matters more, Northgate often starts looking better.</p>
            </div>
          </div>
        </section>

        {/* ─── Northgate vs Flying Horse ─── */}
        <section className="py-12 px-6 border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">
              Northgate vs <a href="/flying-horse-colorado-springs-real-estate/" className="text-amber-700 hover:underline">Flying Horse</a>
            </h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>These two come up together a lot, but they are not the same decision.</p>
              <p>
                <a href="/flying-horse-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Flying Horse</a> usually feels more like a neighborhood people are choosing because they want Flying Horse.
              </p>
              <p>Northgate usually feels more like people are choosing it because it is in the right part of town for them.</p>
              <p>That is a real difference.</p>
              <p>If someone wants a stronger neighborhood identity and more of a defined community feel, Flying Horse may make more sense.</p>
              <p>If someone cares more about being farther north, being near I-25, and being close to the Academy side of town, Northgate may fit better.</p>
            </div>
          </div>
        </section>

        {/* ─── Northgate vs Interquest ─── */}
        <section className="py-12 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">
              Northgate vs <a href="/interquest-colorado-springs/" className="text-amber-700 hover:underline">Interquest</a>
            </h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>
                This one can get confusing because people sometimes use <a href="/interquest-colorado-springs/" className="text-amber-700 hover:underline font-medium">Interquest</a> as a general label for that whole part of town.
              </p>
              <p>But they are not really the same thing.</p>
              <p>Interquest is usually more about the nearby shopping, restaurants, services, and convenience that help people understand that side of town.</p>
              <p>Northgate is the residential decision.</p>
              <p>So when someone says they want to be near Interquest, what they often really mean is they want to be in that general area. Northgate is where a lot of people actually end up living.</p>
              <p>That is why it helps to separate the neighborhood decision from the nearby retail and service area.</p>
            </div>
          </div>
        </section>

        {/* ─── What Northgate Does Well ─── */}
        <section className="py-12 px-6 border-t-2 border-[#C9A96E]/30">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Strengths</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-5">What Northgate does well</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>Northgate does well for buyers who know being farther north matters.</p>
              <p>It works well for people who want to be closer to I-25, closer to the Air Force Academy, and in an area that can feel quieter than some other north-side options.</p>
              <p>It also works well for buyers who are okay giving up some nearby shopping and convenience because where they are matters more.</p>
              <p>If you are looking at homes for sale in Northgate, that is usually one of the main reasons it keeps coming up.</p>
            </div>
          </div>
        </section>

        {/* ─── Needs Wants Dreams CTA ─── */}
        <section className="py-10 px-6 bg-white border-t border-stone-200">
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#292524] rounded-xl p-7 md:p-10 border-l-4 border-[#C9A96E]">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A96E]/70 mb-3 block">Next Step</span>
              <h2 className="text-xl md:text-2xl font-bold text-[#F5F0EB] mb-4 leading-snug">Not sure what fits your Needs, Wants, and Dreams?</h2>
              <p className="text-stone-300 mb-3 text-base leading-relaxed">That is usually where the search gets more useful.</p>
              <p className="text-stone-300 mb-4 text-base leading-relaxed">
                A lot of buyers start with the house first. Most of the time, what helps more is getting clear on what area fits your needs, what would be nice to have, and what would make the move really feel right if everything lined up.
              </p>
              <p className="text-stone-300 mb-7 text-base leading-relaxed">
                If you want, send me your Needs, Wants, and Dreams list and I can help you figure out whether Northgate fits, or whether another part of town makes more sense. You can also learn more about the buying process at the{" "}
                <a href="/colorado-home-buying-workshop" className="text-[#C9A96E] hover:text-[#F5F0EB] underline">Colorado Home Buying Workshop</a>.
              </p>
              <a href="/#contact" className="inline-block bg-[#C9A96E] text-[#292524] font-semibold px-8 py-3.5 rounded-lg hover:bg-[#b8945a] transition-colors text-base">
                Send Rob my Needs, Wants, and Dreams
              </a>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="py-14 px-6">
          <div className="max-w-3xl mx-auto">
            <span className={sectionLabel}>Common Questions</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-8">FAQ about living in Northgate</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold text-[#292524] mb-6">Final thoughts on Northgate</h2>
            <div className="space-y-4 text-stone-700 text-base md:text-lg leading-relaxed">
              <p>Northgate is not trying to be the most established part of Colorado Springs.</p>
              <p>It is trying to make a certain kind of north-side living work better.</p>
              <p>For a lot of buyers, that is exactly the point.</p>
              <p>
                If you want to be farther north, closer to I-25, and closer to the Air Force Academy side of town, Northgate can make a lot of sense. If you want more shopping, more everyday convenience, and a more established north-side feel, you should compare it carefully against <a href="/briargate-colorado-springs-real-estate/" className="text-amber-700 hover:underline font-medium">Briargate</a> and other nearby options before deciding.
              </p>
              <p>That is really the value of Northgate.</p>
              <p>It is not for everybody.</p>
              <p>But for the right buyer, it solves the right problem.</p>
              <p>
                If you are trying to figure out whether Northgate really fits the way you live, it is usually better to sort that out early than after you have already spent a lot of time looking at <a href="/colorado-springs-co-homes-for-sale" className="text-amber-700 hover:underline font-medium">homes in Colorado Springs</a> that may not fit as well as you thought.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Final CTA ─── */}
        <section className="py-14 px-6 bg-[#292524]">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A96E]/70 mb-3 block">Ready to Talk</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#F5F0EB] mb-4">Talk to Rob About Northgate</h2>
            <p className="text-[#C9A96E] mb-8 text-base md:text-lg">Get clear on the map before you get too far into the house search.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a href="/#contact" className="inline-block bg-[#C9A96E] text-[#292524] font-semibold px-8 py-3.5 rounded-lg hover:bg-[#b8945a] transition-colors text-base">
                Talk to Rob About Northgate
              </a>
              <a href="/colorado-springs-co-homes-for-sale" className="inline-block border border-[#C9A96E] text-[#C9A96E] font-semibold px-8 py-3.5 rounded-lg hover:bg-[#C9A96E] hover:text-[#292524] transition-colors text-base">
                Browse Colorado Springs Homes →
              </a>
            </div>

            <div className="border-t border-stone-700 pt-8">
              <p className="text-stone-500 text-xs font-semibold tracking-widest uppercase mb-4">Compare Nearby</p>
              <div className="flex flex-wrap justify-center gap-x-2 gap-y-3 mb-8">
                <a href="/briargate-colorado-springs-real-estate/" className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors">Briargate →</a>
                <span className="text-[#C9A96E]/30 text-sm">·</span>
                <a href="/flying-horse-colorado-springs-real-estate/" className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors">Flying Horse →</a>
                <span className="text-[#C9A96E]/30 text-sm">·</span>
                <a href="/interquest-colorado-springs/" className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors">Interquest →</a>
              </div>
              <p className="text-stone-500 text-xs font-semibold tracking-widest uppercase mb-4">Keep Exploring</p>
              <div className="flex flex-wrap justify-center gap-x-2 gap-y-3">
                <a href="/colorado-springs-co-homes-for-sale" className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors">Colorado Springs Homes →</a>
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
          © {new Date().getFullYear()} My Rock Realty · Colorado Springs Real Estate ·{" "}
          <a href="/" className="text-[#C9A96E] hover:text-[#F5F0EB] transition-colors">myrockhomes.com</a>
        </p>
      </footer>
    </>
  );
}
