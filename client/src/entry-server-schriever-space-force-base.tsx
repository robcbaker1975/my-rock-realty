/**
 * IL-66 Selective Prerender — SSR Entry for /military-relocation/schriever-space-force-base/
 *
 * This file is the SSR entry point used exclusively by scripts/prerender-schriever-space-force-base.mjs.
 * It renders SchrieverSpaceForceBase in a Node.js context using Wouter memoryLocation.
 *
 * Scope: /military-relocation/schriever-space-force-base/ only. Do not add other routes here.
 * Do not import this file in the client bundle (it is not referenced in main.tsx or App.tsx).
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import SchrieverSpaceForceBase from "./pages/SchrieverSpaceForceBase";
export function renderSchrieverSpaceForceBase(): string {
  const { hook } = memoryLocation({ path: "/military-relocation/schriever-space-force-base/", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <SchrieverSpaceForceBase />
      </Router>
    </ThemeProvider>
  );
  return html;
}
