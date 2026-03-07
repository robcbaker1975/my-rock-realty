/**
 * Join Our Team — My Rock Realty
 * Design: Front Range Modern — matches existing site design system
 * Palette: Warm charcoal, cream, antique gold
 * Typography: Outfit (display) + Libre Franklin (body)
 */

import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";
import {
  ArrowRight,
  ArrowLeft,
  Users,
  BookOpen,
  TrendingUp,
  Globe,
  Shield,
  Award,
  Wrench,
  Home as HomeIcon,
  Landmark,
  Banknote,
  BadgeCheck,
  CheckCircle2,
  XCircle,
  ChevronDown,
  Phone,
  Mail,
  Send,
  Loader2,
  CheckCircle,
} from "lucide-react";

const LOGO_URL =
  "https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310519663410368883/MyFokdbFMWxFfHiY.png?Expires=1804373851&Signature=tX8Nz-0U25wCRVcyN~gH7soBhlF3NkZUa-fhbO66r4~ix6wF5QJgpPopSr1AHJBk3LYrKIvxfO7YD9vTdqjZjlu3cRO~lkYxkxZTjoEnC4lRTtjG5BAb93p2PDrMuu2aVHq7bLQju4D-2XQxrn4CTm9kL1SbUQFUO-A84x7mFMo~GuyOHMKwN5Y8FJn7Ab31FwMwmSPPSt250S-gmfDDE641SKapGELse-4gAkYO2Uy7HOgsFPNinIzISyHmorDYolNCgA0fVXih1zjLlPmv4tUT4theY~IW3Wg5cuPbxYCSFRkYITYhEoeW1oC1OSZByxIaTDBAmvXWZN~bb7cNlA__&Key-Pair-Id=K2HSFNDJXOU9YS";
const HEADSHOT_URL =
  "https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310519663410368883/daNVlPqvwXbwkTQz.png?Expires=1804384152&Signature=jZDznTIANoEiBOoHj25iwt4TpWQc5i4A4OIbszucwQcMb-Gpy~FHBqxpq~CWtxVmmhEEThAzrOvOhrg078TNI9S~yyEglVcq-TeGL74eLGgH6I7bk6bOhsr41R5AF-0Z2FEXt3tTfMei81ZyquIUhzv1eyNAeU6StCUimTSoR47XPCk0dsAGLsU97g33GyRX1rm4xC2WPPdEFyremPPiKeeDhewZrIKm9ZM8XMpDSD8SeLcY1PrOBp2hfGwBnU7BUDnMztc3iWXEPLH2TOTph9Mx--TYq3QCj8hy5f1w0KSM7xNWicmLfFc6ncKQTG9cdH9Rto1vSqy5mKE16-8aWQ__&Key-Pair-Id=K2HSFNDJXOU9YS";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function CTAButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="mailto:RobBakerRE@gmail.com?subject=Joining My Rock Realty — Let's Talk"
      className={`inline-flex items-center justify-center gap-2 font-semibold rounded transition-all duration-200 bg-gold text-charcoal hover:bg-gold-light hover:shadow-lg px-7 py-4 text-[15px] sm:text-base ${className}`}
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      Start a Confidential Conversation
      <ArrowRight size={18} />
    </a>
  );
}

export default function JoinUs() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "agent",
    interests: ["Join Our Team"],
    message: "",
  });

  const contactMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      toast.success("Thank you! Rob will be in touch soon.");
    },
    onError: (error) => {
      toast.error(error.message || "Something went wrong. Please try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast.error("Please fill in your name and email.");
      return;
    }
    contactMutation.mutate({
      name: formData.name,
      email: formData.email,
      phone: formData.phone || undefined,
      type: "Agent Inquiry",
      interests: formData.interests,
      message: formData.message || undefined,
    });
  };

  useEffect(() => {
    document.title = "Join Our Team | My Rock Realty";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-warm-white">
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
                BOUTIQUE BROKERAGE · COLORADO
              </span>
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream leading-tight mb-5"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              A Better Place to Build Your Real Estate Business
            </h1>
            <p className="text-cream/80 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              My Rock Realty is a selective, strategy-driven brokerage for agents who want real training, accessible leadership, modern tools, and a structure designed to help them grow — not just a place to hang a license.
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
                { icon: Globe, label: "Referral Network\nin All 50 States" },
              ].map(({ icon: Icon, label }, i) => (
                <div key={i} className="text-center">
                  <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-2">
                    <Icon size={16} className="text-gold" />
                  </div>
                  <p className="text-cream/70 text-xs sm:text-sm font-medium leading-tight whitespace-pre-line">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          WHY AGENTS JOIN
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-warm-white">
        <div className="container max-w-4xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p
              className="text-gold text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 text-center"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Why Agents Join
            </p>
            <h2
              className="text-2xl sm:text-3xl font-bold text-charcoal text-center mb-10"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Support, Strategy, and Standards — Not Just a Split
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {[
              {
                icon: BookOpen,
                title: "Real Training",
                desc: "Structured education on buyer programs, financing strategies, listing services, contract negotiation, and client conversion — not generic advice.",
              },
              {
                icon: Users,
                title: "Accessible Leadership",
                desc: "Rob Baker is directly involved in agent development. You get real access to leadership, not a corporate layer that's hard to reach.",
              },
              {
                icon: TrendingUp,
                title: "Business Growth Support",
                desc: "Success coaching, lead handling frameworks, follow-up best practices, and accountability structures designed to help you build a sustainable business.",
              },
              {
                icon: Globe,
                title: "National Referral Network",
                desc: "A referral network spanning all 50 states creates real business-development opportunity — both inbound referrals and outbound referral revenue.",
              },
              {
                icon: Wrench,
                title: "Modern Tools",
                desc: "Access to modern systems and AI-assisted tools designed to improve efficiency, client communication, and business management.",
              },
              {
                icon: Shield,
                title: "Professionalism Standards",
                desc: "A culture of accountability and professionalism that protects your reputation and the brokerage's — because standards matter to clients.",
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
                  <p className="text-[13px] sm:text-[14px] text-charcoal/65 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          TRAINING, COACHING & SUPPORT
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-cream">
        <div className="container max-w-5xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p
              className="text-gold text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 text-center"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Training & Coaching
            </p>
            <h2
              className="text-2xl sm:text-3xl font-bold text-charcoal text-center mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Built for Agents Who Want to Be Prepared
            </h2>
            <p className="text-charcoal/60 text-center text-sm sm:text-base max-w-2xl mx-auto mb-10">
              Agent development at My Rock Realty covers the full range of what it takes to serve clients well and build a real business.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {[
              {
                icon: HomeIcon,
                title: "Buyer Strategies",
                desc: "Buyer consultation frameworks, program education, offer strategy, and client conversion support.",
              },
              {
                icon: Landmark,
                title: "Financing & Program Education",
                desc: "Conventional, FHA, VA, USDA, down payment assistance, and seller concession strategies — so you can speak confidently with buyers.",
              },
              {
                icon: BadgeCheck,
                title: "Listing & Seller-Side Strategy",
                desc: "Listing presentation support, pricing strategy, marketing guidance, and seller consultation frameworks.",
              },
              {
                icon: Banknote,
                title: "Contract & Negotiation Support",
                desc: "Contract strategy, negotiation frameworks, and transaction support to help you protect your clients and close with confidence.",
              },
              {
                icon: Users,
                title: "Scripts & Process Frameworks",
                desc: "Lead handling scripts, follow-up best practices, and consultation frameworks that help convert conversations into clients.",
              },
              {
                icon: BookOpen,
                title: "Agent Interview Training",
                desc: "Preparation and coaching for agent interviews and client consultations — so you show up ready, not reactive.",
              },
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
                <h3
                  className="text-base font-bold text-charcoal mb-2"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-[14px] text-charcoal/65 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          BUSINESS TYPES WE HELP AGENTS SERVE
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-warm-white">
        <div className="container max-w-4xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p
              className="text-gold text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 text-center"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Client Opportunities
            </p>
            <h2
              className="text-2xl sm:text-3xl font-bold text-charcoal text-center mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Serve the Full Range of Real Estate Clients
            </h2>
            <p className="text-charcoal/60 text-center text-sm sm:text-base max-w-2xl mx-auto mb-10">
              My Rock Realty supports agents across a broad range of client types and transaction categories — not just a narrow niche.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {[
              { icon: HomeIcon, label: "Buyers" },
              { icon: BadgeCheck, label: "Sellers" },
              { icon: Globe, label: "Relocations" },
              { icon: Landmark, label: "Land Clients" },
              { icon: TrendingUp, label: "Investor Clients" },
              { icon: Users, label: "Referral Business" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex flex-col items-center text-center bg-white rounded-lg p-5 border border-charcoal/5 shadow-sm gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <item.icon size={20} className="text-gold" />
                </div>
                <p
                  className="text-sm font-semibold text-charcoal"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-5 bg-white rounded-lg border border-charcoal/5 shadow-sm">
            <p className="text-[14px] text-charcoal/70 leading-relaxed text-center">
              Relocation clients and the national referral network represent a meaningful business-development advantage — both as a source of inbound referral clients and as an opportunity to generate referral revenue by connecting clients moving to other states with trusted agents in our network.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          WHO THIS IS FOR / NOT FOR
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-charcoal">
        <div className="container max-w-4xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p
              className="text-gold text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 text-center"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Fit
            </p>
            <h2
              className="text-2xl sm:text-3xl font-bold text-cream text-center mb-10"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              We're Selective — Intentionally
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {/* Who it's for */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-lg p-6 sm:p-8"
            >
              <div className="flex items-center gap-2 mb-5">
                <CheckCircle2 size={20} className="text-gold shrink-0" />
                <h3
                  className="text-base sm:text-lg font-bold text-cream"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  This is a strong fit if you want:
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Real mentorship and direct access to leadership",
                  "Structured training across buyer, seller, and transaction strategy",
                  "A clear process for lead handling and client conversion",
                  "Support serving buyers, sellers, land clients, investors, and relocation clients",
                  "A national referral network with real business-development value",
                  "Modern tools, including AI-assisted resources",
                  "Accountability and a culture of professionalism",
                  "A brokerage that invests in your growth — whether you're newer or producing",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[14px] text-cream/75 leading-relaxed">
                    <span className="text-gold mt-0.5 shrink-0">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Who it's not for */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 border border-white/10 rounded-lg p-6 sm:p-8"
            >
              <div className="flex items-center gap-2 mb-5">
                <XCircle size={20} className="text-cream/40 shrink-0" />
                <h3
                  className="text-base sm:text-lg font-bold text-cream"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  This may not be the right fit if you're looking for:
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "A license-parking arrangement with no engagement or expectations",
                  "A hands-off environment with no coaching or accountability",
                  "Zero standards or professionalism requirements",
                  "A brokerage that stays out of your way entirely and offers nothing in return",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[14px] text-cream/55 leading-relaxed">
                    <span className="text-cream/30 mt-0.5 shrink-0">·</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-cream/35 text-[13px] leading-relaxed mt-5">
                We respect that different agents want different things. We're simply clear about what we offer and what we expect.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          COMPENSATION & STRUCTURE
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-warm-white">
        <div className="container max-w-3xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p
              className="text-gold text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 text-center"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Compensation & Structure
            </p>
            <h2
              className="text-2xl sm:text-3xl font-bold text-charcoal text-center mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Competitive Structure, Independent Model
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-lg border border-charcoal/5 shadow-sm p-7 sm:p-9 text-center"
          >
            <p className="text-charcoal/75 text-[15px] sm:text-base leading-relaxed mb-4">
              Agents at My Rock Realty operate as independent contractors under a 1099 model. Compensation structures are competitive and discussed directly during the conversation — we keep it straightforward.
            </p>
            <p className="text-charcoal/55 text-[14px] leading-relaxed">
              The goal is a structure that rewards your production and reflects the level of support and resources you receive — without unnecessary complexity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          LEADERSHIP / ROB BAKER CREDIBILITY
      ═══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-cream">
        <div className="container max-w-4xl">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p
              className="text-gold text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 text-center"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Leadership
            </p>
            <h2
              className="text-2xl sm:text-3xl font-bold text-charcoal text-center mb-10"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Who You're Working With
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
                <p
                  className="text-sm font-semibold text-charcoal"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Rob Baker
                </p>
                <p className="text-xs text-charcoal/50">Broker/Owner, My Rock Realty, LLC</p>
                <p className="text-xs text-charcoal/40">Lic. ER100078487</p>
              </div>
            </div>

            {/* Bio */}
            <div className="text-center md:text-left">
              <p className="text-[15px] sm:text-base text-charcoal/75 leading-relaxed mb-4">
                Rob has been in real estate since 2018 and brings more than 25 years of experience in sales and negotiations. Before launching My Rock Realty, he spent 4.5 years at Zillow as an Agent Coach & Consultant — working directly with agents to improve strategy, client experience, and business results.
              </p>
              <p className="text-[15px] sm:text-base text-charcoal/75 leading-relaxed mb-6">
                That background shapes how My Rock Realty operates: education-first, strategy-driven, and focused on practical support across buyer, seller, relocation, land, investor, and referral business. Rob is directly accessible to agents — not a distant figure at the top of a corporate structure.
              </p>

              {/* Trust stats */}
              <div className="flex flex-wrap justify-center md:justify-start gap-6">
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
          AGENT INQUIRY FORM
      ═══════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16 md:py-20 bg-warm-white border-t border-gold/10">
        <div className="container max-w-3xl">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={32} className="text-gold" />
              </div>
              <h3
                className="text-2xl sm:text-3xl font-bold text-charcoal mb-3"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Message Received
              </h3>
              <p className="text-charcoal/70 text-base leading-relaxed">
                Thanks for your interest. Rob will review your message and get back to you shortly.
              </p>
            </motion.div>
          ) : (
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
                  Let's Connect
                </p>
                <h3
                  className="text-2xl sm:text-3xl font-bold text-charcoal"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Tell Us About Your Background
                </h3>
              </div>

              <form
                onSubmit={handleSubmit}
                className="bg-charcoal/5 border border-charcoal/10 rounded-lg p-6 sm:p-8 space-y-5"
              >
                {/* Name & Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-charcoal/70 text-sm font-medium mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-charcoal/15 rounded-lg text-charcoal text-base placeholder-charcoal/30 focus:border-gold/50 focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-charcoal/70 text-sm font-medium mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-charcoal/15 rounded-lg text-charcoal text-base placeholder-charcoal/30 focus:border-gold/50 focus:outline-none transition-colors"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                {/* Phone & License Status */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-charcoal/70 text-sm font-medium mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-charcoal/15 rounded-lg text-charcoal text-base placeholder-charcoal/30 focus:border-gold/50 focus:outline-none transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-charcoal/70 text-sm font-medium mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      License Status
                    </label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-charcoal/15 rounded-lg text-charcoal text-base focus:border-gold/50 focus:outline-none transition-colors appearance-none"
                    >
                      <option value="agent">Active Agent</option>
                      <option value="broker">Broker/Manager</option>
                      <option value="exploring">Exploring Real Estate</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-charcoal/70 text-sm font-medium mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    What are you looking for in your next brokerage?
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-charcoal/15 rounded-lg text-charcoal text-base placeholder-charcoal/30 focus:border-gold/50 focus:outline-none transition-colors resize-none"
                    placeholder="Tell Rob about your goals, experience, current market, or anything else that would help him understand your situation..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gold text-charcoal font-bold text-base rounded-lg transition-all hover:bg-gold-light hover:shadow-lg active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {contactMutation.isPending ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send My Information
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          READY TO EXPLORE
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

        <div className="container relative z-10 max-w-2xl mx-auto text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p
              className="text-gold text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Ready to Explore?
            </p>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cream mb-5"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Let's Talk About Whether It's a Fit
            </h2>
            <p className="text-cream/70 text-base sm:text-lg leading-relaxed mb-8">
              No pressure, no pitch. Just a straightforward conversation about what you're looking for, what we offer, and whether My Rock Realty makes sense for where you want to go.
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
                href="mailto:RobBakerRE@gmail.com"
                className="inline-flex items-center gap-1.5 hover:text-gold transition-colors"
              >
                <Mail size={14} />
                RobBakerRE@gmail.com
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
              />
              <p className="text-cream/50 text-xs leading-relaxed">
                My Rock Realty, LLC
                <br />
                Lic. ER100078487
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-4 mt-2">
                <a
                  href="tel:7203636544"
                  className="text-cream/50 hover:text-gold text-xs flex items-center gap-1 transition-colors"
                >
                  <Phone size={12} /> (720) 363-6544
                </a>
                <a
                  href="mailto:RobBakerRE@gmail.com"
                  className="text-cream/50 hover:text-gold text-xs flex items-center gap-1 transition-colors"
                >
                  <Mail size={12} /> RobBakerRE@gmail.com
                </a>
              </div>
            </div>

            <div className="flex flex-wrap justify-center sm:justify-end gap-x-6 gap-y-2 text-cream/40 text-xs">
              <a href="/" className="hover:text-gold transition-colors">Home</a>
              <Link href="/colorado-home-buying-workshop" className="hover:text-gold transition-colors">Workshop</Link>
              <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-gold transition-colors">Terms</Link>
              <Link href="/fair-housing" className="hover:text-gold transition-colors">Fair Housing</Link>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/5">
            <p className="text-cream/30 text-[11px] leading-relaxed text-center max-w-3xl mx-auto">
              Information provided is for general purposes only. My Rock Realty, LLC is a Colorado-licensed real estate brokerage. All real estate services are provided in compliance with applicable federal, state, and local laws, including the Fair Housing Act.
            </p>
            <p className="text-cream/25 text-[11px] text-center mt-3">
              &copy; {new Date().getFullYear()} My Rock Realty, LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
