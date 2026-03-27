/**
 * IL-04 Selective Prerender — SSR Entry for /black-forest-co-real-estate
 * Scope: /black-forest-co-real-estate only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import BlackForestCoRealEstate from "./pages/BlackForestCoRealEstate";

export function renderBlackForestCoRealEstate(): string {
  const { hook } = memoryLocation({ path: "/black-forest-co-real-estate", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <BlackForestCoRealEstate />
      </Router>
    </ThemeProvider>
  );
  return html;
}
