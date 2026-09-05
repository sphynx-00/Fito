import * as shared from '../styles/shared.styles';
import * as st from '../styles/volumeChart.styles';
import { useNavigate } from 'react-router';


export default function VolumeChart({ volume, onRange }) {
  const navigate = useNavigate();

  return (
    <div className="page-transition" style={shared.section}>
      <div className="detail-nav">
        <button className="wd-back" type="button" aria-label="Back" onClick={() => navigate(-1)}>
          <span className="wd-back-icon">‹</span>
          <span className="wd-back-label back-label">Back</span>
        </button>
      </div>
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
