import './ExerciseCard.css';

function ExerciseCard({ name, sets, reps, muscle }) {
  return (
    <li className="exercise-card">
      <div className="exercise-thumb">
        🏋️
      </div>

      <div className="exercise-info">
        <h3 className="exercise-name">{name}</h3>
        <p className="exercise-meta">{sets} sets · {reps} reps</p>
        <span className="muscle-tag">{muscle}</span>
      </div>

      {/* <span className="exercise-arrow">›</span> */}

      <button className="add-btn">
        Add
      </button>
    </li>
  );
}

export default ExerciseCard;