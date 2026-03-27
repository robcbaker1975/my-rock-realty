import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync, copyFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const ROUTE = "/military-relocation/va-home-loans-colorado/";
const ARTIFACT = "va-home-loans-colorado.html";

console.log(`[prerender-va-home-loans-colorado] Starting SSR build for ${ROUTE}...`);

await build({
  root: ROOT,
  build: {
    ssr: resolve(ROOT, "client/src/entry-server-va-home-loans-colorado.tsx"),
    outDir: resolve(ROOT, "dist/server"),
    emptyOutDir: false,
    rollupOptions: {
      output: {
        entryFileNames: "entry-server-va-home-loans-colorado.js",
      },
    },
  },
  logLevel: "warn",
});

console.log(`[prerender-va-home-loans-colorado] SSR build complete. Rendering HTML...`);

const { renderVaHomeLoansColorado } = await import(
  resolve(ROOT, "dist/server/entry-server-va-home-loans-colorado.js")
);

const appHtml = renderVaHomeLoansColorado();
const template = readFileSync(resolve(ROOT, "dist/public/index.html"), "utf-8");
const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

console.log(`[prerender-va-home-loans-colorado] Rendered HTML length: ${appHtml.length} chars`);

const prerenderedDir = resolve(ROOT, "server/prerendered");
mkdirSync(prerenderedDir, { recursive: true });
writeFileSync(resolve(prerenderedDir, ARTIFACT), html);
console.log(`[prerender-va-home-loans-colorado] Written to ${resolve(prerenderedDir, ARTIFACT)} (${Buffer.byteLength(html)} bytes)`);

const distPrerenderedDir = resolve(ROOT, "dist/prerendered");
mkdirSync(distPrerenderedDir, { recursive: true });
copyFileSync(resolve(prerenderedDir, ARTIFACT), resolve(distPrerenderedDir, ARTIFACT));
console.log(`[prerender-va-home-loans-colorado] Written to ${resolve(distPrerenderedDir, ARTIFACT)} (fallback)`);

console.log(`[prerender-va-home-loans-colorado] Done.`);
