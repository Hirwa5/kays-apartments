# Kay's Apartments: website

Website for **Kay's Apartments**, 8 furnished apartments in Kicukiro, Kigali.
Built with the same design system as the BAGIRE frontend: **Vite + React 18 + Tailwind CSS + Framer Motion**.

There is **no backend, no login and no database**. Every booking, viewing request and enquiry
opens **WhatsApp** (+250 780 650 891) with a ready-made message.

---

## 1. Run it on your computer

You need **Node.js 18 or newer** (check with `node -v`; download from https://nodejs.org).

Open the folder in Visual Studio Code, open the terminal (**Terminal → New Terminal**) and run:

```bash
npm install      # first time only: downloads the packages
npm run dev      # starts the website at http://localhost:5175
```

The browser opens by itself. Every time you save a file, the page updates instantly.
Stop the server with **Ctrl + C**.

To test on your phone, connect it to the same Wi-Fi and open the **Network** address that
`npm run dev` prints (e.g. `http://192.168.1.20:5175`).

### Build for publishing

```bash
npm run build    # creates the final website in the  dist/  folder
npm run preview  # preview that final version locally
```

`vercel.json` (Vercel) and `public/_redirects` (Netlify) are included so page links like
`/residents` work after you publish.

---

## 2. Where to edit what

| I want to change…                                      | Edit this file                                  |
| ------------------------------------------------------- | ----------------------------------------------- |
| Phone, WhatsApp number, email, address, map location    | `src/config/site.js`                            |
| Prices ($35 / $60), unit descriptions, unit photos      | `src/data/units.js`                             |
| Amenities (parking, Wi-Fi, kitchen, airport transport)  | `src/data/amenities.js`                         |
| Gallery photos and categories                           | `src/data/gallery.js`                           |
| Virtual tour rooms, or add a video / 3D tour link       | `src/data/tour.js`                              |
| "Why choose our transport" cards                        | `src/data/transport.js`                         |
| **All photos used on the site (one place)**             | `src/data/images.js`                            |
| Mobile home slideshow (which photos, captions, speed)   | `src/data/heroSlides.js`                        |
| Background photos behind Residents / Gallery titles     | `residentsHero` / `galleryHero` in `src/data/images.js` |
| WhatsApp message format (all buttons)                   | `src/utils/whatsapp.js`                         |
| Google Maps links                                        | `src/utils/maps.js` (uses the location in site.js) |
| Menu links                                               | `src/components/layout/Navbar.jsx`              |
| Colours, fonts, shadows                                  | `tailwind.config.js`                            |
| Buttons, inputs, labels styles                           | `src/index.css`                                 |
| Logo (circle placeholder)                                | replace `public/logo.svg`                       |
| Favicon (circle placeholder)                             | replace `public/favicon.svg`                    |

### Using your own photos

1. Copy your photos into `public/images/` (e.g. `public/images/living-room.jpg`).
2. In `src/data/images.js`, replace the stock link with the path:
   `livingMain: '/images/living-room.jpg',`

Every page that uses that photo updates automatically. If a photo can't load, the site shows a
tidy "Photo coming soon" panel instead of a broken image.

### Using your own logo / favicon

Replace `public/logo.svg` and `public/favicon.svg` with your files (same names).
If your logo is a PNG, save it as `public/logo.png` and change `/logo.svg` to `/logo.png` in
`src/components/shared/Logo.jsx` (and the favicon line in `index.html`).

---

## 3. How the WhatsApp booking works

Every WhatsApp button uses **one common message format** (`src/utils/whatsapp.js`):

```
Hello Kay's Apartments,

*Request:* Book a stay
*Unit:* Unit 03 · Two-bedroom apartment
*Category:* Double · 2 bedroom, 2 bathrooms
*Rate:* $60 / night

_Please complete:_
*Check-in date:*
*Check-out date:*
*Number of guests:*
*Airport pickup needed (yes/no):*

(Sent from the Kay's Apartments website)
```

| Button                                   | Request sent              |
| ---------------------------------------- | ------------------------- |
| Floating WhatsApp button (every page)    | General enquiry           |
| "Book now" on each unit card (Residents) | Book a stay + unit details |
| "Book on WhatsApp" (Transport)           | Airport transport         |
| "Send message" (Schedule a viewing form) | Schedule a viewing + all form details |

---

## 4. Project structure

```
src/
  config/site.js            business details (one place)
  data/                     content: units, amenities, gallery, tour, transport, images
  utils/                    whatsapp.js (messages), maps.js (Google Maps), format.js
  hooks/                    usePageTitle, useScrollProgress
  components/
    layout/                 Layout, Navbar, Footer, WhatsAppButton, ScrollToTop
    shared/                 Logo, Photo, HeroSlideshow, Reveal, SectionHeading, PageHero, CtaBand, FilterTabs, ContourLines
    ui/                     UnitCard, PricingCard, AmenityCard, FeatureCard, VirtualTour,
                            GalleryGrid, Lightbox, ContactInfoCard, ScheduleViewingCard,
                            LocationCard, TransportBooking
  sections/
    home/                   HomeHeroMobile (phones: photo slideshow), HomeHero (computers),
                            AboutSection, AmenitiesSection, VirtualTourSection, HomeCta
    transport/              TransportHero, TransportFeatures
  pages/                    Home, Residents, Gallery, Transport, Contact
```

Pages: **Home** (`/`, with About, Amenities and Virtual tour), **Residents** (`/residents`),
**Gallery** (`/gallery`), **Transport** (`/transport`), **Contact** (`/contact`; the viewing form is at `/contact#schedule`).
