/**
 * IL-16 Selective Prerender — SSR Entry for /greeley-co-homes-for-sale
 *
 * This file is the SSR entry point used exclusively by scripts/prerender-greeley.mjs.
 * It renders GreeleyCoHomesForSale in a Node.js context using Wouter memoryLocation.
 *
 * Scope: /greeley-co-homes-for-sale only. Do not add other routes here.
 * Do not import this file in the client bundle (it is not referenced in main.tsx or App.tsx).
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import GreeleyCoHomesForSale from "./pages/GreeleyCoHomesForSale";

export function renderGreeleyCoHomesForSale(): string {
  const { hook } = memoryLocation({ path: "/greeley-co-homes-for-sale", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <GreeleyCoHomesForSale />
      </Router>
    </ThemeProvider>
  );
  return html;
}
