/**
 * IL-69 Selective Prerender — SSR Entry for /military-relocation/us-air-force-academy/
 * Scope: /military-relocation/us-air-force-academy/ only.
 * No LeadForm/trpc usage in component — standard provider pattern.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import UsAirForceAcademy from "./pages/UsAirForceAcademy";
export function renderUsAirForceAcademy(): string {
  const { hook } = memoryLocation({ path: "/military-relocation/us-air-force-academy/", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <UsAirForceAcademy />
      </Router>
    </ThemeProvider>
  );
  return html;
}
