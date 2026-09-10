# Task 02: Admin-Specific Components & Layout

**Phase:** 0 — Preparation
**Priority:** P0
**Dependencies:** `tasks/phase-0-preparation/0-00-project-scaffold.md`
**Reference:** `documentation/ROADMAP-web-admin-internal.md §0.4.3`

---

## Objective

Build the admin-specific UI components and dashboard layout shell. Reuses shadcn/ui primitives from the shared design system.

## Deliverables

### Admin-specific components

- [ ] P0 **Data table with sorting, filtering, pagination** — shadcn/ui DataTable with:
  - Column sort (click header)
  - Global search input
  - Pagination controls (previous / next / page numbers)
  - Row selection (for bulk actions)
- [ ] P0 **Moderation card** — event or venue data with action buttons (Approve / Reject / Ask user); shows all relevant data + user profile snippet
- [ ] P0 **KPI card** — large stat number, label, trend arrow (+X% vs previous period)

### Dashboard layout shell

- [ ] P0 Sidebar navigation:
  - Sections: Moderation, Venues, Users, Blog, KPIs, Audit Log
  - Badge counts on Moderation (events + tips + blog posts pending)
  - Logout link at bottom
- [ ] P0 Main content area with breadcrumb header
- [ ] P0 Sticky top bar with admin user name + role badge

## Acceptance Criteria

- Data table sorts, filters, and paginates client-side (server-side for large datasets later)
- Moderation card renders all event/tip fields with action buttons
- Sidebar badge counts update when API data refreshes
