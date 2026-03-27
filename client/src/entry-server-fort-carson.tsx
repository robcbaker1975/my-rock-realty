/**
 * IL-64 Selective Prerender — SSR Entry for /military-relocation/fort-carson/
 *
 * This file is the SSR entry point used exclusively by scripts/prerender-fort-carson.mjs.
 * It renders FortCarson in a Node.js context using Wouter memoryLocation.
 *
 * Scope: /military-relocation/fort-carson/ only. Do not add other routes here.
 * Do not import this file in the client bundle (it is not referenced in main.tsx or App.tsx).
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import FortCarson from "./pages/FortCarson";
export function renderFortCarson(): string {
  const { hook } = memoryLocation({ path: "/military-relocation/fort-carson/", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <FortCarson />
      </Router>
    </ThemeProvider>
  );
  return html;
}
