import { useState } from 'react';
import './EditMetricsModal.css';
import { saveUser } from './profileUtils';

function EditMetricsModal({ user, onCancel, onSave }) {
  const [formData, setFormData] = useState({
    age:           user?.age           ?? '',
    height:        user?.height        ?? '',
    weight:        user?.weight        ?? '',
    goalWeight:    user?.goalWeight    ?? '',
    dailyCalories: user?.dailyCalories ?? '',
    fitnessGoal:   user?.fitnessGoal   ?? 'Build-Muscle',
});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const saveChanges = () => {
    saveUser(formData);
    onSave(formData);
  }

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
                onChange={handleChange}
                id="age"
                name="age"
                className="form-input"
                type="number"
                value={formData.age}
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
                  onChange={handleChange}
                  id="height"
                  name="height"
                  className="form-input"
                  type="number"
                  value={formData.height}
                />
                <span className="form-unit">cm</span>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="weight">Weight</label>
              <div className="form-input-wrap">
                <input
                  onChange={handleChange}
                  id="weight"
                  name="weight"
                  className="form-input"
                  type="number"
                  value={formData.weight}
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
                  onChange={handleChange}
                  id="goalWeight"
                  name="goalWeight"
                  className="form-input"
                  type="number"
                  value={formData.goalWeight}
                />
                <span className="form-unit">kg</span>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="dailyCalories">Daily cal</label>
              <div className="form-input-wrap">
                <input
                  onChange={handleChange}
                  id="dailyCalories"
                  name="dailyCalories"
                  className="form-input"
                  type="number"
                  value={formData.dailyCalories}
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
                onChange={handleChange}
                id="fitnessGoal"
                name="fitnessGoal"
                className="form-select"
                value={formData.fitnessGoal}
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
          <button className="btn-save"   onClick={saveChanges}>Save changes</button>
        </div>

      </div>
    </div>
  );
}

export default EditMetricsModal;