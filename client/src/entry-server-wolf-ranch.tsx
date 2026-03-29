/**
 * Selective Prerender — SSR Entry for /wolf-ranch-colorado-springs-real-estate
 * Scope: /wolf-ranch-colorado-springs-real-estate only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import WolfRanchColoradoSpringsRealEstate from "./pages/WolfRanchColoradoSpringsRealEstate";
export function renderWolfRanchColoradoSpringsRealEstate(): string {
  const { hook } = memoryLocation({ path: "/wolf-ranch-colorado-springs-real-estate", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <WolfRanchColoradoSpringsRealEstate />
      </Router>
    </ThemeProvider>
  );
  return html;
}
