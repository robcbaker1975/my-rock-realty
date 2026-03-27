/**
 * IL-73 Selective Prerender Script — /military-relocation/temporary-housing-colorado-springs/
 */
import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
async function prerender() {
  console.log("[prerender-temporary-housing-colorado-springs] Starting SSR build...");
  await build({
    root: resolve(ROOT, "client"),
    configFile: resolve(ROOT, "vite.config.ts"),
    build: {
      ssr: resolve(ROOT, "client/src/entry-server-temporary-housing-colorado-springs.tsx"),
      outDir: resolve(ROOT, "dist/server"),
      emptyOutDir: false,
      rollupOptions: {
        output: {
          format: "esm",
          entryFileNames: "entry-server-temporary-housing-colorado-springs.js",
        },
      },
    },
    css: {},
  });
  console.log("[prerender-temporary-housing-colorado-springs] SSR build complete. Rendering HTML...");
  const ssrModule = await import(resolve(ROOT, "dist/server/entry-server-temporary-housing-colorado-springs.js"));
  const html = ssrModule.renderTemporaryHousingColoradoSprings();
  console.log(`[prerender-temporary-housing-colorado-springs] Rendered ${html.length} chars`);
  const shellPath = resolve(ROOT, "dist/public/index.html");
  if (!existsSync(shellPath)) throw new Error("[prerender-temporary-housing-colorado-springs] dist/public/index.html not found.");
  const shell = readFileSync(shellPath, "utf-8");
  const PLACEHOLDER = '<div id="root"></div>';
  if (!shell.includes(PLACEHOLDER)) throw new Error("[prerender-temporary-housing-colorado-springs] Placeholder not found.");
  const finalHtml = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
  const serverDir = resolve(ROOT, "server/prerendered");
  mkdirSync(serverDir, { recursive: true });
  const serverOut = resolve(serverDir, "temporary-housing-colorado-springs.html");
  writeFileSync(serverOut, finalHtml, "utf-8");
  console.log(`[prerender-temporary-housing-colorado-springs] Written to ${serverOut} (${finalHtml.length} bytes)`);
  const distDir = resolve(ROOT, "dist/prerendered");
  mkdirSync(distDir, { recursive: true });
  const distOut = resolve(distDir, "temporary-housing-colorado-springs.html");
  writeFileSync(distOut, finalHtml, "utf-8");
  console.log(`[prerender-temporary-housing-colorado-springs] Written to ${distOut} (fallback)`);
  console.log("[prerender-temporary-housing-colorado-springs] Done.");
}
prerender().catch((err) => { console.error("[prerender-temporary-housing-colorado-springs] FAILED:", err); process.exit(1); });
