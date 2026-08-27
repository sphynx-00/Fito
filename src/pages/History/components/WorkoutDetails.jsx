import { useNavigate, useParams } from 'react-router';
import './WorkoutDetails.css';
import { loadFromStorage } from '../../../models/completedWorkouts';
import { format } from 'date-fns';

function WorkoutDetails () {
  const { workoutId } = useParams();
  const workouts = loadFromStorage();
  const workout = workouts.find((w) => String(w.id) === workoutId);
  const date = new Date(workout.date);
  const formattedDate = format(date, 'MMMM do, yyyy');

  const navigate = useNavigate();

  return (
    <div className="workout-detail page-transition">
      <div className="wd-scroll">

        <button className="wd-back" type="button" aria-label="Back" onClick={() => navigate(-1)}>
          <span className="wd-back-icon">‹</span>
          <span className="wd-back-label back-label">Back</span>
        </button>

        <div className="wd-title-block">
          <h1 className="wd-title">{workout.name}</h1>
          <div className="wd-program">{formattedDate}</div>
        </div>

        <div className="wd-stat-grid">
          <div className="wd-stat-cell">
            <div className="wd-stat-value">{workout.duration}<span className="wd-stat-unit">min</span></div>
            <div className="wd-stat-label">Duration</div>
          </div>
          <div className="wd-stat-cell">
            <div className="wd-stat-value">8,450<span className="wd-stat-unit">kg</span></div>
            <div className="wd-stat-label">Volume</div>
          </div>
          <div className="wd-stat-cell">
            <div className="wd-stat-value wd-stat-value--accent">1</div>
            <div className="wd-stat-label">PR</div>
          </div>
        </div>

        <div className="wd-pr-card">
          <div className="wd-pr-info">
            <div className="wd-pr-label">New PR</div>
            <div className="wd-pr-value">Bench Press — 70 kg</div>
          </div>
          <div className="wd-pr-previous">prev 67.5</div>
        </div>

        <div className="wd-exercise-list">

          <div className="wd-exercise-card">
            <div className="wd-exercise-header">
              <div className="wd-exercise-name">Bench Press</div>
              <button className="wd-history-link" type="button">History ›</button>
            </div>
            <div className="wd-set-list">
              <div className="wd-set-row"><span className="wd-set-index">1</span><span className="wd-set-result">60 kg × 10</span></div>
              <div className="wd-set-row"><span className="wd-set-index">2</span><span className="wd-set-result wd-set-result--pr">70 kg × 5</span><span className="wd-set-pr">PR</span></div>
              <div className="wd-set-row"><span className="wd-set-index">3</span><span className="wd-set-result">65 kg × 7</span></div>
            </div>
          </div>

          <div className="wd-exercise-card">
            <div className="wd-exercise-header">
              <div className="wd-exercise-name">Incline Dumbbell Press</div>
              <button className="wd-history-link" type="button">History ›</button>
            </div>
            <div className="wd-set-list">
              <div className="wd-set-row"><span className="wd-set-index">1</span><span className="wd-set-result">24 kg × 10</span></div>
              <div className="wd-set-row"><span className="wd-set-index">2</span><span className="wd-set-result">24 kg × 9</span></div>
              <div className="wd-set-row"><span className="wd-set-index">3</span><span className="wd-set-result">22 kg × 10</span></div>
            </div>
          </div>

          <div className="wd-exercise-card">
            <div className="wd-exercise-header">
              <div className="wd-exercise-name">Cable Fly</div>
              <button className="wd-history-link" type="button">History ›</button>
            </div>
            <div className="wd-set-list">
              <div className="wd-set-row"><span className="wd-set-index">1</span><span className="wd-set-result">15 kg × 12</span></div>
              <div className="wd-set-row"><span className="wd-set-index">2</span><span className="wd-set-result">15 kg × 12</span></div>
              <div className="wd-set-row"><span className="wd-set-index">3</span><span className="wd-set-result">17.5 kg × 10</span></div>
            </div>
          </div>

          <button className="wd-more" type="button">4 more exercises</button>
        </div>

        <div className="wd-readonly-note">Read-only · recorded Aug 15</div>
      </div>
    </div>
  );
}

export default WorkoutDetails;