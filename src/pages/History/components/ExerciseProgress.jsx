import React from 'react';
import * as shared from '../styles/shared.styles';
import * as st from '../styles/exerciseProgress.styles';
import { colors } from '../styles/tokens';
import Sparkline from './Sparkline';

function Metric({ label, value, accent }) {
  return (
    <div style={st.metric}>
      <div style={shared.statLabel}>{label}</div>
      <div style={st.metricValue(accent)}>{value}</div>
    </div>
  );
}

export default function ExerciseProgress({ progress, onPickExercise }) {
  return (
    <div style={shared.section}>
      <div style={shared.sectionLabel}>Exercise Progress</div>
      <div style={shared.card}>
        <div style={st.picker} onClick={onPickExercise}>
          <div style={st.pickerLabel}>{progress.exercise}</div>
          <div style={st.caret}>▼</div>
        </div>

        <div style={st.metrics}>
          <Metric label="Best weight" value={progress.bestWeight} />
          <Metric label="Est. 1RM" value={progress.estimated1RM} accent />
          <Metric label="Sessions" value={progress.sessions} />
          <Metric label="Total volume" value={progress.totalVolume} />
        </div>

        <div style={st.chartBlock}>
          <Sparkline points={progress.trend} stroke={colors.accent} grid endDot />
          <div style={st.axis}>
            {progress.axis.map((a) => <div key={a}>{a}</div>)}
          </div>
        </div>

        <div style={st.sessions}>
          {progress.recentSessions.map((r) => (
            <div key={r.date} style={st.sessionRow}>
              <span style={st.sessionDate}>{r.date}</span>
              <span style={st.sessionResult}>{r.result}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
