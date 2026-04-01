/**
 * seo-inject.mjs — Shared SEO head injection helper for prerender scripts.
 */

export const OG_IMAGE_DEFAULT =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/og3-adjusted_cc925a31.png";

export const OG_IMAGE_MILITARY =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663410368883/7E7tsq995TWJY7BfhkC5hJ/relocations-bg-KPyJJGfxXDepzsW2dzzYt2.webp";

export const BASE_SCHEMAS = [
  {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "My Rock Realty",
    url: "https://myrockhomes.com",
    telephone: "+1-720-363-6544",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Denver",
      addressRegion: "CO",
      addressCountry: "US",
    },
    areaServed: ["Denver, CO", "Colorado Springs, CO", "Boulder, CO", "Fort Collins, CO", "Colorado"],
    description:
      "My Rock Realty is a Colorado real estate brokerage helping buyers and sellers across Denver, Colorado Springs, Boulder, Fort Collins, and surrounding communities.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "My Rock Realty",
    url: "https://myrockhomes.com",
    logo: "https://myrockhomes.com/logo-light.png",
    sameAs: [],
  },
];

export function buildBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

export function buildSeoHeadBlock({ title, description, canonical, ogImage, schemas, slug }) {
  const esc = (s) => String(s).replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const safeTitle = esc(title);
  const safeDesc = esc(description);

  const schemaBlocks = schemas
    .map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`)
    .join("\n    ");

  return `
    <!-- SEO HEAD INJECT: ${slug} -->
    <title data-seo-head-owner="${slug}">${safeTitle}</title>
    <meta name="description" content="${safeDesc}" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:title" content="${safeTitle}" />
    <meta property="og:description" content="${safeDesc}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${ogImage}" />
    <meta name="twitter:title" content="${safeTitle}" />
    <meta name="twitter:description" content="${safeDesc}" />
    <meta name="twitter:url" content="${canonical}" />
    ${schemaBlocks}
    <!-- /SEO HEAD INJECT -->`;
}

export function injectSeoHead(html, seoBlock, canonical) {
  // Remove default shell title
  html = html.replace(/<title[^>]*>Colorado Real Estate \| My Rock Realty<\/title>/, "");
  // Remove default og:url, og:image, twitter:url from index.html shell
  // seoBlock injects the correct page-specific values; removing defaults prevents duplication
  html = html.replace(/<meta property="og:url" content="[^"]*" \/>/g, "");
  html = html.replace(/<meta property="og:image" content="[^"]*" \/>/g, "");
  html = html.replace(/<meta name="twitter:url" content="[^"]*" \/>/g, "");
  html = html.replace("</head>", `${seoBlock}\n  </head>`);
  return html;
}
