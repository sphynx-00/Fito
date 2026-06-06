import './Toast.css';

function Toast({ message, sub, onClose }) {
  return (
    <div className="toast">
      <div className="toast-icon">✓</div>
      <div className="toast-text">
        <p className="toast-title">{message}</p>
        <p className="toast-sub">{sub}</p>
      </div>
      <span className="toast-close" onClick={onClose}>×</span>
    </div>
  );
}

export default Toast;