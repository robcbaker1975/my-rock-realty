/**
 * IL-81 Selective Prerender Script — /widefield-co-homes-for-sale/
 */
import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { buildSeoHeadBlock, injectSeoHead, BASE_SCHEMAS, buildBreadcrumbSchema, OG_IMAGE_DEFAULT, OG_IMAGE_MILITARY } from "./seo-inject.mjs";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
async function prerender() {
  console.log("[prerender-widefield-co-homes-for-sale] Starting SSR build...");
  await build({
    root: resolve(ROOT, "client"),
    configFile: resolve(ROOT, "vite.config.ts"),
    build: {
      ssr: resolve(ROOT, "client/src/entry-server-widefield-co-homes-for-sale.tsx"),
      outDir: resolve(ROOT, "dist/server"),
      emptyOutDir: false,
      rollupOptions: {
        output: {
          format: "esm",
          entryFileNames: "entry-server-widefield-co-homes-for-sale.js",
        },
      },
    },
    css: {},
  });
  console.log("[prerender-widefield-co-homes-for-sale] SSR build complete. Rendering HTML...");
  const ssrModule = await import(resolve(ROOT, "dist/server/entry-server-widefield-co-homes-for-sale.js"));
  const html = ssrModule.renderWidefieldCoHomesForSale();
  console.log(`[prerender-widefield-co-homes-for-sale] Rendered ${html.length} chars`);
  const shellPath = resolve(ROOT, "dist/public/index.html");
  if (!existsSync(shellPath)) throw new Error("[prerender-widefield-co-homes-for-sale] dist/public/index.html not found.");
  const shell = readFileSync(shellPath, "utf-8");
  const PLACEHOLDER = '<div id="root"></div>';
  if (!shell.includes(PLACEHOLDER)) throw new Error("[prerender-widefield-co-homes-for-sale] Placeholder not found.");
  const finalHtml = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
  const serverDir = resolve(ROOT, "server/prerendered");
  mkdirSync(serverDir, { recursive: true });
  const serverOut = resolve(serverDir, "widefield-co-homes-for-sale.html");

  // === SEO_INJECTED ===
  const _seoBlock = buildSeoHeadBlock({
    title: 'Widefield CO Homes for Sale | Widefield Colorado Real Estate',
    description: 'Explore Widefield CO homes for sale, neighborhood character, housing styles, suburban appeal, and helpful context for buyers considering the Widefield area near Colorado Springs.',
    canonical: 'https://myrockhomes.com/widefield-co-homes-for-sale',
    ogImage: OG_IMAGE_DEFAULT,
  schemas: [
    ...BASE_SCHEMAS,
    buildBreadcrumbSchema([
      { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
      { "@type": "ListItem", position: 2, name: "Colorado Springs", item: "https://myrockhomes.com/colorado-springs-co-homes-for-sale" },
      { "@type": "ListItem", position: 3, name: "Widefield CO Homes for Sale", item: 'https://myrockhomes.com/widefield-co-homes-for-sale' },
    ]),
  ],
  slug: 'widefield-co-homes-for-sale',
  });
  const _injectedHtml = injectSeoHead(finalHtml, _seoBlock, 'https://myrockhomes.com/widefield-co-homes-for-sale');
  writeFileSync(serverOut, _injectedHtml, "utf-8");
  console.log(`[prerender-widefield-co-homes-for-sale] Written to ${serverOut} (${finalHtml.length} bytes)`);
  const distDir = resolve(ROOT, "dist/prerendered");
  mkdirSync(distDir, { recursive: true });
  const distOut = resolve(distDir, "widefield-co-homes-for-sale.html");
  writeFileSync(distOut, _injectedHtml, "utf-8");
  console.log(`[prerender-widefield-co-homes-for-sale] Written to ${distOut} (fallback)`);
  console.log("[prerender-widefield-co-homes-for-sale] Done.");
}
prerender().catch((err) => { console.error("[prerender-widefield-co-homes-for-sale] FAILED:", err); process.exit(1); });
