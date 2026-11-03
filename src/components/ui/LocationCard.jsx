import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import Reveal from '../shared/Reveal';
import { site } from '../../config/site';
import { mapsLinks } from '../../utils/maps';

/** "Find us" card with a live map, Get directions and View on Google Maps. */
export default function LocationCard() {
  return (
    <Reveal>
      <div id="find-us" className="grid scroll-mt-28 overflow-hidden rounded-2xl border border-hairline bg-white shadow-panel md:grid-cols-[0.85fr_1.15fr]">
        <div className="flex flex-col justify-center p-7 md:p-10">
          <p className="eyebrow">Find us</p>
          <h2 className="mt-3 text-[clamp(26px,3vw,34px)] leading-[1.15]">Our location</h2>
          <p className="mt-4 flex items-start gap-2.5 text-[15px] text-ink">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
            <span>
              {site.name}
              <br />
              <span className="text-muted">
                {site.address.street}, {site.address.area}, {site.address.country}
              </span>
            </span>
          </p>
          <p className="mt-3 font-mono text-[11.5px] text-muted">
            GPS: {site.location.lat}, {site.location.lng}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <a href={mapsLinks.directions} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
              <Navigation className="h-4 w-4" />
              Get directions
            </a>
            <a href={mapsLinks.view} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <ExternalLink className="h-4 w-4" />
              View on Google Maps
            </a>
          </div>
        </div>

        <div className="relative min-h-[320px] border-t border-hairline bg-surface-2 md:min-h-[420px] md:border-l md:border-t-0">
          <iframe
            src={mapsLinks.embed}
            title={`Map showing the location of ${site.name}`}
            className="absolute inset-0 h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </Reveal>
  );
}
