import { useState } from 'react';
import { exercisesByMuscle } from '../../models/exercisesByMuscle';
import MuscleGroup from './components/MuscleGroup';
import { bodyParts } from '../../models/bodyparts';
import ExerciseCard from './components/ExerciseCard';
import './Workouts.css';


function Workouts() {
  const [selectedMuscle, setSelectedMuscle] = useState('');
  const nameExercise = selectedMuscle;
  const capitalName = nameExercise.charAt(0).toUpperCase() + nameExercise.slice(1);

  const exercises = exercisesByMuscle[selectedMuscle];

  return (
    <main className="workouts-content">
      <header className="workouts-header">
        <h3 className="workouts-title">Workouts</h3>
        <p className="workouts-description">Choose a muscle group</p>
      </header>

      <section className='muscle-section'>
        <h4 className='section-title'>Muscle groups</h4>

        <div className='muscle-grid'>
          {bodyParts && bodyParts.map((bodyPart) => (
            <MuscleGroup
              key={bodyPart.id}
              muscleImage={bodyPart.emoji}
              muscleName={bodyPart.name}
              isActive={selectedMuscle === bodyPart.key}
              onClick={() => setSelectedMuscle(bodyPart.key)}
            />
          ))}
        </div>
      </section>

      <section className="exercise-section">
        {selectedMuscle && <h4 className="section-title">{capitalName} exercises</h4>}
        
        <ul className="exercise-list">
          {exercises && exercises.map((exercise) => (
            <ExerciseCard
              key={exercise.id}
              name={exercise.name}
              sets={exercise.sets}
              reps={exercise.reps}
              muscle={exercise.muscle}
            />
          ))}
        </ul>

      </section>
    </main>
  );
}



export default Workouts;