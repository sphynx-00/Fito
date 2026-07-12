import { calculateDayStreak } from "../pages/History/historyUtils";


export function progressStats(workoutHistory) {
  const totalWorkouts = workoutHistory.length;
  const totalHours = workoutHistory.reduce((total, w) => total + (w.duration || 45), 0) / 60;
  const dayStreak = calculateDayStreak(workoutHistory);
  

  return {
    totalWorkouts,
    totalHours,
    dayStreak
  };
}