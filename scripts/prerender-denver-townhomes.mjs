/**
 * IL-89 Selective Prerender Script — /denver-townhomes-for-sale
 * Scope: ONE route only. Do not add other routes.
 */
import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
async function prerenderDenverTownhomes() {
  console.log("[prerender-denver-townhomes] Starting SSR build for /denver-townhomes-for-sale...");
  await build({
    root: resolve(ROOT, "client"),
    configFile: resolve(ROOT, "vite.config.ts"),
    build: {
      ssr: resolve(ROOT, "client/src/entry-server-denver-townhomes.tsx"),
      outDir: resolve(ROOT, "dist/server"),
      emptyOutDir: false,
      rollupOptions: {
        output: { format: "esm", entryFileNames: "entry-server-denver-townhomes.js" },
      },
    },
    css: {},
  });
  console.log("[prerender-denver-townhomes] SSR build complete. Rendering HTML...");
  const ssrModule = await import(resolve(ROOT, "dist/server/entry-server-denver-townhomes.js"));
  const html = ssrModule.renderDenverTownhomesForSale();
  console.log(`[prerender-denver-townhomes] Rendered HTML length: ${html.length} chars`);
  const shellPath = resolve(ROOT, "dist/public/index.html");
  if (!existsSync(shellPath)) throw new Error(`[prerender-denver-townhomes] dist/public/index.html not found.`);
  const shell = readFileSync(shellPath, "utf-8");
  const PLACEHOLDER = '<div id="root"></div>';
  if (!shell.includes(PLACEHOLDER)) throw new Error(`[prerender-denver-townhomes] Placeholder not found.`);
  const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
  const distOutputDir = resolve(ROOT, "dist/prerendered");
  mkdirSync(distOutputDir, { recursive: true });
  writeFileSync(resolve(distOutputDir, "denver-townhomes-for-sale.html"), prerenderedShell, "utf-8");
  const srcOutputDir = resolve(ROOT, "server/prerendered");
  mkdirSync(srcOutputDir, { recursive: true });
  const srcOutputPath = resolve(srcOutputDir, "denver-townhomes-for-sale.html");
  writeFileSync(srcOutputPath, prerenderedShell, "utf-8");
  console.log(`[prerender-denver-townhomes] Committed artifact: ${srcOutputPath}`);
  const written = readFileSync(srcOutputPath, "utf-8");
  const hasH1 = /<h1[\s>]/.test(written);
  const rootNotEmpty = !written.includes('<div id="root"></div>');
  const anchors = (written.match(/<a\s/g) || []).length;
  console.log(`[prerender-denver-townhomes] Sanity: rootNotEmpty=${rootNotEmpty}, hasH1=${hasH1}, anchors=${anchors}`);
  if (!rootNotEmpty) throw new Error("[prerender-denver-townhomes] FAIL: Root div still empty.");
  console.log("[prerender-denver-townhomes] Done.");
}
prerenderDenverTownhomes().catch((err) => { console.error("[prerender-denver-townhomes] FAILED:", err.message); process.exit(1); });
