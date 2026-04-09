/**
 * Seller Flagship Page — /selling-a-home-in-colorado
 * Source copy: seller_flagship.txt (locked approved draft)
 * Pattern: mirrors BuyingAHomeColorado.tsx implementation standard
 * Tone: practical, protective, grounded, plainspoken, strategic
 */

import { useEffect } from "react";
import SeoHead from "@/components/seo/SeoHead";
import Navbar from "@/components/Navbar";

const CHARCOAL = "#292524";
const DEEP_CHARCOAL = "#1a1714";
const CREAM = "#F5F0EB";
const GOLD = "#C9A96E";

const faqItems = [
  {
    question: "How do I know if my home is priced correctly in Colorado?",
    answer:
      "Pricing correctly means understanding what comparable homes actually did — not just what they listed for. That includes whether they reduced, how long they sat, what concessions they offered, and how your home compares on condition and presentation. A pricing and positioning review looks at all of that before you go live.",
  },
  {
    question: "What are seller concessions and should I offer them?",
    answer:
      "Seller concessions are contributions toward a buyer's closing costs or rate buydown. In many Colorado markets, the majority of homes close with some form of concession. Offering them strategically can help buyers who are payment-sensitive say yes without forcing a larger headline price cut. Whether to offer them — and how much — depends on your specific market, price range, and competition.",
  },
  {
    question: "How important is the first launch window when selling a home?",
    answer:
      "The first launch window is your strongest attention window. When a home first hits the market, active buyers are paying close attention. If the pricing, presentation, or overall deal does not feel right, you do not just lose time — you often lose momentum that is hard to recover. Getting the front-end strategy right before you go live matters more than adjusting after the fact.",
  },
  {
    question: "Do I need to make repairs or updates before listing my Colorado home?",
    answer:
      "Not always. What matters is that your home is positioned correctly for its condition. Some sellers benefit from targeted preparation. Others are better off pricing to condition and letting buyers decide. The right answer depends on your timeline, budget, and what comparable homes in your area are doing. That is part of what a positioning review helps clarify.",
  },
  {
    question: "What is the difference between pricing a home and positioning a home?",
    answer:
      "Pricing is the number. Positioning is everything that makes a buyer choose your home over the competition — condition, presentation, photos, concessions, timing, and how the overall deal feels to a buyer who is comparing multiple options. A home can be priced right and still sit if the positioning is off.",
  },
  {
    question: "How long does it take to sell a home in Colorado?",
    answer:
      "It depends on the market, price range, and how well the home is positioned. In some segments homes move in days. In others, the average days on market can stretch to 60, 80, or more. Understanding what is actually happening in your specific segment — not just general headlines — is what drives a realistic timeline.",
  },
];

const faqSchema = {
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Selling Your Home in Colorado", url: "/selling-a-home-in-colorado" },
];

export default function SellingAHomeColorado() {
  useEffect(() => {
    document.title = "Selling Your Home in Colorado | My Rock Realty";
  }, []);

  return (
    <>
      <SeoHead
        metadata={{
          title: "Selling Your Home in Colorado | My Rock Realty",
          description:
            "Pricing alone is not a complete strategy. My Rock Realty helps Colorado sellers understand positioning, concessions, and what actually gets a home sold.",
          canonicalUrl: "https://myrockhomes.com/selling-a-home-in-colorado/",
          breadcrumbs: breadcrumbItems,
        }}
        schema={[faqSchema]}
      />

      <Navbar compact />

      {/* ── 1. HERO SECTION ─────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative bg-charcoal overflow-hidden pt-[72px] pb-20 sm:pb-28"
        style={{ background: CHARCOAL }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ background: "rgba(26,23,20,0.72)" }} />
        {/* Content container */}
        <div className="relative max-w-3xl mx-auto px-8">
          {/* Gold accent bar */}
          <div style={{ width: 48, height: 3, background: GOLD }} className="mb-6" />
          <h1
            className="text-4xl sm:text-5xl md:text-[3.25rem] font-bold leading-tight mb-8"
            style={{ color: "#fff", fontFamily: "Outfit, sans-serif" }}
          >
            Selling Your Home in Colorado: Pricing, Concessions, and What Actually Gets It Sold
          </h1>
          <p className="text-lg sm:text-xl mb-5" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.75 }}>
            A lot of sellers think the biggest decision is where to price the home.
          </p>
          <p className="text-lg sm:text-xl mb-5" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.75 }}>
            That matters. It just is not the whole strategy.
          </p>
          <p className="text-lg sm:text-xl mb-10" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.75 }}>
            What usually happens is this: a seller looks at a few nearby sales, gets a number in mind, and starts thinking the hard part is done. That is where a lot of listings start going sideways.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://myrockhomes.com/contact"
              className="inline-block px-7 py-4 font-semibold text-base rounded-sm transition-opacity hover:opacity-90"
              style={{ background: GOLD, color: DEEP_CHARCOAL, fontFamily: "Outfit, sans-serif" }}
            >
              Request a Pricing and Positioning Review
            </a>
            <a
              href="https://myrockhomes.com/contact"
              className="inline-block px-7 py-4 font-semibold text-base rounded-sm border transition-opacity hover:opacity-90"
              style={{ borderColor: GOLD, color: GOLD, fontFamily: "Outfit, sans-serif" }}
            >
              Book a Time With Rob
            </a>
          </div>
          <div className="mt-6">
            <a
              href="/flexible-listing-plans"
              className="text-base font-medium underline underline-offset-4 transition-opacity hover:opacity-80"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              See Flexible Listing Plans
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. PRICE IS NOT THE WHOLE STRATEGY SECTION ─────────────── */}
      <section style={{ background: CREAM }} className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-8">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: GOLD }}>
            The Full Picture
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-8"
            style={{ color: CHARCOAL, fontFamily: "Outfit, sans-serif" }}
          >
            Buyers are not reacting to price alone.
          </h2>
          <p className="text-lg mb-5" style={{ color: "#4a4540", lineHeight: 1.75 }}>
            They are reacting to the full picture.
          </p>
          <p className="text-lg mb-5" style={{ color: "#4a4540", lineHeight: 1.75 }}>
            They are reacting to price, condition, presentation, photos, timing, concessions, interest rates, and how much money they are going to need to close. They are reacting to whether the payment still works. They are reacting to whether your home feels like the better choice compared to the other homes they saw that week.
          </p>
          <p className="text-lg mb-5" style={{ color: "#4a4540", lineHeight: 1.75 }}>
            If that full picture is off, even a good home can sit longer than it should.
          </p>
          <p className="text-lg mb-5" style={{ color: "#4a4540", lineHeight: 1.75 }}>
            And once a listing starts sitting, sellers usually start feeling pressure.
          </p>
          <p className="text-lg mb-5" style={{ color: "#4a4540", lineHeight: 1.75 }}>
            Real pressure.
          </p>
          <p className="text-lg" style={{ color: "#4a4540", lineHeight: 1.75 }}>
            Now they are wondering if they missed the window. If buyers are seeing something they are not. If the price was too high. If they should cut it. If every extra week is costing them leverage, money, or both.
          </p>
        </div>
      </section>

      {/* ── 3. PRESSURE / MOMENTUM / LAUNCH WINDOW SECTION ─────────── */}
      <section style={{ background: CHARCOAL }} className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-8">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: GOLD }}>
            Momentum and Pressure
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-8"
            style={{ color: "#fff", fontFamily: "Outfit, sans-serif" }}
          >
            That part gets heavy fast.
          </h2>
          <p className="text-lg mb-5" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.75 }}>
            What I would rather do is slow that down before the home ever hits the market.
          </p>
          <p className="text-lg mb-5" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.75 }}>
            Before we worry about just picking a number, I want to know what kind of home we are selling, who the most likely buyer is, what that buyer is going to compare it against, and what is most likely to make your home feel like the better choice.
          </p>
          <p className="text-lg mb-5" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.75 }}>
            That is where good strategy starts.
          </p>
          <p className="text-lg mb-5" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.75 }}>
            Because getting a home sold is not just about pricing it. It is about positioning it.
          </p>
          <div className="mb-5 space-y-2">
            {[
              "Some homes need stronger presentation.",
              "Some need better preparation.",
              "Some need sharper pricing.",
              "Some need concessions built into the strategy.",
              "And some need all of those working together.",
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
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.75 }}>
            That is why I look at more than just the list price. I want to know what comparable homes actually did, not just what they were listed for. Did they reduce? Did they sit? Did they offer concessions? How long did they take to move? What looked good on paper but still did not get the job done?
          </p>
        </div>
      </section>

      {/* ── 4. POSITIONING BEFORE PRICE SECTION ────────────────────── */}
      <section style={{ background: CREAM }} className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-8">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: GOLD }}>
            Positioning Before Price
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-8"
            style={{ color: CHARCOAL, fontFamily: "Outfit, sans-serif" }}
          >
            That matters.
          </h2>
          <p className="text-lg mb-5" style={{ color: "#4a4540", lineHeight: 1.75 }}>
            And this is exactly where concessions can make a big difference.
          </p>
          <p className="text-lg mb-5" style={{ color: "#4a4540", lineHeight: 1.75 }}>
            Sometimes buyers are not stuck on the purchase price as much as they are stuck on how much cash they need to close or how high the payment feels at today's rates. A concession can help with closing costs, and in some cases a rate buydown, without forcing a bigger headline price cut.
          </p>
          <p className="text-lg" style={{ color: "#4a4540", lineHeight: 1.75 }}>
            That is not theory. It is real strategy.
          </p>
        </div>
      </section>

      {/* ── 5. CONCESSIONS STRATEGY SECTION ────────────────────────── */}
      <section style={{ background: CHARCOAL }} className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-8">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: GOLD }}>
            Concessions Strategy
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-8"
            style={{ color: "#fff", fontFamily: "Outfit, sans-serif" }}
          >
            Not long ago, I helped a seller who needed to get their home sold.
          </h2>
          <p className="text-lg mb-5" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.75 }}>
            I studied 93 comparable sales and found that more than 80% of them closed with an average concession of about $11,000. Out of those 93 homes, 27 had price reductions, and the average days on market was 78.
          </p>
          <p className="text-lg mb-5" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.75 }}>
            We took a different approach.
          </p>
          <p className="text-lg mb-5" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.75 }}>
            We priced the home correctly, marketed it well, and offered $10,000 in concessions as part of the strategy. The result was 3 offers, we were under contract the first weekend, and the home closed in 37 days.
          </p>
          <p className="text-lg mb-5" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.75 }}>
            That is why price alone is not enough.
          </p>
          <p className="text-lg mb-5" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.75 }}>
            Sometimes a concession is not a weakness. Sometimes it is what helps the right buyer say yes without forcing a bigger price cut later.
          </p>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.75 }}>
            Sometimes the smartest move is not chasing the highest list price. Sometimes it is creating the strongest overall offer environment. That is a big difference.
          </p>
        </div>
      </section>

      {/* ── 6. FIRST LAUNCH WINDOW / FRONT-END STRATEGY SECTION ─────── */}
      <section style={{ background: CREAM }} className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-8">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: GOLD }}>
            First Launch Window
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-8"
            style={{ color: CHARCOAL, fontFamily: "Outfit, sans-serif" }}
          >
            I also want sellers to understand that the first launch window matters.
          </h2>
          <p className="text-lg mb-5" style={{ color: "#4a4540", lineHeight: 1.75 }}>
            When a home first hits the market, buyers are paying attention.
          </p>
          <p className="text-lg mb-5" style={{ color: "#4a4540", lineHeight: 1.75 }}>
            That is your best attention window.
          </p>
          <p className="text-lg mb-5" style={{ color: "#4a4540", lineHeight: 1.75 }}>
            If the pricing is off, the photos are weak, the presentation is flat, or the overall deal does not feel workable, you do not just lose time. You often lose your strongest shot at momentum.
          </p>
          <p className="text-lg mb-5" style={{ color: "#4a4540", lineHeight: 1.75 }}>
            And once a listing starts chasing the market, it usually gets harder, not easier, to recover.
          </p>
          <p className="text-lg" style={{ color: "#4a4540", lineHeight: 1.75 }}>
            That is why front-end strategy matters so much.
          </p>
        </div>
      </section>

      {/* ── 7. PROPERTY TYPE / EXPERIENCE SECTION ──────────────────── */}
      <section style={{ background: DEEP_CHARCOAL }} className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-8">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: GOLD }}>
            Property Type and Experience
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-8"
            style={{ color: "#fff", fontFamily: "Outfit, sans-serif" }}
          >
            A condo is not marketed the same way as a single-family home.
          </h2>
          <div className="mb-8 space-y-2">
            {[
              "A condo is not marketed the same way as a single-family home.",
              "A townhouse is not positioned the same way as acreage.",
              "A horse property is not the same as an in-town move-up home.",
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
            Different property types bring different buyer concerns, different comparison sets, and different ways of building confidence in the sale.
          </p>
          <p className="text-lg mb-5" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.75 }}>
            That is where experience matters.
          </p>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.75 }}>
            You want an agent who understands what buyers are likely to question, where a deal can get shaky, and how to structure the listing, the presentation, and the contract terms in a way that gives the sale the best chance to come together cleanly.
          </p>
        </div>
      </section>

      {/* ── 8. FINAL ACTION SECTION ─────────────────────────────────── */}
      <section style={{ background: CREAM }} className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-8">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: GOLD }}>
            Start Here
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-8"
            style={{ color: CHARCOAL, fontFamily: "Outfit, sans-serif" }}
          >
            If you want a good place to start, request a pricing and positioning review.
          </h2>
          <p className="text-lg mb-5" style={{ color: "#4a4540", lineHeight: 1.75 }}>
            That is where we can look at what your home is likely to compete against, what buyers are likely to react to, and whether concessions should be part of the strategy.
          </p>
          <p className="text-lg mb-5" style={{ color: "#4a4540", lineHeight: 1.75 }}>
            One of my main jobs is coordinating the process from start to finish and helping make it feel a lot less overwhelming. I want sellers to feel informed, prepared, and clear on what we are doing instead of guessing, reacting, and hoping the market does the work for us.
          </p>
          <p className="text-lg mb-5" style={{ color: "#4a4540", lineHeight: 1.75 }}>
            If you want to talk through your home, your likely buyer, and the strategy before you hit the market, book a time with me.
          </p>
          <p className="text-lg mb-10" style={{ color: "#4a4540", lineHeight: 1.75 }}>
            If you want a real plan before your home goes live, call, text, or book a time with me.
          </p>
          <p className="text-lg mb-10 font-medium" style={{ color: CHARCOAL, lineHeight: 1.75 }}>
            That is usually where things start getting a whole lot clearer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
            <a
              href="https://myrockhomes.com/contact"
              className="inline-block px-7 py-4 font-semibold text-base rounded-sm transition-opacity hover:opacity-90"
              style={{ background: CHARCOAL, color: "#fff", fontFamily: "Outfit, sans-serif" }}
            >
              Request a Pricing and Positioning Review
            </a>
            <a
              href="https://myrockhomes.com/contact"
              className="inline-block px-7 py-4 font-semibold text-base rounded-sm border transition-opacity hover:opacity-90"
              style={{ borderColor: CHARCOAL, color: CHARCOAL, fontFamily: "Outfit, sans-serif" }}
            >
              Book a Time With Rob
            </a>
            <a
              href="/flexible-listing-plans"
              className="inline-block px-7 py-4 font-semibold text-base rounded-sm border transition-opacity hover:opacity-90"
              style={{ borderColor: CHARCOAL, color: CHARCOAL, fontFamily: "Outfit, sans-serif" }}
            >
              See Flexible Listing Plans
            </a>
          </div>
        </div>
      </section>

      {/* ── 9. FAQ SECTION ──────────────────────────────────────────── */}
      <section id="faq" style={{ background: CHARCOAL }} className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-8">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: GOLD }}>
            Common Questions
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-12"
            style={{ color: "#fff", fontFamily: "Outfit, sans-serif" }}
          >
            Seller FAQ
          </h2>
          <div className="space-y-10">
            {faqItems.map((item) => (
              <div key={item.question}>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: GOLD, fontFamily: "Outfit, sans-serif" }}
                >
                  {item.question}
                </h3>
                <p className="text-lg" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.75 }}>
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ─────────────────────────────────────────────── */}
      {/* LeadForm not added: SSR-unsafe. Static CTA block used instead. */}
      <section style={{ background: DEEP_CHARCOAL }} className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-8">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: GOLD }}>
            Get in Touch
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-6"
            style={{ color: "#fff", fontFamily: "Outfit, sans-serif" }}
          >
            Ready to talk through your home sale?
          </h2>
          <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.75 }}>
            Call, text, or send a message. I will help you understand the full picture, build a real strategy, and get your home sold without the guesswork.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
            <a
              href="https://myrockhomes.com/contact"
              className="inline-block px-7 py-4 font-semibold text-base rounded-sm transition-opacity hover:opacity-90"
              style={{ background: GOLD, color: DEEP_CHARCOAL, fontFamily: "Outfit, sans-serif" }}
            >
              Request a Pricing and Positioning Review
            </a>
            <a
              href="https://myrockhomes.com/contact"
              className="inline-block px-7 py-4 font-semibold text-base rounded-sm border transition-opacity hover:opacity-90"
              style={{ borderColor: GOLD, color: GOLD, fontFamily: "Outfit, sans-serif" }}
            >
              Book a Time With Rob
            </a>
            <a
              href="/flexible-listing-plans"
              className="inline-block px-7 py-4 font-semibold text-base rounded-sm border transition-opacity hover:opacity-90"
              style={{ borderColor: "rgba(255,255,255,0.4)", color: "rgba(255,255,255,0.7)", fontFamily: "Outfit, sans-serif" }}
            >
              See Flexible Listing Plans
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
