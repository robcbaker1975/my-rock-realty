/**
 * IL-62 Selective Prerender Script — /military-relocation/
 *
 * Scope: ONE route only (/military-relocation/). Do not add other routes.
 * Strategy: Vite SSR build → renderToString → inject into dist/public/index.html shell
 *           → write to server/prerendered/military-relocation.html (committed to git)
 *           → also write to dist/prerendered/military-relocation.html (build artifact)
 *
 * Rollback: Delete server/prerendered/military-relocation.html and remove the
 *           app.get handler in server/_core/vite.ts. Revert package.json build script. Redeploy.
 *
 * Usage: Called automatically as part of `pnpm build`.
 *        Can also be run manually: node scripts/prerender-military-relocation.mjs
 */
import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { buildSeoHeadBlock, injectSeoHead, BASE_SCHEMAS, buildBreadcrumbSchema, OG_IMAGE_DEFAULT, OG_IMAGE_MILITARY } from "./seo-inject.mjs";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
async function prerenderMilitaryRelocation() {
  console.log("[prerender-military-relocation] Starting SSR build for /military-relocation/...");
  await build({
    root: resolve(ROOT, "client"),
    configFile: resolve(ROOT, "vite.config.ts"),
    build: {
      ssr: resolve(ROOT, "client/src/entry-server-military-relocation.tsx"),
      outDir: resolve(ROOT, "dist/server"),
      emptyOutDir: false,
      rollupOptions: {
        output: {
          format: "esm",
          entryFileNames: "entry-server-military-relocation.js",
        },
      },
    },
    css: {},
  });
  console.log("[prerender-military-relocation] SSR build complete. Rendering HTML...");
  const ssrModule = await import(
    resolve(ROOT, "dist/server/entry-server-military-relocation.js")
  );
  const html = ssrModule.renderMilitaryRelocation();
  console.log(`[prerender-military-relocation] Rendered HTML length: ${html.length} chars`);
  const shellPath = resolve(ROOT, "dist/public/index.html");
  if (!existsSync(shellPath)) {
    throw new Error(
      `[prerender-military-relocation] dist/public/index.html not found. Run 'vite build' first.`
    );
  }
  const shell = readFileSync(shellPath, "utf-8");
  const PLACEHOLDER = '<div id="root"></div>';
  if (!shell.includes(PLACEHOLDER)) {
    throw new Error(
      `[prerender-military-relocation] Placeholder '${PLACEHOLDER}' not found in shell.`
    );
  }
  const finalHtml = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
  const serverPrerenderedDir = resolve(ROOT, "server/prerendered");
  mkdirSync(serverPrerenderedDir, { recursive: true });
  const serverOutputPath = resolve(serverPrerenderedDir, "military-relocation.html");

  // === SEO_INJECTED ===
  const _seoBlock = buildSeoHeadBlock({
    title: 'Military & PCS Relocation in Colorado | My Rock Realty',
    description: 'Colorado real estate support for active duty, veterans, military spouses, and PCS buyers. VA homebuying guidance, base-specific relocation resources, and community orientation.',
    canonical: 'https://myrockhomes.com/military-relocation/',
    ogImage: OG_IMAGE_MILITARY,
    schemas: [
      ...BASE_SCHEMAS,
      buildBreadcrumbSchema([
        { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
        { "@type": "ListItem", position: 2, name: "Colorado Springs", item: "https://myrockhomes.com/colorado-springs-co-homes-for-sale" },
        { "@type": "ListItem", position: 3, name: 'Military & PCS Relocation in Colorado', item: 'https://myrockhomes.com/military-relocation/' },
      ]),
    ],
    slug: 'military-relocation',
  });
  const _injectedHtml = injectSeoHead(finalHtml, _seoBlock, 'https://myrockhomes.com/military-relocation/');

  writeFileSync(serverOutputPath, _injectedHtml, "utf-8");
  console.log(`[prerender-military-relocation] Written to ${serverOutputPath} (${finalHtml.length} bytes)`);
  const distPrerenderedDir = resolve(ROOT, "dist/prerendered");
  mkdirSync(distPrerenderedDir, { recursive: true });
  const distOutputPath = resolve(distPrerenderedDir, "military-relocation.html");
  writeFileSync(distOutputPath, _injectedHtml, "utf-8");
  console.log(`[prerender-military-relocation] Written to ${distOutputPath} (fallback)`);
  console.log("[prerender-military-relocation] Done.");
}
prerenderMilitaryRelocation().catch((err) => {
  console.error("[prerender-military-relocation] FAILED:", err);
  process.exit(1);
});
