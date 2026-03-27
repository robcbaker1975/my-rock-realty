/**
 * IL-96 Selective Prerender Script — /denver-vs-colorado-springs
 * Scope: ONE route only. Do not add other routes.
 */
import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
async function prerenderDenverVsColoradoSprings() {
  console.log("[prerender-denver-vs-colorado-springs] Starting SSR build for /denver-vs-colorado-springs...");
  await build({
    root: resolve(ROOT, "client"),
    configFile: resolve(ROOT, "vite.config.ts"),
    build: {
      ssr: resolve(ROOT, "client/src/entry-server-denver-vs-colorado-springs.tsx"),
      outDir: resolve(ROOT, "dist/server"),
      emptyOutDir: false,
      rollupOptions: {
        output: { format: "esm", entryFileNames: "entry-server-denver-vs-colorado-springs.js" },
      },
    },
    css: {},
  });
  console.log("[prerender-denver-vs-colorado-springs] SSR build complete. Rendering HTML...");
  const ssrModule = await import(resolve(ROOT, "dist/server/entry-server-denver-vs-colorado-springs.js"));
  const html = ssrModule.renderDenverVsColoradoSprings();
  console.log(`[prerender-denver-vs-colorado-springs] Rendered HTML length: ${html.length} chars`);
  const shellPath = resolve(ROOT, "dist/public/index.html");
  if (!existsSync(shellPath)) throw new Error(`[prerender-denver-vs-colorado-springs] dist/public/index.html not found.`);
  const shell = readFileSync(shellPath, "utf-8");
  const PLACEHOLDER = '<div id="root"></div>';
  if (!shell.includes(PLACEHOLDER)) throw new Error(`[prerender-denver-vs-colorado-springs] Placeholder not found.`);
  const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
  const distOutputDir = resolve(ROOT, "dist/prerendered");
  mkdirSync(distOutputDir, { recursive: true });
  writeFileSync(resolve(distOutputDir, "denver-vs-colorado-springs.html"), prerenderedShell, "utf-8");
  const srcOutputDir = resolve(ROOT, "server/prerendered");
  mkdirSync(srcOutputDir, { recursive: true });
  const srcOutputPath = resolve(srcOutputDir, "denver-vs-colorado-springs.html");
  writeFileSync(srcOutputPath, prerenderedShell, "utf-8");
  console.log(`[prerender-denver-vs-colorado-springs] Committed artifact: ${srcOutputPath}`);
  const written = readFileSync(srcOutputPath, "utf-8");
  const hasH1 = /<h1[\s>]/.test(written);
  const rootNotEmpty = !written.includes('<div id="root"></div>');
  const anchors = (written.match(/<a\s/g) || []).length;
  console.log(`[prerender-denver-vs-colorado-springs] Sanity: rootNotEmpty=${rootNotEmpty}, hasH1=${hasH1}, anchors=${anchors}`);
  if (!rootNotEmpty) throw new Error("[prerender-denver-vs-colorado-springs] FAIL: Root div still empty.");
  console.log("[prerender-denver-vs-colorado-springs] Done.");
}
prerenderDenverVsColoradoSprings().catch((err) => { console.error("[prerender-denver-vs-colorado-springs] FAILED:", err.message); process.exit(1); });
