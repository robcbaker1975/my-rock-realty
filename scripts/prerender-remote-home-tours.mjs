/**
 * IL-74 Selective Prerender Script — /military-relocation/remote-home-tours/
 */
import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
async function prerender() {
  console.log("[prerender-remote-home-tours] Starting SSR build...");
  await build({
    root: resolve(ROOT, "client"),
    configFile: resolve(ROOT, "vite.config.ts"),
    build: {
      ssr: resolve(ROOT, "client/src/entry-server-remote-home-tours.tsx"),
      outDir: resolve(ROOT, "dist/server"),
      emptyOutDir: false,
      rollupOptions: {
        output: {
          format: "esm",
          entryFileNames: "entry-server-remote-home-tours.js",
        },
      },
    },
    css: {},
  });
  console.log("[prerender-remote-home-tours] SSR build complete. Rendering HTML...");
  const ssrModule = await import(resolve(ROOT, "dist/server/entry-server-remote-home-tours.js"));
  const html = ssrModule.renderRemoteHomeTours();
  console.log(`[prerender-remote-home-tours] Rendered ${html.length} chars`);
  const shellPath = resolve(ROOT, "dist/public/index.html");
  if (!existsSync(shellPath)) throw new Error("[prerender-remote-home-tours] dist/public/index.html not found.");
  const shell = readFileSync(shellPath, "utf-8");
  const PLACEHOLDER = '<div id="root"></div>';
  if (!shell.includes(PLACEHOLDER)) throw new Error("[prerender-remote-home-tours] Placeholder not found.");
  const finalHtml = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
  const serverDir = resolve(ROOT, "server/prerendered");
  mkdirSync(serverDir, { recursive: true });
  const serverOut = resolve(serverDir, "remote-home-tours.html");
  writeFileSync(serverOut, finalHtml, "utf-8");
  console.log(`[prerender-remote-home-tours] Written to ${serverOut} (${finalHtml.length} bytes)`);
  const distDir = resolve(ROOT, "dist/prerendered");
  mkdirSync(distDir, { recursive: true });
  const distOut = resolve(distDir, "remote-home-tours.html");
  writeFileSync(distOut, finalHtml, "utf-8");
  console.log(`[prerender-remote-home-tours] Written to ${distOut} (fallback)`);
  console.log("[prerender-remote-home-tours] Done.");
}
prerender().catch((err) => { console.error("[prerender-remote-home-tours] FAILED:", err); process.exit(1); });
