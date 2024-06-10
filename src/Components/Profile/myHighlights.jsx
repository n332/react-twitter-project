import React from 'react';
import styles from '../../styles/part.module.css'; 

const MyHighlights = () => {
    return (
        <div className={styles.highlight}> 
            <h2 className={styles['hi-con']}>
                Highlight on your profile
            </h2>
            <p className={`${styles.prag} ${styles['hi-con']}`}>
                You must be subscribed to premium to highlight posts on your profile.
            </p>
            <p className={`${styles.btn} ${styles['text-dark']} ${styles.p3}`}> Subscribe to premium </p>
        </div>
    );
}

export default MyHighlights;
