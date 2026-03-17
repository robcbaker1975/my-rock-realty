/**
 * /idx-test — Buying Buddy hidden test page
 * INTERNAL TEST ONLY — noindex, not in sitemap, not in public nav/footer/homepage
 * Direct-link access only.
 *
 * Uses the BuyingBuddyWidget imperative wrapper for reliable React rendering.
 */
import { useEffect } from "react";
import BuyingBuddyWidget from "@/components/BuyingBuddyWidget";

export default function IdxTest() {
  useEffect(() => {
    document.title = "IDX Search Test | My Rock Realty (Internal)";
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
    <div style={{ fontFamily: "sans-serif", maxWidth: 900, margin: "40px auto", padding: "0 20px" }}>
      <p style={{ fontSize: 12, color: "#999", marginBottom: 8 }}>
        [INTERNAL TEST PAGE — NOT FOR PUBLIC USE]
      </p>
      <h1 style={{ fontSize: 24, marginBottom: 8 }}>IDX Search Test</h1>
      <p style={{ color: "#666", marginBottom: 32 }}>
        This is a hidden test page for evaluating the Buying Buddy MLS plugin.
        It is not linked in public navigation, footer, or homepage.
      </p>

      {/* SearchForm widget — rendered via React-safe imperative wrapper */}
      <BuyingBuddyWidget type="SearchForm" />

      <div style={{ marginTop: 48, borderTop: "1px solid #e5e5e5", paddingTop: 16 }}>
        {/* Disclaimer widget — rendered via React-safe imperative wrapper */}
        <BuyingBuddyWidget type="Disclaimer" />
      </div>
    </div>
  );
}
