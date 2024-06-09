import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; 
import axios from 'axios';
import MyLikesComponent from './myLikes'; 
import styles from '../../styles/profile.module.css'; 
import MyMedia from './myMedia';
import MyHighlights from './myHighlights';
import MyPostsComponent from './myPosts';

const ProfileComponent = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [as, setAs] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [activeTab, setActiveTab] = useState('myPosts');

  useEffect(() => {
    const fetchUserById = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/users/${id}`);
        setUser(response.data);
        setAs(response.data.profile.name);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    if (id) {
      fetchUserById();
    }
  }, [id]);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const saveChanges = () => {
    console.log('Saving changes...');
    closePopup();
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className={styles.container}> 
      {user && (
        <>
          <img className={styles.imageTop} src={user.profile.banner} alt="Profile Banner" />
          <div className={styles.info}>
            <img src={user.profile.avatar} alt="Profile Avatar" />
          </div>
          <div className={styles.content}>
            <div className={styles.infoo}>
              <h4>{user.profile?.name}</h4>
              <p>&#64;<em>{user.username}</em></p>
            </div>
            <div className={styles.editPro}>
              <p className={`${styles.btn} ${styles.textLight}`} onClick={openPopup}>set up Profile</p>
            </div>
            {showPopup && (
              <div className={styles.popup}>
                <div className={styles.popupContent}>
                  <span className={styles.close} onClick={closePopup}>&times;</span>
                  <h4>Edit Profile</h4>
                  <div className={styles.inputContainer}>
                    <input type="text" id="name" placeholder="" value={as} onChange={e => setAs(e.target.value)} />
                    <label htmlFor="name">Name</label>
                  </div>
                  <div className={styles.inputContainer}>
                    <input type="text" id="username" placeholder="" value={user.username} />
                    <label htmlFor="username">Username</label>
                  </div>
                  <button className={styles.button} onClick={saveChanges}>Save</button>
                </div>
              </div>
            )}
          </div>

          <nav className={styles.navbar}>
            <ul>
              <li>
                <Link onClick={() => handleTabClick('myPosts')} className={activeTab === 'myPosts' ? styles.active : ''}>My Posts</Link>
              </li>
              <li>
                <Link onClick={() => handleTabClick('highlights')} className={activeTab === 'highlights' ? styles.active : ''}>Highlights</Link>
              </li>
              <li>
                <Link onClick={() => handleTabClick('media')} className={activeTab === 'media' ? styles.active : ''}>Media</Link>
              </li>
              <li>
                <Link onClick={() => handleTabClick('myLikes')} className={activeTab === 'myLikes' ? styles.active : ''}>My Likes</Link>
              </li>
            </ul>
          </nav>
          
          {activeTab === 'myPosts' && <MyPostsComponent id={id} />}
          {activeTab === 'highlights' && <MyHighlights />}
          {activeTab === 'media' && <MyMedia />}
          {activeTab === 'myLikes' && <MyLikesComponent id={id} />}
        </>
      )}
    </div>
  );
};

export default ProfileComponent;
