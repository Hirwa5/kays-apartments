// ─────────────────────────────────────────────────────────────
// Amenities: shown on the Home page and on every apartment card.
// Icons come from https://lucide.dev/icons (change the import to swap one).
// ─────────────────────────────────────────────────────────────
import { Car, Wifi, CookingPot, Plane } from 'lucide-react';

export const amenities = [
  {
    key: 'parking',
    name: 'Parking space',
    short: 'Parking',
    icon: Car,
    description: 'A parking space for your car while you stay, so arriving and heading out is easy.'
  },
  {
    key: 'wifi',
    name: 'Wi-Fi',
    short: 'Wi-Fi',
    icon: Wifi,
    description: 'Wireless internet in the apartment for work calls, streaming and staying in touch with home.'
  },
  {
    key: 'kitchen',
    name: 'Furnished kitchen',
    short: 'Furnished kitchen',
    icon: CookingPot,
    description: 'A kitchen that is furnished and ready to use, so you can cook your own meals any time.'
  },
  {
    key: 'airport',
    name: 'Airport transport',
    short: 'Airport transport',
    icon: Plane,
    description: 'Pickups and drop-offs between Kigali International Airport and the apartments.',
    link: { to: '/transport', label: 'About our transport' }
  }
];

// Quick lookup by key, e.g. amenityByKey.wifi
export const amenityByKey = Object.fromEntries(amenities.map((a) => [a.key, a]));
