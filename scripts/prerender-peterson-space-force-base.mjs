/**
 * IL-65 Selective Prerender Script — /military-relocation/peterson-space-force-base/
 *
 * Scope: ONE route only (/military-relocation/peterson-space-force-base/). Do not add other routes.
 * Strategy: Vite SSR build → renderToString → inject into dist/public/index.html shell
 *           → write to server/prerendered/peterson-space-force-base.html (committed to git)
 *           → also write to dist/prerendered/peterson-space-force-base.html (build artifact)
 *
 * Rollback: Delete server/prerendered/peterson-space-force-base.html and remove the
 *           app.get handler in server/_core/vite.ts. Revert package.json build script. Redeploy.
 *
 * Usage: Called automatically as part of `pnpm build`.
 *        Can also be run manually: node scripts/prerender-peterson-space-force-base.mjs
 */
import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
async function prerenderPetersonSpaceForceBase() {
  console.log("[prerender-peterson-space-force-base] Starting SSR build for /military-relocation/peterson-space-force-base/...");
  await build({
    root: resolve(ROOT, "client"),
    configFile: resolve(ROOT, "vite.config.ts"),
    build: {
      ssr: resolve(ROOT, "client/src/entry-server-peterson-space-force-base.tsx"),
      outDir: resolve(ROOT, "dist/server"),
      emptyOutDir: false,
      rollupOptions: {
        output: {
          format: "esm",
          entryFileNames: "entry-server-peterson-space-force-base.js",
        },
      },
    },
    css: {},
  });
  console.log("[prerender-peterson-space-force-base] SSR build complete. Rendering HTML...");
  const ssrModule = await import(
    resolve(ROOT, "dist/server/entry-server-peterson-space-force-base.js")
  );
  const html = ssrModule.renderPetersonSpaceForceBase();
  console.log(`[prerender-peterson-space-force-base] Rendered HTML length: ${html.length} chars`);
  const shellPath = resolve(ROOT, "dist/public/index.html");
  if (!existsSync(shellPath)) {
    throw new Error(
      `[prerender-peterson-space-force-base] dist/public/index.html not found. Run 'vite build' first.`
    );
  }
  const shell = readFileSync(shellPath, "utf-8");
  const PLACEHOLDER = '<div id="root"></div>';
  if (!shell.includes(PLACEHOLDER)) {
    throw new Error(
      `[prerender-peterson-space-force-base] Placeholder '${PLACEHOLDER}' not found in shell.`
    );
  }
  const finalHtml = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
  const serverPrerenderedDir = resolve(ROOT, "server/prerendered");
  mkdirSync(serverPrerenderedDir, { recursive: true });
  const serverOutputPath = resolve(serverPrerenderedDir, "peterson-space-force-base.html");
  writeFileSync(serverOutputPath, finalHtml, "utf-8");
  console.log(`[prerender-peterson-space-force-base] Written to ${serverOutputPath} (${finalHtml.length} bytes)`);
  const distPrerenderedDir = resolve(ROOT, "dist/prerendered");
  mkdirSync(distPrerenderedDir, { recursive: true });
  const distOutputPath = resolve(distPrerenderedDir, "peterson-space-force-base.html");
  writeFileSync(distOutputPath, finalHtml, "utf-8");
  console.log(`[prerender-peterson-space-force-base] Written to ${distOutputPath} (fallback)`);
  console.log("[prerender-peterson-space-force-base] Done.");
}
prerenderPetersonSpaceForceBase().catch((err) => {
  console.error("[prerender-peterson-space-force-base] FAILED:", err);
  process.exit(1);
});
