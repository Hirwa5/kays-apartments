import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Photo from '../shared/Photo';
import { tour } from '../../data/tour';

/**
 * Room-by-room walkthrough. If `tour.embedUrl` is set in src/data/tour.js,
 * a video / 3D tour is shown instead.
 */
export default function VirtualTour() {
  const [active, setActive] = useState(0);
  const rooms = tour.rooms;
  const room = rooms[active];
  const go = (step) => setActive((current) => (current + step + rooms.length) % rooms.length);

  if (tour.embedUrl) {
    return (
      <div className="overflow-hidden rounded-2xl border border-hairline bg-ink shadow-soft">
        <iframe
          src={tour.embedUrl}
          title="Kay's Apartments virtual tour"
          className="aspect-video w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; xr-spatial-tracking"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="grid gap-4 lg:grid-cols-[260px_1fr] lg:gap-5">
      {/* Room list */}
      <div role="tablist" aria-label="Rooms" className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 lg:mx-0 lg:flex-col lg:px-0">
        {rooms.map((r, i) => {
          const selected = i === active;
          return (
            <button
              key={r.title}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(i)}
              className={`flex shrink-0 items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-all duration-200 ${
                selected ? 'border-gold bg-white shadow-soft' : 'border-hairline bg-white/70 hover:border-accent-soft'
              }`}
            >
              <span className={`font-mono text-[11px] ${selected ? 'text-gold' : 'text-muted'}`}>{String(i + 1).padStart(2, '0')}</span>
              <span>
                <span className="block whitespace-nowrap text-[14px] font-semibold text-ink">{r.title}</span>
                <span className="hidden text-[12px] text-muted lg:block">{r.subtitle}</span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Stage */}
      <div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-hairline bg-ink sm:aspect-[16/10]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Photo src={room.image} alt={`Virtual tour: ${room.title}`} className="h-full w-full" loading="eager" />
            </motion.div>
          </AnimatePresence>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />

          <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink backdrop-blur-md">
            Virtual tour · {active + 1} / {rooms.length}
          </span>

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 sm:p-6">
            <div className="min-w-0 text-white">
              <h3 className="text-[20px] font-semibold sm:text-[24px]">{room.title}</h3>
              <p className="mt-1 hidden max-w-[520px] text-[14px] leading-relaxed text-white/80 sm:block">{room.description}</p>
            </div>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous room"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-md transition-colors hover:bg-white/30"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next room"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-gold text-white transition-colors hover:bg-gold-soft"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        {/* Description below the photo on small screens */}
        <p className="mt-3 text-[14px] leading-relaxed text-muted sm:hidden">{room.description}</p>
      </div>
    </div>
  );
}
