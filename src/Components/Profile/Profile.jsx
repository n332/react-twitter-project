// ProfileComponent.jsx
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
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [activeTab, setActiveTab] = useState('myPosts');

  useEffect(() => {
    const fetchUserById = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/users/${id}`);
        setUser(response.data);
        setName(response.data.profile.name);
        setUsername(response.data.username);
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

  const saveChanges = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/api/users/${id}`, { 
        profile: { 
          name: name,
          username: username
        } 
      });
      if (response.status === 200) {
        setUser({ ...user, profile: { ...user.profile, name: name } });
        closePopup();
      }
    } catch (error) {
      console.error('Error saving changes:', error);
    }
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
              <p className={`${styles.btn} ${styles.textLight}`} onClick={openPopup}>Set up Profile</p>
            </div>
            {showPopup && (
              <div className={styles.popup}>
                <div className={styles.popupContent}>
                  <span className={styles.close} onClick={closePopup}>&times;</span>
                  <h4>Edit Profile</h4>
                  <div className={styles.inputContainer}>
                    <input type="text" placeholder="" value={name} onChange={e => setName(e.target.value)} />
                    <label>Name</label>
                  </div>
                  <div className={styles.inputContainer}>
                    <input type="text" placeholder="" value={username} onChange={e => setUsername(e.target.value)} />
                    <label>Username</label>
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
          
          {activeTab === 'myPosts' && <MyPostsComponent userId={id}  />}
          {activeTab === 'highlights' && <MyHighlights />}
          {activeTab === 'media' && <MyMedia />}
          {activeTab === 'myLikes' && <MyLikesComponent userId={id} />}
        </>
      )}
    </div>
  );
};

export default ProfileComponent;
