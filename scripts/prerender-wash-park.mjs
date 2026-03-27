/**
 * IL-37 Selective Prerender Script — /wash-park-denver-homes-for-sale
 * Scope: ONE route only. Do not add other routes.
 */
import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
async function prerenderWashPark() {
  console.log("[prerender-wash-park] Starting SSR build for /wash-park-denver-homes-for-sale...");
  await build({
    root: resolve(ROOT, "client"),
    configFile: resolve(ROOT, "vite.config.ts"),
    build: {
      ssr: resolve(ROOT, "client/src/entry-server-wash-park.tsx"),
      outDir: resolve(ROOT, "dist/server"),
      emptyOutDir: false,
      rollupOptions: {
        output: {
          format: "esm",
          entryFileNames: "entry-server-wash-park.js",
        },
      },
    },
    css: {},
  });
  console.log("[prerender-wash-park] SSR build complete. Rendering HTML...");
  const ssrModule = await import(resolve(ROOT, "dist/server/entry-server-wash-park.js"));
  const html = ssrModule.renderWashParkDenverHomesForSale();
  console.log(`[prerender-wash-park] Rendered HTML length: ${html.length} chars`);
  const shellPath = resolve(ROOT, "dist/public/index.html");
  if (!existsSync(shellPath)) {
    throw new Error(`[prerender-wash-park] dist/public/index.html not found. Run 'vite build' first.`);
  }
  const shell = readFileSync(shellPath, "utf-8");
  const PLACEHOLDER = '<div id="root"></div>';
  if (!shell.includes(PLACEHOLDER)) {
    throw new Error(`[prerender-wash-park] Could not find '${PLACEHOLDER}' in dist/public/index.html.`);
  }
  const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
  const distOutputDir = resolve(ROOT, "dist/prerendered");
  mkdirSync(distOutputDir, { recursive: true });
  writeFileSync(resolve(distOutputDir, "wash-park-denver-homes-for-sale.html"), prerenderedShell, "utf-8");
  const srcOutputDir = resolve(ROOT, "server/prerendered");
  mkdirSync(srcOutputDir, { recursive: true });
  const srcOutputPath = resolve(srcOutputDir, "wash-park-denver-homes-for-sale.html");
  writeFileSync(srcOutputPath, prerenderedShell, "utf-8");
  console.log(`[prerender-wash-park] Committed artifact written to: ${srcOutputPath}`);
  const written = readFileSync(srcOutputPath, "utf-8");
  const anchorCount = (written.match(/<a\s/g) || []).length;
  const hasH1 = /<h1[\s>]/.test(written);
  const rootNotEmpty = !written.includes('<div id="root"></div>');
  console.log(`[prerender-wash-park] Sanity: rootNotEmpty=${rootNotEmpty}, hasH1=${hasH1}, anchors=${anchorCount}`);
  if (!rootNotEmpty) throw new Error("[prerender-wash-park] FAIL: Root div still empty.");
  console.log("[prerender-wash-park] Done.");
}
prerenderWashPark().catch((err) => {
  console.error("[prerender-wash-park] FAILED:", err.message);
  process.exit(1);
});
