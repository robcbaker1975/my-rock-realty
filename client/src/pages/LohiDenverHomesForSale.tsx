/**
 * LoHi Denver Homes for Sale — My Rock Realty
 * Approved copy: lohi-denver-homes-for-sale.md (Denver Cluster Source-of-Truth Package)
 * Design: Front Range Modern — matches existing site design system
 */
import { useState, useEffect } from "react";
import BuyingBuddyWidget from "@/components/BuyingBuddyWidget";
import SeoHead from "@/components/seo/SeoHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { ArrowRight, ArrowLeft, Phone, Mail, Globe, ChevronDown } from "lucide-react";

const LOHI_HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/lohi-denver-hero_b7d4e9f2.jpg";

const faqContent = [
  {
    question: "Is LoHi an official Denver neighborhood?",
    answer: "Buyers use \"LoHi\" all the time, but Denver's official neighborhood framework uses Highland, not LoHi, and Highland United Neighbors represents the larger Highland area. That is one reason the search usually gets more specific once it gets real.",
  },
  {
    question: "What usually narrows a LoHi search fastest?",
    answer: "The Lower Highland versus broader Highland question, home type, and whether the close-in location really matters more than space or a quieter setup.",
  },
  {
    question: "Is LoHi mostly condos and attached living?",
    answer: "It often pulls buyers toward condos, townhomes, duplexes, and other attached or newer options, but that is exactly why home type should get clear early rather than late.",
  },
  {
    question: "What is the biggest mistake buyers make in LoHi?",
    answer: "Treating the name like the fit is already settled.",
  },
  {
    question: "How do I know if I want LoHi or just access to it?",
    answer: "Ask whether you want the actual Lower Highland pull and home-search reality, or just workable proximity to this part of Denver. That answer usually changes the search fast.",
  },
  {
    question: "Does LoHi make more sense than Wash Park if I want to feel closer to downtown?",
    answer: "For many buyers, it can. But that only helps if the tighter, more city-like feel is actually what you want.",
  },
  {
    question: "Should I buy in LoHi now or rent first?",
    answer: "Buy if the fit is already clear. Rent first if you still need to sort out whether you want the real day-to-day version of LoHi or just the idea of it.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Denver Homes for Sale", url: "/denver-homes-for-sale" },
  { label: "LoHi", url: "/lohi-denver-homes-for-sale" },
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

export default function LohiDenverHomesForSale() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="hub-page min-h-screen bg-warm-white" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
      <SeoHead
        metadata={{
          title: "LoHi Denver Homes for Sale: Fit, Feel, and the Tradeoffs That Matter | My Rock Realty",
          description: "A practical guide to LoHi Denver homes for sale — honest help on fit, Highland versus LoHi shorthand, ownership patterns, downtown-adjacent living, and the tradeoffs that shape the search.",
          canonicalUrl: "https://myrockhomes.com/lohi-denver-homes-for-sale/",
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
        <img src={LOHI_HERO_BG} alt="LoHi neighborhood in Denver, Colorado" className="absolute inset-0 w-full h-full object-cover object-center" width="1600" height="900" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="relative container py-20 sm:py-28">
          <h1 className="text-4xl sm:text-5xl font-bold text-cream mb-6 leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
            LoHi Denver Homes for Sale: Fit, Feel, and the Tradeoffs That Matter
          </h1>
          <p className="text-lg text-cream/80 mb-8 leading-relaxed max-w-2xl">
            A practical guide to LoHi — helping buyers sort the real question before they spend time on the wrong version of the search.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:rob@myrockhomes.com?subject=LoHi Denver Consultation" className="inline-flex items-center justify-center gap-2 font-semibold rounded bg-gold text-charcoal hover:bg-yellow-400 px-7 py-4 text-[15px] sm:text-base no-underline" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Schedule a Consultation
              <ArrowRight size={18} />
            </a>
            <a href="mailto:rob@myrockhomes.com?subject=LoHi Listings — Alert Request" className="inline-flex items-center justify-center gap-2 font-semibold rounded border-2 border-gold text-gold hover:bg-gold hover:text-charcoal px-7 py-4 text-[15px] sm:text-base no-underline" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Get Alerts for New LoHi Homes
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            LoHi is one of those neighborhoods buyers often choose for the idea of it first
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">A lot of buyers come into LoHi with a picture already formed.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Usually that picture is near downtown, easy to recognize, and a little more city-feeling than the rest of the search.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Sometimes that picture is right. Sometimes it is doing too much work.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is why this page exists.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Not to sell you on a hot neighborhood name.<br />Not to flatten Highland into a LoHi stereotype.<br />And not to assume every buyer using the term "LoHi" is actually looking for the same thing.</p>
          <p className="text-charcoal/80 leading-relaxed mb-4">This page is here to help you sort the real question:</p>
          <ul className="list-disc list-inside text-charcoal/80 leading-relaxed mb-5 space-y-1 pl-2">
            <li>do you want LoHi specifically, or do you want a Denver search with some of the same appeal</li>
            <li>are you really reacting to the Lower Highland pocket near downtown, or using "LoHi" more broadly than you should</li>
            <li>do you want the energy and the setting enough to accept the kind of tradeoffs that usually come with it</li>
            <li>or are you using "LoHi" as shorthand for a central Denver search that may fit better somewhere else</li>
          </ul>
          <p className="text-charcoal/80 leading-relaxed">That distinction matters. Denver's official neighborhood map uses <strong>Highland</strong>, while Highland United Neighbors describes the larger Highland community as bounded by West 38th Avenue, Federal Boulevard, Speer Boulevard, and the South Platte River. In other words, "LoHi" is real as buyer shorthand, but it sits inside a bigger Highland framework rather than standing alone as one clean official neighborhood box.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-cream mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            What LoHi feels like
          </h2>
          <p className="text-cream/80 leading-relaxed mb-5">LoHi feels more immediate than a lot of Denver neighborhood searches.</p>
          <p className="text-cream/80 leading-relaxed mb-5">That is one of the first things buyers usually notice.</p>
          <p className="text-cream/80 leading-relaxed mb-5">The spot does a lot of work here. You are right by downtown and right on the edge of Highland, so the location shows up in everyday life pretty fast.</p>
          <p className="text-cream/80 leading-relaxed mb-5">But the search is not just "near downtown or not."</p>
          <p className="text-cream/80 leading-relaxed mb-5">It is also about what kind of close-to-downtown living you actually want.</p>
          <p className="text-cream/80 leading-relaxed mb-5">Some buyers are reacting to the tighter Lower Highland pocket near downtown and the bridges. Others are using "LoHi" more broadly when the better question is whether they want Highland at all, or just something nearby with some of the same feel. That matters because Highland is a bigger neighborhood than the LoHi shorthand suggests, and the home search can shift fast once you get more specific.</p>
          <p className="text-cream/80 leading-relaxed mb-5">That is what makes LoHi work.</p>
          <p className="text-cream/80 leading-relaxed">It has a lot going for it, but it is not all the same.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Why buyers keep LoHi in play when the search gets real
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">Buyers keep LoHi in play because the location keeps answering real questions.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">It stays in the conversation when buyers want to feel tied into the city, want something that does not feel sleepy, and want that to show up in daily life instead of just on a map.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">For the right buyer, that is a real advantage.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">LoHi stays strong when you want to be near downtown without living in the middle of it, want a more city-like feel than some other Denver neighborhoods offer, and are okay with the fact that the search here often moves away from the easiest detached-house path. It also stays strong when you are willing to sort the smaller Lower Highland pocket from the broader Highland search instead of treating the whole thing like one clean answer.</p>
          <p className="text-charcoal/80 leading-relaxed">It gets weaker when the name is doing more work than the reality.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal/5">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Who LoHi tends to fit
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">LoHi tends to fit buyers who want the location to matter a lot.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">It tends to fit people who care about being close in, who do not mind a search that feels a little busier, and who are open to the fact that the homes here may not look much like what they would see in a more house-first neighborhood. It also tends to fit buyers who are open to attached living, newer multifamily product, or a less traditional setup if that gets them the version of Denver they actually want.</p>
          <p className="text-charcoal/80 leading-relaxed mb-4">It usually makes the most sense for buyers sorting questions like:</p>
          <ul className="list-disc list-inside text-charcoal/80 leading-relaxed mb-5 space-y-1 pl-2">
            <li>do I want to feel close to downtown without being in downtown</li>
            <li>do I care more about where I am than I do about the easiest detached-home path</li>
            <li>am I really looking for the Lower Highland pocket, or am I using LoHi too broadly</li>
            <li>do I want a more city-feeling search than what I get in some other Denver neighborhoods</li>
            <li>am I open to condos, townhomes, duplexes, or newer product if the area does more work for me</li>
          </ul>
          <p className="text-charcoal/80 leading-relaxed">Those questions matter here early.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Who may not love it
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">LoHi is not automatically the right answer just because it is a strong name.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">If what you really want is a quieter neighborhood rhythm, a more straightforward detached-home search, more predictable parking, or a cleaner path to space and separation, LoHi may not be your cleanest fit.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">It can also frustrate buyers who love the idea of LoHi more than the actual reality that often comes with it.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">A buyer may love the closeness to downtown or the energy, then realize they do not actually want the tighter fit, the busier feel, or the housing mix that comes with it. Another buyer may start with LoHi when what they really want is just a nearby Denver neighborhood with a little less intensity.</p>
          <p className="text-charcoal/80 leading-relaxed">That is not a miss. That is just a clearer answer.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal/5">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            What the search usually turns into
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">This is where the LoHi search starts doing real work.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">At first, buyers think they are choosing a neighborhood.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Pretty quickly, they are usually choosing between where they want to be, what kind of home they are open to, and how city-like they actually want the search to feel.</p>
          <p className="text-charcoal/80 leading-relaxed mb-4">The search tends to narrow around questions like:</p>
          <ul className="list-disc list-inside text-charcoal/80 leading-relaxed mb-5 space-y-1 pl-2">
            <li>Lower Highland pocket or broader Highland search</li>
            <li>attached living or a more house-driven path</li>
            <li>being near downtown or just having workable access to it</li>
            <li>more energy or a little more breathing room</li>
            <li>strong neighborhood name or better overall fit nearby</li>
          </ul>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            The tradeoffs are the whole point
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">There is no clean version of LoHi without tradeoffs.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is not a knock on the neighborhood. It is part of why it works for the buyers it works for.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">You may trade more space for a closer-in location. You may trade a quieter search for something that feels more alive. You may trade a more traditional home setup for something newer or more attached. You may decide being this close to downtown matters enough that the tighter overall fit is worth it. You may also decide the opposite.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is a good outcome too.</p>
          <p className="text-charcoal/80 leading-relaxed">LoHi usually works best for buyers who stop trying to win every category and start deciding which tradeoffs they actually respect.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal/5">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            LoHi vs nearby alternatives
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">This is where the search usually gets honest.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Sometimes the real question is <strong>LoHi versus Cherry Creek</strong>. If you want something closer to downtown that feels a little less buttoned-up, LoHi can make more sense. If you want central Denver to feel more orderly and a little easier to manage day to day, Cherry Creek can become the stronger fit.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Sometimes the real question is <strong>LoHi versus Wash Park</strong>. If you want the near-downtown feel to do more of the work, LoHi can make more sense. If you want a more established residential feel and a neighborhood identity shaped more by the park than by downtown adjacency, Wash Park can become the better answer.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Sometimes the real question is <strong>LoHi versus broader Highland</strong>. That is one of the most important comparisons here. A lot of buyers say "LoHi" when they really mean the lower, more connected edge of Highland near downtown. Others are actually open to more of Highland than they think. Buyers usually do better once they stop using LoHi as a catch-all and get more specific about which part of Highland they are reacting to.</p>
          <p className="text-charcoal/80 leading-relaxed">Sometimes the real question is <strong>LoHi versus just being near LoHi</strong>. A lot of buyers do not need LoHi itself as much as they think they do. They need workable access to this part of Denver, not necessarily the full intensity, name pull, or home-search tradeoffs that come with it. That is where better decisions usually start.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            What buyers tend to underestimate
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">A lot of buyers underestimate how much the LoHi search depends on what they mean by "LoHi."</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Some mean the close-in pocket near downtown. Some mean Highland more broadly. Some mean a neighborhood with energy. Some mean a spot that keeps them close to the center of the city. Those are not all the same search.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Buyers also underestimate how fast the search becomes about home type. In some neighborhoods, the question stays more about the house itself. In LoHi, the question often becomes whether being here matters enough to shape what kind of property you are willing to own.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Another thing buyers underestimate is how much this part of Highland still feels like it is changing. That helps explain why LoHi can feel more active and less settled than some other neighborhood searches.</p>
          <p className="text-charcoal/80 leading-relaxed">That is why LoHi usually goes best when buyers treat the name as a starting point, not the answer.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal/5">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Buy now or rent first
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">That depends on how clear the fit already is.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">If you already know you want LoHi specifically, understand whether you mean the Lower Highland pocket or the broader Highland search, and are comfortable with the tradeoffs that usually come with it, buying may make sense now.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">If you are still sorting out whether you want LoHi itself, whether the closeness to downtown matters enough, or whether the name is stronger than the real fit, renting first may be the smarter move.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is not hesitation. That is clarity work.</p>
          <p className="text-charcoal/80 leading-relaxed">LoHi is strong enough that buyers can talk themselves into it. Renting first can help if you need to know whether you want the real version of the neighborhood or just the idea of it.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal/5">
        <div className="container max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Featured LoHi Listings
          </h2>
          <BuyingBuddyWidget
            type="FeaturedGallery"
            filter="mls_id:denver+listing_status:active,coming-soon+mapType:ROADMAP+shapesearch:39.76929968443959 -104.99326020207035,39.76929968443959 -105.01604824986087,39.75632750174891 -105.01609116520511,39.75510678392926 -105.01274376835453,39.76638935141429 -104.99918251957523,39.76929968443959 -104.99326020207035+mapzoom:14+mappos:39.762203599846536 -105.00467568363773+limit:12+order:price"
          />
          <BuyingBuddyWidget
            type="InteractiveMap"
            filter="mls_id:denver+listing_status:active,coming-soon+mapType:ROADMAP+shapesearch:39.76929968443959 -104.99326020207035,39.76929968443959 -105.01604824986087,39.75632750174891 -105.01609116520511,39.75510678392926 -105.01274376835453,39.76638935141429 -104.99918251957523,39.76929968443959 -104.99326020207035+mapzoom:14+mappos:39.762203599846536 -105.00467568363773+limit:12+order:price"
          />
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
            LoHi Denver real estate FAQs
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
          <p className="text-charcoal/80 leading-relaxed mb-5">LoHi is one of the strongest neighborhood names in Denver.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is exactly why buyers need to be careful with it.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">The neighborhood can absolutely be the right answer. But it works best when buyers get specific about what they mean, what kind of property they want to own here, and which tradeoffs they are actually willing to make for a more close-in, more city-like, and more immediate version of Denver living.</p>
          <p className="text-charcoal/80 leading-relaxed">Get that part right, and LoHi gets clearer fast.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Keep exploring Denver
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-6">If LoHi is still in play, the next move is not to stay broad about it. It is to pressure-test the right comparisons.</p>
          <p className="text-charcoal/80 font-semibold mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>Explore next</p>
          <ul className="space-y-2">
            {[
              { label: "Denver homes for sale", href: "/denver-homes-for-sale" },
              { label: "Cherry Creek", href: "/cherry-creek-denver-homes-for-sale" },
              { label: "Wash Park", href: "/wash-park-denver-homes-for-sale" },
              { label: "Sloan Lake", href: "/sloan-lake-denver-homes-for-sale" },
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
            If you want help narrowing LoHi without wasting time on the wrong version of the search, reach out.
          </p>
          <p className="text-cream/60 text-sm leading-relaxed mb-8">
            We can sort through Lower Highland versus broader Highland, home type, downtown pull, and whether LoHi is truly your best Denver match.
          </p>
          <a href="mailto:rob@myrockhomes.com?subject=LoHi Denver Consultation" className="inline-flex items-center justify-center gap-2 font-semibold rounded bg-gold text-charcoal hover:bg-yellow-400 px-7 py-4 text-[15px] sm:text-base no-underline" style={{ fontFamily: "'Outfit', sans-serif" }}>
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
