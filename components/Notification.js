import React from 'react'
import styles from '../styles/Components.module.css'

const Notification = () =>{
    return (
        <div className={styles.scrollerContainer}>
            <p className={styles.notification}>Notification</p>
            <p className={styles.notification}>Notification</p>
            <p className={styles.notification}>Notification</p>
            <p className={styles.notification}>Notification</p>
        </div>
    )
}

export default Notification