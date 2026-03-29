/**
 * Selective Prerender Script — /wolf-ranch-colorado-springs-real-estate
 * Scope: ONE route only. Do not add other routes.
 */
import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { buildSeoHeadBlock, injectSeoHead, BASE_SCHEMAS, buildBreadcrumbSchema, OG_IMAGE_DEFAULT } from "./seo-inject.mjs";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
async function prerenderWolfRanch() {
  console.log("[prerender-wolf-ranch] Starting SSR build for /wolf-ranch-colorado-springs-real-estate...");
  await build({
    root: resolve(ROOT, "client"),
    configFile: resolve(ROOT, "vite.config.ts"),
    build: {
      ssr: resolve(ROOT, "client/src/entry-server-wolf-ranch.tsx"),
      outDir: resolve(ROOT, "dist/server"),
      emptyOutDir: false,
      rollupOptions: {
        output: {
          format: "esm",
          entryFileNames: "entry-server-wolf-ranch.js",
        },
      },
    },
    css: {},
  });
  console.log("[prerender-wolf-ranch] SSR build complete. Rendering HTML...");
  const ssrModule = await import(resolve(ROOT, "dist/server/entry-server-wolf-ranch.js"));
  const html = ssrModule.renderWolfRanchColoradoSpringsRealEstate();
  console.log(`[prerender-wolf-ranch] Rendered HTML length: ${html.length} chars`);
  const shellPath = resolve(ROOT, "dist/public/index.html");
  if (!existsSync(shellPath)) {
    throw new Error(`[prerender-wolf-ranch] dist/public/index.html not found. Run 'vite build' first.`);
  }
  const shell = readFileSync(shellPath, "utf-8");
  const PLACEHOLDER = '<div id="root"></div>';
  if (!shell.includes(PLACEHOLDER)) {
    throw new Error(`[prerender-wolf-ranch] Could not find '${PLACEHOLDER}' in dist/public/index.html.`);
  }
  const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
  const distOutputDir = resolve(ROOT, "dist/prerendered");
  // === SEO_INJECTED ===
  const _seoBlock = buildSeoHeadBlock({
    title: "Living in Wolf Ranch, Colorado Springs: Real Estate, Tradeoffs, and What It's Like",
    description: "Thinking about living in Wolf Ranch, Colorado Springs? Learn what Wolf Ranch is actually like, who it fits, the real tradeoffs, and how it compares with Briargate, Banning Lewis Ranch, and Cordera.",
    canonical: "https://myrockhomes.com/wolf-ranch-colorado-springs-real-estate/",
    ogImage: OG_IMAGE_DEFAULT,
    schemas: [
      ...BASE_SCHEMAS,
      buildBreadcrumbSchema([
        { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
        { "@type": "ListItem", position: 2, name: "Colorado Springs", item: "https://myrockhomes.com/colorado-springs-co-homes-for-sale" },
        { "@type": "ListItem", position: 3, name: "Living in Wolf Ranch, Colorado Springs: Real Estate, Tradeoffs, and What It's Like", item: "https://myrockhomes.com/wolf-ranch-colorado-springs-real-estate/" },
      ]),
    ],
    slug: "wolf-ranch-colorado-springs-real-estate",
  });
  const _injectedHtml = injectSeoHead(prerenderedShell, _seoBlock, "https://myrockhomes.com/wolf-ranch-colorado-springs-real-estate/");
  mkdirSync(distOutputDir, { recursive: true });
  writeFileSync(resolve(distOutputDir, "wolf-ranch-colorado-springs-real-estate.html"), prerenderedShell, "utf-8");
  const srcOutputDir = resolve(ROOT, "server/prerendered");
  mkdirSync(srcOutputDir, { recursive: true });
  const srcOutputPath = resolve(srcOutputDir, "wolf-ranch-colorado-springs-real-estate.html");
  writeFileSync(srcOutputPath, _injectedHtml, "utf-8");
  console.log(`[prerender-wolf-ranch] Committed artifact written to: ${srcOutputPath}`);
  const written = readFileSync(srcOutputPath, "utf-8");
  const anchorCount = (written.match(/<a\s/g) || []).length;
  const hasH1 = /<h1[\s>]/.test(written);
  const rootNotEmpty = !written.includes('<div id="root"></div>');
  console.log(`[prerender-wolf-ranch] Sanity: rootNotEmpty=${rootNotEmpty}, hasH1=${hasH1}, anchors=${anchorCount}`);
  if (!rootNotEmpty) throw new Error("[prerender-wolf-ranch] FAIL: Root div still empty.");
  console.log("[prerender-wolf-ranch] Done.");
}
prerenderWolfRanch().catch((err) => {
  console.error("[prerender-wolf-ranch] FAILED:", err.message);
  process.exit(1);
});
