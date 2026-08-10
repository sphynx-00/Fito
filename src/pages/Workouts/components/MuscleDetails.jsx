import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { exercisesByMuscle } from '../../../models/exercisesByMuscle';
import { getWorkoutStats } from '../../../utils/workoutUtils';
import {
   addCustomExercise,
   loadCustomExercises,
   removeCustomExercise 
  } from '../../../utils/customExercises';
import './MuscleDetails.css';

const muscleMeta = {
  chest:     { name: 'Chest',     group: 'Push' },
  back:      { name: 'Back',      group: 'Pull' },
  legs:      { name: 'Legs',      group: 'Legs' },
  shoulders: { name: 'Shoulders', group: 'Push' },
  arms:      { name: 'Arms',      group: 'Pull' },
  core:      { name: 'Core',      group: 'Core' },
};



function MuscleDetail() {
  const { muscle } = useParams();
  const navigate = useNavigate();
  const [version, setVersion] = useState(0);

  const { todaysWorkout } = getWorkoutStats();
  const meta = muscleMeta[muscle];
  const available = exercisesByMuscle[muscle] || [];

  if (!meta) {
    return (
      <main className="detail-content page-transition">
        <div className="detail-nav">
          <button className="detail-back" onClick={() => navigate(-1)}>‹</button>
        </div>
        <p className="detail-empty">Muscle group not found.</p>
      </main>
    );
  }

  const workoutId = todaysWorkout?.workoutId;
  const currentExercises = todaysWorkout?.exercises || [];

  const isAdded = (name) =>
    currentExercises.some(e => (e.exerciseName || e.name) === name);

  const addedCount = available.filter(e => isAdded(e.name)).length;

  const handleToggleAdd = (exercise) => {
    if (!workoutId) return;

    if (isAdded(exercise.name)) {
      removeCustomExercise(workoutId, exercise.name);
    } else {
      const maxOrder = currentExercises.reduce(
        (max, e) => Math.max(max, e.order || 0), 0
      );
      addCustomExercise(workoutId, {
        order: maxOrder + 1,
        exerciseName: exercise.name,
        sets: exercise.sets,
        reps: exercise.reps,
        weight: exercise.weight || 0,
      });
    }
    setVersion(v => v + 1);
  };

  const isRecovery = todaysWorkout?.name === 'Recovery';

  return (
    <main className="detail-content page-transition">

      <div className="detail-nav">
        <button className="detail-back" onClick={() => navigate(-1)}>‹</button>
      </div>

      <div className="detail-head">
        <span className="detail-tag">{meta.group}</span>
        <h1 className="detail-name">{meta.name}</h1>
        <p className="detail-meta">{available.length} exercises available</p>
      </div>

      <div className="detail-banner">
        <div className="detail-banner-left">
          <span className="detail-banner-label">Adding to</span>
          <span className="detail-banner-value">
            {isRecovery ? 'Rest day' : `${todaysWorkout?.name} · Today`}
          </span>
        </div>
        <span className="detail-banner-count">{addedCount} added</span>
      </div>

      <p className="detail-section-label">Available exercises</p>

      <div className="detail-list">
        {available.map((exercise) => {
          const added = isAdded(exercise.name);
          return (
            <div className={`detail-row ${added ? 'added' : ''}`} key={exercise.id}>
              <div className="detail-info">
                <p className="detail-ex-name">{exercise.name}</p>
                <div className="detail-ex-sub">
                  <span className="detail-ex-meta">{exercise.sets} × {exercise.reps}</span>
                  <span className="detail-equip">{exercise.equipment}</span>
                </div>
              </div>
              <button
                className={`detail-add-btn ${added ? 'is-added' : ''}`}
                onClick={() => handleToggleAdd(exercise)}
                disabled={isRecovery}
              >
                {added ? '✓' : '＋'}
              </button>
            </div>
          );
        })}
      </div>

    </main>
  );
}

export default MuscleDetail;