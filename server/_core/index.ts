import "dotenv/config";
import express from "express";
import { createServer } from "http";
import net from "net";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "./oauth";
import { registerChatRoutes } from "./chat";
import { appRouter } from "../routers";
import { createContext } from "./context";
import { serveStatic, setupVite } from "./vite";

function isPortAvailable(port: number): Promise<boolean> {
  return new Promise(resolve => {
    const server = net.createServer();
    server.listen(port, () => {
      server.close(() => resolve(true));
    });
    server.on("error", () => resolve(false));
  });
}

async function findAvailablePort(startPort: number = 3000): Promise<number> {
  for (let port = startPort; port < startPort + 20; port++) {
    if (await isPortAvailable(port)) {
      return port;
    }
  }
  throw new Error(`No available port found starting from ${startPort}`);
}

async function startServer() {
  const app = express();
  const server = createServer(app);
  // Configure body parser with larger size limit for file uploads
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));
  // 301 redirect: enforce non-www canonical hostname in production
  // Uses x-forwarded-host (set by the CDN/load balancer) to determine the
  // original custom domain. Falls back to host header only if x-forwarded-host
  // is absent. API routes (/api/*) are excluded to prevent POST redirects.
  // Redirects: http://myrockhomes.com/*, http://www.myrockhomes.com/*, https://www.myrockhomes.com/* → https://myrockhomes.com/*
  app.use((req, res, next) => {
    if (process.env.NODE_ENV !== "production") return next();
    // Skip API routes — POST redirects break browser fetch
    if (req.path.startsWith("/api/")) return next();
    // Prefer x-forwarded-host (custom domain) over host header (Cloud Run hostname)
    const forwardedHost = req.headers["x-forwarded-host"];
    const host = (Array.isArray(forwardedHost) ? forwardedHost[0] : forwardedHost) || req.headers.host || "";
    const proto = req.headers["x-forwarded-proto"] || req.protocol;
    const isWww = host.startsWith("www.");
    const isHttps = proto === "https";
    if (isWww || !isHttps) {
      const nonWwwHost = host.replace(/^www\./, "");
      return res.redirect(301, `https://${nonWwwHost}${req.originalUrl}`);
    }
    next();
  });

  // 301 redirects: Academy alternate slugs → canonical URL
  app.get(["/military-relocation/usafa", "/military-relocation/usafa/"], (_req, res) =>
    res.redirect(301, "/military-relocation/us-air-force-academy/")
  );
  app.get(["/military-relocation/air-force-academy", "/military-relocation/air-force-academy/"], (_req, res) =>
    res.redirect(301, "/military-relocation/us-air-force-academy/")
  );

  // OAuth callback under /api/oauth/callback
  registerOAuthRoutes(app);
  // Chat API with streaming and tool calling
  registerChatRoutes(app);
  // tRPC API
  app.use(
    "/api/trpc",
    createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );
  // development mode uses Vite, production mode uses static files
  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const preferredPort = parseInt(process.env.PORT || "3000");
  const port = await findAvailablePort(preferredPort);

  if (port !== preferredPort) {
    console.log(`Port ${preferredPort} is busy, using port ${port} instead`);
  }

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
