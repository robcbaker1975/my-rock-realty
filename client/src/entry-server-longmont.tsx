/**
 * IL-85 Selective Prerender — SSR Entry for /longmont-co-homes-for-sale
 * Scope: /longmont-co-homes-for-sale only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import LongmontCoHomesForSale from "./pages/LongmontCoHomesForSale";
export function renderLongmontCoHomesForSale(): string {
  const { hook } = memoryLocation({ path: "/longmont-co-homes-for-sale", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <LongmontCoHomesForSale />
      </Router>
    </ThemeProvider>
  );
  return html;
}
