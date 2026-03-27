/**
 * IL-03 Selective Prerender — SSR Entry for /boulder-co-homes-for-sale
 *
 * This file is the SSR entry point used exclusively by scripts/prerender-boulder.mjs.
 * It renders BoulderCoHomesForSale in a Node.js context using Wouter memoryLocation.
 *
 * Scope: /boulder-co-homes-for-sale only. Do not add other routes here.
 * Do not import this file in the client bundle (it is not referenced in main.tsx or App.tsx).
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import BoulderCoHomesForSale from "./pages/BoulderCoHomesForSale";

export function renderBoulderCoHomesForSale(): string {
  const { hook } = memoryLocation({ path: "/boulder-co-homes-for-sale", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <BoulderCoHomesForSale />
      </Router>
    </ThemeProvider>
  );
  return html;
}
