/**
 * Selective Prerender — SSR Entry for /military-relocation/buying-remotely/
 * Scope: /military-relocation/buying-remotely/ only. Do not add other routes here.
 * Note: Requires tRPC + QueryClient providers because page uses LeadForm (trpc.contact.submit).
 * Pattern: ssrRenderWithForm helper — ThemeProvider + Router + tRPC + QueryClient.
 */
import { ssrRenderWithForm } from "./lib/ssrRenderWithForm";
import BuyingRemotely from "./pages/BuyingRemotely";

export function renderBuyingRemotely(): string {
  return ssrRenderWithForm("/military-relocation/buying-remotely/", BuyingRemotely);
}
