import ProgressBar from "./ProgressBar";
import { ChartNoAxesColumn } from 'lucide-react';
import './StatCard.css';


function StatCard({ variant, color, logo: Logo, label, value, unit }) {
  return (
    <div className="stat-container">
      <div className={`stat-icon ${variant}`}>
          <Logo size="30" color="white" strokeWidth={1.5} />
      </div>
        <div className={`stat-card ${variant}`}>
          <p className="stat-label">{label}</p>
          {/* <ProgressBar label={label}/> */}
          <p className="stat-value">
            {value} {unit && <span className="stat-unit">{unit}</span>}
          </p>
      </div>
    </div>
  );
}

export default StatCard;