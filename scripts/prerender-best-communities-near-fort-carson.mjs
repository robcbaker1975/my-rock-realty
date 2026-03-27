/**
 * IL-76 Selective Prerender Script — /military-relocation/best-communities-near-fort-carson/
 */
import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
async function prerender() {
  console.log("[prerender-best-communities-near-fort-carson] Starting SSR build...");
  await build({
    root: resolve(ROOT, "client"),
    configFile: resolve(ROOT, "vite.config.ts"),
    build: {
      ssr: resolve(ROOT, "client/src/entry-server-best-communities-near-fort-carson.tsx"),
      outDir: resolve(ROOT, "dist/server"),
      emptyOutDir: false,
      rollupOptions: {
        output: {
          format: "esm",
          entryFileNames: "entry-server-best-communities-near-fort-carson.js",
        },
      },
    },
    css: {},
  });
  console.log("[prerender-best-communities-near-fort-carson] SSR build complete. Rendering HTML...");
  const ssrModule = await import(resolve(ROOT, "dist/server/entry-server-best-communities-near-fort-carson.js"));
  const html = ssrModule.renderBestCommunitiesNearFortCarson();
  console.log(`[prerender-best-communities-near-fort-carson] Rendered ${html.length} chars`);
  const shellPath = resolve(ROOT, "dist/public/index.html");
  if (!existsSync(shellPath)) throw new Error("[prerender-best-communities-near-fort-carson] dist/public/index.html not found.");
  const shell = readFileSync(shellPath, "utf-8");
  const PLACEHOLDER = '<div id="root"></div>';
  if (!shell.includes(PLACEHOLDER)) throw new Error("[prerender-best-communities-near-fort-carson] Placeholder not found.");
  const finalHtml = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
  const serverDir = resolve(ROOT, "server/prerendered");
  mkdirSync(serverDir, { recursive: true });
  const serverOut = resolve(serverDir, "best-communities-near-fort-carson.html");
  writeFileSync(serverOut, finalHtml, "utf-8");
  console.log(`[prerender-best-communities-near-fort-carson] Written to ${serverOut} (${finalHtml.length} bytes)`);
  const distDir = resolve(ROOT, "dist/prerendered");
  mkdirSync(distDir, { recursive: true });
  const distOut = resolve(distDir, "best-communities-near-fort-carson.html");
  writeFileSync(distOut, finalHtml, "utf-8");
  console.log(`[prerender-best-communities-near-fort-carson] Written to ${distOut} (fallback)`);
  console.log("[prerender-best-communities-near-fort-carson] Done.");
}
prerender().catch((err) => { console.error("[prerender-best-communities-near-fort-carson] FAILED:", err); process.exit(1); });
