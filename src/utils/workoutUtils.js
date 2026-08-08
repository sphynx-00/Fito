import { programs } from "../models/program";
import { loadUserProgram } from "../pages/Profile/profileUtils";
import { loadCustomExercises } from "./customExercises";
import { loadExerciseWeights } from "./exerciseUtils";

export function getWorkoutStats() {
  const activeProgram = getActiveProgram();
  const workouts      = activeProgram.workouts;
  const diffDays      = getDiffDays(activeProgram.startDate);
  const cycleIndex    = getCycleIndex(diffDays, workouts);
  const todaysWorkout = getTodaysWorkout(cycleIndex, workouts);
  const total         = getTotalWorkouts(workouts);
  const completed     = getCompletedWorkouts(cycleIndex, workouts);
  const percentage    = getPercentage(completed, total);

  // apply saved weight overrides on top of the base program data
  const weightOverrides = loadExerciseWeights();
  const customExercises = loadCustomExercises();

  let todaysWorkoutFinal = todaysWorkout;

  if (todaysWorkout) {
    // merge in any custom exercises added to this workout day
    const custom = customExercises[String(todaysWorkout.workoutId)] || [];
    const mergedExercises = [...(todaysWorkout.exercises || []), ...custom];

    // then apply saved weight overrides on top
    todaysWorkoutFinal = {
      ...todaysWorkout,
      exercises: mergedExercises.map(exercise => {
        const key = `${todaysWorkout.workoutId}-${exercise.order}`;
        return weightOverrides[key] !== undefined
          ? { ...exercise, weight: weightOverrides[key] }
          : exercise;
      })
    };
  }

  return {
    todaysWorkout: todaysWorkoutFinal,
    total,
    completed,
    percentage,
  };
}

export function getAdjustedDate() {
  const now = new Date();

  // if current time is before 3AM
  // treat it as the previous day
  if (now.getHours() < 3) {
    now.setDate(now.getDate() - 1);
  }

  now.setHours(0, 0, 0, 0);
  return now;
}

export function getActiveProgram() {
  const userProgram = loadUserProgram();
  
  if (userProgram) {
    const program = programs.find(p => p.id === userProgram.programId);
   
    return {
      ...program,
      startDate: userProgram.startDate
    };
  }

  return programs.find(p => p.isActive === true);
}

export function getDiffDays(startDate) {
  const start = new Date(startDate);
  const today  = getAdjustedDate();

  start.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const diffTime = today - start;
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

export function getCycleIndex(diffDays, workouts) {
  return diffDays % workouts.length;
}


export function getTodaysWorkout(cycleIndex, workouts) {
  return workouts[cycleIndex];
}

export function getTotalWorkouts(workouts) {
  return workouts
    .filter(w => w.name !== 'Recovery')
    .length;
}

export function getCompletedWorkouts(cycleIndex, workouts) {
  return workouts
    .slice(0, cycleIndex)
    .filter(w => w.name !== 'Recovery')
    .length;
}

export function getPercentage(completed, total) {
  return Math.round((completed / total) * 100);
}

export function getStartOfWeek(date) {
  const today = new Date(date);
  const dayOfWeek = today.getDay();

  const diff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  const monday = new Date(today);
  monday.setDate(today.getDate() + diff);
  return monday;
}

export function getTodayWithGreeting() {
  const date = getDateToday();
  const greeting = getGreeting();

  return {
    date,
    greeting
  };
}

export function getDateToday() {
  const today = new Date();
  const formattedDate = today.toLocaleString('default', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });
  
  return formattedDate
}

export function getGreeting() {
  const today = new Date();
  const hours = today.getHours();


  if (hours >= 0 && hours < 12) {
  return 'Morning';
  } else if (hours >= 12 && hours < 18) {
    return 'Afternoon';
  } else {
    return 'Evening';
  };
}