import SectionHeading from '../../components/shared/SectionHeading';
import FeatureCard from '../../components/ui/FeatureCard';
import { transportFeatures } from '../../data/transport';

export default function TransportFeatures() {
  return (
    <section className="wrap py-20 md:py-[100px]">
      <SectionHeading
        align="center"
        eyebrow="Why ride with us"
        title="Why choose our transport"
        text="A smooth start and end to your stay, with a driver you can count on."
        className="mb-12 md:mb-14"
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {transportFeatures.map((feature, i) => (
          <FeatureCard key={feature.title} feature={feature} index={i} />
        ))}
      </div>
    </section>
  );
}
