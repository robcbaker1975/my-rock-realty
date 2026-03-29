/**
 * IL-27 Selective Prerender Script — /briargate-colorado-springs-real-estate
 * Scope: ONE route only. Do not add other routes.
 */
import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { buildSeoHeadBlock, injectSeoHead, BASE_SCHEMAS, buildBreadcrumbSchema, OG_IMAGE_DEFAULT, OG_IMAGE_MILITARY } from "./seo-inject.mjs";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
async function prerenderBriargate() {
  console.log("[prerender-briargate] Starting SSR build for /briargate-colorado-springs-real-estate...");
  await build({
    root: resolve(ROOT, "client"),
    configFile: resolve(ROOT, "vite.config.ts"),
    build: {
      ssr: resolve(ROOT, "client/src/entry-server-briargate.tsx"),
      outDir: resolve(ROOT, "dist/server"),
      emptyOutDir: false,
      rollupOptions: {
        output: {
          format: "esm",
          entryFileNames: "entry-server-briargate.js",
        },
      },
    },
    css: {},
  });
  console.log("[prerender-briargate] SSR build complete. Rendering HTML...");
  const ssrModule = await import(resolve(ROOT, "dist/server/entry-server-briargate.js"));
  const html = ssrModule.renderBriargateColoradoSpringsRealEstate();
  console.log(`[prerender-briargate] Rendered HTML length: ${html.length} chars`);
  const shellPath = resolve(ROOT, "dist/public/index.html");
  if (!existsSync(shellPath)) {
    throw new Error(`[prerender-briargate] dist/public/index.html not found. Run 'vite build' first.`);
  }
  const shell = readFileSync(shellPath, "utf-8");
  const PLACEHOLDER = '<div id="root"></div>';
  if (!shell.includes(PLACEHOLDER)) {
    throw new Error(`[prerender-briargate] Could not find '${PLACEHOLDER}' in dist/public/index.html.`);
  }
  const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
  const distOutputDir = resolve(ROOT, "dist/prerendered");

  // === SEO_INJECTED ===
  const _seoBlock = buildSeoHeadBlock({
    title: "Living in Briargate, Colorado Springs: Real Estate, Tradeoffs, and What It's Like",
    description: 'Thinking about living in Briargate, Colorado Springs? Learn what Briargate is actually like, who it fits, the real tradeoffs, and how it compares with Northgate, Flying Horse, and Banning Lewis Ranch.',
    canonical: 'https://myrockhomes.com/briargate-colorado-springs-real-estate/',
    ogImage: OG_IMAGE_DEFAULT,
    schemas: [
      ...BASE_SCHEMAS,
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Why do buyers keep Briargate in the search once they start touring homes?", "acceptedAnswer": { "@type": "Answer", "text": "A lot of buyers keep Briargate in the search once they actually start driving it because it usually feels easier to understand in person than it does online. Once you are in Briargate Colorado Springs, things like John Venezia Park, the Promenade Shops at Briargate, Memorial Hospital North, and the bigger north-side roads help people get a feel for how everyday life would work. For a lot of buyers, that starts to matter more than they expected." } },
          { "@type": "Question", "name": "What makes living in Briargate different from living in Northgate?", "acceptedAnswer": { "@type": "Answer", "text": "Living in Briargate usually feels easier if you want more shopping, restaurants, parks, and normal weekly convenience close by. Northgate usually makes more sense if being farther north, being closer to I-25, and being closer to the Air Force Academy matter more. A lot of buyers think Briargate and Northgate are going to feel pretty similar at first, but once they drive both, that usually changes pretty quickly." } },
          { "@type": "Question", "name": "When does Briargate make more sense than Cordera?", "acceptedAnswer": { "@type": "Answer", "text": "Briargate usually starts making more sense than Cordera when a buyer wants something that feels more established and a little more lived in. Cordera usually feels a little newer and a little more planned from the start. Briargate often fits better when someone wants the north side to feel practical and settled instead of newer and more polished." } },
          { "@type": "Question", "name": "How is Briargate different from Flying Horse?", "acceptedAnswer": { "@type": "Answer", "text": "Briargate usually feels more practical, while Flying Horse usually feels more like buyers are choosing it because they want Flying Horse specifically. A lot of buyers looking at Briargate Colorado Springs are really trying to find an area that works well for everyday life. Buyers looking at Flying Horse are often also looking for a stronger neighborhood identity." } },
          { "@type": "Question", "name": "What kind of buyer usually ends up choosing Briargate?", "acceptedAnswer": { "@type": "Answer", "text": "Usually it is a buyer who wants the north side to feel established, convenient, and easier to live in day to day. A lot of the time they want parks, trails, shopping, restaurants, grocery stores, and an area that is not hard to get a feel for once they start driving it. They may not need the quietest area or the most unique area. They usually want an area that works well in real life." } },
          { "@type": "Question", "name": "What kind of buyer usually moves on from Briargate?", "acceptedAnswer": { "@type": "Answer", "text": "Usually it is someone who wants to be closer to the mountains, wants more west-side character, wants something quieter and farther north, or wants a neighborhood with a stronger identity. Some buyers also move on if they want a part of Colorado Springs that feels more unique from one area to the next. Briargate usually stays strongest for buyers who want practicality and convenience." } },
          { "@type": "Question", "name": "Is Briargate more about convenience or character?", "acceptedAnswer": { "@type": "Answer", "text": "Briargate is usually more about convenience than character. That is not a bad thing. For a lot of buyers, that is exactly why it works. Living in Briargate usually means having parks, trails, shopping, grocery stores, restaurants, and places like the Promenade Shops or Chapel Hills close enough to be part of normal life, and that tends to matter more once the search gets real." } },
          { "@type": "Question", "name": "Is Briargate a good fit if I want to stay near the Air Force Academy?", "acceptedAnswer": { "@type": "Answer", "text": "It can be. A lot of buyers looking at homes for sale in Briargate are also trying to stay in a part of town that works for north-side driving and Academy access. If being as far north as possible matters more, Northgate may make more sense. If you want a little more shopping, convenience, and a more established feel while still staying on the north side, Briargate often stays in a strong middle spot." } },
          { "@type": "Question", "name": "What starts to matter about Briargate once the search gets real?", "acceptedAnswer": { "@type": "Answer", "text": "Once the search gets real, a lot of buyers realize Briargate is less about making a big impression and more about how easy it is to live there. Things like John Venezia Park, Cottonwood Creek Park, shopping at the Promenade Shops, nearby healthcare, and the road layout all start mattering more once people picture normal life instead of just looking at listing photos. That is one reason homes for sale in Briargate keep getting attention from serious buyers." } },
          { "@type": "Question", "name": "Why do homes for sale in Briargate keep coming up for north-side buyers?", "acceptedAnswer": { "@type": "Answer", "text": "Homes for sale in Briargate keep coming up because Briargate usually checks a lot of boxes at once. It is established, practical, easier to understand than some other areas, and covers a lot of day to day needs. For buyers trying to narrow down the north side of Colorado Springs, Briargate often stays in the search because it makes everyday life feel simpler." } }
        ]
      },
      buildBreadcrumbSchema([
        { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
        { "@type": "ListItem", position: 2, name: "Colorado Springs", item: "https://myrockhomes.com/colorado-springs-co-homes-for-sale" },
        { "@type": "ListItem", position: 3, name: "Living in Briargate, Colorado Springs: Real Estate, Tradeoffs, and What It's Like", item: 'https://myrockhomes.com/briargate-colorado-springs-real-estate/' },
      ]),
    ],
    slug: 'briargate-colorado-springs-real-estate',
  });
  const _injectedHtml = injectSeoHead(prerenderedShell, _seoBlock, 'https://myrockhomes.com/briargate-colorado-springs-real-estate/');

  mkdirSync(distOutputDir, { recursive: true });
  writeFileSync(resolve(distOutputDir, "briargate-colorado-springs-real-estate.html"), prerenderedShell, "utf-8");
  const srcOutputDir = resolve(ROOT, "server/prerendered");
  mkdirSync(srcOutputDir, { recursive: true });
  const srcOutputPath = resolve(srcOutputDir, "briargate-colorado-springs-real-estate.html");
  writeFileSync(srcOutputPath, _injectedHtml, "utf-8");
  console.log(`[prerender-briargate] Committed artifact written to: ${srcOutputPath}`);
  const written = readFileSync(srcOutputPath, "utf-8");
  const anchorCount = (written.match(/<a\s/g) || []).length;
  const hasH1 = /<h1[\s>]/.test(written);
  const rootNotEmpty = !written.includes('<div id="root"></div>');
  console.log(`[prerender-briargate] Sanity: rootNotEmpty=${rootNotEmpty}, hasH1=${hasH1}, anchors=${anchorCount}`);
  if (!rootNotEmpty) throw new Error("[prerender-briargate] FAIL: Root div still empty.");
  console.log("[prerender-briargate] Done.");
}
prerenderBriargate().catch((err) => {
  console.error("[prerender-briargate] FAILED:", err.message);
  process.exit(1);
});
