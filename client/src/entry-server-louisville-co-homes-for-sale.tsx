/**
 * IL-99 Selective Prerender — SSR Entry for /louisville-co-homes-for-sale
 * Scope: /louisville-co-homes-for-sale only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import LouisvilleCoHomesForSale from "./pages/LouisvilleCoHomesForSale";
export function renderLouisvilleCoHomesForSale(): string {
  const { hook } = memoryLocation({ path: "/louisville-co-homes-for-sale", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <LouisvilleCoHomesForSale />
      </Router>
    </ThemeProvider>
  );
  return html;
}
