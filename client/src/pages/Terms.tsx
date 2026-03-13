/**
 * Terms & Conditions — My Rock Realty
 * Professional, readable, and easily editable.
 * Design: Front Range Modern — warm charcoal, cream, gold accents
 */

import SeoHead from "@/components/seo/SeoHead";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

const LOGO_URL = "/assets/logo.png";

export default function Terms() {
  return (
    <div className="min-h-screen bg-warm-white">
      <SeoHead
        metadata={{
          title: "Terms & Conditions | My Rock Realty",
          description: "Review the terms and conditions governing your use of My Rock Realty's website and services. Understand your rights and responsibilities when working with us.",
          canonicalUrl: "https://www.myrockhomes.com/terms",
        }}
      />
      {/* Header */}
      <header className="bg-charcoal">
        <div className="container py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src={LOGO_URL} alt="My Rock Realty" className="h-12 sm:h-14 w-auto" width="56" height="56" loading="lazy" decoding="async" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-cream/70 hover:text-gold text-sm transition-colors"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container py-12 sm:py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-3xl sm:text-4xl font-bold text-charcoal mb-3"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Terms & Conditions
          </h1>
          <p className="text-charcoal-light/60 text-sm mb-8 sm:mb-10">
            Last updated: March 2026
          </p>

          <div className="space-y-8 text-charcoal-light/80 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using the My Rock Realty website ("Site"), you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use the Site. We reserve the right to update these terms at any time, and your continued use of the Site constitutes acceptance of any changes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                2. No Relationship Created
              </h2>
              <p>
                Use of this website, attendance at our workshop, submission of contact forms, or communication with My Rock Realty does not create an agency relationship, brokerage relationship, fiduciary duty, or client relationship. Representation as a real estate client begins only through a separate written agreement signed by you and My Rock Realty or one of our licensed agents, where applicable by law. Without such an agreement, we are providing information and guidance only, and you should independently verify any information material to your transaction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                3. Represented-Party Notice
              </h2>
              <p>
                This website is not intended to solicit buyers or sellers who are already subject to an exclusive agreement with another real estate broker. If you are currently represented by another broker, please do not submit information through this site without first consulting with your current broker.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                4. Services Description
              </h2>
              <p>
                My Rock Realty provides real estate brokerage services in the state of Colorado, including buyer representation, seller representation, relocation assistance, and agent referrals across all 50 states. The information on this Site is provided for general informational and educational purposes only and does not constitute legal, financial, lending, or other professional advice. Information on this Site may change and should be independently verified where material to a real estate transaction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                5. Professional Advice Disclaimer
              </h2>
              <p>
                My Rock Realty, LLC is a real estate brokerage and does not provide legal, tax, accounting, or financial advice. For matters related to legal rights, tax implications, title issues, financing, or financial planning, you should consult appropriate licensed professionals such as an attorney, CPA, tax advisor, or financial advisor.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                6. Wire Fraud Protection
              </h2>
              <p>
                To help protect against wire fraud, do not rely solely on emailed wiring instructions. Always verify any wiring instructions by calling the intended recipient at a trusted phone number you already know is valid. Fraudsters may intercept emails and provide false wiring information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                7. No Guaranteed Outcomes
              </h2>
              <p>
                While we strive to provide excellent service and strategic guidance, real estate transactions involve inherent risks and variables. We do not guarantee specific outcomes, sale prices, timelines, or results. Past performance and client experiences do not guarantee future results.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                5. Referral Services
              </h2>
              <p>
                When we refer you to agents in other states through our referral network, we make reasonable efforts to connect you with qualified licensed professionals. However, we are not responsible for the actions, performance, or outcomes of referred agents or their brokerages. If you choose to work with a referred agent, that agent or their brokerage may pay a referral fee to My Rock Realty, LLC. In most cases, this fee is a percentage of the commission they receive. This referral fee does not increase the purchase price or sale price of a property.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                6. Intellectual Property
              </h2>
              <p>
                All content on this Site — including text, graphics, logos, images, and design elements — is the property of My Rock Realty or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from this content without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                7. User Submissions
              </h2>
              <p>
                Any information you submit through our contact forms or other communication channels is subject to our Privacy Policy. By submitting information, you represent that the information is accurate and that you have the right to provide it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                8. Third-Party Links
              </h2>
              <p>
                This Site may contain links to third-party websites, tools, or services. These links are provided for your convenience. We do not control and are not responsible for the content, privacy policies, or practices of third-party sites or services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                9. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, My Rock Realty and its owner, Rob Baker, shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Site or our services. Our total liability shall not exceed the amount of fees actually paid by you for services rendered.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                10. Licensing & Compliance
              </h2>
              <p>
                My Rock Realty, LLC operates as a licensed real estate brokerage in the state of Colorado (License ER100078487). All real estate activities are conducted in compliance with applicable state and federal laws, including fair housing regulations. Rob Baker is a licensed real estate professional in the state of Colorado.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                11. Governing Law
              </h2>
              <p>
                These Terms & Conditions are governed by and construed in accordance with the laws of the state of Colorado, without regard to conflict of law principles. Any disputes arising from these terms or your use of the Site shall be resolved in the appropriate courts of Colorado.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                12. Financing Disclaimer
              </h2>
              <p>
                My Rock Realty, LLC is a real estate brokerage and is not a mortgage lender. Any information provided on this website or in the Colorado Home Buying Workshop regarding loan programs, affordability, interest rates, concessions, or financing strategies is for general educational purposes only. Loan approval, terms, rates, and program eligibility are determined by licensed lenders based on buyer qualifications and current lending guidelines, and are not guaranteed.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                13. Colorado Real Estate Regulatory Contact
              </h2>
              <p>
                For complaints concerning licensed real estate activity in Colorado, consumers may contact the Colorado Division of Real Estate:
              </p>
              <div className="mt-3 p-4 bg-cream rounded border border-cream-dark/40 text-sm">
                <p className="font-semibold text-charcoal">Colorado Division of Real Estate</p>
                <p>1560 Broadway, Suite 925</p>
                <p>Denver, CO 80202</p>
                <p className="mt-2">(303) 894-2166</p>
                <p className="mt-2 text-charcoal-light/70">Complaints may also be filed through the Division's online complaint process.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                14. Contact
              </h2>
              <p>
                If you have questions about these Terms & Conditions, please contact:
              </p>
              <div className="mt-3 p-4 bg-cream rounded border border-cream-dark/40 text-sm">
                <p className="font-semibold text-charcoal">Rob Baker, Broker/Owner</p>
                <p>My Rock Realty, LLC</p>
                <p>Lic. ER100078487</p>

                <p>(720) 363-6544</p>
                <p>
                  <a href="mailto:support@myrockhomes.com" className="text-gold-dark hover:underline">support@myrockhomes.com</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-charcoal py-6">
        <div className="container text-center">
          <p className="text-cream/30 text-xs">
            &copy; {new Date().getFullYear()} My Rock Realty, LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
