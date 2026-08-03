import './HeroBanner.css';
import { FlameIcon } from 'lucide-react';
import RingProgress from './RingProgress';

function HeroBanner({workoutName, exercises, completedExercises, totalExercises, percentage, dayStreak}) {
  const isActive = dayStreak > 0;
  const isRecovery = workoutName === 'Recovery';
  return (
    <section className="hero-banner">
      {/* decorative circles */}
      {/* <div className="hero-glow-1" />
      <div className="hero-glow-2" /> */}

      <div className="hero-content">

        {/* workout type tag */}
        <span className="hero-tag">{workoutName}</span>

        {/* title */}
        {isRecovery ? (
          <h2 className="hero-title">Rest days are essential to your fitness journey.</h2>
        ) : ( 
          <h2 className="hero-title">Action beats intention every time</h2>
        )}
        

        {/* subtitle */}
        <p className="hero-subtitle">{exercises} exercises · Est. 45 min</p>

        {/* stats row */}
        <div className="hero-stats">

          {/* <div className="hero-stat">
            <span className="hero-stat-value">{completedExercises}</span>
            <span className="hero-stat-label">of {totalExercises} done</span>
          </div>

          <div className="hero-divider" /> */}

          <div className="hero-stat">
            <div className="hero-stat-streak">
              <span className="hero-stat-value">{dayStreak}</span>
              <span className={`hero-stat-icon ${isActive ? 'active' : 'inactive'}`}><FlameIcon size={20} /></span>
            </div>
            <span className="hero-stat-label">day streak</span>
          </div>

          <div className="hero-divider" />

          <div className="hero-stat">
            <span className="hero-stat-value">{percentage}%</span>
            <span className="hero-stat-label">weekly goal</span>
          </div>
        </div>
      </div>

       <div className='ring-progress-container'>
        <RingProgress progress={completedExercises} total={totalExercises} color="#00F5D4" />
       </div>

    </section>
  );
}

export default HeroBanner;