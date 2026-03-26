/**
 * IL-01 Selective Prerender Script — /denver-homes-for-sale
 *
 * Scope: ONE route only (/denver-homes-for-sale). Do not add other routes.
 * Strategy: Vite SSR build → renderToString → inject into dist/public/index.html shell
 *           → write to dist/public/denver-homes-for-sale/index.html
 *
 * Rollback: Delete dist/public/denver-homes-for-sale/index.html and redeploy.
 *           Express falls back to the SPA shell immediately.
 *
 * Usage: Called automatically as the final step of `pnpm build`.
 *        Can also be run manually: node scripts/prerender-denver.mjs
 */

import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

async function prerenderDenver() {
  console.log("[prerender-denver] Starting SSR build for /denver-homes-for-sale...");

  // Step 1: Run Vite SSR build to produce a Node.js-compatible bundle
  // This resolves all @/ aliases, CSS imports, and JSX transforms correctly.
  // Output: dist/server/entry-server-denver.js
  await build({
    root: resolve(ROOT, "client"),
    configFile: resolve(ROOT, "vite.config.ts"),
    build: {
      ssr: resolve(ROOT, "client/src/entry-server-denver.tsx"),
      outDir: resolve(ROOT, "dist/server"),
      emptyOutDir: false, // Do not wipe dist/public
      rollupOptions: {
        output: {
          format: "esm",
          entryFileNames: "entry-server-denver.js",
        },
      },
    },
    // Suppress CSS processing errors in SSR context — CSS is handled by the client build
    css: {
      // Disable CSS injection in SSR build
    },
  });

  console.log("[prerender-denver] SSR build complete. Rendering HTML...");

  // Step 2: Import the SSR bundle and render to string
  const ssrModule = await import(
    resolve(ROOT, "dist/server/entry-server-denver.js")
  );
  const html = ssrModule.renderDenverHomesForSale();

  console.log(`[prerender-denver] Rendered HTML length: ${html.length} chars`);

  // Step 3: Read the built client shell (dist/public/index.html)
  const shellPath = resolve(ROOT, "dist/public/index.html");
  if (!existsSync(shellPath)) {
    throw new Error(
      `[prerender-denver] dist/public/index.html not found. Run 'vite build' first.`
    );
  }
  const shell = readFileSync(shellPath, "utf-8");

  // Step 4: Inject rendered HTML into the shell
  // Replace the empty root div with the prerendered content
  const PLACEHOLDER = '<div id="root"></div>';
  if (!shell.includes(PLACEHOLDER)) {
    throw new Error(
      `[prerender-denver] Could not find '${PLACEHOLDER}' in dist/public/index.html. Shell may have changed.`
    );
  }
  const prerenderedShell = shell.replace(
    PLACEHOLDER,
    `<div id="root">${html}</div>`
  );

  // Step 5: Write to server/prerendered/denver-homes-for-sale.html
  const outputDir = resolve(ROOT, "server/prerendered");
  const outputPath = resolve(outputDir, "denver-homes-for-sale.html");
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(outputPath, prerenderedShell, "utf-8");

  console.log(`[prerender-denver] Prerendered file written to: ${outputPath}`);

  // Step 6: Quick sanity check
  const written = readFileSync(outputPath, "utf-8");
  const anchorCount = (written.match(/<a\s/g) || []).length;
  const hasH1 = /<h1[\s>]/.test(written);
  const rootNotEmpty = !written.includes('<div id="root"></div>');

  console.log(`[prerender-denver] Sanity check:`);
  console.log(`  - Root div not empty: ${rootNotEmpty}`);
  console.log(`  - Has <h1>: ${hasH1}`);
  console.log(`  - Anchor tag count: ${anchorCount}`);

  if (!rootNotEmpty) {
    throw new Error("[prerender-denver] FAIL: Root div is still empty after injection.");
  }
  if (!hasH1) {
    console.warn("[prerender-denver] WARNING: No <h1> found in prerendered output.");
  }
  if (anchorCount < 5) {
    console.warn(`[prerender-denver] WARNING: Only ${anchorCount} anchor tags found (expected ≥10).`);
  }

  console.log("[prerender-denver] Done. /denver-homes-for-sale will serve prerendered HTML.");
}

prerenderDenver().catch((err) => {
  console.error("[prerender-denver] FAILED:", err.message);
  process.exit(1);
});
