/**
 * Buyer Flagship Page — /buying-a-home-colorado
 * Source copy: buyer_flagship.txt (locked approved draft)
 * Pattern: mirrors BuyingAHomeInDenver.tsx implementation standard
 * Tone: practical, protective, grounded, plainspoken, strategic
 */

import { useEffect } from "react";
import { Link } from "wouter";
import SeoHead from "@/components/seo/SeoHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

const CHARCOAL = "#292524";
const DEEP_CHARCOAL = "#1a1714";
const CREAM = "#F5F0EB";
const GOLD = "#C9A96E";

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Buying a Home in Colorado", url: "/buying-a-home-colorado" },
];

export default function BuyingAHomeColorado() {
  useEffect(() => {
    document.title = "Buying a Home in Colorado | My Rock Realty";
  }, []);

  return (
    <>
      <SeoHead
        metadata={{
          title: "Buying a Home in Colorado | My Rock Realty",
          description:
            "Most buyers start in the wrong place. My Rock Realty helps Colorado buyers slow down, get clear, and make smarter decisions from the first step to the keys.",
          canonicalUrl: "https://myrockhomes.com/buying-a-home-colorado/",
          breadcrumbs: breadcrumbItems,
        }}
        schema={[]}
      />

      {/* ── 1. HERO SECTION ─────────────────────────────────────────── */}
      <section
        id="hero"
        style={{ background: DEEP_CHARCOAL }}
        className="pt-40 sm:pt-44 md:pt-52 pb-20 sm:pb-28"
      >
        <div className="max-w-3xl mx-auto px-8">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
          {/* Gold accent bar */}
          <div style={{ width: 48, height: 3, background: GOLD }} className="mb-6" />
          <h1
            className="text-4xl sm:text-5xl md:text-[3.25rem] font-bold leading-tight mb-8"
            style={{ color: "#fff", fontFamily: "Outfit, sans-serif" }}
          >
            Most Buyers Start in the Wrong Place
          </h1>
          <p className="text-lg sm:text-xl mb-5" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.75 }}>
            A lot of buyers think the first step is finding homes to look at.
          </p>
          <p className="text-lg sm:text-xl mb-5" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.75 }}>
            That feels right. It also creates a lot of unnecessary stress.
          </p>
          <p className="text-lg sm:text-xl mb-10" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.75 }}>
            What usually happens is this: a buyer starts clicking through listings, sees a few homes they like, books a couple tours, and suddenly the whole search starts taking on a life of its own. Now they are looking at different areas, different price points, different home types, and trying to make sense of all of it at once.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact-rob"
              className="inline-block px-7 py-4 font-semibold text-base rounded-sm transition-opacity hover:opacity-90"
              style={{ background: GOLD, color: DEEP_CHARCOAL, fontFamily: "Outfit, sans-serif" }}
            >
              Download the Needs, Wants, and Dreams Worksheet
            </a>
            <Link
              href="/colorado-home-buying-workshop"
              className="inline-block px-7 py-4 font-semibold text-base rounded-sm border transition-opacity hover:opacity-90"
              style={{ borderColor: GOLD, color: GOLD, fontFamily: "Outfit, sans-serif" }}
            >
              Sign Up for the Colorado Home Buyers Workshop
            </Link>
          </div>
          <div className="mt-6">
            <Link
              href="/listing-results"
              className="text-base font-medium underline underline-offset-4 transition-opacity hover:opacity-80"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Search Homes
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. NEEDS / WANTS / DREAMS SECTION ──────────────────────── */}
      <section style={{ background: CREAM }} className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-8">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: GOLD }}>
            Start With Clarity
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-8"
            style={{ color: CHARCOAL, fontFamily: "Outfit, sans-serif" }}
          >
            What I like to do first is slow the whole thing down.
          </h2>
          <p className="text-lg mb-5" style={{ color: "#4a4540", lineHeight: 1.75 }}>
            That is usually where the overwhelm starts.
          </p>
          <p className="text-lg mb-5" style={{ color: "#4a4540", lineHeight: 1.75 }}>
            And once that happens, buyers usually do one of two things. They either get discouraged and stall out, or they start forcing decisions before they have really thought through whether the home, the area, and the payment actually make sense.
          </p>
          <p className="text-lg mb-5" style={{ color: "#4a4540", lineHeight: 1.75 }}>
            Neither one is a great place to be.
          </p>
          <p className="text-lg mb-5" style={{ color: "#4a4540", lineHeight: 1.75 }}>
            Before we worry about the next house that hits the market, I want to know what you are actually trying to solve for. What do you need the home to do for you? What do you want it to have? And if the right opportunity shows up, what do you dream it could have?
          </p>
          <p className="text-lg mb-5" style={{ color: "#4a4540", lineHeight: 1.75 }}>
            That is why I put together my Needs, Wants, and Dreams worksheet.
          </p>
          <p className="text-lg mb-10" style={{ color: "#4a4540", lineHeight: 1.75 }}>
            Because a lot of buyers do not need more listings right away. They need more clarity.
          </p>
          <p className="text-lg mb-10" style={{ color: "#4a4540", lineHeight: 1.75 }}>
            If you want a good place to start, download the Needs, Wants, and Dreams worksheet. It will help you sort out what matters most before the search starts running you instead of the other way around.
          </p>
          <a
            href="#contact-rob"
            className="inline-block px-7 py-4 font-semibold text-base rounded-sm transition-opacity hover:opacity-90"
            style={{ background: CHARCOAL, color: "#fff", fontFamily: "Outfit, sans-serif" }}
          >
            Download the Needs, Wants, and Dreams Worksheet
          </a>
        </div>
      </section>

      {/* ── 3. TARGET BEFORE SEARCH SECTION ────────────────────────── */}
      <section style={{ background: CHARCOAL }} className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-8">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: GOLD }}>
            Narrow the Target First
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-8"
            style={{ color: "#fff", fontFamily: "Outfit, sans-serif" }}
          >
            Another thing I see all the time is buyers getting pulled too hard in one direction.
          </h2>
          <p className="text-lg mb-5" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.75 }}>
            Sometimes it is price.
          </p>
          <p className="text-lg mb-5" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.75 }}>
            They get so focused on staying under a certain number that they are not really thinking about the commute, the layout, the location, the day-to-day convenience, or whether that house is actually going to work for how they live.
          </p>
          <p className="text-lg mb-5" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.75 }}>
            Other times it is the neighborhood.
          </p>
          <p className="text-lg mb-5" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.75 }}>
            They get locked in on one area they have heard about, one zip code, or one name, before they have really figured out whether that area fits their price point, the kind of home they want, or how they actually want to live.
          </p>
          <p className="text-lg mb-5" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.75 }}>
            Both of those mistakes can cost you.
          </p>
          <p className="text-lg mb-5" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.75 }}>
            A home that looks like a deal can still be the wrong move if it makes your everyday life harder. And a neighborhood that sounds exciting can still be the wrong fit if it pushes you into the wrong home, the wrong payment, or the wrong compromise.
          </p>
          <p className="text-lg mb-5" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.75 }}>
            That is why I like to narrow the target before the search gets too far down the road.
          </p>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.75 }}>
            Once we know the area, the home type, and the payment range that actually make sense, everything starts getting clearer. Homes get easier to rule in or rule out. Decisions get cleaner. The process gets less emotional. And you are much less likely to end up burned out, frustrated, or just plain tired of searching.
          </p>
        </div>
      </section>

      {/* ── 4. BURNOUT / PAYMENT COMFORT SECTION ───────────────────── */}
      <section style={{ background: CREAM }} className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-8">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: GOLD }}>
            Approval vs. Comfort
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-8"
            style={{ color: CHARCOAL, fontFamily: "Outfit, sans-serif" }}
          >
            That part matters more than people think.
          </h2>
          <p className="text-lg mb-5" style={{ color: "#4a4540", lineHeight: 1.75 }}>
            Buyer burnout is real.
          </p>
          <p className="text-lg mb-5" style={{ color: "#4a4540", lineHeight: 1.75 }}>
            It shows up when people have seen too much, compared too much, gone in too many directions, and are tired enough to start talking themselves into something just to be done.
          </p>
          <p className="text-lg mb-5" style={{ color: "#4a4540", lineHeight: 1.75 }}>
            That is a bad reason to buy a house.
          </p>
          <p className="text-lg mb-5" style={{ color: "#4a4540", lineHeight: 1.75 }}>
            One of the smartest things you can do early on is figure out two numbers: what you can get approved for, and what payment actually feels comfortable each month.
          </p>
          <p className="text-lg mb-5" style={{ color: "#4a4540", lineHeight: 1.75 }}>
            Those are not always the same number.
          </p>
          <p className="text-lg mb-5" style={{ color: "#4a4540", lineHeight: 1.75 }}>
            Your approval tells you what is possible. Your comfort zone tells you what is sustainable. One tells you the ceiling. The other tells you whether you are still going to feel good about the purchase after you move in and real life kicks back in.
          </p>
          <p className="text-lg" style={{ color: "#4a4540", lineHeight: 1.75 }}>
            I care a lot more about that second number than most people do.
          </p>
        </div>
      </section>

      {/* ── 5. HOME TYPE / PROTECTION SECTION ──────────────────────── */}
      <section style={{ background: CHARCOAL }} className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-8">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: GOLD }}>
            Property Type & Protection
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-8"
            style={{ color: "#fff", fontFamily: "Outfit, sans-serif" }}
          >
            I also want buyers thinking about the home type much earlier than they usually do.
          </h2>
          <p className="text-lg mb-5" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.75 }}>
            A condo, townhouse, single-family home, acreage property, raw land, horse property, or ranch are not just different price points. They come with different risks, different upkeep, different financing considerations, and different things that need to be addressed in the contract.
          </p>
          <p className="text-lg mb-5" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.75 }}>
            That is where experience matters.
          </p>
          <p className="text-lg mb-5" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.75 }}>
            You want an agent who knows how to recommend the right protections, who understands the property type, and who is not just unlocking doors and hoping you figure it out as you go.
          </p>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.75 }}>
            A lot of buyers do not know where to start, what questions to ask, or what to watch out for.
          </p>
        </div>
      </section>

      {/* ── 6. WORKSHOP / PROGRAMS SECTION ─────────────────────────── */}
      <section style={{ background: CREAM }} className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-8">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: GOLD }}>
            Colorado Home Buyers Workshop
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-8"
            style={{ color: CHARCOAL, fontFamily: "Outfit, sans-serif" }}
          >
            That is normal. It is also exactly why I host a Colorado Home Buyers Workshop every Tuesday.
          </h2>
          <p className="text-lg mb-5" style={{ color: "#4a4540", lineHeight: 1.75 }}>
            I walk buyers through the process from searching online to putting the keys in the door. I cover the common mistakes, the decisions that matter most, and the programs that may help buyers get there with a lot less money out of pocket than they thought.
          </p>
          <p className="text-lg mb-5" style={{ color: "#4a4540", lineHeight: 1.75 }}>
            That includes CHFA grants and loans, VA, Metro DPA, and other options that can make a real difference when someone thinks buying is still out of reach.
          </p>
          <p className="text-lg mb-5" style={{ color: "#4a4540", lineHeight: 1.75 }}>
            A lot of people are closer than they think.
          </p>
          <p className="text-lg mb-10" style={{ color: "#4a4540", lineHeight: 1.75 }}>
            They just have not had someone show them the full picture yet.
          </p>
          <p className="text-lg mb-10" style={{ color: "#4a4540", lineHeight: 1.75 }}>
            If you want a deeper walkthrough, sign up for the Colorado Home Buyers Workshop. It is built to help buyers understand the process, avoid common mistakes, and see options they may not realize they have.
          </p>
          <Link
            href="/colorado-home-buying-workshop"
            className="inline-block px-7 py-4 font-semibold text-base rounded-sm transition-opacity hover:opacity-90"
            style={{ background: CHARCOAL, color: "#fff", fontFamily: "Outfit, sans-serif" }}
          >
            Sign Up for the Colorado Home Buyers Workshop
          </Link>
        </div>
      </section>

      {/* ── 7. WHY THIS MATTERS / DECISION QUALITY SECTION ─────────── */}
      <section style={{ background: DEEP_CHARCOAL }} className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-8">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: GOLD }}>
            Decision Quality
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-8"
            style={{ color: "#fff", fontFamily: "Outfit, sans-serif" }}
          >
            Buying a home is not just about spotting a listing you like.
          </h2>
          <div className="mb-8 space-y-2">
            {[
              "Why it works.",
              "Why it fits.",
              "Why the payment makes sense.",
              "Why the location works for your life.",
              "Why the contract protects you.",
              "And why the decision will still feel right after the excitement wears off.",
            ].map((line) => (
              <p
                key={line}
                className="text-lg font-medium"
                style={{ color: "rgba(255,255,255,0.9)", lineHeight: 1.75 }}
              >
                {line}
              </p>
            ))}
          </div>
          <p className="text-lg mb-5" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.75 }}>
            That is a big part of my job.
          </p>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.75 }}>
            One of my main jobs is coordinating the process from start to finish and helping make it feel a lot less overwhelming. I want buyers to feel informed, protected, and clear on what they are doing instead of reacting to listings, second-guessing themselves, and hoping they are making the right move.
          </p>
        </div>
      </section>

      {/* ── 8. FINAL ACTION SECTION ─────────────────────────────────── */}
      <section style={{ background: CREAM }} className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-8">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: GOLD }}>
            Start Where You Are
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-8"
            style={{ color: CHARCOAL, fontFamily: "Outfit, sans-serif" }}
          >
            So if you want a place to start, download the worksheet.
          </h2>
          <p className="text-lg mb-5" style={{ color: "#4a4540", lineHeight: 1.75 }}>
            If you want the full walkthrough, sign up for the workshop.
          </p>
          <p className="text-lg mb-5" style={{ color: "#4a4540", lineHeight: 1.75 }}>
            If you want to start looking, search homes right here on the site.
          </p>
          <p className="text-lg mb-10" style={{ color: "#4a4540", lineHeight: 1.75 }}>
            And if you want help narrowing down the right area, home type, and payment range before you start touring, call, text, or book a time with me.
          </p>
          <p className="text-lg mb-10 font-medium" style={{ color: CHARCOAL, lineHeight: 1.75 }}>
            That is usually where things start getting a whole lot clearer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
            <a
              href="#contact-rob"
              className="inline-block px-7 py-4 font-semibold text-base rounded-sm transition-opacity hover:opacity-90"
              style={{ background: CHARCOAL, color: "#fff", fontFamily: "Outfit, sans-serif" }}
            >
              Download the Worksheet
            </a>
            <Link
              href="/colorado-home-buying-workshop"
              className="inline-block px-7 py-4 font-semibold text-base rounded-sm border transition-opacity hover:opacity-90"
              style={{ borderColor: CHARCOAL, color: CHARCOAL, fontFamily: "Outfit, sans-serif" }}
            >
              Sign Up for the Workshop
            </Link>
            <Link
              href="/listing-results"
              className="inline-block px-7 py-4 font-semibold text-base rounded-sm border transition-opacity hover:opacity-90"
              style={{ borderColor: CHARCOAL, color: CHARCOAL, fontFamily: "Outfit, sans-serif" }}
            >
              Search Homes
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ─────────────────────────────────────────────── */}
      {/* LeadForm removed: SSR-unsafe (trpc hook triggers getServerSnapshot failure). */}
      {/* Replaced with prerender-safe static CTA block. LeadForm can be re-added client-side in a later pass. */}
      <section id="contact-rob" style={{ background: DEEP_CHARCOAL }} className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-8">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: GOLD }}>
            Get in Touch
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-6"
            style={{ color: "#fff", fontFamily: "Outfit, sans-serif" }}
          >
            Ready to start your Colorado home search?
          </h2>
          <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.75 }}>
            Call, text, or send a message. I will help you slow things down, get clear, and make a smarter decision from the start.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
            <a
              href="https://myrockhomes.com/contact"
              className="inline-block px-7 py-4 font-semibold text-base rounded-sm transition-opacity hover:opacity-90"
              style={{ background: GOLD, color: DEEP_CHARCOAL, fontFamily: "Outfit, sans-serif" }}
            >
              Download the Needs, Wants, and Dreams Worksheet
            </a>
            <a
              href="/colorado-home-buying-workshop"
              className="inline-block px-7 py-4 font-semibold text-base rounded-sm border transition-opacity hover:opacity-90"
              style={{ borderColor: GOLD, color: GOLD, fontFamily: "Outfit, sans-serif" }}
            >
              Sign Up for the Workshop
            </a>
            <a
              href="/listing-results"
              className="inline-block px-7 py-4 font-semibold text-base rounded-sm border transition-opacity hover:opacity-90"
              style={{ borderColor: "rgba(255,255,255,0.4)", color: "rgba(255,255,255,0.7)", fontFamily: "Outfit, sans-serif" }}
            >
              Search Homes
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
