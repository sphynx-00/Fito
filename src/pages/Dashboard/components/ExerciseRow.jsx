import './ExerciseRow.css';

function ExerciseRow({ number, name, sets, reps, completed, toggle, weight, editWeight }) {
  return (
    <div className="tw-row">

      <div onClick={toggle} className={`tw-num ${completed ? 'completed' : ''}`}>
        {completed ? '✓' : number}
      </div>

      <div className="tw-info">
        <p className="tw-name">{name}</p>
        <p className="tw-sets">{sets} sets × {reps} reps</p>
      </div>

      <span className="tw-weight" onClick={editWeight}>{weight} kg</span>

    </div>
  );
}

export default ExerciseRow;