import * as shared from '../styles/shared.styles';
import * as st from '../styles/recentWorkouts.styles';
import { useState } from 'react';
import { loadFromStorage } from '../../../models/completedWorkouts';
import { useNavigate } from 'react-router';

export default function RecentWorkouts({ onSeeAll }) {
  const [rotatedId, setRotatedId] = useState(null);
  const navigate = useNavigate()
  const workouts = loadFromStorage();

  const onOpen = (workoutId) => {
    navigate(`/workoutDetails/${workoutId}`);
  }

  return (
    <div className="page-transition" style={shared.section}>
      <div className="detail-nav">
        <button className="wd-back" type="button" aria-label="Back" onClick={() => navigate(-1)}>
          <span className="wd-back-icon">‹</span>
          <span className="wd-back-label back-label">Back</span>
        </button>
      </div>
      <div style={shared.sectionHeader}>
        <div style={shared.sectionLabel}>Recent Workouts</div>
        <div style={shared.link} onClick={onSeeAll}>See all</div>
      </div>

      {workouts.map((w) => (
        <div key={w.id} style={st.row} onClick={() => onOpen && onOpen(w.id)}>
          <div style={st.dateCol}>
            <div style={st.month}>{w.month}</div>
            <div style={st.day}>{w.day}</div>
          </div>
          <div style={st.body}>
            <div style={st.nameRow}>
              <div style={st.name}>{w.name}</div>
              {w.prs > 0 && <div style={shared.prBadge}>{w.prs} PR{w.prs > 1 ? 's' : ''}</div>}
            </div>
            <div style={shared.monoMeta}>{w.exercises.length} exercises · 68 min · 8,450 kg</div>
          </div>
          <div
            role="button"
            tabIndex={0}
            aria-expanded={rotatedId === w.id}
            style={st.chevron(rotatedId === w.id)}
            onClick={(e) => {
              e.stopPropagation();
              setRotatedId((id) => (id === w.id ? null : w.id));
            }}
          >
            ›
          </div>
        </div>
      ))}
    </div>
  );
}
