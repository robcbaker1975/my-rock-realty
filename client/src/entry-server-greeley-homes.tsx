/**
 * IL-48 Selective Prerender — SSR Entry for /greeley-homes-for-sale
 * Scope: /greeley-homes-for-sale only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import GreeleyHomesForSale from "./pages/GreeleyHomesForSale";
export function renderGreeleyHomesForSale(): string {
  const { hook } = memoryLocation({ path: "/greeley-homes-for-sale", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <GreeleyHomesForSale />
      </Router>
    </ThemeProvider>
  );
  return html;
}
