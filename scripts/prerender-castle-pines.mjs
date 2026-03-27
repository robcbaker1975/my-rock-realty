/**
 * IL-18 Selective Prerender Script — /castle-pines-co-homes-for-sale
 *
 * Scope: ONE route only (/castle-pines-co-homes-for-sale). Do not add other routes.
 * Strategy: Vite SSR build → renderToString → inject into dist/public/index.html shell
 *           → write to server/prerendered/castle-pines-co-homes-for-sale.html (committed to git)
 *           → also write to dist/prerendered/castle-pines-co-homes-for-sale.html (build artifact)
 *
 * Rollback: Delete server/prerendered/castle-pines-co-homes-for-sale.html and remove the
 *           app.get handler in server/_core/vite.ts. Revert package.json build script. Redeploy.
 *
 * Usage: Called automatically as the final step of `pnpm build`.
 *        Can also be run manually: node scripts/prerender-castle-pines.mjs
 */
import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

async function prerenderCastlePines() {
  console.log("[prerender-castle-pines] Starting SSR build for /castle-pines-co-homes-for-sale...");

  await build({
    root: resolve(ROOT, "client"),
    configFile: resolve(ROOT, "vite.config.ts"),
    build: {
      ssr: resolve(ROOT, "client/src/entry-server-castle-pines.tsx"),
      outDir: resolve(ROOT, "dist/server"),
      emptyOutDir: false,
      rollupOptions: {
        output: {
          format: "esm",
          entryFileNames: "entry-server-castle-pines.js",
        },
      },
    },
    css: {},
  });

  console.log("[prerender-castle-pines] SSR build complete. Rendering HTML...");

  const ssrModule = await import(
    resolve(ROOT, "dist/server/entry-server-castle-pines.js")
  );
  const html = ssrModule.renderCastlePinesCoHomesForSale();
  console.log(`[prerender-castle-pines] Rendered HTML length: ${html.length} chars`);

  const shellPath = resolve(ROOT, "dist/public/index.html");
  if (!existsSync(shellPath)) {
    throw new Error(
      `[prerender-castle-pines] dist/public/index.html not found. Run 'vite build' first.`
    );
  }
  const shell = readFileSync(shellPath, "utf-8");

  const PLACEHOLDER = '<div id="root"></div>';
  if (!shell.includes(PLACEHOLDER)) {
    throw new Error(
      `[prerender-castle-pines] Placeholder '${PLACEHOLDER}' not found in shell.`
    );
  }
  const finalHtml = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);

  const serverPrerenderedDir = resolve(ROOT, "server/prerendered");
  mkdirSync(serverPrerenderedDir, { recursive: true });
  const serverOutputPath = resolve(serverPrerenderedDir, "castle-pines-co-homes-for-sale.html");
  writeFileSync(serverOutputPath, finalHtml, "utf-8");
  console.log(`[prerender-castle-pines] Written to ${serverOutputPath} (${finalHtml.length} bytes)`);

  const distPrerenderedDir = resolve(ROOT, "dist/prerendered");
  mkdirSync(distPrerenderedDir, { recursive: true });
  const distOutputPath = resolve(distPrerenderedDir, "castle-pines-co-homes-for-sale.html");
  writeFileSync(distOutputPath, finalHtml, "utf-8");
  console.log(`[prerender-castle-pines] Written to ${distOutputPath} (fallback)`);

  console.log("[prerender-castle-pines] Done.");
}

prerenderCastlePines().catch((err) => {
  console.error("[prerender-castle-pines] FAILED:", err);
  process.exit(1);
});
