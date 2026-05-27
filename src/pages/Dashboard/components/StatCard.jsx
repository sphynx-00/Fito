import ProgressBar from "./ProgressBar";
import './StatCard.css';
function StatCard({ label, value, unit }) {
  return (
    <div className={`stat-card ${label}`}>
      <p className="stat-label">{label}</p>
      {/* <ProgressBar label={label}/> */}
      <p className="stat-value">
        {value} {unit && <span className="stat-unit">{unit}</span>}
      </p>
    </div>
  );
}

export default StatCard;