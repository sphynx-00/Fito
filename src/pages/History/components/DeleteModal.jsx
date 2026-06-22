import './DeleteModal.css';

function DeleteModal({ workoutName, onConfirm, onCancel }) {

  return (
    <div className="delete-modal-overlay">
      <div className="delete-modal">

        <div className="delete-modal-icon">🗑️</div>

        <h2 className="delete-modal-title">Delete workout?</h2>

        <p className="delete-modal-desc">
          This will permanently remove your {workoutName} workout
          from history. This cannot be undone.
        </p>

        <div className="delete-modal-actions">
          <button className="delete-modal-cancel" onClick={onCancel}>
            Cancel
          </button>
          <button className="delete-modal-delete" onClick={onConfirm}>
            Delete
          </button>
        </div>

      </div>
    </div>
  );
}

export default DeleteModal;