import { getAdjustedDate, getStartOfWeek } from "../../utils/workoutUtils";

export function normalizeDate(date) {
  const d = new Date(date);
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

export function calculateDayStreak(workoutHistory) {
  const today = getAdjustedDate();
  today.setHours(0, 0, 0, 0);

  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  // get unique workout dates — filter Recovery, sort newest first
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

  const todayStr     = today.toLocaleDateString('en-CA');
  const yesterdayStr = yesterday.toLocaleDateString('en-CA');

  // streak is 0 if most recent workout is older than yesterday
  if (uniqueDates[0] !== todayStr && uniqueDates[0] !== yesterdayStr) {
    return 0;
  }

  // determine starting point
  // if worked out today → count from today
  // if not yet today   → count from yesterday
  const startFrom = uniqueDates[0] === todayStr ? today : yesterday;

  let streak = 0;

  for (let i = 0; i < uniqueDates.length; i++) {
    const expectedDate = new Date(startFrom);
    expectedDate.setDate(startFrom.getDate() - i);
    const expectedDateStr = expectedDate.toLocaleDateString('en-CA');
    
    if (uniqueDates[i] === expectedDateStr) {
      streak++;
    } else {
      break;  // gap found → stop counting
    }
  }

  return streak;
}

export function saveDayStreak(streak) {
  localStorage.setItem('streak', JSON.stringify(streak));
}

// export function calculateDayStreak(workoutHistory) {
//   if (workoutHistory.length === 0) return 0;

//   const today = new Date();
//   today.setHours(0, 0, 0, 0);

//   const workoutDates = workoutHistory
//     .filter(w => w.name !== 'Recovery')
//     .map(w => {
//       const date = new Date(w.date.replace(/-/g, '/'));
//       date.setHours(0, 0, 0, 0);
//       return date.toLocaleDateString('en-CA');
//     });

//   const uniqueDates = [...new Set(workoutDates)].sort().reverse();

//   // get today and yesterday as strings
//   const todayStr     = today.toLocaleDateString('en-CA');
//   const yesterday    = new Date(today);
//   yesterday.setDate(today.getDate() - 1);
//   const yesterdayStr = yesterday.toLocaleDateString('en-CA');

//   // streak only counts if user worked out today OR yesterday
//   // if neither → streak is 0 (they broke the streak)
//   if (uniqueDates[0] !== todayStr && uniqueDates[0] !== yesterdayStr) {
//     return 0;
//   }

//   let streak = 0;

//   for (let i = 0; i < uniqueDates.length; i++) {
    
//     // if most recent workout was yesterday start counting from yesterday
//     const startFrom = uniqueDates[0] === todayStr ? today : yesterday;
//     const expected  = new Date(startFrom);
//     expected.setDate(startFrom.getDate() - i);
//     const expectedDateStr = expected.toLocaleDateString('en-CA');

//     if (uniqueDates[i] === expectedDateStr) {
//       streak++;
//     } else {
//       break;
//     }
//   }

//   return streak;
// }

// Filter functions
  // Boundaries
  export function getFilteredBoundary(getStartOfWeek) {
    const today = normalizeDate(new Date());
    const startOfThisWeek = normalizeDate(getStartOfWeek(today));

    const startOfLastWeek = new Date(startOfThisWeek);
    startOfLastWeek.setDate(startOfThisWeek.getDate() - 7);
    
    const endOfLastWeek   = new Date(startOfThisWeek);
    endOfLastWeek.setDate(startOfThisWeek.getDate() - 1);
    endOfLastWeek.setHours(23, 59, 59, 999);

    return {
      today,
      startOfThisWeek,
      startOfLastWeek,
      endOfLastWeek,
    };
  }

  // Conditions

  export const getFilteredWorkouts = (selectedFilter, workoutHistory) => {
    const { today, startOfThisWeek, startOfLastWeek, endOfLastWeek } = getFilteredBoundary(getStartOfWeek);

    if (selectedFilter === 'All') return workoutHistory;

    if (selectedFilter === 'This week') {
      return workoutHistory.filter(w => {
        const workoutDate = normalizeDate(new Date(w.date));
        return workoutDate >= startOfThisWeek && workoutDate <= today;
      });
    }

    if (selectedFilter === 'Last week') {
      return workoutHistory.filter(w => {
        const workoutDate = normalizeDate(new Date(w.date));
        return workoutDate >= startOfLastWeek && workoutDate <= endOfLastWeek;
      });
    }

     return workoutHistory;
  }