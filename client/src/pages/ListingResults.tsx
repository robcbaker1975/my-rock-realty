/**
 * /listing-results — Buying Buddy foundation Search Results page
 * noindex — not in public nav/footer/sitemap. Reachable via Quick Search widget and direct link.
 * Required by Buying Buddy as the ListingResults foundation page.
 *
 * Uses the BuyingBuddyWidget imperative wrapper for reliable React rendering.
 * Contains only the ListingResults foundation widget (plus Disclaimer).
 */
import { useEffect } from "react";
import BuyingBuddyWidget from "@/components/BuyingBuddyWidget";

export default function ListingResults() {
  useEffect(() => {
    document.title = "Listing Results | My Rock Realty";
    // Inject noindex meta tag — foundation page, not intended for search engine indexing
    let meta = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "robots";
      document.head.appendChild(meta);
    }
    meta.content = "noindex, nofollow";
    // Prevent horizontal scrolling caused by wide BB widget content on mobile
    const prevHtmlOverflow = document.documentElement.style.overflowX;
    const prevBodyOverflow = document.body.style.overflowX;
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";
    return () => {
      if (meta) meta.content = "index, follow";
      document.documentElement.style.overflowX = prevHtmlOverflow;
      document.body.style.overflowX = prevBodyOverflow;
    };
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: 1100, margin: "40px auto", padding: "0 20px", width: "100%", boxSizing: "border-box", overflowX: "hidden", backgroundColor: "#faf7f4" }}>
      {/* ListingResults foundation widget — rendered via React-safe imperative wrapper */}
      <BuyingBuddyWidget type="ListingResults" />

      <div style={{ marginTop: 48, borderTop: "1px solid #e5e5e5", paddingTop: 16 }}>
        {/* Disclaimer widget — rendered via React-safe imperative wrapper */}
        <BuyingBuddyWidget type="Disclaimer" />
      </div>
    </div>
  );
}
