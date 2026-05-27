import './ExerciseRow.css';

function ExerciseRow({ name, sets, reps, completed, toggle }) {
  return (
    <div className="exercise-row">
      <span className="ex-name">{name}</span>
      <div className="ex-done">
        <span className="ex-sets">{sets} sets × {reps} reps</span>
        <div className={`check ${completed ? 'completed' : ''}`}
          onClick={toggle}
         />
      </div>
    </div>
  );
}

export default ExerciseRow;