# Task 01: Event Moderation Queue

**Phase:** 3 — Admin Panel
**Priority:** P0
**Dependencies:** `tasks/phase-1-core/1-01-auth.md`
**Reference:** `documentation/ROADMAP-web-admin-internal.md §3.1, §3.1.1`

---

## Objective

Build the event and event tip moderation queues. Admins review submitted events, approve or reject them, and convert community tips into full events.

## Deliverables

### Event moderation queue

- [ ] P0 Moderation queue page: events from new venues awaiting review + events submitted by B2C users
- [ ] P0 Filter tabs: "New venue events" / "User-submitted events"
- [ ] P0 Event moderation card:
  - All event data (name, date, category, description, photo)
  - Map embed showing address
  - Submitter profile: join date, submission history, rejection history
  - Previous events from this venue
- [ ] P0 Action buttons per card:
  - **Approve** — `PATCH /admin/events/:id/approve`
  - **Reject** — opens reason selector + optional note → `PATCH /admin/events/:id/reject`
  - **Ask user** — opens message compose → `POST /admin/events/:id/message`
- [ ] P0 Queue counters: total events in queue, average review time, % approved (from `GET /admin/events/stats`)

### Community Scout — Event Tip Review (§3.1.1)

- [ ] P0 Tip review queue tab (within moderation page):
  - List of pending tips (sortable by `created_at`, filterable by category)
  - Tip card: submitted data (title, date, link, photo, note, category) + submitter profile (scout level, tip history)
  - Inline link preview if `link_url` provided
  - Photo viewer if `image_url` provided
- [ ] P0 Tip actions:
  - **Approve** — `PATCH /admin/event-tips/:id/approve`
  - **Reject** — reason text field → `PATCH /admin/event-tips/:id/reject`
  - **Convert to Event** — opens pre-populated event creation form; on save: tip becomes `converted` and links to the new event
- [ ] P0 Tip queue counter in sidebar badge (alongside event moderation count)
- [ ] P0 Scout user profile view: link from tip card → user detail with scout stats (tips submitted, approved, conversion rate)

## Acceptance Criteria

- Approving an event removes it from the queue and makes it visible on the map
- Rejecting sends the rejection reason to the submitter
- Converting a tip creates an event and links back to the tip; submitter is notified
- Queue counters update after each action without full page reload
