import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [activeLink, setActiveLink] = useState('for-you');

  return (
    <div className="header-container">
      <a
        href="#"
        className={`link-container ${activeLink === 'for-you' ? 'active' : ''}`}
        onClick={() => setActiveLink('for-you')}
      >
        <span>For you</span>
      </a>
      <a
        href="#"
        className={`link-container ${activeLink === 'following' ? 'active' : ''}`}
        onClick={() => setActiveLink('following')}
      >
        <span>Following</span>
      </a>
      <div className="settings-icon">
        <a href="#" className="tooltip-container">
          <img src="assets\icons\setting.svg" alt="Settings Icon" className="settings-img" width="24" height="24" />
          <span className="tooltip-text">Timeline settings</span>
        </a>
      </div>
    </div>
  );
};

export default Header;
