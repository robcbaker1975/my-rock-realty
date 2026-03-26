/**
 * IL-01 Selective Prerender — SSR Entry for /denver-homes-for-sale
 *
 * This file is the SSR entry point used exclusively by scripts/prerender-denver.mjs.
 * It renders DenverHomesForSale in a Node.js context using Wouter memoryLocation.
 *
 * Scope: /denver-homes-for-sale only. Do not add other routes here.
 * Do not import this file in the client bundle (it is not referenced in main.tsx or App.tsx).
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import DenverHomesForSale from "./pages/DenverHomesForSale";

export function renderDenverHomesForSale(): string {
  const { hook } = memoryLocation({ path: "/denver-homes-for-sale", static: true });

  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <DenverHomesForSale />
      </Router>
    </ThemeProvider>
  );

  return html;
}
