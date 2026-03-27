/**
 * IL-49 Selective Prerender — SSR Entry for /evans-co-homes-for-sale
 * Scope: /evans-co-homes-for-sale only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import EvansCoHomesForSale from "./pages/EvansCoHomesForSale";
export function renderEvansCoHomesForSale(): string {
  const { hook } = memoryLocation({ path: "/evans-co-homes-for-sale", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <EvansCoHomesForSale />
      </Router>
    </ThemeProvider>
  );
  return html;
}
