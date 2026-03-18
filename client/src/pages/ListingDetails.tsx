/**
 * /listing-details — Buying Buddy foundation Property Details page
 * noindex — not in public nav/footer/sitemap. Reachable via direct link and email alerts.
 * Required by Buying Buddy as the SearchDetails foundation page.
 *
 * Uses the BuyingBuddyWidget imperative wrapper for reliable React rendering.
 * Contains only the SearchDetails foundation widget (plus Disclaimer).
 */
import { useEffect } from "react";
import BuyingBuddyWidget from "@/components/BuyingBuddyWidget";

export default function ListingDetails() {
  useEffect(() => {
    document.title = "Property Details | My Rock Realty";
    // Inject noindex meta tag — foundation page, not intended for search engine indexing
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
      {/* SearchDetails foundation widget — rendered via React-safe imperative wrapper */}
      <BuyingBuddyWidget type="SearchDetails" />

      <div style={{ marginTop: 48, borderTop: "1px solid #e5e5e5", paddingTop: 16 }}>
        {/* Disclaimer widget — rendered via React-safe imperative wrapper */}
        <BuyingBuddyWidget type="Disclaimer" />
      </div>
    </div>
  );
}
