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

- [ ] P0 Create Next.js project with App Router and TypeScript strict mode (`create-next-app --typescript`)
- [ ] P0 Configure `tsconfig.json` with `strict: true`
- [ ] P0 Set up `pnpm` as package manager
- [ ] P0 Pin all dependency versions (no `^` or `~` prefixes)
- [ ] P0 Set dev server port to `3003` (B2C: 3001, B2B: 3002, Admin: 3003)

### 2. Styling and component library

- [ ] P0 Install and configure Tailwind CSS
- [ ] P0 Install and configure shadcn/ui with "Radiant Curator" design tokens
- [ ] P0 Configure Tailwind dark mode (`class` strategy)

### 3. Dev tooling

- [ ] P0 Configure ESLint (Next.js recommended config)
- [ ] P0 Configure Prettier
- [ ] P0 Set up Husky + lint-staged (ESLint + Prettier on staged files)
- [ ] P0 Add `.env.example`: `NEXT_PUBLIC_API_URL`, `NEXT_PUBLIC_API_MOCKING=false`
- [ ] P0 Add `.gitignore`

### 4. Folder structure

- [ ] P0 `src/app/` — App Router pages and layouts
- [ ] P0 `src/components/` — shared UI components; `src/components/ui/` — shadcn/ui
- [ ] P0 `src/lib/` — utilities; `src/api/` — client + generated types; `src/hooks/` — custom hooks

### 5. Scripts

- [ ] P0 `pnpm dev` (port 3003), `pnpm build`, `pnpm lint`, `pnpm type-check`, `pnpm api:generate`

## Acceptance Criteria

- `pnpm dev` starts on port 3003 with no errors
- `pnpm build` succeeds
- `pnpm lint` and `pnpm type-check` pass with zero errors
