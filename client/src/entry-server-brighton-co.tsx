/**
 * IL-44 Selective Prerender — SSR Entry for /brighton-co-homes-for-sale
 * Scope: /brighton-co-homes-for-sale only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import BrightonCoHomesForSale from "./pages/BrightonCoHomesForSale";
export function renderBrightonCoHomesForSale(): string {
  const { hook } = memoryLocation({ path: "/brighton-co-homes-for-sale", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <BrightonCoHomesForSale />
      </Router>
    </ThemeProvider>
  );
  return html;
}
