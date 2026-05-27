import { LayoutGrid, Dumbbell, History, User } from 'lucide-react';
import './Nav.css';
import { NavLink } from 'react-router';

export function Nav({ mode }) {
  return (
     <nav className={`nav-${mode}`}>
      <div className="nav-brand">
        <span className="nav-title">Fito</span>
      </div>

      <NavLink
        to="/"
        className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
      >
        <span className="nav-icon"><LayoutGrid size={22} /></span>
        <span className="nav-label">Dashboard</span>
      </NavLink>
        

      <NavLink
        to="/workouts"
        className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
      >
        <span className="nav-icon"><Dumbbell size={22} /></span>
        <span className="nav-label">Workouts</span>
      </NavLink>
      

      {/* <div className="nav-item">
        <span className="nav-center-btn">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
        </span>
      </div> */}

      <NavLink
        to="/history"
        className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
      >
        <span className="nav-icon"><History size={22} /></span>
        <span className="nav-label">History</span>
      </NavLink>

      <NavLink
        to="/profile"
        className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
      >
        <span className="nav-icon"><User size={22} /></span>
        <span className="nav-label">Profile</span>
      </NavLink>
    </nav>
  );
}
