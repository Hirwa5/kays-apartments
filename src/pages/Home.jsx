import usePageTitle from '../hooks/usePageTitle';
import HomeHeroMobile from '../sections/home/HomeHeroMobile';
import HomeHero from '../sections/home/HomeHero';
import AboutSection from '../sections/home/AboutSection';
import AmenitiesSection from '../sections/home/AmenitiesSection';
import VirtualTourSection from '../sections/home/VirtualTourSection';
import HomeCta from '../sections/home/HomeCta';

// Home page = Hero + About + Amenities + Virtual tour + closing call-to-action.
// Reorder or remove sections here.
export default function Home() {
  usePageTitle();
  return (
    <>
      {/* Phones & tablets only: full-screen photo slideshow */}
      <HomeHeroMobile />
      {/* Computers only */}
      <HomeHero />
      <AboutSection />
      <AmenitiesSection />
      <VirtualTourSection />
      <HomeCta />
    </>
  );
}
