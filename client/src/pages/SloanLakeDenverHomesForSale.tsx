/**
 * Sloan Lake Denver Homes for Sale — My Rock Realty
 * Approved copy: sloan-lake-denver-homes-for-sale.md (Denver Cluster Source-of-Truth Package)
 * Design: Front Range Modern — matches existing site design system
 */
import { useState, useEffect } from "react";
import BuyingBuddyWidget from "@/components/BuyingBuddyWidget";
import SeoHead from "@/components/seo/SeoHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { ArrowRight, ArrowLeft, Phone, Mail, Globe, ChevronDown } from "lucide-react";

const SLOAN_LAKE_HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/sloan-lake-denver-hero_e1c3d8f5.jpg";

const faqContent = [
  {
    question: "Is Sloan Lake just the park, or is it a real neighborhood too?",
    answer: "It is both. Sloan Lake is a real Denver neighborhood, and the park is a huge part of why the search works the way it does.",
  },
  {
    question: "What usually narrows a Sloan Lake search fastest?",
    answer: "How close you really want to be to the lake, home type, and whether you want Sloan Lake itself or just this side of town.",
  },
  {
    question: "Is Sloan Lake mostly about being right by the water?",
    answer: "For a lot of buyers, that is where the interest starts. But the housing fit still has to work.",
  },
  {
    question: "What is the biggest mistake buyers make in Sloan Lake?",
    answer: "Letting the lake decide too much before they have worked through the housing tradeoffs.",
  },
  {
    question: "How do I know if I want Sloan Lake or just access to it?",
    answer: "Ask whether you want to live right in Sloan Lake, or whether being nearby would give you most of what you want without forcing the same tradeoffs.",
  },
  {
    question: "Does Sloan Lake make more sense than LoHi if I want open space to matter more?",
    answer: "For many buyers, yes. But that only helps if the lake matters enough to shape the whole decision.",
  },
  {
    question: "Should I buy in Sloan Lake now or rent first?",
    answer: "Buy if the fit is already clear. Rent first if you still need to sort out whether you want Sloan Lake itself or just the pull of the park.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Denver Homes for Sale", url: "/denver-homes-for-sale" },
  { label: "Sloan Lake", url: "/sloan-lake-denver-homes-for-sale" },
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

export default function SloanLakeDenverHomesForSale() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="hub-page min-h-screen bg-warm-white" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
      <SeoHead
        metadata={{
          title: "Sloan Lake Denver Homes for Sale: Fit, Feel, and the Tradeoffs That Matter | My Rock Realty",
          description: "A practical guide to Sloan Lake Denver homes for sale — honest help on fit, park-versus-neighborhood pull, home types, and the tradeoffs that shape the search.",
          canonicalUrl: "https://myrockhomes.com/sloan-lake-denver-homes-for-sale/",
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
        <img src={SLOAN_LAKE_HERO_BG} alt="Sloan Lake neighborhood in Denver, Colorado" className="absolute inset-0 w-full h-full object-cover object-center" width="1600" height="900" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="relative container py-20 sm:py-28">
          <h1 className="text-4xl sm:text-5xl font-bold text-cream mb-6 leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Sloan Lake Denver Homes for Sale: Fit, Feel, and the Tradeoffs That Matter
          </h1>
          <p className="text-lg text-cream/80 mb-8 leading-relaxed max-w-2xl">
            A practical guide to Sloan Lake — helping buyers sort the real question before they spend time on the wrong version of the search.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:rob@myrockhomes.com?subject=Sloan Lake Denver Consultation" className="inline-flex items-center justify-center gap-2 font-semibold rounded bg-gold text-charcoal hover:bg-yellow-400 px-7 py-4 text-[15px] sm:text-base no-underline" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Schedule a Consultation
              <ArrowRight size={18} />
            </a>
            <a href="mailto:rob@myrockhomes.com?subject=Sloan Lake Listings — Alert Request" className="inline-flex items-center justify-center gap-2 font-semibold rounded border-2 border-gold text-gold hover:bg-gold hover:text-charcoal px-7 py-4 text-[15px] sm:text-base no-underline" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Get Alerts for New Sloan Lake Homes
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Sloan Lake is one of those neighborhoods buyers often choose for the park first
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">A lot of buyers come into Sloan Lake with one thing already fixed in their head.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Usually it is the lake.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Sometimes that picture is right. Sometimes it is doing too much work.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is why this page exists.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Not to sell you on the view.<br />Not to turn the neighborhood into park copy.<br />And not to assume every buyer saying "Sloan Lake" means the same thing.</p>
          <p className="text-charcoal/80 leading-relaxed mb-4">This page is here to help you sort the real question:</p>
          <ul className="list-disc list-inside text-charcoal/80 leading-relaxed mb-5 space-y-1 pl-2">
            <li>do you want Sloan Lake itself, or do you want to be near the park</li>
            <li>do you want the neighborhood, or are you mostly reacting to the lake</li>
            <li>do you want a tighter-in west-side search enough to accept the tradeoffs that usually come with it</li>
            <li>or are you using "Sloan Lake" as shorthand for a part of Denver that may fit better somewhere nearby</li>
          </ul>
          <p className="text-charcoal/80 leading-relaxed">That distinction matters. Sloan Lake is a real Denver neighborhood, but a lot of buyers are reacting to the lake and the neighborhood at the same time.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-cream mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            What Sloan Lake feels like
          </h2>
          <p className="text-cream/80 leading-relaxed mb-5">Sloan Lake is one of those places where the lake changes the whole search.</p>
          <p className="text-cream/80 leading-relaxed mb-5">That is the first thing to get right.</p>
          <p className="text-cream/80 leading-relaxed mb-5">The lake is not just something nice nearby. It is a big reason people stay interested here. It can keep buyers looking longer than they would in another neighborhood with the same housing tradeoffs.</p>
          <p className="text-cream/80 leading-relaxed mb-5">But the question is not just whether you like the lake.</p>
          <p className="text-cream/80 leading-relaxed mb-5">It is what kind of Denver living you actually want around it.</p>
          <p className="text-cream/80 leading-relaxed mb-5">Some buyers want to be as close to the lake as they can get. Others are really reacting to the broader neighborhood around it. Some want the park to be part of everyday life. Others just want to be near it and do not need Sloan Lake itself.</p>
          <p className="text-cream/80 leading-relaxed mb-5">That is what makes Sloan Lake work.</p>
          <p className="text-cream/80 leading-relaxed">The lake matters. The neighborhood matters. But they are not exactly the same decision.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Why buyers keep Sloan Lake in play when the search gets real
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">Buyers keep Sloan Lake in play because the lake keeps answering real questions.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">It stays on the list when buyers want open space to matter, want to stay tied into Denver, and want that to show up in everyday life instead of just sounding good on paper.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">For the right buyer, that is a real advantage.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Sloan Lake works when you want the lake itself to matter, want to stay closer in than a more suburban search, and are okay with the fact that the housing around it is not always the cleanest or easiest path. It also works when you are willing to separate "I want Sloan Lake" from "I want to be somewhere near Sloan Lake" instead of treating those like the same answer.</p>
          <p className="text-charcoal/80 leading-relaxed">It gets weaker when the lake is deciding too much by itself.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal/5">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Who Sloan Lake tends to fit
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">Sloan Lake tends to fit buyers who want the park to carry real weight.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">It tends to fit people who care about being near open space, who want to stay tied into Denver, and who do not mind a search where the lake can matter as much as the house. It also tends to fit buyers who are open to the fact that the homes here do not all line up into one clean pattern.</p>
          <p className="text-charcoal/80 leading-relaxed mb-4">It usually makes the most sense for buyers sorting questions like:</p>
          <ul className="list-disc list-inside text-charcoal/80 leading-relaxed mb-5 space-y-1 pl-2">
            <li>do I want the lake to be part of everyday life or just nearby</li>
            <li>do I care more about the park and location than I do about the easiest housing search</li>
            <li>do I want to stay in Denver without moving into a more downtown-feeling area</li>
            <li>am I open to different home types if it keeps me in the right spot</li>
            <li>do I want Sloan Lake itself, or just this side of the city</li>
          </ul>
          <p className="text-charcoal/80 leading-relaxed">Those questions matter here early.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Who may not love it
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">Sloan Lake is not automatically the right answer just because the lake is a draw.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">If what you really want is the easiest detached-home search, the most predictable parking, a quieter setup farther from activity, or a newer-home path that feels more consistent from block to block, Sloan Lake may not be your cleanest fit.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">It can also frustrate buyers who love the lake more than the actual neighborhood tradeoffs.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">A buyer may love the idea of being by the lake, then realize they do not actually want the tighter fit, the price pressure near the park, or the way the search gets less simple once they start comparing exact streets, home types, and how close they really want to be.</p>
          <p className="text-charcoal/80 leading-relaxed">That is not a miss. That is just getting clearer.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal/5">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            What the search usually turns into
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">This is where the Sloan Lake search starts doing real work.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">At first, buyers think they are choosing a neighborhood.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Pretty quickly, they are usually choosing between the lake, the home, and how close they really need to be.</p>
          <p className="text-charcoal/80 leading-relaxed mb-4">The search tends to narrow around questions like:</p>
          <ul className="list-disc list-inside text-charcoal/80 leading-relaxed mb-5 space-y-1 pl-2">
            <li>right by the lake or just nearby</li>
            <li>detached home, duplex, townhome, or another lower-maintenance option</li>
            <li>stronger lake pull or better overall fit a little farther out</li>
            <li>tighter-in west-side living or something easier somewhere else</li>
            <li>strong neighborhood name or better value nearby</li>
          </ul>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            The tradeoffs are the whole point
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">There is no clean version of Sloan Lake without tradeoffs.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is not a criticism. It is part of what makes the neighborhood specific.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">You may trade more space for being closer to the lake. You may trade a simpler housing search for a better location. You may trade a quieter feel for one that stays more tied into the park and the city. You may decide the lake matters enough that the tighter fit is worth it. You may also decide the opposite.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is a good outcome too.</p>
          <p className="text-charcoal/80 leading-relaxed">Sloan Lake usually works best for buyers who stop trying to win every category and start deciding which tradeoffs they actually respect.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal/5">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Sloan Lake vs nearby alternatives
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">This is where the search usually gets honest.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Sometimes the real question is <strong>Sloan Lake versus Wash Park</strong>. If you want the lake itself to do more of the work, Sloan Lake can make more sense. If you want a more established neighborhood feel shaped by both the park and the east-versus-west split, Wash Park can become the better fit.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Sometimes the real question is <strong>Sloan Lake versus LoHi</strong>. If you want open space and a west-side location to matter more, Sloan Lake can stay central. If you want to feel more tied into downtown and are okay with a busier, closer-in setup, LoHi can become the stronger fit.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Sometimes the real question is <strong>Sloan Lake versus Central Park</strong>. If you want a tighter-in west-side search where the lake matters, Sloan Lake can make more sense. If you want a newer-home search that feels more orderly and easier to sort, Central Park may be the better answer.</p>
          <p className="text-charcoal/80 leading-relaxed">Sometimes the real question is <strong>Sloan Lake versus just being near the lake</strong>. That is one of the most important comparisons here. A lot of buyers say "Sloan Lake" when what they really mean is that they want this side of town and want the park to be part of their life. Buyers usually do better once they figure out whether they need Sloan Lake itself or just workable access to it.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            What buyers tend to underestimate
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">A lot of buyers underestimate how much the lake changes the search.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">It can keep them in longer than they expect.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Buyers also underestimate how often they are reacting to the lake first and the neighborhood second. Sometimes that is fine. Sometimes it leads them to force the wrong fit.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Another thing buyers underestimate is how fast the search becomes about exact distance, home type, and whether being right by the lake is really worth what comes with it.</p>
          <p className="text-charcoal/80 leading-relaxed">That is why Sloan Lake usually goes best when buyers treat the lake as a real factor, but not the only one.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal/5">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Buy now or rent first
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">That depends on how clear the fit already is.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">If you already know you want Sloan Lake specifically, understand how close to the lake you really need to be, and are comfortable with the tradeoffs that usually come with it, buying may make sense now.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">If you are still sorting out whether you want Sloan Lake itself, whether you are really reacting to the lake more than the neighborhood, or whether another nearby area could give you the same upside with a better fit, renting first may be the smarter move.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is not hesitation. That is clarity work.</p>
          <p className="text-charcoal/80 leading-relaxed">Sloan Lake is strong enough that buyers can talk themselves into it because the lake is real and the pull is real. Renting first can help if you need to know whether you want the full version of the neighborhood or just access to the lake.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal/5">
        <div className="container max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Featured Sloan Lake Listings
          </h2>
          <BuyingBuddyWidget
            type="FeaturedGallery"
            filter="carousel:true+shapesearch:39.757900 -105.045800,39.757900 -105.041405,39.739600 -105.041405,39.739600 -105.045800,39.757900 -105.045800+mls_id:denver+listing_status:active,coming-soon+order:create_dt desc"
          />
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Sloan Lake Denver real estate FAQs
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
          <p className="text-charcoal/80 leading-relaxed mb-5">Sloan Lake is one of the clearest examples of a neighborhood where the lake can carry a lot of the decision.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is exactly why buyers need to be careful with it.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">The neighborhood can absolutely be the right answer. But it works best when buyers get specific about what they mean, what kind of home they want to own here, and which tradeoffs they are actually willing to make for being this close to the lake.</p>
          <p className="text-charcoal/80 leading-relaxed">Get that part right, and Sloan Lake gets clearer fast.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Keep exploring Denver
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-6">If Sloan Lake is still in play, the next move is not to stay broad about it. It is to pressure-test the right comparisons.</p>
          <p className="text-charcoal/80 font-semibold mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>Explore next</p>
          <ul className="space-y-2">
            {[
              { label: "Denver homes for sale", href: "/denver-homes-for-sale" },
              { label: "Wash Park", href: "/wash-park-denver-homes-for-sale" },
              { label: "LoHi", href: "/lohi-denver-homes-for-sale" },
              { label: "Central Park", href: "/central-park-denver-homes-for-sale" },
              { label: "Highland", href: "/highland-denver-homes-for-sale" },
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
            If you want help narrowing Sloan Lake without wasting time on the wrong version of the search, reach out.
          </p>
          <p className="text-cream/60 text-sm leading-relaxed mb-8">
            We can sort through how close to the lake you really need to be, home type, west-side tradeoffs, and whether Sloan Lake is truly your best Denver match.
          </p>
          <a href="mailto:rob@myrockhomes.com?subject=Sloan Lake Denver Consultation" className="inline-flex items-center justify-center gap-2 font-semibold rounded bg-gold text-charcoal hover:bg-yellow-400 px-7 py-4 text-[15px] sm:text-base no-underline" style={{ fontFamily: "'Outfit', sans-serif" }}>
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
