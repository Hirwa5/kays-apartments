import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CalendarDays, CheckCircle2 } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Reveal from '../shared/Reveal';
import { unitInterestGroups, unitInterestLabel } from '../../data/units';
import { openWhatsApp, viewingMessage } from '../../utils/whatsapp';
import { todayISO } from '../../utils/format';

const emptyForm = { fullName: '', email: '', phone: '', unit: '', date: '', time: '', message: '' };

/**
 * "Schedule a viewing" form (Contact page, right side).
 * Nothing is stored: pressing "Send message" opens WhatsApp with all the details filled in.
 * Links like /contact?unit=unit-3#schedule pre-select a unit.
 */
export default function ScheduleViewingCard() {
  const [params] = useSearchParams();
  const [form, setForm] = useState(() => {
    const unit = params.get('unit');
    return { ...emptyForm, unit: unit && unitInterestLabel(unit) ? unit : '' };
  });
  const [sentUrl, setSentUrl] = useState('');

  // If the visitor arrives from a unit card, pre-select that unit
  useEffect(() => {
    const unit = params.get('unit');
    if (unit && unitInterestLabel(unit)) setForm((f) => ({ ...f, unit }));
  }, [params]);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  function handleSubmit(e) {
    e.preventDefault();
    const url = openWhatsApp(viewingMessage({ ...form, unitLabel: unitInterestLabel(form.unit) }));
    setSentUrl(url);
  }

  return (
    <Reveal className="h-full">
      <div id="schedule" className="h-full scroll-mt-28 rounded-2xl border border-hairline bg-white p-7 shadow-panel md:p-9">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold/15 text-gold-deep">
            <CalendarDays className="h-5 w-5" />
          </span>
          <div>
            <h2 className="text-[clamp(22px,2.6vw,28px)] leading-tight">Schedule a viewing</h2>
            <p className="mt-1 text-[14px] text-muted">Pick a time and we will confirm on WhatsApp.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-7 grid gap-4 sm:grid-cols-2">
          <Field label="Full name" htmlFor="sv-name" className="sm:col-span-2">
            <input id="sv-name" className="input" value={form.fullName} onChange={update('fullName')} placeholder="e.g. Aline Uwase" autoComplete="name" required />
          </Field>

          <Field label="Email address" htmlFor="sv-email">
            <input id="sv-email" type="email" className="input" value={form.email} onChange={update('email')} placeholder="you@example.com" autoComplete="email" required />
          </Field>

          <Field label="Phone number" htmlFor="sv-phone">
            <input id="sv-phone" type="tel" className="input" value={form.phone} onChange={update('phone')} placeholder="+250 7XX XXX XXX" autoComplete="tel" required />
          </Field>

          <Field label="Unit of interest" htmlFor="sv-unit" className="sm:col-span-2">
            <select id="sv-unit" className="input cursor-pointer" value={form.unit} onChange={update('unit')} required>
              <option value="" disabled>
                Choose an apartment
              </option>
              {unitInterestGroups.map((group) => (
                <optgroup key={group.label} label={group.label}>
                  {group.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </Field>

          <Field label="Preferred viewing date" htmlFor="sv-date">
            <input id="sv-date" type="date" className="input" value={form.date} min={todayISO()} onChange={update('date')} required />
          </Field>

          <Field label="Preferred viewing time" htmlFor="sv-time">
            <input id="sv-time" type="time" className="input" value={form.time} onChange={update('time')} required />
          </Field>

          <Field label="Message (optional)" htmlFor="sv-message" className="sm:col-span-2">
            <textarea
              id="sv-message"
              rows="4"
              className="input resize-none"
              value={form.message}
              onChange={update('message')}
              placeholder="Anything we should know? e.g. moving date, number of guests…"
            />
          </Field>

          <div className="sm:col-span-2">
            <button type="submit" className="btn btn-gold w-full !py-3.5">
              <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
              Send message
            </button>
            <p className="mt-2.5 text-center text-[12px] text-muted">Opens WhatsApp with your details ready to send.</p>
          </div>
        </form>

        {sentUrl && (
          <div role="status" className="mt-5 flex items-start gap-3 rounded-2xl border border-whatsapp/30 bg-whatsapp/[0.06] px-4 py-3.5">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-whatsapp-dark" />
            <p className="text-[13px] leading-relaxed text-ink/80">
              WhatsApp is opening with your request. Just press send. Did it not open?{' '}
              <a href={sentUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-whatsapp-dark underline">
                Open WhatsApp
              </a>
            </p>
          </div>
        )}
      </div>
    </Reveal>
  );
}

function Field({ label, htmlFor, className = '', children }) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="form-label">
        {label}
      </label>
      {children}
    </div>
  );
}
