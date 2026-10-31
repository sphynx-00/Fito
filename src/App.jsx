import { Routes, Route } from 'react-router';
import { Nav } from './shared/Nav';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Workouts from './pages/Workouts/Workouts';
import HistoryPage from './pages/History/HistoryPage';
import Profile from './pages/Profile/Profile';
import { useEffect, useMemo, useState } from 'react';
import MuscleDetails from './pages/Workouts/components/MuscleDetails';
import PersonalRecords from './pages/History/components/PersonalRecords';
import * as mock from '../src/pages/History/data';
import VolumeChart from './pages/History/components/VolumeChart';
import RecentWorkouts from './pages/History/components/RecentWorkouts';
import WorkoutDetails from './pages/History/components/WorkoutDetails';
import { loadFromStorage } from './models/completedWorkouts';
import { getAdjustedDate } from './utils/workoutUtils';
import { getVolumeStats } from './utils/volumeStats';
import { getPRs } from './utils/prStats';


function App() {
  const [isCompleted, setIsCompleted] = useState(() => {
  const today = getAdjustedDate().toLocaleDateString('en-ca');
  if (localStorage.getItem('workoutDate') !== today) return false;
  return localStorage.getItem('isCompleted') === 'true';
});

  const [pastWorkouts, setPastWorkouts] = useState(() => {
      return loadFromStorage();
    });

  const records = getPRs(pastWorkouts);

  const stats = useMemo(() => getVolumeStats(pastWorkouts), [pastWorkouts]);

  const volume = {
    ...mock.volume,
    total: `${stats.total.toLocaleString()}`,
    delta: stats.delta,
    isDown: stats.isDown,
    bars: stats.bars,
  };

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
              <Route index element={<Dashboard 
                isCompleted={isCompleted} setIsCompleted={setIsCompleted}
                pastWorkouts={pastWorkouts} setPastWorkouts={setPastWorkouts}/>} 
              />
              <Route path='/workouts' element={<Workouts />} />
                <Route path='/workouts/:muscle' element={<MuscleDetails />} />

              <Route path='/history' element={<HistoryPage records={records} isCompleted={isCompleted} 
                totalVolume={volume.total} pastWorkouts={pastWorkouts}/>} 
              />
                <Route path='/RecentWorkouts' element={<RecentWorkouts pastWorkouts={pastWorkouts} setPastWorkouts={setPastWorkouts}/>} />
                  <Route path='/workoutDetails/:workoutId' element={<WorkoutDetails pastWorkouts={pastWorkouts}/>} />
                <Route path='/volume' element={<VolumeChart volume={volume} />} />
                <Route path='/PRs' element={<PersonalRecords records={records} />} />
                
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
