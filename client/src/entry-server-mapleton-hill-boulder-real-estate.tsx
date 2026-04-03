/**
 * IL-99 Selective Prerender — SSR Entry for /mapleton-hill-boulder-real-estate
 * Scope: /mapleton-hill-boulder-real-estate only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import MapletonHillBoulderRealEstate from "./pages/MapletonHillBoulderRealEstate";
export function renderMapletonHillBoulderRealEstate(): string {
  const { hook } = memoryLocation({ path: "/mapleton-hill-boulder-real-estate", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <MapletonHillBoulderRealEstate />
      </Router>
    </ThemeProvider>
  );
  return html;
}
