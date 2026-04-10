/**
 * ssrRenderWithForm.tsx
 * Shared SSR render helper for prerendered pages that use LeadForm.
 *
 * LeadForm calls trpc.contact.submit, which requires tRPC + QueryClient context.
 * Pages without LeadForm should use the simpler ThemeProvider + Router pattern instead.
 *
 * Usage:
 *   import { ssrRenderWithForm } from "@/lib/ssrRenderWithForm";
 *   import MyPage from "./pages/MyPage";
 *   export function renderMyPage(): string {
 *     return ssrRenderWithForm("/my-page-slug/", MyPage);
 *   }
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { ThemeProvider } from "../contexts/ThemeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { trpc } from "./trpc";
import { httpBatchLink } from "@trpc/client";
import superjson from "superjson";

export function ssrRenderWithForm(
  path: string,
  Page: React.ComponentType
): string {
  const { hook } = memoryLocation({ path, static: true });
  const queryClient = new QueryClient();
  const trpcClient = trpc.createClient({
    links: [
      httpBatchLink({
        url: "http://localhost:5000/api/trpc",
        transformer: superjson,
      }),
    ],
  });
  return renderToString(
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="light">
          <Router hook={hook}>
            <Page />
          </Router>
        </ThemeProvider>
      </QueryClientProvider>
    </trpc.Provider>
  );
}
