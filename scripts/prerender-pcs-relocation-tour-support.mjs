/**
 * IL-75 Selective Prerender Script — /military-relocation/pcs-relocation-tour-support/
 */
import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
async function prerender() {
  console.log("[prerender-pcs-relocation-tour-support] Starting SSR build...");
  await build({
    root: resolve(ROOT, "client"),
    configFile: resolve(ROOT, "vite.config.ts"),
    build: {
      ssr: resolve(ROOT, "client/src/entry-server-pcs-relocation-tour-support.tsx"),
      outDir: resolve(ROOT, "dist/server"),
      emptyOutDir: false,
      rollupOptions: {
        output: {
          format: "esm",
          entryFileNames: "entry-server-pcs-relocation-tour-support.js",
        },
      },
    },
    css: {},
  });
  console.log("[prerender-pcs-relocation-tour-support] SSR build complete. Rendering HTML...");
  const ssrModule = await import(resolve(ROOT, "dist/server/entry-server-pcs-relocation-tour-support.js"));
  const html = ssrModule.renderPcsRelocationTourSupport();
  console.log(`[prerender-pcs-relocation-tour-support] Rendered ${html.length} chars`);
  const shellPath = resolve(ROOT, "dist/public/index.html");
  if (!existsSync(shellPath)) throw new Error("[prerender-pcs-relocation-tour-support] dist/public/index.html not found.");
  const shell = readFileSync(shellPath, "utf-8");
  const PLACEHOLDER = '<div id="root"></div>';
  if (!shell.includes(PLACEHOLDER)) throw new Error("[prerender-pcs-relocation-tour-support] Placeholder not found.");
  const finalHtml = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
  const serverDir = resolve(ROOT, "server/prerendered");
  mkdirSync(serverDir, { recursive: true });
  const serverOut = resolve(serverDir, "pcs-relocation-tour-support.html");
  writeFileSync(serverOut, finalHtml, "utf-8");
  console.log(`[prerender-pcs-relocation-tour-support] Written to ${serverOut} (${finalHtml.length} bytes)`);
  const distDir = resolve(ROOT, "dist/prerendered");
  mkdirSync(distDir, { recursive: true });
  const distOut = resolve(distDir, "pcs-relocation-tour-support.html");
  writeFileSync(distOut, finalHtml, "utf-8");
  console.log(`[prerender-pcs-relocation-tour-support] Written to ${distOut} (fallback)`);
  console.log("[prerender-pcs-relocation-tour-support] Done.");
}
prerender().catch((err) => { console.error("[prerender-pcs-relocation-tour-support] FAILED:", err); process.exit(1); });
