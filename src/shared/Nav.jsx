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
