import SectionHeading from '../../components/shared/SectionHeading';
import AmenityCard from '../../components/ui/AmenityCard';
import { amenities } from '../../data/amenities';

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="wrap scroll-mt-24 py-20 md:py-[100px]">
      <SectionHeading
        align="center"
        eyebrow="Amenities"
        title="Everything you need, already in place"
        text="Every apartment comes ready to live in, so you can settle in from the moment you arrive."
        className="mb-12 md:mb-14"
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {amenities.map((amenity, i) => (
          <AmenityCard key={amenity.key} amenity={amenity} index={i} />
        ))}
      </div>
    </section>
  );
}
