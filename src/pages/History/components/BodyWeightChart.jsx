import React from 'react';
import * as shared from '../styles/shared.styles';
import * as st from '../styles/bodyWeightChart.styles';
import { colors } from '../styles/tokens';
import Sparkline from './Sparkline';

export default function BodyWeightChart({ data, onRange }) {
  return (
    <div style={st.section}>
      <div style={shared.sectionLabel}>Body Weight</div>
      <div style={shared.card}>
        <div style={st.header}>
          <div style={st.current}>{data.current}</div>
          <div style={st.ranges}>
            {data.ranges.map((r) => (
              <div key={r} style={shared.pill(r === data.activeRange)} onClick={() => onRange && onRange(r)}>
                {r}
              </div>
            ))}
          </div>
        </div>
        <Sparkline points={data.trend} stroke={colors.muted} height={90} />
      </div>
    </div>
  );
}
