import { useState } from 'react';
import { programs } from '../../models/program';
import './EditProgramModal.css';
import { loadUserProgram, saveUserProgram } from './profileUtils';

function EditProgramModal({ onSave, onCancel }) {
  const [selectedProgramId, setSelectedProgramId] = useState(() => {
    const saved = loadUserProgram();
    return saved ? saved.programId : 1;
  });

  const [startDate, setStartDate] = useState(() => {
    const saved = loadUserProgram();
    return saved?.startDate || '2026/06/01';  // ← safe fallback
  });

  const saveChanges = () => {
    saveUserProgram(selectedProgramId, startDate);
    onSave({ programId: selectedProgramId, startDate });
  }

  
  return (
    <div className="edit-program-overlay">
      <div className="edit-program-modal">

        {/* header */}
        <div className="edit-program-header">
          <h2 className="edit-program-title">Edit Program</h2>
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
                  className={`program-item ${selectedProgramId === program.id ? 'selected' : ''}`}
                  onClick={() => setSelectedProgramId(program.id)}
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
                value={startDate.replace(/\//g, '-')}
                onChange={(e) => setStartDate(e.target.value.replace(/-/g, '/'))}
              />
            </div>
          </div>

        </div>

        {/* footer */}
        <div className="edit-program-footer">
          <button className="btn-cancel" onClick={onCancel}>Cancel</button>
          <button className="btn-save" onClick={saveChanges}>Save changes</button>
        </div>

      </div>
    </div>
  );
}

export default EditProgramModal;