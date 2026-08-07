import { useState } from 'react';
import './Workouts.css';
import Chest from '../../assets/Chest.png';
import Back from '../../assets/Back.png';
import Legs from '../../assets/Legs.png';
import Shoulder from '../../assets/Shoulder.png';
import Arms from '../../assets/Arms.png';
import Core from '../../assets/Core1.png';

const filters = ['All', 'Push', 'Pull'];

const bodyParts = [
  { id: 1, name: 'Chest',     exercises: 5, image: Chest },
  { id: 2, name: 'Back',      exercises: 5, image: Back },
  { id: 3, name: 'Legs',      exercises: 6, image: Legs },
  { id: 4, name: 'Shoulders', exercises: 4, image: Shoulder },
  { id: 5, name: 'Arms',      exercises: 6, image: Arms },
  { id: 6, name: 'Core',      exercises: 4, image: Core },
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
            <div className="muscle-info">
              <p className="muscle-name">{part.name}</p>
              <p className="muscle-meta">{part.exercises} exercises</p>
            </div>
            <img className="muscle-illustration" src={part.image} alt={part.name} />
          </div>
        ))}
      </div>

    </main>
  );
}

export default Workouts;