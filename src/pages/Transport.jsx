import usePageTitle from '../hooks/usePageTitle';
import TransportHero from '../sections/transport/TransportHero';
import TransportFeatures from '../sections/transport/TransportFeatures';
import TransportBooking from '../components/ui/TransportBooking';

export default function Transport() {
  usePageTitle('Airport transport');
  return (
    <>
      <TransportHero />
      <TransportFeatures />
      <TransportBooking />
    </>
  );
}
