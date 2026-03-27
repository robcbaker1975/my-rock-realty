/**
 * IL-94 Selective Prerender — SSR Entry for /boulder-vs-fort-collins
 * Scope: /boulder-vs-fort-collins only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import BoulderVsFortCollins from "./pages/BoulderVsFortCollins";
export function renderBoulderVsFortCollins(): string {
  const { hook } = memoryLocation({ path: "/boulder-vs-fort-collins", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <BoulderVsFortCollins />
      </Router>
    </ThemeProvider>
  );
  return html;
}
