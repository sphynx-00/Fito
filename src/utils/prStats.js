const normalize = (name) => String(name).trim().toLowerCase();

export function getPRs(workouts) {
  const sorted = [...workouts].sort(
    (a, b) => a.date.localeCompare(b.date) || a.id - b.id
  );

  const best = {};   // { 'bench press': 75 }
  const prs = [];

  sorted.forEach((w) => {
    // compare against earlier workouts only, so two entries of the same
    // exercise in one workout can't beat each other
    const bestBefore = { ...best };

    w.exercises.forEach((e) => {
      const weight = Number(e.weight) || 0;
      if (weight === 0) return;

      const key = normalize(e.name);
      const previous = bestBefore[key];

      if (previous !== undefined && weight > previous) {
        prs.push({ name: e.name, weight, previous, date: w.date });
      }

      if (previous === undefined || weight > previous) {
        best[key] = Math.max(best[key] ?? 0, weight);
      }
    });
  });

  return prs.reverse();   // newest first
}