/**
 * IL-31 Selective Prerender — SSR Entry for /pine-creek-colorado-springs-real-estate
 * Scope: /pine-creek-colorado-springs-real-estate only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import PineCreekColoradoSpringsRealEstate from "./pages/PineCreekColoradoSpringsRealEstate";
export function renderPineCreekColoradoSpringsRealEstate(): string {
  const { hook } = memoryLocation({ path: "/pine-creek-colorado-springs-real-estate", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <PineCreekColoradoSpringsRealEstate />
      </Router>
    </ThemeProvider>
  );
  return html;
}
