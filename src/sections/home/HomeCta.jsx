import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays } from 'lucide-react';
import CtaBand from '../../components/shared/CtaBand';
import { site } from '../../config/site';

export default function HomeCta() {
  return (
    <CtaBand
      eyebrow="Book your stay"
      title={`Ready to make ${site.name} your home in Kigali?`}
      text="Choose a one- or two-bedroom apartment and book directly on WhatsApp, or come and see it first."
    >
      <Link to="/residents" className="btn btn-gold !px-7 !py-3.5">
        See apartments & prices <ArrowRight className="h-4 w-4" />
      </Link>
      <Link to="/contact#schedule" className="btn btn-on-dark !px-7 !py-3.5">
        <CalendarDays className="h-4 w-4" /> Schedule a viewing
      </Link>
    </CtaBand>
  );
}
