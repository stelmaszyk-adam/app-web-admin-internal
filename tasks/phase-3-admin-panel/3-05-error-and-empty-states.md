# Task 05: Error & Empty States

**Phase:** 3 — Admin Panel
**Priority:** P0
**Dependencies:** `tasks/phase-0-preparation/0-02-admin-components.md`
**Reference:** `documentation/ROADMAP-web-admin-internal.md §3.7`

---

## Objective

Ensure every admin page handles error, empty, and loading states gracefully. Internal tool — must work reliably, not just look pretty.

## Deliverables

### Error states

- [ ] P0 API error: inline error message with retry button on failed data loads (no full-page error routes)
- [ ] P0 Session expired: redirect to `/login` with "Session expired" toast
- [ ] P0 403 Forbidden (non-admin user): full-page "Access denied — admin privileges required"

### Empty states

- [ ] P0 Empty moderation queue: "No events pending review" (count badge shows 0)
- [ ] P0 Empty venue list (filtered): "No venues match your filters" + clear filters button
- [ ] P0 Empty user list: "No users found"
- [ ] P0 Empty audit log: "No actions recorded yet"

### Loading states

- [ ] P0 Skeleton loaders for DataTable rows, KPI cards, moderation queue cards
- [ ] P0 Spinner overlay on submit buttons (prevent double-click on moderation actions)

## Acceptance Criteria

- Moderation action buttons disable while the API call is in-flight
- Session expiry during a moderation action shows a recoverable "Your session expired — please log in again" message (not a blank screen)
