import Reveal from './Reveal';
import ContourLines from './ContourLines';

/** Dark rounded call-to-action panel with gold lines. Put buttons inside as children. */
export default function CtaBand({ eyebrow, title, text, children, id }) {
  return (
    <section id={id} className="wrap py-16 md:py-24">
      <Reveal className="relative overflow-hidden rounded-3xl bg-ink px-6 py-14 text-center sm:px-12 md:py-16">
        <ContourLines className="absolute inset-0 h-full w-full opacity-35" />
        <div className="relative mx-auto max-w-[640px]">
          {eyebrow && <p className="eyebrow-light">{eyebrow}</p>}
          <h2 className="mt-3 text-balance text-[clamp(28px,3.8vw,42px)] leading-[1.12] text-white">{title}</h2>
          {text && <p className="mt-4 text-[15.5px] leading-relaxed text-white/75">{text}</p>}
          {children && <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">{children}</div>}
        </div>
      </Reveal>
    </section>
  );
}
