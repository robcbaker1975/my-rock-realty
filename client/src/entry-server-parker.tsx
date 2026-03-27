/**
 * SSR Entry — /parker-co-homes-for-sale
 * Scope: ONE route only. Do not add other routes.
 */
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import ParkerCoHomesForSale from "./pages/ParkerCoHomesForSale";

export function renderParkerCoHomesForSale(): string {
  const { hook } = memoryLocation({ path: "/parker-co-homes-for-sale", static: true });
  return renderToString(
    <Router hook={hook}>
      <ParkerCoHomesForSale />
    </Router>
  );
}
