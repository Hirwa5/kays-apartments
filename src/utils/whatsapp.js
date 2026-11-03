// ─────────────────────────────────────────────────────────────
// WhatsApp messages: ONE common format for every WhatsApp button.
//
// Every message arrives in the apartment's WhatsApp inbox like this:
//
//   Hello Kay's Apartments,
//
//   *Request:* Book a stay
//   *Unit:* Unit 03 · Two-bedroom apartment
//   *Rate:* $60 / night
//
//   _Please complete:_
//   *Check-in date:*
//   ...
//
//   (Sent from the Kay's Apartments website)
//
// *text* shows as bold in WhatsApp and _text_ as italic.
// Lines under "Please complete" are left empty for the client to fill in
// before pressing send.
// ─────────────────────────────────────────────────────────────
import { site } from '../config/site';
import { getUnitTitle, getUnitType } from '../data/units';
import { formatDate, formatTime } from './format';

/**
 * Builds a message in the common format.
 * @param {object}   options
 * @param {string}   options.request  What the client wants, e.g. "Book a stay"
 * @param {Array<{label: string, value: string|number}>} [options.details]  Lines the website fills in
 * @param {string[]} [options.toFill]  Lines left blank for the client to complete
 */
export function buildWhatsAppMessage({ request, details = [], toFill = [] }) {
  const lines = [`Hello ${site.name},`, '', `*Request:* ${request}`];

  details
    .filter((d) => d.value !== undefined && d.value !== null && String(d.value).trim() !== '')
    .forEach((d) => lines.push(`*${d.label}:* ${String(d.value).trim()}`));

  if (toFill.length) {
    lines.push('', '_Please complete:_');
    toFill.forEach((label) => lines.push(`*${label}:* `));
  }

  lines.push('', `(Sent from the ${site.name} website)`);
  return lines.join('\n');
}

/** Link that opens WhatsApp (app on phones, web/desktop on computers) with the message ready. */
export function whatsappUrl(message) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message) {
  const url = whatsappUrl(message);
  window.open(url, '_blank', 'noopener,noreferrer');
  return url;
}

// ── Ready-made messages used around the site ─────────────────

/** Floating WhatsApp button (bottom-right on every page) */
export const generalEnquiryMessage = () =>
  buildWhatsAppMessage({
    request: 'General enquiry',
    toFill: ['Your name', 'Your question']
  });

/** "Book now" on each apartment card (Residents page) */
export const bookUnitMessage = (unit) => {
  const type = getUnitType(unit);
  return buildWhatsAppMessage({
    request: 'Book a stay',
    details: [
      { label: 'Unit', value: getUnitTitle(unit) },
      {
        label: 'Category',
        value: `${type.tag} · ${type.bedrooms} bedroom${type.bedrooms > 1 ? 's' : ''}, ${type.bathrooms} bathroom${type.bathrooms > 1 ? 's' : ''}`
      },
      { label: 'Rate', value: `${site.currency}${type.price} / ${site.priceUnit}` }
    ],
    toFill: ['Check-in date', 'Check-out date', 'Number of guests', 'Airport pickup needed (yes/no)']
  });
};

/** "Book on WhatsApp" on the Transport page */
export const transportMessage = () =>
  buildWhatsAppMessage({
    request: 'Airport transport',
    toFill: ['Pickup or drop-off', 'Date', 'Time', 'Flight number', 'Number of passengers', 'Staying at Kay\'s Apartments (yes/no)']
  });

/** "Send message" on the Schedule a viewing card (Contact page) */
export const viewingMessage = (form) =>
  buildWhatsAppMessage({
    request: 'Schedule a viewing',
    details: [
      { label: 'Full name', value: form.fullName },
      { label: 'Email', value: form.email },
      { label: 'Phone', value: form.phone },
      { label: 'Unit of interest', value: form.unitLabel },
      { label: 'Preferred date', value: formatDate(form.date) },
      { label: 'Preferred time', value: formatTime(form.time) },
      { label: 'Message', value: form.message }
    ]
  });
