/**
 * IL-02 Selective Prerender — SSR Entry for /colorado-springs-co-homes-for-sale
 *
 * This file is the SSR entry point used exclusively by scripts/prerender-colorado-springs.mjs.
 * It renders ColoradoSpringsCoHomesForSale in a Node.js context using Wouter memoryLocation.
 *
 * Scope: /colorado-springs-co-homes-for-sale only. Do not add other routes here.
 * Do not import this file in the client bundle (it is not referenced in main.tsx or App.tsx).
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import ColoradoSpringsCoHomesForSale from "./pages/ColoradoSpringsCoHomesForSale";

export function renderColoradoSpringsCoHomesForSale(): string {
  const { hook } = memoryLocation({ path: "/colorado-springs-co-homes-for-sale", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <ColoradoSpringsCoHomesForSale />
      </Router>
    </ThemeProvider>
  );
  return html;
}
