import { Check } from 'lucide-react';
import Photo from '../../components/shared/Photo';
import Reveal from '../../components/shared/Reveal';
import { site } from '../../config/site';
import { images } from '../../data/images';
import { units, unitTypes, unitsOfType } from '../../data/units';

export default function AboutSection() {
  const oneBedroomCount = unitsOfType('oneBedroom').length;
  const twoBedroomCount = unitsOfType('twoBedroom').length;

  const highlights = [
    'Fully furnished, ready to move in',
    'Wi-Fi and a furnished kitchen in every unit',
    'Parking space for your car',
    'Airport pickup and drop-off'
  ];

  const stats = [
    { value: String(units.length), label: 'Apartments' },
    { value: String(oneBedroomCount), label: 'One-bedroom units' },
    { value: String(twoBedroomCount), label: 'Two-bedroom units' },
    { value: `${site.currency}${unitTypes.oneBedroom.price}–${site.currency}${unitTypes.twoBedroom.price}`, label: `Per ${site.priceUnit}` }
  ];

  return (
    <section id="about" className="scroll-mt-24">
      <div className="wrap grid items-center gap-12 py-20 md:py-[100px] lg:grid-cols-2 lg:gap-14">
        <Reveal className="relative">
          <Photo src={images.building} alt={`${site.name} building`} className="aspect-[4/3] rounded-2xl border border-hairline lg:aspect-[5/5]">
            <span className="absolute bottom-4 left-4 rounded bg-ink/55 px-3 py-1.5 font-mono text-[12px] tracking-wider text-white backdrop-blur-sm">
              {site.address.street} · {site.address.area}
            </span>
          </Photo>
          <div className="absolute -bottom-6 right-4 hidden rounded-2xl border border-hairline bg-white px-5 py-4 shadow-soft sm:block lg:-right-6">
            <p className="text-[28px] font-semibold leading-none text-gold">{units.length}</p>
            <p className="mt-1 text-[12.5px] text-muted">furnished apartments</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow">About {site.name}</p>
          <h2 className="mt-3 text-balance text-[clamp(28px,3.6vw,42px)] leading-[1.12]">A calm, comfortable home base in Kicukiro.</h2>
          <p className="mt-5 text-[15.5px] leading-[1.8] text-muted">
            {site.name} is a small residence of {units.length} furnished apartments on {site.address.street} in Kicukiro, Kigali.
            Our {oneBedroomCount} one-bedroom units suit solo travellers and couples, while our {twoBedroomCount} two-bedroom
            units, each with two bathrooms, give families and groups room to spread out.
          </p>
          <p className="mt-4 text-[15.5px] leading-[1.8] text-muted">
            Whether you are in Kigali for a few nights or a few months, you get a private, ready-to-live-in apartment, and we can
            collect you from the airport when you arrive.
          </p>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[14px] text-ink/85">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15">
                  <Check className="h-3 w-3 text-gold-deep" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* Stats band */}
      <div className="border-y border-hairline bg-surface">
        <div className="wrap grid grid-cols-2 py-10 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="px-4 py-4 text-center">
              <div className="text-[clamp(28px,3.4vw,38px)] font-semibold leading-none text-gold">{stat.value}</div>
              <div className="mt-2 text-[13px] text-muted">{stat.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
