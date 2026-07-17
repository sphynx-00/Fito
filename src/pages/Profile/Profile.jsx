import { useState } from 'react';
import { loadFromStorage } from '../../models/completedWorkouts';
import { progressStats } from '../../utils/progressStats';
import './Profile.css';
import EditMetricsModal from './EditMetricsModal';
import { loadUser, profileManager } from './profileUtils';
import EditProgramModal from './EditProgramModal';
import DarkModeToggle from './DarkModeToggle';

function Profile({ theme, setTheme }) {
  const workoutHistory = loadFromStorage();
  const { totalWorkouts, totalHours, dayStreak } = progressStats(workoutHistory);

  const [user, setUser] = useState(() => loadUser());
  const [isEditing, setIsEditing] = useState(null);

  const {editMetrics, editProgram} = profileManager(isEditing, setIsEditing);
  
  const handleSave = (updatedUser) => {
    setUser(updatedUser);
    setIsEditing(null);
  }
  
  return (
    <main className="profile-page page-transition">

      {/* purple hero header */}
      <header className="profile-header">
        <button className="edit-btn">Edit</button>
        <div className="profile-avatar">👤</div>
        <h1 className="profile-name">Sean</h1>
        <p className="profile-goal">{user.fitnessGoal} · Active</p>
      </header>

      {/* lifetime stats */}
      <section className="profile-stats" aria-label="Lifetime stats">
        <div className="profile-stat">
          <span className="profile-stat-value">{totalWorkouts}</span>
          <span className="profile-stat-label">Workouts</span>
        </div>
        <div className="profile-stat">
          <span className="profile-stat-value">{totalHours}h</span>
          <span className="profile-stat-label">Total time</span>
        </div>
        <div className="profile-stat">
          <span className="profile-stat-value">{dayStreak}</span>
          <span className="profile-stat-label">Day streak</span>
        </div>
      </section>

      <div className="profile-content">

        {/* fitness goal */}
        <div className="goal-card">
          <div className="goal-icon">🎯</div>
          <div className="goal-info">
            <p className="goal-title">{user.fitnessGoal}</p>
            <p className="goal-desc">Your current fitness goal</p>
          </div>
        </div>

        {/* body metrics */}
        <section className="profile-section" aria-label="Body metrics">
          <div className="section-header">
            <h2 className="section-title">Body metrics</h2>
            <button className="section-edit"
              onClick={editMetrics}
            >Edit</button>
          </div>
          <dl className="info-list">
            <div className="info-row">
              <dt className="info-label">Age</dt>
              <dd className="info-value">{user.age} years</dd>
            </div>
            <div className="info-row">
              <dt className="info-label">Height</dt>
              <dd className="info-value">{user.height} cm</dd>
            </div>
            <div className="info-row">
              <dt className="info-label">Start Weight</dt>
              <dd className="info-value">{user.weight} kg</dd>
            </div>
            <div className="info-row">
              <dt className="info-label">Goal weight</dt>
              <dd className="info-value">{user.goalWeight} kg</dd>
            </div>
          </dl>
        </section>

        {/* program info */}
        <section className="profile-section" aria-label="Program info">
          <div className="section-header">
            <h2 className="section-title">Program</h2>
            <button className="section-edit"
              onClick={editProgram}
            >Edit</button>
          </div>
          <dl className="info-list">
            <div className="info-row">
              <dt className="info-label">Current program</dt>
              <dd className="info-value">UL/PPL</dd>
            </div>
            <div className="info-row">
              <dt className="info-label">Weekly target</dt>
              <dd className="info-value">5 days</dd>
            </div>
            <div className="info-row">
              <dt className="info-label">Started</dt>
              <dd className="info-value">Apr 20, 2026</dd>
            </div>
          </dl>
        </section>

        {/* settings */}
        <section className="profile-section" aria-label="Settings">
          <div className="section-header">
            <h2 className="section-title">Settings</h2>
          </div>
          <ul className="settings-list">
            <li className="settings-row">
              <div className="settings-left">
                <div className="settings-icon">⚖️</div>
                <span className="settings-label">Weight unit</span>
              </div>
              <span className="settings-value">kg ›</span>
            </li>
            <li className="settings-row">
              <div className="settings-left">
                <div className="settings-icon">🔔</div>
                <span className="settings-label">Notifications</span>
              </div>
              <span className="settings-value">On ›</span>
            </li>
            <DarkModeToggle 
              theme={theme}
              setTheme={setTheme}
            />
          </ul>
        </section>

        {/* logout */}
        <button className="logout-btn">Log out</button>

        {isEditing === 'metrics' && (
          <EditMetricsModal
            user={user}
            onCancel={() => setIsEditing(null)}
            onSave={handleSave}
           />
        )}

        {isEditing === 'program' && (
          <EditProgramModal
            user={user}
            onCancel={() => setIsEditing(null)}
           />
        )}

      </div>
    </main>
  );
}

export default Profile;