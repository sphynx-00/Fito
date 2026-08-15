export const monthSummary = {
  period: 'August 2026',
  workouts: 14,
  volume: '32.4k',
  prs: 6,
  avgMinutes: 64,
  volumeDelta: '↑ 8.4%',
  volumeDeltaLabel: 'volume vs. July',
};

export const calendar = {
  month: 'August 2026',
  firstWeekdayOffset: 5, // Mon-first grid; Aug 1 2026 is a Saturday
  daysInMonth: 31,
  lastRenderedDay: 23,
  workoutDays: [3, 5, 6, 8, 10, 12, 13, 15],
  today: 15,
};

export const selectedDay = {
  dateLabel: 'August 15',
  name: 'Chest',
  meta: '7 exercises · 68 min · 8,450 kg',
  prs: 1,
};

export const recentWorkouts = [
  { id: 'w-0815', month: 'AUG', day: '15', name: 'Chest', meta: '7 exercises · 68 min · 8,450 kg', prs: 1 },
  { id: 'w-0813', month: 'AUG', day: '13', name: 'Back', meta: '6 exercises · 61 min · 7,820 kg', prs: 0 },
  { id: 'w-0812', month: 'AUG', day: '12', name: 'Legs', meta: '7 exercises · 74 min · 10,240 kg', prs: 2 },
];

export const exerciseProgress = {
  exercise: 'Bench Press',
  bestWeight: '80 kg × 3',
  estimated1RM: '87 kg',
  sessions: 24,
  totalVolume: '18,420 kg',
  trend: [0.18, 0.31, 0.45, 0.49, 0.68, 0.79, 0.92], // normalized 0..1
  axis: ['MAY', 'JUN', 'JUL', 'AUG'],
  recentSessions: [
    { date: 'Aug 15', result: '65 kg × 8' },
    { date: 'Aug 12', result: '65 kg × 7' },
    { date: 'Aug 8', result: '62.5 kg × 9' },
    { date: 'Aug 5', result: '60 kg × 10' },
  ],
};

export const personalRecords = [
  { exercise: 'Bench Press', result: '80 kg × 3', date: 'Aug 10, 2026' },
  { exercise: 'Squat', result: '120 kg × 2', date: 'Aug 5, 2026' },
  { exercise: 'Deadlift', result: '150 kg × 1', date: 'Jul 28, 2026' },
];

export const volume = {
  total: '32,450 kg',
  delta: '↑ 8.4%',
  ranges: ['Week', 'Month', '3M'],
  activeRange: 'Month',
  bars: [
    { label: 'W1', pct: 48 },
    { label: 'W2', pct: 62 },
    { label: 'W3', pct: 58 },
    { label: 'W4', pct: 88, current: true },
  ],
};

export const muscleFrequency = [
  { muscle: 'Chest', sessions: 8, last: 'today', pct: 100, current: true },
  { muscle: 'Back', sessions: 8, last: '2d ago', pct: 100 },
  { muscle: 'Shoulders', sessions: 6, last: '3d ago', pct: 75 },
  { muscle: 'Legs', sessions: 6, last: '4d ago', pct: 75 },
  { muscle: 'Biceps', sessions: 5, last: '2d ago', pct: 62 },
  { muscle: 'Triceps', sessions: 5, last: 'today', pct: 62 },
];

export const bodyWeight = {
  current: '67.2 kg',
  ranges: ['1M', '3M', '6M', '1Y'],
  activeRange: '1M',
  trend: [0.36, 0.42, 0.33, 0.49, 0.44, 0.58, 0.53, 0.67],
};

export const workoutDetail = {
  name: 'Chest',
  program: 'UL/PPL · Upper A · August 15, 2026',
  duration: 68,
  volume: '8,450',
  prs: 1,
  prHighlight: { exercise: 'Bench Press', result: '70 kg', previous: 'prev 67.5' },
  exercises: [
    { name: 'Bench Press', sets: ['60 kg × 10', '65 kg × 8', '65 kg × 7'] },
    { name: 'Incline Dumbbell Press', sets: ['24 kg × 10', '24 kg × 9', '22 kg × 10'] },
    { name: 'Cable Fly', sets: ['15 kg × 12', '15 kg × 12', '17.5 kg × 10'] },
  ],
  remainingCount: 4,
  recordedNote: 'Read-only · recorded Aug 15',
};
