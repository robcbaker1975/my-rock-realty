/**
 * IL-87 Selective Prerender — SSR Entry for /niwot-co-homes-for-sale
 * Scope: /niwot-co-homes-for-sale only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import NiwotCoHomesForSale from "./pages/NiwotCoHomesForSale";
export function renderNiwotCoHomesForSale(): string {
  const { hook } = memoryLocation({ path: "/niwot-co-homes-for-sale", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <NiwotCoHomesForSale />
      </Router>
    </ThemeProvider>
  );
  return html;
}
