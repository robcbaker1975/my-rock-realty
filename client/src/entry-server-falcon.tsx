/**
 * IL-23 Selective Prerender — SSR Entry for /falcon-co-real-estate
 * Scope: /falcon-co-real-estate only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import FalconCoRealEstate from "./pages/FalconCoRealEstate";
export function renderFalconCoRealEstate(): string {
  const { hook } = memoryLocation({ path: "/falcon-co-real-estate", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <FalconCoRealEstate />
      </Router>
    </ThemeProvider>
  );
  return html;
}
