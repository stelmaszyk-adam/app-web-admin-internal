# Task 03: User Management

**Phase:** 3 — Admin Panel
**Priority:** P0
**Dependencies:** `tasks/phase-3-admin-panel/3-01-event-moderation.md`
**Reference:** `documentation/ROADMAP-web-admin-internal.md §3.3`

---

## Objective

Build the user management interface for reviewing consumer accounts and moderating bad actors.

## Deliverables

- [ ] P0 User search by email or username
- [ ] P0 User detail view:
  - Email, registration date, follow count, submitted event count, reputation/scout level
  - Tip history: submitted, approved, rejected counts
- [ ] P0 **Ban user** (block ability to add events/tips) → `PATCH /admin/users/:id/ban` + reason
- [ ] P1 "Trusted reporters" list: users with high scout level; option for manual downgrade if misused

## Acceptance Criteria

- Banning a user prevents them from submitting events or tips (backend enforces, frontend shows clear error)
- User detail view loads all stats in a single page load (no separate navigations per stat)
