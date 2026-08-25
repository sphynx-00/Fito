import React from 'react';
import * as shared from '../styles/shared.styles';
import * as st from '../styles/personalRecords.styles';
import { useNavigate } from 'react-router';

const FILTERS = ['All', 'Weight', '1RM'];

export default function PersonalRecords({ records, activeFilter = 'All', onFilter }) {
  const navigate = useNavigate();

  return (
    <div className="page-transition" style={shared.section}>
      <div className="detail-nav">
        <button className="detail-back" onClick={() => navigate(-1)}>‹</button>
      </div>
      <div style={shared.sectionHeader}>
        <div style={shared.sectionLabel}>Personal Records</div>
        <div style={st.filters}>
          {FILTERS.map((filter) => (
            <div key={filter} style={shared.pill(filter === activeFilter)} onClick={() => onFilter && onFilter(filter)}>
              {filter}
            </div>
          ))}
        </div>
      </div>

      <div style={st.list}>
        {records.map((r, i) => (
          <div key={r.exercise} style={st.row(i === records.length - 1)}>
            <div>
              <div style={st.exercise}>{r.exercise}</div>
              <div style={st.date}>{r.date}</div>
            </div>
            <div style={st.result}>{r.result}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
