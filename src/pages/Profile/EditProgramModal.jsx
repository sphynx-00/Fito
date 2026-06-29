import { useState } from 'react';
import { programs } from '../../models/program';
import './EditProgramModal.css';

function EditProgramModal({ onSave, onCancel }) {
  const [selectedProgram, setSelectedProgram] = useState('UL/PPL');

  return (
    <div className="edit-program-overlay">
      <div className="edit-program-modal">

        {/* header */}
        <div className="edit-program-header">
          <h2 className="edit-program-title">Edit Program</h2>
          <span className="edit-program-close" onClick={onCancel}>×</span>
        </div>

        {/* body */}
        <div className="edit-program-body">

          {/* program selection */}
          <div>
            <label className="form-label">Current Program</label>
            <div className="program-list">
              {programs.map((program) => (
                <div
                  key={program.id}
                  className={`program-item ${selectedProgram === program.title ? 'selected' : ''}`}
                  onClick={() => setSelectedProgram(program.title)}
                >
                  <div className="program-radio">
                    <div className="program-radio-dot" />
                  </div>
                  <div className="program-info">
                    <p className="program-name">{program.title}</p>
                    <p className="program-desc">{program.description}</p>
                  </div>
                  <span className="program-badge">{program.difficulty}</span>
                </div>
              ))}
            </div>
          </div>

          {/* weekly target */}
          {/* <div>
            <label className="form-label" htmlFor="weeklyTarget">Weekly Target</label>
            <div className="form-input-wrap">
              <select id="weeklyTarget" className="form-select">
                <option value="3">3 days per week</option>
                <option value="4">4 days per week</option>
                <option value="5">5 days per week</option>
                <option value="6">6 days per week</option>
              </select>
            </div>
          </div> */}

          {/* start date */}
          <div>
            <label className="form-label" htmlFor="startDate">Start Date</label>
            <div className="form-input-wrap">
              <input
                id="startDate"
                className="form-input"
                type="date"
              />
            </div>
          </div>

        </div>

        {/* footer */}
        <div className="edit-program-footer">
          <button className="btn-cancel" onClick={onCancel}>Cancel</button>
          <button className="btn-save" onClick={onSave}>Save changes</button>
        </div>

      </div>
    </div>
  );
}

export default EditProgramModal;