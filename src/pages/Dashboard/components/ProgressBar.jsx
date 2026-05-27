import './ProgressBar.css';

function ProgressBar({ label }) {
  return (
    <div className="progress-food-track">
      <div className={`progress-fill-${label}`} />
    </div>
  );
}

export default ProgressBar;