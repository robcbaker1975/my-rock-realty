/**
 * Selective Prerender — SSR Entry for /interquest-colorado-springs
 * Scope: /interquest-colorado-springs only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import InterquestColoradoSprings from "./pages/InterquestColoradoSprings";
export function renderInterquestColoradoSprings(): string {
  const { hook } = memoryLocation({ path: "/interquest-colorado-springs", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <InterquestColoradoSprings />
      </Router>
    </ThemeProvider>
  );
  return html;
}
