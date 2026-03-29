/**
 * IL-31 Selective Prerender Script — /pine-creek-colorado-springs-real-estate
 * Scope: ONE route only. Do not add other routes.
 */
import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { buildSeoHeadBlock, injectSeoHead, BASE_SCHEMAS, buildBreadcrumbSchema, OG_IMAGE_DEFAULT, OG_IMAGE_MILITARY } from "./seo-inject.mjs";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
async function prerenderPineCreek() {
  console.log("[prerender-pine-creek] Starting SSR build for /pine-creek-colorado-springs-real-estate...");
  await build({
    root: resolve(ROOT, "client"),
    configFile: resolve(ROOT, "vite.config.ts"),
    build: {
      ssr: resolve(ROOT, "client/src/entry-server-pine-creek.tsx"),
      outDir: resolve(ROOT, "dist/server"),
      emptyOutDir: false,
      rollupOptions: {
        output: {
          format: "esm",
          entryFileNames: "entry-server-pine-creek.js",
        },
      },
    },
    css: {},
  });
  console.log("[prerender-pine-creek] SSR build complete. Rendering HTML...");
  const ssrModule = await import(resolve(ROOT, "dist/server/entry-server-pine-creek.js"));
  const html = ssrModule.renderPineCreekColoradoSpringsRealEstate();
  console.log(`[prerender-pine-creek] Rendered HTML length: ${html.length} chars`);
  const shellPath = resolve(ROOT, "dist/public/index.html");
  if (!existsSync(shellPath)) {
    throw new Error(`[prerender-pine-creek] dist/public/index.html not found. Run 'vite build' first.`);
  }
  const shell = readFileSync(shellPath, "utf-8");
  const PLACEHOLDER = '<div id="root"></div>';
  if (!shell.includes(PLACEHOLDER)) {
    throw new Error(`[prerender-pine-creek] Could not find '${PLACEHOLDER}' in dist/public/index.html.`);
  }
  const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
  const distOutputDir = resolve(ROOT, "dist/prerendered");

  // === SEO_INJECTED ===
  const _seoBlock = buildSeoHeadBlock({
    title: "Living in Pine Creek, Colorado Springs: Real Estate, Tradeoffs, and What It's Like",
    description: 'Thinking about living in Pine Creek, Colorado Springs? Learn what Pine Creek is actually like, who it fits, the real tradeoffs, and how it compares with Briargate, Cordera, and Flying Horse.',
    canonical: 'https://myrockhomes.com/pine-creek-colorado-springs-real-estate/',
    ogImage: OG_IMAGE_DEFAULT,
    schemas: [
      ...BASE_SCHEMAS,
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What do buyers usually notice once they actually start driving Pine Creek?", "acceptedAnswer": { "@type": "Answer", "text": "Most buyers start seeing pretty quickly that Pine Creek feels more polished and more established than a lot of nearby north-side options. It usually gets easier to understand in person than it does online. That is why some buyers keep it in the search once they tour it, and others realize pretty quickly it is not the right fit." } },
          { "@type": "Question", "name": "How is Pine Creek different from Briargate?", "acceptedAnswer": { "@type": "Answer", "text": "Briargate is usually the broader all-around north-side choice. Pine Creek usually feels more like a specific neighborhood choice inside that larger area. It tends to feel a little more polished and a little more settled." } },
          { "@type": "Question", "name": "What kind of buyer usually ends up choosing Pine Creek?", "acceptedAnswer": { "@type": "Answer", "text": "Usually it is someone who wants the north side to feel established, polished, and residential, and likes the idea of the golf-course influence being part of the neighborhood feel." } },
          { "@type": "Question", "name": "Who usually moves on from Pine Creek?", "acceptedAnswer": { "@type": "Answer", "text": "Usually it is a buyer who wants the newest planned-community setup, the broadest easiest north-side option, or the strongest neighborhood identity." } },
          { "@type": "Question", "name": "Does Pine Creek feel more established than Cordera?", "acceptedAnswer": { "@type": "Answer", "text": "Usually yes. Cordera usually feels newer and more planned. Pine Creek usually feels more settled and a little less built around that newer planned-community setup." } },
          { "@type": "Question", "name": "Is Pine Creek mostly about golf?", "acceptedAnswer": { "@type": "Answer", "text": "Not only that, but the golf-course setting is a real part of how buyers experience it. It is part of what gives the area its feel." } },
          { "@type": "Question", "name": "How does Pine Creek compare with Flying Horse?", "acceptedAnswer": { "@type": "Answer", "text": "Flying Horse usually makes more sense when the neighborhood identity itself matters more. Pine Creek usually makes more sense when a buyer wants something polished and specific without leaning as hard into that identity piece." } },
          { "@type": "Question", "name": "Is Pine Creek a good relocation area?", "acceptedAnswer": { "@type": "Answer", "text": "Usually yes, especially for buyers who already know they want the north side and want something that feels more established and more neighborhood-specific than some nearby options." } },
          { "@type": "Question", "name": "What are the biggest tradeoffs that come with Pine Creek?", "acceptedAnswer": { "@type": "Answer", "text": "The biggest tradeoff is usually specificity. Pine Creek can be a great fit, but it is not the broadest answer. Buyers often choose it because they like the more polished, established feel. If that part does not matter, another area may make more sense." } },
          { "@type": "Question", "name": "Why does Pine Creek keep coming up for north-side buyers?", "acceptedAnswer": { "@type": "Answer", "text": "Because it solves a specific problem well. It gives buyers a north-side neighborhood that feels polished, established, and more distinct than just picking the broadest default." } }
        ]
      },
      buildBreadcrumbSchema([
        { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
        { "@type": "ListItem", position: 2, name: "Colorado Springs", item: "https://myrockhomes.com/colorado-springs-co-homes-for-sale" },
        { "@type": "ListItem", position: 3, name: "Living in Pine Creek, Colorado Springs: Real Estate, Tradeoffs, and What It's Like", item: 'https://myrockhomes.com/pine-creek-colorado-springs-real-estate/' },
      ]),
    ],
    slug: 'pine-creek-colorado-springs-real-estate',
  });
  const _injectedHtml = injectSeoHead(prerenderedShell, _seoBlock, 'https://myrockhomes.com/pine-creek-colorado-springs-real-estate/');

  mkdirSync(distOutputDir, { recursive: true });
  writeFileSync(resolve(distOutputDir, "pine-creek-colorado-springs-real-estate.html"), prerenderedShell, "utf-8");
  const srcOutputDir = resolve(ROOT, "server/prerendered");
  mkdirSync(srcOutputDir, { recursive: true });
  const srcOutputPath = resolve(srcOutputDir, "pine-creek-colorado-springs-real-estate.html");
  writeFileSync(srcOutputPath, _injectedHtml, "utf-8");
  console.log(`[prerender-pine-creek] Committed artifact written to: ${srcOutputPath}`);
  const written = readFileSync(srcOutputPath, "utf-8");
  const anchorCount = (written.match(/<a\s/g) || []).length;
  const hasH1 = /<h1[\s>]/.test(written);
  const rootNotEmpty = !written.includes('<div id="root"></div>');
  const hasFAQSchema = written.includes('"@type":"FAQPage"') || written.includes('"@type": "FAQPage"');
  const faqQ1 = written.includes('What do buyers usually notice once they actually start driving Pine Creek');
  const faqQ10 = written.includes('Why does Pine Creek keep coming up for north-side buyers');
  console.log(`[prerender-pine-creek] Sanity: rootNotEmpty=${rootNotEmpty}, hasH1=${hasH1}, anchors=${anchorCount}, hasFAQSchema=${hasFAQSchema}, faqQ1=${faqQ1}, faqQ10=${faqQ10}`);
  if (!rootNotEmpty) throw new Error("[prerender-pine-creek] FAIL: Root div still empty.");
  if (!hasFAQSchema) throw new Error("[prerender-pine-creek] FAIL: FAQPage schema missing.");
  if (!faqQ1 || !faqQ10) throw new Error("[prerender-pine-creek] FAIL: FAQ questions missing from artifact.");
  console.log("[prerender-pine-creek] Done.");
}
prerenderPineCreek().catch((err) => {
  console.error("[prerender-pine-creek] FAILED:", err.message);
  process.exit(1);
});
