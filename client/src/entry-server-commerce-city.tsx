/**
 * IL-43 Selective Prerender — SSR Entry for /commerce-city-homes-for-sale
 * Scope: /commerce-city-homes-for-sale only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import CommerceCityHomesForSale from "./pages/CommerceCityHomesForSale";
export function renderCommerceCityHomesForSale(): string {
  const { hook } = memoryLocation({ path: "/commerce-city-homes-for-sale", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <CommerceCityHomesForSale />
      </Router>
    </ThemeProvider>
  );
  return html;
}
