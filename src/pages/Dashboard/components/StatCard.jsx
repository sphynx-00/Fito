import ProgressBar from "./ProgressBar";
import { ChartNoAxesColumn } from 'lucide-react';
import './StatCard.css';


function StatCard({ label, value, unit, variant, logo: Logo, color }) {
  return (
    <div className="stat-card">
      <div className="stat-value">
        {value}<span className="stat-unit"> {unit}</span>
        <div className="stat-label">{label}</div>
      </div>
      
      <div className={`stat-icon ${variant}`}>
        <Logo size="20" strokeWidth={1.5}/>       
      </div>
    </div>
  );
}

export default StatCard;

// function StatCard({ variant, color, logo: Logo, label, value, unit }) {
//   return (
//     <div className="stat-container">
//       <div className={`stat-icon ${variant}`}>
//           <Logo size="30" color="white" strokeWidth={1.5} />
//       </div>
//         <div className={`stat-card ${variant}`}>
//           <p className="stat-label">{label}</p>
//           {/* <ProgressBar label={label}/> */}
//           <p className="stat-value">
//             {value} {unit && <span className="stat-unit">{unit}</span>}
//           </p>
//       </div>
//     </div>
//   );
// }

// export default StatCard;