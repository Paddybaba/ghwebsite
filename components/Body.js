import React from 'react'
import styles from '../styles/Components.module.css'
import Slider from '../components/Slider'
import Notification from '../components/Notification'
import VideoGallery from '../components/VideoGallery'
import PhotoGallery from '../components/PhotoGallery'
const Body = () =>{
    return (
        <div className={styles.bodyContainer}>
            <div style={{zIndex: 1, width: '100%', marginLeft: 20}}>
                <h5 style={{color:'blue', marginTop:10}}>News and Events</h5>
                <div className={styles.bodySides}>
                <Notification />
                </div>
            </div>
            
            <div className={styles.bodyMain}>
            <Slider/>
            </div>
            <div className={styles.bodySides}>
            <Notification />            
            </div>
            <div style={{position: 'absolute', bottom:-20, left:'25%'}}>
                <VideoGallery/>
            </div>
            <div style={{position: 'absolute', bottom:-20, right:'25%'}}>
                <PhotoGallery/>
            </div>
        </div>
    )
}

export default Body;