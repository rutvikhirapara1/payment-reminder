# PayTrack — Vendor Payment Due Tracking System

A Next.js 15 + TypeScript + Tailwind + Prisma starter based on the supplied Version 1 SRS.

## Run locally
1. Install Node.js 20+ and PostgreSQL.
2. Copy `.env.example` to `.env` and set `DATABASE_URL` and `AUTH_SECRET`.
3. Run `npm install`
4. Run `npx prisma generate`
5. Run `npx prisma db push`
6. Run `npm run dev` and open http://localhost:3000

## Included
- Responsive dashboard, vendor list, payment obligations, reports and settings UI
- Demo interactions: add vendors, create obligations, record partial payments, deactivate vendors, CSV export
- Due date, balance and due-status calculations in the UI
- Prisma data model for users, vendors, obligations, payments, audit logs and settings

## Important production work
The included UI is a functional front-end demo using in-memory sample data (today is fixed to 30-Sep-2026 for reproducible preview). It is not production-ready financial software. Before deployment, connect server actions/route handlers to Prisma, implement secure authentication and role checks, persist all writes, implement audit logging, server-side validation and transactional overpayment prevention, and add tested Excel import/export. Do not expose this demo as a live accounts system until these are complete. No email, SMS, WhatsApp, push notifications, or cron jobs are included, per the SRS.
