/**
 * IL-99 Selective Prerender — SSR Entry for /niwot-co-real-estate
 * Scope: /niwot-co-real-estate only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import NiwotCoRealEstate from "./pages/NiwotCoRealEstate";
export function renderNiwotCoRealEstate(): string {
  const { hook } = memoryLocation({ path: "/niwot-co-real-estate", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <NiwotCoRealEstate />
      </Router>
    </ThemeProvider>
  );
  return html;
}
