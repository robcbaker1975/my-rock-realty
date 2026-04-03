/**
 * IL-99 Selective Prerender — SSR Entry for /north-boulder-nobo-real-estate
 * Scope: /north-boulder-nobo-real-estate only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import NorthBoulderNoBoRealEstate from "./pages/NorthBoulderNoBoRealEstate";
export function renderNorthBoulderNoBoRealEstate(): string {
  const { hook } = memoryLocation({ path: "/north-boulder-nobo-real-estate", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <NorthBoulderNoBoRealEstate />
      </Router>
    </ThemeProvider>
  );
  return html;
}
