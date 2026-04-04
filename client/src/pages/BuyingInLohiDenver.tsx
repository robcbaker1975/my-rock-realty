/**
 * Buying in LoHi Denver — My Rock Realty
 * Route: /buying-in/lohi-denver
 * Page class: BUYING GUIDE / DECISION GUIDE
 * Locked copy: pasted_content_137.txt — do not rewrite
 * Design: Front Range Modern — matches existing site design system
 */

import { useState } from "react";
import SeoHead from "@/components/seo/SeoHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { ChevronDown } from "lucide-react";
import BuyingBuddyWidget from "@/components/BuyingBuddyWidget";

const HERO_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/denver-rowhouses-hero_2f59d4ac.jpg";

/* ─── Buying Buddy filter ─── */
const BB_FILTER =
  "mls_id:denver+listing_status:active,coming-soon+radius:39.7677107%20-105.0039285,1+order:create_dt desc,price";
const LOHI_RESULTS_URL = `/listing-results?filter=${BB_FILTER}`;

/* ─── CTA destinations ─── */
// Compare LoHi vs Highland — no live compare page exists; placeholder preserved
const COMPARE_LOHI_HIGHLAND = "/highland-denver-homes-for-sale";
// Compare LoHi vs Wash Park — buyer guide exists at /wash-park-denver-buyer-guide
const COMPARE_LOHI_WASHPARK = "/wash-park-denver-buyer-guide";
// Compare LoHi vs Cherry Creek — buyer guide exists at /cherry-creek-denver-buyer-guide
const COMPARE_LOHI_CHERRYCREEK = "/cherry-creek-denver-buyer-guide";
// Nearby neighborhoods
const NEARBY_NEIGHBORHOODS = "/denver-homes-for-sale";
// Search Homes Near LoHi — nearby results, not generic Denver
const SEARCH_NEAR_LOHI = `/listing-results?filter=${BB_FILTER}`;
// Consultation form
const CONSULTATION_URL = "https://myrockhomes.com/contact";
// Seller CTAs
const SELLER_VALUE_URL = "https://myrockhomes.com/contact?subject=LoHi+Home+Value";
const SELLER_STRATEGY_URL = "https://myrockhomes.com/contact?subject=Seller+Strategy+Call";

/* ─── FAQ Content — locked copy ─── */
const faqContent = [
  {
    question: "Is LoHi an official Denver neighborhood?",
    answer:
      "Officially, Denver uses Highland. LoHi is the shorthand people use for the Lower Highland part of that broader area.",
  },
  {
    question: "Do people actually call it LoHi?",
    answer: "Yes. Visit Denver explicitly says \"LoHi to locals.\"",
  },
  {
    question: "Is LoHi the same as Highland?",
    answer:
      "Not exactly. Highland is the official neighborhood name. LoHi usually means the closer-in Lower Highland piece.",
  },
  {
    question: "What kind of homes are common in LoHi?",
    answer:
      "Visit Denver describes Highland as having three districts, including Lower Highland, and local guides commonly describe LoHi around condos, townhomes, newer infill, and some detached homes.",
  },
  {
    question: "What is the biggest mistake buyers make in LoHi?",
    answer: "Keeping it on the list just because the name sounds right.",
  },
  {
    question: "Should I buy in LoHi or just near it?",
    answer:
      "That depends on whether you want LoHi itself or just what this part of Denver gives you.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Buying In", url: "/denver-homes-for-sale" },
  { label: "LoHi", url: "/buying-in/lohi-denver" },
];

export default function BuyingInLohiDenver() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <SeoHead
        metadata={{
          title: "Buying in LoHi Denver | Should It Stay on Your List?",
          description:
            "Thinking about buying in LoHi Denver? Here's how to know if LoHi should stay on your list, what buyers get wrong, and when nearby may be the smarter move.",
          canonicalUrl: "https://myrockhomes.com/buying-in/lohi-denver",
          breadcrumbs: breadcrumbItems,
        }}
        schema={faqSchema ? [faqSchema] : []}
      />

      {/* BREADCRUMBS */}
      <div className="bg-charcoal">
        <div className="container py-3">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="relative bg-charcoal overflow-hidden">
        <img
          src={HERO_BG}
          alt="Row houses along a residential street in Denver"
          className="absolute inset-0 w-full h-full object-cover object-center"
          width="1600"
          height="900"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/90" />
        <div className="container relative z-10 py-16 sm:py-20 md:py-24">
          <div className="max-w-2xl">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-cream mb-6 leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Buying in LoHi: Should It Stay on Your List?
            </h1>
            <p className="text-lg text-cream/80 mb-4 leading-relaxed">
              Most people just say LoHi.
            </p>
            <p className="text-base text-cream/75 mb-4 leading-relaxed">
              More exactly, this is Lower Highland, inside the broader Highland neighborhood. If you
              know Commons Park and the Highland Bridge, you already know the part of town most buyers
              mean when they say LoHi. Denver uses Highland officially, but you will still see Lower
              Highland (LoHi) used all over the place, and Visit Denver even says "LoHi to locals."
            </p>
            <p className="text-base text-cream/75 mb-4 leading-relaxed">
              That matters because a lot of buyers put LoHi on the list early, before they have
              really sorted what they want.
            </p>
            <p className="text-base text-cream/75 mb-6 leading-relaxed">
              That is where people start mixing things together.
            </p>
            <p className="text-base text-cream/75 mb-8 leading-relaxed">
              This page is here to help you figure out whether LoHi should stay on your list, move
              down the list, or come off entirely.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
              <a
                href={LOHI_RESULTS_URL}
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 bg-gold text-charcoal hover:bg-gold-light hover:shadow-lg px-6 py-3 text-sm no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Search LoHi Homes
              </a>
              <a
                href="#lohi-map"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-gold text-gold hover:bg-gold hover:text-charcoal px-6 py-3 text-sm no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Map Search in LoHi
              </a>
              <a
                href={COMPARE_LOHI_HIGHLAND}
                className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-cream/40 text-cream/80 hover:border-cream hover:text-cream px-6 py-3 text-sm no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Compare LoHi vs Highland
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── START HERE ── */}
      <section className="py-14 sm:py-18 bg-cream">
        <div className="container max-w-2xl">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Start here
          </h2>
          <p className="text-charcoal/80 mb-4 leading-relaxed">
            Before you look at another home, answer this first:
          </p>
          <p className="text-charcoal font-semibold mb-4 leading-relaxed">
            Why is LoHi on your list?
          </p>
          <p className="text-charcoal/80 mb-4 leading-relaxed">
            For a lot of buyers, it is one of these:
          </p>
          <ul className="list-none space-y-2 mb-6 pl-0">
            {[
              "close to downtown",
              "easy to get around from",
              "walkable",
              "a lot going on",
              "a name that keeps coming up",
              "that area around Commons Park and the Highland Bridge that feels connected to the city without being downtown",
            ].map((item, i) => (
              <li key={i} className="text-charcoal/80 leading-relaxed pl-4 border-l-2 border-gold/40">
                {item}
              </li>
            ))}
          </ul>
          <p className="text-charcoal/80 mb-4 leading-relaxed">That is all fair.</p>
          <p className="text-charcoal/80 leading-relaxed">
            But liking what LoHi represents is not the same as liking what buying there is probably
            going to look like.
          </p>
        </div>
      </section>

      {/* ── THE REAL TEST ── */}
      <section className="py-14 sm:py-18 bg-charcoal">
        <div className="container max-w-2xl">
          <h2
            className="text-2xl sm:text-3xl font-bold text-cream mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            The real test
          </h2>
          <p className="text-cream/80 mb-4 leading-relaxed">
            LoHi should probably stay on your list if most of this sounds right:
          </p>
          <ul className="list-none space-y-2 mb-6 pl-0">
            {[
              "You want to be close to downtown without being in downtown.",
              "You care a lot about walkability.",
              "You are fine if the search points you toward a condo or townhome.",
              "You are not trying to get the biggest house possible for the money.",
              "You care more about being in this area than checking every box on the property itself.",
            ].map((item, i) => (
              <li key={i} className="text-cream/80 leading-relaxed pl-4 border-l-2 border-gold/40">
                {item}
              </li>
            ))}
          </ul>
          <p className="text-cream/80 mb-4 leading-relaxed">If that sounds like you, good.</p>
          <p className="text-cream/80 mb-4 leading-relaxed">
            If not, that does not mean LoHi is bad.
          </p>
          <p className="text-cream/80 mb-8 leading-relaxed">
            Usually it just means the name pulled you in before you really thought through the rest.
          </p>
          <a
            href="#lohi-alerts"
            className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 bg-gold text-charcoal hover:bg-gold-light hover:shadow-lg px-6 py-3 text-sm no-underline"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Save This Search and Get Alerts
          </a>
        </div>
      </section>

      {/* ── WHEN LOHI STARTS FALLING APART ── */}
      <section className="py-14 sm:py-18 bg-cream">
        <div className="container max-w-2xl">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            When LoHi starts falling apart for a buyer
          </h2>
          <p className="text-charcoal/80 mb-4 leading-relaxed">This is usually where it happens.</p>
          <p className="text-charcoal/80 mb-4 leading-relaxed">
            LoHi starts dropping once the buyer realizes:
          </p>
          <ul className="list-none space-y-2 mb-6 pl-0">
            {[
              "they really want a house first",
              "parking is going to matter more than they wanted to admit",
              "they want more room than this search usually gives them",
              "they like being near LoHi more than being in it",
              "they want this side of Denver, but not all the tradeoffs that come with this exact area",
            ].map((item, i) => (
              <li key={i} className="text-charcoal/80 leading-relaxed pl-4 border-l-2 border-gold/40">
                {item}
              </li>
            ))}
          </ul>
          <p className="text-charcoal/80 mb-4 leading-relaxed">That is not failure.</p>
          <p className="text-charcoal/80 leading-relaxed">
            That is just the point where people start being honest about it.
          </p>
        </div>
      </section>

      {/* ── WHAT THE SEARCH USUALLY TURNS INTO ── */}
      <section className="py-14 sm:py-18 bg-charcoal">
        <div className="container max-w-2xl">
          <h2
            className="text-2xl sm:text-3xl font-bold text-cream mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            What the search usually turns into
          </h2>
          <p className="text-cream/80 mb-4 leading-relaxed">
            At first, buyers think this is a neighborhood decision.
          </p>
          <p className="text-cream/80 mb-6 leading-relaxed">
            Pretty quickly, it becomes a home-type decision.
          </p>
          <div className="space-y-6 mb-8">
            {[
              {
                quote: '"A condo is fine if it gets me the location."',
                note: "Then LoHi may still be a strong fit.",
              },
              {
                quote: '"A townhome is fine. I just want to stay here."',
                note: "That can work too.",
              },
              {
                quote: '"I really want a house."',
                note: "Still possible. Usually where the search gets tighter and there are fewer good options.",
              },
              {
                quote: '"I may just want to be near LoHi."',
                note: "A lot of the time, that is where people start making better decisions.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-cream/10 rounded-lg p-5 border border-cream/20">
                <p className="text-cream font-semibold mb-2 leading-relaxed">{item.quote}</p>
                <p className="text-cream/70 text-sm leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="text-cream/80 mb-8 leading-relaxed">
            That is usually when this stops being about the name.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={LOHI_RESULTS_URL}
              className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 bg-gold text-charcoal hover:bg-gold-light hover:shadow-lg px-6 py-3 text-sm no-underline"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Search LoHi Homes
            </a>
            <a
              href={NEARBY_NEIGHBORHOODS}
              className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-gold text-gold hover:bg-gold hover:text-charcoal px-6 py-3 text-sm no-underline"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              See Nearby Neighborhoods
            </a>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU ARE REALLY PAYING FOR ── */}
      <section className="py-14 sm:py-18 bg-cream">
        <div className="container max-w-2xl">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            What you are really paying for here
          </h2>
          <p className="text-charcoal/80 mb-4 leading-relaxed">
            In LoHi, people are not just paying for the property.
          </p>
          <p className="text-charcoal/80 mb-4 leading-relaxed">They are paying for where it puts them.</p>
          <ul className="list-none space-y-2 mb-6 pl-0">
            {[
              "Closer to downtown.",
              "More walkable than a lot of other searches.",
              "In a neighborhood people know by name.",
            ].map((item, i) => (
              <li key={i} className="text-charcoal/80 leading-relaxed pl-4 border-l-2 border-gold/40">
                {item}
              </li>
            ))}
          </ul>
          <p className="text-charcoal/80 mb-4 leading-relaxed">That works for some buyers.</p>
          <p className="text-charcoal/80 mb-8 leading-relaxed">
            For others, it is not enough.
          </p>
          <p className="text-charcoal/80 mb-8 leading-relaxed">
            That is why LoHi should stay on the list only if what you are paying for actually matters
            to you.
          </p>
          <a
            href={SEARCH_NEAR_LOHI}
            className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 bg-gold text-charcoal hover:bg-gold-light hover:shadow-lg px-6 py-3 text-sm no-underline"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Search Homes Near LoHi
          </a>
        </div>
      </section>

      {/* ── LOHI MARKET SNAPSHOT ── */}
      <section className="py-14 sm:py-18 bg-charcoal" id="lohi-map">
        <div className="container max-w-3xl">
          <h2
            className="text-2xl sm:text-3xl font-bold text-cream mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            LoHi Market Snapshot
          </h2>
          <p className="text-cream/70 mb-8 text-sm">
            This is where the live numbers belong, not in the body copy.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            {[
              { label: "Median list price", value: "[dynamic]" },
              { label: "Median sold price", value: "[dynamic]" },
              { label: "Active listings", value: "[dynamic]" },
              { label: "Avg price per sq ft", value: "[dynamic]" },
              { label: "Median days on market", value: "[dynamic]" },
            ].map((item, i) => (
              <div key={i} className="bg-cream/10 rounded-lg p-4 border border-cream/20">
                <p className="text-cream/60 text-xs mb-1">{item.label}</p>
                <p className="text-cream font-bold text-lg">{item.value}</p>
              </div>
            ))}
          </div>
          {/* Interactive Map widget */}
          <div className="mb-8 rounded-lg overflow-hidden border border-cream/20">
            <BuyingBuddyWidget type="InteractiveMap" filter={BB_FILTER} />
          </div>
          {/* Featured Gallery widget */}
          <div className="mb-8" id="lohi-alerts">
            <BuyingBuddyWidget type="FeaturedGallery" filter={BB_FILTER} />
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={LOHI_RESULTS_URL}
              className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 bg-gold text-charcoal hover:bg-gold-light hover:shadow-lg px-6 py-3 text-sm no-underline"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              See All LoHi Listings
            </a>
            <a
              href={LOHI_RESULTS_URL}
              className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-gold text-gold hover:bg-gold hover:text-charcoal px-6 py-3 text-sm no-underline"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Set Up Price Drop and New Listing Alerts
            </a>
          </div>
        </div>
      </section>

      {/* ── IF LOHI STAYS ON YOUR LIST ── */}
      <section className="py-14 sm:py-18 bg-cream">
        <div className="container max-w-2xl">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            If LoHi stays on your list
          </h2>
          <p className="text-charcoal/80 mb-4 leading-relaxed">
            Then be honest about what buying here is probably going to look like.
          </p>
          <p className="text-charcoal/80 mb-4 leading-relaxed">Usually that means:</p>
          <ul className="list-none space-y-2 mb-6 pl-0">
            {[
              "you stay open on home type",
              "you stop pretending you want a different neighborhood",
              "you compare LoHi against the right nearby options",
              "you stop acting like the goal is to get everything at once",
            ].map((item, i) => (
              <li key={i} className="text-charcoal/80 leading-relaxed pl-4 border-l-2 border-gold/40">
                {item}
              </li>
            ))}
          </ul>
          <p className="text-charcoal/80 mb-4 leading-relaxed">
            That is how buyers usually do well here.
          </p>
          <p className="text-charcoal/80 leading-relaxed">
            Because they stop fighting what it is.
          </p>
        </div>
      </section>

      {/* ── IF LOHI DROPS OFF YOUR LIST ── */}
      <section className="py-14 sm:py-18 bg-charcoal">
        <div className="container max-w-2xl">
          <h2
            className="text-2xl sm:text-3xl font-bold text-cream mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            If LoHi drops off your list
          </h2>
          <p className="text-cream/80 mb-4 leading-relaxed">That is useful too.</p>
          <p className="text-cream/80 mb-4 leading-relaxed">It usually means one of these:</p>
          <ul className="list-none space-y-2 mb-6 pl-0">
            {[
              "you want Highland more broadly",
              "you want this side of Denver, but not this exact area",
              "you want more house than LoHi usually gives you",
              "you like visiting LoHi more than buying there",
              "you want the location benefits without pushing yourself into the hardest version of this decision",
            ].map((item, i) => (
              <li key={i} className="text-cream/80 leading-relaxed pl-4 border-l-2 border-gold/40">
                {item}
              </li>
            ))}
          </ul>
          <p className="text-cream/80 mb-4 leading-relaxed">That is not backing off.</p>
          <p className="text-cream/80 leading-relaxed">
            That is usually when things start making more sense.
          </p>
        </div>
      </section>

      {/* ── LOHI / LOWER HIGHLAND / HIGHLAND / THE HIGHLANDS ── */}
      <section className="py-14 sm:py-18 bg-cream">
        <div className="container max-w-2xl">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            LoHi, Lower Highland, Highland, and the Highlands
          </h2>
          <p className="text-charcoal/80 mb-4 leading-relaxed">Here is the short version.</p>
          <p className="text-charcoal/80 mb-4 leading-relaxed">
            Highland is the official neighborhood name Denver uses.
          </p>
          <p className="text-charcoal/80 mb-4 leading-relaxed">
            Lower Highland is the more specific name for the closer-in piece people usually mean
            here. Visit Denver uses that name directly.
          </p>
          <p className="text-charcoal/80 mb-4 leading-relaxed">
            LoHi is the normal shorthand. Visit Denver explicitly says "LoHi to locals."
          </p>
          <p className="text-charcoal/80 mb-4 leading-relaxed">
            The Highlands is what people often say more loosely for the broader area. Visit Denver
            groups Highland, LoHi, Berkeley and Sunnyside together on its Highlands page, which lines
            up with that broader everyday usage.
          </p>
          <p className="text-charcoal/80 leading-relaxed">
            So if you were saying it out loud, LoHi is normal. Lower Highland is useful once for
            clarity. Highland is the official version.
          </p>
        </div>
      </section>

      {/* ── COMPARISONS ── */}
      <section className="py-14 sm:py-18 bg-charcoal">
        <div className="container max-w-2xl">
          <h2
            className="text-2xl sm:text-3xl font-bold text-cream mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            The next comparisons that actually matter
          </h2>
          <p className="text-cream/80 mb-8 leading-relaxed">
            If LoHi is still on your list, these are the next clicks that usually help.
          </p>
          <div className="space-y-6 mb-8">
            <div>
              <h3
                className="text-lg font-bold text-cream mb-2"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                LoHi vs Highland
              </h3>
              <p className="text-cream/75 mb-3 leading-relaxed text-sm">
                If you want the tighter, closer-in part near downtown, you probably mean LoHi. If
                you want a broader search with more variation, you may mean Highland.
              </p>
              <a
                href={COMPARE_LOHI_HIGHLAND}
                className="inline-flex items-center gap-2 font-semibold text-gold hover:text-gold-light text-sm no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Compare LoHi vs Highland →
              </a>
            </div>
            <div className="border-t border-cream/10 pt-6">
              <h3
                className="text-lg font-bold text-cream mb-2"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                LoHi vs Wash Park
              </h3>
              <p className="text-cream/75 mb-3 leading-relaxed text-sm">
                This matters when the real question is whether you want something closer to downtown
                or something more residential.
              </p>
              <a
                href={COMPARE_LOHI_WASHPARK}
                className="inline-flex items-center gap-2 font-semibold text-gold hover:text-gold-light text-sm no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Compare LoHi vs Wash Park →
              </a>
            </div>
            <div className="border-t border-cream/10 pt-6">
              <h3
                className="text-lg font-bold text-cream mb-2"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                LoHi vs Cherry Creek
              </h3>
              <p className="text-cream/75 mb-3 leading-relaxed text-sm">
                This matters when the buyer wants central Denver but is trying to decide between a
                more urban feel and an easier day-to-day fit.
              </p>
              <a
                href={COMPARE_LOHI_CHERRYCREEK}
                className="inline-flex items-center gap-2 font-semibold text-gold hover:text-gold-light text-sm no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Compare LoHi vs Cherry Creek →
              </a>
            </div>
            <div className="border-t border-cream/10 pt-6">
              <h3
                className="text-lg font-bold text-cream mb-2"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                LoHi vs nearby
              </h3>
              <p className="text-cream/75 mb-3 leading-relaxed text-sm">
                A lot of buyers should make this comparison sooner.
              </p>
              <p className="text-cream/75 mb-3 leading-relaxed text-sm">
                Sometimes the right answer is not LoHi itself.
              </p>
              <p className="text-cream/75 mb-3 leading-relaxed text-sm">
                It is being close enough to get what you want without forcing the hardest version of
                this decision.
              </p>
              <a
                href={NEARBY_NEIGHBORHOODS}
                className="inline-flex items-center gap-2 font-semibold text-gold hover:text-gold-light text-sm no-underline"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                See Nearby Neighborhoods →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── IF YOU OWN IN LOHI AND MAY SELL ── */}
      <section className="py-14 sm:py-18 bg-cream">
        <div className="container max-w-2xl">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            If you own in LoHi and may sell
          </h2>
          <p className="text-charcoal/80 mb-4 leading-relaxed">
            This page matters for sellers too, because this is how buyers size up the area.
          </p>
          <p className="text-charcoal/80 mb-4 leading-relaxed">
            They are not just asking whether your place looks good.
          </p>
          <p className="text-charcoal/80 mb-4 leading-relaxed">They are asking:</p>
          <ul className="list-none space-y-2 mb-6 pl-0">
            {[
              "why this part of Denver",
              "why this block",
              "why this home instead of something nearby",
              "why this setup",
              "why this tradeoff",
            ].map((item, i) => (
              <li key={i} className="text-charcoal/80 leading-relaxed pl-4 border-l-2 border-gold/40">
                {item}
              </li>
            ))}
          </ul>
          <p className="text-charcoal/80 mb-4 leading-relaxed">
            That means buyers need to understand clearly why your home makes sense.
          </p>
          <p className="text-charcoal/80 mb-4 leading-relaxed">
            If it is a condo, buyers are comparing it against renting longer, buying nearby, or
            switching neighborhoods.
          </p>
          <p className="text-charcoal/80 mb-8 leading-relaxed">
            If it is a townhome or house, they are deciding whether this is the version of LoHi that
            feels worth it.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={SELLER_VALUE_URL}
              className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 bg-gold text-charcoal hover:bg-gold-light hover:shadow-lg px-6 py-3 text-sm no-underline"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Find Out What Your LoHi Home Could Sell For
            </a>
            <a
              href={SELLER_STRATEGY_URL}
              className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-charcoal/30 text-charcoal hover:border-charcoal px-6 py-3 text-sm no-underline"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Schedule a Seller Strategy Call
            </a>
          </div>
        </div>
      </section>

      {/* ── BUY NOW OR RENT FIRST ── */}
      <section className="py-14 sm:py-18 bg-charcoal">
        <div className="container max-w-2xl">
          <h2
            className="text-2xl sm:text-3xl font-bold text-cream mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Buy now or rent first?
          </h2>
          <p className="text-cream/80 mb-4 leading-relaxed">
            Buy now if LoHi still belongs on your list after you have gotten honest about what buying
            here is probably going to look like.
          </p>
          <p className="text-cream/80 mb-4 leading-relaxed">
            Rent first if you still need to sort out whether you want:
          </p>
          <ul className="list-none space-y-2 mb-6 pl-0">
            {[
              "LoHi itself",
              "Highland more broadly",
              "or just better access to this side of Denver",
            ].map((item, i) => (
              <li key={i} className="text-cream/80 leading-relaxed pl-4 border-l-2 border-gold/40">
                {item}
              </li>
            ))}
          </ul>
          <p className="text-cream/80 mb-4 leading-relaxed">
            That is especially true if you like the area but are still unsure what kind of home you
            would actually feel good buying here.
          </p>
          <p className="text-cream/80 mb-4 leading-relaxed">Renting first is not backing off.</p>
          <p className="text-cream/80 leading-relaxed">
            Sometimes it is how people avoid buying the wrong version of a neighborhood they liked in
            theory.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-14 sm:py-18 bg-cream">
        <div className="container max-w-2xl">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            FAQs about buying in LoHi
          </h2>
          <div className="space-y-3">
            {faqContent.map((faq, idx) => (
              <div key={idx} className="border border-charcoal/15 rounded-lg overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-cream/60 transition-colors"
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  aria-expanded={expandedFaq === idx}
                >
                  <span
                    className="font-semibold text-charcoal pr-4"
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
                {expandedFaq === idx && (
                  <div className="px-5 pb-5 pt-2 bg-white">
                    <p className="text-charcoal/75 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-14 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <h2
            className="text-2xl sm:text-3xl font-bold text-cream mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Final thoughts
          </h2>
          <p className="text-cream/80 mb-4 leading-relaxed">
            LoHi can absolutely be the right answer.
          </p>
          <p className="text-cream/80 mb-4 leading-relaxed">
            But it should stay on your list for the right reasons.
          </p>
          <ul className="list-none space-y-2 mb-6 pl-0">
            {[
              "Not because the name sounds familiar.",
              "Not because everybody talks about it.",
              "Not because it was the first thing that sounded good.",
            ].map((item, i) => (
              <li key={i} className="text-cream/75 leading-relaxed pl-4 border-l-2 border-gold/30">
                {item}
              </li>
            ))}
          </ul>
          <p className="text-cream/80 mb-4 leading-relaxed">
            If LoHi still makes sense once you get honest about the kind of home you want and what
            you care about most, great.
          </p>
          <p className="text-cream/80 mb-4 leading-relaxed">If not, that is useful too.</p>
          <p className="text-cream/80 mb-4 leading-relaxed">
            Because the point is not to force LoHi.
          </p>
          <p className="text-cream/80 mb-10 leading-relaxed">
            You are just trying to make the right move and not waste time chasing the wrong one.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <a
              href={LOHI_RESULTS_URL}
              className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 bg-gold text-charcoal hover:bg-gold-light hover:shadow-lg px-6 py-3 text-sm no-underline"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Search LoHi Homes
            </a>
            <a
              href="#lohi-map"
              className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-gold text-gold hover:bg-gold hover:text-charcoal px-6 py-3 text-sm no-underline"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Map Search in LoHi
            </a>
            <a
              href={CONSULTATION_URL}
              className="inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 border-2 border-cream/40 text-cream/80 hover:border-cream hover:text-cream px-6 py-3 text-sm no-underline"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Schedule a Home Buying Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
