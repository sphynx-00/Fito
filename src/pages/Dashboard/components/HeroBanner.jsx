import './HeroBanner.css';
import { FlameIcon } from 'lucide-react';
import RingProgress from './RingProgress';

function HeroBanner({ workoutName, exercises, completedExercises, totalExercises, percentage, dayStreak }) {
  const isActive = dayStreak > 0;
  const isRecovery = workoutName === 'Recovery';

  return (
    <section className="hero-banner">
      <div className="hero-top-row">
        <span className="hero-tag">{workoutName}</span>
        <span className="hero-pct">{percentage}% of week</span>
      </div>

      <div className="hero-big">
        {completedExercises}
        <span>of {totalExercises} exercises</span>
      </div>

      <div className="hero-track">
        <div className="hero-fill" style={{ width: `${(completedExercises / totalExercises) * 100 || 0}%` }} />
      </div>

      {isRecovery ? (
        <p className="hero-subtitle">Rest days are essential to your fitness journey.</p>
      ) : (
        <p className="hero-subtitle">Action beats intention every time</p>
      )}

      <div className="hero-foot">
        <div className="hero-stat">
          <span className="hero-val">{dayStreak}</span>
          <span className="hero-lab">Day streak</span>
        </div>
        <div className="hero-stat">
          <span className="hero-val">45</span>
          <span className="hero-lab">Minutes est.</span>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;