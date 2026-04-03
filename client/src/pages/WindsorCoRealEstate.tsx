/**
 * WindsorCoRealEstate — My Rock Realty
 * Route: /windsor-co-real-estate
 * Source: fort_collins_cluster_package_v1 / approved_windsor.md
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
    "question": "Why do buyers keep Windsor in the search once they start driving it?",
    "answer": "Because Windsor usually feels easier to sort out than a broader city search, while still feeling like a real place with a center, a rhythm, and some identity."
  },
  {
    "question": "What kind of buyer usually chooses Windsor?",
    "answer": "Usually someone who wants a cleaner town-based path, a place that feels easier to picture in everyday life, and a search that narrows down faster than Fort Collins."
  },
  {
    "question": "What kind of buyer usually moves on from Windsor?",
    "answer": "Usually someone who wants more city range, a simpler newer-growth lane, or a different kind of town feel."
  },
  {
    "question": "Is Windsor just a simpler version of Fort Collins?",
    "answer": "Usually no. It is a different path. Fort Collins is a broader city decision. Windsor is a cleaner town-based decision with its own center and identity."
  },
  {
    "question": "When does Windsor make more sense than Fort Collins?",
    "answer": "When the buyer wants the search to narrow down faster and wants a town-centered path instead of a broader city one."
  },
  {
    "question": "When does Timnath make more sense than Windsor?",
    "answer": "When newer-growth simplicity matters more than town center, identity, or a more established-feeling town layout."
  },
  {
    "question": "When does Loveland make more sense than Windsor?",
    "answer": "When the buyer realizes they still want a city decision rather than a town-based one."
  },
  {
    "question": "Is Windsor too growth-driven now?",
    "answer": "For some buyers, maybe. But for a lot of buyers, Windsor still feels more like a town than a growth lane, and that distinction matters."
  },
  {
    "question": "Should I look at neighborhoods first or decide on Windsor first?",
    "answer": "Usually decide on Windsor first. The cleaner move is to decide whether the town-based path is right before narrowing down further."
  },
  {
    "question": "Is this page trying to say Windsor is better than Fort Collins or Timnath?",
    "answer": "No. It is here to help you figure out whether Windsor fits you better."
  }
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Fort Collins", url: "/fort-collins-co-homes-for-sale" },
  { label: "Windsor, CO", url: "/windsor-co-real-estate" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WindsorCoRealEstate() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <SeoHead
        metadata={{
          title: "Living in Windsor, Colorado: Real Estate, Tradeoffs, and What It’s Like",
          description: "Thinking about Windsor? Here is what Windsor actually feels like, who it fits, where it gets harder, and how it compares with Fort Collins, Timnath, Loveland, and Wellington.",
          canonicalUrl: "https://myrockhomes.com/windsor-co-real-estate/",
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
        <img src={HERO_BG} alt="Living in Windsor, Colorado: Real Estate, Tradeoffs, and What It’s Like" className="absolute inset-0 w-full h-full object-cover object-center" width="1600" height="900" fetchPriority="high" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/90" />
        <div className="container relative z-10 py-16 sm:py-20 md:py-24">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cream mb-6 leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Living in Windsor, Colorado: Real Estate, Tradeoffs, and What It’s Like
            </h1>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              What Windsor feels like
            </h2>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Windsor usually feels like a town that knows what it is.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">That helps.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Once you start driving it, the search usually feels easier to understand than Fort Collins. There is a clearer center. There is more of a town feel to the way the map comes together. And there is enough identity there that it does not feel like you gave up personality just to make the search simpler.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Downtown matters here. Windsor Lake matters. Boardwalk Park matters.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Not because those are tourist talking points.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Because they help explain why Windsor often feels more town-centered and easier to picture in normal life.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Put that together, and Windsor usually feels organized, active, and easier to sort out.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">For the right buyer, that is the draw.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Why Windsor stays in the conversation
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Windsor stays in the conversation because it gives buyers a cleaner path without feeling too small to matter.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">That is a good lane.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Some buyers like Fort Collins, but realize they do not actually want a city with that much range. Some like Timnath, but want more town identity. Some compare Windsor and Loveland and realize they do not need another full city decision.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">They want a place that feels more contained and easier to understand.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">That is where Windsor usually starts making sense.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">It also helps that Windsor feels like a town, not just a growth lane.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">That is important.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">For the right buyer, that difference is enough.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Who Windsor tends to fit
            </h2>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Windsor usually fits buyers who want the search to get clearer faster.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Usually that means buyers who want:
- a town-based path instead of a broader city decision
- a place with some identity, not just newer growth
- a map that starts making sense pretty quickly
- a place that feels active, but not too layered
- a search that feels more contained than Fort Collins
- a town that is easier to picture in everyday life</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">A lot of buyers who choose Windsor are not chasing complexity.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">They are looking for a place that feels easier to picture.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">That is usually the point.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Who may not love Windsor
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Windsor may not be the right fit if what you really want is more city range.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Some buyers start here, then realize they want a broader market with more internal variation. That usually pushes them back toward Fort Collins.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Other buyers realize they do not want a town-based path at all. They want the cleanest newer-growth lane possible, which can push the search toward Timnath. Or they decide they want a real city-versus-city choice, which can push things toward Loveland.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Windsor is usually strongest when a buyer wants a path that feels cleaner, more town-centered, and easier to narrow down without giving up too much identity.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              What the home search usually turns into
            </h2>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">This is where Windsor gets useful.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">At first, buyers often think they are just comparing homes.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Pretty quickly, it usually turns into one of these:</p>
            <ul className="space-y-3 mb-8">
              <li key={0} className="flex items-start gap-3 text-charcoal/80"><ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" /><span>Windsor vs Fort Collins** if the real question is town path versus broader city path</span></li>
              <li key={1} className="flex items-start gap-3 text-charcoal/80"><ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" /><span>Windsor vs Timnath** if the real question is town identity versus newer-growth simplicity</span></li>
              <li key={2} className="flex items-start gap-3 text-charcoal/80"><ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" /><span>Windsor vs Loveland** if the real question is whether you want a town or another city decision</span></li>
              <li key={3} className="flex items-start gap-3 text-charcoal/80"><ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" /><span>Windsor vs Wellington** if you know you want a smaller-feeling path, but you are still sorting out which version fits better</span></li>
            </ul>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">That is why this page exists.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">It is not here to act like Windsor is a child page of Fort Collins.  
It is here because Windsor is its own real comparison path.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              The tradeoffs are the whole point
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Like anywhere, Windsor has tradeoffs.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">One is that the cleaner the path feels, the less internal variation you may have compared with Fort Collins. For some buyers, that is exactly the point. For others, it starts to feel limiting.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Another is that Windsor works best when you actually want a town-based identity. If that does not matter to you, the search can start drifting toward a simpler newer-growth path or back toward a broader city.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">There is also a difference between a place feeling convenient and a place feeling generic.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Windsor usually avoids generic better than people expect.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">That is because it still has a center. It still feels like a town. It still feels like people use the place instead of just passing through it.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Windsor vs nearby alternatives
            </h2>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">### Windsor vs Fort Collins
Windsor usually makes more sense when the buyer wants a cleaner town-based path and a search that tightens up faster. Fort Collins usually makes more sense when the buyer wants more range, more internal variation, and a stronger city feel.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">### Windsor vs Timnath
Windsor usually makes more sense when the buyer wants a town with a clearer center and more town identity. Timnath usually makes more sense when newer-growth simplicity is the main draw.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Timnath often feels more streamlined.  
Windsor often feels more town-centered.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">### Windsor vs Loveland
Windsor usually stays stronger when the buyer wants a cleaner, more contained path. Loveland usually gets stronger when the buyer wants another city decision instead of a town-centered one.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">### Windsor vs Wellington
Windsor usually feels stronger when the buyer wants more town activity, a more developed center, and a cleaner regional position. Wellington usually gets stronger when the buyer wants to stay smaller-town in a different way.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              What people tend to underestimate
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">People often underestimate how much Windsor’s identity matters.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">They think of it as the easier option.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Sometimes it is. But that is not the whole story.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Windsor works because it is easier to sort out <strong>and</strong> still feels like a place with a center, a rhythm, and some shape to it.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">That is usually what buyers start noticing once they drive it.</p>
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
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">If you already know you want a town-based path and Windsor feels clearly better than the nearby alternatives, buying can make sense once the house and numbers line up.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">If you are still unsure whether you want Windsor, Fort Collins, Timnath, or Loveland, renting first can make sense.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Not because renting is automatically smarter.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Because clarity is.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">A short rent-first period can help when the real issue is not whether you want Northern Colorado.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">It is whether you want <strong>Windsor specifically</strong>.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Final thoughts
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Windsor usually works best for buyers who want the path to get clearer faster.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Not flatter.  
Not emptier.  
Just clearer.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">If you want a town with some identity, a real center, and a search that usually tightens up faster than Fort Collins, Windsor deserves a serious look.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">If that does not sound like what you want, that is useful too.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">It usually means the right next step is not to force Windsor to fit.</p>
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
                { label: "Timnath, CO →", href: "/timnath-co-real-estate" },
        { label: "Loveland, CO →", href: "/loveland-co-real-estate" },
        { label: "Wellington, CO →", href: "/wellington-co-real-estate" },
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
