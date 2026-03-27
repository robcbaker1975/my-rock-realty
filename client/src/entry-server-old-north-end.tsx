/**
 * IL-35 Selective Prerender — SSR Entry for /old-north-end-colorado-springs-real-estate
 * Scope: /old-north-end-colorado-springs-real-estate only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import OldNorthEndColoradoSpringsRealEstate from "./pages/OldNorthEndColoradoSpringsRealEstate";
export function renderOldNorthEndColoradoSpringsRealEstate(): string {
  const { hook } = memoryLocation({ path: "/old-north-end-colorado-springs-real-estate", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <OldNorthEndColoradoSpringsRealEstate />
      </Router>
    </ThemeProvider>
  );
  return html;
}
