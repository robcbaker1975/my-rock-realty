/**
 * OldTownFortCollinsRealEstate — My Rock Realty
 * Route: /old-town-fort-collins-real-estate
 * Source: fort_collins_cluster_package_v1 / approved_old_town_fort_collins.md
 */
import { useState } from "react";
import SeoHead from "@/components/seo/SeoHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/denver-rowhouses-hero_2f59d4ac.jpg";

const faqContent = [
  {
    "question": "Why do buyers keep Old Town in the search once they start spending time there?",
    "answer": "Because Old Town usually feels like the center of Fort Collins in a way the broader city page cannot fully capture on its own."
  },
  {
    "question": "What kind of buyer usually chooses Old Town?",
    "answer": "Usually someone who wants a more central, more established, more rooted version of the Fort Collins decision."
  },
  {
    "question": "What kind of buyer usually moves on from Old Town?",
    "answer": "Usually someone who wants easier, newer, quieter, or less of the decision tied to the middle of the city."
  },
  {
    "question": "Is Old Town just the best part of Fort Collins?",
    "answer": "Usually no. It is a different fit, not a universal upgrade."
  },
  {
    "question": "When does Old Town make more sense than the rest of Fort Collins?",
    "answer": "When the buyer wants the center of the city to matter more than having the broadest range of options."
  },
  {
    "question": "When do newer parts of Fort Collins make more sense than Old Town?",
    "answer": "When the buyer wants a cleaner, more straightforward, or less setting-driven search."
  },
  {
    "question": "Is Old Town too specific to deserve its own page?",
    "answer": "No. It is the clearest first internal Fort Collins decision after the city-level hub."
  },
  {
    "question": "Should I decide on Fort Collins first or Old Town first?",
    "answer": "Usually decide on Fort Collins first, then use Old Town to sort out whether the central core is actually the part that fits."
  },
  {
    "question": "Is Old Town trying to replace the Fort Collins hub?",
    "answer": "No. The Fort Collins hub owns the city-level decision. Old Town owns a more specific internal decision."
  },
  {
    "question": "Is this page trying to say Old Town is better than the rest of Fort Collins?",
    "answer": "No. It is here to help you figure out whether Old Town fits you better."
  }
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Fort Collins", url: "/fort-collins-co-homes-for-sale" },
  { label: "Old Town Fort Collins", url: "/old-town-fort-collins-real-estate" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function OldTownFortCollinsRealEstate() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <SeoHead
        metadata={{
          title: "Old Town Fort Collins Real Estate | Homes & Living Guide",
          description: "Explore Old Town Fort Collins real estate and see whether central, established Fort Collins fits better than newer or less central options.",
          canonicalUrl: "https://myrockhomes.com/old-town-fort-collins-real-estate/",
          breadcrumbs: breadcrumbItems,
        }}
        schema={faqSchema ? [faqSchema] : []}
      />
      <div className="bg-charcoal">
        <div className="container py-3">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>
      <section className="relative bg-charcoal overflow-hidden">
        <img src={HERO_BG} alt="Living in Old Town Fort Collins: Real Estate, Tradeoffs, and What It’s Like" className="absolute inset-0 w-full h-full object-cover object-center" width="1600" height="900" fetchPriority="high" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/90" />
        <div className="container relative z-10 py-16 sm:py-20 md:py-24">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cream mb-6 leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Old Town Fort Collins Real Estate
            </h1>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              What Old Town feels like
            </h2>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Old Town is a narrower Fort Collins decision, not just a smaller version of the same search. Buyers who end up here are usually looking for a more central, established, identity-driven part of the city rather than the easier, newer, or more edge-of-town version of Fort Collins. This page is here to help you figure out whether that specific version of the move fits you.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">That helps some buyers a lot.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Once you are here, the difference from the broader Fort Collins search usually gets clear pretty quickly. This is not the newer edge of town. It is not the “just give me the cleanest lane” version of the search. It is not the part of the city buyers choose because it feels easiest.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">It feels older.  
More central.  
More tied into the middle of things.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">For the right buyer, that is the draw.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Old Town Square matters here. Oak Street Plaza matters too. Not because this page needs tourist stop names. Because those public spaces help explain why Old Town feels more gathered, more pedestrian, and more obviously centered than the broader Fort Collins map.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">The trolley matters for the same reason.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">It tells you something about how Old Town connects back into the city’s historic core and why this part of Fort Collins feels more like the middle than just another neighborhood.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Why Old Town stays in the conversation
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Old Town stays in the conversation because it gives buyers something the broader Fort Collins page cannot fully solve by itself.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">It gives them the more central version of the Fort Collins decision.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">That matters.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Some buyers like Fort Collins in general, but the search still feels too open. They know they want the city. They just want the more established, more rooted, more setting-driven part of it.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">That is where Old Town starts making sense.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">It also stays in the conversation because it is one of the clearest internal decisions inside Fort Collins. A buyer may not want Fort Collins broadly. Or they may realize they do want Fort Collins, but specifically this part of it.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">That is why this page belongs in the cluster.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Who Old Town tends to fit
            </h2>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Old Town usually fits buyers who want the center of the city to matter.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Usually that means buyers who want:
- a more established part of Fort Collins
- a more central feel
- less of an edge-of-town search
- a place where the setting matters as much as the house
- a stronger sense of being tied into the middle of the city
- a more lived-in, less newly-built feel</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">A lot of buyers who stay serious about Old Town are not looking for the easiest option.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">They are looking for the version of Fort Collins that feels most rooted.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">That is a different kind of fit.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Who may not love Old Town
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Old Town may not be the right fit if what you really want is easier, newer, quieter, or simpler.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">That can push buyers back toward the broader Fort Collins search outside the core.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">It can also push them toward Windsor, Timnath, Wellington, or Loveland if the real issue is not Old Town at all, but that they do not actually want this kind of central Fort Collins decision.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Old Town is usually strongest when the center is part of the reason the buyer is choosing the area.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">If that does not matter much, the pull of Old Town can fade pretty quickly.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Parking is part of that reality too.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Old Town is the part of Fort Collins where downtown friction matters more than it does in the broader city search, and some buyers are fine with that while others are not.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              What the home search usually turns into
            </h2>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">This is where Old Town gets useful.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">At first, buyers often think they are just deciding whether they like Fort Collins.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Pretty quickly, it usually turns into one of these:</p>
            <ul className="space-y-3 mb-8">
              <li key={0} className="flex items-start gap-3 text-charcoal/80"><ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" /><span>Old Town vs the rest of Fort Collins** if the real question is central established feel versus a broader city search</span></li>
              <li key={1} className="flex items-start gap-3 text-charcoal/80"><ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" /><span>Old Town vs newer parts of Fort Collins** if the real question is character and location versus ease and newer housing</span></li>
              <li key={2} className="flex items-start gap-3 text-charcoal/80"><ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" /><span>Old Town vs Windsor or Timnath** if the real question is central city feel versus cleaner town or growth-path simplicity</span></li>
              <li key={3} className="flex items-start gap-3 text-charcoal/80"><ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" /><span>Old Town vs Loveland** if the real question is still city identity, but maybe not this exact one</span></li>
            </ul>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">That is why this page exists.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">It is not here to cover the whole city again.  
It is here because Old Town solves a more specific Fort Collins decision.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              The tradeoffs are the whole point
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Like anywhere, Old Town has tradeoffs.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">One is that the more central and established the setting feels, the less simple the search usually gets. For some buyers, that is exactly the point. For others, it starts to feel like more than they want to manage.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Another is that Old Town works best when the setting matters to you. If you mainly care about the broadest number of easier options, the pull of Old Town can fade pretty quickly.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">There is also a difference between a place feeling rooted and a place feeling easy.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Old Town usually does very well on rooted.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">That is a strength.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">But it is not usually the part of Fort Collins buyers choose because it feels the most straightforward.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">That does not make it worse.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">It just makes it specific.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Old Town vs the rest of Fort Collins
            </h2>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">### Old Town vs the rest of Fort Collins
Old Town usually makes more sense when the buyer wants the center of the city to matter more. The broader Fort Collins search usually makes more sense when the buyer wants more range, more flexibility, or less of the decision tied to the older core.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">### Old Town vs newer parts of Fort Collins
Old Town usually makes more sense when the buyer wants a more established, more central feel. Newer parts of Fort Collins usually make more sense when the buyer wants a cleaner, easier, more straightforward search.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">### Old Town vs Windsor or Timnath
Old Town usually makes more sense when the buyer wants a more central, more rooted part of Fort Collins. Windsor or Timnath usually make more sense when the buyer wants a cleaner outside-the-core path.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">### Old Town vs Loveland
Old Town usually stays stronger when the buyer wants this particular version of Fort Collins. Loveland usually gets stronger when the buyer still wants a city decision, but not this exact one.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              What people tend to underestimate
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">People often underestimate how much Old Town changes the Fort Collins decision.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">They can think of it as just a more specific part of the same map.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">That misses it.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Old Town works for buyers who want the center to matter. They do not just want Fort Collins in general. They want the part of Fort Collins that feels most tied to the middle of the city and most connected to the place itself.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">That is usually what starts getting clearer once buyers stop treating it like just another neighborhood and start treating it like its own fit decision.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Buy now or rent first
            </h2>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">This usually comes down to whether you have answered the setting-fit question yet.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">If you already know you want the more central, more established version of Fort Collins, buying can make sense once the right house and numbers line up.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">If you still are not sure whether you want Old Town specifically or just Fort Collins more generally, renting first can make a lot of sense.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Not because renting is automatically smarter.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Because clarity is.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">A short rent-first period can help when the real issue is not whether you want Fort Collins.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">It is whether you want <strong>Old Town specifically</strong>.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Final thoughts
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Old Town usually works best for buyers who want the center of Fort Collins to matter.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Not just the city.  
Not just the house.  
The center.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">If you want a more established, more central, more rooted version of Fort Collins, Old Town deserves a serious look.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">If that does not sound like what you want, that is useful too.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">It usually means the right next step is not to force Old Town to fit.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">It is to compare it honestly against the rest of Fort Collins and the nearby paths buyers usually weigh next.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-10" style={{ fontFamily: "'Outfit', sans-serif" }}>FAQ</h2>
          </motion.div>
          <div className="space-y-2">
            {faqContent.map((item, idx) => (
              <motion.div key={idx} initial="hidden" whileInView="visible" variants={fadeUp} className="bg-white rounded-lg border border-charcoal/10">
                <button onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)} className="w-full flex items-center justify-between px-6 py-5 text-left gap-4">
                  <h3 className="text-base font-semibold text-charcoal leading-snug" style={{ fontFamily: "'Outfit', sans-serif" }}>{item.question}</h3>
                  <ChevronDown size={20} className={`text-gold flex-shrink-0 transition-transform ${expandedFaq === idx ? "rotate-180" : ""}`} />
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 pb-6 border-t border-charcoal/10 text-charcoal/80 leading-relaxed">{item.answer}</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-2xl font-bold text-cream mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>Still sorting out the right fit?</h2>
            <p className="text-lg text-cream/80 mb-8 leading-relaxed">A lot of buyers start with the house first. What usually helps more is getting clear on which place fits the way you want everyday life to work.</p>
            <div className="space-y-3 mb-10">
              {[
                { label: "Talk to Rob About the Right Fit →", href: "/#contact" },
                { label: "Back to Fort Collins Hub →", href: "/fort-collins-co-homes-for-sale" },
              ].map((link, idx) => (
                <a key={idx} href={link.href} className="flex items-center gap-2 text-gold hover:text-gold/80 transition-colors font-semibold text-lg">
                  <ArrowRight size={16} />{link.label}
                </a>
              ))}
            </div>
            <h2 className="text-2xl font-bold text-cream mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>Compare nearby</h2>
            <div className="space-y-3 mb-10">
              {[
                { label: "Midtown Fort Collins →", href: "/midtown-fort-collins-real-estate" },
        { label: "Harmony Fort Collins →", href: "/harmony-fort-collins-real-estate" },
              ].map((link, idx) => (
                <a key={idx} href={link.href} className="flex items-center gap-2 text-gold hover:text-gold/80 transition-colors font-semibold text-lg">
                  <ArrowRight size={16} />{link.label}
                </a>
              ))}
            </div>
            <h2 className="text-2xl font-bold text-cream mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>Keep exploring</h2>
            <div className="space-y-3">
              {[
                { label: "Windsor →", href: "/windsor-co-real-estate" },
        { label: "Timnath →", href: "/timnath-co-real-estate" },
        { label: "Loveland →", href: "/loveland-co-homes-for-sale" },
        { label: "Wellington →", href: "/wellington-co-real-estate" },
        { label: "Colorado Home Buying Workshop →", href: "/colorado-home-buying-workshop" },
              ].map((link, idx) => (
                <a key={idx} href={link.href} className="flex items-center gap-2 text-gold hover:text-gold/80 transition-colors font-semibold text-lg">
                  <ArrowRight size={16} />{link.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
