// ─────────────────────────────────────────────────────────────
// Google Maps links built from the location in src/config/site.js
// ─────────────────────────────────────────────────────────────
import { site } from '../config/site';

const coords = `${site.location.lat},${site.location.lng}`;

export const mapsLinks = {
  // Opens Google Maps with turn-by-turn directions from the visitor's location
  directions: `https://www.google.com/maps/dir/?api=1&destination=${coords}`,

  // Opens Google Maps pinned on the apartments
  view: `https://www.google.com/maps/search/?api=1&query=${coords}`,

  // Map shown inside the website (no API key needed)
  embed: `https://maps.google.com/maps?q=${coords}&z=16&output=embed`
};
