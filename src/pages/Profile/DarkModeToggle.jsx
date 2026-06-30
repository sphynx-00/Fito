import { useState } from 'react';
import './DarkModeToggle.css';

function DarkModeToggle({ theme, setTheme }) {
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const [isOn, setIsOn] = useState(false);

  return (
    <div className="settings-row" onClick={toggleTheme}>
      <div className="settings-left">
        <div className="settings-icon">
          {isOn === true ? '🌙' : '☀️'}
        </div>
        <span className="settings-label">Dark mode</span>
      </div>

      <div 
        className={`toggle-switch ${isOn ? 'active' : ''}`} 
        onClick={() => setIsOn(!isOn)}
      >
        <div className="toggle-knob" />
      </div>
    </div>
  );
}

export default DarkModeToggle;