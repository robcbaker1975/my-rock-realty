/**
 * IL-12 Selective Prerender — SSR Entry for /fort-collins-co-homes-for-sale
 *
 * This file is the SSR entry point used exclusively by scripts/prerender-fort-collins.mjs.
 * It renders FortCollinsCoHomesForSale in a Node.js context using Wouter memoryLocation.
 *
 * Scope: /fort-collins-co-homes-for-sale only. Do not add other routes here.
 * Do not import this file in the client bundle (it is not referenced in main.tsx or App.tsx).
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import FortCollinsCoHomesForSale from "./pages/FortCollinsCoHomesForSale";

export function renderFortCollinsCoHomesForSale(): string {
  const { hook } = memoryLocation({ path: "/fort-collins-co-homes-for-sale", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <FortCollinsCoHomesForSale />
      </Router>
    </ThemeProvider>
  );
  return html;
}
