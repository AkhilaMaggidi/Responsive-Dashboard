import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../redux/actions';
import './Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.ui.darkMode);

  const handleDarkModeToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <header className={`header ${darkMode ? 'dark' : ''}`}>
      <nav className="nav">
        <div className="nav-left">
          <NavLink to="/overview" className="nav-logo">
            Dashboard
          </NavLink>
          <NavLink to="/overview" className="nav-link">
            Overview
          </NavLink>
          <NavLink to="/analytics" className="nav-link">
            Analytics
          </NavLink>
          <NavLink to="/settings" className="nav-link">
            Settings
          </NavLink>
        </div>
        <div className="nav-right">
          <button onClick={handleDarkModeToggle} className="dark-mode-toggle">
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
          <div className="user-profile">
            <span role="img" aria-label="user">
              👤
            </span>
          </div>
          <div className="notifications">
            <span role="img" aria-label="notifications">
              🔔
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
