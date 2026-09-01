import './DeleteModal.css';

function DeleteModal({ workoutName, onCancel, onDelete }) {

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
          <button className="delete-modal-cancel" onClick={(e) => {
            e.stopPropagation();
            onCancel();
          }}>
            Cancel
          </button>

          <button className="delete-modal-delete" onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}>
            Delete
          </button>
        </div>

      </div>
    </div>
  );
}

export default DeleteModal;