import * as shared from '../styles/shared.styles';
import * as st from '../styles/historySummary.styles';
import { useNavigate } from 'react-router';

function Stat({ value, unit, label, accent }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (label === 'Workouts') {
      navigate('/RecentWorkouts');
    }

    if (label === 'PRs') {
      navigate('/PRs');
    }

    if (label === 'Volume') {
      navigate('/volume');
    }
  };

  return (
    <div onClick={handleClick} style={shared.statCell}>
      <div style={shared.statValue(accent)}>
        {value}
        {unit && <span style={shared.statUnit}>{unit}</span>}
      </div>
      <div style={shared.statLabel}>{label}</div>
    </div>
  );
}

export default function HistorySummary({ pastWorkouts, summary }) {
  return (
    <>
      <div style={shared.statGrid(4)}>
        <Stat value={pastWorkouts.length} label="Workouts" />
        <Stat value={summary.volume} label="Volume" />
        <Stat value={summary.prs} label="PRs" accent />
        <Stat value={summary.avgMinutes} unit=" m" label="Avg." />
      </div>
      <div style={st.delta}>
        <span style={st.deltaValue}>{summary.volumeDelta}</span> {summary.volumeDeltaLabel}
      </div>
    </>
  );
}
