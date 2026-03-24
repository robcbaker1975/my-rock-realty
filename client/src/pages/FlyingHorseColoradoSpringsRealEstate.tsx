/*
 * Living in Flying Horse, Colorado Springs — My Rock Realty
 * Premium neighborhood SEO page
 * Slug: /flying-horse-colorado-springs-real-estate/
 * Design: Front Range Modern — matches existing site design system
 */
import { useState } from "react";
import SeoHead from "@/components/seo/SeoHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "Is Flying Horse more like Briargate or more like Northgate?",
    answer:
      "It overlaps with both, but it usually sits in its own lane. Briargate tends to feel more established and more residential. Northgate tends to feel more access-driven. Flying Horse usually feels more elevated and more intentionally branded.",
  },
  {
    question: "Is Flying Horse a good fit for buyers who want luxury-leaning north-side living?",
    answer:
      "Often, yes. Flying Horse is one of the clearest north-side conversations for buyers who want a more polished, master-planned, and higher-end neighborhood experience.",
  },
  {
    question: "Does Flying Horse feel different from Monument?",
    answer:
      "Yes. Flying Horse is still a Colorado Springs neighborhood decision. Monument is more of a town decision with a different daily rhythm.",
  },
  {
    question: "What makes Flying Horse distinct?",
    answer:
      "A big part of it is that the neighborhood identity is visible right away. Flying Horse tends to feel more curated, more branded, and more lifestyle-shaped than many other north-side options.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Flying Horse, Colorado Springs Real Estate", url: "/flying-horse-colorado-springs-real-estate/" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-stone-700">
      <button
        className="w-full flex items-center justify-between py-4 text-left text-stone-100 font-medium hover:text-amber-400 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 ml-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="pb-4 text-stone-300 text-sm leading-relaxed">{answer}</p>
      )}
    </div>
  );
}

export default function FlyingHorseColoradoSpringsRealEstate() {
  return (
    <>
      <SeoHead
        metadata={{
          title: "Living in Flying Horse, Colorado Springs: Real Estate, Tradeoffs, and What It's Like | MyRockHomes.com",
          description:
            "Flying Horse stays in the Colorado Springs conversation because it offers a more elevated, identity-driven north-side search. A practical guide to whether Flying Horse fits the kind of north-side lifestyle you actually want.",
          canonicalUrl: "https://myrockhomes.com/flying-horse-colorado-springs-real-estate/",
        }}
        schema={[faqSchema]}
      />

      {/* ─── Breadcrumb bar ─── */}
      <div className="bg-stone-800/95 border-b border-stone-700 py-2 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* ─── Hero ─── */}
      <div className="bg-stone-900 py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-stone-100 leading-tight mb-4"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            Living in Flying Horse, Colorado Springs: Real Estate, Tradeoffs, and What It's Like
          </motion.h1>
          <motion.p
            className="text-amber-400 text-lg"
            initial="hidden"
            animate="visible"
            variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.5, delay: 0.1 } } }}
          >
            A practical guide to whether Flying Horse fits the kind of north-side lifestyle you actually want.
          </motion.p>
        </div>
      </div>

      {/* ─── Main content ─── */}
      <div className="bg-stone-50 py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-10 text-stone-800 leading-relaxed">

          {/* Intro */}
          <section>
            <p className="mb-4">Flying Horse usually comes up for a different reason than a lot of other Colorado Springs neighborhoods.</p>
            <p className="mb-4">Usually, it is not because people are just looking for the north side.</p>
            <p className="mb-4">It is because they want the north side to feel more elevated, more intentional, and a little more defined from the start.</p>
            <p className="mb-4">That is usually where Flying Horse starts to separate itself.</p>
            <p className="mb-4">A lot of buyers do not land here by accident. They usually get here after the search starts narrowing and they realize they are not just looking for convenience or a straightforward neighborhood pattern. They want a version of the north-end search that feels more polished and more identity-driven than that.</p>
            <p className="mb-4">
              This is not the page for someone trying to understand all of Colorado Springs. The main{" "}
              <a href="/moving-to-colorado-springs/" className="text-amber-600 underline hover:text-amber-700">
                Colorado Springs relocation page
              </a>{" "}
              already handles that. This page is narrower on purpose.
            </p>
            <p className="font-semibold">The real question here is simpler: does Flying Horse fit the kind of north-side lifestyle you actually want?</p>
          </section>

          {/* Why Flying Horse stays in the conversation */}
          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Why Flying Horse stays in the conversation</h2>
            <p className="mb-4">Flying Horse usually stays in the conversation because it is one of the clearest examples of a master-planned, luxury-leaning north-side search in Colorado Springs.</p>
            <p className="mb-4">That is a big part of the appeal.</p>
            <p className="mb-4">Some north-side neighborhoods win on convenience. Some win on clarity. Flying Horse usually wins because the neighborhood identity is more visible from the beginning. Buyers tend to understand fairly quickly what kind of experience it is trying to offer.</p>
            <p className="mb-4">That changes the search.</p>
            <p>Flying Horse's own community materials lean into neighborhood villages, higher-end builders, club identity, and a broader planned-community feel, which helps explain why the area often feels more intentional and more lifestyle-shaped than many nearby alternatives.</p>
          </section>

          {/* What Flying Horse tends to fit */}
          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">What Flying Horse tends to fit</h2>
            <p className="mb-4">Flying Horse usually makes the most sense for buyers who want:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1 text-stone-700">
              <li>a north-side location with a more elevated feel</li>
              <li>a master-planned neighborhood identity</li>
              <li>a search that feels more lifestyle-driven from the start</li>
              <li>a home search where the neighborhood brand matters almost as much as the house itself</li>
            </ul>
            <p className="mb-4">This is often where people land when they want the north side, but do not want it to feel purely practical.</p>
            <p className="mb-4">That matters more than people expect.</p>
            <p className="mb-4">Flying Horse tends to attract buyers who like the idea of a neighborhood with a stronger built-in identity. It is not just about being north. It is about wanting the north side to feel more curated.</p>
            <p>That is also why Flying Horse does not sit in exactly the same lane as Briargate or Northgate. It is not mainly about the easiest map. It is more about wanting a more elevated version of that geography.</p>
          </section>

          {/* Who may not love Flying Horse */}
          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Who may not love Flying Horse</h2>
            <p className="mb-4">Flying Horse is not the best fit for everyone.</p>
            <p className="mb-4">If you want a neighborhood that feels less branded, less polished, or less tied to a master-planned identity, Flying Horse can start to feel like more packaging than you actually want.</p>
            <p className="mb-4">If you are mainly looking for the north side to feel practical, straightforward, or more price-flexible, other parts of the map may fit better.</p>
            <p className="mb-4">That does not make Flying Horse a weak option.</p>
            <p className="mb-4">It just means the upside and the tradeoff are tied together.</p>
            <p>The same intentional identity that makes Flying Horse attractive can also make it feel more specific, more expensive, and less neutral than buyers expected if they were really just trying to solve for location.</p>
          </section>

          {/* What the home search usually turns into */}
          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">What the home search usually turns into</h2>
            <p className="mb-4">A Flying Horse search usually gets specific pretty quickly.</p>
            <p className="mb-4">Usually, that is because the buyer is trying to solve one main question: <strong>do they want the north side to feel more elevated, more practical, more established, or more separate from the city altogether?</strong></p>
            <p className="mb-4">That is where the real comparisons come in:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-stone-700">
              <li><strong>Flying Horse</strong> for a more branded, elevated north-end search</li>
              <li><strong>Briargate</strong> for a more established and more residential north-side pattern</li>
              <li><strong>Northgate</strong> for stronger corridor, InterQuest, and I-25 access</li>
              <li><strong>Monument</strong> when the buyer realizes they may want a town feel rather than a Colorado Springs neighborhood feel</li>
              <li>sometimes <strong>Black Forest</strong> when the buyer starts wanting more privacy, more land, or less neighborhood structure altogether</li>
            </ul>
            <p className="mb-4">That is why Flying Horse matters in the cluster.</p>
            <p className="mb-4">It is not just another north-side name. It represents the more polished and more identity-driven version of the north-side decision.</p>
            <p>Public real-estate platforms also tend to treat Flying Horse as a distinct product type rather than just another part of the map, which supports the idea that buyers already approach it differently.</p>
          </section>

          {/* The tradeoffs are the whole point */}
          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">The tradeoffs are the whole point</h2>
            <p className="mb-4">Flying Horse usually works best when the buyer values identity, finish, and a more elevated neighborhood experience.</p>
            <p className="mb-4">That is the upside.</p>
            <p className="mb-4">The tradeoff is that it can feel more branded, more expensive, or more intentionally packaged than someone expected if they were just trying to buy on the north side.</p>
            <p className="mb-4">That is what separates it from Briargate.</p>
            <p className="mb-4">Briargate usually feels more established and more neutral in its identity. Flying Horse usually feels more intentionally positioned from the start.</p>
            <p className="mb-4">That is also what separates it from Northgate.</p>
            <p className="mb-4">Northgate often feels more access-driven. Flying Horse usually feels more experience-driven.</p>
            <p>That may not sound exciting. But it is real.</p>
          </section>

          {/* Flying Horse vs nearby alternatives */}
          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Flying Horse vs nearby alternatives</h2>

            <h3 className="text-xl font-semibold text-stone-800 mb-3">Flying Horse vs Briargate</h3>
            <p className="mb-4">Briargate usually makes more sense when someone wants a stronger established-neighborhood feel and a more straightforward north-side search.</p>
            <p className="mb-6">Flying Horse usually makes more sense when someone wants the north side to feel more elevated and more intentionally branded.</p>

            <h3 className="text-xl font-semibold text-stone-800 mb-3">Flying Horse vs Northgate</h3>
            <p className="mb-4">Northgate usually makes more sense when access, InterQuest, and corridor convenience matter more.</p>
            <p className="mb-6">Flying Horse usually makes more sense when the buyer wants a stronger neighborhood identity and a more lifestyle-shaped version of the north-end search.</p>

            <h3 className="text-xl font-semibold text-stone-800 mb-3">Flying Horse vs Monument</h3>
            <p className="mb-4">This is one of the cleaner comparisons.</p>
            <p className="mb-4">Flying Horse still feels like a Colorado Springs neighborhood choice.</p>
            <p className="mb-4">Monument feels more like choosing a town north of the city.</p>
            <p>If a buyer starts in Flying Horse and keeps widening north, that usually means they are no longer just sorting by neighborhood quality. They may be deciding whether they want the Springs at all, or something more separate.</p>
          </section>

          {/* What people tend to underestimate */}
          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">What people tend to underestimate about Flying Horse</h2>
            <p className="mb-4">A lot of buyers underestimate how much the neighborhood identity itself does the work here.</p>
            <p className="mb-4">On paper, Flying Horse can look like one more north-side option.</p>
            <p className="mb-4">In practice, it tends to stay in the conversation because it feels more like choosing a specific kind of experience.</p>
            <p className="mb-4">That difference matters.</p>
            <p className="mb-4">Community materials around Flying Horse point to neighborhood villages, club identity, and the broader Flying Horse North story, which reinforces that this is not a generic neighborhood pattern. It is a more intentionally shaped one.</p>
            <p className="mb-4">The flip side is just as real.</p>
            <p>If what you really want is a strong location without as much neighborhood identity attached to it, Flying Horse can feel like more of a statement than you were trying to make.</p>
          </section>

          {/* Buying now or renting first */}
          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Is Flying Horse better for buying now or renting first?</h2>
            <p className="mb-4">Sometimes buying first makes a lot of sense here.</p>
            <p className="mb-4">Flying Horse is one of those places where buyers usually know fairly quickly whether it fits them or not.</p>
            <p className="mb-4">If you already know you want a more elevated north-side setup, feel good about the tradeoffs, and like the idea of a more branded neighborhood experience, buying here can be pretty straightforward.</p>
            <p>If you are still deciding between Flying Horse, Briargate, Northgate, or Monument, renting first can still help. But Flying Horse is often one of those places where the fit becomes clear earlier than it does in more neutral neighborhoods.</p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-6">FAQ about living in Flying Horse</h2>
            <div className="bg-stone-800 rounded-lg px-6 py-2">
              {faqContent.map((item) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
          </section>

          {/* Final thoughts */}
          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Final thoughts</h2>
            <p className="mb-4">Flying Horse is usually not the page for someone who just wants a simple north-side search.</p>
            <p className="mb-4">It is the page for someone trying to decide whether a more elevated, more identity-driven version of the north-end search is the better fit.</p>
            <p className="mb-4">For the right buyer, that is exactly why it works.</p>
            <p className="mb-4">Flying Horse can make the north side feel more polished, more intentional, and more aligned with a buyer who wants the neighborhood to carry more of the experience.</p>
            <p className="mb-4">For the wrong buyer, it can feel more branded or more specific than they really wanted.</p>
            <p className="mb-4">That is why the real question is not whether Flying Horse is good.</p>
            <p className="mb-4">It is whether Flying Horse fits the way you want Colorado Springs to work once the move is real.</p>
            <p>If you are trying to sort out Flying Horse versus Briargate, Northgate, Monument, or the broader Colorado Springs map, My Rock Homes can help you narrow that down before you get too attached to a specific house.</p>
          </section>

          {/* CTA */}
          <section className="bg-stone-800 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-stone-100 mb-3">Talk to Rob About Flying Horse</h2>
            <p className="text-stone-300 mb-6">Get clear on the map before you get too far into the house search.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="inline-block bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold px-6 py-3 rounded transition-colors"
              >
                Talk to Rob About Flying Horse
              </a>
              <a
                href="/colorado-springs-co-homes-for-sale"
                className="inline-block border border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-stone-900 font-semibold px-6 py-3 rounded transition-colors"
              >
                Browse Colorado Springs Homes →
              </a>
            </div>
            <div className="mt-4">
              <a
                href="/moving-to-colorado-springs/"
                className="text-stone-400 hover:text-amber-400 text-sm underline transition-colors"
              >
                Colorado Springs Relocation Guide →
              </a>
            </div>
          </section>

        </div>
      </div>

      {/* ─── Footer ─── */}
      <footer className="bg-stone-900 border-t border-stone-700 py-6 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-stone-500 text-sm">
          <span>© {new Date().getFullYear()} My Rock Realty · Rob Baker, Broker/Owner</span>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-stone-300 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-stone-300 transition-colors">Terms</a>
            <a href="/fair-housing" className="hover:text-stone-300 transition-colors">Fair Housing</a>
            <a href="/accessibility" className="hover:text-stone-300 transition-colors">Accessibility</a>
          </div>
        </div>
      </footer>
    </>
  );
}
