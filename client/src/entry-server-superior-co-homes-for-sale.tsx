/**
 * IL-99 Selective Prerender — SSR Entry for /superior-co-homes-for-sale
 * Scope: /superior-co-homes-for-sale only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import SuperiorCoHomesForSale from "./pages/SuperiorCoHomesForSale";
export function renderSuperiorCoHomesForSale(): string {
  const { hook } = memoryLocation({ path: "/superior-co-homes-for-sale", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <SuperiorCoHomesForSale />
      </Router>
    </ThemeProvider>
  );
  return html;
}
