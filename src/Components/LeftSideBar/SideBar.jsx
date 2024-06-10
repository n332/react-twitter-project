import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.css';

const routes = [
  { path: '/', name: 'Home', icon: 'home.png', alt: 'Sidebar Home tab' },
  {
    path: '/explore',
    name: 'Explore',
    icon: 'SI.png',
    alt: 'Sidebar Explore tab',
  },
  {
    path: '/bookmarks',
    name: 'Bookmarks',
    icon: 'bookmark.png',
    alt: 'Sidebar Bookmarks tab',
  },
  {
    path: '/notifications',
    name: 'Notifications',
    icon: 'notification.png',
    alt: 'Sidebar Notifications tab',
  },
  {
    path: '/profile',
    name: 'Profile',
    icon: 'profile.png',
    alt: 'Sidebar Profile tab Icon',
  },
];

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropupRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropupRef.current && !dropupRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="sideBarContainer">
      <div className="sideBarSplitter">
        <div className="sideBarItemsContainer">
          <div className="sideBarLogoContainer">
            <img
              className="sideBarLogo"
              src="/Assets/x-logo.png"
              alt="Sidebar Twitter / X"
            />
          </div>
          {routes.map((route) => (
            <NavLink
              key={'tab-route' + route.path}
              to={route.path}
              className={({ isActive }) =>
                isActive ? 'sideBarItemActive sideBarItem' : 'sideBarItem'
              }
            >
              <img
                src={'/Assets/' + route.icon}
                alt={route.alt}
                className="sideBarItemIcon"
              />
              <span className="sideBarItemText">{route.name}</span>
            </NavLink>
          ))}
        </div>
        <div className="sideBarBottomContainer">
          <button className="postButton">Post</button>
          <div
            ref={dropupRef}
            onClick={() => setIsOpen(!isOpen)}
            className="sideBarProfileItem"
          >
            <img
              alt="Sidebar profile icon"
              src="/Assets/person1.jpeg"
              className="sideBarProfileAvatar"
            />
            <div className="sideBarProfileData">
              <div className="sideBarProfileName">Youssef</div>
              <div className="sideBarProfileUsername">@Youssef</div>
            </div>
            <img
              src="/Assets/sidebar-option.png"
              alt="Side bar options"
              className="sideBarProfileOptions"
            />
          </div>
          {isOpen && (
            <div className="dropup">
              <div className="dropup-content">
                <a href="#">Log out @YoussefMarakshy</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
