import { site } from '../config/site';
import { getUnitTitle, getUnitType } from '../data/units';
import { formatDate, formatTime } from './format';

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

export function whatsappUrl(message) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message) {
  const url = whatsappUrl(message);
  window.open(url, '_blank', 'noopener,noreferrer');
  return url;
}

export const generalEnquiryMessage = () =>
  buildWhatsAppMessage({
    request: 'General enquiry',
    toFill: ['Your name', 'Your question']
  });

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

export const transportMessage = () =>
  buildWhatsAppMessage({
    request: 'Airport transport',
    toFill: ['Pickup or drop-off', 'Date', 'Time', 'Flight number', 'Number of passengers', 'Staying at Kay\'s Apartments (yes/no)']
  });

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
