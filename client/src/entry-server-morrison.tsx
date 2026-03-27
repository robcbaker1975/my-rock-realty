/**
 * IL-46 Selective Prerender — SSR Entry for /morrison-co-homes-for-sale
 * Scope: /morrison-co-homes-for-sale only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import MorrisonCoHomesForSale from "./pages/MorrisonCoHomesForSale";
export function renderMorrisonCoHomesForSale(): string {
  const { hook } = memoryLocation({ path: "/morrison-co-homes-for-sale", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <MorrisonCoHomesForSale />
      </Router>
    </ThemeProvider>
  );
  return html;
}
