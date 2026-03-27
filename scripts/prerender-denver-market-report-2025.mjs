/**
 * IL-95 Selective Prerender Script — /blog/denver-real-estate-market-report-2025/
 * Scope: ONE route only. Do not add other routes.
 */
import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
async function prerenderDenverMarketReport2025() {
  console.log("[prerender-denver-market-report-2025] Starting SSR build for /blog/denver-real-estate-market-report-2025/...");
  await build({
    root: resolve(ROOT, "client"),
    configFile: resolve(ROOT, "vite.config.ts"),
    build: {
      ssr: resolve(ROOT, "client/src/entry-server-denver-market-report-2025.tsx"),
      outDir: resolve(ROOT, "dist/server"),
      emptyOutDir: false,
      rollupOptions: {
        output: { format: "esm", entryFileNames: "entry-server-denver-market-report-2025.js" },
      },
    },
    css: {},
  });
  console.log("[prerender-denver-market-report-2025] SSR build complete. Rendering HTML...");
  const ssrModule = await import(resolve(ROOT, "dist/server/entry-server-denver-market-report-2025.js"));
  const html = ssrModule.renderDenverMarketReport2025();
  console.log(`[prerender-denver-market-report-2025] Rendered HTML length: ${html.length} chars`);
  const shellPath = resolve(ROOT, "dist/public/index.html");
  if (!existsSync(shellPath)) throw new Error(`[prerender-denver-market-report-2025] dist/public/index.html not found.`);
  const shell = readFileSync(shellPath, "utf-8");
  const PLACEHOLDER = '<div id="root"></div>';
  if (!shell.includes(PLACEHOLDER)) throw new Error(`[prerender-denver-market-report-2025] Placeholder not found.`);
  const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
  const distOutputDir = resolve(ROOT, "dist/prerendered");
  mkdirSync(distOutputDir, { recursive: true });
  writeFileSync(resolve(distOutputDir, "denver-real-estate-market-report-2025.html"), prerenderedShell, "utf-8");
  const srcOutputDir = resolve(ROOT, "server/prerendered");
  mkdirSync(srcOutputDir, { recursive: true });
  const srcOutputPath = resolve(srcOutputDir, "denver-real-estate-market-report-2025.html");
  writeFileSync(srcOutputPath, prerenderedShell, "utf-8");
  console.log(`[prerender-denver-market-report-2025] Committed artifact: ${srcOutputPath}`);
  const written = readFileSync(srcOutputPath, "utf-8");
  const hasH1 = /<h1[\s>]/.test(written);
  const rootNotEmpty = !written.includes('<div id="root"></div>');
  const anchors = (written.match(/<a\s/g) || []).length;
  console.log(`[prerender-denver-market-report-2025] Sanity: rootNotEmpty=${rootNotEmpty}, hasH1=${hasH1}, anchors=${anchors}`);
  if (!rootNotEmpty) throw new Error("[prerender-denver-market-report-2025] FAIL: Root div still empty.");
  console.log("[prerender-denver-market-report-2025] Done.");
}
prerenderDenverMarketReport2025().catch((err) => { console.error("[prerender-denver-market-report-2025] FAILED:", err.message); process.exit(1); });
