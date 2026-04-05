/**
 * Buying a Home in Denver — My Rock Realty
 * Denver city-level buyer guide page
 * Route: /buying-a-home-in-denver
 * Approved copy, widgets, and metadata
 */

import SeoHead from "@/components/seo/SeoHead";
import LeadForm from "@/components/LeadForm";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

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

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-stone-200">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 px-4 text-left hover:bg-stone-50 transition-colors"
      >
        <h3 className="font-semibold text-stone-900 pr-4">{question}</h3>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 text-stone-600 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-4 pb-4 text-stone-700 leading-relaxed">{answer}</div>
      )}
    </div>
  );
}

export default function BuyingAHomeInDenver() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
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

      {/* ─── Breadcrumbs ─── */}
      <div className="bg-stone-100 border-b border-stone-200">
        <div className="max-w-3xl mx-auto px-6 py-3">
          <Breadcrumbs
            items={breadcrumbItems}
            listClassName="text-stone-600"
            itemClassName="text-stone-600"
            className="[&_a]:text-stone-600 [&_a]:hover:text-amber-700 [&_span[aria-current]]:text-stone-900 [&_span[aria-current]]:font-semibold [&_span[aria-hidden]]:text-stone-400"
          />
        </div>
      </div>

      {/* ─── Main Content ─── */}
      <main className="max-w-3xl mx-auto px-6 py-12 space-y-12">
        {/* ─── H1 + Intro ─── */}
        <section>
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            Buying a Home in Denver: What Gets Harder, What Helps, and How to
            Start Smart
          </h1>
          <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
            <p>
              Buying in Denver usually does not get hard because buyers are
              doing something wrong.
            </p>
            <p>It usually gets hard because they start too wide.</p>
            <p>
              They look at too many neighborhoods, too many price points, too
              many home types, and tell themselves they are just getting a feel
              for things.
            </p>
            <p>
              Most of the time, what is really happening is they have not
              figured out what matters yet, so every house feels half-right.
            </p>
            <p>That is where people lose time.</p>
            <p>That is what this page is for.</p>
            <p>
              Not to sell you on Denver. Not to give you a big generic buyer
              article. And not to throw every financing option on one page and
              call it helpful.
            </p>
            <p>Just to help you get clear before you spend weeks looking at the
              wrong stuff.</p>
          </div>
        </section>

        {/* ─── What I would figure out first ─── */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-6">
            What I would figure out first
          </h2>
          <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
            <p>Before you get attached to neighborhoods, figure out a few basic
              things.</p>

            <h3 className="text-xl font-semibold text-stone-900 mt-8 mb-3">
              What payment actually feels okay
            </h3>
            <p>
              Not what a lender says you can qualify for.
            </p>
            <p>
              What actually feels okay to you every month.
            </p>
            <p>
              Those are not always the same number.
            </p>
            <p>
              A lot of buyers get themselves in trouble here because they start
              with approval instead of payment comfort.
            </p>

            <h3 className="text-xl font-semibold text-stone-900 mt-8 mb-3">
              Whether your real problem is payment or cash to close
            </h3>
            <p>
              Those are different problems.
            </p>
            <p>
              Some buyers can handle the payment but are tight on down payment
              and closing costs. Some have enough cash, but the monthly number
              starts getting uncomfortable fast. Some are dealing with both.
            </p>
            <p>
              That changes the whole conversation.
            </p>

            <h3 className="text-xl font-semibold text-stone-900 mt-8 mb-3">
              What kind of home you are honestly open to
            </h3>
            <p>
              Detached house. Condo. Townhome. Duplex. Something
              lower-maintenance.
            </p>
            <p>
              Do not be lazy with this part.
            </p>
            <p>
              A lot of Denver searches go sideways because the buyer says,
              "I'm open," but they really are not.
            </p>

            <h3 className="text-xl font-semibold text-stone-900 mt-8 mb-3">
              Whether you should start with area or start with fit
            </h3>
            <p>
              Some buyers really do need to start with neighborhood.
            </p>
            <p>
              A lot of buyers do better starting with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>payment</li>
              <li>home type</li>
              <li>upkeep</li>
              <li>commute</li>
              <li>whether they even want Denver badly enough to pay for Denver</li>
            </ul>
            <p>
              That part gets skipped all the time.
            </p>

            <h3 className="text-xl font-semibold text-stone-900 mt-8 mb-3">
              What tradeoffs you can actually live with
            </h3>
            <p>
              More space or better location. Older home or easier ownership.
              Lower payment or stronger area fit. Big-name neighborhood or
              better overall setup.
            </p>
            <p>
              If you do not figure that out early, Denver usually makes you
              figure it out later anyway.
            </p>
            <p>
              Just not in a fun way.
            </p>
          </div>
        </section>

        {/* ─── Search CTA Block ─── */}
        <section className="border-t border-stone-200 pt-10">
          <p className="text-stone-700 mb-5 text-base">
            If you already want to start looking, use the search below. Just do
            yourself a favor and stay honest about payment, home type, and
            tradeoffs while you do it.
          </p>
          <div className="w-full overflow-x-auto">
            <bb-widget
              data-type="SearchForm"
              data-filter="shapesearch:39.80102090895284 -105.02467621018009,39.78453360179922 -105.02433288742618,39.782554859383524 -105.00287521530704,39.78730374558338 -104.99806869675236,39.79930641313517 -105.00476349045353,39.80735098475494 -105.00733841110782,39.80102090895284 -105.02467621018009,39.80102090895284 -105.02467621018009+mapzoom:13+mappos:39.79495403947301 -105.01137245346622+delay:2500+order:create_dt desc,price+show-options:on+mls_id:denver+listing_status:active,coming-soon+city:denver"
            />
          </div>
        </section>

        {/* ─── What makes Denver harder than a simpler market ─── */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-6">
            What makes Denver harder than a simpler market
          </h2>
          <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
            <p>
              Usually it is not one thing.
            </p>
            <p>
              It is that Denver gives you enough real options to stay broad
              longer than you should.
            </p>
            <p>
              At first that feels exciting.
            </p>
            <p>
              Then it starts wasting your time.
            </p>
            <p>
              You can bounce around between neighborhoods, home types, and price
              points and feel like you are doing a lot, when really you are just
              keeping too many half-ideas alive.
            </p>
            <p>
              That is a real Denver problem.
            </p>

            <h3 className="text-xl font-semibold text-stone-900 mt-8 mb-3">
              Home type matters early here
            </h3>
            <p>
              In some places, buyers can stay fuzzy on home type for a while.
            </p>
            <p>
              Here, that usually gets expensive.
            </p>
            <p>
              A detached-house search is not the same as a condo search. A condo
              search is not the same as a townhome search. The tradeoffs change.
              The financing conversation can change. The concession strategy can
              change.
            </p>
            <p>
              If that part is still loose, the rest of the search usually stays
              loose too.
            </p>

            <h3 className="text-xl font-semibold text-stone-900 mt-8 mb-3">
              Seller concessions matter more than people think
            </h3>
            <p>
              A lot of buyers still look at everything like price is the whole
              game.
            </p>
            <p>
              It is not.
            </p>
            <p>
              Sometimes the smarter move is not squeezing out every last dollar
              on price. Sometimes it is getting concessions that help with
              closing costs, keep more cash in your pocket, or help the payment
              through a buydown.
            </p>
            <p>
              That can matter more than buyers realize, especially if cash to
              close is the real pressure point.
            </p>

            <h3 className="text-xl font-semibold text-stone-900 mt-8 mb-3">
              Vague buyers usually think the market is the whole problem
            </h3>
            <p>
              Sometimes the market is hard.
            </p>
            <p>
              But a lot of the time, the bigger problem is that the buyer is
              still too broad.
            </p>
            <p>
              If you know your payment comfort, home-type lane, tradeoffs, and
              whether Denver proper is even really part of the plan, you usually
              move a lot better.
            </p>
          </div>
        </section>

        {/* ─── Market Stats Widget ─── */}
        <section className="border-t border-stone-200 pt-10">
          <p className="text-stone-700 mb-5 text-base">
            Here is the quick market snapshot. Useful, yes. But still not as
            useful as knowing what kind of buyer you are and what kind of search
            actually fits you.
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
            <bb-widget
              data-type="MarketStats"
              data-filter="reportType:totals+mls_id:denver+listing_status:active,coming-soon+city:denver"
            />
          </div>
        </section>

        {/* ─── How I would search smarter in Denver ─── */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-6">
            How I would search smarter in Denver
          </h2>
          <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
            <p>
              A lot of buyers here do better when they narrow in this order:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>payment</li>
              <li>home type</li>
              <li>Denver vs suburb or Denver vs nearby access</li>
              <li>upkeep / ownership fit</li>
              <li>neighborhood</li>
            </ol>
            <p>
              That does not mean neighborhood never comes first.
            </p>
            <p>
              It just means neighborhood usually works better after the bigger
              stuff is honest.
            </p>

            <h3 className="text-xl font-semibold text-stone-900 mt-8 mb-3">
              Start with neighborhood when:
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>you already know the city itself matters</li>
              <li>you already know the kind of area you want</li>
              <li>you are ready to search homes</li>
            </ul>

            <h3 className="text-xl font-semibold text-stone-900 mt-8 mb-3">
              Do not start with neighborhood when:
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>you are still fuzzy on payment</li>
              <li>you are still pretending every home type works</li>
              <li>you keep saying you want "something easier" but have not said
                what that means</li>
              <li>you are reacting to names more than fit</li>
            </ul>
            <p>
              That is when neighborhood pages can actually make you more
              scattered.
            </p>
          </div>
        </section>

        {/* ─── Financing and concessions ─── */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-6">
            Financing and concessions
          </h2>
          <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
            <p>
              This page does not need to turn into a loan seminar.
            </p>
            <p>
              But it does need to be useful.
            </p>

            <h3 className="text-xl font-semibold text-stone-900 mt-8 mb-3">
              CHFA
            </h3>
            <p>
              CHFA matters when the real issue is cash to close.
            </p>
            <p>
              Not every buyer should use it. But if Denver is the fit and the
              down payment or closing cash is the thing getting in the way, it
              deserves a real look.
            </p>

            <h3 className="text-xl font-semibold text-stone-900 mt-8 mb-3">
              Denver DPA / metroDPA
            </h3>
            <p>
              Same basic idea.
            </p>
            <p>
              If the house and area make sense, but cash to close is the
              problem, that kind of assistance may matter. The question is not
              just whether you qualify. The question is whether it actually
              helps you buy the right place in a smart way.
            </p>

            <h3 className="text-xl font-semibold text-stone-900 mt-8 mb-3">
              VA
            </h3>
            <p>
              VA can be really strong here if you are eligible.
            </p>
            <p>
              Especially if keeping cash matters.
            </p>
            <p>
              But it still has to fit the property, the deal, and the overall
              plan. It is a tool. A good one. But still a tool.
            </p>

            <h3 className="text-xl font-semibold text-stone-900 mt-8 mb-3">
              Conventional / HomeReady / Home Possible
            </h3>
            <p>
              These matter because not every conventional buyer should take the
              most obvious path.
            </p>
            <p>
              Sometimes one of these lower-down-payment options is the better
              fit depending on the buyer, the property, and what problem you are
              actually trying to solve.
            </p>

            <h3 className="text-xl font-semibold text-stone-900 mt-8 mb-3">
              Seller concessions
            </h3>
            <p>
              This should not be some throwaway line at the bottom of a
              financing section.
            </p>
            <p>
              It is part of the strategy.
            </p>
            <p>
              In Denver, concessions can help with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>closing costs</li>
              <li>keeping cash in reserve</li>
              <li>buydowns</li>
              <li>making the whole deal feel better even when the price barely
                moves</li>
            </ul>
            <p>
              A lot of buyers miss that because they only look at list price and
              sales price.
            </p>
          </div>
        </section>

        {/* ─── When neighborhood pages actually help ─── */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-6">
            When neighborhood pages actually help
          </h2>
          <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
            <p>
              Neighborhood pages help after you are honest about:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>budget</li>
              <li>payment</li>
              <li>home type</li>
              <li>tradeoffs</li>
            </ul>
            <p>
              That is when they start doing real work.
            </p>
            <p>
              Before that, they can actually make you more scattered.
            </p>
            <p>
              Once you are ready, that is where pages like:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Wash Park vs Platt Park</li>
              <li>LoHi vs Highland</li>
              <li>RiNo vs LoHi</li>
              <li>Central Park vs older / tighter-in options</li>
              <li>Sloan Lake vs other west-side choices</li>
              <li>Cherry Creek vs a more neighborhood-first search</li>
            </ul>
            <p>
              start helping instead of distracting you.
            </p>
            <p>
              So yes, neighborhood matters.
            </p>
            <p>
              Just not always first.
            </p>
          </div>
        </section>

        {/* ─── Featured Gallery Widget ─── */}
        <section className="border-t border-stone-200 pt-10">
          <p className="text-stone-700 mb-5 text-base">
            If you are at the point where looking at actual listings helps, use
            this as a browse section — not as a substitute for getting clear.
          </p>
          <div className="w-full">
            <bb-widget
              data-type="FeaturedGallery"
              data-filter="carousel:true+mls_id:denver+listing_status:active,coming-soon+city:denver+delay:2500+order:create_dt desc,price"
            />
          </div>
        </section>

        {/* ─── What your next step probably is ─── */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-6">
            What your next step probably is
          </h2>
          <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
            <p>
              Usually it is one of these.
            </p>

            <h3 className="text-xl font-semibold text-stone-900 mt-8 mb-3">
              You are ready to search homes
            </h3>
            <p>
              That is usually true when you know:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>your payment</li>
              <li>your home type</li>
              <li>whether Denver proper is really part of the plan</li>
              <li>what tradeoffs you can live with</li>
            </ul>

            <h3 className="text-xl font-semibold text-stone-900 mt-8 mb-3">
              You need a strategy conversation first
            </h3>
            <p>
              That is usually true when:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>you are still broad</li>
              <li>you are mixing too many neighborhoods and home types</li>
              <li>you do not know whether concessions or assistance matter</li>
              <li>or you have a preapproval but not a real plan</li>
            </ul>

            <h3 className="text-xl font-semibold text-stone-900 mt-8 mb-3">
              You need neighborhood pages next
            </h3>
            <p>
              That is when the main question is fit, not readiness.
            </p>
          </div>
        </section>

        {/* ─── FAQs ─── */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-6">
            FAQs
          </h2>
          <div className="border border-stone-200 rounded-lg overflow-hidden">
            {faqContent.map((item, idx) => (
              <FAQItem
                key={idx}
                question={item.question}
                answer={item.answer}
                isOpen={expandedFaq === idx}
                onToggle={() =>
                  setExpandedFaq(expandedFaq === idx ? null : idx)
                }
              />
            ))}
          </div>
        </section>

        {/* ─── Final thoughts ─── */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-6">
            Final thoughts
          </h2>
          <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
            <p>
              Buying in Denver usually gets easier once you stop treating it
              like a generic market.
            </p>
            <p>
              Most of the time, that means getting honest about:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>payment</li>
              <li>home type</li>
              <li>tradeoffs</li>
              <li>financing fit</li>
              <li>concessions</li>
              <li>and whether it is even time to narrow by neighborhood yet</li>
            </ul>
            <p>
              That is all this page really needs to do.
            </p>
            <p>
              Help a serious buyer get clearer before they waste a bunch of
              time.
            </p>

            <h3 className="text-xl font-semibold text-stone-900 mt-8 mb-3">
              Next step
            </h3>
            <p>
              If you want help figuring out whether you are actually ready to
              buy in Denver, the next move is to talk through budget, payment
              comfort, home type, concessions, and whether you should still be
              broad or start narrowing.
            </p>
            <p>
              Then search homes or neighborhood pages from there.
            </p>
          </div>
        </section>
      </main>

      {/* ─── Contact Form ─── */}
      <section id="contact-rob" className="bg-stone-100 border-t border-stone-200">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <LeadForm
            variant="buyer"
            source="Buying a Home in Denver"
          />
        </div>
      </section>
    </div>
  );
}
