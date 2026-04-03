/**
 * Platt Park Denver Homes for Sale — My Rock Realty
 * Approved copy: platt-park-denver-homes-for-sale.md (Denver Cluster Source-of-Truth Package)
 * Design: Front Range Modern — matches existing site design system
 */
import { useState, useEffect } from "react";
import BuyingBuddyWidget from "@/components/BuyingBuddyWidget";
import SeoHead from "@/components/seo/SeoHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { ArrowRight, ArrowLeft, Phone, Mail, Globe, ChevronDown } from "lucide-react";

const PLATT_PARK_HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/platt-park-denver-hero_a4b1c2d3.jpg";

const faqContent = [
  {
    question: "Is Platt Park really its own neighborhood, or mostly a nearby alternative to Wash Park?",
    answer: "It is its own neighborhood. Even though a lot of buyers first get there through the Wash Park comparison, it is still its own decision.",
  },
  {
    question: "What usually narrows a Platt Park search fastest?",
    answer: "The Wash Park versus Platt Park decision, how much South Pearl matters to you, and whether you are actually choosing Platt Park on purpose.",
  },
  {
    question: "Is South Pearl the main reason people look at Platt Park?",
    answer: "For many buyers, it is one of the first things that pulls them in. But it should not be the only reason. You still have to want the neighborhood itself.",
  },
  {
    question: "What is the biggest mistake buyers make in Platt Park?",
    answer: "Using it as a vague nearby alternative without deciding whether it is actually the better fit.",
  },
  {
    question: "How do I know if I want Platt Park or Wash Park?",
    answer: "Ask whether you want the stronger park-centered identity and name pressure of Wash Park, or whether you want a nearby neighborhood that may fit you better without carrying all of that weight.",
  },
  {
    question: "Does Platt Park make more sense than Wash Park if I want a calmer decision?",
    answer: "For many buyers, yes. But only if you are choosing it for what it is, not just because it feels like the easier nearby option.",
  },
  {
    question: "Should I buy in Platt Park now or rent first?",
    answer: "Buy if the fit is already clear. Rent first if you still need to sort out whether you want Platt Park itself, Wash Park, or just this general part of Denver.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Denver Homes for Sale", url: "/denver-homes-for-sale" },
  { label: "Platt Park", url: "/platt-park-denver-homes-for-sale" },
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

export default function PlattParkDenverHomesForSale() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-warm-white" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
      <SeoHead
        metadata={{
          title: "Platt Park Denver Homes for Sale: Fit, Feel, and the Tradeoffs That Matter | My Rock Realty",
          description: "A practical guide to Platt Park Denver homes for sale, with honest help on fit, South Pearl pull, home types, and the tradeoffs that shape the search.",
          canonicalUrl: "https://myrockhomes.com/platt-park-denver-homes-for-sale/",
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
        <img src={PLATT_PARK_HERO_BG} alt="Platt Park neighborhood in Denver, Colorado" className="absolute inset-0 w-full h-full object-cover object-center" width="1600" height="900" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="relative container py-20 sm:py-28">
          <h1 className="text-4xl sm:text-5xl font-bold text-cream mb-6 leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Platt Park Denver Homes for Sale: Fit, Feel, and the Tradeoffs That Matter
          </h1>
          <p className="text-lg text-cream/80 mb-8 leading-relaxed max-w-2xl">
            A practical guide to Platt Park — helping buyers sort the real question before they spend time on the wrong version of the search.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:rob@myrockhomes.com?subject=Platt Park Denver Consultation" className="inline-flex items-center justify-center gap-2 font-semibold rounded bg-gold text-charcoal hover:bg-yellow-400 px-7 py-4 text-[15px] sm:text-base no-underline" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Schedule a Consultation
              <ArrowRight size={18} />
            </a>
            <a href="mailto:rob@myrockhomes.com?subject=Platt Park Listings — Alert Request" className="inline-flex items-center justify-center gap-2 font-semibold rounded border-2 border-gold text-gold hover:bg-gold hover:text-charcoal px-7 py-4 text-[15px] sm:text-base no-underline" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Get Alerts for New Platt Park Homes
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Platt Park is one of those neighborhoods buyers often find after thinking they wanted Wash Park
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">That happens a lot.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">A buyer starts with Wash Park because it is the bigger name. Then the search gets real, and they realize they may want something nearby that still feels established, still feels like Denver, and still has some neighborhood pull, but without carrying all the weight that comes with Wash Park.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is where Platt Park usually shows up.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is also why this page exists.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Not to pitch Platt Park as a backup plan.<br />Not to turn South Pearl into lifestyle copy.<br />And not to pretend this is the same decision as Wash Park.</p>
          <p className="text-charcoal/80 leading-relaxed mb-4">This page is here to help you sort the real question:</p>
          <ul className="list-disc list-inside text-charcoal/80 leading-relaxed mb-5 space-y-1 pl-2">
            <li>do you want Platt Park itself, or are you really still chasing Wash Park</li>
            <li>do you want a neighborhood with real pull, but a little less pressure around the name</li>
            <li>do you want an established Denver neighborhood without forcing the biggest nearby label</li>
            <li>or are you using "Platt Park" as shorthand for a general part of south-central Denver that may fit better somewhere else</li>
          </ul>
          <p className="text-charcoal/80 leading-relaxed">That distinction matters. Platt Park is its own neighborhood. It is not just something people land on because Wash Park got too expensive or too narrow.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-cream mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            What Platt Park feels like
          </h2>
          <p className="text-cream/80 leading-relaxed mb-5">Platt Park usually feels more grounded and a little less loaded than Wash Park.</p>
          <p className="text-cream/80 leading-relaxed mb-5">That is one of the first things buyers notice.</p>
          <p className="text-cream/80 leading-relaxed mb-5">It still feels like a real neighborhood choice. It still has identity. But it usually does not come with the same feeling that it has to be the answer.</p>
          <p className="text-cream/80 leading-relaxed mb-5">For a lot of buyers, that is exactly the point.</p>
          <p className="text-cream/80 leading-relaxed mb-5">South Pearl is part of that. It matters. But it is not the whole story.</p>
          <p className="text-cream/80 leading-relaxed mb-5">The bigger question is what kind of neighborhood decision you are actually trying to make.</p>
          <p className="text-cream/80 leading-relaxed mb-5">Some buyers are reacting to the street and the feel around it. Others are reacting to the broader neighborhood. Some want an established part of Denver that still feels lived-in and recognizable. Others mostly want to stay in this general part of town and are still sorting whether Platt Park itself is the fit.</p>
          <p className="text-cream/80 leading-relaxed mb-5">That is what makes Platt Park useful.</p>
          <p className="text-cream/80 leading-relaxed">It has real pull. It just does not usually hit with the same force as Wash Park.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Why buyers keep Platt Park in play when the search gets real
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">Buyers keep Platt Park in play because it answers a real question: Do I want Wash Park, or do I want something nearby that may fit me better?</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">For the right buyer, Platt Park is not the fallback. It is the better answer.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">It stays in the search when buyers want an established Denver neighborhood, want neighborhood feel to matter, and want that without stepping into the full Wash Park version of the decision. It also stays in play when buyers like the idea of South Pearl and this part of town, but do not need the heavier pull that comes with Wash Park itself.</p>
          <p className="text-charcoal/80 leading-relaxed">It gets weaker when buyers are still really chasing Wash Park and only looking at Platt Park because they think they should. That usually does not last.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal/5">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Who Platt Park tends to fit
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">Platt Park tends to fit buyers who want a real neighborhood decision without quite as much pressure around the name.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">It tends to fit people who care about neighborhood feel, want to stay in Denver, and want a place that feels established without needing the biggest nearby label to carry the whole decision. It also tends to fit buyers who like the fact that Platt Park feels tied to a real neighborhood street and a real neighborhood setup, not just to one big park or one broad name people know.</p>
          <p className="text-charcoal/80 leading-relaxed mb-4">It usually makes the most sense for buyers sorting questions like:</p>
          <ul className="list-disc list-inside text-charcoal/80 leading-relaxed mb-5 space-y-1 pl-2">
            <li>do I want Wash Park specifically, or do I want a nearby neighborhood that may fit me better</li>
            <li>do I want neighborhood feel without quite as much pressure around the name</li>
            <li>do I care more about the overall fit than I do about picking the most recognized nearby area</li>
            <li>do I want an established south-central Denver neighborhood with a real street and neighborhood feel</li>
            <li>am I okay with older homes and the tradeoffs that come with them if the neighborhood itself feels right</li>
          </ul>
          <p className="text-charcoal/80 leading-relaxed">Those questions do a lot of work here.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Who may not love it
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">Platt Park is not automatically the right answer just because it feels easier to say yes to.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">If what you really want is the stronger Wash Park pull, a more obvious park-centered decision, or the biggest-name nearby neighborhood, Platt Park may not fully scratch that itch.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">It can also frustrate buyers who are really looking for a newer-home path, a simpler ownership setup, or a more removed-from-the-city feel. That is not what this neighborhood is for.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Another common issue is that a buyer likes this general part of town, likes the idea of South Pearl, likes being near Wash Park, and then realizes they were never really choosing Platt Park on purpose.</p>
          <p className="text-charcoal/80 leading-relaxed">That matters. This page only works if the buyer is actually choosing Platt Park, not just drifting into it.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal/5">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            What the search usually turns into
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">This is where the Platt Park search starts doing real work.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">At first, buyers think they are choosing a neighborhood.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Pretty quickly, they are usually choosing between different versions of established Denver living and different levels of pressure around the name.</p>
          <p className="text-charcoal/80 leading-relaxed mb-4">The search tends to narrow around questions like:</p>
          <ul className="list-disc list-inside text-charcoal/80 leading-relaxed mb-5 space-y-1 pl-2">
            <li>Platt Park or Wash Park</li>
            <li>closer to South Pearl or a little less tied to it</li>
            <li>older detached home or another housing option that keeps the neighborhood fit</li>
            <li>stronger-name neighborhood or better overall match</li>
            <li>this neighborhood specifically or just this general side of town</li>
            <li>how much upkeep, parking friction, or older-home compromise feels worth it</li>
          </ul>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is normal. In fact, that is the point.</p>
          <p className="text-charcoal/80 leading-relaxed">Platt Park is one of those places where buyers often come in through a nearby comparison and then get more specific fast. Buyers usually make better decisions once they stop treating it like just "near Wash Park" and start deciding whether they actually want Platt Park itself.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            The tradeoffs are the whole point
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">There is no clean version of Platt Park without tradeoffs.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is not a criticism. It is part of what makes the neighborhood specific.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">You may trade the stronger Wash Park name for a neighborhood that fits you better. You may trade a bigger park-centered identity for a more even neighborhood feel. You may trade newer housing for older homes with more character and more upkeep. You may decide that Platt Park gives you enough neighborhood pull without forcing the full Wash Park version of the search. You may also decide the opposite.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is a good outcome too.</p>
          <p className="text-charcoal/80 leading-relaxed">Platt Park usually works best for buyers who stop trying to win every category and start deciding which tradeoffs they actually respect.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal/5">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Platt Park vs nearby alternatives
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">This is where the search usually gets honest.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Sometimes the real question is <strong>Platt Park versus Wash Park</strong>. That is the biggest one. If you want the stronger park-centered pull and the heavier name gravity, Wash Park can stay central. If you want something nearby that still feels established and still feels like a real neighborhood, but without quite as much pressure around the name, Platt Park can make more sense.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Sometimes the real question is <strong>Platt Park versus just being near South Pearl</strong>. A lot of buyers respond to South Pearl before they respond to the whole neighborhood. That is fine, but it is not the same thing. If the street is doing most of the work, the buyer still has to decide whether they actually want Platt Park or just this general pocket of town.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Sometimes the real question is <strong>Platt Park versus a newer-home search somewhere else</strong>. That is also real. A buyer may like this part of town, like the neighborhood feel, and then realize the older-home side of the search is not what they want. That does not make Platt Park wrong. It just means they are solving a different problem.</p>
          <p className="text-charcoal/80 leading-relaxed">Sometimes the real question is <strong>Platt Park versus just this side of Denver</strong>. That is usually where better decisions start.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            What buyers tend to underestimate
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">A lot of buyers underestimate how often Platt Park is the more intentional choice.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Because Wash Park is the louder nearby name, people can assume Platt Park is just the second option. That is not always true.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Buyers also underestimate how much South Pearl shapes the first impression without fully answering the neighborhood question. It matters, but it does not decide the whole search by itself.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Another thing buyers underestimate is how much this decision is really about pressure. Some buyers want the stronger name and the stronger park pull. Others want a neighborhood that still feels real and established, but does not come with that same level of pressure from the name itself.</p>
          <p className="text-charcoal/80 leading-relaxed">That is why Platt Park usually goes best when buyers choose it on purpose.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal/5">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Buy now or rent first
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">That depends on how clear the fit already is.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">If you already know you want Platt Park specifically, understand why you are choosing it instead of Wash Park or another nearby option, and are comfortable with the older-home tradeoffs that often come with it, buying may make sense now.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">If you are still sorting out whether you want Platt Park itself, whether you are really reacting to South Pearl or this side of town more generally, or whether you are still actually chasing Wash Park, renting first may be the smarter move.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is not hesitation. That is clarity work.</p>
          <p className="text-charcoal/80 leading-relaxed">Platt Park is strong enough that buyers can drift into it for the wrong reasons. Renting first can help if you need to know whether you want the neighborhood itself or just what it seems to represent.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal/5">
        <div className="container max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Featured Platt Park Listings
          </h2>
          <BuyingBuddyWidget type="SearchResults" filter="neighborhood:Platt Park mappos:39.6882,-104.9740 mapzoom:14" />
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Platt Park Denver real estate FAQs
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
          <p className="text-charcoal/80 leading-relaxed mb-5">Platt Park belongs in the Denver cluster because it is not just a mention anymore.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">It is a real branch in the buyer decision.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">The neighborhood can absolutely be the right answer. But it works best when buyers get specific about why they are choosing it, what kind of home they want to own here, and whether they want Platt Park itself or just something near a stronger nearby name.</p>
          <p className="text-charcoal/80 leading-relaxed">Get that part right, and Platt Park gets clearer fast.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Keep exploring Denver
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-6">If Platt Park is still in play, the next move is not to stay broad about it. It is to pressure-test the right comparisons.</p>
          <p className="text-charcoal/80 font-semibold mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>Explore next</p>
          <ul className="space-y-2">
            {[
              { label: "Denver homes for sale", href: "/denver-homes-for-sale" },
              { label: "Wash Park", href: "/wash-park-denver-homes-for-sale" },
              { label: "Cherry Creek", href: "/cherry-creek-denver-homes-for-sale" },
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
            If you want help narrowing Platt Park without wasting time on the wrong version of the search, reach out.
          </p>
          <p className="text-cream/60 text-sm leading-relaxed mb-8">
            We can sort through Platt Park versus Wash Park, South Pearl pull, home type, and whether Platt Park is truly your best Denver match.
          </p>
          <a href="mailto:rob@myrockhomes.com?subject=Platt Park Denver Consultation" className="inline-flex items-center justify-center gap-2 font-semibold rounded bg-gold text-charcoal hover:bg-yellow-400 px-7 py-4 text-[15px] sm:text-base no-underline" style={{ fontFamily: "'Outfit', sans-serif" }}>
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
