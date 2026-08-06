import { useState } from 'react';
import './Workouts.css';

const filters = ['All', 'Push', 'Pull'];

const bodyParts = [
  { id: 1, name: 'Chest',     exercises: 5, icon: '💪', iconBg: '#D4A24E' },
  { id: 2, name: 'Back',      exercises: 5, icon: '🔙', iconBg: '#8B7BE0' },
  { id: 3, name: 'Legs',      exercises: 6, icon: '🦵', iconBg: '#6BB894' },
  { id: 4, name: 'Shoulders', exercises: 4, icon: '🏋️', iconBg: '#D08A6B' },
  { id: 5, name: 'Arms',      exercises: 6, icon: '🦾', iconBg: '#7BA8D4' },
  { id: 6, name: 'Core',      exercises: 4, icon: '🫀', iconBg: '#C97BA8' },
];

function Workouts() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [search, setSearch] = useState('');

  return (
    <main className="workouts-content page-transition">

      <header className="workouts-header">
        <h1 className="workouts-title">Workouts</h1>
      </header>

      <div className="workouts-search">
        <span className="search-icon">⌕</span>
        <input
          type="text"
          className="search-input"
          placeholder="Search exercises..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="workouts-filters">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-chip ${selectedFilter === filter ? 'active' : ''}`}
            onClick={() => setSelectedFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="muscle-grid">
        {bodyParts.map((part) => (
          <div className="muscle-card" key={part.id}>
            <div className="muscle-icon" style={{ background: part.iconBg }}>
              {part.icon}
            </div>
            <div className="muscle-info">
              <p className="muscle-name">{part.name}</p>
              <p className="muscle-meta">{part.exercises} exercises</p>
            </div>
          </div>
        ))}
      </div>

    </main>
  );
}

export default Workouts;