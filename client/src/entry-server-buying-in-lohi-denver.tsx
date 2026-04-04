/**
 * IL-118 Selective Prerender — SSR Entry for /buying-in/lohi-denver
 * Scope: /buying-in/lohi-denver only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import BuyingInLohiDenver from "./pages/BuyingInLohiDenver";
export function renderBuyingInLohiDenver(): string {
  const { hook } = memoryLocation({ path: "/buying-in/lohi-denver", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <BuyingInLohiDenver />
      </Router>
    </ThemeProvider>
  );
  return html;
}
