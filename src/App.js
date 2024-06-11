// App.jsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import { Provider } from 'react-redux';
import store from './Redux/store/store';
import styles from './styles/home.module.css';
import ProfileComponent from './Components/Profile/Profile';
import RightSideBar from './Components/RightSideBar/RightSideBar';
import SearchingPosts from './Components/Main/searching-posts';
import SideBar from './Components/LeftSideBar/SideBar';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div style={{ display: 'flex' }}>
          <div className={styles.LeftSideBar} style={{color:"white"}}>
            <SideBar />
          </div>
          <div className={styles.main} style={{color:"white",textAlign:"center"}}>
            <SearchingPosts></SearchingPosts>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/profile/:id' element={<ProfileComponent />} />
            </Routes>
          </div>
          <div className={styles.RightSideBar} style={{color:"white"}}>
            <RightSideBar></RightSideBar>
          </div>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
