import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync, copyFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { buildSeoHeadBlock, injectSeoHead, BASE_SCHEMAS, buildBreadcrumbSchema, OG_IMAGE_MILITARY } from "./seo-inject.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const ROUTE = "/military-relocation/va-home-loans-colorado/";
const ARTIFACT = "va-home-loans-colorado.html";

console.log(`[prerender-va-home-loans-colorado] Starting SSR build for ${ROUTE}...`);

await build({
  root: ROOT,
  build: {
    ssr: resolve(ROOT, "client/src/entry-server-va-home-loans-colorado.tsx"),
    outDir: resolve(ROOT, "dist/server"),
    emptyOutDir: false,
    rollupOptions: {
      output: {
        entryFileNames: "entry-server-va-home-loans-colorado.js",
      },
    },
  },
  logLevel: "warn",
});

console.log(`[prerender-va-home-loans-colorado] SSR build complete. Rendering HTML...`);

const { renderVaHomeLoansColorado } = await import(
  resolve(ROOT, "dist/server/entry-server-va-home-loans-colorado.js")
);

const appHtml = renderVaHomeLoansColorado();
const template = readFileSync(resolve(ROOT, "dist/public/index.html"), "utf-8");
const htmlRaw = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
// === SEO_INJECTED ===
const _seoBlock = buildSeoHeadBlock({
  title: 'VA Home Loans in Colorado: Educational Guide | My Rock Realty',
  description: 'Educational overview of VA home loan benefits for eligible veterans and active-duty buyers in Colorado. Covers key concepts, the homebuying process, and common questions. Not financial advice.',
  canonical: 'https://myrockhomes.com/military-relocation/va-home-loans-colorado/',
  slug: 'military-relocation/va-home-loans-colorado',
  ogImage: OG_IMAGE_MILITARY,
  schemas: [
    ...BASE_SCHEMAS,
    buildBreadcrumbSchema([
      { name: 'Home', url: 'https://myrockhomes.com/' },
      { name: 'Military Relocation', url: 'https://myrockhomes.com/military-relocation/' },
      { name: 'VA Home Loans Colorado', url: 'https://myrockhomes.com/military-relocation/va-home-loans-colorado/' },
    ]),
  ],
});
const html = injectSeoHead(htmlRaw, _seoBlock, 'https://myrockhomes.com/military-relocation/va-home-loans-colorado/');

console.log(`[prerender-va-home-loans-colorado] Rendered HTML length: ${appHtml.length} chars`);

const prerenderedDir = resolve(ROOT, "server/prerendered");
mkdirSync(prerenderedDir, { recursive: true });
writeFileSync(resolve(prerenderedDir, ARTIFACT), html);
console.log(`[prerender-va-home-loans-colorado] Written to ${resolve(prerenderedDir, ARTIFACT)} (${Buffer.byteLength(html)} bytes)`);

const distPrerenderedDir = resolve(ROOT, "dist/prerendered");
mkdirSync(distPrerenderedDir, { recursive: true });
copyFileSync(resolve(prerenderedDir, ARTIFACT), resolve(distPrerenderedDir, ARTIFACT));
console.log(`[prerender-va-home-loans-colorado] Written to ${resolve(distPrerenderedDir, ARTIFACT)} (fallback)`);

console.log(`[prerender-va-home-loans-colorado] Done.`);
