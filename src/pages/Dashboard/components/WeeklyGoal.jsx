import { getStartOfWeek } from '../../../utils/workoutUtils';
import './WeeklyGoal.css';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function WeeklyGoal() {
  const today = new Date();
  const startOfWeek = getStartOfWeek(today);

  return (
    <div className="weekly-card">
      <div className="day-strip">
        {days.map((day, index) => {
          const currentDay = new Date(startOfWeek);
          currentDay.setDate(startOfWeek.getDate() + index);

          const isToday = currentDay.toDateString() === today.toDateString();
          const isPast  = currentDay < today && !isToday;

          const stateClass = isToday ? 'today' : isPast ? 'done' : '';

          return (
            <div className={`day-card ${stateClass}`} key={day}>
              <span className="day-name">{day}</span>
              <span className="day-icon">
                {isToday ? '●' : isPast ? '✓' : '−'}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WeeklyGoal;