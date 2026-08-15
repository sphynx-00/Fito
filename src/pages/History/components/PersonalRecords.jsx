import React from 'react';
import * as shared from '../styles/shared.styles';
import * as st from '../styles/personalRecords.styles';

const FILTERS = ['All', 'Weight', '1RM'];

export default function PersonalRecords({ records, activeFilter = 'All', onFilter }) {
  return (
    <div style={shared.section}>
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
