/*
 * Buying a Home in Denver — My Rock Realty
 * Denver city-level buyer guide page
 * Route: /buying-a-home-in-denver
 * Approved copy, widgets, and metadata — presentation rebuilt to match site premium pattern
 */

import { useState, useEffect } from "react";
import SeoHead from "@/components/seo/SeoHead";
import LeadForm from "@/components/LeadForm";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { ChevronDown } from "lucide-react";
import BuyingBuddyWidget from "@/components/BuyingBuddyWidget";
import Navbar from "@/components/Navbar";

const HERO_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/denver-rowhouses-hero_2f59d4ac.jpg";

const SEARCH_URL = "/listing-results?filter=mls_id:denver+listing_status:active,coming-soon+city:denver+order:create_dt desc,price";
const CONSULTATION_URL = "https://myrockhomes.com/contact";

/* ─── FAQ Content — Exact from approved copy ─── */
const faqContent = [
  {
    question: "Am I really ready to buy in Denver?",
    answer:
      "Probably, if you know your payment comfort, your likely home-type lane, and whether Denver proper actually belongs in your search.",
  },
  {
    question: "What makes Denver harder than a simpler market?",
    answer:
      "Usually too much real choice. Buyers stay broad too long and mistake activity for progress.",
  },
  {
    question: "Should I search by neighborhood first?",
    answer:
      "Only if neighborhood is honestly the main unresolved question. A lot of buyers should start with payment, home type, and tradeoffs first.",
  },
  {
    question: "When do seller concessions matter most?",
    answer:
      "When cash to close, payment structure, or a buydown matters more than fighting over a small price difference.",
  },
  {
    question: "Should I look at CHFA, Denver DPA, VA, HomeReady, or Home Possible?",
    answer:
      "Yes, if those programs fit the actual problem you are trying to solve. The point is not just to qualify. The point is to buy the right home the right way.",
  },
  {
    question: "When should I move into neighborhood pages?",
    answer:
      "When neighborhood comparison is helping you narrow instead of helping you stay broad.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Denver", url: "/denver-co-homes-for-sale/" },
  { label: "Buying a Home in Denver", url: "/buying-a-home-in-denver" },
];

export default function BuyingAHomeInDenver() {
  const [hydrated, setHydrated] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  useEffect(() => { setHydrated(true); }, []);

  return (
    <div className="hub-page min-h-screen flex flex-col bg-cream">
      <Navbar />
      <SeoHead
        metadata={{
          title:
            "Buying a Home in Denver: What Gets Harder, What Helps, and How to Start Smart",
          description:
            "A practical guide to buying a home in Denver, with honest help on readiness, payment comfort, search strategy, concessions, financing options, and what to do next.",
          canonicalUrl: "https://myrockhomes.com/buying-a-home-in-denver",
          breadcrumbs: breadcrumbItems,
        }}
        schema={faqSchema ? [faqSchema] : []}
      />

      {/* ─── HERO ─── */}
      <section className="relative bg-charcoal overflow-hidden">
        <img
          src={HERO_BG}
          alt="Denver residential street with row houses"
          className="absolute inset-0 w-full h-full object-cover object-center"
          width="1600"
          height="900"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/90 via-charcoal/70 to-charcoal/40" />
        <div className="container relative z-10 py-16 sm:py-20 md:py-24">
          <div className="max-w-2xl">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream mb-6 leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Buying a Home in Denver: What Gets Harder, What Helps, and How to Start Smart
            </h1>
            <p className="text-lg text-cream/80 mb-4 leading-relaxed">
              Buying in Denver usually does not get hard because buyers are doing something wrong.
            </p>
            <p className="text-base text-cream/75 mb-4 leading-relaxed">
              It usually gets hard because they start too wide.
            </p>
            <p className="text-base text-cream/75 mb-4 leading-relaxed">
              They look at too many neighborhoods, too many price points, too many home types, and tell themselves they are just getting a feel for things.
            </p>
            <p className="text-base text-cream/75 mb-4 leading-relaxed">
              Most of the time, what is really happening is they have not figured out what matters yet, so every house feels half-right.
            </p>
            <p className="text-base text-cream/75 mb-4 leading-relaxed">
              That is where people lose time.
            </p>
            <p className="text-base text-cream/75 mb-4 leading-relaxed">
              That is what this page is for.
            </p>
            <p className="text-base text-cream/75 mb-8 leading-relaxed">
              Not to sell you on Denver. Not to give you a big generic buyer article. And not to throw every financing option on one page and call it helpful.
            </p>
            <p className="text-base text-cream/75 mb-8 leading-relaxed">
              Just to help you get clear before you spend weeks looking at the wrong stuff.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
              <a
                href={SEARCH_URL}
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 bg-gold text-charcoal hover:bg-gold-light hover:shadow-lg px-6 py-3 text-sm no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Search Denver Homes
              </a>
              <a
                href={CONSULTATION_URL}
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-cream/40 text-cream/80 hover:border-cream hover:text-cream px-6 py-3 text-sm no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Schedule a Buyer Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What I would figure out first ─── */}
      <section className="py-14 sm:py-18 bg-cream">
        <div className="mx-auto w-full max-w-3xl px-8">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            What I would figure out first
          </h2>
          <p className="text-charcoal/80 mb-6 leading-relaxed">
            Before you get attached to neighborhoods, figure out a few basic things.
          </p>

          <h3
            className="text-xl font-semibold text-charcoal mb-3 mt-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            What payment actually feels okay
          </h3>
          <p className="text-charcoal/80 mb-3 leading-relaxed">Not what a lender says you can qualify for.</p>
          <p className="text-charcoal/80 mb-3 leading-relaxed">What actually feels okay to you every month.</p>
          <p className="text-charcoal/80 mb-3 leading-relaxed">Those are not always the same number.</p>
          <p className="text-charcoal/80 mb-6 leading-relaxed">
            A lot of buyers get themselves in trouble here because they start with approval instead of payment comfort.
          </p>

          <h3
            className="text-xl font-semibold text-charcoal mb-3 mt-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Whether your real problem is payment or cash to close
          </h3>
          <p className="text-charcoal/80 mb-3 leading-relaxed">Those are different problems.</p>
          <p className="text-charcoal/80 mb-3 leading-relaxed">
            Some buyers can handle the payment but are tight on down payment and closing costs. Some have enough cash, but the monthly number starts getting uncomfortable fast. Some are dealing with both.
          </p>
          <p className="text-charcoal/80 mb-6 leading-relaxed">That changes the whole conversation.</p>

          <h3
            className="text-xl font-semibold text-charcoal mb-3 mt-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            What kind of home you are honestly open to
          </h3>
          <p className="text-charcoal/80 mb-3 leading-relaxed">
            Detached house. Condo. Townhome. Duplex. Something lower-maintenance.
          </p>
          <p className="text-charcoal/80 mb-3 leading-relaxed">Do not be lazy with this part.</p>
          <p className="text-charcoal/80 mb-6 leading-relaxed">
            A lot of Denver searches go sideways because the buyer says, "I'm open," but they really are not.
          </p>

          <h3
            className="text-xl font-semibold text-charcoal mb-3 mt-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Whether you should start with area or start with fit
          </h3>
          <p className="text-charcoal/80 mb-3 leading-relaxed">Some buyers really do need to start with neighborhood.</p>
          <p className="text-charcoal/80 mb-3 leading-relaxed">A lot of buyers do better starting with:</p>
          <ul className="list-none space-y-2 mb-6 pl-0">
            {["payment", "home type", "upkeep", "commute", "whether they even want Denver badly enough to pay for Denver"].map((item, i) => (
              <li key={i} className="text-charcoal/80 leading-relaxed pl-4 border-l-2 border-gold/40">{item}</li>
            ))}
          </ul>
          <p className="text-charcoal/80 mb-6 leading-relaxed">That part gets skipped all the time.</p>

          <h3
            className="text-xl font-semibold text-charcoal mb-3 mt-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            What tradeoffs you can actually live with
          </h3>
          <p className="text-charcoal/80 mb-3 leading-relaxed">
            More space or better location. Older home or easier ownership. Lower payment or stronger area fit. Big-name neighborhood or better overall setup.
          </p>
          <p className="text-charcoal/80 mb-3 leading-relaxed">
            If you do not figure that out early, Denver usually makes you figure it out later anyway.
          </p>
          <p className="text-charcoal/80 leading-relaxed">Just not in a fun way.</p>
        </div>
      </section>

      {/* ─── SearchForm Widget Section ─── */}
      <section className="py-14 sm:py-18 bg-charcoal">
        <div className="mx-auto w-full max-w-3xl px-8">
          <h2
            className="text-2xl sm:text-3xl font-bold text-cream mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Search Denver homes
          </h2>
          <p
            className="text-cream/80 mb-6 leading-relaxed text-base"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            If you already want to start looking, use the search below. Just do yourself a favor and stay honest about payment, home type, and tradeoffs while you do it.
          </p>
          <div className="w-full overflow-x-auto">
            <BuyingBuddyWidget
              type="SearchForm"
              filter="shapesearch:39.80102090895284 -105.02467621018009,39.78453360179922 -105.02433288742618,39.782554859383524 -105.00287521530704,39.78730374558338 -104.99806869675236,39.79930641313517 -105.00476349045353,39.80735098475494 -105.00733841110782,39.80102090895284 -105.02467621018009,39.80102090895284 -105.02467621018009+mapzoom:13+mappos:39.79495403947301 -105.01137245346622+delay:2500+order:create_dt desc,price+show-options:on+mls_id:denver+listing_status:active,coming-soon+city:denver"
            />
          </div>
        </div>
      </section>

      {/* ─── What makes Denver harder than a simpler market ─── */}
      <section className="py-14 sm:py-18 bg-cream">
        <div className="mx-auto w-full max-w-3xl px-8">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            What makes Denver harder than a simpler market
          </h2>
          <p className="text-charcoal/80 mb-4 leading-relaxed">Usually it is not one thing.</p>
          <p className="text-charcoal/80 mb-4 leading-relaxed">
            It is that Denver gives you enough real options to stay broad longer than you should.
          </p>
          <p className="text-charcoal/80 mb-4 leading-relaxed">At first that feels exciting.</p>
          <p className="text-charcoal/80 mb-4 leading-relaxed">Then it starts wasting your time.</p>
          <p className="text-charcoal/80 mb-6 leading-relaxed">
            You can bounce around between neighborhoods, home types, and price points and feel like you are doing a lot, when really you are just keeping too many half-ideas alive.
          </p>
          <p className="text-charcoal/80 mb-6 leading-relaxed">That is a real Denver problem.</p>

          <h3
            className="text-xl font-semibold text-charcoal mb-3 mt-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Home type matters early here
          </h3>
          <p className="text-charcoal/80 mb-3 leading-relaxed">In some places, buyers can stay fuzzy on home type for a while.</p>
          <p className="text-charcoal/80 mb-3 leading-relaxed">Here, that usually gets expensive.</p>
          <p className="text-charcoal/80 mb-6 leading-relaxed">
            A detached-house search is not the same as a condo search. A condo search is not the same as a townhome search. The tradeoffs change. The financing conversation can change. The concession strategy can change.
          </p>
          <p className="text-charcoal/80 mb-6 leading-relaxed">
            If that part is still loose, the rest of the search usually stays loose too.
          </p>

          <h3
            className="text-xl font-semibold text-charcoal mb-3 mt-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Seller concessions matter more than people think
          </h3>
          <p className="text-charcoal/80 mb-3 leading-relaxed">
            A lot of buyers still look at everything like price is the whole game.
          </p>
          <p className="text-charcoal/80 mb-3 leading-relaxed">It is not.</p>
          <p className="text-charcoal/80 mb-3 leading-relaxed">
            Sometimes the smarter move is not squeezing out every last dollar on price. Sometimes it is getting concessions that help with closing costs, keep more cash in your pocket, or help the payment through a buydown.
          </p>
          <p className="text-charcoal/80 mb-6 leading-relaxed">
            That can matter more than buyers realize, especially if cash to close is the real pressure point.
          </p>

          <h3
            className="text-xl font-semibold text-charcoal mb-3 mt-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Vague buyers usually think the market is the whole problem
          </h3>
          <p className="text-charcoal/80 mb-3 leading-relaxed">Sometimes the market is hard.</p>
          <p className="text-charcoal/80 mb-3 leading-relaxed">
            But a lot of the time, the bigger problem is that the buyer is still too broad.
          </p>
          <p className="text-charcoal/80 leading-relaxed">
            If you know your payment comfort, home-type lane, tradeoffs, and whether Denver proper is even really part of the plan, you usually move a lot better.
          </p>
        </div>
      </section>

      {/* ─── MarketStats Widget Section ─── */}
      <section className="py-14 sm:py-18 bg-charcoal">
        <div className="mx-auto w-full max-w-3xl px-8">
          <h2
            className="text-2xl sm:text-3xl font-bold text-cream mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Denver market snapshot
          </h2>
          <p
            className="text-cream/80 mb-6 leading-relaxed text-base"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Here is the quick market snapshot. Useful, yes. But still not as useful as knowing what kind of buyer you are and what kind of search actually fits you.
          </p>
          <style>{`
            bb-widget[data-type="MarketStats"] img[src=""],
            bb-widget[data-type="MarketStats"] img:not([src]),
            bb-widget[data-type="MarketStats"] .bb-icon-placeholder,
            bb-widget[data-type="MarketStats"] [class*="icon"]:empty {
              display: none !important;
            }
          `}</style>
          <div className="w-full">
            <BuyingBuddyWidget
              type="MarketStats"
              filter="reportType:totals+mls_id:denver+listing_status:active,coming-soon+city:denver"
            />
          </div>
        </div>
      </section>

      {/* ─── How I would search smarter in Denver ─── */}
      <section className="py-14 sm:py-18 bg-cream">
        <div className="mx-auto w-full max-w-3xl px-8">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            How I would search smarter in Denver
          </h2>
          <p className="text-charcoal/80 mb-4 leading-relaxed">A lot of buyers here do better when they narrow in this order:</p>
          <ul className="list-none space-y-2 mb-6 pl-0">
            {["payment", "home type", "Denver vs suburb or Denver vs nearby access", "upkeep / ownership fit", "neighborhood"].map((item, i) => (
              <li key={i} className="text-charcoal/80 leading-relaxed pl-4 border-l-2 border-gold/40">
                <span className="text-gold font-semibold mr-2">{i + 1}.</span>{item}
              </li>
            ))}
          </ul>
          <p className="text-charcoal/80 mb-4 leading-relaxed">That does not mean neighborhood never comes first.</p>
          <p className="text-charcoal/80 mb-8 leading-relaxed">
            It just means neighborhood usually works better after the bigger stuff is honest.
          </p>

          <h3
            className="text-xl font-semibold text-charcoal mb-3 mt-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Start with neighborhood when:
          </h3>
          <ul className="list-none space-y-2 mb-6 pl-0">
            {["you already know the city itself matters", "you already know the kind of area you want", "you are ready to search homes"].map((item, i) => (
              <li key={i} className="text-charcoal/80 leading-relaxed pl-4 border-l-2 border-gold/40">{item}</li>
            ))}
          </ul>

          <h3
            className="text-xl font-semibold text-charcoal mb-3 mt-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Do not start with neighborhood when:
          </h3>
          <ul className="list-none space-y-2 mb-6 pl-0">
            {[
              "you are still fuzzy on payment",
              "you are still pretending every home type works",
              "you keep saying you want \"something easier\" but have not said what that means",
              "you are reacting to names more than fit",
            ].map((item, i) => (
              <li key={i} className="text-charcoal/80 leading-relaxed pl-4 border-l-2 border-gold/40">{item}</li>
            ))}
          </ul>
          <p className="text-charcoal/80 leading-relaxed">
            That is when neighborhood pages can actually make you more scattered.
          </p>
        </div>
      </section>

      {/* ─── Financing and concessions ─── */}
      <section className="py-14 sm:py-18 bg-charcoal">
        <div className="mx-auto w-full max-w-3xl px-8">
          <h2
            className="text-2xl sm:text-3xl font-bold text-cream mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Financing and concessions
          </h2>
          <p className="text-cream/80 mb-4 leading-relaxed">This page does not need to turn into a loan seminar.</p>
          <p className="text-cream/80 mb-8 leading-relaxed">But it does need to be useful.</p>

          <h3
            className="text-xl font-semibold text-cream mb-3 mt-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            CHFA
          </h3>
          <p className="text-cream/80 mb-3 leading-relaxed">CHFA matters when the real issue is cash to close.</p>
          <p className="text-cream/80 mb-6 leading-relaxed">
            Not every buyer should use it. But if Denver is the fit and the down payment or closing cash is the thing getting in the way, it deserves a real look.
          </p>

          <h3
            className="text-xl font-semibold text-cream mb-3 mt-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Denver DPA / metroDPA
          </h3>
          <p className="text-cream/80 mb-3 leading-relaxed">Same basic idea.</p>
          <p className="text-cream/80 mb-6 leading-relaxed">
            If the house and area make sense, but cash to close is the problem, that kind of assistance may matter. The question is not just whether you qualify. The question is whether it actually helps you buy the right place in a smart way.
          </p>

          <h3
            className="text-xl font-semibold text-cream mb-3 mt-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            VA
          </h3>
          <p className="text-cream/80 mb-3 leading-relaxed">VA can be really strong here if you are eligible.</p>
          <p className="text-cream/80 mb-3 leading-relaxed">Especially if keeping cash matters.</p>
          <p className="text-cream/80 mb-6 leading-relaxed">
            But it still has to fit the property, the deal, and the overall plan. It is a tool. A good one. But still a tool.
          </p>

          <h3
            className="text-xl font-semibold text-cream mb-3 mt-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Conventional / HomeReady / Home Possible
          </h3>
          <p className="text-cream/80 mb-3 leading-relaxed">
            These matter because not every conventional buyer should take the most obvious path.
          </p>
          <p className="text-cream/80 mb-6 leading-relaxed">
            Sometimes one of these lower-down-payment options is the better fit depending on the buyer, the property, and what problem you are actually trying to solve.
          </p>

          <h3
            className="text-xl font-semibold text-cream mb-3 mt-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Seller concessions
          </h3>
          <p className="text-cream/80 mb-3 leading-relaxed">This should not be some throwaway line at the bottom of a financing section.</p>
          <p className="text-cream/80 mb-3 leading-relaxed">It is part of the strategy.</p>
          <p className="text-cream/80 mb-3 leading-relaxed">In Denver, concessions can help with:</p>
          <ul className="list-none space-y-2 mb-6 pl-0">
            {["closing costs", "keeping cash in reserve", "buydowns", "making the whole deal feel better even when the price barely moves"].map((item, i) => (
              <li key={i} className="text-cream/75 leading-relaxed pl-4 border-l-2 border-gold/30">{item}</li>
            ))}
          </ul>
          <p className="text-cream/80 leading-relaxed">
            A lot of buyers miss that because they only look at list price and sales price.
          </p>
        </div>
      </section>

      {/* ─── When neighborhood pages actually help ─── */}
      <section className="py-14 sm:py-18 bg-cream">
        <div className="mx-auto w-full max-w-3xl px-8">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            When neighborhood pages actually help
          </h2>
          <p className="text-charcoal/80 mb-4 leading-relaxed">Neighborhood pages help after you are honest about:</p>
          <ul className="list-none space-y-2 mb-6 pl-0">
            {["budget", "payment", "home type", "tradeoffs"].map((item, i) => (
              <li key={i} className="text-charcoal/80 leading-relaxed pl-4 border-l-2 border-gold/40">{item}</li>
            ))}
          </ul>
          <p className="text-charcoal/80 mb-4 leading-relaxed">That is when they start doing real work.</p>
          <p className="text-charcoal/80 mb-4 leading-relaxed">Before that, they can actually make you more scattered.</p>
          <p className="text-charcoal/80 mb-4 leading-relaxed">Once you are ready, that is where pages like:</p>
          <ul className="list-none space-y-2 mb-6 pl-0">
            {[
              "Wash Park vs Platt Park",
              "LoHi vs Highland",
              "RiNo vs LoHi",
              "Central Park vs older / tighter-in options",
              "Sloan Lake vs other west-side choices",
              "Cherry Creek vs a more neighborhood-first search",
            ].map((item, i) => (
              <li key={i} className="text-charcoal/80 leading-relaxed pl-4 border-l-2 border-gold/40">{item}</li>
            ))}
          </ul>
          <p className="text-charcoal/80 mb-4 leading-relaxed">start helping instead of distracting you.</p>
          <p className="text-charcoal/80 mb-4 leading-relaxed">So yes, neighborhood matters.</p>
          <p className="text-charcoal/80 leading-relaxed">Just not always first.</p>
        </div>
      </section>

      {/* ─── FeaturedGallery Widget Section ─── */}
      <section className="py-14 sm:py-18 bg-charcoal">
        <div className="mx-auto w-full max-w-3xl px-8">
          <h2
            className="text-2xl sm:text-3xl font-bold text-cream mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Browse current Denver listings
          </h2>
          <p
            className="text-cream/80 mb-6 leading-relaxed text-base"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            If you are at the point where looking at actual listings helps, use this as a browse section — not as a substitute for getting clear.
          </p>
          <div className="w-full">
            <BuyingBuddyWidget
              type="FeaturedGallery"
              filter="carousel:true+mls_id:denver+listing_status:active,coming-soon+city:denver+delay:2500+order:create_dt desc,price"
            />
          </div>
        </div>
      </section>

      {/* ─── What your next step probably is ─── */}
      <section className="py-14 sm:py-18 bg-cream">
        <div className="mx-auto w-full max-w-3xl px-8">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            What your next step probably is
          </h2>
          <p className="text-charcoal/80 mb-6 leading-relaxed">Usually it is one of these.</p>

          <h3
            className="text-xl font-semibold text-charcoal mb-3 mt-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            You are ready to search homes
          </h3>
          <p className="text-charcoal/80 mb-3 leading-relaxed">That is usually true when you know:</p>
          <ul className="list-none space-y-2 mb-6 pl-0">
            {["your payment", "your home type", "whether Denver proper is really part of the plan", "what tradeoffs you can live with"].map((item, i) => (
              <li key={i} className="text-charcoal/80 leading-relaxed pl-4 border-l-2 border-gold/40">{item}</li>
            ))}
          </ul>

          <h3
            className="text-xl font-semibold text-charcoal mb-3 mt-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            You need a strategy conversation first
          </h3>
          <p className="text-charcoal/80 mb-3 leading-relaxed">That is usually true when:</p>
          <ul className="list-none space-y-2 mb-6 pl-0">
            {[
              "you are still broad",
              "you are mixing too many neighborhoods and home types",
              "you do not know whether concessions or assistance matter",
              "or you have a preapproval but not a real plan",
            ].map((item, i) => (
              <li key={i} className="text-charcoal/80 leading-relaxed pl-4 border-l-2 border-gold/40">{item}</li>
            ))}
          </ul>

          <h3
            className="text-xl font-semibold text-charcoal mb-3 mt-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            You need neighborhood pages next
          </h3>
          <p className="text-charcoal/80 leading-relaxed">That is when the main question is fit, not readiness.</p>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-14 sm:py-18 bg-charcoal">
        <div className="mx-auto w-full max-w-3xl px-8">
          <h2
            className="text-2xl sm:text-3xl font-bold text-cream mb-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            FAQs about buying a home in Denver
          </h2>
          <div className="space-y-3">
            {faqContent.map((faq, idx) => (
              <div key={idx} className="border border-cream/15 rounded-lg overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-5 text-left bg-charcoal/60 hover:bg-charcoal/80 transition-colors"
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  aria-expanded={expandedFaq === idx}
                >
                  <span
                    className="font-semibold text-cream pr-4"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-gold flex-shrink-0 transition-transform ${
                      expandedFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {/* Answer always in DOM for SEO/SSR; hidden visually after hydration when collapsed */}
                <div
                  className="px-5 pb-5 pt-2 bg-charcoal/40"
                  style={{ display: !hydrated || expandedFaq === idx ? "block" : "none" }}
                  aria-hidden={hydrated && expandedFaq !== idx}
                >
                  <p className="text-cream/75 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Final thoughts ─── */}
      <section className="py-14 sm:py-20 bg-cream">
        <div className="mx-auto w-full max-w-3xl px-8">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Final thoughts
          </h2>
          <p className="text-charcoal/80 mb-4 leading-relaxed">
            Buying in Denver usually gets easier once you stop treating it like a generic market.
          </p>
          <p className="text-charcoal/80 mb-4 leading-relaxed">Most of the time, that means getting honest about:</p>
          <ul className="list-none space-y-2 mb-6 pl-0">
            {["payment", "home type", "tradeoffs", "financing fit", "concessions", "and whether it is even time to narrow by neighborhood yet"].map((item, i) => (
              <li key={i} className="text-charcoal/80 leading-relaxed pl-4 border-l-2 border-gold/40">{item}</li>
            ))}
          </ul>
          <p className="text-charcoal/80 mb-4 leading-relaxed">That is all this page really needs to do.</p>
          <p className="text-charcoal/80 mb-8 leading-relaxed">
            Help a serious buyer get clearer before they waste a bunch of time.
          </p>

          <h3
            className="text-xl font-semibold text-charcoal mb-3 mt-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Next step
          </h3>
          <p className="text-charcoal/80 mb-4 leading-relaxed">
            If you want help figuring out whether you are actually ready to buy in Denver, the next move is to talk through budget, payment comfort, home type, concessions, and whether you should still be broad or start narrowing.
          </p>
          <p className="text-charcoal/80 mb-8 leading-relaxed">Then search homes or neighborhood pages from there.</p>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <a
              href={SEARCH_URL}
              className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 bg-gold text-charcoal hover:bg-gold-light hover:shadow-lg px-6 py-3 text-sm no-underline"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Search Denver Homes
            </a>
            <a
              href={CONSULTATION_URL}
              className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-charcoal/30 text-charcoal/80 hover:border-charcoal hover:text-charcoal px-6 py-3 text-sm no-underline"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Schedule a Buyer Consultation
            </a>
          </div>
        </div>
      </section>

      {/* ─── Contact Form Endcap ─── */}
      <section id="contact-rob" className="py-14 sm:py-20 bg-charcoal">
        <div className="mx-auto w-full max-w-3xl px-8">
          <LeadForm
            variant="buyer"
            source="Buying a Home in Denver"
            dark={true}
          />
        </div>
      </section>
    </div>
  );
}
