// utils/volumeStats.js
const WEEK_MS = 7 * 24 * 60 * 60 * 1000;
const WEEKS_SHOWN = 4;

// "2026-10-20" -> local Date at midnight
function parseLocalDate(str) {
  const [y, m, d] = String(str).split('-').map(Number);
  return new Date(y, m - 1, d);
}

// Monday-start weeks. Use 0 for Sunday.
function startOfWeek(date, weekStartsOn = 1) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() - ((d.getDay() - weekStartsOn + 7) % 7));
  return d;
}

export function getVolumeStats(workouts, now = new Date()) {
  const currentWeek = startOfWeek(now);

  // Monday of the oldest week shown
  const firstWeek = new Date(currentWeek);
  firstWeek.setDate(firstWeek.getDate() - 7 * (WEEKS_SHOWN - 1));

  const kg = Array(WEEKS_SHOWN).fill(0);

  workouts.forEach((w) => {
    const d = parseLocalDate(w.date);
    if (isNaN(d) || d < firstWeek || d > now) return;
    const i = Math.round((startOfWeek(d) - firstWeek) / WEEK_MS);
    kg[i] += w.totalVolume || 0;
  });

  const max = Math.max(...kg, 1);
  const bars = kg.map((v, i) => {
    const weekStart = new Date(firstWeek);
    weekStart.setDate(weekStart.getDate() + i * 7);
    return {
      label: weekStart.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }), // "Oct 26"
      kg: v,
      pct: v === 0 ? 0 : Math.max(Math.round((v / max) * 100), 4),
      current: i === kg.length - 1,
    };
  });

  const cur  = kg[kg.length - 1];
  const prev = kg[kg.length - 2];

  const isDown = prev > 0 && cur < prev;
  const delta =
    prev === 0
      ? '–'
      : cur === prev
        ? '→ 0.0%'
        : `${cur > prev ? '↑' : '↓'} ${Math.abs(((cur - prev) / prev) * 100).toFixed(1)}%`;

  return { total: cur, delta, isDown, bars };
}