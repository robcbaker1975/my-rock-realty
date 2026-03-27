/**
 * IL-90 Selective Prerender — SSR Entry for /denver-luxury-homes-for-sale
 * Scope: /denver-luxury-homes-for-sale only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import DenverLuxuryHomesForSale from "./pages/DenverLuxuryHomesForSale";
export function renderDenverLuxuryHomesForSale(): string {
  const { hook } = memoryLocation({ path: "/denver-luxury-homes-for-sale", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <DenverLuxuryHomesForSale />
      </Router>
    </ThemeProvider>
  );
  return html;
}
