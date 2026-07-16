export const programs = [{
    id: 1,
    title: 'UL/PPL',
    description: 'Upper Lower then Push Pull Legs cycle',
    difficulty: 'intermediate',
    totalDays: 6,           
    restDays: [2, 5],          
    isActive: true,            
    startDate: '2026/06/05',  //Change this when user starts the workout
    workouts: [{
      workoutId: 1,
      name: 'Upper',
      exercises: [
        { order: 1, exerciseName: 'Incline Bench Press', weight: 50, reps: 8, sets: 2 },
        { order: 2, exerciseName: 'Pec Deck',            weight: 50, reps: 8, sets: 2 },
        { order: 3, exerciseName: 'Lateral Raise',       weight: 50, reps: 8, sets: 2 },
        { order: 4, exerciseName: 'Weighted Pull-Ups',   weight: 50, reps: 8, sets: 2 },
        { order: 5, exerciseName: 'Machine Rows',        weight: 50, reps: 8, sets: 2 },
        { order: 6, exerciseName: 'Preacher Curls',      weight: 50, reps: 8, sets: 2 },
        { order: 7, exerciseName: 'Triceps Pressdown',   weight: 50, reps: 8, sets: 2 },
      ]
    }, {
      workoutId: 2,
      name: 'Lower',
      exercises: [
        { order: 1, exerciseName: 'Squat',               weight: 50, reps: 8, sets: 2 },
        { order: 2, exerciseName: 'Leg Press',           weight: 50, reps: 8, sets: 2 },
        { order: 3, exerciseName: 'Romanian Deadlift',   weight: 50, reps: 8, sets: 2 },
        { order: 4, exerciseName: 'Standing Calf Raise', weight: 50, reps: 8, sets: 2 },
        { order: 5, exerciseName: 'Ab Crunch',           weight: 50, reps: 8, sets: 2 },
      ]
    }, {
      workoutId: 3,
      name: 'Recovery',
      exercises: []
    }, {
      workoutId: 4,
      name: 'Push',
      exercises: [
        { order: 1, exerciseName: 'Bench Press',          weight: 50, reps: 8, sets: 2 },
        { order: 2, exerciseName: 'Shoulder Press',       weight: 50, reps: 8, sets: 2 },
        { order: 3, exerciseName: 'Pec Deck',             weight: 50, reps: 8, sets: 2 },
        { order: 4, exerciseName: 'Lateral Raise',        weight: 50, reps: 8, sets: 2 },
        { order: 5, exerciseName: 'Cable Head Extension', weight: 50, reps: 8, sets: 2 },
        { order: 6, exerciseName: 'Kickback Extension',   weight: 50, reps: 8, sets: 2 },
      ]
    }, {
      workoutId: 5,
      name: 'Pull',
      exercises: [
        { order: 1, exerciseName: 'Lat Pulldown',  weight: 50, reps: 8, sets: 2 },
        { order: 2, exerciseName: 'Machine Rows',  weight: 50, reps: 8, sets: 2 },
        { order: 3, exerciseName: 'Rear Delt Fly', weight: 50, reps: 8, sets: 2 },
        { order: 4, exerciseName: 'Preacher Curls',weight: 50, reps: 8, sets: 2 },
        { order: 5, exerciseName: 'Spider Curls',  weight: 50, reps: 8, sets: 2 },
      ]
    }, {
      workoutId: 6,
      name: 'Legs',
      exercises: [
        { order: 1, exerciseName: 'Deadlift',            weight: 50, reps: 8, sets: 2 },
        { order: 2, exerciseName: 'Hamstring Leg Curls', weight: 50, reps: 8, sets: 2 },
        { order: 3, exerciseName: 'Leg Extension',       weight: 50, reps: 8, sets: 2 },
        { order: 4, exerciseName: 'Standing Calf Raise', weight: 50, reps: 8, sets: 2 },
        { order: 5, exerciseName: 'Ab Crunch',           weight: 50, reps: 8, sets: 2 },
      ]
    }, {
      workoutId: 7,
      name: 'Recovery',
      exercises: []
    }]

  }, {

    id: 2,
    title: 'Bro Split',
    description: 'One muscle group per day',
    difficulty: 'beginner',
    totalDays: 5,
    restDays: [5, 6],
    isActive: false,
    startDate: '2026/04/20',
    workouts: [{
      workoutId: 1,
      name: 'Chest',
      exercises: [
        { order: 1, exerciseName: 'Bench Press',       weight: 50, reps: 10, sets: 3 },
        { order: 2, exerciseName: 'Incline Bench Press',weight: 50, reps: 10, sets: 3 },
        { order: 3, exerciseName: 'Pec Deck',          weight: 50, reps: 12, sets: 3 },
        { order: 4, exerciseName: 'Cable Fly',         weight: 50, reps: 12, sets: 3 },
        { order: 5, exerciseName: 'Push Ups',          weight: 0,  reps: 15, sets: 3 },
      ]
    }, {
      workoutId: 2,
      name: 'Back',
      exercises: [
        { order: 1, exerciseName: 'Deadlift',          weight: 60, reps: 8,  sets: 3 },
        { order: 2, exerciseName: 'Lat Pulldown',      weight: 50, reps: 10, sets: 3 },
        { order: 3, exerciseName: 'Machine Rows',      weight: 50, reps: 10, sets: 3 },
        { order: 4, exerciseName: 'Weighted Pull Ups', weight: 0,  reps: 8,  sets: 3 },
        { order: 5, exerciseName: 'Rear Delt Fly',     weight: 50, reps: 12, sets: 3 },
      ]
    }, {
      workoutId: 3,
      name: 'Shoulders',
      exercises: [
        { order: 1, exerciseName: 'Overhead Press',    weight: 50, reps: 10, sets: 3 },
        { order: 2, exerciseName: 'Lateral Raise',     weight: 50, reps: 12, sets: 3 },
        { order: 3, exerciseName: 'Front Raise',       weight: 50, reps: 12, sets: 3 },
        { order: 4, exerciseName: 'Face Pulls',        weight: 50, reps: 15, sets: 3 },
        { order: 5, exerciseName: 'Shrugs',            weight: 50, reps: 12, sets: 3 },
      ]
    }, {
      workoutId: 4,
      name: 'Arms',
      exercises: [
        { order: 1, exerciseName: 'Preacher Curls',      weight: 50, reps: 12, sets: 3 },
        { order: 2, exerciseName: 'Spider Curls',         weight: 50, reps: 12, sets: 3 },
        { order: 3, exerciseName: 'Hammer Curls',         weight: 50, reps: 12, sets: 3 },
        { order: 4, exerciseName: 'Triceps Pressdown',    weight: 50, reps: 12, sets: 3 },
        { order: 5, exerciseName: 'Cable Head Extension', weight: 50, reps: 12, sets: 3 },
        { order: 6, exerciseName: 'Kickback Extension',   weight: 50, reps: 12, sets: 3 },
      ]
    }, {
      workoutId: 5,
      name: 'Legs',
      exercises: [
        { order: 1, exerciseName: 'Squat',               weight: 60, reps: 10, sets: 3 },
        { order: 2, exerciseName: 'Leg Press',           weight: 60, reps: 12, sets: 3 },
        { order: 3, exerciseName: 'Romanian Deadlift',   weight: 50, reps: 10, sets: 3 },
        { order: 4, exerciseName: 'Leg Extension',       weight: 50, reps: 12, sets: 3 },
        { order: 5, exerciseName: 'Hamstring Leg Curls', weight: 50, reps: 12, sets: 3 },
        { order: 6, exerciseName: 'Standing Calf Raise', weight: 50, reps: 15, sets: 3 },
      ]
    }, {
      workoutId: 6,
      name: 'Recovery',
      exercises: []
    }, {
      workoutId: 7,
      name: 'Recovery',
      exercises: []
    }]

  }, {

    id: 3,
    title: 'Full Body',
    description: 'Train whole body every session',
    difficulty: 'beginner',
    totalDays: 3,
    restDays: [1, 3, 5, 6],
    isActive: false,
    startDate: '2026/04/20',
    workouts: [{
      workoutId: 1,
      name: 'Full Body A',
      exercises: [
        { order: 1, exerciseName: 'Squat',           weight: 60, reps: 8,  sets: 3 },
        { order: 2, exerciseName: 'Bench Press',     weight: 50, reps: 8,  sets: 3 },
        { order: 3, exerciseName: 'Deadlift',        weight: 60, reps: 8,  sets: 3 },
        { order: 4, exerciseName: 'Overhead Press',  weight: 40, reps: 8,  sets: 3 },
        { order: 5, exerciseName: 'Lat Pulldown',    weight: 50, reps: 10, sets: 3 },
        { order: 6, exerciseName: 'Plank',           weight: 0,  reps: 60, sets: 3 },
      ]
    }, {
      workoutId: 2,
      name: 'Recovery',
      exercises: []
    }, {
      workoutId: 3,
      name: 'Full Body B',
      exercises: [
        { order: 1, exerciseName: 'Romanian Deadlift', weight: 50, reps: 10, sets: 3 },
        { order: 2, exerciseName: 'Incline Bench Press',weight: 50, reps: 10, sets: 3 },
        { order: 3, exerciseName: 'Leg Press',          weight: 60, reps: 10, sets: 3 },
        { order: 4, exerciseName: 'Machine Rows',       weight: 50, reps: 10, sets: 3 },
        { order: 5, exerciseName: 'Lateral Raise',      weight: 30, reps: 12, sets: 3 },
        { order: 6, exerciseName: 'Ab Crunch',          weight: 0,  reps: 20, sets: 3 },
      ]
    }, {
      workoutId: 4,
      name: 'Recovery',
      exercises: []
    }, {
      workoutId: 5,
      name: 'Full Body C',
      exercises: [
        { order: 1, exerciseName: 'Squat',             weight: 60, reps: 10, sets: 3 },
        { order: 2, exerciseName: 'Pull Ups',           weight: 0,  reps: 8,  sets: 3 },
        { order: 3, exerciseName: 'Dumbbell Press',     weight: 40, reps: 10, sets: 3 },
        { order: 4, exerciseName: 'Leg Curl',           weight: 50, reps: 12, sets: 3 },
        { order: 5, exerciseName: 'Preacher Curls',     weight: 40, reps: 12, sets: 3 },
        { order: 6, exerciseName: 'Triceps Pressdown',  weight: 40, reps: 12, sets: 3 },
      ]
    }, {
      workoutId: 6,
      name: 'Recovery',
      exercises: []
    }, {
      workoutId: 7,
      name: 'Recovery',
      exercises: []
    }]
}];


// const sampleHistory = [
//   {
//     id: 1,
//     name: 'Upper',
//     date: '2026-06-09',
//     day: '9',
//     month: 'JUN',
//     status: 'Done',
//     exercises: [
//       { name: 'Incline Bench Press', sets: 2, reps: 8 },
//       { name: 'Pec Deck',            sets: 2, reps: 8 },
//       { name: 'Lateral Raise',       sets: 2, reps: 8 },
//       { name: 'Weighted Pull Ups',   sets: 2, reps: 8 },
//     ]
//   },
//   {
//     id: 2,
//     name: 'Lower',
//     date: '2026-06-08',
//     day: '8',
//     month: 'JUN',
//     status: 'Done',
//     exercises: [
//       { name: 'Squat',             sets: 2, reps: 8 },
//       { name: 'Leg Press',         sets: 2, reps: 8 },
//       { name: 'Romanian Deadlift', sets: 2, reps: 8 },
//     ]
//   },
//   {
//     id: 3,
//     name: 'Push',
//     date: '2026-06-07',
//     day: '7',
//     month: 'JUN',
//     status: 'Done',
//     exercises: [
//       { name: 'Bench Press',   sets: 2, reps: 8 },
//       { name: 'Pec Deck',      sets: 2, reps: 8 },
//       { name: 'Lateral Raise', sets: 2, reps: 8 },
//     ]
//   },
//   {
//     id: 4,
//     name: 'Pull',
//     date: '2026-06-04',
//     day: '4',
//     month: 'JUN',
//     status: 'Done',
//     exercises: [
//       { name: 'Lat Pulldown',  sets: 2, reps: 8 },
//       { name: 'Machine Rows',  sets: 2, reps: 8 },
//       { name: 'Preacher Curls',sets: 2, reps: 8 },
//     ]
//   },
//   {
//     id: 5,
//     name: 'Legs',
//     date: '2026-06-03',
//     day: '3',
//     month: 'JUN',
//     status: 'Done',
//     exercises: [
//       { name: 'Deadlift',            sets: 2, reps: 8 },
//       { name: 'Hamstring Leg Curls', sets: 2, reps: 8 },
//       { name: 'Leg Extension',       sets: 2, reps: 8 },
//     ]
//   },
//   {
//     id: 6,
//     name: 'Upper',
//     date: '2026-06-02',
//     day: '2',
//     month: 'JUN',
//     status: 'Done',
//     exercises: [
//       { name: 'Incline Bench Press', sets: 2, reps: 8 },
//       { name: 'Pec Deck',            sets: 2, reps: 8 },
//       { name: 'Weighted Pull Ups',   sets: 2, reps: 8 },
//     ]
//   },
// ];

// localStorage.setItem('completedWorkout', JSON.stringify(sampleHistory));