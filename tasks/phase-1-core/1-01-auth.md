# Task 01: Admin Auth

**Phase:** 1 — Core
**Priority:** P0/P1
**Dependencies:** `tasks/phase-0-preparation/0-01-api-client-and-msw.md`
**Reference:** `documentation/ROADMAP-web-admin-internal.md §1.1`

---

## Objective

Build the admin login page with email/password authentication restricted to `admin` role users, plus security hardening (2FA, session timeout, lockout) as P1 additions.

## Deliverables

### Login page (P0)

- [ ] P0 Admin login page (`/login`): email + password form
- [ ] P0 Backend validates that user has `admin` role; non-admin users get 403
- [ ] P0 JWT stored in httpOnly cookie (via API client)
- [ ] P0 Middleware: redirect unauthenticated requests for all `/(dashboard)/*` routes to `/login`

### 2FA / MFA (P1)

- [ ] P1 TOTP setup flow: QR code display, manual key entry, verification code confirmation
- [ ] P1 TOTP code input screen (after password step on every login)
- [ ] P1 Recovery codes display on setup: one-time reveal with copy/download option

### Session handling (P1)

- [ ] P1 Access tokens auto-refresh silently (15-min expiry, handled by Axios interceptor)
- [ ] P1 Auto-logout after 30 min of inactivity (configurable via `ADMIN_SESSION_TIMEOUT_MIN` env var)
- [ ] P1 Warning modal 5 min before session expiry with "Extend session" button
- [ ] P1 On expiry: redirect to `/login` with "Session expired" message

### Failed login lockout (P1)

- [ ] P1 Display remaining attempts after 3rd failed login
- [ ] P1 Lockout screen with countdown timer (15 min after 5 failures)
- [ ] P1 "Contact super-admin" link on lockout screen

## Acceptance Criteria

- Non-admin users cannot log in (403 is shown as a user-friendly error)
- TOTP code is required on every login after setup
- Session expired redirect happens at the correct time
