/**
 * IL-65 Selective Prerender — SSR Entry for /military-relocation/peterson-space-force-base/
 *
 * This file is the SSR entry point used exclusively by scripts/prerender-peterson-space-force-base.mjs.
 * It renders PetersonSpaceForceBase in a Node.js context using Wouter memoryLocation.
 *
 * Scope: /military-relocation/peterson-space-force-base/ only. Do not add other routes here.
 * Do not import this file in the client bundle (it is not referenced in main.tsx or App.tsx).
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import PetersonSpaceForceBase from "./pages/PetersonSpaceForceBase";
export function renderPetersonSpaceForceBase(): string {
  const { hook } = memoryLocation({ path: "/military-relocation/peterson-space-force-base/", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <PetersonSpaceForceBase />
      </Router>
    </ThemeProvider>
  );
  return html;
}
