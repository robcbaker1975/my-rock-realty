/**
 * IL-34 Selective Prerender — SSR Entry for /old-colorado-city-colorado-springs-real-estate
 * Scope: /old-colorado-city-colorado-springs-real-estate only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import OldColoradoCityColoradoSpringsRealEstate from "./pages/OldColoradoCityColoradoSpringsRealEstate";
export function renderOldColoradoCityColoradoSpringsRealEstate(): string {
  const { hook } = memoryLocation({ path: "/old-colorado-city-colorado-springs-real-estate", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <OldColoradoCityColoradoSpringsRealEstate />
      </Router>
    </ThemeProvider>
  );
  return html;
}
