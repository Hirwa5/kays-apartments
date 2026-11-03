import { Link } from 'react-router-dom';
import { site } from '../../config/site';

/**
 * Logo + name. The circle is a placeholder: replace public/logo.svg
 * with your logo file (same name) and it shows everywhere.
 */
export default function Logo({ light = false, className = '' }) {
  return (
    <Link to="/" aria-label={`${site.name} home`} className={`flex items-center gap-2.5 ${className}`}>
      <img src="/logo.svg" alt="" className="h-8 w-8 shrink-0" />
      <span className={`text-[18px] font-semibold leading-none tracking-tight ${light ? 'text-white' : 'text-ink'}`}>
        {site.name}
        <span className="text-gold">.</span>
      </span>
    </Link>
  );
}
