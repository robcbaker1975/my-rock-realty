/**
 * IL-95 Selective Prerender — SSR Entry for /blog/denver-real-estate-market-report-2025/
 * Scope: /blog/denver-real-estate-market-report-2025/ only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import DenverMarketReport2025 from "./pages/DenverMarketReport2025";
export function renderDenverMarketReport2025(): string {
  const { hook } = memoryLocation({ path: "/blog/denver-real-estate-market-report-2025/", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <DenverMarketReport2025 />
      </Router>
    </ThemeProvider>
  );
  return html;
}
