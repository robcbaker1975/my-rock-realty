/**
 * IL-86 Selective Prerender — SSR Entry for /lafayette-co-homes-for-sale
 * Scope: /lafayette-co-homes-for-sale only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import LafayetteCoHomesForSale from "./pages/LafayetteCoHomesForSale";
export function renderLafayetteCoHomesForSale(): string {
  const { hook } = memoryLocation({ path: "/lafayette-co-homes-for-sale", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <LafayetteCoHomesForSale />
      </Router>
    </ThemeProvider>
  );
  return html;
}
