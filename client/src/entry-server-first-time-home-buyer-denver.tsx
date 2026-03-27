/**
 * IL-43 Selective Prerender — SSR Entry for /first-time-home-buyer-denver
 * Scope: /first-time-home-buyer-denver only. Do not add other routes here.
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
import FirstTimeHomeBuyerDenver from "./pages/FirstTimeHomeBuyerDenver";
export function renderFirstTimeHomeBuyerDenver(): string {
  const { hook } = memoryLocation({ path: "/first-time-home-buyer-denver", static: true });
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
            <FirstTimeHomeBuyerDenver />
          </Router>
        </ThemeProvider>
      </QueryClientProvider>
    </trpc.Provider>
  );
  return html;
}
