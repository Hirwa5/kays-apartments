import { Link } from 'react-router-dom';
import { site } from '../../config/site';

export default function Logo({ full = false, className = '' }) {
  return (
    <Link to="/" aria-label={`${site.name} home`} className={`inline-flex shrink-0 items-center ${className}`}>
      {full ? (
        <img src="/brand/logo-full.png" alt={site.name} width="640" height="530" className="h-auto w-[190px]" />
      ) : (
        <img src="/brand/logo.png" alt={site.name} width="360" height="216" className="h-11 w-auto lg:h-[52px]" />
      )}
    </Link>
  );
}
