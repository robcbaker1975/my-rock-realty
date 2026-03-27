/**
 * IL-44 Selective Prerender — SSR Entry for /golden-homes-for-sale
 * Scope: /golden-homes-for-sale only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import GoldenHomesForSale from "./pages/GoldenHomesForSale";
export function renderGoldenHomesForSale(): string {
  const { hook } = memoryLocation({ path: "/golden-homes-for-sale", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <GoldenHomesForSale />
      </Router>
    </ThemeProvider>
  );
  return html;
}
