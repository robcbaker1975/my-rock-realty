/**
 * IL-99 Selective Prerender — SSR Entry for /table-mesa-south-boulder-real-estate
 * Scope: /table-mesa-south-boulder-real-estate only. Do not add other routes here.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import TableMesaSouthBoulderRealEstate from "./pages/TableMesaSouthBoulderRealEstate";
export function renderTableMesaSouthBoulderRealEstate(): string {
  const { hook } = memoryLocation({ path: "/table-mesa-south-boulder-real-estate", static: true });
  const html = renderToString(
    <ThemeProvider defaultTheme="light">
      <Router hook={hook}>
        <TableMesaSouthBoulderRealEstate />
      </Router>
    </ThemeProvider>
  );
  return html;
}
