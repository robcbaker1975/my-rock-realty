/**
 * IL-96 Selective Prerender — SSR Entry for /denver-vs-colorado-springs
 * Scope: /denver-vs-colorado-springs only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import DenverVsColoradoSprings from "./pages/DenverVsColoradoSprings";
export function renderDenverVsColoradoSprings(): string {
  const { hook } = memoryLocation({ path: "/denver-vs-colorado-springs", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <DenverVsColoradoSprings />
      </Router>
    </ThemeProvider>
  );
  return html;
}
