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
`/residence` work after you publish.

---

## 2. Where to edit what

| I want to change…                                      | Edit this file                                  |
| ------------------------------------------------------- | ----------------------------------------------- |
| Phone, WhatsApp number, email, address, map location    | `src/config/site.js`                            |
| Prices ($40 / $45), unit descriptions, unit photos      | `src/data/units.js`                             |
| Amenities (parking, Wi-Fi, kitchen, airport transport)  | `src/data/amenities.js`                         |
| Gallery photos and categories                           | `src/data/gallery.js`                           |
| Virtual tour rooms, or add a video / 3D tour link       | `src/data/tour.js`                              |
| "Why choose our transport" cards                        | `src/data/transport.js`                         |
| **All photos used on the site (one place)**             | `src/data/images.js`                            |
| Mobile home slideshow (which photos, captions, speed)   | `src/data/heroSlides.js`                        |
| Background photos behind Residence / Gallery titles     | `public/photos/residence-banner.jpg` / `gallery-banner.jpg` |
| WhatsApp message format (all buttons)                   | `src/utils/whatsapp.js`                         |
| Google Maps links                                        | `src/utils/maps.js` (uses the location in site.js) |
| Menu links                                               | `src/components/layout/Navbar.jsx`              |
| Colours, fonts, shadows                                  | `tailwind.config.js`                            |
| Buttons, inputs, labels styles                           | `src/index.css`                                 |
| Logo (menu bar and footer)                               | `public/brand/logo.png`, `public/brand/logo-full.png` |
| Favicon (browser tab and phone home screen)              | `public/favicon-32.png`, `public/favicon-192.png`, `public/apple-touch-icon.png` |

### Photos

All photos are in `public/photos/`. To change one, save the new photo over the old file with the
same name (lowercase, ending in `.jpg`) and it changes everywhere it is used.
Which file appears where is set in `src/data/images.js`, and the Gallery list is in
`src/data/gallery.js`.

### Logo and favicon

The original logo file is `public/brand/kays-logo.jpeg`. From it:

- `public/brand/logo.png`: building and "KAY'S", transparent background, used in the menu bar
- `public/brand/logo-full.png`: the full logo with the tagline, used in the footer
- `public/favicon-32.png` and `public/favicon-192.png`: the browser tab icon
- `public/apple-touch-icon.png`: the icon when someone saves the site to a phone home screen

To change the logo later, save new files over these with the same names.
The logo is placed in `src/components/shared/Logo.jsx` and the favicon in `index.html`.

---

## 3. How the WhatsApp booking works

Every WhatsApp button uses **one common message format** (`src/utils/whatsapp.js`):

```
Hello Kay's Apartments,

*Request:* Book a stay
*Unit:* Unit 03 · Two-bedroom apartment
*Category:* Double · 2 bedroom, 2 bathrooms
*Rate:* $45 / night

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
| "Book now" on each unit card (Residence) | Book a stay + unit details |
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
  pages/                    Home, Residence, Gallery, Transport, Contact
```

Pages: **Home** (`/`, with About, Amenities and Virtual tour), **Residence** (`/residence`),
**Gallery** (`/gallery`), **Transport** (`/transport`), **Contact** (`/contact`; the viewing form is at `/contact#schedule`).
