/**
 * IL-92 Selective Prerender — SSR Entry for /adams-county-vs-jefferson-county
 * Scope: /adams-county-vs-jefferson-county only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import AdamsCountyVsJeffersonCounty from "./pages/AdamsCountyVsJeffersonCounty";
export function renderAdamsCountyVsJeffersonCounty(): string {
  const { hook } = memoryLocation({ path: "/adams-county-vs-jefferson-county", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <AdamsCountyVsJeffersonCounty />
      </Router>
    </ThemeProvider>
  );
  return html;
}
