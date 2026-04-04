/**
 * RiNo Denver Homes for Sale — My Rock Realty
 * Approved copy: rino-denver-homes-for-sale.md (Denver Cluster Source-of-Truth Package)
 * Design: Front Range Modern — matches existing site design system
 */
import { useState, useEffect } from "react";
import BuyingBuddyWidget from "@/components/BuyingBuddyWidget";
import SeoHead from "@/components/seo/SeoHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { ArrowRight, ArrowLeft, Phone, Mail, Globe, ChevronDown } from "lucide-react";

const RINO_HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/rino-denver-hero_c8e5f1a3.jpg";

const faqContent = [
  {
    question: "Is RiNo an official Denver neighborhood?",
    answer: "Buyers use \"RiNo\" constantly, but a lot of them use it more like an area name than a clean official neighborhood label. That is one reason the search usually gets more specific once it gets real.",
  },
  {
    question: "What usually narrows a RiNo search fastest?",
    answer: "The tighter RiNo versus broader River North question, home type, and whether being by downtown really matters more than space or a quieter setup.",
  },
  {
    question: "Is RiNo mostly condos and attached living?",
    answer: "It often pulls buyers toward condos, loft-style units, townhomes, and other attached or newer options, which is why home type usually needs to get clear early.",
  },
  {
    question: "What is the biggest mistake buyers make in RiNo?",
    answer: "Treating the name like the fit is already settled.",
  },
  {
    question: "How do I know if I want RiNo or just access to it?",
    answer: "Ask whether you want the actual area feel and the tradeoffs that come with it, or just workable proximity to this part of Denver. That answer usually changes the search fast.",
  },
  {
    question: "Does RiNo make more sense than LoHi if I want to feel closer to downtown?",
    answer: "For many buyers, it can. But that only helps if the busier, rougher feel is actually what you want.",
  },
  {
    question: "Should I buy in RiNo now or rent first?",
    answer: "Buy if the fit is already clear. Rent first if you still need to sort out whether you want the real day-to-day version of RiNo or just the idea of it.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Denver Homes for Sale", url: "/denver-homes-for-sale" },
  { label: "RiNo", url: "/rino-denver-homes-for-sale" },
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

export default function RinoDenverHomesForSale() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="hub-page min-h-screen bg-warm-white" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
      <SeoHead
        metadata={{
          title: "RiNo Denver Homes for Sale: Fit, Feel, and the Tradeoffs That Matter | My Rock Realty",
          description: "A practical guide to RiNo Denver homes for sale — honest help on fit, RiNo versus the broader River North area, home types, downtown-adjacent living, and the tradeoffs that shape the search.",
          canonicalUrl: "https://myrockhomes.com/rino-denver-homes-for-sale/",
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
        <img src={RINO_HERO_BG} alt="RiNo neighborhood in Denver, Colorado" className="absolute inset-0 w-full h-full object-cover object-center" width="1600" height="900" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="relative container py-20 sm:py-28">
          <h1 className="text-4xl sm:text-5xl font-bold text-cream mb-6 leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
            RiNo Denver Homes for Sale: Fit, Feel, and the Tradeoffs That Matter
          </h1>
          <p className="text-lg text-cream/80 mb-8 leading-relaxed max-w-2xl">
            A practical guide to RiNo — helping buyers sort the real question before they spend time on the wrong version of the search.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:rob@myrockhomes.com?subject=RiNo Denver Consultation" className="inline-flex items-center justify-center gap-2 font-semibold rounded bg-gold text-charcoal hover:bg-yellow-400 px-7 py-4 text-[15px] sm:text-base no-underline" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Schedule a Consultation
              <ArrowRight size={18} />
            </a>
            <a href="mailto:rob@myrockhomes.com?subject=RiNo Listings — Alert Request" className="inline-flex items-center justify-center gap-2 font-semibold rounded border-2 border-gold text-gold hover:bg-gold hover:text-charcoal px-7 py-4 text-[15px] sm:text-base no-underline" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Get Alerts for New RiNo Homes
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            RiNo is one of those neighborhoods buyers often choose for the idea of it first
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">A lot of buyers come into RiNo with a picture already formed.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Usually that picture is right by downtown, easy to recognize, and a little different from the rest of the search.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Sometimes that picture is right. Sometimes it is doing too much work.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is why this page exists.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Not to sell you on a hot area name.<br />Not to turn the whole thing into mural-and-nightlife copy.<br />And not to assume every buyer saying "RiNo" is actually looking for the same thing.</p>
          <p className="text-charcoal/80 leading-relaxed mb-4">This page is here to help you sort the real question:</p>
          <ul className="list-disc list-inside text-charcoal/80 leading-relaxed mb-5 space-y-1 pl-2">
            <li>do you want RiNo itself, or do you want a Denver search with some of the same appeal</li>
            <li>are you really reacting to the tighter part of RiNo by downtown, or using "RiNo" more broadly than you should</li>
            <li>do you want the energy and the setting enough to accept the tradeoffs that usually come with it</li>
            <li>or are you using "RiNo" as shorthand for a central Denver search that may fit better somewhere else</li>
          </ul>
          <p className="text-charcoal/80 leading-relaxed">That distinction matters. Buyers use "RiNo" constantly, but a lot of them mean slightly different things when they say it.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-cream mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            What RiNo feels like
          </h2>
          <p className="text-cream/80 leading-relaxed mb-5">RiNo feels a little rougher and a little busier than a lot of Denver neighborhood searches.</p>
          <p className="text-cream/80 leading-relaxed mb-5">That is one of the first things buyers usually notice.</p>
          <p className="text-cream/80 leading-relaxed mb-5">Being by downtown matters here. So does the fact that the area still feels like it is changing in spots instead of sitting still.</p>
          <p className="text-cream/80 leading-relaxed mb-5">But the question is not just whether you want to be by downtown.</p>
          <p className="text-cream/80 leading-relaxed mb-5">It is what kind of living you actually want once you get there.</p>
          <p className="text-cream/80 leading-relaxed mb-5">Some buyers are reacting to the tighter RiNo area right by downtown. Others are using "RiNo" more broadly when the better question is whether they want River North at all, or just something nearby with some of the same feel. That matters because the search can change fast once you get more specific about where you want to be, what kind of building you are open to, and how much activity around you feels good versus tiring.</p>
          <p className="text-cream/80 leading-relaxed mb-5">That is what makes RiNo strong.</p>
          <p className="text-cream/80 leading-relaxed">It has a lot going for it, but it is not one simple thing.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Why buyers keep RiNo in play when the search gets real
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">Buyers keep RiNo in play because it keeps answering real questions.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">It stays in the conversation when buyers want to feel tied into the city, want something with more life to it, and want that to show up in everyday living instead of just on a map.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">For the right buyer, that is a real advantage.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">RiNo stays strong when you want to be by downtown without living in the middle of it, want something that feels a little more current than some other Denver neighborhoods, and are okay with the fact that the easiest detached-house path is usually not the point here. It also stays strong when you are willing to get more specific about what part of RiNo or River North you are actually reacting to instead of treating the whole area like one clean answer.</p>
          <p className="text-charcoal/80 leading-relaxed">It gets weaker when the name is doing more work than the reality.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal/5">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Who RiNo tends to fit
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">RiNo tends to fit buyers who want the area itself to matter a lot.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">It tends to fit people who care about being nearby, who do not mind a search that feels a little busier, and who are open to the fact that the homes here may look very different from what they would see in a more house-first neighborhood. It also tends to fit buyers who are open to condos, townhomes, loft-style spaces, newer buildings, or other options that are not the standard detached-house path if that gets them the version of Denver they actually want.</p>
          <p className="text-charcoal/80 leading-relaxed mb-4">It usually makes the most sense for buyers sorting questions like:</p>
          <ul className="list-disc list-inside text-charcoal/80 leading-relaxed mb-5 space-y-1 pl-2">
            <li>do I want to feel close to downtown without being in downtown</li>
            <li>do I care more about where I am than I do about the easiest detached-home path</li>
            <li>am I really looking for the tighter RiNo area, or am I using the name too broadly</li>
            <li>do I want something with more movement and a little less calm than what I get elsewhere</li>
            <li>am I open to attached living or newer buildings if the area does more work for me</li>
          </ul>
          <p className="text-charcoal/80 leading-relaxed">Those questions matter here early.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Who may not love it
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">RiNo is not automatically the right answer just because it is a strong name.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">If what you really want is a quieter neighborhood rhythm, a more straightforward detached-home search, more predictable parking, or a cleaner path to space and separation, RiNo may not be your cleanest fit.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">It can also frustrate buyers who love the idea of RiNo more than the actual day-to-day reality that usually comes with it.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">A buyer may love being by downtown or love the energy, then realize they do not actually want the tighter fit, the busier feel, or the kind of building choices that come with it. Another buyer may start with RiNo when what they really want is just a nearby Denver neighborhood with a little less motion and a little less edge.</p>
          <p className="text-charcoal/80 leading-relaxed">That is not a miss. That is just a clearer answer.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal/5">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            What the search usually turns into
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">This is where the RiNo search starts doing real work.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">At first, buyers think they are choosing a neighborhood.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Pretty quickly, they are usually choosing between where they want to be, what kind of home they are open to, and how much activity around them actually feels right.</p>
          <p className="text-charcoal/80 leading-relaxed mb-4">The search tends to narrow around questions like:</p>
          <ul className="list-disc list-inside text-charcoal/80 leading-relaxed mb-5 space-y-1 pl-2">
            <li>RiNo itself or a broader River North search</li>
            <li>attached living or a more house-driven path</li>
            <li>being by downtown or just having workable access to it</li>
            <li>more energy or a little more breathing room</li>
            <li>strong area name or better overall fit nearby</li>
            <li>how much parking friction, shared-wall reality, or price pressure feels worth it</li>
          </ul>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is normal. In fact, that is the point.</p>
          <p className="text-charcoal/80 leading-relaxed">RiNo is one of those places where buyers often come in through the name and then get more specific fast. Buyers usually make better decisions once they stop treating it like one fixed thing and start deciding what kind of tradeoff they are actually willing to make.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            The tradeoffs are the whole point
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">There is no clean version of RiNo without tradeoffs.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is not a criticism. It is part of what makes the area specific.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">You may trade more space for a better spot. You may trade a quieter feel for being closer to where things are happening. You may trade a detached-home path for attached living, newer buildings, or shared-building reality. You may decide being this close to downtown matters enough that the tighter overall fit is worth it. You may also decide the opposite.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is a good outcome too.</p>
          <p className="text-charcoal/80 leading-relaxed">RiNo usually works best for buyers who stop trying to win every category and start deciding which tradeoffs they actually respect.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal/5">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            RiNo vs nearby alternatives
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">This is where the search usually gets honest.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Sometimes the real question is <strong>RiNo versus LoHi</strong>. If you want something that feels a little grittier, a little more industrial, and a little less polished, RiNo can stay central. If you want to be nearby but want more neighborhood feel and a little less warehouse-meets-new-build contrast, LoHi can become the stronger fit.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Sometimes the real question is <strong>RiNo versus Cherry Creek</strong>. If you want something that feels more active, a little rougher around the edges, and less orderly, RiNo can make more sense. If you want Denver to feel cleaner, calmer, and more predictable, Cherry Creek can become the better answer.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Sometimes the real question is <strong>RiNo versus just being near RiNo</strong>. A lot of buyers do not need RiNo itself as much as they think they do. They need workable access to this part of Denver, not necessarily the full area identity or the tradeoffs that come with it.</p>
          <p className="text-charcoal/80 leading-relaxed">Sometimes the real question is <strong>RiNo versus River North more broadly</strong>. That is one of the most important comparisons here. A lot of buyers say "RiNo" when they really mean a smaller, more recognizable part of a bigger area. Buyers usually do better once they stop using RiNo as a catch-all and get more specific about what part of the area they are actually reacting to. That is usually where the better decisions start.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            What buyers tend to underestimate
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">A lot of buyers underestimate how much the RiNo search depends on what they mean by "RiNo."</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Some mean the core art-district feel. Some mean a pocket just north of downtown. Some mean a neighborhood with energy. Some mean a place that keeps them near the middle of the city. Those are not all the same search.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Buyers also underestimate how fast the search becomes about home type. In some neighborhoods, the question stays more about the house itself. In RiNo, the question often becomes whether being here matters enough to shape what kind of property you are willing to own.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Another thing buyers underestimate is how much this area still feels like it is changing. That helps explain why RiNo can feel more active and less settled than some other neighborhood searches.</p>
          <p className="text-charcoal/80 leading-relaxed">That is why RiNo usually goes best when buyers treat the name as a starting point, not the answer.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal/5">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Buy now or rent first
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">That depends on how clear the fit already is.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">If you already know you want RiNo specifically, understand whether you mean the tighter RiNo area or a broader River North search, and are comfortable with the tradeoffs that usually come with it, buying may make sense now.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">If you are still sorting out whether you want RiNo itself, whether being by downtown matters enough, or whether the name is stronger than the real fit, renting first may be the smarter move.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is not hesitation. That is clarity work.</p>
          <p className="text-charcoal/80 leading-relaxed">RiNo is strong enough that buyers can talk themselves into it. Renting first can help if you need to know whether you want the real version of the area or just the idea of it.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal/5">
        <div className="container max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Featured RiNo Listings
          </h2>
          <BuyingBuddyWidget type="SearchResults" filter="neighborhood:River North mappos:39.7680,-104.9810 mapzoom:14" />
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
            RiNo Denver real estate FAQs
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
          <p className="text-charcoal/80 leading-relaxed mb-5">RiNo is one of the strongest area names in Denver.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is exactly why buyers need to be careful with it.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">The area can absolutely be the right answer. But it works best when buyers get specific about what they mean, what kind of property they want to own here, and which tradeoffs they are actually willing to make for a nearby, busier, and less settled version of Denver living.</p>
          <p className="text-charcoal/80 leading-relaxed">Get that part right, and RiNo gets clearer fast.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Keep exploring Denver
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-6">If RiNo is still in play, the next move is not to stay broad about it. It is to pressure-test the right comparisons.</p>
          <p className="text-charcoal/80 font-semibold mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>Explore next</p>
          <ul className="space-y-2">
            {[
              { label: "Denver homes for sale", href: "/denver-homes-for-sale" },
              { label: "LoHi", href: "/lohi-denver-homes-for-sale" },
              { label: "Cherry Creek", href: "/cherry-creek-denver-homes-for-sale" },
              { label: "Central Park", href: "/central-park-denver-homes-for-sale" },
              { label: "Sloan Lake", href: "/sloan-lake-denver-homes-for-sale" },
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
            If you want help narrowing RiNo without wasting time on the wrong version of the search, reach out.
          </p>
          <p className="text-cream/60 text-sm leading-relaxed mb-8">
            We can sort through RiNo versus broader River North, home type, downtown pull, and whether RiNo is truly your best Denver match.
          </p>
          <a href="mailto:rob@myrockhomes.com?subject=RiNo Denver Consultation" className="inline-flex items-center justify-center gap-2 font-semibold rounded bg-gold text-charcoal hover:bg-yellow-400 px-7 py-4 text-[15px] sm:text-base no-underline" style={{ fontFamily: "'Outfit', sans-serif" }}>
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
    </div>
  );
}
