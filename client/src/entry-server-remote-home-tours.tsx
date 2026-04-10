/**
 * Selective Prerender — SSR Entry for /military-relocation/remote-home-tours/
 * Scope: /military-relocation/remote-home-tours/ only. Do not add other routes here.
 * Note: Requires tRPC + QueryClient providers because page uses LeadForm (trpc.contact.submit).
 * Pattern: ssrRenderWithForm helper — ThemeProvider + Router + tRPC + QueryClient.
 */
import { ssrRenderWithForm } from "./lib/ssrRenderWithForm";
import RemoteHomeTours from "./pages/RemoteHomeTours";

export function renderRemoteHomeTours(): string {
  return ssrRenderWithForm("/military-relocation/remote-home-tours/", RemoteHomeTours);
}
