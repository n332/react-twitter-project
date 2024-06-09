import React from 'react';
import styles from '../../styles/part.module.css'; 

const MyMedia = () => {
    return (
        <div className={styles.media}> 
            <h2 className={styles['me-con']}> 
                Lights, camera...
                attachments!
            </h2>
            <p className={`${styles['me-con']} ${styles.prag}`}> 
                When you post photo or videos, they will show up here.
            </p>
        </div>
    );
}

export default MyMedia;
