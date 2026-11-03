import { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Plane, ArrowRight } from 'lucide-react';
import usePageTitle from '../hooks/usePageTitle';
import PageHero from '../components/shared/PageHero';
import FilterTabs from '../components/shared/FilterTabs';
import Reveal from '../components/shared/Reveal';
import PricingCard from '../components/ui/PricingCard';
import UnitCard from '../components/ui/UnitCard';
import { units, unitTypes, unitsOfType } from '../data/units';
import { images } from '../data/images';

export default function Residents() {
  usePageTitle('Residents');
  const [filter, setFilter] = useState('all');
  const listRef = useRef(null);

  const visibleUnits = useMemo(() => (filter === 'all' ? units : unitsOfType(filter)), [filter]);

  const filterOptions = [
    { value: 'all', label: 'All apartments', count: units.length },
    ...Object.values(unitTypes).map((t) => ({
      value: t.key,
      label: `${t.shortLabel} (${t.tag})`,
      count: unitsOfType(t.key).length
    }))
  ];

  const selectType = (key) => {
    setFilter((current) => (current === key ? 'all' : key));
    listRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <PageHero
        image={images.residentsHero}
        imageAlt="Furnished apartment living area"
        eyebrow="Residents"
        title="Choose your"
        highlight="apartment."
        text="Single one-bedroom units and double two-bedroom units with two bathrooms. Every apartment is furnished and includes Wi-Fi, parking and access to airport transport."
      >
        <div className="mx-auto grid max-w-[720px] gap-4 text-left sm:grid-cols-2">
          {Object.values(unitTypes).map((type) => (
            <PricingCard
              key={type.key}
              type={type}
              count={unitsOfType(type.key).length}
              active={filter === type.key}
              onSelect={() => selectType(type.key)}
            />
          ))}
        </div>
      </PageHero>

      <section ref={listRef} className="wrap scroll-mt-24 py-12 md:py-16">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <FilterTabs label="Apartment type" options={filterOptions} value={filter} onChange={setFilter} />
          <p className="text-[14px] text-muted">
            Showing <span className="font-semibold text-ink">{visibleUnits.length}</span> of {units.length} apartments
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleUnits.map((unit, i) => (
            <UnitCard key={unit.id} unit={unit} index={i} />
          ))}
        </div>

        {/* Airport transport note */}
        <Reveal className="mt-12">
          <div className="flex flex-col items-start gap-4 rounded-2xl border border-hairline bg-surface p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-hairline bg-white">
                <Plane className="h-5 w-5 text-gold" />
              </span>
              <div>
                <h3 className="text-[16px] font-semibold">Need a ride from the airport?</h3>
                <p className="text-[13.5px] text-muted">Add an airport pickup or drop-off to any stay.</p>
              </div>
            </div>
            <Link to="/transport" className="btn btn-ghost shrink-0 bg-white">
              About our transport <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
