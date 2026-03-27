/**
 * IL-51 Selective Prerender — SSR Entry for /lasalle-co-homes-for-sale
 * Scope: /lasalle-co-homes-for-sale only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import LaSalleCoHomesForSale from "./pages/LaSalleCoHomesForSale";
export function renderLaSalleCoHomesForSale(): string {
  const { hook } = memoryLocation({ path: "/lasalle-co-homes-for-sale", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <LaSalleCoHomesForSale />
      </Router>
    </ThemeProvider>
  );
  return html;
}
