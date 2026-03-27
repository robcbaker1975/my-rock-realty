/**
 * IL-36 Selective Prerender — SSR Entry for /broadmoor-cheyenne-mountain-colorado-springs-real-estate
 * Scope: /broadmoor-cheyenne-mountain-colorado-springs-real-estate only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import BroadmoorCheyenneMountainColoradoSpringsRealEstate from "./pages/BroadmoorCheyenneMountainColoradoSpringsRealEstate";
export function renderBroadmoorCheyenneMountainColoradoSpringsRealEstate(): string {
  const { hook } = memoryLocation({ path: "/broadmoor-cheyenne-mountain-colorado-springs-real-estate", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <BroadmoorCheyenneMountainColoradoSpringsRealEstate />
      </Router>
    </ThemeProvider>
  );
  return html;
}
