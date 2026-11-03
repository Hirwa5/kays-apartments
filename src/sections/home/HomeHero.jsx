import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays } from 'lucide-react';
import Photo from '../../components/shared/Photo';
import ContourLines from '../../components/shared/ContourLines';
import { site } from '../../config/site';
import { images } from '../../data/images';
import { units, lowestPrice } from '../../data/units';

// DESKTOP hero (screens 1024px and wider). Phones and tablets see HomeHeroMobile.jsx instead.
export default function HomeHero() {
  const stats = [
    { value: String(units.length), label: 'Furnished apartments' },
    { value: `${site.currency}${lowestPrice}`, label: `From, per ${site.priceUnit}` },
    { value: '24/7', label: 'Airport transport' }
  ];

  return (
    <section className="relative hidden overflow-hidden border-b border-hairline lg:block">
      <div className="wrap grid items-center gap-10 pb-16 pt-12 md:pt-16 lg:min-h-[calc(100vh-77px)] lg:grid-cols-[1.05fr_0.95fr] lg:pb-20">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="eyebrow">Kicukiro · Kigali · Rwanda</p>
          <h1 className="mt-3.5 text-[clamp(40px,5.4vw,66px)] leading-[1.04]">
            Home in Kigali,
            <br />
            <span className="text-gradient">ready when you land.</span>
          </h1>
          <p className="mt-6 max-w-[470px] text-[17px] leading-relaxed text-muted">
            {site.name} offers {units.length} furnished one- and two-bedroom apartments in Kicukiro, with Wi-Fi, parking, a
            furnished kitchen and airport transport. Choose your unit and book in minutes on WhatsApp.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/residents" className="btn btn-gold !px-7 !py-3.5">
              Book your stay <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact#schedule" className="btn btn-ghost !px-7 !py-3.5">
              <CalendarDays className="h-4 w-4" /> Schedule a viewing
            </Link>
          </div>

          <div className="mt-10 flex gap-8 sm:gap-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <strong className="block text-[26px] font-semibold text-gold">{stat.value}</strong>
                <span className="text-[12.5px] text-muted">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative min-h-[360px] self-stretch sm:min-h-[440px]"
        >
          <Photo src={images.hero} alt={`Living room at ${site.name}`} loading="eager" className="absolute inset-0 rounded-2xl border border-hairline">
            <div className="absolute inset-0 bg-gradient-to-b from-ink/5 to-ink/40" />
            <ContourLines className="absolute inset-0 h-full w-full opacity-70" />
            <div className="absolute bottom-[18px] left-[18px] rounded-xl border border-hairline bg-white/85 px-4 py-3 backdrop-blur-md">
              <p className="eyebrow mb-0.5 !text-[10px]">Find us</p>
              <strong className="text-[15px]">
                {site.address.street}, {site.address.area}
              </strong>
            </div>
          </Photo>
        </motion.div>
      </div>
    </section>
  );
}
