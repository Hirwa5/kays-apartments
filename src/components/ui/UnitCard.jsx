import { Link } from 'react-router-dom';
import { BedDouble, Bath, MapPin, CalendarDays } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Photo from '../shared/Photo';
import Reveal from '../shared/Reveal';
import { site } from '../../config/site';
import { getUnitType } from '../../data/units';
import { amenityByKey } from '../../data/amenities';
import { whatsappUrl, bookUnitMessage } from '../../utils/whatsapp';

/** One apartment card on the Residents page: photo, description, amenities, price and Book now. */
export default function UnitCard({ unit, index = 0 }) {
  const type = getUnitType(unit);
  const unitAmenities = unit.amenities.map((key) => amenityByKey[key]).filter(Boolean);

  return (
    <Reveal delay={(index % 3) * 0.07} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-soft">
        <Photo
          src={unit.image}
          alt={`Unit ${unit.number}, ${type.label.toLowerCase()} at ${site.name}`}
          className="h-[220px]"
          imgClassName="transition-transform duration-500 group-hover:scale-[1.05]"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/55" />
          <span className="absolute left-3 top-3 rounded-full bg-ink/75 px-2.5 py-[3px] font-mono text-[10.5px] uppercase tracking-[0.08em] text-white backdrop-blur-sm">
            {type.tag} · {type.bedrooms} bedroom{type.bedrooms > 1 ? 's' : ''}
          </span>
          <span className="absolute bottom-3 left-4 text-[15px] font-semibold text-white">Unit {unit.number}</span>
        </Photo>

        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-[18px] font-semibold leading-snug">{type.label}</h3>
          <p className="mt-1 flex items-center gap-1.5 text-[12.5px] text-muted">
            <MapPin className="h-3.5 w-3.5" /> {site.address.area}
          </p>

          <div className="mt-3 flex flex-wrap gap-2 text-[12px] text-ink/80">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-surface px-2.5 py-1">
              <BedDouble className="h-3.5 w-3.5 text-accent-soft" /> {type.bedrooms} bedroom{type.bedrooms > 1 ? 's' : ''}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-surface px-2.5 py-1">
              <Bath className="h-3.5 w-3.5 text-accent-soft" /> {type.bathrooms} bathroom{type.bathrooms > 1 ? 's' : ''}
            </span>
          </div>

          <p className="mt-3.5 text-[14px] leading-relaxed text-muted">{unit.description}</p>

          <div className="mt-4">
            <p className="mb-2 font-mono text-[10.5px] uppercase tracking-[0.1em] text-muted">Amenities</p>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5">
              {unitAmenities.map((amenity) => {
                const Icon = amenity.icon;
                return (
                  <li key={amenity.key} className="flex items-center gap-1.5 text-[12.5px] text-ink/80">
                    <Icon className="h-3.5 w-3.5 shrink-0 text-gold" /> {amenity.short}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="mt-auto pt-5">
            <div className="flex items-end justify-between gap-3 border-t border-rule pt-4">
              <div>
                <span className="text-[24px] font-semibold leading-none text-gold">
                  {site.currency}
                  {type.price}
                </span>
                <span className="text-[12px] text-muted"> / {site.priceUnit}</span>
              </div>
              <a
                href={whatsappUrl(bookUnitMessage(unit))}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold !px-4 !py-2.5 !text-[13px]"
                aria-label={`Book Unit ${unit.number} on WhatsApp`}
              >
                <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
                Book now
              </a>
            </div>
            <Link
              to={`/contact?unit=${unit.id}#schedule`}
              className="mt-3 inline-flex items-center gap-1.5 text-[12.5px] text-accent-soft transition-colors hover:text-gold"
            >
              <CalendarDays className="h-3.5 w-3.5" /> Schedule a viewing first
            </Link>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
