/**
 * FeaturedListingPromo
 * One tasteful promo card for the active featured listing.
 * Placement: between AdditionalServicesSection and HomeTestimonialsSection on the homepage.
 * Primary CTA → featured listing page
 * Secondary CTA → Buying Buddy search results
 */

import { Link } from "wouter";

export default function FeaturedListingPromo() {
  return (
    <section
      aria-label="Featured Listing"
      className="bg-[#F5F0EB] py-14 px-4"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <p className="text-xs font-semibold tracking-widest uppercase text-[#C9A96E] mb-4 text-center">
          Featured Listing
        </p>

        {/* Card */}
        <div className="flex flex-col md:flex-row gap-0 overflow-hidden rounded-sm shadow-md border border-[#E2DAD1]">
          {/* Photo */}
          <div className="md:w-2/5 flex-shrink-0">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/3-web-or-mls-MSW22160-DayToDusk-Golden-4_f6034bf0.jpg"
              alt="4810 Basalt Ridge Circle, Castle Rock CO — twilight exterior"
              className="w-full h-56 md:h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center bg-white px-8 py-8 md:py-10 gap-3">
            {/* Status badge */}
            <span className="inline-block self-start text-[10px] font-bold tracking-widest uppercase bg-[#C9A96E] text-white px-3 py-1 rounded-sm">
              Now Available
            </span>

            {/* Address + price */}
            <div>
              <h3 className="font-outfit text-xl font-semibold text-[#292524] leading-snug">
                4810 Basalt Ridge Circle
              </h3>
              <p className="text-sm text-[#6B6560] mt-0.5">
                Castle Rock, CO 80108 &nbsp;·&nbsp; $729,927
              </p>
            </div>

            {/* One-line supporting text */}
            <p className="text-sm text-[#4A4540] leading-relaxed">
              3 bed · 4 bath · 3,698 sq ft — Terrain community, $12,500 seller concession offered.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              {/* Primary */}
              <Link
                href="/featured/4810-basalt-ridge-circle-castle-rock-co"
                className="inline-block bg-[#C9A96E] hover:bg-[#b8955a] text-white text-sm font-semibold px-6 py-2.5 rounded-sm transition-colors text-center"
              >
                View Listing Details
              </Link>

              {/* Secondary */}
              <Link
                href="/listing-results"
                className="inline-block border border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E]/10 text-sm font-medium px-6 py-2.5 rounded-sm transition-colors text-center"
              >
                Search Other Homes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
