import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Clock, MapPin, DollarSign, Star, ArrowRight, Phone, Mail, Shield, Users, TrendingUp, Award, Home as HomeIcon, Landmark, Wrench, Banknote, BadgeCheck, Globe } from "lucide-react";

const LOGO_URL = "https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310519663410368883/MyFokdbFMWxFfHiY.png?Expires=1804373851&Signature=tX8Nz-0U25wCRVcyN~gH7soBhlF3NkZUa-fhbO66r4~ix6wF5QJgpPopSr1AHJBk3LYrKIvxfO7YD9vTdqjZjlu3cRO~lkYxkxZTjoEnC4lRTtjG5BAb93p2PDrMuu2aVHq7bLQju4D-2XQxrn4CTm9kL1SbUQFUO-A84x7mFMo~GuyOHMKwN5Y8FJn7Ab31FwMwmSPPSt250S-gmfDDE641SKapGELse-4gAkYO2Uy7HOgsFPNinIzISyHmorDYolNCgA0fVXih1zjLlPmv4tUT4theY~IW3Wg5cuPbxYCSFRkYITYhEoeW1oC1OSZByxIaTDBAmvXWZN~bb7cNlA__&Key-Pair-Id=K2HSFNDJXOU9YS";
const HEADSHOT_URL = "https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310519663410368883/daNVlPqvwXbwkTQz.png?Expires=1804384152&Signature=jZDznTIANoEiBOoHj25iwt4TpWQc5i4A4OIbszucwQcMb-Gpy~FHBqxpq~CWtxVmmhEEThAzrOvOhrg078TNI9S~yyEglVcq-TeGL74eLGgH6I7bk6bOhsr41R5AF-0Z2FEXt3tTfMei81ZyquIUhzv1eyNAeU6StCUimTSoR47XPCk0dsAGLsU97g33GyRX1rm4xC2WPPdEFyremPPiKeeDhewZrIKm9ZM8XMpDSD8SeLcY1PrOBp2hfGwBnU7BUDnMztc3iWXEPLH2TOTph9Mx--TYq3QCj8hy5f1w0KSM7xNWicmLfFc6ncKQTG9cdH9Rto1vSqy5mKE16-8aWQ__&Key-Pair-Id=K2HSFNDJXOU9YS";
const WORKSHOP_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/workshop-section-Yp8jnnKmpb9X4Au9XRWi4s.webp";

// Registration link — points to the AgentFlywheel page CTA
const REGISTER_URL = "https://app.agentflywheel.io/v2/preview/O1ug8Fyojb8kcqbLV5Ju";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/* ─── FAQ Accordion ─── */
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-charcoal/10 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 px-1 text-left gap-4 group"
      >
        <span className="text-[15px] sm:text-base font-semibold text-charcoal leading-snug" style={{ fontFamily: "'Outfit', sans-serif" }}>
          {question}
        </span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-gold transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-60 pb-5" : "max-h-0"}`}
      >
        <p className="text-[14px] sm:text-[15px] text-charcoal/70 leading-relaxed px-1">
          {answer}
        </p>
      </div>
    </div>
  );
}

/* ─── CTA Button ─── */
function CTAButton({ variant = "primary", className = "" }: { variant?: "primary" | "secondary"; className?: string }) {
  return (
    <a
      href={REGISTER_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 ${
        variant === "primary"
          ? "bg-gold text-charcoal hover:bg-gold-light hover:shadow-lg px-7 py-4 text-[15px] sm:text-base"
          : "border-2 border-gold text-gold hover:bg-gold hover:text-charcoal px-6 py-3 text-sm"
      } ${className}`}
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      Reserve Your Free Seat
      <ArrowRight size={18} />
    </a>
  );
}

/* ─── Main Page ─── */
export default function WorkshopDraft() {
  useEffect(() => {
    document.title = "Free Colorado Home Buying Workshop | My Rock Realty";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-warm-white">
      {/* ═══════════════════════════════════════════════════
          HEADER — Logo + back to main site
      ═══════════════════════════════════════════════════ */}
      <header className="bg-charcoal">
        <div className="container flex items-center justify-center sm:justify-between py-3 sm:py-4">
          <a href="/" className="flex items-center">
            <img src={LOGO_URL} alt="My Rock Realty" className="h-[7rem] sm:h-[6.5rem] md:h-[7rem] lg:h-[7.5rem] w-auto drop-shadow-lg" />
          </a>
          <a
            href="/"
            className="absolute top-4 right-4 sm:static text-cream/70 hover:text-gold text-xs sm:text-sm font-medium transition-colors"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Back to Main Site
          </a>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════
          HERO — Workshop headline + trust bar
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-charcoal overflow-hidden">
        {/* Premium hero background — Colorado mountains matching main site */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/hero-bg-dyEKuHhWXn8eKxpjETtCvy.webp)`, backgroundPosition: "center 30%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/75 via-charcoal/85 to-charcoal/95" />

        <div className="container relative z-10 py-12 sm:py-16 lg:py-20">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
              <span className="text-gold text-xs sm:text-sm font-semibold tracking-wide" style={{ fontFamily: "'Outfit', sans-serif" }}>
                FREE WEEKLY WORKSHOP
              </span>
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream leading-tight mb-5"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Colorado Home Buying Workshop
            </h1>
            <p className="text-cream/80 text-base sm:text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
              In just 60 minutes, learn how Colorado home buying programs, seller concessions, and financing strategies may help reduce upfront cash needs — and walk away with a clear, step-by-step roadmap to homeownership.
            </p>

            {/* Workshop details — professional bullet formatting */}
            <div className="text-cream/70 text-sm sm:text-base mb-10">
              <p>Every Tuesday at 6 PM MT • Online (Zoom) • Free — Limited Seats</p>
            </div>

            <CTAButton />
          </div>
        </div>

        {/* Trust strip — clean badge format */}
        <div className="relative z-10 bg-charcoal-light/30 border-t border-white/5">
          <div className="container py-5 sm:py-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-2">
                  <Award size={16} className="text-gold" />
                </div>
                <p className="text-cream/70 text-xs sm:text-sm font-medium leading-tight">In Real Estate<br />Since 2018</p>
              </div>
              <div className="text-center">
                <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-2">
                  <TrendingUp size={16} className="text-gold" />
                </div>
                <p className="text-cream/70 text-xs sm:text-sm font-medium leading-tight">25+ Years in Sales<br />& Negotiations</p>
              </div>
              <div className="text-center">
                <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-2">
                  <BadgeCheck size={16} className="text-gold" />
                </div>
                <p className="text-cream/70 text-xs sm:text-sm font-medium leading-tight">4.5 Years<br />at Zillow</p>
              </div>
              <div className="text-center">
                <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-2">
                  <Globe size={16} className="text-gold" />
                </div>
                <p className="text-cream/70 text-xs sm:text-sm font-medium leading-tight">Referral Network<br />in All 50 States</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          WHAT YOU'LL LEARN — Benefits checklist
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-warm-white">
        <div className="container max-w-4xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-gold text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 text-center" style={{ fontFamily: "'Outfit', sans-serif" }}>
              What You'll Learn
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-charcoal text-center mb-10" style={{ fontFamily: "'Outfit', sans-serif" }}>
              A Clear Roadmap to Homeownership
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {[
              { text: "How Colorado buyer programs, seller concessions, and financing strategies may help reduce upfront cash needs", icon: HomeIcon },
              { text: "Colorado programs explained: FHA, VA, USDA, grants, and down-payment assistance", icon: Landmark },
              { text: "Exact steps from renter to homeowner — a clear, actionable plan", icon: ArrowRight },
              { text: "Avoid costly mistakes that first-time buyers commonly make", icon: Shield },
              { text: "Live Q&A with Rob Baker — get your specific questions answered", icon: Users },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3.5 bg-white rounded-lg p-5 border border-charcoal/5 shadow-sm"
              >
                <div className="shrink-0 w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center mt-0.5">
                  <item.icon size={17} className="text-gold" />
                </div>
                <p className="text-[14px] sm:text-[15px] text-charcoal/80 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-charcoal/50 text-sm mb-1">100% educational — no sales pitch.</p>
            <p className="text-charcoal/50 text-sm">You'll leave with real action steps and resources.</p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          PROGRAMS — What's available
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-cream">
        <div className="container max-w-5xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-gold text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 text-center" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Programs Covered
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-charcoal text-center mb-10" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Discover What You May Qualify For
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {[
              { icon: HomeIcon, title: "Low Down Payment Options", desc: "Learn about low down payment and, for qualified buyers, no down payment loan options that may be available." },
              { icon: Shield, title: "VA Advantage", desc: "Eligible active duty service members, veterans, and surviving spouses may qualify for VA financing benefits, including low or no down payment options." },
              { icon: Banknote, title: "FHA + Assistance Programs", desc: "See how FHA financing and Colorado assistance programs may help reduce upfront costs for qualified buyers." },
              { icon: TrendingUp, title: "Conventional Options", desc: "Explore flexible conventional loan options that may work for qualified buyers with lower down payments." },
              { icon: Wrench, title: "Renovation Financing", desc: "Understand how some buyers use renovation financing to purchase a home and fund eligible improvements." },
              { icon: DollarSign, title: "Seller Concessions Strategy", desc: "Learn how seller concessions may help reduce upfront closing costs. In some transactions, Rob Baker has negotiated more than $20,000 in concessions, though results vary by property, financing, market conditions, and terms." },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-white rounded-lg p-6 border border-charcoal/5 shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <item.icon size={20} className="text-gold" />
                </div>
                <h3 className="text-base font-bold text-charcoal mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {item.title}
                </h3>
                <p className="text-[14px] text-charcoal/65 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <CTAButton />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ABOUT YOUR HOST
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-warm-white">
        <div className="container max-w-4xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-gold text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 text-center" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Your Workshop Host
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-charcoal text-center mb-10" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Meet Rob Baker
            </h2>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Headshot */}
            <div className="shrink-0">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={HEADSHOT_URL}
                  alt="Rob Baker"
                  className="w-full h-full object-cover object-top"
                  style={{ objectPosition: "50% 15%" }}
                />
              </div>
              <div className="mt-3 text-center">
                <p className="text-sm font-semibold text-charcoal" style={{ fontFamily: "'Outfit', sans-serif" }}>Rob Baker</p>
                <p className="text-xs text-charcoal/50">Broker/Owner, My Rock Realty, LLC</p>
                <p className="text-xs text-charcoal/40">Lic. ER100078487</p>
              </div>
            </div>

            {/* Bio */}
            <div className="text-center md:text-left">
              <p className="text-[15px] sm:text-base text-charcoal/75 leading-relaxed mb-4">
                Rob has been in real estate since 2018 and brings more than 25 years of experience in sales and negotiations. Before launching My Rock Realty, he spent 4.5 years at Zillow as an Agent Coach & Consultant, helping agents improve strategy, client experience, and results.
              </p>
              <p className="text-[15px] sm:text-base text-charcoal/75 leading-relaxed mb-6">
                Today, Rob helps Colorado buyers understand home buying programs, seller concessions, and financing options they may not realize are available. This workshop reflects the same education-first approach he brings to every client.
              </p>

              {/* Trust stats */}
              <div className="flex flex-wrap justify-center md:justify-start gap-6">
                <div>
                  <p className="text-2xl font-bold text-gold" style={{ fontFamily: "'Outfit', sans-serif" }}>25+</p>
                  <p className="text-xs text-charcoal/50">Years in Sales</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gold" style={{ fontFamily: "'Outfit', sans-serif" }}>4.5</p>
                  <p className="text-xs text-charcoal/50">Years at Zillow</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gold" style={{ fontFamily: "'Outfit', sans-serif" }}>50</p>
                  <p className="text-xs text-charcoal/50">State Referral Network</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-charcoal">
        <div className="container max-w-4xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-gold text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 text-center" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Testimonials
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-cream text-center mb-10" style={{ fontFamily: "'Outfit', sans-serif" }}>
              What Clients Say
            </h2>
          </motion.div>

          <div className="grid gap-5 sm:gap-6">
            {[
              {
                name: "Holly T.",
                context: "Multiple Buy/Sell Journey",
                quote: "Rob has been my go-to for years. He's helped me sell, buy, and even sell again — and each time it's been smoother than I imagined. This year in Johnstown, he got me into a beautiful new home at under 4% interest. I trust him completely because he always delivers results that feel impossible until he makes them happen.",
              },
              {
                name: "Mark B.",
                context: "Out-of-State Buyer (Missouri to Bailey, CO)",
                quote: "Buying from another state felt overwhelming, but Rob made it easy. He did video walkthroughs of homes so I could shop from Missouri, and when I found the one, he negotiated everything so I only brought about $2,000 to closing. Now I'm living in my dream home in Bailey, Colorado — and it wouldn't have happened without him.",
              },
              {
                name: "Brandon & Logan T.",
                context: "0% Down + Fast Sale",
                quote: "Rob helped us buy our first home with zero down, which was life-changing for us. When it was time to move, he sold that same home in just 5 weeks — and we got well over asking! He truly looks out for his clients, and we couldn't be happier with the results.",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-charcoal-light/40 border border-white/5 rounded-lg p-6 sm:p-8"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-cream/80 text-[14px] sm:text-[15px] leading-relaxed mb-4 italic">
                  "{t.quote}"
                </p>
                <div>
                  <p className="text-cream text-sm font-semibold" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {t.name}
                  </p>
                  <p className="text-cream/40 text-xs">{t.context}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          WHO THIS WORKSHOP IS FOR
      ═══════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16 bg-warm-white/50">
        <div className="container max-w-3xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-5" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Who This Workshop Is For
            </h3>
            <p className="text-charcoal/70 text-[15px] sm:text-base leading-relaxed">
              First-time buyers. Renters exploring homeownership. Current homeowners planning their next purchase. Buyers relocating to Colorado. Anyone who wants clarity before talking to a lender or making a move. If you're curious about your options, this workshop is for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-warm-white">
        <div className="container max-w-3xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-gold text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 text-center" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Common Questions
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-charcoal text-center mb-10" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="bg-white rounded-lg border border-charcoal/5 shadow-sm px-5 sm:px-8">
            <FAQItem
              question="Can I really buy a home in Colorado with little or no money down?"
              answer="Some buyers may qualify for low down payment or no down payment loan programs depending on eligibility. The workshop covers common Colorado buyer programs, seller concessions, and financing strategies that may help reduce upfront cash needed at closing."
            />
            <FAQItem
              question="How much does the workshop cost?"
              answer="It's completely free. Seats are limited each Tuesday at 6:00 PM MST, so we recommend reserving early."
            />
            <FAQItem
              question="Who should attend?"
              answer="First-time buyers, renters, and anyone curious about FHA, VA, USDA, and grant options in Colorado. Whether you're just starting to think about buying or actively searching, you'll get value from this workshop."
            />
            <FAQItem
              question="What credit score do I need?"
              answer="Credit requirements vary by loan type, lender, and overall financial profile. The workshop covers common program guidelines, what lenders typically look for, and practical next steps for buyers who may need more preparation."
            />
            <FAQItem
              question="Is this just a sales pitch?"
              answer="No. This is an educational workshop led by Rob Baker. You'll get actionable steps and resources, not a hard sell. Rob's coaching background at Zillow means the focus is always on education first."
            />
            <FAQItem
              question="What if I'm worried about overpaying or hidden repair issues?"
              answer="Appraisals, professional inspections, and home warranty options can provide peace of mind. The workshop covers how to use market data, comparable sales, and negotiation strategy to make a more informed decision about pricing and condition."
            />
            <FAQItem
              question="What if I'm uncertain about financing or don't have much cash upfront?"
              answer="That's exactly what the workshop addresses. Trusted lender partners and financing programs may help buyers explore options that work for their situation. Seller concessions can also help reduce upfront closing costs in some transactions."
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FINANCING DISCLAIMER
      ═══════════════════════════════════════════════════ */}
      <section className="py-10 sm:py-14 bg-warm-white/50 border-t border-charcoal/5">
        <div className="container max-w-3xl">
          <p className="text-[14px] sm:text-[15px] text-charcoal/70 leading-relaxed text-center">
            <span className="font-semibold text-charcoal">My Rock Realty, LLC is not a mortgage lender.</span> Loan options, approval, rates, and program eligibility are determined by licensed lenders and may vary based on qualifications and current guidelines.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-charcoal-light opacity-80" />
        <div className="container relative z-10 max-w-3xl text-center">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cream leading-tight mb-5"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Ready to Take the First Step Toward Homeownership?
          </h2>
          <p className="text-cream/70 text-[15px] sm:text-base leading-relaxed mb-4 max-w-xl mx-auto">
            Join Rob Baker's free weekly workshop and discover the programs, strategies, and steps that may help Colorado buyers reduce upfront costs and move toward homeownership with more clarity and confidence.
          </p>

          <div className="text-cream/50 text-sm mb-8">
            <p>Every Tuesday at 6 PM MT • Online (Zoom) • Free — Limited Seats</p>
          </div>

          <CTAButton />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════════ */}
      <footer className="bg-charcoal border-t border-white/5">
        <div className="container py-8 sm:py-10">
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
            {/* Left: Logo + business info */}
            <div className="text-center sm:text-left">
              <img src={LOGO_URL} alt="My Rock Realty" className="h-16 sm:h-20 w-auto mx-auto sm:mx-0 mb-3" />
              <p className="text-cream/50 text-xs leading-relaxed">
                My Rock Realty, LLC<br />
                Lic. ER100078487
              </p>

              <div className="flex items-center justify-center sm:justify-start gap-4 mt-2">
                <a href="tel:7203636544" className="text-cream/50 hover:text-gold text-xs flex items-center gap-1 transition-colors">
                  <Phone size={12} /> (720) 363-6544
                </a>
                <a href="mailto:RobBakerRE@gmail.com" className="text-cream/50 hover:text-gold text-xs flex items-center gap-1 transition-colors">
                  <Mail size={12} /> RobBakerRE@gmail.com
                </a>
              </div>
            </div>

            {/* Right: Links */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-cream/40">
              <a href="/" className="hover:text-gold transition-colors">Main Site</a>
              <a href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-gold transition-colors">Terms</a>
              <a href="/fair-housing" className="hover:text-gold transition-colors">Fair Housing</a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 pt-6 border-t border-white/5">
            <p className="text-cream/30 text-[11px] leading-relaxed text-center max-w-3xl mx-auto">
              Information provided is for educational purposes only and is not a commitment to lend. Rob Baker is not a lender, accountant, CPA, or attorney. Please consult with licensed lending, tax, or legal professionals regarding your specific situation. My Rock Realty, LLC is a Colorado-licensed real estate brokerage. All real estate services are provided in compliance with applicable federal, state, and local laws, including the Fair Housing Act.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
