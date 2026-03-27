/**
 * IL-46 Selective Prerender — SSR Entry for /relocation/relocating-to-denver-colorado
 * Scope: /relocation/relocating-to-denver-colorado only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import RelocatingToDenverColorado from "./pages/RelocatingToDenverColorado";
export function renderRelocatingToDenverColorado(): string {
  const { hook } = memoryLocation({ path: "/relocation/relocating-to-denver-colorado", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <RelocatingToDenverColorado />
      </Router>
    </ThemeProvider>
  );
  return html;
}
