/**
 * LovelandCoRealEstate — My Rock Realty
 * Route: /loveland-co-real-estate
 * Source: fort_collins_cluster_package_v1 / approved_loveland.md
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
    "question": "Why do buyers keep Loveland in the search once they start driving it?",
    "answer": "Because Loveland usually feels like a real city option without forcing the exact same city decision as Fort Collins."
  },
  {
    "question": "What kind of buyer usually chooses Loveland?",
    "answer": "Usually someone who still wants a city, but wants a different city fit than Fort Collins offers."
  },
  {
    "question": "What kind of buyer usually moves on from Loveland?",
    "answer": "Usually someone who wants either more city range, a cleaner town-based path, or a newer-growth lane."
  },
  {
    "question": "Is Loveland just a fallback if Fort Collins does not work?",
    "answer": "Usually no. It is a different city decision, not a leftover option."
  },
  {
    "question": "When does Loveland make more sense than Fort Collins?",
    "answer": "When the buyer still wants a city, but Fort Collins no longer feels like the clearest fit."
  },
  {
    "question": "When does Windsor make more sense than Loveland?",
    "answer": "When the buyer wants a cleaner town-based path instead of another city decision."
  },
  {
    "question": "When does Timnath make more sense than Loveland?",
    "answer": "When newer-growth simplicity matters more than city identity or established feel."
  },
  {
    "question": "Is Loveland too similar to Fort Collins to deserve its own page?",
    "answer": "No. The point of this page is that it solves a different buyer decision."
  },
  {
    "question": "Should I look at neighborhoods first or decide on Loveland first?",
    "answer": "Usually decide on Loveland first. The cleaner move is to decide whether this city path is right before narrowing down further."
  },
  {
    "question": "Is this page trying to say Loveland is better than Fort Collins or Windsor?",
    "answer": "No. It is here to help you figure out whether Loveland fits you better."
  }
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Fort Collins", url: "/fort-collins-co-homes-for-sale" },
  { label: "Loveland, CO", url: "/loveland-co-real-estate" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function LovelandCoRealEstate() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  return (
    <div className="hub-page min-h-screen flex flex-col bg-cream">
      <SeoHead
        metadata={{
          title: "Living in Loveland, Colorado: Real Estate, Tradeoffs, and What It’s Like",
          description: "Thinking about Loveland? Here is what Loveland actually feels like, who it fits, where it gets harder, and how it compares with Fort Collins, Windsor, Timnath, and Wellington.",
          canonicalUrl: "https://myrockhomes.com/loveland-co-real-estate/",
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
        <img src={HERO_BG} alt="Living in Loveland, Colorado: Real Estate, Tradeoffs, and What It’s Like" className="absolute inset-0 w-full h-full object-cover object-center" width="1600" height="900" fetchPriority="high" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/90" />
        <div className="container relative z-10 py-16 sm:py-20 md:py-24">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cream mb-6 leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Living in Loveland, Colorado: Real Estate, Tradeoffs, and What It’s Like
            </h1>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              What Loveland feels like
            </h2>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Loveland usually feels like a city that comes together a little faster.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">That helps.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">It still feels like a city. It still feels established. It still feels like the place matters. But for a lot of buyers, it is easier to picture than Fort Collins once they start driving both.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">That is a real strength.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Loveland usually does not hit buyers as the broader, more layered city map that Fort Collins can be. It also does not feel as town-centered as Windsor or as streamlined as Timnath.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">It feels like its own lane.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">For a lot of buyers, that is the whole draw. They still want a city. They just want one that feels a little easier to get their arms around.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Why Loveland stays in the conversation
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Loveland stays in the conversation because it gives buyers another real city option.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">That matters more than people think.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Some buyers like Fort Collins, but it does not quite feel right. Some like Windsor, but realize they still want more city range. Some look at Timnath and realize they do not want a newer-growth path at all.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">They still want a city.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">They just want a different one.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">That is where Loveland usually starts making sense.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">For the right buyer, that is enough.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Who Loveland tends to fit
            </h2>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Loveland usually fits buyers who still want a city decision, but want a different version of one.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Usually that means buyers who want:
- a city with its own identity
- more range than a town-based path
- less of a newer-growth feel than Timnath
- a place that still feels established
- a search with some depth, but not necessarily the same pull as Fort Collins
- a city that feels easier to picture than a broader, more layered map can feel</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">A lot of buyers who choose Loveland are not trying to make the search as simple as possible.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">They are trying to make it fit better.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">That is different.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Who may not love Loveland
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Loveland may not be the right fit if what you really want is the broadest city range.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">That can push buyers back toward Fort Collins.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">It also may not be the right fit if what you actually want is a cleaner town-based path. That can push the search toward Windsor.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">And if the real priority is a more streamlined newer-growth lane, Timnath can start making more sense pretty quickly.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Loveland is usually strongest when the buyer still wants a city, but wants this city instead of another nearby option.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">That is the real lane.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              What the home search usually turns into
            </h2>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">This is where Loveland gets useful.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">At first, buyers often think they are just comparing homes.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Pretty quickly, it usually turns into one of these:</p>
            <ul className="space-y-3 mb-8">
              <li key={0} className="flex items-start gap-3 text-charcoal/80"><ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" /><span>Loveland vs Fort Collins** if the real question is which city fit is better</span></li>
              <li key={1} className="flex items-start gap-3 text-charcoal/80"><ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" /><span>Loveland vs Windsor** if the real question is city path versus town-based path</span></li>
              <li key={2} className="flex items-start gap-3 text-charcoal/80"><ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" /><span>Loveland vs Timnath** if the real question is established city feel versus newer-growth simplicity</span></li>
              <li key={3} className="flex items-start gap-3 text-charcoal/80"><ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" /><span>Loveland vs Wellington** if you know you want something outside the broadest path, but you are still sorting out whether that means city or smaller-town</span></li>
            </ul>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">That is why this page exists.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">It is not here to act like Loveland is just a backup plan.  
It is here because Loveland is its own real comparison path.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              The tradeoffs are the whole point
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Like anywhere, Loveland has tradeoffs.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">One is that it still asks the buyer to make a city decision. For some buyers, that is exactly right. For others, it is more range than they actually want.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Another is that Loveland works best when the buyer wants city identity, but not the exact Fort Collins version of it. If that distinction does not matter much, one of the nearby alternatives can start feeling cleaner.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">There is also a difference between a place feeling self-contained and a place feeling too narrow.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Loveland usually sits in a pretty good middle spot.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">For the right buyer, that is the appeal.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Loveland vs nearby alternatives
            </h2>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">### Loveland vs Fort Collins
Loveland usually makes more sense when the buyer still wants a city, but does not want the same city feel, range, or overall pull that Fort Collins brings. Fort Collins usually makes more sense when the buyer wants more internal variation and a broader city map.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">### Loveland vs Windsor
Loveland usually stays stronger when the buyer still wants a city decision and more range than a town-based path gives them. Windsor usually gets stronger when the buyer wants the path to tighten up faster and feel more town-centered.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">### Loveland vs Timnath
Loveland usually makes more sense when the buyer wants more city identity and less of a growth-lane feel. Timnath usually makes more sense when the buyer wants the cleaner, newer path.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">### Loveland vs Wellington
Loveland usually feels stronger when the buyer still wants a city. Wellington usually gets stronger when they do not.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              What people tend to underestimate
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">People often underestimate that Loveland is not just “the other city.”</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">That misses the point.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Loveland works for buyers who still want a city decision, but want a different feel than Fort Collins gives them.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Sometimes that is because the overall rhythm feels better. Sometimes it is because the city feels easier to picture. Sometimes it is just because buyers know what they do not want, and Loveland ends up being the cleaner city answer.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">That is usually what starts getting clearer once they drive it.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Buy now or rent first
            </h2>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">This usually comes down to whether you have answered the city-fit question yet.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">If you already know you still want a city decision and Loveland feels clearly better than the nearby alternatives, buying can make sense once the house and numbers line up.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">If you are still unsure whether you want Loveland, Fort Collins, Windsor, or Timnath, renting first can make sense.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Not because renting is automatically smarter.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Because clarity is.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">A short rent-first period can help when the real issue is not whether you want Northern Colorado.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">It is whether you want <strong>Loveland specifically</strong>.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Final thoughts
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Loveland usually works best for buyers who still want a city decision.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Just not the same one.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">If you want a place with city identity, some range, and a feel that is distinct from Fort Collins without dropping all the way into a town-based or newer-growth path, Loveland deserves a serious look.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">If that does not sound like what you want, that is useful too.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">It usually means the right next step is not to force Loveland to fit.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">It is to compare it honestly against the nearby paths buyers usually weigh next.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-4xl">
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
        <div className="container max-w-4xl">
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
