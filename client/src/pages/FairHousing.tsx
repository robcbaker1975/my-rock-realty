/**
 * Fair Housing / Equal Housing Opportunity — My Rock Realty
 * Professional disclosure page for compliance and trust.
 * Design: Front Range Modern — warm charcoal, cream, gold accents
 */

import SeoHead from "@/components/seo/SeoHead";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

const LOGO_URL = "/assets/logo.png";

export default function FairHousing() {
  return (
    <div className="min-h-screen bg-warm-white">
      <SeoHead
        metadata={{
          title: "Fair Housing & Equal Opportunity | My Rock Realty",
          description: "My Rock Realty is committed to fair housing practices. We comply with all federal, state, and local fair housing laws and equal opportunity regulations.",
          canonicalUrl: "https://myrockhomes.com/fair-housing",
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
          {/* Equal Housing Logo */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-charcoal rounded p-2">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="45" width="80" height="50" fill="none" stroke="#C9A96E" strokeWidth="3"/>
                <polygon points="50,10 5,50 95,50" fill="none" stroke="#C9A96E" strokeWidth="3"/>
                <text x="50" y="68" textAnchor="middle" fill="#C9A96E" fontSize="9" fontWeight="bold" fontFamily="sans-serif">EQUAL</text>
                <text x="50" y="78" textAnchor="middle" fill="#C9A96E" fontSize="7" fontFamily="sans-serif">HOUSING</text>
                <text x="50" y="88" textAnchor="middle" fill="#C9A96E" fontSize="6" fontFamily="sans-serif">OPPORTUNITY</text>
              </svg>
            </div>
            <div>
              <h1
                className="text-2xl sm:text-3xl font-bold text-charcoal"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Fair Housing Statement
              </h1>
              <p className="text-charcoal-light/60 text-sm mt-1">Equal Housing Opportunity</p>
            </div>
          </div>

          <div className="space-y-8 text-charcoal-light/80 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Our Commitment
              </h2>
              <p>
                My Rock Realty, LLC is committed to complying fully with the Fair Housing Act and all applicable federal, state, and local fair housing laws. We believe that every person has the right to choose where they live, free from discrimination.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                The Fair Housing Act
              </h2>
              <p className="mb-3">
                The federal Fair Housing Act prohibits discrimination in the sale, rental, and financing of housing based on:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-sm">
                <li>Race</li>
                <li>Color</li>
                <li>National origin</li>
                <li>Religion</li>
                <li>Sex (including gender identity and sexual orientation)</li>
                <li>Familial status</li>
                <li>Disability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Colorado Fair Housing
              </h2>
              <p>
                In addition to federal protections, the Colorado Anti-Discrimination Act (CADA) provides additional protections against housing discrimination based on marital status, ancestry, creed, and sexual orientation. My Rock Realty, LLC adheres to all state-level fair housing requirements in our real estate practice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Our Practice
              </h2>
              <p>
                We provide equal professional service to all persons regardless of the protected classes listed above. We are committed to providing an inclusive, welcoming experience for every client, whether they are buying, selling, relocating, or seeking an agent referral through our nationwide network.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Filing a Complaint
              </h2>
              <p className="mb-3">
                If you believe you have experienced housing discrimination, you may file a complaint with:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-sm">
                <li>
                  <strong>U.S. Department of Housing and Urban Development (HUD):</strong>{" "}
                  <a href="https://www.hud.gov/program_offices/fair_housing_equal_opp/online-complaint" target="_blank" rel="noopener noreferrer" className="text-gold-dark hover:underline">
                    File a complaint online
                  </a>{" "}
                  or call 1-800-669-9777
                </li>
                <li>
                  <strong>Colorado Civil Rights Division:</strong>{" "}
                  <a href="https://ccrd.colorado.gov/" target="_blank" rel="noopener noreferrer" className="text-gold-dark hover:underline">
                    Visit CCRD website
                  </a>{" "}
                  or call 303-894-2997
                </li>
              </ul>
            </section>

            {/* Prominent Equal Housing Statement */}
            <div className="p-6 sm:p-8 bg-charcoal rounded-lg text-center">
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="45" width="80" height="50" fill="none" stroke="#C9A96E" strokeWidth="3"/>
                  <polygon points="50,10 5,50 95,50" fill="none" stroke="#C9A96E" strokeWidth="3"/>
                  <text x="50" y="68" textAnchor="middle" fill="#C9A96E" fontSize="9" fontWeight="bold" fontFamily="sans-serif">EQUAL</text>
                  <text x="50" y="78" textAnchor="middle" fill="#C9A96E" fontSize="7" fontFamily="sans-serif">HOUSING</text>
                  <text x="50" y="88" textAnchor="middle" fill="#C9A96E" fontSize="6" fontFamily="sans-serif">OPPORTUNITY</text>
                </svg>
              </div>
              <p className="text-cream/80 text-sm leading-relaxed max-w-lg mx-auto">
                My Rock Realty, LLC is pledged to the letter and spirit of U.S. policy for the achievement of equal housing opportunity throughout the nation. We encourage and support an affirmative advertising and marketing program in which there are no barriers to obtaining housing because of race, color, religion, sex, handicap, familial status, or national origin.
              </p>
            </div>
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
