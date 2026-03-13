/**
 * VA Home Loans Colorado — My Rock Realty
 * /military-relocation/va-home-loans-colorado/
 * Design: Front Range Modern — matches existing site design system
 * Palette: Warm charcoal (#292524), cream (#F5F0EB), antique gold (#C9A96E)
 * Typography: Outfit (display) + Libre Franklin (body)
 *
 * COMPLIANCE NOTE: This page is educational only. It does not provide
 * financial advice, loan origination, or VA benefit counseling.
 * All VA loan specifics should be confirmed with a VA-approved lender.
 */
import { useState } from "react";
import SeoHead from "@/components/seo/SeoHead";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildFAQPageSchema } from "@/lib/seo/schema";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  CheckCircle2,
  ChevronDown,
  Phone,
  Mail,
  AlertCircle,
  BookOpen,
} from "lucide-react";

const DENVER_HERO_BG = "/images/denver-rowhouses-hero.jpg";

/* ─── FAQ Content ─── */
const faqContent = [
  {
    question: "What is a VA home loan?",
    answer:
      "A VA home loan is a mortgage benefit available to eligible veterans, active-duty service members, and surviving spouses. The loan is issued by private lenders and partially guaranteed by the U.S. Department of Veterans Affairs. This guarantee allows lenders to offer more favorable terms to eligible borrowers. For specific eligibility and loan details, work with a VA-approved lender.",
  },
  {
    question: "Does a VA loan require a down payment in Colorado?",
    answer:
      "In many cases, eligible VA borrowers can purchase a home with no down payment. The specifics depend on the borrower's entitlement status, loan amount, and lender requirements. A VA-approved lender can confirm what applies to your situation.",
  },
  {
    question: "Is there a VA loan limit in Colorado?",
    answer:
      "VA loan limits were removed for eligible borrowers with full entitlement under the Blue Water Navy Vietnam Veterans Act of 2019. Borrowers with reduced entitlement may still have limits. A VA-approved lender can clarify what applies based on your entitlement status.",
  },
  {
    question: "What is the VA funding fee?",
    answer:
      "The VA funding fee is a one-time fee paid to the VA to help sustain the loan program. The amount varies based on the type of service, down payment amount, and whether it's a first or subsequent use of the benefit. Some borrowers are exempt. A VA-approved lender can provide the specific fee applicable to your situation.",
  },
  {
    question: "Can a VA loan be used to buy a home in Colorado Springs or the Denver metro?",
    answer:
      "Yes. VA loans can be used to purchase eligible properties throughout Colorado, including Colorado Springs, the Denver metro, Fort Collins, and other markets. The property must meet VA minimum property requirements, which a VA-approved lender and appraiser will assess.",
  },
  {
    question: "Does Rob originate VA loans?",
    answer:
      "No. Rob is a real estate broker, not a lender. He provides educational guidance on VA homebuying and works with buyers using VA financing. For VA loan origination, pre-approval, and financing specifics, buyers should work directly with a VA-approved lender.",
  },
  {
    question: "How does the VA homebuying process differ from a conventional purchase?",
    answer:
      "The VA homebuying process is similar to a conventional purchase in most respects, with a few key differences: VA appraisals assess both value and minimum property requirements, the funding fee replaces private mortgage insurance (PMI), and some sellers may be less familiar with VA offers. Rob can help buyers navigate these nuances in the Colorado market.",
  },
];

const faqSchema = buildFAQPageSchema(faqContent);

const breadcrumbItems = [
  { label: "Home", url: "/" },
  { label: "Military & PCS Relocation", url: "/military-relocation/" },
  { label: "VA Home Loans Colorado", url: "/military-relocation/va-home-loans-colorado/" },
];

/* ─── Key Concepts ─── */
const keyConcepts = [
  {
    title: "No Down Payment (in Many Cases)",
    body: "Eligible VA borrowers can often purchase a home with no down payment, which is one of the most significant financial benefits of the VA loan program. Specific eligibility and entitlement status determine what applies to each borrower.",
  },
  {
    title: "No Private Mortgage Insurance (PMI)",
    body: "VA loans do not require private mortgage insurance, which is typically required on conventional loans with less than 20% down. Instead, VA borrowers pay a one-time funding fee, which varies based on service type, down payment, and use of the benefit.",
  },
  {
    title: "VA Appraisal Requirements",
    body: "VA appraisals assess both the property's market value and whether it meets VA Minimum Property Requirements (MPRs). Properties that don't meet MPRs may require repairs before the loan can close. This is an important consideration when evaluating properties in Colorado.",
  },
  {
    title: "Entitlement and Loan Limits",
    body: "VA entitlement determines how much the VA will guarantee on a loan. Borrowers with full entitlement generally have no loan limits. Borrowers with reduced entitlement (from a prior VA loan) may have limits. A VA-approved lender can clarify your specific entitlement status.",
  },
];

export default function VaHomeLoansColorado() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-cream" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
      <SeoHead
        title="VA Home Loans in Colorado: Educational Guide | My Rock Realty"
        description="Educational overview of VA home loan benefits for eligible veterans and active-duty buyers in Colorado. Covers key concepts, the homebuying process, and common questions. Not financial advice."
        canonicalUrl="https://www.myrockhomes.com/military-relocation/va-home-loans-colorado/"
        ogImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/relocations-bg-KPyJJGfxXDepzsW2dzzYt2.webp"
        schema={faqSchema}
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
            Military &amp; PCS Relocation
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5 max-w-3xl"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            VA Home Loans in Colorado:{" "}
            <span className="text-gold">Educational Guide</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-cream/80 text-[15px] sm:text-lg leading-relaxed max-w-2xl mb-8"
          >
            An educational overview of VA home loan benefits for eligible veterans and
            active-duty buyers purchasing in Colorado. This guide covers key concepts,
            the homebuying process, and common questions — not financial advice.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#contact-rob"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-charcoal font-semibold rounded-lg transition-all hover:bg-gold-light hover:shadow-xl hover:shadow-gold/20 active:scale-[0.98] text-[15px] sm:text-base"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Talk to Rob About VA Homebuying
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/military-relocation/"
              className="group inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-cream/80 font-medium rounded-lg transition-all hover:border-gold/40 hover:text-gold text-[15px] sm:text-base"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              ← Military Relocation Hub
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── Compliance Disclaimer ─── */}
      <div className="bg-gold/10 border-b border-gold/20">
        <div className="container py-4">
          <div className="flex items-start gap-3">
            <AlertCircle size={16} className="text-gold-dark mt-0.5 shrink-0" />
            <p className="text-charcoal-light/70 text-sm leading-relaxed">
              <strong className="text-charcoal-light/90 font-medium">Educational content only.</strong>{" "}
              This guide provides general information about VA home loan benefits. It is not
              financial advice, loan origination, or VA benefit counseling. All VA loan specifics —
              including eligibility, entitlement, rates, and terms — should be confirmed with a
              VA-approved lender.
            </p>
          </div>
        </div>
      </div>

      {/* ─── Key Concepts ─── */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-3"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Key VA Loan Concepts for Colorado Buyers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-charcoal-light/70 text-[15px] sm:text-base leading-relaxed max-w-2xl mb-10"
          >
            These are the core concepts that VA buyers in Colorado should understand before
            starting their home search. For specifics, work with a VA-approved lender.
          </motion.p>
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-7">
            {keyConcepts.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i }}
                className="p-6 sm:p-7 rounded bg-cream border border-cream-dark/50"
              >
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 size={18} className="text-gold-dark mt-0.5 shrink-0" />
                  <h3
                    className="text-lg font-semibold text-charcoal"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                </div>
                <p className="text-charcoal-light/70 text-[15px] leading-relaxed pl-7">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How Rob Helps ─── */}
      <section className="py-12 sm:py-20 bg-cream">
        <div className="container max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-charcoal mb-5"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            How Rob Supports VA Buyers in Colorado
          </motion.h2>
          <div className="space-y-5 text-charcoal-light/80 text-[15px] leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Rob is a real estate broker, not a lender. His role in a VA transaction is to
              help buyers navigate the Colorado market, identify properties that are likely to
              meet VA appraisal requirements, and manage the real estate side of the transaction.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              VA buyers often face specific challenges in competitive markets — some sellers
              are less familiar with VA offers, and VA appraisals can occasionally surface
              property condition issues. Rob can help buyers understand these dynamics and
              approach their search with realistic expectations.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              For VA loan origination, pre-approval, Certificate of Eligibility (COE), and
              financing specifics, buyers should work directly with a VA-approved lender.
              Rob can refer buyers to lenders he's worked with, but does not originate or
              advise on loans.
            </motion.p>
          </div>

          {/* Cross-link to PCS page */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 p-5 sm:p-6 rounded bg-charcoal/5 border border-charcoal/10"
          >
            <div className="flex items-start gap-3">
              <BookOpen size={18} className="text-gold-dark mt-0.5 shrink-0" />
              <div>
                <p className="text-charcoal font-medium text-[15px] mb-1">
                  PCS-ing to Colorado?
                </p>
                <p className="text-charcoal-light/70 text-sm leading-relaxed mb-3">
                  See the PCS Colorado guide for practical guidance on timing, rent-vs-buy
                  decisions, and Colorado market orientation for military buyers.
                </p>
                <a
                  href="/military-relocation/pcs-colorado/"
                  className="inline-flex items-center gap-2 text-gold-dark font-medium text-sm hover:text-gold transition-colors"
                >
                  PCS Colorado Guide
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </motion.div>
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
            VA Home Loans Colorado: Common Questions
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

      {/* ─── Contact CTA ─── */}
      <section id="contact-rob" className="py-12 sm:py-20 bg-charcoal">
        <div className="container max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Questions About VA Homebuying in Colorado?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-cream/70 text-[15px] sm:text-base leading-relaxed mb-8"
          >
            Rob can help you understand the Colorado market and what to expect as a VA buyer.
            For loan origination and financing specifics, he can also connect you with a
            VA-approved lender.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <a
              href="/#contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-charcoal font-semibold rounded-lg transition-all hover:bg-gold-light hover:shadow-xl hover:shadow-gold/20 active:scale-[0.98] text-[15px] sm:text-base"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Schedule a Consultation
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-cream/50 text-sm">
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

      {/* ─── Back Links ─── */}
      <div className="bg-cream border-t border-cream-dark/40 py-5">
        <div className="container flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
          <a
            href="/military-relocation/"
            className="inline-flex items-center gap-2 text-charcoal-light/60 hover:text-gold-dark text-sm transition-colors"
          >
            ← Military &amp; PCS Relocation
          </a>
          <span className="hidden sm:block text-charcoal-light/30">·</span>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-charcoal-light/60 hover:text-gold-dark text-sm transition-colors"
          >
            My Rock Realty Home
          </a>
        </div>
      </div>
    </div>
  );
}
