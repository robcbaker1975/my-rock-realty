/**
 * IL-64 Selective Prerender Script — /military-relocation/fort-carson/
 *
 * Scope: ONE route only (/military-relocation/fort-carson/). Do not add other routes.
 * Strategy: Vite SSR build → renderToString → inject into dist/public/index.html shell
 *           → write to server/prerendered/fort-carson.html (committed to git)
 *           → also write to dist/prerendered/fort-carson.html (build artifact)
 *
 * Rollback: Delete server/prerendered/fort-carson.html and remove the
 *           app.get handler in server/_core/vite.ts. Revert package.json build script. Redeploy.
 *
 * Usage: Called automatically as part of `pnpm build`.
 *        Can also be run manually: node scripts/prerender-fort-carson.mjs
 */
import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { buildSeoHeadBlock, injectSeoHead, BASE_SCHEMAS, buildBreadcrumbSchema, OG_IMAGE_DEFAULT, OG_IMAGE_MILITARY } from "./seo-inject.mjs";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
async function prerenderFortCarson() {
  console.log("[prerender-fort-carson] Starting SSR build for /military-relocation/fort-carson/...");
  await build({
    root: resolve(ROOT, "client"),
    configFile: resolve(ROOT, "vite.config.ts"),
    build: {
      ssr: resolve(ROOT, "client/src/entry-server-fort-carson.tsx"),
      outDir: resolve(ROOT, "dist/server"),
      emptyOutDir: false,
      rollupOptions: {
        output: {
          format: "esm",
          entryFileNames: "entry-server-fort-carson.js",
        },
      },
    },
    css: {},
  });
  console.log("[prerender-fort-carson] SSR build complete. Rendering HTML...");
  const ssrModule = await import(
    resolve(ROOT, "dist/server/entry-server-fort-carson.js")
  );
  const html = ssrModule.renderFortCarson();
  console.log(`[prerender-fort-carson] Rendered HTML length: ${html.length} chars`);
  const shellPath = resolve(ROOT, "dist/public/index.html");
  if (!existsSync(shellPath)) {
    throw new Error(
      `[prerender-fort-carson] dist/public/index.html not found. Run 'vite build' first.`
    );
  }
  const shell = readFileSync(shellPath, "utf-8");
  const PLACEHOLDER = '<div id="root"></div>';
  if (!shell.includes(PLACEHOLDER)) {
    throw new Error(
      `[prerender-fort-carson] Placeholder '${PLACEHOLDER}' not found in shell.`
    );
  }
  const finalHtml = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
  const serverPrerenderedDir = resolve(ROOT, "server/prerendered");
  mkdirSync(serverPrerenderedDir, { recursive: true });
  const serverOutputPath = resolve(serverPrerenderedDir, "fort-carson.html");

  // === SEO_INJECTED ===
  const _seoBlock = buildSeoHeadBlock({
    title: 'Fort Carson Relocation Guide | Colorado Springs Real Estate | My Rock Realty',
    description: 'Practical relocation guidance for buyers moving to Fort Carson and the Colorado Springs area. PCS planning, VA loan context, and neighborhood orientation.',
    canonical: 'https://myrockhomes.com/military-relocation/fort-carson/',
    ogImage: OG_IMAGE_MILITARY,
    schemas: [
      ...BASE_SCHEMAS,
      buildBreadcrumbSchema([
        { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
        { "@type": "ListItem", position: 2, name: "Colorado Springs", item: "https://myrockhomes.com/colorado-springs-co-homes-for-sale" },
        { "@type": "ListItem", position: 3, name: 'Fort Carson Relocation Guide', item: 'https://myrockhomes.com/military-relocation/fort-carson/' },
      ]),
    ],
    slug: 'fort-carson',
  });
  const _injectedHtml = injectSeoHead(finalHtml, _seoBlock, 'https://myrockhomes.com/military-relocation/fort-carson/');

  writeFileSync(serverOutputPath, _injectedHtml, "utf-8");
  console.log(`[prerender-fort-carson] Written to ${serverOutputPath} (${finalHtml.length} bytes)`);
  const distPrerenderedDir = resolve(ROOT, "dist/prerendered");
  mkdirSync(distPrerenderedDir, { recursive: true });
  const distOutputPath = resolve(distPrerenderedDir, "fort-carson.html");
  writeFileSync(distOutputPath, _injectedHtml, "utf-8");
  console.log(`[prerender-fort-carson] Written to ${distOutputPath} (fallback)`);
  console.log("[prerender-fort-carson] Done.");
}
prerenderFortCarson().catch((err) => {
  console.error("[prerender-fort-carson] FAILED:", err);
  process.exit(1);
});
