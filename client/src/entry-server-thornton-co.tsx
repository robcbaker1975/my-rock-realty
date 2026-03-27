/**
 * IL-45 Selective Prerender — SSR Entry for /thornton-co-homes-for-sale
 * Scope: /thornton-co-homes-for-sale only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import ThorntonCoHomesForSale from "./pages/ThorntonCoHomesForSale";
export function renderThorntonCoHomesForSale(): string {
  const { hook } = memoryLocation({ path: "/thornton-co-homes-for-sale", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <ThorntonCoHomesForSale />
      </Router>
    </ThemeProvider>
  );
  return html;
}
