import './HeroBanner.css';

function HeroBanner({workoutName, exercises, completedExercises, totalExercises, percentage, weekStreak}) {
  return (
    <section className="hero-banner">
      {/* decorative circles */}
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />

      <div className="hero-content">

        {/* workout type tag */}
        <span className="hero-tag">{workoutName} Day</span>

        {/* title */}
        <h2 className="hero-title">Ready to {workoutName} today?</h2>

        {/* subtitle */}
        <p className="hero-subtitle">{exercises} exercises · Est. 45 min</p>

        {/* stats row */}
        <div className="hero-stats">

          <div className="hero-stat">
            <span className="hero-stat-value">{completedExercises}</span>
            <span className="hero-stat-label">of {totalExercises} done</span>
          </div>

          <div className="hero-divider" />

          <div className="hero-stat">
            <span className="hero-stat-value">{weekStreak}</span>
            <span className="hero-stat-label">wk streak</span>
          </div>

          <div className="hero-divider" />

          <div className="hero-stat">
            <span className="hero-stat-value">{percentage}%</span>
            <span className="hero-stat-label">weekly goal</span>
          </div>
        </div>
      </div>

    </section>
  );
}

export default HeroBanner;