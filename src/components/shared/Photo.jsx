import { useState } from 'react';
import ContourLines from './ContourLines';

/**
 * Image that fills its box (give it a height or aspect ratio via className).
 * If the photo can't load, it shows a tidy "Photo coming soon" panel instead.
 * Anything passed as children is drawn on top of the photo (badges, captions…).
 */
export default function Photo({ src, alt = '', className = '', imgClassName = '', loading = 'lazy', children }) {
  const [failed, setFailed] = useState(false);
  const showImage = src && !failed;
  // Use "relative" positioning unless the caller already positions it (e.g. "absolute inset-0")
  const position = /\b(absolute|fixed)\b/.test(className) ? '' : 'relative';

  return (
    <div className={`${position} overflow-hidden bg-surface-2 ${className}`}>
      {showImage ? (
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          onError={() => setFailed(true)}
          className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
        />
      ) : (
        <div role="img" aria-label={alt} className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-surface-2 to-hairline">
          <ContourLines className="absolute inset-0 h-full w-full opacity-70" />
          <span className="relative font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Photo coming soon</span>
        </div>
      )}
      {children}
    </div>
  );
}
