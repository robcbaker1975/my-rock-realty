/**
 * IL-72 Selective Prerender Script — /military-relocation/pcs-timeline-checklist/
 */
import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { buildSeoHeadBlock, injectSeoHead, BASE_SCHEMAS, buildBreadcrumbSchema, OG_IMAGE_DEFAULT, OG_IMAGE_MILITARY } from "./seo-inject.mjs";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
async function prerender() {
  console.log("[prerender-pcs-timeline-checklist] Starting SSR build...");
  await build({
    root: resolve(ROOT, "client"),
    configFile: resolve(ROOT, "vite.config.ts"),
    build: {
      ssr: resolve(ROOT, "client/src/entry-server-pcs-timeline-checklist.tsx"),
      outDir: resolve(ROOT, "dist/server"),
      emptyOutDir: false,
      rollupOptions: {
        output: {
          format: "esm",
          entryFileNames: "entry-server-pcs-timeline-checklist.js",
        },
      },
    },
    css: {},
  });
  console.log("[prerender-pcs-timeline-checklist] SSR build complete. Rendering HTML...");
  const ssrModule = await import(resolve(ROOT, "dist/server/entry-server-pcs-timeline-checklist.js"));
  const html = ssrModule.renderPcsTimelineChecklist();
  console.log(`[prerender-pcs-timeline-checklist] Rendered ${html.length} chars`);
  const shellPath = resolve(ROOT, "dist/public/index.html");
  if (!existsSync(shellPath)) throw new Error("[prerender-pcs-timeline-checklist] dist/public/index.html not found.");
  const shell = readFileSync(shellPath, "utf-8");
  const PLACEHOLDER = '<div id="root"></div>';
  if (!shell.includes(PLACEHOLDER)) throw new Error("[prerender-pcs-timeline-checklist] Placeholder not found.");
  const finalHtml = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
  const serverDir = resolve(ROOT, "server/prerendered");
  mkdirSync(serverDir, { recursive: true });
  const serverOut = resolve(serverDir, "pcs-timeline-checklist.html");

  // === SEO_INJECTED ===
  const _seoBlock = buildSeoHeadBlock({
    title: 'PCS Timeline Checklist for Colorado | My Rock Realty',
    description: 'A practical PCS homebuying checklist for military buyers relocating to Colorado. Phase-by-phase planning from orders to closing.',
    canonical: 'https://myrockhomes.com/military-relocation/pcs-timeline-checklist/',
    ogImage: OG_IMAGE_MILITARY,
    schemas: [
      ...BASE_SCHEMAS,
      buildBreadcrumbSchema([
        { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
        { "@type": "ListItem", position: 2, name: "Colorado Springs", item: "https://myrockhomes.com/colorado-springs-co-homes-for-sale" },
        { "@type": "ListItem", position: 3, name: 'PCS Timeline Checklist for Colorado', item: 'https://myrockhomes.com/military-relocation/pcs-timeline-checklist/' },
      ]),
    ],
    slug: 'pcs-timeline-checklist',
  });
  const _injectedHtml = injectSeoHead(finalHtml, _seoBlock, 'https://myrockhomes.com/military-relocation/pcs-timeline-checklist/');

  writeFileSync(serverOut, _injectedHtml, "utf-8");
  console.log(`[prerender-pcs-timeline-checklist] Written to ${serverOut} (${finalHtml.length} bytes)`);
  const distDir = resolve(ROOT, "dist/prerendered");
  mkdirSync(distDir, { recursive: true });
  const distOut = resolve(distDir, "pcs-timeline-checklist.html");
  writeFileSync(distOut, _injectedHtml, "utf-8");
  console.log(`[prerender-pcs-timeline-checklist] Written to ${distOut} (fallback)`);
  console.log("[prerender-pcs-timeline-checklist] Done.");
}
prerender().catch((err) => { console.error("[prerender-pcs-timeline-checklist] FAILED:", err); process.exit(1); });
