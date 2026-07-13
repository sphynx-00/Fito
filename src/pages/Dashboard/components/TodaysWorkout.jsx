import ExerciseRow from "./ExerciseRow";
import recovery from "../../../assets/recover1.svg";
import './TodaysWorkout.css';
import { loadFromStorage, saveWorkoutHistory } from "../../../models/completedWorkouts";
import { useState } from "react";
import CompletedState from "./CompletedState";

function TodaysWorkout({ workoutName, exercises, completedList, handleToggle, onComplete }) {
const [isCompleted, setIsCompleted] = useState(() => {
  return JSON.parse(localStorage.getItem('isCompleted') || 'false');
});

const totalExercises = completedList.length;
const completedExercises = completedList.filter(c => c === true).length;
const isRecovery = workoutName === 'Recovery';

const getBadgeStatus = () => {
  if (isRecovery) return null
  if (completedExercises === totalExercises && totalExercises > 0) return 'Done'
  if (completedExercises > 0) return 'In Progress'
  return 'Pending';
};

const getBadgeClass = () => {
  if (isRecovery) return '';
  if (completedExercises === totalExercises && totalExercises > 0) return 'badge-done'
  if (completedExercises > 0) return 'badge-progress'
  return 'badge-pending';
};

const handleComplete = () => {
  localStorage.setItem('completedList', JSON.stringify(completedList));

  localStorage.setItem('isCompleted', 'true');

  saveWorkoutHistory(workoutName, exercises);
  onComplete(loadFromStorage());
  setIsCompleted(true);
}

  return (
    <div>
      <h4 className='title'>Workout Log</h4>
      <div className="workout-card">
        <div className="card-header">
          <p className={isRecovery ? 'card-title-hide' : 'card-title'}>Today's workout</p>
          <span className={`badge ${getBadgeClass()}`}>{getBadgeStatus()}</span>
        </div>

          {isCompleted ? (
            <CompletedState 
              workoutName={workoutName}
            />
          ) : isRecovery ? (
            <div className="recovery-state">
              <span className="recovery-icon">
                <img
                  className="hero-mascot"
                  src={recovery} width="50" height="50"
                />
              </span>
              <p className="recovery-title">Rest & Recover</p>
              <p className="recovery-message">
                Your muscles grow on rest days. Take it easy today!
              </p>
            </div>
          ) : (
            exercises && exercises.map((exercise, index) => (
              <ExerciseRow
                key={exercise.order}
                name={exercise.exerciseName}
                sets={exercise.sets}
                reps={exercise.reps}
                completed={completedList[index]}
                toggle={() => handleToggle(index)}
              />
            ))
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