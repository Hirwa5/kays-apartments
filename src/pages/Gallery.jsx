import { Link } from 'react-router-dom';
import { CalendarDays, ArrowRight } from 'lucide-react';
import usePageTitle from '../hooks/usePageTitle';
import PageHero from '../components/shared/PageHero';
import CtaBand from '../components/shared/CtaBand';
import GalleryGrid from '../components/ui/GalleryGrid';
import { site } from '../config/site';
import { images } from '../data/images';

export default function Gallery() {
  usePageTitle('Gallery');
  return (
    <>
      <PageHero
        image={images.galleryHero}
        imageAlt="Bright living area with plants"
        eyebrow="Gallery"
        title="Take a look"
        highlight="inside."
        text="Living areas, bedrooms, kitchens and more. Tap any photo to see it full screen."
      />

      <section className="wrap py-12 md:py-16">
        <GalleryGrid />
      </section>

      <CtaBand
        eyebrow="Come and see it"
        title={`Experience ${site.name}`}
        text="Photos only show so much. Visit us for a viewing, or choose your apartment and book your stay today."
      >
        <Link to="/contact#schedule" className="btn btn-gold !px-7 !py-3.5">
          <CalendarDays className="h-4 w-4" /> Schedule the visit
        </Link>
        <Link to="/residents" className="btn btn-on-dark !px-7 !py-3.5">
          Book your stay <ArrowRight className="h-4 w-4" />
        </Link>
      </CtaBand>
    </>
  );
}
