/**
 * IL-42 Selective Prerender — SSR Entry for /sloan-lake-denver-homes-for-sale
 * Scope: /sloan-lake-denver-homes-for-sale only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import SloanLakeDenverHomesForSale from "./pages/SloanLakeDenverHomesForSale";
export function renderSloanLakeDenverHomesForSale(): string {
  const { hook } = memoryLocation({ path: "/sloan-lake-denver-homes-for-sale", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <SloanLakeDenverHomesForSale />
      </Router>
    </ThemeProvider>
  );
  return html;
}
