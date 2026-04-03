/**
 * IL-117 Selective Prerender — SSR Entry for /highland-denver-homes-for-sale
 * Scope: /highland-denver-homes-for-sale only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import HighlandDenverHomesForSale from "./pages/HighlandDenverHomesForSale";
export function renderHighlandDenverHomesForSale(): string {
  const { hook } = memoryLocation({ path: "/highland-denver-homes-for-sale", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <HighlandDenverHomesForSale />
      </Router>
    </ThemeProvider>
  );
  return html;
}
