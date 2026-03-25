/**
 * USAFA Relocation Guide — My Rock Realty
 * /military-relocation/usafa/
 * Design: Front Range Modern — matches existing site design system
 */
import { useState } from "react";
import SeoHead from "@/components/seo/SeoHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Home, ChevronDown, Phone, Mail, Compass } from "lucide-react";

const HERO_BG = "/images/denver-rowhouses-hero.jpg";

const faqContent = [
  {
    question: "What communities do buyers relocating to USAFA typically consider?",
    answer:
      "USAFA is located north of Colorado Springs near Monument and the Tri-Lakes area. Buyers commonly look at Monument, Woodmoor, Black Forest, and northern Colorado Springs neighborhoods. The right fit depends on commute preferences, school priorities, and budget.",
  },
  {
    question: "Is USAFA close to Fort Carson or Peterson Space Force Base?",
    answer:
      "USAFA is in the northern Colorado Springs area, while Fort Carson is on the south side and Peterson is on the east side. Some buyers consider communities that offer reasonable access to multiple installations, depending on their situation.",
  },
  {
    question: "Can Rob help me buy near USAFA if I'm still out of state?",
    answer:
      "Yes. Rob works with buyers planning a PCS move from out of state. He can provide market orientation, neighborhood guidance, and support for buyers navigating the process remotely before they arrive.",
  },
  {
    question: "How competitive is the market near USAFA?",
    answer:
      "The Monument and Tri-Lakes area north of Colorado Springs has been an active market. Understanding current inventory, pricing trends, and neighborhood dynamics before you start searching helps you move efficiently when the right home appears.",
  },
  {
    question: "Does Rob work with VA financing?",
    answer:
      "Rob provides educational guidance on VA homebuying and works with buyers using VA financing. For specific VA loan questions, buyers should work directly with a VA-approved lender.",
  },
  {
    question: "What is the commute like from Monument or Tri-Lakes to USAFA?",
    answer:
      "Monument and the Tri-Lakes area are just north of USAFA along I-25, making for a short commute. Many buyers assigned to USAFA find this corridor appealing for its access to both the Academy and Colorado Springs amenities.",
  },
  {
    question: "How does Rob support buyers on a PCS timeline?",
    answer:
      "Rob understands that PCS timelines are often compressed. He focuses on market orientation, clear communication, and helping buyers make confident decisions quickly — whether they're buying remotely or arriving with limited time to search.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Military & PCS Relocation", url: "/military-relocation/" },
  { label: "USAFA", url: "/military-relocation/usafa/" },
];

const orientationPoints = [
  {
    icon: MapPin,
    title: "Location & Commute Context",
    text: "USAFA sits north of Colorado Springs along I-25, adjacent to Monument and the Tri-Lakes area. Buyers typically look at Monument, Woodmoor, Black Forest, and northern Colorado Springs neighborhoods for shorter commutes and access to quality schools.",
  },
  {
    icon: Home,
    title: "Housing Market Overview",
    text: "The Monument and Tri-Lakes corridor offers a mix of established neighborhoods and newer construction. Price points vary across the area, with options ranging from more affordable northern Colorado Springs communities to premium properties in Monument and Woodmoor.",
  },
  {
    icon: Compass,
    title: "Planning for PCS Timing",
    text: "PCS moves often compress the homebuying process. Starting your market orientation early — even before orders are finalized — gives you a significant advantage in a competitive market.",
  },
];

const nearbyMarkets = [
  {
    name: "Colorado Springs",
    description: "The primary metro area near USAFA, offering a wide range of neighborhoods, price points, and amenities.",
    href: "/colorado-springs-co-homes-for-sale",
  },
  {
    name: "Monument & Tri-Lakes",
    description: "Communities directly adjacent to USAFA along I-25 — popular with Academy families for short commutes and quality schools.",
    href: "/colorado-springs-co-homes-for-sale",
  },
  {
    name: "Black Forest",
    description: "A semi-rural area northeast of USAFA known for larger lots, wooded settings, and a quieter lifestyle.",
    href: "/colorado-springs-co-homes-for-sale",
  },
  {
    name: "Northern Colorado Springs",
    description: "Established and newer neighborhoods in north Colorado Springs offering more urban amenities with reasonable USAFA commutes.",
    href: "/colorado-springs-co-homes-for-sale",
  },
];

export default function Usafa() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-cream" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
      <SeoHead
        metadata={{
          title: "USAFA Relocation Guide | Colorado Springs Real Estate | My Rock Realty",
          description: "Practical relocation guidance for buyers moving to the US Air Force Academy and the Colorado Springs area. PCS planning, neighborhood orientation, and local market context for military families.",
          canonicalUrl: "https://www.myrockhomes.com/military-relocation/usafa/",
          image: { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/relocations-bg-KPyJJGfxXDepzsW2dzzYt2.webp" },
        }}
        schema={faqSchema ? [faqSchema] : []}
      />

      <div className="bg-charcoal/95 border-b border-white/5">
        <div className="container py-3">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero */}
      <section
        className="relative py-16 sm:py-24 md:py-32 bg-charcoal overflow-hidden"
        style={{ backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-charcoal/82" />
        <div className="container relative">
          <motion.span
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Military Relocation Guide
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream mb-6 max-w-3xl"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Relocating to USAFA & the Colorado Springs Area
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-cream/80 text-lg max-w-2xl mb-8"
          >
            Practical market orientation and homebuying guidance for buyers assigned to the US Air Force Academy. Neighborhood context, PCS planning support, and VA financing guidance for military families.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-gold text-charcoal font-semibold px-6 py-3 rounded hover:bg-gold/90 transition-colors"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Schedule a Consultation <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/military-relocation/"
              className="inline-flex items-center gap-2 border border-cream/40 text-cream font-semibold px-6 py-3 rounded hover:border-cream/70 transition-colors"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              All Military Resources
            </a>
          </motion.div>
        </div>
      </section>

      {/* VA Compliance Disclaimer */}
      <div className="bg-gold/10 border-b border-gold/20">
        <div className="container py-3">
          <p className="text-charcoal/70 text-sm">
            <strong>Educational content only.</strong> Not financial advice, loan origination, or VA benefit counseling. For VA loan specifics, work with a VA-approved lender.
          </p>
        </div>
      </div>

      {/* Orientation Section */}
      <section className="py-16 bg-cream">
        <div className="container">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            What Buyers Should Know About USAFA
          </h2>
          <p className="text-charcoal/70 mb-10 max-w-2xl">
            Understanding the local market before you arrive helps you move confidently when your PCS timeline compresses the search process.
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            {orientationPoints.map((point) => (
              <div key={point.title} className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center">
                  <point.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-semibold text-charcoal" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {point.title}
                </h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Markets */}
      <section className="py-16 bg-charcoal/5">
        <div className="container">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Communities Near USAFA
          </h2>
          <p className="text-charcoal/70 mb-10 max-w-2xl">
            Buyers assigned to USAFA typically focus on Monument, Tri-Lakes, Black Forest, and northern Colorado Springs — each offering different trade-offs in commute, price, and lifestyle.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {nearbyMarkets.map((market) => (
              <a
                key={market.name}
                href={market.href}
                className="block bg-cream rounded-lg p-5 border border-charcoal/10 hover:border-gold/40 transition-colors group"
              >
                <h3
                  className="font-semibold text-charcoal mb-2 group-hover:text-gold transition-colors"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {market.name}
                </h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">{market.description}</p>
                <span className="inline-flex items-center gap-1 text-gold text-sm font-medium mt-3">
                  Explore <ArrowRight className="w-3 h-3" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-links to cluster */}
      <section className="py-12 bg-cream border-t border-charcoal/10">
        <div className="container">
          <h2
            className="text-xl font-bold text-charcoal mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            More Military Relocation Resources
          </h2>
          <div className="flex flex-wrap gap-4">
            <a href="/military-relocation/" className="text-gold font-medium hover:underline">Military & PCS Relocation Hub</a>
            <span className="text-charcoal/30">·</span>
            <a href="/military-relocation/pcs-colorado/" className="text-gold font-medium hover:underline">PCS to Colorado Guide</a>
            <span className="text-charcoal/30">·</span>
            <a href="/military-relocation/va-home-loans-colorado/" className="text-gold font-medium hover:underline">VA Home Loans in Colorado</a>
            <span className="text-charcoal/30">·</span>
            <a href="/military-relocation/fort-carson/" className="text-gold font-medium hover:underline">Fort Carson</a>
            <span className="text-charcoal/30">·</span>
            <a href="/military-relocation/peterson-space-force-base/" className="text-gold font-medium hover:underline">Peterson Space Force Base</a>
            <span className="text-charcoal/30">·</span>
            <a href="/military-relocation/schriever-space-force-base/" className="text-gold font-medium hover:underline">Schriever Space Force Base</a>
            <span className="text-charcoal/30">·</span>
            <a href="/military-relocation/buckley-space-force-base/" className="text-gold font-medium hover:underline">Buckley Space Force Base</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-charcoal/5">
        <div className="container max-w-3xl">
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            USAFA Relocation — Common Questions
          </h2>
          <div className="space-y-3">
            {faqContent.map((item, i) => (
              <div key={i} className="bg-cream rounded-lg border border-charcoal/10 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="font-semibold text-charcoal pr-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gold flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-charcoal/70 text-sm leading-relaxed border-t border-charcoal/10 pt-3">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-charcoal text-cream">
        <div className="container text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Ready to Start Your USAFA Area Home Search?
          </h2>
          <p className="text-cream/70 mb-8 max-w-xl mx-auto">
            Rob works with military buyers across the Colorado Springs area. Schedule a consultation to get market orientation and PCS planning support before your move.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-gold text-charcoal font-semibold px-6 py-3 rounded hover:bg-gold/90 transition-colors"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Schedule a Consultation <ArrowRight className="w-4 h-4" />
            </a>
            <div className="flex flex-col sm:flex-row gap-4 text-cream/70 text-sm">
              <a href="tel:7203636544" className="inline-flex items-center gap-2 hover:text-gold transition-colors">
                <Phone className="w-4 h-4" /> (720) 363-6544
              </a>
              <a href="mailto:rob@myrockhomes.com" className="inline-flex items-center gap-2 hover:text-gold transition-colors">
                <Mail className="w-4 h-4" /> rob@myrockhomes.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
