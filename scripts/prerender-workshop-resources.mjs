/**
 * IL-98 Selective Prerender Script — /colorado-home-buying-workshop/resources
 * Scope: ONE route only. Do not add other routes.
 */
import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { buildSeoHeadBlock, injectSeoHead, BASE_SCHEMAS, buildBreadcrumbSchema, OG_IMAGE_DEFAULT } from "./seo-inject.mjs";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
async function prerenderWorkshopResources() {
  console.log("[prerender-workshop-resources] Starting SSR build for /colorado-home-buying-workshop/resources...");
  await build({
    root: resolve(ROOT, "client"),
    configFile: resolve(ROOT, "vite.config.ts"),
    build: {
      ssr: resolve(ROOT, "client/src/entry-server-workshop-resources.tsx"),
      outDir: resolve(ROOT, "dist/server"),
      emptyOutDir: false,
      rollupOptions: {
        output: {
          format: "esm",
          entryFileNames: "entry-server-workshop-resources.js",
        },
      },
    },
    css: {},
  });
  console.log("[prerender-workshop-resources] SSR build complete. Rendering HTML...");
  const ssrModule = await import(resolve(ROOT, "dist/server/entry-server-workshop-resources.js"));
  const html = ssrModule.renderWorkshopResources();
  console.log(`[prerender-workshop-resources] Rendered HTML length: ${html.length} chars`);
  const shellPath = resolve(ROOT, "dist/public/index.html");
  if (!existsSync(shellPath)) {
    throw new Error(`[prerender-workshop-resources] dist/public/index.html not found. Run 'vite build' first.`);
  }
  const shell = readFileSync(shellPath, "utf-8");
  const PLACEHOLDER = '<div id="root"></div>';
  if (!shell.includes(PLACEHOLDER)) {
    throw new Error(`[prerender-workshop-resources] Could not find '${PLACEHOLDER}' in dist/public/index.html.`);
  }
  const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
  const distOutputDir = resolve(ROOT, "dist/prerendered");
  // === SEO_INJECTED ===
  const _seoBlock = buildSeoHeadBlock({
    title: "Colorado Home Buying Workshop — Worksheets & Resources | My Rock Realty",
    description: "Three practical worksheets to support the Colorado Home Buying Workshop: Needs, Wants & Dreams; Monthly Payment Comfort; and Buyer Offer Strategy. Use these before and after the workshop.",
    canonical: "https://myrockhomes.com/colorado-home-buying-workshop/resources",
    ogImage: OG_IMAGE_DEFAULT,
    schemas: [
      ...BASE_SCHEMAS,
      buildBreadcrumbSchema([
        { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
        { "@type": "ListItem", position: 2, name: "Colorado Home Buying Workshop", item: "https://myrockhomes.com/colorado-home-buying-workshop" },
        { "@type": "ListItem", position: 3, name: "Workshop Worksheets & Resources", item: "https://myrockhomes.com/colorado-home-buying-workshop/resources" },
      ]),
    ],
    slug: "colorado-home-buying-workshop-resources",
  });
  const _injectedHtml = injectSeoHead(prerenderedShell, _seoBlock, "https://myrockhomes.com/colorado-home-buying-workshop/resources");
  mkdirSync(distOutputDir, { recursive: true });
  writeFileSync(resolve(distOutputDir, "colorado-home-buying-workshop-resources.html"), prerenderedShell, "utf-8");
  const srcOutputDir = resolve(ROOT, "server/prerendered");
  mkdirSync(srcOutputDir, { recursive: true });
  const srcOutputPath = resolve(srcOutputDir, "colorado-home-buying-workshop-resources.html");
  writeFileSync(srcOutputPath, _injectedHtml, "utf-8");
  console.log(`[prerender-workshop-resources] Committed artifact written to: ${srcOutputPath}`);
  const written = readFileSync(srcOutputPath, "utf-8");
  const anchorCount = (written.match(/<a\s/g) || []).length;
  const hasH1 = /<h1[\s>]/.test(written);
  const rootNotEmpty = !written.includes('<div id="root"></div>');
  const hasTitle = /<title[^>]*>Colorado Home Buying Workshop/.test(written);
  const hasCanonical = /canonical.*colorado-home-buying-workshop\/resources/.test(written);
  const hasBreadcrumb = /BreadcrumbList/.test(written);
  console.log(`[prerender-workshop-resources] Sanity: rootNotEmpty=${rootNotEmpty}, hasH1=${hasH1}, anchors=${anchorCount}, hasTitle=${hasTitle}, hasCanonical=${hasCanonical}, hasBreadcrumb=${hasBreadcrumb}`);
  if (!rootNotEmpty) throw new Error("[prerender-workshop-resources] FAIL: Root div still empty.");
  if (!hasTitle) throw new Error("[prerender-workshop-resources] FAIL: Title not injected.");
  if (!hasCanonical) throw new Error("[prerender-workshop-resources] FAIL: Canonical not injected.");
  console.log("[prerender-workshop-resources] Done.");
}
prerenderWorkshopResources().catch((err) => {
  console.error("[prerender-workshop-resources] FAILED:", err.message);
  process.exit(1);
});
