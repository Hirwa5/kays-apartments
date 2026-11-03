// Small formatting helpers used in messages and forms.

/** "2026-11-03" → "Tue, 3 Nov 2026" */
export function formatDate(isoDate) {
  if (!isoDate) return '';
  const [y, m, d] = isoDate.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
}

/** "14:30" → "2:30 PM" */
export function formatTime(time) {
  if (!time) return '';
  const [h, min] = time.split(':').map(Number);
  const date = new Date(2000, 0, 1, h, min);
  return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
}

/** Today's date as "YYYY-MM-DD" in the visitor's own time zone (for date pickers) */
export function todayISO() {
  const now = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
}
