/**
 * IL-70 Selective Prerender — SSR Entry for /military-relocation/military-spouses-buying-colorado/
 * Scope: /military-relocation/military-spouses-buying-colorado/ only.
 * Requires tRPC + QueryClient providers — component uses LeadForm (trpc.contact.submit).
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { trpc } from "./lib/trpc";
import { httpBatchLink } from "@trpc/client";
import superjson from "superjson";
import MilitarySpousesBuyingColorado from "./pages/MilitarySpousesBuyingColorado";
export function renderMilitarySpousesBuyingColorado(): string {
  const { hook } = memoryLocation({ path: "/military-relocation/military-spouses-buying-colorado/", static: true });
  const queryClient = new QueryClient();
  const trpcClient = trpc.createClient({
    links: [
      httpBatchLink({
        url: "http://localhost:5000/api/trpc",
        transformer: superjson,
      }),
    ],
  });
  const html = renderToString(
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="light">
          <Router hook={hook}>
            <MilitarySpousesBuyingColorado />
          </Router>
        </ThemeProvider>
      </QueryClientProvider>
    </trpc.Provider>
  );
  return html;
}
