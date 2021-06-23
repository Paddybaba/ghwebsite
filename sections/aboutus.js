import styles from '../styles/MyCSS.module.css'
import MySlideshow from '../components/slideshow/MySlideshow'
export default function Aboutus(){
    return(
        <div>
        <div className={`${styles.about} ${styles.clearfix}`}>
            <div className={styles.row}>
                <h2>About Us</h2>
                <p>This Hospital was established in year 1992 by Dr. Prabhat Gupta S/o Dr. B.P. Gupta. His solo effort & administration along with the courteous contribution of Mrs. Veena Gupta and was named Gupta Nursing Home. There was a 10-bed facility at that time and was situated in Bastar Road, Dhamtari. Just after its inauguration, within a year it was further expanded with a 40-bed facility. This resulted in its Stature & Status upliftment.
Dr. Sumit Gupta & Dr. Aradhna Gupta further joined the link of cooperation which was started by Dr. Prabhat Gupta. He left no stone unturned in the direction of his vision of the Modernization of this hospital. Relocation of the hospital was excellently done in the year 2008. Currently, it's fully equipped with a 100-bed facility and is operated as Gupta Hospital which is now located in Ratnabandha Road, Dhamtari. It has Qualified Doctors, Trained Medical Staff, and Medical equipment to provide all necessary comfort & facilities to its patients. For the past 35 years, Gupta Family is providing good healthcare services to its town’s people with an incredible spirit of service.</p>
             </div>
            <div className={styles.row}>
                <div className={`${styles.column} ${styles.span1of2}`}>
                    <h3>Our Values</h3>
                    <ul>
                        <li>Transparency</li>
                        <li>Patient Safety</li>
                        <li>Patient Dignity</li>
                        <li>Social Responsibility</li>
                        <li>Passion for Excellence</li>
                        <li>Honesty and INtegrity</li>
                        <li>Teamwork</li>
                    </ul>
                </div>
                <div className={`${styles.column} ${styles.span1of2}`}>
                    {/* <div className={styles.photobooth}> */}
                        <MySlideshow/>        
                    
                </div>
            </div>
       </div>
       </div>
    )
}