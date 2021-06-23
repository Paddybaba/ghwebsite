import React from 'react'
import styles from '../styles/Components.module.css'

const Doctor = ({drname, qualifications, imgsrc}) =>{
    return(
        <div className={styles.docCard}>           
            <img src={imgsrc} alt="doctor"></img>
            <p className={styles.docName}>{drname}</p>
            <p className={styles.qualifications}>{qualifications}</p>
        </div>
    )
}
export default Doctor;