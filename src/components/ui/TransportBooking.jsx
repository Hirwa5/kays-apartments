import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Reveal from '../shared/Reveal';
import ContourLines from '../shared/ContourLines';
import { site } from '../../config/site';
import { whatsappUrl, transportMessage } from '../../utils/whatsapp';

/** "Ready to book your transport?" panel with Call us and WhatsApp options (Transport page). */
export default function TransportBooking() {
  return (
    <section id="book-transport" className="wrap scroll-mt-28 pb-16 pt-2 md:pb-24">
      <Reveal className="relative overflow-hidden rounded-3xl bg-ink px-6 py-12 sm:px-10 md:px-14 md:py-16">
        <ContourLines className="absolute inset-0 h-full w-full opacity-30" />

        <div className="relative mx-auto max-w-[640px] text-center">
          <p className="eyebrow-light">Airport transport</p>
          <h2 className="mt-3 text-balance text-[clamp(28px,3.8vw,42px)] leading-[1.12] text-white">Ready to book your transport?</h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-white/75">
            Choose the way that suits you. Share your flight details and we will take care of the rest.
          </p>
        </div>

        <div className="relative mx-auto mt-10 grid max-w-[860px] gap-4 md:grid-cols-2">
          {/* Option 1: call */}
          <div className="flex flex-col rounded-2xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-sm md:p-7">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/20 text-gold-soft">
              <Phone className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-[19px] font-semibold text-white">Call us</h3>
            <p className="mt-1.5 text-[14px] leading-relaxed text-white/70">
              Prefer to talk? Call us directly and we will arrange your pickup or drop-off right away. On a phone, tap the number to call.
            </p>
            <a href={`tel:${site.phone.tel}`} className="btn btn-gold mt-6 w-full !py-3.5">
              <Phone className="h-4 w-4" />
              {site.phone.display}
            </a>
          </div>

          {/* Option 2: WhatsApp */}
          <div className="flex flex-col rounded-2xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-sm md:p-7">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp/20 text-whatsapp">
              <FaWhatsapp className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-[19px] font-semibold text-white">WhatsApp</h3>
            <p className="mt-1.5 text-[14px] leading-relaxed text-white/70">
              Send us a message with your flight number, date and time. We will reply on WhatsApp to confirm your driver.
            </p>
            <a href={whatsappUrl(transportMessage())} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp mt-6 w-full !py-3.5">
              <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
              Book on WhatsApp
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
