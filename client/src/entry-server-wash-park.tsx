/**
 * IL-37 Selective Prerender — SSR Entry for /wash-park-denver-homes-for-sale
 * Scope: /wash-park-denver-homes-for-sale only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import WashParkDenverHomesForSale from "./pages/WashParkDenverHomesForSale";
export function renderWashParkDenverHomesForSale(): string {
  const { hook } = memoryLocation({ path: "/wash-park-denver-homes-for-sale", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <WashParkDenverHomesForSale />
      </Router>
    </ThemeProvider>
  );
  return html;
}
