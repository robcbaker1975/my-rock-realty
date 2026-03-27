/**
 * IL-45 Selective Prerender — SSR Entry for /lakewood-co-homes-for-sale
 * Scope: /lakewood-co-homes-for-sale only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import LakewoodCoHomesForSale from "./pages/LakewoodCoHomesForSale";
export function renderLakewoodCoHomesForSale(): string {
  const { hook } = memoryLocation({ path: "/lakewood-co-homes-for-sale", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <LakewoodCoHomesForSale />
      </Router>
    </ThemeProvider>
  );
  return html;
}
