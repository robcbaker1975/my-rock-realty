/**
 * FeaturedListingPage — Reusable branded property showcase template
 *
 * Usage: import this component and pass a FeaturedListingData object.
 * See client/src/data/listings/ for listing data files.
 * See client/src/pages/Listing4810BasaltRidgeCircle.tsx as a reference page.
 */

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoHead from "@/components/seo/SeoHead";
import type { FeaturedListingData } from "@/data/listings/4810-basalt-ridge-circle";
import { Link } from "wouter";

// ─── Status badge ────────────────────────────────────────────────────────────
const STATUS_LABELS: Record<FeaturedListingData["status"], string> = {
  active: "Active Listing",
  "under-contract": "Under Contract",
  sold: "Sold",
  "coming-soon": "Coming Soon",
};
const STATUS_COLORS: Record<FeaturedListingData["status"], string> = {
  active: "bg-emerald-600",
  "under-contract": "bg-amber-500",
  sold: "bg-slate-500",
  "coming-soon": "bg-blue-600",
};

// ─── Stat pill ────────────────────────────────────────────────────────────────
function StatPill({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex flex-col items-center px-4 py-3 border border-gold/30 rounded-lg min-w-[80px]">
      <span className="text-xl font-bold text-gold font-display">{value}</span>
      <span className="text-xs text-cream/60 uppercase tracking-wider mt-0.5">{label}</span>
    </div>
  );
}

// ─── Gallery ─────────────────────────────────────────────────────────────────
function Gallery({ photos, heroAlt }: { photos: FeaturedListingData["galleryPhotos"]; heroAlt: string }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const allPhotos = photos;

  return (
    <div className="w-full">
      {/* Main image */}
      <div className="relative w-full overflow-hidden rounded-xl bg-charcoal" style={{ aspectRatio: "16/9" }}>
        <img
          src={allPhotos[activeIdx]?.url}
          alt={allPhotos[activeIdx]?.alt ?? heroAlt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      {/* Thumbnails */}
      {allPhotos.length > 1 && (
        <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
          {allPhotos.map((photo, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                idx === activeIdx ? "border-gold" : "border-transparent opacity-60 hover:opacity-90"
              }`}
            >
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function FeaturedListingPage({ listing }: { listing: FeaturedListingData }) {
  const allGalleryPhotos = [
    listing.heroPhoto,
    ...listing.galleryPhotos,
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#1c1917" }}>
      <SeoHead
        metadata={{
          title: listing.pageTitle,
          description: listing.metaDescription,
          canonicalUrl: listing.canonicalUrl,
          openGraph: {
            type: "website",
            title: listing.pageTitle,
            description: listing.metaDescription,
            url: listing.canonicalUrl,
            images: [
              {
                url: listing.heroPhoto.url,
                alt: listing.heroPhoto.alt,
                width: 1400,
                height: 933,
              },
            ],
          },
          twitter: {
            card: "summary_large_image",
            title: listing.pageTitle,
            description: listing.metaDescription,
            image: listing.heroPhoto.url,
          },
        }}
      />

      <Navbar />

      {/* ═══════════════════════════════════════════════════
          HERO — full-bleed twilight photo
      ═══════════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "640px" }}>
        <img
          src={listing.heroPhoto.url}
          alt={listing.heroPhoto.alt}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 40%" }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(28,25,23,0.92) 0%, rgba(28,25,23,0.45) 55%, rgba(28,25,23,0.15) 100%)" }} />

        {/* Hero content */}
        <div className="relative z-10 flex flex-col justify-end h-full min-h-[640px] pb-10 pt-56 px-4">
          <div className="container max-w-5xl mx-auto">
            {/* Status badge */}
            <span className={`inline-block text-xs font-semibold text-white uppercase tracking-widest px-3 py-1 rounded-full mb-4 ${STATUS_COLORS[listing.status]}`}>
              {STATUS_LABELS[listing.status]}
            </span>

            {/* Address */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-display leading-tight mb-1">
              {listing.address}
            </h1>
            <p className="text-lg text-cream/80 mb-4">
              {listing.city}, {listing.state} {listing.zip} &nbsp;·&nbsp; {listing.community}
            </p>

            {/* Price */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="text-4xl font-bold text-gold font-display">{listing.price}</span>
              <span className="text-cream/60 text-sm">{listing.estimatedMonthly} est.</span>
            </div>

            {/* Core stats */}
            <div className="flex flex-wrap gap-3">
              <StatPill label="Beds" value={listing.beds} />
              <StatPill label="Baths" value={listing.baths} />
              <StatPill label="Sq Ft" value={listing.sqFt} />
              <StatPill label="Lot" value={listing.lotSize.replace(" sq ft", " sf")} />
              <StatPill label="Built" value={listing.yearBuilt} />
              <StatPill label="HOA" value={listing.hoaMonthly} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SELLER CONCESSION BANNER
      ═══════════════════════════════════════════════════ */}
      <div className="bg-gold/10 border-y border-gold/30">
        <div className="container max-w-5xl mx-auto py-3 px-4">
          <p className="text-gold text-sm font-semibold text-center">
            ★ &nbsp;{listing.sellerConcession}
          </p>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          MAIN CONTENT GRID
      ═══════════════════════════════════════════════════ */}
      <div className="container max-w-5xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-10">

        {/* LEFT — gallery + description */}
        <div className="flex-1 min-w-0">

          {/* Short overview */}
          <p className="text-cream/80 text-lg leading-relaxed mb-8 italic border-l-2 border-gold/40 pl-4">
            {listing.shortOverview}
          </p>

          {/* Gallery */}
          <Gallery photos={allGalleryPhotos} heroAlt={listing.heroPhoto.alt} />

          {/* Full description */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-cream font-display mb-4">About This Home</h2>
            {listing.mainDescription.split("\n\n").map((para, i) => (
              <p key={i} className="text-cream/75 leading-relaxed mb-4">
                {para}
              </p>
            ))}
          </div>

          {/* Property details table */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-cream font-display mb-4">Property Details</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
              {[
                { label: "MLS #", value: listing.mlsNumber },
                { label: "Property Type", value: listing.propertyType },
                { label: "Year Built", value: listing.yearBuilt },
                { label: "Living Area", value: `${listing.sqFt} sq ft` },
                { label: "Above Grade", value: `${listing.aboveGradeSqFt} sq ft` },
                { label: "Lot Size", value: listing.lotSize },
                { label: "Beds", value: listing.beds },
                { label: "Baths", value: `${listing.bathsFull} full · ${listing.bathsThreeQuarter} ¾ · ${listing.bathsHalf} ½` },
                { label: "Garage", value: "3-car attached" },
                { label: "HOA", value: `${listing.hoaMonthly} (${listing.hoaQuarterly})` },
                { label: "Annual Taxes", value: listing.annualTaxes },
                { label: "Price/Sq Ft", value: listing.pricePerSqFt },
                { label: "Community", value: listing.community },
                { label: "School District", value: "Douglas County" },
                { label: "On Market", value: listing.dateOnMarket },
              ].map(({ label, value }) => (
                <div key={label} className="bg-charcoal/60 rounded-lg px-3 py-2">
                  <div className="text-cream/40 text-xs uppercase tracking-wide mb-0.5">{label}</div>
                  <div className="text-cream/90 font-medium">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — highlights + CTA sidebar */}
        <div className="lg:w-80 flex-shrink-0">

          {/* CTA card */}
          <div className="sticky top-24 bg-charcoal border border-gold/20 rounded-2xl p-6 shadow-xl mb-8">
            <div className="text-center mb-5">
              <div className="text-3xl font-bold text-gold font-display">{listing.price}</div>
              <div className="text-cream/50 text-sm mt-1">{listing.estimatedMonthly} estimated</div>
            </div>

            <a
              href={`tel:${listing.agentPhone.replace(/\D/g, "")}`}
              className="block w-full text-center bg-gold hover:bg-gold/90 text-charcoal font-bold py-3 rounded-xl mb-3 transition-colors"
            >
              Schedule a Private Showing
            </a>

            <a
              href={`mailto:${listing.agentEmail}?subject=Question about ${listing.fullAddress}`}
              className="block w-full text-center border border-gold/40 text-gold hover:bg-gold/10 font-semibold py-3 rounded-xl mb-5 transition-colors"
            >
              Ask About This Home
            </a>

            <div className="border-t border-gold/20 pt-4 text-sm text-cream/70 space-y-2">
              <div className="font-semibold text-cream">{listing.agentName}</div>
              <div>{listing.brokerage}</div>
              <a href={`tel:${listing.agentPhone.replace(/\D/g, "")}`} className="block text-gold hover:underline">
                {listing.agentPhone}
              </a>
              <a href={`mailto:${listing.agentEmail}`} className="block text-gold hover:underline break-all">
                {listing.agentEmail}
              </a>
            </div>
          </div>

          {/* Highlights */}
          <div className="bg-charcoal/60 border border-gold/10 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-cream font-display mb-4">Home Highlights</h3>
            <ul className="space-y-2">
              {listing.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-cream/75">
                  <span className="text-gold mt-0.5 flex-shrink-0">✓</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          BOTTOM CTA STRIP
      ═══════════════════════════════════════════════════ */}
      <section className="bg-charcoal border-t border-gold/20 py-12 px-4">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-cream font-display mb-3">
            Ready to See It in Person?
          </h2>
          <p className="text-cream/65 mb-7 max-w-xl mx-auto">
            Contact Robert Baker directly to schedule a private showing or get answers to your questions about this home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${listing.agentPhone.replace(/\D/g, "")}`}
              className="inline-block bg-gold hover:bg-gold/90 text-charcoal font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Call {listing.agentPhone}
            </a>
            <a
              href={`mailto:${listing.agentEmail}?subject=Showing request — ${listing.fullAddress}`}
              className="inline-block border border-gold/50 text-gold hover:bg-gold/10 font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Email Rob
            </a>
          </div>
          <div className="mt-8 pt-6 border-t border-gold/10">
            <Link href="/listing-results" className="text-cream/50 hover:text-cream text-sm transition-colors">
              ← Search All Homes on MyRockHomes.com
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          MLS DISCLAIMER
      ═══════════════════════════════════════════════════ */}
      <div className="bg-charcoal/80 border-t border-white/5 px-4 py-4">
        <div className="container max-w-5xl mx-auto text-xs text-cream/30 leading-relaxed">
          MLS# {listing.mlsNumber}. Information provided by REcolorado as distributed by MLS GRID. All data deemed reliable but not guaranteed. Listed by {listing.agentName}, {listing.brokerage}. © {new Date().getFullYear()} My Rock Realty, LLC. All rights reserved.
        </div>
      </div>

      <Footer />
    </div>
  );
}
