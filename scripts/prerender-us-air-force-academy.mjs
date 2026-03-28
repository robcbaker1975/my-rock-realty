import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { buildSeoHeadBlock, injectSeoHead, BASE_SCHEMAS, buildBreadcrumbSchema, OG_IMAGE_DEFAULT, OG_IMAGE_MILITARY } from "./seo-inject.mjs";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const ROUTE = "/military-relocation/us-air-force-academy/";
const ARTIFACT = "us-air-force-academy.html";
console.log(`[prerender-us-air-force-academy] Starting SSR build for ${ROUTE}...`);
await build({ root: ROOT, build: { ssr: resolve(ROOT, "client/src/entry-server-us-air-force-academy.tsx"), outDir: resolve(ROOT, "dist/server"), emptyOutDir: false, rollupOptions: { output: { entryFileNames: "entry-server-us-air-force-academy.js" } } }, logLevel: "warn" });
console.log(`[prerender-us-air-force-academy] SSR build complete. Rendering HTML...`);
const { renderUsAirForceAcademy } = await import(resolve(ROOT, "dist/server/entry-server-us-air-force-academy.js"));
const appHtml = renderUsAirForceAcademy();
const template = readFileSync(resolve(ROOT, "dist/public/index.html"), "utf-8");
const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
console.log(`[prerender-us-air-force-academy] Rendered HTML length: ${appHtml.length} chars`);
const prerenderedDir = resolve(ROOT, "server/prerendered");
mkdirSync(prerenderedDir, { recursive: true });

// === SEO_INJECTED ===
const _seoBlock = buildSeoHeadBlock({
  title: 'USAFA Relocation Guide | Colorado Springs Real Estate | My Rock Realty',
  description: 'Practical relocation guidance for buyers moving to the US Air Force Academy and the Colorado Springs area. PCS planning, VA loan context, and neighborhood orientation.',
  canonical: 'https://myrockhomes.com/military-relocation/usafa/',
  ogImage: OG_IMAGE_MILITARY,
  schemas: [
    ...BASE_SCHEMAS,
    buildBreadcrumbSchema([
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Colorado Springs", item: "https://myrockhomes.com/colorado-springs-co-homes-for-sale" },
      { "@type": "ListItem", position: 3, name: 'USAFA Relocation Guide', item: 'https://myrockhomes.com/military-relocation/usafa/' },
    ]),
  ],
  slug: 'us-air-force-academy',
});
const _injectedHtml = injectSeoHead(html, _seoBlock, 'https://myrockhomes.com/military-relocation/usafa/');
writeFileSync(resolve(prerenderedDir, ARTIFACT), _injectedHtml);
console.log(`[prerender-us-air-force-academy] Written to ${resolve(prerenderedDir, ARTIFACT)} (${Buffer.byteLength(html)} bytes)`);
const distPrerenderedDir = resolve(ROOT, "dist/prerendered");
mkdirSync(distPrerenderedDir, { recursive: true });
copyFileSync(resolve(prerenderedDir, ARTIFACT), resolve(distPrerenderedDir, ARTIFACT));
console.log(`[prerender-us-air-force-academy] Written to ${resolve(distPrerenderedDir, ARTIFACT)} (fallback)`);
console.log(`[prerender-us-air-force-academy] Done.`);
