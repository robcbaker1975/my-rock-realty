/**
 * IL-78 Selective Prerender Script — /best-communities-near-schriever-space-force-base/
 */
import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
async function prerender() {
  console.log("[prerender-best-communities-near-schriever-space-force-base] Starting SSR build...");
  await build({
    root: resolve(ROOT, "client"),
    configFile: resolve(ROOT, "vite.config.ts"),
    build: {
      ssr: resolve(ROOT, "client/src/entry-server-best-communities-near-schriever-space-force-base.tsx"),
      outDir: resolve(ROOT, "dist/server"),
      emptyOutDir: false,
      rollupOptions: {
        output: {
          format: "esm",
          entryFileNames: "entry-server-best-communities-near-schriever-space-force-base.js",
        },
      },
    },
    css: {},
  });
  console.log("[prerender-best-communities-near-schriever-space-force-base] SSR build complete. Rendering HTML...");
  const ssrModule = await import(resolve(ROOT, "dist/server/entry-server-best-communities-near-schriever-space-force-base.js"));
  const html = ssrModule.renderBestCommunitiesNearSchrieverSpaceForceBase();
  console.log(`[prerender-best-communities-near-schriever-space-force-base] Rendered ${html.length} chars`);
  const shellPath = resolve(ROOT, "dist/public/index.html");
  if (!existsSync(shellPath)) throw new Error("[prerender-best-communities-near-schriever-space-force-base] dist/public/index.html not found.");
  const shell = readFileSync(shellPath, "utf-8");
  const PLACEHOLDER = '<div id="root"></div>';
  if (!shell.includes(PLACEHOLDER)) throw new Error("[prerender-best-communities-near-schriever-space-force-base] Placeholder not found.");
  const finalHtml = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
  const serverDir = resolve(ROOT, "server/prerendered");
  mkdirSync(serverDir, { recursive: true });
  const serverOut = resolve(serverDir, "best-communities-near-schriever-space-force-base.html");
  writeFileSync(serverOut, finalHtml, "utf-8");
  console.log(`[prerender-best-communities-near-schriever-space-force-base] Written to ${serverOut} (${finalHtml.length} bytes)`);
  const distDir = resolve(ROOT, "dist/prerendered");
  mkdirSync(distDir, { recursive: true });
  const distOut = resolve(distDir, "best-communities-near-schriever-space-force-base.html");
  writeFileSync(distOut, finalHtml, "utf-8");
  console.log(`[prerender-best-communities-near-schriever-space-force-base] Written to ${distOut} (fallback)`);
  console.log("[prerender-best-communities-near-schriever-space-force-base] Done.");
}
prerender().catch((err) => { console.error("[prerender-best-communities-near-schriever-space-force-base] FAILED:", err); process.exit(1); });
