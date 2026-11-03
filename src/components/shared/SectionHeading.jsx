import Reveal from './Reveal';

/** Eyebrow label + title + intro text, used at the top of most sections. */
export default function SectionHeading({ eyebrow, title, text, align = 'left', light = false, className = '' }) {
  const centered = align === 'center';
  return (
    <Reveal className={`${centered ? 'mx-auto max-w-[660px] text-center' : 'max-w-[620px]'} ${className}`}>
      {eyebrow && <p className={light ? 'eyebrow-light' : 'eyebrow'}>{eyebrow}</p>}
      <h2 className={`mt-3 text-balance text-[clamp(28px,3.6vw,42px)] leading-[1.12] ${light ? 'text-white' : 'text-ink'}`}>{title}</h2>
      {text && <p className={`mt-4 text-[15.5px] leading-relaxed ${light ? 'text-white/75' : 'text-muted'}`}>{text}</p>}
    </Reveal>
  );
}
