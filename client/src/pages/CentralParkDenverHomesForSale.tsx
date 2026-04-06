/**
 * Central Park Denver Homes for Sale — My Rock Realty
 * Approved copy: central-park-denver-homes-for-sale.md (Denver Cluster Source-of-Truth Package)
 * Design: Front Range Modern — matches existing site design system
 */
import { useState, useEffect } from "react";
import BuyingBuddyWidget from "@/components/BuyingBuddyWidget";
import SeoHead from "@/components/seo/SeoHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { ArrowRight, ArrowLeft, Phone, Mail, Globe, ChevronDown } from "lucide-react";

const CENTRAL_PARK_HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/central-park-denver-hero_d9f2a7b4.jpg";

const faqContent = [
  {
    question: "Is Central Park one neighborhood or a bunch of smaller searches?",
    answer: "Both, really. Central Park is an official Denver neighborhood, but it is large enough that buyers often start broad and then narrow into a smaller part of it once the search gets real.",
  },
  {
    question: "What usually narrows a Central Park search fastest?",
    answer: "Home type, which part of the neighborhood you actually mean, and whether you want the station-area setup or something deeper inside the neighborhood.",
  },
  {
    question: "Is Central Park mostly newer housing?",
    answer: "A lot of buyers go there for that reason, yes. That is one of the biggest reasons the search often feels easier to sort than it does in older parts of Denver.",
  },
  {
    question: "What is the biggest mistake buyers make in Central Park?",
    answer: "Confusing an easier search with the right fit.",
  },
  {
    question: "How do I know if I want Central Park or just a newer home somewhere else?",
    answer: "Ask whether you want this neighborhood itself, or whether you mainly want newer housing, less upkeep, and a search that makes more sense early. That answer usually changes the search fast.",
  },
  {
    question: "Does Central Park make more sense than Wash Park if I want an easier search?",
    answer: "For many buyers, yes. But that only helps if the newer, bigger, and less old-house-driven setup is actually what you want.",
  },
  {
    question: "Should I buy in Central Park now or rent first?",
    answer: "Buy if the fit is already clear. Rent first if you still need to sort out whether you want Central Park itself or just the traits that brought you there.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Denver Homes for Sale", url: "/denver-homes-for-sale" },
  { label: "Central Park", url: "/central-park-denver-homes-for-sale" },
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

export default function CentralParkDenverHomesForSale() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="hub-page min-h-screen bg-warm-white" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
      <SeoHead
        metadata={{
          title: "Central Park Denver Homes for Sale: Fit, Feel, and the Tradeoffs That Matter | My Rock Realty",
          description: "A practical guide to Central Park Denver homes for sale — honest help on fit, newer-versus-older housing choices, station-area differences, and the tradeoffs that shape the search.",
          canonicalUrl: "https://myrockhomes.com/central-park-denver-homes-for-sale/",
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
        <img src={CENTRAL_PARK_HERO_BG} alt="Central Park neighborhood in Denver, Colorado" className="absolute inset-0 w-full h-full object-cover object-center" width="1600" height="900" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="relative container py-20 sm:py-28">
          <h1 className="text-4xl sm:text-5xl font-bold text-cream mb-6 leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Central Park Denver Homes for Sale: Fit, Feel, and the Tradeoffs That Matter
          </h1>
          <p className="text-lg text-cream/80 mb-8 leading-relaxed max-w-2xl">
            A practical guide to Central Park — helping buyers sort the real question before they spend time on the wrong version of the search.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:rob@myrockhomes.com?subject=Central Park Denver Consultation" className="inline-flex items-center justify-center gap-2 font-semibold rounded bg-gold text-charcoal hover:bg-yellow-400 px-7 py-4 text-[15px] sm:text-base no-underline" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Schedule a Consultation
              <ArrowRight size={18} />
            </a>
            <a href="mailto:rob@myrockhomes.com?subject=Central Park Listings — Alert Request" className="inline-flex items-center justify-center gap-2 font-semibold rounded border-2 border-gold text-gold hover:bg-gold hover:text-charcoal px-7 py-4 text-[15px] sm:text-base no-underline" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Get Alerts for New Central Park Homes
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Central Park is one of those neighborhoods buyers often choose because the search feels simpler
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">A lot of Denver neighborhood searches get messy fast.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Central Park often feels easier to sort early.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is a big part of the draw.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">People usually come into Central Park wanting some mix of newer housing, a little more consistency, a little less day-to-day hassle, and a search that does not feel all over the place. Sometimes that really is the right fit. Sometimes buyers are reacting to the simpler search and the newer homes, but have not figured out yet whether they actually want Central Park itself.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is why this page exists.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Not to sell you on a big neighborhood.<br />Not to turn Central Park into master-planned fluff.<br />And not to assume every buyer using the name wants the same thing.</p>
          <p className="text-charcoal/80 leading-relaxed mb-4">This page is here to help you sort the real question:</p>
          <ul className="list-disc list-inside text-charcoal/80 leading-relaxed mb-5 space-y-1 pl-2">
            <li>do you want Central Park itself, or do you want a newer-home search somewhere in the same general part of town</li>
            <li>do you want the broader Central Park neighborhood, or are you really reacting to one smaller part of it</li>
            <li>do you want a search that feels simpler enough to accept what Central Park is not</li>
            <li>or are you using "Central Park" as shorthand for an easier Denver search when the better fit may still be somewhere else</li>
          </ul>
          <p className="text-charcoal/80 leading-relaxed">That distinction matters. Central Park is a real Denver neighborhood, and it is big enough that buyers often start broad and then realize they need to get more specific about which part they actually mean.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-cream mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            What Central Park feels like
          </h2>
          <p className="text-cream/80 leading-relaxed mb-5">Central Park usually feels more organized than a lot of Denver neighborhood searches.</p>
          <p className="text-cream/80 leading-relaxed mb-5">That is one of the first things buyers notice.</p>
          <p className="text-cream/80 leading-relaxed mb-5">A lot of that comes from the homes. Buyers who are tired of bouncing between very different house ages, layouts, upkeep levels, and parking situations often find Central Park easier to make sense of. The neighborhood is big enough to have real variety, but it still tends to feel more consistent than older parts of Denver.</p>
          <p className="text-cream/80 leading-relaxed mb-5">But the question is not just whether you want newer homes.</p>
          <p className="text-cream/80 leading-relaxed mb-5">It is what kind of Denver living you actually want.</p>
          <p className="text-cream/80 leading-relaxed mb-5">Some buyers are reacting to the broader neighborhood. Others are really reacting to one smaller pocket, a certain house type, or the part of the area closer to the station. That matters because two buyers can both say "Central Park" and be picturing pretty different setups.</p>
          <p className="text-cream/80 leading-relaxed mb-5">That is what makes Central Park useful.</p>
          <p className="text-cream/80 leading-relaxed">It can feel simpler than a lot of Denver. But it is not all one thing.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Why buyers keep Central Park in play when the search gets real
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">Buyers keep Central Park in play because it answers practical questions quickly.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">It stays in the conversation when buyers want a search that makes more sense early, want a home that usually asks a little less from them, and want something that can feel more settled from the start.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">For the right buyer, that is a real advantage.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Central Park stays strong when you want a newer-home path, a little more consistency, and a search that does not force you into as many old-house tradeoffs right away. It also stays strong when you are open to sorting the bigger neighborhood into smaller decisions instead of treating the whole thing like one answer.</p>
          <p className="text-charcoal/80 leading-relaxed">It gets weaker when buyers are really chasing simplicity, but have not asked whether they still want Denver to feel more like Denver. That is where the search usually turns.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal/5">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Who Central Park tends to fit
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">Central Park tends to fit buyers who want the search to make sense sooner.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">It tends to fit people who care about newer housing, a more straightforward ownership path, and a neighborhood where the day-to-day pieces often feel easier to sort early. It also tends to fit buyers who want Denver, but do not necessarily want the older-home version of Denver.</p>
          <p className="text-charcoal/80 leading-relaxed mb-4">It usually makes the most sense for buyers sorting questions like:</p>
          <ul className="list-disc list-inside text-charcoal/80 leading-relaxed mb-5 space-y-1 pl-2">
            <li>do I want a newer-home search instead of an older-home search</li>
            <li>do I care more about consistency than I do about older neighborhood character</li>
            <li>do I want Denver, but not the more house-by-house, block-by-block kind of search</li>
            <li>am I open to different housing types if the overall setup feels easier</li>
            <li>do I want a larger neighborhood where I still need to narrow down the right pocket</li>
          </ul>
          <p className="text-charcoal/80 leading-relaxed">Those questions matter here early.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Who may not love it
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">Central Park is not automatically the right answer just because the search feels easier.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">If what you really want is older neighborhood character, a more rooted feel, a tighter-in city experience, or a place where the housing feels less planned and more one-off, Central Park may not be your cleanest fit.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">It can also frustrate buyers who like the easier search more than the actual neighborhood.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">A buyer may love that the homes feel newer, the search feels simpler, and the options feel less messy, then realize they do not actually want this kind of neighborhood feel. Another buyer may start with Central Park when what they really want is just a newer home somewhere else.</p>
          <p className="text-charcoal/80 leading-relaxed">That is not a miss. That is just a clearer answer.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal/5">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            What the search usually turns into
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">This is where the Central Park search starts doing real work.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">At first, buyers think they are choosing a neighborhood.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Pretty quickly, they are usually choosing between different kinds of convenience, different parts of a large area, and different versions of what "easier" really means.</p>
          <p className="text-charcoal/80 leading-relaxed mb-4">The search tends to narrow around questions like:</p>
          <ul className="list-disc list-inside text-charcoal/80 leading-relaxed mb-5 space-y-1 pl-2">
            <li>broader Central Park or one smaller part of it</li>
            <li>station-area pull or a more internal neighborhood feel</li>
            <li>detached home, townhome, or a lower-maintenance option</li>
            <li>newer house versus best overall fit</li>
            <li>Denver address versus a neighborhood that feels more suburban in some ways</li>
            <li>how much size, upkeep, commute pattern, or price pressure feels worth it</li>
          </ul>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is normal. In fact, that is the point.</p>
          <p className="text-charcoal/80 leading-relaxed">Central Park is one of those places where buyers often come in through the idea of a simpler search and then get more specific fast. Buyers usually make better decisions once they stop treating the whole neighborhood like one answer and start deciding what kind of setup they actually want inside it.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            The tradeoffs are the whole point
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">There is no clean version of Central Park without tradeoffs.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is not a knock on the neighborhood. It is part of why it works for the buyers it works for.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">You may trade older neighborhood character for a newer home and a simpler search. You may trade a tighter-in location for more space and more consistency. You may trade the house-by-house feel of older Denver for something that asks a little less from you early. You may decide the easier path matters enough that the tradeoffs are worth it. You may also decide the opposite.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is a good outcome too.</p>
          <p className="text-charcoal/80 leading-relaxed">Central Park usually works best for buyers who stop trying to win every category and start deciding which tradeoffs they actually respect.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal/5">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Central Park vs nearby alternatives
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">This is where the search usually gets honest.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Sometimes the real question is <strong>Central Park versus Wash Park</strong>. If you want a newer-home path, a larger neighborhood, and a search that usually feels more straightforward, Central Park can make more sense. If you want a more rooted neighborhood feel and are willing to take on more tradeoffs around older housing, Wash Park can become the better fit.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Sometimes the real question is <strong>Central Park versus Cherry Creek</strong>. If you want a bigger neighborhood and a search that often leans more toward newer homes and easier day-to-day ownership, Central Park can stay central. If you want a more central, more polished, more lock-and-leave kind of fit, Cherry Creek can become the stronger answer.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Sometimes the real question is <strong>Central Park versus Sloan Lake</strong>. If you want a search that usually feels more predictable and more house-type-driven, Central Park can make more sense. If you want something a little tighter in with a different neighborhood feel, Sloan Lake may be the better comparison.</p>
          <p className="text-charcoal/80 leading-relaxed">Sometimes the real question is <strong>Central Park versus just a newer home somewhere else</strong>. That is one of the most important comparisons here. A lot of buyers say "Central Park" when what they really mean is newer housing, less upkeep, and a search that feels less messy. Buyers usually do better once they figure out whether they want this neighborhood or just those traits.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            What buyers tend to underestimate
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">A lot of buyers underestimate how big the Central Park search really is.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">They also underestimate how often they are reacting to one part of it, not the whole neighborhood.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">The station-area piece matters more than some buyers expect too. A buyer saying "Central Park" may be picturing something pretty different from someone else using the same name, especially if one of them is really focused on the station side of the area.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Another thing buyers underestimate is that an easier search is not the same thing as the right fit. Sometimes buyers feel relief when they get into Central Park because the search starts making more sense. That is useful. But it still does not answer whether they want this kind of neighborhood, this kind of home, and this kind of day-to-day life.</p>
          <p className="text-charcoal/80 leading-relaxed">That is why Central Park usually goes best when buyers treat the simpler search as a signal, not the final answer.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal/5">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Buy now or rent first
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">That depends on how clear the fit already is.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">If you already know you want Central Park specifically, understand which part of the neighborhood fits better, and are comfortable with the tradeoffs that usually come with it, buying may make sense now.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">If you are still sorting out whether you want Central Park itself, whether you are really reacting to newer housing more than the neighborhood, or whether another area could give you the same benefits with a better overall fit, renting first may be the smarter move.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is not hesitation. That is clarity work.</p>
          <p className="text-charcoal/80 leading-relaxed">Central Park is strong enough that buyers can talk themselves into it because the search feels easier. Renting first can help if you need to know whether you want the real version of the neighborhood or just the relief of a simpler search.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal/5">
        <div className="container max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Featured Central Park Listings
          </h2>
          <BuyingBuddyWidget
            type="FeaturedGallery"
            filter="carousel:true+shapesearch:39.7648 -104.9036,39.7648 -104.8820,39.7118 -104.8820,39.7118 -104.9036,39.7648 -104.9036+mls_id:denver+listing_status:active,coming-soon+order:create_dt desc"
          />
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Central Park Denver real estate FAQs
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
          <p className="text-charcoal/80 leading-relaxed mb-5">Central Park is one of the clearest examples of a neighborhood that can feel right early for practical reasons.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is exactly why buyers need to be careful with it.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">The neighborhood can absolutely be the right answer. But it works best when buyers get specific about what they mean, what kind of home they want to own here, and which tradeoffs they are actually willing to make for a search that often feels newer, simpler, and easier to sort than other parts of Denver.</p>
          <p className="text-charcoal/80 leading-relaxed">Get that part right, and Central Park gets clearer fast.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Keep exploring Denver
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-6">If Central Park is still in play, the next move is not to stay broad about it. It is to pressure-test the right comparisons.</p>
          <p className="text-charcoal/80 font-semibold mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>Explore next</p>
          <ul className="space-y-2">
            {[
              { label: "Denver homes for sale", href: "/denver-homes-for-sale" },
              { label: "Wash Park", href: "/wash-park-denver-homes-for-sale" },
              { label: "Cherry Creek", href: "/cherry-creek-denver-homes-for-sale" },
              { label: "Sloan Lake", href: "/sloan-lake-denver-homes-for-sale" },
              { label: "RiNo", href: "/rino-denver-homes-for-sale" },
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
            If you want help narrowing Central Park without wasting time on the wrong version of the search, reach out.
          </p>
          <p className="text-cream/60 text-sm leading-relaxed mb-8">
            We can sort through which part of Central Park fits, home type, station-area tradeoffs, and whether Central Park is truly your best Denver match.
          </p>
          <a href="mailto:rob@myrockhomes.com?subject=Central Park Denver Consultation" className="inline-flex items-center justify-center gap-2 font-semibold rounded bg-gold text-charcoal hover:bg-yellow-400 px-7 py-4 text-[15px] sm:text-base no-underline" style={{ fontFamily: "'Outfit', sans-serif" }}>
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
