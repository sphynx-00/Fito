import React from 'react';
import * as shared from '../styles/shared.styles';
import * as st from '../styles/muscleFrequency.styles';

export default function MuscleFrequency({ items }) {
  return (
    <div style={shared.section}>
      <div style={shared.sectionLabel}>Muscle Frequency</div>
      <div style={{ ...shared.card, ...st.card }}>
        {items.map((m) => (
          <div key={m.muscle} style={st.row}>
            <div style={st.labelRow}>
              <span>{m.muscle}</span>
              <span style={st.meta}>{m.sessions} · {m.last}</span>
            </div>
            <div style={st.track}>
              <div style={st.fill(m)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
