/**
 * IL-89 Selective Prerender — SSR Entry for /denver-townhomes-for-sale
 * Scope: /denver-townhomes-for-sale only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import DenverTownhomesForSale from "./pages/DenverTownhomesForSale";
export function renderDenverTownhomesForSale(): string {
  const { hook } = memoryLocation({ path: "/denver-townhomes-for-sale", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <DenverTownhomesForSale />
      </Router>
    </ThemeProvider>
  );
  return html;
}
