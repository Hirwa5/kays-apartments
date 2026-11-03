import { useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Expand } from 'lucide-react';
import FilterTabs from '../shared/FilterTabs';
import Photo from '../shared/Photo';
import Reveal from '../shared/Reveal';
import Lightbox from './Lightbox';
import { galleryCategories, galleryItems } from '../../data/gallery';

const SHAPES = {
  tall: 'aspect-[4/5]',
  wide: 'aspect-[4/3]',
  square: 'aspect-square'
};

/** Filterable photo grid; clicking a photo opens it full-screen. */
export default function GalleryGrid() {
  const [category, setCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState(null);

  const visible = useMemo(
    () => (category === 'All' ? galleryItems : galleryItems.filter((item) => item.category === category)),
    [category]
  );

  const options = galleryCategories.map((c) => ({
    value: c,
    label: c,
    count: c === 'All' ? galleryItems.length : galleryItems.filter((item) => item.category === c).length
  }));

  return (
    <>
      <div className="mb-8 flex justify-center">
        <FilterTabs label="Photo categories" options={options} value={category} onChange={setCategory} />
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {visible.map((item, i) => (
          <Reveal key={item.src + item.alt} delay={(i % 3) * 0.06} className="mb-4 break-inside-avoid">
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group relative block w-full overflow-hidden rounded-2xl border border-hairline text-left"
              aria-label={`Open photo: ${item.alt}`}
            >
              <Photo
                src={item.src}
                alt={item.alt}
                className={SHAPES[item.shape] || SHAPES.square}
                imgClassName="transition-transform duration-500 group-hover:scale-[1.05]"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/85 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-ink backdrop-blur-md">
                  {item.category}
                </span>
                <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-ink opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
                  <Expand className="h-4 w-4" />
                </span>
              </Photo>
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <Lightbox items={visible} index={openIndex} onChange={setOpenIndex} onClose={() => setOpenIndex(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
