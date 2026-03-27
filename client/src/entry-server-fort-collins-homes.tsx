/**
 * IL-47 Selective Prerender — SSR Entry for /fort-collins-homes-for-sale
 * Scope: /fort-collins-homes-for-sale only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import FortCollinsHomesForSale from "./pages/FortCollinsHomesForSale";
export function renderFortCollinsHomesForSale(): string {
  const { hook } = memoryLocation({ path: "/fort-collins-homes-for-sale", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <FortCollinsHomesForSale />
      </Router>
    </ThemeProvider>
  );
  return html;
}
