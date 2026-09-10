# Task 04: KPI Dashboard & Importer Monitor

**Phase:** 3 — Admin Panel
**Priority:** P0
**Dependencies:** `tasks/phase-0-preparation/0-01-api-client-and-msw.md`
**Reference:** `documentation/ROADMAP-web-admin-internal.md §3.4`

---

## Objective

Build the KPI dashboard — the primary health check for the product. Data comes from backend aggregation endpoints; no PostHog JS SDK on the admin panel.

## Deliverables

### KPI dashboard page (`/kpis`)

- [ ] P0 Auto-refresh every 60 seconds (`refetchInterval: 60000`) or manual refresh button
- [ ] P0 KPI cards (all data from `GET /admin/kpis/*`):
  - DAU / WAU / MAU
  - New registrations: today / this week / this month
  - New events: native vs aggregated breakdown
  - New venues: unclaimed vs claimed
  - Venue claim rate (%)
  - Zero-result search rate (%)
  - Push open rate (%)
- [ ] P0 Error monitoring section: Sentry integration (`@sentry/nextjs` for error tracking + source maps)

### Importer monitor

- [ ] P0 Importer status table: source name, last run time, events imported, errors count, status badge (Success / Failed / Running)
- [ ] P0 Data from `GET /admin/importers/status`
- [ ] P0 "Trigger manual run" button per importer (P1 — requires backend support)

## Acceptance Criteria

- KPI cards update every 60 seconds without page reload
- Failed importer run shows a red status badge with the error count
- Zero-result search rate updates reflect search logs from the past 24 hours
