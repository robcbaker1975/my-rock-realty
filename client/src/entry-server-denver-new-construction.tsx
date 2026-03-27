/**
 * IL-91 Selective Prerender — SSR Entry for /denver-new-construction-homes
 * Scope: /denver-new-construction-homes only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import DenverNewConstructionHomes from "./pages/DenverNewConstructionHomes";
export function renderDenverNewConstructionHomes(): string {
  const { hook } = memoryLocation({ path: "/denver-new-construction-homes", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <DenverNewConstructionHomes />
      </Router>
    </ThemeProvider>
  );
  return html;
}
