/**
 * IL-28 Selective Prerender — SSR Entry for /northgate-colorado-springs-real-estate
 * Scope: /northgate-colorado-springs-real-estate only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import NorthgateColoradoSpringsRealEstate from "./pages/NorthgateColoradoSpringsRealEstate";
export function renderNorthgateColoradoSpringsRealEstate(): string {
  const { hook } = memoryLocation({ path: "/northgate-colorado-springs-real-estate", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <NorthgateColoradoSpringsRealEstate />
      </Router>
    </ThemeProvider>
  );
  return html;
}
