/**
 * SSR Entry — /highlands-ranch-co-homes-for-sale
 * Scope: ONE route only. Do not add other routes.
 */
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import HighlandsRanchCoHomesForSale from "./pages/HighlandsRanchCoHomesForSale";

export function renderHighlandsRanchCoHomesForSale(): string {
  const { hook } = memoryLocation({ path: "/highlands-ranch-co-homes-for-sale", static: true });
  return renderToString(
    <Router hook={hook}>
      <HighlandsRanchCoHomesForSale />
    </Router>
  );
}
