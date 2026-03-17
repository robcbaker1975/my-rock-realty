/**
 * /idx-test — Buying Buddy hidden test page
 * INTERNAL TEST ONLY — noindex, not in sitemap, not in public nav/footer/homepage
 * Direct-link access only.
 */
import { useEffect } from "react";

export default function IdxTest() {
  useEffect(() => {
    document.title = "IDX Test | My Rock Realty (Internal)";
    // Inject noindex meta tag for this page
    let meta = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "robots";
      document.head.appendChild(meta);
    }
    meta.content = "noindex, nofollow";
    return () => {
      // Restore on unmount
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

      {/* Basic Buying Buddy search widget */}
      {/* @ts-ignore */}
      <bb-widget data-type="Search"></bb-widget>

      <div style={{ marginTop: 48, borderTop: "1px solid #e5e5e5", paddingTop: 16 }}>
        {/* Buying Buddy disclaimer widget */}
        {/* @ts-ignore */}
        <bb-widget data-type="Disclaimer"></bb-widget>
      </div>
    </div>
  );
}
