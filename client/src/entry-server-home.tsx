/**
 * Selective Prerender — SSR Entry for /
 *
 * This file is the SSR entry point used exclusively by scripts/prerender-all.mjs
 * for the homepage route (/).
 *
 * Scope: / only. Do not add other routes here.
 * Do not import this file in the client bundle (not referenced in main.tsx or App.tsx).
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "./contexts/ThemeContext";
import { trpc } from "./lib/trpc";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import superjson from "superjson";
import Home from "./pages/Home";

export function renderHome(): string {
  const { hook } = memoryLocation({ path: "/", static: true });
  const queryClient = new QueryClient();
  const trpcClient = trpc.createClient({
    links: [
      httpBatchLink({
        url: "http://localhost:3000/api/trpc",
        transformer: superjson,
      }),
    ],
  });
  const html = renderToString(
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="light">
          <Router hook={hook}>
            <Home />
          </Router>
        </ThemeProvider>
      </QueryClientProvider>
    </trpc.Provider>
  );
  return html;
}
