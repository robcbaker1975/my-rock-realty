/**
 * Selective Prerender Script — /wolf-ranch-colorado-springs-real-estate
 * Scope: ONE route only. Do not add other routes.
 */
import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { buildSeoHeadBlock, injectSeoHead, BASE_SCHEMAS, buildBreadcrumbSchema, OG_IMAGE_DEFAULT } from "./seo-inject.mjs";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
async function prerenderWolfRanch() {
  console.log("[prerender-wolf-ranch] Starting SSR build for /wolf-ranch-colorado-springs-real-estate...");
  await build({
    root: resolve(ROOT, "client"),
    configFile: resolve(ROOT, "vite.config.ts"),
    build: {
      ssr: resolve(ROOT, "client/src/entry-server-wolf-ranch.tsx"),
      outDir: resolve(ROOT, "dist/server"),
      emptyOutDir: false,
      rollupOptions: {
        output: {
          format: "esm",
          entryFileNames: "entry-server-wolf-ranch.js",
        },
      },
    },
    css: {},
  });
  console.log("[prerender-wolf-ranch] SSR build complete. Rendering HTML...");
  const ssrModule = await import(resolve(ROOT, "dist/server/entry-server-wolf-ranch.js"));
  const html = ssrModule.renderWolfRanchColoradoSpringsRealEstate();
  console.log(`[prerender-wolf-ranch] Rendered HTML length: ${html.length} chars`);
  const shellPath = resolve(ROOT, "dist/public/index.html");
  if (!existsSync(shellPath)) {
    throw new Error(`[prerender-wolf-ranch] dist/public/index.html not found. Run 'vite build' first.`);
  }
  const shell = readFileSync(shellPath, "utf-8");
  const PLACEHOLDER = '<div id="root"></div>';
  if (!shell.includes(PLACEHOLDER)) {
    throw new Error(`[prerender-wolf-ranch] Could not find '${PLACEHOLDER}' in dist/public/index.html.`);
  }
  const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
  const distOutputDir = resolve(ROOT, "dist/prerendered");
  // === SEO_INJECTED ===
  const _seoBlock = buildSeoHeadBlock({
    title: "Living in Wolf Ranch, Colorado Springs: Real Estate, Tradeoffs, and What It's Like",
    description: "Thinking about living in Wolf Ranch, Colorado Springs? Learn what Wolf Ranch is actually like, who it fits, the real tradeoffs, and how it compares with Briargate, Banning Lewis Ranch, and Cordera.",
    canonical: "https://myrockhomes.com/wolf-ranch-colorado-springs-real-estate/",
    ogImage: OG_IMAGE_DEFAULT,
    schemas: [
      ...BASE_SCHEMAS,
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What do buyers usually notice once they actually start driving Wolf Ranch?", "acceptedAnswer": { "@type": "Answer", "text": "Most buyers start seeing pretty quickly that Wolf Ranch feels newer, more active, and more built around the neighborhood itself than a lot of nearby north-side options. It usually gets easier to understand in person than it does online." } },
          { "@type": "Question", "name": "What makes Wolf Ranch different from Briargate?", "acceptedAnswer": { "@type": "Answer", "text": "Briargate is usually the broader all-around north-side choice. Wolf Ranch usually feels more like a newer neighborhood choice where the neighborhood itself is doing more of the work." } },
          { "@type": "Question", "name": "What kind of buyer usually ends up choosing Wolf Ranch?", "acceptedAnswer": { "@type": "Answer", "text": "Usually it is someone who wants the north side to feel newer, more active, and more neighborhood-driven, and likes the idea of trails, parks, and open space being part of everyday life." } },
          { "@type": "Question", "name": "Who usually moves on from Wolf Ranch?", "acceptedAnswer": { "@type": "Answer", "text": "Usually it is a buyer who wants the most established north-side feel, less of a planned-community setup, or a broader default answer." } },
          { "@type": "Question", "name": "Does Wolf Ranch feel newer than Briargate and Cordera?", "acceptedAnswer": { "@type": "Answer", "text": "Usually yes, especially compared with Briargate. Compared with Cordera, it often feels a little newer and a little more active in how it comes across." } },
          { "@type": "Question", "name": "Is Wolf Ranch mostly about the amenities?", "acceptedAnswer": { "@type": "Answer", "text": "Not only that, but the neighborhood itself is a real part of why people choose it. The trails, parks, lake, and open-space feel shape how it lives." } },
          { "@type": "Question", "name": "How does Wolf Ranch compare with Cordera?", "acceptedAnswer": { "@type": "Answer", "text": "Cordera usually feels a little more polished and settled. Wolf Ranch usually feels a little newer and more active. Both can work for similar buyers, but they usually do not land the same way in person." } },
          { "@type": "Question", "name": "Is Wolf Ranch a good relocation area?", "acceptedAnswer": { "@type": "Answer", "text": "Usually yes. It is one of the easier north-side areas to understand because the value is pretty clear once you see it: newer, active, planned, and easy to use." } },
          { "@type": "Question", "name": "What are the biggest tradeoffs that come with Wolf Ranch?", "acceptedAnswer": { "@type": "Answer", "text": "The biggest tradeoff is that it can feel more planned and less settled than some buyers want. If the newer, more active, planned feel is not a plus for you, it usually starts getting weaker." } },
          { "@type": "Question", "name": "Why does Wolf Ranch keep coming up for north-side buyers?", "acceptedAnswer": { "@type": "Answer", "text": "Because it solves a specific problem well. It gives buyers a newer north-side neighborhood where the neighborhood itself feels like part of the value." } }
        ]
      },
      buildBreadcrumbSchema([
        { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
        { "@type": "ListItem", position: 2, name: "Colorado Springs", item: "https://myrockhomes.com/colorado-springs-co-homes-for-sale" },
        { "@type": "ListItem", position: 3, name: "Living in Wolf Ranch, Colorado Springs: Real Estate, Tradeoffs, and What It's Like", item: "https://myrockhomes.com/wolf-ranch-colorado-springs-real-estate/" },
      ]),
    ],
    slug: "wolf-ranch-colorado-springs-real-estate",
  });
  const _injectedHtml = injectSeoHead(prerenderedShell, _seoBlock, "https://myrockhomes.com/wolf-ranch-colorado-springs-real-estate/");
  mkdirSync(distOutputDir, { recursive: true });
  writeFileSync(resolve(distOutputDir, "wolf-ranch-colorado-springs-real-estate.html"), prerenderedShell, "utf-8");
  const srcOutputDir = resolve(ROOT, "server/prerendered");
  mkdirSync(srcOutputDir, { recursive: true });
  const srcOutputPath = resolve(srcOutputDir, "wolf-ranch-colorado-springs-real-estate.html");
  writeFileSync(srcOutputPath, _injectedHtml, "utf-8");
  console.log(`[prerender-wolf-ranch] Committed artifact written to: ${srcOutputPath}`);
  const written = readFileSync(srcOutputPath, "utf-8");
  const anchorCount = (written.match(/<a\s/g) || []).length;
  const hasH1 = /<h1[\s>]/.test(written);
  const rootNotEmpty = !written.includes('<div id="root"></div>');
  const hasFAQPage = written.includes('"@type":"FAQPage"') || written.includes('"@type": "FAQPage"');
  const hasFAQQ1 = written.includes('What do buyers usually notice once they actually start driving Wolf Ranch');
  const hasFAQQ10 = written.includes('Why does Wolf Ranch keep coming up for north-side buyers');
  console.log(`[prerender-wolf-ranch] Sanity: rootNotEmpty=${rootNotEmpty}, hasH1=${hasH1}, anchors=${anchorCount}, hasFAQPage=${hasFAQPage}, hasFAQQ1=${hasFAQQ1}, hasFAQQ10=${hasFAQQ10}`);
  if (!rootNotEmpty) throw new Error("[prerender-wolf-ranch] FAIL: Root div still empty.");
  if (!hasFAQPage) throw new Error("[prerender-wolf-ranch] FAIL: FAQPage schema missing.");
  if (!hasFAQQ1) throw new Error("[prerender-wolf-ranch] FAIL: FAQ Q1 missing.");
  if (!hasFAQQ10) throw new Error("[prerender-wolf-ranch] FAIL: FAQ Q10 missing.");
  console.log("[prerender-wolf-ranch] Done.");
}
prerenderWolfRanch().catch((err) => {
  console.error("[prerender-wolf-ranch] FAILED:", err.message);
  process.exit(1);
});
