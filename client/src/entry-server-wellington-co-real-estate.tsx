/**
 * SSR Entry for /wellington-co-real-estate
 * Used exclusively by scripts/prerender-all.mjs for selective prerendering.
 * Do not import this file in the client bundle.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import WellingtonCoRealEstate from "./pages/WellingtonCoRealEstate";

export function renderWellingtonCoRealEstate(): string {
  const { hook } = memoryLocation({ path: "/wellington-co-real-estate", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <WellingtonCoRealEstate />
      </Router>
    </ThemeProvider>
  );
  return html;
}
