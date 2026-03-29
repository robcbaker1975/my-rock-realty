/**
 * IL-23 Selective Prerender Script — /falcon-co-real-estate
 * Scope: ONE route only. Do not add other routes.
 */
import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { buildSeoHeadBlock, injectSeoHead, BASE_SCHEMAS, buildBreadcrumbSchema, OG_IMAGE_DEFAULT, OG_IMAGE_MILITARY } from "./seo-inject.mjs";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
async function prerenderFalcon() {
  console.log("[prerender-falcon] Starting SSR build for /falcon-co-real-estate...");
  await build({
    root: resolve(ROOT, "client"),
    configFile: resolve(ROOT, "vite.config.ts"),
    build: {
      ssr: resolve(ROOT, "client/src/entry-server-falcon.tsx"),
      outDir: resolve(ROOT, "dist/server"),
      emptyOutDir: false,
      rollupOptions: {
        output: {
          format: "esm",
          entryFileNames: "entry-server-falcon.js",
        },
      },
    },
    css: {},
  });
  console.log("[prerender-falcon] SSR build complete. Rendering HTML...");
  const ssrModule = await import(resolve(ROOT, "dist/server/entry-server-falcon.js"));
  const html = ssrModule.renderFalconCoRealEstate();
  console.log(`[prerender-falcon] Rendered HTML length: ${html.length} chars`);
  const shellPath = resolve(ROOT, "dist/public/index.html");
  if (!existsSync(shellPath)) {
    throw new Error(`[prerender-falcon] dist/public/index.html not found. Run 'vite build' first.`);
  }
  const shell = readFileSync(shellPath, "utf-8");
  const PLACEHOLDER = '<div id="root"></div>';
  if (!shell.includes(PLACEHOLDER)) {
    throw new Error(`[prerender-falcon] Could not find '${PLACEHOLDER}' in dist/public/index.html.`);
  }
  const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
  const distOutputDir = resolve(ROOT, "dist/prerendered");

  // === SEO_INJECTED ===
  const _seoBlock = buildSeoHeadBlock({
    title: "Living in Falcon, Colorado: Real Estate, Tradeoffs, and What It's Like",
    description: "Thinking about living in Falcon, Colorado? Learn what Falcon is actually like, who it fits, the real tradeoffs, and how it compares with Banning Lewis Ranch, Meridian Ranch, and Briargate.",
    canonical: 'https://myrockhomes.com/falcon-co-real-estate/',
    ogImage: OG_IMAGE_DEFAULT,
    schemas: [
      ...BASE_SCHEMAS,
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What do buyers usually notice once they actually start driving Falcon?", "acceptedAnswer": { "@type": "Answer", "text": "Most buyers start seeing pretty quickly that Falcon feels more spread out and more varied than they expected. It usually gets easier to understand in person than it does online." } },
          { "@type": "Question", "name": "What makes Falcon different from Banning Lewis Ranch?", "acceptedAnswer": { "@type": "Answer", "text": "Banning Lewis Ranch usually feels more like a neighborhood decision. Falcon usually feels more like a broader area decision with more range in how it lives." } },
          { "@type": "Question", "name": "What kind of buyer usually ends up choosing Falcon?", "acceptedAnswer": { "@type": "Answer", "text": "Usually it is someone who wants more room, is okay being farther out, and wants the east-side trade to stay in play." } },
          { "@type": "Question", "name": "Who usually moves on from Falcon?", "acceptedAnswer": { "@type": "Answer", "text": "Usually it is a buyer who wants the city to feel closer, wants the easiest all-around setup, or already knows the extra driving sounds like a downside." } },
          { "@type": "Question", "name": "Is Falcon rural or suburban?", "acceptedAnswer": { "@type": "Answer", "text": "Both, depending on where you are looking. That is part of why the area works for some buyers and not for others." } },
          { "@type": "Question", "name": "Is Falcon mostly Meridian Ranch?", "acceptedAnswer": { "@type": "Answer", "text": "No. Meridian Ranch is one important part of the Falcon conversation, but Falcon is broader than Meridian Ranch." } },
          { "@type": "Question", "name": "How does Falcon compare with Briargate?", "acceptedAnswer": { "@type": "Answer", "text": "Briargate usually makes more sense when someone wants broad north-side convenience. Falcon usually makes more sense when someone wants more room and is willing to be farther out for it." } },
          { "@type": "Question", "name": "Is Falcon a good relocation area?", "acceptedAnswer": { "@type": "Answer", "text": "Usually yes, if the buyer already knows they are open to the east side and wants more room than they are likely to find in a lot of the city." } },
          { "@type": "Question", "name": "What are the biggest tradeoffs that come with Falcon?", "acceptedAnswer": { "@type": "Answer", "text": "Usually more driving, less central convenience, and the need to get more specific about which part of Falcon actually fits you." } },
          { "@type": "Question", "name": "Why does Falcon keep coming up for buyers who want more space?", "acceptedAnswer": { "@type": "Answer", "text": "Because it solves that problem well. It gives buyers more room and a broader east-side range than they usually get in the city itself." } }
        ]
      },
      buildBreadcrumbSchema([
        { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
        { "@type": "ListItem", position: 2, name: "Colorado Springs", item: "https://myrockhomes.com/colorado-springs-co-homes-for-sale" },
        { "@type": "ListItem", position: 3, name: "Living in Falcon, CO: Real Estate, Tradeoffs, and What It's Like", item: 'https://myrockhomes.com/falcon-co-real-estate/' },
      ]),
    ],
    slug: 'falcon-co-real-estate',
  });
  const _injectedHtml = injectSeoHead(prerenderedShell, _seoBlock, 'https://myrockhomes.com/falcon-co-real-estate/');

  mkdirSync(distOutputDir, { recursive: true });
  writeFileSync(resolve(distOutputDir, "falcon-co-real-estate.html"), prerenderedShell, "utf-8");
  const srcOutputDir = resolve(ROOT, "server/prerendered");
  mkdirSync(srcOutputDir, { recursive: true });
  const srcOutputPath = resolve(srcOutputDir, "falcon-co-real-estate.html");
  writeFileSync(srcOutputPath, _injectedHtml, "utf-8");
  console.log(`[prerender-falcon] Committed artifact written to: ${srcOutputPath}`);
  const written = readFileSync(srcOutputPath, "utf-8");
  const anchorCount = (written.match(/<a\s/g) || []).length;
  const hasH1 = /<h1[\s>]/.test(written);
  const rootNotEmpty = !written.includes('<div id="root"></div>');
  const hasFAQPage = written.includes('"@type":"FAQPage"') || written.includes('"@type": "FAQPage"');
  const hasFAQQ1 = written.includes('What do buyers usually notice once they actually start driving Falcon');
  const hasFAQQ10 = written.includes('Why does Falcon keep coming up for buyers who want more space');
  console.log(`[prerender-falcon] Sanity: rootNotEmpty=${rootNotEmpty}, hasH1=${hasH1}, anchors=${anchorCount}, hasFAQPage=${hasFAQPage}, hasFAQQ1=${hasFAQQ1}, hasFAQQ10=${hasFAQQ10}`);
  if (!rootNotEmpty) throw new Error("[prerender-falcon] FAIL: Root div still empty.");
  if (!hasFAQPage) throw new Error("[prerender-falcon] FAIL: FAQPage schema missing.");
  if (!hasFAQQ1) throw new Error("[prerender-falcon] FAIL: FAQ Q1 missing.");
  if (!hasFAQQ10) throw new Error("[prerender-falcon] FAIL: FAQ Q10 missing.");
  console.log("[prerender-falcon] Done.");
}
prerenderFalcon().catch((err) => {
  console.error("[prerender-falcon] FAILED:", err.message);
  process.exit(1);
});
