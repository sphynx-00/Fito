import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChestIcon, BackIcon, LegsIcon, ShouldersIcon, ArmsIcon, CoreIcon } from './components/MuscleIcons';
import './Workouts.css';

const filters = ['All', 'Chest', 'Back', 'Legs',];

const bodyParts = [
  { id: 1, name: 'Chest',     exercises: 5, key: 'chest',     Icon: ChestIcon },
  { id: 2, name: 'Back',      exercises: 5, key: 'back',      Icon: BackIcon },
  { id: 3, name: 'Legs',      exercises: 6, key: 'legs',      Icon: LegsIcon },
  { id: 4, name: 'Shoulders', exercises: 4, key: 'shoulders', Icon: ShouldersIcon },
  { id: 5, name: 'Arms',      exercises: 6, key: 'arms',      Icon: ArmsIcon },
  { id: 6, name: 'Core',      exercises: 4, key: 'core',      Icon: CoreIcon },
];

function Workouts() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  return (
    <main className="workouts-content page-transition">

      <header className="workouts-header">
        <h1 className="workouts-title">Workouts</h1>
        <p className="workouts-subtitle">Choose a muscle group</p>
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
          <div
            className="muscle-card"
            key={part.id}
            onClick={() => navigate(`/workouts/${part.key}`)}
          >
            <div className="muscle-card-head">
              <div>
                <p className="muscle-name">{part.name}</p>
                <p className="muscle-meta">{part.exercises} exercises</p>
              </div>
              <span className="muscle-arrow">›</span>
            </div>
            <div className="muscle-illus">
              <part.Icon />
            </div>
          </div>
        ))}
      </div>

    </main>
  );
}

export default Workouts;