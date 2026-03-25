/**
 * Coaching — My Rock Realty
 * Design: Front Range Modern — matches existing site design system
 * Palette: Warm charcoal, cream, antique gold
 * Typography: Outfit (display) + Libre Franklin (body)
 */

import { useEffect } from "react";
import SeoHead from "@/components/seo/SeoHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Users,
  BookOpen,
  TrendingUp,
  Globe,
  Award,
  Wrench,
  FileText,
  MessageSquare,
  Target,
  CheckCircle2,
  Phone,
  Mail,
  Handshake,
  BarChart3,
  ClipboardList,
  GraduationCap,
} from "lucide-react";
import LeadForm from "@/components/LeadForm";

const LOGO_URL =
  "/assets/logo.png";
const HEADSHOT_URL =
  "/assets/rob-headshot.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function CTAButton({ className = "", label = "Start a Coaching Conversation" }: { className?: string; label?: string }) {
  return (
    <a
      href="#coaching-contact"
      onClick={(e: React.MouseEvent) => { e.preventDefault(); document.getElementById('coaching-contact')?.scrollIntoView({ behavior: 'smooth' }); }}
      className={`inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 bg-gold text-charcoal hover:bg-gold-light hover:shadow-lg px-7 py-4 text-[15px] sm:text-base no-underline ${className}`}
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {label}
      <ArrowRight size={18} />
    </a>
  );
}

export default function Coaching() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-warm-white">
      <SeoHead
        metadata={{
          title: "Real Estate Coaching for Licensed Agents | My Rock Realty",
          description: "Practical real estate coaching for licensed agents nationwide. Strategy, negotiation, client consultation, and business systems coaching from a former Zillow Agent Coach.",
          canonicalUrl: "https://myrockhomes.com/real-estate-coaching",
          breadcrumbs: [
            { label: "Coaching", href: "/real-estate-coaching" },
          ],
        }}
      />
      {/* ═══════════════════════════════════════════════════
          HEADER
      ═══════════════════════════════════════════════════ */}
      <header className="bg-charcoal">
        <div className="container flex items-center justify-center sm:justify-between py-3 sm:py-4">
          <a href="/" className="flex items-center">
            <img
              src={LOGO_URL}
              alt="My Rock Realty"
              className="h-[7rem] sm:h-[6.5rem] md:h-[7rem] lg:h-[7.5rem] w-auto drop-shadow-lg"
              width="120"
              height="120"
              fetchPriority="high"
            />
          </a>
          <a
            href="/"
            className="absolute top-4 right-4 sm:static text-cream/70 hover:text-gold text-xs sm:text-sm font-medium transition-colors inline-flex items-center gap-1.5"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <ArrowLeft size={14} />
            Back to Main Site
          </a>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════
          BREADCRUMBS
      ═══════════════════════════════════════════════════ */}
      <div className="bg-charcoal/95 border-b border-white/10">
        <div className="container py-3 sm:py-4">
          <Breadcrumbs
            items={[
              { label: "Coaching", href: "/real-estate-coaching" },
            ]}
            siteUrl="https://myrockhomes.com"
            className="py-0"
            listClassName="text-xs sm:text-sm text-cream/60"
            itemClassName="text-cream/60"
            separator="/"
          />
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-charcoal overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/hero-bg-dyEKuHhWXn8eKxpjETtCvy.webp)`,
            backgroundPosition: "center 30%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/75 via-charcoal/85 to-charcoal/95" />

        <div className="container relative z-10 py-14 sm:py-20 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
              <span
                className="text-gold text-xs sm:text-sm font-semibold tracking-wide"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                COACHING FOR LICENSED AGENTS · NATIONWIDE
              </span>
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream leading-tight mb-5"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Practical Coaching to Help Licensed Agents Serve Clients Better and Build a More Consistent Business
            </h1>
            <p className="text-cream/80 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Customized coaching built around actual transaction experience — not motivational scripts or one-size-fits-all programs. This page is for licensed agents. If you're exploring a real estate career or pre-license education, the Join Us page may be a better starting point.
            </p>

            <CTAButton />
          </div>
        </div>

        {/* Trust strip */}
        <div className="relative z-10 bg-charcoal-light/30 border-t border-white/5">
          <div className="container py-5 sm:py-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
              {[
                { icon: Award, label: "In Real Estate\nSince 2018" },
                { icon: TrendingUp, label: "25+ Years in\nSales & Negotiations" },
                { icon: Users, label: "Former Zillow\nAgent Coach" },
                { icon: GraduationCap, label: "Education-First\nApproach" },
              ].map(({ icon: Icon, label }, i) => (
                <div key={i} className="text-center">
                  <Icon size={20} className="text-gold mx-auto mb-2" />
                  <p
                    className="text-cream/70 text-xs sm:text-sm leading-snug whitespace-pre-line"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          WHO COACHING IS FOR
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-warm-white">
        <div className="container max-w-4xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-10">
            <p
              className="text-gold text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Who It's For
            </p>
            <h2
              className="text-xl sm:text-3xl font-bold text-charcoal leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Coaching for Licensed Agents at Different Stages
            </h2>
            <p className="text-charcoal/65 text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              Whether you're a newer agent building your foundation or an experienced agent sharpening an already-active business, the focus is on practical improvement grounded in real transaction experience — not generic advice.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 sm:p-7 border border-charcoal/5 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <BookOpen size={17} className="text-gold" />
                </div>
                <h3
                  className="text-base sm:text-lg font-bold text-charcoal"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Newer Agents
                </h3>
              </div>
              <p className="text-charcoal/65 text-[14px] sm:text-[15px] leading-relaxed">
                Agents who are building their business and want real structure — from buyer and seller consultations to contract strategy, client communication, and lead conversion. A clear framework from the start saves time and builds confidence.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.07 }}
              className="bg-white rounded-lg p-6 sm:p-7 border border-charcoal/5 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <Target size={17} className="text-gold" />
                </div>
                <h3
                  className="text-base sm:text-lg font-bold text-charcoal"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Experienced Agents
                </h3>
              </div>
              <p className="text-charcoal/65 text-[14px] sm:text-[15px] leading-relaxed">
                Agents who are already active but want sharper consultations, stronger contracts, better negotiation outcomes, or more consistent systems. Sometimes the biggest improvements come from refining what's already working.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          WHAT COACHING CAN COVER
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-charcoal">
        <div className="container max-w-5xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-10">
            <p
              className="text-gold text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              What Coaching Can Cover
            </p>
            <h2
              className="text-xl sm:text-3xl font-bold text-cream leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Practical. Specific. Built Around Your Business.
            </h2>
            <p className="text-cream/65 text-base leading-relaxed mt-4 max-w-2xl mx-auto">
              Coaching topics are tailored to your goals and current stage. The following areas are examples of what may be included — not a fixed curriculum.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {[
              {
                icon: Users,
                title: "Buyer & Seller Consultations",
                desc: "Structure, flow, and communication for effective buyer and seller consultations that build trust and move clients forward.",
              },
              {
                icon: Handshake,
                title: "Financing & Program Conversations",
                desc: "How to discuss conventional, FHA, VA, USDA, and down payment assistance programs with buyers in a clear, educational way.",
              },
              {
                icon: FileText,
                title: "Contract Strategy",
                desc: "Understanding contract terms, contingencies, and how to structure offers that protect your clients and improve outcomes.",
              },
              {
                icon: BarChart3,
                title: "Negotiation Approach",
                desc: "Practical negotiation frameworks drawn from 25+ years of sales and transaction experience.",
              },
              {
                icon: MessageSquare,
                title: "Scripts & Follow-Up Frameworks",
                desc: "Conversation frameworks and follow-up processes that feel natural, professional, and client-centered.",
              },
              {
                icon: TrendingUp,
                title: "Lead Handling & Conversion",
                desc: "How to handle inquiries, structure initial conversations, and move leads through a consistent, professional process.",
              },
              {
                icon: ClipboardList,
                title: "Consultation Structure",
                desc: "How to run buyer and seller consultations that are organized, credible, and focused on the client's actual situation.",
              },
              {
                icon: GraduationCap,
                title: "Agent Interview Preparation",
                desc: "Preparing for listing presentations and buyer consultations where clients are evaluating multiple agents.",
              },
              {
                icon: Wrench,
                title: "Systems & Process Refinement",
                desc: "Practical improvements to how you manage clients, transactions, and business operations — focused on efficiency and consistency.",
              },
              {
                icon: Target,
                title: "Transaction Strategy",
                desc: "How to think through and execute transactions strategically — from offer to close — with your client's interests at the center.",
              },
              {
                icon: CheckCircle2,
                title: "Accountability & Business Growth",
                desc: "Goal-setting, accountability structures, and business growth support designed to help you build a sustainable practice.",
              },
              {
                icon: BookOpen,
                title: "Real-World Application",
                desc: "Coaching grounded in actual transaction experience — not theory. Practical guidance you can apply immediately.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="flex items-start gap-3.5 bg-white/5 border border-white/10 rounded-lg p-5"
              >
                <div className="shrink-0 w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center mt-0.5">
                  <item.icon size={15} className="text-gold" />
                </div>
                <div>
                  <p
                    className="text-[13px] sm:text-[14px] font-semibold text-cream mb-1"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {item.title}
                  </p>
                  <p className="text-cream/55 text-[12px] sm:text-[13px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          COACHING STYLE
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-warm-white">
        <div className="container max-w-4xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-10">
            <p
              className="text-gold text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              How Rob Coaches
            </p>
            <h2
              className="text-xl sm:text-3xl font-bold text-charcoal leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Education-First. Customized. Practical.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {[
              {
                icon: BookOpen,
                title: "Education-First",
                desc: "Coaching starts with understanding — your situation, your clients, and the specific areas where sharper knowledge or execution will make the biggest difference.",
              },
              {
                icon: Target,
                title: "Customized to Your Stage",
                desc: "There's no standard curriculum. The focus is on what you actually need — whether that's building foundational structure or refining specific areas of an already-active business.",
              },
              {
                icon: Wrench,
                title: "Practical and Applied",
                desc: "Coaching is grounded in real transaction experience. The goal is guidance you can use immediately — not theory that sounds good but doesn't translate to client work.",
              },
              {
                icon: CheckCircle2,
                title: "Focused on Client Service",
                desc: "Better agent performance ultimately means better outcomes for clients. The coaching approach is built around improving how you serve buyers, sellers, and the people who trust you.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-start gap-3.5 bg-white rounded-lg p-5 border border-charcoal/5 shadow-sm"
              >
                <div className="shrink-0 w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center mt-0.5">
                  <item.icon size={17} className="text-gold" />
                </div>
                <div>
                  <p
                    className="text-[14px] sm:text-[15px] font-semibold text-charcoal mb-1"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {item.title}
                  </p>
                  <p className="text-charcoal/65 text-[13px] sm:text-[14px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          HOW IT WORKS
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-charcoal/5 border-t border-charcoal/5">
        <div className="container max-w-3xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-10">
            <p
              className="text-gold text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              How It Works
            </p>
            <h2
              className="text-xl sm:text-3xl font-bold text-charcoal leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Start with a Conversation
            </h2>
          </motion.div>

          <div className="space-y-5">
            {[
              {
                step: "01",
                title: "Reach Out",
                desc: "Send a message or email with a brief description of where you are in your business and what you're hoping to improve.",
              },
              {
                step: "02",
                title: "Initial Conversation",
                desc: "Rob will connect with you to understand your goals, current situation, and the specific areas where coaching would be most valuable.",
              },
              {
                step: "03",
                title: "Determine Fit and Scope",
                desc: "Coaching structure, cadence, and focus are customized based on your goals and current stage. Options range from targeted single-session work on a specific area to ongoing engagement across multiple topics. The right approach depends on your situation.",
              },
              {
                step: "04",
                title: "Begin",
                desc: "If it's a good fit, you'll start with a clear focus and a practical plan — not a generic program.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-start gap-4 bg-white rounded-lg p-5 sm:p-6 border border-charcoal/5 shadow-sm"
              >
                <div
                  className="shrink-0 text-gold text-xl font-bold w-10 text-right"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {item.step}
                </div>
                <div>
                  <p
                    className="text-[15px] font-semibold text-charcoal mb-1"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {item.title}
                  </p>
                  <p className="text-charcoal/65 text-[13px] sm:text-[14px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 p-5 bg-white rounded-lg border border-charcoal/5 shadow-sm"
          >
            <p className="text-[14px] text-charcoal/70 leading-relaxed text-center">
              Coaching options are customized based on the level of support, goals, and type of coaching needed. Pricing depends on the scope and structure that makes sense for your situation. The first step is a conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ROB BAKER CREDIBILITY
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-warm-white border-t border-gold/10">
        <div className="container max-w-4xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-10">
            <p
              className="text-gold text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Background
            </p>
            <h2
              className="text-xl sm:text-3xl font-bold text-charcoal leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Coaching Grounded in Real Experience
            </h2>
          </motion.div>

          <div className="flex flex-col sm:flex-row items-start gap-8 sm:gap-10">
            {/* Headshot */}
            <div className="mx-auto sm:mx-0 shrink-0 text-center sm:text-left">
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-gold/30 shadow-lg mx-auto sm:mx-0 mb-3">
                <img
                  src={HEADSHOT_URL}
                  alt="Rob Baker"
                  className="w-full h-full object-cover"
                  width="144"
                  height="144"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p
                className="text-sm font-semibold text-charcoal"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Rob Baker
              </p>
              <p className="text-xs text-charcoal/50">Broker/Owner, My Rock Realty, LLC</p>
              <p className="text-xs text-charcoal/40">Lic. ER100078487</p>
            </div>

            {/* Bio */}
            <div className="text-left">
              <p className="text-[15px] sm:text-base text-charcoal/75 leading-relaxed mb-4">
                Rob has been in real estate since 2018 and brings more than 25 years of experience in sales and negotiations. Before launching My Rock Realty, he spent 4.5 years at Zillow® as an Agent Coach & Consultant — working directly with agents to improve strategy, client experience, and business results.
              </p>
              <p className="text-[15px] sm:text-base text-charcoal/75 leading-relaxed mb-6">
                That background informs how Rob approaches coaching: education-first, strategy-driven, and grounded in what actually helps agents serve clients better and build a more sustainable business. Coaching is not motivational content — it's practical guidance based on real transaction experience across buyers, sellers, relocations, land clients, and investor work.
              </p>

              {/* Trust stats */}
              <div className="flex flex-wrap justify-start gap-6">
                <div>
                  <p
                    className="text-2xl font-bold text-gold"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    25+
                  </p>
                  <p className="text-xs text-charcoal/50">Years in Sales</p>
                </div>
                <div>
                  <p
                    className="text-2xl font-bold text-gold"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    4.5
                  </p>
                  <p className="text-xs text-charcoal/50">Years at Zillow</p>
                </div>
                <div>
                  <p
                    className="text-2xl font-bold text-gold"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    50
                  </p>
                  <p className="text-xs text-charcoal/50">State Referral Network</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          INQUIRY FORM
      ═══════════════════════════════════════════════════ */}
      <section id="coaching-contact" className="py-12 sm:py-16 md:py-20 bg-warm-white border-t border-gold/10">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8 text-center">
              <p
                className="text-gold text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Get in Touch
              </p>
              <h3
                className="text-xl sm:text-3xl font-bold text-charcoal leading-tight"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Tell Rob About<br className="hidden sm:block" /> Your Situation
              </h3>
              <p className="text-charcoal/60 text-sm sm:text-base mt-3 max-w-xl mx-auto">
                A brief message about where you are in your business and what you're hoping to improve is the best starting point.
              </p>
            </div>
              <LeadForm
                variant="coaching"
                source="Coaching"
                titleOverride=""
                subtitleOverride=""
              />
          </motion.div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════════════ */}
      <section className="relative bg-charcoal overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/hero-bg-dyEKuHhWXn8eKxpjETtCvy.webp)`,
            backgroundPosition: "center 30%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 to-charcoal/95" />

        <div className="container relative z-10 max-w-2xl mx-auto text-center py-16 sm:py-20">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p
              className="text-gold text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Ready to Explore?
            </p>
            <h2
              className="text-xl sm:text-3xl lg:text-4xl font-bold text-cream mb-5 leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Let's Talk About<br className="hidden sm:block" /> Whether It's a Fit
            </h2>
            <p className="text-cream/70 text-base sm:text-lg leading-relaxed mb-8">
              No pressure, no pitch. Just a straightforward conversation about what you're working on, what coaching might look like, and whether it makes sense for where you want to go.
            </p>

            <CTAButton className="mb-6" />

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-cream/50 text-sm mt-4">
              <a
                href="tel:7203636544"
                className="inline-flex items-center gap-1.5 hover:text-gold transition-colors"
              >
                <Phone size={14} />
                (720) 363-6544
              </a>
              <span className="hidden sm:block">·</span>
              <a
                href="mailto:coaching@myrockhomes.com"
                className="inline-flex items-center gap-1.5 hover:text-gold transition-colors"
              >
                <Mail size={14} />
                coaching@myrockhomes.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════════ */}
      <footer className="bg-charcoal border-t border-white/5">
        <div className="container py-8 sm:py-10">
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
            <div className="text-center sm:text-left">
              <img
                src={LOGO_URL}
                alt="My Rock Realty"
                className="h-16 sm:h-20 w-auto mx-auto sm:mx-0 mb-3"
                width="80"
                height="80"
                loading="lazy"
                decoding="async"
              />
              <p className="text-cream/50 text-xs leading-relaxed">
                My Rock Realty, LLC
                <br />
                Rob Baker, Broker/Owner
                <br />
                Lic. ER100078487
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 text-sm text-center sm:text-left">
              <div>
                <p
                  className="text-white font-semibold mb-3 text-sm"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Navigation
                </p>
                <div className="space-y-2">
                  <a href="/" className="block text-cream/50 hover:text-gold transition-colors">Home</a>
                  <a href="/colorado-home-buying-workshop" className="block text-cream/50 hover:text-gold transition-colors">Workshop</a>
                  <a href="/join-us" className="block text-cream/50 hover:text-gold transition-colors">Join Our Team</a>
                </div>
              </div>
              <div>
                <p
                  className="text-white font-semibold mb-3 text-sm"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Legal
                </p>
                <div className="space-y-2">
                  <a href="/privacy" className="block text-cream/50 hover:text-gold transition-colors">Privacy Policy</a>
                  <a href="/terms" className="block text-cream/50 hover:text-gold transition-colors">Terms</a>
                  <a href="/fair-housing" className="block text-cream/50 hover:text-gold transition-colors">Fair Housing</a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-cream/30 text-xs">
              &copy; {new Date().getFullYear()} My Rock Realty, LLC. All rights reserved.
            </p>
            <p className="text-cream/25 text-xs text-center sm:text-right max-w-sm">
              My Rock Realty, LLC · Colorado Real Estate License ER100078487
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
