import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '../shared/Reveal';

/** One amenity tile (Home page → Amenities section). */
export default function AmenityCard({ amenity, index = 0 }) {
  const Icon = amenity.icon;
  return (
    <Reveal delay={index * 0.08} className="h-full">
      <div className="group flex h-full flex-col rounded-2xl border border-hairline bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-soft">
        <div className="mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-full border border-hairline bg-surface transition-colors duration-300 group-hover:border-gold group-hover:bg-gold/[0.06]">
          <Icon className="h-6 w-6 text-gold" strokeWidth={1.8} />
        </div>
        <h3 className="mb-1.5 text-[17px] font-semibold">{amenity.name}</h3>
        <p className="text-[14px] leading-relaxed text-muted">{amenity.description}</p>
        {amenity.link && (
          <Link
            to={amenity.link.to}
            className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[13px] font-medium text-accent-soft transition-colors hover:text-gold"
          >
            {amenity.link.label} <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        )}
      </div>
    </Reveal>
  );
}
