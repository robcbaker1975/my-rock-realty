/**
 * IL-26 Selective Prerender — SSR Entry for /manitou-springs-co-real-estate
 * Scope: /manitou-springs-co-real-estate only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import ManitouSpringsCoRealEstate from "./pages/ManitouSpringsCoRealEstate";
export function renderManitouSpringsCoRealEstate(): string {
  const { hook } = memoryLocation({ path: "/manitou-springs-co-real-estate", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <ManitouSpringsCoRealEstate />
      </Router>
    </ThemeProvider>
  );
  return html;
}
