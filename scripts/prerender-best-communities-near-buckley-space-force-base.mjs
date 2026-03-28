/**
 * IL-79 Selective Prerender Script — /best-communities-near-buckley-space-force-base/
 */
import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { buildSeoHeadBlock, injectSeoHead, BASE_SCHEMAS, buildBreadcrumbSchema, OG_IMAGE_DEFAULT, OG_IMAGE_MILITARY } from "./seo-inject.mjs";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
async function prerender() {
  console.log("[prerender-best-communities-near-buckley-space-force-base] Starting SSR build...");
  await build({
    root: resolve(ROOT, "client"),
    configFile: resolve(ROOT, "vite.config.ts"),
    build: {
      ssr: resolve(ROOT, "client/src/entry-server-best-communities-near-buckley-space-force-base.tsx"),
      outDir: resolve(ROOT, "dist/server"),
      emptyOutDir: false,
      rollupOptions: {
        output: {
          format: "esm",
          entryFileNames: "entry-server-best-communities-near-buckley-space-force-base.js",
        },
      },
    },
    css: {},
  });
  console.log("[prerender-best-communities-near-buckley-space-force-base] SSR build complete. Rendering HTML...");
  const ssrModule = await import(resolve(ROOT, "dist/server/entry-server-best-communities-near-buckley-space-force-base.js"));
  const html = ssrModule.renderBestCommunitiesNearBuckleySpaceForceBase();
  console.log(`[prerender-best-communities-near-buckley-space-force-base] Rendered ${html.length} chars`);
  const shellPath = resolve(ROOT, "dist/public/index.html");
  if (!existsSync(shellPath)) throw new Error("[prerender-best-communities-near-buckley-space-force-base] dist/public/index.html not found.");
  const shell = readFileSync(shellPath, "utf-8");
  const PLACEHOLDER = '<div id="root"></div>';
  if (!shell.includes(PLACEHOLDER)) throw new Error("[prerender-best-communities-near-buckley-space-force-base] Placeholder not found.");
  const finalHtml = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
  const serverDir = resolve(ROOT, "server/prerendered");
  mkdirSync(serverDir, { recursive: true });
  const serverOut = resolve(serverDir, "best-communities-near-buckley-space-force-base.html");

  // === SEO_INJECTED ===
  const _seoBlock = buildSeoHeadBlock({
    title: 'Best Communities Near Buckley Space Force Base | Military Relocation | My Rock Realty',
    description: 'Community orientation for military and PCS buyers relocating near Buckley Space Force Base in Aurora, CO. Practical neighborhood comparisons and housing context.',
    canonical: 'https://myrockhomes.com/military-relocation/best-communities-near-buckley-space-force-base/',
    ogImage: OG_IMAGE_MILITARY,
    schemas: [
      ...BASE_SCHEMAS,
      buildBreadcrumbSchema([
        { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
        { "@type": "ListItem", position: 2, name: "Colorado Springs", item: "https://myrockhomes.com/colorado-springs-co-homes-for-sale" },
        { "@type": "ListItem", position: 3, name: 'Best Communities Near Buckley Space Force Base', item: 'https://myrockhomes.com/military-relocation/best-communities-near-buckley-space-force-base/' },
      ]),
    ],
    slug: 'best-communities-near-buckley-space-force-base',
  });
  const _injectedHtml = injectSeoHead(finalHtml, _seoBlock, 'https://myrockhomes.com/military-relocation/best-communities-near-buckley-space-force-base/');

  writeFileSync(serverOut, _injectedHtml, "utf-8");
  console.log(`[prerender-best-communities-near-buckley-space-force-base] Written to ${serverOut} (${finalHtml.length} bytes)`);
  const distDir = resolve(ROOT, "dist/prerendered");
  mkdirSync(distDir, { recursive: true });
  const distOut = resolve(distDir, "best-communities-near-buckley-space-force-base.html");
  writeFileSync(distOut, _injectedHtml, "utf-8");
  console.log(`[prerender-best-communities-near-buckley-space-force-base] Written to ${distOut} (fallback)`);
  console.log("[prerender-best-communities-near-buckley-space-force-base] Done.");
}
prerender().catch((err) => { console.error("[prerender-best-communities-near-buckley-space-force-base] FAILED:", err); process.exit(1); });
