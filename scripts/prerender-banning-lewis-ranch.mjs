/**
 * IL-82 Selective Prerender Script — /banning-lewis-ranch-colorado-springs-real-estate
 * Scope: ONE route only. Do not add other routes.
 */
import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { buildSeoHeadBlock, injectSeoHead, BASE_SCHEMAS, buildBreadcrumbSchema, OG_IMAGE_DEFAULT } from "./seo-inject.mjs";
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

  // === SEO_INJECTED ===
  const _seoBlock = buildSeoHeadBlock({
    title: "Living in Banning Lewis Ranch, Colorado Springs: Real Estate, Tradeoffs, and What It's Like",
    description: "Thinking about living in Banning Lewis Ranch, Colorado Springs? Learn what Banning Lewis Ranch is actually like, who it fits, the real tradeoffs, and how it compares with Briargate, Cordera, and Falcon.",
    canonical: 'https://myrockhomes.com/banning-lewis-ranch-colorado-springs-real-estate/',
    ogImage: OG_IMAGE_DEFAULT,
    schemas: [
      ...BASE_SCHEMAS,
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why do buyers keep Banning Lewis Ranch in the search once they tour it?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Because it usually feels more substantial in person. Buyers notice pretty quickly that it is a big planned community with real amenities, not just newer houses in a random east-side pocket."
            }
          },
          {
            "@type": "Question",
            "name": "What makes Banning Lewis Ranch different from Cordera?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cordera usually feels more north-side and tighter. Banning Lewis Ranch usually feels larger, farther east, and more built around scale."
            }
          },
          {
            "@type": "Question",
            "name": "What kind of buyer usually ends up choosing Banning Lewis Ranch?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Usually it is a buyer who wants newer homes, a large planned-community setup, and enough amenities to make the east-side trade feel worth it."
            }
          },
          {
            "@type": "Question",
            "name": "Who usually moves on from Banning Lewis Ranch?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Usually it is someone who wants a more established feel, wants to stay more squarely in the north-side conversation, or already knows the east-side location feels like too much of a compromise."
            }
          },
          {
            "@type": "Question",
            "name": "Does Banning Lewis Ranch feel far out?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For some buyers, yes. That is one of the main tradeoffs. The question is whether the neighborhood itself gives you enough back to make that feel worth it."
            }
          },
          {
            "@type": "Question",
            "name": "How does Banning Lewis Ranch compare with Briargate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Briargate is usually the broader all-around north-side choice. Banning Lewis Ranch is usually the larger east-side planned-community choice."
            }
          },
          {
            "@type": "Question",
            "name": "How does Banning Lewis Ranch compare with Falcon?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Falcon usually comes up as part of the broader east-side conversation. Banning Lewis Ranch usually gets stronger when the buyer wants the planned-community amenities and neighborhood structure to do more of the work."
            }
          },
          {
            "@type": "Question",
            "name": "What are the main advantages of Banning Lewis Ranch?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Usually newer homes, more neighborhood amenities, and a larger planned-community environment that gives buyers a lot to work with."
            }
          },
          {
            "@type": "Question",
            "name": "What are the main downsides of Banning Lewis Ranch?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Usually the east-side location and the fact that the neighborhood works best when the planned-community setup is a real plus for you."
            }
          },
          {
            "@type": "Question",
            "name": "Why does Banning Lewis Ranch keep coming up in newer-home searches?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Because it solves that newer planned-community problem well. For the right buyer, it gives a lot of neighborhood in exchange for being farther east."
            }
          }
        ]
      },
      buildBreadcrumbSchema([
        { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
        { "@type": "ListItem", position: 2, name: "Colorado Springs", item: "https://myrockhomes.com/colorado-springs-co-homes-for-sale" },
        { "@type": "ListItem", position: 3, name: "Living in Banning Lewis Ranch, Colorado Springs: Real Estate, Tradeoffs, and What It's Like", item: 'https://myrockhomes.com/banning-lewis-ranch-colorado-springs-real-estate/' },
      ]),
    ],
    slug: 'banning-lewis-ranch-colorado-springs-real-estate',
  });
  const _injectedHtml = injectSeoHead(prerenderedShell, _seoBlock, 'https://myrockhomes.com/banning-lewis-ranch-colorado-springs-real-estate/');

  mkdirSync(distOutputDir, { recursive: true });
  writeFileSync(resolve(distOutputDir, "banning-lewis-ranch-colorado-springs-real-estate.html"), prerenderedShell, "utf-8");
  const srcOutputDir = resolve(ROOT, "server/prerendered");
  mkdirSync(srcOutputDir, { recursive: true });
  const srcOutputPath = resolve(srcOutputDir, "banning-lewis-ranch-colorado-springs-real-estate.html");
  writeFileSync(srcOutputPath, _injectedHtml, "utf-8");
  console.log(`[prerender-banning-lewis-ranch] Committed artifact written to: ${srcOutputPath}`);
  const written = readFileSync(srcOutputPath, "utf-8");
  const anchorCount = (written.match(/<a\s/g) || []).length;
  const hasH1 = /<h1[\s>]/.test(written);
  const rootNotEmpty = !written.includes('<div id="root"></div>');
  const hasFAQPage = written.includes('"@type":"FAQPage"');
  console.log(`[prerender-banning-lewis-ranch] Sanity: rootNotEmpty=${rootNotEmpty}, hasH1=${hasH1}, hasFAQPage=${hasFAQPage}, anchors=${anchorCount}`);
  if (!rootNotEmpty) throw new Error("[prerender-banning-lewis-ranch] FAIL: Root div still empty.");
  if (!hasFAQPage) throw new Error("[prerender-banning-lewis-ranch] FAIL: FAQPage schema missing from artifact.");
  console.log("[prerender-banning-lewis-ranch] Done.");
}
prerenderBanningLewisRanch().catch((err) => {
  console.error("[prerender-banning-lewis-ranch] FAILED:", err.message);
  process.exit(1);
});
