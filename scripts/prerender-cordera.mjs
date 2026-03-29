/**
 * IL-30 Selective Prerender Script — /cordera-colorado-springs-real-estate
 * Scope: ONE route only. Do not add other routes.
 */
import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { buildSeoHeadBlock, injectSeoHead, BASE_SCHEMAS, buildBreadcrumbSchema, OG_IMAGE_DEFAULT } from "./seo-inject.mjs";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
async function prerenderCordera() {
  console.log("[prerender-cordera] Starting SSR build for /cordera-colorado-springs-real-estate...");
  await build({
    root: resolve(ROOT, "client"),
    configFile: resolve(ROOT, "vite.config.ts"),
    build: {
      ssr: resolve(ROOT, "client/src/entry-server-cordera.tsx"),
      outDir: resolve(ROOT, "dist/server"),
      emptyOutDir: false,
      rollupOptions: {
        output: {
          format: "esm",
          entryFileNames: "entry-server-cordera.js",
        },
      },
    },
    css: {},
  });
  console.log("[prerender-cordera] SSR build complete. Rendering HTML...");
  const ssrModule = await import(resolve(ROOT, "dist/server/entry-server-cordera.js"));
  const html = ssrModule.renderCorderaColoradoSpringsRealEstate();
  console.log(`[prerender-cordera] Rendered HTML length: ${html.length} chars`);
  const shellPath = resolve(ROOT, "dist/public/index.html");
  if (!existsSync(shellPath)) {
    throw new Error(`[prerender-cordera] dist/public/index.html not found. Run 'vite build' first.`);
  }
  const shell = readFileSync(shellPath, "utf-8");
  const PLACEHOLDER = '<div id="root"></div>';
  if (!shell.includes(PLACEHOLDER)) {
    throw new Error(`[prerender-cordera] Could not find '${PLACEHOLDER}' in dist/public/index.html.`);
  }
  const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
  const distOutputDir = resolve(ROOT, "dist/prerendered");

  // === SEO_INJECTED ===
  const _seoBlock = buildSeoHeadBlock({
    title: "Living in Cordera, Colorado Springs: Real Estate, Tradeoffs, and What It's Like",
    description: "Thinking about living in Cordera, Colorado Springs? Learn what Cordera is actually like, who it fits, the real tradeoffs, and how it compares with Briargate, Flying Horse, and Pine Creek.",
    canonical: 'https://myrockhomes.com/cordera-colorado-springs-real-estate/',
    ogImage: OG_IMAGE_DEFAULT,
    schemas: [
      ...BASE_SCHEMAS,
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What do buyers usually notice once they actually start driving Cordera?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most buyers start seeing pretty quickly that Cordera feels more organized, more cohesive, and more intentional than a lot of nearby north-side options. It usually gets easier to understand in person than it does online. That is why some buyers keep it in the search once they tour it, and others realize pretty quickly it is not the right fit."
            }
          },
          {
            "@type": "Question",
            "name": "What makes Cordera different from Briargate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Briargate is usually the broader all-around north-side choice. Cordera usually feels more like a specific planned-community decision. If you want more neighborhood structure and a newer organized feel, Cordera often gets stronger."
            }
          },
          {
            "@type": "Question",
            "name": "What kind of buyer usually ends up choosing Cordera?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Usually it is someone who wants the north side to feel easy, newer, and well organized. They often care about amenities, trails, parks, and a neighborhood that feels pretty straightforward once they drive it."
            }
          },
          {
            "@type": "Question",
            "name": "Who usually moves on from Cordera?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Usually it is a buyer who wants a more established neighborhood feel, less structure, more variation, or just does not want the planned-community part to matter that much."
            }
          },
          {
            "@type": "Question",
            "name": "Does Cordera feel newer than Briargate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Usually yes. That is part of the appeal. It tends to feel more planned and newer, while Briargate usually feels broader and more established."
            }
          },
          {
            "@type": "Question",
            "name": "Is Cordera too planned for some buyers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. For some buyers, that is exactly why it works. For others, it feels a little too controlled or a little too polished. That usually becomes clear pretty quickly once they drive it."
            }
          },
          {
            "@type": "Question",
            "name": "How does Cordera compare with Pine Creek?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cordera usually leans more into neighborhood structure, amenities, and a cleaner planned-community feel. Pine Creek can fit better for buyers who want a different north-side feel."
            }
          },
          {
            "@type": "Question",
            "name": "How does Cordera compare with Flying Horse?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cordera usually feels more like an organized amenity-driven neighborhood choice. Flying Horse usually feels more like a stronger name-neighborhood choice where identity matters more."
            }
          },
          {
            "@type": "Question",
            "name": "Is Cordera good for relocation buyers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Usually yes. It is one of the easier north-side areas to understand because the value is pretty clear once you see it: newer, organized, and easy to use."
            }
          },
          {
            "@type": "Question",
            "name": "Why does Cordera keep coming up for north-side buyers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Because it solves a specific problem well. It gives buyers a north-side neighborhood that feels newer, planned, and easy to understand."
            }
          }
        ]
      },
      buildBreadcrumbSchema([
        { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
        { "@type": "ListItem", position: 2, name: "Colorado Springs", item: "https://myrockhomes.com/colorado-springs-co-homes-for-sale" },
        { "@type": "ListItem", position: 3, name: "Living in Cordera, Colorado Springs: Real Estate, Tradeoffs, and What It's Like", item: 'https://myrockhomes.com/cordera-colorado-springs-real-estate/' },
      ]),
    ],
    slug: 'cordera-colorado-springs-real-estate',
  });
  const _injectedHtml = injectSeoHead(prerenderedShell, _seoBlock, 'https://myrockhomes.com/cordera-colorado-springs-real-estate/');

  mkdirSync(distOutputDir, { recursive: true });
  writeFileSync(resolve(distOutputDir, "cordera-colorado-springs-real-estate.html"), prerenderedShell, "utf-8");
  const srcOutputDir = resolve(ROOT, "server/prerendered");
  mkdirSync(srcOutputDir, { recursive: true });
  const srcOutputPath = resolve(srcOutputDir, "cordera-colorado-springs-real-estate.html");
  writeFileSync(srcOutputPath, _injectedHtml, "utf-8");
  console.log(`[prerender-cordera] Committed artifact written to: ${srcOutputPath}`);
  const written = readFileSync(srcOutputPath, "utf-8");
  const anchorCount = (written.match(/<a\s/g) || []).length;
  const hasH1 = /<h1[\s>]/.test(written);
  const rootNotEmpty = !written.includes('<div id="root"></div>');
  const hasFAQPage = written.includes('"@type":"FAQPage"');
  console.log(`[prerender-cordera] Sanity: rootNotEmpty=${rootNotEmpty}, hasH1=${hasH1}, hasFAQPage=${hasFAQPage}, anchors=${anchorCount}`);
  if (!rootNotEmpty) throw new Error("[prerender-cordera] FAIL: Root div still empty.");
  if (!hasFAQPage) throw new Error("[prerender-cordera] FAIL: FAQPage schema missing from artifact.");
  console.log("[prerender-cordera] Done.");
}
prerenderCordera().catch((err) => {
  console.error("[prerender-cordera] FAILED:", err.message);
  process.exit(1);
});
