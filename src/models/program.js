export const programs = [{
    id: 1,
    title: 'UL/PPL',
    description: 'Upper Lower then Push Pull Legs cycle',
    totalDays: 6,           
    restDays: [2, 5],          
    isActive: true,            
    startDate: '2026/06/04',  //Change this when user starts the workout
    workouts: [{
      workoutId: 1,
      name: 'Upper',
      exercises: [
        { 
          order: 1, 
          exerciseName: 'Incline Bench Press',
          weight: 50,
          reps: 8,
          sets: 2,
          completed: false
        }, { 
          order: 2, 
          exerciseName: 'Pec Deck',
          weight: 50,
          reps: 8, 
          sets: 2,
          completed: false
        }, {
          order: 3,
          exerciseName: 'Lateral Raise',
          weight: 50,
          reps: 8,
          sets: 2,
          completed: false
        }, {
          order: 4,
          exerciseName: 'Weighted Pull-Ups',
          weight: 50, 
          reps: 8,
          sets: 2,
          completed: false
        }, {
          order: 5,
          exerciseName: 'Machine Rows',
          weight: 50,
          reps: 8,
          sets: 2,
          completed: false
        }, {
          order: 6,
          exerciseName: 'Preacher Curls',
          weight: 50,
          reps: 8,
          sets: 2,
          completed: false
        }, {
          order: 7,
          exerciseName: 'Triceps Pressdown',
          weight: 50,
          reps: 8,
          sets: 2,
          completed: false
        }
      ]
    }, {
      workoutId: 2,
      name: 'Lower',
      exercises: [
        { 
          order: 1, 
          exerciseName: 'Squat',
          weight: 50,
          reps: 8,
          sets: 2,
          completed: false
        }, { 
          order: 2, 
          exerciseName: 'Leg Press',
          weight: 50,
          reps: 8, 
          sets: 2,
          completed: false
        }, {
          order: 3,
          exerciseName: 'Romanian Deadlift',
          weight: 50,
          reps: 8, 
          sets: 2,
          completed: false
        }, {
          order: 4,
          exerciseName: 'Standing Calf Raise',
          weight: 50, 
          reps: 8,
          sets: 2,
          completed: false
        }, {
          order: 5,
          exerciseName: 'Ab Crunch',
          weight: 50,
          reps: 8,
          sets: 2,
          completed: false
        }
      ]
    }, {
      workoutId: 3,
      name: 'Recovery',
      exercises: []
    }, {
      workoutId: 4,
      name: 'Push',
      exercises: [
        { 
          order: 1, 
          exerciseName: 'Bench Press',
          weight: 50,
          reps: 8,
          sets: 2,
          completed: false
        }, { 
          order: 2, 
          exerciseName: 'Pec Deck',
          weight: 50,
          reps: 8, 
          sets: 2,
          completed: false
        }, {
          order: 3,
          exerciseName: 'Lateral Raise',
          weight: 50,
          reps: 8, 
          sets: 2,
          completed: false
        }, {
          order: 4,
          exerciseName: 'Cable Head Extension',
          weight: 50, 
          reps: 8,
          sets: 2,
          completed: false
        }, {
          order: 5,
          exerciseName: 'Kickback Extension',
          weight: 50,
          reps: 8,
          sets: 2,
          completed: false
        }
      ]
    }, {
      workoutId: 5,
      name: 'Pull',
      exercises: [
        { 
          order: 1, 
          exerciseName: 'Lat Pulldown',
          weight: 50,
          reps: 8,
          sets: 2,
          completed: false
        }, { 
          order: 2, 
          exerciseName: 'Machine Rows',
          weight: 50,
          reps: 8, 
          sets: 2,
          completed: false
        }, {
          order: 3,
          exerciseName: 'Rear Delt Fly',
          weight: 50,
          reps: 8, 
          sets: 2,
          completed: false
        }, {
          order: 4,
          exerciseName: 'Preacher Curls',
          weight: 50,
          reps: 8,
          sets: 2,
          completed: false
        }, {
          order: 5,
          exerciseName: 'Spider Curls',
          weight: 50,
          reps: 8,
          sets: 2,
          completed: false
        }
      ]
    }, {
      workoutId: 6,
      name: 'Legs',
      exercises: [
        { 
          order: 1, 
          exerciseName: 'Deadlift',
          weight: 50,
          reps: 8,
          sets: 2,
          completed: false
        }, { 
          order: 2, 
          exerciseName: 'Hamstring Leg Curls',
          weight: 50,
          reps: 8, 
          sets: 2,
          completed: false
        }, {
          order: 3,
          exerciseName: 'Leg Extension',
          weight: 50,
          reps: 8, 
          sets: 2,
          completed: false
        }, {
          order: 4,
          exerciseName: 'Standing Calf Raise',
          weight: 50, 
          reps: 8,
          sets: 2,
          completed: false
        }, {
          order: 5,
          exerciseName: 'Ab Crunch',
          weight: 50,
          reps: 8,
          sets: 2,
          completed: false
        }
      ]
    }, {
      workoutId: 7,
      name: 'Recovery',
      exercises: []
    }
   ]
}];
