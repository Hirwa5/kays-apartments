import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Navigation, ExternalLink } from 'lucide-react';
import Logo from '../shared/Logo';
import { site } from '../../config/site';
import { mapsLinks } from '../../utils/maps';

const exploreLinks = [
  { label: 'About us', to: '/#about' },
  { label: 'Amenities', to: '/#amenities' },
  { label: 'Virtual tour', to: '/#virtual-tour' },
  { label: 'Residents', to: '/residents' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Transport', to: '/transport' },
  { label: 'Schedule a viewing', to: '/contact#schedule' }
];

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-surface/60">
      <div className="wrap grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-[300px] text-[13.5px] leading-relaxed text-muted">
            Eight furnished one- and two-bedroom apartments in Kicukiro, Kigali, with airport transport on request.
          </p>
        </div>

        <div>
          <h3 className="eyebrow mb-4 !text-[11px]">Explore</h3>
          <ul className="space-y-2.5">
            {exploreLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="text-[13.5px] text-muted transition-colors hover:text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-4 !text-[11px]">Contact</h3>
          <ul className="space-y-3 text-[13.5px]">
            <li>
              <a href={`tel:${site.phone.tel}`} className="flex items-center gap-2.5 text-muted hover:text-ink">
                <Phone className="h-4 w-4 shrink-0 text-gold" /> {site.phone.display}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2.5 break-all text-muted hover:text-ink">
                <Mail className="h-4 w-4 shrink-0 text-gold" /> {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-muted">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {site.address.display}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-4 !text-[11px]">Find us</h3>
          <div className="flex flex-col items-start gap-2.5">
            <a href={mapsLinks.directions} target="_blank" rel="noopener noreferrer" className="btn btn-gold !px-4 !py-2.5 !text-[13px]">
              <Navigation className="h-4 w-4" /> Get directions
            </a>
            <a href={mapsLinks.view} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[13px] text-accent-soft hover:text-gold">
              View on Google Maps <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-hairline">
        <div className="wrap flex flex-col items-center justify-between gap-2 py-5 text-[12px] text-muted sm:flex-row">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <span>
            {site.address.area}, {site.address.country}
          </span>
        </div>
      </div>
    </footer>
  );
}
