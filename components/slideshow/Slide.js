import styles from '../../styles/Slideshow.module.css'

export default function Slide () {
    return(
        <div className={`${styles.mySlide} ${styles.fade}`} id="slide">
            <div className={styles.numbertext}>1 / 3</div>
            <img src="doctors/dranup.jpg" alt="Image1" />
            <div className={styles.text}>Caption Text</div>
        </div>
    )
}