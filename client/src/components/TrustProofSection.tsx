import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function TrustProofSection() {
  return (
    <section className="py-12 sm:py-16 bg-charcoal">
      <div className="container">
        <div className="max-w-4xl mx-auto">

          {/* Headline */}
          <h2
            className="text-xl sm:text-2xl md:text-3xl font-bold text-cream leading-tight mb-8 sm:mb-10 text-center"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Why Colorado Buyers & Sellers Trust Rob Baker
          </h2>

          {/* Proof points + testimonial: two-column on md+ */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">

            {/* Proof points */}
            <div className="flex flex-col gap-4 md:w-2/5 shrink-0">
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                <p
                  className="text-cream/85 text-[15px] leading-snug"
                  style={{ fontFamily: "'Libre Franklin', sans-serif" }}
                >
                  <span className="text-cream font-semibold">25+ years</span> in sales and negotiations
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                <p
                  className="text-cream/85 text-[15px] leading-snug"
                  style={{ fontFamily: "'Libre Franklin', sans-serif" }}
                >
                  <span className="text-cream font-semibold">Former Zillow Agent Coach</span> — 4.5 years coaching agents on strategy and client results
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                <p
                  className="text-cream/85 text-[15px] leading-snug"
                  style={{ fontFamily: "'Libre Franklin', sans-serif" }}
                >
                  <span className="text-cream font-semibold">Colorado-focused</span> — buyers, sellers, relocations, and a trusted referral network in all 50 states
                </p>
              </div>

              {/* CTA */}
              <div className="mt-2">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-gold/50 text-gold hover:bg-gold/10 hover:border-gold transition-all rounded text-sm font-medium"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Start the Conversation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Testimonial */}
            <blockquote className="md:w-3/5 border-l-2 border-gold/40 pl-5 sm:pl-6">
              <p
                className="text-cream/80 text-[15px] sm:text-base leading-relaxed italic mb-4"
                style={{ fontFamily: "'Libre Franklin', sans-serif" }}
              >
                "Rob helped us buy our first home with zero down, which was life-changing for us. When it was time to move, he sold that same home in just 5 weeks — and we got well over asking! He truly looks out for his clients."
              </p>
              <footer>
                <p
                  className="text-cream font-semibold text-sm"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Brandon & Logan T.
                </p>
                <p
                  className="text-gold text-xs font-medium tracking-wide uppercase mt-0.5"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  First-Time Buyers
                </p>
              </footer>
            </blockquote>

          </div>
        </div>
      </div>
    </section>
  );
}
