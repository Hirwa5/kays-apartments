import { site } from '../../config/site';

/** Price summary for one apartment type (top of Residents page). Clicking it filters the list. */
export default function PricingCard({ type, count, active = false, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={active}
      className={`w-full rounded-2xl border bg-white p-5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-soft ${
        active ? 'border-gold ring-4 ring-gold/10' : 'border-hairline hover:border-gold'
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-accent-soft">{type.tag}</span>
        <span className="rounded-full bg-surface px-2.5 py-0.5 text-[11.5px] text-muted">
          {count} unit{count === 1 ? '' : 's'}
        </span>
      </div>
      <h3 className="mt-2 text-[18px] font-semibold">{type.label}</h3>
      <p className="mt-1 text-[13px] text-muted">
        {type.bedrooms} bedroom{type.bedrooms > 1 ? 's' : ''} · {type.bathrooms} bathroom{type.bathrooms > 1 ? 's' : ''}
      </p>
      <p className="mt-4">
        <span className="text-[30px] font-semibold leading-none text-gold">
          {site.currency}
          {type.price}
        </span>
        <span className="text-[13px] text-muted"> / {site.priceUnit}</span>
      </p>
    </button>
  );
}
