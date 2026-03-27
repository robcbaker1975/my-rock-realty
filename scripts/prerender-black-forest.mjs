/**
 * IL-04 Selective Prerender Script — /black-forest-co-real-estate
 * Scope: ONE route only. Do not add other routes.
 */
import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

async function prerenderBlackForest() {
  console.log("[prerender-black-forest] Starting SSR build for /black-forest-co-real-estate...");

  await build({
    root: resolve(ROOT, "client"),
    configFile: resolve(ROOT, "vite.config.ts"),
    build: {
      ssr: resolve(ROOT, "client/src/entry-server-black-forest.tsx"),
      outDir: resolve(ROOT, "dist/server"),
      emptyOutDir: false,
      rollupOptions: {
        output: {
          format: "esm",
          entryFileNames: "entry-server-black-forest.js",
        },
      },
    },
    css: {},
  });

  console.log("[prerender-black-forest] SSR build complete. Rendering HTML...");

  const ssrModule = await import(
    resolve(ROOT, "dist/server/entry-server-black-forest.js")
  );
  const html = ssrModule.renderBlackForestCoRealEstate();
  console.log(`[prerender-black-forest] Rendered HTML length: ${html.length} chars`);

  const shellPath = resolve(ROOT, "dist/public/index.html");
  if (!existsSync(shellPath)) {
    throw new Error(`[prerender-black-forest] dist/public/index.html not found. Run 'vite build' first.`);
  }
  const shell = readFileSync(shellPath, "utf-8");

  const PLACEHOLDER = '<div id="root"></div>';
  if (!shell.includes(PLACEHOLDER)) {
    throw new Error(`[prerender-black-forest] Could not find '${PLACEHOLDER}' in dist/public/index.html.`);
  }
  const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);

  const distOutputDir = resolve(ROOT, "dist/prerendered");
  mkdirSync(distOutputDir, { recursive: true });
  writeFileSync(resolve(distOutputDir, "black-forest-co-real-estate.html"), prerenderedShell, "utf-8");

  const srcOutputDir = resolve(ROOT, "server/prerendered");
  mkdirSync(srcOutputDir, { recursive: true });
  const srcOutputPath = resolve(srcOutputDir, "black-forest-co-real-estate.html");
  writeFileSync(srcOutputPath, prerenderedShell, "utf-8");
  console.log(`[prerender-black-forest] Committed artifact written to: ${srcOutputPath}`);

  const written = readFileSync(srcOutputPath, "utf-8");
  const anchorCount = (written.match(/<a\s/g) || []).length;
  const hasH1 = /<h1[\s>]/.test(written);
  const rootNotEmpty = !written.includes('<div id="root"></div>');
  console.log(`[prerender-black-forest] Sanity: rootNotEmpty=${rootNotEmpty}, hasH1=${hasH1}, anchors=${anchorCount}`);
  if (!rootNotEmpty) throw new Error("[prerender-black-forest] FAIL: Root div still empty.");
  console.log("[prerender-black-forest] Done.");
}

prerenderBlackForest().catch((err) => {
  console.error("[prerender-black-forest] FAILED:", err.message);
  process.exit(1);
});
