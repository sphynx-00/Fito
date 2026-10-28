// utils/volumeStats.js
const WEEK_MS = 7 * 24 * 60 * 60 * 1000;

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
  const monthStart  = new Date(now.getFullYear(), now.getMonth(), 1);
  const firstWeek   = startOfWeek(monthStart);
  const currentWeek = startOfWeek(now);
  const weekCount   = Math.round((currentWeek - firstWeek) / WEEK_MS) + 1;

  const kg = Array(weekCount).fill(0);

  workouts.forEach((w) => {
    const d = parseLocalDate(w.date);               // <- your field
    if (isNaN(d) || d < monthStart || d > now) return;
    const i = Math.round((startOfWeek(d) - firstWeek) / WEEK_MS);
    kg[i] += w.totalVolume || 0;
  });

  const max = Math.max(...kg, 1);
  const bars = kg.map((v, i) => ({
    label: `W${i + 1}`,
    kg: v,
    pct: v === 0 ? 0 : Math.max(Math.round((v / max) * 100), 4),
    current: i === kg.length - 1,
  }));

  const cur  = kg[kg.length - 1];
  const prev = kg.length > 1 ? kg[kg.length - 2] : 0;
  const isDown = prev > 0 && cur < prev;
  const delta =
  prev === 0
    ? '–'
    : cur === prev
      ? '→ 0.0%'
      : `${cur > prev ? '↑' : '↓'} ${Math.abs(((cur - prev) / prev) * 100).toFixed(1)}%`;

  return { total: cur, delta, isDown, bars };
}