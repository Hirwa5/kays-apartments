import { site } from '../config/site';

const coords = `${site.location.lat},${site.location.lng}`;

export const mapsLinks = {
  directions: `https://www.google.com/maps/dir/?api=1&destination=${coords}`,

  view: `https://www.google.com/maps/search/?api=1&query=${coords}`,

  embed: `https://maps.google.com/maps?q=${coords}&z=16&output=embed`
};
