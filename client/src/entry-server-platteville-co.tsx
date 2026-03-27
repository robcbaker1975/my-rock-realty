/**
 * IL-50 Selective Prerender — SSR Entry for /platteville-co-homes-for-sale
 * Scope: /platteville-co-homes-for-sale only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import PlattevilleCoHomesForSale from "./pages/PlattevilleCoHomesForSale";
export function renderPlattevilleCoHomesForSale(): string {
  const { hook } = memoryLocation({ path: "/platteville-co-homes-for-sale", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <PlattevilleCoHomesForSale />
      </Router>
    </ThemeProvider>
  );
  return html;
}
