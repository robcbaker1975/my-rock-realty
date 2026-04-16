/**
 * Selective Prerender — SSR Entry for /colorado-home-buying-workshop/resources/needs-wants-dreams
 * Scope: this route only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import NeedsWantsDreams from "./pages/NeedsWantsDreams";
export function renderNeedsWantsDreams(): string {
  const { hook } = memoryLocation({ path: "/colorado-home-buying-workshop/resources/needs-wants-dreams", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="dark">
      <Router hook={hook}>
        <NeedsWantsDreams />
      </Router>
    </ThemeProvider>
  );
  return html;
}
