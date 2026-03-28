import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { buildSeoHeadBlock, injectSeoHead, BASE_SCHEMAS, buildBreadcrumbSchema, OG_IMAGE_DEFAULT, OG_IMAGE_MILITARY } from "./seo-inject.mjs";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const ROUTE = "/military-relocation/military-spouses-buying-colorado/";
const ARTIFACT = "military-spouses-buying-colorado.html";
console.log(`[prerender-military-spouses-buying-colorado] Starting SSR build for ${ROUTE}...`);
await build({ root: ROOT, build: { ssr: resolve(ROOT, "client/src/entry-server-military-spouses-buying-colorado.tsx"), outDir: resolve(ROOT, "dist/server"), emptyOutDir: false, rollupOptions: { output: { entryFileNames: "entry-server-military-spouses-buying-colorado.js" } } }, logLevel: "warn" });
console.log(`[prerender-military-spouses-buying-colorado] SSR build complete. Rendering HTML...`);
const { renderMilitarySpousesBuyingColorado } = await import(resolve(ROOT, "dist/server/entry-server-military-spouses-buying-colorado.js"));
const appHtml = renderMilitarySpousesBuyingColorado();
const template = readFileSync(resolve(ROOT, "dist/public/index.html"), "utf-8");
const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
console.log(`[prerender-military-spouses-buying-colorado] Rendered HTML length: ${appHtml.length} chars`);
const prerenderedDir = resolve(ROOT, "server/prerendered");
mkdirSync(prerenderedDir, { recursive: true });

// === SEO_INJECTED ===
const _seoBlock = buildSeoHeadBlock({
  title: 'Military Spouses Buying a Home in Colorado | My Rock Realty',
  description: 'Practical homebuying guidance for military spouses navigating PCS moves, deployment timelines, and Colorado real estate decisions.',
  canonical: 'https://myrockhomes.com/military-relocation/military-spouses-buying-colorado/',
  ogImage: OG_IMAGE_MILITARY,
  schemas: [
    ...BASE_SCHEMAS,
    buildBreadcrumbSchema([
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Colorado Springs", item: "https://myrockhomes.com/colorado-springs-co-homes-for-sale" },
      { "@type": "ListItem", position: 3, name: 'Military Spouses Buying a Home in Colorado', item: 'https://myrockhomes.com/military-relocation/military-spouses-buying-colorado/' },
    ]),
  ],
  slug: 'military-spouses-buying-colorado',
});
const _injectedHtml = injectSeoHead(html, _seoBlock, 'https://myrockhomes.com/military-relocation/military-spouses-buying-colorado/');
writeFileSync(resolve(prerenderedDir, ARTIFACT), _injectedHtml);
console.log(`[prerender-military-spouses-buying-colorado] Written to ${resolve(prerenderedDir, ARTIFACT)} (${Buffer.byteLength(html)} bytes)`);
const distPrerenderedDir = resolve(ROOT, "dist/prerendered");
mkdirSync(distPrerenderedDir, { recursive: true });
copyFileSync(resolve(prerenderedDir, ARTIFACT), resolve(distPrerenderedDir, ARTIFACT));
console.log(`[prerender-military-spouses-buying-colorado] Written to ${resolve(distPrerenderedDir, ARTIFACT)} (fallback)`);
console.log(`[prerender-military-spouses-buying-colorado] Done.`);
