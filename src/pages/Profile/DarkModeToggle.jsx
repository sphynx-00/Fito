import './DarkModeToggle.css';

function DarkModeToggle({ theme, setTheme}) {
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  
  return (
    <div className="settings-row">
      <div className="settings-left">
        <div className="settings-icon">
          {theme === 'dark' ? '🌙' : '☀️'}
        </div>
        <span className="settings-label">Dark mode</span>
      </div>

      <div 
        className={`toggle-switch ${theme === 'dark' ? 'active' : ''}`} 
        onClick={toggleTheme}>
        <div className="toggle-knob" />
      </div>
    </div>
  );
}

export default DarkModeToggle;