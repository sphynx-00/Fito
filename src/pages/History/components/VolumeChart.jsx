import React from 'react';
import * as shared from '../styles/shared.styles';
import * as st from '../styles/volumeChart.styles';

export default function VolumeChart({ volume, onRange }) {
  return (
    <div style={shared.section}>
      <div style={shared.sectionHeader}>
        <div style={shared.sectionLabel}>Volume</div>
        <div style={st.ranges}>
          {volume.ranges.map((r) => (
            <div key={r} style={shared.pill(r === volume.activeRange)} onClick={() => onRange && onRange(r)}>
              {r}
            </div>
          ))}
        </div>
      </div>

      <div style={shared.card}>
        <div style={st.totalRow}>
          <div style={st.total}>{volume.total}</div>
          <div style={st.delta}>{volume.delta}</div>
        </div>

        <div style={st.bars(volume.bars.length)}>
          {volume.bars.map((b) => (
            <div key={b.label} style={st.barCol}>
              <div style={st.bar(b)} />
              <div style={st.barLabel}>{b.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
