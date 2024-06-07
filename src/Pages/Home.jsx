import React from 'react';
import styles from "../styles/home.module.css"

const Home = () => {
    return (
        <div style={{ display: 'flex' }}>
            <div className={styles.LeftSideBar} style={{ flex: '25%',  color:"white",textAlign:"center"}}>
                LeftSideBar
            </div>
            <div className={styles.main} style={{ flex: '60%' ,color:"white",textAlign:"center"}}>
                Main
            </div>
            <div className={styles.RightSideBar} style={{ flex: '25%',color:"white",textAlign:"center"}}>
                RightSideBar
            </div>
        </div>
    );
}

export default Home;

