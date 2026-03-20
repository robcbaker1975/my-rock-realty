# Staging Environment Variables

Reference for configuring environment variables in the Render dashboard.
No secret values are stored here — this is a names-only reference.

---

## Required for Full Functionality

| Variable | Purpose | Graceful degradation if missing |
|---|---|---|
| `DATABASE_URL` | MySQL connection string for Drizzle ORM | DB features fail silently; public pages still render |
| `JWT_SECRET` | Session cookie signing secret | Auth/session features break |
| `VITE_APP_ID` | Manus OAuth application ID | Auth login flow breaks |
| `OAUTH_SERVER_URL` | Manus OAuth backend base URL | Auth login flow breaks |
| `VITE_OAUTH_PORTAL_URL` | Manus login portal URL (frontend) | Auth login flow breaks |
| `BUILT_IN_FORGE_API_URL` | Manus Forge API base URL | Owner notifications fail silently |
| `BUILT_IN_FORGE_API_KEY` | Forge API bearer token (server-side) | Owner notifications fail silently |
| `SMTP_USER` | SMTP email username | Contact form email delivery fails |
| `SMTP_PASS` | SMTP email password | Contact form email delivery fails |
| `CONTACT_EMAILS` | Comma-separated recipient email addresses | Contact form email delivery fails |
| `GHL_API_KEY` | GoHighLevel API key | GHL CRM sync fails silently |
| `GHL_API_BASE_URL` | GoHighLevel API base URL | GHL CRM sync fails silently |
| `GHL_LOCATION_ID` | GoHighLevel location ID | GHL CRM sync fails silently |

---

## Optional / Secondary

| Variable | Purpose | Notes |
|---|---|---|
| `OWNER_OPEN_ID` | Owner's Manus Open ID | Used for admin role assignment |
| `OWNER_NAME` | Owner's display name | Informational only |
| `VITE_ANALYTICS_ENDPOINT` | Analytics endpoint | Analytics silently disabled if missing |
| `VITE_ANALYTICS_WEBSITE_ID` | Analytics website ID | Analytics silently disabled if missing |
| `VITE_FRONTEND_FORGE_API_KEY` | Frontend Forge API key | Frontend AI features disabled |
| `VITE_FRONTEND_FORGE_API_URL` | Frontend Forge API URL | Frontend AI features disabled |
| `GHL_STAGE_MAP` | JSON stage map for GHL lead routing | GHL lead created without stage assignment |

---

## Set by render.yaml / Render Platform (do not set manually)

| Variable | Source | Notes |
|---|---|---|
| `NODE_ENV` | `render.yaml` (explicit) | Set to `production` via `envVars` in render.yaml |
| `PORT` | Render platform (auto-injected) | Injected by Render at runtime; server reads `process.env.PORT` |

---

## Initial Smoke Test Notes

For the first Render smoke test (build/start/public-page verification only):
- `DATABASE_URL` may be omitted. Public pages will render; authenticated and DB-dependent features will not work.
- `VITE_*` variables are **build-time** (Vite bakes them in at `pnpm build`). They must be set in the Render dashboard **before** the build runs, not just at runtime.
- `DATABASE_URL` is also needed at build time when `pnpm db:push` is included in the build command. It is intentionally omitted from the smoke-test `render.yaml` build command.
- Once `DATABASE_URL` is available, restore `pnpm db:push &&` before `pnpm build` in `render.yaml`.

---

## Notes

- The contact form has two independent delivery paths: SMTP email and GHL CRM sync. Both can function independently if one is misconfigured.
- Manus OAuth (`OAUTH_SERVER_URL`, `VITE_APP_ID`, `VITE_OAUTH_PORTAL_URL`) is required for any authenticated routes. On staging, if no authenticated routes are tested, these can be placeholder values — but the server will start without them.
