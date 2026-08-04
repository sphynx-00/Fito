export function saveExerciseWeight(workoutId, exerciseOrder, newWeight) {
  const overrides = JSON.parse(localStorage.getItem('exerciseWeights') || '{}');

  const key = `${workoutId}-${exerciseOrder}`;
  overrides[key] = Number(newWeight);

  localStorage.setItem('exerciseWeights', JSON.stringify(overrides));
}

export function loadExerciseWeights() {
  return JSON.parse(localStorage.getItem('exerciseWeights') || '{}');
}

