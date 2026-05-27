import { getStartOfWeek } from '../../../utils/workoutUtils';
import './WeeklyGoal.css';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function WeeklyGoal({ program, completed, total, percentage }) {
  const today = new Date();
  const startOfWeek = getStartOfWeek();

  return (
    <div className="weekly-card">
      {/* <div className="goal-header">
        <p className="goal-title">Weekly goal</p>
      </div>

      <div className="goal-row">
          <span className="goal-label">{completed} of {total} workouts</span>
          <span className="goal-count">{percentage}%</span>
      </div> */}

      {/* <div className="progress-track">
        <div className="progress-fill"
          style={{ width: `${percentage}%`}}
        />
      </div> */}

      <div className="day-dots">
        {days.map((day, index) => {
          const currentDay = new Date(startOfWeek);
          currentDay.setDate(startOfWeek.getDate() + index);
          
          const isToday = currentDay.toDateString() === today.toDateString();
          const isPast  = currentDay < today && !isToday;
          
          return (
            <div className="day-dot" key={day}>
              <div className={`dot ${isToday ? 'dot-today' : isPast ? 'dot-done' : 'dot-empty'}`}>{day[0]}</div>
              <span className={`${isToday ? 'day-today' : 'day-name'}`}>{day}</span>
            </div>
          );
        })}
      </div>
        {/* <p className="next-label">Today: {program}</p> */}
    </div>
  );
}

export default WeeklyGoal;