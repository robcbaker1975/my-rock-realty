/**
 * IL-99 Selective Prerender — SSR Entry for /lyons-co-homes-for-sale
 * Scope: /lyons-co-homes-for-sale only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import LyonsCoHomesForSale from "./pages/LyonsCoHomesForSale";
export function renderLyonsCoHomesForSale(): string {
  const { hook } = memoryLocation({ path: "/lyons-co-homes-for-sale", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <LyonsCoHomesForSale />
      </Router>
    </ThemeProvider>
  );
  return html;
}
