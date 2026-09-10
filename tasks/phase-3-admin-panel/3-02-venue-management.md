# Task 02: Venue Management

**Phase:** 3 — Admin Panel
**Priority:** P0
**Dependencies:** `tasks/phase-3-admin-panel/3-01-event-moderation.md`
**Reference:** `documentation/ROADMAP-web-admin-internal.md §3.2`

---

## Objective

Build the venue management interface: list all venues, review claim requests, take moderation actions, and view the audit log.

## Deliverables

### Venue list page

- [ ] P0 Data table with filter tabs: Unclaimed / Claimed / Banned / Pending (new venue submissions)
- [ ] P0 Columns: Venue name, city, category, follower count, claim status, last updated
- [ ] P0 Row click → venue detail view

### Venue detail view

- [ ] P0 Full venue data (name, address, category, description, photos, opening hours)
- [ ] P0 Claim history: all claim requests with submitter, method, date, status
- [ ] P0 Event history: all events (paginated, filterable by status)
- [ ] P0 Follower count

### Moderation actions

- [ ] P0 **Manual claim approval/rejection** for document-upload method:
  - View uploaded documents
  - Approve → `PATCH /admin/claims/:id/approve`
  - Reject → reason text → `PATCH /admin/claims/:id/reject`
- [ ] P0 **Ban venue** + message to owner → `PATCH /admin/venues/:id/ban`
- [ ] P0 **Warning venue** (notification without ban) → `POST /admin/venues/:id/warn`

### Audit log

- [ ] P0 Audit log view page (`/audit-log`): all admin actions, who, what, when, on which venue/event
- [ ] P0 Retention: 1 year of entries
- [ ] P1 CSV download for compliance reviews
- [ ] P1 Filter: by admin user, action type, date range, target entity
- [ ] P1 Manual add/edit venue UI (for City Launcher during onboarding)

## Acceptance Criteria

- Banning a venue prevents the organizer from logging into the dashboard
- Audit log shows the correct admin actor for each action
- Claim approval sends the organizer an email notification
