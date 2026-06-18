import { useState } from 'react';
import { loadFromStorage } from '../../models/completedWorkouts';
import { progressStats } from '../../utils/progressStats';
import { getStartOfWeek } from '../../utils/workoutUtils';
import './Profile.css';
import EditMetricsModal from './EditMetricsModal';
import { defaultUser } from '../../models/userModel';

function Profile() {
  const workoutHistory = loadFromStorage();
  const { totalWorkouts, totalHours, weekStreak } = progressStats(workoutHistory, getStartOfWeek);

  const [isEditingBodyMetrics, setIsEditingBodyMetrics] = useState(false);
  const editBodyMetrics = () => {
    setIsEditingBodyMetrics(true);
  }


  return (
    <main className="profile-page">

      {/* purple hero header */}
      <header className="profile-header">
        <button className="edit-btn">Edit</button>
        <div className="profile-avatar">👤</div>
        <h1 className="profile-name">Sean</h1>
        <p className="profile-goal">Build muscle · Active</p>
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
          <span className="profile-stat-value">{weekStreak}</span>
          <span className="profile-stat-label">Wk streak</span>
        </div>
      </section>

      <div className="profile-content">

        {/* fitness goal */}
        <div className="goal-card">
          <div className="goal-icon">🎯</div>
          <div className="goal-info">
            <p className="goal-title">Build Muscle</p>
            <p className="goal-desc">Your current fitness goal</p>
          </div>
        </div>

        {/* body metrics */}
        <section className="profile-section" aria-label="Body metrics">
          <div className="section-header">
            <h2 className="section-title">Body metrics</h2>
            <button className="section-edit"
              onClick={editBodyMetrics}
            >Edit</button>
          </div>
          <dl className="info-list">
            <div className="info-row">
              <dt className="info-label">Age</dt>
              <dd className="info-value">25 years</dd>
            </div>
            <div className="info-row">
              <dt className="info-label">Height</dt>
              <dd className="info-value">175 cm</dd>
            </div>
            <div className="info-row">
              <dt className="info-label">Weight</dt>
              <dd className="info-value">72 kg</dd>
            </div>
            <div className="info-row">
              <dt className="info-label">Goal weight</dt>
              <dd className="info-value">62 kg</dd>
            </div>
          </dl>
        </section>

        {/* program info */}
        <section className="profile-section" aria-label="Program info">
          <div className="section-header">
            <h2 className="section-title">Program</h2>
            <button className="section-edit">Edit</button>
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
            <li className="settings-row">
              <div className="settings-left">
                <div className="settings-icon">🌙</div>
                <span className="settings-label">Dark mode</span>
              </div>
              <span className="settings-value">Off ›</span>
            </li>
          </ul>
        </section>

        {/* logout */}
        <button className="logout-btn">Log out</button>

        {isEditingBodyMetrics &&
          <EditMetricsModal
            user={defaultUser}
            onCancel={() => setIsEditingBodyMetrics(false)}
           />
        }

      </div>

    </main>
  );
}

export default Profile;