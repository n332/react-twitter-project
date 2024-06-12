import React, { useEffect } from 'react';
import styles from '../styles/home.module.css';
import RightSideBar from '../Components/RightSideBar/RightSideBar';
import SideBar from '../Components/LeftSideBar/SideBar';
import { Outlet, useNavigate } from 'react-router-dom';
import useUserAuth from './Login/useUserAuth';
const Home = () => {
  const navigate = useNavigate();
  const { user } = useUserAuth();
  useEffect(() => {
    if (!user || !user.id) {
      // If user is not logged in or has no id, navigate to /auth
      // navigate('/auth');
    }
  }, [user, navigate]);

  if (!user || !user.id) {
    // Render a loading state or a message while checking user data
    return <div>Loading...</div>;
  }
  return (
    <div style={{ display: 'flex' }}>
      <SideBar />
      <div
        className={styles.main}
        style={{ flex: '35%', color: 'white', textAlign: 'center' }}
      >
        <Outlet />
      </div>
      <div
        className={styles.RightSideBar}
        style={{
          flex: '15%',
          color: 'white',
          marginRight: '8rem',
          marginLeft: '2rem',
        }}
      >
        <RightSideBar />
      </div>
    </div>
  );
};

export default Home;
