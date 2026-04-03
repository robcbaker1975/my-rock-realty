/**
 * SSR Entry for /windsor-co-real-estate
 * Used exclusively by scripts/prerender-all.mjs for selective prerendering.
 * Do not import this file in the client bundle.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import WindsorCoRealEstate from "./pages/WindsorCoRealEstate";

export function renderWindsorCoRealEstate(): string {
  const { hook } = memoryLocation({ path: "/windsor-co-real-estate", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <WindsorCoRealEstate />
      </Router>
    </ThemeProvider>
  );
  return html;
}
