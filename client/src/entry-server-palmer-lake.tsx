/**
 * IL-06 Selective Prerender — SSR Entry for /palmer-lake-co-real-estate
 * Scope: /palmer-lake-co-real-estate only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import PalmerLakeCoRealEstate from "./pages/PalmerLakeCoRealEstate";

export function renderPalmerLakeCoRealEstate(): string {
  const { hook } = memoryLocation({ path: "/palmer-lake-co-real-estate", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <PalmerLakeCoRealEstate />
      </Router>
    </ThemeProvider>
  );
  return html;
}
