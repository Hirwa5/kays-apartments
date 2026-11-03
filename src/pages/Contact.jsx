import usePageTitle from '../hooks/usePageTitle';
import PageHero from '../components/shared/PageHero';
import ContactInfoCard from '../components/ui/ContactInfoCard';
import ScheduleViewingCard from '../components/ui/ScheduleViewingCard';
import LocationCard from '../components/ui/LocationCard';

export default function Contact() {
  usePageTitle('Contact');
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about"
        highlight="your stay."
        text="Call, email or message us, or book a time to come and see the apartments in person."
      />

      <section className="wrap py-12 md:py-16">
        {/* Left: Get in touch · Right: Schedule a viewing */}
        <div className="grid items-stretch gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <ContactInfoCard />
          <ScheduleViewingCard />
        </div>

        {/* Below: Find us */}
        <div className="mt-6">
          <LocationCard />
        </div>
      </section>
    </>
  );
}
