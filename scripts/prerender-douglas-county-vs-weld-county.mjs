/**
 * IL-93 Selective Prerender Script — /douglas-county-vs-weld-county
 * Scope: ONE route only. Do not add other routes.
 */
import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
async function prerenderDouglasCountyVsWeldCounty() {
  console.log("[prerender-douglas-county-vs-weld-county] Starting SSR build for /douglas-county-vs-weld-county...");
  await build({
    root: resolve(ROOT, "client"),
    configFile: resolve(ROOT, "vite.config.ts"),
    build: {
      ssr: resolve(ROOT, "client/src/entry-server-douglas-county-vs-weld-county.tsx"),
      outDir: resolve(ROOT, "dist/server"),
      emptyOutDir: false,
      rollupOptions: {
        output: { format: "esm", entryFileNames: "entry-server-douglas-county-vs-weld-county.js" },
      },
    },
    css: {},
  });
  console.log("[prerender-douglas-county-vs-weld-county] SSR build complete. Rendering HTML...");
  const ssrModule = await import(resolve(ROOT, "dist/server/entry-server-douglas-county-vs-weld-county.js"));
  const html = ssrModule.renderDouglasCountyVsWeldCounty();
  console.log(`[prerender-douglas-county-vs-weld-county] Rendered HTML length: ${html.length} chars`);
  const shellPath = resolve(ROOT, "dist/public/index.html");
  if (!existsSync(shellPath)) throw new Error(`[prerender-douglas-county-vs-weld-county] dist/public/index.html not found.`);
  const shell = readFileSync(shellPath, "utf-8");
  const PLACEHOLDER = '<div id="root"></div>';
  if (!shell.includes(PLACEHOLDER)) throw new Error(`[prerender-douglas-county-vs-weld-county] Placeholder not found.`);
  const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
  const distOutputDir = resolve(ROOT, "dist/prerendered");
  mkdirSync(distOutputDir, { recursive: true });
  writeFileSync(resolve(distOutputDir, "douglas-county-vs-weld-county.html"), prerenderedShell, "utf-8");
  const srcOutputDir = resolve(ROOT, "server/prerendered");
  mkdirSync(srcOutputDir, { recursive: true });
  const srcOutputPath = resolve(srcOutputDir, "douglas-county-vs-weld-county.html");
  writeFileSync(srcOutputPath, prerenderedShell, "utf-8");
  console.log(`[prerender-douglas-county-vs-weld-county] Committed artifact: ${srcOutputPath}`);
  const written = readFileSync(srcOutputPath, "utf-8");
  const hasH1 = /<h1[\s>]/.test(written);
  const rootNotEmpty = !written.includes('<div id="root"></div>');
  const anchors = (written.match(/<a\s/g) || []).length;
  console.log(`[prerender-douglas-county-vs-weld-county] Sanity: rootNotEmpty=${rootNotEmpty}, hasH1=${hasH1}, anchors=${anchors}`);
  if (!rootNotEmpty) throw new Error("[prerender-douglas-county-vs-weld-county] FAIL: Root div still empty.");
  console.log("[prerender-douglas-county-vs-weld-county] Done.");
}
prerenderDouglasCountyVsWeldCounty().catch((err) => { console.error("[prerender-douglas-county-vs-weld-county] FAILED:", err.message); process.exit(1); });
