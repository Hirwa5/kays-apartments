/**
 * Pill-style filter buttons (Residents and Gallery pages).
 * options: [{ value: 'all', label: 'All', count: 8 }, ...]
 */
export default function FilterTabs({ options, value, onChange, label }) {
  return (
    <div role="tablist" aria-label={label} className="no-scrollbar flex w-fit max-w-full gap-1 overflow-x-auto rounded-2xl border border-hairline bg-surface p-1">
      {options.map((option) => {
        const active = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(option.value)}
            className={`shrink-0 rounded-xl px-4 py-2 text-[13px] font-semibold transition-all ${
              active ? 'bg-ink text-white shadow-sm' : 'text-ink/60 hover:text-ink'
            }`}
          >
            {option.label}
            {option.count !== undefined && (
              <span className={`ml-1.5 text-[11px] font-bold ${active ? 'text-white/70' : 'text-ink/35'}`}>{option.count}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
