import { useEffect, useState } from 'react';
import { loadFromStorage } from '../../models/completedWorkouts';
import HistoryCard from './components/HistoryCard';
import Filter from './components/Filter';
import DeleteModal from './components/DeleteModal';
import './History.css';
import Toast from './components/Toast';


const FILTERS = ['All', 'This week', 'Last week'];

function History() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [workoutHistory, setWorkoutHistory] = useState(() => {
    return loadFromStorage();
  });

// Delete functions   
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  const handleDelete = (workout) => {
    setSelectedWorkout(workout);
    setShowModal(true);
  }

  const handleCancel = () => {
    setShowModal(false);
  }

  const handleConfirmDelete = () => {
    const workoutId = selectedWorkout.id
    const updatedWorkoutHistory = workoutHistory.filter(w => w.id !== workoutId);
    setWorkoutHistory(updatedWorkoutHistory);
    localStorage.setItem('completedWorkout', JSON.stringify(updatedWorkoutHistory));

    setShowModal(false);
    setShowToast(true);
  }

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 30000);                    // ← 3 seconds

      return () => clearTimeout(timer);  // ← cleanup
    }
  }, [showToast]);
// Delete functions 

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
            onclick={() => handleDelete(workout)}
          />
        ))}
       </section>

       {showModal && (
          <DeleteModal
            onCancel={() => handleCancel()}
            onConfirm={() => handleConfirmDelete()}
            workoutName={selectedWorkout.name}
          />
        )}

        {showToast && (
          <Toast 
            message="Workout deleted"
            sub={`${selectedWorkout.name} has been removed from history`}
            onClose={() => setShowToast(false)}
           />
        )}
    </main>
  );
}

export default History;