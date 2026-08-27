import { Routes, Route } from 'react-router';
import { Nav } from './shared/Nav';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Workouts from './pages/Workouts/Workouts';
import HistoryPage from './pages/History/HistoryPage';
import Profile from './pages/Profile/Profile';
import { useEffect, useState } from 'react';
import MuscleDetails from './pages/Workouts/components/MuscleDetails';
import PersonalRecords from './pages/History/components/PersonalRecords';
import * as mock from '../src/pages/History/data';
import VolumeChart from './pages/History/components/VolumeChart';
import RecentWorkouts from './pages/History/components/RecentWorkouts';
import WorkoutDetails from './pages/History/components/WorkoutDetails';


function App() {
  const personalRecords = mock.personalRecords;
  const volume = mock.volume;
  
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [theme]);

  return (
    <div className="app">
      {/* <Navbar /> */}
        <div className='app-body'>
          <Nav mode="sidebar" />
          <main className="main-content">

            <Routes>
              <Route index element={<Dashboard />} />
              <Route path='/workouts' element={<Workouts />} />
                <Route path='/workouts/:muscle' element={<MuscleDetails />} />

              <Route path='/history' element={<HistoryPage />} />
                <Route path='/RecentWorkouts' element={<RecentWorkouts />} />
                  <Route path='/workoutDetails/:workoutId' element={<WorkoutDetails />} />
                <Route path='/volume' element={<VolumeChart volume={volume} />} />
                <Route path='/PRs' element={<PersonalRecords records={personalRecords} />} />
                
              <Route path='/profile' element={
                <Profile theme={theme} setTheme={setTheme} />
              } />
            </Routes>

          </main>
        </div>
      <Nav mode="bottom"/>
    </div>
  );
}

export default App
