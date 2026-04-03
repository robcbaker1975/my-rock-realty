/**
 * SSR Entry for /old-town-fort-collins-real-estate
 * Used exclusively by scripts/prerender-all.mjs for selective prerendering.
 * Do not import this file in the client bundle.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import OldTownFortCollinsRealEstate from "./pages/OldTownFortCollinsRealEstate";

export function renderOldTownFortCollinsRealEstate(): string {
  const { hook } = memoryLocation({ path: "/old-town-fort-collins-real-estate", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <OldTownFortCollinsRealEstate />
      </Router>
    </ThemeProvider>
  );
  return html;
}
