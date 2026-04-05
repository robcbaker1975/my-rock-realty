/**
 * Highland Denver Homes for Sale — My Rock Realty
 * Approved copy: highland-denver-homes-for-sale.md (Denver Cluster Source-of-Truth Package)
 * Design: Front Range Modern — matches existing site design system
 */
import { useState, useEffect } from "react";
import BuyingBuddyWidget from "@/components/BuyingBuddyWidget";
import Footer from "@/components/Footer";
import SeoHead from "@/components/seo/SeoHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { ArrowRight, ArrowLeft, Phone, Mail, Globe, ChevronDown } from "lucide-react";

const HIGHLAND_HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/highland-denver-hero_b5c6d7e8.jpg";

const faqContent = [
  {
    question: "Is Highland the same thing as LoHi?",
    answer: "No. LoHi is the smaller shorthand buyers use for the lower, closer-in part of Highland. Highland is the broader neighborhood decision.",
  },
  {
    question: "What usually narrows a Highland search fastest?",
    answer: "The Highland-versus-LoHi decision, how close to downtown you really want to be, and whether you are choosing the broader neighborhood or the tighter lower pocket.",
  },
  {
    question: "Is Highland just what people say when they do not mean LoHi exactly?",
    answer: "Sometimes, yes. But that is exactly why the page matters. Buyers need to figure out whether they want Highland itself or whether they are still really solving for LoHi.",
  },
  {
    question: "What is the biggest mistake buyers make in Highland?",
    answer: "Using Highland and LoHi like they mean the same thing.",
  },
  {
    question: "How do I know if I want Highland or LoHi?",
    answer: "Ask whether you want the tighter, lower, closer-in version of the area, or whether you want the broader neighborhood and more room inside the search.",
  },
  {
    question: "Does Highland make more sense than Sloan Lake if I want west-side Denver without the lake driving the search?",
    answer: "For many buyers, yes. But only if Highland itself is the thing you want, not just this side of town in general.",
  },
  {
    question: "Should I buy in Highland now or rent first?",
    answer: "Buy if the fit is already clear. Rent first if you still need to sort out whether you want Highland itself, LoHi, or just west-side Denver more generally.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Denver Homes for Sale", url: "/denver-homes-for-sale" },
  { label: "Highland", url: "/highland-denver-homes-for-sale" },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-charcoal/10 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 px-1 text-left gap-4"
      >
        <span className="text-[15px] sm:text-base font-semibold text-charcoal leading-snug" style={{ fontFamily: "'Outfit', sans-serif" }}>
          {question}
        </span>
        <ChevronDown size={20} className={`shrink-0 text-gold transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-5" : "max-h-0"}`}>
        <p className="text-[14px] sm:text-[15px] text-charcoal/70 leading-relaxed px-1">{answer}</p>
      </div>
    </div>
  );
}

export default function HighlandDenverHomesForSale() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="hub-page min-h-screen bg-warm-white" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
      <SeoHead
        metadata={{
          title: "Highland Denver Homes for Sale: Fit, Feel, and the Tradeoffs That Matter | My Rock Realty",
          description: "A practical guide to Highland Denver homes for sale, with honest help on fit, Highland versus LoHi, home types, and the tradeoffs that shape the search.",
          canonicalUrl: "https://myrockhomes.com/highland-denver-homes-for-sale/",
        }}
        schema={faqSchema ? [faqSchema] : []}
      />

      <header className="bg-charcoal">
        <div className="container flex items-center justify-center sm:justify-between py-3 sm:py-4">
          <a href="/" className="text-cream font-bold text-lg sm:text-xl tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
            My Rock Realty
          </a>
          <a href="/denver-homes-for-sale" className="absolute top-4 right-4 sm:static text-cream/70 hover:text-gold text-xs sm:text-sm font-medium transition-colors inline-flex items-center gap-1.5" style={{ fontFamily: "'Outfit', sans-serif" }}>
            <ArrowLeft size={14} />
            Back to Denver
          </a>
        </div>
      </header>

      <div className="bg-charcoal border-b border-cream/10">
        <div className="container py-2">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      <section className="relative bg-charcoal overflow-hidden" style={{ minHeight: "420px" }}>
        <img src={HIGHLAND_HERO_BG} alt="Highland neighborhood in Denver, Colorado" className="absolute inset-0 w-full h-full object-cover object-center" width="1600" height="900" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="relative container py-20 sm:py-28">
          <h1 className="text-4xl sm:text-5xl font-bold text-cream mb-6 leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Highland Denver Homes for Sale: Fit, Feel, and the Tradeoffs That Matter
          </h1>
          <p className="text-lg text-cream/80 mb-8 leading-relaxed max-w-2xl">
            A practical guide to Highland — helping buyers sort the real question before they spend time on the wrong version of the search.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:rob@myrockhomes.com?subject=Highland Denver Consultation" className="inline-flex items-center justify-center gap-2 font-semibold rounded bg-gold text-charcoal hover:bg-yellow-400 px-7 py-4 text-[15px] sm:text-base no-underline" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Schedule a Consultation
              <ArrowRight size={18} />
            </a>
            <a href="mailto:rob@myrockhomes.com?subject=Highland Listings — Alert Request" className="inline-flex items-center justify-center gap-2 font-semibold rounded border-2 border-gold text-gold hover:bg-gold hover:text-charcoal px-7 py-4 text-[15px] sm:text-base no-underline" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Get Alerts for New Highland Homes
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Highland is one of those neighborhoods buyers often mean when they say LoHi
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">That happens a lot.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">A buyer says they want LoHi. Then the search gets real, and it turns out they are not only reacting to the lower, tighter part of the area near downtown. They may be reacting to Highland more broadly and just using the smaller name because that is the one they know.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is why this page exists.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Not to turn Highland into a backup page for LoHi.<br />Not to flatten the neighborhood into one simple story.<br />And not to treat the whole area like it is just the part closest to downtown.</p>
          <p className="text-charcoal/80 leading-relaxed mb-4">This page is here to help you sort the real question:</p>
          <ul className="list-disc list-inside text-charcoal/80 leading-relaxed mb-5 space-y-1 pl-2">
            <li>do you want Highland broadly, or do you really want LoHi specifically</li>
            <li>do you want a larger neighborhood with more range, or the tighter lower pocket that gets most of the attention</li>
            <li>do you want west-side Denver with some room to sort fit, or are you really chasing one smaller part of it</li>
            <li>or are you using "Highland" to mean this whole side of town when the better fit may be somewhere nearby</li>
          </ul>
          <p className="text-charcoal/80 leading-relaxed">That distinction matters. Highland is the official Denver neighborhood. LoHi is the shorthand buyers use for the lower, closer-in part of it. If that relationship is not clear, the search usually gets muddy fast.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-cream mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            What Highland feels like
          </h2>
          <p className="text-cream/80 leading-relaxed mb-5">Highland feels broader and a little less pinned down than LoHi.</p>
          <p className="text-cream/80 leading-relaxed mb-5">That is one of the first useful things to understand.</p>
          <p className="text-cream/80 leading-relaxed mb-5">The neighborhood can still feel tied into the city, but it usually gives buyers a little more room to sort what they actually want. That matters because a lot of people come in thinking they want the LoHi version of the search when what they really want is Highland more generally.</p>
          <p className="text-cream/80 leading-relaxed mb-5">But the question is not just whether you want to be on this side of town.</p>
          <p className="text-cream/80 leading-relaxed mb-5">It is what kind of version of it you actually want.</p>
          <p className="text-cream/80 leading-relaxed mb-5">Some buyers are reacting to the lower part of Highland near downtown and the bridges. Others are open to more of Highland once they stop treating LoHi as the only version that matters. Some want the closer-in, busier feel. Others want to stay in Highland without making the whole search revolve around the tightest, most talked-about pocket.</p>
          <p className="text-cream/80 leading-relaxed mb-5">That is what makes Highland useful.</p>
          <p className="text-cream/80 leading-relaxed">It gives buyers a broader neighborhood decision that LoHi should not have to carry by itself.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Why buyers keep Highland in play when the search gets real
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">Buyers keep Highland in play because it answers a question LoHi cannot answer on its own.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Do you want the lower, tighter, closer-in version of this area, or do you want the larger neighborhood more broadly?</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">For the right buyer, Highland is not the watered-down version of LoHi. It is the better frame for the search.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">It stays in play when buyers want west-side Denver to matter, want neighborhood feel to matter, and want some flexibility inside the search instead of forcing the most obvious shorthand name. It also stays strong when buyers like this side of town but do not need the whole decision to be driven by the closest-to-downtown part of it.</p>
          <p className="text-charcoal/80 leading-relaxed">It gets weaker when buyers are still really chasing LoHi and are only looking at Highland because they have not said that clearly yet. That usually shows up fast.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal/5">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Who Highland tends to fit
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">Highland tends to fit buyers who want this side of Denver to matter, but do not want the whole search narrowed too early.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">It tends to fit people who want a real neighborhood decision, who like the west-side pull, and who want more room to sort fit than a pure LoHi search gives them. It also tends to fit buyers who are open to the fact that the homes, blocks, and day-to-day feel can vary more here than they first expect.</p>
          <p className="text-charcoal/80 leading-relaxed mb-4">It usually makes the most sense for buyers sorting questions like:</p>
          <ul className="list-disc list-inside text-charcoal/80 leading-relaxed mb-5 space-y-1 pl-2">
            <li>do I want Highland generally, or LoHi specifically</li>
            <li>do I want this side of Denver without forcing the tightest close-in pocket</li>
            <li>do I care more about the broader neighborhood fit than the smaller name people use most</li>
            <li>do I want a west-side neighborhood with range, not just a single shorthand version of it</li>
            <li>am I open to different home types and different parts of the neighborhood if the overall fit is better</li>
          </ul>
          <p className="text-charcoal/80 leading-relaxed">Those questions matter early here.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Who may not love it
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">Highland is not automatically the right answer just because LoHi feels too narrow.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">If what you really want is the lower, closer-in, more obvious LoHi version of the search, Highland may feel too broad. If what you really want is a very straightforward newer-home path, a more predictable block-to-block pattern, or a neighborhood where the search gets simple fast, Highland may not be your cleanest fit either.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">It can also frustrate buyers who like this side of town in theory but have not decided what part of it they actually want.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">A buyer may like the idea of Highland, then realize they were really reacting to LoHi. Another buyer may start with LoHi, then realize Highland more broadly fits better. A third may like both names and still be solving for something that is really about west-side Denver more generally.</p>
          <p className="text-charcoal/80 leading-relaxed">This page works best when the buyer is honestly sorting the bigger Highland decision instead of drifting around it.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal/5">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            What the search usually turns into
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">This is where the Highland search starts doing real work.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">At first, buyers think they are choosing a neighborhood.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Pretty quickly, they are usually choosing between different parts of the west side, different levels of closeness to downtown, and different versions of what they mean by Highland at all.</p>
          <p className="text-charcoal/80 leading-relaxed mb-4">The search tends to narrow around questions like:</p>
          <ul className="list-disc list-inside text-charcoal/80 leading-relaxed mb-5 space-y-1 pl-2">
            <li>Highland broadly or LoHi specifically</li>
            <li>closer to the lower pocket or farther into the neighborhood</li>
            <li>stronger downtown pull or a little more breathing room</li>
            <li>attached living, duplexes, townhomes, or a more house-driven path</li>
            <li>bigger neighborhood fit or smaller-name pull</li>
            <li>how much parking friction, upkeep, or price pressure feels worth it</li>
          </ul>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is normal. In fact, that is the point.</p>
          <p className="text-charcoal/80 leading-relaxed">Highland is one of those places where buyers often start with a smaller shorthand and then realize the larger neighborhood is the real decision. Buyers usually make better decisions once they stop treating LoHi and Highland like interchangeable names and start deciding which one is actually doing the work.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            The tradeoffs are the whole point
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">There is no clean version of Highland without tradeoffs.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is not a criticism. It is part of what makes the neighborhood specific.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">You may trade the tighter LoHi identity for a broader neighborhood choice. You may trade being closer to downtown for a little more room in the search. You may trade a simpler shorthand for a better overall fit. You may decide Highland gives you enough of what you wanted from LoHi without forcing the whole search into that smaller pocket. You may also decide the opposite.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is a good outcome too.</p>
          <p className="text-charcoal/80 leading-relaxed">Highland usually works best for buyers who stop trying to win every category and start deciding which tradeoffs they actually respect.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal/5">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Highland vs nearby alternatives
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">This is where the search usually gets honest.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Sometimes the real question is <strong>Highland versus LoHi</strong>. That is the biggest one. If you want the lower, tighter, more obvious close-to-downtown version of the search, LoHi can stay central. If you want the broader neighborhood and do not need the whole decision driven by the lower pocket, Highland can make more sense.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Sometimes the real question is <strong>Highland versus Sloan Lake</strong>. If you want this side of Denver but do not need the lake to drive the search, Highland can stay central. If you want open space to carry more of the decision, Sloan Lake can become the better fit.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Sometimes the real question is <strong>Highland versus Wash Park</strong>. If you want west-side Denver and a neighborhood decision that is not centered on one big park, Highland can make more sense. If you want the stronger park-centered identity and the more obvious Wash Park branch, the search may tilt elsewhere.</p>
          <p className="text-charcoal/80 leading-relaxed">Sometimes the real question is <strong>Highland versus just this side of Denver</strong>. That is one of the most important comparisons here. A lot of buyers say Highland when they really mean west-side Denver more generally. Buyers usually do better once they figure out whether they want Highland itself or just this part of the city.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            What buyers tend to underestimate
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">A lot of buyers underestimate how often Highland is the bigger decision and LoHi is the narrower one.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Because LoHi is the louder name, people can assume Highland is just the broader label on the same exact thing. That is not really how the search behaves.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Buyers also underestimate how much better the search gets once they stop using the two names like they mean the same thing. Sometimes the buyer really does want LoHi. Sometimes they really do not. Highland is useful because it gives that decision some space.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Another thing buyers underestimate is how often they are not choosing between two neighborhoods at all. They are choosing between a tighter, more obvious version of this side of Denver and a broader one.</p>
          <p className="text-charcoal/80 leading-relaxed">That is why Highland usually goes best when buyers choose it on purpose instead of treating it like leftover LoHi.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal/5">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Buy now or rent first
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">That depends on how clear the fit already is.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">If you already know you want Highland specifically, understand why you are choosing it instead of LoHi or another nearby option, and are comfortable with the tradeoffs that usually come with it, buying may make sense now.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">If you are still sorting out whether you want Highland itself, whether you are really reacting to LoHi, or whether you just like this side of Denver more generally, renting first may be the smarter move.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is not hesitation. That is clarity work.</p>
          <p className="text-charcoal/80 leading-relaxed">Highland is strong enough that buyers can drift into it without really deciding what they mean. Renting first can help if you need to know whether you want Highland itself or just what the area seems to represent.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal/5">
        <div className="container max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Featured Highland Listings
          </h2>
          <BuyingBuddyWidget
            type="FeaturedGallery"
            filter="carousel:true+shapesearch:39.7699 -105.0248,39.7699 -105.0118,39.7226 -105.0118,39.7226 -105.0248,39.7699 -105.0248+mls_id:denver+listing_status:active,coming-soon+order:create_dt desc"
          />
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Highland Denver real estate FAQs
          </h2>
          <div className="bg-white border border-charcoal/8 rounded-xl px-6 py-2">
            {faqContent.map((item) => (
              <FAQItem key={item.question} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal/5">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Final thoughts
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">Highland belongs in the Denver cluster because LoHi should not have to carry the whole job by itself.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is the real reason this page matters.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">The neighborhood can absolutely be the right answer. But it works best when buyers get specific about what they mean, what kind of home they want to own here, and whether they want the broader Highland decision or the tighter LoHi one.</p>
          <p className="text-charcoal/80 leading-relaxed">Get that part right, and Highland gets clearer fast.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Keep exploring Denver
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-6">If Highland is still in play, the next move is not to stay broad about it. It is to pressure-test the right comparisons.</p>
          <p className="text-charcoal/80 font-semibold mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>Explore next</p>
          <ul className="space-y-2">
            {[
              { label: "Denver homes for sale", href: "/denver-homes-for-sale" },
              { label: "LoHi", href: "/lohi-denver-homes-for-sale" },
              { label: "Sloan Lake", href: "/sloan-lake-denver-homes-for-sale" },
              { label: "Wash Park", href: "/wash-park-denver-homes-for-sale" },
              { label: "Central Park", href: "/central-park-denver-homes-for-sale" },
            ].map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="inline-flex items-center gap-1.5 text-gold font-medium hover:underline text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  <ArrowRight size={13} />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-cream mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Next step
          </h2>
          <p className="text-cream/70 text-base leading-relaxed mb-4">
            If you want help narrowing Highland without wasting time on the wrong version of the search, reach out.
          </p>
          <p className="text-cream/60 text-sm leading-relaxed mb-8">
            We can sort through Highland versus LoHi, how close in you really want to be, home type, and whether Highland is truly your best Denver match.
          </p>
          <a href="mailto:rob@myrockhomes.com?subject=Highland Denver Consultation" className="inline-flex items-center justify-center gap-2 font-semibold rounded bg-gold text-charcoal hover:bg-yellow-400 px-7 py-4 text-[15px] sm:text-base no-underline" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Schedule a Home Buying Consultation
            <ArrowRight size={18} />
          </a>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-cream/50 text-xs">
            <a href="tel:+17203636544" className="inline-flex items-center gap-1.5 hover:text-gold transition-colors">
              <Phone size={12} />
              720-363-6544
            </a>
            <a href="mailto:rob@myrockhomes.com" className="inline-flex items-center gap-1.5 hover:text-gold transition-colors">
              <Mail size={12} />
              rob@myrockhomes.com
            </a>
            <a href="/" className="inline-flex items-center gap-1.5 hover:text-gold transition-colors">
              <Globe size={12} />
              myrockhomes.com
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
