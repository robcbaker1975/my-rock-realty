/**
 * IL-72 Selective Prerender Script — /military-relocation/pcs-timeline-checklist/
 */
import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
async function prerender() {
  console.log("[prerender-pcs-timeline-checklist] Starting SSR build...");
  await build({
    root: resolve(ROOT, "client"),
    configFile: resolve(ROOT, "vite.config.ts"),
    build: {
      ssr: resolve(ROOT, "client/src/entry-server-pcs-timeline-checklist.tsx"),
      outDir: resolve(ROOT, "dist/server"),
      emptyOutDir: false,
      rollupOptions: {
        output: {
          format: "esm",
          entryFileNames: "entry-server-pcs-timeline-checklist.js",
        },
      },
    },
    css: {},
  });
  console.log("[prerender-pcs-timeline-checklist] SSR build complete. Rendering HTML...");
  const ssrModule = await import(resolve(ROOT, "dist/server/entry-server-pcs-timeline-checklist.js"));
  const html = ssrModule.renderPcsTimelineChecklist();
  console.log(`[prerender-pcs-timeline-checklist] Rendered ${html.length} chars`);
  const shellPath = resolve(ROOT, "dist/public/index.html");
  if (!existsSync(shellPath)) throw new Error("[prerender-pcs-timeline-checklist] dist/public/index.html not found.");
  const shell = readFileSync(shellPath, "utf-8");
  const PLACEHOLDER = '<div id="root"></div>';
  if (!shell.includes(PLACEHOLDER)) throw new Error("[prerender-pcs-timeline-checklist] Placeholder not found.");
  const finalHtml = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
  const serverDir = resolve(ROOT, "server/prerendered");
  mkdirSync(serverDir, { recursive: true });
  const serverOut = resolve(serverDir, "pcs-timeline-checklist.html");
  writeFileSync(serverOut, finalHtml, "utf-8");
  console.log(`[prerender-pcs-timeline-checklist] Written to ${serverOut} (${finalHtml.length} bytes)`);
  const distDir = resolve(ROOT, "dist/prerendered");
  mkdirSync(distDir, { recursive: true });
  const distOut = resolve(distDir, "pcs-timeline-checklist.html");
  writeFileSync(distOut, finalHtml, "utf-8");
  console.log(`[prerender-pcs-timeline-checklist] Written to ${distOut} (fallback)`);
  console.log("[prerender-pcs-timeline-checklist] Done.");
}
prerender().catch((err) => { console.error("[prerender-pcs-timeline-checklist] FAILED:", err); process.exit(1); });
