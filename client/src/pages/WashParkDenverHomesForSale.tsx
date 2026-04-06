/**
 * Wash Park Denver Homes for Sale — My Rock Realty
 * Approved copy: wash-park-denver-homes-for-sale.md (Denver Cluster Source-of-Truth Package)
 * Design: Front Range Modern — matches existing site design system
 */
import { useState, useEffect } from "react";
import BuyingBuddyWidget from "@/components/BuyingBuddyWidget";
import SeoHead from "@/components/seo/SeoHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { ArrowRight, ArrowLeft, Phone, Mail, Globe, ChevronDown } from "lucide-react";

const WASHPARK_HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/wash-park-denver-hero_c8e2a1b4.jpg";

const faqContent = [
  {
    question: "Is Wash Park one neighborhood or two?",
    answer: "Buyers often use \"Wash Park\" as one neighborhood search, but the city separates Washington Park and Washington Park West. That is one reason the search can feel broader at first than buyers expect.",
  },
  {
    question: "What usually narrows a Wash Park search fastest?",
    answer: "The east-versus-west question, home type, and how much upkeep or tradeoff you are actually willing to accept for the neighborhood.",
  },
  {
    question: "Is Wash Park mostly about the park itself?",
    answer: "A lot of the pull starts there. But the housing and ownership fit still have to work.",
  },
  {
    question: "Does Wash Park make more sense for detached homes or lower-maintenance living?",
    answer: "It can work for both, but not in the same way. That is why the search usually gets better once buyers stop treating the neighborhood as one housing pattern.",
  },
  {
    question: "What is the biggest mistake buyers make in Wash Park?",
    answer: "Treating the name like the decision is already made.",
  },
  {
    question: "How do I know if I want Wash Park or just a nearby alternative?",
    answer: "Ask whether you want this specific park-centered neighborhood badly enough to accept the housing tradeoffs that often come with it. If not, a nearby neighborhood may fit better.",
  },
  {
    question: "Should I buy in Wash Park now or rent first?",
    answer: "Buy if the fit is already clear. Rent first if you still need to sort out whether the real day-to-day version of Wash Park matches the picture in your head.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Denver Homes for Sale", url: "/denver-homes-for-sale" },
  { label: "Wash Park", url: "/wash-park-denver-homes-for-sale" },
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

export default function WashParkDenverHomesForSale() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="hub-page min-h-screen bg-warm-white" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
      <SeoHead
        metadata={{
          title: "Wash Park Denver Homes for Sale: Fit, Feel, and the Tradeoffs That Matter | My Rock Realty",
          description: "A practical guide to Wash Park Denver homes for sale, with honest help on fit, east-versus-west differences, home types, park-adjacent tradeoffs, and whether this neighborhood is really your best match.",
          canonicalUrl: "https://myrockhomes.com/wash-park-denver-homes-for-sale/",
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
        <img src={WASHPARK_HERO_BG} alt="Washington Park in Denver, Colorado" className="absolute inset-0 w-full h-full object-cover object-center" width="1600" height="900" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="relative container py-20 sm:py-28">
          <h1 className="text-4xl sm:text-5xl font-bold text-cream mb-6 leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Wash Park Denver Homes for Sale: Fit, Feel, and the Tradeoffs That Matter
          </h1>
          <p className="text-lg text-cream/80 mb-8 leading-relaxed max-w-2xl">
            A practical guide to Wash Park — helping buyers sort the real question before they spend time on the wrong version of the search.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:rob@myrockhomes.com?subject=Wash Park Denver Consultation" className="inline-flex items-center justify-center gap-2 font-semibold rounded bg-gold text-charcoal hover:bg-yellow-400 px-7 py-4 text-[15px] sm:text-base no-underline" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Schedule a Consultation
              <ArrowRight size={18} />
            </a>
            <a href="mailto:rob@myrockhomes.com?subject=Wash Park Listings — Alert Request" className="inline-flex items-center justify-center gap-2 font-semibold rounded border-2 border-gold text-gold hover:bg-gold hover:text-charcoal px-7 py-4 text-[15px] sm:text-base no-underline" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Get Alerts for New Wash Park Homes
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Wash Park is one of those neighborhoods buyers choose early
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">A lot of Denver neighborhoods show up later in the search.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Wash Park usually shows up early.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">People know the name. They know the park. They already have a picture in their head before they look at homes here. Sometimes that picture is right. Sometimes it is doing too much work.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is why this page exists.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Not to sell you on a famous neighborhood.<br />Not to give you a polished tour.<br />And not to assume that wanting Wash Park means you want the same thing as the next buyer.</p>
          <p className="text-charcoal/80 leading-relaxed mb-4">This page is here to help you sort the real question:</p>
          <ul className="list-disc list-inside text-charcoal/80 leading-relaxed mb-5 space-y-1 pl-2">
            <li>do you want the park itself to shape daily life</li>
            <li>do you want the more established, residential feel many buyers tie to Wash Park</li>
            <li>are you using "Wash Park" broadly when the better question is east side versus west side</li>
            <li>or do you mostly want the idea of Wash Park and may end up happier in a nearby alternative</li>
          </ul>
          <p className="text-charcoal/80 leading-relaxed">That distinction matters. Buyers use "Wash Park" as one search term all the time, but the fit questions are not the same across both sides.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-cream mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            What Wash Park feels like
          </h2>
          <p className="text-cream/80 leading-relaxed mb-5">Wash Park is one of those neighborhoods where the park changes the whole search.</p>
          <p className="text-cream/80 leading-relaxed mb-5">That is the first thing to get right.</p>
          <p className="text-cream/80 leading-relaxed mb-5">The park is not just something nice nearby. It is a big part of why buyers stay interested here. It is also part of why some buyers will put up with housing tradeoffs here that they would reject in other parts of Denver.</p>
          <p className="text-cream/80 leading-relaxed mb-5">But the search is not just "park or no park."</p>
          <p className="text-cream/80 leading-relaxed mb-5">It is also about which version of Wash Park you actually mean.</p>
          <p className="text-cream/80 leading-relaxed mb-5">Some buyers are pulled to the more established, more traditional side of the search, especially on the east side. Others end up preferring the west side once access, housing mix, and how they actually move through the area start to matter more. That split shows up early, even when buyers start by calling it all one neighborhood.</p>
          <p className="text-cream/80 leading-relaxed mb-5">That is what makes Wash Park work.</p>
          <p className="text-cream/80 leading-relaxed">It has a strong identity. It just does not all feel the same.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Why buyers keep Wash Park in play when the search gets real
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">Buyers keep Wash Park in play because the name usually points to something real.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">The park matters. The neighborhood feel matters. And once Wash Park gets into the search, things usually get more specific.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">For the right buyer, that is a real advantage.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Wash Park stays strong when you want a recognizable Denver neighborhood, want the park to matter, and are okay letting the search narrow around fit instead of trying to force a perfect house on paper. It also stays strong when you are willing to sort the more classic east-side pull from the west-side version instead of treating the whole area like one clean answer.</p>
          <p className="text-charcoal/80 leading-relaxed">It gets weaker when the name is doing more work than the reality.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal/5">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Who Wash Park tends to fit
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">Wash Park tends to fit buyers who want one neighborhood choice to carry real weight.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">It tends to fit people who care about neighborhood feel, not just square footage. It fits buyers who like the idea of living in a more established part of Denver and who want the park itself to be part of daily life, not just a nice extra. It also fits buyers who can handle the fact that this is often not the cleanest path to "best value" if value only means house size, ease, or newer finishes.</p>
          <p className="text-charcoal/80 leading-relaxed mb-4">It usually makes the most sense for buyers who are sorting questions like:</p>
          <ul className="list-disc list-inside text-charcoal/80 leading-relaxed mb-5 space-y-1 pl-2">
            <li>do I want the park to be part of everyday life or just nearby</li>
            <li>do I want a more established neighborhood feel even if that means more tradeoffs on the house</li>
            <li>do I want the east-side version of Wash Park, the west-side version, or am I using the name too broadly</li>
            <li>do I care more about the identity of the neighborhood or the cleanest housing search</li>
            <li>am I okay with older housing, tighter lots, or a less simple ownership path if the neighborhood itself feels right</li>
          </ul>
          <p className="text-charcoal/80 leading-relaxed">Those questions do a lot of work here.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Who may not love it
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">Wash Park is not the right answer just because it is one of the first names buyers know.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">If what you really want is a newer-home pattern, the easiest parking and storage setup, the simplest path to a detached home without tension, or a search that feels more straightforward from the start, Wash Park may not be your cleanest move.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">It can also frustrate buyers who want the neighborhood name but do not actually want the tradeoffs that tend to come with it.</p>
          <p className="text-charcoal/80 leading-relaxed">That is a common mistake here.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal/5">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            What the search usually turns into
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">Wash Park is one of those neighborhoods where the name gets you in the door, but the real decision usually comes later. Buyers often start broad and then realize they are not choosing one clean thing at all. They are choosing how much of the Wash Park identity they want, what kind of housing they are actually willing to own, and which tradeoffs still feel worth it once the search gets serious.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            The tradeoffs are the whole point
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">There is no clean version of Wash Park without tradeoffs.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is not a knock on the neighborhood. It is part of why it works for the buyers it works for.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">You may trade house ease for neighborhood pull. You may trade newer finishes for a more established setting. You may trade lot size or storage for location. You may decide the park-centered lifestyle matters enough that you are willing to accept more upkeep or a tighter overall fit. You may also decide that the name is strong, but the practical fit is not.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is a good outcome too.</p>
          <p className="text-charcoal/80 leading-relaxed">Wash Park usually rewards buyers who stop trying to win every category and start deciding which tradeoffs they actually respect.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal/5">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Wash Park vs nearby alternatives
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">This is where the search usually gets honest.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Sometimes the real question is <strong>Wash Park versus Platt Park</strong>. If the strongest pull is the park itself and the more classic Wash Park identity, Wash Park stays central. If you want a strong neighborhood feel without quite as much pressure from the name or the park-centered pull, Platt Park can become part of the comparison.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Sometimes the real question is <strong>Wash Park versus Cherry Creek</strong>. If you want a more established residential neighborhood and a park-centered rhythm, Wash Park usually holds a different kind of appeal. If your priorities lean more toward a more polished, convenience-first, lock-and-leave-friendly version of central Denver, the search may tilt elsewhere.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Sometimes the real question is <strong>east side versus west side of the Wash Park search</strong>. That is one of the most important comparisons here. Buyers often start by treating Wash Park as one answer. It usually is not. The east-side search and the west-side search can push buyers toward different conclusions once access, home type, park pull, and day-to-day movement become more real.</p>
          <p className="text-charcoal/80 leading-relaxed">Sometimes the real question is <strong>whether you want Wash Park itself or just what it represents</strong>. That is where better decisions usually start.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            What buyers tend to underestimate
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">A lot of buyers underestimate how much the Wash Park search depends on what they mean by "Wash Park."</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Some mean the east side. Some mean the west side. Some mean "somewhere near the park." Some mean a classic Denver neighborhood with identity. Those are not all the same search.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Buyers also underestimate how much the park changes what they are willing to compromise on. It is not a small amenity. It can keep buyers in the search longer than they would stay in another neighborhood with similar housing tradeoffs.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Another thing buyers underestimate is how quickly the search becomes about housing form and ownership burden. Older homes, replacements, attached options, tighter lots, parking expectations, and upkeep tolerance start mattering fast here. The neighborhood can carry some of that weight, but not for every buyer.</p>
          <p className="text-charcoal/80 leading-relaxed">That is why Wash Park usually goes best when buyers treat the name as a starting point, not the final answer.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal/5">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Buy now or rent first
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">That depends on how clear the fit already is.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">If you already know you want Wash Park specifically, understand which side of the search fits better, and are comfortable with the housing tradeoffs that usually come with it, buying may make sense now.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">If you are still sorting out whether you want Wash Park itself, whether the east-west split matters more than you expected, or whether the neighborhood identity is stronger than the practical fit, renting first may be the smarter move.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is not hesitation. That is clarity work.</p>
          <p className="text-charcoal/80 leading-relaxed">Wash Park is strong enough that buyers can talk themselves into it. Renting first can be useful if you need to know whether you love the real version of it or just the idea of it.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal/5">
        <div className="container max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Featured Wash Park Listings
          </h2>
          <BuyingBuddyWidget
            type="FeaturedGallery"
            filter="carousel:true+shapesearch:39.718320 -104.973314,39.714615 -104.958817,39.676617 -104.961897,39.689500 -104.973500,39.718320 -104.973314+mls_id:denver+listing_status:active,coming-soon+order:create_dt desc"
          />
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Wash Park Denver real estate FAQs
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
          <p className="text-charcoal/80 leading-relaxed mb-5">Wash Park is one of the strongest neighborhood names in Denver.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is exactly why buyers need to be careful with it.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">The neighborhood can absolutely be the right answer. But it works best when buyers get specific about what they mean, what kind of home they want to own here, and which tradeoffs they are actually willing to make for the park pull and the neighborhood identity.</p>
          <p className="text-charcoal/80 leading-relaxed">Get that part right, and Wash Park gets clearer fast.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Keep exploring Denver
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-6">If Wash Park is still in play, the next move is not to stay vague about it. It is to pressure-test the right comparisons.</p>
          <p className="text-charcoal/80 font-semibold mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>Explore next</p>
          <ul className="space-y-2">
            {[
              { label: "Denver homes for sale", href: "/denver-homes-for-sale" },
              { label: "Cherry Creek", href: "/cherry-creek-denver-homes-for-sale" },
              { label: "Sloan Lake", href: "/sloan-lake-denver-homes-for-sale" },
              { label: "Platt Park", href: "/platt-park-denver-homes-for-sale" },
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
            If you want help narrowing Wash Park without wasting time on the wrong version of the search, reach out.
          </p>
          <p className="text-cream/60 text-sm leading-relaxed mb-8">
            We can sort through east versus west, park pull versus practical fit, home type, upkeep tolerance, and whether Wash Park is truly your best Denver match.
          </p>
          <a href="mailto:rob@myrockhomes.com?subject=Wash Park Denver Consultation" className="inline-flex items-center justify-center gap-2 font-semibold rounded bg-gold text-charcoal hover:bg-yellow-400 px-7 py-4 text-[15px] sm:text-base no-underline" style={{ fontFamily: "'Outfit', sans-serif" }}>
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
