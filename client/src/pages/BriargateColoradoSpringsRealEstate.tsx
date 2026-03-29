/**
 * Living in Briargate, Colorado Springs — My Rock Realty
 * Premium neighborhood SEO page
 * Slug: /briargate-colorado-springs-real-estate/
 * Design: Front Range Modern — matches existing site design system
 * Content: Approved benchmark version
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
    question: "Why do buyers keep Briargate in the search once they start touring homes?",
    answer:
      "A lot of buyers keep Briargate in the search once they actually start driving it because it usually feels easier to understand in person than it does online. Once you are in Briargate Colorado Springs, things like John Venezia Park, the Promenade Shops at Briargate, Memorial Hospital North, and the bigger north-side roads help people get a feel for how everyday life would work. For a lot of buyers, that starts to matter more than they expected.",
  },
  {
    question: "What makes living in Briargate different from living in Northgate?",
    answer:
      "Living in Briargate usually feels easier if you want more shopping, restaurants, parks, and normal weekly convenience close by. Northgate usually makes more sense if being farther north, being closer to I-25, and being closer to the Air Force Academy matter more. A lot of buyers think Briargate and Northgate are going to feel pretty similar at first, but once they drive both, that usually changes pretty quickly.",
  },
  {
    question: "When does Briargate make more sense than Cordera?",
    answer:
      "Briargate usually starts making more sense than Cordera when a buyer wants something that feels more established and a little more lived in. Cordera usually feels a little newer and a little more planned from the start. Briargate often fits better when someone wants the north side to feel practical and settled instead of newer and more polished.",
  },
  {
    question: "How is Briargate different from Flying Horse?",
    answer:
      "Briargate usually feels more practical, while Flying Horse usually feels more like buyers are choosing it because they want Flying Horse specifically. A lot of buyers looking at Briargate Colorado Springs are really trying to find an area that works well for everyday life. Buyers looking at Flying Horse are often also looking for a stronger neighborhood identity.",
  },
  {
    question: "What kind of buyer usually ends up choosing Briargate?",
    answer:
      "Usually it is a buyer who wants the north side to feel established, convenient, and easier to live in day to day. A lot of the time they want parks, trails, shopping, restaurants, grocery stores, and an area that is not hard to get a feel for once they start driving it. They may not need the quietest area or the most unique area. They usually want an area that works well in real life.",
  },
  {
    question: "What kind of buyer usually moves on from Briargate?",
    answer:
      "Usually it is someone who wants to be closer to the mountains, wants more west-side character, wants something quieter and farther north, or wants a neighborhood with a stronger identity. Some buyers also move on if they want a part of Colorado Springs that feels more unique from one area to the next. Briargate usually stays strongest for buyers who want practicality and convenience.",
  },
  {
    question: "Is Briargate more about convenience or character?",
    answer:
      "Briargate is usually more about convenience than character. That is not a bad thing. For a lot of buyers, that is exactly why it works. Living in Briargate usually means having parks, trails, shopping, grocery stores, restaurants, and places like the Promenade Shops or Chapel Hills close enough to be part of normal life, and that tends to matter more once the search gets real.",
  },
  {
    question: "Is Briargate a good fit if I want to stay near the Air Force Academy?",
    answer:
      "It can be. A lot of buyers looking at homes for sale in Briargate are also trying to stay in a part of town that works for north-side driving and Academy access. If being as far north as possible matters more, Northgate may make more sense. If you want a little more shopping, convenience, and a more established feel while still staying on the north side, Briargate often stays in a strong middle spot.",
  },
  {
    question: "What starts to matter about Briargate once the search gets real?",
    answer:
      "Once the search gets real, a lot of buyers realize Briargate is less about making a big impression and more about how easy it is to live there. Things like John Venezia Park, Cottonwood Creek Park, shopping at the Promenade Shops, nearby healthcare, and the road layout all start mattering more once people picture normal life instead of just looking at listing photos. That is one reason homes for sale in Briargate keep getting attention from serious buyers.",
  },
  {
    question: "Why do homes for sale in Briargate keep coming up for north-side buyers?",
    answer:
      "Homes for sale in Briargate keep coming up because Briargate usually checks a lot of boxes at once. It is established, practical, easier to understand than some other areas, and covers a lot of day to day needs. For buyers trying to narrow down the north side of Colorado Springs, Briargate often stays in the search because it makes everyday life feel simpler.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Briargate, Colorado Springs Real Estate", url: "/briargate-colorado-springs-real-estate/" },
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

export default function BriargateColoradoSpringsRealEstate() {
  return (
    <>
      <SeoHead
        metadata={{
          title: "Living in Briargate, Colorado Springs: Real Estate, Tradeoffs, and What It's Like",
          description:
            "Thinking about living in Briargate, Colorado Springs? Learn what Briargate is actually like, who it fits, the real tradeoffs, and how it compares with Northgate, Flying Horse, and Banning Lewis Ranch.",
          canonicalUrl: "https://myrockhomes.com/briargate-colorado-springs-real-estate/",
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
              Living in Briargate, Colorado Springs: Real Estate, Tradeoffs, and What It's Like
            </h1>
            <p className="text-[#C9A96E] text-lg">
              A practical guide to whether Briargate fits the way you want everyday life to work.
            </p>
          </motion.div>
        </section>

        {/* ─── Intro ─── */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <p>Briargate is usually one of the first places buyers look when they are trying to narrow down the north side of Colorado Springs.</p>
            <p>That makes sense.</p>
            <p>
              It is laid out well, it is not hard to get a feel for, and it has a lot of the day to day things people usually end up wanting once the search gets real. Parks, trails, shopping, restaurants, grocery stores, and the normal weekly stuff are a big part of why Briargate stays in the conversation. A lot of that sits along the bigger roads, but for many buyers that is part of what makes the area practical.
            </p>
            <p>That is really what Briargate does well.</p>
            <p>It makes everyday life easier.</p>
          </div>
        </section>

        {/* ─── Who Briargate Usually Fits ─── */}
        <section className="py-10 px-6 bg-white">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <h2 className="text-2xl font-bold text-[#292524]">Who Briargate usually fits</h2>
            <p>
              Briargate usually fits buyers who want the north side to feel established, practical, and easier to live in once the move is real.
            </p>
            <p>
              A lot of people like it because it has a real neighborhood feel without feeling overdone. Once you start driving it, a lot of it makes sense pretty fast. You can usually see where the parks are, where the shopping is, how the roads lay out, and what day to day life would probably feel like.
            </p>
            <p>It can be a strong fit if you want:</p>
            <ul>
              <li>a well known area on the north side</li>
              <li>parks and trails nearby</li>
              <li>shopping and restaurants close by</li>
              <li>an area that is easier to get a feel for once you start driving it</li>
              <li>a part of town that feels established and familiar</li>
              <li>a location that still works if the Air Force Academy or north side driving matters to you</li>
            </ul>
            <p>
              For a lot of buyers, Briargate feels like an area they can settle into without having to work too hard to figure it out.
            </p>
          </div>
        </section>

        {/* ─── What Living in Briargate Feels Like ─── */}
        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <h2 className="text-2xl font-bold text-[#292524]">What living in Briargate feels like once you start looking around</h2>
            <p>
              Once you start touring Briargate, one thing a lot of buyers notice pretty quickly is that it usually feels settled.
            </p>
            <p>Not old in the way some central neighborhoods feel old. Just settled.</p>
            <p>
              It tends to feel like an area that has been lived in long enough for people to understand why they picked it in the first place. The parks are there. The trails are there. The shopping is there. The roads are familiar. A lot of buyers can picture normal life there pretty quickly, and that matters more than people think when they first start looking online.
            </p>
            <p>Briargate is also usually easier to compare than some nearby areas.</p>
            <p>That helps.</p>
            <p>A buyer can usually tell faster whether it fits them or not.</p>
          </div>
        </section>

        {/* ─── What Buyers Usually Notice After a Few Tours ─── */}
        <section className="py-10 px-6 bg-white">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <h2 className="text-2xl font-bold text-[#292524]">What buyers usually notice after a few tours</h2>
            <p>After a few tours, Briargate usually starts standing out for a pretty simple reason.</p>
            <p>It works.</p>
            <p>That does not sound flashy, but it matters.</p>
            <p>
              <a href="/northgate-colorado-springs-real-estate/" className="text-amber-700 hover:underline">Northgate</a> is usually quieter in a lot of spots and can make more sense if being closer to I-25 and the Air Force Academy matters enough. <a href="/cordera-colorado-springs-real-estate/" className="text-amber-700 hover:underline">Cordera</a> usually feels a little newer and more planned out. <a href="/flying-horse-colorado-springs-real-estate/" className="text-amber-700 hover:underline">Flying Horse</a> usually feels more like people are choosing the neighborhood because they want that specific neighborhood.
            </p>
            <p>Briargate usually feels more practical than that.</p>
            <p>
              It is often the place buyers land when they want the north side to make sense without turning the whole move into one big neighborhood statement.
            </p>
            <p>That is a big reason it stays strong.</p>
          </div>
        </section>

        {/* ─── North Side Breakdown CTA ─── */}
        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#292524] rounded-lg p-8">
              <h2 className="text-xl font-bold text-[#F5F0EB] mb-3">Still trying to sort out Briargate, <a href="/northgate-colorado-springs-real-estate/" className="text-[#C9A96E] hover:text-[#F5F0EB] underline">Northgate</a>, <a href="/cordera-colorado-springs-real-estate/" className="text-[#C9A96E] hover:text-[#F5F0EB] underline">Cordera</a>, and <a href="/flying-horse-colorado-springs-real-estate/" className="text-[#C9A96E] hover:text-[#F5F0EB] underline">Flying Horse</a>?</h2>
              <p className="text-[#C9A96E] mb-2">That is normal.</p>
              <p className="text-stone-300 mb-6">
                A lot of buyers start out thinking the north side is all going to feel pretty similar. Once they start driving homes, that usually changes fast.
              </p>
              <p className="text-stone-300 mb-6">
                If you want, I can send you a simple breakdown of those four areas so you can see what usually matters, what tends to surprise people, and which one may fit you better.
              </p>
              <a
                href="/#contact"
                className="inline-block bg-[#C9A96E] text-[#292524] font-semibold px-8 py-3 rounded hover:bg-[#b8945a] transition-colors"
              >
                Send me the north side breakdown
              </a>
            </div>
          </div>
        </section>

        {/* ─── What Briargate Is Not ─── */}
        <section className="py-10 px-6 bg-white">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <h2 className="text-2xl font-bold text-[#292524]">What Briargate is not</h2>
            <p>Briargate is usually not the area people pick because they want to be closer to the mountains.</p>
            <p>It is also usually not the area people pick because they want the most unique part of Colorado Springs.</p>
            <p>
              And it is usually not where buyers end up if they want less commercial activity nearby or if they are trying to get closer to the west side, Garden of the Gods, <a href="/old-colorado-city-colorado-springs-real-estate/" className="text-amber-700 hover:underline">Old Colorado City</a>, <a href="/manitou-springs-co-real-estate/" className="text-amber-700 hover:underline">Manitou Springs</a>, or <a href="/woodland-park-co-real-estate/" className="text-amber-700 hover:underline">Woodland Park</a>.
            </p>
            <p>
              Briargate usually makes the most sense for buyers who want a north side area that feels established, works well for day to day life, and is not hard to understand once they start looking around.
            </p>
          </div>
        </section>

        {/* ─── Tradeoffs ─── */}
        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <h2 className="text-2xl font-bold text-[#292524]">Tradeoffs that come with Briargate</h2>
            <p>Like anywhere, Briargate has tradeoffs.</p>
            <p>
              One is that it can feel more predictable than some other parts of town. Some buyers really like that. It makes the search easier. Other buyers decide they want more variation, more character, or more of a different feel from one pocket to the next.
            </p>
            <p>
              Another tradeoff is that while Briargate does a very good job with convenience, it is not going to give you the same mountain feel or west side feel you get in places like Old Colorado City, <a href="/mountain-shadows-colorado-springs-real-estate/" className="text-amber-700 hover:underline">Mountain Shadows</a>, or Broadmoor and Cheyenne Mountain.
            </p>
            <p>
              It is also not usually the quietest option on the north side, because some of what makes it useful is having shopping, restaurants, and major roads close by.
            </p>
            <p>So the real question is not whether Briargate is a good area.</p>
            <p>It is whether this is the kind of area that fits the way you want to live.</p>
          </div>
        </section>

        {/* ─── Briargate vs Northgate ─── */}
        <section className="py-10 px-6 bg-white">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <h2 className="text-2xl font-bold text-[#292524]">Briargate vs Northgate</h2>
            <p>This is one of the more common north side comparisons.</p>
            <p>
              Briargate is usually easier for everyday shopping, restaurants, parks, trails, and the normal weekly things people use all the time. A lot of buyers feel like they can get a handle on Briargate pretty quickly because so much of what they need is nearby.
            </p>
            <p>
              <a href="/northgate-colorado-springs-real-estate/" className="text-amber-700 hover:underline">Northgate</a> usually starts making more sense if being closer to I-25 and the Air Force Academy matters more.
            </p>
            <p>So if day to day convenience matters more, Briargate often stays stronger.</p>
            <p>If being farther north matters more, Northgate often starts looking better.</p>

          </div>
        </section>

        {/* ─── Briargate vs Cordera ─── */}
        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <h2 className="text-2xl font-bold text-[#292524]">Briargate vs Cordera</h2>
            <p><a href="/cordera-colorado-springs-real-estate/" className="text-amber-700 hover:underline">Cordera</a> usually feels a little newer and a little more put together.</p>
            <p>Briargate usually feels more established and a little more lived in.</p>
            <p>
              A lot of buyers notice that pretty fast once they drive both. Briargate often feels more settled. Cordera often feels more planned from the start.
            </p>
            <p>Neither one is wrong.</p>
            <p>
              It usually just comes down to whether you want something that feels more established or something that feels a little newer and a little more polished.
            </p>

          </div>
        </section>

        {/* ─── Briargate vs Flying Horse ─── */}
        <section className="py-10 px-6 bg-white">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <h2 className="text-2xl font-bold text-[#292524]">Briargate vs Flying Horse</h2>
            <p><a href="/flying-horse-colorado-springs-real-estate/" className="text-amber-700 hover:underline">Flying Horse</a> usually has more of a specific identity.</p>
            <p>A lot of buyers who pick Flying Horse are picking it because they want Flying Horse.</p>
            <p>Briargate is usually different.</p>
            <p>
              It is more often about whether the area works well for the way someone lives. It usually feels less tied to one specific image and more tied to whether the area makes sense once everyday life starts.
            </p>
            <p>If someone wants a stronger neighborhood identity, Flying Horse may make more sense.</p>
            <p>If they want a north side area that works well and does not feel overdone, Briargate often fits better.</p>
          </div>
        </section>


        {/* ─── What Briargate Does Well ─── */}
        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            <h2 className="text-2xl font-bold text-[#292524]">What Briargate does well</h2>
            <p>Briargate does well for buyers who want the north side to feel easier.</p>
            <p>
              It does well for people who want parks, trails, shopping, restaurants, and neighborhoods that are not hard to understand.
            </p>
            <p>
              It also does well for buyers who are still narrowing things down and need an area that helps them get clearer on what matters before they start chasing homes all over the map.
            </p>
            <p>
              If you are looking at homes for sale in Briargate, that is usually one of the main reasons it keeps coming up.
            </p>
          </div>
        </section>

        {/* ─── Needs Wants Dreams CTA ─── */}
        <section className="py-10 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#292524] rounded-lg p-8">
              <h2 className="text-xl font-bold text-[#F5F0EB] mb-3">Not sure what fits your Needs, Wants, and Dreams?</h2>
              <p className="text-stone-300 mb-4">
                That is usually where the search gets more useful.
              </p>
              <p className="text-stone-300 mb-6">
                A lot of buyers start with the house first. Most of the time, what helps more is getting clear on what area fits your needs, what would be nice to have, and what would make the move really feel right if everything lined up.
              </p>
              <p className="text-stone-300 mb-6">
                If you want, send me your Needs, Wants, and Dreams list and I can help you figure out whether Briargate fits, or whether another part of town makes more sense. You can also learn more about the buying process at the <a href="/colorado-home-buying-workshop" className="text-[#C9A96E] hover:text-[#F5F0EB] underline">Colorado Home Buying Workshop</a>.
              </p>
              <a
                href="/#contact"
                className="inline-block bg-[#C9A96E] text-[#292524] font-semibold px-8 py-3 rounded hover:bg-[#b8945a] transition-colors"
              >
                Send Rob my Needs, Wants, and Dreams
              </a>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#292524] mb-6">FAQ about living in Briargate</h2>
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
            <h2 className="text-2xl font-bold text-[#292524]">Final thoughts on Briargate Colorado Springs</h2>
            <p>Briargate stays in the search for a reason.</p>
            <p>
              It is well known, it is laid out well, it covers a lot of everyday needs, and it usually gives buyers a pretty clear picture of what north side living can look like.
            </p>
            <p>That does not mean it fits everybody.</p>
            <p>
              But if you want an established north side area that is easier to understand, easier to compare, and easier to live in once the move is real, Briargate usually deserves a serious look.
            </p>
            <p>
              If you are trying to figure out whether Briargate really fits the way you live, it is usually better to sort that out early than after you have already spent a lot of time looking at <a href="/colorado-springs-co-homes-for-sale" className="text-amber-700 hover:underline">homes in Colorado Springs</a> that may not fit as well as you thought.
            </p>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="py-12 px-6 bg-[#292524]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[#F5F0EB] mb-4">
              Talk to Rob About Briargate
            </h2>
            <p className="text-[#C9A96E] mb-8">
              Get clear on the map before you get too far into the house search.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="inline-block bg-[#C9A96E] text-[#292524] font-semibold px-8 py-3 rounded hover:bg-[#b8945a] transition-colors"
              >
                Talk to Rob About Briargate
              </a>
              <a
                href="/colorado-springs-co-homes-for-sale"
                className="inline-block border border-[#C9A96E] text-[#C9A96E] font-semibold px-8 py-3 rounded hover:bg-[#C9A96E] hover:text-[#292524] transition-colors"
              >
                Browse Colorado Springs Homes →
              </a>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-x-1 gap-y-2 items-center">
              <a
                href="/northgate-colorado-springs-real-estate/"
                className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors"
              >
                Northgate →
              </a>
              <span className="text-[#C9A96E]/40 text-sm mx-1">·</span>
              <a
                href="/cordera-colorado-springs-real-estate/"
                className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors"
              >
                Cordera →
              </a>
              <span className="text-[#C9A96E]/40 text-sm mx-1">·</span>
              <a
                href="/flying-horse-colorado-springs-real-estate/"
                className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors"
              >
                Flying Horse →
              </a>
              <span className="text-[#C9A96E]/40 text-sm mx-1">·</span>
              <a
                href="/colorado-springs-co-homes-for-sale"
                className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors"
              >
                Colorado Springs homes for sale →
              </a>
              <span className="text-[#C9A96E]/40 text-sm mx-1">·</span>
              <a
                href="/moving-to-colorado-springs/"
                className="text-[#C9A96E] text-sm hover:text-[#F5F0EB] transition-colors"
              >
                Moving to Colorado Springs →
              </a>
              <span className="text-[#C9A96E]/40 text-sm mx-1">·</span>
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
