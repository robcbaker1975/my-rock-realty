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

  // ── Security headers ────────────────────────────────────────────────────────
  // Remove Express fingerprint
  app.disable("x-powered-by");

  // Baseline security headers (applied to every response)
  app.use((_req, res, next) => {
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("X-Frame-Options", "SAMEORIGIN");
    res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
    res.setHeader("Permissions-Policy", "geolocation=(), microphone=(), camera=()");

    // HSTS — only for HTTPS traffic (Render/Cloudflare sets X-Forwarded-Proto)
    const proto = _req.headers["x-forwarded-proto"] || _req.protocol;
    if (proto === "https") {
      res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
    }

    // Evidence-based Content Security Policy
    // 'unsafe-inline' in script-src is required by Buying Buddy's inline init block
    // (var MBB = {...} in index.html line 13-15). Cannot be removed without breaking BB.
    // 'unsafe-inline' in style-src is required by Buying Buddy widget inline styles.
    const csp = [
      "default-src 'self'",
      // Self + Buying Buddy (mbb2.com, d2w6u17ngtanmy CloudFront) + GHL form embed (link.msgsndr.com)
      // 'unsafe-inline' required: Buying Buddy inline init script in index.html
      "script-src 'self' 'unsafe-inline' https://www.mbb2.com https://d2w6u17ngtanmy.cloudfront.net https://link.msgsndr.com",
      // Self + Google Fonts CSS
      // 'unsafe-inline' required: Buying Buddy widget injects inline styles at runtime
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://s3.amazonaws.com",
      // Self + Google Fonts files
      "font-src 'self' https://fonts.gstatic.com",
      // Self + CDN-hosted images (favicon, og:image) + Buying Buddy listing images
      "img-src 'self' data: https://d2xsxph8kpxj0f.cloudfront.net https://d2w6u17ngtanmy.cloudfront.net https://www.mbb2.com",
      // Self + tRPC/API calls + GHL API + Buying Buddy data endpoints
      "connect-src 'self' https://api.leadconnectorhq.com https://www.mbb2.com https://d2w6u17ngtanmy.cloudfront.net",
      // GHL popup form is loaded in an iframe from api.leadconnectorhq.com
      "frame-src https://api.leadconnectorhq.com",
      // Prevent this page from being framed by other origins
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; ");
    res.setHeader("Content-Security-Policy", csp);

    next();
  });
  // ── End security headers ─────────────────────────────────────────────────────

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

  // 301 redirect: Colorado Springs homes duplicate → canonical URL
  app.get(["/colorado-springs-homes-for-sale", "/colorado-springs-homes-for-sale/"], (_req, res) =>
    res.redirect(301, "/colorado-springs-co-homes-for-sale")
  );

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

  // In production (Render), use PORT directly — do not scan for an alternative.
  // Render assigns a specific port and watches only that port for the open signal.
  // Port-scanning in production causes the server to bind on a different port
  // that Render never detects, triggering a port scan timeout.
  // In development, scan for an available port to handle local conflicts.
  let port: number;
  if (process.env.NODE_ENV === "production") {
    port = parseInt(process.env.PORT || "3000");
  } else {
    const preferredPort = parseInt(process.env.PORT || "3000");
    port = await findAvailablePort(preferredPort);
    if (port !== preferredPort) {
      console.log(`Port ${preferredPort} is busy, using port ${port} instead`);
    }
  }

  // Explicitly bind to 0.0.0.0 in production.
  // Node.js defaults to '::' (IPv6 wildcard) when no host is given.
  // Render's port scanner uses IPv4 — binding only on '::' without dual-stack
  // means Render cannot detect the open port, causing a port scan timeout.
  // In development, keep the default behavior (no host restriction).
  if (process.env.NODE_ENV === "production") {
    server.listen(port, "0.0.0.0", () => {
      console.log(`Server running on http://0.0.0.0:${port}/`);
    });
  } else {
    server.listen(port, () => {
      console.log(`Server running on http://localhost:${port}/`);
    });
  }
}

startServer().catch(console.error);
