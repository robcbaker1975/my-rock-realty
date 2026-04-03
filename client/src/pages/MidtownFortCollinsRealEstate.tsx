/**
 * MidtownFortCollinsRealEstate — My Rock Realty
 * Route: /midtown-fort-collins-real-estate
 * Source: fort_collins_cluster_package_v1 / approved_midtown_fort_collins.md
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
    "question": "Why do buyers keep Midtown in the search once they start driving it?",
    "answer": "Because Midtown usually feels central, connected, and easier to picture in everyday life than the broader city page can capture by itself."
  },
  {
    "question": "What kind of buyer usually chooses Midtown?",
    "answer": "Usually someone who wants central Fort Collins to matter, but does not need the decision to be all about the Old Town core."
  },
  {
    "question": "What kind of buyer usually moves on from Midtown?",
    "answer": "Usually someone who wants either the stronger historic-core feel of Old Town or a cleaner outside-city path."
  },
  {
    "question": "Is Midtown just a less interesting version of Old Town?",
    "answer": "Usually no. It is a different fit. Old Town is more core-driven. Midtown is more about central convenience and everyday usability."
  },
  {
    "question": "When does Midtown make more sense than Old Town?",
    "answer": "When the buyer wants centrality and access, but not the whole decision tied to the older downtown core."
  },
  {
    "question": "When does Harmony or southeast Fort Collins make more sense than Midtown?",
    "answer": "When the buyer wants a more access-driven part of Fort Collins and a little less central-city feel."
  },
  {
    "question": "Is Midtown too broad to deserve its own page?",
    "answer": "No. Midtown solves a real internal Fort Collins decision that sits between Old Town and the broader city search."
  },
  {
    "question": "Should I decide on Fort Collins first or Midtown first?",
    "answer": "Usually decide on Fort Collins first, then use Midtown to figure out whether the more central, more connected part of the city is the part that fits."
  },
  {
    "question": "Is Midtown trying to replace the Fort Collins hub?",
    "answer": "No. The Fort Collins hub owns the city-level decision. Midtown owns a more specific internal decision."
  },
  {
    "question": "Is this page trying to say Midtown is better than the rest of Fort Collins?",
    "answer": "No. It is here to help you figure out whether Midtown fits you better."
  }
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Fort Collins", url: "/fort-collins-co-homes-for-sale" },
  { label: "Midtown Fort Collins", url: "/midtown-fort-collins-real-estate" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function MidtownFortCollinsRealEstate() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <SeoHead
        metadata={{
          title: "Living in Midtown Fort Collins: Real Estate, Tradeoffs, and What It’s Like",
          description: "Thinking about Midtown Fort Collins? Here is what Midtown actually feels like, who it fits, where it gets harder, and how it compares with Old Town, the rest of Fort Collins, and nearby options.",
          canonicalUrl: "https://myrockhomes.com/midtown-fort-collins-real-estate/",
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
        <img src={HERO_BG} alt="Living in Midtown Fort Collins: Real Estate, Tradeoffs, and What It’s Like" className="absolute inset-0 w-full h-full object-cover object-center" width="1600" height="900" fetchPriority="high" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/90" />
        <div className="container relative z-10 py-16 sm:py-20 md:py-24">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cream mb-6 leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Living in Midtown Fort Collins: Real Estate, Tradeoffs, and What It’s Like
            </h1>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              What Midtown feels like
            </h2>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Midtown usually feels like the part of Fort Collins where daily life gets easier to picture fast.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">That helps.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">This is not the older downtown core. It is also not the newer outer-edge version of the city. It usually feels more like the middle of normal life in Fort Collins — central enough to stay connected, practical enough to keep movement simple, and established enough that it does not feel like you are buying into a place that is still trying to figure itself out.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">South College is a big part of that. So is the Foothills area. So is the fact that Midtown is tied closely to one of the city’s main north-south corridors and to the Mason/MAX corridor.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Put that together, and Midtown usually feels central, useful, and easier to sort out than the whole city at once.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">For the right buyer, that is the draw.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Why Midtown stays in the conversation
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Midtown stays in the conversation because it gives buyers a more specific internal Fort Collins decision that is easier to sort out than the whole city at once.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">That matters.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Some buyers like Fort Collins broadly, but the city-level page still feels too open. Old Town may feel too tied to the core. The outer parts of town may feel too edge-oriented. Midtown ends up being the part of the search where the buyer realizes they want centrality and convenience more than they want either the strongest historic-core feel or the broadest possible city map.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">That is where Midtown starts making sense.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Who Midtown tends to fit
            </h2>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Midtown usually fits buyers who want central Fort Collins to matter, but do not need the decision to be all about Old Town.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Usually that means buyers who want:
- a more central part of Fort Collins
- easier day-to-day access and movement
- a setting that feels connected without feeling too core-driven
- established areas instead of only outer-edge growth
- a search that feels more practical than romantic
- a part of the city that makes sense pretty quickly once they drive it</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">A lot of buyers who stay serious about Midtown are not chasing the most dramatic version of Fort Collins.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">They are looking for the version that feels easiest to live with.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">That is a real lane.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Who may not love Midtown
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Midtown may not be the right fit if what you really want is either end of the spectrum.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">If you want the strongest older-core, central-city, setting-driven version of Fort Collins, Old Town can start looking better.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">If you want newer edges, a cleaner outside-the-core path, or a simpler nearby-town decision, Midtown can start to feel like an in-between answer you do not actually want.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">That can push buyers toward Old Town, the broader Fort Collins search, or outside-city comparisons like Windsor or Timnath depending on what the real issue is.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              What the home search usually turns into
            </h2>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">This is where Midtown gets useful.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">At first, buyers often think they are just deciding whether they like Fort Collins.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Pretty quickly, it usually turns into one of these:</p>
            <ul className="space-y-3 mb-8">
              <li key={0} className="flex items-start gap-3 text-charcoal/80"><ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" /><span>Midtown vs Old Town** if the real question is practical centrality versus stronger core identity</span></li>
              <li key={1} className="flex items-start gap-3 text-charcoal/80"><ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" /><span>Midtown vs the rest of Fort Collins** if the real question is central convenience versus a broader city search</span></li>
              <li key={2} className="flex items-start gap-3 text-charcoal/80"><ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" /><span>Midtown vs Harmony / southeast Fort Collins** if the real question is more central everyday access versus more access-driven Fort Collins</span></li>
              <li key={3} className="flex items-start gap-3 text-charcoal/80"><ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" /><span>Midtown vs Windsor or Timnath** if the real question is staying in central Fort Collins versus moving into a cleaner outside-city path</span></li>
            </ul>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">That is why this page exists.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">It is not here to cover the whole city again.  
It is here because Midtown solves a more specific internal Fort Collins decision.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              The tradeoffs are the whole point
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Like anywhere, Midtown has tradeoffs.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">One is that it gives you centrality and convenience, but it may not give you the same old-core pull as Old Town or the same simpler, newer, outer-edge feeling some buyers want.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Another is that Midtown works best when everyday practicality matters to you. If what you care about most is a stronger historic-core setting or a cleaner outside-city decision, Midtown can start to feel like the middle answer rather than the right answer.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">There is also a difference between a place feeling connected and a place feeling especially memorable.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Midtown usually does very well on connected.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">That is a strength.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">But it is not usually the part of Fort Collins buyers choose because it feels the most distinctive in the city. It is the part they often choose because it feels the most usable.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Midtown vs other options
            </h2>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">### Midtown vs Old Town
Midtown usually makes more sense when the buyer wants centrality and access without the whole decision being tied to the older downtown core. Old Town usually makes more sense when the center itself is part of the reason the buyer wants Fort Collins.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">### Midtown vs the rest of Fort Collins
Midtown usually makes more sense when the buyer wants to narrow into a more central, more connected part of the city. The broader Fort Collins search usually makes more sense when the buyer wants more range and flexibility.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">### Midtown vs Harmony / southeast Fort Collins
Midtown usually makes more sense when the buyer wants to stay more central and more tied to the middle of the city. Harmony or southeast Fort Collins usually make more sense when the buyer is comfortable with a more corridor-and-edge-oriented version of the search.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">### Midtown vs Windsor or Timnath
Midtown usually makes more sense when the buyer wants to stay inside central Fort Collins. Windsor or Timnath usually make more sense when the buyer wants a cleaner outside-city path entirely.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              What people tend to underestimate
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">People often underestimate how much Midtown solves the “I like Fort Collins, but I do not want the whole city as my search map” problem.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">That is the real value here.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">They can think of Midtown as just a middle section of town.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">That misses it.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Midtown works for buyers who want centrality, everyday convenience, and a part of Fort Collins that makes sense quickly once they drive it.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Buy now or rent first
            </h2>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">This usually comes down to whether you have answered the internal Fort Collins fit question yet.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">If you already know you want a more central, more connected, more practical part of Fort Collins and Midtown feels clearly better than the nearby alternatives, buying can make sense once the right house and numbers line up.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">If you are still unsure whether you want Midtown specifically, Old Town, the broader Fort Collins map, or an outside-city option like Windsor or Timnath, renting first can make sense.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Not because renting is automatically smarter.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Because clarity is.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">A short rent-first period can help when the real issue is not whether you want Fort Collins.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">It is whether you want <strong>Midtown specifically</strong>.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Final thoughts
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Midtown usually works best for buyers who want central Fort Collins to matter in a practical way.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Not just the city.  
Not just the house.  
The way daily life works in the city.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">If you want a more central, more connected, more everyday-usable part of Fort Collins without going all the way into the Old Town version of the decision, Midtown deserves a serious look.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">If that does not sound like what you want, that is useful too.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">It usually means the right next step is not to force Midtown to fit.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">It is to compare it honestly against Old Town, the rest of Fort Collins, and the nearby outside-city paths buyers usually weigh next.</p>
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
                { label: "Old Town Fort Collins →", href: "/old-town-fort-collins-real-estate" },
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
        { label: "Loveland →", href: "/loveland-co-real-estate" },
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
