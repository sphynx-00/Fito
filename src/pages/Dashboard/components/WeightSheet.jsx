import './WeightSheet.css';

function WeightSheet(exercise, increment, decrement, weight, setWeight, onCancel, onSave) {
  return (
    <div className="weight-sheet-overlay">
      <div className="weight-sheet">
        <div className="sheet-handle" />
        <div className="sheet-head">
          <p className="sheet-name">Kantutan</p>
          <p className="sheet-sub">Adjust weight for this exercise</p>
        </div>
        <div className="stepper">
          <button className="btn" onClick={decrement}>−</button>
          <div className="valwrap">
            <div className="inputrow">
              <input
                className="numinput"
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
              <span className="unit">kg</span>
            </div>
            <p className="hint">tap to type a value</p>
          </div>
          <button className="btn" onClick={increment}>+</button>
        </div>
        <div className="actions">
          <button className="cancel" onClick={onCancel}>Cancel</button>
          <button className="save" onClick={() => onSave(weight)}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default WeightSheet;