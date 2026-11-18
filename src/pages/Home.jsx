import usePageTitle from '../hooks/usePageTitle';
import HomeHeroMobile from '../sections/home/HomeHeroMobile';
import HomeHero from '../sections/home/HomeHero';
import AboutSection from '../sections/home/AboutSection';
import AmenitiesSection from '../sections/home/AmenitiesSection';
import VirtualTourSection from '../sections/home/VirtualTourSection';
import HomeCta from '../sections/home/HomeCta';

export default function Home() {
  usePageTitle();
  return (
    <>
      <HomeHeroMobile />
      <HomeHero />
      <AboutSection />
      <AmenitiesSection />
      <VirtualTourSection />
      <HomeCta />
    </>
  );
}
