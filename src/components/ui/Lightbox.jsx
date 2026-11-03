import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Photo from '../shared/Photo';

/** Full-screen photo viewer. Arrow keys move between photos, Esc closes. */
export default function Lightbox({ items, index, onChange, onClose }) {
  const item = items[index];
  const go = (step) => onChange((index + step + items.length) % items.length);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onChange((index + 1) % items.length);
      if (e.key === 'ArrowLeft') onChange((index - 1 + items.length) % items.length);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [index, items.length, onChange, onClose]);

  if (!item) return null;

  return createPortal(
    <motion.div
      className="fixed inset-0 z-[70] flex flex-col bg-ink/95 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      onClick={onClose}
    >
      <div className="flex items-center justify-between gap-4 px-5 py-4 text-white sm:px-8" onClick={(e) => e.stopPropagation()}>
        <div className="min-w-0">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-gold-soft">
            {index + 1} / {items.length} · {item.category}
          </p>
          <p className="mt-0.5 truncate text-[14px] text-white/85">{item.alt}</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close photo viewer"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="relative flex flex-1 items-center justify-center px-3 pb-6 sm:px-20">
        <motion.div
          key={item.src}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          className="w-full max-w-[1100px]"
          onClick={(e) => e.stopPropagation()}
        >
          <Photo src={item.src} alt={item.alt} className="h-[min(72vh,760px)] w-full rounded-2xl !bg-transparent" imgClassName="!object-contain" loading="eager" />
        </motion.div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            go(-1);
          }}
          aria-label="Previous photo"
          className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 sm:left-6"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            go(1);
          }}
          aria-label="Next photo"
          className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gold text-white transition-colors hover:bg-gold-soft sm:right-6"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </motion.div>,
    document.body
  );
}
