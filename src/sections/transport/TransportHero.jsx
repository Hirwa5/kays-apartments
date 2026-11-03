import { motion } from 'framer-motion';
import { Phone, PlaneLanding } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Photo from '../../components/shared/Photo';
import ContourLines from '../../components/shared/ContourLines';
import { site } from '../../config/site';
import { images } from '../../data/images';
import { whatsappUrl, transportMessage } from '../../utils/whatsapp';

export default function TransportHero() {
  return (
    <section className="relative overflow-hidden border-b border-hairline">
      <div className="wrap grid items-center gap-10 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="eyebrow">Airport transport</p>
          <h1 className="mt-3.5 text-[clamp(38px,5vw,60px)] leading-[1.05]">
            Landing in Kigali?
            <br />
            <span className="text-gradient">We'll pick you up.</span>
          </h1>
          <p className="mt-6 max-w-[480px] text-[17px] leading-relaxed text-muted">
            Book a pickup or drop-off between Kigali International Airport and {site.name}. Send us your flight details and your
            driver will be there, day or night.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappUrl(transportMessage())} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp !px-7 !py-3.5">
              <FaWhatsapp className="h-5 w-5" aria-hidden="true" /> Book on WhatsApp
            </a>
            <a href={`tel:${site.phone.tel}`} className="btn btn-ghost !px-7 !py-3.5">
              <Phone className="h-4 w-4" /> {site.phone.display}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative min-h-[320px] self-stretch sm:min-h-[400px]"
        >
          <Photo src={images.airport} alt="Airplane wing above the clouds" loading="eager" className="absolute inset-0 rounded-2xl border border-hairline">
            <div className="absolute inset-0 bg-gradient-to-b from-ink/5 to-ink/40" />
            <ContourLines className="absolute inset-0 h-full w-full opacity-60" />
            <div className="absolute bottom-[18px] left-[18px] flex items-center gap-3 rounded-xl border border-hairline bg-white/85 px-4 py-3 backdrop-blur-md">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/15">
                <PlaneLanding className="h-4 w-4 text-gold-deep" />
              </span>
              <div>
                <p className="eyebrow !text-[10px]">Pickups & drop-offs</p>
                <strong className="text-[14.5px]">Kigali International Airport</strong>
              </div>
            </div>
          </Photo>
        </motion.div>
      </div>
    </section>
  );
}
