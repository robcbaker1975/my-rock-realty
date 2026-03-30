/**
 * IL-98 Selective Prerender — SSR Entry for /colorado-home-buying-workshop/resources
 * Scope: /colorado-home-buying-workshop/resources only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import WorkshopResources from "./pages/WorkshopResources";
export function renderWorkshopResources(): string {
  const { hook } = memoryLocation({ path: "/colorado-home-buying-workshop/resources", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <WorkshopResources />
      </Router>
    </ThemeProvider>
  );
  return html;
}
