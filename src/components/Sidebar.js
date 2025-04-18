import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../redux/actions';
import './Sidebar.css';

const Sidebar = () => {
  const dispatch = useDispatch();
  const sidebarCollapsed = useSelector((state) => state.ui.sidebarCollapsed);

  const handleToggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <aside className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
      <button className="sidebar-toggle" onClick={handleToggle}>
        ☰
      </button>
      <nav className="sidebar-nav">
        <NavLink to="/overview" className="sidebar-link" activeclassname="active">
          Overview
        </NavLink>
        <NavLink to="/analytics" className="sidebar-link" activeclassname="active">
          Analytics
        </NavLink>
        <NavLink to="/settings" className="sidebar-link" activeclassname="active">
          Settings
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
