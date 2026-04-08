/**
 * Military & PCS Relocation Hub — My Rock Realty
 * /military-relocation/
 * Design: Front Range Modern — matches existing site design system
 * Palette: Warm charcoal (#292524), cream (#F5F0EB), antique gold (#C9A96E)
 * Typography: Outfit (display) + Libre Franklin (body)
 */
import { useState } from "react";
import SeoHead from "@/components/seo/SeoHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { motion } from "framer-motion";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import {
  ArrowRight,
  Shield,
  MapPin,
  Home,
  ChevronDown,
  Phone,
  Mail,
  Compass,
  Users,
  BookOpen,
  Video,
  Map,
  ClipboardList,
  Send,
  Loader2,
  CheckCircle,
} from "lucide-react";

const DENVER_HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/denver-rowhouses-hero_2f59d4ac.jpg";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "Can Rob help military buyers who are not yet in Colorado?",
    answer:
      "Yes. Rob regularly works with buyers who are planning a PCS move to Colorado from out of state. He can provide market orientation, neighborhood guidance, and support for buyers navigating the process remotely.",
  },
  {
    question: "Does Rob specialize in VA home loans?",
    answer:
      "Rob provides educational guidance on VA homebuying and works with buyers using VA financing. For specific VA loan questions, buyers should work directly with a VA-approved lender.",
  },
  {
    question: "What Colorado areas does Rob cover for military and PCS buyers?",
    answer:
      "Rob covers the Denver metro area, Colorado Springs, Fort Collins, and surrounding communities. Many military buyers are relocating near Colorado's major installations, and Rob has experience supporting buyers across these markets.",
  },
  {
    question: "How does PCS timing affect the homebuying process in Colorado?",
    answer:
      "PCS timelines can compress the homebuying process significantly. Rob helps military buyers understand how to plan their search, what to prioritize given their timeline, and how to navigate the Colorado market efficiently.",
  },
  {
    question: "Should military buyers rent or buy when PCS-ing to Colorado?",
    answer:
      "The rent-vs-buy decision depends on tour length, market conditions, personal financial goals, and how long the buyer expects to stay. Rob can help military buyers think through the relevant factors for their specific situation.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Military & PCS Relocation", url: "/military-relocation/" },
];

/* ─── Core Planning Guides ─── */
const corePlanningPaths = [
  {
    icon: MapPin,
    title: "PCS Moves to Colorado",
    description:
      "Practical guidance on PCS timing, rent-vs-buy decisions, and Colorado market orientation for buyers relocating on military orders.",
    href: "/military-relocation/pcs-colorado/",
    cta: "PCS Colorado Guide",
  },
  {
    icon: Shield,
    title: "VA Home Loans in Colorado",
    description:
      "Educational overview of VA homebuying benefits, how the process works in Colorado, and what buyers should know before starting their search.",
    href: "/military-relocation/va-home-loans-colorado/",
    cta: "VA Homebuying Guide",
  },
  {
    icon: ClipboardList,
    title: "PCS Timeline Checklist",
    description:
      "A phase-by-phase checklist covering early planning through closing and settlement for military buyers relocating to Colorado.",
    href: "/military-relocation/pcs-timeline-checklist/",
    cta: "PCS Timeline Checklist",
  },
];

/* ─── Support Resources ─── */
const supportResourcePaths = [
  {
    icon: Users,
    title: "Military Spouses Buying in Colorado",
    description:
      "Practical guidance for military spouses navigating PCS moves, deployment timelines, and the Colorado homebuying process independently or remotely.",
    href: "/military-relocation/military-spouses-buying-colorado/",
    cta: "Military Spouses Guide",
  },
  {
    icon: Shield,
    title: "Veterans Buying in Colorado",
    description:
      "Educational homebuying guidance for veterans considering a Colorado purchase, including VA loan context and market orientation.",
    href: "/military-relocation/veterans-buying-colorado/",
    cta: "Veterans Buying Guide",
  },
  {
    icon: Home,
    title: "Temporary Housing — Colorado Springs",
    description:
      "Planning guidance on temporary housing timing, rent-vs-buy decisions, and transition considerations for PCS buyers arriving in Colorado Springs.",
    href: "/military-relocation/temporary-housing-colorado-springs/",
    cta: "Temporary Housing Guide",
  },
  {
    icon: Video,
    title: "Remote Home Tours",
    description:
      "Recorded video tours, live virtual tours, and in-person tour blocks for military and PCS buyers who are not yet local to Colorado.",
    href: "/military-relocation/remote-home-tours/",
    cta: "Remote Home Tours",
  },
  {
    icon: Map,
    title: "PCS Relocation Tour Support",
    description:
      "Structured remote consultation packages for PCS families evaluating housing options in Colorado Springs or Denver before arrival. 5-Tour and 10-Tour packages available.",
    href: "/military-relocation/pcs-relocation-tour-support/",
    cta: "Tour Support Packages",
  },
];

/* ─── Base-Specific Community Guides ─── */
const baseGuideLinks = [
  { label: "Fort Carson", sub: "Colorado Springs area", href: "/military-relocation/fort-carson/" },
  { label: "Peterson Space Force Base", sub: "Colorado Springs area", href: "/military-relocation/peterson-space-force-base/" },
  { label: "Schriever Space Force Base", sub: "Colorado Springs area", href: "/military-relocation/schriever-space-force-base/" },
  { label: "Buckley Space Force Base", sub: "Denver metro / Aurora", href: "/military-relocation/buckley-space-force-base/" },
  { label: "US Air Force Academy", sub: "Colorado Springs / Monument area", href: "/military-relocation/us-air-force-academy/" },
];

/* ─── Best Communities Near Base ─── */
const bestCommunitiesLinks = [
  {
    label: "Near Fort Carson",
    href: "/military-relocation/best-communities-near-fort-carson/",
    context: "Colorado Springs south-side & Fountain corridor",
  },
  {
    label: "Near Peterson Space Force Base",
    href: "/military-relocation/best-communities-near-peterson-space-force-base/",
    context: "Colorado Springs east-side & Falcon corridor",
  },
  {
    label: "Near Schriever Space Force Base",
    href: "/military-relocation/best-communities-near-schriever-space-force-base/",
    context: "Falcon, Peyton & east-of-city planning",
  },
  {
    label: "Near Buckley Space Force Base",
    href: "/military-relocation/best-communities-near-buckley-space-force-base/",
    context: "Aurora & Denver metro planning",
  },
];

/* ─── Audience Callouts ─── */
const audiences = [
  {
    icon: Compass,
    label: "Active Duty",
    text: "Navigating a PCS move or planning ahead for a future Colorado assignment.",
  },
  {
    icon: Users,
    label: "Military Spouses",
    text: "Managing the homebuying process around deployment schedules and family needs.",
  },
  {
    icon: Shield,
    label: "Veterans",
    text: "Settling in Colorado and exploring VA homebuying benefits for the first time or again.",
  },
  {
    icon: Home,
    label: "PCS Buyers",
    text: "Moving to Colorado on orders and needing local market guidance quickly.",
  },
];

/* ─── Shared link card component ─── */
function LinkCard({ label, sub, href }: { label: string; sub: string; href: string }) {
  return (
    <a
      href={href}
      className="group flex items-center justify-between p-4 rounded bg-white border border-cream-dark/60 hover:border-gold/40 transition-all hover:shadow-md hover:shadow-gold/5"
    >
      <div>
        <span
          className="block font-medium text-charcoal text-[15px] group-hover:text-gold-dark transition-colors"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          {label}
        </span>
        <span className="text-charcoal-light/50 text-xs mt-0.5 block">{sub}</span>
      </div>
      <ArrowRight size={16} className="text-gold-dark opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
    </a>
  );
}

export default function MilitaryRelocation() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
    if (!formData.name.trim() || !formData.email.trim()) {
      toast.error("Please provide your name and email.");
      return;
    }
    contactMutation.mutate({
      name: formData.name,
      email: formData.email,
      phone: formData.phone || undefined,
      type: "Military Relocation",
      interests: ["Military Relocation"],
      source: "Military Relocation",
      message: `[Military Relocation Inquiry]\n\n${formData.message}`,
    });
  };

  return (
    <div className="hub-page min-h-screen bg-cream" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
      <SeoHead
        metadata={{
          title: "Military & PCS Relocation in Colorado | My Rock Realty",
          description: "Colorado real estate support for active duty, veterans, military spouses, and PCS buyers. VA homebuying guidance, PCS planning, and local market expertise across Denver, Colorado Springs, and Fort Collins.",
          canonicalUrl: "https://myrockhomes.com/military-relocation/",
          image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/relocations-bg-KPyJJGfxXDepzsW2dzzYt2.webp",
        }}
        schema={[faqSchema]}
        />

      {/* ─── Breadcrumbs ─── */}
      <div className="bg-charcoal/95 border-b border-white/5">
        <div className="container py-3">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* ─── Hero ─── */}
      <section
        className="relative py-16 sm:py-24 md:py-32 bg-charcoal overflow-hidden"
        style={{
          backgroundImage: `url(${DENVER_HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-charcoal/80" />
        <div className="container relative">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Specialty Resource Center
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5 max-w-3xl"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Military &amp; PCS Relocation in Colorado
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-cream/75 text-base sm:text-lg leading-relaxed max-w-2xl mb-8"
          >
            Colorado real estate support for active duty, veterans, military spouses, and PCS buyers.
            Practical guidance for navigating the Colorado market — whether you're months out or actively searching.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact-rob"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { e.preventDefault(); document.getElementById('contact-rob')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-charcoal font-semibold rounded-lg transition-all hover:bg-gold-light hover:shadow-xl hover:shadow-gold/20 active:scale-[0.98] text-[15px] sm:text-base"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Schedule a Consultation
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── Who This Is For ─── */}
      <section className="py-10 sm:py-14 bg-white border-b border-cream-dark/40">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl font-bold text-charcoal mb-6 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Who This Resource Center Serves
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {audiences.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
                className="flex flex-col items-start p-5 rounded bg-cream border border-cream-dark/50"
              >
                <a.icon size={22} className="text-gold-dark mb-3" />
                <span
                  className="font-semibold text-charcoal text-[15px] mb-1.5"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {a.label}
                </span>
                <p className="text-charcoal-light/70 text-sm leading-relaxed">{a.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Core Planning Paths ─── */}
      <section className="py-12 sm:py-20 bg-cream">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-3"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Core Planning Guides
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-charcoal-light/70 text-base mb-8 max-w-2xl"
          >
            Start here for PCS planning, VA homebuying, and timeline guidance.
          </motion.p>
          <div className="grid sm:grid-cols-3 gap-6">
            {corePlanningPaths.map((path, i) => (
              <motion.a
                key={path.href}
                href={path.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i }}
                className="group flex flex-col p-6 rounded bg-white border border-cream-dark/60 hover:border-gold/40 transition-all hover:shadow-lg hover:shadow-gold/5"
              >
                <path.icon size={24} className="text-gold-dark mb-4" />
                <h3
                  className="font-semibold text-charcoal text-[15px] mb-2 group-hover:text-gold-dark transition-colors"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {path.title}
                </h3>
                <p className="text-charcoal-light/70 text-sm leading-relaxed mb-4 flex-1">{path.description}</p>
                <span className="inline-flex items-center gap-1.5 text-gold-dark text-sm font-medium group-hover:gap-2.5 transition-all">
                  {path.cta} <ArrowRight size={14} />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Support Resources ─── */}
      <section className="py-12 sm:py-20 bg-white border-t border-cream-dark/40">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-3"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Support Resources
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-charcoal-light/70 text-base mb-8 max-w-2xl"
          >
            Specialized guidance for military spouses, veterans, remote buyers, and PCS families.
          </motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportResourcePaths.map((path, i) => (
              <motion.a
                key={path.href}
                href={path.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.06 * i }}
                className="group flex flex-col p-6 rounded bg-cream border border-cream-dark/60 hover:border-gold/40 transition-all hover:shadow-lg hover:shadow-gold/5"
              >
                <path.icon size={22} className="text-gold-dark mb-3" />
                <h3
                  className="font-semibold text-charcoal text-[15px] mb-2 group-hover:text-gold-dark transition-colors"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {path.title}
                </h3>
                <p className="text-charcoal-light/70 text-sm leading-relaxed mb-4 flex-1">{path.description}</p>
                <span className="inline-flex items-center gap-1.5 text-gold-dark text-sm font-medium group-hover:gap-2.5 transition-all">
                  {path.cta} <ArrowRight size={14} />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Base-Specific Guides ─── */}
      <section className="py-12 sm:py-20 bg-cream border-t border-cream-dark/40">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-xl sm:text-2xl font-bold text-charcoal mb-2 flex items-center gap-2"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                <BookOpen size={20} className="text-gold-dark" />
                Base-Specific Guides
              </h2>
              <p className="text-charcoal-light/70 text-sm mb-5">
                Community and housing guidance for Colorado's major military installations.
              </p>
              <div className="grid gap-3">
                {baseGuideLinks.map((link) => (
                  <LinkCard key={link.href} label={link.label} sub={link.sub} href={link.href} />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3
                className="text-xl sm:text-2xl font-bold text-charcoal mb-2 flex items-center gap-2"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                <Map size={20} className="text-gold-dark" />
                Best Communities Near Each Base
              </h3>
              <p className="text-charcoal-light/70 text-sm mb-5">
                Neighborhood planning guides for PCS buyers evaluating communities near each installation.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {bestCommunitiesLinks.map((link) => (
                  <LinkCard key={link.href} label={link.label} sub={link.context} href={link.href} />
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Common Questions
          </motion.h2>
          <div className="space-y-3">
            {faqContent.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
                className="border border-cream-dark/60 rounded overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left bg-cream hover:bg-cream-dark/30 transition-colors"
                  aria-expanded={openFaq === i}
                >
                  <span
                    className="font-medium text-charcoal text-[15px] leading-snug"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {item.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-gold-dark shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 pt-2 bg-white">
                    <p className="text-charcoal-light/80 text-[15px] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Contact Form ─── */}
      <section id="contact-rob" className="py-12 sm:py-20 bg-charcoal">
        <div className="container max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Ready to Talk Through Your Colorado Move?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-cream/70 text-[15px] sm:text-base leading-relaxed mb-8 text-center"
          >
            Whether you're months out from a PCS or actively searching, Rob can help you
            understand the Colorado market and plan your next move with confidence.
          </motion.p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10"
            >
              <CheckCircle size={40} className="text-gold mx-auto mb-4" />
              <h3
                className="text-xl font-bold text-white mb-2"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Message Received
              </h3>
              <p className="text-cream/70 text-base leading-relaxed max-w-md mx-auto">
                Thanks for reaching out. Rob will review your message and get back to you shortly.
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="bg-white/5 border border-white/10 rounded-lg p-5 sm:p-8 space-y-4 sm:space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-xs font-semibold text-cream/60 uppercase tracking-wide mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white/10 border border-white/15 rounded-lg text-white text-base placeholder-white/30 focus:border-gold/50 focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-cream/60 uppercase tracking-wide mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white/10 border border-white/15 rounded-lg text-white text-base placeholder-white/30 focus:border-gold/50 focus:outline-none transition-colors"
                    placeholder="you@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-cream/60 uppercase tracking-wide mb-1.5">
                  Phone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white/10 border border-white/15 rounded-lg text-white text-base placeholder-white/30 focus:border-gold/50 focus:outline-none transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-cream/60 uppercase tracking-wide mb-1.5">
                  How can Rob help?
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2.5 bg-white/10 border border-white/15 rounded-lg text-white text-base placeholder-white/30 focus:border-gold/50 focus:outline-none transition-colors resize-none"
                  placeholder="Tell Rob about your situation — PCS timeline, base, questions about the Colorado market..."
                />
              </div>
              <button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gold text-charcoal font-semibold rounded-lg transition-all hover:bg-gold-light hover:shadow-xl hover:shadow-gold/20 active:scale-[0.98] text-[15px] sm:text-base disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {contactMutation.isPending ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </motion.form>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-cream/50 text-sm mt-8">
            <a href="tel:7203636544" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone size={15} />
              (720) 363-6544
            </a>
            <span className="hidden sm:block">·</span>
            <a href="mailto:rob@myrockhomes.com" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail size={15} />
              rob@myrockhomes.com
            </a>
          </div>
        </div>
      </section>

      {/* ─── Back Link ─── */}
      <div className="bg-cream border-t border-cream-dark/40 py-5">
        <div className="container">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-charcoal-light/60 hover:text-gold-dark text-sm transition-colors"
          >
            ← Back to My Rock Realty
          </a>
        </div>
      </div>
    </div>
  );
}
