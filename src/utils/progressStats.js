import { calculateWeekStreak } from "../pages/History/historyUtils";


export function progressStats(workoutHistory, getStartOfWeek) {
  const totalWorkouts = workoutHistory.length;
  const totalHours = workoutHistory.reduce((total, w) => total + (w.duration || 45), 0) / 60;
  const weekStreak = calculateWeekStreak(getStartOfWeek, workoutHistory);
  

  return {
    totalWorkouts,
    totalHours,
    weekStreak
  };
}