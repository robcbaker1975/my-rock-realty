/**
 * IL-20 Selective Prerender — SSR Entry for /lone-tree-co-homes-for-sale
 *
 * This file is the SSR entry point used exclusively by scripts/prerender-lone-tree.mjs.
 * It renders LoneTreeCoHomesForSale in a Node.js context using Wouter memoryLocation.
 *
 * Scope: /lone-tree-co-homes-for-sale only. Do not add other routes here.
 * Do not import this file in the client bundle (it is not referenced in main.tsx or App.tsx).
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import LoneTreeCoHomesForSale from "./pages/LoneTreeCoHomesForSale";

export function renderLoneTreeCoHomesForSale(): string {
  const { hook } = memoryLocation({ path: "/lone-tree-co-homes-for-sale", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <LoneTreeCoHomesForSale />
      </Router>
    </ThemeProvider>
  );
  return html;
}
