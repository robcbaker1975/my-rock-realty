/**
 * IL-42 Selective Prerender — SSR Entry for /adams-co-homes-for-sale
 * Scope: /adams-co-homes-for-sale only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import AdamsCoHomesForSale from "./pages/AdamsCoHomesForSale";
export function renderAdamsCoHomesForSale(): string {
  const { hook } = memoryLocation({ path: "/adams-co-homes-for-sale", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <AdamsCoHomesForSale />
      </Router>
    </ThemeProvider>
  );
  return html;
}
