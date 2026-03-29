/**
 * Selective Prerender Script — /interquest-colorado-springs
 * Scope: ONE route only. Do not add other routes.
 */
import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { buildSeoHeadBlock, injectSeoHead, BASE_SCHEMAS, buildBreadcrumbSchema, OG_IMAGE_DEFAULT } from "./seo-inject.mjs";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

async function prerenderInterquest() {
  console.log("[prerender-interquest] Starting SSR build for /interquest-colorado-springs...");
  await build({
    root: resolve(ROOT, "client"),
    configFile: resolve(ROOT, "vite.config.ts"),
    build: {
      ssr: true,
      outDir: resolve(ROOT, "dist/server-interquest"),
      rollupOptions: {
        input: resolve(ROOT, "client/src/entry-server-interquest.tsx"),
        output: { format: "esm" },
      },
    },
    logLevel: "warn",
  });

  const entryModule = await import(
    resolve(ROOT, "dist/server-interquest/entry-server-interquest.js")
  );
  const renderedHtml = entryModule.renderInterquestColoradoSprings();

  const shellPath = resolve(ROOT, "dist/public/index.html");
  if (!existsSync(shellPath)) throw new Error("[prerender-interquest] dist/public/index.html not found. Run pnpm vite build first.");
  const shell = readFileSync(shellPath, "utf-8");
  const prerenderedShell = shell.replace('<div id="root"></div>', `<div id="root">${renderedHtml}</div>`);

  const distOutputDir = resolve(ROOT, "dist/public/interquest-colorado-springs");
  const canonical = "https://myrockhomes.com/interquest-colorado-springs/";

  const _seoBlock = buildSeoHeadBlock({
    title: "Living Near Interquest in Colorado Springs: What Buyers Should Know",
    description: "Interquest keeps coming up in north Colorado Springs searches. Here is what it actually means, who it matters to, and how it compares with Northgate, Briargate, and Flying Horse.",
    canonical,
    ogImage: OG_IMAGE_DEFAULT,
    schemas: [
      ...BASE_SCHEMAS,
      buildBreadcrumbSchema([
        { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
        { "@type": "ListItem", position: 2, name: "Colorado Springs", item: "https://myrockhomes.com/colorado-springs-co-homes-for-sale" },
        { "@type": "ListItem", position: 3, name: "Living Near Interquest in Colorado Springs: What Buyers Should Know", item: canonical },
      ]),
    ],
    slug: "interquest-colorado-springs",
  });

  const _injectedHtml = injectSeoHead(prerenderedShell, _seoBlock, canonical);

  mkdirSync(distOutputDir, { recursive: true });
  writeFileSync(resolve(distOutputDir, "index.html"), _injectedHtml, "utf-8");

  const srcOutputDir = resolve(ROOT, "server/prerendered");
  mkdirSync(srcOutputDir, { recursive: true });
  const srcOutputPath = resolve(srcOutputDir, "interquest-colorado-springs.html");
  writeFileSync(srcOutputPath, _injectedHtml, "utf-8");
  console.log(`[prerender-interquest] Committed artifact written to: ${srcOutputPath}`);

  const written = readFileSync(srcOutputPath, "utf-8");
  const anchorCount = (written.match(/<a\s/g) || []).length;
  const hasH1 = /<h1[\s>]/.test(written);
  const rootNotEmpty = !written.includes('<div id="root"></div>');
  console.log(`[prerender-interquest] Sanity: rootNotEmpty=${rootNotEmpty}, hasH1=${hasH1}, anchors=${anchorCount}`);
  if (!rootNotEmpty) throw new Error("[prerender-interquest] FAIL: Root div still empty.");
  console.log("[prerender-interquest] Done.");
}

prerenderInterquest().catch((err) => {
  console.error("[prerender-interquest] FAILED:", err.message);
  process.exit(1);
});
