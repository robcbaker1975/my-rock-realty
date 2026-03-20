/**
 * Accessibility Statement — My Rock Realty
 * Design: Front Range Modern — matches existing site design system
 * Palette: Warm charcoal, cream, antique gold
 * Typography: Outfit (display) + Libre Franklin (body)
 */

import SeoHead from "@/components/seo/SeoHead";
import { ArrowLeft, Phone, Mail } from "lucide-react";

export default function Accessibility() {
  return (
    <div className="min-h-screen bg-warm-white">
      <SeoHead
        metadata={{
          title: "Accessibility Statement | My Rock Realty",
          description: "My Rock Realty is committed to web accessibility. Learn about our accessibility features and how to contact us with accessibility concerns.",
          canonicalUrl: "https://myrockhomes.com/accessibility",
        }}
      />
      {/* ═══════════════════════════════════════════════════
          HEADER
      ═══════════════════════════════════════════════════ */}
      <header className="bg-charcoal border-b border-white/5">
        <div className="container py-5 sm:py-6 flex items-center justify-between">
          <a href="/" className="text-cream/70 hover:text-gold text-xs sm:text-sm font-medium transition-colors inline-flex items-center gap-1.5">
            <ArrowLeft size={14} />
            Back to Main Site
          </a>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════
          HERO / TITLE
      ═══════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16 md:py-20 bg-warm-white border-b border-gold/10">
        <div className="container max-w-3xl">
          <h1
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-4 leading-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Accessibility Statement
          </h1>
          <p className="text-base sm:text-lg text-charcoal/70 leading-relaxed">
            My Rock Realty is committed to making our website accessible and usable for as many people as possible.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          COMMITMENT
      ═══════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16 md:py-20 bg-white border-b border-gold/10">
        <div className="container max-w-3xl">
          <div className="bg-cream/30 rounded-lg p-6 sm:p-8 border border-gold/20">
            <h2
              className="text-xl sm:text-2xl font-bold text-charcoal mb-5"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Our Commitment
            </h2>
            <div className="space-y-4 text-[15px] sm:text-base text-charcoal/75 leading-relaxed">
              <p>
                We believe that everyone should have equal access to information and services, regardless of their abilities or the technology they use. We are committed to continuously improving our website to ensure it is accessible to all users, including those with disabilities.
              </p>
              <p>
                We aim to follow generally recognized web accessibility best practices and standards. Our website is designed to be navigable using keyboard controls, screen readers, and other assistive technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ASSISTANCE & FEEDBACK
      ═══════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16 md:py-20 bg-warm-white border-b border-gold/10">
        <div className="container max-w-3xl">
          <h2
            className="text-xl sm:text-2xl font-bold text-charcoal mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Need Help?
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-base font-semibold text-charcoal mb-3">
                If you experience difficulty accessing our website
              </h3>
              <p className="text-[15px] sm:text-base text-charcoal/75 leading-relaxed mb-4">
                If you have trouble viewing, navigating, or using any part of this website, please contact us. We welcome your feedback and will make reasonable efforts to address accessibility issues where possible.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-charcoal mb-3">
                Describe the issue
              </h3>
              <p className="text-[15px] sm:text-base text-charcoal/75 leading-relaxed">
                When you reach out, please describe the specific issue you're experiencing, the page or feature affected, and the device or browser you're using. This information helps us respond quickly and effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CONTACT
      ═══════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container max-w-3xl">
          <h2
            className="text-xl sm:text-2xl font-bold text-charcoal mb-8"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Contact Us for Accessibility Support
          </h2>

          <div className="bg-charcoal rounded-lg p-6 sm:p-8 space-y-5">
            <div>
              <p className="text-cream/50 text-xs font-semibold uppercase tracking-wide mb-2">
                Name
              </p>
              <p className="text-cream font-semibold">Rob Baker</p>
              <p className="text-cream/70 text-sm">Broker/Owner, My Rock Realty, LLC</p>
            </div>

            <div className="border-t border-white/10 pt-5">
              <p className="text-cream/50 text-xs font-semibold uppercase tracking-wide mb-2">
                Phone
              </p>
              <a
                href="tel:+17203636544"
                className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-medium"
              >
                <Phone size={16} />
                (720) 363-6544
              </a>
            </div>

            <div className="border-t border-white/10 pt-5">
              <p className="text-cream/50 text-xs font-semibold uppercase tracking-wide mb-2">
                Email
              </p>
              <a
                href="mailto:support@myrockhomes.com?subject=Accessibility Support Request"
                className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-medium"
              >
                <Mail size={16} />
                support@myrockhomes.com
              </a>
            </div>

            <div className="border-t border-white/10 pt-5">
              <p className="text-cream/50 text-xs font-semibold uppercase tracking-wide mb-2">
                License
              </p>
              <p className="text-cream/70 text-sm">Colorado Real Estate License ER100078487</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════════ */}
      <footer className="bg-charcoal border-t border-white/5">
        <div className="container py-8 sm:py-10">
          <p className="text-cream/30 text-xs text-center">
            © {new Date().getFullYear()} My Rock Realty, LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
