/**
 * IL-116 Selective Prerender — SSR Entry for /platt-park-denver-homes-for-sale
 * Scope: /platt-park-denver-homes-for-sale only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import PlattParkDenverHomesForSale from "./pages/PlattParkDenverHomesForSale";
export function renderPlattParkDenverHomesForSale(): string {
  const { hook } = memoryLocation({ path: "/platt-park-denver-homes-for-sale", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <PlattParkDenverHomesForSale />
      </Router>
    </ThemeProvider>
  );
  return html;
}
