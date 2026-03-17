/**
 * /listing-results — Buying Buddy hidden foundation Search Results page
 * INTERNAL TEST ONLY — noindex, not in sitemap, not in public nav/footer/homepage
 * Direct-link access only. Required by Buying Buddy as the ListingResults foundation page.
 *
 * Uses the BuyingBuddyWidget imperative wrapper for reliable React rendering.
 * Contains only the ListingResults foundation widget (plus Disclaimer).
 */
import { useEffect } from "react";
import BuyingBuddyWidget from "@/components/BuyingBuddyWidget";

export default function ListingResults() {
  useEffect(() => {
    document.title = "Listing Results | My Rock Realty (Internal)";
    // Inject noindex meta tag for this page
    let meta = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "robots";
      document.head.appendChild(meta);
    }
    meta.content = "noindex, nofollow";
    return () => {
      if (meta) meta.content = "index, follow";
    };
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: 1100, margin: "40px auto", padding: "0 20px" }}>
      <p style={{ fontSize: 12, color: "#999", marginBottom: 8 }}>
        [INTERNAL TEST PAGE — NOT FOR PUBLIC USE]
      </p>
      <h1 style={{ fontSize: 24, marginBottom: 24 }}>Listing Results</h1>

      {/* ListingResults foundation widget — rendered via React-safe imperative wrapper */}
      <BuyingBuddyWidget type="ListingResults" />

      <div style={{ marginTop: 48, borderTop: "1px solid #e5e5e5", paddingTop: 16 }}>
        {/* Disclaimer widget — rendered via React-safe imperative wrapper */}
        <BuyingBuddyWidget type="Disclaimer" />
      </div>
    </div>
  );
}
