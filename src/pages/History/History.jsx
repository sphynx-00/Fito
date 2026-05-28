import { useEffect, useState } from 'react';
import { completedWorkouts } from '../../models/completedWorkouts';
import { loadFromStorage } from '../../models/completedWorkouts';
import HistoryCard from './components/HistoryCard';
import Filter from './components/Filter';
import './History.css';


const FILTERS = ['All', 'This week', 'Last week'];

function History() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [workoutHistory, setWorkoutHistory] = useState(() => {
    return loadFromStorage();
  });



  return (
    <main className='history-content'>
      <header className="history-header">
        <h3 className="history-title">History</h3>
        <p className="history-description">Track your progress over time</p>
      </header>

      <section className='history-stats'>
        <div className='stat-pill'>
          <span className='stat-pill-value'>24</span>
          <span className='stat-pill-label'>Workouts</span>
        </div>
        
        <div className='stat-pill'>
          <span className='stat-pill-value'>18</span>
          <span className='stat-pill-label'>Hours</span>
        </div>

        <div className='stat-pill'>
          <span className='stat-pill-value'>4</span>
          <span className='stat-pill-label'>Wk streak</span>
        </div>

      </section>

       <nav className="filter-card" aria-label="Filter workouts">
        {FILTERS.map((filter) => (
          <Filter
            key={filter}
            filterName={filter}
            currentFilter={selectedFilter}
            onClick={() => {setSelectedFilter(filter)}}
           />
        ))}
       </nav>

       <section className='history-cards'>
        {workoutHistory && workoutHistory
        .filter(w => w.name !== 'Recovery')
        .map((workout) => (
          <HistoryCard 
            key={workout.id}
            workoutName={workout.name}
            completedExercises={workout.exercises.length}
            exercises={workout.exercises}
            day={workout.day}
            month={workout.month}
          />
        ))}
          


       </section>

    </main>
  );
}

export default History;