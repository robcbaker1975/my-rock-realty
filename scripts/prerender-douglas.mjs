/**
 * IL-17 Selective Prerender Script — /douglas-co-homes-for-sale
 *
 * Scope: ONE route only (/douglas-co-homes-for-sale). Do not add other routes.
 * Strategy: Vite SSR build → renderToString → inject into dist/public/index.html shell
 *           → write to server/prerendered/douglas-co-homes-for-sale.html (committed to git)
 *           → also write to dist/prerendered/douglas-co-homes-for-sale.html (build artifact)
 *
 * Rollback: Delete server/prerendered/douglas-co-homes-for-sale.html and remove the
 *           app.get handler in server/_core/vite.ts. Revert package.json build script. Redeploy.
 *           Express falls back to the SPA shell immediately.
 *
 * Usage: Called automatically as the final step of `pnpm build`.
 *        Can also be run manually: node scripts/prerender-douglas.mjs
 */
import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

async function prerenderDouglas() {
  console.log("[prerender-douglas] Starting SSR build for /douglas-co-homes-for-sale...");

  // Step 1: Run Vite SSR build to produce a Node.js-compatible bundle
  // Output: dist/server/entry-server-douglas.js
  await build({
    root: resolve(ROOT, "client"),
    configFile: resolve(ROOT, "vite.config.ts"),
    build: {
      ssr: resolve(ROOT, "client/src/entry-server-douglas.tsx"),
      outDir: resolve(ROOT, "dist/server"),
      emptyOutDir: false,
      rollupOptions: {
        output: {
          format: "esm",
          entryFileNames: "entry-server-douglas.js",
        },
      },
    },
    css: {},
  });

  console.log("[prerender-douglas] SSR build complete. Rendering HTML...");

  // Step 2: Import the SSR bundle and render to string
  const ssrModule = await import(
    resolve(ROOT, "dist/server/entry-server-douglas.js")
  );
  const html = ssrModule.renderDouglasCoHomesForSale();
  console.log(`[prerender-douglas] Rendered HTML length: ${html.length} chars`);

  // Step 3: Read the built client shell (dist/public/index.html)
  const shellPath = resolve(ROOT, "dist/public/index.html");
  if (!existsSync(shellPath)) {
    throw new Error(
      `[prerender-douglas] dist/public/index.html not found. Run 'vite build' first.`
    );
  }
  const shell = readFileSync(shellPath, "utf-8");

  // Step 4: Inject rendered HTML into the shell
  const PLACEHOLDER = '<div id="root"></div>';
  if (!shell.includes(PLACEHOLDER)) {
    throw new Error(
      `[prerender-douglas] Placeholder '${PLACEHOLDER}' not found in shell. Cannot inject.`
    );
  }
  const finalHtml = shell.replace(
    PLACEHOLDER,
    `<div id="root">${html}</div>`
  );

  // Step 5: Write to server/prerendered/ (committed to git — primary runtime path)
  const serverPrerenderedDir = resolve(ROOT, "server/prerendered");
  mkdirSync(serverPrerenderedDir, { recursive: true });
  const serverOutputPath = resolve(serverPrerenderedDir, "douglas-co-homes-for-sale.html");
  writeFileSync(serverOutputPath, finalHtml, "utf-8");
  console.log(`[prerender-douglas] Written to ${serverOutputPath} (${finalHtml.length} bytes)`);

  // Step 6: Also write to dist/prerendered/ (build artifact — fallback path)
  const distPrerenderedDir = resolve(ROOT, "dist/prerendered");
  mkdirSync(distPrerenderedDir, { recursive: true });
  const distOutputPath = resolve(distPrerenderedDir, "douglas-co-homes-for-sale.html");
  writeFileSync(distOutputPath, finalHtml, "utf-8");
  console.log(`[prerender-douglas] Written to ${distOutputPath} (fallback)`);

  console.log("[prerender-douglas] Done.");
}

prerenderDouglas().catch((err) => {
  console.error("[prerender-douglas] FAILED:", err);
  process.exit(1);
});
