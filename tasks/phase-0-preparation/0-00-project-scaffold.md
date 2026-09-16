# Task 00: Project Scaffold

**Phase:** 0 — Preparation
**Priority:** P0
**Dependencies:** None
**Reference:** `documentation/ROADMAP-web-admin-internal.md §0`, `documentation/ROADMAP-web-b2b.md §0` (same CI/CD pattern)

---

## Objective

Initialize the Next.js web-admin-internal project. This app is IP-restricted, internal-only, and English-only. It shares the same tech stack as web-b2b (Next.js App Router, shadcn/ui, Tailwind) but has no public-facing pages.

## Deliverables

### 1. Initialize Next.js project

- [x] P0 Create Next.js project with App Router and TypeScript strict mode (`create-next-app --typescript`)
- [x] P0 Configure `tsconfig.json` with `strict: true`
- [x] P0 Set up `pnpm` as package manager
- [x] P0 Pin all dependency versions (no `^` or `~` prefixes)
- [x] P0 Set dev server port to `3003` (B2C: 3001, B2B: 3002, Admin: 3003)

### 2. Styling and component library

- [x] P0 Install and configure Tailwind CSS
- [x] P0 Install and configure shadcn/ui with "Radiant Curator" design tokens
- [x] P0 Configure Tailwind dark mode (`class` strategy)

### 3. Dev tooling

- [x] P0 Configure ESLint (Next.js recommended config)
- [x] P0 Configure Prettier
- [~] P0 Set up Husky + lint-staged (ESLint + Prettier on staged files) — deferred: `husky` + `lint-staged` are installed and configured (package.json `lint-staged` block, `prepare` script wired `.husky/_` helpers), but writing `.husky/pre-commit` itself was blocked by the session's sensitive-file protection with no interactive user to approve it; needs a human to create it (single line: `pnpm exec lint-staged`)
- [x] P0 Add `.env.example`: `NEXT_PUBLIC_API_URL`, `NEXT_PUBLIC_API_MOCKING=false`
- [x] P0 Add `.gitignore`

### 4. Folder structure

- [x] P0 `src/app/` — App Router pages and layouts
- [x] P0 `src/components/` — shared UI components; `src/components/ui/` — shadcn/ui
- [x] P0 `src/lib/` — utilities; `src/api/` — client + generated types; `src/hooks/` — custom hooks

### 5. Scripts

- [x] P0 `pnpm dev` (port 3003), `pnpm build`, `pnpm lint`, `pnpm type-check`, `pnpm api:generate`

## Acceptance Criteria

- `pnpm dev` starts on port 3003 with no errors
- `pnpm build` succeeds
- `pnpm lint` and `pnpm type-check` pass with zero errors
