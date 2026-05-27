import './Navbar.css';

function Navbar() {
  return (
    <nav className="top-bar">
      <div className='top-bar-details'>
        <p className="top-bar-name">Hi, Ratbu P.</p>
        <p className="top-bar-date">
          <span className='top-bar-today'>Today</span>, 
          21 April
          </p>
      </div>
      <button className='kebab-menu' aria-label="Menu">
        ⋮
      </button>
    </nav>
  );
}

export default Navbar;