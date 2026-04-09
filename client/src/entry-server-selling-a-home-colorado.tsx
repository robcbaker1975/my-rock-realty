/**
 * Selective Prerender — SSR Entry for /selling-a-home-in-colorado
 * Scope: /selling-a-home-in-colorado only. Do not add other routes here.
 * Note: LeadForm not added to page. No tRPC/QueryClient dependency required.
 * Pattern: simplified — ThemeProvider + Router only, matching safe SSR pattern.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import SellingAHomeColorado from "./pages/SellingAHomeColorado";
export function renderSellingAHomeColorado(): string {
  const { hook } = memoryLocation({ path: "/selling-a-home-in-colorado", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <SellingAHomeColorado />
      </Router>
    </ThemeProvider>
  );
  return html;
}
