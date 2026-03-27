/**
 * IL-84 Selective Prerender — SSR Entry for /boulder-homes-for-sale
 * Scope: /boulder-homes-for-sale only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import BoulderHomesForSale from "./pages/BoulderHomesForSale";
export function renderBoulderHomesForSale(): string {
  const { hook } = memoryLocation({ path: "/boulder-homes-for-sale", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <BoulderHomesForSale />
      </Router>
    </ThemeProvider>
  );
  return html;
}
