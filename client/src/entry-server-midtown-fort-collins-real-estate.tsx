/**
 * SSR Entry for /midtown-fort-collins-real-estate
 * Used exclusively by scripts/prerender-all.mjs for selective prerendering.
 * Do not import this file in the client bundle.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import MidtownFortCollinsRealEstate from "./pages/MidtownFortCollinsRealEstate";

export function renderMidtownFortCollinsRealEstate(): string {
  const { hook } = memoryLocation({ path: "/midtown-fort-collins-real-estate", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <MidtownFortCollinsRealEstate />
      </Router>
    </ThemeProvider>
  );
  return html;
}
