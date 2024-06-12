import React from 'react';
import styles from "../styles/home.module.css";
import RightSideBar from '../Components/RightSideBar/RightSideBar';
import SideBar from '../Components/LeftSideBar/SideBar';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{ display: 'flex' }}>
            <SideBar />
            <div className={styles.main} style={{ flex: '35%', color: "white", textAlign: "center" }}>
                <Outlet />
            </div>
            <div className={styles.RightSideBar} style={{ flex: '15%', color: "white" ,marginRight:"8rem" ,marginLeft:"2rem" }}>
                <RightSideBar />
            </div>
        </div>
    );
}

export default Home;
