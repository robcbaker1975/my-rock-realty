/**
 * SSR Entry — /littleton-co-homes-for-sale
 * Scope: ONE route only. Do not add other routes.
 */
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import LittletonCoHomesForSale from "./pages/LittletonCoHomesForSale";

export function renderLittletonCoHomesForSale(): string {
  const { hook } = memoryLocation({ path: "/littleton-co-homes-for-sale", static: true });
  return renderToString(
    <Router hook={hook}>
      <LittletonCoHomesForSale />
    </Router>
  );
}
