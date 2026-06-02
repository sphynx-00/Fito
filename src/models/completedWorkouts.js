export const completedWorkouts = [
  {
    id: 1,
    name: 'Upper',
    date: '2026-04-29',
    day: '29',
    month: 'APR',
    duration: 45,
    status: 'Done',
    week: 'this',
    exercises: [
      { name: 'Incline Bench Press', sets: 2, reps: 8  },
      { name: 'Pec Deck',            sets: 2, reps: 8  },
      { name: 'Lateral Raise',       sets: 2, reps: 8  },
      { name: 'Weighted Pull Ups',   sets: 2, reps: 8  },
      { name: 'Machine Rows',        sets: 2, reps: 8  },
      { name: 'Preacher Curls',      sets: 2, reps: 8  },
      { name: 'Triceps Pressdown',   sets: 2, reps: 8  },
    ]
  },
  {
    id: 2,
    name: 'Lower',
    date: '2026-04-28',
    day: '28',
    month: 'APR',
    duration: 40,
    status: 'Done',
    week: 'this',
    exercises: [
      { name: 'Squat',               sets: 2, reps: 8  },
      { name: 'Leg Press',           sets: 2, reps: 8  },
      { name: 'Romanian Deadlift',   sets: 2, reps: 8  },
      { name: 'Standing Calf Raise', sets: 2, reps: 8  },
      { name: 'Ab Crunch',           sets: 2, reps: 8  },
    ]
  },
  {
    id: 3,
    name: 'Recovery',
    date: '2026-04-27',
    day: '27',
    month: 'APR',
    duration: 0,
    status: null,
    week: 'this',
    exercises: []
  },
  {
    id: 4,
    name: 'Push',
    date: '2026-04-24',
    day: '24',
    month: 'APR',
    duration: 38,
    status: 'Done',
    week: 'last',
    exercises: [
      { name: 'Bench Press',          sets: 2, reps: 8  },
      { name: 'Pec Deck',             sets: 2, reps: 8  },
      { name: 'Lateral Raise',        sets: 2, reps: 8  },
      { name: 'Cable Head Extension', sets: 2, reps: 8  },
      { name: 'Kickback Extension',   sets: 2, reps: 8  },
    ]
  },
  {
    id: 5,
    name: 'Pull',
    date: '2026-04-23',
    day: '23',
    month: 'APR',
    duration: 42,
    status: 'Done',
    week: 'last',
    exercises: [
      { name: 'Lat Pulldown',  sets: 2, reps: 8 },
      { name: 'Machine Rows',  sets: 2, reps: 8 },
      { name: 'Rear Delt Fly', sets: 2, reps: 8 },
      { name: 'Preacher Curls',sets: 2, reps: 8 },
      { name: 'Spider Curls',  sets: 2, reps: 8 },
    ]
  },
  {
    id: 6,
    name: 'Legs',
    date: '2026-04-22',
    day: '22',
    month: 'APR',
    duration: 50,
    status: 'Done',
    week: 'last',
    exercises: [
      { name: 'Deadlift',             sets: 2, reps: 8 },
      { name: 'Hamstring Leg Curls',  sets: 2, reps: 8 },
      { name: 'Leg Extension',        sets: 2, reps: 8 },
      { name: 'Standing Calf Raise',  sets: 2, reps: 8 },
      { name: 'Ab Crunch',            sets: 2, reps: 8 },
    ]
  },
];

export function saveWorkoutHistory(workoutName, exercises) {
  const today = new Date();

  const completedWorkout = {
    id:        Date.now(),
    name:      workoutName,
    date:      today.toISOString().split('T')[0],
    day:       today.getDate().toString(),
    month:     today.toLocaleString('default', { month: 'short' }).toUpperCase(),
    status:    'Done',
    exercises: exercises.map(e => ({
      name: e.exerciseName,
      sets: e.sets,
      reps: e.reps,
    }))
  };

  saveToStorage(completedWorkout);
}

function saveToStorage(completedWorkout) {
  const existing = loadFromStorage();
  const updated  = [completedWorkout, ...existing];

  localStorage.setItem('completedWorkout', JSON.stringify(updated));
}

export function loadFromStorage() {
 return JSON.parse(localStorage.getItem('completedWorkout') || '[]');
}