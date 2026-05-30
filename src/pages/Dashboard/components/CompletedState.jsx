import './CompletedState.css';

function CompletedState({ workoutName }) {
  return (
    <div className="success-state">

      <span className="success-icon">🎉</span>

      <p className="success-title">Workout Complete!</p>
      <p className="success-sub">Great job crushing {workoutName} day</p>

    </div>
  );
}

export default CompletedState;