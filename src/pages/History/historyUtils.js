import { getStartOfWeek } from "../../utils/workoutUtils";

// export function calculateWeekStreak(getStartOfWeek, workoutHistory) {
//   if (workoutHistory.length === 0) return 0;

//   // Step 1 — get unique weeks from workout history
//   const weeks = workoutHistory
//     .filter(w => w.name !== 'Recovery')
//     .map(w => {
//       const date = new Date(w.date.replace(/-/g, '/'));
//       const startOfWeek = getStartOfWeek(date);
//       return startOfWeek.toISOString().split('T')[0]; // '2026-06-08'
//     });

//   // Step 2 — get unique week starts
//   const uniqueWeeks = [...new Set(weeks)].sort().reverse();
//   // → ['2026-06-08', '2026-06-01', '2026-05-25']
//   //    this week      last week      2 weeks ago

//   // Step 3 — count consecutive weeks from most recent
//   let streak = 0;
//   const today = new Date();
//   const thisWeekStart = getStartOfWeek(today)
//     .toISOString().split('T')[0];

//   for (let i = 0; i < uniqueWeeks.length; i++) {
//     const expectedWeek = new Date(thisWeekStart.replace(/-/g, '/'));
//     expectedWeek.setDate(expectedWeek.getDate() - (i * 7));
//     const expectedWeekStr = expectedWeek.toISOString().split('T')[0];

//     if (uniqueWeeks[i] === expectedWeekStr) {
//       streak++;
//     } else {
//       break; // streak broken
//     }
//   }

//   return streak;
// }


export function calculateDayStreak(workoutHistory) {
  if (workoutHistory.length === 0) return 0;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // get unique workout dates sorted newest first
  const workoutDates = workoutHistory
    .filter(w => w.name !== 'Recovery')
    .map(w => {
      const date = new Date(w.date.replace(/-/g, '/'));
      date.setHours(0, 0, 0, 0);
      return date.toLocaleDateString('en-CA');
    });

  const uniqueDates = [...new Set(workoutDates)].sort().reverse();

  let streak = 0;

  for (let i = 0; i < uniqueDates.length; i++) {
    const expectedDate = new Date(today);
    expectedDate.setDate(today.getDate() - i);
    const expectedDateStr = expectedDate.toLocaleDateString('en-CA');

    if (uniqueDates[i] === expectedDateStr) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
}


// Filter functions
  // Boundaries
  export function getFilteredBoundary(getStartOfWeek) {
    const today = new Date();
    const startOfThisWeek = getStartOfWeek(today);

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
        const workoutDate = new Date(w.date);
        return workoutDate >= startOfThisWeek && workoutDate <= today;
      });
    }

    if (selectedFilter === 'Last week') {
      return workoutHistory.filter(w => {
        const workoutDate = new Date(w.date);
        return workoutDate >= startOfLastWeek && workoutDate <= endOfLastWeek;
      });
    }

     return workoutHistory;
  }