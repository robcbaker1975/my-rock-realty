/**
 * IL-43 Selective Prerender Script — /first-time-home-buyer-denver
 * Scope: ONE route only. Do not add other routes.
 */
import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
async function prerenderFirstTimeHomeBuyerDenver() {
  console.log("[prerender-first-time-home-buyer-denver] Starting SSR build for /first-time-home-buyer-denver...");
  await build({
    root: resolve(ROOT, "client"),
    configFile: resolve(ROOT, "vite.config.ts"),
    build: {
      ssr: resolve(ROOT, "client/src/entry-server-first-time-home-buyer-denver.tsx"),
      outDir: resolve(ROOT, "dist/server"),
      emptyOutDir: false,
      rollupOptions: {
        output: {
          format: "esm",
          entryFileNames: "entry-server-first-time-home-buyer-denver.js",
        },
      },
    },
    css: {},
  });
  console.log("[prerender-first-time-home-buyer-denver] SSR build complete. Rendering HTML...");
  const ssrModule = await import(resolve(ROOT, "dist/server/entry-server-first-time-home-buyer-denver.js"));
  const html = ssrModule.renderFirstTimeHomeBuyerDenver();
  console.log(`[prerender-first-time-home-buyer-denver] Rendered HTML length: ${html.length} chars`);
  const shellPath = resolve(ROOT, "dist/public/index.html");
  if (!existsSync(shellPath)) {
    throw new Error(`[prerender-first-time-home-buyer-denver] dist/public/index.html not found. Run 'vite build' first.`);
  }
  const shell = readFileSync(shellPath, "utf-8");
  const PLACEHOLDER = '<div id="root"></div>';
  if (!shell.includes(PLACEHOLDER)) {
    throw new Error(`[prerender-first-time-home-buyer-denver] Could not find '${PLACEHOLDER}' in dist/public/index.html.`);
  }
  const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
  const distOutputDir = resolve(ROOT, "dist/prerendered");
  mkdirSync(distOutputDir, { recursive: true });
  writeFileSync(resolve(distOutputDir, "first-time-home-buyer-denver.html"), prerenderedShell, "utf-8");
  const srcOutputDir = resolve(ROOT, "server/prerendered");
  mkdirSync(srcOutputDir, { recursive: true });
  const srcOutputPath = resolve(srcOutputDir, "first-time-home-buyer-denver.html");
  writeFileSync(srcOutputPath, prerenderedShell, "utf-8");
  console.log(`[prerender-first-time-home-buyer-denver] Committed artifact written to: ${srcOutputPath}`);
  const written = readFileSync(srcOutputPath, "utf-8");
  const anchorCount = (written.match(/<a\s/g) || []).length;
  const hasH1 = /<h1[\s>]/.test(written);
  const rootNotEmpty = !written.includes('<div id="root"></div>');
  console.log(`[prerender-first-time-home-buyer-denver] Sanity: rootNotEmpty=${rootNotEmpty}, hasH1=${hasH1}, anchors=${anchorCount}`);
  if (!rootNotEmpty) throw new Error("[prerender-first-time-home-buyer-denver] FAIL: Root div still empty.");
  console.log("[prerender-first-time-home-buyer-denver] Done.");
}
prerenderFirstTimeHomeBuyerDenver().catch((err) => {
  console.error("[prerender-first-time-home-buyer-denver] FAILED:", err.message);
  process.exit(1);
});
