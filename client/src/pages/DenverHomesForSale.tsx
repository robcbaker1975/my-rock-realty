/**
 * Denver Homes for Sale — My Rock Realty
 * Primary Denver authority hub page for the Denver SEO cluster
 * Approved copy: denver-homes-for-sale.md (Denver Cluster Source-of-Truth Package)
 * Design: Front Range Modern — matches existing site design system
 */
import { useState, useEffect } from "react";
import BuyingBuddyWidget from "@/components/BuyingBuddyWidget";
import SeoHead from "@/components/seo/SeoHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import {
  ArrowRight,
  ArrowLeft,
  Phone,
  Mail,
  Globe,
  ChevronDown,
} from "lucide-react";

const DENVER_HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/denver-rowhouses-hero_2f59d4ac.jpg";

const faqContent = [
  {
    question: "Is Denver the right place to start, or should I start in the suburbs?",
    answer: "Start with the setting you are most likely to want day to day. If the city itself matters, start with Denver. If you already suspect you want more space, newer housing, easier parking, or a more suburban rhythm, compare both early and do not force Denver just because it is the most recognizable name.",
  },
  {
    question: "How long should I stay broad in a Denver search?",
    answer: "Only long enough to see the real contrasts. After that, broad usually becomes a liability. If you are still holding onto every option at once, the next move is usually to narrow, not keep browsing.",
  },
  {
    question: "What usually narrows a Denver search fastest?",
    answer: "Home type, budget comfort, daily routine, and tolerance for upkeep or compromise. Those usually do more to clarify Denver than reading more neighborhood summaries.",
  },
  {
    question: "Is it better to choose a neighborhood name first or a living pattern first?",
    answer: "Usually the living pattern. Once that is clear, the right neighborhoods tend to come into focus much faster. Starting with names alone can keep buyers attached to areas that do not really fit.",
  },
  {
    question: "How do I know if I want Denver proper or just access to Denver?",
    answer: "Ask whether the city itself needs to shape your daily life, or whether being near it is enough. That answer changes the search more than most buyers expect.",
  },
  {
    question: "Does Denver make more sense for detached homes or lower-maintenance living?",
    answer: "It can work for both, but not in the same way and not with the same tradeoffs. That is why home type should narrow the search early.",
  },
  {
    question: "What is the biggest mistake buyers make in Denver?",
    answer: "Staying broad too long. Right behind that is confusing a recognizable neighborhood with the right fit.",
  },
  {
    question: "Should I buy in Denver now or rent first?",
    answer: "Buy if the fit is clear. Rent first if the city-versus-suburb question, the home-type question, or the daily-life question is still unsettled.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Denver Homes for Sale", url: "/denver-homes-for-sale" },
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

export default function DenverHomesForSale() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-warm-white" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
      <SeoHead
        metadata={{
          title: "Living in Denver: Real Estate, Fit, and the Tradeoffs That Matter | My Rock Realty",
          description: "A practical guide to living in Denver and buying real estate here, with honest help on fit, city-versus-suburb decisions, home-type tradeoffs, and where the search usually narrows.",
          canonicalUrl: "https://myrockhomes.com/denver-homes-for-sale/",
        }}
        schema={faqSchema ? [faqSchema] : []}
      />

      <header className="bg-charcoal">
        <div className="container flex items-center justify-center sm:justify-between py-3 sm:py-4">
          <a href="/" className="text-cream font-bold text-lg sm:text-xl tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
            My Rock Realty
          </a>
          <a href="/" className="absolute top-4 right-4 sm:static text-cream/70 hover:text-gold text-xs sm:text-sm font-medium transition-colors inline-flex items-center gap-1.5" style={{ fontFamily: "'Outfit', sans-serif" }}>
            <ArrowLeft size={14} />
            Back to Main Site
          </a>
        </div>
      </header>

      <div className="bg-charcoal border-b border-cream/10">
        <div className="container py-2">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      <section className="relative bg-charcoal overflow-hidden" style={{ minHeight: "420px" }}>
        <img src={DENVER_HERO_BG} alt="Row houses along a residential street in Denver" className="absolute inset-0 w-full h-full object-cover object-center" width="1600" height="900" />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="relative container py-20 sm:py-28">
          <h1 className="text-4xl sm:text-5xl font-bold text-cream mb-6 leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Living in Denver: Real Estate, Fit, and the Tradeoffs That Matter
          </h1>
          <p className="text-lg text-cream/80 mb-8 leading-relaxed max-w-2xl">
            A practical guide to Denver real estate — helping buyers decide whether Denver belongs at the center of their search, and if it does, what kind of search it should actually be.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:rob@myrockhomes.com?subject=Denver Home Buying Consultation" className="inline-flex items-center justify-center gap-2 font-semibold rounded bg-gold text-charcoal hover:bg-yellow-400 px-7 py-4 text-[15px] sm:text-base no-underline" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Schedule a Consultation
              <ArrowRight size={18} />
            </a>
            <a href="mailto:rob@myrockhomes.com?subject=Denver Listings — Alert Request" className="inline-flex items-center justify-center gap-2 font-semibold rounded border-2 border-gold text-gold hover:bg-gold hover:text-charcoal px-7 py-4 text-[15px] sm:text-base no-underline" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Get Alerts for New Denver Homes
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Denver is a real decision, not a default
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">A lot of buyers start here because Denver is the obvious name.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is fine. But the search usually gets better once buyers stop treating Denver as a given and start treating it as a real decision.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is why this page exists.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Not to sell you on Denver.<br />Not to list every neighborhood and make the search feel bigger.<br />And not to assume every buyer saying "Denver" means the same thing.</p>
          <p className="text-charcoal/80 leading-relaxed mb-4">This page is here to help you sort the real question:</p>
          <ul className="list-disc list-inside text-charcoal/80 leading-relaxed mb-5 space-y-1 pl-2">
            <li>do you want Denver itself, or do you want access to Denver</li>
            <li>do you want a city neighborhood, or are you really looking for a suburb with city access</li>
            <li>do you want the kind of home Denver tends to offer, or are you expecting something it usually does not</li>
            <li>or are you using "Denver" as a starting point when the better fit might be somewhere nearby</li>
          </ul>
          <p className="text-charcoal/80 leading-relaxed">That distinction matters. Buyers who get honest about it early usually make better decisions. Buyers who stay broad usually take longer to get there.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-cream mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            What Denver feels like
          </h2>
          <p className="text-cream/80 leading-relaxed mb-5">Denver gives buyers real contrast.</p>
          <p className="text-cream/80 leading-relaxed mb-5">That is what makes it useful. It is also what makes it easy to waste time here if you stay too broad.</p>
          <p className="text-cream/80 leading-relaxed mb-5">The same budget can lead to very different outcomes depending on what matters most to you. One buyer may end up looking at an older detached home with more character and more upkeep. Another may realize a condo, duplex, or townhome makes more sense because location matters more than square footage. Another may decide the city itself matters enough to accept a tighter fit on the house. Someone else may look at those same tradeoffs and decide they would rather be outside the city.</p>
          <p className="text-cream/80 leading-relaxed mb-5">That is the real value of Denver at the hub level. It lets the differences show up.</p>
          <p className="text-cream/80 leading-relaxed mb-5">Some buyers want more neighborhood identity. Some want easier ownership. Some care about being in the city itself. Some mainly care about workable access to it. Some can live with older housing stock, tighter layouts, less storage, or different parking expectations if the location feels right. Others cannot.</p>
          <p className="text-cream/80 leading-relaxed">Denver is strong when you use it as a real decision. It is weak when you use it as a catch-all.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Why buyers keep Denver in play when the search gets real
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">Buyers keep Denver in play because it gives them real contrast without forcing the search into one pattern too early.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That matters.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Some markets get simpler fast. Denver usually does not. It stays relevant because buyers can test different ways of living here without giving up the city right away. They can compare older versus newer, detached versus attached, lower-maintenance versus more hands-on, city identity versus city access, and neighborhood pull versus practical fit.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is useful for the right buyer because it brings the tradeoffs into view early.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">It is less useful for the buyer who already knows they want the newest home they can get, the easiest parking, the least upkeep, the most straightforward path to space, or a more suburban day-to-day rhythm. In that case, Denver can stay in the conversation longer than it should.</p>
          <p className="text-charcoal/80 leading-relaxed mb-2">That is the real question.</p>
          <p className="text-charcoal/80 leading-relaxed mb-2">Not "Is Denver good?"</p>
          <p className="text-charcoal/80 leading-relaxed">But "Is Denver helping this search get clearer, or keeping it broad?"</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal/5">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Who Denver tends to fit
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">Denver tends to fit buyers who want the city itself to matter.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">It fits people who want one part of the search to feel meaningfully different from another. It fits buyers who want to compare real living patterns instead of defaulting to the easiest answer. It fits people who can handle some tradeoffs because they care how daily life feels, not just what looks best on paper.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">It also tends to fit buyers who can narrow in stages without staying vague forever.</p>
          <p className="text-charcoal/80 leading-relaxed mb-4">Denver usually makes more sense for buyers who are trying to sort questions like:</p>
          <ul className="list-disc list-inside text-charcoal/80 leading-relaxed mb-5 space-y-1 pl-2">
            <li>Do I want the city itself, or just access to it?</li>
            <li>Do I care more about neighborhood feel, private space, or ease of ownership?</li>
            <li>Am I trying to maximize the house, or improve daily life?</li>
            <li>Am I open to attached or lower-maintenance living if it keeps me in a better-fit location?</li>
            <li>Do I want a recognizable neighborhood name, or the setup that actually fits best?</li>
          </ul>
          <p className="text-charcoal/80 leading-relaxed">Buyers who get honest about those questions early usually make better Denver decisions.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Who may not love it
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">Denver is not automatically the right answer just because it is the obvious search term.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">If what you really want is more house for the money, more consistency in housing stock, less friction in the search, easier parking, less upkeep, or a more suburban rhythm, there are plenty of cases where the better answer is not forcing Denver longer. If you want a newer-home pattern as the default, not one option among several, Denver may not be the cleanest first move. If you want the simplest path to a detached home with fewer compromises, the search may pull elsewhere fast.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Denver also is not a great fit for buyers who get stuck chasing recognition.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">A known-name neighborhood is not the same thing as a good fit. A city address is not the same thing as liking how you will live there. And a broad Denver search is not the same thing as a focused buying plan.</p>
          <p className="text-charcoal/80 leading-relaxed">The city works best when you are willing to get clear, cut what does not fit, and stop treating every option as equally alive.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal/5">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            What the search usually turns into
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">This is where the Denver search starts doing its real job.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">At first, buyers often think they are choosing a city.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Pretty quickly, they are usually choosing between different versions of daily life and different versions of ownership.</p>
          <p className="text-charcoal/80 leading-relaxed mb-4">The search starts narrowing around questions like:</p>
          <ul className="list-disc list-inside text-charcoal/80 leading-relaxed mb-5 space-y-1 pl-2">
            <li>city neighborhood or suburb</li>
            <li>older home or newer setup</li>
            <li>detached home or lower-maintenance option</li>
            <li>stronger neighborhood identity or easier overall fit</li>
            <li>recognizable area or better-value path</li>
            <li>known-name neighborhood or best-fit neighborhood</li>
            <li>Denver proper or access to Denver without forcing the city itself</li>
          </ul>
          <p className="text-charcoal/80 leading-relaxed">Get that part right early, and the search gets better fast. Miss it, and Denver can keep you broad longer than it should.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            The tradeoffs are the whole point
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">There is no clean version of Denver without tradeoffs.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is not a criticism. It is part of what makes the city useful.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">You may trade more space for a better location. You may trade a simpler search for a more interesting daily life. You may trade newer housing for older homes with more character and more upkeep. You may decide the city itself matters enough that the tighter fit is worth it. You may also decide the opposite.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is a good outcome too.</p>
          <p className="text-charcoal/80 leading-relaxed">Denver usually works best for buyers who stop trying to win every category and start deciding which tradeoffs they actually respect.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal/5">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            What buyers tend to underestimate
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">A lot of buyers underestimate how quickly Denver stops being a city search and becomes a fit search.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">They also underestimate how much home type changes the whole conversation. A detached-home search, a condo search, a townhome search, and a lower-maintenance lock-and-leave search do not move through Denver the same way. Neither does a buyer who wants a more rooted neighborhood feel versus a buyer who mainly wants ease, simplicity, and a cleaner ownership pattern.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Another thing buyers underestimate is how early practical details start shaping the search. Parking, storage, garage expectations, condition tolerance, renovation appetite, and ongoing upkeep can matter more here than many buyers expect when they first start broad.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">People also gravitate toward names they know. That is understandable. But the best-known area is not always the right one, and staying attached to the name too early can keep the search from getting honest.</p>
          <p className="text-charcoal/80 leading-relaxed">Denver usually goes better when buyers let the search narrow them instead of trying to force certainty too early.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Buy now or rent first
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">That depends on how clear the fit is.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">If you already know the kind of daily life you want, the kind of home you want, and the tradeoffs you are willing to make, buying may make sense now. If you are still sorting out city versus suburb, detached versus lower-maintenance living, Denver proper versus access to Denver, or what level of upkeep you actually want to take on, renting first may be the smarter move.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is not hesitation. That is discipline.</p>
          <p className="text-charcoal/80 leading-relaxed">For some buyers, spending time in or around Denver helps the right version of the search show itself. For others, the path is already clear enough to move forward. The better decision is the one that gives you more clarity, not the one that sounds more committed.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal/5">
        <div className="container max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Featured Denver Listings
          </h2>
          <BuyingBuddyWidget type="SearchResults" filter="city:Denver mappos:39.7392,-104.9903 mapzoom:11" />
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Denver real estate FAQs
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
          <p className="text-charcoal/80 leading-relaxed mb-5">Denver is not hard because it lacks options. It is hard because it gives buyers enough real options that they have to get honest.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is why this page matters.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">The goal is not to flatten Denver into a broad sales pitch. The goal is to help you decide whether the city belongs at the center of your search, and if it does, what kind of search it should actually be.</p>
          <p className="text-charcoal/80 leading-relaxed">Get that right, and the next move gets a lot cleaner.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Keep exploring Denver
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-6">If Denver still feels worth pursuing, the next move is not to stay broad. It is to start comparing the right Denver paths.</p>
          <p className="text-charcoal/80 leading-relaxed mb-6">Use the next pages to pressure-test fit, not just collect more options.</p>
          <p className="text-charcoal/80 font-semibold mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>Explore next</p>
          <ul className="space-y-2">
            {[
              { label: "Wash Park", href: "/wash-park-denver-homes-for-sale" },
              { label: "Cherry Creek", href: "/cherry-creek-denver-homes-for-sale" },
              { label: "LoHi", href: "/lohi-denver-homes-for-sale" },
              { label: "RiNo", href: "/rino-denver-homes-for-sale" },
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
            If you want help narrowing Denver without wasting time on the wrong version of the search, reach out and we can sort it out together.
          </p>
          <p className="text-cream/60 text-sm leading-relaxed mb-8">
            We can talk through city versus suburb, neighborhood identity versus practical fit, home type, budget comfort, and which tradeoffs are actually worth making for you.
          </p>
          <a href="mailto:rob@myrockhomes.com?subject=Denver Home Buying Consultation" className="inline-flex items-center justify-center gap-2 font-semibold rounded bg-gold text-charcoal hover:bg-yellow-400 px-7 py-4 text-[15px] sm:text-base no-underline" style={{ fontFamily: "'Outfit', sans-serif" }}>
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
