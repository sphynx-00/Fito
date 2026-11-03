const pad = (n) => String(n).padStart(2, '0');

export const toDateKey = (d) =>
  `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;