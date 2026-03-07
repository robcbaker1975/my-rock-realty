/**
 * Privacy Policy — My Rock Realty
 * Professional, readable, and easily editable.
 * Design: Front Range Modern — warm charcoal, cream, gold accents
 */

import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

const LOGO_URL = "https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310519663410368883/MyFokdbFMWxFfHiY.png?Expires=1804373851&Signature=tX8Nz-0U25wCRVcyN~gH7soBhlF3NkZUa-fhbO66r4~ix6wF5QJgpPopSr1AHJBk3LYrKIvxfO7YD9vTdqjZjlu3cRO~lkYxkxZTjoEnC4lRTtjG5BAb93p2PDrMuu2aVHq7bLQju4D-2XQxrn4CTm9kL1SbUQFUO-A84x7mFMo~GuyOHMKwN5Y8FJn7Ab31FwMwmSPPSt250S-gmfDDE641SKapGELse-4gAkYO2Uy7HOgsFPNinIzISyHmorDYolNCgA0fVXih1zjLlPmv4tUT4theY~IW3Wg5cuPbxYCSFRkYITYhEoeW1oC1OSZByxIaTDBAmvXWZN~bb7cNlA__&Key-Pair-Id=K2HSFNDJXOU9YS";

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="text-charcoal-light/60 text-sm mb-8 sm:mb-10">
            Last updated: March 2026
          </p>

          <div className="space-y-8 text-charcoal-light/80 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                1. Information We Collect
              </h2>
              <p className="mb-3">
                My Rock Realty, LLC ("we," "us," or "our") collects information you voluntarily provide when you use our website, complete forms, or communicate with us. This may include:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-sm">
                <li>Your name, email address, and phone number</li>
                <li>Your real estate interests and preferences (e.g., buying, selling, relocating)</li>
                <li>Any additional information you provide in messages or form submissions</li>
                <li>Technical data such as browser type, IP address, and pages visited (collected automatically via standard web analytics)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                2. How We Use Your Information
              </h2>
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-sm">
                <li>Respond to your inquiries and provide real estate guidance, workshop-related information, or referral assistance</li>
                <li>Connect you with relevant services, programs, or agent referrals</li>
                <li>Improve our website, services, and client experience</li>
                <li>Send follow-up communications related to your inquiry (you may opt out at any time)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                3. Information Sharing
              </h2>
              <p>
                We do not sell, rent, or trade your personal information to third parties for marketing purposes. We may share your information with trusted service providers that support functions such as website hosting, analytics, contact forms or CRM systems, email or text communications, and referral coordination when requested by you. These providers are expected to protect your information and use it only as needed to support our business operations. We may also share information when required by law or to protect our rights.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                4. Referral Network
              </h2>
              <p>
                If you request a referral to an agent in another state, we may share your contact information and real estate needs with a vetted agent in our referral network to facilitate the connection. If you choose to work with that referred agent, My Rock Realty, LLC may receive a referral fee from that agent or their brokerage. In most cases, this fee is a percentage of the commission they receive. This referral arrangement does not increase the price you pay for a property or reduce the amount you receive from a sale.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                5. Cookies and Tracking
              </h2>
              <p>
                Our website may use cookies and similar technologies to support core site functionality, remember preferences, and collect aggregated analytics data about how visitors use the site. These technologies may include essential cookies, functional cookies, and analytics cookies. If we add advertising or retargeting tools in the future, this policy may be updated accordingly. You can manage cookies through your browser settings, and if additional cookie preference tools are added in the future, you may be able to manage settings there as well. These technologies do not give us direct access to information stored on your device beyond what is normally available through standard website interactions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                6. Data Security
              </h2>
              <p>
                We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                7. Your Rights
              </h2>
              <p>
                You may request access to, correction of, or deletion of your personal information by using the email address or phone number listed below. We will review and respond to requests within a reasonable timeframe, subject to any legal or recordkeeping requirements that apply.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                8. Third-Party Links
              </h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party site you visit.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                9. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised "Last updated" date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                10. Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy or how your information is handled, please contact:
              </p>
              <div className="mt-3 p-4 bg-cream rounded border border-cream-dark/40 text-sm">
                <p className="font-semibold text-charcoal">Rob Baker, Broker/Owner</p>
                <p>My Rock Realty, LLC</p>
                <p>Lic. ER100078487</p>

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
            &copy; {new Date().getFullYear()} My Rock Realty, LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
