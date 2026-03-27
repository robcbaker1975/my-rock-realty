/**
 * IL-05 Selective Prerender — SSR Entry for /peyton-co-real-estate
 * Scope: /peyton-co-real-estate only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import PeytonCoRealEstate from "./pages/PeytonCoRealEstate";

export function renderPeytonCoRealEstate(): string {
  const { hook } = memoryLocation({ path: "/peyton-co-real-estate", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <PeytonCoRealEstate />
      </Router>
    </ThemeProvider>
  );
  return html;
}
