/**
 * IL-30 Selective Prerender — SSR Entry for /cordera-colorado-springs-real-estate
 * Scope: /cordera-colorado-springs-real-estate only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import CorderaColoradoSpringsRealEstate from "./pages/CorderaColoradoSpringsRealEstate";
export function renderCorderaColoradoSpringsRealEstate(): string {
  const { hook } = memoryLocation({ path: "/cordera-colorado-springs-real-estate", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <CorderaColoradoSpringsRealEstate />
      </Router>
    </ThemeProvider>
  );
  return html;
}
