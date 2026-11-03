import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import Logo from '../shared/Logo';
import { site } from '../../config/site';

// Main menu links: add, remove or rename pages here
export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Residents', to: '/residents' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Transport', to: '/transport' },
  { label: 'Contact', to: '/contact' }
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu after navigating
  useEffect(() => setMobileOpen(false), [location.pathname, location.hash]);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-hairline backdrop-blur-md transition-all duration-300 ${
        scrolled ? 'bg-white/90 shadow-soft' : 'bg-white/80'
      }`}
    >
      <div className="wrap flex items-center justify-between py-4 lg:py-[18px]">
        <Logo />

        {/* Desktop links */}
        <nav className="hidden gap-[34px] lg:flex" aria-label="Main">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `group relative py-1 text-[14.5px] transition-colors ${isActive ? 'text-ink' : 'text-muted hover:text-ink'}`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <span
                    className={`absolute -bottom-[6px] left-0 right-0 h-[2px] origin-left bg-gold transition-transform ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${site.phone.tel}`} className="btn btn-ghost">
            <Phone className="h-4 w-4" />
            Call us
          </a>
          <Link to="/residents" className="btn btn-gold">
            Book now
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="-mr-2 p-2 text-ink lg:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-hairline bg-white lg:hidden"
            aria-label="Mobile"
          >
            <div className="wrap flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `border-b border-hairline/60 py-3 text-[15px] last:border-0 ${isActive ? 'font-semibold text-gold' : 'text-ink'}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="flex gap-3 pt-3">
                <a href={`tel:${site.phone.tel}`} className="btn btn-ghost flex-1">
                  <Phone className="h-4 w-4" />
                  Call us
                </a>
                <Link to="/residents" className="btn btn-gold flex-1">
                  Book now
                </Link>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
