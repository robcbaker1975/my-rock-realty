/**
 * /listing-details — Buying Buddy hidden foundation Property Details page
 * INTERNAL TEST ONLY — noindex, not in sitemap, not in public nav/footer/homepage
 * Direct-link access only. Required by Buying Buddy as the SearchDetails foundation page.
 */
import { useEffect } from "react";

export default function ListingDetails() {
  useEffect(() => {
    document.title = "Listing Details | My Rock Realty (Internal)";
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
      <h1 style={{ fontSize: 24, marginBottom: 24 }}>Property Details</h1>

      {/* Buying Buddy SearchDetails foundation widget */}
      {/* @ts-ignore */}
      <bb-widget data-type="SearchDetails"></bb-widget>

      <div style={{ marginTop: 48, borderTop: "1px solid #e5e5e5", paddingTop: 16 }}>
        {/* Buying Buddy disclaimer widget */}
        {/* @ts-ignore */}
        <bb-widget data-type="Disclaimer"></bb-widget>
      </div>
    </div>
  );
}
