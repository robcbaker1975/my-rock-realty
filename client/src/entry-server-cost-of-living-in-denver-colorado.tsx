/**
 * IL-45 Selective Prerender — SSR Entry for /cost-of-living-in-denver-colorado
 * Scope: /cost-of-living-in-denver-colorado only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import CostOfLivingInDenverColorado from "./pages/CostOfLivingInDenverColorado";
export function renderCostOfLivingInDenverColorado(): string {
  const { hook } = memoryLocation({ path: "/cost-of-living-in-denver-colorado", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <CostOfLivingInDenverColorado />
      </Router>
    </ThemeProvider>
  );
  return html;
}
