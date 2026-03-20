# Staging Environment Variables

Required environment variables for a Render staging deployment.
Set these in the **Environment** tab of your Render service dashboard.
**Never commit actual secret values to source control.**

On Manus, all of these are auto-injected by the platform.

---

## Required

| Variable | Purpose |
|---|---|
| `DATABASE_URL` | MySQL/TiDB connection string (Drizzle ORM + migrations) |
| `JWT_SECRET` | Session cookie signing secret (any strong random string) |
| `OAUTH_SERVER_URL` | Manus OAuth backend base URL (server-side) |
| `VITE_APP_ID` | Manus OAuth application ID (server + frontend) |
| `VITE_OAUTH_PORTAL_URL` | Manus login portal URL (frontend redirect) |
| `OWNER_OPEN_ID` | Owner's Manus Open ID (owner notifications) |
| `SMTP_USER` | SMTP username for contact form email delivery |
| `SMTP_PASS` | SMTP password for contact form email delivery |
| `CONTACT_EMAILS` | Comma-separated recipient emails for contact form |
| `GHL_API_KEY` | GoHighLevel API key for CRM lead sync |
| `GHL_API_BASE_URL` | GoHighLevel API base URL |
| `GHL_LOCATION_ID` | GoHighLevel location ID |

---

## Optional / Graceful Degradation

| Variable | Purpose | Behavior if absent |
|---|---|---|
| `BUILT_IN_FORGE_API_URL` | Manus Forge API base URL (owner notifications, storage) | `notifyOwner()` fails silently; contact form still sends email + GHL |
| `BUILT_IN_FORGE_API_KEY` | Manus Forge API bearer token (server-side) | Same as above |
| `VITE_FRONTEND_FORGE_API_KEY` | Forge API bearer token (frontend Map proxy) | Map.tsx proxy may fail; Buying Buddy IDX unaffected |
| `VITE_FRONTEND_FORGE_API_URL` | Forge API URL (frontend Map proxy) | Same as above |
| `GHL_PIPELINE_MAP` | JSON pipeline map for GHL lead routing | GHL lead created without pipeline assignment |
| `GHL_STAGE_MAP` | JSON stage map for GHL lead routing | GHL lead created without stage assignment |

---

## Set by render.yaml / Render Platform (do not set manually)

| Variable | Source | Notes |
|---|---|---|
| `NODE_ENV` | `render.yaml` (explicit) | Set to `production` via `envVars` in render.yaml |
| `PORT` | Render platform (auto-injected) | Injected by Render at runtime; server reads `process.env.PORT` |

---

## Notes

- `VITE_*` variables are build-time (Vite injects them at `pnpm build`). They must be set **before** the build runs on Render, not just at runtime.
- `DATABASE_URL` is also needed at build time for `pnpm db:push` (Drizzle migrations).
- The contact form has two independent delivery paths: SMTP email and GHL CRM sync. Both can function independently if one is misconfigured.
- Manus OAuth (`OAUTH_SERVER_URL`, `VITE_APP_ID`, `VITE_OAUTH_PORTAL_URL`) is required for any authenticated routes. On staging, if no authenticated routes are tested, these can be placeholder values — but the server will start without them.
