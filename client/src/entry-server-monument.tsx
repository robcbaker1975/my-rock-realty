/**
 * IL-22 Selective Prerender — SSR Entry for /monument-co-real-estate
 * Scope: /monument-co-real-estate only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import MonumentCoRealEstate from "./pages/MonumentCoRealEstate";
export function renderMonumentCoRealEstate(): string {
  const { hook } = memoryLocation({ path: "/monument-co-real-estate", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <MonumentCoRealEstate />
      </Router>
    </ThemeProvider>
  );
  return html;
}
