export function loadCustomExercises() {
  return JSON.parse(localStorage.getItem('customExercises') || '{}');
}

export function addCustomExercise(workoutId, exercise) {
  const custom = loadCustomExercises();
  const key = String(workoutId);

  if (!custom[key]) custom[key] = [];

  // avoid duplicates by name
  const exists = custom[key].some(e => e.exerciseName === exercise.exerciseName);
  if (exists) return;

  custom[key].push(exercise);
  localStorage.setItem('customExercises', JSON.stringify(custom));
}

export function removeCustomExercise(workoutId, exerciseName) {
  const custom = loadCustomExercises();
  const key = String(workoutId);

  if (!custom[key]) return;

  custom[key] = custom[key].filter(e => e.exerciseName !== exerciseName);
  localStorage.setItem('customExercises', JSON.stringify(custom));
}

export function isExerciseInWorkout(workoutId, exerciseName, baseExercises = []) {
  // check both the program's own exercises AND custom additions
  const inBase = baseExercises.some(e => e.exerciseName === exerciseName);
  if (inBase) return true;

  const custom = loadCustomExercises();
  const list = custom[String(workoutId)] || [];
  return list.some(e => e.exerciseName === exerciseName);
}