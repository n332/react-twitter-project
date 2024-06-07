import React from 'react';
import styles from "../../styles/trending.module.css";

const Trending = () => {
    return (
        <div className={styles.TrendingContainer}>
            <div className={styles.Header}>
                <h4 style={{marginTop: '10px', marginBottom: '10px'}}>What's happening</h4>
            </div>
            <div className={styles.containerItems}>
                <div className={styles.item}>
                    <li>
                        <button className={styles.Hashtag} onClick={() => console.log("nav to API")}>#Item</button>
                    </li>
                    <span>000 Posts</span><br/>
                </div>
                <div className={styles.item}>
                    <li>
                        <button className={styles.Hashtag} onClick={() => console.log("nav to API")}>#Item</button>
                    </li>
                    <span>000 Posts</span><br/>
                </div>
                <div className={styles.item}>
                    <li>
                        <button className={styles.Hashtag} onClick={() => console.log("nav to API")}>#Item</button>
                    </li>
                    <span>000 Posts</span><br/>
                </div>
            </div>
        </div>
    );
}

export default Trending;
