import './EditMetricsModal.css';

function EditMetricsModal({ user, onSave, onCancel }) {
  return (
    <div className="modal-overlay">
      <div className="modal">

        {/* header */}
        <div className="modal-header">
          <h2 className="modal-title">Edit Body Metrics</h2>
        </div>

        {/* body */}
        <div className="modal-body">

          {/* age */}
          <div className="form-group">
            <label className="form-label" htmlFor="age">Age</label>
            <div className="form-input-wrap">
              <input
                id="age"
                className="form-input"
                type="number"
                defaultValue={user.age}
              />
              <span className="form-unit">yrs</span>
            </div>
          </div>

          {/* height and weight */}
          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="height">Height</label>
              <div className="form-input-wrap">
                <input
                  id="height"
                  className="form-input"
                  type="number"
                  defaultValue={user.height}
                />
                <span className="form-unit">cm</span>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="weight">Weight</label>
              <div className="form-input-wrap">
                <input
                  id="weight"
                  className="form-input"
                  type="number"
                  defaultValue={user.weight}
                />
                <span className="form-unit">kg</span>
              </div>
            </div>
          </div>

          {/* goal weight and daily calories */}
          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="goalWeight">Goal weight</label>
              <div className="form-input-wrap">
                <input
                  id="goalWeight"
                  className="form-input"
                  type="number"
                  defaultValue={user.goalWeight}
                />
                <span className="form-unit">kg</span>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="dailyCalories">Daily cal</label>
              <div className="form-input-wrap">
                <input
                  id="dailyCalories"
                  className="form-input"
                  type="number"
                  defaultValue={user.dailyCalories}
                />
                <span className="form-unit">kcal</span>
              </div>
            </div>
          </div>

          {/* fitness goal */}
          <div className="form-group">
            <label className="form-label" htmlFor="fitnessGoal">Fitness goal</label>
            <div className="form-input-wrap">
              <select
                id="fitnessGoal"
                className="form-select"
                defaultValue={user.fitnessGoal}
              >
                <option value="build-muscle">Build Muscle</option>
                <option value="lose-weight">Lose Weight</option>
                <option value="stay-active">Stay Active</option>
              </select>
            </div>
          </div>

        </div>

        {/* footer */}
        <div className="modal-footer">
          <button className="btn-cancel" onClick={onCancel}>Cancel</button>
          <button className="btn-save"   onClick={onSave}>Save changes</button>
        </div>

      </div>
    </div>
  );
}

export default EditMetricsModal;