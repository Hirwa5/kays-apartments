import { motion } from 'framer-motion';
import Photo from './Photo';
import ContourLines from './ContourLines';

/**
 * Centered page header used on Residents, Gallery and Contact.
 * Pass `image` to show a background photo (white text on a darkened photo);
 * without it, the header uses the light grey BAGIRE style.
 */
export default function PageHero({ eyebrow, title, highlight, text, image, imageAlt = '', children }) {
  const onPhoto = Boolean(image);

  const fadeUp = (delay) => ({
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }
  });

  return (
    <section className={`relative overflow-hidden border-b border-hairline ${onPhoto ? 'bg-ink' : 'bg-surface'}`}>
      {onPhoto ? (
        <>
          <Photo src={image} alt={imageAlt} loading="eager" className="absolute inset-0 !bg-ink" imgClassName="scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/55 to-ink/85" aria-hidden="true" />
          <ContourLines className="absolute inset-0 h-full w-full opacity-25" />
        </>
      ) : (
        <div className="contour-pattern absolute inset-0 opacity-40" aria-hidden="true" />
      )}

      <div className={`wrap relative text-center ${onPhoto ? 'pb-16 pt-20 md:pb-24 md:pt-28' : 'pb-14 pt-16 md:pb-20 md:pt-24'}`}>
        {eyebrow && (
          <motion.p {...fadeUp(0)} className={onPhoto ? 'eyebrow-light' : 'eyebrow'}>
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          {...fadeUp(0.08)}
          className={`mx-auto mt-4 max-w-[780px] text-balance text-[clamp(34px,5vw,56px)] leading-[1.06] ${onPhoto ? 'text-white' : ''}`}
        >
          {title}
          {highlight && (
            <>
              {' '}
              <span className={onPhoto ? 'text-gradient-light' : 'text-gradient'}>{highlight}</span>
            </>
          )}
        </motion.h1>
        {text && (
          <motion.p
            {...fadeUp(0.16)}
            className={`mx-auto mt-5 max-w-[580px] text-[16px] leading-relaxed ${onPhoto ? 'text-white/85' : 'text-muted'}`}
          >
            {text}
          </motion.p>
        )}
        {children && (
          <motion.div {...fadeUp(0.24)} className="mt-10">
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
