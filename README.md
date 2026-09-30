# PayTrack — shared vendor payment workspace

Next.js 15 + TypeScript + Prisma + PostgreSQL. The demo seed records have been removed. Users share one company workspace.

## Features in this build
- Registration and login with bcrypt password hashing and HTTP-only session cookies.
- First registered user becomes ADMIN; subsequent self-registrations become ACCOUNTS.
- VIEWER is read-only at the API layer (role assignment/user administration still needs an admin workflow).
- PostgreSQL-backed vendors, purchase obligations, and partial payments.
- Dashboard totals are calculated from database records.

## Run locally
1. Install Node.js 20+.
2. Copy `.env.example` to `.env` and set `DATABASE_URL` to a PostgreSQL connection string.
3. Run `npm install`.
4. Run `npx prisma generate` and `npx prisma db push`.
5. Run `npm run dev` and open http://localhost:3000.

The first person to register becomes the administrator. Keep the registration URL private while creating the first account. Do not commit `.env` or publish database credentials.

## Deploy to Vercel
Import the repository, set `DATABASE_URL` in Project → Settings → Environment Variables, then deploy. Ensure the database allows connections from your deployment. Run `npx prisma db push` against the production database before using the app (or configure a migration workflow).

## Known limitations
This is a functional starter, not a finished audited accounting system. User invitation/role management, vendor editing/deactivation, audit log UI, reports/export, CSRF hardening, rate limiting, and automated tests are not included. Test with non-production data before business use.
