import { Routes, Route } from 'react-router';
import { Nav } from './shared/Nav';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Workouts from './pages/Workouts/Workouts';
import History from './pages/History/History';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <div className="app">
      {/* <Navbar /> */}
        <div className='app-body'>
          <Nav mode="sidebar" />
          <main className="main-content">

            <Routes>
              <Route index element={<Dashboard />} />
              <Route path='/workouts' element={<Workouts />} />
              <Route path='/history' element={<History />} />
              <Route path='/profile' element={<Profile />} />
            </Routes>

          </main>
        </div>
      <Nav mode="bottom"/>
    </div>
  );
}

export default App
