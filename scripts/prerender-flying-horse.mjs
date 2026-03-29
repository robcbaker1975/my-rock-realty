/**
 * IL-29 Selective Prerender Script — /flying-horse-colorado-springs-real-estate
 * Scope: ONE route only. Do not add other routes.
 */
import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { buildSeoHeadBlock, injectSeoHead, BASE_SCHEMAS, buildBreadcrumbSchema, OG_IMAGE_DEFAULT } from "./seo-inject.mjs";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
async function prerenderFlyingHorse() {
  console.log("[prerender-flying-horse] Starting SSR build for /flying-horse-colorado-springs-real-estate...");
  await build({
    root: resolve(ROOT, "client"),
    configFile: resolve(ROOT, "vite.config.ts"),
    build: {
      ssr: resolve(ROOT, "client/src/entry-server-flying-horse.tsx"),
      outDir: resolve(ROOT, "dist/server"),
      emptyOutDir: false,
      rollupOptions: {
        output: {
          format: "esm",
          entryFileNames: "entry-server-flying-horse.js",
        },
      },
    },
    css: {},
  });
  console.log("[prerender-flying-horse] SSR build complete. Rendering HTML...");
  const ssrModule = await import(resolve(ROOT, "dist/server/entry-server-flying-horse.js"));
  const html = ssrModule.renderFlyingHorseColoradoSpringsRealEstate();
  console.log(`[prerender-flying-horse] Rendered HTML length: ${html.length} chars`);
  const shellPath = resolve(ROOT, "dist/public/index.html");
  if (!existsSync(shellPath)) {
    throw new Error(`[prerender-flying-horse] dist/public/index.html not found. Run 'vite build' first.`);
  }
  const shell = readFileSync(shellPath, "utf-8");
  const PLACEHOLDER = '<div id="root"></div>';
  if (!shell.includes(PLACEHOLDER)) {
    throw new Error(`[prerender-flying-horse] Could not find '${PLACEHOLDER}' in dist/public/index.html.`);
  }
  const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
  const distOutputDir = resolve(ROOT, "dist/prerendered");

  // === SEO_INJECTED ===
  const _seoBlock = buildSeoHeadBlock({
    title: "Living in Flying Horse, Colorado Springs: Real Estate, Tradeoffs, and What It's Like",
    description: "Thinking about living in Flying Horse, Colorado Springs? Learn what Flying Horse is actually like, who it fits, the real tradeoffs, and how it compares with Briargate, Northgate, and Cordera.",
    canonical: 'https://myrockhomes.com/flying-horse-colorado-springs-real-estate/',
    ogImage: OG_IMAGE_DEFAULT,
    schemas: [
      ...BASE_SCHEMAS,
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why do buyers choose Flying Horse instead of just choosing the north side broadly?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Because Flying Horse is usually a more specific community choice. Buyers often want Flying Horse in particular, not just any north-side option."
            }
          },
          {
            "@type": "Question",
            "name": "What makes Flying Horse different from Briargate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Briargate is usually the easier all-around north-side choice. Flying Horse is usually the more specific name-neighborhood choice."
            }
          },
          {
            "@type": "Question",
            "name": "What kind of buyer usually ends up choosing Flying Horse?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Usually it is a buyer who wants the neighborhood identity to matter and wants the community itself to carry more of the decision."
            }
          },
          {
            "@type": "Question",
            "name": "Who usually moves on from Flying Horse?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Usually it is a buyer who realizes they care more about convenience, location, or a broader all-around setup than about the specific neighborhood identity."
            }
          },
          {
            "@type": "Question",
            "name": "Is Flying Horse mostly about golf?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Not only that, but the golf-and-club side of the conversation is a real part of why people talk about it differently from nearby areas."
            }
          },
          {
            "@type": "Question",
            "name": "Is Flying Horse better than Northgate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Not across the board. Northgate usually makes more sense for buyers who care more about farther-north location and access. Flying Horse usually makes more sense for buyers who care more about community identity."
            }
          },
          {
            "@type": "Question",
            "name": "Is Flying Horse better than Cordera?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It depends on what matters to you. Flying Horse usually wins on stronger identity. Cordera usually fits better when a buyer wants a cleaner planned-community feel without the same identity layer."
            }
          },
          {
            "@type": "Question",
            "name": "Is Flying Horse a good relocation area?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It can be, but it works best when the relocation buyer already knows they want a more specific neighborhood choice rather than just a convenient north-side option."
            }
          },
          {
            "@type": "Question",
            "name": "What are the main downsides of Flying Horse?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The biggest downside is that the strong community identity can feel unnecessary if that is not important to you. In that case, other nearby areas may make more sense."
            }
          },
          {
            "@type": "Question",
            "name": "Why does Flying Horse keep coming up in north-side searches?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Because it gives buyers a very specific kind of north-side option, and for the right buyer that specificity matters."
            }
          }
        ]
      },
      buildBreadcrumbSchema([
        { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
        { "@type": "ListItem", position: 2, name: "Colorado Springs", item: "https://myrockhomes.com/colorado-springs-co-homes-for-sale" },
        { "@type": "ListItem", position: 3, name: "Living in Flying Horse, Colorado Springs: Real Estate, Tradeoffs, and What It's Like", item: 'https://myrockhomes.com/flying-horse-colorado-springs-real-estate/' },
      ]),
    ],
    slug: 'flying-horse-colorado-springs-real-estate',
  });
  const _injectedHtml = injectSeoHead(prerenderedShell, _seoBlock, 'https://myrockhomes.com/flying-horse-colorado-springs-real-estate/');

  mkdirSync(distOutputDir, { recursive: true });
  writeFileSync(resolve(distOutputDir, "flying-horse-colorado-springs-real-estate.html"), prerenderedShell, "utf-8");
  const srcOutputDir = resolve(ROOT, "server/prerendered");
  mkdirSync(srcOutputDir, { recursive: true });
  const srcOutputPath = resolve(srcOutputDir, "flying-horse-colorado-springs-real-estate.html");
  writeFileSync(srcOutputPath, _injectedHtml, "utf-8");
  console.log(`[prerender-flying-horse] Committed artifact written to: ${srcOutputPath}`);
  const written = readFileSync(srcOutputPath, "utf-8");
  const anchorCount = (written.match(/<a\s/g) || []).length;
  const hasH1 = /<h1[\s>]/.test(written);
  const rootNotEmpty = !written.includes('<div id="root"></div>');
  const hasFAQPage = written.includes('"@type":"FAQPage"');
  console.log(`[prerender-flying-horse] Sanity: rootNotEmpty=${rootNotEmpty}, hasH1=${hasH1}, hasFAQPage=${hasFAQPage}, anchors=${anchorCount}`);
  if (!rootNotEmpty) throw new Error("[prerender-flying-horse] FAIL: Root div still empty.");
  if (!hasFAQPage) throw new Error("[prerender-flying-horse] FAIL: FAQPage schema missing from artifact.");
  console.log("[prerender-flying-horse] Done.");
}
prerenderFlyingHorse().catch((err) => {
  console.error("[prerender-flying-horse] FAILED:", err.message);
  process.exit(1);
});
