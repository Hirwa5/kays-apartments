// ─────────────────────────────────────────────────────────────
// Kay's Apartments: main business details.
// Change anything here (phone, email, address, map location) and it
// updates on every page, every WhatsApp button and every map link.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Kay's Apartments",
  tagline: 'Furnished apartments in Kicukiro, Kigali',

  phone: {
    display: '+250 780 650 891', // how the number is shown on the website
    tel: '+250780650891' // used for "tap to call" links (no spaces)
  },

  // WhatsApp number: international format, digits only (no +, spaces or dashes)
  whatsapp: '250780650891',

  email: 'kaysapartmentkgl@gmail.com',

  address: {
    display: 'Kigali, Kicukiro, KK 393 St', // shown on the Contact page
    street: 'KK 393 St',
    area: 'Kicukiro, Kigali',
    country: 'Rwanda'
  },

  // Exact map location used for "Get directions" and "View on Google Maps"
  location: {
    lat: -1.9920668,
    lng: 30.1142244
  },

  currency: '$',
  priceUnit: 'night' // shown as "$35 / night"
};
