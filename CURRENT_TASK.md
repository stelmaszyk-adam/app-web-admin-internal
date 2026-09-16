# Task Sequence — web-admin-internal

> **Do not edit ticks or the Next line by hand.** Progress is derived from the
> `[ ]`/`[x]` checkboxes inside each task file. Regenerate this file with
> `python3 scripts/task-utils.py sync web-admin-internal` (run from the workspace root).

**Next:** `tasks/phase-0-preparation/0-02-admin-components.md`

---

## How to run the task loop

From the workspace root (one task file per fresh Claude session, with plan →
implement → verify → review → commit):

```
./scripts/run-tasks.sh web-admin-internal              # run until done or blocked
./scripts/run-tasks.sh web-admin-internal --max-tasks 1
./scripts/run-tasks.sh web-admin-internal --dry-run
```

Interactive alternative inside this repo: open the file named in **Next**,
implement its open items, tick each `[x]` only once the code and tests exist,
run `pnpm lint && pnpm type-check` (backend/mobile: also `pnpm test`), then run
`sync` again.

---

## Task Sequence

### Phase 0 — Preparation
- [x] `tasks/phase-0-preparation/0-00-project-scaffold.md`
- [x] `tasks/phase-0-preparation/0-01-api-client-and-msw.md`
- [ ] `tasks/phase-0-preparation/0-02-admin-components.md` _(6 open)_
- [ ] `tasks/phase-0-preparation/0-03-github-actions-ci-cd.md` _(5 open)_

### Phase 1 — Core
- [ ] `tasks/phase-1-core/1-01-auth.md` _(14 open)_

### Phase 3 — Admin Panel
- [ ] `tasks/phase-3-admin-panel/3-01-event-moderation.md` _(9 open)_
- [ ] `tasks/phase-3-admin-panel/3-02-venue-management.md` _(15 open)_
- [ ] `tasks/phase-3-admin-panel/3-03-user-management.md` _(4 open)_
- [ ] `tasks/phase-3-admin-panel/3-04-kpi-dashboard.md` _(6 open)_
- [ ] `tasks/phase-3-admin-panel/3-05-error-and-empty-states.md` _(9 open)_
- [ ] `tasks/phase-3-admin-panel/3-06-blog-moderation.md` _(12 open)_

### Phase 4 — Testing
- [ ] `tasks/phase-4-testing/4-01-smoke-tests.md` _(7 open)_
