import { useState } from 'react';
import './HistoryCard.css';

function HistoryCard({ day, month, workoutName, completedExercises, exercises }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <li className={`history-card ${isExpanded ? 'open' : ''}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <time className="history-date-badge" dateTime="2026-04-28">
          <span className="history-day">{day}</span>
          <span className="history-month">{month}</span>
        </time>

        <div className="history-info">
          <h3 className="history-name">{workoutName}</h3>
          <p className="history-meta">{completedExercises} exercises · 45 min</p>
        </div>

        <span className="badge badge-done">done</span>

        <span className={`history-arrow ${isExpanded ? 'open' : ''}`} aria-hidden="true"
        >›</span>
      </li>

      {isExpanded && exercises.length > 0 && (
        <div className="history-exercises"
        >
          {exercises.map((exercise, index) => (
            <div className="history-ex-row" key={index}>
              <span className="history-ex-name">{exercise.name}</span>
              <span className="history-ex-sets">{exercise.sets} × {exercise.reps}</span>
            </div>
          ))}

          <button className="delete-btn">
            Delete
          </button>
        </div>
      )}
    </>
  );
}

export default HistoryCard;