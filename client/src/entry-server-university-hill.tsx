/**
 * IL-99 Selective Prerender — SSR Entry for /university-hill-cu-boulder-real-estate
 * Scope: /university-hill-cu-boulder-real-estate only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import UniversityHillCuBoulderRealEstate from "./pages/UniversityHillCuBoulderRealEstate";
export function renderUniversityHillCuBoulderRealEstate(): string {
  const { hook } = memoryLocation({ path: "/university-hill-cu-boulder-real-estate", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <UniversityHillCuBoulderRealEstate />
      </Router>
    </ThemeProvider>
  );
  return html;
}
