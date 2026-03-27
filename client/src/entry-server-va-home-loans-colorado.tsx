/**
 * IL-67 Selective Prerender — SSR Entry for /military-relocation/va-home-loans-colorado/
 * Scope: /military-relocation/va-home-loans-colorado/ only.
 * No LeadForm/trpc usage in component — standard provider pattern.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import VaHomeLoansColorado from "./pages/VaHomeLoansColorado";
export function renderVaHomeLoansColorado(): string {
  const { hook } = memoryLocation({ path: "/military-relocation/va-home-loans-colorado/", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <VaHomeLoansColorado />
      </Router>
    </ThemeProvider>
  );
  return html;
}
