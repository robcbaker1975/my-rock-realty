/**
 * SSR Entry for /loveland-co-real-estate
 * Used exclusively by scripts/prerender-all.mjs for selective prerendering.
 * Do not import this file in the client bundle.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import LovelandCoRealEstate from "./pages/LovelandCoRealEstate";

export function renderLovelandCoRealEstate(): string {
  const { hook } = memoryLocation({ path: "/loveland-co-real-estate", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <LovelandCoRealEstate />
      </Router>
    </ThemeProvider>
  );
  return html;
}
