/**
 * IL-14 Selective Prerender — SSR Entry for /windsor-co-homes-for-sale
 *
 * This file is the SSR entry point used exclusively by scripts/prerender-windsor.mjs.
 * It renders WindsorCoHomesForSale in a Node.js context using Wouter memoryLocation.
 *
 * Scope: /windsor-co-homes-for-sale only. Do not add other routes here.
 * Do not import this file in the client bundle (it is not referenced in main.tsx or App.tsx).
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import WindsorCoHomesForSale from "./pages/WindsorCoHomesForSale";

export function renderWindsorCoHomesForSale(): string {
  const { hook } = memoryLocation({ path: "/windsor-co-homes-for-sale", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <WindsorCoHomesForSale />
      </Router>
    </ThemeProvider>
  );
  return html;
}
