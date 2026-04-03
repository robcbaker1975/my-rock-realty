/**
 * IL-99 Selective Prerender — SSR Entry for /gunbarrel-co-real-estate
 * Scope: /gunbarrel-co-real-estate only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import GunbarrelCoRealEstate from "./pages/GunbarrelCoRealEstate";
export function renderGunbarrelCoRealEstate(): string {
  const { hook } = memoryLocation({ path: "/gunbarrel-co-real-estate", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <GunbarrelCoRealEstate />
      </Router>
    </ThemeProvider>
  );
  return html;
}
