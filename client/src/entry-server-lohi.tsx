/**
 * IL-39 Selective Prerender — SSR Entry for /lohi-denver-homes-for-sale
 * Scope: /lohi-denver-homes-for-sale only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import LohiDenverHomesForSale from "./pages/LohiDenverHomesForSale";
export function renderLohiDenverHomesForSale(): string {
  const { hook } = memoryLocation({ path: "/lohi-denver-homes-for-sale", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <LohiDenverHomesForSale />
      </Router>
    </ThemeProvider>
  );
  return html;
}
