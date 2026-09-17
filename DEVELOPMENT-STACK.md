# EVQ Development Stack

## 1. Front-end stack used in the current prototype

The current EVQ interface is built as a lightweight static web app, which is ideal for rapid prototyping and interface validation before backend integration.

### Core technologies
- HTML5
  - Page structure for the landing page, station finder, schedule flow, history view, and settings.
- CSS3
  - Styling, layout, card components, forms, navigation, colors, spacing, and responsive visual design.
- Vanilla JavaScript
  - DOM manipulation, user interaction logic, filters, geolocation, dynamic station rendering, and mock data flows.

### UI and map libraries
- Leaflet.js
  - Used to render interactive maps and charging station markers.
- OpenStreetMap tiles
  - Base map source for location visualization and station discovery.
- Font Awesome
  - Icons for actions, status indicators, and analytics UI.
- Flatpickr
  - Date and time selection for scheduling and history experience.

### Why this front-end stack fits the project
- It is fast to build and easy to test in a browser.
- It supports a modern UX without needing a heavy framework for a prototype.
- It matches the current architecture: several HTML pages, shared CSS, and small JavaScript modules.
- It helps keep the project simple while validating the product flow.

---

## 2. File connection map

This project is organized in a simple, modular structure that connects each screen to shared styling and logic.

### Main page relationships
- index.html
  - Loads the main landing page.
  - Connects to: assets/css/style.css
  - Uses: assets/js/main.js for the main map and initial UI behaviors.

- bookings.html
  - Displays charging reservation and booking-related data.
  - Connects to: assets/css/style.css and dashboard layout styles.

- control.html
  - Provides station control and monitoring views.
  - Connects to the shared visual system and dashboard interaction logic.

- energy.html
  - Displays energy usage and charging performance information.
  - Connects to shared styling and analytics widgets.

- reports.html
  - Shows operational reporting and summary charts.
  - Uses dashboard visual components and static data views.

- security.html
  - Covers security and access monitoring screens.
  - Uses the shared CSS system and station-monitoring layout patterns.

### Shared resources
- assets/css/style.css
  - Shared design system for all pages.
  - Controls typography, buttons, layout, cards, navigation, filters, forms, and visuals.

- assets/css/dashboard.css
  - Dashboard-specific styling for KPI cards, charts, and operational panels.

- assets/js/main.js
  - Shared front-end behavior, navigation, and page-level setup.

- assets/img/
  - Contains visual assets such as app branding and UI icons.

---

## 3. Recommended backend stack for future phases

Once the prototype is validated, the project should move from static mock data to a real application backend.

### Recommended stack
- Node.js
  - JavaScript runtime for the server layer.
- Express.js
  - Lightweight API framework for routing and backend services.
- PostgreSQL
  - Relational database for users, stations, charging sessions, reservations, and history.
- Prisma ORM
  - Safer, cleaner database access and easier schema management.
- JWT Authentication
  - For login, user sessions, and protected endpoints.
- REST API
  - Clean structure for station data, reservation management, account settings, and charging history.

### Why this backend stack is a good fit
- It matches the JavaScript front-end and keeps development consistent.
- PostgreSQL is strong for transactional data like bookings and payments.
- Prisma speeds up schema design and reduces database boilerplate.
- Express is simple and scalable for a service-oriented EV platform.

---

## 4. Suggested backend service architecture

A production-ready EVQ backend could be organized into distinct layers:

### Core services
- Auth Service
  - login, registration, session management, token refresh
- Station Service
  - station catalog, availability data, geolocation lookup, recommendations
- Booking Service
  - reservation creation, slot validation, cancellation, history
- Charging Session Service
  - usage events, payment balance, session lifecycle tracking
- Analytics Service
  - carbon impact, energy consumption summaries, reporting
- Notification Service
  - reminders, booking confirmations, updates

### API structure
- /api/auth
- /api/stations
- /api/reservations
- /api/sessions
- /api/users
- /api/analytics
- /api/notifications

This structure makes future growth easier while keeping concerns neatly separated.

---

## 5. Cloud and deployment recommendation

For a production rollout, the recommended setup is:

- Front-end: static hosting (Netlify, Vercel, or GitHub Pages for demo deployment)
- Backend: Node.js API hosted on Render, Railway, Fly.io, or Azure App Service
- Database: PostgreSQL on managed infrastructure
- Cache / session support: Redis for rate limiting and temporary state if needed
- Monitoring: Sentry + application logs + uptime monitoring

This setup supports rapid iteration while remaining cost-conscious in the early product stages.

---

## 6. Brief choice summary

The current front-end uses HTML, CSS, and JavaScript because the app is a prototype focused on UX and interaction flow. The stack is intentionally light, fast, and easy to iterate.

For the backend, Node.js + Express + PostgreSQL + Prisma is the most logical next step because it aligns with the current JavaScript ecosystem and supports real business logic such as station management, booking, authentication, and charging analytics.

In short:
- Front-end now: HTML + CSS + JavaScript + Leaflet + OSM
- Backend next: Node.js + Express + PostgreSQL + Prisma

This approach keeps the project easy to build early while preparing a clean migration toward a real production-ready platform.
