/**
 * IL-41 Selective Prerender — SSR Entry for /central-park-denver-homes-for-sale
 * Scope: /central-park-denver-homes-for-sale only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import CentralParkDenverHomesForSale from "./pages/CentralParkDenverHomesForSale";
export function renderCentralParkDenverHomesForSale(): string {
  const { hook } = memoryLocation({ path: "/central-park-denver-homes-for-sale", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <CentralParkDenverHomesForSale />
      </Router>
    </ThemeProvider>
  );
  return html;
}
