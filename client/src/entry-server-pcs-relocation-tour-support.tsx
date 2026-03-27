import { renderToString } from "react-dom/server";
import { trpc } from "./lib/trpc";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import superjson from "superjson";
import PcsRelocationTourSupport from "./pages/PcsRelocationTourSupport";

export function renderPcsRelocationTourSupport(): string {
  const queryClient = new QueryClient();
  const trpcClient = trpc.createClient({
    links: [
      httpBatchLink({
        url: "http://localhost:3000/api/trpc",
        transformer: superjson,
      }),
    ],
  });
  return renderToString(
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <PcsRelocationTourSupport />
      </QueryClientProvider>
    </trpc.Provider>
  );
}
