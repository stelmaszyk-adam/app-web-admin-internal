# Task 01: API Client Setup & MSW Mock Environment

**Phase:** 0 — Preparation
**Priority:** P0
**Dependencies:** `tasks/phase-0-preparation/0-00-project-scaffold.md`
**Reference:** `documentation/ROADMAP-web-admin-internal.md §0.4.7`, `documentation/ROADMAP-web-b2b.md §0.4.6, §0.4.7`

---

## Objective

Set up the orval API client (TanStack Query hooks) and MSW mock environment, identical pattern to web-b2b.

## Deliverables

### API Client (orval)

- [x] P0 Install `orval`, `@tanstack/react-query`, `axios`
- [x] P0 Create `orval.config.ts` — input: backend `docs/openapi.json`, output: `src/api/generated/`, client: axios + TanStack Query hooks
- [x] P0 `pnpm api:generate` script in `package.json`
- [~] P0 Create `src/api/client.ts` — Axios instance with `NEXT_PUBLIC_API_URL`, JWT interceptor, refresh token rotation on 401 — deferred: axios instance + JWT request interceptor exist; the 401 handler is still a redirect-to-login stub (mirrors web-b2b's own unticked equivalent) — real silent refresh needs the admin auth flow from task `1-01-auth.md`, not built yet
- [x] P0 Set up `QueryClientProvider` in `app/layout.tsx`
- [x] P0 Add `src/api/generated/` to `.gitignore`

### MSW Mock Environment

- [x] P0 Install `msw`
- [x] P0 Create `src/mocks/` with handlers mirroring admin API endpoints
- [x] P0 Browser service worker (`src/mocks/browser.ts`) + server for tests (`src/mocks/server.ts`)
- [x] P0 Admin-specific seeded mock data: 5 events in moderation queue, 3 pending venue claims, 10 users, 5 audit log entries
- [x] P0 `.env.mock` file + `pnpm dev:mock` script
- [x] P0 Toggle: `NEXT_PUBLIC_API_MOCKING=true`

## Acceptance Criteria

- `pnpm dev:mock` starts the admin panel with realistic seeded data without a live backend
- `pnpm api:generate` runs without errors and produces typed hooks
- JWT refresh rotation works: a 401 response triggers token refresh and retries the original request
