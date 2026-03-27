/**
 * IL-93 Selective Prerender — SSR Entry for /douglas-county-vs-weld-county
 * Scope: /douglas-county-vs-weld-county only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import DouglasCountyVsWeldCounty from "./pages/DouglasCountyVsWeldCounty";
export function renderDouglasCountyVsWeldCounty(): string {
  const { hook } = memoryLocation({ path: "/douglas-county-vs-weld-county", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <DouglasCountyVsWeldCounty />
      </Router>
    </ThemeProvider>
  );
  return html;
}
