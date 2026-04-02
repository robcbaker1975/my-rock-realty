/**
 * Selective Prerender — SSR Entry for /
 *
 * This file is the SSR entry point used exclusively by scripts/prerender-all.mjs
 * for the homepage route (/).
 *
 * Scope: / only. Do not add other routes here.
 * Do not import this file in the client bundle (not referenced in main.tsx or App.tsx).
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

export function renderHome(): string {
  const { hook } = memoryLocation({ path: "/", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <Home />
      </Router>
    </ThemeProvider>
  );
  return html;
}
