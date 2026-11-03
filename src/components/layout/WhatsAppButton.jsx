import { FaWhatsapp } from 'react-icons/fa';
import useScrollProgress from '../../hooks/useScrollProgress';
import { whatsappUrl, generalEnquiryMessage } from '../../utils/whatsapp';

/**
 * Floating WhatsApp button (bottom-right on every page).
 * • The gold ring fills up as the visitor scrolls down the page.
 * • The red "1" badge bounces to look like an unread message.
 * • Clicking opens the apartments' WhatsApp inbox with a ready message.
 */
const SIZE = 64;
const RADIUS = 29;
const CENTER = SIZE / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function WhatsAppButton() {
  const progress = useScrollProgress();

  // Small gold dot that travels clockwise around the ring, starting at the top
  const angle = progress * 2 * Math.PI;
  const dotX = RADIUS * Math.sin(angle);
  const dotY = -RADIUS * Math.cos(angle);

  return (
    <a
      href={whatsappUrl(generalEnquiryMessage())}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp (1 unread message)"
      className="group fixed bottom-5 right-5 z-40 grid h-16 w-16 place-items-center sm:bottom-6 sm:right-6"
    >
      {/* Scroll progress ring */}
      <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox={`0 0 ${SIZE} ${SIZE}`} fill="none" aria-hidden="true">
        <circle cx={CENTER} cy={CENTER} r={RADIUS} stroke="rgba(30,37,48,0.10)" strokeWidth="2.5" />
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          stroke="url(#wa-ring-gradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
          style={{ filter: `drop-shadow(0 0 5px rgba(184,134,58,${0.35 + progress * 0.5}))` }}
        />
        <defs>
          <linearGradient id="wa-ring-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#B8863A" />
            <stop offset="100%" stopColor="#D4A853" />
          </linearGradient>
        </defs>
      </svg>

      {/* Travelling dot */}
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-gold shadow-[0_0_8px_rgba(184,134,58,0.9)]"
        style={{ transform: `translate(calc(-50% + ${dotX}px), calc(-50% + ${dotY}px))` }}
      />

      {/* WhatsApp icon */}
      <span className="relative grid h-12 w-12 place-items-center rounded-full bg-whatsapp text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)] transition-transform duration-300 group-hover:scale-105">
        <FaWhatsapp className="h-7 w-7" aria-hidden="true" />
      </span>

      {/* Unread badge */}
      <span
        aria-hidden="true"
        className="absolute -right-0.5 -top-0.5 grid h-6 min-w-6 place-items-center rounded-full bg-badge px-1.5 text-[11px] font-bold leading-none text-white ring-2 ring-white motion-safe:animate-bounce"
      >
        1
      </span>

      {/* Hover label (desktop) */}
      <span className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 translate-x-1 whitespace-nowrap rounded-xl bg-ink px-3 py-2 text-[12.5px] font-semibold text-white opacity-0 shadow-soft transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        Chat with us on WhatsApp
      </span>
    </a>
  );
}
