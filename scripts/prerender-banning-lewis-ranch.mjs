/**
 * IL-82 Selective Prerender Script — /banning-lewis-ranch-colorado-springs-real-estate
 * Scope: ONE route only. Do not add other routes.
 */
import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
async function prerenderBanningLewisRanch() {
  console.log("[prerender-banning-lewis-ranch] Starting SSR build for /banning-lewis-ranch-colorado-springs-real-estate...");
  await build({
    root: resolve(ROOT, "client"),
    configFile: resolve(ROOT, "vite.config.ts"),
    build: {
      ssr: resolve(ROOT, "client/src/entry-server-banning-lewis-ranch.tsx"),
      outDir: resolve(ROOT, "dist/server"),
      emptyOutDir: false,
      rollupOptions: {
        output: {
          format: "esm",
          entryFileNames: "entry-server-banning-lewis-ranch.js",
        },
      },
    },
    css: {},
  });
  console.log("[prerender-banning-lewis-ranch] SSR build complete. Rendering HTML...");
  const ssrModule = await import(
    resolve(ROOT, "dist/server/entry-server-banning-lewis-ranch.js")
  );
  const html = ssrModule.renderBanningLewisRanchColoradoSpringsRealEstate();
  console.log(`[prerender-banning-lewis-ranch] Rendered HTML length: ${html.length} chars`);
  const shellPath = resolve(ROOT, "dist/public/index.html");
  if (!existsSync(shellPath)) {
    throw new Error(`[prerender-banning-lewis-ranch] dist/public/index.html not found. Run 'vite build' first.`);
  }
  const shell = readFileSync(shellPath, "utf-8");
  const PLACEHOLDER = '<div id="root"></div>';
  if (!shell.includes(PLACEHOLDER)) {
    throw new Error(`[prerender-banning-lewis-ranch] Could not find '${PLACEHOLDER}' in dist/public/index.html.`);
  }
  const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
  const distOutputDir = resolve(ROOT, "dist/prerendered");
  mkdirSync(distOutputDir, { recursive: true });
  writeFileSync(resolve(distOutputDir, "banning-lewis-ranch-colorado-springs-real-estate.html"), prerenderedShell, "utf-8");
  const srcOutputDir = resolve(ROOT, "server/prerendered");
  mkdirSync(srcOutputDir, { recursive: true });
  const srcOutputPath = resolve(srcOutputDir, "banning-lewis-ranch-colorado-springs-real-estate.html");
  writeFileSync(srcOutputPath, prerenderedShell, "utf-8");
  console.log(`[prerender-banning-lewis-ranch] Committed artifact written to: ${srcOutputPath}`);
  const written = readFileSync(srcOutputPath, "utf-8");
  const anchorCount = (written.match(/<a\s/g) || []).length;
  const hasH1 = /<h1[\s>]/.test(written);
  const rootNotEmpty = !written.includes('<div id="root"></div>');
  console.log(`[prerender-banning-lewis-ranch] Sanity: rootNotEmpty=${rootNotEmpty}, hasH1=${hasH1}, anchors=${anchorCount}`);
  if (!rootNotEmpty) throw new Error("[prerender-banning-lewis-ranch] FAIL: Root div still empty.");
  console.log("[prerender-banning-lewis-ranch] Done.");
}
prerenderBanningLewisRanch().catch((err) => {
  console.error("[prerender-banning-lewis-ranch] FAILED:", err.message);
  process.exit(1);
});
