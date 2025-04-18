import React from 'react';
import { useSelector } from 'react-redux';
import './Footer.css';

const Footer = () => {
  const darkMode = useSelector((state) => state.ui.darkMode);

  return (
    <footer className={`footer ${darkMode ? 'dark' : ''}`}>
      <p>© 2024 Responsive Dashboard Application. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
