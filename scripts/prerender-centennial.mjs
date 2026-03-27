/**
 * IL-19 Selective Prerender Script — /centennial-co-homes-for-sale
 *
 * Scope: ONE route only (/centennial-co-homes-for-sale). Do not add other routes.
 * Strategy: Vite SSR build → renderToString → inject into dist/public/index.html shell
 *           → write to server/prerendered/centennial-co-homes-for-sale.html (committed to git)
 *           → also write to dist/prerendered/centennial-co-homes-for-sale.html (build artifact)
 *
 * Rollback: Delete server/prerendered/centennial-co-homes-for-sale.html and remove the
 *           app.get handler in server/_core/vite.ts. Revert package.json build script. Redeploy.
 *
 * Usage: Called automatically as the final step of `pnpm build`.
 *        Can also be run manually: node scripts/prerender-centennial.mjs
 */
import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

async function prerenderCentennial() {
  console.log("[prerender-centennial] Starting SSR build for /centennial-co-homes-for-sale...");

  await build({
    root: resolve(ROOT, "client"),
    configFile: resolve(ROOT, "vite.config.ts"),
    build: {
      ssr: resolve(ROOT, "client/src/entry-server-centennial.tsx"),
      outDir: resolve(ROOT, "dist/server"),
      emptyOutDir: false,
      rollupOptions: {
        output: {
          format: "esm",
          entryFileNames: "entry-server-centennial.js",
        },
      },
    },
    css: {},
  });

  console.log("[prerender-centennial] SSR build complete. Rendering HTML...");

  const ssrModule = await import(
    resolve(ROOT, "dist/server/entry-server-centennial.js")
  );
  const html = ssrModule.renderCentennialCoHomesForSale();
  console.log(`[prerender-centennial] Rendered HTML length: ${html.length} chars`);

  const shellPath = resolve(ROOT, "dist/public/index.html");
  if (!existsSync(shellPath)) {
    throw new Error(
      `[prerender-centennial] dist/public/index.html not found. Run 'vite build' first.`
    );
  }
  const shell = readFileSync(shellPath, "utf-8");

  const PLACEHOLDER = '<div id="root"></div>';
  if (!shell.includes(PLACEHOLDER)) {
    throw new Error(
      `[prerender-centennial] Placeholder '${PLACEHOLDER}' not found in shell.`
    );
  }
  const finalHtml = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);

  const serverPrerenderedDir = resolve(ROOT, "server/prerendered");
  mkdirSync(serverPrerenderedDir, { recursive: true });
  const serverOutputPath = resolve(serverPrerenderedDir, "centennial-co-homes-for-sale.html");
  writeFileSync(serverOutputPath, finalHtml, "utf-8");
  console.log(`[prerender-centennial] Written to ${serverOutputPath} (${finalHtml.length} bytes)`);

  const distPrerenderedDir = resolve(ROOT, "dist/prerendered");
  mkdirSync(distPrerenderedDir, { recursive: true });
  const distOutputPath = resolve(distPrerenderedDir, "centennial-co-homes-for-sale.html");
  writeFileSync(distOutputPath, finalHtml, "utf-8");
  console.log(`[prerender-centennial] Written to ${distOutputPath} (fallback)`);

  console.log("[prerender-centennial] Done.");
}

prerenderCentennial().catch((err) => {
  console.error("[prerender-centennial] FAILED:", err);
  process.exit(1);
});
