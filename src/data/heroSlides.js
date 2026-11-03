// ─────────────────────────────────────────────────────────────
// Mobile home page slideshow: the full-screen photos phone visitors
// see first. Add, remove or reorder slides; change photos in images.js.
// ─────────────────────────────────────────────────────────────
import { images } from './images';

// How long each photo stays on screen (milliseconds). 5000 = 5 seconds.
export const heroSlideInterval = 5000;

export const heroSlides = [
  { image: images.building, caption: 'The apartments' },
  { image: images.hero, caption: 'Living room' },
  { image: images.bedroomMain, caption: 'Bedrooms' }
];
