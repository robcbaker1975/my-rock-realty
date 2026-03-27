/**
 * IL-46 Selective Prerender — SSR Entry for /northglenn-co-homes-for-sale
 * Scope: /northglenn-co-homes-for-sale only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import NorthglennCoHomesForSale from "./pages/NorthglennCoHomesForSale";
export function renderNorthglennCoHomesForSale(): string {
  const { hook } = memoryLocation({ path: "/northglenn-co-homes-for-sale", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <NorthglennCoHomesForSale />
      </Router>
    </ThemeProvider>
  );
  return html;
}
