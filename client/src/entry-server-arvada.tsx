/**
 * SSR Entry — /arvada-co-homes-for-sale
 * Scope: ONE route only. Do not add other routes.
 */
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import ArvadaCoHomesForSale from "./pages/ArvadaCoHomesForSale";

export function renderArvadaCoHomesForSale(): string {
  const { hook } = memoryLocation({ path: "/arvada-co-homes-for-sale", static: true });
  return renderToString(
    <Router hook={hook}>
      <ArvadaCoHomesForSale />
    </Router>
  );
}
