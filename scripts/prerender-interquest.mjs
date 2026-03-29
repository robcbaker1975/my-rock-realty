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
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What do buyers usually mean when they say they want to be near Interquest?", "acceptedAnswer": { "@type": "Answer", "text": "Most of the time, they mean they want shopping, restaurants, entertainment, and everyday convenience on the north side. They usually do not mean Interquest is the only place they want to live. They mean they want that part of town to be easy to use." } },
          { "@type": "Question", "name": "Is Interquest a neighborhood in Colorado Springs?", "acceptedAnswer": { "@type": "Answer", "text": "Not really in the same way Briargate or Flying Horse are. Interquest is more useful as a location and convenience reference point on the north side." } },
          { "@type": "Question", "name": "Why does Interquest keep coming up when buyers look at Northgate and Flying Horse?", "acceptedAnswer": { "@type": "Answer", "text": "Because it helps explain the convenience side of that part of town. Buyers looking at Northgate or Flying Horse often want to know what is nearby for shopping, dining, entertainment, and normal day-to-day errands. Interquest is one of the main answers to that question." } },
          { "@type": "Question", "name": "Is Interquest the same thing as Northgate?", "acceptedAnswer": { "@type": "Answer", "text": "No. They are related, but they are not the same thing. Interquest is usually about shopping, restaurants, and convenience on that side of town. Northgate is more about where you would actually live. People bring them up together all the time, but they are not talking about the same thing." } },
          { "@type": "Question", "name": "Who should care most about being near Interquest?", "acceptedAnswer": { "@type": "Answer", "text": "Usually buyers who want the north side to feel easy and want shopping, restaurants, entertainment, and services nearby. It matters less to buyers who are choosing mainly for neighborhood identity and more to buyers who care about how daily errands and outings are going to work." } },
          { "@type": "Question", "name": "Is being near Interquest good for relocation buyers?", "acceptedAnswer": { "@type": "Answer", "text": "Usually yes, at least as an orientation tool. It helps relocation buyers understand one of the main convenience hubs on the north side. It should still be paired with a real residential comparison before they decide where to live." } },
          { "@type": "Question", "name": "Is Interquest close to the Air Force Academy?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. It is part of the same general north-side conversation around the Academy, Northgate, and nearby areas, which is one reason it keeps coming up for buyers looking in that part of town." } },
          { "@type": "Question", "name": "Does Interquest have more shopping and entertainment than Northgate?", "acceptedAnswer": { "@type": "Answer", "text": "As a reference point, yes. That is usually the whole reason buyers talk about it. Interquest is more tied to shopping, restaurants, and entertainment. Northgate is more tied to the residential side of the decision." } },
          { "@type": "Question", "name": "Should buyers compare Interquest with Briargate?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, but not as a one-to-one residential comparison. Briargate is the stronger residential-area conversation. Interquest is the stronger convenience conversation. The better comparison is usually Briargate versus Northgate or Briargate versus Flying Horse, with Interquest helping explain what is nearby." } },
          { "@type": "Question", "name": "What is the biggest mistake buyers make with Interquest?", "acceptedAnswer": { "@type": "Answer", "text": "Treating it like it answers the whole residential question. Usually it does not. It helps explain convenience. It does not replace choosing the right nearby neighborhood." } }
        ]
      },
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
