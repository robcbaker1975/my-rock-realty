/**
 * TimnathCoRealEstate — My Rock Realty
 * Route: /timnath-co-real-estate
 * Source: fort_collins_cluster_package_v1 / approved_timnath.md
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
    "question": "Why do buyers keep Timnath in the search once they start driving it?",
    "answer": "Because Timnath usually feels easier to sort out than a broader city search while still keeping access to nearby larger places in play."
  },
  {
    "question": "What kind of buyer usually chooses Timnath?",
    "answer": "Usually someone who wants a newer-growth path, a cleaner search, and less internal complexity than Fort Collins."
  },
  {
    "question": "What kind of buyer usually moves on from Timnath?",
    "answer": "Usually someone who wants more town identity, more city range, or a place with a more established center."
  },
  {
    "question": "Is Timnath just a simpler version of Fort Collins?",
    "answer": "Usually no. It is a different path. Fort Collins is a broader city decision. Timnath is a more streamlined newer-growth decision."
  },
  {
    "question": "When does Timnath make more sense than Fort Collins?",
    "answer": "When the buyer wants newer-growth simplicity more than city range or internal variation."
  },
  {
    "question": "When does Windsor make more sense than Timnath?",
    "answer": "When the buyer wants more town identity, a stronger center, and a place that feels less like a growth lane."
  },
  {
    "question": "When does Loveland make more sense than Timnath?",
    "answer": "When the buyer realizes they still want a city decision rather than a newer-growth town path."
  },
  {
    "question": "Is Timnath still growing fast?",
    "answer": "Yes, and that growth is part of why the place feels like a newer-growth path rather than a broader town or city decision."
  },
  {
    "question": "Should I look at neighborhoods first or decide on Timnath first?",
    "answer": "Usually decide on Timnath first. The cleaner move is to decide whether the newer-growth path is right before narrowing down further."
  },
  {
    "question": "Is this page trying to say Timnath is better than Fort Collins or Windsor?",
    "answer": "No. It is here to help you figure out whether Timnath fits you better."
  }
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Fort Collins", url: "/fort-collins-co-homes-for-sale" },
  { label: "Timnath, CO", url: "/timnath-co-real-estate" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TimnathCoRealEstate() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  return (
    <div className="hub-page min-h-screen flex flex-col bg-cream">
      <SeoHead
        metadata={{
          title: "Living in Timnath, Colorado: Real Estate, Tradeoffs, and What It’s Like",
          description: "Thinking about Timnath? Here is what Timnath actually feels like, who it fits, where it gets harder, and how it compares with Fort Collins, Windsor, Loveland, and Wellington.",
          canonicalUrl: "https://myrockhomes.com/timnath-co-real-estate/",
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
        <img src={HERO_BG} alt="Living in Timnath, Colorado: Real Estate, Tradeoffs, and What It’s Like" className="absolute inset-0 w-full h-full object-cover object-center" width="1600" height="900" fetchPriority="high" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/90" />
        <div className="container relative z-10 py-16 sm:py-20 md:py-24">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cream mb-6 leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Living in Timnath, Colorado: Real Estate, Tradeoffs, and What It’s Like
            </h1>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              What Timnath feels like
            </h2>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Timnath usually feels like a place where the search gets more straightforward.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">That helps.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Once you start driving it, the difference from Fort Collins usually shows up pretty fast. Timnath does not ask you to sort through the same kind of city layers. It does not feel like a place where the older core, major corridors, and multiple internal directions are all competing for your attention.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">It usually feels more like a growth lane.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">That is not a criticism.  
For the right buyer, that is the appeal.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">A lot of buyers who like Timnath want the map to feel easier to understand. They want a newer-growth environment, a cleaner layout, and a search that is less about interpreting a town or city identity and more about deciding whether this pattern fits how they want to live.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Why Timnath stays in the conversation
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Timnath stays in the conversation because it gives buyers a newer-growth path that usually feels easier to sort out.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">That is a real advantage.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Some buyers like Fort Collins, but realize they do not actually want a city with that much range. Some like Windsor, but want something that feels newer and more streamlined. Some compare Timnath and Loveland and realize they do not need another city decision.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">They want the path to feel clearer.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">That is where Timnath usually starts making sense.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">For the right buyer, that cleaner, newer-growth path is exactly the point.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Who Timnath tends to fit
            </h2>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Timnath usually fits buyers who want the search to get clearer faster and stay newer.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Usually that means buyers who want:
- a newer-growth path instead of a broader city decision
- less internal variation
- a cleaner map
- a place that feels easier to sort out quickly
- strong access to nearby larger places without living in one
- a search that feels more streamlined than Fort Collins</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">A lot of buyers who choose Timnath are not looking for a strong town-center identity first.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">They are looking for a simpler path.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">That is usually the appeal.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Who may not love Timnath
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Timnath may not be the right fit if what you really want is more identity in the place itself.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Some buyers start here, then realize they want a stronger center, more town feel, or a place that feels more established. That can push them toward Windsor.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Other buyers realize they actually want more city range and more internal variation. That usually pushes them back toward Fort Collins.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Timnath is usually strongest when the buyer wants the search to feel newer, cleaner, and more direct.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">If a buyer wants more layers, Timnath can start to feel too narrow.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              What the home search usually turns into
            </h2>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">This is where Timnath gets useful.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">At first, buyers often think they are just comparing homes.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Pretty quickly, it usually turns into one of these:</p>
            <ul className="space-y-3 mb-8">
              <li key={0} className="flex items-start gap-3 text-charcoal/80"><ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" /><span>Timnath vs Fort Collins** if the real question is newer-growth simplicity versus broader city range</span></li>
              <li key={1} className="flex items-start gap-3 text-charcoal/80"><ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" /><span>Timnath vs Windsor** if the real question is streamlined growth path versus stronger town identity</span></li>
              <li key={2} className="flex items-start gap-3 text-charcoal/80"><ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" /><span>Timnath vs Loveland** if the real question is whether you still want a city decision</span></li>
              <li key={3} className="flex items-start gap-3 text-charcoal/80"><ArrowRight size={16} className="text-gold mt-1 flex-shrink-0" /><span>Timnath vs Wellington** if you know you want something more contained, but you are still sorting out what kind of contained path fits better</span></li>
            </ul>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">That is why this page exists.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">It is not here to act like Timnath is a child page of Fort Collins.  
It is here because Timnath is its own real comparison path.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              The tradeoffs are the whole point
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Like anywhere, Timnath has tradeoffs.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">One is that the cleaner and newer the path feels, the less internal variation you usually get. For some buyers, that is exactly the point. For others, it starts to feel limiting pretty quickly.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Another is that Timnath works best when you actually want a growth-forward lane. If a stronger center, a more established feel, or more variety inside the same market matters to you, the search can start drifting toward Windsor or Fort Collins.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">There is also a difference between a place feeling simple and a place feeling finished.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Timnath usually does well on simple.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">That is a strength.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">But for some buyers, that same quality can make the place feel a little too narrow.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Timnath vs nearby alternatives
            </h2>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">### Timnath vs Fort Collins
Timnath usually makes more sense when the buyer wants a newer-growth path and a search that feels easier to narrow down. Fort Collins usually makes more sense when the buyer wants more range, more internal variation, and a stronger city feel.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">### Timnath vs Windsor
Timnath usually makes more sense when the buyer wants the cleaner newer-growth lane. Windsor usually makes more sense when the buyer wants more town identity, a stronger center, and a place that feels less like a growth lane.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Timnath often feels more streamlined.  
Windsor often feels more town-centered.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">### Timnath vs Loveland
Timnath usually stays stronger when the buyer wants a more contained, newer-growth path. Loveland usually gets stronger when the buyer wants another city-level option instead of a newer-growth town path.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">### Timnath vs Wellington
Timnath usually feels stronger when the buyer wants newer growth and a more streamlined search. Wellington usually gets stronger when the buyer wants a different smaller-town feel.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              What people tend to underestimate
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">People often underestimate how much Timnath’s simplicity is the point.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">They think that means it has less to offer.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Sometimes it does mean less variation. But that is not the same thing as less value.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">For the right buyer, Timnath works because it cuts down the noise. It helps the search feel more direct. It keeps access to larger nearby places in play without forcing the buyer into a broader city decision.</p>
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
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">If you already know you want a newer-growth path and Timnath feels clearly better than the nearby alternatives, buying can make sense once the house and numbers line up.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">If you are still unsure whether you want Timnath, Fort Collins, Windsor, or Loveland, renting first can make sense.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Not because renting is automatically smarter.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">Because clarity is.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">A short rent-first period can help when the real issue is not whether you want Northern Colorado.</p>
            <p className="text-lg text-charcoal/80 mb-5 leading-relaxed">It is whether you want <strong>Timnath specifically</strong>.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Final thoughts
            </h2>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Timnath usually works best for buyers who want the path to feel simpler, newer, and easier to sort out.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">Not broader.  
Not more layered.  
Just clearer.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">If you want a newer-growth path with good access and a search that usually narrows down faster than Fort Collins, Timnath deserves a serious look.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">If that does not sound like what you want, that is useful too.</p>
            <p className="text-lg text-cream/80 mb-5 leading-relaxed">It usually means the right next step is not to force Timnath to fit.</p>
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
