/**
 * IL-75 Selective Prerender Script — /military-relocation/pcs-relocation-tour-support/
 */
import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { buildSeoHeadBlock, injectSeoHead, BASE_SCHEMAS, buildBreadcrumbSchema, OG_IMAGE_DEFAULT, OG_IMAGE_MILITARY } from "./seo-inject.mjs";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
async function prerender() {
  console.log("[prerender-pcs-relocation-tour-support] Starting SSR build...");
  await build({
    root: resolve(ROOT, "client"),
    configFile: resolve(ROOT, "vite.config.ts"),
    build: {
      ssr: resolve(ROOT, "client/src/entry-server-pcs-relocation-tour-support.tsx"),
      outDir: resolve(ROOT, "dist/server"),
      emptyOutDir: false,
      rollupOptions: {
        output: {
          format: "esm",
          entryFileNames: "entry-server-pcs-relocation-tour-support.js",
        },
      },
    },
    css: {},
  });
  console.log("[prerender-pcs-relocation-tour-support] SSR build complete. Rendering HTML...");
  const ssrModule = await import(resolve(ROOT, "dist/server/entry-server-pcs-relocation-tour-support.js"));
  const html = ssrModule.renderPcsRelocationTourSupport();
  console.log(`[prerender-pcs-relocation-tour-support] Rendered ${html.length} chars`);
  const shellPath = resolve(ROOT, "dist/public/index.html");
  if (!existsSync(shellPath)) throw new Error("[prerender-pcs-relocation-tour-support] dist/public/index.html not found.");
  const shell = readFileSync(shellPath, "utf-8");
  const PLACEHOLDER = '<div id="root"></div>';
  if (!shell.includes(PLACEHOLDER)) throw new Error("[prerender-pcs-relocation-tour-support] Placeholder not found.");
  const finalHtml = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
  const serverDir = resolve(ROOT, "server/prerendered");
  mkdirSync(serverDir, { recursive: true });
  const serverOut = resolve(serverDir, "pcs-relocation-tour-support.html");

  // === SEO_INJECTED ===
  const _seoBlock = buildSeoHeadBlock({
    title: 'PCS Relocation Tour Support | Military Housing Guidance | My Rock Realty',
    description: 'PCS families relocating to Colorado Springs or Denver can evaluate housing before they arrive. Structured remote and in-person tour support for military buyers.',
    canonical: 'https://myrockhomes.com/military-relocation/pcs-relocation-tour-support/',
    ogImage: OG_IMAGE_MILITARY,
    schemas: [
      ...BASE_SCHEMAS,
      buildBreadcrumbSchema([
        { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
        { "@type": "ListItem", position: 2, name: "Colorado Springs", item: "https://myrockhomes.com/colorado-springs-co-homes-for-sale" },
        { "@type": "ListItem", position: 3, name: 'PCS Relocation Tour Support', item: 'https://myrockhomes.com/military-relocation/pcs-relocation-tour-support/' },
      ]),
    ],
    slug: 'pcs-relocation-tour-support',
  });
  const _injectedHtml = injectSeoHead(finalHtml, _seoBlock, 'https://myrockhomes.com/military-relocation/pcs-relocation-tour-support/');

  writeFileSync(serverOut, _injectedHtml, "utf-8");
  console.log(`[prerender-pcs-relocation-tour-support] Written to ${serverOut} (${finalHtml.length} bytes)`);
  const distDir = resolve(ROOT, "dist/prerendered");
  mkdirSync(distDir, { recursive: true });
  const distOut = resolve(distDir, "pcs-relocation-tour-support.html");
  writeFileSync(distOut, _injectedHtml, "utf-8");
  console.log(`[prerender-pcs-relocation-tour-support] Written to ${distOut} (fallback)`);
  console.log("[prerender-pcs-relocation-tour-support] Done.");
}
prerender().catch((err) => { console.error("[prerender-pcs-relocation-tour-support] FAILED:", err); process.exit(1); });
