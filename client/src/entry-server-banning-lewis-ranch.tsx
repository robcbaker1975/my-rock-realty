/**
 * IL-82 Selective Prerender — SSR Entry for /banning-lewis-ranch-colorado-springs-real-estate
 * Scope: /banning-lewis-ranch-colorado-springs-real-estate only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import BanningLewisRanchColoradoSpringsRealEstate from "./pages/BanningLewisRanchColoradoSpringsRealEstate";
export function renderBanningLewisRanchColoradoSpringsRealEstate(): string {
  const { hook } = memoryLocation({ path: "/banning-lewis-ranch-colorado-springs-real-estate", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <BanningLewisRanchColoradoSpringsRealEstate />
      </Router>
    </ThemeProvider>
  );
  return html;
}
