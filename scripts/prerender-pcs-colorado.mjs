/**
 * IL-63 Selective Prerender Script — /military-relocation/pcs-colorado/
 *
 * Scope: ONE route only (/military-relocation/pcs-colorado/). Do not add other routes.
 * Strategy: Vite SSR build → renderToString → inject into dist/public/index.html shell
 *           → write to server/prerendered/pcs-colorado.html (committed to git)
 *           → also write to dist/prerendered/pcs-colorado.html (build artifact)
 *
 * Rollback: Delete server/prerendered/pcs-colorado.html and remove the
 *           app.get handler in server/_core/vite.ts. Revert package.json build script. Redeploy.
 *
 * Usage: Called automatically as part of `pnpm build`.
 *        Can also be run manually: node scripts/prerender-pcs-colorado.mjs
 */
import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { buildSeoHeadBlock, injectSeoHead, BASE_SCHEMAS, buildBreadcrumbSchema, OG_IMAGE_DEFAULT, OG_IMAGE_MILITARY } from "./seo-inject.mjs";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
async function prerenderPcsColorado() {
  console.log("[prerender-pcs-colorado] Starting SSR build for /military-relocation/pcs-colorado/...");
  await build({
    root: resolve(ROOT, "client"),
    configFile: resolve(ROOT, "vite.config.ts"),
    build: {
      ssr: resolve(ROOT, "client/src/entry-server-pcs-colorado.tsx"),
      outDir: resolve(ROOT, "dist/server"),
      emptyOutDir: false,
      rollupOptions: {
        output: {
          format: "esm",
          entryFileNames: "entry-server-pcs-colorado.js",
        },
      },
    },
    css: {},
  });
  console.log("[prerender-pcs-colorado] SSR build complete. Rendering HTML...");
  const ssrModule = await import(
    resolve(ROOT, "dist/server/entry-server-pcs-colorado.js")
  );
  const html = ssrModule.renderPcsColorado();
  console.log(`[prerender-pcs-colorado] Rendered HTML length: ${html.length} chars`);
  const shellPath = resolve(ROOT, "dist/public/index.html");
  if (!existsSync(shellPath)) {
    throw new Error(
      `[prerender-pcs-colorado] dist/public/index.html not found. Run 'vite build' first.`
    );
  }
  const shell = readFileSync(shellPath, "utf-8");
  const PLACEHOLDER = '<div id="root"></div>';
  if (!shell.includes(PLACEHOLDER)) {
    throw new Error(
      `[prerender-pcs-colorado] Placeholder '${PLACEHOLDER}' not found in shell.`
    );
  }
  const finalHtml = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
  const serverPrerenderedDir = resolve(ROOT, "server/prerendered");
  mkdirSync(serverPrerenderedDir, { recursive: true });
  const serverOutputPath = resolve(serverPrerenderedDir, "pcs-colorado.html");

  // === SEO_INJECTED ===
  const _seoBlock = buildSeoHeadBlock({
    title: 'PCS to Colorado: Military Homebuying Guide | My Rock Realty',
    description: 'Practical guidance for military buyers PCS-ing to Colorado. Covers PCS timing, rent vs. buy decisions, VA loan use, and Colorado-specific housing context.',
    canonical: 'https://myrockhomes.com/military-relocation/pcs-colorado/',
    ogImage: OG_IMAGE_MILITARY,
    schemas: [
      ...BASE_SCHEMAS,
      buildBreadcrumbSchema([
        { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
        { "@type": "ListItem", position: 2, name: "Colorado Springs", item: "https://myrockhomes.com/colorado-springs-co-homes-for-sale" },
        { "@type": "ListItem", position: 3, name: 'PCS to Colorado: Military Homebuying Guide', item: 'https://myrockhomes.com/military-relocation/pcs-colorado/' },
      ]),
    ],
    slug: 'pcs-colorado',
  });
  const _injectedHtml = injectSeoHead(finalHtml, _seoBlock, 'https://myrockhomes.com/military-relocation/pcs-colorado/');

  writeFileSync(serverOutputPath, _injectedHtml, "utf-8");
  console.log(`[prerender-pcs-colorado] Written to ${serverOutputPath} (${finalHtml.length} bytes)`);
  const distPrerenderedDir = resolve(ROOT, "dist/prerendered");
  mkdirSync(distPrerenderedDir, { recursive: true });
  const distOutputPath = resolve(distPrerenderedDir, "pcs-colorado.html");
  writeFileSync(distOutputPath, _injectedHtml, "utf-8");
  console.log(`[prerender-pcs-colorado] Written to ${distOutputPath} (fallback)`);
  console.log("[prerender-pcs-colorado] Done.");
}
prerenderPcsColorado().catch((err) => {
  console.error("[prerender-pcs-colorado] FAILED:", err);
  process.exit(1);
});
