/**
 * IL-29 Selective Prerender — SSR Entry for /flying-horse-colorado-springs-real-estate
 * Scope: /flying-horse-colorado-springs-real-estate only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import FlyingHorseColoradoSpringsRealEstate from "./pages/FlyingHorseColoradoSpringsRealEstate";
export function renderFlyingHorseColoradoSpringsRealEstate(): string {
  const { hook } = memoryLocation({ path: "/flying-horse-colorado-springs-real-estate", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <FlyingHorseColoradoSpringsRealEstate />
      </Router>
    </ThemeProvider>
  );
  return html;
}
