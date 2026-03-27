/**
 * IL-39 Selective Prerender Script — /lohi-denver-homes-for-sale
 * Scope: ONE route only. Do not add other routes.
 */
import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
async function prerenderLohi() {
  console.log("[prerender-lohi] Starting SSR build for /lohi-denver-homes-for-sale...");
  await build({
    root: resolve(ROOT, "client"),
    configFile: resolve(ROOT, "vite.config.ts"),
    build: {
      ssr: resolve(ROOT, "client/src/entry-server-lohi.tsx"),
      outDir: resolve(ROOT, "dist/server"),
      emptyOutDir: false,
      rollupOptions: {
        output: {
          format: "esm",
          entryFileNames: "entry-server-lohi.js",
        },
      },
    },
    css: {},
  });
  console.log("[prerender-lohi] SSR build complete. Rendering HTML...");
  const ssrModule = await import(resolve(ROOT, "dist/server/entry-server-lohi.js"));
  const html = ssrModule.renderLohiDenverHomesForSale();
  console.log(`[prerender-lohi] Rendered HTML length: ${html.length} chars`);
  const shellPath = resolve(ROOT, "dist/public/index.html");
  if (!existsSync(shellPath)) {
    throw new Error(`[prerender-lohi] dist/public/index.html not found. Run 'vite build' first.`);
  }
  const shell = readFileSync(shellPath, "utf-8");
  const PLACEHOLDER = '<div id="root"></div>';
  if (!shell.includes(PLACEHOLDER)) {
    throw new Error(`[prerender-lohi] Could not find '${PLACEHOLDER}' in dist/public/index.html.`);
  }
  const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
  const distOutputDir = resolve(ROOT, "dist/prerendered");
  mkdirSync(distOutputDir, { recursive: true });
  writeFileSync(resolve(distOutputDir, "lohi-denver-homes-for-sale.html"), prerenderedShell, "utf-8");
  const srcOutputDir = resolve(ROOT, "server/prerendered");
  mkdirSync(srcOutputDir, { recursive: true });
  const srcOutputPath = resolve(srcOutputDir, "lohi-denver-homes-for-sale.html");
  writeFileSync(srcOutputPath, prerenderedShell, "utf-8");
  console.log(`[prerender-lohi] Committed artifact written to: ${srcOutputPath}`);
  const written = readFileSync(srcOutputPath, "utf-8");
  const anchorCount = (written.match(/<a\s/g) || []).length;
  const hasH1 = /<h1[\s>]/.test(written);
  const rootNotEmpty = !written.includes('<div id="root"></div>');
  console.log(`[prerender-lohi] Sanity: rootNotEmpty=${rootNotEmpty}, hasH1=${hasH1}, anchors=${anchorCount}`);
  if (!rootNotEmpty) throw new Error("[prerender-lohi] FAIL: Root div still empty.");
  console.log("[prerender-lohi] Done.");
}
prerenderLohi().catch((err) => {
  console.error("[prerender-lohi] FAILED:", err.message);
  process.exit(1);
});
