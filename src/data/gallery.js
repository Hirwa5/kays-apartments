// ─────────────────────────────────────────────────────────────
// Gallery photos (Gallery page).
// • category: used by the filter buttons at the top of the gallery
// • shape: 'tall' | 'wide' | 'square'  (controls the tile shape)
// Add, remove or reorder items freely.
// ─────────────────────────────────────────────────────────────
import { images } from './images';

export const galleryCategories = ['All', 'Living areas', 'Bedrooms', 'Kitchen', 'Bathrooms', 'Outside'];

export const galleryItems = [
  { src: images.livingMain, alt: 'Bright living room with sofa and large windows', category: 'Living areas', shape: 'wide' },
  { src: images.bedroomMain, alt: 'Bedroom with a double bed and soft lighting', category: 'Bedrooms', shape: 'tall' },
  { src: images.kitchenMain, alt: 'Furnished kitchen with counters and cabinets', category: 'Kitchen', shape: 'square' },
  { src: images.building, alt: 'Apartment building exterior', category: 'Outside', shape: 'tall' },
  { src: images.livingBright, alt: 'Living area with plants and natural light', category: 'Living areas', shape: 'square' },
  { src: images.bathroomMain, alt: 'Clean, modern bathroom', category: 'Bathrooms', shape: 'tall' },
  { src: images.bedroomCalm, alt: 'Calm bedroom with neutral tones', category: 'Bedrooms', shape: 'wide' },
  { src: images.kitchenDining, alt: 'Kitchen and dining space', category: 'Kitchen', shape: 'wide' },
  { src: images.livingCozy, alt: 'Cosy lounge corner', category: 'Living areas', shape: 'tall' },
  { src: images.bedroomLinen, alt: 'Bed made with fresh white linen', category: 'Bedrooms', shape: 'square' },
  { src: images.bathroomVanity, alt: 'Bathroom sink and mirror', category: 'Bathrooms', shape: 'square' },
  { src: images.exterior, alt: 'Outside view of the property', category: 'Outside', shape: 'wide' }
];
