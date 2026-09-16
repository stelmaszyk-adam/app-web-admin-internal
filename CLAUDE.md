# web-admin-internal — Next.js internal admin panel for Wydarzka

Port 3003. Not scaffolded yet: the first task (`tasks/phase-0-preparation/0-00-project-scaffold.md`) creates the app. The workspace-level `../CLAUDE.md` describes the multi-repo setup and the task pipeline.

## Target stack (mirror web-b2b)

Next.js App Router, TypeScript strict, Tailwind + shadcn/ui, orval → TanStack Query hooks with an axios mutator (`src/api/client.ts`), MSW for local mocking, next-intl (`pl`, `en`), Sentry. Package manager pnpm, exact versions, husky + lint-staged. Scripts must include `dev` (port 3003), `lint`, `type-check`, `build`, `api:generate` (from `../backend/docs/openapi.json`).

Copy structure and configs from `../web-b2b` (orval.config.ts, eslint, prettier, tsconfig, providers, query client, api client) instead of inventing new ones, so both dashboards stay consistent.

## Conventions

- Admin-only: every route sits behind the admin session (backend `admin-auth`, `/admin/*` endpoints). No public pages.
- All backend calls through generated orval hooks; never hand-written fetch calls.
- Dense, table-first UI (moderation queues, venue/user management, KPI dashboard): sortable columns, cursor pagination via `meta.nextCursor`, bulk actions where the task asks, loading/empty/error states everywhere.
- Every destructive or moderation action shows a confirm dialog with the reason field the backend requires, and surfaces the backend error code as a translated message.
- Design system "Radiant Curator" (`documentation/designs/DESIGN.md`) tokens; no 1px borders; glass for floating panels.
- Strict TypeScript, no `any`, no `@ts-ignore`, no `eslint-disable` to hide real errors.

## Task files

Work is defined in `tasks/<phase>/*.md`. Progress is the checkboxes inside those files; `CURRENT_TASK.md` is generated (`python3 scripts/task-utils.py sync web-admin-internal` from the root). Tick an item only when the code exists and `pnpm build` passes; use `- [~] … — deferred: reason` for items that need staging or credentials.
