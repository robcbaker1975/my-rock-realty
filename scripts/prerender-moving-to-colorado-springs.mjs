/**
 * IL-80 Selective Prerender Script — /moving-to-colorado-springs/
 */
import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
async function prerender() {
  console.log("[prerender-moving-to-colorado-springs] Starting SSR build...");
  await build({
    root: resolve(ROOT, "client"),
    configFile: resolve(ROOT, "vite.config.ts"),
    build: {
      ssr: resolve(ROOT, "client/src/entry-server-moving-to-colorado-springs.tsx"),
      outDir: resolve(ROOT, "dist/server"),
      emptyOutDir: false,
      rollupOptions: {
        output: {
          format: "esm",
          entryFileNames: "entry-server-moving-to-colorado-springs.js",
        },
      },
    },
    css: {},
  });
  console.log("[prerender-moving-to-colorado-springs] SSR build complete. Rendering HTML...");
  const ssrModule = await import(resolve(ROOT, "dist/server/entry-server-moving-to-colorado-springs.js"));
  const html = ssrModule.renderMovingToColoradoSprings();
  console.log(`[prerender-moving-to-colorado-springs] Rendered ${html.length} chars`);
  const shellPath = resolve(ROOT, "dist/public/index.html");
  if (!existsSync(shellPath)) throw new Error("[prerender-moving-to-colorado-springs] dist/public/index.html not found.");
  const shell = readFileSync(shellPath, "utf-8");
  const PLACEHOLDER = '<div id="root"></div>';
  if (!shell.includes(PLACEHOLDER)) throw new Error("[prerender-moving-to-colorado-springs] Placeholder not found.");
  const finalHtml = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
  const serverDir = resolve(ROOT, "server/prerendered");
  mkdirSync(serverDir, { recursive: true });
  const serverOut = resolve(serverDir, "moving-to-colorado-springs.html");
  writeFileSync(serverOut, finalHtml, "utf-8");
  console.log(`[prerender-moving-to-colorado-springs] Written to ${serverOut} (${finalHtml.length} bytes)`);
  const distDir = resolve(ROOT, "dist/prerendered");
  mkdirSync(distDir, { recursive: true });
  const distOut = resolve(distDir, "moving-to-colorado-springs.html");
  writeFileSync(distOut, finalHtml, "utf-8");
  console.log(`[prerender-moving-to-colorado-springs] Written to ${distOut} (fallback)`);
  console.log("[prerender-moving-to-colorado-springs] Done.");
}
prerender().catch((err) => { console.error("[prerender-moving-to-colorado-springs] FAILED:", err); process.exit(1); });
