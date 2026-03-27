/**
 * IL-21 Selective Prerender — SSR Entry for /westminster-co-homes-for-sale
 *
 * This file is the SSR entry point used exclusively by scripts/prerender-westminster.mjs.
 * It renders WestminsterCoHomesForSale in a Node.js context using Wouter memoryLocation.
 *
 * Scope: /westminster-co-homes-for-sale only. Do not add other routes here.
 * Do not import this file in the client bundle (it is not referenced in main.tsx or App.tsx).
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import WestminsterCoHomesForSale from "./pages/WestminsterCoHomesForSale";

export function renderWestminsterCoHomesForSale(): string {
  const { hook } = memoryLocation({ path: "/westminster-co-homes-for-sale", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <WestminsterCoHomesForSale />
      </Router>
    </ThemeProvider>
  );
  return html;
}
