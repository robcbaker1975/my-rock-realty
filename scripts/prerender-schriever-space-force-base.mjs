/**
 * IL-66 Selective Prerender Script — /military-relocation/schriever-space-force-base/
 *
 * Scope: ONE route only (/military-relocation/schriever-space-force-base/). Do not add other routes.
 * Strategy: Vite SSR build → renderToString → inject into dist/public/index.html shell
 *           → write to server/prerendered/schriever-space-force-base.html (committed to git)
 *           → also write to dist/prerendered/schriever-space-force-base.html (build artifact)
 *
 * Rollback: Delete server/prerendered/schriever-space-force-base.html and remove the
 *           app.get handler in server/_core/vite.ts. Revert package.json build script. Redeploy.
 *
 * Usage: Called automatically as part of `pnpm build`.
 *        Can also be run manually: node scripts/prerender-schriever-space-force-base.mjs
 */
import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { buildSeoHeadBlock, injectSeoHead, BASE_SCHEMAS, buildBreadcrumbSchema, OG_IMAGE_DEFAULT, OG_IMAGE_MILITARY } from "./seo-inject.mjs";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
async function prerenderSchrieverSpaceForceBase() {
  console.log("[prerender-schriever-space-force-base] Starting SSR build for /military-relocation/schriever-space-force-base/...");
  await build({
    root: resolve(ROOT, "client"),
    configFile: resolve(ROOT, "vite.config.ts"),
    build: {
      ssr: resolve(ROOT, "client/src/entry-server-schriever-space-force-base.tsx"),
      outDir: resolve(ROOT, "dist/server"),
      emptyOutDir: false,
      rollupOptions: {
        output: {
          format: "esm",
          entryFileNames: "entry-server-schriever-space-force-base.js",
        },
      },
    },
    css: {},
  });
  console.log("[prerender-schriever-space-force-base] SSR build complete. Rendering HTML...");
  const ssrModule = await import(
    resolve(ROOT, "dist/server/entry-server-schriever-space-force-base.js")
  );
  const html = ssrModule.renderSchrieverSpaceForceBase();
  console.log(`[prerender-schriever-space-force-base] Rendered HTML length: ${html.length} chars`);
  const shellPath = resolve(ROOT, "dist/public/index.html");
  if (!existsSync(shellPath)) {
    throw new Error(
      `[prerender-schriever-space-force-base] dist/public/index.html not found. Run 'vite build' first.`
    );
  }
  const shell = readFileSync(shellPath, "utf-8");
  const PLACEHOLDER = '<div id="root"></div>';
  if (!shell.includes(PLACEHOLDER)) {
    throw new Error(
      `[prerender-schriever-space-force-base] Placeholder '${PLACEHOLDER}' not found in shell.`
    );
  }
  const finalHtml = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
  const serverPrerenderedDir = resolve(ROOT, "server/prerendered");
  mkdirSync(serverPrerenderedDir, { recursive: true });
  const serverOutputPath = resolve(serverPrerenderedDir, "schriever-space-force-base.html");

  // === SEO_INJECTED ===
  const _seoBlock = buildSeoHeadBlock({
    title: 'Schriever Space Force Base Relocation Guide | Colorado Springs Real Estate | My Rock Realty',
    description: 'Practical relocation guidance for buyers moving to Schriever Space Force Base and the Colorado Springs area. PCS planning, VA loan context, and community orientation.',
    canonical: 'https://myrockhomes.com/military-relocation/schriever-space-force-base/',
    ogImage: OG_IMAGE_MILITARY,
    schemas: [
      ...BASE_SCHEMAS,
      buildBreadcrumbSchema([
        { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
        { "@type": "ListItem", position: 2, name: "Colorado Springs", item: "https://myrockhomes.com/colorado-springs-co-homes-for-sale" },
        { "@type": "ListItem", position: 3, name: 'Schriever Space Force Base Relocation Guide', item: 'https://myrockhomes.com/military-relocation/schriever-space-force-base/' },
      ]),
    ],
    slug: 'schriever-space-force-base',
  });
  const _injectedHtml = injectSeoHead(finalHtml, _seoBlock, 'https://myrockhomes.com/military-relocation/schriever-space-force-base/');

  writeFileSync(serverOutputPath, _injectedHtml, "utf-8");
  console.log(`[prerender-schriever-space-force-base] Written to ${serverOutputPath} (${finalHtml.length} bytes)`);
  const distPrerenderedDir = resolve(ROOT, "dist/prerendered");
  mkdirSync(distPrerenderedDir, { recursive: true });
  const distOutputPath = resolve(distPrerenderedDir, "schriever-space-force-base.html");
  writeFileSync(distOutputPath, _injectedHtml, "utf-8");
  console.log(`[prerender-schriever-space-force-base] Written to ${distOutputPath} (fallback)`);
  console.log("[prerender-schriever-space-force-base] Done.");
}
prerenderSchrieverSpaceForceBase().catch((err) => {
  console.error("[prerender-schriever-space-force-base] FAILED:", err);
  process.exit(1);
});
