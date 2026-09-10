# Task 01: Smoke Tests

**Phase:** 4 — Testing & Launch
**Priority:** P0
**Dependencies:** All phase-3 tasks complete
**Reference:** `documentation/ROADMAP-web-admin-internal.md §4.1`

---

## Objective

Write smoke tests covering the critical admin flows. The admin panel "must work, doesn't have to be beautiful" — but it must not break during a moderation session.

## Deliverables

- [ ] P0 Smoke test: admin login → moderation queue → approve event → event appears on map
- [ ] P0 Smoke test: admin login → moderation queue → reject event → rejection reason stored
- [ ] P0 Smoke test: event tip review → approve tip → convert to event → scout user notified
- [ ] P0 Smoke test: venue management → ban venue → audit log entry appears
- [ ] P0 Smoke test: KPI dashboard loads with correct data structure (no blank cards)
- [ ] P1 Verify IP restriction works: requests from non-allowlisted IPs get 403 from Cloudflare Access
- [ ] P1 Verify 2FA flow end-to-end: setup TOTP → log out → log in with TOTP code → verify access

## Acceptance Criteria

- All P0 smoke tests pass against staging environment
- Audit log entry is created for every smoke test moderation action
- `pnpm test:e2e` exits 0
