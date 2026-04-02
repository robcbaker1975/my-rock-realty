/**
 * prerender-all.mjs — Consolidated prerender runner.
 *
 * Replaces 96 sequential individual prerender scripts with a single Vite SSR build
 * that compiles all 96 entry-server files in one pass, then renders and writes each
 * output in the same Node.js process.
 *
 * Before: 96 × `vite build` calls (one per route) — 16–48 min estimated build time
 * After:  1 × `vite build` call with 96 inputs — materially reduced build time
 *
 * Coverage: All 96 routes from the original build command are preserved.
 * Output: Same files written to dist/prerendered/ and server/prerendered/ as before.
 * SEO: All per-route SEO injection blocks preserved exactly.
 *
 * DO NOT add new routes here directly. Add a new entry-server-*.tsx file and
 * add the entry to the input map and route block below, then update package.json.
 */
import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { buildSeoHeadBlock, injectSeoHead, BASE_SCHEMAS, buildBreadcrumbSchema, OG_IMAGE_DEFAULT, OG_IMAGE_MILITARY } from "./seo-inject.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

async function prerenderAll() {
  console.log("[prerender-all] Starting consolidated SSR build for 96 routes...");

  // STEP 1: Single Vite SSR build with all 96 entry-server files as inputs
  await build({
    root: resolve(ROOT, "client"),
    configFile: resolve(ROOT, "vite.config.ts"),
    build: {
      ssr: true,
      outDir: resolve(ROOT, "dist/server"),
      emptyOutDir: false,
      rollupOptions: {
        input: {
  "entry-server-denver": resolve(ROOT, "client/src/entry-server-denver.tsx"),
  "entry-server-colorado-springs": resolve(ROOT, "client/src/entry-server-colorado-springs.tsx"),
  "entry-server-boulder": resolve(ROOT, "client/src/entry-server-boulder.tsx"),
  "entry-server-black-forest": resolve(ROOT, "client/src/entry-server-black-forest.tsx"),
  "entry-server-peyton": resolve(ROOT, "client/src/entry-server-peyton.tsx"),
  "entry-server-palmer-lake": resolve(ROOT, "client/src/entry-server-palmer-lake.tsx"),
  "entry-server-parker": resolve(ROOT, "client/src/entry-server-parker.tsx"),
  "entry-server-highlands-ranch": resolve(ROOT, "client/src/entry-server-highlands-ranch.tsx"),
  "entry-server-castle-rock": resolve(ROOT, "client/src/entry-server-castle-rock.tsx"),
  "entry-server-littleton": resolve(ROOT, "client/src/entry-server-littleton.tsx"),
  "entry-server-arvada": resolve(ROOT, "client/src/entry-server-arvada.tsx"),
  "entry-server-fort-collins": resolve(ROOT, "client/src/entry-server-fort-collins.tsx"),
  "entry-server-loveland": resolve(ROOT, "client/src/entry-server-loveland.tsx"),
  "entry-server-windsor": resolve(ROOT, "client/src/entry-server-windsor.tsx"),
  "entry-server-johnstown": resolve(ROOT, "client/src/entry-server-johnstown.tsx"),
  "entry-server-greeley": resolve(ROOT, "client/src/entry-server-greeley.tsx"),
  "entry-server-douglas": resolve(ROOT, "client/src/entry-server-douglas.tsx"),
  "entry-server-castle-pines": resolve(ROOT, "client/src/entry-server-castle-pines.tsx"),
  "entry-server-centennial": resolve(ROOT, "client/src/entry-server-centennial.tsx"),
  "entry-server-lone-tree": resolve(ROOT, "client/src/entry-server-lone-tree.tsx"),
  "entry-server-westminster": resolve(ROOT, "client/src/entry-server-westminster.tsx"),
  "entry-server-monument": resolve(ROOT, "client/src/entry-server-monument.tsx"),
  "entry-server-falcon": resolve(ROOT, "client/src/entry-server-falcon.tsx"),
  "entry-server-fountain": resolve(ROOT, "client/src/entry-server-fountain.tsx"),
  "entry-server-woodland-park": resolve(ROOT, "client/src/entry-server-woodland-park.tsx"),
  "entry-server-manitou-springs": resolve(ROOT, "client/src/entry-server-manitou-springs.tsx"),
  "entry-server-briargate": resolve(ROOT, "client/src/entry-server-briargate.tsx"),
  "entry-server-northgate": resolve(ROOT, "client/src/entry-server-northgate.tsx"),
  "entry-server-flying-horse": resolve(ROOT, "client/src/entry-server-flying-horse.tsx"),
  "entry-server-cordera": resolve(ROOT, "client/src/entry-server-cordera.tsx"),
  "entry-server-pine-creek": resolve(ROOT, "client/src/entry-server-pine-creek.tsx"),
  "entry-server-mountain-shadows": resolve(ROOT, "client/src/entry-server-mountain-shadows.tsx"),
  "entry-server-peregrine": resolve(ROOT, "client/src/entry-server-peregrine.tsx"),
  "entry-server-old-colorado-city": resolve(ROOT, "client/src/entry-server-old-colorado-city.tsx"),
  "entry-server-old-north-end": resolve(ROOT, "client/src/entry-server-old-north-end.tsx"),
  "entry-server-broadmoor-cheyenne-mountain": resolve(ROOT, "client/src/entry-server-broadmoor-cheyenne-mountain.tsx"),
  "entry-server-wash-park": resolve(ROOT, "client/src/entry-server-wash-park.tsx"),
  "entry-server-cherry-creek": resolve(ROOT, "client/src/entry-server-cherry-creek.tsx"),
  "entry-server-lohi": resolve(ROOT, "client/src/entry-server-lohi.tsx"),
  "entry-server-rino": resolve(ROOT, "client/src/entry-server-rino.tsx"),
  "entry-server-central-park": resolve(ROOT, "client/src/entry-server-central-park.tsx"),
  "entry-server-adams-co": resolve(ROOT, "client/src/entry-server-adams-co.tsx"),
  "entry-server-commerce-city": resolve(ROOT, "client/src/entry-server-commerce-city.tsx"),
  "entry-server-brighton-co": resolve(ROOT, "client/src/entry-server-brighton-co.tsx"),
  "entry-server-thornton-co": resolve(ROOT, "client/src/entry-server-thornton-co.tsx"),
  "entry-server-northglenn-co": resolve(ROOT, "client/src/entry-server-northglenn-co.tsx"),
  "entry-server-buying-a-home-in-denver": resolve(ROOT, "client/src/entry-server-buying-a-home-in-denver.tsx"),
  "entry-server-first-time-home-buyer-denver": resolve(ROOT, "client/src/entry-server-first-time-home-buyer-denver.tsx"),
  "entry-server-denver-home-buying-process": resolve(ROOT, "client/src/entry-server-denver-home-buying-process.tsx"),
  "entry-server-cost-of-living-in-denver-colorado": resolve(ROOT, "client/src/entry-server-cost-of-living-in-denver-colorado.tsx"),
  "entry-server-relocating-to-denver-colorado": resolve(ROOT, "client/src/entry-server-relocating-to-denver-colorado.tsx"),
  "entry-server-fort-collins-homes": resolve(ROOT, "client/src/entry-server-fort-collins-homes.tsx"),
  "entry-server-greeley-homes": resolve(ROOT, "client/src/entry-server-greeley-homes.tsx"),
  "entry-server-evans-co": resolve(ROOT, "client/src/entry-server-evans-co.tsx"),
  "entry-server-platteville-co": resolve(ROOT, "client/src/entry-server-platteville-co.tsx"),
  "entry-server-lasalle-co": resolve(ROOT, "client/src/entry-server-lasalle-co.tsx"),
  "entry-server-sloan-lake": resolve(ROOT, "client/src/entry-server-sloan-lake.tsx"),
  "entry-server-jefferson-co": resolve(ROOT, "client/src/entry-server-jefferson-co.tsx"),
  "entry-server-golden": resolve(ROOT, "client/src/entry-server-golden.tsx"),
  "entry-server-lakewood": resolve(ROOT, "client/src/entry-server-lakewood.tsx"),
  "entry-server-morrison": resolve(ROOT, "client/src/entry-server-morrison.tsx"),
  "entry-server-military-relocation": resolve(ROOT, "client/src/entry-server-military-relocation.tsx"),
  "entry-server-pcs-colorado": resolve(ROOT, "client/src/entry-server-pcs-colorado.tsx"),
  "entry-server-fort-carson": resolve(ROOT, "client/src/entry-server-fort-carson.tsx"),
  "entry-server-peterson-space-force-base": resolve(ROOT, "client/src/entry-server-peterson-space-force-base.tsx"),
  "entry-server-schriever-space-force-base": resolve(ROOT, "client/src/entry-server-schriever-space-force-base.tsx"),
  "entry-server-va-home-loans-colorado": resolve(ROOT, "client/src/entry-server-va-home-loans-colorado.tsx"),
  "entry-server-buckley-space-force-base": resolve(ROOT, "client/src/entry-server-buckley-space-force-base.tsx"),
  "entry-server-us-air-force-academy": resolve(ROOT, "client/src/entry-server-us-air-force-academy.tsx"),
  "entry-server-military-spouses-buying-colorado": resolve(ROOT, "client/src/entry-server-military-spouses-buying-colorado.tsx"),
  "entry-server-veterans-buying-colorado": resolve(ROOT, "client/src/entry-server-veterans-buying-colorado.tsx"),
  "entry-server-pcs-timeline-checklist": resolve(ROOT, "client/src/entry-server-pcs-timeline-checklist.tsx"),
  "entry-server-temporary-housing-colorado-springs": resolve(ROOT, "client/src/entry-server-temporary-housing-colorado-springs.tsx"),
  "entry-server-remote-home-tours": resolve(ROOT, "client/src/entry-server-remote-home-tours.tsx"),
  "entry-server-pcs-relocation-tour-support": resolve(ROOT, "client/src/entry-server-pcs-relocation-tour-support.tsx"),
  "entry-server-best-communities-near-fort-carson": resolve(ROOT, "client/src/entry-server-best-communities-near-fort-carson.tsx"),
  "entry-server-best-communities-near-peterson-space-force-base": resolve(ROOT, "client/src/entry-server-best-communities-near-peterson-space-force-base.tsx"),
  "entry-server-best-communities-near-schriever-space-force-base": resolve(ROOT, "client/src/entry-server-best-communities-near-schriever-space-force-base.tsx"),
  "entry-server-best-communities-near-buckley-space-force-base": resolve(ROOT, "client/src/entry-server-best-communities-near-buckley-space-force-base.tsx"),
  "entry-server-moving-to-colorado-springs": resolve(ROOT, "client/src/entry-server-moving-to-colorado-springs.tsx"),
  "entry-server-widefield-co-homes-for-sale": resolve(ROOT, "client/src/entry-server-widefield-co-homes-for-sale.tsx"),
  "entry-server-banning-lewis-ranch": resolve(ROOT, "client/src/entry-server-banning-lewis-ranch.tsx"),
  "entry-server-calhan": resolve(ROOT, "client/src/entry-server-calhan.tsx"),
  "entry-server-boulder-homes": resolve(ROOT, "client/src/entry-server-boulder-homes.tsx"),
  "entry-server-longmont": resolve(ROOT, "client/src/entry-server-longmont.tsx"),
  "entry-server-lafayette": resolve(ROOT, "client/src/entry-server-lafayette.tsx"),
  "entry-server-niwot": resolve(ROOT, "client/src/entry-server-niwot.tsx"),
  "entry-server-denver-condos": resolve(ROOT, "client/src/entry-server-denver-condos.tsx"),
  "entry-server-denver-townhomes": resolve(ROOT, "client/src/entry-server-denver-townhomes.tsx"),
  "entry-server-denver-luxury": resolve(ROOT, "client/src/entry-server-denver-luxury.tsx"),
  "entry-server-denver-new-construction": resolve(ROOT, "client/src/entry-server-denver-new-construction.tsx"),
  "entry-server-adams-county-vs-jefferson-county": resolve(ROOT, "client/src/entry-server-adams-county-vs-jefferson-county.tsx"),
  "entry-server-douglas-county-vs-weld-county": resolve(ROOT, "client/src/entry-server-douglas-county-vs-weld-county.tsx"),
  "entry-server-boulder-vs-fort-collins": resolve(ROOT, "client/src/entry-server-boulder-vs-fort-collins.tsx"),
  "entry-server-denver-market-report-2025": resolve(ROOT, "client/src/entry-server-denver-market-report-2025.tsx"),
  "entry-server-denver-vs-colorado-springs": resolve(ROOT, "client/src/entry-server-denver-vs-colorado-springs.tsx"),
        },
        output: {
          format: "esm",
          entryFileNames: "[name].js",
        },
      },
    },
    css: {},
    logLevel: "warn",
  });

  console.log("[prerender-all] SSR build complete. Rendering all 96 routes...");

  // STEP 2: Read the client shell (built by vite build step before this script runs)
  const shellPath = resolve(ROOT, "dist/public/index.html");
  if (!existsSync(shellPath)) {
    throw new Error("[prerender-all] dist/public/index.html not found. Run vite build first.");
  }
  const shell = readFileSync(shellPath, "utf-8");
  const PLACEHOLDER = '<div id="root"></div>';
  if (!shell.includes(PLACEHOLDER)) {
    throw new Error("[prerender-all] Placeholder not found in dist/public/index.html.");
  }

  // Output directories
  const distPrerenderedDir = resolve(ROOT, "dist/prerendered");
  const serverPrerenderedDir = resolve(ROOT, "server/prerendered");
  // Aliases used by embedded SEO blocks from older scripts
  const distOutputDir = distPrerenderedDir;
  mkdirSync(distPrerenderedDir, { recursive: true });
  mkdirSync(serverPrerenderedDir, { recursive: true });

  // STEP 3: Render and write each route
  // --- denver ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-denver.js"));
    const html = ssrMod.renderDenverHomesForSale();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "denver-homes-for-sale.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "denver-homes-for-sale.html"), prerenderedShell, "utf-8");
    const written_denver = readFileSync(resolve(serverPrerenderedDir, "denver-homes-for-sale.html"), "utf-8");
    if (written_denver.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for denver");
    console.log("[prerender-all] Done: denver");
  }

  // --- colorado-springs ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-colorado-springs.js"));
    const html = ssrMod.renderColoradoSpringsCoHomesForSale();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    const distOutputPath = resolve(distOutputDir, "colorado-springs-co-homes-for-sale.html"); // alias for SEO block compatibility
    // SEO injection
    // === SEO_INJECTED ===
      const _seoBlock = buildSeoHeadBlock({
        title: 'Colorado Springs, CO Homes for Sale | My Rock Realty',
        description: 'Searching for homes for sale in Colorado Springs? Start with a clearer search strategy — budget, part of town, and what the tradeoffs actually are.',
        canonical: 'https://myrockhomes.com/colorado-springs-co-homes-for-sale',
        ogImage: OG_IMAGE_DEFAULT,
        schemas: [
          ...BASE_SCHEMAS,
          buildBreadcrumbSchema([
            { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
            { "@type": "ListItem", position: 2, name: "Colorado Springs", item: "https://myrockhomes.com/colorado-springs-co-homes-for-sale" },
            { "@type": "ListItem", position: 3, name: 'Colorado Springs, CO Homes for Sale', item: 'https://myrockhomes.com/colorado-springs-co-homes-for-sale' },
          ]),
        ],
        slug: 'colorado-springs-co-homes-for-sale',
      });
      const _injectedHtml = injectSeoHead(prerenderedShell, _seoBlock, 'https://myrockhomes.com/colorado-springs-co-homes-for-sale');

      mkdirSync(distOutputDir, { recursive: true });
      writeFileSync(distOutputPath, _injectedHtml, "utf-8");
      console.log(`[prerender-colorado-springs] Prerendered file written to: ${distOutputPath}`);

      // Step 5b: Also write to server/prerendered/ (committed to git, primary path for Render)
      const srcOutputDir = resolve(ROOT, "server/prerendered");
      const srcOutputPath = resolve(srcOutputDir, "colorado-springs-co-homes-for-sale.html");
      mkdirSync(srcOutputDir, { recursive: true });
      writeFileSync(srcOutputPath, _injectedHtml, "utf-8");
    const written_colorado_springs = readFileSync(resolve(serverPrerenderedDir, "colorado-springs-co-homes-for-sale.html"), "utf-8");
    if (written_colorado_springs.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for colorado-springs");
    console.log("[prerender-all] Done: colorado-springs");
  }

  // --- boulder ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-boulder.js"));
    const html = ssrMod.renderBoulderCoHomesForSale();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "boulder-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "boulder-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    const written_boulder = readFileSync(resolve(serverPrerenderedDir, "boulder-co-homes-for-sale.html"), "utf-8");
    if (written_boulder.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for boulder");
    console.log("[prerender-all] Done: boulder");
  }

  // --- black-forest ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-black-forest.js"));
    const html = ssrMod.renderBlackForestCoRealEstate();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "black-forest-co-real-estate.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "black-forest-co-real-estate.html"), prerenderedShell, "utf-8");
    const written_black_forest = readFileSync(resolve(serverPrerenderedDir, "black-forest-co-real-estate.html"), "utf-8");
    if (written_black_forest.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for black-forest");
    console.log("[prerender-all] Done: black-forest");
  }

  // --- peyton ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-peyton.js"));
    const html = ssrMod.renderPeytonCoRealEstate();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "peyton-co-real-estate.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "peyton-co-real-estate.html"), prerenderedShell, "utf-8");
    const written_peyton = readFileSync(resolve(serverPrerenderedDir, "peyton-co-real-estate.html"), "utf-8");
    if (written_peyton.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for peyton");
    console.log("[prerender-all] Done: peyton");
  }

  // --- palmer-lake ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-palmer-lake.js"));
    const html = ssrMod.renderPalmerLakeCoRealEstate();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "palmer-lake-co-real-estate.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "palmer-lake-co-real-estate.html"), prerenderedShell, "utf-8");
    const written_palmer_lake = readFileSync(resolve(serverPrerenderedDir, "palmer-lake-co-real-estate.html"), "utf-8");
    if (written_palmer_lake.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for palmer-lake");
    console.log("[prerender-all] Done: palmer-lake");
  }

  // --- parker ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-parker.js"));
    const html = ssrMod.renderParkerCoHomesForSale();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "parker-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "parker-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    const written_parker = readFileSync(resolve(serverPrerenderedDir, "parker-co-homes-for-sale.html"), "utf-8");
    if (written_parker.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for parker");
    console.log("[prerender-all] Done: parker");
  }

  // --- highlands-ranch ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-highlands-ranch.js"));
    const html = ssrMod.renderHighlandsRanchCoHomesForSale();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "highlands-ranch-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "highlands-ranch-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    const written_highlands_ranch = readFileSync(resolve(serverPrerenderedDir, "highlands-ranch-co-homes-for-sale.html"), "utf-8");
    if (written_highlands_ranch.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for highlands-ranch");
    console.log("[prerender-all] Done: highlands-ranch");
  }

  // --- castle-rock ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-castle-rock.js"));
    const html = ssrMod.renderCastleRockCoHomesForSale();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "castle-rock-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "castle-rock-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    const written_castle_rock = readFileSync(resolve(serverPrerenderedDir, "castle-rock-co-homes-for-sale.html"), "utf-8");
    if (written_castle_rock.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for castle-rock");
    console.log("[prerender-all] Done: castle-rock");
  }

  // --- littleton ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-littleton.js"));
    const html = ssrMod.renderLittletonCoHomesForSale();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "littleton-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "littleton-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    const written_littleton = readFileSync(resolve(serverPrerenderedDir, "littleton-co-homes-for-sale.html"), "utf-8");
    if (written_littleton.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for littleton");
    console.log("[prerender-all] Done: littleton");
  }

  // --- arvada ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-arvada.js"));
    const html = ssrMod.renderArvadaCoHomesForSale();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "arvada-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "arvada-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    const written_arvada = readFileSync(resolve(serverPrerenderedDir, "arvada-co-homes-for-sale.html"), "utf-8");
    if (written_arvada.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for arvada");
    console.log("[prerender-all] Done: arvada");
  }

  // --- fort-collins ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-fort-collins.js"));
    const html = ssrMod.renderFortCollinsCoHomesForSale();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "fort-collins-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "fort-collins-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    const written_fort_collins = readFileSync(resolve(serverPrerenderedDir, "fort-collins-co-homes-for-sale.html"), "utf-8");
    if (written_fort_collins.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for fort-collins");
    console.log("[prerender-all] Done: fort-collins");
  }

  // --- loveland ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-loveland.js"));
    const html = ssrMod.renderLovelandCoHomesForSale();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "loveland-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "loveland-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    const written_loveland = readFileSync(resolve(serverPrerenderedDir, "loveland-co-homes-for-sale.html"), "utf-8");
    if (written_loveland.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for loveland");
    console.log("[prerender-all] Done: loveland");
  }

  // --- windsor ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-windsor.js"));
    const html = ssrMod.renderWindsorCoHomesForSale();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "windsor-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "windsor-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    const written_windsor = readFileSync(resolve(serverPrerenderedDir, "windsor-co-homes-for-sale.html"), "utf-8");
    if (written_windsor.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for windsor");
    console.log("[prerender-all] Done: windsor");
  }

  // --- johnstown ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-johnstown.js"));
    const html = ssrMod.renderJohnstownCoHomesForSale();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "johnstown-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "johnstown-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    const written_johnstown = readFileSync(resolve(serverPrerenderedDir, "johnstown-co-homes-for-sale.html"), "utf-8");
    if (written_johnstown.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for johnstown");
    console.log("[prerender-all] Done: johnstown");
  }

  // --- greeley ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-greeley.js"));
    const html = ssrMod.renderGreeleyCoHomesForSale();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "greeley-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "greeley-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    const written_greeley = readFileSync(resolve(serverPrerenderedDir, "greeley-co-homes-for-sale.html"), "utf-8");
    if (written_greeley.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for greeley");
    console.log("[prerender-all] Done: greeley");
  }

  // --- douglas ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-douglas.js"));
    const html = ssrMod.renderDouglasCoHomesForSale();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "douglas-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "douglas-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    const written_douglas = readFileSync(resolve(serverPrerenderedDir, "douglas-co-homes-for-sale.html"), "utf-8");
    if (written_douglas.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for douglas");
    console.log("[prerender-all] Done: douglas");
  }

  // --- castle-pines ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-castle-pines.js"));
    const html = ssrMod.renderCastlePinesCoHomesForSale();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "castle-pines-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "castle-pines-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    const written_castle_pines = readFileSync(resolve(serverPrerenderedDir, "castle-pines-co-homes-for-sale.html"), "utf-8");
    if (written_castle_pines.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for castle-pines");
    console.log("[prerender-all] Done: castle-pines");
  }

  // --- centennial ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-centennial.js"));
    const html = ssrMod.renderCentennialCoHomesForSale();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "centennial-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "centennial-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    const written_centennial = readFileSync(resolve(serverPrerenderedDir, "centennial-co-homes-for-sale.html"), "utf-8");
    if (written_centennial.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for centennial");
    console.log("[prerender-all] Done: centennial");
  }

  // --- lone-tree ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-lone-tree.js"));
    const html = ssrMod.renderLoneTreeCoHomesForSale();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "lone-tree-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "lone-tree-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    const written_lone_tree = readFileSync(resolve(serverPrerenderedDir, "lone-tree-co-homes-for-sale.html"), "utf-8");
    if (written_lone_tree.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for lone-tree");
    console.log("[prerender-all] Done: lone-tree");
  }

  // --- westminster ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-westminster.js"));
    const html = ssrMod.renderWestminsterCoHomesForSale();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "westminster-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "westminster-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    const written_westminster = readFileSync(resolve(serverPrerenderedDir, "westminster-co-homes-for-sale.html"), "utf-8");
    if (written_westminster.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for westminster");
    console.log("[prerender-all] Done: westminster");
  }

  // --- monument ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-monument.js"));
    const html = ssrMod.renderMonumentCoRealEstate();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "monument-co-real-estate.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "monument-co-real-estate.html"), prerenderedShell, "utf-8");
    const written_monument = readFileSync(resolve(serverPrerenderedDir, "monument-co-real-estate.html"), "utf-8");
    if (written_monument.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for monument");
    console.log("[prerender-all] Done: monument");
  }

  // --- falcon ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-falcon.js"));
    const html = ssrMod.renderFalconCoRealEstate();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    // SEO injection
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
    const written_falcon = readFileSync(resolve(serverPrerenderedDir, "falcon-co-real-estate.html"), "utf-8");
    if (written_falcon.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for falcon");
    console.log("[prerender-all] Done: falcon");
  }

  // --- fountain ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-fountain.js"));
    const html = ssrMod.renderFountainCoRealEstate();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "fountain-co-real-estate.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "fountain-co-real-estate.html"), prerenderedShell, "utf-8");
    const written_fountain = readFileSync(resolve(serverPrerenderedDir, "fountain-co-real-estate.html"), "utf-8");
    if (written_fountain.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for fountain");
    console.log("[prerender-all] Done: fountain");
  }

  // --- woodland-park ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-woodland-park.js"));
    const html = ssrMod.renderWoodlandParkCoRealEstate();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "woodland-park-co-real-estate.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "woodland-park-co-real-estate.html"), prerenderedShell, "utf-8");
    const written_woodland_park = readFileSync(resolve(serverPrerenderedDir, "woodland-park-co-real-estate.html"), "utf-8");
    if (written_woodland_park.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for woodland-park");
    console.log("[prerender-all] Done: woodland-park");
  }

  // --- manitou-springs ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-manitou-springs.js"));
    const html = ssrMod.renderManitouSpringsCoRealEstate();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    // SEO injection
    // === SEO_INJECTED ===
      const _seoBlock = buildSeoHeadBlock({
        title: 'Manitou Springs, CO Real Estate | Living in Manitou Springs | My Rock Realty',
        description: 'Manitou Springs offers one of the most distinct, town-like, mountain-edge living options near Colorado Springs. Here is what the search usually looks like.',
        canonical: 'https://myrockhomes.com/manitou-springs-co-real-estate/',
        ogImage: OG_IMAGE_DEFAULT,
        schemas: [
          ...BASE_SCHEMAS,
          buildBreadcrumbSchema([
            { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
            { "@type": "ListItem", position: 2, name: "Colorado Springs", item: "https://myrockhomes.com/colorado-springs-co-homes-for-sale" },
            { "@type": "ListItem", position: 3, name: 'Manitou Springs, CO Real Estate', item: 'https://myrockhomes.com/manitou-springs-co-real-estate/' },
          ]),
        ],
        slug: 'manitou-springs-co-real-estate',
      });
      const _injectedHtml = injectSeoHead(prerenderedShell, _seoBlock, 'https://myrockhomes.com/manitou-springs-co-real-estate/');

      mkdirSync(distOutputDir, { recursive: true });
      writeFileSync(resolve(distOutputDir, "manitou-springs-co-real-estate.html"), prerenderedShell, "utf-8");
      const srcOutputDir = resolve(ROOT, "server/prerendered");
      mkdirSync(srcOutputDir, { recursive: true });
      const srcOutputPath = resolve(srcOutputDir, "manitou-springs-co-real-estate.html");
      writeFileSync(srcOutputPath, _injectedHtml, "utf-8");
    const written_manitou_springs = readFileSync(resolve(serverPrerenderedDir, "manitou-springs-co-real-estate.html"), "utf-8");
    if (written_manitou_springs.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for manitou-springs");
    console.log("[prerender-all] Done: manitou-springs");
  }

  // --- briargate ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-briargate.js"));
    const html = ssrMod.renderBriargateColoradoSpringsRealEstate();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    // SEO injection
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
    const written_briargate = readFileSync(resolve(serverPrerenderedDir, "briargate-colorado-springs-real-estate.html"), "utf-8");
    if (written_briargate.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for briargate");
    console.log("[prerender-all] Done: briargate");
  }

  // --- northgate ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-northgate.js"));
    const html = ssrMod.renderNorthgateColoradoSpringsRealEstate();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    // SEO injection
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
    const written_northgate = readFileSync(resolve(serverPrerenderedDir, "northgate-colorado-springs-real-estate.html"), "utf-8");
    if (written_northgate.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for northgate");
    console.log("[prerender-all] Done: northgate");
  }

  // --- flying-horse ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-flying-horse.js"));
    const html = ssrMod.renderFlyingHorseColoradoSpringsRealEstate();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    // SEO injection
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
    const written_flying_horse = readFileSync(resolve(serverPrerenderedDir, "flying-horse-colorado-springs-real-estate.html"), "utf-8");
    if (written_flying_horse.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for flying-horse");
    console.log("[prerender-all] Done: flying-horse");
  }

  // --- cordera ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-cordera.js"));
    const html = ssrMod.renderCorderaColoradoSpringsRealEstate();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    // SEO injection
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
    const written_cordera = readFileSync(resolve(serverPrerenderedDir, "cordera-colorado-springs-real-estate.html"), "utf-8");
    if (written_cordera.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for cordera");
    console.log("[prerender-all] Done: cordera");
  }

  // --- pine-creek ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-pine-creek.js"));
    const html = ssrMod.renderPineCreekColoradoSpringsRealEstate();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    // SEO injection
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
    const written_pine_creek = readFileSync(resolve(serverPrerenderedDir, "pine-creek-colorado-springs-real-estate.html"), "utf-8");
    if (written_pine_creek.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for pine-creek");
    console.log("[prerender-all] Done: pine-creek");
  }

  // --- mountain-shadows ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-mountain-shadows.js"));
    const html = ssrMod.renderMountainShadowsColoradoSpringsRealEstate();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    // SEO injection
    // === SEO_INJECTED ===
      const _seoBlock = buildSeoHeadBlock({
        title: "Living in Mountain Shadows, Colorado Springs: Real Estate, Tradeoffs, and What It's Like",
        description: 'Thinking about living in Mountain Shadows, Colorado Springs? Learn what Mountain Shadows is actually like, who it fits, the real tradeoffs, and how it compares with other westside neighborhoods.',
        canonical: 'https://myrockhomes.com/mountain-shadows-colorado-springs-real-estate/',
        ogImage: OG_IMAGE_DEFAULT,
        schemas: [
          ...BASE_SCHEMAS,
          buildBreadcrumbSchema([
            { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
            { "@type": "ListItem", position: 2, name: "Colorado Springs", item: "https://myrockhomes.com/colorado-springs-co-homes-for-sale" },
            { "@type": "ListItem", position: 3, name: "Living in Mountain Shadows, Colorado Springs: Real Estate, Tradeoffs, and What It's Like", item: 'https://myrockhomes.com/mountain-shadows-colorado-springs-real-estate/' },
          ]),
        ],
        slug: 'mountain-shadows-colorado-springs-real-estate',
      });
      const _injectedHtml = injectSeoHead(prerenderedShell, _seoBlock, 'https://myrockhomes.com/mountain-shadows-colorado-springs-real-estate/');

      mkdirSync(distOutputDir, { recursive: true });
      writeFileSync(resolve(distOutputDir, "mountain-shadows-colorado-springs-real-estate.html"), prerenderedShell, "utf-8");
      const srcOutputDir = resolve(ROOT, "server/prerendered");
      mkdirSync(srcOutputDir, { recursive: true });
      const srcOutputPath = resolve(srcOutputDir, "mountain-shadows-colorado-springs-real-estate.html");
      writeFileSync(srcOutputPath, _injectedHtml, "utf-8");
    const written_mountain_shadows = readFileSync(resolve(serverPrerenderedDir, "mountain-shadows-colorado-springs-real-estate.html"), "utf-8");
    if (written_mountain_shadows.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for mountain-shadows");
    console.log("[prerender-all] Done: mountain-shadows");
  }

  // --- peregrine ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-peregrine.js"));
    const html = ssrMod.renderPeregrineColoradoSpringsRealEstate();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    // SEO injection
    // === SEO_INJECTED ===
      const _seoBlock = buildSeoHeadBlock({
        title: "Living in Peregrine, Colorado Springs: Real Estate, Tradeoffs, and What It's Like",
        description: 'Thinking about living in Peregrine, Colorado Springs? Learn what Peregrine is actually like, who it fits, the real tradeoffs, and how it compares with Flying Horse and Broadmoor.',
        canonical: 'https://myrockhomes.com/peregrine-colorado-springs-real-estate/',
        ogImage: OG_IMAGE_DEFAULT,
        schemas: [
          ...BASE_SCHEMAS,
          buildBreadcrumbSchema([
            { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
            { "@type": "ListItem", position: 2, name: "Colorado Springs", item: "https://myrockhomes.com/colorado-springs-co-homes-for-sale" },
            { "@type": "ListItem", position: 3, name: "Living in Peregrine, Colorado Springs: Real Estate, Tradeoffs, and What It's Like", item: 'https://myrockhomes.com/peregrine-colorado-springs-real-estate/' },
          ]),
        ],
        slug: 'peregrine-colorado-springs-real-estate',
      });
      const _injectedHtml = injectSeoHead(prerenderedShell, _seoBlock, 'https://myrockhomes.com/peregrine-colorado-springs-real-estate/');

      mkdirSync(distOutputDir, { recursive: true });
      writeFileSync(resolve(distOutputDir, "peregrine-colorado-springs-real-estate.html"), prerenderedShell, "utf-8");
      const srcOutputDir = resolve(ROOT, "server/prerendered");
      mkdirSync(srcOutputDir, { recursive: true });
      const srcOutputPath = resolve(srcOutputDir, "peregrine-colorado-springs-real-estate.html");
      writeFileSync(srcOutputPath, _injectedHtml, "utf-8");
    const written_peregrine = readFileSync(resolve(serverPrerenderedDir, "peregrine-colorado-springs-real-estate.html"), "utf-8");
    if (written_peregrine.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for peregrine");
    console.log("[prerender-all] Done: peregrine");
  }

  // --- old-colorado-city ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-old-colorado-city.js"));
    const html = ssrMod.renderOldColoradoCityColoradoSpringsRealEstate();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    // SEO injection
    // === SEO_INJECTED ===
      const _seoBlock = buildSeoHeadBlock({
        title: 'Old Colorado City, Colorado Springs Real Estate | My Rock Realty',
        description: 'Old Colorado City offers one of the more established, walkable, character-driven neighborhood searches in Colorado Springs. Here is what the search usually looks like.',
        canonical: 'https://myrockhomes.com/old-colorado-city-colorado-springs-real-estate/',
        ogImage: OG_IMAGE_DEFAULT,
        schemas: [
          ...BASE_SCHEMAS,
          buildBreadcrumbSchema([
            { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
            { "@type": "ListItem", position: 2, name: "Colorado Springs", item: "https://myrockhomes.com/colorado-springs-co-homes-for-sale" },
            { "@type": "ListItem", position: 3, name: 'Old Colorado City, Colorado Springs Real Estate', item: 'https://myrockhomes.com/old-colorado-city-colorado-springs-real-estate/' },
          ]),
        ],
        slug: 'old-colorado-city-colorado-springs-real-estate',
      });
      const _injectedHtml = injectSeoHead(prerenderedShell, _seoBlock, 'https://myrockhomes.com/old-colorado-city-colorado-springs-real-estate/');

      mkdirSync(distOutputDir, { recursive: true });
      writeFileSync(resolve(distOutputDir, "old-colorado-city-colorado-springs-real-estate.html"), prerenderedShell, "utf-8");
      const srcOutputDir = resolve(ROOT, "server/prerendered");
      mkdirSync(srcOutputDir, { recursive: true });
      const srcOutputPath = resolve(srcOutputDir, "old-colorado-city-colorado-springs-real-estate.html");
      writeFileSync(srcOutputPath, _injectedHtml, "utf-8");
    const written_old_colorado_city = readFileSync(resolve(serverPrerenderedDir, "old-colorado-city-colorado-springs-real-estate.html"), "utf-8");
    if (written_old_colorado_city.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for old-colorado-city");
    console.log("[prerender-all] Done: old-colorado-city");
  }

  // --- old-north-end ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-old-north-end.js"));
    const html = ssrMod.renderOldNorthEndColoradoSpringsRealEstate();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    // SEO injection
    // === SEO_INJECTED ===
      const _seoBlock = buildSeoHeadBlock({
        title: 'Old North End, Colorado Springs Real Estate | My Rock Realty',
        description: 'Old North End offers one of the more historic, residential, and architecturally distinctive neighborhood searches in Colorado Springs. Here is what the search usually looks like.',
        canonical: 'https://myrockhomes.com/old-north-end-colorado-springs-real-estate/',
        ogImage: OG_IMAGE_DEFAULT,
        schemas: [
          ...BASE_SCHEMAS,
          buildBreadcrumbSchema([
            { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
            { "@type": "ListItem", position: 2, name: "Colorado Springs", item: "https://myrockhomes.com/colorado-springs-co-homes-for-sale" },
            { "@type": "ListItem", position: 3, name: 'Old North End, Colorado Springs Real Estate', item: 'https://myrockhomes.com/old-north-end-colorado-springs-real-estate/' },
          ]),
        ],
        slug: 'old-north-end-colorado-springs-real-estate',
      });
      const _injectedHtml = injectSeoHead(prerenderedShell, _seoBlock, 'https://myrockhomes.com/old-north-end-colorado-springs-real-estate/');

      mkdirSync(distOutputDir, { recursive: true });
      writeFileSync(resolve(distOutputDir, "old-north-end-colorado-springs-real-estate.html"), prerenderedShell, "utf-8");
      const srcOutputDir = resolve(ROOT, "server/prerendered");
      mkdirSync(srcOutputDir, { recursive: true });
      const srcOutputPath = resolve(srcOutputDir, "old-north-end-colorado-springs-real-estate.html");
      writeFileSync(srcOutputPath, _injectedHtml, "utf-8");
    const written_old_north_end = readFileSync(resolve(serverPrerenderedDir, "old-north-end-colorado-springs-real-estate.html"), "utf-8");
    if (written_old_north_end.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for old-north-end");
    console.log("[prerender-all] Done: old-north-end");
  }

  // --- broadmoor-cheyenne-mountain ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-broadmoor-cheyenne-mountain.js"));
    const html = ssrMod.renderBroadmoorCheyenneMountainColoradoSpringsRealEstate();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    // SEO injection
    // === SEO_INJECTED ===
      const _seoBlock = buildSeoHeadBlock({
        title: 'Broadmoor / Cheyenne Mountain, Colorado Springs Real Estate | My Rock Realty',
        description: 'Broadmoor / Cheyenne Mountain offers one of the more established, scenic, and polished neighborhood searches in Colorado Springs. Here is what the search usually looks like.',
        canonical: 'https://myrockhomes.com/broadmoor-cheyenne-mountain-colorado-springs-real-estate/',
        ogImage: OG_IMAGE_DEFAULT,
        schemas: [
          ...BASE_SCHEMAS,
          buildBreadcrumbSchema([
            { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
            { "@type": "ListItem", position: 2, name: "Colorado Springs", item: "https://myrockhomes.com/colorado-springs-co-homes-for-sale" },
            { "@type": "ListItem", position: 3, name: 'Broadmoor / Cheyenne Mountain, Colorado Springs Real Estate', item: 'https://myrockhomes.com/broadmoor-cheyenne-mountain-colorado-springs-real-estate/' },
          ]),
        ],
        slug: 'broadmoor-cheyenne-mountain-colorado-springs-real-estate',
      });
      const _injectedHtml = injectSeoHead(prerenderedShell, _seoBlock, 'https://myrockhomes.com/broadmoor-cheyenne-mountain-colorado-springs-real-estate/');

      mkdirSync(distOutputDir, { recursive: true });
      writeFileSync(resolve(distOutputDir, "broadmoor-cheyenne-mountain-colorado-springs-real-estate.html"), prerenderedShell, "utf-8");
      const srcOutputDir = resolve(ROOT, "server/prerendered");
      mkdirSync(srcOutputDir, { recursive: true });
      const srcOutputPath = resolve(srcOutputDir, "broadmoor-cheyenne-mountain-colorado-springs-real-estate.html");
      writeFileSync(srcOutputPath, _injectedHtml, "utf-8");
    const written_broadmoor_cheyenne_mountain = readFileSync(resolve(serverPrerenderedDir, "broadmoor-cheyenne-mountain-colorado-springs-real-estate.html"), "utf-8");
    if (written_broadmoor_cheyenne_mountain.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for broadmoor-cheyenne-mountain");
    console.log("[prerender-all] Done: broadmoor-cheyenne-mountain");
  }

  // --- wash-park ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-wash-park.js"));
    const html = ssrMod.renderWashParkDenverHomesForSale();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "wash-park-denver-homes-for-sale.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "wash-park-denver-homes-for-sale.html"), prerenderedShell, "utf-8");
    const written_wash_park = readFileSync(resolve(serverPrerenderedDir, "wash-park-denver-homes-for-sale.html"), "utf-8");
    if (written_wash_park.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for wash-park");
    console.log("[prerender-all] Done: wash-park");
  }

  // --- cherry-creek ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-cherry-creek.js"));
    const html = ssrMod.renderCherryCreekDenverHomesForSale();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "cherry-creek-denver-homes-for-sale.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "cherry-creek-denver-homes-for-sale.html"), prerenderedShell, "utf-8");
    const written_cherry_creek = readFileSync(resolve(serverPrerenderedDir, "cherry-creek-denver-homes-for-sale.html"), "utf-8");
    if (written_cherry_creek.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for cherry-creek");
    console.log("[prerender-all] Done: cherry-creek");
  }

  // --- lohi ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-lohi.js"));
    const html = ssrMod.renderLohiDenverHomesForSale();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "lohi-denver-homes-for-sale.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "lohi-denver-homes-for-sale.html"), prerenderedShell, "utf-8");
    const written_lohi = readFileSync(resolve(serverPrerenderedDir, "lohi-denver-homes-for-sale.html"), "utf-8");
    if (written_lohi.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for lohi");
    console.log("[prerender-all] Done: lohi");
  }

  // --- rino ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-rino.js"));
    const html = ssrMod.renderRinoDenverHomesForSale();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "rino-denver-homes-for-sale.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "rino-denver-homes-for-sale.html"), prerenderedShell, "utf-8");
    const written_rino = readFileSync(resolve(serverPrerenderedDir, "rino-denver-homes-for-sale.html"), "utf-8");
    if (written_rino.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for rino");
    console.log("[prerender-all] Done: rino");
  }

  // --- central-park ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-central-park.js"));
    const html = ssrMod.renderCentralParkDenverHomesForSale();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "central-park-denver-homes-for-sale.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "central-park-denver-homes-for-sale.html"), prerenderedShell, "utf-8");
    const written_central_park = readFileSync(resolve(serverPrerenderedDir, "central-park-denver-homes-for-sale.html"), "utf-8");
    if (written_central_park.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for central-park");
    console.log("[prerender-all] Done: central-park");
  }

  // --- adams-co ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-adams-co.js"));
    const html = ssrMod.renderAdamsCoHomesForSale();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "adams-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "adams-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    const written_adams_co = readFileSync(resolve(serverPrerenderedDir, "adams-co-homes-for-sale.html"), "utf-8");
    if (written_adams_co.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for adams-co");
    console.log("[prerender-all] Done: adams-co");
  }

  // --- commerce-city ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-commerce-city.js"));
    const html = ssrMod.renderCommerceCityHomesForSale();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "commerce-city-homes-for-sale.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "commerce-city-homes-for-sale.html"), prerenderedShell, "utf-8");
    const written_commerce_city = readFileSync(resolve(serverPrerenderedDir, "commerce-city-homes-for-sale.html"), "utf-8");
    if (written_commerce_city.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for commerce-city");
    console.log("[prerender-all] Done: commerce-city");
  }

  // --- brighton-co ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-brighton-co.js"));
    const html = ssrMod.renderBrightonCoHomesForSale();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "brighton-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "brighton-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    const written_brighton_co = readFileSync(resolve(serverPrerenderedDir, "brighton-co-homes-for-sale.html"), "utf-8");
    if (written_brighton_co.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for brighton-co");
    console.log("[prerender-all] Done: brighton-co");
  }

  // --- thornton-co ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-thornton-co.js"));
    const html = ssrMod.renderThorntonCoHomesForSale();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "thornton-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "thornton-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    const written_thornton_co = readFileSync(resolve(serverPrerenderedDir, "thornton-co-homes-for-sale.html"), "utf-8");
    if (written_thornton_co.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for thornton-co");
    console.log("[prerender-all] Done: thornton-co");
  }

  // --- northglenn-co ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-northglenn-co.js"));
    const html = ssrMod.renderNorthglennCoHomesForSale();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "northglenn-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "northglenn-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    const written_northglenn_co = readFileSync(resolve(serverPrerenderedDir, "northglenn-co-homes-for-sale.html"), "utf-8");
    if (written_northglenn_co.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for northglenn-co");
    console.log("[prerender-all] Done: northglenn-co");
  }

  // --- buying-a-home-in-denver ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-buying-a-home-in-denver.js"));
    const html = ssrMod.renderBuyingAHomeInDenver();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "buying-a-home-in-denver.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "buying-a-home-in-denver.html"), prerenderedShell, "utf-8");
    const written_buying_a_home_in_denver = readFileSync(resolve(serverPrerenderedDir, "buying-a-home-in-denver.html"), "utf-8");
    if (written_buying_a_home_in_denver.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for buying-a-home-in-denver");
    console.log("[prerender-all] Done: buying-a-home-in-denver");
  }

  // --- first-time-home-buyer-denver ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-first-time-home-buyer-denver.js"));
    const html = ssrMod.renderFirstTimeHomeBuyerDenver();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "first-time-home-buyer-denver.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "first-time-home-buyer-denver.html"), prerenderedShell, "utf-8");
    const written_first_time_home_buyer_denver = readFileSync(resolve(serverPrerenderedDir, "first-time-home-buyer-denver.html"), "utf-8");
    if (written_first_time_home_buyer_denver.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for first-time-home-buyer-denver");
    console.log("[prerender-all] Done: first-time-home-buyer-denver");
  }

  // --- denver-home-buying-process ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-denver-home-buying-process.js"));
    const html = ssrMod.renderDenverHomeBuyingProcess();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "denver-home-buying-process.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "denver-home-buying-process.html"), prerenderedShell, "utf-8");
    const written_denver_home_buying_process = readFileSync(resolve(serverPrerenderedDir, "denver-home-buying-process.html"), "utf-8");
    if (written_denver_home_buying_process.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for denver-home-buying-process");
    console.log("[prerender-all] Done: denver-home-buying-process");
  }

  // --- cost-of-living-in-denver-colorado ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-cost-of-living-in-denver-colorado.js"));
    const html = ssrMod.renderCostOfLivingInDenverColorado();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "cost-of-living-in-denver-colorado.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "cost-of-living-in-denver-colorado.html"), prerenderedShell, "utf-8");
    const written_cost_of_living_in_denver_colorado = readFileSync(resolve(serverPrerenderedDir, "cost-of-living-in-denver-colorado.html"), "utf-8");
    if (written_cost_of_living_in_denver_colorado.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for cost-of-living-in-denver-colorado");
    console.log("[prerender-all] Done: cost-of-living-in-denver-colorado");
  }

  // --- relocating-to-denver-colorado ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-relocating-to-denver-colorado.js"));
    const html = ssrMod.renderRelocatingToDenverColorado();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "relocating-to-denver-colorado.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "relocating-to-denver-colorado.html"), prerenderedShell, "utf-8");
    const written_relocating_to_denver_colorado = readFileSync(resolve(serverPrerenderedDir, "relocating-to-denver-colorado.html"), "utf-8");
    if (written_relocating_to_denver_colorado.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for relocating-to-denver-colorado");
    console.log("[prerender-all] Done: relocating-to-denver-colorado");
  }

  // --- fort-collins-homes ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-fort-collins-homes.js"));
    const html = ssrMod.renderFortCollinsHomesForSale();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "fort-collins-homes-for-sale.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "fort-collins-homes-for-sale.html"), prerenderedShell, "utf-8");
    const written_fort_collins_homes = readFileSync(resolve(serverPrerenderedDir, "fort-collins-homes-for-sale.html"), "utf-8");
    if (written_fort_collins_homes.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for fort-collins-homes");
    console.log("[prerender-all] Done: fort-collins-homes");
  }

  // --- greeley-homes ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-greeley-homes.js"));
    const html = ssrMod.renderGreeleyHomesForSale();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "greeley-homes-for-sale.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "greeley-homes-for-sale.html"), prerenderedShell, "utf-8");
    const written_greeley_homes = readFileSync(resolve(serverPrerenderedDir, "greeley-homes-for-sale.html"), "utf-8");
    if (written_greeley_homes.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for greeley-homes");
    console.log("[prerender-all] Done: greeley-homes");
  }

  // --- evans-co ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-evans-co.js"));
    const html = ssrMod.renderEvansCoHomesForSale();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "evans-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "evans-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    const written_evans_co = readFileSync(resolve(serverPrerenderedDir, "evans-co-homes-for-sale.html"), "utf-8");
    if (written_evans_co.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for evans-co");
    console.log("[prerender-all] Done: evans-co");
  }

  // --- platteville-co ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-platteville-co.js"));
    const html = ssrMod.renderPlattevilleCoHomesForSale();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "platteville-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "platteville-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    const written_platteville_co = readFileSync(resolve(serverPrerenderedDir, "platteville-co-homes-for-sale.html"), "utf-8");
    if (written_platteville_co.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for platteville-co");
    console.log("[prerender-all] Done: platteville-co");
  }

  // --- lasalle-co ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-lasalle-co.js"));
    const html = ssrMod.renderLaSalleCoHomesForSale();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "lasalle-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "lasalle-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    const written_lasalle_co = readFileSync(resolve(serverPrerenderedDir, "lasalle-co-homes-for-sale.html"), "utf-8");
    if (written_lasalle_co.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for lasalle-co");
    console.log("[prerender-all] Done: lasalle-co");
  }

  // --- sloan-lake ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-sloan-lake.js"));
    const html = ssrMod.renderSloanLakeDenverHomesForSale();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "sloan-lake-denver-homes-for-sale.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "sloan-lake-denver-homes-for-sale.html"), prerenderedShell, "utf-8");
    const written_sloan_lake = readFileSync(resolve(serverPrerenderedDir, "sloan-lake-denver-homes-for-sale.html"), "utf-8");
    if (written_sloan_lake.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for sloan-lake");
    console.log("[prerender-all] Done: sloan-lake");
  }

  // --- jefferson-co ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-jefferson-co.js"));
    const html = ssrMod.renderJeffersonCoHomesForSale();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "jefferson-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "jefferson-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    const written_jefferson_co = readFileSync(resolve(serverPrerenderedDir, "jefferson-co-homes-for-sale.html"), "utf-8");
    if (written_jefferson_co.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for jefferson-co");
    console.log("[prerender-all] Done: jefferson-co");
  }

  // --- golden ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-golden.js"));
    const html = ssrMod.renderGoldenHomesForSale();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "golden-homes-for-sale.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "golden-homes-for-sale.html"), prerenderedShell, "utf-8");
    const written_golden = readFileSync(resolve(serverPrerenderedDir, "golden-homes-for-sale.html"), "utf-8");
    if (written_golden.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for golden");
    console.log("[prerender-all] Done: golden");
  }

  // --- lakewood ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-lakewood.js"));
    const html = ssrMod.renderLakewoodCoHomesForSale();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "lakewood-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "lakewood-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    const written_lakewood = readFileSync(resolve(serverPrerenderedDir, "lakewood-co-homes-for-sale.html"), "utf-8");
    if (written_lakewood.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for lakewood");
    console.log("[prerender-all] Done: lakewood");
  }

  // --- morrison ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-morrison.js"));
    const html = ssrMod.renderMorrisonCoHomesForSale();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "morrison-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "morrison-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    const written_morrison = readFileSync(resolve(serverPrerenderedDir, "morrison-co-homes-for-sale.html"), "utf-8");
    if (written_morrison.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for morrison");
    console.log("[prerender-all] Done: morrison");
  }

  // --- military-relocation ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-military-relocation.js"));
    const html = ssrMod.renderMilitaryRelocation();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    const finalHtml = prerenderedShell; // alias for SEO block compatibility
    const serverOutputPath = resolve(serverPrerenderedDir, "military-relocation.html"); // alias for SEO block compatibility
    const serverOut = resolve(serverPrerenderedDir, "military-relocation.html"); // alias for SEO block compatibility
    // SEO injection
    // === SEO_INJECTED ===
      const _seoBlock = buildSeoHeadBlock({
        title: 'Military & PCS Relocation in Colorado | My Rock Realty',
        description: 'Colorado real estate support for active duty, veterans, military spouses, and PCS buyers. VA homebuying guidance, base-specific relocation resources, and community orientation.',
        canonical: 'https://myrockhomes.com/military-relocation/',
        ogImage: OG_IMAGE_MILITARY,
        schemas: [
          ...BASE_SCHEMAS,
          buildBreadcrumbSchema([
            { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
            { "@type": "ListItem", position: 2, name: "Colorado Springs", item: "https://myrockhomes.com/colorado-springs-co-homes-for-sale" },
            { "@type": "ListItem", position: 3, name: 'Military & PCS Relocation in Colorado', item: 'https://myrockhomes.com/military-relocation/' },
          ]),
        ],
        slug: 'military-relocation',
      });
      const _injectedHtml = injectSeoHead(finalHtml, _seoBlock, 'https://myrockhomes.com/military-relocation/');

      writeFileSync(serverOutputPath, _injectedHtml, "utf-8");
      console.log(`[prerender-military-relocation] Written to ${serverOutputPath} (${finalHtml.length} bytes)`);
      const distPrerenderedDir = resolve(ROOT, "dist/prerendered");
      mkdirSync(distPrerenderedDir, { recursive: true });
      const distOutputPath = resolve(distPrerenderedDir, "military-relocation.html");
      writeFileSync(distOutputPath, _injectedHtml, "utf-8");
    const written_military_relocation = readFileSync(resolve(serverPrerenderedDir, "military-relocation.html"), "utf-8");
    if (written_military_relocation.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for military-relocation");
    console.log("[prerender-all] Done: military-relocation");
  }

  // --- pcs-colorado ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-pcs-colorado.js"));
    const html = ssrMod.renderPcsColorado();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    const finalHtml = prerenderedShell; // alias for SEO block compatibility
    const serverOutputPath = resolve(serverPrerenderedDir, "pcs-colorado.html"); // alias for SEO block compatibility
    const serverOut = resolve(serverPrerenderedDir, "pcs-colorado.html"); // alias for SEO block compatibility
    // SEO injection
    // === SEO_INJECTED ===
      const _seoBlock = buildSeoHeadBlock({
        title: 'PCS to Colorado: Military Homebuying Guide | My Rock Realty',
        description: 'Practical guidance for military buyers PCS-ing to Colorado. Covers PCS timing, rent vs. buy decisions, VA loan use, and Colorado-specific housing context.',
        canonical: 'https://myrockhomes.com/military-relocation/pcs-colorado/',
        ogImage: OG_IMAGE_MILITARY,
        schemas: [
          ...BASE_SCHEMAS,
          buildBreadcrumbSchema([
            { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
            { "@type": "ListItem", position: 2, name: "Colorado Springs", item: "https://myrockhomes.com/colorado-springs-co-homes-for-sale" },
            { "@type": "ListItem", position: 3, name: 'PCS to Colorado: Military Homebuying Guide', item: 'https://myrockhomes.com/military-relocation/pcs-colorado/' },
          ]),
        ],
        slug: 'pcs-colorado',
      });
      const _injectedHtml = injectSeoHead(finalHtml, _seoBlock, 'https://myrockhomes.com/military-relocation/pcs-colorado/');

      writeFileSync(serverOutputPath, _injectedHtml, "utf-8");
      console.log(`[prerender-pcs-colorado] Written to ${serverOutputPath} (${finalHtml.length} bytes)`);
      const distPrerenderedDir = resolve(ROOT, "dist/prerendered");
      mkdirSync(distPrerenderedDir, { recursive: true });
      const distOutputPath = resolve(distPrerenderedDir, "pcs-colorado.html");
      writeFileSync(distOutputPath, _injectedHtml, "utf-8");
    const written_pcs_colorado = readFileSync(resolve(serverPrerenderedDir, "pcs-colorado.html"), "utf-8");
    if (written_pcs_colorado.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for pcs-colorado");
    console.log("[prerender-all] Done: pcs-colorado");
  }

  // --- fort-carson ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-fort-carson.js"));
    const html = ssrMod.renderFortCarson();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    const finalHtml = prerenderedShell; // alias for SEO block compatibility
    const serverOutputPath = resolve(serverPrerenderedDir, "fort-carson.html"); // alias for SEO block compatibility
    const serverOut = resolve(serverPrerenderedDir, "fort-carson.html"); // alias for SEO block compatibility
    // SEO injection
    // === SEO_INJECTED ===
      const _seoBlock = buildSeoHeadBlock({
        title: 'Fort Carson Relocation Guide | Colorado Springs Real Estate | My Rock Realty',
        description: 'Practical relocation guidance for buyers moving to Fort Carson and the Colorado Springs area. PCS planning, VA loan context, and neighborhood orientation.',
        canonical: 'https://myrockhomes.com/military-relocation/fort-carson/',
        ogImage: OG_IMAGE_MILITARY,
        schemas: [
          ...BASE_SCHEMAS,
          buildBreadcrumbSchema([
            { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
            { "@type": "ListItem", position: 2, name: "Colorado Springs", item: "https://myrockhomes.com/colorado-springs-co-homes-for-sale" },
            { "@type": "ListItem", position: 3, name: 'Fort Carson Relocation Guide', item: 'https://myrockhomes.com/military-relocation/fort-carson/' },
          ]),
        ],
        slug: 'fort-carson',
      });
      const _injectedHtml = injectSeoHead(finalHtml, _seoBlock, 'https://myrockhomes.com/military-relocation/fort-carson/');

      writeFileSync(serverOutputPath, _injectedHtml, "utf-8");
      console.log(`[prerender-fort-carson] Written to ${serverOutputPath} (${finalHtml.length} bytes)`);
      const distPrerenderedDir = resolve(ROOT, "dist/prerendered");
      mkdirSync(distPrerenderedDir, { recursive: true });
      const distOutputPath = resolve(distPrerenderedDir, "fort-carson.html");
      writeFileSync(distOutputPath, _injectedHtml, "utf-8");
    const written_fort_carson = readFileSync(resolve(serverPrerenderedDir, "fort-carson.html"), "utf-8");
    if (written_fort_carson.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for fort-carson");
    console.log("[prerender-all] Done: fort-carson");
  }

  // --- peterson-space-force-base ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-peterson-space-force-base.js"));
    const html = ssrMod.renderPetersonSpaceForceBase();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    const finalHtml = prerenderedShell; // alias for SEO block compatibility
    const serverOutputPath = resolve(serverPrerenderedDir, "peterson-space-force-base.html"); // alias for SEO block compatibility
    const serverOut = resolve(serverPrerenderedDir, "peterson-space-force-base.html"); // alias for SEO block compatibility
    // SEO injection
    // === SEO_INJECTED ===
      const _seoBlock = buildSeoHeadBlock({
        title: 'Peterson Space Force Base Relocation Guide | Colorado Springs Real Estate | My Rock Realty',
        description: 'Practical relocation guidance for buyers moving to Peterson Space Force Base and the Colorado Springs area. PCS planning, VA loan context, and neighborhood orientation.',
        canonical: 'https://myrockhomes.com/military-relocation/peterson-space-force-base/',
        ogImage: OG_IMAGE_MILITARY,
        schemas: [
          ...BASE_SCHEMAS,
          buildBreadcrumbSchema([
            { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
            { "@type": "ListItem", position: 2, name: "Colorado Springs", item: "https://myrockhomes.com/colorado-springs-co-homes-for-sale" },
            { "@type": "ListItem", position: 3, name: 'Peterson Space Force Base Relocation Guide', item: 'https://myrockhomes.com/military-relocation/peterson-space-force-base/' },
          ]),
        ],
        slug: 'peterson-space-force-base',
      });
      const _injectedHtml = injectSeoHead(finalHtml, _seoBlock, 'https://myrockhomes.com/military-relocation/peterson-space-force-base/');

      writeFileSync(serverOutputPath, _injectedHtml, "utf-8");
      console.log(`[prerender-peterson-space-force-base] Written to ${serverOutputPath} (${finalHtml.length} bytes)`);
      const distPrerenderedDir = resolve(ROOT, "dist/prerendered");
      mkdirSync(distPrerenderedDir, { recursive: true });
      const distOutputPath = resolve(distPrerenderedDir, "peterson-space-force-base.html");
      writeFileSync(distOutputPath, _injectedHtml, "utf-8");
    const written_peterson_space_force_base = readFileSync(resolve(serverPrerenderedDir, "peterson-space-force-base.html"), "utf-8");
    if (written_peterson_space_force_base.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for peterson-space-force-base");
    console.log("[prerender-all] Done: peterson-space-force-base");
  }

  // --- schriever-space-force-base ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-schriever-space-force-base.js"));
    const html = ssrMod.renderSchrieverSpaceForceBase();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    const finalHtml = prerenderedShell; // alias for SEO block compatibility
    const serverOutputPath = resolve(serverPrerenderedDir, "schriever-space-force-base.html"); // alias for SEO block compatibility
    const serverOut = resolve(serverPrerenderedDir, "schriever-space-force-base.html"); // alias for SEO block compatibility
    // SEO injection
    // === SEO_INJECTED ===
      const _seoBlock = buildSeoHeadBlock({
        title: 'Schriever Space Force Base Relocation Guide | Colorado Springs Real Estate | My Rock Realty',
        description: 'Practical relocation guidance for buyers moving to Schriever Space Force Base and the Colorado Springs area. PCS planning, VA loan context, and community orientation.',
        canonical: 'https://myrockhomes.com/military-relocation/schriever-space-force-base/',
        ogImage: OG_IMAGE_MILITARY,
        schemas: [
          ...BASE_SCHEMAS,
          buildBreadcrumbSchema([
            { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
            { "@type": "ListItem", position: 2, name: "Colorado Springs", item: "https://myrockhomes.com/colorado-springs-co-homes-for-sale" },
            { "@type": "ListItem", position: 3, name: 'Schriever Space Force Base Relocation Guide', item: 'https://myrockhomes.com/military-relocation/schriever-space-force-base/' },
          ]),
        ],
        slug: 'schriever-space-force-base',
      });
      const _injectedHtml = injectSeoHead(finalHtml, _seoBlock, 'https://myrockhomes.com/military-relocation/schriever-space-force-base/');

      writeFileSync(serverOutputPath, _injectedHtml, "utf-8");
      console.log(`[prerender-schriever-space-force-base] Written to ${serverOutputPath} (${finalHtml.length} bytes)`);
      const distPrerenderedDir = resolve(ROOT, "dist/prerendered");
      mkdirSync(distPrerenderedDir, { recursive: true });
      const distOutputPath = resolve(distPrerenderedDir, "schriever-space-force-base.html");
      writeFileSync(distOutputPath, _injectedHtml, "utf-8");
    const written_schriever_space_force_base = readFileSync(resolve(serverPrerenderedDir, "schriever-space-force-base.html"), "utf-8");
    if (written_schriever_space_force_base.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for schriever-space-force-base");
    console.log("[prerender-all] Done: schriever-space-force-base");
  }

  // --- va-home-loans-colorado ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-va-home-loans-colorado.js"));
    const html = ssrMod.renderVaHomeLoansColorado();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    const ARTIFACT = "va-home-loans-colorado.html"; // alias for SEO block compatibility
    const appHtml = html; // alias for SEO block compatibility
    const htmlRaw = prerenderedShell; // alias for SEO block compatibility
    // SEO injection
    // === SEO_INJECTED ===
    const _seoBlock = buildSeoHeadBlock({
      title: 'VA Home Loans in Colorado: Educational Guide | My Rock Realty',
      description: 'Educational overview of VA home loan benefits for eligible veterans and active-duty buyers in Colorado. Covers key concepts, the homebuying process, and common questions. Not financial advice.',
      canonical: 'https://myrockhomes.com/military-relocation/va-home-loans-colorado/',
      slug: 'military-relocation/va-home-loans-colorado',
      ogImage: OG_IMAGE_MILITARY,
      schemas: [
        ...BASE_SCHEMAS,
        buildBreadcrumbSchema([
          { name: 'Home', url: 'https://myrockhomes.com/' },
          { name: 'Military Relocation', url: 'https://myrockhomes.com/military-relocation/' },
          { name: 'VA Home Loans Colorado', url: 'https://myrockhomes.com/military-relocation/va-home-loans-colorado/' },
        ]),
      ],
    });
    const _injectedHtml = injectSeoHead(htmlRaw, _seoBlock, 'https://myrockhomes.com/military-relocation/va-home-loans-colorado/');

    console.log(`[prerender-va-home-loans-colorado] Rendered HTML length: ${appHtml.length} chars`);

    const prerenderedDir = resolve(ROOT, "server/prerendered");
    mkdirSync(prerenderedDir, { recursive: true });
    writeFileSync(resolve(prerenderedDir, ARTIFACT), _injectedHtml);
    // Also write to dist/prerendered
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "va-home-loans-colorado.html"), _injectedHtml, "utf-8");
    const written_va_home_loans_colorado = readFileSync(resolve(serverPrerenderedDir, "va-home-loans-colorado.html"), "utf-8");
    if (written_va_home_loans_colorado.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for va-home-loans-colorado");
    console.log("[prerender-all] Done: va-home-loans-colorado");
  }

  // --- buckley-space-force-base ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-buckley-space-force-base.js"));
    const html = ssrMod.renderBuckleySpaceForceBase();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "buckley-space-force-base.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "buckley-space-force-base.html"), prerenderedShell, "utf-8");
    const written_buckley_space_force_base = readFileSync(resolve(serverPrerenderedDir, "buckley-space-force-base.html"), "utf-8");
    if (written_buckley_space_force_base.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for buckley-space-force-base");
    console.log("[prerender-all] Done: buckley-space-force-base");
  }

  // --- us-air-force-academy ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-us-air-force-academy.js"));
    const html = ssrMod.renderUsAirForceAcademy();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    const prerenderedDir = serverPrerenderedDir; // alias for SEO block compatibility
    const ARTIFACT = "us-air-force-academy.html"; // alias for SEO block compatibility
    // SEO injection
    // === SEO_INJECTED ===
    const _seoBlock = buildSeoHeadBlock({
      title: 'USAFA Relocation Guide | Colorado Springs Real Estate | My Rock Realty',
      description: 'Practical relocation guidance for buyers moving to the US Air Force Academy and the Colorado Springs area. PCS planning, VA loan context, and neighborhood orientation.',
      canonical: 'https://myrockhomes.com/military-relocation/usafa/',
      ogImage: OG_IMAGE_MILITARY,
      schemas: [
        ...BASE_SCHEMAS,
        buildBreadcrumbSchema([
          { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
          { "@type": "ListItem", position: 2, name: "Colorado Springs", item: "https://myrockhomes.com/colorado-springs-co-homes-for-sale" },
          { "@type": "ListItem", position: 3, name: 'USAFA Relocation Guide', item: 'https://myrockhomes.com/military-relocation/usafa/' },
        ]),
      ],
      slug: 'us-air-force-academy',
    });
    const _injectedHtml = injectSeoHead(html, _seoBlock, 'https://myrockhomes.com/military-relocation/usafa/');
    writeFileSync(resolve(prerenderedDir, ARTIFACT), _injectedHtml);
    // Also write to dist/prerendered
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "us-air-force-academy.html"), _injectedHtml, "utf-8");
    const written_us_air_force_academy = readFileSync(resolve(serverPrerenderedDir, "us-air-force-academy.html"), "utf-8");
    if (written_us_air_force_academy.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for us-air-force-academy");
    console.log("[prerender-all] Done: us-air-force-academy");
  }

  // --- military-spouses-buying-colorado ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-military-spouses-buying-colorado.js"));
    const html = ssrMod.renderMilitarySpousesBuyingColorado();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    const prerenderedDir = serverPrerenderedDir; // alias for SEO block compatibility
    const ARTIFACT = "military-spouses-buying-colorado.html"; // alias for SEO block compatibility
    // SEO injection
    // === SEO_INJECTED ===
    const _seoBlock = buildSeoHeadBlock({
      title: 'Military Spouses Buying a Home in Colorado | My Rock Realty',
      description: 'Practical homebuying guidance for military spouses navigating PCS moves, deployment timelines, and Colorado real estate decisions.',
      canonical: 'https://myrockhomes.com/military-relocation/military-spouses-buying-colorado/',
      ogImage: OG_IMAGE_MILITARY,
      schemas: [
        ...BASE_SCHEMAS,
        buildBreadcrumbSchema([
          { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
          { "@type": "ListItem", position: 2, name: "Colorado Springs", item: "https://myrockhomes.com/colorado-springs-co-homes-for-sale" },
          { "@type": "ListItem", position: 3, name: 'Military Spouses Buying a Home in Colorado', item: 'https://myrockhomes.com/military-relocation/military-spouses-buying-colorado/' },
        ]),
      ],
      slug: 'military-spouses-buying-colorado',
    });
    const _injectedHtml = injectSeoHead(html, _seoBlock, 'https://myrockhomes.com/military-relocation/military-spouses-buying-colorado/');
    writeFileSync(resolve(prerenderedDir, ARTIFACT), _injectedHtml);
    // Also write to dist/prerendered
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "military-spouses-buying-colorado.html"), _injectedHtml, "utf-8");
    const written_military_spouses_buying_colorado = readFileSync(resolve(serverPrerenderedDir, "military-spouses-buying-colorado.html"), "utf-8");
    if (written_military_spouses_buying_colorado.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for military-spouses-buying-colorado");
    console.log("[prerender-all] Done: military-spouses-buying-colorado");
  }

  // --- veterans-buying-colorado ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-veterans-buying-colorado.js"));
    const html = ssrMod.renderVeteransBuyingColorado();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    const ARTIFACT = "veterans-buying-colorado.html"; // alias for SEO block compatibility
    const appHtml = html; // alias for SEO block compatibility
    const htmlRaw = prerenderedShell; // alias for SEO block compatibility
    // SEO injection
    // === SEO_INJECTED ===
    const _seoBlock = buildSeoHeadBlock({
      title: 'Veterans Buying a Home in Colorado | My Rock Realty',
      description: 'Educational homebuying guidance for veterans considering a Colorado purchase. VA loan context, market orientation, and buyer-focused support across Colorado Springs and the Denver metro.',
      canonical: 'https://myrockhomes.com/military-relocation/veterans-buying-colorado/',
      slug: 'military-relocation/veterans-buying-colorado',
      ogImage: OG_IMAGE_MILITARY,
      schemas: [
        ...BASE_SCHEMAS,
        buildBreadcrumbSchema([
          { name: 'Home', url: 'https://myrockhomes.com/' },
          { name: 'Military Relocation', url: 'https://myrockhomes.com/military-relocation/' },
          { name: 'Veterans Buying Colorado', url: 'https://myrockhomes.com/military-relocation/veterans-buying-colorado/' },
        ]),
      ],
    });
    const _injectedHtml = injectSeoHead(htmlRaw, _seoBlock, 'https://myrockhomes.com/military-relocation/veterans-buying-colorado/');
    console.log(`[prerender-veterans-buying-colorado] Rendered HTML length: ${appHtml.length} chars`);
    const prerenderedDir = resolve(ROOT, "server/prerendered");
    mkdirSync(prerenderedDir, { recursive: true });
    writeFileSync(resolve(prerenderedDir, ARTIFACT), _injectedHtml);
    // Also write to dist/prerendered
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "veterans-buying-colorado.html"), _injectedHtml, "utf-8");
    const written_veterans_buying_colorado = readFileSync(resolve(serverPrerenderedDir, "veterans-buying-colorado.html"), "utf-8");
    if (written_veterans_buying_colorado.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for veterans-buying-colorado");
    console.log("[prerender-all] Done: veterans-buying-colorado");
  }

  // --- pcs-timeline-checklist ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-pcs-timeline-checklist.js"));
    const html = ssrMod.renderPcsTimelineChecklist();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    const finalHtml = prerenderedShell; // alias for SEO block compatibility
    const serverOut = resolve(serverPrerenderedDir, "pcs-timeline-checklist.html"); // alias for SEO block compatibility
    // SEO injection
    // === SEO_INJECTED ===
      const _seoBlock = buildSeoHeadBlock({
        title: 'PCS Timeline Checklist for Colorado | My Rock Realty',
        description: 'A practical PCS homebuying checklist for military buyers relocating to Colorado. Phase-by-phase planning from orders to closing.',
        canonical: 'https://myrockhomes.com/military-relocation/pcs-timeline-checklist/',
        ogImage: OG_IMAGE_MILITARY,
        schemas: [
          ...BASE_SCHEMAS,
          buildBreadcrumbSchema([
            { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
            { "@type": "ListItem", position: 2, name: "Colorado Springs", item: "https://myrockhomes.com/colorado-springs-co-homes-for-sale" },
            { "@type": "ListItem", position: 3, name: 'PCS Timeline Checklist for Colorado', item: 'https://myrockhomes.com/military-relocation/pcs-timeline-checklist/' },
          ]),
        ],
        slug: 'pcs-timeline-checklist',
      });
      const _injectedHtml = injectSeoHead(finalHtml, _seoBlock, 'https://myrockhomes.com/military-relocation/pcs-timeline-checklist/');

      writeFileSync(serverOut, _injectedHtml, "utf-8");
      console.log(`[prerender-pcs-timeline-checklist] Written to ${serverOut} (${finalHtml.length} bytes)`);
      const distDir = resolve(ROOT, "dist/prerendered");
      mkdirSync(distDir, { recursive: true });
      const distOut = resolve(distDir, "pcs-timeline-checklist.html");
      writeFileSync(distOut, _injectedHtml, "utf-8");
    const written_pcs_timeline_checklist = readFileSync(resolve(serverPrerenderedDir, "pcs-timeline-checklist.html"), "utf-8");
    if (written_pcs_timeline_checklist.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for pcs-timeline-checklist");
    console.log("[prerender-all] Done: pcs-timeline-checklist");
  }

  // --- temporary-housing-colorado-springs ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-temporary-housing-colorado-springs.js"));
    const html = ssrMod.renderTemporaryHousingColoradoSprings();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    const finalHtml = prerenderedShell; // alias for SEO block compatibility
    const serverOut = resolve(serverPrerenderedDir, "temporary-housing-colorado-springs.html"); // alias for SEO block compatibility
    // SEO injection
    // === SEO_INJECTED ===
      const _seoBlock = buildSeoHeadBlock({
        title: 'Temporary Housing During PCS — Colorado Springs | My Rock Realty',
        description: 'Practical guidance on temporary housing timing, rent-vs-buy decisions, and relocation planning for military buyers arriving in Colorado Springs.',
        canonical: 'https://myrockhomes.com/military-relocation/temporary-housing-colorado-springs/',
        ogImage: OG_IMAGE_MILITARY,
        schemas: [
          ...BASE_SCHEMAS,
          buildBreadcrumbSchema([
            { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
            { "@type": "ListItem", position: 2, name: "Colorado Springs", item: "https://myrockhomes.com/colorado-springs-co-homes-for-sale" },
            { "@type": "ListItem", position: 3, name: 'Temporary Housing During PCS — Colorado Springs', item: 'https://myrockhomes.com/military-relocation/temporary-housing-colorado-springs/' },
          ]),
        ],
        slug: 'temporary-housing-colorado-springs',
      });
      const _injectedHtml = injectSeoHead(finalHtml, _seoBlock, 'https://myrockhomes.com/military-relocation/temporary-housing-colorado-springs/');

      writeFileSync(serverOut, _injectedHtml, "utf-8");
      console.log(`[prerender-temporary-housing-colorado-springs] Written to ${serverOut} (${finalHtml.length} bytes)`);
      const distDir = resolve(ROOT, "dist/prerendered");
      mkdirSync(distDir, { recursive: true });
      const distOut = resolve(distDir, "temporary-housing-colorado-springs.html");
      writeFileSync(distOut, _injectedHtml, "utf-8");
    const written_temporary_housing_colorado_springs = readFileSync(resolve(serverPrerenderedDir, "temporary-housing-colorado-springs.html"), "utf-8");
    if (written_temporary_housing_colorado_springs.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for temporary-housing-colorado-springs");
    console.log("[prerender-all] Done: temporary-housing-colorado-springs");
  }

  // --- remote-home-tours ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-remote-home-tours.js"));
    const html = ssrMod.renderRemoteHomeTours();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    const finalHtml = prerenderedShell; // alias for SEO block compatibility
    // SEO injection
    // === SEO_INJECTED ===
      const _seoBlock = buildSeoHeadBlock({
        title: 'Remote Home Tours for Military & PCS Buyers | My Rock Realty',
        description: "Remote home touring support for military and PCS buyers relocating to Colorado Springs and the Denver metro. Recorded video tours, live virtual tours, and in-person tour blocks for buyers who aren't yet local.",
        canonical: 'https://myrockhomes.com/military-relocation/remote-home-tours/',
        slug: 'military-relocation/remote-home-tours',
        ogImage: OG_IMAGE_MILITARY,
        schemas: [
          ...BASE_SCHEMAS,
          buildBreadcrumbSchema([
            { name: 'Home', url: 'https://myrockhomes.com/' },
            { name: 'Military Relocation', url: 'https://myrockhomes.com/military-relocation/' },
            { name: 'Remote Home Tours', url: 'https://myrockhomes.com/military-relocation/remote-home-tours/' },
          ]),
        ],
      });
      const finalHtmlSeo = injectSeoHead(finalHtml, _seoBlock, 'https://myrockhomes.com/military-relocation/remote-home-tours/');
      const serverDir = resolve(ROOT, "server/prerendered");
      mkdirSync(serverDir, { recursive: true });
      const serverOut = resolve(serverDir, "remote-home-tours.html");
      writeFileSync(serverOut, finalHtmlSeo, "utf-8");
      console.log(`[prerender-remote-home-tours] Written to ${serverOut} (${finalHtml.length} bytes)`);
      const distDir = resolve(ROOT, "dist/prerendered");
      mkdirSync(distDir, { recursive: true });
      const distOut = resolve(distDir, "remote-home-tours.html");
      writeFileSync(distOut, finalHtmlSeo, "utf-8");
    const written_remote_home_tours = readFileSync(resolve(serverPrerenderedDir, "remote-home-tours.html"), "utf-8");
    if (written_remote_home_tours.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for remote-home-tours");
    console.log("[prerender-all] Done: remote-home-tours");
  }

  // --- pcs-relocation-tour-support ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-pcs-relocation-tour-support.js"));
    const html = ssrMod.renderPcsRelocationTourSupport();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    const finalHtml = prerenderedShell; // alias for SEO block compatibility
    const serverOut = resolve(serverPrerenderedDir, "pcs-relocation-tour-support.html"); // alias for SEO block compatibility
    // SEO injection
    // === SEO_INJECTED ===
      const _seoBlock = buildSeoHeadBlock({
        title: 'PCS Relocation Tour Support | Military Housing Guidance | My Rock Realty',
        description: 'PCS families relocating to Colorado Springs or Denver can evaluate housing before they arrive. Structured remote and in-person tour support for military buyers.',
        canonical: 'https://myrockhomes.com/military-relocation/pcs-relocation-tour-support/',
        ogImage: OG_IMAGE_MILITARY,
        schemas: [
          ...BASE_SCHEMAS,
          buildBreadcrumbSchema([
            { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
            { "@type": "ListItem", position: 2, name: "Colorado Springs", item: "https://myrockhomes.com/colorado-springs-co-homes-for-sale" },
            { "@type": "ListItem", position: 3, name: 'PCS Relocation Tour Support', item: 'https://myrockhomes.com/military-relocation/pcs-relocation-tour-support/' },
          ]),
        ],
        slug: 'pcs-relocation-tour-support',
      });
      const _injectedHtml = injectSeoHead(finalHtml, _seoBlock, 'https://myrockhomes.com/military-relocation/pcs-relocation-tour-support/');

      writeFileSync(serverOut, _injectedHtml, "utf-8");
      console.log(`[prerender-pcs-relocation-tour-support] Written to ${serverOut} (${finalHtml.length} bytes)`);
      const distDir = resolve(ROOT, "dist/prerendered");
      mkdirSync(distDir, { recursive: true });
      const distOut = resolve(distDir, "pcs-relocation-tour-support.html");
      writeFileSync(distOut, _injectedHtml, "utf-8");
    const written_pcs_relocation_tour_support = readFileSync(resolve(serverPrerenderedDir, "pcs-relocation-tour-support.html"), "utf-8");
    if (written_pcs_relocation_tour_support.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for pcs-relocation-tour-support");
    console.log("[prerender-all] Done: pcs-relocation-tour-support");
  }

  // --- best-communities-near-fort-carson ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-best-communities-near-fort-carson.js"));
    const html = ssrMod.renderBestCommunitiesNearFortCarson();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    const finalHtml = prerenderedShell; // alias for SEO block compatibility
    const serverOut = resolve(serverPrerenderedDir, "best-communities-near-fort-carson.html"); // alias for SEO block compatibility
    // SEO injection
    // === SEO_INJECTED ===
      const _seoBlock = buildSeoHeadBlock({
        title: 'Best Communities Near Fort Carson | Military Relocation | My Rock Realty',
        description: 'Community orientation for military and PCS buyers relocating near Fort Carson in Colorado Springs. Practical neighborhood comparisons and housing context.',
        canonical: 'https://myrockhomes.com/military-relocation/best-communities-near-fort-carson/',
        ogImage: OG_IMAGE_MILITARY,
        schemas: [
          ...BASE_SCHEMAS,
          buildBreadcrumbSchema([
            { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
            { "@type": "ListItem", position: 2, name: "Colorado Springs", item: "https://myrockhomes.com/colorado-springs-co-homes-for-sale" },
            { "@type": "ListItem", position: 3, name: 'Best Communities Near Fort Carson', item: 'https://myrockhomes.com/military-relocation/best-communities-near-fort-carson/' },
          ]),
        ],
        slug: 'best-communities-near-fort-carson',
      });
      const _injectedHtml = injectSeoHead(finalHtml, _seoBlock, 'https://myrockhomes.com/military-relocation/best-communities-near-fort-carson/');

      writeFileSync(serverOut, _injectedHtml, "utf-8");
      console.log(`[prerender-best-communities-near-fort-carson] Written to ${serverOut} (${finalHtml.length} bytes)`);
      const distDir = resolve(ROOT, "dist/prerendered");
      mkdirSync(distDir, { recursive: true });
      const distOut = resolve(distDir, "best-communities-near-fort-carson.html");
      writeFileSync(distOut, _injectedHtml, "utf-8");
    const written_best_communities_near_fort_carson = readFileSync(resolve(serverPrerenderedDir, "best-communities-near-fort-carson.html"), "utf-8");
    if (written_best_communities_near_fort_carson.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for best-communities-near-fort-carson");
    console.log("[prerender-all] Done: best-communities-near-fort-carson");
  }

  // --- best-communities-near-peterson-space-force-base ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-best-communities-near-peterson-space-force-base.js"));
    const html = ssrMod.renderBestCommunitiesNearPetersonSpaceForceBase();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    const finalHtml = prerenderedShell; // alias for SEO block compatibility
    const serverOut = resolve(serverPrerenderedDir, "best-communities-near-peterson-space-force-base.html"); // alias for SEO block compatibility
    // SEO injection
    // === SEO_INJECTED ===
      const _seoBlock = buildSeoHeadBlock({
        title: 'Best Communities Near Peterson Space Force Base | Military Relocation | My Rock Realty',
        description: 'Community orientation for military and PCS buyers relocating near Peterson Space Force Base in Colorado Springs. Practical neighborhood comparisons and housing context.',
        canonical: 'https://myrockhomes.com/military-relocation/best-communities-near-peterson-space-force-base/',
        ogImage: OG_IMAGE_MILITARY,
        schemas: [
          ...BASE_SCHEMAS,
          buildBreadcrumbSchema([
            { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
            { "@type": "ListItem", position: 2, name: "Colorado Springs", item: "https://myrockhomes.com/colorado-springs-co-homes-for-sale" },
            { "@type": "ListItem", position: 3, name: 'Best Communities Near Peterson Space Force Base', item: 'https://myrockhomes.com/military-relocation/best-communities-near-peterson-space-force-base/' },
          ]),
        ],
        slug: 'best-communities-near-peterson-space-force-base',
      });
      const _injectedHtml = injectSeoHead(finalHtml, _seoBlock, 'https://myrockhomes.com/military-relocation/best-communities-near-peterson-space-force-base/');

      writeFileSync(serverOut, _injectedHtml, "utf-8");
      console.log(`[prerender-best-communities-near-peterson-space-force-base] Written to ${serverOut} (${finalHtml.length} bytes)`);
      const distDir = resolve(ROOT, "dist/prerendered");
      mkdirSync(distDir, { recursive: true });
      const distOut = resolve(distDir, "best-communities-near-peterson-space-force-base.html");
      writeFileSync(distOut, _injectedHtml, "utf-8");
    const written_best_communities_near_peterson_space_force_base = readFileSync(resolve(serverPrerenderedDir, "best-communities-near-peterson-space-force-base.html"), "utf-8");
    if (written_best_communities_near_peterson_space_force_base.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for best-communities-near-peterson-space-force-base");
    console.log("[prerender-all] Done: best-communities-near-peterson-space-force-base");
  }

  // --- best-communities-near-schriever-space-force-base ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-best-communities-near-schriever-space-force-base.js"));
    const html = ssrMod.renderBestCommunitiesNearSchrieverSpaceForceBase();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    const finalHtml = prerenderedShell; // alias for SEO block compatibility
    const serverOut = resolve(serverPrerenderedDir, "best-communities-near-schriever-space-force-base.html"); // alias for SEO block compatibility
    // SEO injection
    // === SEO_INJECTED ===
      const _seoBlock = buildSeoHeadBlock({
        title: 'Best Communities Near Schriever Space Force Base | Military Relocation | My Rock Realty',
        description: 'Community orientation for military and PCS buyers relocating near Schriever Space Force Base east of Colorado Springs. Practical neighborhood comparisons and housing context.',
        canonical: 'https://myrockhomes.com/military-relocation/best-communities-near-schriever-space-force-base/',
        ogImage: OG_IMAGE_MILITARY,
        schemas: [
          ...BASE_SCHEMAS,
          buildBreadcrumbSchema([
            { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
            { "@type": "ListItem", position: 2, name: "Colorado Springs", item: "https://myrockhomes.com/colorado-springs-co-homes-for-sale" },
            { "@type": "ListItem", position: 3, name: 'Best Communities Near Schriever Space Force Base', item: 'https://myrockhomes.com/military-relocation/best-communities-near-schriever-space-force-base/' },
          ]),
        ],
        slug: 'best-communities-near-schriever-space-force-base',
      });
      const _injectedHtml = injectSeoHead(finalHtml, _seoBlock, 'https://myrockhomes.com/military-relocation/best-communities-near-schriever-space-force-base/');

      writeFileSync(serverOut, _injectedHtml, "utf-8");
      console.log(`[prerender-best-communities-near-schriever-space-force-base] Written to ${serverOut} (${finalHtml.length} bytes)`);
      const distDir = resolve(ROOT, "dist/prerendered");
      mkdirSync(distDir, { recursive: true });
      const distOut = resolve(distDir, "best-communities-near-schriever-space-force-base.html");
      writeFileSync(distOut, _injectedHtml, "utf-8");
    const written_best_communities_near_schriever_space_force_base = readFileSync(resolve(serverPrerenderedDir, "best-communities-near-schriever-space-force-base.html"), "utf-8");
    if (written_best_communities_near_schriever_space_force_base.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for best-communities-near-schriever-space-force-base");
    console.log("[prerender-all] Done: best-communities-near-schriever-space-force-base");
  }

  // --- best-communities-near-buckley-space-force-base ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-best-communities-near-buckley-space-force-base.js"));
    const html = ssrMod.renderBestCommunitiesNearBuckleySpaceForceBase();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    const finalHtml = prerenderedShell; // alias for SEO block compatibility
    const serverOut = resolve(serverPrerenderedDir, "best-communities-near-buckley-space-force-base.html"); // alias for SEO block compatibility
    // SEO injection
    // === SEO_INJECTED ===
      const _seoBlock = buildSeoHeadBlock({
        title: 'Best Communities Near Buckley Space Force Base | Military Relocation | My Rock Realty',
        description: 'Community orientation for military and PCS buyers relocating near Buckley Space Force Base in Aurora, CO. Practical neighborhood comparisons and housing context.',
        canonical: 'https://myrockhomes.com/military-relocation/best-communities-near-buckley-space-force-base/',
        ogImage: OG_IMAGE_MILITARY,
        schemas: [
          ...BASE_SCHEMAS,
          buildBreadcrumbSchema([
            { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
            { "@type": "ListItem", position: 2, name: "Colorado Springs", item: "https://myrockhomes.com/colorado-springs-co-homes-for-sale" },
            { "@type": "ListItem", position: 3, name: 'Best Communities Near Buckley Space Force Base', item: 'https://myrockhomes.com/military-relocation/best-communities-near-buckley-space-force-base/' },
          ]),
        ],
        slug: 'best-communities-near-buckley-space-force-base',
      });
      const _injectedHtml = injectSeoHead(finalHtml, _seoBlock, 'https://myrockhomes.com/military-relocation/best-communities-near-buckley-space-force-base/');

      writeFileSync(serverOut, _injectedHtml, "utf-8");
      console.log(`[prerender-best-communities-near-buckley-space-force-base] Written to ${serverOut} (${finalHtml.length} bytes)`);
      const distDir = resolve(ROOT, "dist/prerendered");
      mkdirSync(distDir, { recursive: true });
      const distOut = resolve(distDir, "best-communities-near-buckley-space-force-base.html");
      writeFileSync(distOut, _injectedHtml, "utf-8");
    const written_best_communities_near_buckley_space_force_base = readFileSync(resolve(serverPrerenderedDir, "best-communities-near-buckley-space-force-base.html"), "utf-8");
    if (written_best_communities_near_buckley_space_force_base.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for best-communities-near-buckley-space-force-base");
    console.log("[prerender-all] Done: best-communities-near-buckley-space-force-base");
  }

  // --- moving-to-colorado-springs ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-moving-to-colorado-springs.js"));
    const html = ssrMod.renderMovingToColoradoSprings();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    const finalHtml = prerenderedShell; // alias for SEO block compatibility
    const serverOut = resolve(serverPrerenderedDir, "moving-to-colorado-springs.html"); // alias for SEO block compatibility
    // SEO injection
    // === SEO_INJECTED ===
      const _seoBlock = buildSeoHeadBlock({
        title: 'Moving to Colorado Springs: Neighborhoods, Costs, and Tradeoffs',
        description: 'Thinking about moving to Colorado Springs? Learn what to know about costs, different neighborhoods, and the real tradeoffs before you decide.',
        canonical: 'https://myrockhomes.com/moving-to-colorado-springs/',
        ogImage: OG_IMAGE_DEFAULT,
        schemas: [
          ...BASE_SCHEMAS,
          buildBreadcrumbSchema([
            { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
            { "@type": "ListItem", position: 2, name: "Colorado Springs", item: "https://myrockhomes.com/colorado-springs-co-homes-for-sale" },
            { "@type": "ListItem", position: 3, name: 'Moving to Colorado Springs: Neighborhoods, Costs, and Tradeoffs', item: 'https://myrockhomes.com/moving-to-colorado-springs/' },
          ]),
        ],
        slug: 'moving-to-colorado-springs',
      });
      const _injectedHtml = injectSeoHead(finalHtml, _seoBlock, 'https://myrockhomes.com/moving-to-colorado-springs/');

      writeFileSync(serverOut, _injectedHtml, "utf-8");
      console.log(`[prerender-moving-to-colorado-springs] Written to ${serverOut} (${finalHtml.length} bytes)`);
      const distDir = resolve(ROOT, "dist/prerendered");
      mkdirSync(distDir, { recursive: true });
      const distOut = resolve(distDir, "moving-to-colorado-springs.html");
      writeFileSync(distOut, _injectedHtml, "utf-8");
    const written_moving_to_colorado_springs = readFileSync(resolve(serverPrerenderedDir, "moving-to-colorado-springs.html"), "utf-8");
    if (written_moving_to_colorado_springs.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for moving-to-colorado-springs");
    console.log("[prerender-all] Done: moving-to-colorado-springs");
  }

  // --- widefield-co-homes-for-sale ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-widefield-co-homes-for-sale.js"));
    const html = ssrMod.renderWidefieldCoHomesForSale();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    const finalHtml = prerenderedShell; // alias for SEO block compatibility
    const serverOut = resolve(serverPrerenderedDir, "widefield-co-homes-for-sale.html"); // alias for SEO block compatibility
    // SEO injection
    // === SEO_INJECTED ===
      const _seoBlock = buildSeoHeadBlock({
        title: 'Widefield CO Homes for Sale | Widefield Colorado Real Estate',
        description: 'Explore Widefield CO homes for sale, neighborhood character, housing styles, suburban appeal, and helpful context for buyers considering the Widefield area near Colorado Springs.',
        canonical: 'https://myrockhomes.com/widefield-co-homes-for-sale',
        ogImage: OG_IMAGE_DEFAULT,
      schemas: [
        ...BASE_SCHEMAS,
        buildBreadcrumbSchema([
          { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
          { "@type": "ListItem", position: 2, name: "Colorado Springs", item: "https://myrockhomes.com/colorado-springs-co-homes-for-sale" },
          { "@type": "ListItem", position: 3, name: "Widefield CO Homes for Sale", item: 'https://myrockhomes.com/widefield-co-homes-for-sale' },
        ]),
      ],
      slug: 'widefield-co-homes-for-sale',
      });
      const _injectedHtml = injectSeoHead(finalHtml, _seoBlock, 'https://myrockhomes.com/widefield-co-homes-for-sale');
      writeFileSync(serverOut, _injectedHtml, "utf-8");
      console.log(`[prerender-widefield-co-homes-for-sale] Written to ${serverOut} (${finalHtml.length} bytes)`);
      const distDir = resolve(ROOT, "dist/prerendered");
      mkdirSync(distDir, { recursive: true });
      const distOut = resolve(distDir, "widefield-co-homes-for-sale.html");
      writeFileSync(distOut, _injectedHtml, "utf-8");
    const written_widefield_co_homes_for_sale = readFileSync(resolve(serverPrerenderedDir, "widefield-co-homes-for-sale.html"), "utf-8");
    if (written_widefield_co_homes_for_sale.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for widefield-co-homes-for-sale");
    console.log("[prerender-all] Done: widefield-co-homes-for-sale");
  }

  // --- banning-lewis-ranch ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-banning-lewis-ranch.js"));
    const html = ssrMod.renderBanningLewisRanchColoradoSpringsRealEstate();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    // SEO injection
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
    const written_banning_lewis_ranch = readFileSync(resolve(serverPrerenderedDir, "banning-lewis-ranch-colorado-springs-real-estate.html"), "utf-8");
    if (written_banning_lewis_ranch.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for banning-lewis-ranch");
    console.log("[prerender-all] Done: banning-lewis-ranch");
  }

  // --- calhan ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-calhan.js"));
    const html = ssrMod.renderCalhanCoRealEstate();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    // SEO injection
    // === SEO_INJECTED ===
      const _seoBlock = buildSeoHeadBlock({
        title: "Living in Calhan, CO: Real Estate, Tradeoffs, and What It's Like | MyRockHomes.com",
        description: 'Calhan usually stays in the conversation because it gives buyers a version of the move that can feel more open, more rural, and more affordable than most of Colorado Springs proper.',
        canonical: 'https://myrockhomes.com/calhan-co-real-estate/',
        ogImage: OG_IMAGE_DEFAULT,
        schemas: [
          ...BASE_SCHEMAS,
          buildBreadcrumbSchema([
            { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
            { "@type": "ListItem", position: 2, name: "Colorado Springs", item: "https://myrockhomes.com/colorado-springs-co-homes-for-sale" },
            { "@type": "ListItem", position: 3, name: "Living in Calhan, CO: Real Estate, Tradeoffs, and What It's Like", item: 'https://myrockhomes.com/calhan-co-real-estate/' },
          ]),
        ],
        slug: 'calhan-co-real-estate',
      });
      const _injectedHtml = injectSeoHead(prerenderedShell, _seoBlock, 'https://myrockhomes.com/calhan-co-real-estate/');

      mkdirSync(distOutputDir, { recursive: true });
      writeFileSync(resolve(distOutputDir, "calhan-co-real-estate.html"), prerenderedShell, "utf-8");
      const srcOutputDir = resolve(ROOT, "server/prerendered");
      mkdirSync(srcOutputDir, { recursive: true });
      const srcOutputPath = resolve(srcOutputDir, "calhan-co-real-estate.html");
      writeFileSync(srcOutputPath, _injectedHtml, "utf-8");
    const written_calhan = readFileSync(resolve(serverPrerenderedDir, "calhan-co-real-estate.html"), "utf-8");
    if (written_calhan.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for calhan");
    console.log("[prerender-all] Done: calhan");
  }

  // --- boulder-homes ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-boulder-homes.js"));
    const html = ssrMod.renderBoulderHomesForSale();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "boulder-homes-for-sale.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "boulder-homes-for-sale.html"), prerenderedShell, "utf-8");
    const written_boulder_homes = readFileSync(resolve(serverPrerenderedDir, "boulder-homes-for-sale.html"), "utf-8");
    if (written_boulder_homes.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for boulder-homes");
    console.log("[prerender-all] Done: boulder-homes");
  }

  // --- longmont ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-longmont.js"));
    const html = ssrMod.renderLongmontCoHomesForSale();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "longmont-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "longmont-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    const written_longmont = readFileSync(resolve(serverPrerenderedDir, "longmont-co-homes-for-sale.html"), "utf-8");
    if (written_longmont.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for longmont");
    console.log("[prerender-all] Done: longmont");
  }

  // --- lafayette ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-lafayette.js"));
    const html = ssrMod.renderLafayetteCoHomesForSale();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "lafayette-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "lafayette-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    const written_lafayette = readFileSync(resolve(serverPrerenderedDir, "lafayette-co-homes-for-sale.html"), "utf-8");
    if (written_lafayette.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for lafayette");
    console.log("[prerender-all] Done: lafayette");
  }

  // --- niwot ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-niwot.js"));
    const html = ssrMod.renderNiwotCoHomesForSale();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "niwot-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "niwot-co-homes-for-sale.html"), prerenderedShell, "utf-8");
    const written_niwot = readFileSync(resolve(serverPrerenderedDir, "niwot-co-homes-for-sale.html"), "utf-8");
    if (written_niwot.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for niwot");
    console.log("[prerender-all] Done: niwot");
  }

  // --- denver-condos ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-denver-condos.js"));
    const html = ssrMod.renderDenverCondosForSale();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "denver-condos-for-sale.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "denver-condos-for-sale.html"), prerenderedShell, "utf-8");
    const written_denver_condos = readFileSync(resolve(serverPrerenderedDir, "denver-condos-for-sale.html"), "utf-8");
    if (written_denver_condos.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for denver-condos");
    console.log("[prerender-all] Done: denver-condos");
  }

  // --- denver-townhomes ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-denver-townhomes.js"));
    const html = ssrMod.renderDenverTownhomesForSale();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "denver-townhomes-for-sale.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "denver-townhomes-for-sale.html"), prerenderedShell, "utf-8");
    const written_denver_townhomes = readFileSync(resolve(serverPrerenderedDir, "denver-townhomes-for-sale.html"), "utf-8");
    if (written_denver_townhomes.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for denver-townhomes");
    console.log("[prerender-all] Done: denver-townhomes");
  }

  // --- denver-luxury ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-denver-luxury.js"));
    const html = ssrMod.renderDenverLuxuryHomesForSale();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "denver-luxury-homes-for-sale.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "denver-luxury-homes-for-sale.html"), prerenderedShell, "utf-8");
    const written_denver_luxury = readFileSync(resolve(serverPrerenderedDir, "denver-luxury-homes-for-sale.html"), "utf-8");
    if (written_denver_luxury.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for denver-luxury");
    console.log("[prerender-all] Done: denver-luxury");
  }

  // --- denver-new-construction ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-denver-new-construction.js"));
    const html = ssrMod.renderDenverNewConstructionHomes();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "denver-new-construction-homes.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "denver-new-construction-homes.html"), prerenderedShell, "utf-8");
    const written_denver_new_construction = readFileSync(resolve(serverPrerenderedDir, "denver-new-construction-homes.html"), "utf-8");
    if (written_denver_new_construction.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for denver-new-construction");
    console.log("[prerender-all] Done: denver-new-construction");
  }

  // --- adams-county-vs-jefferson-county ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-adams-county-vs-jefferson-county.js"));
    const html = ssrMod.renderAdamsCountyVsJeffersonCounty();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "adams-county-vs-jefferson-county.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "adams-county-vs-jefferson-county.html"), prerenderedShell, "utf-8");
    const written_adams_county_vs_jefferson_county = readFileSync(resolve(serverPrerenderedDir, "adams-county-vs-jefferson-county.html"), "utf-8");
    if (written_adams_county_vs_jefferson_county.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for adams-county-vs-jefferson-county");
    console.log("[prerender-all] Done: adams-county-vs-jefferson-county");
  }

  // --- douglas-county-vs-weld-county ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-douglas-county-vs-weld-county.js"));
    const html = ssrMod.renderDouglasCountyVsWeldCounty();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "douglas-county-vs-weld-county.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "douglas-county-vs-weld-county.html"), prerenderedShell, "utf-8");
    const written_douglas_county_vs_weld_county = readFileSync(resolve(serverPrerenderedDir, "douglas-county-vs-weld-county.html"), "utf-8");
    if (written_douglas_county_vs_weld_county.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for douglas-county-vs-weld-county");
    console.log("[prerender-all] Done: douglas-county-vs-weld-county");
  }

  // --- boulder-vs-fort-collins ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-boulder-vs-fort-collins.js"));
    const html = ssrMod.renderBoulderVsFortCollins();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "boulder-vs-fort-collins.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "boulder-vs-fort-collins.html"), prerenderedShell, "utf-8");
    const written_boulder_vs_fort_collins = readFileSync(resolve(serverPrerenderedDir, "boulder-vs-fort-collins.html"), "utf-8");
    if (written_boulder_vs_fort_collins.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for boulder-vs-fort-collins");
    console.log("[prerender-all] Done: boulder-vs-fort-collins");
  }

  // --- denver-market-report-2025 ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-denver-market-report-2025.js"));
    const html = ssrMod.renderDenverMarketReport2025();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    mkdirSync(serverPrerenderedDir, { recursive: true });
    writeFileSync(resolve(serverPrerenderedDir, "denver-real-estate-market-report-2025.html"), prerenderedShell, "utf-8");
    mkdirSync(distPrerenderedDir, { recursive: true });
    writeFileSync(resolve(distPrerenderedDir, "denver-real-estate-market-report-2025.html"), prerenderedShell, "utf-8");
    const written_denver_market_report_2025 = readFileSync(resolve(serverPrerenderedDir, "denver-real-estate-market-report-2025.html"), "utf-8");
    if (written_denver_market_report_2025.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for denver-market-report-2025");
    console.log("[prerender-all] Done: denver-market-report-2025");
  }

  // --- denver-vs-colorado-springs ---
  {
    const ssrMod = await import(resolve(ROOT, "dist/server/entry-server-denver-vs-colorado-springs.js"));
    const html = ssrMod.renderDenverVsColoradoSprings();
    const prerenderedShell = shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`);
    // SEO injection
    // === SEO_INJECTED ===
      const _seoBlock = buildSeoHeadBlock({
        title: 'Denver vs Colorado Springs | Colorado City Comparison for Home Buyers',
        description: 'Denver vs Colorado Springs comparison for home buyers. Compare neighborhoods, markets, lifestyle, commute, and cost to decide which Colorado city fits your move.',
        canonical: 'https://myrockhomes.com/denver-vs-colorado-springs',
        ogImage: OG_IMAGE_DEFAULT,
        schemas: [
          ...BASE_SCHEMAS,
          buildBreadcrumbSchema([
            { "@type": "ListItem", position: 1, name: "Home", item: "https://myrockhomes.com/" },
            { "@type": "ListItem", position: 2, name: "Colorado Springs", item: "https://myrockhomes.com/colorado-springs-co-homes-for-sale" },
            { "@type": "ListItem", position: 3, name: 'Denver vs Colorado Springs', item: 'https://myrockhomes.com/denver-vs-colorado-springs' },
          ]),
        ],
        slug: 'denver-vs-colorado-springs',
      });
      const _injectedHtml = injectSeoHead(prerenderedShell, _seoBlock, 'https://myrockhomes.com/denver-vs-colorado-springs');

      mkdirSync(distOutputDir, { recursive: true });
      writeFileSync(resolve(distOutputDir, "denver-vs-colorado-springs.html"), prerenderedShell, "utf-8");
      const srcOutputDir = resolve(ROOT, "server/prerendered");
      mkdirSync(srcOutputDir, { recursive: true });
      const srcOutputPath = resolve(srcOutputDir, "denver-vs-colorado-springs.html");
      writeFileSync(srcOutputPath, _injectedHtml, "utf-8");
    const written_denver_vs_colorado_springs = readFileSync(resolve(serverPrerenderedDir, "denver-vs-colorado-springs.html"), "utf-8");
    if (written_denver_vs_colorado_springs.includes('<div id="root"></div>')) throw new Error("[prerender-all] FAIL: root still empty for denver-vs-colorado-springs");
    console.log("[prerender-all] Done: denver-vs-colorado-springs");
  }

  console.log("[prerender-all] All 96 routes complete.");
}

prerenderAll().catch((err) => {
  console.error("[prerender-all] FAILED:", err.message);
  process.exit(1);
});
