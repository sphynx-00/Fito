import './ExerciseRow.css';

function ExerciseRow({ number, name, sets, reps, completed, toggle, weight, editWeight }) {
  return (
    <div className={`tw-row ${completed ? 'done' : ''}`}>
      <div className="tw-accent" onClick={toggle}/>
      <span className="tw-num" onClick={toggle}>{number}</span>

      <div className="tw-info">
        <p className="tw-name">{name}</p>
        <p className="tw-sets">{sets} sets × {reps} reps</p>
      </div>

      <span className="tw-chip" onClick={editWeight}>{weight > 0 ? `${weight} kg` : '—'}</span> 
    </div>
  );
}

export default ExerciseRow;