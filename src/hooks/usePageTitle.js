import { useEffect } from 'react';
import { site } from '../config/site';

/** Sets the browser tab title for a page, e.g. "Gallery · Kay's Apartments" */
export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · ${site.name}` : `${site.name} · ${site.tagline}`;
  }, [title]);
}
