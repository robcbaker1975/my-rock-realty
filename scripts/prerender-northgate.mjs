/**
 * IL-28 Selective Prerender Script — /northgate-colorado-springs-real-estate
 * Scope: ONE route only. Do not add other routes.
 */
import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { buildSeoHeadBlock, injectSeoHead, BASE_SCHEMAS, buildBreadcrumbSchema, OG_IMAGE_DEFAULT } from "./seo-inject.mjs";
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
async function prerenderNorthgate() {
  console.log("[prerender-northgate] Starting SSR build for /northgate-colorado-springs-real-estate...");
  await build({
    root: resolve(ROOT, "client"),
    configFile: resolve(ROOT, "vite.config.ts"),
    build: {
      ssr: resolve(ROOT, "client/src/entry-server-northgate.tsx"),
      outDir: resolve(ROOT, "dist/server"),
      emptyOutDir: false,
      rollupOptions: {
        output: {
          format: "esm",
          entryFileNames: "entry-server-northgate.js",
        },
      },
    },
    css: {},
  });
  console.log("[prerender-northgate] SSR build complete. Rendering HTML...");
  const ssrModule = await import(resolve(ROOT, "dist/server/entry-server-northgate.js"));
  const html = ssrModule.renderNorthgateColoradoSpringsRealEstate();
  console.log(`[prerender-northgate] Rendered HTML length: ${html.length} chars`);
  const shellPath = resolve(ROOT, "dist/public/index.html");
  if (!existsSync(shellPath)) {
    throw new Error(`[prerender-northgate] dist/public/index.html not found. Run 'vite build' first.`);
  }
  const shell = readFileSync(shellPath, "utf-8");
  const PLACEHOLDER = '<div id="root"></div>';
  if (!shell.includes(PLACEHOLDER)) {
    throw new Error(`[prerender-northgate] Could not find '${PLACEHOLDER}' in dist/public/index.html.`);
  }
  const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
  const distOutputDir = resolve(ROOT, "dist/prerendered");

  // === SEO_INJECTED ===
  const _seoBlock = buildSeoHeadBlock({
    title: "Living in Northgate, Colorado Springs: Real Estate, Tradeoffs, and What It's Like",
    description: "Thinking about living in Northgate, Colorado Springs? Learn what Northgate is actually like, who it fits, the real tradeoffs, and how it compares with Briargate, Flying Horse, and Interquest.",
    canonical: 'https://myrockhomes.com/northgate-colorado-springs-real-estate/',
    ogImage: OG_IMAGE_DEFAULT,
    schemas: [
      ...BASE_SCHEMAS,
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What do buyers usually notice once they actually start driving Northgate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most buyers start seeing pretty quickly that Northgate is really about being farther north, being closer to I-25, and being closer to the Air Force Academy side of town. It usually gets easier to understand in person than it does online. That is why some buyers keep it in the search once they tour it, and others realize pretty quickly it is not the right fit."
            }
          },
          {
            "@type": "Question",
            "name": "What makes Northgate different from Briargate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Briargate is usually the easier all-around north-side choice. It tends to be better for shopping, errands, restaurants, parks, and the normal week-to-week things people use all the time. Northgate is usually more about where it sits. It makes more sense for buyers who want to be farther north, closer to I-25, and closer to the Air Force Academy. In a lot of spots, it can also feel quieter than Briargate."
            }
          },
          {
            "@type": "Question",
            "name": "What kind of buyer usually ends up choosing Northgate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Usually it is someone who already knows the north end matters and is not just saying that loosely. They may want easier I-25 access. They may want to stay closer to the Air Force Academy side of town. They may want a location that works better for certain drives. They may also be okay giving up some nearby shopping and convenience if the map works better for the way they live."
            }
          },
          {
            "@type": "Question",
            "name": "Who usually decides Northgate is not the right fit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Usually it is a buyer who wants the easiest all-around north-side option, more nearby shopping and restaurants, or a more established neighborhood feel. Some buyers also move on when they realize they do not really need to be that far north. Others start with Northgate because they like the idea of it, then realize Briargate or Flying Horse fits them better once they compare them side by side."
            }
          },
          {
            "@type": "Question",
            "name": "Is Northgate a good fit for military or Air Force Academy-connected buyers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A lot of the time, yes. One of the biggest reasons Northgate stays in the search is that it is close to the Air Force Academy side of town and close to I-25. That is a big part of why this area keeps coming up for buyers who want that side of town to be easier."
            }
          },
          {
            "@type": "Question",
            "name": "Is Northgate a good area for relocation buyers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Usually yes, especially if they already know they want the north side. Northgate is one of those areas that gets easier once you drive it. The value is usually pretty clear: farther north, easier I-25 access, closer to the Academy, and a location that works well for some routines. The main mistake relocation buyers make is assuming all north-side areas feel basically the same. They usually do not."
            }
          },
          {
            "@type": "Question",
            "name": "How is Northgate different from Flying Horse?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Flying Horse usually feels more like a neighborhood people choose because they want Flying Horse specifically. It has a stronger neighborhood identity. Northgate usually feels more like buyers choose it because it is in the right part of town for them. If someone wants a more defined neighborhood identity, Flying Horse may make more sense. If someone cares more about being farther north, staying close to I-25, and being close to the Academy side, Northgate may fit better."
            }
          },
          {
            "@type": "Question",
            "name": "Is Northgate the same thing as Interquest?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. They are related, but they are not the same thing. Interquest is usually about shopping, restaurants, and convenience on that side of town. Northgate is more about where you would actually live. People bring them up together all the time, but they are not talking about the same thing."
            }
          },
          {
            "@type": "Question",
            "name": "What are the biggest tradeoffs that come with buying in Northgate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The biggest tradeoff is usually convenience versus location. Northgate often gives buyers a better north-end position, easier I-25 access, and better proximity to the Air Force Academy. What buyers often give up is some of the nearby shopping, restaurant, and everyday convenience that Briargate does better. Some parts of Northgate can also feel less established."
            }
          },
          {
            "@type": "Question",
            "name": "Why do homes for sale in Northgate keep coming up for north-side buyers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Because Northgate solves a pretty specific problem well. It gives buyers a farther-north option that is close to I-25 and close to the Air Force Academy side of town, and in a lot of places it can feel quieter than some other north-side areas. That is why it stays relevant."
            }
          }
        ]
      },
      buildBreadcrumbSchema([
        { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
        { "@type": "ListItem", position: 2, name: "Colorado Springs", item: "https://myrockhomes.com/colorado-springs-co-homes-for-sale" },
        { "@type": "ListItem", position: 3, name: "Living in Northgate, Colorado Springs: Real Estate, Tradeoffs, and What It's Like", item: 'https://myrockhomes.com/northgate-colorado-springs-real-estate/' },
      ]),
    ],
    slug: 'northgate-colorado-springs-real-estate',
  });
  const _injectedHtml = injectSeoHead(prerenderedShell, _seoBlock, 'https://myrockhomes.com/northgate-colorado-springs-real-estate/');

  mkdirSync(distOutputDir, { recursive: true });
  writeFileSync(resolve(distOutputDir, "northgate-colorado-springs-real-estate.html"), prerenderedShell, "utf-8");
  const srcOutputDir = resolve(ROOT, "server/prerendered");
  mkdirSync(srcOutputDir, { recursive: true });
  const srcOutputPath = resolve(srcOutputDir, "northgate-colorado-springs-real-estate.html");
  writeFileSync(srcOutputPath, _injectedHtml, "utf-8");
  console.log(`[prerender-northgate] Committed artifact written to: ${srcOutputPath}`);
  const written = readFileSync(srcOutputPath, "utf-8");
  const anchorCount = (written.match(/<a\s/g) || []).length;
  const hasH1 = /<h1[\s>]/.test(written);
  const rootNotEmpty = !written.includes('<div id="root"></div>');
  console.log(`[prerender-northgate] Sanity: rootNotEmpty=${rootNotEmpty}, hasH1=${hasH1}, anchors=${anchorCount}`);
  if (!rootNotEmpty) throw new Error("[prerender-northgate] FAIL: Root div still empty.");
  console.log("[prerender-northgate] Done.");
}
prerenderNorthgate().catch((err) => {
  console.error("[prerender-northgate] FAILED:", err.message);
  process.exit(1);
});
