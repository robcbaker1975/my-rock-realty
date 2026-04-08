/**
 * Selective Prerender — SSR Entry for /buying-a-home-colorado
 * Scope: /buying-a-home-colorado only. Do not add other routes here.
 * Note: LeadForm removed from page. No tRPC/QueryClient dependency required.
 * Pattern: simplified — ThemeProvider + Router only, matching safe SSR pattern.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import BuyingAHomeColorado from "./pages/BuyingAHomeColorado";
export function renderBuyingAHomeColorado(): string {
  const { hook } = memoryLocation({ path: "/buying-a-home-colorado", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <BuyingAHomeColorado />
      </Router>
    </ThemeProvider>
  );
  return html;
}
