/**
 * Terms & Conditions — My Rock Realty
 * Professional, readable, and easily editable.
 * Design: Front Range Modern — warm charcoal, cream, gold accents
 */

import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

const LOGO_URL = "https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310519663410368883/MyFokdbFMWxFfHiY.png?Expires=1804373851&Signature=tX8Nz-0U25wCRVcyN~gH7soBhlF3NkZUa-fhbO66r4~ix6wF5QJgpPopSr1AHJBk3LYrKIvxfO7YD9vTdqjZjlu3cRO~lkYxkxZTjoEnC4lRTtjG5BAb93p2PDrMuu2aVHq7bLQju4D-2XQxrn4CTm9kL1SbUQFUO-A84x7mFMo~GuyOHMKwN5Y8FJn7Ab31FwMwmSPPSt250S-gmfDDE641SKapGELse-4gAkYO2Uy7HOgsFPNinIzISyHmorDYolNCgA0fVXih1zjLlPmv4tUT4theY~IW3Wg5cuPbxYCSFRkYITYhEoeW1oC1OSZByxIaTDBAmvXWZN~bb7cNlA__&Key-Pair-Id=K2HSFNDJXOU9YS";

export default function Terms() {
  return (
    <div className="min-h-screen bg-warm-white">
      {/* Header */}
      <header className="bg-charcoal">
        <div className="container py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src={LOGO_URL} alt="My Rock Realty" className="h-12 sm:h-14 w-auto" />
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
                2. Services Description
              </h2>
              <p>
                My Rock Realty provides real estate brokerage services in the state of Colorado, including buyer representation, seller representation, relocation assistance, and agent referrals across all 50 states. The information on this Site is intended for general informational purposes and does not constitute legal, financial, or professional advice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                3. No Guaranteed Outcomes
              </h2>
              <p>
                While we strive to provide excellent service and strategic guidance, real estate transactions involve inherent risks and variables. We do not guarantee specific outcomes, sale prices, timelines, or results. Past performance and client experiences do not guarantee future results.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                4. Referral Services
              </h2>
              <p>
                When we refer you to agents in other states through our referral network, we make reasonable efforts to connect you with qualified professionals. However, we are not responsible for the actions, performance, or outcomes of referred agents or their brokerages. Referral relationships may involve referral fees between licensed professionals, which is standard practice in the real estate industry.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                5. Intellectual Property
              </h2>
              <p>
                All content on this Site — including text, graphics, logos, images, and design elements — is the property of My Rock Realty or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from this content without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                6. User Submissions
              </h2>
              <p>
                Any information you submit through our contact forms or other communication channels is subject to our Privacy Policy. By submitting information, you represent that the information is accurate and that you have the right to provide it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                7. Third-Party Links
              </h2>
              <p>
                This Site may contain links to third-party websites, including but not limited to ColoradoHomeBuyingWorkshop.com and MyRockHomes.com. These links are provided for your convenience. We do not control and are not responsible for the content, privacy policies, or practices of any third-party sites.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                8. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, My Rock Realty and its owner, Rob Baker, shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Site or our services. Our total liability shall not exceed the amount of fees actually paid by you for services rendered.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                9. Licensing & Compliance
              </h2>
              <p>
                My Rock Realty, LLC operates as a licensed real estate brokerage in the state of Colorado (License ER100078487). All real estate activities are conducted in compliance with applicable state and federal laws, including fair housing regulations. Rob Baker is a licensed real estate professional in the state of Colorado.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                10. Governing Law
              </h2>
              <p>
                These Terms & Conditions are governed by and construed in accordance with the laws of the state of Colorado, without regard to conflict of law principles. Any disputes arising from these terms or your use of the Site shall be resolved in the appropriate courts of Colorado.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                11. Contact
              </h2>
              <p>
                If you have questions about these Terms & Conditions, please contact:
              </p>
              <div className="mt-3 p-4 bg-cream rounded border border-cream-dark/40 text-sm">
                <p className="font-semibold text-charcoal">Rob Baker, Broker/Owner</p>
                <p>My Rock Realty, LLC</p>
                <p>Lic. ER100078487</p>
                <p className="mt-2">8650 N Pioneer Trail, Parker, CO 80138</p>
                <p>(720) 363-6544</p>
                <p>
                  <a href="mailto:RobBakerRE@gmail.com" className="text-gold-dark hover:underline">RobBakerRE@gmail.com</a>
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
            &copy; {new Date().getFullYear()} My Rock Realty. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
