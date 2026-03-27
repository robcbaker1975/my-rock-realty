/**
 * IL-36 Selective Prerender Script — /broadmoor-cheyenne-mountain-colorado-springs-real-estate
 * Scope: ONE route only. Do not add other routes.
 */
import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
async function prerenderBroadmoorCheyenneMountain() {
  console.log("[prerender-broadmoor-cheyenne-mountain] Starting SSR build for /broadmoor-cheyenne-mountain-colorado-springs-real-estate...");
  await build({
    root: resolve(ROOT, "client"),
    configFile: resolve(ROOT, "vite.config.ts"),
    build: {
      ssr: resolve(ROOT, "client/src/entry-server-broadmoor-cheyenne-mountain.tsx"),
      outDir: resolve(ROOT, "dist/server"),
      emptyOutDir: false,
      rollupOptions: {
        output: {
          format: "esm",
          entryFileNames: "entry-server-broadmoor-cheyenne-mountain.js",
        },
      },
    },
    css: {},
  });
  console.log("[prerender-broadmoor-cheyenne-mountain] SSR build complete. Rendering HTML...");
  const ssrModule = await import(resolve(ROOT, "dist/server/entry-server-broadmoor-cheyenne-mountain.js"));
  const html = ssrModule.renderBroadmoorCheyenneMountainColoradoSpringsRealEstate();
  console.log(`[prerender-broadmoor-cheyenne-mountain] Rendered HTML length: ${html.length} chars`);
  const shellPath = resolve(ROOT, "dist/public/index.html");
  if (!existsSync(shellPath)) {
    throw new Error(`[prerender-broadmoor-cheyenne-mountain] dist/public/index.html not found. Run 'vite build' first.`);
  }
  const shell = readFileSync(shellPath, "utf-8");
  const PLACEHOLDER = '<div id="root"></div>';
  if (!shell.includes(PLACEHOLDER)) {
    throw new Error(`[prerender-broadmoor-cheyenne-mountain] Could not find '${PLACEHOLDER}' in dist/public/index.html.`);
  }
  const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
  const distOutputDir = resolve(ROOT, "dist/prerendered");
  mkdirSync(distOutputDir, { recursive: true });
  writeFileSync(resolve(distOutputDir, "broadmoor-cheyenne-mountain-colorado-springs-real-estate.html"), prerenderedShell, "utf-8");
  const srcOutputDir = resolve(ROOT, "server/prerendered");
  mkdirSync(srcOutputDir, { recursive: true });
  const srcOutputPath = resolve(srcOutputDir, "broadmoor-cheyenne-mountain-colorado-springs-real-estate.html");
  writeFileSync(srcOutputPath, prerenderedShell, "utf-8");
  console.log(`[prerender-broadmoor-cheyenne-mountain] Committed artifact written to: ${srcOutputPath}`);
  const written = readFileSync(srcOutputPath, "utf-8");
  const anchorCount = (written.match(/<a\s/g) || []).length;
  const hasH1 = /<h1[\s>]/.test(written);
  const rootNotEmpty = !written.includes('<div id="root"></div>');
  console.log(`[prerender-broadmoor-cheyenne-mountain] Sanity: rootNotEmpty=${rootNotEmpty}, hasH1=${hasH1}, anchors=${anchorCount}`);
  if (!rootNotEmpty) throw new Error("[prerender-broadmoor-cheyenne-mountain] FAIL: Root div still empty.");
  console.log("[prerender-broadmoor-cheyenne-mountain] Done.");
}
prerenderBroadmoorCheyenneMountain().catch((err) => {
  console.error("[prerender-broadmoor-cheyenne-mountain] FAILED:", err.message);
  process.exit(1);
});
