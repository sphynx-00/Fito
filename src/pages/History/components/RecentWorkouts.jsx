import React from 'react';
import * as shared from '../styles/shared.styles';
import * as st from '../styles/recentWorkouts.styles';

export default function RecentWorkouts({ workouts, onOpen, onSeeAll }) {
  return (
    <div style={shared.section}>
      <div style={shared.sectionHeader}>
        <div style={shared.sectionLabel}>Recent Workouts</div>
        <div style={shared.link} onClick={onSeeAll}>See all</div>
      </div>

      {workouts.map((w) => (
        <div key={w.id} style={st.row} onClick={() => onOpen && onOpen(w)}>
          <div style={st.dateCol}>
            <div style={st.month}>{w.month}</div>
            <div style={st.day}>{w.day}</div>
          </div>
          <div style={st.body}>
            <div style={st.nameRow}>
              <div style={st.name}>{w.name}</div>
              {w.prs > 0 && <div style={shared.prBadge}>{w.prs} PR{w.prs > 1 ? 's' : ''}</div>}
            </div>
            <div style={shared.monoMeta}>{w.meta}</div>
          </div>
          <div style={shared.chevron}>›</div>
        </div>
      ))}
    </div>
  );
}
