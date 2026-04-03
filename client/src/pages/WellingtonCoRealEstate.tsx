/**
 * WellingtonCoRealEstate — My Rock Realty
 * Route: /wellington-co-real-estate
 * Source: fort_collins_cluster_package_v1 / approved_wellington.md
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
    "question": "Why do buyers keep Wellington in the search once they start driving it?",
    "answer": "Because Wellington usually feels smaller, quieter, and easier to sort out than a broader city path."
  },
  {
    "question": "What kind of buyer usually chooses Wellington?",
    "answer": "Usually someone who wants a smaller-town decision, less map, and a place that feels easier to settle into."
  },
  {
    "question": "What kind of buyer usually moves on from Wellington?",
    "answer": "Usually someone who wants more city range, a stronger town center, or a newer-growth lane."
  },
  {
    "question": "Is Wellington just the smaller version of Fort Collins?",
    "answer": "Usually no. It is a different path. Fort Collins is a broader city decision. Wellington is a smaller-town decision."
  },
  {
    "question": "When does Wellington make more sense than Fort Collins?",
    "answer": "When the buyer wants less city range and a smaller-town feel."
  },
  {
    "question": "When does Windsor make more sense than Wellington?",
    "answer": "When the buyer wants more activity, a stronger center, and more built-out town feel."
  },
  {
    "question": "When does Timnath make more sense than Wellington?",
    "answer": "When newer-growth simplicity matters more than smaller-town feel."
  },
  {
    "question": "Is Wellington too limited?",
    "answer": "For some buyers, yes. For others, the smaller scale is exactly why it works."
  },
  {
    "question": "Should I look at neighborhoods first or decide on Wellington first?",
    "answer": "Usually decide on Wellington first. The cleaner move is to decide whether the smaller-town path is right before narrowing down further."
  },
  {
    "question": "Is this page trying to say Wellington is better than the nearby options?",
    "answer": "No. It is here to help you figure out whether Wellington fits you better."
  }
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Fort Collins", url: "/fort-collins-co-homes-for-sale" },
  { label: "Wellington, CO", url: "/wellington-co-real-estate" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WellingtonCoRealEstate() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <SeoHead
        metadata={{
          title: "Living in Wellington, Colorado: Real Estate, Tradeoffs, and What It’s Like",
          description: "Thinking about Wellington? Here is what Wellington actually feels like, who it fits, where it gets harder, and how it compares with Fort Collins, Windsor, Timnath, and Loveland.",
          canonicalUrl: "https://myrockhomes.com/wellington-co-real-estate/",
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
        <img src={HERO_BG} alt="Living in Wellington, Colorado: Real Estate, Tradeoffs, and What It’s Like" className="absolute inset-0 w-full h-full object-cover object-center" width="1600" height="900" fetchPriority="high" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/90" />
        <div className="container relative z-10 py-16 sm:py-20 md:py-24">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cream mb-6 leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Living in Wellington, Colorado: Real Estate, Tradeoffs, and What It’s Like
            </h1>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              What Wellington feels like
            </h2>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Wellington usually feels like a smaller-town decision.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">That helps the right buyer.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Once you start comparing it to Fort Collins, the difference usually gets clear pretty fast. Wellington does not feel like a broader city with a lot of internal directions. It also does not usually feel as town-active or as built out as Windsor. And it does not read like a newer-growth lane the way Timnath can.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">It feels smaller.  
Quieter.  
More direct.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">For some buyers, that is exactly the point.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Wellington also has more of a real town center than people expect.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">That helps the place feel like a town, not just a name on the map.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Why Wellington stays in the conversation
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Wellington stays in the conversation because it gives buyers a smaller-town option without pretending to be a city.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">That matters more than people think.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Some buyers like Fort Collins, but realize they do not actually want a city decision. Some like Windsor, but want something that feels less active and less shaped around a stronger town center. Some look at Timnath and realize they do not want a newer-growth lane. They want a smaller-town path that just feels more straightforward.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">That is where Wellington starts making sense.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">For the right buyer, Wellington usually stays in the conversation because it feels like less map, less noise, and less decision weight.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">That is a real lane.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Who Wellington tends to fit
            </h2>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Wellington usually fits buyers who want the path to feel smaller and more direct.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Usually that means buyers who want:
- a smaller-town path instead of a broader city decision
- less range and less internal variation
- a place that feels easier to sort out quickly
- a quieter feel than Fort Collins
- less town-center energy than Windsor
- something other than a newer-growth lane like Timnath</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">A lot of buyers who choose Wellington are not chasing the most polished option.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">They are looking for the option that feels easier to live with.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">That is different.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Who may not love Wellington
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Wellington may not be the right fit if what you really want is more range.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">That can push buyers back toward Fort Collins.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">It also may not be the right fit if you want a stronger town center, more activity, and a place that feels more built out. That can push the search toward Windsor.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">And if you want the cleaner newer-growth lane, Timnath can start making more sense quickly.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Wellington is usually strongest when the buyer wants a smaller-town path and is comfortable with that being the actual goal.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">If a buyer still wants a city or a more active town, Wellington can start to feel too limited.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              What the home search usually turns into
            </h2>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">This is where Wellington gets useful.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">At first, buyers often think they are just comparing homes.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Pretty quickly, it usually turns into one of these:</p>
            <ul className="space-y-3 mb-8">
              <li key={0} className="flex items-start gap-3 text-charcoal/80"><ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" /><span>Wellington vs Fort Collins** if the real question is smaller-town path versus broader city range</span></li>
              <li key={1} className="flex items-start gap-3 text-charcoal/80"><ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" /><span>Wellington vs Windsor** if the real question is quieter smaller-town feel versus stronger town-center identity</span></li>
              <li key={2} className="flex items-start gap-3 text-charcoal/80"><ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" /><span>Wellington vs Timnath** if the real question is smaller-town simplicity versus newer-growth simplicity</span></li>
              <li key={3} className="flex items-start gap-3 text-charcoal/80"><ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" /><span>Wellington vs Loveland** if the real question is smaller-town path versus still choosing a city</span></li>
            </ul>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">That is why this page exists.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">It is not here to act like Wellington is just the leftover option.  
It is here because Wellington solves a different buyer decision.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              The tradeoffs are the whole point
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Like anywhere, Wellington has tradeoffs.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">One is that the smaller the path feels, the less range you usually get. For some buyers, that is exactly why Wellington works. For others, it starts to feel too limiting.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Another is that Wellington works best when you actually want a smaller-town decision. If that does not matter much to you, one of the nearby alternatives can start feeling stronger pretty quickly.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">There is also a difference between a place feeling simpler and a place feeling too small for what you need.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">That line is personal.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">For the right buyer, Wellington lands on the right side of it. For the wrong buyer, it does not.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">That does not make it worse.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">It just makes it specific.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Wellington vs nearby alternatives
            </h2>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">### Wellington vs Fort Collins
Wellington usually makes more sense when the buyer wants less map, less city range, and a smaller-town path. Fort Collins usually makes more sense when the buyer wants more identity, more internal variation, and a broader city decision.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">### Wellington vs Windsor
Wellington usually makes more sense when the buyer wants a quieter, smaller-town feel. Windsor usually gets stronger when the buyer wants more activity, a stronger center, and a more built-out town feel.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">### Wellington vs Timnath
Wellington usually makes more sense when the buyer wants a smaller-town path that does not feel like a newer-growth lane. Timnath usually gets stronger when newer-growth simplicity is the main draw.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">### Wellington vs Loveland
Wellington usually feels stronger when the buyer does not actually want another city decision. Loveland usually gets stronger when they still do.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              What people tend to underestimate
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">People often underestimate how much Wellington’s smaller scale is the whole point.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">They can think of it as just the less exciting option.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">That misses it.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Wellington works for buyers who are not trying to maximize range, activity, or city feel. They are trying to get to a place that feels easier, smaller, and more comfortable for the way they actually want to live.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">The other thing people miss is that smaller does not always mean shapeless.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">That is usually what starts getting clearer once they drive it.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Buy now or rent first
            </h2>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">This usually comes down to whether you have answered the place-fit question yet.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">If you already know you want a smaller-town path and Wellington feels clearly better than the nearby alternatives, buying can make sense once the house and numbers line up.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">If you are still unsure whether you want Wellington, Fort Collins, Windsor, or Timnath, renting first can make sense.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Not because renting is automatically smarter.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Because clarity is.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">A short rent-first period can help when the real issue is not whether you want Northern Colorado.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">It is whether you want <strong>Wellington specifically</strong>.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Final thoughts
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Wellington usually works best for buyers who want the path to feel smaller, quieter, and more direct.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Not broader.  
Not busier.  
Not more layered.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Just simpler in a different way.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">If you want a smaller-town path and you are comfortable giving up some city range to get it, Wellington deserves a serious look.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">If that does not sound like what you want, that is useful too.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">It usually means the right next step is not to force Wellington to fit.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">It is to compare it honestly against the nearby paths buyers usually weigh next.</p>
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
                { label: "Windsor, CO →", href: "/windsor-co-real-estate" },
        { label: "Timnath, CO →", href: "/timnath-co-real-estate" },
        { label: "Loveland, CO →", href: "/loveland-co-real-estate" },
              ].map((link, idx) => (
                <a key={idx} href={link.href} className="flex items-center gap-2 text-gold hover:text-gold/80 transition-colors font-semibold text-lg">
                  <ArrowRight size={16} />{link.label}
                </a>
              ))}
            </div>
            <h2 className="text-2xl font-bold text-cream mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>Keep exploring</h2>
            <div className="space-y-3">
              {[
                { label: "Old Town Fort Collins →", href: "/old-town-fort-collins-real-estate" },
        { label: "Midtown Fort Collins →", href: "/midtown-fort-collins-real-estate" },
        { label: "Harmony Fort Collins →", href: "/harmony-fort-collins-real-estate" },
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
