/**
 * IL-25 Selective Prerender — SSR Entry for /woodland-park-co-real-estate
 * Scope: /woodland-park-co-real-estate only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import WoodlandParkCoRealEstate from "./pages/WoodlandParkCoRealEstate";
export function renderWoodlandParkCoRealEstate(): string {
  const { hook } = memoryLocation({ path: "/woodland-park-co-real-estate", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <WoodlandParkCoRealEstate />
      </Router>
    </ThemeProvider>
  );
  return html;
}
