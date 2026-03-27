/**
 * IL-18 Selective Prerender — SSR Entry for /castle-pines-co-homes-for-sale
 *
 * This file is the SSR entry point used exclusively by scripts/prerender-castle-pines.mjs.
 * It renders CastlePinesCoHomesForSale in a Node.js context using Wouter memoryLocation.
 *
 * Scope: /castle-pines-co-homes-for-sale only. Do not add other routes here.
 * Do not import this file in the client bundle (it is not referenced in main.tsx or App.tsx).
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import CastlePinesCoHomesForSale from "./pages/CastlePinesCoHomesForSale";

export function renderCastlePinesCoHomesForSale(): string {
  const { hook } = memoryLocation({ path: "/castle-pines-co-homes-for-sale", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <CastlePinesCoHomesForSale />
      </Router>
    </ThemeProvider>
  );
  return html;
}
