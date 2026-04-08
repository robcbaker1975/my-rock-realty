/**
 * Fort Collins Hub — My Rock Realty
 * Route: /fort-collins-co-homes-for-sale
 * Content: fort_collins_cluster_package_v1 / approved_fort_collins_hub.md
 * Design: Front Range Modern — matches existing site design system
 * Palette: Warm charcoal (#292524), cream (#F5F0EB), antique gold (#C9A96E)
 * Typography: Outfit (display) + Libre Franklin (body)
 */
import { useState } from "react";
import SeoHead from "@/components/seo/SeoHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const HERO_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/denver-rowhouses-hero_2f59d4ac.jpg";

const faqContent = [
  {
    question: "Why do buyers keep Fort Collins in the search once they start driving it?",
    answer:
      "Because Fort Collins usually feels more real in person than it does online. Buyers start noticing the older center, the main corridors, the CSU background influence, and the fact that the city has more internal range than some nearby alternatives.",
  },
  {
    question: "What kind of buyer usually chooses Fort Collins?",
    answer:
      "Usually someone who wants a city with more identity, more internal variation, and a stronger sense of place than a simpler nearby path offers.",
  },
  {
    question: "What kind of buyer usually moves on from Fort Collins?",
    answer:
      "Usually someone who wants a tighter lane, a newer-growth path, a smaller-town feel, or a different city fit.",
  },
  {
    question: "Is Fort Collins mostly a college-town decision?",
    answer:
      "Usually no. CSU shapes part of the city's feel, but Fort Collins usually reads as a broader city decision than that.",
  },
  {
    question: "When does Windsor make more sense than Fort Collins?",
    answer:
      "When the buyer wants the broader area, but a town-based path feels cleaner and easier to commit to.",
  },
  {
    question: "When does Timnath make more sense than Fort Collins?",
    answer:
      "When newer-growth simplicity matters more than city range or established feel.",
  },
  {
    question: "When does Loveland make more sense than Fort Collins?",
    answer:
      "When the real choice is between two city identities and Fort Collins no longer feels like the clearest fit.",
  },
  {
    question: "When does Wellington make more sense than Fort Collins?",
    answer:
      "When a smaller-town direction sounds better than a broader city search.",
  },
  {
    question: "Should I narrow down neighborhoods inside Fort Collins before deciding on Fort Collins itself?",
    answer:
      "Usually no. The cleaner move is to decide on the city first, then narrow down inside it.",
  },
  {
    question: "Is this page trying to say Fort Collins is better than the nearby options?",
    answer:
      "No. It is here to help you figure out whether Fort Collins fits you better.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Fort Collins", url: "/fort-collins-co-homes-for-sale" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FortCollinsCoHomesForSale() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  return (
    <div className="hub-page min-h-screen flex flex-col bg-cream">
      <SeoHead
        metadata={{
          title:
            "Fort Collins CO Homes for Sale | Real Estate & Living Guide",
          description:
            "Explore Fort Collins CO homes for sale and compare Fort Collins with Windsor, Timnath, Loveland, and Wellington before narrowing your move.",
          canonicalUrl:
            "https://myrockhomes.com/fort-collins-co-homes-for-sale/",
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
      {/* 1. HERO */}
      <section className="relative bg-charcoal overflow-hidden">
        <img
          src={HERO_BG}
          alt="Fort Collins, Colorado real estate"
          className="absolute inset-0 w-full h-full object-cover object-center"
          width="1600"
          height="900"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/90" />
        <div className="container relative z-10 py-16 sm:py-20 md:py-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-2xl"
          >
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-cream mb-6 leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Fort Collins CO Homes for Sale
            </h1>
          </motion.div>
        </div>
      </section>
      {/* 2. Intro */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              Fort Collins comes up early for a lot of buyers, but staying on the list and actually fitting are not always the same thing. This page is here to help with that part. You can use it to narrow Fort Collins more clearly, understand where the tradeoffs tend to show up, and compare it with nearby options like Windsor, Timnath, Loveland, and Wellington before the search gets too broad.
            </p>
          </motion.div>
        </div>
      </section>
      {/* 3. What Fort Collins feels like */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2
              className="text-3xl sm:text-4xl font-bold text-cream mb-8"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              What Fort Collins feels like
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Fort Collins usually feels more like a real city than buyers expect from Northern Colorado.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              There is an older center, a main street corridor, a university presence that shapes the energy without dominating it, and enough internal variety that the search can go in more than one direction.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              It does not feel like a suburb that grew up. It feels like a city that has been there for a while.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              That is part of what keeps buyers here once they start driving it.
            </p>
            <p className="text-lg text-cream/80 leading-relaxed">
              The tradeoffs are real too. Fort Collins is not the cheapest path in Northern Colorado. It is not the simplest. And it is not the right fit for every buyer.
            </p>
          </motion.div>
        </div>
      </section>
      {/* 4. Why Fort Collins stays in the conversation */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2
              className="text-3xl sm:text-4xl font-bold text-charcoal mb-8"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Why Fort Collins stays in the conversation
            </h2>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              Fort Collins usually stays in the conversation because it gives buyers more internal range than the nearby alternatives.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              The search does not have to commit to one lane early. Old Town, Midtown, the Harmony corridor, and the surrounding areas all offer different versions of Fort Collins life.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              That flexibility matters for buyers who are not yet sure which version of Northern Colorado they want.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              It also matters for buyers who already know they want a city with more identity and more of a lived-in feel.
            </p>
          </motion.div>
        </div>
      </section>
      {/* 5. Who Fort Collins tends to fit */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2
              className="text-3xl sm:text-4xl font-bold text-cream mb-8"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Who Fort Collins tends to fit
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Fort Collins tends to fit buyers who want:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "a city with more identity and internal range",
                "more than one way for the search to work",
                "an established feel without going all the way to Denver",
                "a university-adjacent energy that stays in the background",
                "outdoor access without giving up city character",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-cream/80">
                  <ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-cream/80 leading-relaxed">
              It can also fit buyers who want a Northern Colorado base that does not feel like a compromise.
            </p>
          </motion.div>
        </div>
      </section>
      {/* 6. Who may not love Fort Collins */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2
              className="text-3xl sm:text-4xl font-bold text-charcoal mb-8"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Who may not love Fort Collins
            </h2>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              Fort Collins may not be the best fit if you want:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "a simpler, newer-growth path",
                "a smaller-town feel with less city complexity",
                "a lower price point without giving up the region",
                "a search that narrows faster and commits earlier",
                "a place where the city itself matters less than the house",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-charcoal/80">
                  <ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              A lot of buyers do not move off Fort Collins because it is wrong. They move off it because they realize they want something narrower, simpler, or more specific.
            </p>
          </motion.div>
        </div>
      </section>
      {/* 7. What the home search usually turns into */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2
              className="text-3xl sm:text-4xl font-bold text-cream mb-8"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              What the home search usually turns into
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              A search in Fort Collins usually becomes less about Northern Colorado in general and more about which version of Northern Colorado actually fits.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              At first, buyers often keep Fort Collins, Windsor, Timnath, Loveland, and Wellington all open at the same time.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Then the search starts dividing itself.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Do you want a city that feels more established? Do you want a simpler town-based path? Do you want newer growth? Do you want something smaller?
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              For some buyers, Fort Collins gets stronger as those questions get answered.
            </p>
            <p className="text-lg text-cream/80 leading-relaxed">
              For others, this page helps them realize they belong in a different branch of the search entirely.
            </p>
          </motion.div>
        </div>
      </section>
      {/* 8. The tradeoffs */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2
              className="text-3xl sm:text-4xl font-bold text-charcoal mb-8"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              The tradeoffs are the whole point
            </h2>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              Fort Collins costs more than Wellington. It is more complex than Timnath. It has more city character than Windsor.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              Those are not problems. They are the tradeoffs.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              The question is whether those tradeoffs work in your direction.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              If the city identity, the internal range, and the established feel are worth what Fort Collins asks for them, it usually makes sense. If they are not, the nearby alternatives usually make more sense.
            </p>
          </motion.div>
        </div>
      </section>
      {/* 9. Fort Collins vs nearby alternatives */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2
              className="text-3xl sm:text-4xl font-bold text-cream mb-8"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Fort Collins vs nearby alternatives
            </h2>
            <div className="space-y-8">
              {[
                {
                  heading: "Fort Collins vs Windsor",
                  body: "Fort Collins usually makes more sense when the buyer wants a more established city feel and more than one way for the search to work. Windsor usually starts making more sense when a town-based path feels cleaner and easier to commit to.",
                },
                {
                  heading: "Fort Collins vs Timnath",
                  body: "Fort Collins usually makes more sense when the buyer wants a more established city feel and more than one way for the search to work. Timnath usually starts making more sense when newer-growth simplicity is the main draw.",
                },
                {
                  heading: "Fort Collins vs Loveland",
                  body: "If Fort Collins stays ahead, it is usually because the buyer wants its specific mix of city feel, central identity, and internal range. If Loveland starts winning, it is usually because Fort Collins no longer feels like the clearest fit.",
                },
                {
                  heading: "Fort Collins vs Wellington",
                  body: "Fort Collins usually makes more sense when the buyer wants a broader city search and more internal layers. Wellington usually gets stronger when a smaller-town direction sounds better and giving up some city range feels worth it.",
                },
              ].map(({ heading, body }, idx) => (
                <div key={idx}>
                  <h3
                    className="text-xl font-bold text-gold mb-3"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {heading}
                  </h3>
                  <p className="text-lg text-cream/80 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      {/* 10. What people tend to underestimate */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2
              className="text-3xl sm:text-4xl font-bold text-charcoal mb-8"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              What people tend to underestimate
            </h2>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              People often underestimate that Fort Collins is not really a hype decision.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              It is a fit decision.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              Some buyers underestimate how much they will value a city with more identity and more internal variety. Others underestimate how quickly they will realize they want something narrower, newer, or simpler.
            </p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">
              They also underestimate how different the nearby options actually are.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              Windsor, Timnath, Loveland, and Wellington are not just nearby names. They are usually the next honest branches in the search.
            </p>
          </motion.div>
        </div>
      </section>
      {/* 11. Buy now or rent first */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2
              className="text-3xl sm:text-4xl font-bold text-cream mb-8"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Buy now or rent first
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              This usually comes down to whether you have answered the city-fit question yet.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              If you already know Fort Collins is where you want the search to stay, buying can make sense once the right house and numbers line up.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              If you still are not sure whether you want Fort Collins or one of the nearby alternatives, renting first can make a lot of sense.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Not because renting is automatically smarter.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Because clarity is.
            </p>
            <p className="text-lg text-cream/80 leading-relaxed">
              A short rent-first period can help when the real issue is not whether you want Northern Colorado. It is whether you want <strong>Fort Collins specifically</strong>.
            </p>
          </motion.div>
        </div>
      </section>
      {/* 11b. EXPLORE FORT COLLINS AREA */}
      <section className="py-16 sm:py-20 bg-cream/50">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2
              className="text-3xl sm:text-4xl font-bold text-charcoal mb-8"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Explore Fort Collins & Nearby Areas
            </h2>
            <p className="text-lg text-charcoal/80 mb-8 leading-relaxed">
              If Fort Collins feels right, these pages dive deeper into specific neighborhoods and nearby communities.
            </p>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {[
                { label: "Old Town Fort Collins", href: "/old-town-fort-collins-real-estate" },
                { label: "Midtown Fort Collins", href: "/midtown-fort-collins-real-estate" },
                { label: "Harmony, CO", href: "/harmony-fort-collins-real-estate" },
                { label: "Windsor, CO", href: "/windsor-co-real-estate" },
                { label: "Timnath, CO", href: "/timnath-co-real-estate" },
                { label: "Loveland, CO", href: "/loveland-co-homes-for-sale" },
              ].map((n) => (
                <div key={n.href} className="flex items-center gap-2">
                  <ArrowRight size={16} className="text-gold shrink-0" />
                  <a
                    href={n.href}
                    className="text-gold font-medium hover:underline text-base"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {n.label}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      {/* 12. FAQ */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2
              className="text-3xl sm:text-4xl font-bold text-charcoal mb-10"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              FAQ
            </h2>
          </motion.div>
          <div className="space-y-2">
            {faqContent.map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                className="bg-white rounded-lg border border-charcoal/10"
              >
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === idx ? null : idx)
                  }
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                >
                  <h3
                    className="text-base font-semibold text-charcoal leading-snug"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {item.question}
                  </h3>
                  <ChevronDown
                    size={20}
                    className={`text-gold flex-shrink-0 transition-transform ${
                      expandedFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 pb-6 border-t border-charcoal/10 text-charcoal/80 leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* 13. Final thoughts */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2
              className="text-3xl sm:text-4xl font-bold text-cream mb-8"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Final thoughts
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Fort Collins usually stays strong for buyers who want the city itself to matter.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Not just the house.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              Not just the price point.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              The city.
            </p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">
              If you want a place with more identity, more range, and more of a lived-in feel once the move gets real, Fort Collins deserves a serious look.
            </p>
            <p className="text-lg text-cream/80 leading-relaxed">
              If that does not sound like what you want, that is useful too. It usually means the right next step is not to force Fort Collins to fit. It is to compare it honestly against the nearby paths buyers usually weigh next.
            </p>
          </motion.div>
        </div>
      </section>
      {/* 14. Endcap */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2
              className="text-2xl font-bold text-charcoal mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Still trying to sort out Fort Collins, Windsor, Timnath, Loveland, and Wellington?
            </h2>
            <p className="text-lg text-charcoal/80 mb-8 leading-relaxed">
              That is usually where the search gets more useful. A lot of buyers start with the house first. Most of the time, what helps more is getting clear on which place fits the way you want everyday life to work before you get too far into listings.
            </p>
            <div className="space-y-3 mb-10">
              {[
                {
                  label: "Talk to Rob About Fort Collins vs the Nearby Options →",
                  href: "/#contact",
                },
                {
                  label: "Start Narrowing Fort Collins Against the Other Paths →",
                  href: "/#contact",
                },
              ].map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="flex items-center gap-2 text-gold hover:text-gold/80 transition-colors font-semibold text-lg"
                >
                  <ArrowRight size={16} />
                  {link.label}
                </a>
              ))}
            </div>
            <h2
              className="text-2xl font-bold text-charcoal mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Compare nearby
            </h2>
            <div className="space-y-3 mb-10">
              {[
                { label: "Windsor →", href: "/windsor-co-real-estate" },
                { label: "Timnath →", href: "/timnath-co-real-estate" },
                { label: "Loveland →", href: "/loveland-co-real-estate" },
                { label: "Wellington →", href: "/wellington-co-real-estate" },
              ].map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="flex items-center gap-2 text-gold hover:text-gold/80 transition-colors font-semibold text-lg"
                >
                  <ArrowRight size={16} />
                  {link.label}
                </a>
              ))}
            </div>
            <h2
              className="text-2xl font-bold text-charcoal mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Keep exploring
            </h2>
            <div className="space-y-3">
              {[
                {
                  label: "Old Town Fort Collins →",
                  href: "/old-town-fort-collins-real-estate",
                },
                {
                  label: "Loveland →",
                  href: "/loveland-co-homes-for-sale",
                },
                {
                  label: "Midtown Fort Collins →",
                  href: "/midtown-fort-collins-real-estate",
                },
                {
                  label: "Harmony Fort Collins →",
                  href: "/harmony-fort-collins-real-estate",
                },
                {
                  label: "Colorado Home Buying Workshop →",
                  href: "/colorado-home-buying-workshop",
                },
              ].map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="flex items-center gap-2 text-gold hover:text-gold/80 transition-colors font-semibold text-lg"
                >
                  <ArrowRight size={16} />
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
