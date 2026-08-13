import { Routes, Route } from 'react-router';
import { Nav } from './shared/Nav';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Workouts from './pages/Workouts/Workouts';
import History from './pages/History/History';
import Profile from './pages/Profile/Profile';
import { useEffect, useState } from 'react';
import MuscleDetails from './pages/Workouts/components/MuscleDetails';


function App() {
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
              <Route path='/history' element={<History />} />
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
