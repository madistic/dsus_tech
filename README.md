# DSUS VIP — Premier Automotive Atelier Website

> Official digital presence of **DSUS VIP Car Care Center**, Al Quoz Industrial 2, Dubai, United Arab Emirates.

---

## Overview

A bespoke automotive website engineered with an editorial, luxury-brand aesthetic inspired by premium coachbuilders and performance customization studios.

- **Client:** DSUS Car Care Center / DSUS VIP
- **Location:** Al Asayel St, Al Quoz Industrial 2, Dubai, UAE
- **Official Contact:** +971 56 569 4440 | info@dsusvip.ae
- **Hours:** Monday – Saturday: 9:00 AM – 9:00 PM

---

## Key Features

1. **Cinematic Automotive Preloader:** Fullscreen sports car reveal featuring laser telemetry scan, ignition of Bi-LED headlights, rotating alloy wheels, and real-time diagnostic progress counter (`0% → 100%`) before dissolving into the homepage. Includes `sessionStorage` memory, `prefers-reduced-motion` bypass, and an instant skip option.
2. **Custom Automotive Precision Cursor:** Dual-layer desktop cursor featuring a zero-latency inner laser point and a 60fps lerp-interpolated outer caliper reticle ring with cardinal tick marks. Adapts dynamically to buttons (`pointer`), gallery items (`view`), and comparison sliders (`drag`). Automatically disabled on touch devices.
3. **Scroll-Based Animation Architecture:** Engineered using Framer Motion primitives (`ScrollReveal`, `StaggerContainer`, `StaggerItem`) with custom luxury cubic bezier curves (`[0.16, 1, 0.3, 1]`) and `viewport={{ once: true }}` to prevent distracting re-triggers.
4. **Six Dedicated Specialist Service Portals:**
   - **Car Accessories & Customization:** PPF, vinyl wraps, 99% IR ceramic tinting, 9H+ graphene coatings, body kits.
   - **Multimedia & Infotainment:** Wireless Apple CarPlay/Android Auto retrofits, QLED touchscreens, Focal/Audison audio, 360° cameras.
   - **Auto Electronics Repair:** Dealer-grade ECU diagnostics (XENTRY, ISTA, ODIS), CAN-bus harness repair, keyless entry programming.
   - **Upholstery & Interior:** Hand-stitched Bavarian Nappa leather, Italian Alcantara headliners, custom steering wheels, airbag-certified burst seams.
   - **Mechanical Services:** Major/minor scheduled servicing, Brembo braking upgrades, transmission servicing, tropical cooling optimization.
   - **Lighting Solutions:** 1,400+ point optic fiber Starlight Roofs with shooting stars, Bi-LED laser headlight retrofits, 64-color ambient cabin lighting.
5. **Interactive Transformation Portfolio:** Before & After interactive comparison slider, category filter pills, project scope modals, and fullscreen zoomable lightbox.
6. **Appointment & WhatsApp Concierge:** Multi-field booking modal with live validation, unique reference code generation (`DSUS-VIP-XXXX`), persistent `localStorage` store, and one-click WhatsApp forwarding with prefilled vehicle information.
7. **Technical SEO & Schema.org Structured Data:** Valid `sitemap.xml`, `robots.txt`, Open Graph cards, and dynamic JSON-LD schemas (`AutoRepair`, `LocalBusiness`, `Service`, `Article`, `CollectionPage`).

---

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite 6
- **Routing:** React Router v7
- **Styling:** Tailwind CSS v3
- **Animations:** Framer Motion v12
- **Icons:** Lucide React
- **Typography:** Cinzel (Headings), Plus Jakarta Sans (Body), JetBrains Mono (Telemetry/Specs)

---

## Getting Started

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## License

Private repository for DSUS VIP Car Care Center. All rights reserved.
