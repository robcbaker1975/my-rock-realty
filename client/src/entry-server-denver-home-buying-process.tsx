/**
 * IL-44 Selective Prerender — SSR Entry for /denver-home-buying-process
 * Scope: /denver-home-buying-process only. Do not add other routes here.
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
import DenverHomeBuyingProcess from "./pages/DenverHomeBuyingProcess";
export function renderDenverHomeBuyingProcess(): string {
  const { hook } = memoryLocation({ path: "/denver-home-buying-process", static: true });
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
            <DenverHomeBuyingProcess />
          </Router>
        </ThemeProvider>
      </QueryClientProvider>
    </trpc.Provider>
  );
  return html;
}
