/**
 * SSR Entry — /castle-rock-co-homes-for-sale
 * Scope: ONE route only. Do not add other routes.
 */
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import CastleRockCoHomesForSale from "./pages/CastleRockCoHomesForSale";

export function renderCastleRockCoHomesForSale(): string {
  const { hook } = memoryLocation({ path: "/castle-rock-co-homes-for-sale", static: true });
  return renderToString(
    <Router hook={hook}>
      <CastleRockCoHomesForSale />
    </Router>
  );
}
