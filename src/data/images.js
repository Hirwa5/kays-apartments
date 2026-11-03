// ─────────────────────────────────────────────────────────────
// All photos used on the website, in one place.
//
// These are temporary stock photos. To use your own:
//   1. Put your photo in the  public/images/  folder, e.g. public/images/living-room.jpg
//   2. Replace the link below with the path, e.g.  livingMain: '/images/living-room.jpg',
// Any photo that fails to load shows a neat "Photo coming soon" panel instead.
// ─────────────────────────────────────────────────────────────

const stock = (id, width = 1600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;

export const images = {
  // Home page
  hero: stock('photo-1522708323590-d24dbb6b0267'),
  building: stock('photo-1545324418-cc1a3fa10c00'),

  // Living areas
  livingMain: stock('photo-1502672260266-1c1ef2d93688'),
  livingBright: stock('photo-1493809842364-78817add7ffb'),
  livingCozy: stock('photo-1586023492125-27b2c045efd7'),
  livingOpen: stock('photo-1560448204-e02f11c3d0e2'),
  livingSofa: stock('photo-1554995207-c18c203602cb'),

  // Kitchens
  kitchenMain: stock('photo-1484154218962-a197022b5858'),
  kitchenDining: stock('photo-1556911220-bff31c812dba'),

  // Bedrooms
  bedroomMain: stock('photo-1505693416388-ac5ce068fe85'),
  bedroomCalm: stock('photo-1540518614846-7eded433c457'),
  bedroomLinen: stock('photo-1522771739844-6a9f6d5f14af'),

  // Bathrooms
  bathroomMain: stock('photo-1584622650111-993a426fbf0a'),
  bathroomVanity: stock('photo-1552321554-5fefe8c9ef14'),

  // Outside
  exterior: stock('photo-1600585154340-be6161a56a0c'),

  // Transport page
  airport: stock('photo-1436491865332-7a61a109cc05'),

  // Background photos behind the page titles
  residentsHero: stock('photo-1560448204-e02f11c3d0e2'),
  galleryHero: stock('photo-1493809842364-78817add7ffb')
};
