import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { buildSeoHeadBlock, injectSeoHead, BASE_SCHEMAS, buildBreadcrumbSchema, OG_IMAGE_MILITARY } from "./seo-inject.mjs";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const ROUTE = "/military-relocation/veterans-buying-colorado/";
const ARTIFACT = "veterans-buying-colorado.html";
console.log(`[prerender-veterans-buying-colorado] Starting SSR build for ${ROUTE}...`);
await build({ root: ROOT, build: { ssr: resolve(ROOT, "client/src/entry-server-veterans-buying-colorado.tsx"), outDir: resolve(ROOT, "dist/server"), emptyOutDir: false, rollupOptions: { output: { entryFileNames: "entry-server-veterans-buying-colorado.js" } } }, logLevel: "warn" });
console.log(`[prerender-veterans-buying-colorado] SSR build complete. Rendering HTML...`);
const { renderVeteransBuyingColorado } = await import(resolve(ROOT, "dist/server/entry-server-veterans-buying-colorado.js"));
const appHtml = renderVeteransBuyingColorado();
const template = readFileSync(resolve(ROOT, "dist/public/index.html"), "utf-8");
const htmlRaw = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
// === SEO_INJECTED ===
const _seoBlock = buildSeoHeadBlock({
  title: 'Veterans Buying a Home in Colorado | My Rock Realty',
  description: 'Educational homebuying guidance for veterans considering a Colorado purchase. VA loan context, market orientation, and buyer-focused support across Colorado Springs and the Denver metro.',
  canonical: 'https://myrockhomes.com/military-relocation/veterans-buying-colorado/',
  slug: 'military-relocation/veterans-buying-colorado',
  ogImage: OG_IMAGE_MILITARY,
  schemas: [
    ...BASE_SCHEMAS,
    buildBreadcrumbSchema([
      { name: 'Home', url: 'https://myrockhomes.com/' },
      { name: 'Military Relocation', url: 'https://myrockhomes.com/military-relocation/' },
      { name: 'Veterans Buying Colorado', url: 'https://myrockhomes.com/military-relocation/veterans-buying-colorado/' },
    ]),
  ],
});
const html = injectSeoHead(htmlRaw, _seoBlock, 'https://myrockhomes.com/military-relocation/veterans-buying-colorado/');
console.log(`[prerender-veterans-buying-colorado] Rendered HTML length: ${appHtml.length} chars`);
const prerenderedDir = resolve(ROOT, "server/prerendered");
mkdirSync(prerenderedDir, { recursive: true });
writeFileSync(resolve(prerenderedDir, ARTIFACT), html);
console.log(`[prerender-veterans-buying-colorado] Written to ${resolve(prerenderedDir, ARTIFACT)} (${Buffer.byteLength(html)} bytes)`);
const distPrerenderedDir = resolve(ROOT, "dist/prerendered");
mkdirSync(distPrerenderedDir, { recursive: true });
copyFileSync(resolve(prerenderedDir, ARTIFACT), resolve(distPrerenderedDir, ARTIFACT));
console.log(`[prerender-veterans-buying-colorado] Written to ${resolve(distPrerenderedDir, ARTIFACT)} (fallback)`);
console.log(`[prerender-veterans-buying-colorado] Done.`);
