import { useState } from 'react';
import ContourLines from './ContourLines';

export default function Photo({ src, alt = '', className = '', imgClassName = '', loading = 'lazy', children }) {
  const [failed, setFailed] = useState(false);
  const showImage = src && !failed;
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
