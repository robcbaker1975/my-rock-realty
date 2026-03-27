/**
 * IL-68 Selective Prerender — SSR Entry for /military-relocation/buckley-space-force-base/
 * Scope: /military-relocation/buckley-space-force-base/ only.
 * No LeadForm/trpc usage in component — standard provider pattern.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import BuckleySpaceForceBase from "./pages/BuckleySpaceForceBase";
export function renderBuckleySpaceForceBase(): string {
  const { hook } = memoryLocation({ path: "/military-relocation/buckley-space-force-base/", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <BuckleySpaceForceBase />
      </Router>
    </ThemeProvider>
  );
  return html;
}
