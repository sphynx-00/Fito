import './EditProgramModal.css';

function EditProgramModal({ user, programs, onSave, onCancel }) {
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

              <div className="program-item selected">
                <div className="program-radio">
                  <div className="program-radio-dot" />
                </div>
                <div className="program-info">
                  <p className="program-name">UL/PPL</p>
                  <p className="program-desc">Upper Lower Push Pull Legs</p>
                </div>
                <span className="program-badge">Intermediate</span>
              </div>

              <div className="program-item">
                <div className="program-radio">
                  <div className="program-radio-dot" />
                </div>
                <div className="program-info">
                  <p className="program-name">Bro Split</p>
                  <p className="program-desc">One muscle group per day</p>
                </div>
                <span className="program-badge">Beginner</span>
              </div>

              <div className="program-item">
                <div className="program-radio">
                  <div className="program-radio-dot" />
                </div>
                <div className="program-info">
                  <p className="program-name">Full Body</p>
                  <p className="program-desc">Train whole body every session</p>
                </div>
                <span className="program-badge">Beginner</span>
              </div>

            </div>
          </div>

          {/* weekly target */}
          <div>
            <label className="form-label" htmlFor="weeklyTarget">Weekly Target</label>
            <div className="form-input-wrap">
              <select id="weeklyTarget" className="form-select">
                <option value="3">3 days per week</option>
                <option value="4">4 days per week</option>
                <option value="5">5 days per week</option>
                <option value="6">6 days per week</option>
              </select>
            </div>
          </div>

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