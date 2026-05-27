import ExerciseRow from "./ExerciseRow";
import recovery from "../../../assets/recover1.svg";
import './TodaysWorkout.css';
import { saveWorkoutHistory } from "../../../models/completedWorkouts";

function TodaysWorkout({ workoutName, exercises, completedList, handleToggle }) {
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


  return (
    <div>
      <h4 className='title'>Workout Log</h4>
      <div className="workout-card">
        <div className="card-header">
          <p className={isRecovery ? 'card-title-hide' : 'card-title'}>Today's workout</p>
          <span className={`badge ${getBadgeClass()}`}>{getBadgeStatus()}</span>
        </div>

          {isRecovery ? (
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

          {completedExercises === totalExercises && totalExercises > 0 && (
            <button className="complete-btn"
              onClick={() => saveWorkoutHistory(workoutName, exercises)}
            >
              Workout Complete!
            </button>
          )}
      </div>
    </div>
  );
}

export default TodaysWorkout;