import './WeekStrip.css';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function WeekStrip({ activeDay }) {
  return (
    <div className="week-strip">
      {DAYS.map((day) => (
        <div className="week-day" key={day}>
          <div className={`week-dot ${day === activeDay ? 'active' : ''}`} />
          <span className={`week-label ${day === activeDay ? 'active' : ''}`}>
            {day[0]}
          </span>
        </div>
      ))}
    </div>
  );
}

export default WeekStrip;