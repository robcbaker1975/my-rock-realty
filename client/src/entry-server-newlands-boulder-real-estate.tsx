/**
 * IL-99 Selective Prerender — SSR Entry for /newlands-boulder-real-estate
 * Scope: /newlands-boulder-real-estate only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import NewlandsBoulderRealEstate from "./pages/NewlandsBoulderRealEstate";
export function renderNewlandsBoulderRealEstate(): string {
  const { hook } = memoryLocation({ path: "/newlands-boulder-real-estate", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <NewlandsBoulderRealEstate />
      </Router>
    </ThemeProvider>
  );
  return html;
}
