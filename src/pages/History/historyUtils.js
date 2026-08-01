import { getActiveProgram, getAdjustedDate, getDiffDays, getStartOfWeek } from "../../utils/workoutUtils";

export function normalizeDate(date) {
  const d = new Date(date);
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

export function calculateDayStreak(workoutHistory) {
  if (workoutHistory.length === 0) return 0;

  // get adjusted today and yesterday (resets at 3AM)
  const today = getAdjustedDate();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const todayStr     = today.toLocaleDateString('en-CA');
  const yesterdayStr = yesterday.toLocaleDateString('en-CA');

  // get all NON-recovery workout dates
  // sorted newest first
  // duplicates removed
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

  // streak is 0 if most recent workout
  // is older than yesterday (3AM adjusted)
  if (uniqueDates[0] !== todayStr && uniqueDates[0] !== yesterdayStr) {
    return 0;
  }

  // determine starting point
  const startFrom = uniqueDates[0] === todayStr ? today : yesterday;

  // get active program to know which days are recovery
  const activeProgram  = getActiveProgram();
  const recoveryNames  = ['Recovery'];

  let streak    = 0;
  let dateIndex = 0;  // tracks position in uniqueDates
  let daysBack  = 0;  // tracks how many days we go back

  while (dateIndex < uniqueDates.length) {
    const checkDate = new Date(startFrom);
    checkDate.setDate(startFrom.getDate() - daysBack);
    const checkDateStr = checkDate.toLocaleDateString('en-CA');

    // check if this day is a recovery day in the program
    const diffDays   = Math.floor((today - checkDate) / (1000 * 60 * 60 * 24));
    const cycleIndex = ((getDiffDays(activeProgram.startDate) - diffDays) % activeProgram.workouts.length + activeProgram.workouts.length) % activeProgram.workouts.length;
    const workout    = activeProgram.workouts[cycleIndex];
    const isRecovery = recoveryNames.includes(workout?.name);

    if (isRecovery) {
      // recovery day — skip without breaking streak
      daysBack++;
      continue;
    }

    // non recovery day — check if user completed a workout
    if (uniqueDates[dateIndex] === checkDateStr) {
      streak++;
      dateIndex++;
      daysBack++;
    } else {
      // missed a workout day — streak breaks
      break;
    }
  }

  return streak;
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