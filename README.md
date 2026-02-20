# Disney World Planner Community

A community-driven React web app for Disney World visitors. Surfaces live park wait times, news, deals, and community blog content — all in one place.

## Tech Stack

| Layer | Choice |
|---|---|
| Frontend | React 19 + Vite |
| Styling | Tailwind CSS v4 |
| Routing | React Router v6 |
| Backend / DB | Convex |
| Auth | Convex Auth |
| Hosting | Vercel / Netlify |

## Getting Started

### Prerequisites

- Node.js 18+
- A [Convex](https://convex.dev) account (free tier available)

### Install dependencies

```bash
npm install
```

### Configure Convex

1. Create a project at [dashboard.convex.dev](https://dashboard.convex.dev)
2. Copy your deployment URL into a `.env.local` file:

```env
VITE_CONVEX_URL=https://<your-deployment>.convex.cloud
```

3. Push the schema to Convex:

```bash
npx convex dev
```

### Start the dev server

```bash
npm run dev
```

## Project Structure

```
src/
  layouts/        # Shared layout components (header, nav, footer)
  pages/          # One file per route
    parks/        # /parks and /parks/:parkSlug
    planner/      # /planner and /planner/:tripId
    blog/         # /blog, /blog/new, /blog/:slug
  components/     # Reusable UI components
  lib/            # Utility functions and API helpers
convex/
  schema.ts       # Convex data model definitions
```

## Routes

| Path | Page |
|---|---|
| `/` | Home dashboard |
| `/parks` | Parks overview |
| `/parks/:parkSlug` | Individual park page |
| `/wait-times` | Unified wait times hub |
| `/news` | Disney news feed |
| `/deals` | Deals & discounts |
| `/planner` | Trip planner |
| `/planner/:tripId` | Individual trip itinerary |
| `/blog` | Community blog index |
| `/blog/new` | Write a new post |
| `/blog/:slug` | Individual blog post |
| `/profile/:userId` | Public user profile |
| `/account` | Account settings |
| `/admin` | Admin panel |
| `/login` | Sign in / sign up |

## External Data Sources

- **[Queue-Times.com API](https://queue-times.com/en-US/pages/api)** — Live ride wait times (free, no key required)
- **Disney Parks Blog RSS** — Official Disney news and announcements
- **Google Maps Embed** — Park and resort locations

