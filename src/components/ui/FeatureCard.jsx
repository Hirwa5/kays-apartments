import Reveal from '../shared/Reveal';

/** Centered card with a large round icon (Transport page → Why choose our transport). */
export default function FeatureCard({ feature, index = 0 }) {
  const Icon = feature.icon;
  return (
    <Reveal delay={index * 0.1} className="h-full">
      <div className="group h-full rounded-2xl border border-hairline bg-white p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-soft">
        <div className="relative mx-auto mb-6 flex h-[88px] w-[88px] items-center justify-center rounded-full border border-hairline bg-surface transition-all duration-300 group-hover:border-gold group-hover:bg-gold/[0.04]">
          <Icon className="h-9 w-9 text-gold transition-transform duration-300 group-hover:scale-110" strokeWidth={1.6} />
          <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-gold font-mono text-[10px] font-bold text-white">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <h3 className="mb-2 text-[17px] font-semibold">{feature.title}</h3>
        <p className="mx-auto max-w-[240px] text-[14px] leading-relaxed text-muted">{feature.description}</p>
      </div>
    </Reveal>
  );
}
