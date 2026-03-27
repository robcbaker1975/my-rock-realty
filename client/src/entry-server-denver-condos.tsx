/**
 * IL-88 Selective Prerender — SSR Entry for /denver-condos-for-sale
 * Scope: /denver-condos-for-sale only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import DenverCondosForSale from "./pages/DenverCondosForSale";
export function renderDenverCondosForSale(): string {
  const { hook } = memoryLocation({ path: "/denver-condos-for-sale", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <DenverCondosForSale />
      </Router>
    </ThemeProvider>
  );
  return html;
}
