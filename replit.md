# Digiweb Agency

## Overview

Digiweb Agency is a multi-page marketing website for a digital agency offering web development, graphic design, video editing, SEO, and SEM services. It's built as a full-stack TypeScript application with a React frontend and Express backend. The site includes pages for Home, Services, Process, Team, and Contact, with a contact form dialog and consistent navigation/footer layout.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, bundled by Vite
- **Routing**: Wouter (lightweight client-side router) with routes for `/`, `/services`, `/our-work`, `/our-work/:slug`, `/process`, `/team`, `/contact`
- **Styling**: Tailwind CSS v4 (using `@import "tailwindcss"` syntax) with CSS variables for theming. Custom fonts: Outfit (display) and Plus Jakarta Sans (body)
- **UI Components**: shadcn/ui (new-york style) built on Radix UI primitives. Components live in `client/src/components/ui/`
- **State Management**: TanStack React Query for server state; local React state for UI
- **Notifications**: Dual toast system — shadcn toast + Sonner
- **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`, `@assets/` maps to `attached_assets/`

### Backend Architecture
- **Runtime**: Node.js with Express, written in TypeScript and run via `tsx`
- **Server entry**: `server/index.ts` creates an HTTP server, registers routes, and serves static files in production or uses Vite dev middleware in development
- **API pattern**: All API routes should be prefixed with `/api` and registered in `server/routes.ts`
- **Storage layer**: Abstracted behind `IStorage` interface in `server/storage.ts`. Currently uses in-memory `MemStorage` implementation. Can be swapped to a database-backed implementation
- **Static serving**: In production, `server/static.ts` serves the built Vite output from `dist/public` with SPA fallback to `index.html`

### Data Layer
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Defined in `shared/schema.ts` — currently has a `users` table with `id` (UUID), `username`, and `password`
- **Validation**: Zod schemas generated from Drizzle schemas via `drizzle-zod`
- **Migrations**: Drizzle Kit with output to `./migrations` directory. Schema push via `npm run db:push`
- **Database**: PostgreSQL, connected via `DATABASE_URL` environment variable
- **Note**: The storage layer currently uses in-memory storage (`MemStorage`). When connecting to Postgres, replace `MemStorage` with a Drizzle-based implementation using the schema from `shared/schema.ts`

### Build System
- **Development**: `npm run dev` starts the Express server with Vite middleware for HMR
- **Production build**: `npm run build` runs `script/build.ts` which builds the client with Vite and bundles the server with esbuild into `dist/index.cjs`
- **Server bundling**: esbuild bundles selected dependencies (from an allowlist) to reduce cold start times; other deps are externalized

### Project Structure
```
client/           → Frontend React application
  src/
    components/   → UI components (shadcn/ui + custom)
    data/         → Static data (portfolio projects)
    assets/       → Local assets (portfolio screenshots)
    pages/        → Route page components
    hooks/        → Custom React hooks
    lib/          → Utilities (queryClient, cn helper)
server/           → Express backend
  index.ts        → Server entry point
  routes.ts       → API route registration
  storage.ts      → Data storage interface & implementation
  static.ts       → Production static file serving
  vite.ts         → Vite dev server integration
shared/           → Code shared between client and server
  schema.ts       → Drizzle database schema & Zod types
```

### Contact Forms
- **Service**: Web3Forms (client-side form submission API, no backend needed)
- **How it works**: Forms send data directly to `https://api.web3forms.com/submit` with an access key. Emails are forwarded to hello@digiweb-agency.com
- **Access key injection**: Web3Forms access key (`WEB3FORMS_ACCESS_KEY` secret) is injected at build time via Vite `define` config as `import.meta.env.VITE_WEB3FORMS_KEY`
- **Forms**: 3 forms total — dialog form (contact-form.tsx), contact page form (contact.tsx), quick contact on project detail pages (project-detail.tsx)
- **Deployment note**: For Hostinger static deployment, the `WEB3FORMS_ACCESS_KEY` must be added as a GitHub repository secret so the GitHub Actions build step can inject it

## External Dependencies

- **PostgreSQL**: Primary database (requires `DATABASE_URL` environment variable)
- **Google Fonts**: Outfit and Plus Jakarta Sans loaded via CDN in `index.html`
- **Radix UI**: Foundation for all shadcn/ui components (dialogs, dropdowns, tabs, etc.)
- **TanStack React Query**: Server state management and API data fetching
- **Drizzle ORM + Drizzle Kit**: Database ORM and migration tooling
- **Sonner**: Toast notification library (used alongside shadcn toaster)
- **Embla Carousel**: Carousel component support
- **Recharts**: Chart component support (via shadcn chart component)
- **Web3Forms**: Client-side form submission API (access key via `WEB3FORMS_ACCESS_KEY` secret)
- **Replit plugins**: `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner` (dev-only Replit integration)