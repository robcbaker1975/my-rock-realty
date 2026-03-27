/**
 * IL-33 Selective Prerender — SSR Entry for /peregrine-colorado-springs-real-estate
 * Scope: /peregrine-colorado-springs-real-estate only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import PeregrineColoradoSpringsRealEstate from "./pages/PeregrineColoradoSpringsRealEstate";
export function renderPeregrineColoradoSpringsRealEstate(): string {
  const { hook } = memoryLocation({ path: "/peregrine-colorado-springs-real-estate", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <PeregrineColoradoSpringsRealEstate />
      </Router>
    </ThemeProvider>
  );
  return html;
}
