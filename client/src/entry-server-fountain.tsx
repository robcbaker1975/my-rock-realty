/**
 * IL-24 Selective Prerender — SSR Entry for /fountain-co-real-estate
 * Scope: /fountain-co-real-estate only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import FountainCoRealEstate from "./pages/FountainCoRealEstate";
export function renderFountainCoRealEstate(): string {
  const { hook } = memoryLocation({ path: "/fountain-co-real-estate", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <FountainCoRealEstate />
      </Router>
    </ThemeProvider>
  );
  return html;
}
