import * as shared from '../styles/shared.styles';
import * as st from '../styles/recentWorkouts.styles';
import { useNavigate } from 'react-router';
import './ButtonDelete.css';
import DeleteModal from './DeleteModal';
import { useState } from 'react';

export default function RecentWorkouts({ pastWorkouts, setPastWorkouts, onSeeAll }) {
  const [showModal, setShowModal] = useState(null);
  const [showToast, setShowToast] = useState(false);

  const navigate = useNavigate()

  const onOpen = (workoutId) => {
    navigate(`/workoutDetails/${workoutId}`);
  }

  const onShowDeleteModal = (workoutId) => {
    setShowModal(workoutId);
  }

  const onDelete = (workoutId) => {
    const updatedWorkouts = pastWorkouts.filter(w => w.id !== workoutId);
    setPastWorkouts(updatedWorkouts);
    localStorage.setItem('completedWorkout', JSON.stringify(updatedWorkouts));
    setShowModal(null);
  }

  const onCancel = () => {
    setShowModal(false)
  }

  return (
    <div className="page-transition" style={shared.section}>
      <div className="detail-nav">
        <button className="wd-back" type="button" aria-label="Back" onClick={() => navigate(-1)}>
          <span className="wd-back-icon">‹</span>
          <span className="wd-back-label back-label">Back</span>
        </button>
      </div>
      <div style={shared.sectionHeader}>
        <div style={shared.sectionLabel}>Recent Workouts</div>
        <div style={shared.link} onClick={onSeeAll}>See all</div>
      </div>

      {pastWorkouts.map((w) => (
        <div key={w.id} style={st.row} onClick={() => onOpen && onOpen(w.id)}>
          <div style={st.dateCol}>
            <div style={st.month}>{w.month}</div>
            <div style={st.day}>{w.day}</div>
          </div>
          <div style={st.body}>
            <div style={st.nameRow}>
              <div style={st.name}>{w.name}</div>
              {w.prs > 0 && <div style={shared.prBadge}>{w.prs} PR{w.prs > 1 ? 's' : ''}</div>}
            </div>
            <div style={shared.monoMeta}>{w.exercises.length} exercises · 68 min · 8,450 kg</div>
          </div>
          <div
            className="btn-delete"
            role="button"
            tabIndex={0}
            onClick={(e) => {
              e.stopPropagation();
              onShowDeleteModal(w.id);
            }}
          >
             <svg className="btn-delete__icon" viewBox="0 0 16 16" width="18" height="18"
              fill="none" stroke="currentColor" strokeWidth="1.4"
              strokeLinecap="round" aria-hidden="true" focusable="false">
              <path d="M2.5 4.5h11M6 4.5V2.8h4v1.7M4 4.5l.7 8.2a1 1 0 0 0 1 .9h4.6a1 1 0 0 0 1-.9l.7-8.2" />
              <path d="M6.6 7v4M9.4 7v4" />
           </svg>

            {showModal === w.id && (
              <DeleteModal 
                workoutName={w.name}
                workoutId={w.id}
                onCancel={onCancel}
                onDelete={() => {onDelete(w.id)}}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
