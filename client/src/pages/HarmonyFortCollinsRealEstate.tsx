/**
 * HarmonyFortCollinsRealEstate — My Rock Realty
 * Route: /harmony-fort-collins-real-estate
 * Source: fort_collins_cluster_package_v1 / approved_harmony_fort_collins.md
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
    "question": "Why do buyers keep the Harmony area in the search once they start driving it?",
    "answer": "Because it usually feels easier to organize around access and everyday movement than the broader city search does."
  },
  {
    "question": "What kind of buyer usually chooses the Harmony area?",
    "answer": "Usually someone who wants a more practical, more corridor-driven, less core-centered version of Fort Collins."
  },
  {
    "question": "What kind of buyer usually moves on from the Harmony area?",
    "answer": "Usually someone who wants either the stronger central feel of Midtown, the stronger core identity of Old Town, or a cleaner outside-city path."
  },
  {
    "question": "Is Harmony just another name for southeast Fort Collins?",
    "answer": "Not really. Harmony works best as a distinct internal decision, not just a compass label."
  },
  {
    "question": "When does Harmony make more sense than Midtown?",
    "answer": "When the buyer wants more access-driven practicality and a little less central-city feel."
  },
  {
    "question": "When does Old Town make more sense than Harmony?",
    "answer": "When the buyer wants the center of Fort Collins itself to matter more than ease of access and everyday convenience."
  },
  {
    "question": "Is Harmony too broad to deserve its own page?",
    "answer": "No. It solves a real internal Fort Collins decision that is different from both Midtown and Old Town."
  },
  {
    "question": "Should I decide on Fort Collins first or Harmony first?",
    "answer": "Usually decide on Fort Collins first, then use Harmony to sort out whether this more practical subarea is the part that fits."
  },
  {
    "question": "Is Harmony trying to replace the Fort Collins hub?",
    "answer": "No. The Fort Collins hub owns the city-level decision. Harmony owns a more specific internal decision."
  },
  {
    "question": "Is this page trying to say Harmony is better than the rest of Fort Collins?",
    "answer": "No. It is here to help you figure out whether Harmony fits you better."
  }
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Fort Collins", url: "/fort-collins-co-homes-for-sale" },
  { label: "Harmony Fort Collins", url: "/harmony-fort-collins-real-estate" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HarmonyFortCollinsRealEstate() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <SeoHead
        metadata={{
          title: "Living Near Harmony in Fort Collins: Real Estate, Tradeoffs, and What It’s Like",
          description: "Thinking about the Harmony area in Fort Collins? Here is what this part of town actually feels like, who it fits, where it gets harder, and how it compares with Midtown, Old Town, and the rest of Fort Collins.",
          canonicalUrl: "https://myrockhomes.com/harmony-fort-collins-real-estate/",
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
        <img src={HERO_BG} alt="Living Near Harmony in Fort Collins: Real Estate, Tradeoffs, and What It’s Like" className="absolute inset-0 w-full h-full object-cover object-center" width="1600" height="900" fetchPriority="high" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/90" />
        <div className="container relative z-10 py-16 sm:py-20 md:py-24">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cream mb-6 leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Living Near Harmony in Fort Collins: Real Estate, Tradeoffs, and What It’s Like
            </h1>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              What the Harmony area feels like
            </h2>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">The Harmony area usually feels like a part of Fort Collins that is organized more around movement and access than around the city’s older core.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">That helps the right buyer.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Once you start driving it, the difference from Old Town usually gets clear pretty fast. This is not the strongest historic-core version of Fort Collins. It is also not as middle-of-the-city as Midtown can feel.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">It usually feels more corridor-driven.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">That is not a criticism.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">For the right buyer, that is exactly the draw.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">A lot of buyers like this part of town because it feels easier to use. The map is easier to understand. Everyday movement makes sense faster. The decision usually feels less tied to the city’s center and more tied to how you actually want daily life to work.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">That is a real lane.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Why the Harmony area stays in the conversation
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">The Harmony area stays in the conversation because it gives buyers a version of Fort Collins that feels easier to organize around everyday life.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">That matters more than people think.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Some buyers like Fort Collins, but realize they do not actually want the search tied to Old Town or the strongest central-city feel. Some like Midtown, but realize they want the map to shift a little farther toward convenience and a little less toward the middle of the city. Some are really trying to stay in Fort Collins while avoiding the broadest city-level search possible.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">That is where Harmony starts making sense.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">It stays in the conversation because it solves a clean internal question:</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Do you want the center of Fort Collins to matter more?  
Or do you want the city to feel easier to use?</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">That is usually the split.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Who the Harmony area tends to fit
            </h2>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">The Harmony area usually fits buyers who want Fort Collins to feel practical first.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Usually that means buyers who want:
- a part of Fort Collins that feels easier to organize around access
- less pull toward the older core
- a more corridor-oriented version of the search
- something more edge-of-center than Midtown
- a part of the city that still feels established, but not especially core-driven
- a location that makes everyday movement easier to picture</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">A lot of buyers who stay serious about this area are not chasing the most rooted or most historic part of Fort Collins.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">They are looking for the part that feels easiest to use.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">That is a real fit.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Who may not love the Harmony area
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">The Harmony area may not be the right fit if what you really want is either the strongest center or the strongest simplicity.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">If you want the core of Fort Collins to be part of the reason you buy there, Old Town can start looking better.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">If you want a more central, more in-the-middle-of-the-city version of Fort Collins, Midtown can start making more sense.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">And if the real goal is a cleaner outside-city path entirely, Windsor or Timnath can start feeling stronger pretty quickly.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Harmony is usually strongest when the buyer wants to stay in Fort Collins, but wants a more practical part of it.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">If that is not the goal, this can start to feel like the wrong middle ground.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              What the home search usually turns into
            </h2>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">This is where Harmony gets useful.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">At first, buyers often think they are just deciding whether they like Fort Collins.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Pretty quickly, it usually turns into one of these:</p>
            <ul className="space-y-3 mb-8">
              <li key={0} className="flex items-start gap-3 text-charcoal/80"><ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" /><span>Harmony vs Midtown** if the real question is more central everyday Fort Collins versus more access-driven Fort Collins</span></li>
              <li key={1} className="flex items-start gap-3 text-charcoal/80"><ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" /><span>Harmony vs Old Town** if the real question is practical ease versus stronger core identity</span></li>
              <li key={2} className="flex items-start gap-3 text-charcoal/80"><ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" /><span>Harmony vs the rest of Fort Collins** if the real question is narrowing into a more usable part of the city instead of keeping the whole map open</span></li>
              <li key={3} className="flex items-start gap-3 text-charcoal/80"><ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" /><span>Harmony vs Windsor or Timnath** if the real question is staying inside Fort Collins versus taking a cleaner outside-city path</span></li>
            </ul>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">That is why this page exists.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">It is not here to cover the whole city again.  
It is here because Harmony solves a more specific internal Fort Collins decision.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              The tradeoffs are the whole point
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Like anywhere, the Harmony area has tradeoffs.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">One is that it usually feels easier to organize around access, but it may not give you the same center-of-the-city pull as Old Town or even Midtown.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Another is that Harmony works best when practicality matters more than atmosphere. If what you want most is a stronger core identity or a more rooted setting, the pull of this area can fade.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">There is also a difference between a place feeling usable and a place feeling especially memorable.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Harmony usually does very well on usable.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">That is a strength.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">But it is not usually the part of Fort Collins buyers choose because it feels the most iconic. They usually choose it because it feels easier to live with.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">That does not make it weaker.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">It just makes it specific.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Harmony vs other options
            </h2>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">### Harmony vs Midtown
Harmony usually makes more sense when the buyer wants a more access-driven, corridor-oriented part of Fort Collins. Midtown usually makes more sense when the buyer wants to stay more central and more tied to the middle of the city.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">### Harmony vs Old Town
Harmony usually makes more sense when the buyer wants practicality and movement to matter more than the older core. Old Town usually makes more sense when the center itself is part of the draw.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">### Harmony vs the rest of Fort Collins
Harmony usually makes more sense when the buyer wants to narrow into a more practical, more usable part of Fort Collins instead of keeping the whole city map open.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">### Harmony vs Windsor or Timnath
Harmony usually makes more sense when the buyer still wants Fort Collins, just not the broadest or most core-driven version of it. Windsor or Timnath usually make more sense when the buyer wants a cleaner outside-city path instead.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              What people tend to underestimate
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">People often underestimate how much the Harmony area solves the “I want Fort Collins, but I want it to feel easier” problem.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">That is the real value here.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">They can think of it as just a road or a generic southeast slice of town.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">That misses it.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Harmony works for buyers who want a part of Fort Collins that feels more organized around access, movement, and everyday practicality than around the city’s older core.</p>
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
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">This usually comes down to whether you have answered the internal Fort Collins fit question yet.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">If you already know you want a more practical part of Fort Collins and Harmony feels clearly better than Midtown, Old Town, or the nearby outside-city options, buying can make sense once the right house and numbers line up.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">If you are still unsure whether you want Harmony specifically, the broader Fort Collins map, or an outside-city option like Windsor or Timnath, renting first can make sense.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Not because renting is automatically smarter.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Because clarity is.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">A short rent-first period can help when the real issue is not whether you want Fort Collins.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">It is whether you want <strong>this part of Fort Collins specifically</strong>.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Final thoughts
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">The Harmony area usually works best for buyers who want Fort Collins to feel easier in a practical way.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Not just the city.  
Not just the house.  
The way daily life works.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">If you want a more practical, more access-driven version of Fort Collins without going all the way into a cleaner outside-city path, Harmony deserves a serious look.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">If that does not sound like what you want, that is useful too.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">It usually means the right next step is not to force Harmony to fit.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">It is to compare it honestly against Midtown, Old Town, the rest of Fort Collins, and the nearby outside-city paths buyers usually weigh next.</p>
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
        { label: "Midtown Fort Collins →", href: "/midtown-fort-collins-real-estate" },
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
