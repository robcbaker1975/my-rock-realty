/**
 * IL-03 Selective Prerender Script — /highlands-ranch-co-homes-for-sale
 *
 * Scope: ONE route only (/highlands-ranch-co-homes-for-sale). Do not add other routes.
 * Strategy: Vite SSR build → renderToString → inject into dist/public/index.html shell
 *           → write to server/prerendered/highlands-ranch-co-homes-for-sale.html (committed to git)
 *           → also write to dist/prerendered/highlands-ranch-co-homes-for-sale.html (build artifact)
 *
 * Rollback: Delete server/prerendered/highlands-ranch-co-homes-for-sale.html and remove the
 *           app.get handler in server/_core/vite.ts. Revert package.json build script. Redeploy.
 *           Express falls back to the SPA shell immediately.
 *
 * Usage: Called automatically as the final step of `pnpm build`.
 *        Can also be run manually: node scripts/prerender-highlands-ranch.mjs
 */
import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

async function prerenderHighlandsRanch() {
  console.log("[prerender-highlands-ranch] Starting SSR build for /highlands-ranch-co-homes-for-sale...");

  // Step 1: Run Vite SSR build to produce a Node.js-compatible bundle
  // Output: dist/server/entry-server-highlands-ranch.js
  await build({
    root: resolve(ROOT, "client"),
    configFile: resolve(ROOT, "vite.config.ts"),
    build: {
      ssr: resolve(ROOT, "client/src/entry-server-highlands-ranch.tsx"),
      outDir: resolve(ROOT, "dist/server"),
      emptyOutDir: false,
      rollupOptions: {
        output: {
          format: "esm",
          entryFileNames: "entry-server-highlands-ranch.js",
        },
      },
    },
    css: {},
  });

  console.log("[prerender-highlands-ranch] SSR build complete. Rendering HTML...");

  // Step 2: Import the SSR bundle and render to string
  const ssrModule = await import(
    resolve(ROOT, "dist/server/entry-server-highlands-ranch.js")
  );
  const html = ssrModule.renderHighlandsRanchCoHomesForSale();
  console.log(`[prerender-highlands-ranch] Rendered HTML length: ${html.length} chars`);

  // Step 3: Read the built client shell (dist/public/index.html)
  const shellPath = resolve(ROOT, "dist/public/index.html");
  if (!existsSync(shellPath)) {
    throw new Error(
      `[prerender-highlands-ranch] dist/public/index.html not found. Run 'vite build' first.`
    );
  }
  const shell = readFileSync(shellPath, "utf-8");

  // Step 4: Inject rendered HTML into the shell
  const PLACEHOLDER = '<div id="root"></div>';
  if (!shell.includes(PLACEHOLDER)) {
    throw new Error(
      `[prerender-highlands-ranch] Could not find '${PLACEHOLDER}' in dist/public/index.html. Shell may have changed.`
    );
  }
  const prerenderedShell = shell.replace(
    PLACEHOLDER,
    `<div id="root">${html}</div>`
  );

  // Step 5a: Write to dist/prerendered/ (build artifact)
  const distOutputDir = resolve(ROOT, "dist/prerendered");
  const distOutputPath = resolve(distOutputDir, "highlands-ranch-co-homes-for-sale.html");
  mkdirSync(distOutputDir, { recursive: true });
  writeFileSync(distOutputPath, prerenderedShell, "utf-8");
  console.log(`[prerender-highlands-ranch] Prerendered file written to: ${distOutputPath}`);

  // Step 5b: Write to server/prerendered/ (committed to git, primary path for Render)
  const srcOutputDir = resolve(ROOT, "server/prerendered");
  const srcOutputPath = resolve(srcOutputDir, "highlands-ranch-co-homes-for-sale.html");
  mkdirSync(srcOutputDir, { recursive: true });
  writeFileSync(srcOutputPath, prerenderedShell, "utf-8");
  console.log(`[prerender-highlands-ranch] Committed artifact written to: ${srcOutputPath}`);

  // Step 6: Quick sanity check
  const written = readFileSync(srcOutputPath, "utf-8");
  const anchorCount = (written.match(/<a\s/g) || []).length;
  const hasH1 = /<h1[\s>]/.test(written);
  const rootNotEmpty = !written.includes('<div id="root"></div>');
  console.log(`[prerender-highlands-ranch] Sanity check:`);
  console.log(`  - Root div not empty: ${rootNotEmpty}`);
  console.log(`  - Has <h1>: ${hasH1}`);
  console.log(`  - Anchor tag count: ${anchorCount}`);
  if (!rootNotEmpty) {
    throw new Error("[prerender-highlands-ranch] FAIL: Root div is still empty after injection.");
  }
  if (!hasH1) {
    console.warn("[prerender-highlands-ranch] WARNING: No <h1> found in prerendered output.");
  }
  if (anchorCount < 5) {
    console.warn(`[prerender-highlands-ranch] WARNING: Only ${anchorCount} anchor tags found (expected ≥5).`);
  }
  console.log("[prerender-highlands-ranch] Done. /highlands-ranch-co-homes-for-sale will serve prerendered HTML.");
}

prerenderHighlandsRanch().catch((err) => {
  console.error("[prerender-highlands-ranch] FAILED:", err.message);
  process.exit(1);
});
