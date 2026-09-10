# Task 03: GitHub Actions CI/CD

**Phase:** 0 — Preparation
**Priority:** P0
**Dependencies:** `tasks/phase-0-preparation/0-00-project-scaffold.md`
**Reference:** `documentation/ROADMAP-web-admin-internal.md §0.5.3`, `documentation/ROADMAP.md §0.5.3`

---

## Objective

Add GitHub Actions CI and CD workflows for the admin panel. Same pattern as web-b2b; IP restriction applied at infrastructure level (Cloudflare Access), not in the workflow.

## Deliverables

### CI workflow (`.github/workflows/web-admin-ci.yml`)

- [ ] P0 Trigger: push to `develop`, push to `main`, PR to either; `paths: ['web-admin-internal/**']`
- [ ] P0 Steps: `pnpm install` (cached), `pnpm lint`, `pnpm type-check`, `pnpm build`

### CD workflow (`.github/workflows/web-admin-deploy.yml`)

- [ ] P0 Trigger: push to `main` (production deploy), push to `develop` (preview deploy)
- [ ] P0 Deploy to Cloudflare Pages or Vercel
- [ ] P0 IP restriction note: admin panel IP restriction is enforced at Cloudflare Access or firewall level — not in this workflow

## Acceptance Criteria

- CI runs on every PR to `main` or `develop` touching `web-admin-internal/`
- Failed lint or type-check blocks merge (via branch protection)
- `pnpm build` runs in CI and catches build errors before deploy
