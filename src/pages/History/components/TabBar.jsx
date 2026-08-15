import React from 'react';
import * as st from '../styles/tabBar.styles';

const TABS = [
  { key: 'dashboard', label: 'Dash', shape: 'square' },
  { key: 'workouts', label: 'Workouts', shape: 'circle' },
  { key: 'history', label: 'History', shape: 'square' },
  { key: 'profile', label: 'Profile', shape: 'circle' },
];

export default function TabBar({ active = 'history', onChange }) {
  return (
    <div style={st.bar}>
      {TABS.map((t) => {
        const isActive = t.key === active;
        return (
          <div key={t.key} style={st.tab(isActive)} onClick={() => onChange && onChange(t.key)}>
            <div style={st.icon({ active: isActive, shape: t.shape })} />
            <div style={st.label}>{t.label}</div>
          </div>
        );
      })}
    </div>
  );
}
