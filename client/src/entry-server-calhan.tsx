/**
 * IL-83 Selective Prerender — SSR Entry for /calhan-co-real-estate
 * Scope: /calhan-co-real-estate only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import CalhanCoRealEstate from "./pages/CalhanCoRealEstate";
export function renderCalhanCoRealEstate(): string {
  const { hook } = memoryLocation({ path: "/calhan-co-real-estate", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <CalhanCoRealEstate />
      </Router>
    </ThemeProvider>
  );
  return html;
}
