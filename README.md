# EVQ Station

EVQ is a front-end prototype for an electric vehicle charging experience focused on helping drivers find, compare, reserve, and track charging stations with confidence.

## Project overview

This project simulates a modern EV charging companion with a dashboard-style interface, map-based station discovery, scheduling flow, energy insights, and operational reporting. It is designed as a lightweight, interactive prototype to validate product direction and user experience before full backend integration.

## Current prototype features

- interactive station discovery and map visualization
- geolocation support and status indicators
- filtering by charging speed, plug type, and renewable energy preference
- reservation and scheduling flow
- charging history and summary analytics
- dashboard panels for operational monitoring and reporting

## Documentation

- [TECHNICAL.md](TECHNICAL.md) — technical prototype report and product architecture analysis
- [DEVELOPMENT-STACK.md](DEVELOPMENT-STACK.md) — current front-end stack and recommended backend stack

## Current stack

### Front-end
- HTML5
- CSS3
- Vanilla JavaScript
- Leaflet.js
- OpenStreetMap
- Font Awesome
- Flatpickr

### Recommended backend direction
- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- JWT authentication
- REST API

## Local setup

Since this is a static front-end prototype, you can run it locally with any simple web server.

Example:

```bash
cd /workspaces/EVQ-Station
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Project structure

- index.html — dashboard / landing experience
- bookings.html — reservations
- control.html — station controls
- energy.html — energy insights
- reports.html — reporting and analytics
- security.html — security monitoring
- assets/css/ — styling and dashboard design
- assets/js/ — JavaScript interaction logic
- assets/img/ — UI and brand assets

## Product direction

EVQ is positioned as a premium EV mobility assistant that reduces uncertainty around charging by combining discovery, planning, and sustainability tracking in one experience.

## License

This project is intended for prototype and demonstration purposes.
