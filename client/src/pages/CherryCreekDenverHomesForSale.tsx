/**
 * Cherry Creek Denver Homes for Sale — My Rock Realty
 * Approved copy: cherry-creek-denver-homes-for-sale.md (Denver Cluster Source-of-Truth Package)
 * Design: Front Range Modern — matches existing site design system
 */
import { useState, useEffect } from "react";
import BuyingBuddyWidget from "@/components/BuyingBuddyWidget";
import SeoHead from "@/components/seo/SeoHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { ArrowRight, ArrowLeft, Phone, Mail, Globe, ChevronDown } from "lucide-react";

const CHERRY_CREEK_HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/cherry-creek-denver-hero_a3f1c2d5.jpg";

const faqContent = [
  {
    question: "Is Cherry Creek one neighborhood or several different searches?",
    answer: "Buyers often use \"Cherry Creek\" as one search term, but the area breaks down more than that in practice. That is one reason the search usually gets more specific once it gets real.",
  },
  {
    question: "What usually narrows a Cherry Creek search fastest?",
    answer: "The Cherry Creek North versus broader-area question, home type, and whether easier ownership really matters more than space or a more house-first search.",
  },
  {
    question: "Is Cherry Creek mostly a condo or attached-living neighborhood?",
    answer: "It often pulls buyers toward condo, attached, or lower-maintenance options, but that is exactly why home type should get clear early rather than late.",
  },
  {
    question: "What is the biggest mistake buyers make in Cherry Creek?",
    answer: "Treating the name like the fit is already settled.",
  },
  {
    question: "How do I know if I want Cherry Creek or just access to it?",
    answer: "Ask whether you want the actual neighborhood identity and ownership pattern, or just workable proximity to this part of Denver. That answer usually changes the search fast.",
  },
  {
    question: "Does Cherry Creek make more sense than Wash Park for lock-and-leave living?",
    answer: "For many buyers, it can. But that only helps if the more convenience-led and more dialed-in feel is actually what you want.",
  },
  {
    question: "Should I buy in Cherry Creek now or rent first?",
    answer: "Buy if the fit is already clear. Rent first if you still need to sort out whether you want the real day-to-day version of Cherry Creek or just the idea of it.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Denver Homes for Sale", url: "/denver-homes-for-sale" },
  { label: "Cherry Creek", url: "/cherry-creek-denver-homes-for-sale" },
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

export default function CherryCreekDenverHomesForSale() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="hub-page min-h-screen bg-warm-white" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
      <SeoHead
        metadata={{
          title: "Cherry Creek Denver Homes for Sale: Fit, Feel, and the Tradeoffs That Matter | My Rock Realty",
          description: "A practical guide to Cherry Creek Denver homes for sale — honest help on fit, Cherry Creek North vs broader area, ownership patterns, and whether this neighborhood is really your best match.",
          canonicalUrl: "https://myrockhomes.com/cherry-creek-denver-homes-for-sale/",
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
        <img src={CHERRY_CREEK_HERO_BG} alt="Cherry Creek neighborhood in Denver, Colorado" className="absolute inset-0 w-full h-full object-cover object-center" width="1600" height="900" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="relative container py-20 sm:py-28">
          <h1 className="text-4xl sm:text-5xl font-bold text-cream mb-6 leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Cherry Creek Denver Homes for Sale: Fit, Feel, and the Tradeoffs That Matter
          </h1>
          <p className="text-lg text-cream/80 mb-8 leading-relaxed max-w-2xl">
            A practical guide to Cherry Creek — helping buyers sort the real question before they spend time on the wrong version of the search.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:rob@myrockhomes.com?subject=Cherry Creek Denver Consultation" className="inline-flex items-center justify-center gap-2 font-semibold rounded bg-gold text-charcoal hover:bg-yellow-400 px-7 py-4 text-[15px] sm:text-base no-underline" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Schedule a Consultation
              <ArrowRight size={18} />
            </a>
            <a href="mailto:rob@myrockhomes.com?subject=Cherry Creek Listings — Alert Request" className="inline-flex items-center justify-center gap-2 font-semibold rounded border-2 border-gold text-gold hover:bg-gold hover:text-charcoal px-7 py-4 text-[15px] sm:text-base no-underline" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Get Alerts for New Cherry Creek Homes
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Cherry Creek is one of those neighborhoods buyers choose for a reason
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">A lot of Denver neighborhood searches start with a feeling.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Cherry Creek usually starts with something more specific.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Buyers come here because they want a more controlled version of central Denver. They want convenience. They want something that feels a little more put-together. They want a home that asks a little less from them. Sometimes they want Cherry Creek North specifically. Sometimes they are using the broader name and need to sort it out once the search gets real.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is why this page exists.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Not to sell you on a strong neighborhood name.<br />Not to assume every Cherry Creek buyer wants the same thing.<br />And not to skip the part where the search usually gets more specific.</p>
          <p className="text-charcoal/80 leading-relaxed mb-4">This page is here to help you sort the real question:</p>
          <ul className="list-disc list-inside text-charcoal/80 leading-relaxed mb-5 space-y-1 pl-2">
            <li>do you want Cherry Creek North specifically, or are you using the broader name</li>
            <li>do you want a more convenience-led version of central Denver</li>
            <li>are you open to condo, attached, or lower-maintenance living if it gets you the right location</li>
            <li>or do you mostly want access to this part of Denver without needing the full Cherry Creek identity</li>
          </ul>
          <p className="text-charcoal/80 leading-relaxed">That distinction matters. Denver's planning framework treats Cherry Creek as an area with distinct subareas, including Cherry Creek North and Cherry Creek East, rather than one uniform neighborhood pattern.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-cream mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            What Cherry Creek feels like
          </h2>
          <p className="text-cream/80 leading-relaxed mb-5">Cherry Creek feels more controlled than a lot of Denver neighborhood searches.</p>
          <p className="text-cream/80 leading-relaxed mb-5">That is one of the first things buyers usually notice.</p>
          <p className="text-cream/80 leading-relaxed mb-5">The search here tends to pull people who want a more streamlined version of central Denver. It keeps their attention because living here can feel less complicated than it does in some of the more house-first or park-first neighborhoods nearby. That is especially true in and around Cherry Creek North, where the district has its own zoning and design framework.</p>
          <p className="text-cream/80 leading-relaxed mb-5">But the search is not just "Cherry Creek or not."</p>
          <p className="text-cream/80 leading-relaxed mb-5">It is also about which version of Cherry Creek you actually mean.</p>
          <p className="text-cream/80 leading-relaxed mb-5">Some buyers are really reacting to Cherry Creek North. Others are using "Cherry Creek" more broadly and need to sort Cherry Creek North, Cherry Creek East, and the surrounding area more carefully once home type, ownership pattern, and day-to-day life become more real.</p>
          <p className="text-cream/80 leading-relaxed mb-5">That is what makes Cherry Creek strong.</p>
          <p className="text-cream/80 leading-relaxed">It has a real identity. It just does not all pull in the same way.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Why buyers keep Cherry Creek in play when the search gets real
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">Buyers keep Cherry Creek in play because the neighborhood name usually points to something practical, not just aspirational.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Convenience matters here. Ownership pattern matters here. The search often gets more specific, not less, once buyers realize they are not just choosing a location. They are choosing how they want daily life to work.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">For the right buyer, that is a real advantage.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Cherry Creek stays strong when you want central Denver with less housing friction than some older neighborhood searches can bring. It stays strong when you care about a home that asks a little less from you. It also stays strong when you are willing to sort the broader Cherry Creek name into the part of the area that actually fits instead of assuming the whole search works the same way.</p>
          <p className="text-charcoal/80 leading-relaxed">It gets weaker when the name is doing more work than the fit.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal/5">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Who Cherry Creek tends to fit
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">Cherry Creek tends to fit buyers who want convenience to be part of the value, not just an added bonus.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">It tends to fit people who care about centrality, a lower-friction daily pattern, and an ownership setup that feels a little less hands-on. It fits buyers who like the idea of a neighborhood that feels established and recognized, but who do not necessarily want the same ownership burden or housing unpredictability that can come with other Denver searches. It also tends to fit people who are open to attached living, condo living, or other lower-maintenance ownership patterns if that gets them the version of Denver they actually want.</p>
          <p className="text-charcoal/80 leading-relaxed mb-4">It usually makes the most sense for buyers sorting questions like:</p>
          <ul className="list-disc list-inside text-charcoal/80 leading-relaxed mb-5 space-y-1 pl-2">
            <li>do I want a more convenience-led version of central Denver</li>
            <li>do I care more about ease of ownership than maximizing house size</li>
            <li>am I really looking for Cherry Creek North, or am I using Cherry Creek broadly</li>
            <li>do I want a more put-together daily pattern more than I want a looser neighborhood feel</li>
            <li>am I open to condo, attached, or lower-maintenance living if the location does more work for me</li>
          </ul>
          <p className="text-charcoal/80 leading-relaxed">Those questions usually matter here more than they do in a neighborhood where the main pull is a park, a house type, or a more rooted residential feel.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Who may not love it
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">Cherry Creek is not automatically the right answer just because it is a strong name.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">If what you really want is a more casual neighborhood rhythm, a more house-first search, a simpler path to detached living, or a less boxed-in version of central Denver, Cherry Creek may not be your cleanest fit.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">It can also frustrate buyers who like the idea of Cherry Creek more than the actual ownership pattern that often comes with it.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">A buyer may love the name, the centrality, or the easier day-to-day pattern, then realize they do not actually want the tradeoffs that come with a search that often leans more attached, more shared, or more price-sensitive than they first expected. Another buyer may start with Cherry Creek when what they really want is proximity, not the neighborhood itself.</p>
          <p className="text-charcoal/80 leading-relaxed">That is not a miss. That is just a clearer answer.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal/5">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            What the search usually turns into
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">This is where the Cherry Creek search starts doing real work.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">At first, buyers think they are choosing a neighborhood.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Pretty quickly, they are usually choosing between versions of convenience, versions of ownership, and versions of central Denver.</p>
          <p className="text-charcoal/80 leading-relaxed mb-4">The search tends to narrow around questions like:</p>
          <ul className="list-disc list-inside text-charcoal/80 leading-relaxed mb-5 space-y-1 pl-2">
            <li>Cherry Creek North or the broader Cherry Creek area</li>
            <li>condo or attached living versus a more house-driven search</li>
            <li>an easier daily pattern or a more relaxed neighborhood feel</li>
            <li>a home that is simpler to own or more space and separation somewhere else</li>
            <li>recognized neighborhood name or better overall fit nearby</li>
          </ul>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            The tradeoffs are the whole point
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">There is no clean version of Cherry Creek without tradeoffs.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is not a knock on the neighborhood. It is part of why it works for the buyers it works for.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">You may trade more space for a more central and lower-friction location. You may trade a house-first search for a more defined daily pattern. You may trade detached living for something that asks less from you. You may decide the convenience and centrality matter enough that the ownership tradeoffs are worth it. You may also decide the opposite.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is a good outcome too.</p>
          <p className="text-charcoal/80 leading-relaxed">Cherry Creek usually rewards buyers who stop trying to win every category and start deciding which tradeoffs they actually respect.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal/5">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Cherry Creek vs nearby alternatives
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">This is where the search usually gets honest.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Sometimes the real question is <strong>Cherry Creek versus Wash Park</strong>. If you want a more established residential neighborhood and a park-centered rhythm, Wash Park usually holds a different kind of appeal. If your priorities lean more toward a more polished, convenience-first, lock-and-leave-friendly version of central Denver, the search may tilt toward Cherry Creek.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Sometimes the real question is <strong>Cherry Creek versus nearby access without Cherry Creek itself</strong>. A lot of buyers do not need Cherry Creek as much as they think they do. They need workable access to this part of Denver, not necessarily the full neighborhood identity or ownership pattern that comes with it. Once that becomes clear, the search often gets better fast.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Sometimes the real question is <strong>Cherry Creek North versus the broader Cherry Creek search</strong>. That is one of the most important comparisons here. Buyers often treat Cherry Creek like one answer. It usually is not. Buyers usually make better decisions once they stop treating the whole area like one housing pattern.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            What buyers tend to underestimate
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">A lot of buyers underestimate how much the Cherry Creek search depends on what they mean by "Cherry Creek."</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Some mean Cherry Creek North. Some mean the broader neighborhood. Some mean a central location with less friction. Some mean a more put-together version of Denver living that asks a little less from them. Those are not all the same search.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Buyers also underestimate how much the area pushes the search toward ownership pattern. In some neighborhoods, the question stays more about the house. In Cherry Creek, the search often becomes about whether the location and daily life matter enough to shape what kind of property you are willing to own.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">Another thing buyers underestimate is how defined parts of the area really are. Cherry Creek North is not just a name buyers know. That helps explain why the search can feel more controlled here than in other Denver neighborhoods.</p>
          <p className="text-charcoal/80 leading-relaxed">That is why Cherry Creek usually goes best when buyers treat the name as a starting point, not the answer.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal/5">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Buy now or rent first
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-5">That depends on how clear the fit already is.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">If you already know you want Cherry Creek specifically, understand whether you mean Cherry Creek North or the broader area, and are comfortable with the ownership tradeoffs that usually come with the neighborhood, buying may make sense now.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">If you are still sorting out whether you want Cherry Creek itself, whether this kind of daily pattern matters enough, or whether the name is stronger than the real fit, renting first may be the smarter move.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is not hesitation. That is clarity work.</p>
          <p className="text-charcoal/80 leading-relaxed">Cherry Creek is strong enough that buyers can talk themselves into it. Renting first can help if you need to know whether you want the real version of the neighborhood or just the idea of it.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-charcoal/5">
        <div className="container max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Featured Cherry Creek Listings
          </h2>
          <BuyingBuddyWidget
            type="FeaturedGallery"
            filter="carousel:true+shapesearch:39.7256 -105.0060,39.7256 -104.9405,39.7110 -104.9405,39.7110 -105.0060,39.7256 -105.0060+mls_id:denver+listing_status:active,coming-soon+order:create_dt desc"
          />
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Cherry Creek Denver real estate FAQs
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
          <p className="text-charcoal/80 leading-relaxed mb-5">Cherry Creek is one of the strongest neighborhood names in Denver.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">That is exactly why buyers need to be careful with it.</p>
          <p className="text-charcoal/80 leading-relaxed mb-5">The neighborhood can absolutely be the right answer. But it works best when buyers get specific about what they mean, what kind of property they want to own here, and which tradeoffs they are actually willing to make for a more central, lower-friction, and more defined version of Denver living.</p>
          <p className="text-charcoal/80 leading-relaxed">Get that part right, and Cherry Creek gets clearer fast.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-warm-white">
        <div className="container max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Keep exploring Denver
          </h2>
          <p className="text-charcoal/80 leading-relaxed mb-6">If Cherry Creek is still in play, the next move is not to stay broad about it. It is to pressure-test the right comparisons.</p>
          <p className="text-charcoal/80 font-semibold mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>Explore next</p>
          <ul className="space-y-2">
            {[
              { label: "Denver homes for sale", href: "/denver-homes-for-sale" },
              { label: "Wash Park", href: "/wash-park-denver-homes-for-sale" },
              { label: "LoHi", href: "/lohi-denver-homes-for-sale" },
              { label: "Central Park", href: "/central-park-denver-homes-for-sale" },
              { label: "Sloan Lake", href: "/sloan-lake-denver-homes-for-sale" },
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
            If you want help narrowing Cherry Creek without wasting time on the wrong version of the search, reach out.
          </p>
          <p className="text-cream/60 text-sm leading-relaxed mb-8">
            We can sort through Cherry Creek North versus the broader area, ownership pattern, lock-and-leave fit, centrality, and whether Cherry Creek is truly your best Denver match.
          </p>
          <a href="mailto:rob@myrockhomes.com?subject=Cherry Creek Denver Consultation" className="inline-flex items-center justify-center gap-2 font-semibold rounded bg-gold text-charcoal hover:bg-yellow-400 px-7 py-4 text-[15px] sm:text-base no-underline" style={{ fontFamily: "'Outfit', sans-serif" }}>
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
