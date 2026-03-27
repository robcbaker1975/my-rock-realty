/**
 * IL-40 Selective Prerender — SSR Entry for /rino-denver-homes-for-sale
 * Scope: /rino-denver-homes-for-sale only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import RinoDenverHomesForSale from "./pages/RinoDenverHomesForSale";
export function renderRinoDenverHomesForSale(): string {
  const { hook } = memoryLocation({ path: "/rino-denver-homes-for-sale", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <RinoDenverHomesForSale />
      </Router>
    </ThemeProvider>
  );
  return html;
}
