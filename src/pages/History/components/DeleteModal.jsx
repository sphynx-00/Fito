import './DeleteModal.css';

function DeleteModal({ workoutName, onConfirm, onCancel }) {
  return (
    <div className="modal-overlay">
      <div className="modal">

        <div className="modal-icon">🗑️</div>

        <h2 className="modal-title">Delete workout?</h2>

        <p className="modal-desc">
          This will permanently remove your {workoutName} workout
          from history. This cannot be undone.
        </p>

        <div className="modal-actions">
          <button className="modal-cancel" onClick={onCancel}>
            Cancel
          </button>
          <button className="modal-delete" onClick={onConfirm}>
            Delete
          </button>
        </div>

      </div>
    </div>
  );
}

export default DeleteModal;