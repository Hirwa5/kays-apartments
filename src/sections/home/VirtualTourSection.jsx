import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../../components/shared/SectionHeading';
import Reveal from '../../components/shared/Reveal';
import VirtualTour from '../../components/ui/VirtualTour';

export default function VirtualTourSection() {
  return (
    <section id="virtual-tour" className="contour-pattern scroll-mt-24 border-y border-hairline bg-surface">
      <div className="wrap py-20 md:py-[100px]">
        <div className="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Virtual tour"
            title="Walk through an apartment before you visit"
            text="Move from room to room to get a feel for the space. Use the arrows or pick a room."
          />
          <Link to="/contact#schedule" className="btn btn-ghost shrink-0 bg-white">
            Prefer to see it in person? <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <Reveal delay={0.1}>
          <VirtualTour />
        </Reveal>
      </div>
    </section>
  );
}
