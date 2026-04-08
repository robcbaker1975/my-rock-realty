/**
 * Selective Prerender — SSR Entry for /buying-a-home-colorado
 * Scope: /buying-a-home-colorado only. Do not add other routes here.
 * Note: Requires tRPC + QueryClient providers because page uses LeadForm (trpc.contact.submit).
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
import BuyingAHomeColorado from "./pages/BuyingAHomeColorado";
export function renderBuyingAHomeColorado(): string {
  const { hook } = memoryLocation({ path: "/buying-a-home-colorado", static: true });
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
            <BuyingAHomeColorado />
          </Router>
        </ThemeProvider>
      </QueryClientProvider>
    </trpc.Provider>
  );
  return html;
}
