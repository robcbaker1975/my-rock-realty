/**
 * IL-22 Selective Prerender — SSR Entry for /buying-a-home-in-denver
 *
 * This file is the SSR entry point used exclusively by scripts/prerender-buying.mjs.
 * It renders BuyingAHomeInDenver in a Node.js context using Wouter memoryLocation.
 *
 * Scope: /buying-a-home-in-denver only. Do not add other routes here.
 * Do not import this file in the client bundle (it is not referenced in main.tsx or App.tsx).
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import BuyingAHomeInDenver from "./pages/BuyingAHomeInDenver";
export function renderBuyingAHomeInDenver(): string {
  const { hook } = memoryLocation({ path: "/buying-a-home-in-denver", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <BuyingAHomeInDenver />
      </Router>
    </ThemeProvider>
  );
  return html;
}
