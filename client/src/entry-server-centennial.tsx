/**
 * IL-19 Selective Prerender — SSR Entry for /centennial-co-homes-for-sale
 *
 * This file is the SSR entry point used exclusively by scripts/prerender-centennial.mjs.
 * It renders CentennialCoHomesForSale in a Node.js context using Wouter memoryLocation.
 *
 * Scope: /centennial-co-homes-for-sale only. Do not add other routes here.
 * Do not import this file in the client bundle (it is not referenced in main.tsx or App.tsx).
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import CentennialCoHomesForSale from "./pages/CentennialCoHomesForSale";

export function renderCentennialCoHomesForSale(): string {
  const { hook } = memoryLocation({ path: "/centennial-co-homes-for-sale", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <CentennialCoHomesForSale />
      </Router>
    </ThemeProvider>
  );
  return html;
}
