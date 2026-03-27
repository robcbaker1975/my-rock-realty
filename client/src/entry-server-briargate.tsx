/**
 * IL-27 Selective Prerender — SSR Entry for /briargate-colorado-springs-real-estate
 * Scope: /briargate-colorado-springs-real-estate only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import BriargateColoradoSpringsRealEstate from "./pages/BriargateColoradoSpringsRealEstate";
export function renderBriargateColoradoSpringsRealEstate(): string {
  const { hook } = memoryLocation({ path: "/briargate-colorado-springs-real-estate", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <BriargateColoradoSpringsRealEstate />
      </Router>
    </ThemeProvider>
  );
  return html;
}
