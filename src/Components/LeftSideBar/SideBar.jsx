import React, { useEffect, useState, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './SideBar.css';
import useUserAuth from '../../Pages/Login/useUserAuth';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropupRef = useRef(null);
  const navigate = useNavigate();
  const { user, logout } = useUserAuth();

  const handleClickOutside = (event) => {
    if (dropupRef.current && !dropupRef.current.contains(event.target)) {
      //setIsOpen(false);
    }
  };

  const routes = [
    { path: '/', name: 'Home', icon: 'home.png', alt: 'Sidebar Home tab' },
    // {
    //   path: '/explore',
    //   name: 'Explore',
    //   icon: 'SI.png',
    //   alt: 'Sidebar Explore tab',
    // },
    {
      path: '/bookmarks',
      name: 'Bookmarks',
      icon: 'bookmark.png',
      alt: 'Sidebar Bookmarks tab',
    },
    // {
    //   path: '/notifications',
    //   name: 'Notifications',
    //   icon: 'notification.png',
    //   alt: 'Sidebar Notifications tab',
    // },
    {
      path: '/profile/' + user?.id,
      name: 'Profile',
      icon: 'profile.png',
      alt: 'Sidebar Profile tab Icon',
    },
  ];

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
              src={user?.profile?.avatar ?? '/Assets/profile.png'}
              className="sideBarProfileAvatar"
            />
            <div className="sideBarProfileData">
              <div className="sideBarProfileName">{user?.profile?.name}</div>
              <div className="sideBarProfileUsername">@{user?.username}</div>
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
                <a
                  onClick={async () => {
                    await logout();
                    navigate('/auth');
                  }}
                  href="#"
                >
                  Log out @{user?.username}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/*
email
: 
"joe@gmail.com"
id
: 
"6645e8cffb6726387b8549d2"
profile
: 
{name: 'Joe Fathy', bio: 'https://picsum.photos/1500/500', location: '', website: '', avatar: 'https://avatar.oxro.io/avatar.png?name=joefathy', …}
username
: 
"joefathy"
*/
export default SideBar;
