import { getStartOfWeek, getAdjustedDate } from '../../utils/workoutUtils';

export function calculateTotalWorkouts(workoutHistory) {
  return workoutHistory
    .filter(w => w.name !== 'Recovery')
    .length;
}

export function calculateTotalHours(workoutHistory) {
  return Math.round(
    workoutHistory
      .filter(w => w.name !== 'Recovery')
      .reduce((total, w) => total + (w.duration || 45), 0) / 60
  );
}

export function calculateDayStreak(workoutHistory) {
  if (workoutHistory.length === 0) return 0;

  const today = getAdjustedDate();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const todayStr     = today.toLocaleDateString('en-CA');
  const yesterdayStr = yesterday.toLocaleDateString('en-CA');

  // unique non-recovery workout dates, newest first
  const uniqueDates = [
    ...new Set(
      workoutHistory
        .filter(w => w.name !== 'Recovery')
        .map(w => {
          const date = new Date(w.date.replace(/-/g, '/'));
          date.setHours(0, 0, 0, 0);
          return date.toLocaleDateString('en-CA');
        })
    )
  ].sort().reverse();

  if (uniqueDates.length === 0) return 0;

  // streak already broken if the most recent workout
  // is older than yesterday
  if (uniqueDates[0] !== todayStr && uniqueDates[0] !== yesterdayStr) {
    return 0;
  }

  // count from today if worked out today, otherwise from yesterday
  const startFrom = uniqueDates[0] === todayStr ? today : yesterday;

  let streak = 0;

  for (let i = 0; i < uniqueDates.length; i++) {
    const expectedDate = new Date(startFrom);
    expectedDate.setDate(startFrom.getDate() - i);
    const expectedDateStr = expectedDate.toLocaleDateString('en-CA');

    if (uniqueDates[i] === expectedDateStr) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
}

export function getFilteredBoundary() {
  const today = getAdjustedDate();
  const startOfThisWeek = getStartOfWeek(today);

  const startOfLastWeek = new Date(startOfThisWeek);
  startOfLastWeek.setDate(startOfThisWeek.getDate() - 7);

  const endOfLastWeek = new Date(startOfThisWeek);
  endOfLastWeek.setDate(startOfThisWeek.getDate() - 1);
  endOfLastWeek.setHours(23, 59, 59, 999);

  return {
    today,
    startOfThisWeek,
    startOfLastWeek,
    endOfLastWeek,
  };
}

export function getFilteredWorkouts(workoutHistory, selectedFilter) {
  const { today, startOfThisWeek, startOfLastWeek, endOfLastWeek } = getFilteredBoundary();

  if (selectedFilter === 'All') return workoutHistory;

  if (selectedFilter === 'This week') {
    return workoutHistory.filter(w => {
      const workoutDate = new Date(w.date.replace(/-/g, '/'));
      return workoutDate >= startOfThisWeek && workoutDate <= today;
    });
  }

  if (selectedFilter === 'Last week') {
    return workoutHistory.filter(w => {
      const workoutDate = new Date(w.date.replace(/-/g, '/'));
      return workoutDate >= startOfLastWeek && workoutDate <= endOfLastWeek;
    });
  }

  return workoutHistory;
}