import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * When the page changes, jump back to the top.
 * If the link has a #section (e.g. /contact#schedule), scroll to that section instead.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const el = document.getElementById(hash.slice(1));
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
      return () => clearTimeout(timer);
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);

  return null;
}
