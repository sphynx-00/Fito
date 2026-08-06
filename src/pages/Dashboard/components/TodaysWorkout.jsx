import ExerciseRow from "./ExerciseRow";
import recovery from "../../../assets/recover1.svg";
import './TodaysWorkout.css';
import { loadFromStorage, saveWorkoutHistory } from "../../../models/completedWorkouts";
import { useState } from "react";
import CompletedState from "./CompletedState";
import WeightSheet from "./WeightSheet";

function TodaysWorkout({ workoutName, exercises, onUpdatedWeight, completedList, handleToggle, onComplete }) {
const [isCompleted, setIsCompleted] = useState(() => {
  return JSON.parse(localStorage.getItem('isCompleted') || 'false');
});

const [weightEdit, setWeightEdit] = useState(null);

/* Save new weight value */
const handleSaveWeight = (newWeight) => {
    onUpdatedWeight(weightEdit.order, newWeight);   // ← tells Dashboard to update
    setWeightEdit(null);                            // ← closes the sheet
  };


/* Save new weight value */

const totalExercises = completedList.length;
const completedExercises = completedList.filter(c => c === true).length;
const isRecovery = workoutName === 'Recovery';



const handleComplete = () => {
  localStorage.setItem('completedList', JSON.stringify(completedList));

  localStorage.setItem('isCompleted', 'true');

  saveWorkoutHistory(workoutName, exercises);
  onComplete(loadFromStorage());
  setIsCompleted(true);
}

  return (
    <div>
      <div className="workout-card">
          {isRecovery ? (
            <div className="recovery-state">
              <span className="recovery-icon">
                <img
                  className="hero-mascot"
                  src={recovery} width="70" height="70"
                />
              </span>
              <p className="recovery-title">Rest & Recover</p>
              <p className="recovery-message">
                Your muscles grow on rest days. Take it easy today!
              </p>
            </div>
          ) : isCompleted ? (
              <CompletedState 
                workoutName={workoutName}
              />
          ) : (
            exercises && exercises.map((exercise, index) => (
              <ExerciseRow
                key={exercise.order}
                number={index + 1}
                name={exercise.exerciseName}
                sets={exercise.sets}
                reps={exercise.reps}
                weight={exercise.weight}
                completed={completedList[index]}
                toggle={() => handleToggle(index)}
                editWeight={() => setWeightEdit(exercise)}
              />
            ))
          )}

          {weightEdit && (
            <WeightSheet
               exercise={weightEdit}
               onSave={handleSaveWeight}
               onCancel={() => setWeightEdit(null)}
             />
          )}

          {!isCompleted && completedExercises === totalExercises && totalExercises > 0 && (
            <button className="complete-btn"
              onClick={() => handleComplete(workoutName, exercises)}
            >
              Workout Complete!
            </button>
          )}
      </div>
    </div>
  );
}

export default TodaysWorkout;