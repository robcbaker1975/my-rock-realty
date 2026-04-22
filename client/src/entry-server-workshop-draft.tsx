import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import WorkshopDraft from "./pages/WorkshopDraft";

export function render(): string {
  const { hook } = memoryLocation({ path: "/colorado-home-buying-workshop", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <WorkshopDraft />
      </Router>
    </ThemeProvider>
  );
  return html;
}
