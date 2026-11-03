import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Plane, ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Reveal from '../shared/Reveal';
import { site } from '../../config/site';
import { whatsappUrl, generalEnquiryMessage } from '../../utils/whatsapp';

/** "Get in touch" block (Contact page, left side). */
export default function ContactInfoCard() {
  const items = [
    {
      icon: Phone,
      title: 'Call us',
      value: site.phone.display,
      href: `tel:${site.phone.tel}`,
      note: 'Tap to call from your phone'
    },
    {
      icon: Mail,
      title: 'Email us',
      value: site.email,
      href: `mailto:${site.email}`,
      note: 'We reply as soon as we can'
    },
    {
      icon: MapPin,
      title: 'Visit us',
      value: site.address.display,
      note: site.address.country
    }
  ];

  return (
    <Reveal className="h-full">
      <div className="flex h-full flex-col rounded-2xl border border-hairline bg-surface p-7 md:p-9">
        <p className="eyebrow">Contact details</p>
        <h2 className="mt-3 text-[clamp(26px,3vw,34px)] leading-[1.15]">Get in touch</h2>
        <p className="mt-3 text-[14.5px] leading-relaxed text-muted">
          Questions about an apartment, prices or airport pickup? Call, email or message us. We are happy to help.
        </p>

        <ul className="mt-8 space-y-5">
          {items.map((item) => {
            const Icon = item.icon;
            const content = (
              <>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-hairline bg-white transition-colors group-hover:border-gold">
                  <Icon className="h-5 w-5 text-gold" strokeWidth={1.8} />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[10.5px] uppercase tracking-[0.1em] text-muted">{item.title}</span>
                  <span className="mt-0.5 block break-words text-[15.5px] font-semibold text-ink group-hover:text-gold">{item.value}</span>
                  <span className="block text-[12.5px] text-muted">{item.note}</span>
                </span>
              </>
            );
            return (
              <li key={item.title}>
                {item.href ? (
                  <a href={item.href} className="group flex items-center gap-4">
                    {content}
                  </a>
                ) : (
                  <div className="group flex items-center gap-4">{content}</div>
                )}
              </li>
            );
          })}
        </ul>

        <div className="mt-auto space-y-5 pt-8">
          {/* Airport pickup note */}
          <Link
            to="/transport"
            className="group flex items-center gap-4 rounded-2xl border border-hairline bg-white p-4 transition-all hover:border-gold hover:shadow-soft"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/15">
              <Plane className="h-5 w-5 text-gold-deep" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[14.5px] font-semibold text-ink">Arriving by plane?</span>
              <span className="block text-[13px] leading-snug text-muted">We can pick you up from Kigali International Airport.</span>
            </span>
            <ArrowRight className="h-4 w-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-gold" />
          </Link>

          <a href={whatsappUrl(generalEnquiryMessage())} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp w-full sm:w-auto">
            <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
            Chat with us on WhatsApp
          </a>
        </div>
      </div>
    </Reveal>
  );
}
