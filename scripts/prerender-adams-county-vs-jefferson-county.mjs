/**
 * IL-92 Selective Prerender Script — /adams-county-vs-jefferson-county
 * Scope: ONE route only. Do not add other routes.
 */
import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
async function prerenderAdamsCountyVsJeffersonCounty() {
  console.log("[prerender-adams-county-vs-jefferson-county] Starting SSR build for /adams-county-vs-jefferson-county...");
  await build({
    root: resolve(ROOT, "client"),
    configFile: resolve(ROOT, "vite.config.ts"),
    build: {
      ssr: resolve(ROOT, "client/src/entry-server-adams-county-vs-jefferson-county.tsx"),
      outDir: resolve(ROOT, "dist/server"),
      emptyOutDir: false,
      rollupOptions: {
        output: { format: "esm", entryFileNames: "entry-server-adams-county-vs-jefferson-county.js" },
      },
    },
    css: {},
  });
  console.log("[prerender-adams-county-vs-jefferson-county] SSR build complete. Rendering HTML...");
  const ssrModule = await import(resolve(ROOT, "dist/server/entry-server-adams-county-vs-jefferson-county.js"));
  const html = ssrModule.renderAdamsCountyVsJeffersonCounty();
  console.log(`[prerender-adams-county-vs-jefferson-county] Rendered HTML length: ${html.length} chars`);
  const shellPath = resolve(ROOT, "dist/public/index.html");
  if (!existsSync(shellPath)) throw new Error(`[prerender-adams-county-vs-jefferson-county] dist/public/index.html not found.`);
  const shell = readFileSync(shellPath, "utf-8");
  const PLACEHOLDER = '<div id="root"></div>';
  if (!shell.includes(PLACEHOLDER)) throw new Error(`[prerender-adams-county-vs-jefferson-county] Placeholder not found.`);
  const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
  const distOutputDir = resolve(ROOT, "dist/prerendered");
  mkdirSync(distOutputDir, { recursive: true });
  writeFileSync(resolve(distOutputDir, "adams-county-vs-jefferson-county.html"), prerenderedShell, "utf-8");
  const srcOutputDir = resolve(ROOT, "server/prerendered");
  mkdirSync(srcOutputDir, { recursive: true });
  const srcOutputPath = resolve(srcOutputDir, "adams-county-vs-jefferson-county.html");
  writeFileSync(srcOutputPath, prerenderedShell, "utf-8");
  console.log(`[prerender-adams-county-vs-jefferson-county] Committed artifact: ${srcOutputPath}`);
  const written = readFileSync(srcOutputPath, "utf-8");
  const hasH1 = /<h1[\s>]/.test(written);
  const rootNotEmpty = !written.includes('<div id="root"></div>');
  const anchors = (written.match(/<a\s/g) || []).length;
  console.log(`[prerender-adams-county-vs-jefferson-county] Sanity: rootNotEmpty=${rootNotEmpty}, hasH1=${hasH1}, anchors=${anchors}`);
  if (!rootNotEmpty) throw new Error("[prerender-adams-county-vs-jefferson-county] FAIL: Root div still empty.");
  console.log("[prerender-adams-county-vs-jefferson-county] Done.");
}
prerenderAdamsCountyVsJeffersonCounty().catch((err) => { console.error("[prerender-adams-county-vs-jefferson-county] FAILED:", err.message); process.exit(1); });
