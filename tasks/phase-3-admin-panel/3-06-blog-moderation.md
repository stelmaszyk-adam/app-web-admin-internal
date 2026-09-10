# Task 06: Blog Moderation & Admin Authorship

**Phase:** 3 — Admin Panel
**Priority:** P1
**Dependencies:** `tasks/phase-3-admin-panel/3-01-event-moderation.md`
**Reference:** `documentation/ROADMAP-web-admin-internal.md §3.9`

---

## Objective

Admins moderate organizer blog posts and can write their own editorial articles that publish immediately without moderation.

## Deliverables

### Moderation queue (`/blog/moderation`)

- [ ] P1 `GET /admin/blog/moderation` — pending review posts; `refetchInterval: 30000`
- [ ] P1 Moderation card per post:
  - Title, excerpt, category badge, reading time
  - Author info: avatar, name, venue, join date, prior post counts
  - Featured image thumbnail
  - First 200 words rendered (read-only Tiptap)
  - Actions: **Approve** (`PATCH /admin/blog/:id/approve`) | **Reject** (modal with reason textarea → `PATCH /admin/blog/:id/reject`) | **Edit** (navigate to editor)
- [ ] P1 Sidebar badge: pending count from `GET /admin/blog/moderation` `meta.total`

### All posts DataTable (`/blog`)

- [ ] P1 `GET /admin/blog` — all posts, any status; cursor pagination
- [ ] P1 Columns: Title, Author (name + venue), Author Type (`organizer` / `admin`), Status badge, Category, Published date, Views, Actions
- [ ] P1 Filters: status, author_type, category; search by title; sort by published_at / view_count / created_at

### Admin blog editor (`/blog/new`, `/blog/:id/edit`)

- [ ] P1 Same Tiptap setup as web-b2b organizer editor plus:
  - **Callout block extension** — editorial highlight box
  - No venue association required
  - Status field: admin can set to `published` or `draft` directly (no moderation step)
  - Locale selector: PL / EN
- [ ] P1 Audit log entries for admin blog actions: `blog_post_approved`, `blog_post_rejected`, `blog_post_edited_by_admin`, `blog_post_deleted`

### MSW mock handlers

- [ ] P1 `GET /admin/blog/moderation` → 5 pending posts
- [ ] P1 `PATCH /admin/blog/:id/approve` → 200
- [ ] P1 `PATCH /admin/blog/:id/reject` → 200 with `status: 'rejected'`
- [ ] P1 `GET /admin/blog` → 20 posts mixed statuses

## Acceptance Criteria

- Approving a post changes its status to `published` and removes it from the moderation queue
- Rejecting sends email to the organizer with the rejection reason
- Admin-authored posts publish immediately without entering the moderation queue
