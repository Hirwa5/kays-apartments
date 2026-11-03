import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays } from 'lucide-react';
import HeroSlideshow from '../../components/shared/HeroSlideshow';
import ContourLines from '../../components/shared/ContourLines';
import { site } from '../../config/site';
import { heroSlides, heroSlideInterval } from '../../data/heroSlides';
import { units, lowestPrice } from '../../data/units';

// MOBILE hero (phones and tablets, below 1024px). Desktop uses HomeHero.jsx.
// Full-screen photo slideshow first, then a short stats strip.
export default function HomeHeroMobile() {
  const [active, setActive] = useState(0);

  // Move to the next photo automatically. Tapping a bar restarts the timer.
  useEffect(() => {
    const timer = setTimeout(() => setActive((i) => (i + 1) % heroSlides.length), heroSlideInterval);
    return () => clearTimeout(timer);
  }, [active]);

  const stats = [
    { value: String(units.length), label: 'Apartments' },
    { value: `${site.currency}${lowestPrice}`, label: `From / ${site.priceUnit}` },
    { value: '24/7', label: 'Airport transport' }
  ];

  const fadeUp = (delay) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }
  });

  return (
    <div className="lg:hidden">
      <section
        aria-label={`${site.name} photos`}
        className="relative flex min-h-[max(580px,calc(100svh-65px))] flex-col overflow-hidden bg-ink text-white"
      >
        <HeroSlideshow slides={heroSlides} active={active} />

        {/* Darken the photo so the text is easy to read */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/15 to-ink/90" aria-hidden="true" />
        <ContourLines className="absolute inset-0 h-full w-full opacity-25" />

        {/* Top: which photo is showing */}
        <div className="wrap relative w-full pt-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-white backdrop-blur-md">
            <span className="text-gold-soft">
              {String(active + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
            </span>
            {heroSlides[active].caption}
          </span>
        </div>

        {/* Bottom: headline and buttons */}
        <div className="wrap relative mt-auto w-full pb-5 pt-16">
          <motion.p {...fadeUp(0)} className="eyebrow-light">
            Kicukiro · Kigali · Rwanda
          </motion.p>
          <motion.h1 {...fadeUp(0.08)} className="mt-3 text-[clamp(38px,10.5vw,54px)] leading-[1.04] text-white">
            Home in Kigali,
            <br />
            <span className="text-gradient-light">ready when you land.</span>
          </motion.h1>
          <motion.p {...fadeUp(0.16)} className="mt-4 max-w-[460px] text-[15.5px] leading-relaxed text-white/85">
            {units.length} furnished one- and two-bedroom apartments with Wi-Fi, parking and airport transport.
          </motion.p>

          <motion.div {...fadeUp(0.24)} className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link to="/residents" className="btn btn-gold !py-3.5 sm:flex-1">
              Book your stay <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact#schedule" className="btn btn-on-dark !py-3.5 sm:flex-1">
              <CalendarDays className="h-4 w-4" /> Schedule a viewing
            </Link>
          </motion.div>

          {/* Photo progress bars (tap to jump). The WhatsApp button sits to the right of this row. */}
          <div className="mt-5 flex h-16 items-center gap-2">
            {heroSlides.map((slide, i) => (
              <button
                key={slide.caption + i}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show photo ${i + 1}: ${slide.caption}`}
                aria-current={i === active}
                className="py-3"
              >
                <span className="relative block h-1 w-10 overflow-hidden rounded-full bg-white/30">
                  <span
                    key={i === active ? `active-${active}` : `idle-${i}`}
                    className={`absolute inset-y-0 left-0 rounded-full bg-gold-soft ${
                      i === active ? 'animate-hero-progress motion-reduce:w-full motion-reduce:animate-none' : i < active ? 'w-full' : 'w-0'
                    }`}
                    style={i === active ? { animationDuration: `${heroSlideInterval}ms` } : undefined}
                  />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Quick stats under the photos */}
      <div className="border-b border-hairline bg-surface">
        <div className="wrap grid grid-cols-3 divide-x divide-hairline py-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="px-2">
              <strong className="block text-[24px] font-semibold leading-none text-gold">{stat.value}</strong>
              <span className="mt-1.5 block text-[12px] leading-tight text-muted">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
