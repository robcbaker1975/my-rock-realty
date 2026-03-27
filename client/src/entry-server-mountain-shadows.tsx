/**
 * IL-32 Selective Prerender — SSR Entry for /mountain-shadows-colorado-springs-real-estate
 * Scope: /mountain-shadows-colorado-springs-real-estate only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import MountainShadowsColoradoSpringsRealEstate from "./pages/MountainShadowsColoradoSpringsRealEstate";
export function renderMountainShadowsColoradoSpringsRealEstate(): string {
  const { hook } = memoryLocation({ path: "/mountain-shadows-colorado-springs-real-estate", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <MountainShadowsColoradoSpringsRealEstate />
      </Router>
    </ThemeProvider>
  );
  return html;
}
