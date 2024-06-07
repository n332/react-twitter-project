import React from 'react';
import styles from "../styles/home.module.css"
import RightSideBar from '../Components/RightSideBar/RightSideBar';
import SearchingPosts from '../Components/Main/searching-posts';

const Home = () => {
    return (
        <div style={{ display: 'flex' }}>
            <div className={styles.LeftSideBar} style={{ flex: '25%',  color:"white",textAlign:"center"}}>
                LeftSideBar
            </div>
            <div className={styles.main} style={{ flex: '60%' ,color:"white",textAlign:"center"}}>
                <SearchingPosts></SearchingPosts>
            </div>
            <div className={styles.RightSideBar} style={{ flex: '25%',color:"white"}}>
                <RightSideBar></RightSideBar>
            </div>
        </div>
    );
}

export default Home;

