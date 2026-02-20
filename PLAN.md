# Disney World Planner — MVP Plan

## Overview

A one-stop React web app for Disney World visitors of all experience levels. Surfaces live park data, news, deals, and community blog content in a single place. Powered by React on the frontend and Convex as the backend/database.

---

## Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Frontend | React (Vite) | Familiar, fast dev experience |
| Backend / DB | Convex | Realtime data sync, serverless functions, auth built-in |
| Auth | Convex Auth (or Clerk) | Easy social login, pairs well with Convex |
| Styling | Tailwind CSS | Rapid UI development |
| Routing | React Router v6 | Standard SPA routing |
| Hosting | Vercel or Netlify | Free tier, simple deploys |

---

## External Free / Open Data Sources

| Source | What it provides | API / Method |
|---|---|---|
| [Queue-Times.com API](https://queue-times.com/en-US/pages/api) | Live & historical ride wait times | Free REST API, no key required |
| Disney Parks Blog RSS | Official Disney news and announcements | RSS feed → parsed on backend |
| TouringPlans Crowd Calendar | Daily/monthly crowd level predictions | Public data, scraped or embedded |
| Google Maps Embed | Maps for park/resort locations | Free embed (no billing needed for basic embed) |

---

## Parks Covered

- Magic Kingdom
- EPCOT
- Hollywood Studios
- Animal Kingdom
- Disney Springs

---

## MVP Features

### 1. Home / Dashboard
- Hero banner with current date and "today at Disney World" summary
- Quick links to each park's wait time snapshot
- Latest news feed (top 3–5 articles from Disney RSS)
- Active deals highlight strip
- Crowd level widget for today across all 4 parks

### 2. Park Pages (one per park + Disney Springs)
- Park overview: hours, description, map embed
- Live ride wait times (Queue-Times API, auto-refreshing)
- Crowd level indicator for today and the next 7 days (TouringPlans data)
- Top attractions list with brief descriptions
- Dining highlights (manually maintained list for MVP)

### 3. Wait Times Hub
- Unified view of all park wait times on one page
- Filter by park
- Sort by: shortest wait, longest wait, alphabetical
- Auto-refresh every 5 minutes with a visible countdown timer
- Historical wait time trends (previous 7 days from Queue-Times API)

### 4. News Feed
- Aggregated Disney news pulled from the Disney Parks Blog RSS feed
- Card-based layout with title, excerpt, image, and source link
- Filter by tag/category if available in the RSS feed
- Refreshes automatically on a schedule via a Convex scheduled function

### 5. Deals & Discounts
- Admin-curated list of current Disney World deals (ticket offers, resort discounts, dining deals)
- Each deal shows: title, description, expiry date, and a link
- "Expired" deals visually marked but kept visible for reference
- Stored in Convex, editable via a simple admin panel

### 6. Trip Planner (saved plans)
- Users create a named trip with travel dates and party size
- Add attractions, dining, and notes to specific days on an itinerary
- Multiple trips per account
- Plans stored in Convex and synced in realtime
- Simple drag-and-drop day ordering (or manual ordering for MVP)

### 7. Community Blog
- Any registered user can publish posts immediately (no moderation queue for MVP)
- Rich text editor (e.g. TipTap or React Quill)
- Posts include: title, body, cover image URL, tags, and author
- Public blog index page with newest-first ordering
- Individual post pages with a slug-based URL
- Basic author profile shown on posts (display name + avatar)
- Future: comment system, upvotes, moderation tools

### 8. User Accounts
- Sign up / log in via Convex Auth (email/password + optional Google OAuth)
- User profile page: display name, avatar, saved trips, authored blog posts
- Account settings: update display name, email

### 9. Admin Panel (basic)
- Protected route accessible only to admin users
- Manage deals: create, edit, mark expired, delete
- View all blog posts with ability to delete any post
- No CMS needed for MVP — simple form-based UI in the app

---

## Site Structure / Routes

```
/                        Home dashboard
/parks                   Parks overview
/parks/:parkSlug         Individual park page (magic-kingdom, epcot, etc.)
/wait-times              Unified wait times hub
/news                    Disney news feed
/deals                   Deals & discounts
/planner                 Trip planner (auth required)
/planner/:tripId         Individual trip itinerary
/blog                    Community blog index
/blog/:slug              Individual blog post
/blog/new                Write a new post (auth required)
/profile/:userId         Public user profile
/account                 Account settings (auth required)
/admin                   Admin panel (admin role required)
/login                   Login / sign up
```

---

## Convex Data Models (high level)

```
users          id, name, email, avatarUrl, role (user | admin), createdAt
trips          id, userId, name, startDate, endDate, partySize, createdAt
tripDays       id, tripId, date, items[]
tripItems      id, tripDayId, type (attraction|dining|note), title, notes, order
deals          id, title, description, link, expiryDate, isExpired, createdAt
blogPosts      id, authorId, title, slug, body, coverImageUrl, tags[], publishedAt
news           id, title, excerpt, imageUrl, sourceUrl, publishedAt (synced from RSS)
```

---

## Non-Goals for MVP (future phases)

- Mobile app (React Native)
- Push notifications for wait time drops
- Real-time crowd sourced wait time submissions
- Ticket purchasing integration
- Hotel/resort booking
- Park map interactive overlay
- Comments on blog posts
- Blog post moderation queue
- Monetization / ads / affiliate links

---

## Suggested Build Order

1. Project scaffold (Vite + React + Tailwind + Convex + React Router)
2. Auth (login/signup pages, Convex Auth setup)
3. Park pages + Queue-Times API integration (core value prop)
4. Wait Times Hub
5. News Feed (RSS → Convex scheduled function)
6. Deals section + Admin panel
7. Trip Planner (Convex data, itinerary UI)
8. Community Blog (editor, post pages, author profiles)
9. Home dashboard (pulls from all of the above)
10. Polish: responsive design, loading states, error handling
